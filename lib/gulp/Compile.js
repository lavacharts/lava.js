import { create as createBrowserSync } from "browser-sync";
import browserify from "browserify";
import * as chalk from "chalk";
import gulp, { dest } from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import streamify from "gulp-streamify";
import uglify from "gulp-uglify";
import { log } from "gulp-util";
import notifier from "node-notifier";
import tsify from "tsify";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";
import watchify from "watchify";
import args from "yargs";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

const browserSync = createBrowserSync();

let bundler = browserify({
  basedir: ".",
  debug: true,
  entries: ["index.ts"],
  cache: {},
  packageCache: {},
  transform: ["browserify-versionify"],
  plugins: ["tsify"]
});

function rebundle(prod = false) {
  return bundler
    .bundle()
    .on("error", err => {
      if (err instanceof SyntaxError) {
        log(chalk.red("Syntax Error"));
        log(err.message);
        // log(err.filename+":"+err.loc.line);
        log(err.codeFrame);
      } else {
        log(chalk.red("Error"), err.message);
      }
    })
    .pipe(source("lava.js"))
    .pipe(buffer())
    .pipe(gulpif(prod, sourcemaps.init({ loadMaps: true })))
    .pipe(gulpif(prod, rename("lava.min.js")))
    .pipe(gulpif(prod, streamify(uglify())))
    .pipe(gulpif(prod, sourcemaps.write("./")))
    .pipe(dest("dist"));
}

export default function compile(prod, watch, sync) {
  if (prod) {
    bundler.transform("stripify");
  }

  if (watch) {
    bundler = watchify(bundler);

    if (sync) {
      browserSync.init({
        proxy: "localhost:" + args.port || 8000
      });
    }

    bundler.on("update", () => {
      const msg = "lava.js re-bundling...";

      log(chalk.green(msg));

      notifier.notify({
        title: "Browserify",
        message: msg
      });

      rebundle(prod);
    });

    bundler.on("log", msg => {
      log(chalk.green(msg));

      if (sync) {
        browserSync.reload();
      }
    });
  }

  return rebundle(prod);
}

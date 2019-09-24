import * as Promise from "bluebird";
import { green, red } from "chalk";
import { readFileSync } from "fs";
import ghpages from "gh-pages";
import gulp from "gulp";
import esdoc from "gulp-esdoc";
import { log } from "gulp-util";
import watch from "gulp-watch";
import { cpus } from "os";
import yargs from "yargs";

import compile from "./lib/gulp/Compile";
import getChartTypes from "./lib/gulp/GetChartTypes";
import renderChart from "./lib/gulp/Renderer";

const esdocConfig = JSON.parse(readFileSync("./.esdoc.json"));

gulp.task("default", ["dev", "prod"]);

/**
 * LavaJs.js compilation tasks.
 *
 * The compile method accepts three boolean flags for the following signature:
 *   compile(prod, watch, sync)
 */
gulp.task("dev", () => compile(false, false, false));
gulp.task("prod", () => compile(true, false, false));
gulp.task("watch", () => compile(false, true, false));
gulp.task("sync", () => compile(false, true, true));

/**
 * Render a specific chart.
 *
 * Specify the type as the php class name
 *
 * Syntax:
 *   gulp render --type [ AreaChart | LineChart | GeoChart | etc... ]
 */
gulp.task("render", done => {
  const chartTypes = getChartTypes();
  const args = yargs
    .fail(msg => {
      throw new Error(msg);
    })
    .alias("t", "type")
    .describe("t", "choose the type of chart to render")
    .choices("t", chartTypes)
    .wrap(70)
    .help("help").argv;

  renderChart(args.t)
    .then(() => {
      done();
    })
    .catch(err => {
      console.log(err);
    });
});

/**
 * Render all of the available charts.
 *
 * The renders will be ran in batches equal to the number of processors.
 *
 * Syntax:
 *   gulp renderAll
 */
gulp.task("renderAll", done => {
  const batchSize = cpus().length;

  console.log("Rendering charts in batches of " + batchSize);

  Promise.map(
    getChartTypes(),
    chartType => {
      return renderChart(chartType);
    },
    { concurrency: batchSize }
  )
    .then(() => {
      done();
    })
    .catch(err => {
      console.log(err);
    });
});

/**
 * Get all available chart types
 *
 * Syntax:
 *   gulp charts
 */
gulp.task("charts", done => {
  console.log(getChartTypes());
  done();
});

/**
 * Watch the source files and regen docs when needed
 *
 * Syntax:
 *   gulp docs
 */
gulp.task("docs", done => {
  watch("./src/**/*.js", () => {
    gulp.src("./src").pipe(esdoc(esdocConfig));
  });
});

/**
 * Watch the source files and regen docs when needed
 *
 * Syntax:
 *   gulp ghpages
 */
gulp.task("ghpages", done => {
  ghpages.publish(
    "./examples",
    {
      src: ["./*", "../dist/lava.js"]
    },
    err => {
      log(red(err));
    }
  );
});

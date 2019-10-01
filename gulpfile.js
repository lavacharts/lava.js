const gulp = require("gulp");
const esdoc = require("gulp-esdoc");
const { log } = require("gulp-util");
const watch = require("gulp-watch");
const os = require("os");
const yargs = require("yargs");
const { getChartTypes, renderChart } = require("./lib/gulp");
const esdocConfig = require("./.esdoc.json");

gulp.task("default", "render");

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
      log(err);
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
  const batchSize = os.cpus().length;

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

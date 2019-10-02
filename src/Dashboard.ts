import Renderable from "./Renderable";

/**
 * Dashboard Class
 *
 * @class
 * @module    module:LavaJs/Dashboard
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2019, Kevin Hill
 * @license   MIT
 */
export default class Dashboard extends Renderable {
  bindings: any;

  /**
   * Create a new Dashboard
   *
   * @param {Object} json JSON object representing a Dashboard.
   */
  constructor(json: any) {
    json.type = "Dashboard";

    super(json);

    this.googleChart = new window.google.visualization.Dashboard(
      this.container
    );

    this.bindings = json.bindings;

    // this._attachBindings();
  }

  /**
   * Process and attach the bindings to the dashboard.
   *
   * @TODO: Needs to be modified and tested for the other types of bindings.
   */
  // private _attachBindings(): void {
  //   for (const binding of this.bindings) {
  //     const controlWraps = [];
  //     const chartWraps = [];

  //     for (const controlWrap of binding.controlWrappers) {
  //       controlWraps.push(new google.visualization.ControlWrapper(controlWrap));
  //     }

  //     for (const chartWrap of binding.chartWrappers) {
  //       chartWraps.push(new google.visualization.ChartWrapper(chartWrap));
  //     }

  //     this.googleChart.bind(controlWraps, chartWraps);
  //   }
  // }
}

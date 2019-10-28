import Drawable from "./Drawable";

type WrapperType = "control" | "chart";

export default class Dashboard extends Drawable {
  /**
   * Control to Chart bindings
   */
  protected bindings: any;

  /**
   * Create a new Dashboard
   *
   * @param {Object} json JSON object representing a Dashboard.
   */
  constructor(json: any) {
    json.type = "Dashboard";

    super(json);

    this.bindings = json.bindings;

    this.attachBindings();
  }

  public async draw(): Promise<void> {
    this.googleChart = new window.google.visualization.Dashboard(this
      .container as HTMLElement);

    this.googleChart.draw(this.data);

    return super.draw();
  }

  // public static wapper(wrapper: WrapperType, payload: any) {
  //   return new google.visualization.ControlWrapper(payload);
  // }

  // protected createWrapper(payload: any): google.visualization.ChartWrapper {
  //   return new google.visualization.ChartWrapper(payload);
  // }

  /**
   * Process and attach the bindings to the dashboard.
   *
   * @TODO: Needs to be modified and tested for the other types of bindings.
   */
  private attachBindings(): void {
    for (const binding of this.bindings) {
      const controlWraps = [];
      const chartWraps = [];

      for (const controlWrap of binding.controlWrappers) {
        controlWraps.push(new google.visualization.ControlWrapper(controlWrap));
      }

      for (const chartWrap of binding.chartWrappers) {
        chartWraps.push(new google.visualization.ChartWrapper(chartWrap));
      }

      this.googleChart.bind(controlWraps, chartWraps);
    }
  }
}

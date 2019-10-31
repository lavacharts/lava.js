import { ControlledChartBinding } from "./ControlledChartBinding";
import { Drawable } from "./Drawable";
import { GoogleFactory, onGoogleReady } from "./lib";
import { DashboardSpec } from "./types/dashboard";

export class Dashboard extends Drawable {
  public bindings: ControlledChartBinding[];

  public needsBindings: boolean;

  /**
   * Create a new Dashboard
   *
   * @param {Object} payload payload object representing a Dashboard.
   */
  constructor(payload: DashboardSpec) {
    payload.type = "Dashboard";

    super(payload);

    this.needsBindings = true;
    this.bindings = payload.bindings;
  }

  async draw(): Promise<void> {
    onGoogleReady(() => {
      this.googleChart = GoogleFactory("Dashboard", this.getContainer());

      if (this.needsBindings) {
        this.attachBindings();
      }

      this.googleChart.draw(this.data);
    });
  }

  /**
   * Process and attach the bindings to the dashboard.
   *
   * @TODO: Needs to be modified and tested for the other types of bindings.
   */
  private attachBindings(): void {
    this.debug(`Attaching bindings to ${this.id}`);

    for (const binding of this.bindings) {
      this.debug(binding);

      const controlledChart = binding.toArray();

      console.log(controlledChart);

      this.googleChart.bind(...controlledChart);
    }

    this.googleChart.draw(this.data);
  }
}

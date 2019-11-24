import { Binding } from "./Binding";
import { Drawable } from "./Drawable";
import { AsyncGoogleFactory } from "./google";
import { getContainer } from "./lib";

export class Dashboard extends Drawable {
  public bindings: Binding[];

  public needsBindings = true;

  constructor(payload: Dashboard) {
    super(payload);

    this.bindings = payload.bindings;
  }

  /**
   * Get the Google Class for creating a new {@link Dashboard} instance
   */
  public getGoogleConstructor(): "Dashboard" {
    return "Dashboard";
  }

  /**
   * Draw the {@link Dashboard}
   */
  public async draw(): Promise<void> {
    if ("initialData" in this) {
      await this.processInitialData();
    }

    this.googleChart = await AsyncGoogleFactory(
      this.getGoogleConstructor(),
      getContainer(this.containerId)
    );

    if (this.bindings.length > 0) {
      for (const binding of this.bindings) {
        this.googleChart.bind(
          await binding.getControlWraps(),
          await binding.getChartWraps()
        );
      }
    }

    this.googleChart.draw(this.data);
  }
}

declare namespace google.visualization {
  export class Gantt extends CoreChartBase {
    draw(data: DataTable | DataView, options: any): void;
  }

  export class Gauge extends CoreChartBase {
    draw(data: DataTable | DataView, options: any): void;
  }

  export class Sankey extends CoreChartBase {
    draw(data: DataTable | DataView, options: any): void;
  }

  export class WordTree extends CoreChartBase {
    draw(data: DataTable | DataView, options: any): void;
  }

  export interface Charts {
    load(version: string, packages: Record<string, any>): void;
    setOnLoadCallback(handler: Function): void;
  }
}

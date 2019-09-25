declare namespace google {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface GoogleChartConfig {
    language: string;
    packages: string[];
    mapsApiKey: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DataTable {
    //
  }

  export interface Google {
    charts: {
      load(version: string, config: any): any;
      setOnLoadCallback(callback: Function): any;
    };

    visualization: {
      arrayToDataTable(payload: any): DataTable;
      DataTable(): DataTable;
      DataTable(payload: any[] | object): DataTable;

      AnnotationChart(container: HTMLElement): any;
      AreaChart(container: HTMLElement): any;
      BarChart(container: HTMLElement): any;
      BubbleChart(container: HTMLElement): any;
      Calendar(container: HTMLElement): any;
      CandlestickChart(container: HTMLElement): any;
      ColumnChart(container: HTMLElement): any;
      ComboChart(container: HTMLElement): any;
      Gantt(container: HTMLElement): any;
      Gauge(container: HTMLElement): any;
      GeoChart(container: HTMLElement): any;
      Histogram(container: HTMLElement): any;
      LineChart(container: HTMLElement): any;
      PieChart(container: HTMLElement): any;
      Sankey(container: HTMLElement): any;
      ScatterChart(container: HTMLElement): any;
      SteppedAreaChart(container: HTMLElement): any;
      Table(container: HTMLElement): any;
      Timeline(container: HTMLElement): any;
      TreeMap(container: HTMLElement): any;
      WordTree(container: HTMLElement): any;
    };
  }
}

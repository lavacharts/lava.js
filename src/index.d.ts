declare namespace lavajs {
  // export interface MyGoogle extends google;

  export interface GoogleChartConfig {
    language: string;
    packages: string[];
    mapsApiKey: string;
  }

  type DataTable = google.visualization.DataTable;

  export interface Google {
    charts: {
      load(version: string, config: any): void;
      setOnLoadCallback(callback: Function): void;
    };

    visualization: {
      data: {
        join(
          data1: google.visualization.DataTable,
          data2: google.visualization.DataTable,
          keys: any,
          joinMethod: any,
          dt1Columns: any,
          dt2Columns: any
        ): any;
      };

      events: {
        addListener(chart: any, event: string, callback: Function): void;
      };

      arrayToDataTable(payload: any): DataTable;

      DataTable: google.visualization.DataTable;
      Dashboard: any;

      AnnotationChart(container: HTMLElement): any;
      AreaChart(container: HTMLElement): any;
      BarChart(container: HTMLElement): any;
      BubbleChart(container: HTMLElement): any;
      Calendar(container: HTMLElement): any;
      CandlestickChart(container: HTMLElement): any;
      ColumnChart(container: HTMLElement): any;
      ComboChart(container: HTMLElement): any;

      //#region Query

      // https://developers.google.com/chart/interactive/docs/reference#query
      Query: google.visualization.Query;
      QueryOptions: google.visualization.QueryOptions;
      QueryResponse: google.visualization.QueryResponse;

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

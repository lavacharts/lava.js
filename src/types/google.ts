export type GoogleDataTable = google.visualization.DataTable;

export type GoogleQuery = google.visualization.Query;
export type GoogleQueryOptions = google.visualization.QueryOptions;
export type GoogleQueryResponse = google.visualization.QueryResponse;

export type QueryTransformer = (query: GoogleQuery) => GoogleQuery;

export interface GoogleLoaderOptions {
  language: string;
  packages: string[];
  mapsApiKey?: string;
}

export interface Google {
  [K: string]: any;

  // charts: {
  //   load(version: string, config: any): void;
  //   setOnLoadCallback(callback: Function): void;
  // };

  visualization: {
    [K: string]: any;

    data: {
      join(
        data1: GoogleDataTable,
        data2: GoogleDataTable,
        keys: any,
        joinMethod: any,
        dt1Columns: any,
        dt2Columns: any
      ): GoogleDataTable;
    };

    events: {
      addListener(chart: any, event: string, callback: Function): void;
    };

    arrayToDataTable(payload: any): GoogleDataTable;
  };
}

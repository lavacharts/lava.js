export type Google = typeof google;

export type GoogleHandler = (google: Google) => void;

export type gvDataTable = google.visualization.DataTable;

export interface GoogleReadyHandler {
  googleReady: GoogleHandler;
}

export type QueryTransformer = (
  query: google.visualization.Query
) => google.visualization.Query;

export type DataQueryInterface = {
  url: string;
  opts?: google.visualization.QueryOptions;
  transformer?: QueryTransformer;
};

export type DataQueryFactory = (
  payload: DataQueryInterface
) => google.visualization.Query;

export interface GoogleLoaderOptions {
  language?: string;
  packages?: string[];
  mapsApiKey?: string;
}

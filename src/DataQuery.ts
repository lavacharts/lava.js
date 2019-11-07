import { makeDebugger } from "./lib";
import { RangeQuery } from "./types/datasources";
import { DataQueryInterface, QueryTransformer } from "./types/google";

const debug = makeDebugger("DataQuery");

/**
 * Used for loading remote data as a {@link DataTable}
 *
 * @see https://developers.google.com/chart/interactive/docs/reference#Query
 */
export class DataQuery {
  /**
   * Compose a DataQuery based on a URL to a Google Sheet
   *
   * Pass a Google Sheet ID and range in A1 notation
   * to create a URL to use with a [[DataQuery]]
   */
  public static createFromSheetRange({
    sheetId,
    range
  }: RangeQuery): DataQuery {
    const base = "https://docs.google.com/spreadsheets/d";

    return new DataQuery(`${base}/${sheetId}/gviz/tq?range=${range}`);
  }

  /**
   * create a new DataQuery based on the given payload
   *
   * @throws {DataError}
   */
  public static create(payload: DataQueryInterface): DataQuery {
    if (!payload.url) {
      throw new Error(
        '"url" is a mandatory parameter for creating a DataQuery.'
      );
    }

    const query = new DataQuery(payload.url);

    if (typeof payload.opts === "object") {
      query.opts = payload.opts as google.visualization.QueryOptions;
    }

    if (typeof payload.transformer === "function") {
      query.transformer = payload.transformer as QueryTransformer;
    }

    return query;
  }

  /**
   * Create a new DataQuery for a DataTable
   *
   * @throws {DataError}
   */
  constructor(
    public url: string,
    public opts?: google.visualization.QueryOptions,
    public transformer?: QueryTransformer
  ) {
    this.opts = { sendMethod: "auto" };
    this.transformer = query => query;

    if (typeof transformer === "function") {
      this.transformer = transformer;
    }

    if (opts) {
      this.opts = opts;
    }
  }

  /**
   * Send the query and fetch the DataTable
   */
  public async getDataTable(): Promise<google.visualization.DataTable> {
    debug("Sending DataQuery");

    const response = await this.send();

    debug("Response received");
    debug(response);

    return response.getDataTable();
  }

  /**
   * Send the DataQuery
   */
  public send(): Promise<google.visualization.QueryResponse> {
    let query = new window.google.visualization.Query(this.url, this.opts);

    if (typeof this.transformer === "function") {
      query = this.transformer(query);
    }

    return new Promise((resolve, reject) => {
      debug(`Requesting ${this.url}`);

      query.send((response: google.visualization.QueryResponse) => {
        if (response.isError()) {
          reject(response);
        }

        resolve(response);
      });
    });
  }
}

import { lava } from "./LavaJs";
import { makeDebugger, newGoogleClass } from "./lib/utils";

import type { QueryTransformer, RangeQuery } from "./types";

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
   * Create a new DataQuery for a DataTable
   *
   * @throws {Error}
   */
  constructor(
    public url: string,
    public opts: google.visualization.QueryOptions = { sendMethod: "auto" },
    public transformer?: QueryTransformer
  ) {
    this.url = url;
    this.opts = opts;

    if (transformer) {
      this.transformer = transformer;
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
  public async send(): Promise<google.visualization.QueryResponse> {
    const google = await lava.getLoader().loadGoogle();

    let query = await newGoogleClass(google, "Query", this.url, this.opts);

    if (this.transformer) {
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

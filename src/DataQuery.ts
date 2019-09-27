import { callbackify } from "util";

type QueryTap = (
  query: google.visualization.Query
) => google.visualization.Query;

export interface DataQueryObj {
  url: string;
  opts: google.visualization.QueryOptions;
  tap?: QueryTap;
}

/**
 * Used for loading remote data as a {@link DataTable}
 *
 * @see https://developers.google.com/chart/interactive/docs/reference#Query
 * @class
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2019, Kevin Hill
 * @license   http://opensource.org/licenses/MIT MIT
 */
export default class DataQuery {
  /**
   * Callback for accessing the query object before send
   *
   * @see https://developers.google.com/chart/interactive/docs/reference#Query
   * @see https://developers.google.com/chart/interactive/docs/querylanguage
   */
  private query!: google.visualization.Query;

  /**
   * Create a new DataQuery for a DataTable
   *
   * @throws {DataError}
   */
  constructor(
    private url: string,
    private opts: google.visualization.QueryOptions = { sendMethod: "auto" },
    private query?: QueryTap
  ) {
    // super(url, opts || { sendMethod: "auto" });
    this.tap = query;
  }

  /**
   * Configure the DataQuery
   *
   * @throws {DataError}
   */
  configure(payload: DataQueryObj): any {
    if (!url) {
      throw new DataError(
        '"url" is a mandatory parameter for configuring a DataQuery.'
      );
    }

    this.url = payload.url;
    this.opts = payload.opts;
    this.tap = payload.tap;
  }

  /**
   * Tap the query object to modify as needed.
   */
  tap(callback: QueryTap): void {
    this.query = callback(this.query);
  }

  //noinspection JSUnusedGlobalSymbols
  /**
   * Send the DataQuery
   *
   * @public
   * @return {Promise}
   */
  async send(): Promise<google.visualization.QueryResponse> {
    let query = new window.google.visualization.Query(this.url, this.opts);

    if (this.query) {
      query = this.query(query);
    }

    return new Promise((resolve, reject) => {
      query.send((response: google.visualization.QueryResponse) => {
        if (response.isError()) {
          reject(response);
        }

        resolve(response);
      });
    });
  }
}

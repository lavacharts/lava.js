import { DataError } from "./Errors";
import { QueryTap } from "./types";

export interface DataQueryTmpl {
  url: string;
  opts?: google.visualization.QueryOptions;
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
  public tap: QueryTap = (
    query: google.visualization.Query
  ): google.visualization.Query => query;

  public opts: google.visualization.QueryOptions = { sendMethod: "auto" };

  /**
   * Create a new DataQuery for a DataTable
   *
   * @throws {DataError}
   */
  constructor(
    public url: string,
    opts?: google.visualization.QueryOptions,
    tap?: QueryTap
  ) {
    if (tap) {
      this.tap = tap;
    }

    if (opts) {
      this.opts;
    }
  }

  /**
   * create a new DataQuery based on the given payload
   *
   * @throws {DataError}
   */
  static create(payload: DataQueryTmpl): DataQuery {
    if (!payload.url) {
      throw new DataError(
        '"url" is a mandatory parameter for creating a DataQuery.'
      );
    }

    const query = new DataQuery(payload.url);

    if (typeof payload.opts === "object") {
      query.opts = payload.opts as google.visualization.QueryOptions;
    }

    if (typeof payload.tap === "function") {
      query.tap = payload.tap as QueryTap;
    }

    return query;
  }

  //noinspection JSUnusedGlobalSymbols
  /**
   * Send the DataQuery
   *
   * @public
   * @return {Promise}
   */
  async send(): Promise<google.visualization.QueryResponse> {
    const query = new window.google.visualization.Query(this.url, this.opts);

    return new Promise((resolve, reject) => {
      this.tap(query).send((response: google.visualization.QueryResponse) => {
        if (response.isError()) {
          reject(response);
        }

        resolve(response);
      });
    });
  }
}

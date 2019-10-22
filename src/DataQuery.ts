import { Debugger } from "debug";

import { DataError } from "./Errors";
import { getLogger } from "./lib/logger";
import { DataQueryInterface } from "./types";
import {
  GoogleQueryOptions,
  GoogleQueryResponse,
  QueryTransformer
} from "./types/google";

/**
 * Used for loading remote data as a {@link DataTable}
 *
 * @see https://developers.google.com/chart/interactive/docs/reference#Query
 */
export default class DataQuery {
  private debug: Debugger;

  /**
   * Create a new DataQuery for a DataTable
   *
   * @throws {DataError}
   */
  constructor(
    public url: string,
    public opts?: GoogleQueryOptions,
    public transformer?: QueryTransformer
  ) {
    this.debug = getLogger().extend("DataQuery");

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
   * create a new DataQuery based on the given payload
   *
   * @throws {DataError}
   */
  public static create(payload: DataQueryInterface): DataQuery {
    if (!payload.url) {
      throw new DataError(
        '"url" is a mandatory parameter for creating a DataQuery.'
      );
    }

    const query = new DataQuery(payload.url);

    if (typeof payload.opts === "object") {
      query.opts = payload.opts as GoogleQueryOptions;
    }

    if (typeof payload.transformer === "function") {
      query.transformer = payload.transformer as QueryTransformer;
    }

    return query;
  }

  /**
   * Send the DataQuery
   */
  public send(): Promise<GoogleQueryResponse> {
    let query = new window.google.visualization.Query(this.url, this.opts);

    if (typeof this.transformer === "function") {
      query = this.transformer(query);
    }

    return new Promise((resolve, reject) => {
      this.debug(`Requesting ${this.url}`);

      query.send(response => {
        if (response.isError()) {
          reject(response);
        }

        resolve(response);
      });
    });
  }
}

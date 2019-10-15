import { DataError } from "./Errors";
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
  public transformer: QueryTransformer;

  /**
   * Create a new DataQuery for a DataTable
   *
   * @throws {DataError}
   */
  constructor(
    public url: string,
    public opts?: GoogleQueryOptions,
    transformer?: QueryTransformer
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
   * create a new DataQuery based on the given payload
   *
   * @throws {DataError}
   */
  public static create(payload: DataQuery): DataQuery {
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
    const query = new window.google.visualization.Query(this.url, this.opts);

    return new Promise((resolve, reject) => {
      this.transformer(query).send(response => {
        if (response.isError()) {
          reject(response);
        }

        resolve(response);
      });
    });
  }
}

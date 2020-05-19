import { RangeQuery } from "./types/datasources";
import { QueryTransformer } from "./types/google";
export declare class DataQuery {
    url: string;
    opts: google.visualization.QueryOptions;
    transformer?: QueryTransformer | undefined;
    static createFromSheetRange({ sheetId, range }: RangeQuery): DataQuery;
    constructor(url: string, opts?: google.visualization.QueryOptions, transformer?: QueryTransformer | undefined);
    getDataTable(): Promise<google.visualization.DataTable>;
    send(): Promise<google.visualization.QueryResponse>;
}

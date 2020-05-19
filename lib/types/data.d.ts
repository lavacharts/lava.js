import { QueryTransformer } from "./google";
export interface DataQueryOptions {
    url: string;
    opts: google.visualization.QueryOptions;
    transformer?: QueryTransformer;
}

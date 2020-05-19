import type { Dashboard } from "../Dashboard";
import type { DataQuery } from "../DataQuery";
import { RangeQuery } from "../types/datasources";
export declare function instanceOfRangeQuery(object: any): object is RangeQuery;
export declare function instanceOfDataQuery(object: any): object is DataQuery;
export declare function instanceOfDashboard(object: any): object is Dashboard;

import type { Dashboard } from "../Dashboard";
import type { DataQuery } from "../DataQuery";
import { RangeQuery } from "../types/datasources";

export function instanceOfRangeQuery(object: any): object is RangeQuery {
  return "sheetId" in object && "range" in object;
}

export function instanceOfDataQuery(object: any): object is DataQuery {
  return "send" in object && "getDataTable" in object;
}

export function instanceOfDashboard(object: any): object is Dashboard {
  return "draw" in object && "bindings" in object;
}

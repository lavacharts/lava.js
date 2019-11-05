import { RangeQuery } from "./datasources";

export function instanceOfRangeQuery(object: any): object is RangeQuery {
  return "sheetId" in object && "range" in object;
}

import { DataQuery } from "../DataQuery";

/**
 * Sets the data for the chart by creating a new DataTable
 */
export async function createDataTable(
  payload: any
): Promise<google.visualization.DataTable> {
  if (payload instanceof DataQuery) {
    return await payload.getDataTable();
  }
  // If a function is received, then create an new DataTable and pass it to the
  // function for user modifications.
  if (typeof payload === "function") {
    return payload(new window.google.visualization.DataTable());
  }
  // If an Array is received, then attempt to use parse with arrayToDataTable.
  if (Array.isArray(payload)) {
    return window.google.visualization.arrayToDataTable(payload);
  }
  // Since Google compiles their classes, we can't use instanceof to check since
  // it is no longer called a "DataTable" (it's "gvjs_P" but that could change...)
  // If this check passes, then it already is a DataTable
  if (typeof payload.getTableProperties === "function") {
    return payload;
  }
  // If the payload is from the php class JoinedDataTable->toJson(), then create
  // two new DataTables and join them with the defined options.
  if (Array.isArray(payload.data)) {
    return window.google.visualization.data.join(
      new window.google.visualization.DataTable(payload.data[0]),
      new window.google.visualization.DataTable(payload.data[1]),
      payload.keys,
      payload.joinMethod,
      payload.dt1Columns,
      payload.dt2Columns
    );
  }
  // If a php DataTable->toJson() payload is received, with formatted columns,
  // then payload.data will be defined. Use this to create the DataTable.
  if (typeof payload.data === "object") {
    // eslint-disable-next-line no-param-reassign
    payload = payload.data;
  }
  // If we reach here, then it must be standard JSON for creating a DataTable.
  return new window.google.visualization.DataTable(payload);
}

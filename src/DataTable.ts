import { getType } from "./lib";

/**
 * Sets the data for the chart by creating a new DataTable
 *
 * @param {Object|Function|Array} payload Json representation of a DataTable
 */
export function createDataTable(payload: any): google.visualization.DataTable {
  // If a function is received, then create an new DataTable and pass it to the
  // function for user modifications.
  if (getType(payload) === "Function") {
    return payload(new window.google.visualization.DataTable());
  }

  // If an Array is received, then attempt to use parse with arrayToDataTable.
  if (getType(payload) === "Array") {
    return window.google.visualization.arrayToDataTable(payload);
  }

  // Since Google compiles their classes, we can't use instanceof to check since
  // it is no longer called a "DataTable" (it's "gvjs_P" but that could change...)
  // If this check passes, then it already is a DataTable
  if (getType(payload.getTableProperties) === "Function") {
    return payload;
  }

  // If the payload is from the php class JoinedDataTable->toJson(), then create
  // two new DataTables and join them with the defined options.
  if (getType(payload.data) === "Array") {
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
  if (getType(payload.data) === "Object") {
    // eslint-disable-next-line no-param-reassign
    payload = payload.data;
  }

  // If we reach here, then it must be standard JSON for creating a DataTable.
  return new window.google.visualization.DataTable(payload);
}

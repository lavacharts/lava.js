/* globals document, google */

/**
 * @ignore
 * @typedef {Object} VizProps
 * @property {String} class Visualization class.
 * @property {String} package Visualization package.
 * @property {Number} version Visualization version.
 */

/**
 * Collection of utility functions used throughout the modules.
 *
 * @class
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2019, Kevin Hill
 * @license   MIT
 */
export default class Utils {
  /**
   * Returns the type of object, with a capital first letter.
   *
   * @param {Object} object
   * @return {String} The type of the given object
   */
  static getType(object) {
    const type = Object.prototype.toString.call(object);

    return type.replace("[object ", "").replace("]", "");
  }

  /**
   * Simple Promise for the DOM to be ready.
   *
   * @return {Promise}
   */
  static domLoaded(): Promise<void> {
    return new Promise(resolve => {
      if (
        document.readyState === "interactive" ||
        document.readyState === "complete"
      ) {
        resolve();
      } else {
        document.addEventListener("DOMContentLoaded", resolve);
      }
    });
  }

  /**
   * Method for attaching events to objects.
   * @link http://stackoverflow.com/a/3150139 Credit to Alex V.
   *
   * @param {Object}   target      Target object to attach the event to.
   * @param {String}   type        Type of event.
   * @param {Function} callback    Callback to fire when the event happens.
   * @param {Boolean}  eventReturn
   */
  static addEvent(
    target: any,
    type: string,
    callback: Function,
    eventReturn: boolean
  ): void {
    if (target === null || typeof target === "undefined") {
      return;
    }

    if (target.addEventListener) {
      target.addEventListener(type, callback, eventReturn);
    } else if (target.attachEvent) {
      target.attachEvent("on" + type, callback);
    } else {
      target["on" + type] = callback;
    }
  }

  /**
   * Returns the visualization properties of the given chart type.
   *
   * @param {String} chartType Type of chart for lookup.
   * @return {VizProps}
   */
  static getVizProps(chartType: string): any {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const propertyMap = require("../resources/visualization-map.json");

    return propertyMap[chartType];
  }

  /**
   * Sets the data for the chart by creating a new DataTable
   *
   * @public
   * @param {Object|Function|Array} payload Json representation of a DataTable
   * @return {DataTable}
   */
  static createDataTable(payload: any): DataTable {
    // If a function is received, then create an new DataTable and pass it to the
    // function for user modifications.
    if (Utils.getType(payload) === "Function") {
      return payload(new google.visualization.DataTable());
    }

    // If an Array is received, then attempt to use parse with arrayToDataTable.
    if (Utils.getType(payload) === "Array") {
      return google.visualization.arrayToDataTable(payload);
    }

    // Since Google compiles their classes, we can't use instanceof to check since
    // it is no longer called a "DataTable" (it's "gvjs_P" but that could change...)
    // If this check passes, then it already is a DataTable
    if (Utils.getType(payload.getTableProperties) === "Function") {
      return payload;
    }

    // If the payload is from the php class JoinedDataTable->toJson(), then create
    // two new DataTables and join them with the defined options.
    if (Utils.getType(payload.data) === "Array") {
      return google.visualization.data.join(
        new google.visualization.DataTable(payload.data[0]),
        new google.visualization.DataTable(payload.data[1]),
        payload.keys,
        payload.joinMethod,
        payload.dt2Columns,
        payload.dt2Columns
      );
    }

    // If a php DataTable->toJson() payload is received, with formatted columns,
    // then payload.data will be defined. Use this to create the DataTable.
    if (Utils.getType(payload.data) === "Object") {
      // eslint-disable-next-line no-param-reassign
      payload = payload.data;
    }

    // If we reach here, then it must be standard JSON for creating a DataTable.
    return new google.visualization.DataTable(payload);
  }
}

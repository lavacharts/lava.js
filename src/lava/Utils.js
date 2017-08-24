/* globals document, google */

/**
 * Returns the type of object, with a capital first letter.
 *
 * @param {Object} object
 * @return {String} The type of the given object
 */
export function getType(object) {
    let type = Object.prototype.toString.call(object);

    return type.replace('[object ','').replace(']','');
}

/**
 * Simple Promise for the DOM to be ready.
 *
 * @return {Promise}
 */
export function domLoaded() {
    return new Promise(resolve => {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            resolve();
        } else {
            document.addEventListener('DOMContentLoaded', resolve);
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
 * @param {boolean}  eventReturn
 */
export function addEvent(target, type, callback, eventReturn)
{
    if (target === null || typeof target === 'undefined') {
        return;
    }

    if (target.addEventListener) {
        target.addEventListener(type, callback, eventReturn);
    }
    else if(target.attachEvent) {
        target.attachEvent("on" + type, callback);
    }
    else {
        target["on" + type] = callback;
    }
}

/**
 * Returns the visualization properties of the given chart type.
 *
 * @param {String} chartType Type of chart for lookup.
 * @typedef {Object} VizProps
 * @property {String} class Visualization class.
 * @property {String} package Visualization package.
 * @property {number} version Visualization version.
 * @return {VizProps}
 */
export function getVizProps(chartType) {
    const propertyMap = require('resources/visualization-map.json');

    return propertyMap[chartType];
}

/**
 * Sets the data for the chart by creating a new DataTable
 *
 * @public
 * @param {object|function|array} payload Json representation of a DataTable
 * @return {DataTable}
 */
export function createDataTable(payload) {
    // If a function is received, then create an new DataTable and pass it to the
    // function for user modifications.
    if (getType(payload) === 'Function') {
        return payload(new google.visualization.DataTable());
    }

    // If an Array is received, then attempt to use parse with arrayToDataTable.
    if (getType(payload) === 'Array') {
        return google.visualization.arrayToDataTable(payload);
    }

    // Since Google compiles their classes, we can't use instanceof to check since
    // it is no longer called a "DataTable" (it's "gvjs_P" but that could change...)
    // If this check passes, then it already is a DataTable
    if (getType(payload.getTableProperties) === 'Function') {
        return payload;
    }

    // If a php DataTable->toJson() payload is received, with formatted columns,
    // then payload.data will be defined, and used as the DataTable
    if (getType(payload.data) === 'Object') {
        payload = payload.data;

        // TODO: handle formats better...
        return;
    }

    // If the payload is from the php class JoinedDataTable->toJson(), then create
    // two new DataTables and join them with the defined options.
    if (getType(payload.data) === 'Array') {
        return google.visualization.data.join(
            new google.visualization.DataTable(payload.data[0]),
            new google.visualization.DataTable(payload.data[1]),
            payload.keys,
            payload.joinMethod,
            payload.dt2Columns,
            payload.dt2Columns
        );
    }

    // If we reach here, then it must be standard JSON for creating a DataTable.
    return new google.visualization.DataTable(payload);
}
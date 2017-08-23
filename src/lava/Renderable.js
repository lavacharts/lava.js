/**
 * Renderable class
 *
 * @typedef {Object} DataTable
 * @external "google.visualization.DataTable"
 * @see   {@link https://developers.google.com/chart/interactive/docs/reference#DataTable|DataTable Class}
 *
 * @typedef {Function}  Renderable
 * @property {String}   label     - Label for the chart.
 * @property {String}   type      - Type of chart.
 * @property {Object}   element   - Html element in which to render the chart.
 * @property {String}   class     - Type of Google chart class.
 * @property {String}   packages  - Type of Google chart package to load.
 * @property {String}   uuid      - Unique identification string for the chart.
 * @property {boolean}  pngOutput - Should the chart be displayed as a PNG.
 * @property {Object}   gchart    - Google chart object.
 * @property {Object}   options   - Configuration options for the chart.
 * @property {Array}    formats   - Formatters to apply to the chart data.
 * @property {Function} draw      - Renders the chart.
 * @property {DataTable} data     - DataTable for the chart.
 * @property {Function|Array|Object}         setData - Sets the data to be used by the chart.
 */
import EventEmitter from 'events';
import getProperties from './VisualizationMap';
import {getType, dataTableFactory} from './Utils'
import {ElementIdNotFound} from './Errors';

/**
 * Chart module
 *
 * @class     Chart
 * @module    lava/Chart
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, KHill Designs
 * @license   MIT
 */
export default class Renderable extends EventEmitter
{
    /**
     * Chart Class
     *
     * This is the javascript version of a lavachart with methods for interacting with
     * the google chart and the PHP lavachart output.
     *
     * @param {object} json
     * @constructor
     */
    constructor(json) {
        super();

        this.data      = null;
        this.gchart    = null;
        this.render    = null;
        this.type      = json.type;
        this.label     = json.label;
        this.options   = json.options;
        this.elementId = json.elementId || json.elemId || json.containerId;

        /**
         * The Element in which the Renderable will be drawn.
         *
         * @public
         * @type {Element}
         */
        this.element = document.getElementById(this.elementId);

        if (! this.element) {
            throw new ElementIdNotFound(this.elementId);
        }
    }

    /**
     * The google.visualization class needed for rendering.
     *
     * @public
     * @return {String} google.visualization class name
     */
    get class() {
        return getProperties(this.type).class;
    }

    /**
     * The google.visualization package needed for rendering.
     *
     * @public
     * @return {String} google.visualization package name
     */
    get packages() {
        return getProperties(this.type).package;
    }

    /**
     * Unique identifier for the Renderable.
     *
     * @public
     * @return {String} Unique identifier for the Renderable.
     */
    get uuid() {
        return this.type + '::' + this.label;
    }

    /**
     * Draws the chart with the preset data and options.
     *
     * @public
     * @return {void}
     */
    draw() {
        this.gchart.draw(this.data, this.options);
    }

    /**
     * Sets the data for the chart by creating a new DataTable
     *
     * @public
     * @external "google.visualization.DataTable"
     * @see   {@link https://developers.google.com/chart/interactive/docs/reference#DataTable|DataTable Class}
     * @param {Object|Function|Array} payload Json representation of a DataTable
     * @return {void}
     */
    setData(payload) {
        // If a function is received, then create an new DataTable and pass it to the
        // function for user modifications.
        if (getType(payload) === 'Function') {
            this.data = payload(new google.visualization.DataTable());

            return;
        }

        // If an Array is received, then attempt to use parse with arrayToDataTable.
        if (getType(payload) === 'Array') {
            this.data = google.visualization.arrayToDataTable(payload);

            return;
        }

        // Since Google compiles their classes, we can't use instanceof to check since
        // it is no longer called a "DataTable" (it's "gvjs_P" but that could change...)
        // If this check passes, then it already is a DataTable
        if (getType(payload.getTableProperties) === 'Function') {
            this.data = payload;

            return;
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
            this.data = google.visualization.data.join(
                new google.visualization.DataTable(payload.data[0]),
                new google.visualization.DataTable(payload.data[1]),
                payload.keys,
                payload.joinMethod,
                payload.dt2Columns,
                payload.dt2Columns
            );

            return;
        }

        // If we reach here, then it must be standard JSON for creating a DataTable.
        this.data = new google.visualization.DataTable(payload);
    }

    /**
     * Sets the options for the chart.
     *
     * @public
     * @param {Object} options
     * @return {void}
     */
    setOptions(options) {
        this.options = options;
    }

    /**
     * Attach event emitters onto the google chart to relay the events
     * forward onto the lavachart.
     *
     * The Google Chart and DataTable objects will be passed to the listener
     * callback for interaction.
     *
     * @private
     * @return {void}
     */
    _attachEventRelays() {
        let defaultEvents = [
            'ready',
            'select',
            'error',
            'onmouseover',
            'onmouseout'
        ];

        defaultEvents.forEach(event => {
            google.visualization.events.addListener(
                this.gchart, event, () => this.emit(event, this.gchart, this.data)
            );
        });
    }
}

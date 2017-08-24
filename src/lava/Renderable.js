import EventEmitter from 'events';
import {ElementIdNotFound} from './Errors';
import {getVizProps, createDataTable} from './Utils'

/**
 * Renderable Class
 *
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, Kevin Hill
 * @license   MIT
 */
export default class Renderable extends EventEmitter
{
    constructor(json) {
        super();

        /**
         * DataTable for the Chart / Dashboard
         *
         * @external {DataTable} https://developers.google.com/chart/interactive/docs/reference#DataTable
         */
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
        return getVizProps(this.type).class;
    }

    /**
     * The google.visualization package needed for rendering.
     *
     * @public
     * @return {String} google.visualization package name
     */
    get packages() {
        return getVizProps(this.type).package;
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
        this.data = createDataTable(payload)
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

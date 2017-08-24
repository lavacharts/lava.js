import forIn from 'lodash/forIn';
import Renderable from './Renderable';

/**
 * Chart Class
 *
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, Kevin Hill
 * @license   MIT
 */
export default class Chart extends Renderable
{
    /**
     * Create a new Chart.
     *
     * @param {Object} json JSON object representing a Chart.
     */
    constructor (json) {
        super(json);

        //TODO: should php defined events be appendable to the std events?
        //this.events  = typeof json.events === 'object' ? json.events : null;
        this.pngOutput = Boolean(json.pngOutput);

        /**
         * Any dependency on "google" must be within the _setRenderer scope.
         *
         * @return {void}
         */
        this.render = () => {
            this.gchart = new google.visualization[this.class](this.element);

            this.setData(json.data || json.datatable);

            this._attachEventRelays();

            if (json.formats) {
                this._applyFormats();
            }

            // if (this.events) {
            //     this._attachEvents();
            // }

            this.draw();

            if (this.pngOutput) {
                this._drawPng();
            }
        };
    }

    /**
     * Draws the chart as a PNG instead of the standard SVG
     *
     * @private
     * @link https://developers.google.com/chart/interactive/docs/printing Printing PNG Charts
     * @return {void}
     */
    _drawPng() {
        let img = document.createElement('img');
            img.src = this.gchart.getImageURI();

        this.element.innerHTML = '';
        this.element.appendChild(img);
    }

    /**
     * Apply the formats to the DataTable
     *
     * @private
     * @param {Object[]} formats Array of format objects to apply.
     * @return {void}
     */
    _applyFormats(formats) {
        if (! formats) {
            formats = this.formats;
        }

        for (let format of formats) {
            let formatter = new google.visualization[format.type](format.options);

            console.log(`[lava.js] Column index [${format.index}] formatted with:`, formatter);

            formatter.format(this.data, format.index);
        }
    }

    /**
     * Attach the defined chart event handlers.
     *
     * @private
     * @return {void}
     */
    _attachEvents() {
        forIn(this.events, (callback, event) => {
            let context = window;
            let func = callback;

            if (typeof callback === 'object') {
                context = context[callback[0]];
                func = callback[1];
            }

            console.log(`[lava.js] The "${this.uuid}::${event}" event will be handled by "${func}" in the context`, context);

            /**
             * Set the context of "this" within the user provided callback to the
             * chart that fired the event while providing the datatable of the chart
             * to the callback as an argument.
             */
            google.visualization.events.addListener(this.gchart, event, () => {
                let callback = context[func].bind(this.gchart);

                callback(this.data);
            });
        });
    }
}

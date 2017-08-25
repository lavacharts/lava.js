import EventEmitter from 'events';
import Utils from './Utils'
import LavaJs from './LavaJs'

/**
 * The {@link Renderable} class is the base for {@link Chart}s and {@link Dashboard}s
 * to share common methods between the two types.
 *
 *
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, Kevin Hill
 * @license   MIT
 */
export default class Renderable extends EventEmitter
{
    /**
     * Create a new Renderable
     *
     * @param {Object} json
     */
    constructor(json) {
        super();

        /**
         * DataTable for the {@link Chart} / {@link Dashboard}.
         *
         * @type {DataTable}
         */
        this.data = undefined;

        /**
         * Google chart object created once the {@link Chart} / {@link Dashboard}
         * has been rendered.
         *
         * @type {Object}
         */
        this.gchart = undefined;

        /**
         * Type of {@link Renderable}.
         *
         * @type {String}
         */
        this.type = json.type;

        /**
         * Unique label for the {@link Chart} / {@link Dashboard}.
         *
         * @type {String}
         */
        this.label = json.label;

        /**
         * Configurable options for the {@link Chart} / {@link Dashboard}.
         *
         * @type {Array}
         */
        this.options = json.options;

        /**
         * Element ID of the DOM node in which to render the {@link Chart} / {@link Dashboard}.
         *
         * @type {String}
         */
        this.elementId = json.elementId || json.elemId || json.containerId;

        /**
         * The Element in which the Renderable will be drawn.
         *
         * @public
         * @type {HTMLElement}
         */
        this.element = document.getElementById(this.elementId);

        // If the ID of the element was not found, throw an error.
        if (! this.element) {
            throw new LavaJs.Errors.ElementIdNotFound(this.elementId);
        }

        /**
         * Any dependency on "google" must be within the render scope.
         *
         * @return {void}
         */
        this.render = () => {
            this._setup(json);

            this.setData(json.data || json.datatable)
                .then(() => {
                    this.draw();
                }).then(() => {
                    if (typeof this._postDraw === 'function') {
                        console.log(`[lava.js] Running ${this.uuid}#postDraw`);

                        this._postDraw();
                    }
                });
        };
    }

    /**
     * The google.visualization class needed for rendering.
     *
     * @public
     * @return {String} Google visualization class name.
     */
    get class() {
        return Utils.getVizProps(this.type).class;
    }

    /**
     * The google.visualization package needed for rendering.
     *
     * @public
     * @return {String} Google visualization package name.
     */
    get packages() {
        return Utils.getVizProps(this.type).package;
    }

    /**
     * Unique identifier for the {@link Chart} / {@link Dashboard}.
     *
     * @public
     * @return {String} Unique identifier of the {@link Renderable}.
     */
    get uuid() {
        return this.type + '::' + this.label;
    }

    /**
     * Draws the {@link Chart} / {@link Dashboard} with the predefined data and options.
     *
     * @public
     * @return {Promise}
     */
    draw() {
        this.gchart.draw(this.data, this.options);

        return Promise.resolve();
    }

    /**
     * Sets the data for the {@link Renderable}.
     *
     * @public
     * @param {Object|Function|Array|DataQuery|DataTable} payload Source of data
     * @return {Promise}
     */
    setData(payload) {
        return new Promise(resolve => {
            if (payload instanceof LavaJs.DataQuery) {
                console.log(`[lava.js] Sending DataQuery for ${this.uuid}`);

                payload.send().then(response => {
                    console.log(`[lava.js] DataQuery for ${this.uuid} complete.`);

                    resolve(response.getDataTable());
                });
            } else {
                resolve(Utils.createDataTable(payload));
            }
        }).then(data => {
            this.data = data;
        });
    }

    /**
     * Set the options for the {@link Renderable}.
     *
     * @public
     * @param {Object} options
     * @return {Renderable}
     */
    setOptions(options) {
        this.options = options;

        return this;
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

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
         * Unique label for the {@link Chart} / {@link Dashboard}.
         *
         * @type {String}
         */
        this.label = json.label;

        /**
         * Type of {@link Renderable}.
         *
         * @type {String}
         */
        this.type = json.type;

        /**
         * Configurable options.
         *
         * @type {Array}
         */
        this.options = json.options;

        /**
         * Formatters for the DataTable
         *
         * @type {Array}
         */
        this.formats = json.formats;

        /**
         * Element ID of the DOM node for the container.
         *
         * @private
         * @type {String}
         */
        this._elementId = json.elementId || json.elemId || json.containerId;

        /**
         * The source of the DataTable, to be used in setData().
         *
         * @private
         * @type {*}
         */
        this._dataSrc = json.data || json.datatable;

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
         * The HTMLElement in which the Renderable will be drawn.
         *
         * @public
         * @type {HTMLElement}
         */
        this.container = document.getElementById(this._elementId);
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

    //noinspection JSUnusedGlobalSymbols
    /**
     * Run the setup and draw the chart.
     *
     * Any dependency on "google" must be within the run() scope.
     *
     * This will be called after the static loaded has completed
     * registering window.google
     *
     * @return {Promise}
     */
    run() {
        if (! this.container) {
            throw new LavaJs.Errors.ElementIdNotFound(this._elementId);
        }

        this._setup();

        this._attachEventRelays();

        return this.setData(this._dataSrc)
            .then(() => {
                if (this.formats) {
                    this.applyFormats();
                }

                this.draw();
            }).then(() => {
                if (typeof this._postDraw === 'function') {
                    console.log(`[lava.js] Running ${this.uuid}.postDraw()`);

                    this._postDraw();
                }
            });
    };

    /**
     * Draws the {@link Chart} / {@link Dashboard} with the predefined data and options.
     *
     * @public
     */
    draw() {
        this.gchart.draw(this.data, this.options);
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

            if (payload.formats) {
                this.applyFormats(payload.formats);
            }
        });
    }

    /**
     * Apply the formats to the DataTable
     *
     * @public
     * @param {?Array.<Object>} formats
     */
    applyFormats(formats) {
        if (formats) {
            this.formats = formats;
        }

        for (let format of this.formats) {
            let formatter = new google.visualization[format.type](format.options);

            console.log(
                `[lava.js] Formatting ${this.uuid}.`,
                `Column [${format.index}] now formatted with:`,
                formatter
            );

            formatter.format(this.data, format.index);
        }
    }

    /**
     * Attach event emitters onto the google chart to relay the events
     * forward onto the lavachart.
     *
     * The Google Chart and DataTable objects will be passed to the listener
     * callback for interaction.
     *
     * @protected
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

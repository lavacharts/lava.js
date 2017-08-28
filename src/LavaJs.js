/* jshint browser:true */
/* globals google */

import EventEmitter from 'events';
import Utils from './Utils';
import Errors from './Errors'
import Chart from './Chart';
import Dashboard from './Dashboard';
import DataQuery from './DataQuery';
import Renderable from './Renderable';

/**
 * Google Chart API wrapper library
 *
 * This module can be used as a standalone, browser based library, or in
 * conjunction with the PHP library, <a href="https://github.com/kevinkhill/lavacharts">Lavacharts</a>.
 *
 * @class
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, Kevin Hill
 * @license   http://opensource.org/licenses/MIT MIT
 */
export default class LavaJs extends EventEmitter
{
    //noinspection JSUnusedGlobalSymbols
    /**
     * Version of the LavaJs.js module
     *
     * @public
     * @type {String}
     */
    static get VERSION() {
        return '__VERSION__';
    }

    /**
     * Version of the Google charts API to load
     *
     * @public
     * @type {String}
     */
    static get GOOGLE_API_VERSION() {
        return 'current';
    }

    /**
     * Urls to Google's static loader
     *
     * @public
     * @type {String}
     */
    static get GOOGLE_LOADER_URL() {
        return 'https://www.gstatic.com/charts/loader.js';
    }

    /**
     * Static accessor for the {@link Chart} class
     *
     * @class
     * @type {Chart}
     */
    static get Chart() {
        return Chart;
    }

    /**
     * Static accessor for the {@link Dashboard} class
     *
     * @class
     * @type {Dashboard}
     */
    static get Dashboard() {
        return Dashboard;
    }

    /**
     * Static accessor for the {@link DataQuery} class
     *
     * @class
     * @type {DataQuery}
     */
    static get DataQuery() {
        return DataQuery;
    }

    /**
     * Throwable errors for the LavaJs module
     *
     * @class
     * @type {Errors}
     */
    static get Errors() {
        return Errors;
    }

    /**
     * Create a new instance of the LavaJs library
     *
     * @param {Object} newOptions
     */
    constructor(newOptions) {
        super();

        //noinspection JSUnusedGlobalSymbols
        /**
         * A flag that will be set once the library is ready.
         *
         * @type {Boolean}
         */
        this.isReady = false;

        /**
         * JSON object of config items
         *
         * @public
         * @type {Object}
         */
        this.options = newOptions || require('./resources/options.json');

        /**
         * Set of visualization packages for {@link Chart}s and {@link Dashboard}s
         *
         * @private
         * @type {Set.<String>}
         */
        this._packages = new Set();

        /**
         * Array of charts and dashboards stored in the module
         *
         * @private
         * @type {Map.<Renderable>}
         */
        this._volcano = new Map();

        /**
         * Ready callback to be called when the module is finished running.
         *
         * @private
         * @type {Function}
         */
        this._readyCallback = undefined;
    }

    /**
     * Flag that will be true once Google's Static Loader is in page.
     *
     * @public
     * @return {Boolean}
     */
    get googleIsLoaded() {
        const scripts = document.getElementsByTagName('script');

        for (let script of scripts) {
            if (script.src === this.GOOGLE_LOADER_URL) {
                return true;
            }
        }
    }

    //noinspection JSUnusedGlobalSymbols,JSMethodCanBeStatic
    /**
     * Create a new {@link DataQuery} for a {@link Renderable}
     *
     * If a String is passed, then a new {@link DataQuery} is created with no options.
     * If an Object is passed, then the query must be defined by the object.
     *
     * @param {String|Object} url
     * @return {DataQuery}
     */
    query(url) {
        return new DataQuery(url);
    }

    //noinspection JSMethodCanBeStatic
    /**
     * Static method for creating new Charts and Dashboards from a JSON definition.
     *
     * The JSON payload can come from Lavacharts or manually if used
     * as an independent library.
     *
     * @public
     * @param  {Object} json object representing a Chart or Dashboard.
     * @return {Chart|Dashboard}
     */
    create(json) {
        console.log(`Creating a new ${json.type}:`, json);

        if (json.type === 'Dashboard') {
            return new LavaJs.Dashboard(json);
        }

        return new LavaJs.Chart(json);
    }

    /**
     * Stores or creates then stores a {@link Renderable} within the module.
     *
     * @todo If the library has ran, and is ready, loading new charts will force a redraw of all the currently drawn charts.
     *
     * @public
     * @param {Object|Renderable} renderable
     * @return {Chart|Dashboard} The {@link Chart} / {@link Dashboard} that was just stored.
     */
    store(renderable) {
        if (renderable instanceof Renderable === false) {
            renderable = this.create(renderable);
        }

        console.log(`[lava.js] Storing ${renderable.uuid}`);

        this._addPackages(renderable.packages);

        this._volcano.set(renderable.label, renderable);

        //if (this.isReady) {
        //    this.redrawAll();
        //}

        return renderable;
    }

    /**
     * Retrieve a {@link Chart} / {@link Dashboard} from storage.
     *
     * The {@link Chart} object has the user defined properties such as data, options, formats, etc.
     *
     * The Google Chart object is available as ".gchart" from the returned LavaChart.
     * It can be used to access any of the available methods such as
     * getImageURI() or getChartLayoutInterface().
     *
     * See https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart#methods
     * for some examples relative to LineCharts.
     *
     * @public
     * @param  {String} label
     * @throws {LavaJs.Errors.RenderableNotFound}
     * @return {Chart|Dashboard}
     */
    get(label) {
        if (this._volcano.has(label) === false) {
            throw new LavaJs.Errors.RenderableNotFound(label);
        }

        return this._volcano.get(label);
    }

    /**
     * Initializes the library by loading google to the window.
     *
     * @return {Promise}
     */
    init() {
        return this._loadGoogle().then(() => {
            console.log('[lava.js] Google is ready.');
        });
    }

    /**
     * Runs the LavaJs.js module
     *
     * @public
     * @emits {ready}
     * @return {Promise}
     */
    run() {
        console.log('[lava.js] Running...');
        console.log('[lava.js] Loading options:', this.options);

        this._attachRedrawHandler();

        return this
            .init()
            .then(() => {
                this._volcano.forEach(renderable => {
                    console.log(`[lava.js] Rendering ${renderable.uuid}`);

                    renderable.render();
                });
            }).then(() => {
                console.log('[lava.js] Ready; Firing "ready" event.');

                this.isReady = true;

                this.emit('ready');

                if (typeof this._readyCallback === 'function') {
                    console.log('[lava.js] Running lava.ready(callback);');

                    this._readyCallback();
                }
            });
    }

    /**
     * Assigns a callback for when the charts are ready to be interacted with.
     *
     * This is used to wrap calls to lava.loadData() or lava.loadOptions()
     * to protect against accessing charts that aren't loaded yet
     *
     * @public
     * @param {Function} callback
     * @throws {LavaJs.Errors.InvalidCallback}
     * @return {void}
     */
    ready(callback) {
        if (typeof callback !== 'function') {
            throw new LavaJs.Errors.InvalidCallback(callback);
        }

        this._readyCallback = callback.bind(this);
    }

    //noinspection JSUnusedGlobalSymbols
    /**
     * Loads new data into the chart and redraws.
     *
     *
     * Used with an AJAX call to a PHP method returning DataTable->toJson(),
     * a chart can be dynamically update in page, without reloads.
     *
     * @public
     * @param {String} label
     * @param {String} json
     * @param {?Function} callback
     * @return {void}
     */
    loadData(label, json, callback) { //TODO: test this with formats
        const chart = this.get(label);

        chart.setData(json);

        if (typeof json.formats !== 'undefined') {
            chart.applyFormats(json.formats);
        }

        chart.draw();

        if (typeof callback === 'function') {
            callback(chart.gchart, chart.data);
        }
    }

    //noinspection JSUnusedGlobalSymbols
    /**
     * Loads new options into a chart and redraws.
     *
     *
     * Used with an AJAX call, or javascript events, to load a new array of options into a chart.
     * This can be used to update a chart dynamically, without reloads.
     *
     * @public
     * @param {String} label
     * @param {String} json
     * @param {?Function} callback
     * @return {void}
     */
    loadOptions(label, json, callback) { //TODO: test this
        const chart = this.get(label);

        chart.setOptions(json);
        chart.draw();

        if (typeof callback === 'function') {
            callback(chart.gchart, chart.data);
        }
    }

    /**
     * Redraws all of the registered charts on screen.
     *
     * This method is attached to the window resize event with debouncing
     * to make the charts responsive to the browser resizing.
     *
     * @return {void}
     */
    redrawAll() {
        if (this._volcano.size === 0) {
            console.log(`[lava.js] Nothing to redraw.`);

            return false;
        }

        console.log(`[lava.js] Redrawing ${this._volcano.size} renderables.`);

        this._volcano.forEach(renderable => {
            console.log(`[lava.js] Redrawing ${renderable.uuid}`);

            renderable.draw();
        });

        return true;
    }

    /**
     * Adds to the list of packages that Google needs to load.
     *
     * @private
     * @param {String|String[]} packages Single or array of package names to add.
     * @return {void}
     */
    _addPackages(packages) {
        if (typeof packages === 'string') {
            this._packages.add(packages);
        }

        if (Utils.getType(packages) === 'Array') {
            packages = new Set(packages);

            this._packages = new Set([this._packages, ...packages]);
        }
    }

    /**
     * Attach a listener to the window resize event for redrawing the charts.
     *
     * @private
     * @return {void}
     */
    _attachRedrawHandler() {
        if (this.options.responsive === true) {
            let debounced = null;

            Utils.addEvent(window, 'resize', () => {
                // let redraw = this.redrawAll().bind(this);

                clearTimeout(debounced);

                debounced = setTimeout(() => {
                    console.log('[lava.js] Window re-sized, redrawing...');

                    // redraw();
                    this.redrawAll()
                }, this.options.debounce_timeout);
            });
        }
    }

    /**
     * Load the Google Static Loader and resolve the promise when ready.
     *
     * @private
     * @return {Promise}
     */
    _loadGoogle() {
        return new Promise(resolve => {
            console.log('[lava.js] Resolving Google...');

            if (this.googleIsLoaded) {
                console.log('[lava.js] Static loader found, initializing window.google');

                return this._googleChartLoader(resolve);
            }

            console.log('[lava.js] Static loader not found, appending to head');

            return this
                ._addGoogleScriptToHead()
                .then(() => {
                    return this._googleChartLoader(resolve);
                });
        });
    }

    /**
     * Runs the Google Chart Loader using the passed Promise resolver as
     * the setOnLoadCallback function.
     *
     * @private
     * @param {Promise.resolve} resolve Promise resolver.
     */
    _googleChartLoader(resolve) {
        const config = {
            language: this.options.locale
        };

        if (this._packages.size > 0) {
            config.packages = [...this._packages];
        } else {
            config.packages = ['corechart'];
        }

        if (this.options.maps_api_key !== '') {
            config.mapsApiKey = this.options.maps_api_key;
        }

        console.log('[lava.js] Loading Google with config:', config);

        google.charts.load(LavaJs.GOOGLE_API_VERSION, config);

        google.charts.setOnLoadCallback(resolve);
    }

    /**
     * Create a new script tag for the Google Static Loader
     *
     * @private
     * @returns {Promise}
     */
    _addGoogleScriptToHead() {
        return new Promise(resolve => {
            const script = document.createElement('script');

            script.type = 'text/javascript';
            script.async = true;
            script.src = LavaJs.GOOGLE_LOADER_URL;
            script.onload = script.onreadystatechange = event => {
                event = event || window.event;

                if (event.type === 'load' || (/loaded|complete/.test(script.readyState))) {
                    script.onload = script.onreadystatechange = null;

                    resolve();
                }
            };

            document.head.appendChild(script);
        });
    }
}
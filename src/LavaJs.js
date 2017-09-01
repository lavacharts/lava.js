/* jshint browser:true */
/* globals google */

//import 'babel-polyfill';
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
     * Version of the LavaJs module
     *
     * @type {String}
     */
    static get VERSION() {
        return '__VERSION__';
    }

    /**
     * Version of the Google charts API to load
     *
     * @type {String}
     */
    static get GOOGLE_API_VERSION() {
        return 'current';
    }

    /**
     * Urls to Google's static loader
     *
     * @type {String}
     */
    static get GOOGLE_LOADER_URL() {
        return 'https://www.gstatic.com/charts/loader.js';
    }

    /**
     * Static accessor for the {@link Renderable} class
     *
     * @class
     * @type {Renderable}
     */
    static get Renderable() {
        return Renderable;
    }

    /**
     * Static accessor for the {@link Chart} class
     *
     * @type {Chart}
     */
    static get Chart() {
        return Chart;
    }

    /**
     * Static accessor for the {@link Dashboard} class
     *
     * @type {Dashboard}
     */
    static get Dashboard() {
        return Dashboard;
    }

    /**
     * Static accessor for the {@link DataQuery} class
     *
     * @type {DataQuery}
     */
    static get DataQuery() {
        return DataQuery;
    }

    /**
     * Throwable errors for the LavaJs module
     *
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

        /**
         * JSON object of config items
         *
         * @public
         * @type {Object}
         */
        this.options = newOptions || require('../resources/options.json');

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

    //noinspection JSMethodCanBeStatic
    /**
     * Flag that will be true once window.google is available in page.
     *
     * @public
     * @return {Boolean}
     */
    get googleIsLoaded() {
        return typeof window.google !== 'undefined';
    }

    /**
     * Flag that will be true once Google's Static Loader is in page.
     *
     * @public
     * @return {Boolean}
     */
    get googleLoaderInPage() {
        const scripts = document.getElementsByTagName('script');

        for (const script of scripts) {
            if (script.src === this.GOOGLE_LOADER_URL) {
                return true;
            }
        }
    }

    /**
     * Initializes the library by loading google to the window.
     *
     * @public
     * @return {Promise}
     */
    init() {
        if (this.googleIsLoaded) {
            return Promise.resolve(window.google);
        }

        return this
            ._loadGoogle()
            .then(() => {
                console.log('[lava.js] Google is ready:');

                return window.google;
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
        console.log(`[lava.js] v${LavaJs.VERSION} Running...`);
        console.log('[lava.js] Loading options:', this.options);

        this._attachRedrawHandler();

        return this
            .init()
            .then(() => {
                const runPromises = [];

                this._volcano.forEach(renderable => {
                    console.log(`[lava.js] Rendering ${renderable.uuid}`);

                    runPromises.push(
                        renderable.run()
                    );
                });

                return Promise.all(runPromises);
            }).then(() => {
                console.log('[lava.js] Ready!');

                this.emit('ready');

                if (typeof this._readyCallback === 'function') {
                    this._readyCallback();
                }

                return this;
            });
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
        console.log(`[lava.js] Creating a new ${json.type}:`, json);

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
        if (renderable instanceof LavaJs.Renderable === false) {
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

        chart.options = json;
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
     * Load the Google Static Loader and resolve the promise when ready.
     *
     * @private
     * @return {Promise}
     */
    _loadGoogle() {
        console.log('[lava.js] Resolving Google...');

        if (this.googleLoaderInPage) {
            console.log('[lava.js] Static loader found, initializing window.google');

            return this._googleChartLoader();
        }

        console.log('[lava.js] Static loader not found, appending to head');

        return this
            ._addGoogleScriptToHead()
            .then(() => {
                return this._googleChartLoader();
            });
    }

    /**
     * Runs the Google Chart Loader using the passed Promise resolver as
     * the setOnLoadCallback function.
     *
     * @private
     * @return {Promise}
     */
    _googleChartLoader() {
        return new Promise(resolve => {
            const config = {
                language: this.options.locale
            };

            config.packages = this._packages.size > 0 ? [...this._packages] : ['corechart'];

            if (this.options.maps_api_key !== '') {
                config.mapsApiKey = this.options.maps_api_key;
            }

            console.log('[lava.js] Loading Google with config:', config);

            google.charts.load(LavaJs.GOOGLE_API_VERSION, config);

            google.charts.setOnLoadCallback(resolve);
        });
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
}
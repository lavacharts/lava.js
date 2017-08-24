import Renderable from './Renderable';

/**
 * Dashboard Class
 *
 * @class
 * @module    module:LavaJs/Dashboard
 * @author    Kevin Hill <kevinkhill@gmail.com>
 * @copyright (c) 2017, Kevin Hill
 * @license   MIT
 */
export default class Dashboard extends Renderable
{
    /**
     * Create a new Dashboard.
     *
     * @param {Object} json JSON object representing a Dashboard.
     */
    constructor(json) {
        json.type = 'Dashboard';

        super(json);

        this.bindings = json.bindings;

        /**
         * Any dependency on "google" must be within the _setRenderer scope.
         */
        this.render = () => {
            this.setData(json.datatable);

            this.gchart = new google.visualization.Dashboard(this.element);

            this._attachBindings();

            if (this.events) {
                this._attachEvents();
            }

            this.draw();

            this.on('ready', resolve);
        };
    }

    // @TODO: this needs to be modified for the other types of bindings.

    /**
     * Process and attach the bindings to the dashboard.
     *
     * @private
     */
    _attachBindings() {
        for (let binding of this.bindings) {
            let controlWraps = [];
            let chartWraps = [];

            for (let controlWrap of binding.controlWrappers) {
                controlWraps.push(
                    new google.visualization.ControlWrapper(controlWrap)
                );
            }

            for (let chartWrap of binding.chartWrappers) {
                chartWraps.push(
                    new google.visualization.ChartWrapper(chartWrap)
                );
            }

            this.gchart.bind(controlWraps, chartWraps);
        }
    }
}

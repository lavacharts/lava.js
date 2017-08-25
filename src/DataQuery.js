import Utils from './Utils';

export default class DataQuery
{
    /**
     * Create a new DataQuery for a DataTable
     *
     * @see https://developers.google.com/chart/interactive/docs/reference#Query
     */
    constructor(url) {
        this.url     = url;
        this.opts    = {};
        this.preSend = function(){};

        if (typeof url === 'object') {
            this.configure(url)
        }
    }

    /**
     * Configure the DataQuery
     *
     * @param {Object}   config         Configuration object for the DataQuery
     * @param {String}   config.url     Corresponds to "dataSourceUrl" in Google's docs
     * @param {Object}   config.opts    Corresponds to "opt_options" in Google's docs
     * @param {Function} config.preSend The current query is passed for modification before sending
     */
    configure({url, opts={}, preSend=()=>{}}) {
        if (! url) {
            throw new LavaJs.Errors.DataQueryError(
                '"url" is a mandatory parameter for configuring a DataQuery.'
            );
        }

        this.url = url;
        this.opts = opts;
        this.preSend = preSend;
    }

    /**
     * Send the DataQuery
     *
     * @public
     * @return {Promise}
     */
    send() {
        let query = new google.visualization.Query(this.url, this.opts);

        if (this.beforeSend) {
            query = this.preSend(query);
        }

        return new Promise(resolve => {
            query.send(response => {
                resolve(response);
            });
        });
    }
}
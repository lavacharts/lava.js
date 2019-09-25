export default class DataQuery {
    url: any;
    opts: {};
    query: undefined;
    constructor(url: any);
    configure({ url, opts, query }: {
        url: any;
        opts?: {} | undefined;
        query: any;
    }): any;
    send(): Promise<unknown>;
}

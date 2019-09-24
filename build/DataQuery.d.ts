export default class DataQuery {
    constructor(url: any);
    configure({ url, opts, query }: {
        url: any;
        opts?: {} | undefined;
        query: any;
    }): void;
    send(): Promise<unknown>;
}

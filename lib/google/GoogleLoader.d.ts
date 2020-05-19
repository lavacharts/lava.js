import { TinyEmitter } from "tiny-emitter";
import { Chart } from "../Chart";
import { Dashboard } from "../Dashboard";
import { Drawable } from "../Drawable";
import { Google, GoogleLoaderOptions } from "../types/google";
export declare class GoogleLoader extends TinyEmitter {
    static API_VERSION: string;
    static LOADER_URL: string;
    private language;
    private mapsApiKey;
    private packages;
    private $window;
    constructor({ language, mapsApiKey }: GoogleLoaderOptions);
    get googleIsDefined(): boolean;
    get scriptTagInPage(): boolean;
    get config(): GoogleLoaderOptions;
    register<T extends Drawable>(drawable: Chart | Dashboard): void;
    loadGoogle(): Promise<Google>;
    private injectGoogleStaticLoader;
}

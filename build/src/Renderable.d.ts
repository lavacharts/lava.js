/// <reference types="node" />
import EventEmitter from "events";
export default class Renderable extends EventEmitter {
    label: any;
    type: any;
    options: any;
    formats: any;
    _elementId: any;
    _dataSrc: any;
    data: undefined;
    gchart: undefined;
    container: HTMLElement | null;
    _preDraw: any;
    _postDraw: any;
    constructor(json: object);
    readonly class: any;
    readonly packages: any;
    readonly uuid: string;
    draw(): void;
    run(): Promise<void>;
    _setup(): void;
    setData(payload: any): Promise<void>;
    applyFormats(formats: any): void;
    _attachEventRelays(): void;
}

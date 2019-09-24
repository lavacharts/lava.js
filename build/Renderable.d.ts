/// <reference types="node" />
import EventEmitter from "events";
export default class Renderable extends EventEmitter {
    constructor(json: any);
    readonly class: any;
    readonly packages: any;
    readonly uuid: string;
    draw(): void;
    run(): Promise<void>;
    setData(payload: any): Promise<void>;
    applyFormats(formats: any): void;
    _attachEventRelays(): void;
}

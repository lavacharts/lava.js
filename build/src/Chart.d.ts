import Renderable from "./Renderable";
import { RenderableTmpl } from "./types";
export default class Chart extends Renderable {
    png: boolean;
    events: any;
    constructor(payload: RenderableTmpl);
    private setup;
    private postDraw;
    private drawPng;
    _attachEvents(): void;
}

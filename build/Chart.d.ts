import Renderable from "./Renderable";
export default class Chart extends Renderable {
    png: boolean;
    events: any;
    constructor(json: any);
    _setup(): void;
    _postDraw(): void;
    _drawPng(): void;
    _attachEvents(): void;
}

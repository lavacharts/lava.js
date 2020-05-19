import { Drawable } from "./Drawable";
import { ChartClasses, ChartTypes } from "./types/chart";
export declare class Chart extends Drawable {
    png: boolean;
    readonly type: ChartTypes;
    static create(chart: Chart): Chart;
    constructor(chart: Chart);
    getGoogleConstructor(): ChartClasses;
    draw(): Promise<void>;
    private replaceWithPng;
}

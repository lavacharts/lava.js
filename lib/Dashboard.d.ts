import { Binding } from "./Binding";
import { Drawable } from "./Drawable";
export declare class Dashboard extends Drawable {
    bindings: Binding[];
    needsBindings: boolean;
    constructor(payload: Dashboard);
    getGoogleConstructor(): "Dashboard";
    draw(): Promise<void>;
}

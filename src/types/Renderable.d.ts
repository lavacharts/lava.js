import EventEmitter from "events";

declare namespace LavaJs {
  export interface Renderable extends EventEmitter {
    label: string;
    type: string;
    options: any;
    formats: any;
    _elementId: string;
    _dataSrc: any;
    data: LavaJs.DataTable;
    gchart: Record<string, any>;
    container: HTMLElement;
    class(): string;
    packages(): string;
    uuid(): string;
    draw(): void;
    run(): Promise<any>;
    setData(payload: any): Promise<any>;
    applyFormats(formats: any): any;
    _attachEventRelays(): void;
  }
}

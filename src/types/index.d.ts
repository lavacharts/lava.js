import "./DataTable";
import "./Renderable.d.ts";

import EventEmitter from "events";

interface LavaJs extends EventEmitter {
  VERSION(): string;
  GOOGLE_API_VERSION(): string;
  GOOGLE_LOADER_URL(): string;
  Renderable(): LavaJs.Renderable;
  Chart(): LavaJs.Chart;
  Dashboard(): LavaJs.Dashboard;
  DataQuery(): any;
  Errors(): any;
  create(json: any): any;
  get(label: any): any;
  googleIsLoaded(): boolean;
  googleLoaderInPage(): boolean;
  init(): any;
  query(url: any): any;
  run(): any;
  store(renderable: any): any;
  redrawAll(): void;
  loadData(label: string, json: object, callback: Function): any;
  loadOptions(label: string, json: object, callback: Function): any;
  _addPackages(packages: string[]): any;
  _loadGoogle(): void;
  _googleChartLoader(): void;
  _addGoogleScriptToHead(): void;
  _attachRedrawHandler(): void;
}

declare namespace LavaJs {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface LavaJsConfig {
    //
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Chart {
    //
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Dashboard {
    //
  }

  interface LavaJsConstructor {
    new (options: LavaJsConfig): LavaJs;
  }
}

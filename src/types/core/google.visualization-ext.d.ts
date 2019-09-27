import "google.visualization";

declare namespace google.visualization {
  // export default google.visualization;

  export function load(
    visualization: string,
    version: string,
    packages: any
  ): void;
  export function setOnLoadCallback(handler: Function): void;
  export function setOnLoadCallback(handler: () => void): void;

  export interface Charts {
    load(version: string, packages: Record<string, any>): void;
    setOnLoadCallback(handler: Function): void;
  }
}

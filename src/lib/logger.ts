export class Logger {
  public grouped(msg: string, group: Function): void {
    console.group(msg);
    // Run `console.log`s in the callback
    group();
    console.groupEnd();
  }

  public log(msg: string, ...args: any[]): void {
    console.log(this.format(msg), ...args);
  }

  public err(msg: string, ...args: any[]): void {
    console.error(this.format(msg), ...args);
  }

  private format(msg: string): string {
    return `[lava.js] ${msg}`;
  }
}

const fmtMsg = (msg: string): string => `[lava.js] ${msg}`;

export function start(msg: string): void {
  console.group(fmtMsg(msg)); //@TODO
}

export function end(): void {
  console.groupEnd();
}

export function log(msg: string, ...args: any[]): void {
  console.log(fmtMsg(msg), ...args);
}

export function err(msg: string, ...args: any[]): void {
  console.error(fmtMsg(msg), ...args);
}

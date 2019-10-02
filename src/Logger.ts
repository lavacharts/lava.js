const fmtMsg = (msg: string): string => `[lava.js] ${msg}`;
export const log = (msg: string): void => console.log(fmtMsg(msg));
export const err = (msg: string): void => console.error(fmtMsg(msg));

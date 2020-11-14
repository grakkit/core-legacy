declare function atob(data: string): string;
declare function btoa(data: string): string;
declare function clearInterval(handle?: number): void;
declare function clearTimeout(handle?: number): void;
declare const core: import('./core').core;
declare const global: any;
declare const server: import('./classes').obServer;
declare function setInterval(handler: string | Function, timeout?: number, ...argumentz: any[]): number;
declare function setTimeout(handler: string | Function, timeout?: number, ...argumentz: any[]): number;
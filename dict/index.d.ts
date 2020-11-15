declare function atob (data: string): string;
declare function btoa (data: string): string;
declare function clearInterval (handle?: number): void;
declare function clearTimeout (handle?: number): void;

declare const console: {
   assert(condition?: boolean, ...data: any[]): void;
   clear(): void;
   count(label?: string): void;
   countReset(label?: string): void;
   debug(...data: any[]): void;
   dir(item?: any, options?: any): void;
   error(...data: any[]): void;
   group(...data: any[]): void;
   groupCollapsed(...data: any[]): void;
   groupEnd(): void;
   info(...data: any[]): void;
   log(...data: any[]): void;
   time(label?: string): void;
   timeEnd(label?: string): void;
   timeLog(label?: string, ...data: any[]): void;
   warn(...data: any[]): void;
};

declare const core: typeof import('./../index').index;
declare const global: any;
declare const server: import('./classes').obServer;
declare function setInterval (handler: string | Function, timeout?: number, ...argumentz: any[]): number;
declare function setTimeout (handler: string | Function, timeout?: number, ...argumentz: any[]): number;
declare function toString (object: any): string;

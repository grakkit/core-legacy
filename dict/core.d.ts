import { types } from './types';
import { events } from './events';
import { imports } from './imports';
import { Command, CommandMap, File, Player, Plugin, PluginManager } from './classes';

/** Stage: 1 */
/** The best thing that's ever happened to minecraft, change my mind. */
export interface core {
   /** Stage: 3 */
   /** A stand-in for circular references. */
   circular: () => void;
   /** Stage: 3 */
   /** A utility function used for recursive operations. */
   chain: (base: any, modifier: (object: any, chain: () => {}) => void) => void;
   /** Stage: 3 */
   /** Registers a custom command to the server with the given options. */
   command: (
      options: {
         name: string;
         error?: string;
         aliases?: string[];
         execute?: (player: Player, ...args: string[]) => void;
         fallback?: string;
         permission?: string;
         tabComplete?: (player: Player, ...args: string[]) => string[];
      }
   ) => void;
   /** Stage: 3 */
   /** The main polyglot context. */
   context: any;
   /** Stage: 3 */
   /** Returns a persistent data object linked to the given path. */
   data: (...path: string[]) => any;
   /** Stage: 2 */
   /** Formats common server error messages */
   error: (error: string) => string;
   /** Stage: 3 */
   /** Evaluates JS code. */
   eval: (code: string) => any;
   /** Stage: 3 */
   /** Registers event listeners to the server. */
   event: typeof events.event;
   /** Stage: 3 */
   /** Used by modules to export their code. */
   export: (object: any) => void;
   /** Stage: 3 */
   /** Make a GET request to the given URL. */
   fetch: (
      from: string
   ) => {
      /** Stage: 3 */
      /** Attempts to parse the output content as JSON. */
      json: () => any;
      /** Stage: 3 */
      /** Returns the raw output content. */
      read: () => string;
      /** Stage: 3 */
      /** Returns an input stream for this request's URL. */
      stream: () => any;
      /** Stage: 3 */
      /** Attempts to parse the output content as a ZIP file and unzip the contents to the given path. */
      unzip: (to: any) => core$file;
   };
   /** Stage: 3 */
   /** Returns an object with various utility methods for operating on the filesystem. */
   file: (...path: string[]) => core$file;
   /** Stage: 3 */
   /** Imports a module, prefixed with `@`, or a file relative to the current origin. */
   import: typeof imports.import;
   /** Stage: 2 */
   /** Initializes the grakkit core. */
   init: () => void;
   /** Stage: 3 */
   /** The server's plugin manager. */
   manager: PluginManager;
   module: {
      /** Stage: 3 */
      /** Performs the given `action` on a module and informs the `player` on the results. */
      action: (player: Player, option: string, key: string) => void;
      /** Stage: 3 */
      /** Downloads and registers a module's latest release to the server. */
      add: (key: string) => void;
      /** Stage: 3 */
      /** Deletes a module from the server. */
      delete: (key: string) => void;
      /** Stage: 3 */
      /** Generates typescript references for all installed modules. */
      dict: () => void;
      /** Stage: 3 */
      /** Downloads a module's latest release to the server and returns that release's tag name. */
      download: (key: string) => string;
      /** Stage: 3 */
      /** Returns the info on the latest release of a module. */
      latest: (
         key: string
      ) => {
         name: string;
         zipball_url: string;
         tarball_url: string;
         commit: {
            sha: string;
            url: string;
         };
         node_id: string;
      };
      /** Stage: 3 */
      /** Stores all installed modules and their verions. */
      list: any;
      /** Stage: 3 */
      /** Deletes and unregisters a module from the server. */
      remove: (key: string) => void;
      /** Stage: 3 */
      /** Updates a module if the latest release is not already installed. */
      update: (key: string) => void;
   };
   /** Stage: 2 */
   /** Formats the given object into a pretty-printed string. */
   output: (object: any, nested?: boolean) => string;
   /** Stage: 3 */
   /** The grakkit plugin instance. */
   plugin: Plugin;
   /** Stage: 2 */
   /** Unregisters all event listeners, cancels all tasks, unreferences all global objects, and re-initializes the grakkit core. */
   refresh: (disable?: boolean) => void;
   /** Stage: 3 */
   /** The command map used to register custom commands. */
   registry: CommandMap;
   /** Stage: 3 */
   /** A file wrapper for this plugin's root folder. */
   root: core$file;
   /** Stage: 3 */
   /** Removes circular references from an object recursively, replacing them with circular markers or `null` if `nullify` is true. */
   serialize: (object: any, nullify: boolean, ...nodes: any[]) => any;
   /** Stage: 2 */
   /** Stores anything pertaining to the currently active session. */
   session: {
      /** Stage: 3 */
      /** Stores all registered commands. */
      command: {
         [x: string]: {
            /** Stage: 3 */
            /** The executor for a given command. */
            execute: (player: Player, ...args: string[]) => void;
            /** Stage: 3 */
            /** The tab-completer for a given command. */
            tabComplete: (player: Player, ...args: string[]) => string[];
            /** Stage: 3 */
            /** The server instance of a given command. */
            instance: Command;
         };
      };
      /** Stage: 3 */
      /** Stores all persistent data objects. */
      data: any;
      /** Stage: 3 */
      /** Stores all registered event listeners. */
      event: { [x: string]: ((value: any) => void)[] };
      /** Stage: 3 */
      /** Stores all file and module export functions. */
      export: { file: ((value: any) => void)[]; module: ((value: any) => void)[] };
      /** Stage: 3 */
      /** References the current execution context. */
      origin: core$file;
      /** Stage: 3 */
      /** Stores imported types as a cache. */
      types: { [x: string]: any };
   };
   /** Stage: 3 */
   /** Sends a message to the given player in chat or in the action bar. */
   send: (player: Player, message: string, action: boolean) => void;
   /** Stage: 3 */
   /** A module-scoped state bag acting as dedicated global storage. */
   storage: any;
   /** Stage: 2 */
   /** A set of toggles used to control behavior in the initialization phase. */
   toggles: {
      /** Stage: 3 */
      /** Toggle for dictionary file downloads. */
      dict: boolean;
      /** Stage: 3 */
      /** Toggle for scripts folder evaluation. */
      scripts: boolean;
      /** Stage: 3 */
      /** Toggle for trusted module list fetching. */
      trusted: boolean;
      /** Stage: 3 */
      /** Toggle for user file creation. */
      user: boolean;
   };
   /** Stage: 3 */
   /** Imports a type from the server. */
   type: typeof types.type;
   /** Stage: 3 */
   /** Attempts to parse the input stream as a ZIP file and unzips the contents to the given path. */
   unzip: (from: File, to: File) => core$file;
   /** Stage: 3 */
   /** A version identifier used for compatibility. */
   version: 'modern' | 'legacy' | 'ancient';
}

type core$file = {
   /** Stage: 3 */
   /** Makes a file at the current path if one does not exist. */
   add: () => core$file;
   /** Stage: 3 */
   /** If the current path is a folder, returns an array of its contents. */
   children: core$file[];
   /** Stage: 3 */
   /** Makes a folder at the current path if one does not exist. */
   dir: () => core$file;
   /** Stage: 3 */
   /** If the current path is a folder, executes all scripts within it. */
   execute: () => core$file;
   /** Stage: 3 */
   /** Whether a file or folder at the current path exists or not. */
   exists: boolean;
   /** Stage: 3 */
   /** Joins the current path and the given sub-path and creates a new file object with that path. */
   file: (...sub: string[]) => core$file;
   /** Stage: 3 */
   /** Recursively removes parent folders, starting from the current file's parent folder, moving upstream until a parent folder is non-empty. */
   flush: () => core$file;
   /** Stage: 3 */
   /** The internal file interface for the current path. */
   io: File;
   /** Stage: 3 */
   /** Attempts to parse the current path as a JSON file. */
   json: () => any;
   /** Stage: 3 */
   /** The name of the file or folder at the current path. */
   name: string;
   /** Stage: 3 */
   /** Attempts to parse the current path as a JS file. */
   parse: () => core$file;
   /** Stage: 3 */
   /** The current path in string form. */
   path: string;
   /** Stage: 3 */
   /** If the current path is a file, returns the raw output content of that file. */
   read: () => string;
   /** Stage: 3 */
   /** Removes the file or folder at the current path, and flushes its parent folders. */
   remove: () => core$file;
   /** Stage: 3 */
   /** Returns an output stream for the file at the current path. */
   stream: () => any;
   /** Stage: 3 */
   /** Moves or copies the file or folder at the current path to another path, and flushes the current path's parent folders. */
   transfer: (to: File, action: 'move' | 'copy') => core$file;
   /** Stage: 3 */
   /** If the current path is a file, writes the given content to that file. */
   write: (content: string) => core$file;
   /** Stage: 3 */
   /** Attempts to parse the current path as a ZIP file and unzip the contents to the given path. */
   unzip: (to: File) => void;
};

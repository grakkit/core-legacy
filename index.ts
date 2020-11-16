import { types } from './dict/types';
import { events } from './dict/events';
import { imports } from './dict/imports';

import {
   jiInputStream,
   jlrField,
   obcCommand,
   obcCommandMap,
   obcCommandSender,
   obeEventPriority,
   ogpContext
} from './dict/classes';

declare const Java: {
   extend <X> (type: X, ...args: any[]): X,
   type <X extends keyof types> (name: X): types[X]
};

declare const Polyglot: {
   eval (...args: any[]): any;
}

/** The best thing that's ever happened to minecraft, change my mind. */
export const index = (function () {

   //@ts-expect-error
   const session$type: types = {};

   const type: typeof Java.type = (name) => {
      return session$type[name] || (session$type[name] = Java.type(name));
   };

   const Bukkit = type('org.bukkit.Bukkit');
   const Command = Java.extend(type('org.bukkit.command.Command'));
   const FileInputStream = type('java.io.FileInputStream');
   const FileOutputStream = type('java.io.FileOutputStream');
   const Files = type('java.nio.file.Files');
   const HandlerList = type('org.bukkit.event.HandlerList');
   const Listener = Java.extend(type('org.bukkit.event.Listener'), {});
   const Runnable = Java.extend(type('java.lang.Runnable'));
   const Runtime = type('java.lang.Runtime');
   const Paths = type('java.nio.file.Paths');
   const Scanner = type('java.util.Scanner');
   const Source = type('org.graalvm.polyglot.Source');
   const StandardCopyOption = type('java.nio.file.StandardCopyOption');
   const URL = type('java.net.URL');
   const UUID = type('java.util.UUID');
   const ZipInputStream = type('java.util.zip.ZipInputStream');

   let EventPriority: typeof obeEventPriority, EventType: any;

   try {
      EventPriority = type('org.bukkit.event.EventPriority');
   } catch (error) {
      //@ts-expect-error
      EventPriority = type('org.bukkit.event.Event$Priority');
      //@ts-expect-error
      EventType = type('org.bukkit.event.Event$Type');
   }

   const server = Bukkit.getServer();
   const manager = server.getPluginManager();
   const plugin = manager.getPlugin('grakkit');
   //@ts-expect-error
   const context: ogpContext = plugin.getClass().static.context;
   //@ts-expect-error
   const commandMap: jlrField = server.getClass().getDeclaredField('commandMap');
   commandMap.setAccessible(true);
   //@ts-expect-error
   const registry: obcCommandMap = commandMap.get(server);
   const base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
   let storage = {};

   const file = (...path: string[]) => {
      const io = Paths.get(path[0], ...path.slice(1)).normalize().toFile();
      const thing = {
         /** Makes a file at the current path if one does not exist. */
         add: () => {
            thing.file('..').dir();
            io.createNewFile();
            return thing;
         },
         /** If the current path is a folder, returns an array of its contents. */
         get children () {
            return [ ...(io.listFiles() || []) ].map((sub) => core.file(sub.getPath()));
         },
         /** Copies the file or folder at the current path to another path. */
         copy: (to: any) => {
            core.util.transfer(thing, to, 'copy');
            return thing;
         },
         /** Makes a folder at the current path if one does not exist. */
         dir: () => {
            core.util.chain(io, (io, loop) => {
               const up = io.getParentFile();
               up && !up.exists() && loop(up);
               io.mkdir();
            });
            return thing;
         },
         /** If the current path is a folder, non-recursively executes all JS files within it. If the current path is a JS file, executes it. */
         execute: () => {
            if (io.exists()) {
               if (io.isDirectory()) {
                  const origin = core.session.origin;
                  core.session.origin = thing;
                  for (const file of thing.children) file.io.isDirectory() || file.execute();
                  core.session.origin = origin;
               } else {
                  if (thing.name.endsWith('.js')) {
                     try {
                        core.import(thing.name);
                     } catch (error) {
                        console.error(error.stack || error.message || error);
                     }
                  }
               }
            }
            return thing;
         },
         /** Whether a file or folder at the current path exists or not. */
         get exists () {
            return io.exists();
         },
         /** Joins the current path and the given sub-path and creates a new file object with that path. */
         file: (...sub: string[]) => {
            return file(...path, ...sub);
         },
         /** Recursively removes parent folders, starting from the current file's parent folder, moving upstream until a parent folder is non-empty. */
         flush: () => {
            core.util.chain(io, (io, loop) => {
               const up = io.getParentFile();
               up && up.listFiles() && !up.listFiles()[0] && up.delete() && loop(up);
            });
            return thing;
         },
         /** The internal file interface for the current path. */
         get io () {
            return io;
         },
         /** Attempts to parse the current path as a JSON file. */
         json: () => {
            try {
               return JSON.parse(thing.read());
            } catch (error) {
               return null;
            }
         },
         /** Moves the file or folder at the current path to another path, and flushes the current path's parent folders. */
         move: (to: any) => {
            core.util.transfer(thing, to, 'move');
            return thing.flush();
         },
         /** The name of the file or folder at the current path. */
         get name () {
            return io.getName();
         },
         /** Attempts to parse the current path as a JS file. */
         parse: () => {
            io.exists() &&
               core.context.eval(
                  Source.newBuilder('js', io).mimeType('application/javascript+module').cached(false).build()
               );
            return thing;
         },
         /** The current path in string form. */
         get path () {
            return io.getPath().replace(/(\\)/g, '/');
         },
         /** If the current path is a file, returns the raw output content of that file. */
         read: () => {
            return !io.exists() ? null : !io.isDirectory() ? Files.readString(io.toPath()) : null;
         },
         /** Removes the file or folder at the current path, and flushes its parent folders. */
         remove: () => {
            core.util.chain(io, (io, loop) => {
               io.isDirectory() && [ ...io.listFiles() ].forEach(loop);
               io.exists() && io.delete();
            });
            return thing.flush();
         },
         /** Returns an output stream for the file at the current path. */
         stream: () => {
            return new FileOutputStream(io);
         },
         /** If the current path is a file, writes the given content to that file. */
         write: (content: string) => {
            //@ts-expect-error
            io.exists() && !io.isDirectory() && Files.writeString(io.toPath(), content);
            return thing;
         },
         /** Attempts to parse the current path as a ZIP file and unzips the contents to the given path. */
         unzip: (to: any) => {
            core.util.unzip(new FileInputStream(io), to);
            return thing;
         }
      };
      return thing;
   };

   type core$file = ReturnType<typeof file>;

   const root = file(plugin.getDataFolder().getPath().replace(/[\\]/g, '/'));

   /** The best thing that's ever happened to minecraft, change my mind. */
   const core = {
      /** Registers a custom command to the server with the given options. */
      command (options: {
         name: string;
         error?: string;
         aliases?: string[];
         execute?: (sender: obcCommandSender, ...args: string[]) => void;
         fallback?: string;
         permission?: string;
         tabComplete?: (sender: obcCommandSender, ...args: string[]) => string[];
      }) {
         const command =
            core.registry.getCommand(options.name) ||
            //@ts-expect-error
            new Command(options.name, {
               execute: (player: obcCommandSender, name: string, args: string[]) => {
                  if (options.permission && !player.hasPermission(options.permission)) {
                     options.error && player.sendMessage(options.error);
                     return false;
                  } else {
                     try {
                        (core.session.command[options.name].execute || (() => {}))(player, ...args);
                        return true;
                     } catch (error) {
                        console.error(`An error occured while attempting to execute the "${name}" command!`);
                        console.error(error.stack || error.message || error);
                        return false;
                     }
                  }
               },
               tabComplete: (player: obcCommandSender, name: string, args: string[]) => {
                  try {
                     const results = (core.session.command[options.name].tabComplete || (() => {}))(player, ...args);
                     if (!results) {
                        return [];
                     } else if (typeof results === 'string') {
                        return [ results ];
                     } else if (typeof results[Symbol.iterator] === 'function') {
                        return [ ...results ];
                     } else {
                        return [];
                     }
                  } catch (error) {
                     console.error(`An error occured while attempting to tab-complete the "${name}" command!`);
                     console.error(error.stack || error.message || error);
                     return [];
                  }
               }
            });
         //@ts-expect-error
         command.setAliases([ ...(options.aliases || []) ]);
         command.setPermission(options.permission || null);
         command.setPermissionMessage(options.error || null);
         core.registry.register(options.fallback || 'grakkit', command);
         core.session.command[options.name] = {
            execute: options.execute,
            tabComplete: options.tabComplete,
            instance: command
         };
      },
      /** The main polyglot context. */
      context,
      /** Returns a persistent data object linked to the given path. */
      data (...path: string[]) {
         const name = Paths.get(path[0], ...path.slice(1)).normalize().toString();
         const store = core.session.data;
         store[name] || (store[name] = core.root.file('data', `${path}.json`).json() || {});
         return store[name];
      },
      /** Registers event listeners to the server. */
      event <X extends keyof events> (name: X, ...listeners: ((event: events[X]) => void)[]) {
         const store = core.session.event[name] || (core.session.event[name] = []);
         for (const listener of listeners) {
            if (store.push(listener) === 1) {
               if (core.session.legacy) {
                  core.manager.registerEvent(
                     EventType[
                        //@ts-ignore
                        {
                           'org.bukkit.event.player.PlayerPreLoginEvent': 'PLAYER_PRELOGIN',
                           'org.bukkit.event.block.BlockCanBuildEvent': 'BLOCK_CANBUILD',
                           'org.bukkit.event.block.BlockFromToEvent': 'BLOCK_FROMTO',
                           'org.bukkit.event.block.BlockRedstoneEvent': 'REDSTONE_CHANGE',
                           'org.bukkit.event.world.ChunkPopulateEvent': 'CHUNK_POPULATED',
                           'org.bukkit.event.vehicle.VehicleCollisionEvent': 'VEHICLE_COLLISION_ENTITY',
                           'org.bukkit.event.vehicle.VehicleBlockCollisionEvent': 'VEHICLE_COLLISION_BLOCK'
                        }[name] ||
                           name
                              .split('.')
                              .slice(-1)[0]
                              .split(/(?=[A-Z])/)
                              .slice(0, -1)
                              .map((word) => word.toUpperCase())
                              .join('_')
                     ],
                     //@ts-ignore
                     new Listener(),
                     //@ts-ignore
                     (info: any, event: any) => store.forEach((listener) => listener(event)),
                     //@ts-ignore
                     EventPriority.Highest,
                     //@ts-ignore
                     core.plugin
                  );
               } else {
                  const type = core.type(name);
                  core.manager.registerEvent(
                     //@ts-ignore
                     type.class,
                     //@ts-ignore
                     new Listener(),
                     //@ts-ignore
                     EventPriority.HIGHEST,
                     //@ts-ignore
                     (info: any, event: any) => event instanceof type && store.forEach((listener) => listener(event)),
                     //@ts-ignore
                     core.plugin
                  );
               }
            }
         }
      },
      /** Make a GET request to the given URL. */
      fetch (from: string) {
         const link = new URL(from).openConnection();
         link.setDoOutput(true);
         //@ts-expect-error
         link.setRequestMethod('GET');
         //@ts-expect-error
         link.setInstanceFollowRedirects(true);
         //@ts-expect-error
         const code = link.getResponseCode();
         if (code === 200) {
            return {
               /** Attempts to parse the output as JSON. */
               json: () => {
                  try {
                     return JSON.parse(new Scanner(link.getInputStream()).useDelimiter('\\A').next());
                  } catch (error) {
                     return null;
                  }
               },
               /** Returns the raw output. */
               read: () => {
                  return new Scanner(link.getInputStream()).useDelimiter('\\A').next();
               },
               /** Returns an input stream for this request's URL. */
               stream: () => {
                  return link.getInputStream();
               },
               /** Attempts to parse the output as a ZIP file and unzips the contents to the given path. */
               unzip: (to: core$file) => {
                  core.util.unzip(link.getInputStream(), to);
               }
            };
         } else {
            throw code;
         }
      },
      /** Returns an object with various utility methods for operating on the filesystem. */
      file,
      /** Utility functions for formatting input */
      format: {
         /** A stand-in for circular references. */
         circular: Symbol(),
         /** Formats common server error messages. (this function is a goddamn mess) */
         error (error: any) {
            let type = 'Error';
            let message = `${error}`;
            if (error.stack) {
               type = error.stack.split('\n')[0].split(' ')[0].slice(0, -1);
               message = error.message;
               switch (type) {
                  case 'TypeError':
                     try {
                        if (message.startsWith('invokeMember') || message.startsWith('execute on foreign object')) {
                           const reason = message.split('failed due to: ')[1];
                           if (reason.startsWith('no applicable overload found')) {
                              const sets = reason.split('overloads:')[1].split(']],')[0].split(')]').map((set) => {
                                 return `(${set.split('(').slice(1).join('(')})`;
                              });
                              message = [ 'Invalid arguments! Expected:\u00a74', ...sets ].join('\n -> ').slice(0, -1);
                           } else if (reason.startsWith('Arity error')) {
                              message = `Invalid argument amount! Expected: ${reason.split('-')[1].split(' ')[2]}`;
                           } else if (reason.startsWith('UnsupportedTypeException')) {
                              message = 'Invalid arguments! Expected: \u00a74N/A';
                           } else if (reason.startsWith('Unknown identifier')) {
                              message = `That method (${reason.split(': ')[1]}) is not a member of its parent!`;
                           } else if (reason.startsWith('Message not supported')) {
                              message = `That method (${message
                                 .slice(14)
                                 .split(')')[0]}) is not a member of its parent!`;
                           } else {
                              message = message.split('\n')[0];
                           }
                        }
                     } catch (error) {
                        message = message.split('\n')[0];
                     }
                     break;
                  case 'SyntaxError':
                     message = message.split(' ').slice(1).join(' ').split('\n')[0];
               }
            } else {
               error = `${error}`;
               type = error.split(' ')[0].slice(0, -1);
               message = error.split(' ').slice(1).join(' ');
            }
            return `${type}: ${message}`;
         },
         /** Formats the given object into a pretty-printed string. */
         output (object: any, nested?: boolean) {
            if (nested) {
               if (object === core.format.circular) {
                  return 'Circular';
               } else {
                  const type = toString.apply(object);
                  switch (type) {
                     case '[object Object]':
                     case '[object Function]':
                     case '[foreign HostFunction]':
                        return type.split(' ')[1].slice(0, -1);
                     case '[object Array]':
                        return `[ ${core.format.serialize(object).map(core.format.output, true).join(', ')} ]`;
                     case '[foreign HostObject]':
                        const output = `${object}`;
                        if (!output || output.startsWith('class ')) {
                           return object.getCanonicalName
                              ? object.getCanonicalName()
                              : object.class ? object.class.getCanonicalName() : object;
                        } else {
                           return output;
                        }
                     default:
                        switch (typeof object) {
                           case 'function':
                              return 'Function';
                           case 'string':
                              return `"${object}"`;
                           case 'symbol':
                              return `@@${String(object).slice(7, -1)}`;
                           default:
                              return `${object}`;
                        }
                  }
               }
            } else {
               if (![ null, void 0 ].includes(object) && typeof object[''] === 'string') {
                  return object[''];
               } else {
                  switch (toString.apply(object)) {
                     case '[object Object]':
                        const names = Object.getOwnPropertyNames(object);
                        return `{ ${names
                           .map((name) => `${name}: ${core.format.output(object[name], true)}`)
                           .join(', ')} }`;
                     case '[object Function]':
                        return `${object}`.replace(/\r/g, '');
                     default:
                        return core.format.output(object, true);
                  }
               }
            }
         },
         /** Removes circular references from an object recursively, replacing them with circular markers or `null` if `nullify` is true. */
         serialize (object: any, nullify?: boolean, nodes?: any[]) {
            if (object === null || object !== 'object') {
               return object;
            } else {
               nodes || (nodes = [ object ]);
               let output = typeof object[Symbol.iterator] === 'function' ? [] : {};
               for (const key in object) {
                  const value = object[key];
                  if (nodes.includes(value)) output[key] = nullify ? null : core.format.circular;
                  else output[key] = core.format.serialize(value, nullify, [ ...nodes, object ]);
               }
               return output;
            }
         }
      },
      /** Imports a module, prefixed with `@`, or a file relative to the current origin. */
      import <X extends keyof imports> (source: X) {
         if (core.session.stack.length < 64) {
            if (`${source}`[0] === '@') {
               const key = `${source}`.slice(1);
               const version = core.session.scope[key];
               const { main, dependencies } = core.module.package(key, version, !!version);
               const state = core.session.origin;
               const store = [ core.session.scope, storage ];
               core.session.scope = dependencies;
               core.session.origin = main.file('..');
               storage = {};
               const done = () => {
                  storage = store[1];
                  core.session.scope = store[0];
                  core.session.origin = state;
               };
               try {
                  const result: imports[X] = core.import(`./${main.name}`).Main;
                  done();
                  return result;
               } catch (error) {
                  console.error(`An error occured while attempting to evaluate the "${key}" module!`);
                  done();
                  throw error;
               }
            } else {
               core.session.stack.push(`${source}`);
               const file = core.session.origin.file(`${source}`);
               const uuid = UUID.randomUUID().toString();
               const importer = file.file(`../import.${file.name}.${uuid}.grakkit`);
               const exporter = file.file(`../export.${file.name}.${uuid}.grakkit`);
               file.copy(exporter);
               importer.add().write(`import * as output from '${exporter.name}'; core.session.export.slice(-1)[0](output);`);
               const state = core.session.origin;
               let result: imports[X] = null;
               core.session.origin = file.file('..');
               core.session.export.push((output) => (result = output));
               const done = () => {
                  core.session.export.pop();
                  core.session.origin = state;
                  importer.remove();
                  exporter.remove();
                  core.session.stack.pop();
               };
               try {
                  importer.parse();
                  done();
                  return result;
               } catch (error) {
                  console.error(`An error occured while attempting to evaluate the "${file.path}" file!`);
                  done();
                  throw error;
               }
            }
         } else {
            console.error('An error occured while attempting to import a file or module!');
            console.error(`Too many recursive imports were made:\n${[ ...core.session.stack ].reverse().join('\n')}`);
            core.session.stack.pop();
            return null;
         }
      },
      /** Initializes the grakkit core. */
      init () {
         core.session = {
            command: {},
            data: {},
            event: {},
            export: [],
            legacy: !!EventType,
            origin: core.root,
            scope: {},
            stack: [],
            task: [],
            tick: 0,
            type: core.session.type
         };
         server.getScheduler().runTaskTimer(
            core.plugin,
            //@ts-expect-error
            new Runnable({
               run: () => {
                  let index = 0;
                  while (index < core.session.task.length) {
                     const task = core.session.task[index++];
                     if (task && task.tick === core.session.tick) {
                        try {
                           task.script.call(this, ...task.args);
                        } catch (error) {
                           console.error(`An error occured while attempting to run task ${index + 1}!`);
                           console.error(error);
                        }
                     }
                  }
                  core.session.task = core.session.task.filter((task) => {
                     return task && task.tick > core.session.tick;
                  });
                  ++core.session.tick;
               }
            }),
            0,
            1
         );
         Object.assign(globalThis, {
            atob: (data: string) => {
               let index = 0;
               let result = '';
               while (index < data.length) {
                  let a = base64.indexOf(data.charAt(index++));
                  let b = base64.indexOf(data.charAt(index++));
                  let c = base64.indexOf(data.charAt(index++));
                  let d = base64.indexOf(data.charAt(index++));
                  let e = ((b & 0xf) << 4) | ((c >> 2) & 0xf);
                  let f = ((c & 0x3) << 6) | (d & 0x3f);
                  result += String.fromCharCode(((a & 0x3f) << 2) | ((b >> 4) & 0x3));
                  result += e ? String.fromCharCode(e) : '';
                  result += f ? String.fromCharCode(f) : '';
               }
               return result;
            },
            btoa: (data: string) => {
               let index = 0;
               let result = '';
               while (index < data.length) {
                  let a = data.charCodeAt(index++) || 0;
                  let b = data.charCodeAt(index++) || 0;
                  let c = data.charCodeAt(index++) || 0;
                  let d = ((b & 0xf) << 2) | ((c >> 6) & 0x3);
                  let e = c & 0x3f;
                  b ? c || (e = 64) : (d = e = 64);
                  result += base64.charAt((a >> 2) & 0x3f);
                  result += base64.charAt(((a & 0x3) << 4) | ((b >> 4) & 0xf));
                  result += base64.charAt(d);
                  result += base64.charAt(e);
               }
               return result;
            },
            clearInterval: (handle: number) => {
               core.task.cancel(handle);
            },
            clearTimeout: (handle: number) => {
               core.task.cancel(handle);
            },
            core,
            global: globalThis,
            server,
            setInterval: (handler: string | Function, timeout = 50, ...argumentz: any[]) => {
               return core.task.interval(
                  typeof handler === 'string' ? () => core.util.eval(handler) : handler,
                  Math.ceil(timeout / 50),
                  ...argumentz
               );
            },
            setTimeout: (handler: string | Function, timeout = 0, ...argumentz: any[]) => {
               return core.task.timeout(
                  typeof handler === 'string' ? () => core.util.eval(handler) : handler,
                  Math.ceil(timeout / 50),
                  ...argumentz
               );
            }
         });
         if (core.toggles.js !== false) {
            core.command({
               name: 'js',
               permission: 'grakkit.command.js',
               error: '\xa7cYou lack the permission \xa74(grakkit.command.js) \xa7cto use that command!',
               execute: (player, ...args) => {
                  const self = globalThis.hasOwnProperty('self');
                  try {
                     self || (globalThis.self = player);
                     const result = core.util.eval(args.join(' '));
                     self || delete globalThis.self;
                     if (toString.apply(result) === '[foreign HostFunction]') {
                        let input = args.slice(-1)[0].split('.').slice(-1)[0];
                        input.endsWith(']') && (input = eval(input.replace(/.*\[/, '').slice(0, -1)));
                        player.sendMessage(`\xa77hostFunction ${input.split(/[|;]/g)[0]}() { [native code] }`);
                     } else {
                        player.sendMessage(`\xa77${core.format.output(result)}`);
                     }
                  } catch (error) {
                     self || delete globalThis.self;
                     player.sendMessage(`\xa7c${core.format.error(error)}`);
                  }
               },
               tabComplete: (player, ...args) => {
                  let body = '';
                  let index = -1;
                  let scope: any = globalThis;
                  let valid = true;
                  let string: string | boolean = false;
                  let bracket: string | number | boolean = false;
                  let comment = false;
                  let property = '';
                  const input = args.join(' ');
                  while (valid && ++index < input.length) {
                     const char = input[index];
                     if (comment) {
                        if (char === '*' && input[index + 1] === '/') {
                           if (property) {
                              input[index + 2] === ';' && (comment = false);
                           } else {
                              body = input.slice(0, index + 2);
                              comment = false;
                           }
                        }
                     } else if (string) {
                        if (char === '\\') {
                           ++index;
                        } else if (char === string) {
                           scope = {};
                           string = false;
                        }
                     } else if (bracket === true) {
                        [ "'", '"', '`' ].includes(char) ? (bracket = char) : (valid = false);
                     } else if (typeof bracket === 'string') {
                        switch (char) {
                           case '\\':
                              ++index;
                              break;
                           case bracket:
                              bracket = -1;
                              break;
                           default:
                              property += char;
                        }
                     } else {
                        switch (char) {
                           case '/':
                              // add regex support? maybe when im actually good at coding...
                              switch (input[index + 1]) {
                                 case '/':
                                    valid = false;
                                    break;
                                 case '*':
                                    comment = true;
                                    break;
                              }
                              break;
                           case "'":
                           case '"':
                           case '`':
                              bracket === -1 ? (valid = false) : (string = char);
                              break;
                           case ')':
                           case '{':
                           case '}':
                              bracket || (scope = {});
                              break;
                           case '.':
                           case '[':
                              if (!bracket) {
                                 if (char === '.' || property) {
                                    body = input.slice(0, index + 1);
                                    if (scope === globalThis && property === 'self' && !scope.hasOwnProperty('self')) {
                                       scope = player;
                                    } else {
                                       scope = scope[property] || {};
                                    }
                                    char === '.' || (bracket = true);
                                    property = '';
                                 } else {
                                    body = input.slice(0, index + 1);
                                    scope = globalThis;
                                 }
                              }
                              break;
                           case ']':
                              bracket === -1 && (bracket = false);
                              break;
                           case '\\':
                              typeof bracket === 'string' ? ++index : (valid = false);
                              break;
                           case ' ':
                              property ? (valid = false) : (body = '');
                              break;
                           default:
                              if (char.match(/\+-\*\/\^=!&\|\?:\(,;/g)) {
                                 if (!bracket) {
                                    body = input.slice(0, index + 1);
                                    scope = globalThis;
                                    property = '';
                                 }
                              } else {
                                 property += char;
                              }
                        }
                     }
                  }
                  if (valid && scope && !(comment || string)) {
                     const properties = Object.getOwnPropertyNames(scope);
                     scope === globalThis && !properties.includes('self') && properties.push('self');
                     return core.util
                        .filter(property, properties)
                        .filter((name) => bracket || name === (name.match(/[_A-Z$][_0-9A-Z$]*/gi) || [])[0])
                        .map((name) => {
                           if (bracket) {
                              return `${body}\`${name.replace(/`/g, '\\`').split('\\').join('\\\\')}\`]`;
                           } else {
                              return `${body}${name}`;
                           }
                        });
                  }
               }
            });
         }
         if (core.toggles.module !== false) {
            core.command({
               name: 'module',
               permission: 'grakkit.command.module',
               error: '\xa7cYou lack the permission \xa74(grakkit.command.module) \xa7cto use that command!',
               execute: (player, option, key, version) => {
                  if (option) {
                     option = option.toLowerCase();
                     switch (option) {
                        case 'list':
                           const keys = Object.keys(core.module.modules);
                           player.sendMessage(`\xa77Installed modules: ${core.format.output(keys)}`);
                           break;
                        case 'add':
                        case 'change':
                        case 'create':
                        case 'remove':
                        case 'update':
                           switch (key) {
                              case '':
                              case void 0:
                                 player.sendMessage('\xa7cYou must specify a repository!');
                                 break;
                              case '*':
                                 switch (option) {
                                    case 'add':
                                       player.sendMessage(
                                          '\xa77One sec, just gotta download the entire GitHub database...'
                                       );
                                       break;
                                    case 'change':
                                       player.sendMessage('\xa77Not every module uses the same release tags, dipshit.');
                                       break;
                                    case 'create':
                                       player.sendMessage(
                                          "\xa77So you're saying there's a finite number of possible names?"
                                       );
                                       break;
                                    default:
                                       for (const key in core.module.modules) core.module.action(player, option, key);
                                 }
                                 break;
                              default:
                                 core.module.action(player, option, key, version);
                           }
                           break;
                        default:
                           player.sendMessage('\xa7cThat option is invalid!');
                     }
                  } else {
                     player.sendMessage('\xa7cYou must specify an option!');
                  }
               },
               tabComplete: (player, ...args) => {
                  switch (args.length) {
                     case 1:
                        return core.util.filter(args[0], [ 'add', 'change', 'create', 'list', 'remove', 'update' ]);
                     case 2:
                        switch (args[0]) {
                           case 'change':
                           case 'remove':
                           case 'update':
                              return [ '*', ...core.util.filter(args[1], Object.keys(core.module.modules)) ];
                        }
                  }
               }
            });
         }
         core.command({
            name: 'grakkit',
            permission: 'grakkit.command.grakkit',
            error: '\xa7cYou lack the permission \xa74(grakkit.command.grakkit) \xa7cto use that command!',
            execute: (player, action, target) => {
               if (action) {
                  action = action.toLowerCase();
                  switch (action) {
                     case 'refresh':
                        player.sendMessage('\xa77Refreshing...');
                        core.refresh();
                        player.sendMessage('\xa77Refresh Complete.');
                        break;
                     case 'toggle':
                        if (target) {
                           target = target.toLowerCase();
                           switch (target) {
                              case 'dict':
                              case 'js':
                              case 'module':
                              case 'scripts':
                              case 'user':
                                 core.toggles[target] = core.toggles[target] === false ? true : false;
                                 const status = core.toggles[target] ? 'en' : 'dis';
                                 player.sendMessage(`\xa77Toggle "${target}" has now been ${status}abled.`);
                                 break;
                              default:
                                 player.sendMessage('\xa7cThat toggle is invalid!');
                           }
                        } else {
                           player.sendMessage('\xa7cYou must specify a toggle!');
                        }
                        break;
                     case 'update':
                        player.sendMessage('\xa77Updating...');
                        try {
                           /*
                           const temp = core.root.file('temp');
                           const tag = core.fetch('https://api.github.com/repos/grakkit/core/tags').json()[0];
                           core.fetch(tag.zipball_url).unzip(temp);
                           temp.children[0].move(core.root);
                           temp.remove();
                           */
                           const process = Runtime.getRuntime().exec(`grakkit update core --root "${core.root.io.getAbsolutePath()}"`);
                           process.waitFor();
                           core.refresh(true);
                           core.root.file('index.js').execute();
                           player.sendMessage('\xa77Update Complete.');
                        } catch (error) {
                           player.sendMessage('\xa7cUpdate Failed!');
                           throw error;
                        }
                        break;
                     default:
                        player.sendMessage('\xa7cThat action is invalid!');
                  }
               } else {
                  player.sendMessage('\xa7cYou must specify an action!');
               }
            },
            tabComplete: (player, ...args) => {
               switch (args.length) {
                  case 1:
                     return core.util.filter(args[0], [ 'refresh', 'toggle', 'update' ]);
                  case 2:
                     switch (args[0]) {
                        case 'toggle':
                           return core.util.filter(args[1], [
                              'dict',
                              'js',
                              'module',
                              'scripts',
                              'user'
                           ]);
                     }
               }
            }
         });
         core.event('org.bukkit.event.server.PluginDisableEvent', (event) => {
            event.getPlugin() === core.plugin && core.refresh(true);
         });
         core.module.dict();
         if (core.toggles.user !== false) {
            core.root.file('user.js').add().execute();
         }
         if (core.toggles.scripts !== false) {
            core.root.file('scripts').dir().execute();
         }
      },
      /** The server's plugin manager. */
      manager,
      /** A set of utility functions for operating on modules, installed or otherwise. */
      module: {
         /** Performs the given action on a module and informs the player on the results. */
         action (player: obcCommandSender, option: 'add' | 'change' | 'create' | 'remove' | 'update', key: string, version?: string) {
            key = key.toLowerCase();
            const action = { add: 'Add', change: 'Chang', create: 'Creat', remove: 'Remov', update: 'Updat' }[option];
            try {
               player.sendMessage(`\xa77${action}ing... (${key})`);
               core.module[option](key, version);
               player.sendMessage(`\xa77Module ${action}ed. (${key})`);
            } catch (error) {
               switch (error) {
                  case 'module-already-installed':
                     player.sendMessage('\xa7cThat module has already been installed!');
                     break;
                  case 'module-already-changed':
                     player.sendMessage('\xa7cThat module is already installed with that version!');
                     break;
                  case 'module-already-updated':
                     player.sendMessage('\xa7cThat module is already up to date!');
                     break;
                  case 'module-change-invalid':
                     player.sendMessage('\xa7cThat module cannot be changed as it was created manually!');
                     break;
                  case 'module-download-failed':
                     player.sendMessage('\xa7cAn error occured while downloading that module!');
                     break;
                  case 'module-invalid-version':
                     player.sendMessage('\xa7cThat module has no release with that version!');
                     break;
                  case 'module-not-available':
                     player.sendMessage('\xa7cThat module has no releases available!');
                     break;
                  case 'module-not-installed':
                     player.sendMessage('\xa7cThat module has not already been installed!');
                     break;
                  case 'module-update-invalid':
                     player.sendMessage('\xa7cThat module cannot be updated as it was created manually!');
                     break;
                  default:
                     player.sendMessage(`\xa7cAn unexpected error occured while ${action}ing the "${key}" module!`);
                     console.error(error.stack || error.message || error);
               }
            }
         },
         /** Downloads and registers a module to the server. */
         add (key: string, version?: string) {
            if (core.module.modules[key]) {
               throw 'module-already-installed';
            } else {
               core.module.modules[key] = core.module.download(key, version);
               core.module.dict();
            }
         },
         /** Modifies the version of an installed module. */
         change (key: string, version?: string) {
            if (core.module.modules[key]) {
               core.module.modules[key] = core.module.download(key, version);
               core.module.dict();
            } else if (core.module.modules[key] === null) {
               throw 'module-change-invalid';
            } else {
               throw 'module-not-installed';
            }
         },
         /** Creates a module from scratch. */
         create (key: string, version?: string) {
            if (core.module.modules[key]) {
               throw 'module-already-installed';
            } else {
               const folder = core.root.file('modules', key);
               folder.file('index.js').add().write("export const Main = {}\n");
               core.module.modules[key] = null;
               core.module.dict();
            }
         },
         /** Deletes a module from the server. */
         delete (key: string, version?: string, dependency?: boolean) {const root = dependency && core.module.dependencies[key];
            for (const entry of Object.entries(core.module.package(key, version, dependency).dependencies)) {
               let remove = true;
               if (dependency) {
                  for (const sibling of Object.values(core.module.dependencies)) {
                     if (sibling !== root && (sibling[entry[0]] || []).includes(entry[1])) {
                        remove = false;
                     }
                  }
               } else {
                  for (const sibling in core.module.modules) {
                     if (sibling !== key && core.module.package(sibling).dependencies[entry[0]] === entry[1]) {
                        remove = false;
                     }
                  }
               }
               if (remove) {
                  const dependencies = core.module.dependencies[entry[0]];
                  if (dependencies) {
                     dependencies.includes(entry[1]) && delete dependencies[dependencies.indexOf(entry[1])];
                     dependencies.length || delete core.module.dependencies[entry[0]];
                  }
                  core.module.delete(...entry, true);
               }
            }
            if (dependency) {
               core.root.file('dependencies', key, version).remove();
            } else {
               core.root.file('modules', key).remove();
            }
         },
         /** Stores all installed dependencies and their versions. */
         get dependencies (): { [x: string]: string[] } {
            return core.data('../dependencies');
         },
         /** Generates typescript references for all installed modules. */
         dict () {
            if (core.toggles.dict !== false) {
               core.root.file('dict/imports.d.ts').add().write(
                  [
                     'export interface imports {',
                     ...Object.keys(core.module.modules).map((key) => {
                        return `   '@${key}': typeof import('./../modules/${key}/index').Main;`;
                     }),
                     '   [x: string]: any;',
                     '}'
                  ].join('\n')
               );
            }
         },
         /** Downloads a module's latest release to the server and returns that release's tag name. */
         download (key: string, version?: string, dependency?: boolean) {
            let target: core$file;
            const info = core.module.version(key, version);
            if (info) {
               const downloads = core.root.file('downloads', key);
               if (dependency) {
                  const dependencies = core.module.dependencies[key] || (core.module.dependencies[key] = []);
                  if (dependencies.includes(version)) {
                     return;
                  } else {
                     target = core.root.file('dependencies', key, version);
                     dependencies.push(version);
                  }
               } else {
                  if (core.module.modules[key] === info.name) {
                     if (version) {
                        throw 'module-already-changed';
                     } else {
                        throw 'module-already-updated';
                     }
                  } else {
                     target = core.root.file('modules', key);
                     core.module.delete(key, version, dependency);
                  }
               }
               try {
                  core.fetch(info.zipball_url).unzip(downloads);
                  downloads.children[0].move(target).remove();
                  for (const entry of Object.entries(core.module.package(key, version, dependency).dependencies)) {
                     core.module.download(...entry, true);
                  }
                  return info.name;
               } catch (error) {
                  downloads.remove();
                  console.error(`An error occured while attempting to download the "${key}" repository!`);
                  console.error(error.stack || error.message || error);
                  throw 'module-download-failed';
               }
            } else {
               if (version) {
                  throw 'module-invalid-version';
               } else {
                  throw 'module-not-available';
               }
            }
         },
         /** Stores all installed modules and their current versions. */
         get modules (): { [x: string]: string } {
            return core.data('../modules');
         },
         /** Returns the package information for a module. */
         package (key: string, version?: string, dependency?: boolean) {
            let main = 'index.js';
            let dependencies: { [x: string]: string } = {};
            const prefix = `The dependency file for "${key}${dependency ? `:${version}` : ''}"`;
            const folder = dependency ? core.root.file('dependencies', key, version) : core.root.file('modules', key);
            try {
               const info = folder.file('dependencies.json').json() || {};
               if (info && typeof info === 'object') {
                  for (const key in info) {
                     const value = info[key];
                     if (![ 'string', 'undefined' ].includes(typeof value)) {
                        console.warn(`${prefix} specifies an invalid value at key "${key}"`);
                     } else {
                        dependencies[key] = info[key];
                     }
                  }
               } else if (info !== void 0) {
                  console.warn(`${prefix} is invalid.`);
               }
            } catch (error) {
               console.error(`${prefix} could not be parsed as JSON!`);
            }
            return { main: folder.file(main), dependencies };
         },
         /** Deletes and unregisters a module from the server. */
         remove (key: string, version?: string) {
            if (core.module.modules[key] || core.module.modules[key] === null) {
               core.module.delete(key);
               delete core.module.modules[key];
               core.module.dict();
            } else {
               throw 'module-not-installed';
            }
         },
         /** Updates a module if the latest release is not already installed. */
         update (key: string, version?: string) {
            if (core.module.modules[key]) {
               core.module.modules[key] = core.module.download(key);
               core.module.dict();
            } else if (core.module.modules[key] === null) {
               throw 'module-update-invalid';
            } else {
               throw 'module-not-installed';
            }
         },
         /** Returns the info on the given version (latest if none is specified) of a module. */
         version (key: string, version?: string) {
            for (const tag of core.fetch(`https://api.github.com/repos/${key}/tags`).json()) {
               if (!version || tag.name === version) {
                  return tag;
               }
            }
         }
      },
      /** The grakkit plugin instance. */
      plugin,
      /** Unregisters all event listeners, cancels all tasks, unreferences all global objects, and re-initializes the grakkit core. */
      refresh (disable?: boolean) {
         HandlerList.unregisterAll(core.plugin);
         server.getScheduler().cancelTasks(core.plugin);
         for (const key in core.session.command) core.session.command[key].instance.unregister(core.registry);
         for (const path in core.session.data) {
            const data = JSON.stringify(core.format.serialize(core.session.data[path], true));
            core.root.file('data', `${path}.json`).add().write(data);
         }
         for (const key in globalThis) delete globalThis[key];
         storage = {};
         disable || core.init();
      },
      /** The command map used to register custom commands. */
      registry,
      /** A file wrapper for this plugin's root folder. */
      root,
      /** A task scheduler used for timeouts and intervals. */
      task: {
         /** Cancels a previously scheduled task. */
         cancel (index: number) {
            delete core.session.task[index - 1];
         },
         /** Schedules a task to be executed at an interval of the given period in ticks. */
         interval (script: Function, period = 1, ...args: any[]) {
            const callback = (...args) => {
               core.task.timeout(callback, period, ...args);
               core.session.task[index] = core.session.task.pop();
               script(...args);
            };
            let index = core.task.timeout(callback, 0, ...args);
            return index--;
         },
         /** Schedules a task to be executed with a delay of the given period in ticks. */
         timeout (script: Function, period = 0, ...args: any[]) {
            return core.session.task.push({
               script,
               args,
               tick: core.session.tick + Math.ceil(period)
            });
         }
      },
      /** Stores anything pertaining to the currently active session. */
      session: (() => {
         const command: {
            [x: string]: {
               /** The executor for a given command. */
               execute: (sender: obcCommandSender, ...args: string[]) => void;
               /** The tab-completer for a given command. */
               tabComplete: (sender: obcCommandSender, ...args: string[]) => string[];
               /** The server instance of a given command. */
               instance: obcCommand;
            };
         } = {};
         const event: { [x: string]: ((event: any) => void)[] } = {};
         const __export__: ((value: any) => void)[] = [];
         const scope: { [x: string]: string } = {};
         const stack: string[] = [];
         const task: { script: Function; args: any[]; tick: number }[] = [];
         return {
            /** Stores all registered commands. */
            command,
            /** Stores all persistent data objects. */
            data: {},
            /** Stores all registered event listeners. */
            event,
            /** Stores all file and module export functions. */
            export: __export__,
            /** An identifier used for compatibility with very old versions. */
            legacy: !!EventType,
            /** References the current execution context. */
            origin: root,
            /** A list of overrides used when importing a dependency. */
            scope,
            /** A list of all inputs passed to the importer during its execution. */
            stack,
            /** A list of all currently scheduled tasks. */
            task,
            /** The scheduler's current tick. */
            tick: 0,
            /** Stores imported types as a cache. */
            type: session$type
         };
      })(),
      /** A module-scoped state bag acting as dedicated global storage. */
      get storage () {
         return storage;
      },
      /** A set of toggles used to control behavior in the initialization phase. */
      get toggles (): {
         /** Toggle for dictionary file generation. */
         dict: boolean;
         /** Toggle for js command. */
         js: boolean;
         /** Toggle for module command. */
         module: boolean;
         /** Toggle for scripts folder evaluation. */
         scripts: boolean;
         /** Toggle for user file creation. */
         user: boolean;
      } {
         return core.data('../toggles');
      },
      /** Imports a type from the server. */
      type,
      /** Utility functions for miscellaneous purposes. */
      util: {
         /** A utility function used for recursive operations. */
         chain <X, Y extends (input: X, chain: (object: X) => ReturnType<Y>) => any> (base: X, modifier: Y) {
            const chain = (object: X) => modifier(object, chain);
            chain(base);
         },
         /** Evaluates JS code. */
         eval (code: string) {
            return Polyglot.eval('js', code);
         },
         /** Filters the input array by elements which contain a case-insensitive match to the input string. */
         filter (value: string, array: string[]) {
            return array.filter((element) => element.toLowerCase().includes(value.toLowerCase()));
         },
         /** Moves or copies the file or folder from one path to another path. */
         transfer (from: core$file, to: core$file, action: 'move' | 'copy') {
            core.util.chain([ from.io, to.io ], (io, loop) => {
               if (io[0].isDirectory()) {
                  core.file(io[1].getPath()).dir();
                  for (const from of [ ...io[0].listFiles() ])
                     loop([ from, core.file(io[1].getPath(), from.getName()).io ]);
               } else if (io[0].exists() && !io[1].exists()) {
                  Files[action](io[0].toPath(), io[1].toPath(), StandardCopyOption.REPLACE_EXISTING);
               }
            });
         },
         /** Attempts to parse the input stream as a ZIP file and unzips the contents to the given path. */
         unzip (from: jiInputStream, to: core$file) {
            const stream = new ZipInputStream(from);
            try {
               let entry;
               while ((entry = stream.getNextEntry())) {
                  const file = to.file(entry.getName());
                  if (entry.isDirectory()) {
                     file.dir();
                  } else {
                     const output = file.add().stream();
                     try {
                        stream.transferTo(output);
                        output.close();
                     } catch (error) {
                        output.close();
                        throw error;
                     }
                  }
                  stream.closeEntry();
               }
               stream.close();
               from.close();
            } catch (error) {
               stream.close();
               from.close();
               throw error;
            }
         }
      }
   };
   core.init();
   return core;
})();
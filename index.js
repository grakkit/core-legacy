(function () {
   /** @type {import('./dict/core').core} */
   const core = {
      command: (options) => {
         core.session.command[options.name] = { execute: options.execute, tabComplete: options.tabComplete };
         const command =
            core.registry.getCommand(options.name) ||
            new Command(options.name, {
               execute: (player, name, args) => {
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
               tabComplete: (player, name, args) => {
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
         command.setAliases([ ...(options.aliases || []) ]);
         command.setPermission(options.permission || null);
         command.setPermissionMessage(options.error || null);
         core.registry.register(options.fallback || 'grakkit', command);
         core.session.command[options.name].instance = command;
      },
      get context () {
         return context;
      },
      data: (...path) => {
         const name = Paths.get(...path).normalize().toString();
         const store = core.session.data;
         store[name] || (store[name] = core.root.file('data', `${path}.json`).json() || {});
         return store[name];
      },
      event: (name, ...listeners) => {
         const store = core.session.event[name] || (core.session.event[name] = []);
         for (const listener of listeners) {
            if (store.push(listener) === 1) {
               if (core.session.legacy) {
                  core.manager.registerEvent(
                     EventType[
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
                     new Listener(),
                     (info, event) => store.forEach((listener) => listener(event)),
                     EventPriority.Highest,
                     core.plugin
                  );
               } else {
                  const type = core.type(name);
                  core.manager.registerEvent(
                     type.class,
                     new Listener(),
                     EventPriority.HIGHEST,
                     (info, event) => event instanceof type && store.forEach((listener) => listener(event)),
                     core.plugin
                  );
               }
            }
         }
      },
      export: (object, file) => {
         if (file) {
            (core.session.export.file.slice(-1)[0] || (() => {}))(object);
         } else {
            (core.session.export.module.slice(-1)[0] || (() => {}))(object);
         }
      },
      extend: (name, ...args) => {
         return Java.extend(core.type(name), ...args);
      },
      fetch: (from) => {
         const link = new URL(from).openConnection();
         link.setDoOutput(true);
         link.setRequestMethod('GET');
         link.setInstanceFollowRedirects(true);
         const code = link.getResponseCode();
         if (code === 200) {
            return {
               json: () => {
                  try {
                     return JSON.parse(new Scanner(link.getInputStream()).useDelimiter('\\A').next());
                  } catch (error) {
                     return null;
                  }
               },
               read: () => {
                  return new Scanner(link.getInputStream()).useDelimiter('\\A').next();
               },
               stream: () => {
                  return link.getInputStream();
               },
               unzip: (to) => {
                  core.util.unzip(link.getInputStream(), to);
               }
            };
         } else {
            throw code;
         }
      },
      file: (...path) => {
         const io = Paths.get(...path).normalize().toFile();
         const thing = {
            add: () => {
               thing.file('..').dir();
               io.createNewFile();
               return thing;
            },
            get children () {
               return [ ...(io.listFiles() || []) ].map((sub) => core.file(sub.getPath()));
            },
            copy: (to) => {
               core.util.transfer(thing, to, 'copy');
               return thing;
            },
            dir: () => {
               core.util.chain(io, (io, loop) => {
                  const up = io.getParentFile();
                  up && !up.exists() && loop(up);
                  io.mkdir();
               });
               return thing;
            },
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
            get exists () {
               return io.exists();
            },
            file: (...sub) => {
               return core.file(...path, ...sub);
            },
            flush: () => {
               core.util.chain(io, (io, loop) => {
                  const up = io.getParentFile();
                  up && up.listFiles() && !up.listFiles()[0] && up.delete() && loop(up);
               });
               return thing;
            },
            get io () {
               return io;
            },
            json: (handler) => {
               let content;
               try {
                  content = JSON.parse(thing.read());
               } catch (error) {
                  content = null;
               }
               if (handler) {
                  handler(content);
                  return thing;
               } else {
                  return content;
               }
            },
            move: (to) => {
               core.util.transfer(thing, to, 'move');
               return thing.flush();
            },
            get name () {
               return io.getName();
            },
            parse: () => {
               io.exists() &&
                  core.context.eval(
                     Source.newBuilder('js', io).mimeType('application/javascript+module').cached(false).build()
                  );
               return thing;
            },
            get path () {
               return io.getPath().replace(/(\\)/g, '/');
            },
            read: (handler) => {
               const content = !io.exists() ? null : !io.isDirectory() ? Files.readString(io.toPath()) : null;
               if (handler) {
                  handler(content);
                  return thing;
               } else {
                  return content;
               }
            },
            remove: () => {
               core.util.chain(io, (io, loop) => {
                  io.isDirectory() && [ ...io.listFiles() ].forEach(loop);
                  io.exists() && io.delete();
               });
               return thing.flush();
            },
            stream: () => {
               return new FileOutputStream(io);
            },
            write: (content) => {
               io.exists() && !io.isDirectory() && Files.writeString(io.toPath(), content);
               return thing;
            },
            unzip: (to) => {
               core.util.unzip(new FileInputStream(io), to);
               return thing;
            }
         };
         return thing;
      },
      format: {
         circular: Symbol(),
         // this needs to be completely overhauled, like, bad
         error: (error) => {
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
                              message = `Insufficient arguments! Expected: ${reason.split('-')[1].split(' ')[2]}`;
                           } else if (reason.startsWith('UnsupportedTypeException')) {
                              message = 'Invalid arguments!';
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
         // need to fix first member in top level object/array showing as full object
         output: (object, nested) => {
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
                              return `@@${`${object}`.slice(7, -1)}`;
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
         serialize: (object, nullify, nodes) => {
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
      import: (source) => {
         if (core.session.stack.push(source) < 64) {
            if (source[0] === '@') {
               const key = source.slice(1);
               const version = core.session.scope[key];
               const { main, dependencies } = core.module.package(key, version, !!version);
               const state = [ core.session.scope, core.session.origin, storage ];
               let result = null;
               core.session.scope = dependencies;
               core.session.origin = main.file('..');
               core.session.export.module.push((output) => (result = output));
               storage = {};
               const done = () => {
                  storage = state[1];
                  core.session.export.module.pop();
                  core.session.scope = state[0];
                  core.session.origin = state[1];
                  core.session.stack.pop();
               };
               try {
                  core.import(`./${main.name}`);
                  done();
                  return result;
               } catch (error) {
                  console.error(`An error occured while attempting to evaluate the "${key}" module!`);
                  done();
                  throw error;
               }
            } else {
               const file = core.session.origin.file(source);
               const uuid = UUID.randomUUID().toString();
               const importer = file.file(`../import.${file.name}.${uuid}.grakkit`);
               const exporter = file.file(`../export.${file.name}.${uuid}.grakkit`);
               file.copy(exporter);
               importer.add().write(`import * as output from '${exporter.name}'; core.export(output, true);`);
               const state = core.session.origin;
               let result = null;
               core.session.origin = file.file('..');
               core.session.export.file.push((output) => (result = output));
               const done = () => {
                  core.session.export.file.pop();
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
      init: () => {
         core.session = {
            command: {},
            data: {},
            event: {},
            export: { file: [], module: [] },
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
         Object.assign(global, {
            atob: (data) => {
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
            btoa: (data) => {
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
            clearInterval: (handle) => {
               core.task.cancel(handle);
            },
            clearTimeout: (handle) => {
               core.task.cancel(handle);
            },
            core,
            global,
            server,
            setInterval: (handler, timeout = 50, ...argumentz) => {
               return core.task.interval(
                  typeof handler === 'string' ? () => core.util.eval(handler) : handler,
                  Math.ceil(timeout / 50),
                  ...argumentz
               );
            },
            setTimeout: (handler, timeout = 0, ...argumentz) => {
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
               error: '§cYou lack the permission §4(grakkit.command.js) §cto use that command!',
               execute: (player, ...args) => {
                  const self = global.hasOwnProperty('self');
                  try {
                     self || (global.self = player);
                     const result = core.util.eval(args.join(' '));
                     self || delete global.self;
                     if (toString.apply(result) === '[foreign HostFunction]') {
                        let input = args.slice(-1)[0].split('.').slice(-1)[0];
                        input.endsWith(']') && (input = eval(input.replace(/.*\[/, '').slice(0, -1)));
                        player.sendMessage(`§7hostFunction ${input.split(/[|;]/g)[0]}() { [native code] }`);
                     } else {
                        player.sendMessage(`§7${core.format.output(result)}`);
                     }
                  } catch (error) {
                     self || delete global.self;
                     player.sendMessage(`§c${core.format.error(error)}`);
                  }
               },
               tabComplete: (player, ...args) => {
                  let body = '';
                  let index = -1;
                  let scope = global;
                  let valid = true;
                  let string = false;
                  let bracket = false;
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
                                    if (scope === global && property === 'self' && !scope.hasOwnProperty('self')) {
                                       scope = player;
                                    } else {
                                       scope = scope[property] || {};
                                    }
                                    char === '.' || (bracket = true);
                                    property = '';
                                 } else {
                                    body = input.slice(0, index + 1);
                                    scope = global;
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
                                    scope = global;
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
                     scope === global && !properties.includes('self') && properties.push('self');
                     return core.util
                        .filter(property, properties)
                        .filter((name) => bracket || name === (name.match(/[_A-Z$][_0-9A-Z$]*/gi) || [])[0])
                        .map((name) => {
                           if (bracket) {
                              return `${body}\`${name.replace(/`/g, '\\`').replace(/\\/g, '\\\\')}\`]`;
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
               error: '§cYou lack the permission §4(grakkit.command.module) §cto use that command!',
               execute: (player, option, key, version) => {
                  if (option) {
                     option = option.toLowerCase();
                     switch (option) {
                        case 'list':
                           const keys = Object.keys(core.module.modules);
                           player.sendMessage(`§7Installed modules: ${core.format.output(keys)}`);
                           break;
                        case 'add':
                        case 'change':
                        case 'create':
                        case 'remove':
                        case 'update':
                           switch (key) {
                              case '':
                              case void 0:
                                 player.sendMessage('§cYou must specify a repository!');
                                 break;
                              case '*':
                                 switch (option) {
                                    case 'add':
                                       player.sendMessage(
                                          '§7One sec, just gotta download the entire GitHub database...'
                                       );
                                       break;
                                    case 'change':
                                       player.sendMessage('§7Not every module uses the same release tags, dipshit.');
                                       break;
                                    case 'create':
                                       player.sendMessage(
                                          "§7So you're saying there's a finite number of possible names?"
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
                           player.sendMessage('§cThat option is invalid!');
                     }
                  } else {
                     player.sendMessage('§cYou must specify an option!');
                  }
               },
               tabComplete: (player, ...args) => {
                  switch (args.length) {
                     case 1:
                        return core.util.filter(args[0], [ 'add', 'change', 'create', 'list', 'remove', 'update' ]);
                     case 2:
                        switch (args[0]) {
                           case 'add':
                              return core.util.filter(args[1], trusted);
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
            error: '§cYou lack the permission §4(grakkit.command.grakkit) §cto use that command!',
            execute: (player, action, target) => {
               if (action) {
                  action = action.toLowerCase();
                  switch (action) {
                     case 'refresh':
                        player.sendMessage('§7Refreshing...');
                        core.refresh();
                        player.sendMessage('§7Refresh Complete.');
                        break;
                     case 'toggle':
                        if (target) {
                           target = target.toLowerCase();
                           switch (target) {
                              case 'config':
                              case 'dict':
                              case 'js':
                              case 'module':
                              case 'scripts':
                              case 'trusted':
                              case 'user':
                                 core.toggles[target] = core.toggles[target] === false ? true : false;
                                 const status = core.toggles[target] ? 'en' : 'dis';
                                 player.sendMessage(`§7Toggle "${target}" has now been ${status}abled.`);
                                 break;
                              default:
                                 player.sendMessage('§cThat toggle is invalid!');
                           }
                        } else {
                           player.sendMessage('§cYou must specify a toggle!');
                        }
                        break;
                     case 'update':
                        player.sendMessage('§7Updating...');
                        try {
                           core.toggles.dict && core.root.file('dict').remove();
                           core.refresh(true);
                           core.root.file('index.js').write(core.fetch(`${remote}/index.js`).read()).execute();
                           player.sendMessage('§7Update Complete.');
                        } catch (error) {
                           player.sendMessage('§cUpdate Failed!');
                           throw error;
                        }
                        break;
                     default:
                        player.sendMessage('§cThat action is invalid!');
                  }
               } else {
                  player.sendMessage('§cYou must specify an action!');
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
                              'config',
                              'dict',
                              'js',
                              'module',
                              'scripts',
                              'trusted',
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
         if (core.toggles.trusted !== false) {
            try {
               console.log('Downloading trusted module list...');
               trusted = core.fetch(`${remote}/modules.json`).json();
            } catch (error) {
               console.error('An error occured while attempting to download the trusted module list!');
               console.error(error.stack || error.message || error);
            }
         }
         if (core.toggles.dict !== false) {
            for (const name of [ 'classes', 'core', 'events', 'types' ]) {
               const target = core.root.file('dict', `${name}.d.ts`);
               if (!target.exists) {
                  try {
                     console.log(`Downloading dictionary... ${target.path}`);
                     target.add().write(core.fetch(`${remote}/dict/${name}.d.ts`).read());
                  } catch (error) {
                     console.error(`An error occured while attempting to download the "${target.path}" dictionary!`);
                     console.error(error.stack || error.message || error);
                  }
               }
            }
         }
         if (core.toggles.user !== false) {
            core.root.file('user.js').add().execute();
         }
         if (core.toggles.scripts !== false) {
            core.root.file('scripts').dir().execute();
         }
         if (core.toggles.config !== false) {
            const config = core.root.file('jsconfig.json');
            config.exists || config.add().write('{\n   "compilerOptions": {\n      "lib": [ "es2020" ]\n   }\n}\n');
         }
      },
      get manager () {
         return manager;
      },
      module: {
         action: (player, option, key, version) => {
            key = key.toLowerCase();
            const action = { add: 'Add', change: 'Chang', create: 'Creat', remove: 'Remov', update: 'Updat' }[option];
            try {
               player.sendMessage(`§7${action}ing... (${key})`);
               core.module[option](key, version);
               player.sendMessage(`§7Module ${action}ed. (${key})`);
            } catch (error) {
               switch (error) {
                  case 'module-already-installed':
                     player.sendMessage('§cThat module has already been installed!');
                     break;
                  case 'module-already-changed':
                     player.sendMessage('§cThat module is already installed with that version!');
                     break;
                  case 'module-already-updated':
                     player.sendMessage('§cThat module is already up to date!');
                     break;
                  case 'module-change-invalid':
                     player.sendMessage('§cThat module cannot be changed as it was created manually!');
                     break;
                  case 'module-download-failed':
                     player.sendMessage('§cAn error occured while downloading that module!');
                     break;
                  case 'module-invalid-version':
                     player.sendMessage('§cThat module has no release with that version!');
                     break;
                  case 'module-not-available':
                     player.sendMessage('§cThat module has no releases available!');
                     break;
                  case 'module-not-installed':
                     player.sendMessage('§cThat module has not already been installed!');
                     break;
                  case 'module-update-invalid':
                     player.sendMessage('§cThat module cannot be updated as it was created manually!');
                     break;
                  default:
                     player.sendMessage(`§cAn unexpected error occured while ${action}ing the "${key}" module!`);
                     console.error(error.stack || error.message || error);
               }
            }
         },
         add: (key, version) => {
            if (core.module.modules[key]) {
               throw 'module-already-installed';
            } else {
               core.module.modules[key] = core.module.download(key, version);
               core.module.dict();
            }
         },
         change: (key, version) => {
            if (core.module.modules[key]) {
               core.module.modules[key] = core.module.download(key, version);
               core.module.dict();
            } else if (core.module.modules[key] === null) {
               throw 'module-change-invalid';
            } else {
               throw 'module-not-installed';
            }
         },
         create: (key) => {
            if (core.module.modules[key]) {
               throw 'module-already-installed';
            } else {
               const folder = core.root.file('modules', key);
               folder.file('index.js').add().write("core.export({\n   abc: () => {\n      return 'xyz';\n   }\n});\n");
               folder.file('module.d.ts').add().write('export interface Main {\n   abc (): string\n}\n');
               folder.file('package.json').add().write('{\n   "main": "index.js",\n   "dependencies": {}\n}\n');
               core.module.modules[key] = null;
               core.module.dict();
            }
         },
         delete: (key, version, dependency) => {
            const root = dependency && core.module.dependencies[key];
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
         get dependencies () {
            return core.data('../dependencies');
         },
         dict: () => {
            if (core.toggles.dict !== false) {
               core.root.file('dict/imports.d.ts').add().write(
                  [
                     'export class imports {',
                     '   static import (name: string): any;',
                     ...Object.keys(core.module.modules).map((key) => {
                        return `   static import (name: '@${key}'): import('./../modules/${key}/module').Main;`;
                     }),
                     '}'
                  ].join('\n')
               );
            }
         },
         download: (key, version, dependency) => {
            let target;
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
         get modules () {
            return core.data('../modules');
         },
         package: (key, version, dependency) => {
            let main = 'index.js';
            let dependencies = {};
            const prefix = `The package file for "${key}${dependency ? `:${version}` : ''}"`;
            const folder = dependency ? core.root.file('dependencies', key, version) : core.root.file('modules', key);
            try {
               const info = folder.file('package.json').json() || {};
               if (typeof info.main === 'string') {
                  main = info.main;
               } else if (info.main !== void 0) {
                  console.warn(`${prefix} specifies an invalid "main" property.`);
               }
               if (info.dependencies && typeof info.dependencies === 'object') {
                  for (const key in info.dependencies) {
                     const value = info.dependencies[key];
                     if (![ 'string', 'undefined' ].includes(typeof value)) {
                        console.warn(
                           `${prefix} specifies an "dependencies" property with an invalid value at key "${key}"`
                        );
                     } else {
                        dependencies[key] = info.dependencies[key];
                     }
                  }
               } else if (info.dependencies !== void 0) {
                  console.warn(`${prefix} specifies an invalid "dependencies" property.`);
               }
            } catch (error) {
               console.error(`${prefix} could not be parsed as JSON!`);
            }
            return { main: folder.file(main), dependencies };
         },
         remove: (key) => {
            if (core.module.modules[key] || core.module.modules[key] === null) {
               core.module.delete(key);
               delete core.module.modules[key];
               core.module.dict();
            } else {
               throw 'module-not-installed';
            }
         },
         update: (key) => {
            if (core.module.modules[key]) {
               core.module.modules[key] = core.module.download(key);
               core.module.dict();
            } else if (core.module.modules[key] === null) {
               throw 'module-update-invalid';
            } else {
               throw 'module-not-installed';
            }
         },
         version: (key, version) => {
            for (const tag of core.fetch(`https://api.github.com/repos/${key}/tags`).json()) {
               if (!version || tag.name === version) {
                  return tag;
               }
            }
         }
      },
      get plugin () {
         return plugin;
      },
      refresh: (disable) => {
         HandlerList.unregisterAll(core.plugin);
         server.getScheduler().cancelTasks(core.plugin);
         for (const command of Object.values(core.session.command)) command.instance.unregister(core.registry);
         for (const path in core.session.data) {
            const data = JSON.stringify(core.format.serialize(core.session.data[path], true));
            core.root.file('data', `${path}.json`).add().write(data);
         }
         for (const key in global) delete global[key];
         storage = {};
         trusted = [];
         disable || core.init();
      },
      get registry () {
         return registry;
      },
      get root () {
         return core.file(core.plugin.getDataFolder().getPath().replace(/[\\]/g, '/'));
      },
      send: (player, message, action) => {
         const limit = action ? 128 : 2048;
         message.length > limit && (message = `${message.slice(0, limit - 3)}...`);
         if (action)
            core.version === 'modern' && player.sendMessage(ChatMessageType.ACTION_BAR, new TextComponent(message));
         else player.sendMessage(message);
      },
      task: {
         cancel: (index) => {
            delete core.session.task[index - 1];
         },
         interval: (script, period = 1, ...args) => {
            const callback = (...args) => {
               core.task.timeout(callback, period, ...args);
               core.session.task[index] = core.session.task.pop();
               script(...args);
            };
            let index = core.task.timeout(callback, 0, ...args);
            return index--;
         },
         timeout: (script, period = 0, ...args) => {
            return core.session.task.push({
               script,
               args,
               tick: core.session.tick + Math.ceil(period)
            });
         }
      },
      session: { type: {} },
      get storage () {
         return storage;
      },
      get toggles () {
         return core.data('../toggles');
      },
      type: (name) => {
         return core.session.type[name] || (core.session.type[name] = Java.type(name));
      },
      util: {
         chain: (base, modifier) => {
            const chain = (object) => modifier(object, chain);
            chain(base);
         },
         eval: (code) => {
            return Polyglot.eval('js', code);
         },
         filter: (value, array) => {
            return array.filter((element) => element.toLowerCase().includes(value.toLowerCase()));
         },
         transfer: (from, to, action) => {
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
         unzip: (from, to) => {
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

   const Bukkit = core.type('org.bukkit.Bukkit');
   const Command = core.extend('org.bukkit.command.Command');
   const FileInputStream = core.type('java.io.FileInputStream');
   const FileOutputStream = core.type('java.io.FileOutputStream');
   const Files = core.type('java.nio.file.Files');
   const HandlerList = core.type('org.bukkit.event.HandlerList');
   const Listener = core.extend('org.bukkit.event.Listener', {});
   const Runnable = core.extend('java.lang.Runnable');
   const Paths = core.type('java.nio.file.Paths');
   const Scanner = core.type('java.util.Scanner');
   const Source = core.type('org.graalvm.polyglot.Source');
   const StandardCopyOption = core.type('java.nio.file.StandardCopyOption');
   const URL = core.type('java.net.URL');
   const UUID = core.type('java.util.UUID');
   const ZipInputStream = core.type('java.util.zip.ZipInputStream');

   let EventPriority, EventType;

   try {
      EventPriority = core.type('org.bukkit.event.EventPriority');
   } catch (error) {
      EventPriority = core.type('org.bukkit.event.Event$Priority');
      EventType = core.type('org.bukkit.event.Event$Type');
   }

   const global = globalThis;
   const server = Bukkit.getServer();

   const manager = server.getPluginManager();
   const plugin = manager.getPlugin('grakkit');
   const context = plugin.getClass().static.context;

   const commandMap = server.getClass().getDeclaredField('commandMap');
   commandMap.setAccessible(true);
   const registry = commandMap.get(server);

   const base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
   const remote = 'https://raw.githubusercontent.com/grakkit/core/master';

   let storage = {};
   let trusted = [];

   core.init();
})();

/** @type {{ core: import('./dict/core').core, server: import('./dict/classes').obServer }} */
const { core, server } = {
   get core () {
      return globalThis.core;
   },
   get server () {
      return globalThis.server;
   }
};

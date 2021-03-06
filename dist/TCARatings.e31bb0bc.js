// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__spreadArray = __spreadArray;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__createBinding = exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var __createBinding = Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
};

exports.__createBinding = __createBinding;

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
/** @deprecated */


function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
/** @deprecated */


function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

var __setModuleDefault = Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
},{}],"node_modules/@firebase/util/dist/index.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areCookiesEnabled = areCookiesEnabled;
exports.async = async;
exports.calculateBackoffMillis = calculateBackoffMillis;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.extractQuerystring = extractQuerystring;
exports.getUA = getUA;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isIndexedDBAvailable = isIndexedDBAvailable;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isSafari = isSafari;
exports.isUWP = isUWP;
exports.jsonEval = jsonEval;
exports.map = map;
exports.ordinal = ordinal;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringify = stringify;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateIndexedDBOpenable = validateIndexedDBOpenable;
exports.validateNamespace = validateNamespace;
exports.validateArgCount = exports.stringToByteArray = exports.stringLength = exports.issuedAtTime = exports.isValidTimestamp = exports.isValidFormat = exports.isAdmin = exports.decode = exports.base64Encode = exports.base64Decode = exports.base64 = exports.assertionError = exports.assert = exports.Sha1 = exports.RANDOM_FACTOR = exports.MAX_VALUE_MILLIS = exports.FirebaseError = exports.ErrorFactory = exports.Deferred = exports.CONSTANTS = void 0;

var _tslib = require("tslib");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
  /**
   * @define {boolean} Whether this is the client Node.js SDK.
   */
  NODE_CLIENT: false,

  /**
   * @define {boolean} Whether this is the Admin Node.js SDK.
   */
  NODE_ADMIN: false,

  /**
   * Firebase SDK Version
   */
  SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Throws an error if the provided assertion is falsy
 */

exports.CONSTANTS = CONSTANTS;

var assert = function (assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};
/**
 * Returns an Error object suitable for throwing.
 */


exports.assert = assert;

var assertionError = function (message) {
  return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.assertionError = assertionError;

var stringToByteArray = function (str) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */


var byteArrayToString = function (bytes) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var pos = 0,
      c = 0;

  while (pos < bytes.length) {
    var c1 = bytes[pos++];

    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      // Surrogate Pair
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      var c4 = bytes[pos++];
      var u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else {
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }

  return out.join('');
}; // We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()


var base64 = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,

  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,

  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,

  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,

  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',

  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + '+/=';
  },

  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + '-_.';
  },

  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob === 'function',

  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray: function (input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error('encodeByteArray takes an array as a parameter');
    }

    this.init_();
    var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    var output = [];

    for (var i = 0; i < input.length; i += 3) {
      var byte1 = input[i];
      var haveByte2 = i + 1 < input.length;
      var byte2 = haveByte2 ? input[i + 1] : 0;
      var haveByte3 = i + 2 < input.length;
      var byte3 = haveByte3 ? input[i + 2] : 0;
      var outByte1 = byte1 >> 2;
      var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
      var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
      var outByte4 = byte3 & 0x3f;

      if (!haveByte3) {
        outByte4 = 64;

        if (!haveByte2) {
          outByte3 = 64;
        }
      }

      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }

    return output.join('');
  },

  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString: function (input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }

    return this.encodeByteArray(stringToByteArray(input), webSafe);
  },

  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString: function (input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }

    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },

  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray: function (input, webSafe) {
    this.init_();
    var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    var output = [];

    for (var i = 0; i < input.length;) {
      var byte1 = charToByteMap[input.charAt(i++)];
      var haveByte2 = i < input.length;
      var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      var haveByte3 = i < input.length;
      var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      var haveByte4 = i < input.length;
      var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;

      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw Error();
      }

      var outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);

      if (byte3 !== 64) {
        var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
        output.push(outByte2);

        if (byte4 !== 64) {
          var outByte3 = byte3 << 6 & 0xc0 | byte4;
          output.push(outByte3);
        }
      }
    }

    return output;
  },

  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_: function () {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {}; // We want quick mappings back and forth, so we precompute two maps.

      for (var i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i; // Be forgiving when decoding and correctly decode both encodings.

        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
/**
 * URL-safe base64 encoding
 */

exports.base64 = base64;

var base64Encode = function (str) {
  var utf8Bytes = stringToByteArray(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */


exports.base64Encode = base64Encode;

var base64Decode = function (str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error('base64Decode failed: ', e);
  }

  return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */


exports.base64Decode = base64Decode;

function deepCopy(value) {
  return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */


function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }

  switch (source.constructor) {
    case Date:
      // Treat Dates like scalars; if the target date object had any child
      // properties - they will be lost!
      var dateValue = source;
      return new Date(dateValue.getTime());

    case Object:
      if (target === undefined) {
        target = {};
      }

      break;

    case Array:
      // Always copy the array source and overwrite the target.
      target = [];
      break;

    default:
      // Not a plain Object - treat it as a scalar.
      return source;
  }

  for (var prop in source) {
    // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
    if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
      continue;
    }

    target[prop] = deepExtend(target[prop], source[prop]);
  }

  return target;
}

function isValidKey(key) {
  return key !== '__proto__';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Deferred =
/** @class */
function () {
  function Deferred() {
    var _this = this;

    this.reject = function () {};

    this.resolve = function () {};

    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */


  Deferred.prototype.wrapCallback = function (callback) {
    var _this = this;

    return function (error, value) {
      if (error) {
        _this.reject(error);
      } else {
        _this.resolve(value);
      }

      if (typeof callback === 'function') {
        // Attaching noop handler just in case developer wasn't expecting
        // promises
        _this.promise.catch(function () {}); // Some of our callbacks don't expect a value and our own tests
        // assert that the parameter length is 1


        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  };

  return Deferred;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */


exports.Deferred = Deferred;

function getUA() {
  if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
    return navigator['userAgent'];
  } else {
    return '';
  }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */


function isMobileCordova() {
  return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/


function isNode() {
  try {
    return Object.prototype.toString.call(global.process) === '[object process]';
  } catch (e) {
    return false;
  }
}
/**
 * Detect Browser Environment
 */


function isBrowser() {
  return typeof self === 'object' && self.self === self;
}

function isBrowserExtension() {
  var runtime = typeof chrome === 'object' ? chrome.runtime : typeof browser === 'object' ? browser.runtime : undefined;
  return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */


function isReactNative() {
  return typeof navigator === 'object' && navigator['product'] === 'ReactNative';
}
/** Detects Electron apps. */


function isElectron() {
  return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */


function isIE() {
  var ua = getUA();
  return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */


function isUWP() {
  return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */


function isNodeSdk() {
  return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */


function isSafari() {
  return !isNode() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */


function isIndexedDBAvailable() {
  return 'indexedDB' in self && indexedDB != null;
}
/**
 * This method validates browser context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 */


function validateIndexedDBOpenable() {
  return new Promise(function (resolve, reject) {
    try {
      var preExist_1 = true;
      var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
      var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);

      request_1.onsuccess = function () {
        request_1.result.close(); // delete database only when it doesn't pre-exist

        if (!preExist_1) {
          window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
        }

        resolve(true);
      };

      request_1.onupgradeneeded = function () {
        preExist_1 = false;
      };

      request_1.onerror = function () {
        var _a;

        reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
      };
    } catch (error) {
      reject(error);
    }
  });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */


function areCookiesEnabled() {
  if (!navigator || !navigator.cookieEnabled) {
    return false;
  }

  return true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ERROR_NAME = 'FirebaseError'; // Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

var FirebaseError =
/** @class */
function (_super) {
  (0, _tslib.__extends)(FirebaseError, _super);

  function FirebaseError(code, message, customData) {
    var _this = _super.call(this, message) || this;

    _this.code = code;
    _this.customData = customData;
    _this.name = ERROR_NAME; // Fix For ES5
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

    Object.setPrototypeOf(_this, FirebaseError.prototype); // Maintains proper stack trace for where our error was thrown.
    // Only available on V8.

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, ErrorFactory.prototype.create);
    }

    return _this;
  }

  return FirebaseError;
}(Error);

exports.FirebaseError = FirebaseError;

var ErrorFactory =
/** @class */
function () {
  function ErrorFactory(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }

  ErrorFactory.prototype.create = function (code) {
    var data = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      data[_i - 1] = arguments[_i];
    }

    var customData = data[0] || {};
    var fullCode = this.service + "/" + code;
    var template = this.errors[code];
    var message = template ? replaceTemplate(template, customData) : 'Error'; // Service Name: Error message (service/code).

    var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
    var error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  };

  return ErrorFactory;
}();

exports.ErrorFactory = ErrorFactory;

function replaceTemplate(template, data) {
  return template.replace(PATTERN, function (_, key) {
    var value = data[key];
    return value != null ? String(value) : "<" + key + "?>";
  });
}

var PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */

function jsonEval(str) {
  return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */


function stringify(data) {
  return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var decode = function (token) {
  var header = {},
      claims = {},
      data = {},
      signature = '';

  try {
    var parts = token.split('.');
    header = jsonEval(base64Decode(parts[0]) || '');
    claims = jsonEval(base64Decode(parts[1]) || '');
    signature = parts[2];
    data = claims['d'] || {};
    delete claims['d'];
  } catch (e) {}

  return {
    header: header,
    claims: claims,
    data: data,
    signature: signature
  };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.decode = decode;

var isValidTimestamp = function (token) {
  var claims = decode(token).claims;
  var now = Math.floor(new Date().getTime() / 1000);
  var validSince = 0,
      validUntil = 0;

  if (typeof claims === 'object') {
    if (claims.hasOwnProperty('nbf')) {
      validSince = claims['nbf'];
    } else if (claims.hasOwnProperty('iat')) {
      validSince = claims['iat'];
    }

    if (claims.hasOwnProperty('exp')) {
      validUntil = claims['exp'];
    } else {
      // token will expire after 24h by default
      validUntil = validSince + 86400;
    }
  }

  return !!now && !!validSince && !!validUntil && now >= validSince && now <= validUntil;
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.isValidTimestamp = isValidTimestamp;

var issuedAtTime = function (token) {
  var claims = decode(token).claims;

  if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
    return claims['iat'];
  }

  return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.issuedAtTime = issuedAtTime;

var isValidFormat = function (token) {
  var decoded = decode(token),
      claims = decoded.claims;
  return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


exports.isValidFormat = isValidFormat;

var isAdmin = function (token) {
  var claims = decode(token).claims;
  return typeof claims === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.isAdmin = isAdmin;

function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function safeGet(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}

function isEmpty(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

function map(obj, fn, contextObj) {
  var res = {};

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = fn.call(contextObj, obj[key], key, obj);
    }
  }

  return res;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */


function querystring(querystringParams) {
  var params = [];

  var _loop_1 = function (key, value) {
    if (Array.isArray(value)) {
      value.forEach(function (arrayVal) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  };

  for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
    var _b = _a[_i],
        key = _b[0],
        value = _b[1];

    _loop_1(key, value);
  }

  return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */


function querystringDecode(querystring) {
  var obj = {};
  var tokens = querystring.replace(/^\?/, '').split('&');
  tokens.forEach(function (token) {
    if (token) {
      var _a = token.split('='),
          key = _a[0],
          value = _a[1];

      obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  });
  return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */


function extractQuerystring(url) {
  var queryStart = url.indexOf('?');

  if (!queryStart) {
    return '';
  }

  var fragmentStart = url.indexOf('#', queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */

/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */


var Sha1 =
/** @class */
function () {
  function Sha1() {
    /**
     * Holds the previous values of accumulated variables a-e in the compress_
     * function.
     * @private
     */
    this.chain_ = [];
    /**
     * A buffer holding the partially computed hash result.
     * @private
     */

    this.buf_ = [];
    /**
     * An array of 80 bytes, each a part of the message to be hashed.  Referred to
     * as the message schedule in the docs.
     * @private
     */

    this.W_ = [];
    /**
     * Contains data needed to pad messages less than 64 bytes.
     * @private
     */

    this.pad_ = [];
    /**
     * @private {number}
     */

    this.inbuf_ = 0;
    /**
     * @private {number}
     */

    this.total_ = 0;
    this.blockSize = 512 / 8;
    this.pad_[0] = 128;

    for (var i = 1; i < this.blockSize; ++i) {
      this.pad_[i] = 0;
    }

    this.reset();
  }

  Sha1.prototype.reset = function () {
    this.chain_[0] = 0x67452301;
    this.chain_[1] = 0xefcdab89;
    this.chain_[2] = 0x98badcfe;
    this.chain_[3] = 0x10325476;
    this.chain_[4] = 0xc3d2e1f0;
    this.inbuf_ = 0;
    this.total_ = 0;
  };
  /**
   * Internal compress helper function.
   * @param buf Block to compress.
   * @param offset Offset of the block in the buffer.
   * @private
   */


  Sha1.prototype.compress_ = function (buf, offset) {
    if (!offset) {
      offset = 0;
    }

    var W = this.W_; // get 16 big endian words

    if (typeof buf === 'string') {
      for (var i = 0; i < 16; i++) {
        // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
        // have a bug that turns the post-increment ++ operator into pre-increment
        // during JIT compilation.  We have code that depends heavily on SHA-1 for
        // correctness and which is affected by this bug, so I've removed all uses
        // of post-increment ++ in which the result value is used.  We can revert
        // this change once the Safari bug
        // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
        // most clients have been updated.
        W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
        offset += 4;
      }
    } else {
      for (var i = 0; i < 16; i++) {
        W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
        offset += 4;
      }
    } // expand to 80 words


    for (var i = 16; i < 80; i++) {
      var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
      W[i] = (t << 1 | t >>> 31) & 0xffffffff;
    }

    var a = this.chain_[0];
    var b = this.chain_[1];
    var c = this.chain_[2];
    var d = this.chain_[3];
    var e = this.chain_[4];
    var f, k; // TODO(user): Try to unroll this loop to speed up the computation.

    for (var i = 0; i < 80; i++) {
      if (i < 40) {
        if (i < 20) {
          f = d ^ b & (c ^ d);
          k = 0x5a827999;
        } else {
          f = b ^ c ^ d;
          k = 0x6ed9eba1;
        }
      } else {
        if (i < 60) {
          f = b & c | d & (b | c);
          k = 0x8f1bbcdc;
        } else {
          f = b ^ c ^ d;
          k = 0xca62c1d6;
        }
      }

      var t = (a << 5 | a >>> 27) + f + e + k + W[i] & 0xffffffff;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) & 0xffffffff;
      b = a;
      a = t;
    }

    this.chain_[0] = this.chain_[0] + a & 0xffffffff;
    this.chain_[1] = this.chain_[1] + b & 0xffffffff;
    this.chain_[2] = this.chain_[2] + c & 0xffffffff;
    this.chain_[3] = this.chain_[3] + d & 0xffffffff;
    this.chain_[4] = this.chain_[4] + e & 0xffffffff;
  };

  Sha1.prototype.update = function (bytes, length) {
    // TODO(johnlenz): tighten the function signature and remove this check
    if (bytes == null) {
      return;
    }

    if (length === undefined) {
      length = bytes.length;
    }

    var lengthMinusBlock = length - this.blockSize;
    var n = 0; // Using local instead of member variables gives ~5% speedup on Firefox 16.

    var buf = this.buf_;
    var inbuf = this.inbuf_; // The outer while loop should execute at most twice.

    while (n < length) {
      // When we have no data in the block to top up, we can directly process the
      // input buffer (assuming it contains sufficient data). This gives ~25%
      // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
      // the data is provided in large chunks (or in multiples of 64 bytes).
      if (inbuf === 0) {
        while (n <= lengthMinusBlock) {
          this.compress_(bytes, n);
          n += this.blockSize;
        }
      }

      if (typeof bytes === 'string') {
        while (n < length) {
          buf[inbuf] = bytes.charCodeAt(n);
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      } else {
        while (n < length) {
          buf[inbuf] = bytes[n];
          ++inbuf;
          ++n;

          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

            break;
          }
        }
      }
    }

    this.inbuf_ = inbuf;
    this.total_ += length;
  };
  /** @override */


  Sha1.prototype.digest = function () {
    var digest = [];
    var totalBits = this.total_ * 8; // Add pad 0x80 0x00*.

    if (this.inbuf_ < 56) {
      this.update(this.pad_, 56 - this.inbuf_);
    } else {
      this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    } // Add # bits.


    for (var i = this.blockSize - 1; i >= 56; i--) {
      this.buf_[i] = totalBits & 255;
      totalBits /= 256; // Don't use bit-shifting here!
    }

    this.compress_(this.buf_);
    var n = 0;

    for (var i = 0; i < 5; i++) {
      for (var j = 24; j >= 0; j -= 8) {
        digest[n] = this.chain_[i] >> j & 255;
        ++n;
      }
    }

    return digest;
  };

  return Sha1;
}();
/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */


exports.Sha1 = Sha1;

function createSubscribe(executor, onNoObservers) {
  var proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */


var ObserverProxy =
/** @class */
function () {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  function ObserverProxy(executor, onNoObservers) {
    var _this = this;

    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0; // Micro-task scheduling by calling task.then().

    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers; // Call the executor asynchronously so subscribers that are called
    // synchronously after the creation of the subscribe function
    // can still receive the very first value generated in the executor.

    this.task.then(function () {
      executor(_this);
    }).catch(function (e) {
      _this.error(e);
    });
  }

  ObserverProxy.prototype.next = function (value) {
    this.forEachObserver(function (observer) {
      observer.next(value);
    });
  };

  ObserverProxy.prototype.error = function (error) {
    this.forEachObserver(function (observer) {
      observer.error(error);
    });
    this.close(error);
  };

  ObserverProxy.prototype.complete = function () {
    this.forEachObserver(function (observer) {
      observer.complete();
    });
    this.close();
  };
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber sychronously to their
   *   call to subscribe().
   */


  ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
    var _this = this;

    var observer;

    if (nextOrObserver === undefined && error === undefined && complete === undefined) {
      throw new Error('Missing Observer.');
    } // Assemble an Observer object when passed as callback functions.


    if (implementsAnyMethods(nextOrObserver, ['next', 'error', 'complete'])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error: error,
        complete: complete
      };
    }

    if (observer.next === undefined) {
      observer.next = noop;
    }

    if (observer.error === undefined) {
      observer.error = noop;
    }

    if (observer.complete === undefined) {
      observer.complete = noop;
    }

    var unsub = this.unsubscribeOne.bind(this, this.observers.length); // Attempt to subscribe to a terminated Observable - we
    // just respond to the Observer with the final error or complete
    // event.

    if (this.finalized) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.task.then(function () {
        try {
          if (_this.finalError) {
            observer.error(_this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {// nothing
        }

        return;
      });
    }

    this.observers.push(observer);
    return unsub;
  }; // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.


  ObserverProxy.prototype.unsubscribeOne = function (i) {
    if (this.observers === undefined || this.observers[i] === undefined) {
      return;
    }

    delete this.observers[i];
    this.observerCount -= 1;

    if (this.observerCount === 0 && this.onNoObservers !== undefined) {
      this.onNoObservers(this);
    }
  };

  ObserverProxy.prototype.forEachObserver = function (fn) {
    if (this.finalized) {
      // Already closed by previous event....just eat the additional values.
      return;
    } // Since sendOne calls asynchronously - there is no chance that
    // this.observers will become undefined.


    for (var i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn);
    }
  }; // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.


  ObserverProxy.prototype.sendOne = function (i, fn) {
    var _this = this; // Execute the callback asynchronously
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this.task.then(function () {
      if (_this.observers !== undefined && _this.observers[i] !== undefined) {
        try {
          fn(_this.observers[i]);
        } catch (e) {
          // Ignore exceptions raised in Observers or missing methods of an
          // Observer.
          // Log error to console. b/31404806
          if (typeof console !== 'undefined' && console.error) {
            console.error(e);
          }
        }
      }
    });
  };

  ObserverProxy.prototype.close = function (err) {
    var _this = this;

    if (this.finalized) {
      return;
    }

    this.finalized = true;

    if (err !== undefined) {
      this.finalError = err;
    } // Proxy is no longer needed - garbage collect references
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    this.task.then(function () {
      _this.observers = undefined;
      _this.onNoObservers = undefined;
    });
  };

  return ObserverProxy;
}();
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types


function async(fn, onError) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    Promise.resolve(true).then(function () {
      fn.apply(void 0, args);
    }).catch(function (error) {
      if (onError) {
        onError(error);
      }
    });
  };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */


function implementsAnyMethods(obj, methods) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
    var method = methods_1[_i];

    if (method in obj && typeof obj[method] === 'function') {
      return true;
    }
  }

  return false;
}

function noop() {// do nothing
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */


var validateArgCount = function (fnName, minCount, maxCount, argCount) {
  var argError;

  if (argCount < minCount) {
    argError = 'at least ' + minCount;
  } else if (argCount > maxCount) {
    argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
  }

  if (argError) {
    var error = fnName + ' failed: Was called with ' + argCount + (argCount === 1 ? ' argument.' : ' arguments.') + ' Expects ' + argError + '.';
    throw new Error(error);
  }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */


exports.validateArgCount = validateArgCount;

function errorPrefix(fnName, argumentNumber, optional) {
  var argName = '';

  switch (argumentNumber) {
    case 1:
      argName = optional ? 'first' : 'First';
      break;

    case 2:
      argName = optional ? 'second' : 'Second';
      break;

    case 3:
      argName = optional ? 'third' : 'Third';
      break;

    case 4:
      argName = optional ? 'fourth' : 'Fourth';
      break;

    default:
      throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
  }

  var error = fnName + ' failed: ';
  error += argName + ' argument ';
  return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */


function validateNamespace(fnName, argumentNumber, namespace, optional) {
  if (optional && !namespace) {
    return;
  }

  if (typeof namespace !== 'string') {
    //TODO: I should do more validation here. We only allow certain chars in namespaces.
    throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid firebase namespace.');
  }
}

function validateCallback(fnName, argumentNumber, // eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
  if (optional && !callback) {
    return;
  }

  if (typeof callback !== 'function') {
    throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid function.');
  }
}

function validateContextObject(fnName, argumentNumber, context, optional) {
  if (optional && !context) {
    return;
  }

  if (typeof context !== 'object' || context === null) {
    throw new Error(errorPrefix(fnName, argumentNumber, optional) + 'must be a valid context object.');
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3

/**
 * @param {string} str
 * @return {Array}
 */


var stringToByteArray$1 = function (str) {
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i); // Is this the lead surrogate in a surrogate pair?

    if (c >= 0xd800 && c <= 0xdbff) {
      var high = c - 0xd800; // the high 10 bits.

      i++;
      assert(i < str.length, 'Surrogate pair missing trail surrogate.');
      var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.

      c = 0x10000 + (high << 10) + low;
    }

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if (c < 65536) {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */


exports.stringToByteArray = stringToByteArray$1;

var stringLength = function (str) {
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      p++;
    } else if (c < 2048) {
      p += 2;
    } else if (c >= 0xd800 && c <= 0xdbff) {
      // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
      p += 4;
      i++; // skip trail surrogate.
    } else {
      p += 3;
    }
  }

  return p;
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The amount of milliseconds to exponentially increase.
 */


exports.stringLength = stringLength;
var DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */

var DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */

var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.

/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */

exports.MAX_VALUE_MILLIS = MAX_VALUE_MILLIS;
var RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */

exports.RANDOM_FACTOR = RANDOM_FACTOR;

function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
  if (intervalMillis === void 0) {
    intervalMillis = DEFAULT_INTERVAL_MILLIS;
  }

  if (backoffFactor === void 0) {
    backoffFactor = DEFAULT_BACKOFF_FACTOR;
  } // Calculates an exponentially increasing value.
  // Deviation: calculates value from count and a constant interval, so we only need to save value
  // and count to restore state.


  var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount); // A random "fuzz" to avoid waves of retries.
  // Deviation: randomFactor is required.

  var randomWait = Math.round( // A fraction of the backoff value to add/subtract.
  // Deviation: changes multiplication order to improve readability.
  RANDOM_FACTOR * currBaseValue * ( // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
  // if we add or subtract.
  Math.random() - 0.5) * 2); // Limits backoff to max to avoid effectively permanent backoff.

  return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provide English ordinal letters after a number
 */


function ordinal(i) {
  if (!Number.isFinite(i)) {
    return "" + i;
  }

  return i + indicator(i);
}

function indicator(i) {
  i = Math.abs(i);
  var cent = i % 100;

  if (cent >= 10 && cent <= 20) {
    return 'th';
  }

  var dec = i % 10;

  if (dec === 1) {
    return 'st';
  }

  if (dec === 2) {
    return 'nd';
  }

  if (dec === 3) {
    return 'rd';
  }

  return 'th';
}
},{"tslib":"node_modules/tslib/tslib.es6.js"}],"node_modules/@firebase/component/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.ComponentContainer = exports.Component = void 0;

var _tslib = require("tslib");

var _util = require("@firebase/util");

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component =
/** @class */
function () {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  function Component(name, instanceFactory, type) {
    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    /**
     * Properties to be added to the service namespace
     */

    this.serviceProps = {};
    this.instantiationMode = "LAZY"
    /* LAZY */
    ;
  }

  Component.prototype.setInstantiationMode = function (mode) {
    this.instantiationMode = mode;
    return this;
  };

  Component.prototype.setMultipleInstances = function (multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  };

  Component.prototype.setServiceProps = function (props) {
    this.serviceProps = props;
    return this;
  };

  return Component;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.Component = Component;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */

var Provider =
/** @class */
function () {
  function Provider(name, container) {
    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */


  Provider.prototype.get = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    } // if multipleInstances is not supported, use the default name


    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      var deferred = new _util.Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred); // If the service instance is available, resolve the promise with it immediately

      try {
        var instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });

        if (instance) {
          deferred.resolve(instance);
        }
      } catch (e) {// when the instance factory throws an exception during get(), it should not cause
        // a fatal error. We just return the unresolved promise in this case.
      }
    }

    return this.instancesDeferred.get(normalizedIdentifier).promise;
  };

  Provider.prototype.getImmediate = function (options) {
    var _a = (0, _tslib.__assign)({
      identifier: DEFAULT_ENTRY_NAME,
      optional: false
    }, options),
        identifier = _a.identifier,
        optional = _a.optional; // if multipleInstances is not supported, use the default name


    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

    try {
      var instance = this.getOrInitializeService({
        instanceIdentifier: normalizedIdentifier
      });

      if (!instance) {
        if (optional) {
          return null;
        }

        throw Error("Service " + this.name + " is not available");
      }

      return instance;
    } catch (e) {
      if (optional) {
        return null;
      } else {
        throw e;
      }
    }
  };

  Provider.prototype.getComponent = function () {
    return this.component;
  };

  Provider.prototype.setComponent = function (component) {
    var e_1, _a;

    if (component.name !== this.name) {
      throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
    }

    if (this.component) {
      throw Error("Component for " + this.name + " has already been provided");
    }

    this.component = component; // if the service is eager, initialize the default instance

    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({
          instanceIdentifier: DEFAULT_ENTRY_NAME
        });
      } catch (e) {// when the instance factory for an eager Component throws an exception during the eager
        // initialization, it should not cause a fatal error.
        // TODO: Investigate if we need to make it configurable, because some component may want to cause
        // a fatal error in this case?
      }
    }

    try {
      // Create service instances for the pending promises and resolve them
      // NOTE: if this.multipleInstances is false, only the default instance will be created
      // and all promises with resolve with it regardless of the identifier.
      for (var _b = (0, _tslib.__values)(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = (0, _tslib.__read)(_c.value, 2),
            instanceIdentifier = _d[0],
            instanceDeferred = _d[1];

        var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

        try {
          // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
          var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          instanceDeferred.resolve(instance);
        } catch (e) {// when the instance factory throws an exception, it should not cause
          // a fatal error. We just leave the promise unresolved.
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  };

  Provider.prototype.clearInstance = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    this.instancesDeferred.delete(identifier);
    this.instances.delete(identifier);
  }; // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?


  Provider.prototype.delete = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var services;
      return (0, _tslib.__generator)(this, function (_a) {
        switch (_a.label) {
          case 0:
            services = Array.from(this.instances.values());
            return [4
            /*yield*/
            , Promise.all((0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__read)(services.filter(function (service) {
              return 'INTERNAL' in service;
            }) // legacy services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map(function (service) {
              return service.INTERNAL.delete();
            }))), (0, _tslib.__read)(services.filter(function (service) {
              return '_delete' in service;
            }) // modularized services
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map(function (service) {
              return service._delete();
            }))))];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Provider.prototype.isComponentSet = function () {
    return this.component != null;
  };

  Provider.prototype.isInitialized = function (identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME;
    }

    return this.instances.has(identifier);
  };

  Provider.prototype.initialize = function (opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _a = opts.instanceIdentifier,
        instanceIdentifier = _a === void 0 ? DEFAULT_ENTRY_NAME : _a,
        _b = opts.options,
        options = _b === void 0 ? {} : _b;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
    }

    if (!this.isComponentSet()) {
      throw Error("Component " + this.name + " has not been registered yet");
    }

    return this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options: options
    });
  };

  Provider.prototype.getOrInitializeService = function (_a) {
    var instanceIdentifier = _a.instanceIdentifier,
        _b = _a.options,
        options = _b === void 0 ? {} : _b;
    var instance = this.instances.get(instanceIdentifier);

    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options: options
      });
      this.instances.set(instanceIdentifier, instance);
    }

    return instance || null;
  };

  Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
    } else {
      return identifier; // assume multiple instances are supported before the component is provided.
    }
  };

  return Provider;
}(); // undefined should be passed to the service factory for the default instance


exports.Provider = Provider;

function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}

function isComponentEager(component) {
  return component.instantiationMode === "EAGER"
  /* EAGER */
  ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */


var ComponentContainer =
/** @class */
function () {
  function ComponentContainer(name) {
    this.name = name;
    this.providers = new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */


  ComponentContainer.prototype.addComponent = function (component) {
    var provider = this.getProvider(component.name);

    if (provider.isComponentSet()) {
      throw new Error("Component " + component.name + " has already been registered with " + this.name);
    }

    provider.setComponent(component);
  };

  ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
    var provider = this.getProvider(component.name);

    if (provider.isComponentSet()) {
      // delete the existing provider from the container, so we can register the new component
      this.providers.delete(component.name);
    }

    this.addComponent(component);
  };
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */


  ComponentContainer.prototype.getProvider = function (name) {
    if (this.providers.has(name)) {
      return this.providers.get(name);
    } // create a Provider for a service that hasn't registered with Firebase


    var provider = new Provider(name, this);
    this.providers.set(name, provider);
    return provider;
  };

  ComponentContainer.prototype.getProviders = function () {
    return Array.from(this.providers.values());
  };

  return ComponentContainer;
}();

exports.ComponentContainer = ComponentContainer;
},{"tslib":"node_modules/tslib/tslib.es6.js","@firebase/util":"node_modules/@firebase/util/dist/index.esm.js"}],"node_modules/@firebase/logger/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogLevel = setLogLevel;
exports.setUserLogHandler = setUserLogHandler;
exports.Logger = exports.LogLevel = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var _a;
/**
 * A container for all of the Logger instances
 */


var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */

var LogLevel;
exports.LogLevel = LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (exports.LogLevel = LogLevel = {}));

var levelStringToEnum = {
  'debug': LogLevel.DEBUG,
  'verbose': LogLevel.VERBOSE,
  'info': LogLevel.INFO,
  'warn': LogLevel.WARN,
  'error': LogLevel.ERROR,
  'silent': LogLevel.SILENT
};
/**
 * The default log level
 */

var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */

var ConsoleMethod = (_a = {}, _a[LogLevel.DEBUG] = 'log', _a[LogLevel.VERBOSE] = 'log', _a[LogLevel.INFO] = 'info', _a[LogLevel.WARN] = 'warn', _a[LogLevel.ERROR] = 'error', _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */

var defaultLogHandler = function (instance, logType) {
  var args = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }

  if (logType < instance.logLevel) {
    return;
  }

  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];

  if (method) {
    console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
  }
};

var Logger =
/** @class */
function () {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  function Logger(name) {
    this.name = name;
    /**
     * The log level of the given Logger instance.
     */

    this._logLevel = defaultLogLevel;
    /**
     * The main (internal) log handler for the Logger instance.
     * Can be set to a new function in internal package code but not by user.
     */

    this._logHandler = defaultLogHandler;
    /**
     * The optional, additional, user-defined log handler for the Logger instance.
     */

    this._userLogHandler = null;
    /**
     * Capture the current instance for later use
     */

    instances.push(this);
  }

  Object.defineProperty(Logger.prototype, "logLevel", {
    get: function () {
      return this._logLevel;
    },
    set: function (val) {
      if (!(val in LogLevel)) {
        throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
      }

      this._logLevel = val;
    },
    enumerable: false,
    configurable: true
  }); // Workaround for setter/getter having to be the same type.

  Logger.prototype.setLogLevel = function (val) {
    this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
  };

  Object.defineProperty(Logger.prototype, "logHandler", {
    get: function () {
      return this._logHandler;
    },
    set: function (val) {
      if (typeof val !== 'function') {
        throw new TypeError('Value assigned to `logHandler` must be a function');
      }

      this._logHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Logger.prototype, "userLogHandler", {
    get: function () {
      return this._userLogHandler;
    },
    set: function (val) {
      this._userLogHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * The functions below are all based on the `console` interface
   */

  Logger.prototype.debug = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
  };

  Logger.prototype.log = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
  };

  Logger.prototype.info = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
  };

  Logger.prototype.warn = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
  };

  Logger.prototype.error = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
  };

  return Logger;
}();

exports.Logger = Logger;

function setLogLevel(level) {
  instances.forEach(function (inst) {
    inst.setLogLevel(level);
  });
}

function setUserLogHandler(logCallback, options) {
  var _loop_1 = function (instance) {
    var customLogLevel = null;

    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }

    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = function (instance, level) {
        var args = [];

        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }

        var message = args.map(function (arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === 'string') {
            return arg;
          } else if (typeof arg === 'number' || typeof arg === 'boolean') {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function (arg) {
          return arg;
        }).join(' ');

        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message: message,
            args: args,
            type: instance.name
          });
        }
      };
    }
  };

  for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
    var instance = instances_1[_i];

    _loop_1(instance);
  }
}
},{}],"node_modules/@firebase/app/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firebase = exports.default = void 0;

var _tslib = require("tslib");

var _util = require("@firebase/util");

var _component = require("@firebase/component");

var _logger = require("@firebase/logger");

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;

var ERRORS = (_a = {}, _a["no-app"
/* NO_APP */
] = "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()', _a["bad-app-name"
/* BAD_APP_NAME */
] = "Illegal App name: '{$appName}", _a["duplicate-app"
/* DUPLICATE_APP */
] = "Firebase App named '{$appName}' already exists", _a["app-deleted"
/* APP_DELETED */
] = "Firebase App named '{$appName}' already deleted", _a["invalid-app-argument"
/* INVALID_APP_ARGUMENT */
] = 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.', _a["invalid-log-argument"
/* INVALID_LOG_ARGUMENT */
] = 'First argument to `onLog` must be null or a function.', _a);
var ERROR_FACTORY = new _util.ErrorFactory('app', 'Firebase', ERRORS);
var name = "@firebase/app";
var version = "0.6.17";
var name$1 = "@firebase/analytics";
var name$2 = "@firebase/auth";
var name$3 = "@firebase/database";
var name$4 = "@firebase/functions";
var name$5 = "@firebase/installations";
var name$6 = "@firebase/messaging";
var name$7 = "@firebase/performance";
var name$8 = "@firebase/remote-config";
var name$9 = "@firebase/storage";
var name$a = "@firebase/firestore";
var name$b = "firebase-wrapper";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _a$1;

var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {}, _a$1[name] = 'fire-core', _a$1[name$1] = 'fire-analytics', _a$1[name$2] = 'fire-auth', _a$1[name$3] = 'fire-rtdb', _a$1[name$4] = 'fire-fn', _a$1[name$5] = 'fire-iid', _a$1[name$6] = 'fire-fcm', _a$1[name$7] = 'fire-perf', _a$1[name$8] = 'fire-rc', _a$1[name$9] = 'fire-gcs', _a$1[name$a] = 'fire-fst', _a$1['fire-js'] = 'fire-js', _a$1[name$b] = 'fire-js-all', _a$1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var logger = new _logger.Logger('@firebase/app');
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */

var FirebaseAppImpl =
/** @class */
function () {
  function FirebaseAppImpl(options, config, firebase_) {
    var _this = this;

    this.firebase_ = firebase_;
    this.isDeleted_ = false;
    this.name_ = config.name;
    this.automaticDataCollectionEnabled_ = config.automaticDataCollectionEnabled || false;
    this.options_ = (0, _util.deepCopy)(options);
    this.container = new _component.ComponentContainer(config.name); // add itself to container

    this._addComponent(new _component.Component('app', function () {
      return _this;
    }, "PUBLIC"
    /* PUBLIC */
    )); // populate ComponentContainer with existing components


    this.firebase_.INTERNAL.components.forEach(function (component) {
      return _this._addComponent(component);
    });
  }

  Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
    get: function () {
      this.checkDestroyed_();
      return this.automaticDataCollectionEnabled_;
    },
    set: function (val) {
      this.checkDestroyed_();
      this.automaticDataCollectionEnabled_ = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "name", {
    get: function () {
      this.checkDestroyed_();
      return this.name_;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(FirebaseAppImpl.prototype, "options", {
    get: function () {
      this.checkDestroyed_();
      return this.options_;
    },
    enumerable: false,
    configurable: true
  });

  FirebaseAppImpl.prototype.delete = function () {
    var _this = this;

    return new Promise(function (resolve) {
      _this.checkDestroyed_();

      resolve();
    }).then(function () {
      _this.firebase_.INTERNAL.removeApp(_this.name_);

      return Promise.all(_this.container.getProviders().map(function (provider) {
        return provider.delete();
      }));
    }).then(function () {
      _this.isDeleted_ = true;
    });
  };
  /**
   * Return a service instance associated with this app (creating it
   * on demand), identified by the passed instanceIdentifier.
   *
   * NOTE: Currently storage and functions are the only ones that are leveraging this
   * functionality. They invoke it by calling:
   *
   * ```javascript
   * firebase.app().storage('STORAGE BUCKET ID')
   * ```
   *
   * The service name is passed to this already
   * @internal
   */


  FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    }

    this.checkDestroyed_(); // getImmediate will always succeed because _getService is only called for registered components.

    return this.container.getProvider(name).getImmediate({
      identifier: instanceIdentifier
    });
  };
  /**
   * Remove a service instance from the cache, so we will create a new instance for this service
   * when people try to get this service again.
   *
   * NOTE: currently only firestore is using this functionality to support firestore shutdown.
   *
   * @param name The service name
   * @param instanceIdentifier instance identifier in case multiple instances are allowed
   * @internal
   */


  FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
    if (instanceIdentifier === void 0) {
      instanceIdentifier = DEFAULT_ENTRY_NAME;
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any


    this.container.getProvider(name).clearInstance(instanceIdentifier);
  };
  /**
   * @param component the component being added to this app's container
   */


  FirebaseAppImpl.prototype._addComponent = function (component) {
    try {
      this.container.addComponent(component);
    } catch (e) {
      logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
    }
  };

  FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
    this.container.addOrOverwriteComponent(component);
  };

  FirebaseAppImpl.prototype.toJSON = function () {
    return {
      name: this.name,
      automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
      options: this.options
    };
  };
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */


  FirebaseAppImpl.prototype.checkDestroyed_ = function () {
    if (this.isDeleted_) {
      throw ERROR_FACTORY.create("app-deleted"
      /* APP_DELETED */
      , {
        appName: this.name_
      });
    }
  };

  return FirebaseAppImpl;
}(); // Prevent dead-code elimination of these methods w/o invalid property
// copying.


FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options || FirebaseAppImpl.prototype.delete || console.log('dc');
var version$1 = "8.3.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */

function createFirebaseNamespaceCore(firebaseAppImpl) {
  var apps = {}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var components = new Map(); // A namespace is a plain JavaScript Object.

  var namespace = {
    // Hack to prevent Babel from modifying the object returned
    // as the firebase namespace.
    // @ts-ignore
    __esModule: true,
    initializeApp: initializeApp,
    // @ts-ignore
    app: app,
    registerVersion: registerVersion,
    setLogLevel: _logger.setLogLevel,
    onLog: onLog,
    // @ts-ignore
    apps: null,
    SDK_VERSION: version$1,
    INTERNAL: {
      registerComponent: registerComponent,
      removeApp: removeApp,
      components: components,
      useAsService: useAsService
    }
  }; // Inject a circular default export to allow Babel users who were previously
  // using:
  //
  //   import firebase from 'firebase';
  //   which becomes: var firebase = require('firebase').default;
  //
  // instead of
  //
  //   import * as firebase from 'firebase';
  //   which becomes: var firebase = require('firebase');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  namespace['default'] = namespace; // firebase.apps is a read-only getter.

  Object.defineProperty(namespace, 'apps', {
    get: getApps
  });
  /**
   * Called by App.delete() - but before any services associated with the App
   * are deleted.
   */

  function removeApp(name) {
    delete apps[name];
  }
  /**
   * Get the App object for a given name (or DEFAULT).
   */


  function app(name) {
    name = name || DEFAULT_ENTRY_NAME;

    if (!(0, _util.contains)(apps, name)) {
      throw ERROR_FACTORY.create("no-app"
      /* NO_APP */
      , {
        appName: name
      });
    }

    return apps[name];
  } // @ts-ignore


  app['App'] = firebaseAppImpl;

  function initializeApp(options, rawConfig) {
    if (rawConfig === void 0) {
      rawConfig = {};
    }

    if (typeof rawConfig !== 'object' || rawConfig === null) {
      var name_1 = rawConfig;
      rawConfig = {
        name: name_1
      };
    }

    var config = rawConfig;

    if (config.name === undefined) {
      config.name = DEFAULT_ENTRY_NAME;
    }

    var name = config.name;

    if (typeof name !== 'string' || !name) {
      throw ERROR_FACTORY.create("bad-app-name"
      /* BAD_APP_NAME */
      , {
        appName: String(name)
      });
    }

    if ((0, _util.contains)(apps, name)) {
      throw ERROR_FACTORY.create("duplicate-app"
      /* DUPLICATE_APP */
      , {
        appName: name
      });
    }

    var app = new firebaseAppImpl(options, config, namespace);
    apps[name] = app;
    return app;
  }
  /*
   * Return an array of all the non-deleted FirebaseApps.
   */


  function getApps() {
    // Make a copy so caller cannot mutate the apps list.
    return Object.keys(apps).map(function (name) {
      return apps[name];
    });
  }

  function registerComponent(component) {
    var componentName = component.name;

    if (components.has(componentName)) {
      logger.debug("There were multiple attempts to register component " + componentName + ".");
      return component.type === "PUBLIC"
      /* PUBLIC */
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      namespace[componentName] : null;
    }

    components.set(componentName, component); // create service namespace for public components

    if (component.type === "PUBLIC"
    /* PUBLIC */
    ) {
        // The Service namespace is an accessor function ...
        var serviceNamespace = function (appArg) {
          if (appArg === void 0) {
            appArg = app();
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          if (typeof appArg[componentName] !== 'function') {
            // Invalid argument.
            // This happens in the following case: firebase.storage('gs:/')
            throw ERROR_FACTORY.create("invalid-app-argument"
            /* INVALID_APP_ARGUMENT */
            , {
              appName: componentName
            });
          } // Forward service instance lookup to the FirebaseApp.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any


          return appArg[componentName]();
        }; // ... and a container for service-level properties.


        if (component.serviceProps !== undefined) {
          (0, _util.deepExtend)(serviceNamespace, component.serviceProps);
        } // eslint-disable-next-line @typescript-eslint/no-explicit-any


        namespace[componentName] = serviceNamespace; // Patch the FirebaseAppImpl prototype
        // eslint-disable-next-line @typescript-eslint/no-explicit-any

        firebaseAppImpl.prototype[componentName] = // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
        // option added to the no-explicit-any rule when ESlint releases it.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var serviceFxn = this._getService.bind(this, componentName);

          return serviceFxn.apply(this, component.multipleInstances ? args : []);
        };
      } // add the component to existing app instances


    for (var _i = 0, _a = Object.keys(apps); _i < _a.length; _i++) {
      var appName = _a[_i];

      apps[appName]._addComponent(component);
    }

    return component.type === "PUBLIC"
    /* PUBLIC */
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace[componentName] : null;
  }

  function registerVersion(libraryKeyOrName, version, variant) {
    var _a; // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.


    var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;

    if (variant) {
      library += "-" + variant;
    }

    var libraryMismatch = library.match(/\s|\//);
    var versionMismatch = version.match(/\s|\//);

    if (libraryMismatch || versionMismatch) {
      var warning = ["Unable to register library \"" + library + "\" with version \"" + version + "\":"];

      if (libraryMismatch) {
        warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
      }

      if (libraryMismatch && versionMismatch) {
        warning.push('and');
      }

      if (versionMismatch) {
        warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
      }

      logger.warn(warning.join(' '));
      return;
    }

    registerComponent(new _component.Component(library + "-version", function () {
      return {
        library: library,
        version: version
      };
    }, "VERSION"
    /* VERSION */
    ));
  }

  function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
      throw ERROR_FACTORY.create("invalid-log-argument"
      /* INVALID_LOG_ARGUMENT */
      );
    }

    (0, _logger.setUserLogHandler)(logCallback, options);
  } // Map the requested service to a registered service name
  // (used to map auth to serverAuth service when needed).


  function useAsService(app, name) {
    if (name === 'serverAuth') {
      return null;
    }

    var useService = name;
    return useService;
  }

  return namespace;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */


function createFirebaseNamespace() {
  var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
  namespace.INTERNAL = (0, _tslib.__assign)((0, _tslib.__assign)({}, namespace.INTERNAL), {
    createFirebaseNamespace: createFirebaseNamespace,
    extendNamespace: extendNamespace,
    createSubscribe: _util.createSubscribe,
    ErrorFactory: _util.ErrorFactory,
    deepExtend: _util.deepExtend
  });
  /**
   * Patch the top-level firebase namespace with additional properties.
   *
   * firebase.INTERNAL.extendNamespace()
   */

  function extendNamespace(props) {
    (0, _util.deepExtend)(namespace, props);
  }

  return namespace;
}

var firebase = createFirebaseNamespace();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PlatformLoggerService =
/** @class */
function () {
  function PlatformLoggerService(container) {
    this.container = container;
  } // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.


  PlatformLoggerService.prototype.getPlatformInfoString = function () {
    var providers = this.container.getProviders(); // Loop through providers and get library/version pairs from any that are
    // version components.

    return providers.map(function (provider) {
      if (isVersionServiceProvider(provider)) {
        var service = provider.getImmediate();
        return service.library + "/" + service.version;
      } else {
        return null;
      }
    }).filter(function (logString) {
      return logString;
    }).join(' ');
  };

  return PlatformLoggerService;
}();
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */


function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION"
  /* VERSION */
  ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function registerCoreComponents(firebase, variant) {
  firebase.INTERNAL.registerComponent(new _component.Component('platform-logger', function (container) {
    return new PlatformLoggerService(container);
  }, "PRIVATE"
  /* PRIVATE */
  )); // Register `app` package.

  firebase.registerVersion(name, version, variant); // Register platform SDK identifier (no version).

  firebase.registerVersion('fire-js', '');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any


if ((0, _util.isBrowser)() && self.firebase !== undefined) {
  logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "); // eslint-disable-next-line

  var sdkVersion = self.firebase.SDK_VERSION;

  if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
    logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
  }
}

var initializeApp = firebase.initializeApp; // TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any

firebase.initializeApp = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  } // Environment check before initializing app
  // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
  // in @firebase/logger


  if ((0, _util.isNode)()) {
    logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      ");
  }

  return initializeApp.apply(undefined, args);
};

var firebase$1 = firebase;
exports.firebase = firebase$1;
registerCoreComponents(firebase$1);
var _default = firebase$1;
exports.default = _default;
},{"tslib":"node_modules/tslib/tslib.es6.js","@firebase/util":"node_modules/@firebase/util/dist/index.esm.js","@firebase/component":"node_modules/@firebase/component/dist/index.esm.js","@firebase/logger":"node_modules/@firebase/logger/dist/index.esm.js"}],"node_modules/firebase/app/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _app.default;
  }
});

var _app = _interopRequireDefault(require("@firebase/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = "firebase";
var version = "8.3.1";
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

_app.default.registerVersion(name, version, 'app');
},{"@firebase/app":"node_modules/@firebase/app/dist/index.esm.js"}],"node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStatEventTarget = exports.createWebChannelTransport = exports.XhrIo = exports.WebChannel = exports.Stat = exports.EventType = exports.Event = exports.ErrorCode = exports.default = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var h,
    goog = goog || {},
    k = commonjsGlobal || self;

function aa() {}

function ba(a) {
  var b = typeof a;
  b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
  return "array" == b || "object" == b && "number" == typeof a.length;
}

function n(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}

function ca(a) {
  return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = ++ea);
}

var da = "closure_uid_" + (1E9 * Math.random() >>> 0),
    ea = 0;

function fa(a, b, c) {
  return a.call.apply(a.bind, arguments);
}

function ha(a, b, c) {
  if (!a) throw Error();

  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }

  return function () {
    return a.apply(b, arguments);
  };
}

function p(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = fa : p = ha;
  return p.apply(null, arguments);
}

function ja(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function () {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}

function q() {
  return Date.now();
}

function r(a, b) {
  function c() {}

  c.prototype = b.prototype;
  a.X = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;

  a.Kb = function (d, e, f) {
    for (var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++) g[m - 2] = arguments[m];

    return b.prototype[e].apply(d, g);
  };
}

function t() {
  this.j = this.j;
  this.i = this.i;
}

var ka = 0;
t.prototype.j = !1;

t.prototype.ja = function () {
  if (!this.j && (this.j = !0, this.G(), 0 != ka)) {
    var a = ca(this);
  }
};

t.prototype.G = function () {
  if (this.i) for (; this.i.length;) this.i.shift()();
};

var ma = Array.prototype.indexOf ? function (a, b) {
  return Array.prototype.indexOf.call(a, b, void 0);
} : function (a, b) {
  if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

  for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;

  return -1;
},
    na = Array.prototype.forEach ? function (a, b, c) {
  Array.prototype.forEach.call(a, b, c);
} : function (a, b, c) {
  for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
};

function oa(a) {
  a: {
    var b = pa;

    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
      b = e;
      break a;
    }

    b = -1;
  }

  return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
}

function qa(a) {
  return Array.prototype.concat.apply([], arguments);
}

function ra(a) {
  var b = a.length;

  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];

    return c;
  }

  return [];
}

function sa(a) {
  return /^[\s\xa0]*$/.test(a);
}

var ta = String.prototype.trim ? function (a) {
  return a.trim();
} : function (a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};

function v(a, b) {
  return -1 != a.indexOf(b);
}

function ua(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

var w;

a: {
  var va = k.navigator;

  if (va) {
    var wa = va.userAgent;

    if (wa) {
      w = wa;
      break a;
    }
  }

  w = "";
}

function za(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a);
}

function Aa(a) {
  var b = {};

  for (var c in a) b[c] = a[c];

  return b;
}

var Ba = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Ca(a, b) {
  var c, d;

  for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];

    for (c in d) a[c] = d[c];

    for (var f = 0; f < Ba.length; f++) c = Ba[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}

function Da(a) {
  Da[" "](a);
  return a;
}

Da[" "] = aa;

function Ea(a, b) {
  var c = Fa;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
}

var Ga = v(w, "Opera"),
    x = v(w, "Trident") || v(w, "MSIE"),
    Ha = v(w, "Edge"),
    Ia = Ha || x,
    Ja = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"),
    Ka = v(w.toLowerCase(), "webkit") && !v(w, "Edge");

function La() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}

var Ma;

a: {
  var Na = "",
      Oa = function () {
    var a = w;
    if (Ja) return /rv:([^\);]+)(\)|;)/.exec(a);
    if (Ha) return /Edge\/([\d\.]+)/.exec(a);
    if (x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (Ka) return /WebKit\/(\S+)/.exec(a);
    if (Ga) return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();

  Oa && (Na = Oa ? Oa[1] : "");

  if (x) {
    var Pa = La();

    if (null != Pa && Pa > parseFloat(Na)) {
      Ma = String(Pa);
      break a;
    }
  }

  Ma = Na;
}

var Fa = {};

function Qa(a) {
  return Ea(a, function () {
    {
      var b = 0;
      var e = ta(String(Ma)).split("."),
          f = ta(String(a)).split("."),
          g = Math.max(e.length, f.length);

      for (var m = 0; 0 == b && m < g; m++) {
        var c = e[m] || "",
            d = f[m] || "";

        do {
          c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
          d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
          if (0 == c[0].length && 0 == d[0].length) break;
          b = ua(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || ua(0 == c[2].length, 0 == d[2].length) || ua(c[2], d[2]);
          c = c[3];
          d = d[3];
        } while (0 == b);
      }
    }
    return 0 <= b;
  });
}

var Ra;

if (k.document && x) {
  var Sa = La();
  Ra = Sa ? Sa : parseInt(Ma, 10) || void 0;
} else Ra = void 0;

var Ta = Ra;

var Ua = !x || 9 <= Number(Ta),
    Va = x && !Qa("9"),
    Wa = function () {
  if (!k.addEventListener || !Object.defineProperty) return !1;
  var a = !1,
      b = Object.defineProperty({}, "passive", {
    get: function () {
      a = !0;
    }
  });

  try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
  } catch (c) {}

  return a;
}();

function y(a, b) {
  this.type = a;
  this.a = this.target = b;
  this.defaultPrevented = !1;
}

y.prototype.b = function () {
  this.defaultPrevented = !0;
};

function z(a, b) {
  y.call(this, a ? a.type : "");
  this.relatedTarget = this.a = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.pointerId = 0;
  this.pointerType = "";
  this.c = null;

  if (a) {
    var c = this.type = a.type,
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.a = b;

    if (b = a.relatedTarget) {
      if (Ja) {
        a: {
          try {
            Da(b.nodeName);
            var e = !0;
            break a;
          } catch (f) {}

          e = !1;
        }

        e || (b = null);
      }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Xa[a.pointerType] || "";
    this.c = a;
    a.defaultPrevented && this.b();
  }
}

r(z, y);
var Xa = {
  2: "touch",
  3: "pen",
  4: "mouse"
};

z.prototype.b = function () {
  z.X.b.call(this);
  var a = this.c;
  if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Va) try {
    if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
  } catch (b) {}
};

var A = "closure_listenable_" + (1E6 * Math.random() | 0),
    Ya = 0;

function Za(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.ca = e;
  this.key = ++Ya;
  this.Y = this.Z = !1;
}

function $a(a) {
  a.Y = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ca = null;
}

function ab(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}

ab.prototype.add = function (a, b, c, d, e) {
  var f = a.toString();
  a = this.a[f];
  a || (a = this.a[f] = [], this.b++);
  var g = bb(a, b, d, e);
  -1 < g ? (b = a[g], c || (b.Z = !1)) : (b = new Za(b, this.src, f, !!d, e), b.Z = c, a.push(b));
  return b;
};

function cb(a, b) {
  var c = b.type;

  if (c in a.a) {
    var d = a.a[c],
        e = ma(d, b),
        f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && ($a(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
  }
}

function bb(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d) return e;
  }

  return -1;
}

var db = "closure_lm_" + (1E6 * Math.random() | 0),
    eb = {};

function gb(a, b, c, d, e) {
  if (d && d.once) return hb(a, b, c, d, e);

  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) gb(a, b[f], c, d, e);

    return null;
  }

  c = ib(c);
  return a && a[A] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !1, d, e);
}

function jb(a, b, c, d, e, f) {
  if (!b) throw Error("Invalid event type");
  var g = n(e) ? !!e.capture : !!e;
  if (g && !Ua) return null;
  var m = kb(a);
  m || (a[db] = m = new ab(a));
  c = m.add(b, c, d, g, f);
  if (c.proxy) return c;
  d = lb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) Wa || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(mb(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}

function lb() {
  var a = nb,
      b = Ua ? function (c) {
    return a.call(b.src, b.listener, c);
  } : function (c) {
    c = a.call(b.src, b.listener, c);
    if (!c) return c;
  };
  return b;
}

function hb(a, b, c, d, e) {
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) hb(a, b[f], c, d, e);

    return null;
  }

  c = ib(c);
  return a && a[A] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !0, d, e);
}

function ob(a, b, c, d, e) {
  if (Array.isArray(b)) for (var f = 0; f < b.length; f++) ob(a, b[f], c, d, e);else (d = n(d) ? !!d.capture : !!d, c = ib(c), a && a[A]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = bb(f, c, d, e), -1 < c && ($a(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = kb(a)) && (b = a.a[b.toString()], a = -1, b && (a = bb(b, c, d, e)), (c = -1 < a ? b[a] : null) && pb(c));
}

function pb(a) {
  if ("number" !== typeof a && a && !a.Y) {
    var b = a.src;
    if (b && b[A]) cb(b.c, a);else {
      var c = a.type,
          d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(mb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      (c = kb(b)) ? (cb(c, a), 0 == c.b && (c.src = null, b[db] = null)) : $a(a);
    }
  }
}

function mb(a) {
  return a in eb ? eb[a] : eb[a] = "on" + a;
}

function qb(a, b) {
  var c = a.listener,
      d = a.ca || a.src;
  a.Z && pb(a);
  return c.call(d, b);
}

function nb(a, b) {
  if (a.Y) return !0;

  if (!Ua) {
    if (!b) a: {
      b = ["window", "event"];

      for (var c = k, d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
        b = null;
        break a;
      }

      b = c;
    }
    b = new z(b, this);
    return qb(a, b);
  }

  return qb(a, new z(b, this));
}

function kb(a) {
  a = a[db];
  return a instanceof ab ? a : null;
}

var sb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function ib(a) {
  if ("function" === typeof a) return a;
  a[sb] || (a[sb] = function (b) {
    return a.handleEvent(b);
  });
  return a[sb];
}

function D() {
  t.call(this);
  this.c = new ab(this);
  this.J = this;
  this.C = null;
}

r(D, t);
D.prototype[A] = !0;
h = D.prototype;

h.addEventListener = function (a, b, c, d) {
  gb(this, a, b, c, d);
};

h.removeEventListener = function (a, b, c, d) {
  ob(this, a, b, c, d);
};

function E(a, b) {
  var c,
      d = a.C;
  if (d) for (c = []; d; d = d.C) c.push(d);
  a = a.J;
  d = b.type || b;
  if ("string" === typeof b) b = new y(b, a);else if (b instanceof y) b.target = b.target || a;else {
    var e = b;
    b = new y(d, a);
    Ca(b, e);
  }
  e = !0;
  if (c) for (var f = c.length - 1; 0 <= f; f--) {
    var g = b.a = c[f];
    e = tb(g, d, !0, b) && e;
  }
  g = b.a = a;
  e = tb(g, d, !0, b) && e;
  e = tb(g, d, !1, b) && e;
  if (c) for (f = 0; f < c.length; f++) g = b.a = c[f], e = tb(g, d, !1, b) && e;
}

h.G = function () {
  D.X.G.call(this);

  if (this.c) {
    var a = this.c,
        c;

    for (c in a.a) {
      for (var d = a.a[c], e = 0; e < d.length; e++) $a(d[e]);

      delete a.a[c];
      a.b--;
    }
  }

  this.C = null;
};

h.va = function (a, b, c, d) {
  return this.c.add(String(a), b, !1, c, d);
};

h.wa = function (a, b, c, d) {
  return this.c.add(String(a), b, !0, c, d);
};

function tb(a, b, c, d) {
  b = a.c.a[String(b)];
  if (!b) return !0;
  b = b.concat();

  for (var e = !0, f = 0; f < b.length; ++f) {
    var g = b[f];

    if (g && !g.Y && g.capture == c) {
      var m = g.listener,
          l = g.ca || g.src;
      g.Z && cb(a.c, g);
      e = !1 !== m.call(l, d) && e;
    }
  }

  return e && !d.defaultPrevented;
}

var ub = k.JSON.stringify;

function vb() {
  this.b = this.a = null;
}

var xb = new (
/** @class */
function () {
  function class_1(a, b) {
    this.c = a;
    this.f = b;
    this.b = 0;
    this.a = null;
  }

  class_1.prototype.get = function () {
    var a;
    0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
    return a;
  };

  return class_1;
}())(function () {
  return new wb();
}, function (a) {
  a.reset();
});

vb.prototype.add = function (a, b) {
  var c = xb.get();
  c.set(a, b);
  this.b ? this.b.next = c : this.a = c;
  this.b = c;
};

function yb() {
  var a = zb,
      b = null;
  a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
  return b;
}

function wb() {
  this.next = this.b = this.a = null;
}

wb.prototype.set = function (a, b) {
  this.a = a;
  this.b = b;
  this.next = null;
};

wb.prototype.reset = function () {
  this.next = this.b = this.a = null;
};

function Ab(a) {
  k.setTimeout(function () {
    throw a;
  }, 0);
}

function Bb(a, b) {
  Cb || Db();
  Eb || (Cb(), Eb = !0);
  zb.add(a, b);
}

var Cb;

function Db() {
  var a = k.Promise.resolve(void 0);

  Cb = function () {
    a.then(Fb);
  };
}

var Eb = !1,
    zb = new vb();

function Fb() {
  for (var a; a = yb();) {
    try {
      a.a.call(a.b);
    } catch (c) {
      Ab(c);
    }

    var b = xb;
    b.f(a);
    100 > b.b && (b.b++, a.next = b.a, b.a = a);
  }

  Eb = !1;
}

function Gb(a, b) {
  D.call(this);
  this.b = a || 1;
  this.a = b || k;
  this.f = p(this.Za, this);
  this.g = q();
}

r(Gb, D);
h = Gb.prototype;
h.aa = !1;
h.M = null;

h.Za = function () {
  if (this.aa) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), E(this, "tick"), this.aa && (Hb(this), this.start()));
  }
};

h.start = function () {
  this.aa = !0;
  this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q());
};

function Hb(a) {
  a.aa = !1;
  a.M && (a.a.clearTimeout(a.M), a.M = null);
}

h.G = function () {
  Gb.X.G.call(this);
  Hb(this);
  delete this.a;
};

function Ib(a, b, c) {
  if ("function" === typeof a) c && (a = p(a, c));else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);else throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
}

function Jb(a) {
  a.a = Ib(function () {
    a.a = null;
    a.c && (a.c = !1, Jb(a));
  }, a.h);
  var b = a.b;
  a.b = null;
  a.g.apply(null, b);
}

var Kb =
/** @class */
function (_super) {
  __extends(Kb, _super);

  function Kb(a, b) {
    var _this = _super.call(this) || this;

    _this.g = a;
    _this.h = b;
    _this.b = null;
    _this.c = !1;
    _this.a = null;
    return _this;
  }

  Kb.prototype.f = function (a) {
    this.b = arguments;
    this.a ? this.c = !0 : Jb(this);
  };

  Kb.prototype.G = function () {
    _super.prototype.G.call(this);

    this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null);
  };

  return Kb;
}(t);

function F(a) {
  t.call(this);
  this.b = a;
  this.a = {};
}

r(F, t);
var Lb = [];

function Mb(a, b, c, d) {
  Array.isArray(c) || (c && (Lb[0] = c.toString()), c = Lb);

  for (var e = 0; e < c.length; e++) {
    var f = gb(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f) break;
    a.a[f.key] = f;
  }
}

function Nb(a) {
  za(a.a, function (b, c) {
    this.a.hasOwnProperty(c) && pb(b);
  }, a);
  a.a = {};
}

F.prototype.G = function () {
  F.X.G.call(this);
  Nb(this);
};

F.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};

function Ob() {
  this.a = !0;
}

function Pb(a, b, c, d, e, f) {
  a.info(function () {
    if (a.a) {
      if (f) {
        var g = "";

        for (var m = f.split("&"), l = 0; l < m.length; l++) {
          var u = m[l].split("=");

          if (1 < u.length) {
            var C = u[0];
            u = u[1];
            var B = C.split("_");
            g = 2 <= B.length && "type" == B[1] ? g + (C + "=" + u + "&") : g + (C + "=redacted&");
          }
        }
      } else g = null;
    } else g = f;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + g;
  });
}

function Qb(a, b, c, d, e, f, g) {
  a.info(function () {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + g;
  });
}

function G(a, b, c, d) {
  a.info(function () {
    return "XMLHTTP TEXT (" + b + "): " + Rb(a, c) + (d ? " " + d : "");
  });
}

function Sb(a, b) {
  a.info(function () {
    return "TIMEOUT: " + b;
  });
}

Ob.prototype.info = function () {};

function Rb(a, b) {
  if (!a.a) return b;
  if (!b) return null;

  try {
    var c = JSON.parse(b);
    if (c) for (a = 0; a < c.length; a++) if (Array.isArray(c[a])) {
      var d = c[a];

      if (!(2 > d.length)) {
        var e = d[1];

        if (Array.isArray(e) && !(1 > e.length)) {
          var f = e[0];
          if ("noop" != f && "stop" != f && "close" != f) for (var g = 1; g < e.length; g++) e[g] = "";
        }
      }
    }
    return ub(c);
  } catch (m) {
    return b;
  }
}

var H = {},
    Tb = null;

function Ub() {
  return Tb = Tb || new D();
}

H.Fa = "serverreachability";

function Vb(a) {
  y.call(this, H.Fa, a);
}

r(Vb, y);

function I(a) {
  var b = Ub();
  E(b, new Vb(b, a));
}

H.STAT_EVENT = "statevent";

function Wb(a, b) {
  y.call(this, H.STAT_EVENT, a);
  this.stat = b;
}

r(Wb, y);

function J(a) {
  var b = Ub();
  E(b, new Wb(b, a));
}

H.Ga = "timingevent";

function Xb(a) {
  y.call(this, H.Ga, a);
}

r(Xb, y);

function K(a, b) {
  if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
  return k.setTimeout(function () {
    a();
  }, b);
}

var Yb = {
  NO_ERROR: 0,
  $a: 1,
  nb: 2,
  mb: 3,
  hb: 4,
  lb: 5,
  ob: 6,
  Da: 7,
  TIMEOUT: 8,
  rb: 9
};
var Zb = {
  fb: "complete",
  Bb: "success",
  Ea: "error",
  Da: "abort",
  tb: "ready",
  ub: "readystatechange",
  TIMEOUT: "timeout",
  pb: "incrementaldata",
  sb: "progress",
  ib: "downloadprogress",
  Jb: "uploadprogress"
};

function $b() {}

$b.prototype.a = null;

function ac(a) {
  var b;
  (b = a.a) || (b = a.a = {});
  return b;
}

function bc() {}

var L = {
  OPEN: "a",
  eb: "b",
  Ea: "c",
  qb: "d"
};

function cc() {
  y.call(this, "d");
}

r(cc, y);

function dc() {
  y.call(this, "c");
}

r(dc, y);
var ec;

function fc() {}

r(fc, $b);
ec = new fc();

function M(a, b, c, d) {
  this.g = a;
  this.c = b;
  this.f = c;
  this.S = d || 1;
  this.J = new F(this);
  this.P = gc;
  a = Ia ? 125 : void 0;
  this.R = new Gb(a);
  this.B = null;
  this.b = !1;
  this.j = this.l = this.i = this.H = this.u = this.T = this.o = null;
  this.s = [];
  this.a = null;
  this.D = 0;
  this.h = this.m = null;
  this.N = -1;
  this.A = !1;
  this.O = 0;
  this.F = null;
  this.V = this.C = this.U = this.I = !1;
}

var gc = 45E3,
    hc = {},
    ic = {};
h = M.prototype;

h.setTimeout = function (a) {
  this.P = a;
};

function jc(a, b, c) {
  a.H = 1;
  a.i = kc(N(b));
  a.j = c;
  a.I = !0;
  lc(a, null);
}

function lc(a, b) {
  a.u = q();
  mc(a);
  a.l = N(a.i);
  var c = a.l,
      d = a.S;
  Array.isArray(d) || (d = [String(d)]);
  nc(c.b, "t", d);
  a.D = 0;
  a.a = oc(a.g, a.g.C ? b : null);
  0 < a.O && (a.F = new Kb(p(a.Ca, a, a.a), a.O));
  Mb(a.J, a.a, "readystatechange", a.Xa);
  b = a.B ? Aa(a.B) : {};
  a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b));
  I(1);
  Pb(a.c, a.m, a.l, a.f, a.S, a.j);
}

h.Xa = function (a) {
  a = a.target;
  var b = this.F;
  b && 3 == O(a) ? b.f() : this.Ca(a);
};

h.Ca = function (a) {
  try {
    if (a == this.a) a: {
      var b = O(this.a),
          c = this.a.ua(),
          d = this.a.W();

      if (!(3 > b || 3 == b && !Ia && !this.a.$())) {
        this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? I(3) : I(2));
        pc(this);
        var e = this.a.W();
        this.N = e;
        var f = this.a.$();
        this.b = 200 == e;
        Qb(this.c, this.m, this.l, this.f, this.S, b, e);

        if (this.b) {
          if (this.U && !this.C) {
            b: {
              if (this.a) {
                var g,
                    m = this.a;

                if ((g = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa(g)) {
                  var l = g;
                  break b;
                }
              }

              l = null;
            }

            if (l) G(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"), this.C = !0, qc(this, l);else {
              this.b = !1;
              this.h = 3;
              J(12);
              P(this);
              rc(this);
              break a;
            }
          }

          this.I ? (sc(this, b, f), Ia && this.b && 3 == b && (Mb(this.J, this.R, "tick", this.Wa), this.R.start())) : (G(this.c, this.f, f, null), qc(this, f));
          4 == b && P(this);
          this.b && !this.A && (4 == b ? uc(this.g, this) : (this.b = !1, mc(this)));
        } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, J(12)) : (this.h = 0, J(13)), P(this), rc(this);
      }
    }
  } catch (u) {} finally {}
};

function sc(a, b, c) {
  for (var d = !0; !a.A && a.D < c.length;) {
    var e = vc(a, c);

    if (e == ic) {
      4 == b && (a.h = 4, J(14), d = !1);
      G(a.c, a.f, null, "[Incomplete Response]");
      break;
    } else if (e == hc) {
      a.h = 4;
      J(15);
      G(a.c, a.f, c, "[Invalid Chunk]");
      d = !1;
      break;
    } else G(a.c, a.f, e, null), qc(a, e);
  }

  4 == b && 0 == c.length && (a.h = 1, J(16), d = !1);
  a.b = a.b && d;
  d ? 0 < c.length && !a.V && (a.V = !0, b = a.g, b.a == a && b.U && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), wc(b), b.F = !0, J(11))) : (G(a.c, a.f, c, "[Invalid Chunked Response]"), P(a), rc(a));
}

h.Wa = function () {
  if (this.a) {
    var a = O(this.a),
        b = this.a.$();
    this.D < b.length && (pc(this), sc(this, a, b), this.b && 4 != a && mc(this));
  }
};

function vc(a, b) {
  var c = a.D,
      d = b.indexOf("\n", c);
  if (-1 == d) return ic;
  c = Number(b.substring(c, d));
  if (isNaN(c)) return hc;
  d += 1;
  if (d + c > b.length) return ic;
  b = b.substr(d, c);
  a.D = d + c;
  return b;
}

h.cancel = function () {
  this.A = !0;
  P(this);
};

function mc(a) {
  a.T = q() + a.P;
  yc(a, a.P);
}

function yc(a, b) {
  if (null != a.o) throw Error("WatchDog timer not null");
  a.o = K(p(a.Va, a), b);
}

function pc(a) {
  a.o && (k.clearTimeout(a.o), a.o = null);
}

h.Va = function () {
  this.o = null;
  var a = q();
  0 <= a - this.T ? (Sb(this.c, this.l), 2 != this.H && (I(3), J(17)), P(this), this.h = 2, rc(this)) : yc(this, this.T - a);
};

function rc(a) {
  0 == a.g.v || a.A || uc(a.g, a);
}

function P(a) {
  pc(a);
  var b = a.F;
  b && "function" == typeof b.ja && b.ja();
  a.F = null;
  Hb(a.R);
  Nb(a.J);
  a.a && (b = a.a, a.a = null, b.abort(), b.ja());
}

function qc(a, b) {
  try {
    var c = a.g;
    if (0 != c.v && (c.a == a || zc(c.b, a))) if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
      try {
        var d = c.ka.a.parse(b);
      } catch (tc) {
        d = null;
      }

      if (Array.isArray(d) && 3 == d.length) {
        var e = d;
        if (0 == e[0]) a: {
          if (!c.j) {
            if (c.a) if (c.a.u + 3E3 < a.u) Ac(c), Bc(c);else break a;
            Cc(c);
            J(18);
          }
        } else c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = K(p(c.Sa, c), 6E3));

        if (1 >= Dc(c.b) && c.ea) {
          try {
            c.ea();
          } catch (tc) {}

          c.ea = void 0;
        }
      } else Q(c, 11);
    } else if ((a.C || c.a == a) && Ac(c), !sa(b)) for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++) if (e = b[d], c.P = e[0], e = e[1], 2 == c.v) {
      if ("c" == e[0]) {
        c.J = e[1];
        c.ga = e[2];
        var f = e[3];
        null != f && (c.ha = f, c.c.info("VER=" + c.ha));
        var g = e[4];
        null != g && (c.pa = g, c.c.info("SVER=" + c.pa));
        var m = e[5];

        if (null != m && "number" === typeof m && 0 < m) {
          var l = 1.5 * m;
          c.D = l;
          c.c.info("backChannelRequestTimeoutMs_=" + l);
        }

        l = c;
        var u = a.a;

        if (u) {
          var C = u.a ? u.a.getResponseHeader("X-Client-Wire-Protocol") : null;

          if (C) {
            var B = l.b;
            !B.a && (v(C, "spdy") || v(C, "quic") || v(C, "h2")) && (B.f = B.g, B.a = new Set(), B.b && (Ec(B, B.b), B.b = null));
          }

          if (l.A) {
            var rb = u.a ? u.a.getResponseHeader("X-HTTP-Session-Id") : null;
            rb && (l.na = rb, R(l.B, l.A, rb));
          }
        }

        c.v = 3;
        c.f && c.f.ta();
        c.U && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
        l = c;
        var xa = a;
        l.la = Fc(l, l.C ? l.ga : null, l.fa);

        if (xa.C) {
          Gc(l.b, xa);
          var ya = xa,
              xc = l.D;
          xc && ya.setTimeout(xc);
          ya.o && (pc(ya), mc(ya));
          l.a = xa;
        } else Hc(l);

        0 < c.g.length && Ic(c);
      } else "stop" != e[0] && "close" != e[0] || Q(c, 7);
    } else 3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? Q(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
    I(4);
  } catch (tc) {}
}

function Kc(a) {
  if (a.K && "function" == typeof a.K) return a.K();
  if ("string" === typeof a) return a.split("");

  if (ba(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);

    return b;
  }

  b = [];
  c = 0;

  for (d in a) b[c++] = a[d];

  return a = b;
}

function Lc(a, b) {
  if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (ba(a) || "string" === typeof a) na(a, b, void 0);else {
    if (a.L && "function" == typeof a.L) var c = a.L();else if (a.K && "function" == typeof a.K) c = void 0;else if (ba(a) || "string" === typeof a) {
      c = [];

      for (var d = a.length, e = 0; e < d; e++) c.push(e);
    } else for (e in c = [], d = 0, a) c[d++] = e;
    d = Kc(a);
    e = d.length;

    for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
  }
}

function S(a, b) {
  this.b = {};
  this.a = [];
  this.c = 0;
  var c = arguments.length;

  if (1 < c) {
    if (c % 2) throw Error("Uneven number of arguments");

    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
  } else if (a) if (a instanceof S) for (c = a.L(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
}

h = S.prototype;

h.K = function () {
  Mc(this);

  for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);

  return a;
};

h.L = function () {
  Mc(this);
  return this.a.concat();
};

function Mc(a) {
  if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
      var d = a.a[b];
      T(a.b, d) && (a.a[c++] = d);
      b++;
    }

    a.a.length = c;
  }

  if (a.c != a.a.length) {
    var e = {};

    for (c = b = 0; b < a.a.length;) d = a.a[b], T(e, d) || (a.a[c++] = d, e[d] = 1), b++;

    a.a.length = c;
  }
}

h.get = function (a, b) {
  return T(this.b, a) ? this.b[a] : b;
};

h.set = function (a, b) {
  T(this.b, a) || (this.c++, this.a.push(a));
  this.b[a] = b;
};

h.forEach = function (a, b) {
  for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d],
        f = this.get(e);
    a.call(b, f, e, this);
  }
};

function T(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}

var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

function Oc(a, b) {
  if (a) {
    a = a.split("&");

    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="),
          e = null;

      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else f = a[c];

      b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}

function U(a, b) {
  this.c = this.j = this.f = "";
  this.h = null;
  this.i = this.g = "";
  this.a = !1;

  if (a instanceof U) {
    this.a = void 0 !== b ? b : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new Sc();
    c.c = b.c;
    b.a && (c.a = new S(b.a), c.b = b.b);
    Tc(this, c);
    this.i = a.i;
  } else a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Uc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Uc(c[5] || "", !0), Tc(this, c[6] || "", !0), this.i = Uc(c[7] || "")) : (this.a = !!b, this.b = new Sc(null, this.a));
}

U.prototype.toString = function () {
  var a = [],
      b = this.f;
  b && a.push(Vc(b, Wc, !0), ":");
  var c = this.c;
  if (c || "file" == b) a.push("//"), (b = this.j) && a.push(Vc(b, Wc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c));
  if (c = this.g) this.c && "/" != c.charAt(0) && a.push("/"), a.push(Vc(c, "/" == c.charAt(0) ? Xc : Yc, !0));
  (c = this.b.toString()) && a.push("?", c);
  (c = this.i) && a.push("#", Vc(c, Zc));
  return a.join("");
};

function N(a) {
  return new U(a);
}

function Pc(a, b, c) {
  a.f = c ? Uc(b, !0) : b;
  a.f && (a.f = a.f.replace(/:$/, ""));
}

function Qc(a, b, c) {
  a.c = c ? Uc(b, !0) : b;
}

function Rc(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
    a.h = b;
  } else a.h = null;
}

function Tc(a, b, c) {
  b instanceof Sc ? (a.b = b, $c(a.b, a.a)) : (c || (b = Vc(b, ad)), a.b = new Sc(b, a.a));
}

function R(a, b, c) {
  a.b.set(b, c);
}

function kc(a) {
  R(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36));
  return a;
}

function bd(a) {
  return a instanceof U ? N(a) : new U(a, void 0);
}

function cd(a, b, c, d) {
  var e = new U(null, void 0);
  a && Pc(e, a);
  b && Qc(e, b);
  c && Rc(e, c);
  d && (e.g = d);
  return e;
}

function Uc(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}

function Vc(a, b, c) {
  return "string" === typeof a ? (a = encodeURI(a).replace(b, dd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}

function dd(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}

var Wc = /[#\/\?@]/g,
    Yc = /[#\?:]/g,
    Xc = /[#\?]/g,
    ad = /[#\?@]/g,
    Zc = /#/g;

function Sc(a, b) {
  this.b = this.a = null;
  this.c = a || null;
  this.f = !!b;
}

function V(a) {
  a.a || (a.a = new S(), a.b = 0, a.c && Oc(a.c, function (b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}

h = Sc.prototype;

h.add = function (a, b) {
  V(this);
  this.c = null;
  a = W(this, a);
  var c = this.a.get(a);
  c || this.a.set(a, c = []);
  c.push(b);
  this.b += 1;
  return this;
};

function ed(a, b) {
  V(a);
  b = W(a, b);
  T(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, T(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a)));
}

function fd(a, b) {
  V(a);
  b = W(a, b);
  return T(a.a.b, b);
}

h.forEach = function (a, b) {
  V(this);
  this.a.forEach(function (c, d) {
    na(c, function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};

h.L = function () {
  V(this);

  for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);

  return c;
};

h.K = function (a) {
  V(this);
  var b = [];
  if ("string" === typeof a) fd(this, a) && (b = qa(b, this.a.get(W(this, a))));else {
    a = this.a.K();

    for (var c = 0; c < a.length; c++) b = qa(b, a[c]);
  }
  return b;
};

h.set = function (a, b) {
  V(this);
  this.c = null;
  a = W(this, a);
  fd(this, a) && (this.b -= this.a.get(a).length);
  this.a.set(a, [b]);
  this.b += 1;
  return this;
};

h.get = function (a, b) {
  if (!a) return b;
  a = this.K(a);
  return 0 < a.length ? String(a[0]) : b;
};

function nc(a, b, c) {
  ed(a, b);
  0 < c.length && (a.c = null, a.a.set(W(a, b), ra(c)), a.b += c.length);
}

h.toString = function () {
  if (this.c) return this.c;
  if (!this.a) return "";

  for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
    var d = b[c],
        e = encodeURIComponent(String(d));
    d = this.K(d);

    for (var f = 0; f < d.length; f++) {
      var g = e;
      "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
      a.push(g);
    }
  }

  return this.c = a.join("&");
};

function W(a, b) {
  b = String(b);
  a.f && (b = b.toLowerCase());
  return b;
}

function $c(a, b) {
  b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) {
    var e = d.toLowerCase();
    d != e && (ed(this, d), nc(this, e, c));
  }, a));
  a.f = b;
}

var gd =
/** @class */
function () {
  function gd(a, b) {
    this.b = a;
    this.a = b;
  }

  return gd;
}();

function hd(a) {
  this.g = a || id;
  k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().Lb);
  this.f = a ? this.g : 1;
  this.a = null;
  1 < this.f && (this.a = new Set());
  this.b = null;
  this.c = [];
}

var id = 10;

function jd(a) {
  return a.b ? !0 : a.a ? a.a.size >= a.f : !1;
}

function Dc(a) {
  return a.b ? 1 : a.a ? a.a.size : 0;
}

function zc(a, b) {
  return a.b ? a.b == b : a.a ? a.a.has(b) : !1;
}

function Ec(a, b) {
  a.a ? a.a.add(b) : a.b = b;
}

function Gc(a, b) {
  a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b);
}

hd.prototype.cancel = function () {
  var e_1, _a;

  this.c = kd(this);
  if (this.b) this.b.cancel(), this.b = null;else if (this.a && 0 !== this.a.size) {
    try {
      for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var a = _c.value;
        a.cancel();
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    this.a.clear();
  }
};

function kd(a) {
  var e_2, _a;

  if (null != a.b) return a.c.concat(a.b.s);

  if (null != a.a && 0 !== a.a.size) {
    var b = a.c;

    try {
      for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var c = _c.value;
        b = b.concat(c.s);
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return b;
  }

  return ra(a.c);
}

function ld() {}

ld.prototype.stringify = function (a) {
  return k.JSON.stringify(a, void 0);
};

ld.prototype.parse = function (a) {
  return k.JSON.parse(a, void 0);
};

function md() {
  this.a = new ld();
}

function nd(a, b, c) {
  var d = c || "";

  try {
    Lc(a, function (e, f) {
      var g = e;
      n(e) && (g = ub(e));
      b.push(d + f + "=" + encodeURIComponent(g));
    });
  } catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}

function od(a, b) {
  var c = new Ob();

  if (k.Image) {
    var d = new Image();
    d.onload = ja(pd, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ja(pd, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ja(pd, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ja(pd, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () {
      if (d.ontimeout) d.ontimeout();
    }, 1E4);
    d.src = a;
  } else b(!1);
}

function pd(a, b, c, d, e) {
  try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
  } catch (f) {}
}

var qd = k.JSON.parse;

function X(a) {
  D.call(this);
  this.headers = new S();
  this.H = a || null;
  this.b = !1;
  this.s = this.a = null;
  this.B = "";
  this.h = 0;
  this.f = "";
  this.g = this.A = this.l = this.u = !1;
  this.o = 0;
  this.m = null;
  this.I = rd;
  this.D = this.F = !1;
}

r(X, D);
var rd = "",
    sd = /^https?$/i,
    td = ["POST", "PUT"];
h = X.prototype;

h.ba = function (a, b, c, d) {
  if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
  b = b ? b.toUpperCase() : "GET";
  this.B = a;
  this.f = "";
  this.h = 0;
  this.u = !1;
  this.b = !0;
  this.a = new XMLHttpRequest();
  this.s = this.H ? ac(this.H) : ac(ec);
  this.a.onreadystatechange = p(this.za, this);

  try {
    this.A = !0, this.a.open(b, String(a), !0), this.A = !1;
  } catch (f) {
    ud(this, f);
    return;
  }

  a = c || "";
  var e = new S(this.headers);
  d && Lc(d, function (f, g) {
    e.set(g, f);
  });
  d = oa(e.L());
  c = k.FormData && a instanceof k.FormData;
  !(0 <= ma(td, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  e.forEach(function (f, g) {
    this.a.setRequestHeader(g, f);
  }, this);
  this.I && (this.a.responseType = this.I);
  "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);

  try {
    vd(this), 0 < this.o && ((this.D = wd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Ib(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
  } catch (f) {
    ud(this, f);
  }
};

function wd(a) {
  return x && Qa(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}

function pa(a) {
  return "content-type" == a.toLowerCase();
}

h.xa = function () {
  "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, E(this, "timeout"), this.abort(8));
};

function ud(a, b) {
  a.b = !1;
  a.a && (a.g = !0, a.a.abort(), a.g = !1);
  a.f = b;
  a.h = 5;
  xd(a);
  yd(a);
}

function xd(a) {
  a.u || (a.u = !0, E(a, "complete"), E(a, "error"));
}

h.abort = function (a) {
  this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, E(this, "complete"), E(this, "abort"), yd(this));
};

h.G = function () {
  this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), yd(this, !0));
  X.X.G.call(this);
};

h.za = function () {
  this.j || (this.A || this.l || this.g ? zd(this) : this.Ua());
};

h.Ua = function () {
  zd(this);
};

function zd(a) {
  if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != O(a) || 2 != a.W())) if (a.l && 4 == O(a)) Ib(a.za, 0, a);else if (E(a, "readystatechange"), 4 == O(a)) {
    a.b = !1;

    try {
      {
        var l = a.W();

        a: switch (l) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var b = !0;
            break a;

          default:
            b = !1;
        }

        var c;

        if (!(c = b)) {
          var d;

          if (d = 0 === l) {
            var e = String(a.B).match(Nc)[1] || null;

            if (!e && k.self && k.self.location) {
              var f = k.self.location.protocol;
              e = f.substr(0, f.length - 1);
            }

            d = !sd.test(e ? e.toLowerCase() : "");
          }

          c = d;
        }

        var g = c;
      }
      if (g) E(a, "complete"), E(a, "success");else {
        a.h = 6;

        try {
          var m = 2 < O(a) ? a.a.statusText : "";
        } catch (l) {
          m = "";
        }

        a.f = m + " [" + a.W() + "]";
        xd(a);
      }
    } finally {
      yd(a);
    }
  }
}

function yd(a, b) {
  if (a.a) {
    vd(a);
    var c = a.a,
        d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b || E(a, "ready");

    try {
      c.onreadystatechange = d;
    } catch (e) {}
  }
}

function vd(a) {
  a.a && a.D && (a.a.ontimeout = null);
  a.m && (k.clearTimeout(a.m), a.m = null);
}

function O(a) {
  return a.a ? a.a.readyState : 0;
}

h.W = function () {
  try {
    return 2 < O(this) ? this.a.status : -1;
  } catch (a) {
    return -1;
  }
};

h.$ = function () {
  try {
    return this.a ? this.a.responseText : "";
  } catch (a) {
    return "";
  }
};

h.Pa = function (a) {
  if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return qd(b);
  }
};

h.ua = function () {
  return this.h;
};

h.Qa = function () {
  return "string" === typeof this.f ? this.f : String(this.f);
};

function Ad(a) {
  var b = "";
  za(a, function (c, d) {
    b += d;
    b += ":";
    b += c;
    b += "\r\n";
  });
  return b;
}

function Bd(a, b, c) {
  a: {
    for (d in c) {
      var d = !1;
      break a;
    }

    d = !0;
  }

  d || (c = Ad(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : R(a, b, c));
}

function Cd(a, b, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
}

function Dd(a) {
  this.pa = 0;
  this.g = [];
  this.c = new Ob();
  this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null;
  this.Oa = this.R = 0;
  this.La = Cd("failFast", !1, a);
  this.H = this.m = this.j = this.h = this.f = null;
  this.S = !0;
  this.I = this.oa = this.P = -1;
  this.T = this.o = this.u = 0;
  this.Ha = Cd("baseRetryDelayMs", 5E3, a);
  this.Ra = Cd("retryDelaySeedMs", 1E4, a);
  this.Ma = Cd("forwardChannelMaxRetries", 2, a);
  this.ma = Cd("forwardChannelRequestTimeoutMs", 2E4, a);
  this.Na = a && a.g || void 0;
  this.D = void 0;
  this.C = a && a.supportsCrossDomainXhr || !1;
  this.J = "";
  this.b = new hd(a && a.concurrentRequestLimit);
  this.ka = new md();
  this.da = a && a.fastHandshake || !1;
  this.Ia = a && a.b || !1;
  a && a.f && (this.c.a = !1);
  a && a.forceLongPolling && (this.S = !1);
  this.U = !this.da && this.S && a && a.detectBufferingProxy || !1;
  this.ea = void 0;
  this.N = 0;
  this.F = !1;
  this.s = null;
  (this.Ka = a && a.c || !1) && this.c.info("Opt-in to enable Chrome Origin Trials.");
}

h = Dd.prototype;
h.ha = 8;
h.v = 1;

function Jc(a) {
  Ed(a);

  if (3 == a.v) {
    var b = a.R++,
        c = N(a.B);
    R(c, "SID", a.J);
    R(c, "RID", b);
    R(c, "TYPE", "terminate");
    Fd(a, c);
    b = new M(a, a.c, b, void 0);
    b.H = 2;
    b.i = kc(N(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
    !c && k.Image && (new Image().src = b.i, c = !0);
    c || (b.a = oc(b.g, null), b.a.ba(b.i));
    b.u = q();
    mc(b);
  }

  Gd(a);
}

function Bc(a) {
  a.a && (wc(a), a.a.cancel(), a.a = null);
}

function Ed(a) {
  Bc(a);
  a.j && (k.clearTimeout(a.j), a.j = null);
  Ac(a);
  a.b.cancel();
  a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null);
}

function Hd(a, b) {
  a.g.push(new gd(a.Oa++, b));
  3 == a.v && Ic(a);
}

function Ic(a) {
  jd(a.b) || a.h || (a.h = !0, Bb(a.Ba, a), a.u = 0);
}

function Id(a, b) {
  if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0)) return !1;
  if (a.h) return a.g = b.s.concat(a.g), !0;
  if (1 == a.v || 2 == a.v || a.u >= (a.La ? 0 : a.Ma)) return !1;
  a.h = K(p(a.Ba, a, b), Jd(a, a.u));
  a.u++;
  return !0;
}

h.Ba = function (a) {
  if (this.h) if (this.h = null, 1 == this.v) {
    if (!a) {
      this.R = Math.floor(1E5 * Math.random());
      a = this.R++;
      var b = new M(this, this.c, a, void 0),
          c = this.l;
      this.O && (c ? (c = Aa(c), Ca(c, this.O)) : c = this.O);
      null === this.i && (b.B = c);
      var d;
      if (this.da) a: {
        for (var e = d = 0; e < this.g.length; e++) {
          b: {
            var f = this.g[e];

            if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
              f = f.length;
              break b;
            }

            f = void 0;
          }

          if (void 0 === f) break;
          d += f;

          if (4096 < d) {
            d = e;
            break a;
          }

          if (4096 === d || e === this.g.length - 1) {
            d = e + 1;
            break a;
          }
        }

        d = 1E3;
      } else d = 1E3;
      d = Kd(this, b, d);
      e = N(this.B);
      R(e, "RID", a);
      R(e, "CVER", 22);
      this.A && R(e, "X-HTTP-Session-Id", this.A);
      Fd(this, e);
      this.i && c && Bd(e, this.i, c);
      Ec(this.b, b);
      this.Ia && R(e, "TYPE", "init");
      this.da ? (R(e, "$req", d), R(e, "SID", "null"), b.U = !0, jc(b, e, null)) : jc(b, e, d);
      this.v = 2;
    }
  } else 3 == this.v && (a ? Ld(this, a) : 0 == this.g.length || jd(this.b) || Ld(this));
};

function Ld(a, b) {
  var c;
  b ? c = b.f : c = a.R++;
  var d = N(a.B);
  R(d, "SID", a.J);
  R(d, "RID", c);
  R(d, "AID", a.P);
  Fd(a, d);
  a.i && a.l && Bd(d, a.i, a.l);
  c = new M(a, a.c, c, a.u + 1);
  null === a.i && (c.B = a.l);
  b && (a.g = b.s.concat(a.g));
  b = Kd(a, c, 1E3);
  c.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random()));
  Ec(a.b, c);
  jc(c, d, b);
}

function Fd(a, b) {
  a.f && Lc({}, function (c, d) {
    R(b, d, c);
  });
}

function Kd(a, b, c) {
  c = Math.min(a.g.length, c);
  var d = a.f ? p(a.f.Ja, a.f, a) : null;

  a: for (var e = a.g, f = -1;;) {
    var g = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, g.push("ofs=" + f)) : f = 0 : g.push("ofs=" + f);

    for (var m = !0, l = 0; l < c; l++) {
      var u = e[l].b,
          C = e[l].a;
      u -= f;
      if (0 > u) f = Math.max(0, e[l].b - 100), m = !1;else try {
        nd(C, g, "req" + u + "_");
      } catch (B) {
        d && d(C);
      }
    }

    if (m) {
      d = g.join("&");
      break a;
    }
  }

  a = a.g.splice(0, c);
  b.s = a;
  return d;
}

function Hc(a) {
  a.a || a.j || (a.T = 1, Bb(a.Aa, a), a.o = 0);
}

function Cc(a) {
  if (a.a || a.j || 3 <= a.o) return !1;
  a.T++;
  a.j = K(p(a.Aa, a), Jd(a, a.o));
  a.o++;
  return !0;
}

h.Aa = function () {
  this.j = null;
  Md(this);

  if (this.U && !(this.F || null == this.a || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = K(p(this.Ta, this), a);
  }
};

h.Ta = function () {
  this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, J(10), Bc(this), Md(this));
};

function wc(a) {
  null != a.s && (k.clearTimeout(a.s), a.s = null);
}

function Md(a) {
  a.a = new M(a, a.c, "rpc", a.T);
  null === a.i && (a.a.B = a.l);
  a.a.O = 0;
  var b = N(a.la);
  R(b, "RID", "rpc");
  R(b, "SID", a.J);
  R(b, "CI", a.H ? "0" : "1");
  R(b, "AID", a.P);
  Fd(a, b);
  R(b, "TYPE", "xmlhttp");
  a.i && a.l && Bd(b, a.i, a.l);
  a.D && a.a.setTimeout(a.D);
  var c = a.a;
  a = a.ga;
  c.H = 1;
  c.i = kc(N(b));
  c.j = null;
  c.I = !0;
  lc(c, a);
}

h.Sa = function () {
  null != this.m && (this.m = null, Bc(this), Cc(this), J(19));
};

function Ac(a) {
  null != a.m && (k.clearTimeout(a.m), a.m = null);
}

function uc(a, b) {
  var c = null;

  if (a.a == b) {
    Ac(a);
    wc(a);
    a.a = null;
    var d = 2;
  } else if (zc(a.b, b)) c = b.s, Gc(a.b, b), d = 1;else return;

  a.I = b.N;
  if (0 != a.v) if (b.b) {
    if (1 == d) {
      c = b.j ? b.j.length : 0;
      b = q() - b.u;
      var e = a.u;
      d = Ub();
      E(d, new Xb(d, c, b, e));
      Ic(a);
    } else Hc(a);
  } else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Id(a, b) || 2 == d && Cc(a))) switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
    case 1:
      Q(a, 5);
      break;

    case 4:
      Q(a, 10);
      break;

    case 3:
      Q(a, 6);
      break;

    default:
      Q(a, 2);
  }
}

function Jd(a, b) {
  var c = a.Ha + Math.floor(Math.random() * a.Ra);
  a.f || (c *= 2);
  return c * b;
}

function Q(a, b) {
  a.c.info("Error code " + b);

  if (2 == b) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Ya, a);
    c || (c = new U("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), kc(c));
    od(c.toString(), d);
  } else J(2);

  a.v = 0;
  a.f && a.f.ra(b);
  Gd(a);
  Ed(a);
}

h.Ya = function (a) {
  a ? (this.c.info("Successfully pinged google.com"), J(2)) : (this.c.info("Failed to ping google.com"), J(1));
};

function Gd(a) {
  a.v = 0;
  a.I = -1;

  if (a.f) {
    if (0 != kd(a.b).length || 0 != a.g.length) a.b.c.length = 0, ra(a.g), a.g.length = 0;
    a.f.qa();
  }
}

function Fc(a, b, c) {
  var d = bd(c);
  if ("" != d.c) b && Qc(d, b + "." + d.c), Rc(d, d.h);else {
    var e = k.location;
    d = cd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
  }
  a.V && za(a.V, function (f, g) {
    R(d, g, f);
  });
  b = a.A;
  c = a.na;
  b && c && R(d, b, c);
  R(d, "VER", a.ha);
  Fd(a, d);
  return d;
}

function oc(a, b) {
  if (b && !a.C) throw Error("Can't create secondary domain capable XhrIo object.");
  b = new X(a.Na);
  b.F = a.C;
  return b;
}

function Nd() {}

h = Nd.prototype;

h.ta = function () {};

h.sa = function () {};

h.ra = function () {};

h.qa = function () {};

h.Ja = function () {};

function Od() {
  if (x && !(10 <= Number(Ta))) throw Error("Environmental error: no available transport.");
}

Od.prototype.a = function (a, b) {
  return new Y(a, b);
};

function Y(a, b) {
  D.call(this);
  this.a = new Dd(b);
  this.o = a;
  this.b = b && b.messageUrlParams || null;
  a = b && b.messageHeaders || null;
  b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
    "X-Client-Protocol": "webchannel"
  });
  this.a.l = a;
  a = b && b.initMessageHeaders || null;
  b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = {
    "X-WebChannel-Content-Type": b.messageContentType
  });
  b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = {
    "X-WebChannel-Client-Profile": b.a
  });
  this.a.O = a;
  (a = b && b.httpHeadersOverwriteParam) && !sa(a) && (this.a.i = a);
  this.m = b && b.supportsCrossDomainXhr || !1;
  this.l = b && b.sendRawJson || !1;
  (b = b && b.httpSessionIdParam) && !sa(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
  this.f = new Z(this);
}

r(Y, D);

Y.prototype.g = function () {
  this.a.f = this.f;
  this.m && (this.a.C = !0);
  var a = this.a,
      b = this.o,
      c = this.b || void 0;
  J(0);
  a.fa = b;
  a.V = c || {};
  a.H = a.S;
  a.B = Fc(a, null, a.fa);
  Ic(a);
};

Y.prototype.close = function () {
  Jc(this.a);
};

Y.prototype.h = function (a) {
  if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    Hd(this.a, b);
  } else this.l ? (b = {}, b.__data__ = ub(a), Hd(this.a, b)) : Hd(this.a, a);
};

Y.prototype.G = function () {
  this.a.f = null;
  delete this.f;
  Jc(this.a);
  delete this.a;
  Y.X.G.call(this);
};

function Pd(a) {
  cc.call(this);
  var b = a.__sm__;

  if (b) {
    a: {
      for (var c in b) {
        a = c;
        break a;
      }

      a = void 0;
    }

    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
  } else this.data = a;
}

r(Pd, cc);

function Qd() {
  dc.call(this);
  this.status = 1;
}

r(Qd, dc);

function Z(a) {
  this.a = a;
}

r(Z, Nd);

Z.prototype.ta = function () {
  E(this.a, "a");
};

Z.prototype.sa = function (a) {
  E(this.a, new Pd(a));
};

Z.prototype.ra = function (a) {
  E(this.a, new Qd(a));
};

Z.prototype.qa = function () {
  E(this.a, "b");
};
/*
Copyright 2017 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


Od.prototype.createWebChannel = Od.prototype.a;
Y.prototype.send = Y.prototype.h;
Y.prototype.open = Y.prototype.g;
Y.prototype.close = Y.prototype.close;
Yb.NO_ERROR = 0;
Yb.TIMEOUT = 8;
Yb.HTTP_ERROR = 6;
Zb.COMPLETE = "complete";
bc.EventType = L;
L.OPEN = "a";
L.CLOSE = "b";
L.ERROR = "c";
L.MESSAGE = "d";
D.prototype.listen = D.prototype.va;
X.prototype.listenOnce = X.prototype.wa;
X.prototype.getLastError = X.prototype.Qa;
X.prototype.getLastErrorCode = X.prototype.ua;
X.prototype.getStatus = X.prototype.W;
X.prototype.getResponseJson = X.prototype.Pa;
X.prototype.getResponseText = X.prototype.$;
X.prototype.send = X.prototype.ba;

var createWebChannelTransport = function () {
  return new Od();
};

exports.createWebChannelTransport = createWebChannelTransport;

var getStatEventTarget = function () {
  return Ub();
};

exports.getStatEventTarget = getStatEventTarget;
var ErrorCode = Yb;
exports.ErrorCode = ErrorCode;
var EventType = Zb;
exports.EventType = EventType;
var Event = H;
exports.Event = Event;
var Stat = {
  gb: 0,
  jb: 1,
  kb: 2,
  Db: 3,
  Ib: 4,
  Fb: 5,
  Gb: 6,
  Eb: 7,
  Cb: 8,
  Hb: 9,
  PROXY: 10,
  NOPROXY: 11,
  Ab: 12,
  wb: 13,
  xb: 14,
  vb: 15,
  yb: 16,
  zb: 17,
  bb: 18,
  ab: 19,
  cb: 20
};
exports.Stat = Stat;
var WebChannel = bc;
exports.WebChannel = WebChannel;
var XhrIo = X;
exports.XhrIo = XhrIo;
var esm = {
  createWebChannelTransport: createWebChannelTransport,
  getStatEventTarget: getStatEventTarget,
  ErrorCode: ErrorCode,
  EventType: EventType,
  Event: Event,
  Stat: Stat,
  WebChannel: WebChannel,
  XhrIo: XhrIo
};
var _default = esm;
exports.default = _default;
},{}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/@firebase/firestore/dist/esm5/prebuilt-7525c6cb-cb60b4b9.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.W = Nc;
exports.a = Kc;
exports.u = zc;
exports.x = exports.t = exports.s = exports.o = exports.j = exports.i = exports.e = exports.c = exports.Z = exports.U = exports.T = exports.Q = exports.L = exports.J = exports.I = exports.H = exports.G = void 0;

var _logger = require("@firebase/logger");

var _util = require("@firebase/util");

var _webchannelWrapper = require("@firebase/webchannel-wrapper");

var _tslib = require("tslib");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */
var I =
/** @class */
function () {
  function t(t, e) {
    var n = this;
    this.previousValue = t, e && (e.sequenceNumberHandler = function (t) {
      return n.t(t);
    }, this.i = function (t) {
      return e.writeSequenceNumber(t);
    });
  }

  return t.prototype.t = function (t) {
    return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
  }, t.prototype.next = function () {
    var t = ++this.previousValue;
    return this.i && this.i(t), t;
  }, t;
}();

I.o = -1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var E = new _logger.Logger("@firebase/firestore"); // Helper methods are needed because variables can't be exported as read/write

function T() {
  return E.logLevel;
}
/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */


function _(t) {
  for (var n = [], r = 1; r < arguments.length; r++) {
    n[r - 1] = arguments[r];
  }

  if (E.logLevel <= _logger.LogLevel.DEBUG) {
    var i = n.map(N);
    E.debug.apply(E, (0, _tslib.__spreadArray)(["Firestore (8.3.1): " + t], i));
  }
}

function S(t) {
  for (var n = [], r = 1; r < arguments.length; r++) {
    n[r - 1] = arguments[r];
  }

  if (E.logLevel <= _logger.LogLevel.ERROR) {
    var i = n.map(N);
    E.error.apply(E, (0, _tslib.__spreadArray)(["Firestore (8.3.1): " + t], i));
  }
}

function D(t) {
  for (var n = [], r = 1; r < arguments.length; r++) {
    n[r - 1] = arguments[r];
  }

  if (E.logLevel <= _logger.LogLevel.WARN) {
    var i = n.map(N);
    E.warn.apply(E, (0, _tslib.__spreadArray)(["Firestore (8.3.1): " + t], i));
  }
}
/**
 * Converts an additional log parameter to a string representation.
 */


function N(t) {
  if ("string" == typeof t) return t;

  try {
    return e = t, JSON.stringify(e);
  } catch (e) {
    // Converting to JSON failed, just log the object directly
    return t;
  }
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

  /** Formats an object as a JSON string, suitable for logging. */


  var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */


function A(t) {
  void 0 === t && (t = "Unexpected state"); // Log the failure in addition to throw an exception, just in case the
  // exception is swallowed.

  var e = "FIRESTORE (8.3.1) INTERNAL ASSERTION FAILED: " + t; // NOTE: We don't use FirestoreError here because these are internal failures
  // that cannot be handled by the user. (Also it would create a circular
  // dependency between the error and assert modules which doesn't work.)

  throw S(e), new Error(e)
  /**
  * Fails if the given assertion condition is false, throwing an Error with the
  * given message if it did.
  *
  * Messages are stripped in production builds.
  */
  ;
}

function k(t, e) {
  t || A();
}
/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */


function C(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */


function x(t) {
  // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
  var e = // eslint-disable-next-line @typescript-eslint/no-explicit-any
  "undefined" != typeof self && (self.crypto || self.msCrypto),
      n = new Uint8Array(t);
  if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);else // Falls back to Math.random
    for (var r = 0; r < t; r++) {
      n[r] = Math.floor(256 * Math.random());
    }
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var L =
/** @class */
function () {
  function t() {}

  return t.u = function () {
    for ( // Alphanumeric characters
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = "" // The largest byte value that is a multiple of `char.length`.
    ; n.length < 20;) {
      for (var r = x(40), i = 0; i < r.length; ++i) {
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
      }
    }

    return n;
  }, t;
}();

function R(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
/** Helper to compare arrays using isEqual(). */


function O(t, e, n) {
  return t.length === e.length && t.every(function (t, r) {
    return n(t, e[r]);
  });
}
/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */


function P(t) {
  // Return the input string, with an additional NUL byte appended.
  return t + "\0";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function M(t) {
  var e = 0;

  for (var n in t) {
    Object.prototype.hasOwnProperty.call(t, n) && e++;
  }

  return e;
}

function F(t, e) {
  for (var n in t) {
    Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
  }
}

function q(t) {
  for (var e in t) {
    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  }

  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Sentinel value that sorts before any Mutation Batch ID. */

/**
 * Returns whether a variable is either undefined or null.
 */


function V(t) {
  return null == t;
}
/** Returns whether the value represents -0. */


function U(t) {
  // Detect if the value is -0.0. Based on polyfill from
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  return 0 === t && 1 / t == -1 / 0;
}
/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */


function B(t) {
  return "number" == typeof t && Number.isInteger(t) && !U(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var j = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h

  /** Not an error; returned on success. */
  OK: "ok",

  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",

  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",

  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",

  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",

  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",

  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",

  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller can not be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",

  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",

  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",

  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",

  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",

  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",

  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",

  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",

  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",

  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
},
    G =
/** @class */
function (t) {
  /** @hideconstructor */
  function e(e, n) {
    var r = this;
    return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    r.toString = function () {
      return r.name + ": [code=" + r.code + "]: " + r.message;
    }, r;
  }

  return (0, _tslib.__extends)(e, t), e;
}(Error),
    K =
/** @class */
function () {
  function t(t, e, n) {
    void 0 === e ? e = 0 : e > t.length && A(), void 0 === n ? n = t.length - e : n > t.length - e && A(), this.segments = t, this.offset = e, this.len = n;
  }

  return Object.defineProperty(t.prototype, "length", {
    get: function get() {
      return this.len;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (e) {
    return 0 === t.comparator(this, e);
  }, t.prototype.child = function (e) {
    var n = this.segments.slice(this.offset, this.limit());
    return e instanceof t ? e.forEach(function (t) {
      n.push(t);
    }) : n.push(e), this.construct(n);
  },
  /** The index of one past the last segment of the path. */
  t.prototype.limit = function () {
    return this.offset + this.length;
  }, t.prototype.popFirst = function (t) {
    return t = void 0 === t ? 1 : t, this.construct(this.segments, this.offset + t, this.length - t);
  }, t.prototype.popLast = function () {
    return this.construct(this.segments, this.offset, this.length - 1);
  }, t.prototype.firstSegment = function () {
    return this.segments[this.offset];
  }, t.prototype.lastSegment = function () {
    return this.get(this.length - 1);
  }, t.prototype.get = function (t) {
    return this.segments[this.offset + t];
  }, t.prototype.isEmpty = function () {
    return 0 === this.length;
  }, t.prototype.isPrefixOf = function (t) {
    if (t.length < this.length) return !1;

    for (var e = 0; e < this.length; e++) {
      if (this.get(e) !== t.get(e)) return !1;
    }

    return !0;
  }, t.prototype.isImmediateParentOf = function (t) {
    if (this.length + 1 !== t.length) return !1;

    for (var e = 0; e < this.length; e++) {
      if (this.get(e) !== t.get(e)) return !1;
    }

    return !0;
  }, t.prototype.forEach = function (t) {
    for (var e = this.offset, n = this.limit(); e < n; e++) {
      t(this.segments[e]);
    }
  }, t.prototype.toArray = function () {
    return this.segments.slice(this.offset, this.limit());
  }, t.comparator = function (t, e) {
    for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
      var i = t.get(r),
          o = e.get(r);
      if (i < o) return -1;
      if (i > o) return 1;
    }

    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
  }, t;
}(),
    z =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.construct = function (t, n, r) {
    return new e(t, n, r);
  }, e.prototype.canonicalString = function () {
    // NOTE: The client is ignorant of any path segments containing escape
    // sequences (e.g. __id123__) and just passes them through raw (they exist
    // for legacy reasons and should not be used frequently).
    return this.toArray().join("/");
  }, e.prototype.toString = function () {
    return this.canonicalString();
  },
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  e.fromString = function () {
    for (var t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    } // NOTE: The client is ignorant of any path segments containing escape
    // sequences (e.g. __id123__) and just passes them through raw (they exist
    // for legacy reasons and should not be used frequently).


    for (var r = [], i = 0, o = t; i < o.length; i++) {
      var s = o[i];
      if (s.indexOf("//") >= 0) throw new G(j.INVALID_ARGUMENT, "Invalid segment (" + s + "). Paths must not contain // in them."); // Strip leading and traling slashed.

      r.push.apply(r, s.split("/").filter(function (t) {
        return t.length > 0;
      }));
    }

    return new e(r);
  }, e.emptyPath = function () {
    return new e([]);
  }, e;
}(K),
    Q = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
    W =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.construct = function (t, n, r) {
    return new e(t, n, r);
  },
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  e.isValidIdentifier = function (t) {
    return Q.test(t);
  }, e.prototype.canonicalString = function () {
    return this.toArray().map(function (t) {
      return t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), e.isValidIdentifier(t) || (t = "`" + t + "`"), t;
    }).join(".");
  }, e.prototype.toString = function () {
    return this.canonicalString();
  },
  /**
   * Returns true if this field references the key of a document.
   */
  e.prototype.isKeyField = function () {
    return 1 === this.length && "__name__" === this.get(0);
  },
  /**
   * The field designating the key of a document.
   */
  e.keyField = function () {
    return new e(["__name__"]);
  },
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  e.fromServerFormat = function (t) {
    for (var n = [], r = "", i = 0, o = function o() {
      if (0 === r.length) throw new G(j.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
      n.push(r), r = "";
    }, s = !1; i < t.length;) {
      var u = t[i];

      if ("\\" === u) {
        if (i + 1 === t.length) throw new G(j.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
        var a = t[i + 1];
        if ("\\" !== a && "." !== a && "`" !== a) throw new G(j.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
        r += a, i += 2;
      } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
    }

    if (o(), s) throw new G(j.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new e(n);
  }, e.emptyPath = function () {
    return new e([]);
  }, e;
}(K),
    H =
/** @class */
function () {
  function t(t) {
    this.path = t;
  }

  return t.fromPath = function (e) {
    return new t(z.fromString(e));
  }, t.fromName = function (e) {
    return new t(z.fromString(e).popFirst(5));
  },
  /** Returns true if the document is in the specified collectionId. */
  t.prototype.hasCollectionId = function (t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }, t.prototype.isEqual = function (t) {
    return null !== t && 0 === z.comparator(this.path, t.path);
  }, t.prototype.toString = function () {
    return this.path.toString();
  }, t.comparator = function (t, e) {
    return z.comparator(t.path, e.path);
  }, t.isDocumentKey = function (t) {
    return t.length % 2 == 0;
  },
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  t.fromSegments = function (e) {
    return new t(new z(e.slice()));
  }, t;
}(),
    Y =
/** @class */
function () {
  function t(t) {
    this.binaryString = t;
  }

  return t.fromBase64String = function (e) {
    return new t(atob(e));
  }, t.fromUint8Array = function (e) {
    return new t(
    /**
    * Helper function to convert an Uint8array to a binary string.
    */
    function (t) {
      for (var e = "", n = 0; n < t.length; ++n) {
        e += String.fromCharCode(t[n]);
      }

      return e;
    }(e));
  }, t.prototype.toBase64 = function () {
    return t = this.binaryString, btoa(t);
    /** Converts a binary string to a Base64 encoded string. */

    var t;
    /** True if and only if the Base64 conversion functions are available. */
  }, t.prototype.toUint8Array = function () {
    return function (t) {
      for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) {
        e[n] = t.charCodeAt(n);
      }

      return e;
    }(this.binaryString);
  }, t.prototype.approximateByteSize = function () {
    return 2 * this.binaryString.length;
  }, t.prototype.compareTo = function (t) {
    return R(this.binaryString, t.binaryString);
  }, t.prototype.isEqual = function (t) {
    return this.binaryString === t.binaryString;
  }, t;
}();
/** An error returned by a Firestore operation. */


Y.EMPTY_BYTE_STRING = new Y("");
var J = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */

function X(t) {
  // The json interface (for the browser) will return an iso timestamp string,
  // while the proto js library (for node) will return a
  // google.protobuf.Timestamp instance.
  if (k(!!t), "string" == typeof t) {
    // The date string can have higher precision (nanos) than the Date class
    // (millis), so we do some custom parsing here.
    // Parse the nanos right out of the string.
    var e = 0,
        n = J.exec(t);

    if (k(!!n), n[1]) {
      // Pad the fraction out to 9 digits (nanos).
      var r = n[1];
      r = (r + "000000000").substr(0, 9), e = Number(r);
    } // Parse the date to get the seconds.


    var i = new Date(t);
    return {
      seconds: Math.floor(i.getTime() / 1e3),
      nanos: e
    };
  }

  return {
    seconds: $(t.seconds),
    nanos: $(t.nanos)
  };
}
/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */


function $(t) {
  // TODO(bjornick): Handle int64 greater than 53 bits.
  return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}
/** Converts the possible Proto types for Blobs into a ByteString. */


function Z(t) {
  return "string" == typeof t ? Y.fromBase64String(t) : Y.fromUint8Array(t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).

/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */


var tt =
/** @class */
function () {
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  function t(t, e) {
    if (this.seconds = t, this.nanoseconds = e, e < 0) throw new G(j.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9) throw new G(j.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t < -62135596800) throw new G(j.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); // This will break in the year 10,000.

    if (t >= 253402300800) throw new G(j.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */


  return t.now = function () {
    return t.fromMillis(Date.now());
  },
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  t.fromDate = function (e) {
    return t.fromMillis(e.getTime());
  },
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  t.fromMillis = function (e) {
    var n = Math.floor(e / 1e3);
    return new t(n, 1e6 * (e - 1e3 * n));
  },
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion causes
   * a loss of precision since `Date` objects only support millisecond precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  t.prototype.toDate = function () {
    return new Date(this.toMillis());
  },
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  t.prototype.toMillis = function () {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }, t.prototype._compareTo = function (t) {
    return this.seconds === t.seconds ? R(this.nanoseconds, t.nanoseconds) : R(this.seconds, t.seconds);
  },
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  t.prototype.isEqual = function (t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }, t.prototype.toString = function () {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }, t.prototype.toJSON = function () {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  },
  /**
   * Converts this object to a primitive string, which allows Timestamp objects to be compared
   * using the `>`, `<=`, `>=` and `>` operators.
   */
  t.prototype.valueOf = function () {
    // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
    // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
    // with zeroes to be a consistent length. Strings with this format then have a lexiographical
    // ordering that matches the expected ordering. The <seconds> translation is done to avoid
    // having a leading negative sign (i.e. a leading '-' character) in its string representation,
    // which would affect its lexiographical ordering.
    var t = this.seconds - -62135596800; // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.

    return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }, t;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */


exports.J = tt;

function et(t) {
  var e, n;
  return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */

/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */


function nt(t) {
  var e = t.mapValue.fields.__previous_value__;
  return et(e) ? nt(e) : e;
}
/**
 * Returns the local time at which this timestamp was first set.
 */


function rt(t) {
  var e = X(t.mapValue.fields.__local_write_time__.timestampValue);
  return new tt(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Extracts the backend's type order for the provided value. */


function it(t) {
  return "nullValue" in t ? 0
  /* NullValue */
  : "booleanValue" in t ? 1
  /* BooleanValue */
  : "integerValue" in t || "doubleValue" in t ? 2
  /* NumberValue */
  : "timestampValue" in t ? 3
  /* TimestampValue */
  : "stringValue" in t ? 5
  /* StringValue */
  : "bytesValue" in t ? 6
  /* BlobValue */
  : "referenceValue" in t ? 7
  /* RefValue */
  : "geoPointValue" in t ? 8
  /* GeoPointValue */
  : "arrayValue" in t ? 9
  /* ArrayValue */
  : "mapValue" in t ? et(t) ? 4
  /* ServerTimestampValue */
  : 10
  /* ObjectValue */
  : A();
}
/** Tests `left` and `right` for equality based on the backend semantics. */


function ot(t, e) {
  var n = it(t);
  if (n !== it(e)) return !1;

  switch (n) {
    case 0
    /* NullValue */
    :
      return !0;

    case 1
    /* BooleanValue */
    :
      return t.booleanValue === e.booleanValue;

    case 4
    /* ServerTimestampValue */
    :
      return rt(t).isEqual(rt(e));

    case 3
    /* TimestampValue */
    :
      return function (t, e) {
        if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) // Use string equality for ISO 8601 timestamps
          return t.timestampValue === e.timestampValue;
        var n = X(t.timestampValue),
            r = X(e.timestampValue);
        return n.seconds === r.seconds && n.nanos === r.nanos;
      }(t, e);

    case 5
    /* StringValue */
    :
      return t.stringValue === e.stringValue;

    case 6
    /* BlobValue */
    :
      return function (t, e) {
        return Z(t.bytesValue).isEqual(Z(e.bytesValue));
      }(t, e);

    case 7
    /* RefValue */
    :
      return t.referenceValue === e.referenceValue;

    case 8
    /* GeoPointValue */
    :
      return function (t, e) {
        return $(t.geoPointValue.latitude) === $(e.geoPointValue.latitude) && $(t.geoPointValue.longitude) === $(e.geoPointValue.longitude);
      }(t, e);

    case 2
    /* NumberValue */
    :
      return function (t, e) {
        if ("integerValue" in t && "integerValue" in e) return $(t.integerValue) === $(e.integerValue);

        if ("doubleValue" in t && "doubleValue" in e) {
          var n = $(t.doubleValue),
              r = $(e.doubleValue);
          return n === r ? U(n) === U(r) : isNaN(n) && isNaN(r);
        }

        return !1;
      }(t, e);

    case 9
    /* ArrayValue */
    :
      return O(t.arrayValue.values || [], e.arrayValue.values || [], ot);

    case 10
    /* ObjectValue */
    :
      return function (t, e) {
        var n = t.mapValue.fields || {},
            r = e.mapValue.fields || {};
        if (M(n) !== M(r)) return !1;

        for (var i in n) {
          if (n.hasOwnProperty(i) && (void 0 === r[i] || !ot(n[i], r[i]))) return !1;
        }

        return !0;
      }(t, e);

    default:
      return A();
  }
}

function st(t, e) {
  return void 0 !== (t.values || []).find(function (t) {
    return ot(t, e);
  });
}

function ut(t, e) {
  var n = it(t),
      r = it(e);
  if (n !== r) return R(n, r);

  switch (n) {
    case 0
    /* NullValue */
    :
      return 0;

    case 1
    /* BooleanValue */
    :
      return R(t.booleanValue, e.booleanValue);

    case 2
    /* NumberValue */
    :
      return function (t, e) {
        var n = $(t.integerValue || t.doubleValue),
            r = $(e.integerValue || e.doubleValue);
        return n < r ? -1 : n > r ? 1 : n === r ? 0 : // one or both are NaN.
        isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
      }(t, e);

    case 3
    /* TimestampValue */
    :
      return at(t.timestampValue, e.timestampValue);

    case 4
    /* ServerTimestampValue */
    :
      return at(rt(t), rt(e));

    case 5
    /* StringValue */
    :
      return R(t.stringValue, e.stringValue);

    case 6
    /* BlobValue */
    :
      return function (t, e) {
        var n = Z(t),
            r = Z(e);
        return n.compareTo(r);
      }(t.bytesValue, e.bytesValue);

    case 7
    /* RefValue */
    :
      return function (t, e) {
        for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
          var o = R(n[i], r[i]);
          if (0 !== o) return o;
        }

        return R(n.length, r.length);
      }(t.referenceValue, e.referenceValue);

    case 8
    /* GeoPointValue */
    :
      return function (t, e) {
        var n = R($(t.latitude), $(e.latitude));
        return 0 !== n ? n : R($(t.longitude), $(e.longitude));
      }(t.geoPointValue, e.geoPointValue);

    case 9
    /* ArrayValue */
    :
      return function (t, e) {
        for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
          var o = ut(n[i], r[i]);
          if (o) return o;
        }

        return R(n.length, r.length);
      }(t.arrayValue, e.arrayValue);

    case 10
    /* ObjectValue */
    :
      return function (t, e) {
        var n = t.fields || {},
            r = Object.keys(n),
            i = e.fields || {},
            o = Object.keys(i); // Even though MapValues are likely sorted correctly based on their insertion
        // order (e.g. when received from the backend), local modifications can bring
        // elements out of order. We need to re-sort the elements to ensure that
        // canonical IDs are independent of insertion order.

        r.sort(), o.sort();

        for (var s = 0; s < r.length && s < o.length; ++s) {
          var u = R(r[s], o[s]);
          if (0 !== u) return u;
          var a = ut(n[r[s]], i[o[s]]);
          if (0 !== a) return a;
        }

        return R(r.length, o.length);
      }(t.mapValue, e.mapValue);

    default:
      throw A();
  }
}

function at(t, e) {
  if ("string" == typeof t && "string" == typeof e && t.length === e.length) return R(t, e);
  var n = X(t),
      r = X(e),
      i = R(n.seconds, r.seconds);
  return 0 !== i ? i : R(n.nanos, r.nanos);
}

function ct(t) {
  return ht(t);
}

function ht(t) {
  return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function (t) {
    var e = X(t);
    return "time(" + e.seconds + "," + e.nanos + ")";
  }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? Z(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, H.fromName(n).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function (t) {
    for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) {
      n ? n = !1 : e += ",", e += ht(i[r]);
    }

    return e + "]";
  }(t.arrayValue) : "mapValue" in t ? function (t) {
    for ( // Iteration order in JavaScript is not guaranteed. To ensure that we generate
    // matching canonical IDs for identical maps, we need to sort the keys.
    var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
      var o = i[r];
      n ? n = !1 : e += ",", e += o + ":" + ht(t.fields[o]);
    }

    return e + "}";
  }(t.mapValue) : A();
  var e, n;
}

function ft(t, e) {
  return {
    referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.canonicalString()
  };
}
/** Returns true if `value` is an IntegerValue . */


function lt(t) {
  return !!t && "integerValue" in t;
}
/** Returns true if `value` is a DoubleValue. */

/** Returns true if `value` is an ArrayValue. */


function dt(t) {
  return !!t && "arrayValue" in t;
}
/** Returns true if `value` is a NullValue. */


function pt(t) {
  return !!t && "nullValue" in t;
}
/** Returns true if `value` is NaN. */


function yt(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
/** Returns true if `value` is a MapValue. */


function vt(t) {
  return !!t && "mapValue" in t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */


var mt = function mt(t, e) {
  this.key = t, this.version = e;
},
    gt =
/** @class */
function (t) {
  function e(e, n, r, i) {
    var o = this;
    return (o = t.call(this, e, n) || this).objectValue = r, o.hasLocalMutations = !!i.hasLocalMutations, o.hasCommittedMutations = !!i.hasCommittedMutations, o;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.field = function (t) {
    return this.objectValue.field(t);
  }, e.prototype.data = function () {
    return this.objectValue;
  }, e.prototype.toProto = function () {
    return this.objectValue.proto;
  }, e.prototype.isEqual = function (t) {
    return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.hasLocalMutations === t.hasLocalMutations && this.hasCommittedMutations === t.hasCommittedMutations && this.objectValue.isEqual(t.objectValue);
  }, e.prototype.toString = function () {
    return "Document(" + this.key + ", " + this.version + ", " + this.objectValue.toString() + ", {hasLocalMutations: " + this.hasLocalMutations + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
  }, Object.defineProperty(e.prototype, "hasPendingWrites", {
    get: function get() {
      return this.hasLocalMutations || this.hasCommittedMutations;
    },
    enumerable: !1,
    configurable: !0
  }), e;
}(mt),
    wt =
/** @class */
function (t) {
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), i;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.toString = function () {
    return "NoDocument(" + this.key + ", " + this.version + ")";
  }, Object.defineProperty(e.prototype, "hasPendingWrites", {
    get: function get() {
      return this.hasCommittedMutations;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.isEqual = function (t) {
    return t instanceof e && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
  }, e;
}(mt),
    bt =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.toString = function () {
    return "UnknownDocument(" + this.key + ", " + this.version + ")";
  }, Object.defineProperty(e.prototype, "hasPendingWrites", {
    get: function get() {
      return !0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.isEqual = function (t) {
    return t instanceof e && t.version.isEqual(this.version) && t.key.isEqual(this.key);
  }, e;
}(mt),
    It = function It(t, e, n, r, i, o, s) {
  void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.h = null;
};
/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */


function Et(t, e, n, r, i, o, s) {
  return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), new It(t, e, n, r, i, o, s);
}

function Tt(t) {
  var e = C(t);

  if (null === e.h) {
    var n = e.path.canonicalString();
    null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map(function (t) {
      return function (t) {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return t.field.canonicalString() + t.op.toString() + ct(t.value);
      }(t);
    }).join(","), n += "|ob:", n += e.orderBy.map(function (t) {
      return function (t) {
        // TODO(b/29183165): Make this collision robust.
        return t.field.canonicalString() + t.dir;
      }(t);
    }).join(","), V(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += Mt(e.startAt)), e.endAt && (n += "|ub:", n += Mt(e.endAt)), e.h = n;
  }

  return e.h;
}

function _t(t, e) {
  if (t.limit !== e.limit) return !1;
  if (t.orderBy.length !== e.orderBy.length) return !1;

  for (var n = 0; n < t.orderBy.length; n++) {
    if (!qt(t.orderBy[n], e.orderBy[n])) return !1;
  }

  if (t.filters.length !== e.filters.length) return !1;

  for (var r = 0; r < t.filters.length; r++) {
    if (i = t.filters[r], o = e.filters[r], i.op !== o.op || !i.field.isEqual(o.field) || !ot(i.value, o.value)) return !1;
  }

  var i, o;
  return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Ut(t.startAt, e.startAt) && Ut(t.endAt, e.endAt);
}

function St(t) {
  return H.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

var Dt =
/** @class */
function (t) {
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i;
  }
  /**
   * Creates a filter based on the provided arguments.
   */


  return (0, _tslib.__extends)(e, t), e.create = function (t, n, r) {
    return t.isKeyField() ? "in"
    /* IN */
    === n || "not-in"
    /* NOT_IN */
    === n ? this.l(t, n, r) : new Nt(t, n, r) : "array-contains"
    /* ARRAY_CONTAINS */
    === n ? new xt(t, r) : "in"
    /* IN */
    === n ? new Lt(t, r) : "not-in"
    /* NOT_IN */
    === n ? new Rt(t, r) : "array-contains-any"
    /* ARRAY_CONTAINS_ANY */
    === n ? new Ot(t, r) : new e(t, n, r);
  }, e.l = function (t, e, n) {
    return "in"
    /* IN */
    === e ? new At(t, n) : new kt(t, n);
  }, e.prototype.matches = function (t) {
    var e = t.field(this.field); // Types do not have to match in NOT_EQUAL filters.

    return "!="
    /* NOT_EQUAL */
    === this.op ? null !== e && this.m(ut(e, this.value)) : null !== e && it(this.value) === it(e) && this.m(ut(e, this.value)); // Only compare types with matching backend order (such as double and int).
  }, e.prototype.m = function (t) {
    switch (this.op) {
      case "<"
      /* LESS_THAN */
      :
        return t < 0;

      case "<="
      /* LESS_THAN_OR_EQUAL */
      :
        return t <= 0;

      case "=="
      /* EQUAL */
      :
        return 0 === t;

      case "!="
      /* NOT_EQUAL */
      :
        return 0 !== t;

      case ">"
      /* GREATER_THAN */
      :
        return t > 0;

      case ">="
      /* GREATER_THAN_OR_EQUAL */
      :
        return t >= 0;

      default:
        return A();
    }
  }, e.prototype.g = function () {
    return ["<"
    /* LESS_THAN */
    , "<="
    /* LESS_THAN_OR_EQUAL */
    , ">"
    /* GREATER_THAN */
    , ">="
    /* GREATER_THAN_OR_EQUAL */
    , "!="
    /* NOT_EQUAL */
    , "not-in"
    /* NOT_IN */
    ].indexOf(this.op) >= 0;
  }, e;
}(function () {});

var Nt =
/** @class */
function (t) {
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this, e, n, r) || this).key = H.fromName(r.referenceValue), i;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.matches = function (t) {
    var e = H.comparator(t.key, this.key);
    return this.m(e);
  }, e;
}(Dt),
    At =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, e, "in"
    /* IN */
    , n) || this).keys = Ct("in"
    /* IN */
    , n), r;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.matches = function (t) {
    return this.keys.some(function (e) {
      return e.isEqual(t.key);
    });
  }, e;
}(Dt),
    kt =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, e, "not-in"
    /* NOT_IN */
    , n) || this).keys = Ct("not-in"
    /* NOT_IN */
    , n), r;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.matches = function (t) {
    return !this.keys.some(function (e) {
      return e.isEqual(t.key);
    });
  }, e;
}(Dt);
/** Filter that matches on key fields within an array. */


function Ct(t, e) {
  var n;
  return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map(function (t) {
    return H.fromName(t.referenceValue);
  });
}
/** A Filter that implements the array-contains operator. */


var xt =
/** @class */
function (t) {
  function e(e, n) {
    return t.call(this, e, "array-contains"
    /* ARRAY_CONTAINS */
    , n) || this;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.matches = function (t) {
    var e = t.field(this.field);
    return dt(e) && st(e.arrayValue, this.value);
  }, e;
}(Dt),
    Lt =
/** @class */
function (t) {
  function e(e, n) {
    return t.call(this, e, "in"
    /* IN */
    , n) || this;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.matches = function (t) {
    var e = t.field(this.field);
    return null !== e && st(this.value.arrayValue, e);
  }, e;
}(Dt),
    Rt =
/** @class */
function (t) {
  function e(e, n) {
    return t.call(this, e, "not-in"
    /* NOT_IN */
    , n) || this;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.matches = function (t) {
    if (st(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    })) return !1;
    var e = t.field(this.field);
    return null !== e && !st(this.value.arrayValue, e);
  }, e;
}(Dt),
    Ot =
/** @class */
function (t) {
  function e(e, n) {
    return t.call(this, e, "array-contains-any"
    /* ARRAY_CONTAINS_ANY */
    , n) || this;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.matches = function (t) {
    var e = this,
        n = t.field(this.field);
    return !(!dt(n) || !n.arrayValue.values) && n.arrayValue.values.some(function (t) {
      return st(e.value.arrayValue, t);
    });
  }, e;
}(Dt),
    Pt = function Pt(t, e) {
  this.position = t, this.before = e;
};
/** A Filter that implements the IN operator. */


function Mt(t) {
  // TODO(b/29183165): Make this collision robust.
  return (t.before ? "b" : "a") + ":" + t.position.map(function (t) {
    return ct(t);
  }).join(",");
}
/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */


var Ft = function Ft(t, e
/* ASCENDING */
) {
  void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function qt(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */


function Vt(t, e, n) {
  for (var r = 0, i = 0; i < t.position.length; i++) {
    var o = e[i],
        s = t.position[i];
    if (r = o.field.isKeyField() ? H.comparator(H.fromName(s.referenceValue), n.key) : ut(s, n.field(o.field)), "desc"
    /* DESCENDING */
    === o.dir && (r *= -1), 0 !== r) break;
  }

  return t.before ? r <= 0 : r < 0;
}

function Ut(t, e) {
  if (null === t) return null === e;
  if (null === e) return !1;
  if (t.before !== e.before || t.position.length !== e.position.length) return !1;

  for (var n = 0; n < t.position.length; n++) {
    if (!ot(t.position[n], e.position[n])) return !1;
  }

  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */


var Bt =
/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
function Bt(t, e, n, r, i, o
/* First */
, s, u) {
  void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = o, this.startAt = s, this.endAt = u, this.p = null, // The corresponding `Target` of this `Query` instance.
  this.T = null, this.startAt, this.endAt;
};
/** Creates a new Query instance with the options provided. */


function jt(t, e, n, r, i, o, s, u) {
  return new Bt(t, e, n, r, i, o, s, u);
}
/** Creates a new Query for a query that matches all documents at `path` */


function Gt(t) {
  return new Bt(t);
}
/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */


function Kt(t) {
  return !V(t.limit) && "F"
  /* First */
  === t.limitType;
}

function zt(t) {
  return !V(t.limit) && "L"
  /* Last */
  === t.limitType;
}

function Qt(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}

function Wt(t) {
  for (var e = 0, n = t.filters; e < n.length; e++) {
    var r = n[e];
    if (r.g()) return r.field;
  }

  return null;
}
/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */

/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */


function Ht(t) {
  return null !== t.collectionGroup;
}
/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */


function Yt(t) {
  var e = C(t);

  if (null === e.p) {
    e.p = [];
    var n = Wt(e),
        r = Qt(e);
    if (null !== n && null === r) // In order to implicitly add key ordering, we must also add the
      // inequality filter field for it to be a valid query.
      // Note that the default inequality field and key ordering is ascending.
      n.isKeyField() || e.p.push(new Ft(n)), e.p.push(new Ft(W.keyField(), "asc"
      /* ASCENDING */
      ));else {
      for (var i = !1, o = 0, s = e.explicitOrderBy; o < s.length; o++) {
        var u = s[o];
        e.p.push(u), u.field.isKeyField() && (i = !0);
      }

      if (!i) {
        // The order of the implicit key ordering always matches the last
        // explicit order by
        var a = e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : "asc"
        /* ASCENDING */
        ;
        e.p.push(new Ft(W.keyField(), a));
      }
    }
  }

  return e.p;
}
/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */


function Jt(t) {
  var e = C(t);
  if (!e.T) if ("F"
  /* First */
  === e.limitType) e.T = Et(e.path, e.collectionGroup, Yt(e), e.filters, e.limit, e.startAt, e.endAt);else {
    for ( // Flip the orderBy directions since we want the last results
    var n = [], r = 0, i = Yt(e); r < i.length; r++) {
      var o = i[r],
          s = "desc"
      /* DESCENDING */
      === o.dir ? "asc"
      /* ASCENDING */
      : "desc"
      /* DESCENDING */
      ;
      n.push(new Ft(o.field, s));
    } // We need to swap the cursors to match the now-flipped query ordering.


    var u = e.endAt ? new Pt(e.endAt.position, !e.endAt.before) : null,
        a = e.startAt ? new Pt(e.startAt.position, !e.startAt.before) : null; // Now return as a LimitType.First query.

    e.T = Et(e.path, e.collectionGroup, n, e.filters, e.limit, u, a);
  }
  return e.T;
}

function Xt(t, e, n) {
  return new Bt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function $t(t, e) {
  return _t(Jt(t), Jt(e)) && t.limitType === e.limitType;
} // TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.


function Zt(t) {
  return Tt(Jt(t)) + "|lt:" + t.limitType;
}

function te(t) {
  return "Query(target=" + function (t) {
    var e = t.path.canonicalString();
    return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (e += ", filters: [" + t.filters.map(function (t) {
      return (e = t).field.canonicalString() + " " + e.op + " " + ct(e.value);
      /** Returns a debug description for `filter`. */

      var e;
      /** Filter that matches on key fields (i.e. '__name__'). */
    }).join(", ") + "]"), V(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map(function (t) {
      return function (t) {
        return t.field.canonicalString() + " (" + t.dir + ")";
      }(t);
    }).join(", ") + "]"), t.startAt && (e += ", startAt: " + Mt(t.startAt)), t.endAt && (e += ", endAt: " + Mt(t.endAt)), "Target(" + e + ")";
  }(Jt(t)) + "; limitType=" + t.limitType + ")";
}
/** Returns whether `doc` matches the constraints of `query`. */


function ee(t, e) {
  return function (t, e) {
    var n = e.key.path;
    return null !== t.collectionGroup ? e.key.hasCollectionId(t.collectionGroup) && t.path.isPrefixOf(n) : H.isDocumentKey(t.path) ? t.path.isEqual(n) : t.path.isImmediateParentOf(n);
  }(t, e) && function (t, e) {
    for (var n = 0, r = t.explicitOrderBy; n < r.length; n++) {
      var i = r[n]; // order by key always matches

      if (!i.field.isKeyField() && null === e.field(i.field)) return !1;
    }

    return !0;
  }(t, e) && function (t, e) {
    for (var n = 0, r = t.filters; n < r.length; n++) {
      if (!r[n].matches(e)) return !1;
    }

    return !0;
  }(t, e) && function (t, e) {
    return !(t.startAt && !Vt(t.startAt, Yt(t), e)) && (!t.endAt || !Vt(t.endAt, Yt(t), e));
  }(t, e);
}

function ne(t) {
  return function (e, n) {
    for (var r = !1, i = 0, o = Yt(t); i < o.length; i++) {
      var s = o[i],
          u = re(s, e, n);
      if (0 !== u) return u;
      r = r || s.field.isKeyField();
    }

    return 0;
  };
}

function re(t, e, n) {
  var r = t.field.isKeyField() ? H.comparator(e.key, n.key) : function (t, e, n) {
    var r = e.field(t),
        i = n.field(t);
    return null !== r && null !== i ? ut(r, i) : A();
  }(t.field, e, n);

  switch (t.dir) {
    case "asc"
    /* ASCENDING */
    :
      return r;

    case "desc"
    /* DESCENDING */
    :
      return -1 * r;

    default:
      return A();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */


var ie =
/** @class */
function () {
  function t(t) {
    this.timestamp = t;
  }

  return t.fromTimestamp = function (e) {
    return new t(e);
  }, t.min = function () {
    return new t(new tt(0, 0));
  }, t.prototype.compareTo = function (t) {
    return this.timestamp._compareTo(t.timestamp);
  }, t.prototype.isEqual = function (t) {
    return this.timestamp.isEqual(t.timestamp);
  },
  /** Returns a number representation of the version for use in spec tests. */
  t.prototype.toMicroseconds = function () {
    // Convert to microseconds.
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }, t.prototype.toString = function () {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }, t.prototype.toTimestamp = function () {
    return this.timestamp;
  }, t;
}(),
    oe =
/** @class */
function () {
  function t(t) {
    this.fields = t, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    t.sort(W.comparator)
    /**
    * Verifies that `fieldPath` is included by at least one field in this field
    * mask.
    *
    * This is an O(n) operation, where `n` is the size of the field mask.
    */
    ;
  }

  return t.prototype.covers = function (t) {
    for (var e = 0, n = this.fields; e < n.length; e++) {
      if (n[e].isPrefixOf(t)) return !0;
    }

    return !1;
  }, t.prototype.isEqual = function (t) {
    return O(this.fields, t.fields, function (t, e) {
      return t.isEqual(e);
    });
  }, t;
}(),
    se =
/** @class */
function () {
  function t(t) {
    this.proto = t;
  }

  return t.empty = function () {
    return new t({
      mapValue: {}
    });
  },
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or if there it doesn't exist.
   */
  t.prototype.field = function (t) {
    if (t.isEmpty()) return this.proto;

    for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
      if (!e.mapValue.fields) return null;
      if (!vt(e = e.mapValue.fields[t.get(n)])) return null;
    }

    return (e = (e.mapValue.fields || {})[t.lastSegment()]) || null;
  }, t.prototype.isEqual = function (t) {
    return ot(this.proto, t.proto);
  }, t;
}(),
    ue =
/** @class */
function () {
  /**
   * @param baseObject - The object to mutate.
   */
  function t(t) {
    void 0 === t && (t = se.empty()), this.I = t,
    /** A map that contains the accumulated changes in this builder. */
    this.A = new Map();
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   * @returns The current Builder instance.
   */


  return t.prototype.set = function (t, e) {
    return this.R(t, e), this;
  },
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   * @returns The current Builder instance.
   */
  t.prototype.delete = function (t) {
    return this.R(t, null), this;
  },
  /**
   * Adds `value` to the overlay map at `path`. Creates nested map entries if
   * needed.
   */
  t.prototype.R = function (t, e) {
    for (var n = this.A, r = 0; r < t.length - 1; ++r) {
      var i = t.get(r),
          o = n.get(i);
      o instanceof Map ? // Re-use a previously created map
      n = o : o && 10
      /* ObjectValue */
      === it(o) ? ( // Convert the existing Protobuf MapValue into a map
      o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : ( // Create an empty map to represent the current nesting level
      o = new Map(), n.set(i, o), n = o);
    }

    n.set(t.lastSegment(), e);
  },
  /** Returns an ObjectValue with all mutations applied. */
  t.prototype.v = function () {
    var t = this.P(W.emptyPath(), this.A);
    return null != t ? new se(t) : this.I;
  },
  /**
   * Applies any overlays from `currentOverlays` that exist at `currentPath`
   * and returns the merged data at `currentPath` (or null if there were no
   * changes).
   *
   * @param currentPath - The path at the current nesting level. Can be set to
   * FieldValue.emptyPath() to represent the root.
   * @param currentOverlays - The overlays at the current nesting level in the
   * same format as `overlayMap`.
   * @returns The merged data at `currentPath` or null if no modifications
   * were applied.
   */
  t.prototype.P = function (t, e) {
    var n = this,
        r = !1,
        i = this.I.field(t),
        o = vt(i) ? // If there is already data at the current path, base our
    Object.assign({}, i.mapValue.fields) : {};
    return e.forEach(function (e, i) {
      if (e instanceof Map) {
        var s = n.P(t.child(i), e);
        null != s && (o[i] = s, r = !0);
      } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
    }), r ? {
      mapValue: {
        fields: o
      }
    } : null;
  }, t;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */


function ae(t) {
  var e = [];
  return F(t.fields || {}, function (t, n) {
    var r = new W([t]);

    if (vt(n)) {
      var i = ae(n.mapValue).fields;
      if (0 === i.length) // Preserve the empty map by adding it to the FieldMask.
        e.push(r);else // For nested and non-empty ObjectValues, add the FieldPath of the
        // leaf nodes.
        for (var o = 0, s = i; o < s.length; o++) {
          var u = s[o];
          e.push(r.child(u));
        }
    } else // For nested and non-empty ObjectValues, add the FieldPath of the leaf
      // nodes.
      e.push(r);
  }), new oe(e)
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

  /**
  * Returns an DoubleValue for `value` that is encoded based the serializer's
  * `useProto3Json` setting.
  */
  ;
}

function ce(t, e) {
  if (t.V) {
    if (isNaN(e)) return {
      doubleValue: "NaN"
    };
    if (e === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (e === -1 / 0) return {
      doubleValue: "-Infinity"
    };
  }

  return {
    doubleValue: U(e) ? "-0" : e
  };
}
/**
 * Returns an IntegerValue for `value`.
 */


function he(t) {
  return {
    integerValue: "" + t
  };
}
/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */


function fe(t, e) {
  return B(e) ? he(e) : ce(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Used to represent a field transform on a mutation. */


var le = function le() {
  // Make sure that the structural type of `TransformOperation` is unique.
  // See https://github.com/microsoft/TypeScript/issues/5451
  this._ = void 0;
};
/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */


function de(t, e, n) {
  return t instanceof ve ? function (t, e) {
    var n = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t.seconds,
            nanos: t.nanoseconds
          }
        }
      }
    };
    return e && (n.fields.__previous_value__ = e), {
      mapValue: n
    };
  }(n, e) : t instanceof me ? ge(t, e) : t instanceof we ? be(t, e) : function (t, e) {
    // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
    // precision and resolves overflows by reducing precision, we do not
    // manually cap overflows at 2^63.
    var n = ye(t, e),
        r = Ee(n) + Ee(t.S);
    return lt(n) && lt(t.S) ? he(r) : ce(t.D, r);
  }(t, e);
}
/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */


function pe(t, e, n) {
  // The server just sends null as the transform result for array operations,
  // so we have to calculate a result the same as we do for local
  // applications.
  return t instanceof me ? ge(t, e) : t instanceof we ? be(t, e) : n;
}
/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */


function ye(t, e) {
  return t instanceof Ie ? lt(n = e) || function (t) {
    return !!t && "doubleValue" in t;
  }(n) ? e : {
    integerValue: 0
  } : null;
  var n;
}
/** Transforms a value into a server-generated timestamp. */


var ve =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return (0, _tslib.__extends)(e, t), e;
}(le),
    me =
/** @class */
function (t) {
  function e(e) {
    var n = this;
    return (n = t.call(this) || this).elements = e, n;
  }

  return (0, _tslib.__extends)(e, t), e;
}(le);
/** Transforms an array value via a union operation. */


function ge(t, e) {
  for (var n = Te(e), r = function r(t) {
    n.some(function (e) {
      return ot(e, t);
    }) || n.push(t);
  }, i = 0, o = t.elements; i < o.length; i++) {
    r(o[i]);
  }

  return {
    arrayValue: {
      values: n
    }
  };
}
/** Transforms an array value via a remove operation. */


var we =
/** @class */
function (t) {
  function e(e) {
    var n = this;
    return (n = t.call(this) || this).elements = e, n;
  }

  return (0, _tslib.__extends)(e, t), e;
}(le);

function be(t, e) {
  for (var n = Te(e), r = function r(t) {
    n = n.filter(function (e) {
      return !ot(e, t);
    });
  }, i = 0, o = t.elements; i < o.length; i++) {
    r(o[i]);
  }

  return {
    arrayValue: {
      values: n
    }
  };
}
/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */


var Ie =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this) || this).D = e, r.S = n, r;
  }

  return (0, _tslib.__extends)(e, t), e;
}(le);

function Ee(t) {
  return $(t.integerValue || t.doubleValue);
}

function Te(t) {
  return dt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** A field path and the TransformOperation to perform upon it. */


var _e = function _e(t, e) {
  this.field = t, this.transform = e;
};
/** The result of successfully applying a mutation to the backend. */


var Se = function Se(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t,
/**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be empty if the mutation did not contain any field transforms.
     */
e) {
  this.version = t, this.transformResults = e;
},
    De =
/** @class */
function () {
  function t(t, e) {
    this.updateTime = t, this.exists = e
    /** Creates a new empty Precondition. */
    ;
  }

  return t.none = function () {
    return new t();
  },
  /** Creates a new Precondition with an exists flag. */
  t.exists = function (e) {
    return new t(void 0, e);
  },
  /** Creates a new Precondition based on a version a document exists at. */
  t.updateTime = function (e) {
    return new t(e);
  }, Object.defineProperty(t.prototype, "isNone", {
    /** Returns whether this Precondition is empty. */
    get: function get() {
      return void 0 === this.updateTime && void 0 === this.exists;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (t) {
    return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
  }, t;
}();
/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */

/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */


function Ne(t, e) {
  return void 0 !== t.updateTime ? e instanceof gt && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof gt;
}
/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */


var Ae = function Ae() {};
/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing a new remote document. If the input document doesn't match the
 * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
 * returned.
 *
 * @param mutation - The mutation to apply.
 * @param maybeDoc - The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param mutationResult - The result of applying the mutation from the backend.
 * @returns The mutated document. The returned document may be an
 *     UnknownDocument if the mutation could not be applied to the locally
 *     cached base document.
 */


function ke(t, e, n) {
  return t instanceof Oe ? function (t, e, n) {
    // Unlike applySetMutationToLocalView, if we're applying a mutation to a
    // remote document the server has accepted the mutation so the precondition
    // must have held.
    var r = t.value,
        i = Fe(t.fieldTransforms, e, n.transformResults);
    return r = Ve(t.fieldTransforms, r, i), new gt(t.key, n.version, r, {
      hasCommittedMutations: !0
    });
  }(t, e, n) : t instanceof Pe ? function (t, e, n) {
    if (!Ne(t.precondition, e)) // Since the mutation was not rejected, we know that the precondition
      // matched on the backend. We therefore must not have the expected version
      // of the document in our cache and return an UnknownDocument with the
      // known updateTime.
      return new bt(t.key, n.version);
    var r = Me(t, e, Fe(t.fieldTransforms, e, n.transformResults));
    return new gt(t.key, n.version, r, {
      hasCommittedMutations: !0
    });
  }(t, e, n) : function (t, e, n) {
    // Unlike applyToLocalView, if we're applying a mutation to a remote
    // document the server has accepted the mutation so the precondition must
    // have held.
    return new wt(t.key, n.version, {
      hasCommittedMutations: !0
    });
  }(t, 0, n);
}
/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing the new local view of a document. Both the input and returned
 * documents can be null.
 *
 * @param mutation - The mutation to apply.
 * @param maybeDoc - The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @returns The mutated document. The returned document may be null, but only
 *     if maybeDoc was null and the mutation would not create a new document.
 */


function Ce(t, e, n) {
  return t instanceof Oe ? function (t, e, n) {
    if (!Ne(t.precondition, e)) return e;
    var r = t.value,
        i = qe(t.fieldTransforms, n, e);
    r = Ve(t.fieldTransforms, r, i);
    var o = Re(e);
    return new gt(t.key, o, r, {
      hasLocalMutations: !0
    });
  }(t, e, n) : t instanceof Pe ? function (t, e, n) {
    if (!Ne(t.precondition, e)) return e;
    var r = Re(e),
        i = Me(t, e, qe(t.fieldTransforms, n, e));
    return new gt(t.key, r, i, {
      hasLocalMutations: !0
    });
  }(t, e, n) : function (t, e) {
    return Ne(t.precondition, e) ? new wt(t.key, ie.min()) : e;
  }(t, e);
}
/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */


function xe(t, e) {
  return function (t, e) {
    for (var n = null, r = 0, i = t; r < i.length; r++) {
      var o = i[r],
          s = e instanceof gt ? e.field(o.field) : void 0,
          u = ye(o.transform, s || null);
      null != u && (n = null == n ? new ue().set(o.field, u) : n.set(o.field, u));
    }

    return n ? n.v() : null;
  }(t.fieldTransforms, e);
}

function Le(t, e) {
  return t.type === e.type && !!t.key.isEqual(e.key) && !!t.precondition.isEqual(e.precondition) && !!function (t, e) {
    return void 0 === t && void 0 === e || !(!t || !e) && O(t, e, function (t, e) {
      return function (t, e) {
        return t.field.isEqual(e.field) && function (t, e) {
          return t instanceof me && e instanceof me || t instanceof we && e instanceof we ? O(t.elements, e.elements, ot) : t instanceof Ie && e instanceof Ie ? ot(t.S, e.S) : t instanceof ve && e instanceof ve;
        }(t.transform, e.transform);
      }(t, e);
    });
  }(t.fieldTransforms, e.fieldTransforms) && (0
  /* Set */
  === t.type ? t.value.isEqual(e.value) : 1
  /* Patch */
  !== t.type || t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask));
}
/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */


function Re(t) {
  return t instanceof gt ? t.version : ie.min();
}
/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */


var Oe =
/** @class */
function (t) {
  function e(e, n, r, i) {
    void 0 === i && (i = []);
    var o = this;
    return (o = t.call(this) || this).key = e, o.value = n, o.precondition = r, o.fieldTransforms = i, o.type = 0
    /* Set */
    , o;
  }

  return (0, _tslib.__extends)(e, t), e;
}(Ae),
    Pe =
/** @class */
function (t) {
  function e(e, n, r, i, o) {
    void 0 === o && (o = []);
    var s = this;
    return (s = t.call(this) || this).key = e, s.data = n, s.fieldMask = r, s.precondition = i, s.fieldTransforms = o, s.type = 1
    /* Patch */
    , s;
  }

  return (0, _tslib.__extends)(e, t), e;
}(Ae);

function Me(t, e, n) {
  var r;
  return r = function (t, e) {
    var n = new ue(e);
    return t.fieldMask.fields.forEach(function (e) {
      if (!e.isEmpty()) {
        var r = t.data.field(e);
        null !== r ? n.set(e, r) : n.delete(e);
      }
    }), n.v();
  }(t, r = e instanceof gt ? e.data() : se.empty()), r = Ve(t.fieldTransforms, r, n);
}

function Fe(t, e, n) {
  var r = [];
  k(t.length === n.length);

  for (var i = 0; i < n.length; i++) {
    var o = t[i],
        s = o.transform,
        u = null;
    e instanceof gt && (u = e.field(o.field)), r.push(pe(s, u, n[i]));
  }

  return r;
}
/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param maybeDoc - The current state of the document after applying all
 *     previous mutations.
 * @returns The transform results list.
 */


function qe(t, e, n) {
  for (var r = [], i = 0, o = t; i < o.length; i++) {
    var s = o[i],
        u = s.transform,
        a = null;
    n instanceof gt && (a = n.field(s.field)), r.push(de(u, a, e));
  }

  return r;
}

function Ve(t, e, n) {
  for (var r = new ue(e), i = 0; i < t.length; i++) {
    var o = t[i];
    r.set(o.field, n[i]);
  }

  return r.v();
}
/** A mutation that deletes the document at the given key. */


var Ue,
    Be,
    je =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this) || this).key = e, r.precondition = n, r.type = 2
    /* Delete */
    , r.fieldTransforms = [], r;
  }

  return (0, _tslib.__extends)(e, t), e;
}(Ae),
    Ge =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this) || this).key = e, r.precondition = n, r.type = 3
    /* Verify */
    , r.fieldTransforms = [], r;
  }

  return (0, _tslib.__extends)(e, t), e;
}(Ae),
    Ke = // TODO(b/33078163): just use simplest form of existence filter for now
function Ke(t) {
  this.count = t;
};
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */


function ze(t) {
  switch (t) {
    case j.OK:
      return A();

    case j.CANCELLED:
    case j.UNKNOWN:
    case j.DEADLINE_EXCEEDED:
    case j.RESOURCE_EXHAUSTED:
    case j.INTERNAL:
    case j.UNAVAILABLE: // Unauthenticated means something went wrong with our token and we need
    // to retry with new credentials which will happen automatically.

    case j.UNAUTHENTICATED:
      return !1;

    case j.INVALID_ARGUMENT:
    case j.NOT_FOUND:
    case j.ALREADY_EXISTS:
    case j.PERMISSION_DENIED:
    case j.FAILED_PRECONDITION: // Aborted might be retried in some scenarios, but that is dependant on
    // the context and should handled individually by the calling code.
    // See https://cloud.google.com/apis/design/errors.

    case j.ABORTED:
    case j.OUT_OF_RANGE:
    case j.UNIMPLEMENTED:
    case j.DATA_LOSS:
      return !0;

    default:
      return A();
  }
}
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */

/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */


function Qe(t) {
  if (void 0 === t) // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return S("GRPC error has no .code"), j.UNKNOWN;

  switch (t) {
    case Ue.OK:
      return j.OK;

    case Ue.CANCELLED:
      return j.CANCELLED;

    case Ue.UNKNOWN:
      return j.UNKNOWN;

    case Ue.DEADLINE_EXCEEDED:
      return j.DEADLINE_EXCEEDED;

    case Ue.RESOURCE_EXHAUSTED:
      return j.RESOURCE_EXHAUSTED;

    case Ue.INTERNAL:
      return j.INTERNAL;

    case Ue.UNAVAILABLE:
      return j.UNAVAILABLE;

    case Ue.UNAUTHENTICATED:
      return j.UNAUTHENTICATED;

    case Ue.INVALID_ARGUMENT:
      return j.INVALID_ARGUMENT;

    case Ue.NOT_FOUND:
      return j.NOT_FOUND;

    case Ue.ALREADY_EXISTS:
      return j.ALREADY_EXISTS;

    case Ue.PERMISSION_DENIED:
      return j.PERMISSION_DENIED;

    case Ue.FAILED_PRECONDITION:
      return j.FAILED_PRECONDITION;

    case Ue.ABORTED:
      return j.ABORTED;

    case Ue.OUT_OF_RANGE:
      return j.OUT_OF_RANGE;

    case Ue.UNIMPLEMENTED:
      return j.UNIMPLEMENTED;

    case Ue.DATA_LOSS:
      return j.DATA_LOSS;

    default:
      return A();
  }
}
/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */


(Be = Ue || (Ue = {}))[Be.OK = 0] = "OK", Be[Be.CANCELLED = 1] = "CANCELLED", Be[Be.UNKNOWN = 2] = "UNKNOWN", Be[Be.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Be[Be.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Be[Be.NOT_FOUND = 5] = "NOT_FOUND", Be[Be.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Be[Be.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Be[Be.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Be[Be.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Be[Be.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Be[Be.ABORTED = 10] = "ABORTED", Be[Be.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Be[Be.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Be[Be.INTERNAL = 13] = "INTERNAL", Be[Be.UNAVAILABLE = 14] = "UNAVAILABLE", Be[Be.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.

var We =
/** @class */
function () {
  function t(t, e) {
    this.comparator = t, this.root = e || Ye.EMPTY;
  } // Returns a copy of the map, with the specified key/value added or replaced.


  return t.prototype.insert = function (e, n) {
    return new t(this.comparator, this.root.insert(e, n, this.comparator).copy(null, null, Ye.BLACK, null, null));
  }, // Returns a copy of the map, with the specified key removed.
  t.prototype.remove = function (e) {
    return new t(this.comparator, this.root.remove(e, this.comparator).copy(null, null, Ye.BLACK, null, null));
  }, // Returns the value of the node with the given key, or null.
  t.prototype.get = function (t) {
    for (var e = this.root; !e.isEmpty();) {
      var n = this.comparator(t, e.key);
      if (0 === n) return e.value;
      n < 0 ? e = e.left : n > 0 && (e = e.right);
    }

    return null;
  }, // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  t.prototype.indexOf = function (t) {
    for ( // Number of nodes that were pruned when descending right
    var e = 0, n = this.root; !n.isEmpty();) {
      var r = this.comparator(t, n.key);
      if (0 === r) return e + n.left.size;
      r < 0 ? n = n.left : ( // Count all nodes left of the node plus the node itself
      e += n.left.size + 1, n = n.right);
    } // Node not found


    return -1;
  }, t.prototype.isEmpty = function () {
    return this.root.isEmpty();
  }, Object.defineProperty(t.prototype, "size", {
    // Returns the total number of nodes in the map.
    get: function get() {
      return this.root.size;
    },
    enumerable: !1,
    configurable: !0
  }), // Returns the minimum key in the map.
  t.prototype.minKey = function () {
    return this.root.minKey();
  }, // Returns the maximum key in the map.
  t.prototype.maxKey = function () {
    return this.root.maxKey();
  }, // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.inorderTraversal = function (t) {
    return this.root.inorderTraversal(t);
  }, t.prototype.forEach = function (t) {
    this.inorderTraversal(function (e, n) {
      return t(e, n), !1;
    });
  }, t.prototype.toString = function () {
    var t = [];
    return this.inorderTraversal(function (e, n) {
      return t.push(e + ":" + n), !1;
    }), "{" + t.join(", ") + "}";
  }, // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.reverseTraversal = function (t) {
    return this.root.reverseTraversal(t);
  }, // Returns an iterator over the SortedMap.
  t.prototype.getIterator = function () {
    return new He(this.root, null, this.comparator, !1);
  }, t.prototype.getIteratorFrom = function (t) {
    return new He(this.root, t, this.comparator, !1);
  }, t.prototype.getReverseIterator = function () {
    return new He(this.root, null, this.comparator, !0);
  }, t.prototype.getReverseIteratorFrom = function (t) {
    return new He(this.root, t, this.comparator, !0);
  }, t;
}(),
    He =
/** @class */
function () {
  function t(t, e, n, r) {
    this.isReverse = r, this.nodeStack = [];

    for (var i = 1; !t.isEmpty();) {
      if (i = e ? n(t.key, e) : 1, // flip the comparison if we're going in reverse
      r && (i *= -1), i < 0) // This node is less than our start key. ignore it
        t = this.isReverse ? t.left : t.right;else {
        if (0 === i) {
          // This node is exactly equal to our start key. Push it on the stack,
          // but stop iterating;
          this.nodeStack.push(t);
          break;
        } // This node is greater than our start key, add it to the stack and move
        // to the next one


        this.nodeStack.push(t), t = this.isReverse ? t.right : t.left;
      }
    }
  }

  return t.prototype.getNext = function () {
    var t = this.nodeStack.pop(),
        e = {
      key: t.key,
      value: t.value
    };
    if (this.isReverse) for (t = t.left; !t.isEmpty();) {
      this.nodeStack.push(t), t = t.right;
    } else for (t = t.right; !t.isEmpty();) {
      this.nodeStack.push(t), t = t.left;
    }
    return e;
  }, t.prototype.hasNext = function () {
    return this.nodeStack.length > 0;
  }, t.prototype.peek = function () {
    if (0 === this.nodeStack.length) return null;
    var t = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: t.key,
      value: t.value
    };
  }, t;
}(),
    Ye =
/** @class */
function () {
  function t(e, n, r, i, o) {
    this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
  } // Returns a copy of the current node, optionally replacing pieces of it.


  return t.prototype.copy = function (e, n, r, i, o) {
    return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
  }, t.prototype.isEmpty = function () {
    return !1;
  }, // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.inorderTraversal = function (t) {
    return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t);
  }, // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.reverseTraversal = function (t) {
    return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t);
  }, // Returns the minimum node in the tree.
  t.prototype.min = function () {
    return this.left.isEmpty() ? this : this.left.min();
  }, // Returns the maximum key in the tree.
  t.prototype.minKey = function () {
    return this.min().key;
  }, // Returns the maximum key in the tree.
  t.prototype.maxKey = function () {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }, // Returns new tree, with the key/value added.
  t.prototype.insert = function (t, e, n) {
    var r = this,
        i = n(t, r.key);
    return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp();
  }, t.prototype.removeMin = function () {
    if (this.left.isEmpty()) return t.EMPTY;
    var e = this;
    return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), (e = e.copy(null, null, null, e.left.removeMin(), null)).fixUp();
  }, // Returns new tree, with the specified item removed.
  t.prototype.remove = function (e, n) {
    var r,
        i = this;
    if (n(e, i.key) < 0) i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()), i = i.copy(null, null, null, i.left.remove(e, n), null);else {
      if (i.left.isRed() && (i = i.rotateRight()), i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()), 0 === n(e, i.key)) {
        if (i.right.isEmpty()) return t.EMPTY;
        r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.removeMin());
      }

      i = i.copy(null, null, null, null, i.right.remove(e, n));
    }
    return i.fixUp();
  }, t.prototype.isRed = function () {
    return this.color;
  }, // Returns new tree after performing any needed rotations.
  t.prototype.fixUp = function () {
    var t = this;
    return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t;
  }, t.prototype.moveRedLeft = function () {
    var t = this.colorFlip();
    return t.right.left.isRed() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight())).rotateLeft()).colorFlip()), t;
  }, t.prototype.moveRedRight = function () {
    var t = this.colorFlip();
    return t.left.left.isRed() && (t = (t = t.rotateRight()).colorFlip()), t;
  }, t.prototype.rotateLeft = function () {
    var e = this.copy(null, null, t.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }, t.prototype.rotateRight = function () {
    var e = this.copy(null, null, t.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }, t.prototype.colorFlip = function () {
    var t = this.left.copy(null, null, !this.left.color, null, null),
        e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, e);
  }, // For testing.
  t.prototype.checkMaxDepth = function () {
    var t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }, // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  t.prototype.check = function () {
    if (this.isRed() && this.left.isRed()) throw A();
    if (this.right.isRed()) throw A();
    var t = this.left.check();
    if (t !== this.right.check()) throw A();
    return t + (this.isRed() ? 0 : 1);
  }, t;
}(); // end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any


Ye.EMPTY = null, Ye.RED = !0, Ye.BLACK = !1, // end LLRBEmptyNode
Ye.EMPTY = new (
/** @class */
function () {
  function t() {
    this.size = 0;
  }

  return Object.defineProperty(t.prototype, "key", {
    get: function get() {
      throw A();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "value", {
    get: function get() {
      throw A();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "color", {
    get: function get() {
      throw A();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "left", {
    get: function get() {
      throw A();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "right", {
    get: function get() {
      throw A();
    },
    enumerable: !1,
    configurable: !0
  }), // Returns a copy of the current node.
  t.prototype.copy = function (t, e, n, r, i) {
    return this;
  }, // Returns a copy of the tree, with the specified key/value added.
  t.prototype.insert = function (t, e, n) {
    return new Ye(t, e);
  }, // Returns a copy of the tree, with the specified key removed.
  t.prototype.remove = function (t, e) {
    return this;
  }, t.prototype.isEmpty = function () {
    return !0;
  }, t.prototype.inorderTraversal = function (t) {
    return !1;
  }, t.prototype.reverseTraversal = function (t) {
    return !1;
  }, t.prototype.minKey = function () {
    return null;
  }, t.prototype.maxKey = function () {
    return null;
  }, t.prototype.isRed = function () {
    return !1;
  }, // For testing.
  t.prototype.checkMaxDepth = function () {
    return !0;
  }, t.prototype.check = function () {
    return 0;
  }, t;
}())();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */

var Je =
/** @class */
function () {
  function t(t) {
    this.comparator = t, this.data = new We(this.comparator);
  }

  return t.prototype.has = function (t) {
    return null !== this.data.get(t);
  }, t.prototype.first = function () {
    return this.data.minKey();
  }, t.prototype.last = function () {
    return this.data.maxKey();
  }, Object.defineProperty(t.prototype, "size", {
    get: function get() {
      return this.data.size;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.indexOf = function (t) {
    return this.data.indexOf(t);
  },
  /** Iterates elements in order defined by "comparator" */
  t.prototype.forEach = function (t) {
    this.data.inorderTraversal(function (e, n) {
      return t(e), !1;
    });
  },
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  t.prototype.forEachInRange = function (t, e) {
    for (var n = this.data.getIteratorFrom(t[0]); n.hasNext();) {
      var r = n.getNext();
      if (this.comparator(r.key, t[1]) >= 0) return;
      e(r.key);
    }
  },
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  t.prototype.forEachWhile = function (t, e) {
    var n;

    for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext();) {
      if (!t(n.getNext().key)) return;
    }
  },
  /** Finds the least element greater than or equal to `elem`. */
  t.prototype.firstAfterOrEqual = function (t) {
    var e = this.data.getIteratorFrom(t);
    return e.hasNext() ? e.getNext().key : null;
  }, t.prototype.getIterator = function () {
    return new Xe(this.data.getIterator());
  }, t.prototype.getIteratorFrom = function (t) {
    return new Xe(this.data.getIteratorFrom(t));
  },
  /** Inserts or updates an element */
  t.prototype.add = function (t) {
    return this.copy(this.data.remove(t).insert(t, !0));
  },
  /** Deletes an element */
  t.prototype.delete = function (t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }, t.prototype.isEmpty = function () {
    return this.data.isEmpty();
  }, t.prototype.unionWith = function (t) {
    var e = this; // Make sure `result` always refers to the larger one of the two sets.

    return e.size < t.size && (e = t, t = this), t.forEach(function (t) {
      e = e.add(t);
    }), e;
  }, t.prototype.isEqual = function (e) {
    if (!(e instanceof t)) return !1;
    if (this.size !== e.size) return !1;

    for (var n = this.data.getIterator(), r = e.data.getIterator(); n.hasNext();) {
      var i = n.getNext().key,
          o = r.getNext().key;
      if (0 !== this.comparator(i, o)) return !1;
    }

    return !0;
  }, t.prototype.toArray = function () {
    var t = [];
    return this.forEach(function (e) {
      t.push(e);
    }), t;
  }, t.prototype.toString = function () {
    var t = [];
    return this.forEach(function (e) {
      return t.push(e);
    }), "SortedSet(" + t.toString() + ")";
  }, t.prototype.copy = function (e) {
    var n = new t(this.comparator);
    return n.data = e, n;
  }, t;
}(),
    Xe =
/** @class */
function () {
  function t(t) {
    this.iter = t;
  }

  return t.prototype.getNext = function () {
    return this.iter.getNext().key;
  }, t.prototype.hasNext = function () {
    return this.iter.hasNext();
  }, t;
}(),
    $e = new We(H.comparator);

function Ze() {
  return $e;
}

function tn() {
  return Ze();
}

var en = new We(H.comparator);

function nn() {
  return en;
}

var rn = new We(H.comparator);

function on() {
  return rn;
}

var sn = new Je(H.comparator);

function un() {
  for (var t = [], e = 0; e < arguments.length; e++) {
    t[e] = arguments[e];
  }

  for (var n = sn, r = 0, i = t; r < i.length; r++) {
    var o = i[r];
    n = n.add(o);
  }

  return n;
}

var an = new Je(R);

function cn() {
  return an;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */


var hn =
/** @class */
function () {
  function t(
  /**
   * The snapshot version this event brings us up to, or MIN if not set.
   */
  t,
  /**
   * A map from target to changes to the target. See TargetChange.
   */
  e,
  /**
   * A set of targets that is known to be inconsistent. Listens for these
   * targets should be re-established without resume tokens.
   */
  n,
  /**
   * A set of which documents have changed or been deleted, along with the
   * doc's new values (if not deleted).
   */
  r,
  /**
   * A set of which document updates are due only to limbo resolution targets.
   */
  i) {
    this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i;
  }
  /**
   * HACK: Views require RemoteEvents in order to determine whether the view is
   * CURRENT, but secondary tabs don't receive remote events. So this method is
   * used to create a synthesized RemoteEvent that can be used to apply a
   * CURRENT status change to a View, for queries executed in a different tab.
   */
  // PORTING NOTE: Multi-tab only


  return t.createSynthesizedRemoteEventForCurrentChange = function (e, n) {
    var r = new Map();
    return r.set(e, fn.createSynthesizedTargetChangeForCurrentChange(e, n)), new t(ie.min(), r, cn(), Ze(), un());
  }, t;
}(),
    fn =
/** @class */
function () {
  function t(
  /**
   * An opaque, server-assigned token that allows watching a query to be resumed
   * after disconnecting without retransmitting all the data that matches the
   * query. The resume token essentially identifies a point in time from which
   * the server should resume sending results.
   */
  t,
  /**
   * The "current" (synced) status of this target. Note that "current"
   * has special meaning in the RPC protocol that implies that a target is
   * both up-to-date and consistent with the rest of the watch stream.
   */
  e,
  /**
   * The set of documents that were newly assigned to this target as part of
   * this remote event.
   */
  n,
  /**
   * The set of documents that were already assigned to this target but received
   * an update during this remote event.
   */
  r,
  /**
   * The set of documents that were removed from this target as part of this
   * remote event.
   */
  i) {
    this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i
    /**
    * This method is used to create a synthesized TargetChanges that can be used to
    * apply a CURRENT status change to a View (for queries executed in a different
    * tab) or for new queries (to raise snapshots with correct CURRENT status).
    */
    ;
  }

  return t.createSynthesizedTargetChangeForCurrentChange = function (e, n) {
    return new t(Y.EMPTY_BYTE_STRING, n, un(), un(), un());
  }, t;
}(),
    ln = function ln(
/** The new document applies to all of these targets. */
t,
/** The new document is removed from all of these targets. */
e,
/** The key of the document for this change. */
n,
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
  this.C = t, this.removedTargetIds = e, this.key = n, this.N = r;
},
    dn = function dn(t, e) {
  this.targetId = t, this.$ = e;
},
    pn = function pn(
/** What kind of change occurred to the watch target. */
t,
/** The target IDs that were added/removed/set. */
e,
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */
, r) {
  void 0 === n && (n = Y.EMPTY_BYTE_STRING), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r;
},
    yn =
/** @class */
function () {
  function t() {
    /**
     * The number of pending responses (adds or removes) that we are waiting on.
     * We only consider targets active that have no pending responses.
     */
    this.F = 0,
    /**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */
    this.O = gn(),
    /** See public getters for explanations of these fields. */
    this.k = Y.EMPTY_BYTE_STRING, this.M = !1,
    /**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */
    this.L = !0;
  }

  return Object.defineProperty(t.prototype, "current", {
    /**
     * Whether this target has been marked 'current'.
     *
     * 'Current' has special meaning in the RPC protocol: It implies that the
     * Watch backend has sent us all changes up to the point at which the target
     * was added and that the target is consistent with the rest of the watch
     * stream.
     */
    get: function get() {
      return this.M;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "resumeToken", {
    /** The last resume token sent to us for this target. */
    get: function get() {
      return this.k;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "B", {
    /** Whether this target has pending target adds or target removes. */
    get: function get() {
      return 0 !== this.F;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "q", {
    /** Whether we have modified any state that should trigger a snapshot. */
    get: function get() {
      return this.L;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * Applies the resume token to the TargetChange, but only when it has a new
   * value. Empty resumeTokens are discarded.
   */
  t.prototype.U = function (t) {
    t.approximateByteSize() > 0 && (this.L = !0, this.k = t);
  },
  /**
   * Creates a target change from the current set of changes.
   *
   * To reset the document changes after raising this snapshot, call
   * `clearPendingChanges()`.
   */
  t.prototype.K = function () {
    var t = un(),
        e = un(),
        n = un();
    return this.O.forEach(function (r, i) {
      switch (i) {
        case 0
        /* Added */
        :
          t = t.add(r);
          break;

        case 2
        /* Modified */
        :
          e = e.add(r);
          break;

        case 1
        /* Removed */
        :
          n = n.add(r);
          break;

        default:
          A();
      }
    }), new fn(this.k, this.M, t, e, n);
  },
  /**
   * Resets the document changes and sets `hasPendingChanges` to false.
   */
  t.prototype.W = function () {
    this.L = !1, this.O = gn();
  }, t.prototype.j = function (t, e) {
    this.L = !0, this.O = this.O.insert(t, e);
  }, t.prototype.G = function (t) {
    this.L = !0, this.O = this.O.remove(t);
  }, t.prototype.H = function () {
    this.F += 1;
  }, t.prototype.J = function () {
    this.F -= 1;
  }, t.prototype.Y = function () {
    this.L = !0, this.M = !0;
  }, t;
}(),
    vn =
/** @class */
function () {
  function t(t) {
    this.X = t,
    /** The internal state of all tracked targets. */
    this.Z = new Map(),
    /** Keeps track of the documents to update since the last raised snapshot. */
    this.tt = Ze(),
    /** A mapping of document keys to their set of target IDs. */
    this.et = mn(),
    /**
         * A list of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */
    this.nt = new Je(R)
    /**
    * Processes and adds the DocumentWatchChange to the current set of changes.
    */
    ;
  }

  return t.prototype.st = function (t) {
    for (var e = 0, n = t.C; e < n.length; e++) {
      var r = n[e];
      t.N instanceof gt ? this.it(r, t.N) : t.N instanceof wt && this.rt(r, t.key, t.N);
    }

    for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
      r = o[i];
      this.rt(r, t.key, t.N);
    }
  },
  /** Processes and adds the WatchTargetChange to the current set of changes. */
  t.prototype.ot = function (t) {
    var e = this;
    this.forEachTarget(t, function (n) {
      var r = e.ct(n);

      switch (t.state) {
        case 0
        /* NoChange */
        :
          e.at(n) && r.U(t.resumeToken);
          break;

        case 1
        /* Added */
        :
          // We need to decrement the number of pending acks needed from watch
          // for this targetId.
          r.J(), r.B || // We have a freshly added target, so we need to reset any state
          // that we had previously. This can happen e.g. when remove and add
          // back a target for existence filter mismatches.
          r.W(), r.U(t.resumeToken);
          break;

        case 2
        /* Removed */
        :
          // We need to keep track of removed targets to we can post-filter and
          // remove any target changes.
          // We need to decrement the number of pending acks needed from watch
          // for this targetId.
          r.J(), r.B || e.removeTarget(n);
          break;

        case 3
        /* Current */
        :
          e.at(n) && (r.Y(), r.U(t.resumeToken));
          break;

        case 4
        /* Reset */
        :
          e.at(n) && ( // Reset the target and synthesizes removes for all existing
          // documents. The backend will re-add any documents that still
          // match the target before it sends the next global snapshot.
          e.ut(n), r.U(t.resumeToken));
          break;

        default:
          A();
      }
    });
  },
  /**
   * Iterates over all targetIds that the watch change applies to: either the
   * targetIds explicitly listed in the change or the targetIds of all currently
   * active targets.
   */
  t.prototype.forEachTarget = function (t, e) {
    var n = this;
    t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Z.forEach(function (t, r) {
      n.at(r) && e(r);
    });
  },
  /**
   * Handles existence filters and synthesizes deletes for filter mismatches.
   * Targets that are invalidated by filter mismatches are added to
   * `pendingTargetResets`.
   */
  t.prototype.ht = function (t) {
    var e = t.targetId,
        n = t.$.count,
        r = this.lt(e);

    if (r) {
      var i = r.target;
      if (St(i)) {
        if (0 === n) {
          // The existence filter told us the document does not exist. We deduce
          // that this document does not exist and apply a deleted document to
          // our updates. Without applying this deleted document there might be
          // another query that will raise this document as part of a snapshot
          // until it is resolved, essentially exposing inconsistency between
          // queries.
          var o = new H(i.path);
          this.rt(e, o, new wt(o, ie.min()));
        } else k(1 === n);
      } else this.ft(e) !== n && ( // Existence filter mismatch: We reset the mapping and raise a new
      // snapshot with `isFromCache:true`.
      this.ut(e), this.nt = this.nt.add(e));
    }
  },
  /**
   * Converts the currently accumulated state into a remote event at the
   * provided snapshot version. Resets the accumulated changes before returning.
   */
  t.prototype.dt = function (t) {
    var e = this,
        n = new Map();
    this.Z.forEach(function (r, i) {
      var o = e.lt(i);

      if (o) {
        if (r.current && St(o.target)) {
          // Document queries for document that don't exist can produce an empty
          // result set. To update our local cache, we synthesize a document
          // delete if we have not previously received the document. This
          // resolves the limbo state of the document, removing it from
          // limboDocumentRefs.
          // TODO(dimond): Ideally we would have an explicit lookup target
          // instead resulting in an explicit delete message and we could
          // remove this special logic.
          var s = new H(o.target.path);
          null !== e.tt.get(s) || e.wt(i, s) || e.rt(i, s, new wt(s, t));
        }

        r.q && (n.set(i, r.K()), r.W());
      }
    });
    var r = un(); // We extract the set of limbo-only document updates as the GC logic
    // special-cases documents that do not appear in the target cache.
    // TODO(gsoltis): Expand on this comment once GC is available in the JS
    // client.

    this.et.forEach(function (t, n) {
      var i = !0;
      n.forEachWhile(function (t) {
        var n = e.lt(t);
        return !n || 2
        /* LimboResolution */
        === n.purpose || (i = !1, !1);
      }), i && (r = r.add(t));
    });
    var i = new hn(t, n, this.nt, this.tt, r);
    return this.tt = Ze(), this.et = mn(), this.nt = new Je(R), i;
  },
  /**
   * Adds the provided document to the internal list of document updates and
   * its document key to the given target's mapping.
   */
  // Visible for testing.
  t.prototype.it = function (t, e) {
    if (this.at(t)) {
      var n = this.wt(t, e.key) ? 2
      /* Modified */
      : 0
      /* Added */
      ;
      this.ct(t).j(e.key, n), this.tt = this.tt.insert(e.key, e), this.et = this.et.insert(e.key, this._t(e.key).add(t));
    }
  },
  /**
   * Removes the provided document from the target mapping. If the
   * document no longer matches the target, but the document's state is still
   * known (e.g. we know that the document was deleted or we received the change
   * that caused the filter mismatch), the new document can be provided
   * to update the remote document cache.
   */
  // Visible for testing.
  t.prototype.rt = function (t, e, n) {
    if (this.at(t)) {
      var r = this.ct(t);
      this.wt(t, e) ? r.j(e, 1
      /* Removed */
      ) : // The document may have entered and left the target before we raised a
      // snapshot, so we can just ignore the change.
      r.G(e), this.et = this.et.insert(e, this._t(e).delete(t)), n && (this.tt = this.tt.insert(e, n));
    }
  }, t.prototype.removeTarget = function (t) {
    this.Z.delete(t);
  },
  /**
   * Returns the current count of documents in the target. This includes both
   * the number of documents that the LocalStore considers to be part of the
   * target as well as any accumulated changes.
   */
  t.prototype.ft = function (t) {
    var e = this.ct(t).K();
    return this.X.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size;
  },
  /**
   * Increment the number of acks needed from watch before we can consider the
   * server to be 'in-sync' with the client's active targets.
   */
  t.prototype.H = function (t) {
    this.ct(t).H();
  }, t.prototype.ct = function (t) {
    var e = this.Z.get(t);
    return e || (e = new yn(), this.Z.set(t, e)), e;
  }, t.prototype._t = function (t) {
    var e = this.et.get(t);
    return e || (e = new Je(R), this.et = this.et.insert(t, e)), e;
  },
  /**
   * Verifies that the user is still interested in this target (by calling
   * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
   * from watch.
   */
  t.prototype.at = function (t) {
    var e = null !== this.lt(t);
    return e || _("WatchChangeAggregator", "Detected inactive target", t), e;
  },
  /**
   * Returns the TargetData for an active target (i.e. a target that the user
   * is still interested in that has no outstanding target change requests).
   */
  t.prototype.lt = function (t) {
    var e = this.Z.get(t);
    return e && e.B ? null : this.X.yt(t);
  },
  /**
   * Resets the state of a Watch target to its initial state (e.g. sets
   * 'current' to false, clears the resume token and removes its target mapping
   * from all documents).
   */
  t.prototype.ut = function (t) {
    var e = this;
    this.Z.set(t, new yn()), this.X.getRemoteKeysForTarget(t).forEach(function (n) {
      e.rt(t, n,
      /*updatedDocument=*/
      null);
    });
  },
  /**
   * Returns whether the LocalStore considers the document to be part of the
   * specified target.
   */
  t.prototype.wt = function (t, e) {
    return this.X.getRemoteKeysForTarget(t).has(e);
  }, t;
}();
/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */


function mn() {
  return new We(H.comparator);
}

function gn() {
  return new We(H.comparator);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var wn = {
  asc: "ASCENDING",
  desc: "DESCENDING"
},
    bn = {
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
},
    In = function In(t, e) {
  this.databaseId = t, this.V = e;
};
/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */


function En(t, e) {
  return t.V ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */


function Tn(t, e) {
  return t.V ? e.toBase64() : e.toUint8Array();
}
/**
 * Returns a ByteString based on the proto string value.
 */


function _n(t, e) {
  return En(t, e.toTimestamp());
}

function Sn(t) {
  return k(!!t), ie.fromTimestamp(function (t) {
    var e = X(t);
    return new tt(e.seconds, e.nanos);
  }(t));
}

function Dn(t, e) {
  return function (t) {
    return new z(["projects", t.projectId, "databases", t.database]);
  }(t).child("documents").child(e).canonicalString();
}

function Nn(t) {
  var e = z.fromString(t);
  return k(Xn(e)), e;
}

function An(t, e) {
  return Dn(t.databaseId, e.path);
}

function kn(t, e) {
  var n = Nn(e);
  if (n.get(1) !== t.databaseId.projectId) throw new G(j.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.databaseId.projectId);
  if (n.get(3) !== t.databaseId.database) throw new G(j.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.databaseId.database);
  return new H(Rn(n));
}

function Cn(t, e) {
  return Dn(t.databaseId, e);
}

function xn(t) {
  var e = Nn(t); // In v1beta1 queries for collections at the root did not have a trailing
  // "/documents". In v1 all resource paths contain "/documents". Preserve the
  // ability to read the v1beta1 form for compatibility with queries persisted
  // in the local target cache.

  return 4 === e.length ? z.emptyPath() : Rn(e);
}

function Ln(t) {
  return new z(["projects", t.databaseId.projectId, "databases", t.databaseId.database]).canonicalString();
}

function Rn(t) {
  return k(t.length > 4 && "documents" === t.get(4)), t.popFirst(5)
  /** Creates a Document proto from key and fields (but no create/update time) */
  ;
}

function On(t, e, n) {
  return {
    name: An(t, e),
    fields: n.proto.mapValue.fields
  };
}

function Pn(t, e, n) {
  var r = kn(t, e.name),
      i = Sn(e.updateTime),
      o = new se({
    mapValue: {
      fields: e.fields
    }
  });
  return new gt(r, i, o, {
    hasCommittedMutations: !!n
  });
}

function Mn(t, e) {
  var n;
  if (e instanceof Oe) n = {
    update: On(t, e.key, e.value)
  };else if (e instanceof je) n = {
    delete: An(t, e.key)
  };else if (e instanceof Pe) n = {
    update: On(t, e.key, e.data),
    updateMask: Jn(e.fieldMask)
  };else {
    if (!(e instanceof Ge)) return A();
    n = {
      verify: An(t, e.key)
    };
  }
  return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map(function (t) {
    return function (t, e) {
      var n = e.transform;
      if (n instanceof ve) return {
        fieldPath: e.field.canonicalString(),
        setToServerValue: "REQUEST_TIME"
      };
      if (n instanceof me) return {
        fieldPath: e.field.canonicalString(),
        appendMissingElements: {
          values: n.elements
        }
      };
      if (n instanceof we) return {
        fieldPath: e.field.canonicalString(),
        removeAllFromArray: {
          values: n.elements
        }
      };
      if (n instanceof Ie) return {
        fieldPath: e.field.canonicalString(),
        increment: n.S
      };
      throw A();
    }(0, t);
  })), e.precondition.isNone || (n.currentDocument = function (t, e) {
    return void 0 !== e.updateTime ? {
      updateTime: _n(t, e.updateTime)
    } : void 0 !== e.exists ? {
      exists: e.exists
    } : A();
  }(t, e.precondition)), n;
}

function Fn(t, e) {
  var n = e.currentDocument ? function (t) {
    return void 0 !== t.updateTime ? De.updateTime(Sn(t.updateTime)) : void 0 !== t.exists ? De.exists(t.exists) : De.none();
  }(e.currentDocument) : De.none(),
      r = e.updateTransforms ? e.updateTransforms.map(function (e) {
    return function (t, e) {
      var n = null;
      if ("setToServerValue" in e) k("REQUEST_TIME" === e.setToServerValue), n = new ve();else if ("appendMissingElements" in e) {
        var r = e.appendMissingElements.values || [];
        n = new me(r);
      } else if ("removeAllFromArray" in e) {
        var i = e.removeAllFromArray.values || [];
        n = new we(i);
      } else "increment" in e ? n = new Ie(t, e.increment) : A();
      var o = W.fromServerFormat(e.fieldPath);
      return new _e(o, n);
    }(t, e);
  }) : [];

  if (e.update) {
    e.update.name;
    var i = kn(t, e.update.name),
        o = new se({
      mapValue: {
        fields: e.update.fields
      }
    });

    if (e.updateMask) {
      var s = function (t) {
        var e = t.fieldPaths || [];
        return new oe(e.map(function (t) {
          return W.fromServerFormat(t);
        }));
      }(e.updateMask);

      return new Pe(i, o, s, n, r);
    }

    return new Oe(i, o, n, r);
  }

  if (e.delete) {
    var u = kn(t, e.delete);
    return new je(u, n);
  }

  if (e.verify) {
    var a = kn(t, e.verify);
    return new Ge(a, n);
  }

  return A();
}

function qn(t, e) {
  return {
    documents: [Cn(t, e.path)]
  };
}

function Vn(t, e) {
  // Dissect the path into parent, collectionId, and optional key filter.
  var n = {
    structuredQuery: {}
  },
      r = e.path;
  null !== e.collectionGroup ? (n.parent = Cn(t, r), n.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: !0
  }]) : (n.parent = Cn(t, r.popLast()), n.structuredQuery.from = [{
    collectionId: r.lastSegment()
  }]);

  var i = function (t) {
    if (0 !== t.length) {
      var e = t.map(function (t) {
        // visible for testing
        return function (t) {
          if ("=="
          /* EQUAL */
          === t.op) {
            if (yt(t.value)) return {
              unaryFilter: {
                field: Qn(t.field),
                op: "IS_NAN"
              }
            };
            if (pt(t.value)) return {
              unaryFilter: {
                field: Qn(t.field),
                op: "IS_NULL"
              }
            };
          } else if ("!="
          /* NOT_EQUAL */
          === t.op) {
            if (yt(t.value)) return {
              unaryFilter: {
                field: Qn(t.field),
                op: "IS_NOT_NAN"
              }
            };
            if (pt(t.value)) return {
              unaryFilter: {
                field: Qn(t.field),
                op: "IS_NOT_NULL"
              }
            };
          }

          return {
            fieldFilter: {
              field: Qn(t.field),
              op: zn(t.op),
              value: t.value
            }
          };
        }(t);
      });
      return 1 === e.length ? e[0] : {
        compositeFilter: {
          op: "AND",
          filters: e
        }
      };
    }
  }(e.filters);

  i && (n.structuredQuery.where = i);

  var o = function (t) {
    if (0 !== t.length) return t.map(function (t) {
      // visible for testing
      return function (t) {
        return {
          field: Qn(t.field),
          direction: Kn(t.dir)
        };
      }(t);
    });
  }(e.orderBy);

  o && (n.structuredQuery.orderBy = o);

  var s = function (t, e) {
    return t.V || V(e) ? e : {
      value: e
    };
  }(t, e.limit);

  return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = jn(e.startAt)), e.endAt && (n.structuredQuery.endAt = jn(e.endAt)), n;
}

function Un(t) {
  var e = xn(t.parent),
      n = t.structuredQuery,
      r = n.from ? n.from.length : 0,
      i = null;

  if (r > 0) {
    k(1 === r);
    var o = n.from[0];
    o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
  }

  var s = [];
  n.where && (s = Bn(n.where));
  var u = [];
  n.orderBy && (u = n.orderBy.map(function (t) {
    return function (t) {
      return new Ft(Wn(t.field), // visible for testing
      function (t) {
        switch (t) {
          case "ASCENDING":
            return "asc"
            /* ASCENDING */
            ;

          case "DESCENDING":
            return "desc"
            /* DESCENDING */
            ;

          default:
            return;
        }
      }(t.direction));
    }(t);
  }));
  var a = null;
  n.limit && (a = function (t) {
    var e;
    return V(e = "object" == _typeof(t) ? t.value : t) ? null : e;
  }(n.limit));
  var c = null;
  n.startAt && (c = Gn(n.startAt));
  var h = null;
  return n.endAt && (h = Gn(n.endAt)), jt(e, i, u, s, a, "F"
  /* First */
  , c, h);
}

function Bn(t) {
  return t ? void 0 !== t.unaryFilter ? [Yn(t)] : void 0 !== t.fieldFilter ? [Hn(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function (t) {
    return Bn(t);
  }).reduce(function (t, e) {
    return t.concat(e);
  }) : A() : [];
}

function jn(t) {
  return {
    before: t.before,
    values: t.position
  };
}

function Gn(t) {
  var e = !!t.before,
      n = t.values || [];
  return new Pt(n, e);
} // visible for testing


function Kn(t) {
  return wn[t];
}

function zn(t) {
  return bn[t];
}

function Qn(t) {
  return {
    fieldPath: t.canonicalString()
  };
}

function Wn(t) {
  return W.fromServerFormat(t.fieldPath);
}

function Hn(t) {
  return Dt.create(Wn(t.fieldFilter.field), function (t) {
    switch (t) {
      case "EQUAL":
        return "=="
        /* EQUAL */
        ;

      case "NOT_EQUAL":
        return "!="
        /* NOT_EQUAL */
        ;

      case "GREATER_THAN":
        return ">"
        /* GREATER_THAN */
        ;

      case "GREATER_THAN_OR_EQUAL":
        return ">="
        /* GREATER_THAN_OR_EQUAL */
        ;

      case "LESS_THAN":
        return "<"
        /* LESS_THAN */
        ;

      case "LESS_THAN_OR_EQUAL":
        return "<="
        /* LESS_THAN_OR_EQUAL */
        ;

      case "ARRAY_CONTAINS":
        return "array-contains"
        /* ARRAY_CONTAINS */
        ;

      case "IN":
        return "in"
        /* IN */
        ;

      case "NOT_IN":
        return "not-in"
        /* NOT_IN */
        ;

      case "ARRAY_CONTAINS_ANY":
        return "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        ;

      case "OPERATOR_UNSPECIFIED":
      default:
        return A();
    }
  }(t.fieldFilter.op), t.fieldFilter.value);
}

function Yn(t) {
  switch (t.unaryFilter.op) {
    case "IS_NAN":
      var e = Wn(t.unaryFilter.field);
      return Dt.create(e, "=="
      /* EQUAL */
      , {
        doubleValue: NaN
      });

    case "IS_NULL":
      var n = Wn(t.unaryFilter.field);
      return Dt.create(n, "=="
      /* EQUAL */
      , {
        nullValue: "NULL_VALUE"
      });

    case "IS_NOT_NAN":
      var r = Wn(t.unaryFilter.field);
      return Dt.create(r, "!="
      /* NOT_EQUAL */
      , {
        doubleValue: NaN
      });

    case "IS_NOT_NULL":
      var i = Wn(t.unaryFilter.field);
      return Dt.create(i, "!="
      /* NOT_EQUAL */
      , {
        nullValue: "NULL_VALUE"
      });

    case "OPERATOR_UNSPECIFIED":
    default:
      return A();
  }
}

function Jn(t) {
  var e = [];
  return t.fields.forEach(function (t) {
    return e.push(t.canonicalString());
  }), {
    fieldPaths: e
  };
}

function Xn(t) {
  // Resource names have at least 4 components (project ID, database ID)
  return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */


function $n(t) {
  for (var e = "", n = 0; n < t.length; n++) {
    e.length > 0 && (e = tr(e)), e = Zn(t.get(n), e);
  }

  return tr(e);
}
/** Encodes a single segment of a resource path into the given result */


function Zn(t, e) {
  for (var n = e, r = t.length, i = 0; i < r; i++) {
    var o = t.charAt(i);

    switch (o) {
      case "\0":
        n += "";
        break;

      case "":
        n += "";
        break;

      default:
        n += o;
    }
  }

  return n;
}
/** Encodes a path separator into the given result */


function tr(t) {
  return t + "";
}
/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */


function er(t) {
  // Event the empty path must encode as a path of at least length 2. A path
  // with exactly 2 must be the empty path.
  var e = t.length;
  if (k(e >= 2), 2 === e) return k("" === t.charAt(0) && "" === t.charAt(1)), z.emptyPath(); // Escape characters cannot exist past the second-to-last position in the
  // source value.

  for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
    // The last two characters of a valid encoded path must be a separator, so
    // there must be an end to this segment.
    var s = t.indexOf("", o);

    switch ((s < 0 || s > n) && A(), t.charAt(s + 1)) {
      case "":
        var u = t.substring(o, s),
            a = void 0;
        0 === i.length ? // Avoid copying for the common case of a segment that excludes \0
        // and \001
        a = u : (a = i += u, i = ""), r.push(a);
        break;

      case "":
        i += t.substring(o, s), i += "\0";
        break;

      case "":
        // The escape character can be used in the output to encode itself.
        i += t.substring(o, s + 1);
        break;

      default:
        A();
    }

    o = s + 2;
  }

  return new z(r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 */

/**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */


var nr = function nr(t, e) {
  this.seconds = t, this.nanoseconds = e;
},
    rr = function rr(t,
/** Whether to allow shared access from multiple tabs. */
e, n) {
  this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
};
/**
 * A singleton object to be stored in the 'owner' store in IndexedDb.
 *
 * A given database can have a single primary tab assigned at a given time. That
 * tab must validate that it is still holding the primary lease before every
 * operation that requires locked access. The primary tab should regularly
 * write an updated timestamp to this lease to prevent other tabs from
 * "stealing" the primary lease
 */

/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */


rr.store = "owner",
/**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
rr.key = "owner";
/**
 * An object to be stored in the 'mutationQueues' store in IndexedDb.
 *
 * Each user gets a single queue of MutationBatches to apply to the server.
 * DbMutationQueue tracks the metadata about the queue.
 */

var ir = function ir(
/**
     * The normalized user ID to which this queue belongs.
     */
t,
/**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
e,
/**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
n) {
  this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
};
/** Name of the IndexedDb object store.  */


ir.store = "mutationQueues",
/** Keys are automatically assigned via the userId property. */
ir.keyPath = "userId";
/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */

var or = function or(
/**
     * The normalized user ID to which this batch belongs.
     */
t,
/**
     * An identifier for this batch, allocated using an auto-generated key.
     */
e,
/**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
n,
/**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
r,
/**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
i) {
  this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i;
};
/** Name of the IndexedDb object store.  */


or.store = "mutations",
/** Keys are automatically assigned via the userId, batchId properties. */
or.keyPath = "batchId",
/** The index name for lookup of mutations by user. */
or.userMutationsIndex = "userMutationsIndex",
/** The user mutations index is keyed by [userId, batchId] pairs. */
or.userMutationsKeyPath = ["userId", "batchId"];
/**
 * An object to be stored in the 'documentMutations' store in IndexedDb.
 *
 * A manually maintained index of all the mutation batches that affect a given
 * document key. The rows in this table are references based on the contents of
 * DbMutationBatch.mutations.
 */

var sr =
/** @class */
function () {
  function t() {}
  /**
   * Creates a [userId] key for use in the DbDocumentMutations index to iterate
   * over all of a user's document mutations.
   */


  return t.prefixForUser = function (t) {
    return [t];
  },
  /**
   * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
   * index to iterate over all at document mutations for a given path or lower.
   */
  t.prefixForPath = function (t, e) {
    return [t, $n(e)];
  },
  /**
   * Creates a full index key of [userId, encodedPath, batchId] for inserting
   * and deleting into the DbDocumentMutations index.
   */
  t.key = function (t, e, n) {
    return [t, $n(e), n];
  }, t;
}();

sr.store = "documentMutations",
/**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
sr.PLACEHOLDER = new sr();
/**
 * Represents the known absence of a document at a particular version.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */

var ur = function ur(t, e) {
  this.path = t, this.readTime = e;
},
    ar = function ar(t, e) {
  this.path = t, this.version = e;
},
    cr = // TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function cr(
/**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
t,
/**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
e,
/**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
n,
/**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
r,
/**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
i,
/**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
o) {
  this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o;
};
/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */


cr.store = "remoteDocuments",
/**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
cr.readTimeIndex = "readTimeIndex", cr.readTimeIndexPath = "readTime",
/**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
cr.collectionReadTimeIndex = "collectionReadTimeIndex", cr.collectionReadTimeIndexPath = ["parentPath", "readTime"];
/**
 * Contains a single entry that has metadata about the remote document cache.
 */

var hr =
/**
     * @param byteSize - Approximately the total size in bytes of all the
     * documents in the document cache.
     */
function hr(t) {
  this.byteSize = t;
};

hr.store = "remoteDocumentGlobal", hr.key = "remoteDocumentGlobalKey";
/**
 * An object to be stored in the 'targets' store in IndexedDb.
 *
 * This is based on and should be kept in sync with the proto used in the iOS
 * client.
 *
 * Each query the client listens to against the server is tracked on disk so
 * that the query can be efficiently resumed on restart.
 */

var fr = function fr(
/**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
t,
/**
     * The canonical string representing this query. This is not unique.
     */
e,
/**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
n,
/**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
r,
/**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
i,
/**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
o,
/**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
s) {
  this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};

fr.store = "targets",
/** Keys are automatically assigned via the targetId property. */
fr.keyPath = "targetId",
/** The name of the queryTargets index. */
fr.queryTargetsIndexName = "queryTargetsIndex",
/**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
fr.queryTargetsKeyPath = ["canonicalId", "targetId"];
/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */

var lr = function lr(
/**
     * The targetId identifying a target or 0 for a sentinel row.
     */
t,
/**
     * The path to the document, as encoded in the key.
     */
e,
/**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
n) {
  this.targetId = t, this.path = e, this.sequenceNumber = n;
};
/** Name of the IndexedDb object store.  */


lr.store = "targetDocuments",
/** Keys are automatically assigned via the targetId, path properties. */
lr.keyPath = ["targetId", "path"],
/** The index name for the reverse index. */
lr.documentTargetsIndex = "documentTargetsIndex",
/** We also need to create the reverse index for these properties. */
lr.documentTargetsKeyPath = ["path", "targetId"];
/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */

var dr = function dr(
/**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
t,
/**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
e,
/**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
n,
/**
     * The number of targets persisted.
     */
r) {
  this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r;
};
/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */


dr.key = "targetGlobalKey", dr.store = "targetGlobal";
/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */

var pr = function pr(
/**
     * The collectionId (e.g. 'messages')
     */
t,
/**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
e) {
  this.collectionId = t, this.parent = e;
};
/** Name of the IndexedDb object store. */


pr.store = "collectionParents",
/** Keys are automatically assigned via the collectionId, parent properties. */
pr.keyPath = ["collectionId", "parent"];
/**
 * A record of the metadata state of each client.
 *
 * PORTING NOTE: This is used to synchronize multi-tab state and does not need
 * to be ported to iOS or Android.
 */

var yr = function yr( // Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.

/** The auto-generated client id assigned at client startup. */
t,
/** The last time this state was updated. */
e,
/** Whether the client's network connection is enabled. */
n,
/** Whether this client is running in a foreground tab. */
r) {
  this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
};
/** Name of the IndexedDb object store. */


yr.store = "clientMetadata",
/** Keys are automatically assigned via the clientId properties. */
yr.keyPath = "clientId";
/**
 * A object representing a bundle loaded by the SDK.
 */

var vr = function vr(
/** The ID of the loaded bundle. */
t,
/** The create time of the loaded bundle. */
e,
/** The schema version of the loaded bundle. */
n) {
  this.bundleId = t, this.createTime = e, this.version = n;
};
/** Name of the IndexedDb object store. */


vr.store = "bundles", vr.keyPath = "bundleId";
/**
 * A object representing a named query loaded by the SDK via a bundle.
 */

var mr = function mr(
/** The name of the query. */
t,
/** The read time of the results saved in the bundle from the named query. */
e,
/** The query saved in the bundle. */
n) {
  this.name = t, this.readTime = e, this.bundledQuery = n;
};
/** Name of the IndexedDb object store. */


mr.store = "namedQueries", mr.keyPath = "name"; // Visible for testing

var gr = (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], [ir.store, or.store, sr.store, cr.store, fr.store, rr.store, dr.store, lr.store]), [yr.store])), [hr.store])), [pr.store])), [vr.store, mr.store]),
    wr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
    br =
/** @class */
function () {
  function t() {
    this.onCommittedListeners = [];
  }

  return t.prototype.addOnCommittedListener = function (t) {
    this.onCommittedListeners.push(t);
  }, t.prototype.raiseOnCommittedEvent = function () {
    this.onCommittedListeners.forEach(function (t) {
      return t();
    });
  }, t;
}(),
    Ir = function Ir() {
  var t = this;
  this.promise = new Promise(function (e, n) {
    t.resolve = e, t.reject = n;
  });
},
    Er =
/** @class */
function () {
  function t(t) {
    var e = this; // NOTE: next/catchCallback will always point to our own wrapper functions,
    // not the user's raw next() or catch() callbacks.

    this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.isDone = !1, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.callbackAttached = !1, t(function (t) {
      e.isDone = !0, e.result = t, e.nextCallback && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      e.nextCallback(t);
    }, function (t) {
      e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t);
    });
  }

  return t.prototype.catch = function (t) {
    return this.next(void 0, t);
  }, t.prototype.next = function (e, n) {
    var r = this;
    return this.callbackAttached && A(), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(e, this.result) : new t(function (t, i) {
      r.nextCallback = function (n) {
        r.wrapSuccess(e, n).next(t, i);
      }, r.catchCallback = function (e) {
        r.wrapFailure(n, e).next(t, i);
      };
    });
  }, t.prototype.toPromise = function () {
    var t = this;
    return new Promise(function (e, n) {
      t.next(e, n);
    });
  }, t.prototype.wrapUserFunction = function (e) {
    try {
      var n = e();
      return n instanceof t ? n : t.resolve(n);
    } catch (e) {
      return t.reject(e);
    }
  }, t.prototype.wrapSuccess = function (e, n) {
    return e ? this.wrapUserFunction(function () {
      return e(n);
    }) : t.resolve(n);
  }, t.prototype.wrapFailure = function (e, n) {
    return e ? this.wrapUserFunction(function () {
      return e(n);
    }) : t.reject(n);
  }, t.resolve = function (e) {
    return new t(function (t, n) {
      t(e);
    });
  }, t.reject = function (e) {
    return new t(function (t, n) {
      n(e);
    });
  }, t.waitFor = function ( // Accept all Promise types in waitFor().
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  e) {
    return new t(function (t, n) {
      var r = 0,
          i = 0,
          o = !1;
      e.forEach(function (e) {
        ++r, e.next(function () {
          ++i, o && i === r && t();
        }, function (t) {
          return n(t);
        });
      }), o = !0, i === r && t();
    });
  },
  /**
   * Given an array of predicate functions that asynchronously evaluate to a
   * boolean, implements a short-circuiting `or` between the results. Predicates
   * will be evaluated until one of them returns `true`, then stop. The final
   * result will be whether any of them returned `true`.
   */
  t.or = function (e) {
    for (var n = t.resolve(!1), r = function r(e) {
      n = n.next(function (n) {
        return n ? t.resolve(n) : e();
      });
    }, i = 0, o = e; i < o.length; i++) {
      r(o[i]);
    }

    return n;
  }, t.forEach = function (t, e) {
    var n = this,
        r = [];
    return t.forEach(function (t, i) {
      r.push(e.call(n, t, i));
    }), this.waitFor(r);
  }, t;
}(),
    Tr =
/** @class */
function () {
  function t(t, e) {
    var n = this;
    this.action = t, this.transaction = e, this.aborted = !1,
    /**
         * A promise that resolves with the result of the IndexedDb transaction.
         */
    this.gt = new Ir(), this.transaction.oncomplete = function () {
      n.gt.resolve();
    }, this.transaction.onabort = function () {
      e.error ? n.gt.reject(new Dr(t, e.error)) : n.gt.resolve();
    }, this.transaction.onerror = function (e) {
      var r = xr(e.target.error);
      n.gt.reject(new Dr(t, r));
    };
  }

  return t.open = function (e, n, r, i) {
    try {
      return new t(n, e.transaction(i, r));
    } catch (e) {
      throw new Dr(n, e);
    }
  }, Object.defineProperty(t.prototype, "Et", {
    get: function get() {
      return this.gt.promise;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.abort = function (t) {
    t && this.gt.reject(t), this.aborted || (_("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort());
  },
  /**
   * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
   * operations performed on the SimpleDbStore happen within the context of this
   * transaction and it cannot be used anymore once the transaction is
   * completed.
   *
   * Note that we can't actually enforce that the KeyType and ValueType are
   * correct, but they allow type safety through the rest of the consuming code.
   */
  t.prototype.store = function (t) {
    var e = this.transaction.objectStore(t);
    return new Ar(e);
  }, t;
}(),
    _r =
/** @class */
function () {
  /*
   * Creates a new SimpleDb wrapper for IndexedDb database `name`.
   *
   * Note that `version` must not be a downgrade. IndexedDB does not support
   * downgrading the schema version. We currently do not support any way to do
   * versioning outside of IndexedDB's versioning mechanism, as only
   * version-upgrade transactions are allowed to do things like create
   * objectstores.
   */
  function t(e, r, i) {
    this.name = e, this.version = r, this.Tt = i, // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
    // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
    // whatever reason it's much harder to hit after 12.2 so we only proactively
    // log on 12.2.
    12.2 === t.It((0, _util.getUA)()) && S("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  /** Deletes the specified database. */


  return t.delete = function (t) {
    return _("SimpleDb", "Removing database:", t), kr(window.indexedDB.deleteDatabase(t)).toPromise();
  },
  /** Returns true if IndexedDB is available in the current environment. */
  t.At = function () {
    if ("undefined" == typeof indexedDB) return !1;
    if (t.Rt()) return !0; // We extensively use indexed array values and compound keys,
    // which IE and Edge do not support. However, they still have indexedDB
    // defined on the window, so we need to check for them here and make sure
    // to return that persistence is not enabled for those browsers.
    // For tracking support of this feature, see here:
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
    // Check the UA string to find out the browser.

    var e = (0, _util.getUA)(),
        r = t.It(e),
        i = 0 < r && r < 10,
        o = t.bt(e),
        s = 0 < o && o < 4.5; // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
    // Edge
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
    // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
    // iOS Safari: Disable for users running iOS version < 10.

    return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || i || s);
  },
  /**
   * Returns true if the backing IndexedDB store is the Node IndexedDBShim
   * (see https://github.com/axemclion/IndexedDBShim).
   */
  t.Rt = function () {
    var t;
    return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.vt);
  },
  /** Helper to get a typed SimpleDbStore from a transaction. */
  t.Pt = function (t, e) {
    return t.store(e);
  }, // visible for testing

  /** Parse User Agent to determine iOS version. Returns -1 if not found. */
  t.It = function (t) {
    var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
        n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n);
  }, // visible for testing

  /** Parse User Agent to determine Android version. Returns -1 if not found. */
  t.bt = function (t) {
    var e = t.match(/Android ([\d.]+)/i),
        n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n);
  },
  /**
   * Opens the specified database, creating or upgrading it if necessary.
   */
  t.prototype.Vt = function (t) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var e,
          n = this;
      return (0, _tslib.__generator)(this, function (r) {
        switch (r.label) {
          case 0:
            return this.db ? [3
            /*break*/
            , 2] : (_("SimpleDb", "Opening database:", this.name), e = this, [4
            /*yield*/
            , new Promise(function (e, r) {
              // TODO(mikelehen): Investigate browser compatibility.
              // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
              // suggests IE9 and older WebKit browsers handle upgrade
              // differently. They expect setVersion, as described here:
              // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
              var i = indexedDB.open(n.name, n.version);
              i.onsuccess = function (t) {
                var n = t.target.result;
                e(n);
              }, i.onblocked = function () {
                r(new Dr(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
              }, i.onerror = function (e) {
                var n = e.target.error;
                "VersionError" === n.name ? r(new G(j.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(new Dr(t, n));
              }, i.onupgradeneeded = function (t) {
                _("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', t.oldVersion);

                var e = t.target.result;
                n.Tt.St(e, i.transaction, t.oldVersion, n.version).next(function () {
                  _("SimpleDb", "Database upgrade to version " + n.version + " complete");
                });
              };
            })]);

          case 1:
            e.db = r.sent(), r.label = 2;

          case 2:
            return [2
            /*return*/
            , (this.Dt && (this.db.onversionchange = function (t) {
              return n.Dt(t);
            }), this.db)];
        }
      });
    });
  }, t.prototype.Ct = function (t) {
    this.Dt = t, this.db && (this.db.onversionchange = function (e) {
      return t(e);
    });
  }, t.prototype.runTransaction = function (t, e, n, r) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var i, o, s, u, a;
      return (0, _tslib.__generator)(this, function (c) {
        switch (c.label) {
          case 0:
            i = "readonly" === e, o = 0, s = function s() {
              var e, s, a, c, h;
              return (0, _tslib.__generator)(this, function (f) {
                switch (f.label) {
                  case 0:
                    ++o, f.label = 1;

                  case 1:
                    return f.trys.push([1, 4,, 5]), [4
                    /*yield*/
                    , u.Vt(t)];

                  case 2:
                    // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                    // fire), but still return the original transactionFnResult back to the
                    // caller.
                    return u.db = f.sent(), e = Tr.open(u.db, t, i ? "readonly" : "readwrite", n), s = r(e).catch(function (t) {
                      // Abort the transaction if there was an error.
                      return e.abort(t), Er.reject(t);
                    }).toPromise(), a = {}, s.catch(function () {}), [4
                    /*yield*/
                    , e.Et];

                  case 3:
                    return [2
                    /*return*/
                    , (a.value = ( // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                    // fire), but still return the original transactionFnResult back to the
                    // caller.
                    f.sent(), s), a)];

                  case 4:
                    return c = f.sent(), h = "FirebaseError" !== c.name && o < 3, _("SimpleDb", "Transaction failed with error:", c.message, "Retrying:", h), u.close(), h ? [3
                    /*break*/
                    , 5] : [2
                    /*return*/
                    , {
                      value: Promise.reject(c)
                    }];

                  case 5:
                    return [2
                    /*return*/
                    ];
                }
              });
            }, u = this, c.label = 1;

          case 1:
            return [5
            /*yield**/
            , s()];

          case 2:
            if ("object" == _typeof(a = c.sent())) return [2
            /*return*/
            , a.value];
            c.label = 3;

          case 3:
            return [3
            /*break*/
            , 1];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.close = function () {
    this.db && this.db.close(), this.db = void 0;
  }, t;
}(),
    Sr =
/** @class */
function () {
  function t(t) {
    this.xt = t, this.Nt = !1, this.$t = null;
  }

  return Object.defineProperty(t.prototype, "isDone", {
    get: function get() {
      return this.Nt;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "Ft", {
    get: function get() {
      return this.$t;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "cursor", {
    set: function set(t) {
      this.xt = t;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * This function can be called to stop iteration at any point.
   */
  t.prototype.done = function () {
    this.Nt = !0;
  },
  /**
   * This function can be called to skip to that next key, which could be
   * an index or a primary key.
   */
  t.prototype.Ot = function (t) {
    this.$t = t;
  },
  /**
   * Delete the current cursor value from the object store.
   *
   * NOTE: You CANNOT do this with a keysOnly query.
   */
  t.prototype.delete = function () {
    return kr(this.xt.delete());
  }, t;
}(),
    Dr =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, j.UNAVAILABLE, "IndexedDB transaction '" + e + "' failed: " + n) || this).name = "IndexedDbTransactionError", r;
  }

  return (0, _tslib.__extends)(e, t), e;
}(G); // V2 is no longer usable (see comment at top of file)
// Visible for testing

/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */

/** Verifies whether `e` is an IndexedDbTransactionError. */


function Nr(t) {
  // Use name equality, as instanceof checks on errors don't work with errors
  // that wrap other errors.
  return "IndexedDbTransactionError" === t.name;
}
/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */


var Ar =
/** @class */
function () {
  function t(t) {
    this.store = t;
  }

  return t.prototype.put = function (t, e) {
    var n;
    return void 0 !== e ? (_("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (_("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), kr(n);
  },
  /**
   * Adds a new value into an Object Store and returns the new key. Similar to
   * IndexedDb's `add()`, this method will fail on primary key collisions.
   *
   * @param value - The object to write.
   * @returns The key of the value to add.
   */
  t.prototype.add = function (t) {
    return _("SimpleDb", "ADD", this.store.name, t, t), kr(this.store.add(t));
  },
  /**
   * Gets the object with the specified key from the specified store, or null
   * if no object exists with the specified key.
   *
   * @key The key of the object to get.
   * @returns The object with the specified key or null if no object exists.
   */
  t.prototype.get = function (t) {
    var e = this; // We're doing an unsafe cast to ValueType.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return kr(this.store.get(t)).next(function (n) {
      // Normalize nonexistence to null.
      return void 0 === n && (n = null), _("SimpleDb", "GET", e.store.name, t, n), n;
    });
  }, t.prototype.delete = function (t) {
    return _("SimpleDb", "DELETE", this.store.name, t), kr(this.store.delete(t));
  },
  /**
   * If we ever need more of the count variants, we can add overloads. For now,
   * all we need is to count everything in a store.
   *
   * Returns the number of rows in the store.
   */
  t.prototype.count = function () {
    return _("SimpleDb", "COUNT", this.store.name), kr(this.store.count());
  }, t.prototype.kt = function (t, e) {
    var n = this.cursor(this.options(t, e)),
        r = [];
    return this.Mt(n, function (t, e) {
      r.push(e);
    }).next(function () {
      return r;
    });
  }, t.prototype.Lt = function (t, e) {
    _("SimpleDb", "DELETE ALL", this.store.name);

    var n = this.options(t, e);
    n.Bt = !1;
    var r = this.cursor(n);
    return this.Mt(r, function (t, e, n) {
      return n.delete();
    });
  }, t.prototype.qt = function (t, e) {
    var n;
    e ? n = t : (n = {}, e = t);
    var r = this.cursor(n);
    return this.Mt(r, e);
  },
  /**
   * Iterates over a store, but waits for the given callback to complete for
   * each entry before iterating the next entry. This allows the callback to do
   * asynchronous work to determine if this iteration should continue.
   *
   * The provided callback should return `true` to continue iteration, and
   * `false` otherwise.
   */
  t.prototype.Ut = function (t) {
    var e = this.cursor({});
    return new Er(function (n, r) {
      e.onerror = function (t) {
        var e = xr(t.target.error);
        r(e);
      }, e.onsuccess = function (e) {
        var r = e.target.result;
        r ? t(r.primaryKey, r.value).next(function (t) {
          t ? r.continue() : n();
        }) : n();
      };
    });
  }, t.prototype.Mt = function (t, e) {
    var n = [];
    return new Er(function (r, i) {
      t.onerror = function (t) {
        i(t.target.error);
      }, t.onsuccess = function (t) {
        var i = t.target.result;

        if (i) {
          var o = new Sr(i),
              s = e(i.primaryKey, i.value, o);

          if (s instanceof Er) {
            var u = s.catch(function (t) {
              return o.done(), Er.reject(t);
            });
            n.push(u);
          }

          o.isDone ? r() : null === o.Ft ? i.continue() : i.continue(o.Ft);
        } else r();
      };
    }).next(function () {
      return Er.waitFor(n);
    });
  }, t.prototype.options = function (t, e) {
    var n;
    return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
      index: n,
      range: e
    };
  }, t.prototype.cursor = function (t) {
    var e = "next";

    if (t.reverse && (e = "prev"), t.index) {
      var n = this.store.index(t.index);
      return t.Bt ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
    }

    return this.store.openCursor(t.range, e);
  }, t;
}();
/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */


function kr(t) {
  return new Er(function (e, n) {
    t.onsuccess = function (t) {
      var n = t.target.result;
      e(n);
    }, t.onerror = function (t) {
      var e = xr(t.target.error);
      n(e);
    };
  });
} // Guard so we only report the error once.


var Cr = !1;

function xr(t) {
  var e = _r.It((0, _util.getUA)());

  if (e >= 12.2 && e < 13) {
    var r = "An internal error was encountered in the Indexed Database server";

    if (t.message.indexOf(r) >= 0) {
      // Wrap error in a more descriptive one.
      var i = new G("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + r + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
      return Cr || (Cr = !0, // Throw a global exception outside of this promise chain, for the user to
      // potentially catch.
      setTimeout(function () {
        throw i;
      }, 0)), i;
    }
  }

  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Lr =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this) || this).Qt = e, r.currentSequenceNumber = n, r;
  }

  return (0, _tslib.__extends)(e, t), e;
}(br);

function Rr(t, e) {
  var n = C(t);
  return _r.Pt(n.Qt, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A batch of mutations that will be sent as one unit to the backend.
 */


var Or =
/** @class */
function () {
  /**
   * @param batchId - The unique ID of this mutation batch.
   * @param localWriteTime - The original write time of this mutation.
   * @param baseMutations - Mutations that are used to populate the base
   * values when this mutation is applied locally. This can be used to locally
   * overwrite values that are persisted in the remote document cache. Base
   * mutations are never sent to the backend.
   * @param mutations - The user-provided mutations in this mutation batch.
   * User-provided mutations are applied both locally and remotely on the
   * backend.
   */
  function t(t, e, n, r) {
    this.batchId = t, this.localWriteTime = e, this.baseMutations = n, this.mutations = r
    /**
    * Applies all the mutations in this MutationBatch to the specified document
    * to create a new remote document
    *
    * @param docKey - The key of the document to apply mutations to.
    * @param maybeDoc - The document to apply mutations to.
    * @param batchResult - The result of applying the MutationBatch to the
    * backend.
    */
    ;
  }

  return t.prototype.applyToRemoteDocument = function (t, e, n) {
    for (var r = n.mutationResults, i = 0; i < this.mutations.length; i++) {
      var o = this.mutations[i];
      o.key.isEqual(t) && (e = ke(o, e, r[i]));
    }

    return e;
  },
  /**
   * Computes the local view of a document given all the mutations in this
   * batch.
   *
   * @param docKey - The key of the document to apply mutations to.
   * @param maybeDoc - The document to apply mutations to.
   */
  t.prototype.applyToLocalView = function (t, e) {
    // First, apply the base state. This allows us to apply non-idempotent
    // transform against a consistent set of values.
    for (var n = 0, r = this.baseMutations; n < r.length; n++) {
      (s = r[n]).key.isEqual(t) && (e = Ce(s, e, this.localWriteTime));
    } // Second, apply all user-provided mutations.


    for (var i = 0, o = this.mutations; i < o.length; i++) {
      var s;
      (s = o[i]).key.isEqual(t) && (e = Ce(s, e, this.localWriteTime));
    }

    return e;
  },
  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch.
   */
  t.prototype.applyToLocalDocumentSet = function (t) {
    var e = this,
        n = t; // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
    // directly (as done in `applyToLocalView()`), we can reduce the complexity
    // to O(n).

    return this.mutations.forEach(function (r) {
      var i = e.applyToLocalView(r.key, t.get(r.key));
      i && (n = n.insert(r.key, i));
    }), n;
  }, t.prototype.keys = function () {
    return this.mutations.reduce(function (t, e) {
      return t.add(e.key);
    }, un());
  }, t.prototype.isEqual = function (t) {
    return this.batchId === t.batchId && O(this.mutations, t.mutations, function (t, e) {
      return Le(t, e);
    }) && O(this.baseMutations, t.baseMutations, function (t, e) {
      return Le(t, e);
    });
  }, t;
}(),
    Pr =
/** @class */
function () {
  function t(t, e, n,
  /**
   * A pre-computed mapping from each mutated document to the resulting
   * version.
   */
  r) {
    this.batch = t, this.commitVersion = e, this.mutationResults = n, this.docVersions = r
    /**
    * Creates a new MutationBatchResult for the given batch and results. There
    * must be one result for each mutation in the batch. This static factory
    * caches a document=&gt;version mapping (docVersions).
    */
    ;
  }

  return t.from = function (e, n, r) {
    k(e.mutations.length === r.length);

    for (var i = on(), o = e.mutations, s = 0; s < o.length; s++) {
      i = i.insert(o[s].key, r[s].version);
    }

    return new t(e, n, r, i);
  }, t;
}(),
    Mr =
/** @class */
function () {
  function t(
  /** The target being listened to. */
  t,
  /**
   * The target ID to which the target corresponds; Assigned by the
   * LocalStore for user listens and by the SyncEngine for limbo watches.
   */
  e,
  /** The purpose of the target. */
  n,
  /**
   * The sequence number of the last transaction during which this target data
   * was modified.
   */
  r,
  /** The latest snapshot version seen for this target. */
  i
  /**
   * The maximum snapshot version at which the associated view
   * contained no limbo documents.
   */
  , o
  /**
   * An opaque, server-assigned token that allows watching a target to be
   * resumed after disconnecting without retransmitting all the data that
   * matches the target. The resume token essentially identifies a point in
   * time from which the server should resume sending results.
   */
  , s) {
    void 0 === i && (i = ie.min()), void 0 === o && (o = ie.min()), void 0 === s && (s = Y.EMPTY_BYTE_STRING), this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
  }
  /** Creates a new target data instance with an updated sequence number. */


  return t.prototype.withSequenceNumber = function (e) {
    return new t(this.target, this.targetId, this.purpose, e, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken);
  },
  /**
   * Creates a new target data instance with an updated resume token and
   * snapshot version.
   */
  t.prototype.withResumeToken = function (e, n) {
    return new t(this.target, this.targetId, this.purpose, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
  },
  /**
   * Creates a new target data instance with an updated last limbo free
   * snapshot version number.
   */
  t.prototype.withLastLimboFreeSnapshotVersion = function (e) {
    return new t(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, e, this.resumeToken);
  }, t;
}(),
    Fr = function Fr(t) {
  this.Kt = t;
};
/** The result of applying a mutation batch to the backend. */

/** Decodes a remote document from storage locally to a Document. */


function qr(t, e) {
  if (e.document) return Pn(t.Kt, e.document, !!e.hasCommittedMutations);

  if (e.noDocument) {
    var n = H.fromSegments(e.noDocument.path),
        r = Gr(e.noDocument.readTime);
    return new wt(n, r, {
      hasCommittedMutations: !!e.hasCommittedMutations
    });
  }

  if (e.unknownDocument) {
    var i = H.fromSegments(e.unknownDocument.path);
    r = Gr(e.unknownDocument.version);
    return new bt(i, r);
  }

  return A();
}
/** Encodes a document for storage locally. */


function Vr(t, e, n) {
  var r = Ur(n),
      i = e.key.path.popLast().toArray();

  if (e instanceof gt) {
    var o = function (t, e) {
      return {
        name: An(t, e.key),
        fields: e.toProto().mapValue.fields,
        updateTime: En(t, e.version.toTimestamp())
      };
    }(t.Kt, e),
        s = e.hasCommittedMutations;

    return new cr(
    /* unknownDocument= */
    null,
    /* noDocument= */
    null, o, s, r, i);
  }

  if (e instanceof wt) {
    var u = e.key.path.toArray(),
        a = jr(e.version);
    s = e.hasCommittedMutations;
    return new cr(
    /* unknownDocument= */
    null, new ur(u, a),
    /* document= */
    null, s, r, i);
  }

  if (e instanceof bt) {
    var c = e.key.path.toArray(),
        h = jr(e.version);
    return new cr(new ar(c, h),
    /* noDocument= */
    null,
    /* document= */
    null,
    /* hasCommittedMutations= */
    !0, r, i);
  }

  return A();
}

function Ur(t) {
  var e = t.toTimestamp();
  return [e.seconds, e.nanoseconds];
}

function Br(t) {
  var e = new tt(t[0], t[1]);
  return ie.fromTimestamp(e);
}

function jr(t) {
  var e = t.toTimestamp();
  return new nr(e.seconds, e.nanoseconds);
}

function Gr(t) {
  var e = new tt(t.seconds, t.nanoseconds);
  return ie.fromTimestamp(e);
}
/** Encodes a batch of mutations into a DbMutationBatch for local storage. */

/** Decodes a DbMutationBatch into a MutationBatch */


function Kr(t, e) {
  // Squash old transform mutations into existing patch or set mutations.
  // The replacement of representing `transforms` with `update_transforms`
  // on the SDK means that old `transform` mutations stored in IndexedDB need
  // to be updated to `update_transforms`.
  // TODO(b/174608374): Remove this code once we perform a schema migration.
  for (var n = (e.baseMutations || []).map(function (e) {
    return Fn(t.Kt, e);
  }), r = 0; r < e.mutations.length - 1; ++r) {
    var i = e.mutations[r];

    if (r + 1 < e.mutations.length && void 0 !== e.mutations[r + 1].transform) {
      var o = e.mutations[r + 1];
      i.updateTransforms = o.transform.fieldTransforms, e.mutations.splice(r + 1, 1), ++r;
    }
  }

  var s = e.mutations.map(function (e) {
    return Fn(t.Kt, e);
  }),
      u = tt.fromMillis(e.localWriteTimeMs);
  return new Or(e.batchId, u, n, s);
}
/** Decodes a DbTarget into TargetData */


function zr(t) {
  var e,
      n,
      r = Gr(t.readTime),
      i = void 0 !== t.lastLimboFreeSnapshotVersion ? Gr(t.lastLimboFreeSnapshotVersion) : ie.min();
  return void 0 !== t.query.documents ? (k(1 === (n = t.query).documents.length), e = Jt(Gt(xn(n.documents[0])))) : e = function (t) {
    return Jt(Un(t));
  }(t.query), new Mr(e, t.targetId, 0
  /* Listen */
  , t.lastListenSequenceNumber, r, i, Y.fromBase64String(t.resumeToken))
  /** Encodes TargetData into a DbTarget for storage locally. */
  ;
}

function Qr(t, e) {
  var n,
      r = jr(e.snapshotVersion),
      i = jr(e.lastLimboFreeSnapshotVersion);
  n = St(e.target) ? qn(t.Kt, e.target) : Vn(t.Kt, e.target); // We can't store the resumeToken as a ByteString in IndexedDb, so we
  // convert it to a base64 string for storage.

  var o = e.resumeToken.toBase64(); // lastListenSequenceNumber is always 0 until we do real GC.

  return new fr(e.targetId, Tt(e.target), r, o, e.sequenceNumber, i, n);
}
/**
 * A helper function for figuring out what kind of query has been stored.
 */

/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */


function Wr(t) {
  var e = Un({
    parent: t.parent,
    structuredQuery: t.structuredQuery
  });
  return "LAST" === t.limitType ? Xt(e, e.limit, "L"
  /* Last */
  ) : e;
}
/** Encodes a NamedQuery proto object to a NamedQuery model object. */

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Hr =
/** @class */
function () {
  function t() {}

  return t.prototype.getBundleMetadata = function (t, e) {
    return Yr(t).get(e).next(function (t) {
      if (t) return {
        id: (e = t).bundleId,
        createTime: Gr(e.createTime),
        version: e.version
      };
      /** Encodes a DbBundle to a BundleMetadata object. */

      var e;
      /** Encodes a BundleMetadata to a DbBundle. */
    });
  }, t.prototype.saveBundleMetadata = function (t, e) {
    return Yr(t).put({
      bundleId: (n = e).id,
      createTime: jr(Sn(n.createTime)),
      version: n.version
    });
    var n;
    /** Encodes a DbNamedQuery to a NamedQuery. */
  }, t.prototype.getNamedQuery = function (t, e) {
    return Jr(t).get(e).next(function (t) {
      if (t) return {
        name: (e = t).name,
        query: Wr(e.bundledQuery),
        readTime: Gr(e.readTime)
      };
      var e;
      /** Encodes a NamedQuery from a bundle proto to a DbNamedQuery. */
    });
  }, t.prototype.saveNamedQuery = function (t, e) {
    return Jr(t).put(function (t) {
      return {
        name: t.name,
        readTime: jr(Sn(t.readTime)),
        bundledQuery: t.bundledQuery
      };
    }(e));
  }, t;
}();
/**
 * Helper to get a typed SimpleDbStore for the bundles object store.
 */


function Yr(t) {
  return Rr(t, vr.store);
}
/**
 * Helper to get a typed SimpleDbStore for the namedQueries object store.
 */


function Jr(t) {
  return Rr(t, mr.store);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An in-memory implementation of IndexManager.
 */


var Xr =
/** @class */
function () {
  function t() {
    this.Wt = new $r();
  }

  return t.prototype.addToCollectionParentIndex = function (t, e) {
    return this.Wt.add(e), Er.resolve();
  }, t.prototype.getCollectionParents = function (t, e) {
    return Er.resolve(this.Wt.getEntries(e));
  }, t;
}(),
    $r =
/** @class */
function () {
  function t() {
    this.index = {};
  } // Returns false if the entry already existed.


  return t.prototype.add = function (t) {
    var e = t.lastSegment(),
        n = t.popLast(),
        r = this.index[e] || new Je(z.comparator),
        i = !r.has(n);
    return this.index[e] = r.add(n), i;
  }, t.prototype.has = function (t) {
    var e = t.lastSegment(),
        n = t.popLast(),
        r = this.index[e];
    return r && r.has(n);
  }, t.prototype.getEntries = function (t) {
    return (this.index[t] || new Je(z.comparator)).toArray();
  }, t;
}(),
    Zr =
/** @class */
function () {
  function t() {
    /**
     * An in-memory copy of the index entries we've already written since the SDK
     * launched. Used to avoid re-writing the same entry repeatedly.
     *
     * This is *NOT* a complete cache of what's in persistence and so can never be used to
     * satisfy reads.
     */
    this.jt = new $r();
  }
  /**
   * Adds a new entry to the collection parent index.
   *
   * Repeated calls for the same collectionPath should be avoided within a
   * transaction as IndexedDbIndexManager only caches writes once a transaction
   * has been committed.
   */


  return t.prototype.addToCollectionParentIndex = function (t, e) {
    var n = this;

    if (!this.jt.has(e)) {
      var r = e.lastSegment(),
          i = e.popLast();
      t.addOnCommittedListener(function () {
        // Add the collection to the in memory cache only if the transaction was
        // successfully committed.
        n.jt.add(e);
      });
      var o = {
        collectionId: r,
        parent: $n(i)
      };
      return ti(t).put(o);
    }

    return Er.resolve();
  }, t.prototype.getCollectionParents = function (t, e) {
    var n = [],
        r = IDBKeyRange.bound([e, ""], [P(e), ""],
    /*lowerOpen=*/
    !1,
    /*upperOpen=*/
    !0);
    return ti(t).kt(r).next(function (t) {
      for (var r = 0, i = t; r < i.length; r++) {
        var o = i[r]; // This collectionId guard shouldn't be necessary (and isn't as long
        // as we're running in a real browser), but there's a bug in
        // indexeddbshim that breaks our range in our tests running in node:
        // https://github.com/axemclion/IndexedDBShim/issues/334

        if (o.collectionId !== e) break;
        n.push(er(o.parent));
      }

      return n;
    });
  }, t;
}();
/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */

/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */


function ti(t) {
  return Rr(t, pr.store);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ei = {
  didRun: !1,
  sequenceNumbersCollected: 0,
  targetsRemoved: 0,
  documentsRemoved: 0
},
    ni =
/** @class */
function () {
  function t( // When we attempt to collect, we will only do so if the cache size is greater than this
  // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
  t, // The percentage of sequence numbers that we will attempt to collect
  e, // A cap on the total number of sequence numbers that will be collected. This prevents
  // us from collecting a huge number of sequence numbers if the cache has grown very large.
  n) {
    this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n;
  }

  return t.withCacheSize = function (e) {
    return new t(e, t.DEFAULT_COLLECTION_PERCENTILE, t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }, t;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */


function ri(t, e, n) {
  var r = t.store(or.store),
      i = t.store(sr.store),
      o = [],
      s = IDBKeyRange.only(n.batchId),
      u = 0,
      a = r.qt({
    range: s
  }, function (t, e, n) {
    return u++, n.delete();
  });
  o.push(a.next(function () {
    k(1 === u);
  }));

  for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
    var l = f[h],
        d = sr.key(e, l.key.path, n.batchId);
    o.push(i.delete(d)), c.push(l.key);
  }

  return Er.waitFor(o).next(function () {
    return c;
  });
}
/**
 * Returns an approximate size for the given document.
 */


function ii(t) {
  var e;
  if (t.document) e = t.document;else if (t.unknownDocument) e = t.unknownDocument;else {
    if (!t.noDocument) throw A();
    e = t.noDocument;
  }
  return JSON.stringify(e).length;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** A mutation queue for a specific user, backed by IndexedDB. */


ni.DEFAULT_COLLECTION_PERCENTILE = 10, ni.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, ni.DEFAULT = new ni(41943040, ni.DEFAULT_COLLECTION_PERCENTILE, ni.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), ni.DISABLED = new ni(-1, 0, 0);

var oi =
/** @class */
function () {
  function t(
  /**
   * The normalized userId (e.g. null UID => "" userId) used to store /
   * retrieve mutations.
   */
  t, e, n, r) {
    this.userId = t, this.D = e, this.Gt = n, this.referenceDelegate = r,
    /**
         * Caches the document keys for pending mutation batches. If the mutation
         * has been removed from IndexedDb, the cached value may continue to
         * be used to retrieve the batch's document keys. To remove a cached value
         * locally, `removeCachedMutationKeys()` should be invoked either directly
         * or through `removeMutationBatches()`.
         *
         * With multi-tab, when the primary client acknowledges or rejects a mutation,
         * this cache is used by secondary clients to invalidate the local
         * view of the documents that were previously affected by the mutation.
         */
    // PORTING NOTE: Multi-tab only.
    this.zt = {}
    /**
    * Creates a new mutation queue for the given user.
    * @param user - The user for which to create a mutation queue.
    * @param serializer - The serializer to use when persisting to IndexedDb.
    */
    ;
  }

  return t.Ht = function (e, n, r, i) {
    // TODO(mcg): Figure out what constraints there are on userIDs
    // In particular, are there any reserved characters? are empty ids allowed?
    // For the moment store these together in the same mutations table assuming
    // that empty userIDs aren't allowed.
    return k("" !== e.uid), new t(e.isAuthenticated() ? e.uid : "", n, r, i);
  }, t.prototype.checkEmpty = function (t) {
    var e = !0,
        n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return ui(t).qt({
      index: or.userMutationsIndex,
      range: n
    }, function (t, n, r) {
      e = !1, r.done();
    }).next(function () {
      return e;
    });
  }, t.prototype.addMutationBatch = function (t, e, n, r) {
    var i = this,
        o = ai(t),
        s = ui(t); // The IndexedDb implementation in Chrome (and Firefox) does not handle
    // compound indices that include auto-generated keys correctly. To ensure
    // that the index entry is added correctly in all browsers, we perform two
    // writes: The first write is used to retrieve the next auto-generated Batch
    // ID, and the second write populates the index and stores the actual
    // mutation batch.
    // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
    // We write an empty object to obtain key
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return s.add({}).next(function (u) {
      k("number" == typeof u);

      for (var a = new Or(u, e, n, r), c = function (t, e, n) {
        var r = n.baseMutations.map(function (e) {
          return Mn(t.Kt, e);
        }),
            i = n.mutations.map(function (e) {
          return Mn(t.Kt, e);
        });
        return new or(e, n.batchId, n.localWriteTime.toMillis(), r, i);
      }(i.D, i.userId, a), h = [], f = new Je(function (t, e) {
        return R(t.canonicalString(), e.canonicalString());
      }), l = 0, d = r; l < d.length; l++) {
        var p = d[l],
            y = sr.key(i.userId, p.key.path, u);
        f = f.add(p.key.path.popLast()), h.push(s.put(c)), h.push(o.put(y, sr.PLACEHOLDER));
      }

      return f.forEach(function (e) {
        h.push(i.Gt.addToCollectionParentIndex(t, e));
      }), t.addOnCommittedListener(function () {
        i.zt[u] = a.keys();
      }), Er.waitFor(h).next(function () {
        return a;
      });
    });
  }, t.prototype.lookupMutationBatch = function (t, e) {
    var n = this;
    return ui(t).get(e).next(function (t) {
      return t ? (k(t.userId === n.userId), Kr(n.D, t)) : null;
    });
  },
  /**
   * Returns the document keys for the mutation batch with the given batchId.
   * For primary clients, this method returns `null` after
   * `removeMutationBatches()` has been called. Secondary clients return a
   * cached result until `removeCachedMutationKeys()` is invoked.
   */
  // PORTING NOTE: Multi-tab only.
  t.prototype.Jt = function (t, e) {
    var n = this;
    return this.zt[e] ? Er.resolve(this.zt[e]) : this.lookupMutationBatch(t, e).next(function (t) {
      if (t) {
        var r = t.keys();
        return n.zt[e] = r, r;
      }

      return null;
    });
  }, t.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
    var n = this,
        r = e + 1,
        i = IDBKeyRange.lowerBound([this.userId, r]),
        o = null;
    return ui(t).qt({
      index: or.userMutationsIndex,
      range: i
    }, function (t, e, i) {
      e.userId === n.userId && (k(e.batchId >= r), o = Kr(n.D, e)), i.done();
    }).next(function () {
      return o;
    });
  }, t.prototype.getHighestUnacknowledgedBatchId = function (t) {
    var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
        n = -1;
    return ui(t).qt({
      index: or.userMutationsIndex,
      range: e,
      reverse: !0
    }, function (t, e, r) {
      n = e.batchId, r.done();
    }).next(function () {
      return n;
    });
  }, t.prototype.getAllMutationBatches = function (t) {
    var e = this,
        n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return ui(t).kt(or.userMutationsIndex, n).next(function (t) {
      return t.map(function (t) {
        return Kr(e.D, t);
      });
    });
  }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function (t, e) {
    var n = this,
        r = sr.prefixForPath(this.userId, e.path),
        i = IDBKeyRange.lowerBound(r),
        o = []; // Scan the document-mutation index starting with a prefix starting with
    // the given documentKey.

    return ai(t).qt({
      range: i
    }, function (r, i, s) {
      var u = r[0],
          a = r[1],
          c = r[2],
          h = er(a); // Only consider rows matching exactly the specific key of
      // interest. Note that because we order by path first, and we
      // order terminators before path separators, we'll encounter all
      // the index rows for documentKey contiguously. In particular, all
      // the rows for documentKey will occur before any rows for
      // documents nested in a subcollection beneath documentKey so we
      // can stop as soon as we hit any such row.

      if (u === n.userId && e.path.isEqual(h)) // Look up the mutation batch in the store.
        return ui(t).get(c).next(function (t) {
          if (!t) throw A();
          k(t.userId === n.userId), o.push(Kr(n.D, t));
        });
      s.done();
    }).next(function () {
      return o;
    });
  }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function (t, e) {
    var n = this,
        r = new Je(R),
        i = [];
    return e.forEach(function (e) {
      var o = sr.prefixForPath(n.userId, e.path),
          s = IDBKeyRange.lowerBound(o),
          u = ai(t).qt({
        range: s
      }, function (t, i, o) {
        var s = t[0],
            u = t[1],
            a = t[2],
            c = er(u); // Only consider rows matching exactly the specific key of
        // interest. Note that because we order by path first, and we
        // order terminators before path separators, we'll encounter all
        // the index rows for documentKey contiguously. In particular, all
        // the rows for documentKey will occur before any rows for
        // documents nested in a subcollection beneath documentKey so we
        // can stop as soon as we hit any such row.

        s === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
      });
      i.push(u);
    }), Er.waitFor(i).next(function () {
      return n.Yt(t, r);
    });
  }, t.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
    var n = this,
        r = e.path,
        i = r.length + 1,
        o = sr.prefixForPath(this.userId, r),
        s = IDBKeyRange.lowerBound(o),
        u = new Je(R);
    return ai(t).qt({
      range: s
    }, function (t, e, o) {
      var s = t[0],
          a = t[1],
          c = t[2],
          h = er(a);
      s === n.userId && r.isPrefixOf(h) ? // Rows with document keys more than one segment longer than the
      // query path can't be matches. For example, a query on 'rooms'
      // can't match the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      h.length === i && (u = u.add(c)) : o.done();
    }).next(function () {
      return n.Yt(t, u);
    });
  }, t.prototype.Yt = function (t, e) {
    var n = this,
        r = [],
        i = []; // TODO(rockwood): Implement this using iterate.

    return e.forEach(function (e) {
      i.push(ui(t).get(e).next(function (t) {
        if (null === t) throw A();
        k(t.userId === n.userId), r.push(Kr(n.D, t));
      }));
    }), Er.waitFor(i).next(function () {
      return r;
    });
  }, t.prototype.removeMutationBatch = function (t, e) {
    var n = this;
    return ri(t.Qt, this.userId, e).next(function (r) {
      return t.addOnCommittedListener(function () {
        n.Xt(e.batchId);
      }), Er.forEach(r, function (e) {
        return n.referenceDelegate.markPotentiallyOrphaned(t, e);
      });
    });
  },
  /**
   * Clears the cached keys for a mutation batch. This method should be
   * called by secondary clients after they process mutation updates.
   *
   * Note that this method does not have to be called from primary clients as
   * the corresponding cache entries are cleared when an acknowledged or
   * rejected batch is removed from the mutation queue.
   */
  // PORTING NOTE: Multi-tab only
  t.prototype.Xt = function (t) {
    delete this.zt[t];
  }, t.prototype.performConsistencyCheck = function (t) {
    var e = this;
    return this.checkEmpty(t).next(function (n) {
      if (!n) return Er.resolve(); // Verify that there are no entries in the documentMutations index if
      // the queue is empty.

      var r = IDBKeyRange.lowerBound(sr.prefixForUser(e.userId)),
          i = [];
      return ai(t).qt({
        range: r
      }, function (t, n, r) {
        if (t[0] === e.userId) {
          var o = er(t[1]);
          i.push(o);
        } else r.done();
      }).next(function () {
        k(0 === i.length);
      });
    });
  }, t.prototype.containsKey = function (t, e) {
    return si(t, this.userId, e);
  }, // PORTING NOTE: Multi-tab only (state is held in memory in other clients).

  /** Returns the mutation queue's metadata from IndexedDb. */
  t.prototype.Zt = function (t) {
    var e = this;
    return ci(t).get(this.userId).next(function (t) {
      return t || new ir(e.userId, -1,
      /*lastStreamToken=*/
      "");
    });
  }, t;
}();
/**
 * @returns true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */


function si(t, e, n) {
  var r = sr.prefixForPath(e, n.path),
      i = r[1],
      o = IDBKeyRange.lowerBound(r),
      s = !1;
  return ai(t).qt({
    range: o,
    Bt: !0
  }, function (t, n, r) {
    var o = t[0],
        u = t[1];
    t[2];
    o === e && u === i && (s = !0), r.done();
  }).next(function () {
    return s;
  });
}
/** Returns true if any mutation queue contains the given document. */

/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */


function ui(t) {
  return Rr(t, or.store);
}
/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */


function ai(t) {
  return Rr(t, sr.store);
}
/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */


function ci(t) {
  return Rr(t, ir.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Offset to ensure non-overlapping target ids. */

/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */


var hi =
/** @class */
function () {
  function t(t) {
    this.te = t;
  }

  return t.prototype.next = function () {
    return this.te += 2, this.te;
  }, t.ee = function () {
    // The target cache generator must return '2' in its first call to `next()`
    // as there is no differentiation in the protocol layer between an unset
    // number and the number '0'. If we were to sent a target with target ID
    // '0', the backend would consider it unset and replace it with its own ID.
    return new t(0);
  }, t.ne = function () {
    // Sync engine assigns target IDs for limbo document detection.
    return new t(-1);
  }, t;
}(),
    fi =
/** @class */
function () {
  function t(t, e) {
    this.referenceDelegate = t, this.D = e;
  } // PORTING NOTE: We don't cache global metadata for the target cache, since
  // some of it (in particular `highestTargetId`) can be modified by secondary
  // tabs. We could perhaps be more granular (and e.g. still cache
  // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
  // to IndexedDb whenever we need to read metadata. We can revisit if it turns
  // out to have a meaningful performance impact.


  return t.prototype.allocateTargetId = function (t) {
    var e = this;
    return this.se(t).next(function (n) {
      var r = new hi(n.highestTargetId);
      return n.highestTargetId = r.next(), e.ie(t, n).next(function () {
        return n.highestTargetId;
      });
    });
  }, t.prototype.getLastRemoteSnapshotVersion = function (t) {
    return this.se(t).next(function (t) {
      return ie.fromTimestamp(new tt(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
    });
  }, t.prototype.getHighestSequenceNumber = function (t) {
    return this.se(t).next(function (t) {
      return t.highestListenSequenceNumber;
    });
  }, t.prototype.setTargetsMetadata = function (t, e, n) {
    var r = this;
    return this.se(t).next(function (i) {
      return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.toTimestamp()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.ie(t, i);
    });
  }, t.prototype.addTargetData = function (t, e) {
    var n = this;
    return this.re(t, e).next(function () {
      return n.se(t).next(function (r) {
        return r.targetCount += 1, n.oe(e, r), n.ie(t, r);
      });
    });
  }, t.prototype.updateTargetData = function (t, e) {
    return this.re(t, e);
  }, t.prototype.removeTargetData = function (t, e) {
    var n = this;
    return this.removeMatchingKeysForTargetId(t, e.targetId).next(function () {
      return li(t).delete(e.targetId);
    }).next(function () {
      return n.se(t);
    }).next(function (e) {
      return k(e.targetCount > 0), e.targetCount -= 1, n.ie(t, e);
    });
  },
  /**
   * Drops any targets with sequence number less than or equal to the upper bound, excepting those
   * present in `activeTargetIds`. Document associations for the removed targets are also removed.
   * Returns the number of targets removed.
   */
  t.prototype.removeTargets = function (t, e, n) {
    var r = this,
        i = 0,
        o = [];
    return li(t).qt(function (s, u) {
      var a = zr(u);
      a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.removeTargetData(t, a)));
    }).next(function () {
      return Er.waitFor(o);
    }).next(function () {
      return i;
    });
  },
  /**
   * Call provided function with each `TargetData` that we have cached.
   */
  t.prototype.forEachTarget = function (t, e) {
    return li(t).qt(function (t, n) {
      var r = zr(n);
      e(r);
    });
  }, t.prototype.se = function (t) {
    return di(t).get(dr.key).next(function (t) {
      return k(null !== t), t;
    });
  }, t.prototype.ie = function (t, e) {
    return di(t).put(dr.key, e);
  }, t.prototype.re = function (t, e) {
    return li(t).put(Qr(this.D, e));
  },
  /**
   * In-place updates the provided metadata to account for values in the given
   * TargetData. Saving is done separately. Returns true if there were any
   * changes to the metadata.
   */
  t.prototype.oe = function (t, e) {
    var n = !1;
    return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n;
  }, t.prototype.getTargetCount = function (t) {
    return this.se(t).next(function (t) {
      return t.targetCount;
    });
  }, t.prototype.getTargetData = function (t, e) {
    // Iterating by the canonicalId may yield more than one result because
    // canonicalId values are not required to be unique per target. This query
    // depends on the queryTargets index to be efficient.
    var n = Tt(e),
        r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]),
        i = null;
    return li(t).qt({
      range: r,
      index: fr.queryTargetsIndexName
    }, function (t, n, r) {
      var o = zr(n); // After finding a potential match, check that the target is
      // actually equal to the requested target.

      _t(e, o.target) && (i = o, r.done());
    }).next(function () {
      return i;
    });
  }, t.prototype.addMatchingKeys = function (t, e, n) {
    var r = this,
        i = [],
        o = pi(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
    // IndexedDb.

    return e.forEach(function (e) {
      var s = $n(e.path);
      i.push(o.put(new lr(n, s))), i.push(r.referenceDelegate.addReference(t, n, e));
    }), Er.waitFor(i);
  }, t.prototype.removeMatchingKeys = function (t, e, n) {
    var r = this,
        i = pi(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
    // IndexedDb.

    return Er.forEach(e, function (e) {
      var o = $n(e.path);
      return Er.waitFor([i.delete([n, o]), r.referenceDelegate.removeReference(t, n, e)]);
    });
  }, t.prototype.removeMatchingKeysForTargetId = function (t, e) {
    var n = pi(t),
        r = IDBKeyRange.bound([e], [e + 1],
    /*lowerOpen=*/
    !1,
    /*upperOpen=*/
    !0);
    return n.delete(r);
  }, t.prototype.getMatchingKeysForTargetId = function (t, e) {
    var n = IDBKeyRange.bound([e], [e + 1],
    /*lowerOpen=*/
    !1,
    /*upperOpen=*/
    !0),
        r = pi(t),
        i = un();
    return r.qt({
      range: n,
      Bt: !0
    }, function (t, e, n) {
      var r = er(t[1]),
          o = new H(r);
      i = i.add(o);
    }).next(function () {
      return i;
    });
  }, t.prototype.containsKey = function (t, e) {
    var n = $n(e.path),
        r = IDBKeyRange.bound([n], [P(n)],
    /*lowerOpen=*/
    !1,
    /*upperOpen=*/
    !0),
        i = 0;
    return pi(t).qt({
      index: lr.documentTargetsIndex,
      Bt: !0,
      range: r
    }, function (t, e, n) {
      var r = t[0]; // Having a sentinel row for a document does not count as containing that document;
      // For the target cache, containing the document means the document is part of some
      // target.

      t[1];
      0 !== r && (i++, n.done());
    }).next(function () {
      return i > 0;
    });
  },
  /**
   * Looks up a TargetData entry by target ID.
   *
   * @param targetId - The target ID of the TargetData entry to look up.
   * @returns The cached TargetData entry, or null if the cache has no entry for
   * the target.
   */
  // PORTING NOTE: Multi-tab only.
  t.prototype.yt = function (t, e) {
    return li(t).get(e).next(function (t) {
      return t ? zr(t) : null;
    });
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */


function li(t) {
  return Rr(t, fr.store);
}
/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */


function di(t) {
  return Rr(t, dr.store);
}
/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */


function pi(t) {
  return Rr(t, lr.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */


function yi(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    return (0, _tslib.__generator)(this, function (e) {
      if (t.code !== j.FAILED_PRECONDITION || t.message !== wr) throw t;
      return _("LocalStore", "Unexpectedly lost primary lease"), [2
      /*return*/
      ];
    });
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function vi(t, e) {
  var n = t[0],
      r = t[1],
      i = e[0],
      o = e[1],
      s = R(n, i);
  return 0 === s ? R(r, o) : s;
}
/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */


var mi =
/** @class */
function () {
  function t(t) {
    this.ce = t, this.buffer = new Je(vi), this.ae = 0;
  }

  return t.prototype.ue = function () {
    return ++this.ae;
  }, t.prototype.he = function (t) {
    var e = [t, this.ue()];
    if (this.buffer.size < this.ce) this.buffer = this.buffer.add(e);else {
      var n = this.buffer.last();
      vi(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
    }
  }, Object.defineProperty(t.prototype, "maxValue", {
    get: function get() {
      // Guaranteed to be non-empty. If we decide we are not collecting any
      // sequence numbers, nthSequenceNumber below short-circuits. If we have
      // decided that we are collecting n sequence numbers, it's because n is some
      // percentage of the existing sequence numbers. That means we should never
      // be in a situation where we are collecting sequence numbers but don't
      // actually have any.
      return this.buffer.last()[0];
    },
    enumerable: !1,
    configurable: !0
  }), t;
}(),
    gi =
/** @class */
function () {
  function t(t, e) {
    this.garbageCollector = t, this.asyncQueue = e, this.le = !1, this.fe = null;
  }

  return t.prototype.start = function (t) {
    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.de(t);
  }, t.prototype.stop = function () {
    this.fe && (this.fe.cancel(), this.fe = null);
  }, Object.defineProperty(t.prototype, "started", {
    get: function get() {
      return null !== this.fe;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.de = function (t) {
    var e = this,
        n = this.le ? 3e5 : 6e4;
    _("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.fe = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection"
    /* LruGarbageCollection */
    , n, function () {
      return (0, _tslib.__awaiter)(e, void 0, void 0, function () {
        var e;
        return (0, _tslib.__generator)(this, function (n) {
          switch (n.label) {
            case 0:
              this.fe = null, this.le = !0, n.label = 1;

            case 1:
              return n.trys.push([1, 3,, 7]), [4
              /*yield*/
              , t.collectGarbage(this.garbageCollector)];

            case 2:
              return n.sent(), [3
              /*break*/
              , 7];

            case 3:
              return Nr(e = n.sent()) ? (_("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3
              /*break*/
              , 6]) : [3
              /*break*/
              , 4];

            case 4:
              return [4
              /*yield*/
              , yi(e)];

            case 5:
              n.sent(), n.label = 6;

            case 6:
              return [3
              /*break*/
              , 7];

            case 7:
              return [4
              /*yield*/
              , this.de(t)];

            case 8:
              return n.sent(), [2
              /*return*/
              ];
          }
        });
      });
    });
  }, t;
}(),
    wi =
/** @class */
function () {
  function t(t, e) {
    this.we = t, this.params = e;
  }

  return t.prototype.calculateTargetCount = function (t, e) {
    return this.we._e(t).next(function (t) {
      return Math.floor(e / 100 * t);
    });
  }, t.prototype.nthSequenceNumber = function (t, e) {
    var n = this;
    if (0 === e) return Er.resolve(I.o);
    var r = new mi(e);
    return this.we.forEachTarget(t, function (t) {
      return r.he(t.sequenceNumber);
    }).next(function () {
      return n.we.me(t, function (t) {
        return r.he(t);
      });
    }).next(function () {
      return r.maxValue;
    });
  }, t.prototype.removeTargets = function (t, e, n) {
    return this.we.removeTargets(t, e, n);
  }, t.prototype.removeOrphanedDocuments = function (t, e) {
    return this.we.removeOrphanedDocuments(t, e);
  }, t.prototype.collect = function (t, e) {
    var n = this;
    return -1 === this.params.cacheSizeCollectionThreshold ? (_("LruGarbageCollector", "Garbage collection skipped; disabled"), Er.resolve(ei)) : this.getCacheSize(t).next(function (r) {
      return r < n.params.cacheSizeCollectionThreshold ? (_("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.cacheSizeCollectionThreshold), ei) : n.ye(t, e);
    });
  }, t.prototype.getCacheSize = function (t) {
    return this.we.getCacheSize(t);
  }, t.prototype.ye = function (t, n) {
    var r,
        i,
        o,
        s,
        u,
        a,
        c,
        h = this,
        f = Date.now();
    return this.calculateTargetCount(t, this.params.percentileToCollect).next(function (e) {
      // Cap at the configured max
      return e > h.params.maximumSequenceNumbersToCollect ? (_("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.maximumSequenceNumbersToCollect + " from " + e), i = h.params.maximumSequenceNumbersToCollect) : i = e, s = Date.now(), h.nthSequenceNumber(t, i);
    }).next(function (e) {
      return r = e, u = Date.now(), h.removeTargets(t, r, n);
    }).next(function (e) {
      return o = e, a = Date.now(), h.removeOrphanedDocuments(t, r);
    }).next(function (t) {
      return c = Date.now(), T() <= _logger.LogLevel.DEBUG && _("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - f) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - f) + "ms"), Er.resolve({
        didRun: !0,
        sequenceNumbersCollected: i,
        targetsRemoved: o,
        documentsRemoved: t
      });
    });
  }, t;
}(),
    bi =
/** @class */
function () {
  function t(t, e) {
    this.db = t, this.garbageCollector = function (t, e) {
      return new wi(t, e);
    }(this, e);
  }

  return t.prototype._e = function (t) {
    var e = this.ge(t);
    return this.db.getTargetCache().getTargetCount(t).next(function (t) {
      return e.next(function (e) {
        return t + e;
      });
    });
  }, t.prototype.ge = function (t) {
    var e = 0;
    return this.me(t, function (t) {
      e++;
    }).next(function () {
      return e;
    });
  }, t.prototype.forEachTarget = function (t, e) {
    return this.db.getTargetCache().forEachTarget(t, e);
  }, t.prototype.me = function (t, e) {
    return this.pe(t, function (t, n) {
      return e(n);
    });
  }, t.prototype.addReference = function (t, e, n) {
    return Ii(t, n);
  }, t.prototype.removeReference = function (t, e, n) {
    return Ii(t, n);
  }, t.prototype.removeTargets = function (t, e, n) {
    return this.db.getTargetCache().removeTargets(t, e, n);
  }, t.prototype.markPotentiallyOrphaned = function (t, e) {
    return Ii(t, e);
  },
  /**
   * Returns true if anything would prevent this document from being garbage
   * collected, given that the document in question is not present in any
   * targets and has a sequence number less than or equal to the upper bound for
   * the collection run.
   */
  t.prototype.Ee = function (t, e) {
    return function (t, e) {
      var n = !1;
      return ci(t).Ut(function (r) {
        return si(t, r, e).next(function (t) {
          return t && (n = !0), Er.resolve(!t);
        });
      }).next(function () {
        return n;
      });
    }(t, e);
  }, t.prototype.removeOrphanedDocuments = function (t, e) {
    var n = this,
        r = this.db.getRemoteDocumentCache().newChangeBuffer(),
        i = [],
        o = 0;
    return this.pe(t, function (s, u) {
      if (u <= e) {
        var a = n.Ee(t, s).next(function (e) {
          if (!e) // Our size accounting requires us to read all documents before
            // removing them.
            return o++, r.getEntry(t, s).next(function () {
              return r.removeEntry(s), pi(t).delete([0, $n(s.path)]);
            });
        });
        i.push(a);
      }
    }).next(function () {
      return Er.waitFor(i);
    }).next(function () {
      return r.apply(t);
    }).next(function () {
      return o;
    });
  }, t.prototype.removeTarget = function (t, e) {
    var n = e.withSequenceNumber(t.currentSequenceNumber);
    return this.db.getTargetCache().updateTargetData(t, n);
  }, t.prototype.updateLimboDocument = function (t, e) {
    return Ii(t, e);
  },
  /**
   * Call provided function for each document in the cache that is 'orphaned'. Orphaned
   * means not a part of any target, so the only entry in the target-document index for
   * that document will be the sentinel row (targetId 0), which will also have the sequence
   * number for the last time the document was accessed.
   */
  t.prototype.pe = function (t, e) {
    var n,
        r = pi(t),
        i = I.o;
    return r.qt({
      index: lr.documentTargetsIndex
    }, function (t, r) {
      var o = t[0],
          s = (t[1], r.path),
          u = r.sequenceNumber;
      0 === o ? ( // if nextToReport is valid, report it, this is a new key so the
      // last one must not be a member of any targets.
      i !== I.o && e(new H(er(n)), i), // set nextToReport to be this sequence number. It's the next one we
      // might report, if we don't find any targets for this document.
      // Note that the sequence number must be defined when the targetId
      // is 0.
      i = u, n = s) : // set nextToReport to be invalid, we know we don't need to report
      // this one since we found a target for it.
      i = I.o;
    }).next(function () {
      // Since we report sequence numbers after getting to the next key, we
      // need to check if the last key we iterated over was an orphaned
      // document and report it.
      i !== I.o && e(new H(er(n)), i);
    });
  }, t.prototype.getCacheSize = function (t) {
    return this.db.getRemoteDocumentCache().getSize(t);
  }, t;
}();
/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */


function Ii(t, e) {
  return pi(t).put(
  /**
  * @returns A value suitable for writing a sentinel row in the target-document
  * store.
  */
  function (t, e) {
    return new lr(0, $n(t.path), e);
  }(e, t.currentSequenceNumber));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */


var Ei =
/** @class */
function () {
  function t(t, e) {
    this.mapKeyFn = t, this.equalsFn = e,
    /**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */
    this.inner = {}
    /** Get a value for this key, or undefined if it does not exist. */
    ;
  }

  return t.prototype.get = function (t) {
    var e = this.mapKeyFn(t),
        n = this.inner[e];
    if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
      var o = i[r],
          s = o[0],
          u = o[1];
      if (this.equalsFn(s, t)) return u;
    }
  }, t.prototype.has = function (t) {
    return void 0 !== this.get(t);
  },
  /** Put this key and value in the map. */
  t.prototype.set = function (t, e) {
    var n = this.mapKeyFn(t),
        r = this.inner[n];

    if (void 0 !== r) {
      for (var i = 0; i < r.length; i++) {
        if (this.equalsFn(r[i][0], t)) return void (r[i] = [t, e]);
      }

      r.push([t, e]);
    } else this.inner[n] = [[t, e]];
  },
  /**
   * Remove this key from the map. Returns a boolean if anything was deleted.
   */
  t.prototype.delete = function (t) {
    var e = this.mapKeyFn(t),
        n = this.inner[e];
    if (void 0 === n) return !1;

    for (var r = 0; r < n.length; r++) {
      if (this.equalsFn(n[r][0], t)) return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0;
    }

    return !1;
  }, t.prototype.forEach = function (t) {
    F(this.inner, function (e, n) {
      for (var r = 0, i = n; r < i.length; r++) {
        var o = i[r],
            s = o[0],
            u = o[1];
        t(s, u);
      }
    });
  }, t.prototype.isEmpty = function () {
    return q(this.inner);
  }, t;
}(),
    Ti =
/** @class */
function () {
  function t() {
    // A mapping of document key to the new cache entry that should be written (or null if any
    // existing cache entry should be removed).
    this.changes = new Ei(function (t) {
      return t.toString();
    }, function (t, e) {
      return t.isEqual(e);
    }), this.changesApplied = !1;
  }

  return t.prototype.getReadTime = function (t) {
    var e = this.changes.get(t);
    return e ? e.readTime : ie.min();
  },
  /**
   * Buffers a `RemoteDocumentCache.addEntry()` call.
   *
   * You can only modify documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  t.prototype.addEntry = function (t, e) {
    this.assertNotApplied(), this.changes.set(t.key, {
      maybeDocument: t,
      readTime: e
    });
  },
  /**
   * Buffers a `RemoteDocumentCache.removeEntry()` call.
   *
   * You can only remove documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  t.prototype.removeEntry = function (t, e) {
    void 0 === e && (e = null), this.assertNotApplied(), this.changes.set(t, {
      maybeDocument: null,
      readTime: e
    });
  },
  /**
   * Looks up an entry in the cache. The buffered changes will first be checked,
   * and if no buffered change applies, this will forward to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKey - The key of the entry to look up.
   * @returns The cached Document or NoDocument entry, or null if we have
   *     nothing cached.
   */
  t.prototype.getEntry = function (t, e) {
    this.assertNotApplied();
    var n = this.changes.get(e);
    return void 0 !== n ? Er.resolve(n.maybeDocument) : this.getFromCache(t, e);
  },
  /**
   * Looks up several entries in the cache, forwarding to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKeys - The keys of the entries to look up.
   * @returns A map of cached `Document`s or `NoDocument`s, indexed by key. If
   *     an entry cannot be found, the corresponding key will be mapped to a
   *     null value.
   */
  t.prototype.getEntries = function (t, e) {
    return this.getAllFromCache(t, e);
  },
  /**
   * Applies buffered changes to the underlying RemoteDocumentCache, using
   * the provided transaction.
   */
  t.prototype.apply = function (t) {
    return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t);
  },
  /** Helper to assert this.changes is not null  */
  t.prototype.assertNotApplied = function () {}, t;
}(),
    _i =
/** @class */
function () {
  /**
   * @param serializer - The document serializer.
   * @param indexManager - The query indexes that need to be maintained.
   */
  function t(t, e) {
    this.D = t, this.Gt = e
    /**
    * Adds the supplied entries to the cache.
    *
    * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
    * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
    */
    ;
  }

  return t.prototype.addEntry = function (t, e, n) {
    return Ni(t).put(Ai(e), n);
  },
  /**
   * Removes a document from the cache.
   *
   * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
   */
  t.prototype.removeEntry = function (t, e) {
    var n = Ni(t),
        r = Ai(e);
    return n.delete(r);
  },
  /**
   * Updates the current cache size.
   *
   * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
   * cache's metadata.
   */
  t.prototype.updateMetadata = function (t, e) {
    var n = this;
    return this.getMetadata(t).next(function (r) {
      return r.byteSize += e, n.Te(t, r);
    });
  }, t.prototype.getEntry = function (t, e) {
    var n = this;
    return Ni(t).get(Ai(e)).next(function (t) {
      return n.Ie(t);
    });
  },
  /**
   * Looks up an entry in the cache.
   *
   * @param documentKey - The key of the entry to look up.
   * @returns The cached MaybeDocument entry and its size, or null if we have
   * nothing cached.
   */
  t.prototype.Ae = function (t, e) {
    var n = this;
    return Ni(t).get(Ai(e)).next(function (t) {
      var e = n.Ie(t);
      return e ? {
        maybeDocument: e,
        size: ii(t)
      } : null;
    });
  }, t.prototype.getEntries = function (t, e) {
    var n = this,
        r = tn();
    return this.Re(t, e, function (t, e) {
      var i = n.Ie(e);
      r = r.insert(t, i);
    }).next(function () {
      return r;
    });
  },
  /**
   * Looks up several entries in the cache.
   *
   * @param documentKeys - The set of keys entries to look up.
   * @returns A map of MaybeDocuments indexed by key (if a document cannot be
   *     found, the key will be mapped to null) and a map of sizes indexed by
   *     key (zero if the key cannot be found).
   */
  t.prototype.be = function (t, e) {
    var n = this,
        r = tn(),
        i = new We(H.comparator);
    return this.Re(t, e, function (t, e) {
      var o = n.Ie(e);
      o ? (r = r.insert(t, o), i = i.insert(t, ii(e))) : (r = r.insert(t, null), i = i.insert(t, 0));
    }).next(function () {
      return {
        ve: r,
        Pe: i
      };
    });
  }, t.prototype.Re = function (t, e, n) {
    if (e.isEmpty()) return Er.resolve();
    var r = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()),
        i = e.getIterator(),
        o = i.getNext();
    return Ni(t).qt({
      range: r
    }, function (t, e, r) {
      // Go through keys not found in cache.
      for (var s = H.fromSegments(t); o && H.comparator(o, s) < 0;) {
        n(o, null), o = i.getNext();
      }

      o && o.isEqual(s) && ( // Key found in cache.
      n(o, e), o = i.hasNext() ? i.getNext() : null), // Skip to the next key (if there is one).
      o ? r.Ot(o.path.toArray()) : r.done();
    }).next(function () {
      // The rest of the keys are not in the cache. One case where `iterate`
      // above won't go through them is when the cache is empty.
      for (; o;) {
        n(o, null), o = i.hasNext() ? i.getNext() : null;
      }
    });
  }, t.prototype.getDocumentsMatchingQuery = function (t, e, n) {
    var r = this,
        i = nn(),
        o = e.path.length + 1,
        s = {};

    if (n.isEqual(ie.min())) {
      // Documents are ordered by key, so we can use a prefix scan to narrow
      // down the documents we need to match the query against.
      var u = e.path.toArray();
      s.range = IDBKeyRange.lowerBound(u);
    } else {
      // Execute an index-free query and filter by read time. This is safe
      // since all document changes to queries that have a
      // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
      var a = e.path.toArray(),
          c = Ur(n);
      s.range = IDBKeyRange.lowerBound([a, c],
      /* open= */
      !0), s.index = cr.collectionReadTimeIndex;
    }

    return Ni(t).qt(s, function (t, n, s) {
      // The query is actually returning any path that starts with the query
      // path prefix which may include documents in subcollections. For
      // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
      // shouldn't match it. Fix this by discarding rows with document keys
      // more than one segment longer than the query path.
      if (t.length === o) {
        var u = qr(r.D, n);
        e.path.isPrefixOf(u.key.path) ? u instanceof gt && ee(e, u) && (i = i.insert(u.key, u)) : s.done();
      }
    }).next(function () {
      return i;
    });
  }, t.prototype.newChangeBuffer = function (t) {
    return new Si(this, !!t && t.trackRemovals);
  }, t.prototype.getSize = function (t) {
    return this.getMetadata(t).next(function (t) {
      return t.byteSize;
    });
  }, t.prototype.getMetadata = function (t) {
    return Di(t).get(hr.key).next(function (t) {
      return k(!!t), t;
    });
  }, t.prototype.Te = function (t, e) {
    return Di(t).put(hr.key, e);
  },
  /**
   * Decodes `remoteDoc` and returns the document (or null, if the document
   * corresponds to the format used for sentinel deletes).
   */
  t.prototype.Ie = function (t) {
    if (t) {
      var e = qr(this.D, t);
      return e instanceof wt && e.version.isEqual(ie.min()) ? null : e;
    }

    return null;
  }, t;
}(),
    Si =
/** @class */
function (t) {
  /**
   * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
   * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
   * `getNewDocumentChanges()`.
   */
  function e(e, n) {
    var r = this;
    return (r = t.call(this) || this).Ve = e, r.trackRemovals = n, // A map of document sizes prior to applying the changes in this buffer.
    r.Se = new Ei(function (t) {
      return t.toString();
    }, function (t, e) {
      return t.isEqual(e);
    }), r;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.applyChanges = function (t) {
    var e = this,
        n = [],
        r = 0,
        i = new Je(function (t, e) {
      return R(t.canonicalString(), e.canonicalString());
    });
    return this.changes.forEach(function (o, s) {
      var u = e.Se.get(o);

      if (s.maybeDocument) {
        var a = Vr(e.Ve.D, s.maybeDocument, e.getReadTime(o));
        i = i.add(o.path.popLast());
        var c = ii(a);
        r += c - u, n.push(e.Ve.addEntry(t, o, a));
      } else if (r -= u, e.trackRemovals) {
        // In order to track removals, we store a "sentinel delete" in the
        // RemoteDocumentCache. This entry is represented by a NoDocument
        // with a version of 0 and ignored by `maybeDecodeDocument()` but
        // preserved in `getNewDocumentChanges()`.
        var h = Vr(e.Ve.D, new wt(o, ie.min()), e.getReadTime(o));
        n.push(e.Ve.addEntry(t, o, h));
      } else n.push(e.Ve.removeEntry(t, o));
    }), i.forEach(function (r) {
      n.push(e.Ve.Gt.addToCollectionParentIndex(t, r));
    }), n.push(this.Ve.updateMetadata(t, r)), Er.waitFor(n);
  }, e.prototype.getFromCache = function (t, e) {
    var n = this; // Record the size of everything we load from the cache so we can compute a delta later.

    return this.Ve.Ae(t, e).next(function (t) {
      return null === t ? (n.Se.set(e, 0), null) : (n.Se.set(e, t.size), t.maybeDocument);
    });
  }, e.prototype.getAllFromCache = function (t, e) {
    var n = this; // Record the size of everything we load from the cache so we can compute
    // a delta later.

    return this.Ve.be(t, e).next(function (t) {
      var e = t.ve; // Note: `getAllFromCache` returns two maps instead of a single map from
      // keys to `DocumentSizeEntry`s. This is to allow returning the
      // `NullableMaybeDocumentMap` directly, without a conversion.

      return t.Pe.forEach(function (t, e) {
        n.Se.set(t, e);
      }), e;
    });
  }, e;
}(Ti);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */


function Di(t) {
  return Rr(t, hr.store);
}
/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */


function Ni(t) {
  return Rr(t, cr.store);
}

function Ai(t) {
  return t.path.toArray();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Performs database creation and schema upgrades. */


var ki =
/** @class */
function () {
  function t(t) {
    this.D = t;
  }
  /**
   * Performs database creation and schema upgrades.
   *
   * Note that in production, this method is only ever used to upgrade the schema
   * to SCHEMA_VERSION. Different values of toVersion are only used for testing
   * and local feature development.
   */


  return t.prototype.St = function (t, e, n, r) {
    var i = this;
    k(n < r && n >= 0 && r <= 11);
    var o = new Tr("createOrUpgrade", e);
    n < 1 && r >= 1 && (function (t) {
      t.createObjectStore(rr.store);
    }(t), function (t) {
      t.createObjectStore(ir.store, {
        keyPath: ir.keyPath
      }), t.createObjectStore(or.store, {
        keyPath: or.keyPath,
        autoIncrement: !0
      }).createIndex(or.userMutationsIndex, or.userMutationsKeyPath, {
        unique: !0
      }), t.createObjectStore(sr.store);
    }(t), Ci(t), function (t) {
      t.createObjectStore(cr.store);
    }(t)); // Migration 2 to populate the targetGlobal object no longer needed since
    // migration 3 unconditionally clears it.

    var s = Er.resolve();
    return n < 3 && r >= 3 && ( // Brand new clients don't need to drop and recreate--only clients that
    // potentially have corrupt data.
    0 !== n && (function (t) {
      t.deleteObjectStore(lr.store), t.deleteObjectStore(fr.store), t.deleteObjectStore(dr.store);
    }(t), Ci(t)), s = s.next(function () {
      /**
      * Creates the target global singleton row.
      *
      * @param txn - The version upgrade transaction for indexeddb
      */
      return function (t) {
        var e = t.store(dr.store),
            n = new dr(
        /*highestTargetId=*/
        0,
        /*lastListenSequenceNumber=*/
        0, ie.min().toTimestamp(),
        /*targetCount=*/
        0);
        return e.put(dr.key, n);
      }(o);
    })), n < 4 && r >= 4 && (0 !== n && ( // Schema version 3 uses auto-generated keys to generate globally unique
    // mutation batch IDs (this was previously ensured internally by the
    // client). To migrate to the new schema, we have to read all mutations
    // and write them back out. We preserve the existing batch IDs to guarantee
    // consistency with other object stores. Any further mutation batch IDs will
    // be auto-generated.
    s = s.next(function () {
      return function (t, e) {
        return e.store(or.store).kt().next(function (n) {
          t.deleteObjectStore(or.store), t.createObjectStore(or.store, {
            keyPath: or.keyPath,
            autoIncrement: !0
          }).createIndex(or.userMutationsIndex, or.userMutationsKeyPath, {
            unique: !0
          });
          var r = e.store(or.store),
              i = n.map(function (t) {
            return r.put(t);
          });
          return Er.waitFor(i);
        });
      }(t, o);
    })), s = s.next(function () {
      !function (t) {
        t.createObjectStore(yr.store, {
          keyPath: yr.keyPath
        });
      }(t);
    })), n < 5 && r >= 5 && (s = s.next(function () {
      return i.De(o);
    })), n < 6 && r >= 6 && (s = s.next(function () {
      return function (t) {
        t.createObjectStore(hr.store);
      }(t), i.Ce(o);
    })), n < 7 && r >= 7 && (s = s.next(function () {
      return i.xe(o);
    })), n < 8 && r >= 8 && (s = s.next(function () {
      return i.Ne(t, o);
    })), n < 9 && r >= 9 && (s = s.next(function () {
      // Multi-Tab used to manage its own changelog, but this has been moved
      // to the DbRemoteDocument object store itself. Since the previous change
      // log only contained transient data, we can drop its object store.
      !function (t) {
        t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
      }(t), function (t) {
        var e = t.objectStore(cr.store);
        e.createIndex(cr.readTimeIndex, cr.readTimeIndexPath, {
          unique: !1
        }), e.createIndex(cr.collectionReadTimeIndex, cr.collectionReadTimeIndexPath, {
          unique: !1
        });
      }(e);
    })), n < 10 && r >= 10 && (s = s.next(function () {
      return i.$e(o);
    })), n < 11 && r >= 11 && (s = s.next(function () {
      !function (t) {
        t.createObjectStore(vr.store, {
          keyPath: vr.keyPath
        });
      }(t), function (t) {
        t.createObjectStore(mr.store, {
          keyPath: mr.keyPath
        });
      }(t);
    })), s;
  }, t.prototype.Ce = function (t) {
    var e = 0;
    return t.store(cr.store).qt(function (t, n) {
      e += ii(n);
    }).next(function () {
      var n = new hr(e);
      return t.store(hr.store).put(hr.key, n);
    });
  }, t.prototype.De = function (t) {
    var e = this,
        n = t.store(ir.store),
        r = t.store(or.store);
    return n.kt().next(function (n) {
      return Er.forEach(n, function (n) {
        var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
        return r.kt(or.userMutationsIndex, i).next(function (r) {
          return Er.forEach(r, function (r) {
            k(r.userId === n.userId);
            var i = Kr(e.D, r);
            return ri(t, n.userId, i).next(function () {});
          });
        });
      });
    });
  },
  /**
   * Ensures that every document in the remote document cache has a corresponding sentinel row
   * with a sequence number. Missing rows are given the most recently used sequence number.
   */
  t.prototype.xe = function (t) {
    var e = t.store(lr.store),
        n = t.store(cr.store);
    return t.store(dr.store).get(dr.key).next(function (t) {
      var r = [];
      return n.qt(function (n, i) {
        var o = new z(n),
            s = function (t) {
          return [0, $n(t)];
        }(o);

        r.push(e.get(s).next(function (n) {
          return n ? Er.resolve() : function (n) {
            return e.put(new lr(0, $n(n), t.highestListenSequenceNumber));
          }(o);
        }));
      }).next(function () {
        return Er.waitFor(r);
      });
    });
  }, t.prototype.Ne = function (t, e) {
    // Create the index.
    t.createObjectStore(pr.store, {
      keyPath: pr.keyPath
    });

    var n = e.store(pr.store),
        r = new $r(),
        i = function i(t) {
      if (r.add(t)) {
        var e = t.lastSegment(),
            i = t.popLast();
        return n.put({
          collectionId: e,
          parent: $n(i)
        });
      }
    }; // Helper to add an index entry iff we haven't already written it.
    // Index existing remote documents.


    return e.store(cr.store).qt({
      Bt: !0
    }, function (t, e) {
      var n = new z(t);
      return i(n.popLast());
    }).next(function () {
      return e.store(sr.store).qt({
        Bt: !0
      }, function (t, e) {
        t[0];
        var n = t[1],
            r = (t[2], er(n));
        return i(r.popLast());
      });
    });
  }, t.prototype.$e = function (t) {
    var e = this,
        n = t.store(fr.store);
    return n.qt(function (t, r) {
      var i = zr(r),
          o = Qr(e.D, i);
      return n.put(o);
    });
  }, t;
}();

function Ci(t) {
  t.createObjectStore(lr.store, {
    keyPath: lr.keyPath
  }).createIndex(lr.documentTargetsIndex, lr.documentTargetsKeyPath, {
    unique: !0
  }), // NOTE: This is unique only because the TargetId is the suffix.
  t.createObjectStore(fr.store, {
    keyPath: fr.keyPath
  }).createIndex(fr.queryTargetsIndexName, fr.queryTargetsKeyPath, {
    unique: !0
  }), t.createObjectStore(dr.store);
}

var xi = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
    Li =
/** @class */
function () {
  function t(
  /**
   * Whether to synchronize the in-memory state of multiple tabs and share
   * access to local persistence.
   */
  e, n, r, i, o, s, u, a, c,
  /**
   * If set to true, forcefully obtains database access. Existing tabs will
   * no longer be able to access IndexedDB.
   */
  h) {
    if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, this.Fe = o, this.window = s, this.document = u, this.Oe = c, this.ke = h, this.Me = null, this.Le = !1, this.isPrimary = !1, this.networkEnabled = !0,
    /** Our window.unload handler, if registered. */
    this.Be = null, this.inForeground = !1,
    /** Our 'visibilitychange' listener if registered. */
    this.qe = null,
    /** The client metadata refresh task. */
    this.Ue = null,
    /** The last time we garbage collected the client metadata object store. */
    this.Qe = Number.NEGATIVE_INFINITY,
    /** A listener to notify on primary state changes. */
    this.Ke = function (t) {
      return Promise.resolve();
    }, !t.At()) throw new G(j.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    this.referenceDelegate = new bi(this, i), this.We = n + "main", this.D = new Fr(a), this.je = new _r(this.We, 11, new ki(this.D)), this.Ge = new fi(this.referenceDelegate, this.D), this.Gt = new Zr(), this.ze = function (t, e) {
      return new _i(t, e);
    }(this.D, this.Gt), this.He = new Hr(), this.window && this.window.localStorage ? this.Je = this.window.localStorage : (this.Je = null, !1 === h && S("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
  }
  /**
   * Attempt to start IndexedDb persistence.
   *
   * @returns Whether persistence was enabled.
   */


  return t.prototype.start = function () {
    var t = this; // NOTE: This is expected to fail sometimes (in the case of another tab
    // already having the persistence lock), so it's the first thing we should
    // do.

    return this.Ye().then(function () {
      if (!t.isPrimary && !t.allowTabSynchronization) // Fail `start()` if `synchronizeTabs` is disabled and we cannot
        // obtain the primary lease.
        throw new G(j.FAILED_PRECONDITION, xi);
      return t.Xe(), t.Ze(), t.tn(), t.runTransaction("getHighestListenSequenceNumber", "readonly", function (e) {
        return t.Ge.getHighestSequenceNumber(e);
      });
    }).then(function (e) {
      t.Me = new I(e, t.Oe);
    }).then(function () {
      t.Le = !0;
    }).catch(function (e) {
      return t.je && t.je.close(), Promise.reject(e);
    });
  },
  /**
   * Registers a listener that gets called when the primary state of the
   * instance changes. Upon registering, this listener is invoked immediately
   * with the current primary state.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  t.prototype.en = function (t) {
    var e = this;
    return this.Ke = function (n) {
      return (0, _tslib.__awaiter)(e, void 0, void 0, function () {
        return (0, _tslib.__generator)(this, function (e) {
          return this.started ? [2
          /*return*/
          , t(n)] : [2
          /*return*/
          ];
        });
      });
    }, t(this.isPrimary);
  },
  /**
   * Registers a listener that gets called when the database receives a
   * version change event indicating that it has deleted.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  t.prototype.setDatabaseDeletedListener = function (t) {
    var e = this;
    this.je.Ct(function (n) {
      return (0, _tslib.__awaiter)(e, void 0, void 0, function () {
        return (0, _tslib.__generator)(this, function (e) {
          switch (e.label) {
            case 0:
              return null === n.newVersion ? [4
              /*yield*/
              , t()] : [3
              /*break*/
              , 2];

            case 1:
              e.sent(), e.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    });
  },
  /**
   * Adjusts the current network state in the client's metadata, potentially
   * affecting the primary lease.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  t.prototype.setNetworkEnabled = function (t) {
    var e = this;
    this.networkEnabled !== t && (this.networkEnabled = t, // Schedule a primary lease refresh for immediate execution. The eventual
    // lease update will be propagated via `primaryStateListener`.
    this.Fe.enqueueAndForget(function () {
      return (0, _tslib.__awaiter)(e, void 0, void 0, function () {
        return (0, _tslib.__generator)(this, function (t) {
          switch (t.label) {
            case 0:
              return this.started ? [4
              /*yield*/
              , this.Ye()] : [3
              /*break*/
              , 2];

            case 1:
              t.sent(), t.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    }));
  },
  /**
   * Updates the client metadata in IndexedDb and attempts to either obtain or
   * extend the primary lease for the local client. Asynchronously notifies the
   * primary state listener if the client either newly obtained or released its
   * primary lease.
   */
  t.prototype.Ye = function () {
    var t = this;
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function (e) {
      return Oi(e).put(new yr(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next(function () {
        if (t.isPrimary) return t.nn(e).next(function (e) {
          e || (t.isPrimary = !1, t.Fe.enqueueRetryable(function () {
            return t.Ke(!1);
          }));
        });
      }).next(function () {
        return t.sn(e);
      }).next(function (n) {
        return t.isPrimary && !n ? t.rn(e).next(function () {
          return !1;
        }) : !!n && t.on(e).next(function () {
          return !0;
        });
      });
    }).catch(function (e) {
      if (Nr(e)) // Proceed with the existing state. Any subsequent access to
        // IndexedDB will verify the lease.
        return _("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
      if (!t.allowTabSynchronization) throw e;
      return _("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e),
      /* isPrimary= */
      !1;
    }).then(function (e) {
      t.isPrimary !== e && t.Fe.enqueueRetryable(function () {
        return t.Ke(e);
      }), t.isPrimary = e;
    });
  }, t.prototype.nn = function (t) {
    var e = this;
    return Ri(t).get(rr.key).next(function (t) {
      return Er.resolve(e.cn(t));
    });
  }, t.prototype.an = function (t) {
    return Oi(t).delete(this.clientId);
  },
  /**
   * If the garbage collection threshold has passed, prunes the
   * RemoteDocumentChanges and the ClientMetadata store based on the last update
   * time of all clients.
   */
  t.prototype.un = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var t,
          e,
          n,
          r,
          i = this;
      return (0, _tslib.__generator)(this, function (o) {
        switch (o.label) {
          case 0:
            return !this.isPrimary || this.hn(this.Qe, 18e5) ? [3
            /*break*/
            , 2] : (this.Qe = Date.now(), [4
            /*yield*/
            , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function (t) {
              var e = Rr(t, yr.store);
              return e.kt().next(function (t) {
                var n = i.ln(t, 18e5),
                    r = t.filter(function (t) {
                  return -1 === n.indexOf(t);
                }); // Delete metadata for clients that are no longer considered active.

                return Er.forEach(r, function (t) {
                  return e.delete(t.clientId);
                }).next(function () {
                  return r;
                });
              });
            }).catch(function () {
              return [];
            })]);

          case 1:
            // Delete potential leftover entries that may continue to mark the
            // inactive clients as zombied in LocalStorage.
            // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
            // the client atomically, but we can't. So we opt to delete the IndexedDb
            // entries first to avoid potentially reviving a zombied client.
            if (t = o.sent(), this.Je) for (e = 0, n = t; e < n.length; e++) {
              r = n[e], this.Je.removeItem(this.fn(r.clientId));
            }
            o.label = 2;

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Schedules a recurring timer to update the client metadata and to either
   * extend or acquire the primary lease if the client is eligible.
   */
  t.prototype.tn = function () {
    var t = this;
    this.Ue = this.Fe.enqueueAfterDelay("client_metadata_refresh"
    /* ClientMetadataRefresh */
    , 4e3, function () {
      return t.Ye().then(function () {
        return t.un();
      }).then(function () {
        return t.tn();
      });
    });
  },
  /** Checks whether `client` is the local client. */
  t.prototype.cn = function (t) {
    return !!t && t.ownerId === this.clientId;
  },
  /**
   * Evaluate the state of all active clients and determine whether the local
   * client is or can act as the holder of the primary lease. Returns whether
   * the client is eligible for the lease, but does not actually acquire it.
   * May return 'false' even if there is no active leaseholder and another
   * (foreground) client should become leaseholder instead.
   */
  t.prototype.sn = function (t) {
    var e = this;
    return this.ke ? Er.resolve(!0) : Ri(t).get(rr.key).next(function (n) {
      // A client is eligible for the primary lease if:
      // - its network is enabled and the client's tab is in the foreground.
      // - its network is enabled and no other client's tab is in the
      //   foreground.
      // - every clients network is disabled and the client's tab is in the
      //   foreground.
      // - every clients network is disabled and no other client's tab is in
      //   the foreground.
      // - the `forceOwningTab` setting was passed in.
      if (null !== n && e.hn(n.leaseTimestampMs, 5e3) && !e.dn(n.ownerId)) {
        if (e.cn(n) && e.networkEnabled) return !0;

        if (!e.cn(n)) {
          if (!n.allowTabSynchronization) // Fail the `canActAsPrimary` check if the current leaseholder has
            // not opted into multi-tab synchronization. If this happens at
            // client startup, we reject the Promise returned by
            // `enablePersistence()` and the user can continue to use Firestore
            // with in-memory persistence.
            // If this fails during a lease refresh, we will instead block the
            // AsyncQueue from executing further operations. Note that this is
            // acceptable since mixing & matching different `synchronizeTabs`
            // settings is not supported.
            // TODO(b/114226234): Remove this check when `synchronizeTabs` can
            // no longer be turned off.
            throw new G(j.FAILED_PRECONDITION, xi);
          return !1;
        }
      }

      return !(!e.networkEnabled || !e.inForeground) || Oi(t).kt().next(function (t) {
        return void 0 === e.ln(t, 5e3).find(function (t) {
          if (e.clientId !== t.clientId) {
            var n = !e.networkEnabled && t.networkEnabled,
                r = !e.inForeground && t.inForeground,
                i = e.networkEnabled === t.networkEnabled;
            if (n || r && i) return !0;
          }

          return !1;
        });
      });
    }).next(function (t) {
      return e.isPrimary !== t && _("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t;
    });
  }, t.prototype.shutdown = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var t = this;
      return (0, _tslib.__generator)(this, function (e) {
        switch (e.label) {
          case 0:
            // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
            // has obtained the primary lease.
            // The shutdown() operations are idempotent and can be called even when
            // start() aborted (e.g. because it couldn't acquire the persistence lease).
            return this.Le = !1, this.wn(), this.Ue && (this.Ue.cancel(), this.Ue = null), this._n(), this.mn(), [4
            /*yield*/
            , this.je.runTransaction("shutdown", "readwrite", [rr.store, yr.store], function (e) {
              var n = new Lr(e, I.o);
              return t.rn(n).next(function () {
                return t.an(n);
              });
            })];

          case 1:
            // The shutdown() operations are idempotent and can be called even when
            // start() aborted (e.g. because it couldn't acquire the persistence lease).
            // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
            // has obtained the primary lease.
            return e.sent(), this.je.close(), // Remove the entry marking the client as zombied from LocalStorage since
            // we successfully deleted its metadata from IndexedDb.
            this.yn(), [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Returns clients that are not zombied and have an updateTime within the
   * provided threshold.
   */
  t.prototype.ln = function (t, e) {
    var n = this;
    return t.filter(function (t) {
      return n.hn(t.updateTimeMs, e) && !n.dn(t.clientId);
    });
  },
  /**
   * Returns the IDs of the clients that are currently active. If multi-tab
   * is not supported, returns an array that only contains the local client's
   * ID.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  t.prototype.gn = function () {
    var t = this;
    return this.runTransaction("getActiveClients", "readonly", function (e) {
      return Oi(e).kt().next(function (e) {
        return t.ln(e, 18e5).map(function (t) {
          return t.clientId;
        });
      });
    });
  }, Object.defineProperty(t.prototype, "started", {
    get: function get() {
      return this.Le;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.getMutationQueue = function (t) {
    return oi.Ht(t, this.D, this.Gt, this.referenceDelegate);
  }, t.prototype.getTargetCache = function () {
    return this.Ge;
  }, t.prototype.getRemoteDocumentCache = function () {
    return this.ze;
  }, t.prototype.getIndexManager = function () {
    return this.Gt;
  }, t.prototype.getBundleCache = function () {
    return this.He;
  }, t.prototype.runTransaction = function (t, e, n) {
    var r = this;

    _("IndexedDbPersistence", "Starting transaction:", t);

    var i,
        o = "readonly" === e ? "readonly" : "readwrite"; // Do all transactions as readwrite against all object stores, since we
    // are the only reader/writer.

    return this.je.runTransaction(t, o, gr, function (o) {
      return i = new Lr(o, r.Me ? r.Me.next() : I.o), "readwrite-primary" === e ? r.nn(i).next(function (t) {
        return !!t || r.sn(i);
      }).next(function (e) {
        if (!e) throw S("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r.Fe.enqueueRetryable(function () {
          return r.Ke(!1);
        }), new G(j.FAILED_PRECONDITION, wr);
        return n(i);
      }).next(function (t) {
        return r.on(i).next(function () {
          return t;
        });
      }) : r.pn(i).next(function () {
        return n(i);
      });
    }).then(function (t) {
      return i.raiseOnCommittedEvent(), t;
    });
  },
  /**
   * Verifies that the current tab is the primary leaseholder or alternatively
   * that the leaseholder has opted into multi-tab synchronization.
   */
  // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
  // be turned off.
  t.prototype.pn = function (t) {
    var e = this;
    return Ri(t).get(rr.key).next(function (t) {
      if (null !== t && e.hn(t.leaseTimestampMs, 5e3) && !e.dn(t.ownerId) && !e.cn(t) && !(e.ke || e.allowTabSynchronization && t.allowTabSynchronization)) throw new G(j.FAILED_PRECONDITION, xi);
    });
  },
  /**
   * Obtains or extends the new primary lease for the local client. This
   * method does not verify that the client is eligible for this lease.
   */
  t.prototype.on = function (t) {
    var e = new rr(this.clientId, this.allowTabSynchronization, Date.now());
    return Ri(t).put(rr.key, e);
  }, t.At = function () {
    return _r.At();
  },
  /** Checks the primary lease and removes it if we are the current primary. */
  t.prototype.rn = function (t) {
    var e = this,
        n = Ri(t);
    return n.get(rr.key).next(function (t) {
      return e.cn(t) ? (_("IndexedDbPersistence", "Releasing primary lease."), n.delete(rr.key)) : Er.resolve();
    });
  },
  /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
  t.prototype.hn = function (t, e) {
    var n = Date.now();
    return !(t < n - e || t > n && (S("Detected an update time that is in the future: " + t + " > " + n), 1));
  }, t.prototype.Xe = function () {
    var t = this;
    null !== this.document && "function" == typeof this.document.addEventListener && (this.qe = function () {
      t.Fe.enqueueAndForget(function () {
        return t.inForeground = "visible" === t.document.visibilityState, t.Ye();
      });
    }, this.document.addEventListener("visibilitychange", this.qe), this.inForeground = "visible" === this.document.visibilityState);
  }, t.prototype._n = function () {
    this.qe && (this.document.removeEventListener("visibilitychange", this.qe), this.qe = null);
  },
  /**
   * Attaches a window.unload handler that will synchronously write our
   * clientId to a "zombie client id" location in LocalStorage. This can be used
   * by tabs trying to acquire the primary lease to determine that the lease
   * is no longer valid even if the timestamp is recent. This is particularly
   * important for the refresh case (so the tab correctly re-acquires the
   * primary lease). LocalStorage is used for this rather than IndexedDb because
   * it is a synchronous API and so can be used reliably from  an unload
   * handler.
   */
  t.prototype.Ze = function () {
    var t,
        e = this;
    "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Be = function () {
      // Note: In theory, this should be scheduled on the AsyncQueue since it
      // accesses internal state. We execute this code directly during shutdown
      // to make sure it gets a chance to run.
      e.wn(), e.Fe.enqueueAndForget(function () {
        return e.shutdown();
      });
    }, this.window.addEventListener("unload", this.Be));
  }, t.prototype.mn = function () {
    this.Be && (this.window.removeEventListener("unload", this.Be), this.Be = null);
  },
  /**
   * Returns whether a client is "zombied" based on its LocalStorage entry.
   * Clients become zombied when their tab closes without running all of the
   * cleanup logic in `shutdown()`.
   */
  t.prototype.dn = function (t) {
    var e;

    try {
      var n = null !== (null === (e = this.Je) || void 0 === e ? void 0 : e.getItem(this.fn(t)));
      return _("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n;
    } catch (t) {
      // Gracefully handle if LocalStorage isn't working.
      return S("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
    }
  },
  /**
   * Record client as zombied (a client that had its tab closed). Zombied
   * clients are ignored during primary tab selection.
   */
  t.prototype.wn = function () {
    if (this.Je) try {
      this.Je.setItem(this.fn(this.clientId), String(Date.now()));
    } catch (t) {
      // Gracefully handle if LocalStorage isn't available / working.
      S("Failed to set zombie client id.", t);
    }
  },
  /** Removes the zombied client entry if it exists. */
  t.prototype.yn = function () {
    if (this.Je) try {
      this.Je.removeItem(this.fn(this.clientId));
    } catch (t) {// Ignore
    }
  }, t.prototype.fn = function (t) {
    return "firestore_zombie_" + this.persistenceKey + "_" + t;
  }, t;
}();
/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */

/**
 * An IndexedDB-backed instance of Persistence. Data is stored persistently
 * across sessions.
 *
 * On Web only, the Firestore SDKs support shared access to its persistence
 * layer. This allows multiple browser tabs to read and write to IndexedDb and
 * to synchronize state even without network connectivity. Shared access is
 * currently optional and not enabled unless all clients invoke
 * `enablePersistence()` with `{synchronizeTabs:true}`.
 *
 * In multi-tab mode, if multiple clients are active at the same time, the SDK
 * will designate one client as the ???primary client???. An effort is made to pick
 * a visible, network-connected and active client, and this client is
 * responsible for letting other clients know about its presence. The primary
 * client writes a unique client-generated identifier (the client ID) to
 * IndexedDb???s ???owner??? store every 4 seconds. If the primary client fails to
 * update this entry, another client can acquire the lease and take over as
 * primary.
 *
 * Some persistence operations in the SDK are designated as primary-client only
 * operations. This includes the acknowledgment of mutations and all updates of
 * remote documents. The effects of these operations are written to persistence
 * and then broadcast to other tabs via LocalStorage (see
 * `WebStorageSharedClientState`), which then refresh their state from
 * persistence.
 *
 * Similarly, the primary client listens to notifications sent by secondary
 * clients to discover persistence changes written by secondary clients, such as
 * the addition of new mutations and query targets.
 *
 * If multi-tab is not enabled and another tab already obtained the primary
 * lease, IndexedDbPersistence enters a failed state and all subsequent
 * operations will automatically fail.
 *
 * Additionally, there is an optimization so that when a tab is closed, the
 * primary lease is released immediately (this is especially important to make
 * sure that a refreshed tab is able to immediately re-acquire the primary
 * lease). Unfortunately, IndexedDB cannot be reliably used in window.unload
 * since it is an asynchronous API. So in addition to attempting to give up the
 * lease, the leaseholder writes its client ID to a "zombiedClient" entry in
 * LocalStorage which acts as an indicator that another tab should go ahead and
 * take the primary lease immediately regardless of the current lease timestamp.
 *
 * TODO(b/114226234): Remove `synchronizeTabs` section when multi-tab is no
 * longer optional.
 */

/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */


function Ri(t) {
  return Rr(t, rr.store);
}
/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */


function Oi(t) {
  return Rr(t, yr.store);
}
/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */


function Pi(t, e) {
  // Use two different prefix formats:
  //   * firestore / persistenceKey / projectID . databaseID / ...
  //   * firestore / persistenceKey / projectID / ...
  // projectIDs are DNS-compatible names and cannot contain dots
  // so there's no danger of collisions.
  var n = t.projectId;
  return t.isDefaultDatabase || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  ;
}

var Mi = function Mi(t, e) {
  this.progress = t, this.En = e;
},
    Fi =
/** @class */
function () {
  function t(t, e, n) {
    this.ze = t, this.Tn = e, this.Gt = n
    /**
    * Get the local view of the document identified by `key`.
    *
    * @returns Local view of the document or null if we don't have any cached
    * state for it.
    */
    ;
  }

  return t.prototype.In = function (t, e) {
    var n = this;
    return this.Tn.getAllMutationBatchesAffectingDocumentKey(t, e).next(function (r) {
      return n.An(t, e, r);
    });
  },
  /** Internal version of `getDocument` that allows reusing batches. */
  t.prototype.An = function (t, e, n) {
    return this.ze.getEntry(t, e).next(function (t) {
      for (var r = 0, i = n; r < i.length; r++) {
        t = i[r].applyToLocalView(e, t);
      }

      return t;
    });
  }, // Returns the view of the given `docs` as they would appear after applying
  // all mutations in the given `batches`.
  t.prototype.Rn = function (t, e, n) {
    var r = tn();
    return e.forEach(function (t, e) {
      for (var i = 0, o = n; i < o.length; i++) {
        e = o[i].applyToLocalView(t, e);
      }

      r = r.insert(t, e);
    }), r;
  },
  /**
   * Gets the local view of the documents identified by `keys`.
   *
   * If we don't have cached state for a document in `keys`, a NoDocument will
   * be stored for that key in the resulting set.
   */
  t.prototype.bn = function (t, e) {
    var n = this;
    return this.ze.getEntries(t, e).next(function (e) {
      return n.vn(t, e);
    });
  },
  /**
   * Similar to `getDocuments`, but creates the local view from the given
   * `baseDocs` without retrieving documents from the local store.
   */
  t.prototype.vn = function (t, e) {
    var n = this;
    return this.Tn.getAllMutationBatchesAffectingDocumentKeys(t, e).next(function (r) {
      var i = n.Rn(t, e, r),
          o = Ze();
      return i.forEach(function (t, e) {
        // TODO(http://b/32275378): Don't conflate missing / deleted.
        e || (e = new wt(t, ie.min())), o = o.insert(t, e);
      }), o;
    });
  },
  /**
   * Performs a query against the local view of all documents.
   *
   * @param transaction - The persistence transaction.
   * @param query - The query to match documents against.
   * @param sinceReadTime - If not set to SnapshotVersion.min(), return only
   *     documents that have been read since this snapshot version (exclusive).
   */
  t.prototype.getDocumentsMatchingQuery = function (t, e, n) {
    /**
    * Returns whether the query matches a single document by path (rather than a
    * collection).
    */
    return function (t) {
      return H.isDocumentKey(t.path) && null === t.collectionGroup && 0 === t.filters.length;
    }(e) ? this.Pn(t, e.path) : Ht(e) ? this.Vn(t, e, n) : this.Sn(t, e, n);
  }, t.prototype.Pn = function (t, e) {
    // Just do a simple document lookup.
    return this.In(t, new H(e)).next(function (t) {
      var e = nn();
      return t instanceof gt && (e = e.insert(t.key, t)), e;
    });
  }, t.prototype.Vn = function (t, e, n) {
    var r = this,
        i = e.collectionGroup,
        o = nn();
    return this.Gt.getCollectionParents(t, i).next(function (s) {
      return Er.forEach(s, function (s) {
        var u = function (t, e) {
          return new Bt(e,
          /*collectionGroup=*/
          null, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(e, s.child(i));

        return r.Sn(t, u, n).next(function (t) {
          t.forEach(function (t, e) {
            o = o.insert(t, e);
          });
        });
      }).next(function () {
        return o;
      });
    });
  }, t.prototype.Sn = function (t, e, n) {
    var r,
        i,
        o = this; // Query the remote documents and overlay mutations.

    return this.ze.getDocumentsMatchingQuery(t, e, n).next(function (n) {
      return r = n, o.Tn.getAllMutationBatchesAffectingQuery(t, e);
    }).next(function (e) {
      return i = e, o.Dn(t, i, r).next(function (t) {
        r = t;

        for (var e = 0, n = i; e < n.length; e++) {
          for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
            var a = u[s],
                c = a.key,
                h = Ce(a, r.get(c), o.localWriteTime);
            r = h instanceof gt ? r.insert(c, h) : r.remove(c);
          }
        }
      });
    }).next(function () {
      // Finally, filter out any documents that don't actually match
      // the query.
      return r.forEach(function (t, n) {
        ee(e, n) || (r = r.remove(t));
      }), r;
    });
  }, t.prototype.Dn = function (t, e, n) {
    for (var r = un(), i = 0, o = e; i < o.length; i++) {
      for (var s = 0, u = o[i].mutations; s < u.length; s++) {
        var a = u[s];
        a instanceof Pe && null === n.get(a.key) && (r = r.add(a.key));
      }
    }

    var c = n;
    return this.ze.getEntries(t, r).next(function (t) {
      return t.forEach(function (t, e) {
        null !== e && e instanceof gt && (c = c.insert(t, e));
      }), c;
    });
  }, t;
}(),
    qi =
/** @class */
function () {
  function t(t, e, n, r) {
    this.targetId = t, this.fromCache = e, this.Cn = n, this.xn = r;
  }

  return t.Nn = function (e, n) {
    for (var r = un(), i = un(), o = 0, s = n.docChanges; o < s.length; o++) {
      var u = s[o];

      switch (u.type) {
        case 0
        /* Added */
        :
          r = r.add(u.doc.key);
          break;

        case 1
        /* Removed */
        :
          i = i.add(u.doc.key);
        // do nothing
      }
    }

    return new t(e, n.fromCache, r, i);
  }, t;
}(),
    Vi =
/** @class */
function () {
  function t() {}
  /** Sets the document view to query against. */


  return t.prototype.$n = function (t) {
    this.Fn = t;
  },
  /** Returns all local documents matching the specified query. */
  t.prototype.getDocumentsMatchingQuery = function (t, n, r, i) {
    var o = this; // Queries that match all documents don't benefit from using
    // key-based lookups. It is more efficient to scan all documents in a
    // collection, rather than to perform individual lookups.

    return function (t) {
      return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.explicitOrderBy.length || 1 === t.explicitOrderBy.length && t.explicitOrderBy[0].field.isKeyField());
    }(n) || r.isEqual(ie.min()) ? this.On(t, n) : this.Fn.bn(t, i).next(function (s) {
      var u = o.kn(n, s);
      return (Kt(n) || zt(n)) && o.Mn(n.limitType, u, i, r) ? o.On(t, n) : (T() <= _logger.LogLevel.DEBUG && _("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), te(n)), o.Fn.getDocumentsMatchingQuery(t, n, r).next(function (t) {
        // We merge `previousResults` into `updateResults`, since
        // `updateResults` is already a DocumentMap. If a document is
        // contained in both lists, then its contents are the same.
        return u.forEach(function (e) {
          t = t.insert(e.key, e);
        }), t;
      }));
    }); // Queries that have never seen a snapshot without limbo free documents
    // should also be run as a full collection scan.
  },
  /** Applies the query filter and sorting to the provided documents.  */
  t.prototype.kn = function (t, e) {
    // Sort the documents and re-apply the query filter since previously
    // matching documents do not necessarily still match the query.
    var n = new Je(ne(t));
    return e.forEach(function (e, r) {
      r instanceof gt && ee(t, r) && (n = n.add(r));
    }), n;
  },
  /**
   * Determines if a limit query needs to be refilled from cache, making it
   * ineligible for index-free execution.
   *
   * @param sortedPreviousResults - The documents that matched the query when it
   * was last synchronized, sorted by the query's comparator.
   * @param remoteKeys - The document keys that matched the query at the last
   * snapshot.
   * @param limboFreeSnapshotVersion - The version of the snapshot when the
   * query was last synchronized.
   */
  t.prototype.Mn = function (t, e, n, r) {
    // The query needs to be refilled if a previously matching document no
    // longer matches.
    if (n.size !== e.size) return !0; // Limit queries are not eligible for index-free query execution if there is
    // a potential that an older document from cache now sorts before a document
    // that was previously part of the limit. This, however, can only happen if
    // the document at the edge of the limit goes out of limit.
    // If a document that is not the limit boundary sorts differently,
    // the boundary of the limit itself did not change and documents from cache
    // will continue to be "rejected" by this boundary. Therefore, we can ignore
    // any modifications that don't affect the last document.

    var i = "F"
    /* First */
    === t ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
  }, t.prototype.On = function (t, n) {
    return T() <= _logger.LogLevel.DEBUG && _("QueryEngine", "Using full collection scan to execute query:", te(n)), this.Fn.getDocumentsMatchingQuery(t, n, ie.min());
  }, t;
}(),
    Ui =
/** @class */
function () {
  function t(
  /** Manages our in-memory or durable persistence. */
  t, e, n, r) {
    this.persistence = t, this.Ln = e, this.D = r,
    /**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */
    this.Bn = new We(R),
    /** Maps a target to its targetID. */
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this.qn = new Ei(function (t) {
      return Tt(t);
    }, _t),
    /**
         * The read time of the last entry processed by `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */
    this.Un = ie.min(), this.Tn = t.getMutationQueue(n), this.Qn = t.getRemoteDocumentCache(), this.Ge = t.getTargetCache(), this.Kn = new Fi(this.Qn, this.Tn, this.persistence.getIndexManager()), this.He = t.getBundleCache(), this.Ln.$n(this.Kn);
  }

  return t.prototype.collectGarbage = function (t) {
    var e = this;
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function (n) {
      return t.collect(n, e.Bn);
    });
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */


function Bi(
/** Manages our in-memory or durable persistence. */
t, e, n, r) {
  return new Ui(t, e, n, r);
}
/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */
// PORTING NOTE: Android and iOS only return the documents affected by the
// change.


function ji(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r, i, o;
    return (0, _tslib.__generator)(this, function (s) {
      switch (s.label) {
        case 0:
          return n = C(t), r = n.Tn, i = n.Kn, [4
          /*yield*/
          , n.persistence.runTransaction("Handle user change", "readonly", function (t) {
            // Swap out the mutation queue, grabbing the pending mutation batches
            // before and after.
            var o;
            return n.Tn.getAllMutationBatches(t).next(function (s) {
              return o = s, r = n.persistence.getMutationQueue(e), // Recreate our LocalDocumentsView using the new
              // MutationQueue.
              i = new Fi(n.Qn, r, n.persistence.getIndexManager()), r.getAllMutationBatches(t);
            }).next(function (e) {
              for (var n = [], r = [], s = un(), u = 0, a = o // Union the old/new changed keys.
              ; u < a.length; u++) {
                var c = a[u];
                n.push(c.batchId);

                for (var h = 0, f = c.mutations; h < f.length; h++) {
                  var l = f[h];
                  s = s.add(l.key);
                }
              }

              for (var d = 0, p = e; d < p.length; d++) {
                var y = p[d];
                r.push(y.batchId);

                for (var v = 0, m = y.mutations; v < m.length; v++) {
                  var g = m[v];
                  s = s.add(g.key);
                }
              } // Return the set of all (potentially) changed documents and the list
              // of mutation batch IDs that were affected by change.


              return i.bn(t, s).next(function (t) {
                return {
                  Wn: t,
                  removedBatchIds: n,
                  addedBatchIds: r
                };
              });
            });
          })];

        case 1:
          return o = s.sent(), [2
          /*return*/
          , (n.Tn = r, n.Kn = i, n.Ln.$n(n.Kn), o)];
      }
    });
  });
}
/* Accepts locally generated Mutations and commit them to storage. */

/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */


function Gi(t, e) {
  var n = C(t);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function (t) {
    var r = e.batch.keys(),
        i = n.Qn.newChangeBuffer({
      trackRemovals: !0
    });
    return function (t, e, n, r) {
      var i = n.batch,
          o = i.keys(),
          s = Er.resolve();
      return o.forEach(function (t) {
        s = s.next(function () {
          return r.getEntry(e, t);
        }).next(function (e) {
          var o = e,
              s = n.docVersions.get(t);
          k(null !== s), (!o || o.version.compareTo(s) < 0) && (o = i.applyToRemoteDocument(t, o, n)) && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          r.addEntry(o, n.commitVersion);
        });
      }), s.next(function () {
        return t.Tn.removeMutationBatch(e, i);
      });
    }(n, t, e, i).next(function () {
      return i.apply(t);
    }).next(function () {
      return n.Tn.performConsistencyCheck(t);
    }).next(function () {
      return n.Kn.bn(t, r);
    });
  });
}
/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */

/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */


function Ki(t) {
  var e = C(t);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", function (t) {
    return e.Ge.getLastRemoteSnapshotVersion(t);
  });
}
/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */


function zi(t, e) {
  var n = C(t),
      r = e.snapshotVersion,
      i = n.Bn;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", function (t) {
    var o = n.Qn.newChangeBuffer({
      trackRemovals: !0
    }); // Reset newTargetDataByTargetMap in case this transaction gets re-run.

    i = n.Bn;
    var s = [];
    e.targetChanges.forEach(function (e, o) {
      var u = i.get(o);

      if (u) {
        // Only update the remote keys if the target is still active. This
        // ensures that we can persist the updated target data along with
        // the updated assignment.
        s.push(n.Ge.removeMatchingKeys(t, e.removedDocuments, o).next(function () {
          return n.Ge.addMatchingKeys(t, e.addedDocuments, o);
        }));
        var a = e.resumeToken; // Update the resume token if the change includes one.

        if (a.approximateByteSize() > 0) {
          var c = u.withResumeToken(a, r).withSequenceNumber(t.currentSequenceNumber);
          i = i.insert(o, c), // Update the target data if there are target changes (or if
          // sufficient time has passed since the last update).

          /**
          * Returns true if the newTargetData should be persisted during an update of
          * an active target. TargetData should always be persisted when a target is
          * being released and should not call this function.
          *
          * While the target is active, TargetData updates can be omitted when nothing
          * about the target has changed except metadata like the resume token or
          * snapshot version. Occasionally it's worth the extra write to prevent these
          * values from getting too stale after a crash, but this doesn't have to be
          * too frequent.
          */
          function (t, e, n) {
            // Always persist target data if we don't already have a resume token.
            return k(e.resumeToken.approximateByteSize() > 0), 0 === t.resumeToken.approximateByteSize() || // Don't allow resume token changes to be buffered indefinitely. This
            // allows us to be reasonably up-to-date after a crash and avoids needing
            // to loop over all active queries on shutdown. Especially in the browser
            // we may not get time to do anything interesting while the current tab is
            // closing.
            e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= 3e8 || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0;
          }(u, c, e) && s.push(n.Ge.updateTargetData(t, c));
        }
      }
    });
    var u = Ze(); // HACK: The only reason we allow a null snapshot version is so that we
    // can synthesize remote events when we get permission denied errors while
    // trying to resolve the state of a locally cached document that is in
    // limbo.

    if (e.documentUpdates.forEach(function (r, i) {
      e.resolvedLimboDocuments.has(r) && s.push(n.persistence.referenceDelegate.updateLimboDocument(t, r));
    }), // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
    // documents in advance in a single call.
    s.push(Qi(t, o, e.documentUpdates, r, void 0).next(function (t) {
      u = t;
    })), !r.isEqual(ie.min())) {
      var a = n.Ge.getLastRemoteSnapshotVersion(t).next(function (e) {
        return n.Ge.setTargetsMetadata(t, t.currentSequenceNumber, r);
      });
      s.push(a);
    }

    return Er.waitFor(s).next(function () {
      return o.apply(t);
    }).next(function () {
      return n.Kn.vn(t, u);
    });
  }).then(function (t) {
    return n.Bn = i, t;
  });
}
/**
 * Populates document change buffer with documents from backend or a bundle.
 * Returns the document changes resulting from applying those documents.
 *
 * @param txn - Transaction to use to read existing documents from storage.
 * @param documentBuffer - Document buffer to collect the resulted changes to be
 *        applied to storage.
 * @param documents - Documents to be applied.
 * @param globalVersion - A `SnapshotVersion` representing the read time if all
 *        documents have the same read time.
 * @param documentVersions - A DocumentKey-to-SnapshotVersion map if documents
 *        have their own read time.
 *
 * Note: this function will use `documentVersions` if it is defined;
 * when it is not defined, resorts to `globalVersion`.
 */


function Qi(t, e, n, r, // TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
// this parameter.
i) {
  var o = un();
  return n.forEach(function (t) {
    return o = o.add(t);
  }), e.getEntries(t, o).next(function (t) {
    var o = Ze();
    return n.forEach(function (n, s) {
      var u = t.get(n),
          a = (null == i ? void 0 : i.get(n)) || r; // Note: The order of the steps below is important, since we want
      // to ensure that rejected limbo resolutions (which fabricate
      // NoDocuments with SnapshotVersion.min()) never add documents to
      // cache.

      s instanceof wt && s.version.isEqual(ie.min()) ? ( // NoDocuments with SnapshotVersion.min() are used in manufactured
      // events. We remove these documents from cache since we lost
      // access.
      e.removeEntry(n, a), o = o.insert(n, s)) : null == u || s.version.compareTo(u.version) > 0 || 0 === s.version.compareTo(u.version) && u.hasPendingWrites ? (e.addEntry(s, a), o = o.insert(n, s)) : _("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", u.version, " Watch version:", s.version);
    }), o;
  })
  /**
  * Gets the mutation batch after the passed in batchId in the mutation queue
  * or null if empty.
  * @param afterBatchId - If provided, the batch to search after.
  * @returns The next mutation or null if there wasn't one.
  */
  ;
}

function Wi(t, e) {
  var n = C(t);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", function (t) {
    return void 0 === e && (e = -1), n.Tn.getNextMutationBatchAfterBatchId(t, e);
  });
}
/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */

/**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */


function Hi(t, e) {
  var n = C(t);
  return n.persistence.runTransaction("Allocate target", "readwrite", function (t) {
    var r;
    return n.Ge.getTargetData(t, e).next(function (i) {
      return i ? ( // This target has been listened to previously, so reuse the
      // previous targetID.
      // TODO(mcg): freshen last accessed date?
      r = i, Er.resolve(r)) : n.Ge.allocateTargetId(t).next(function (i) {
        return r = new Mr(e, i, 0
        /* Listen */
        , t.currentSequenceNumber), n.Ge.addTargetData(t, r).next(function () {
          return r;
        });
      });
    });
  }).then(function (t) {
    // If Multi-Tab is enabled, the existing target data may be newer than
    // the in-memory data
    var r = n.Bn.get(t.targetId);
    return (null === r || t.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.Bn = n.Bn.insert(t.targetId, t), n.qn.set(e, t.targetId)), t;
  });
}
/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
// Visible for testing.

/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.


function Yi(t, e, n) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var r, i, o, s;
    return (0, _tslib.__generator)(this, function (u) {
      switch (u.label) {
        case 0:
          r = C(t), i = r.Bn.get(e), o = n ? "readwrite" : "readwrite-primary", u.label = 1;

        case 1:
          return u.trys.push([1, 4,, 5]), n ? [3
          /*break*/
          , 3] : [4
          /*yield*/
          , r.persistence.runTransaction("Release target", o, function (t) {
            return r.persistence.referenceDelegate.removeTarget(t, i);
          })];

        case 2:
          u.sent(), u.label = 3;

        case 3:
          return [3
          /*break*/
          , 5];

        case 4:
          if (!Nr(s = u.sent())) throw s; // All `releaseTarget` does is record the final metadata state for the
          // target, but we've been recording this periodically during target
          // activity. If we lose this write this could cause a very slight
          // difference in the order of target deletion during GC, but we
          // don't define exact LRU semantics so this is acceptable.

          return _("LocalStore", "Failed to update sequence numbers for target " + e + ": " + s), [3
          /*break*/
          , 5];

        case 5:
          return r.Bn = r.Bn.remove(e), r.qn.delete(i.target), [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */


function Ji(t, e, n) {
  var r = C(t),
      i = ie.min(),
      o = un();
  return r.persistence.runTransaction("Execute query", "readonly", function (t) {
    return function (t, e, n) {
      var r = C(t),
          i = r.qn.get(n);
      return void 0 !== i ? Er.resolve(r.Bn.get(i)) : r.Ge.getTargetData(e, n);
    }(r, t, Jt(e)).next(function (e) {
      if (e) return i = e.lastLimboFreeSnapshotVersion, r.Ge.getMatchingKeysForTargetId(t, e.targetId).next(function (t) {
        o = t;
      });
    }).next(function () {
      return r.Ln.getDocumentsMatchingQuery(t, e, n ? i : ie.min(), n ? o : un());
    }).next(function (t) {
      return {
        documents: t,
        jn: o
      };
    });
  });
} // PORTING NOTE: Multi-Tab only.


function Xi(t, e) {
  var n = C(t),
      r = C(n.Ge),
      i = n.Bn.get(e);
  return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", function (t) {
    return r.yt(t, e).next(function (t) {
      return t ? t.target : null;
    });
  });
}
/**
 * Returns the set of documents that have been updated since the last call.
 * If this is the first call, returns the set of changes since client
 * initialization. Further invocations will return document that have changed
 * since the prior call.
 */
// PORTING NOTE: Multi-Tab only.


function $i(t) {
  var e = C(t);
  return e.persistence.runTransaction("Get new document changes", "readonly", function (t) {
    return function (t, e, n) {
      var r = C(t),
          i = Ze(),
          o = Ur(n),
          s = Ni(e),
          u = IDBKeyRange.lowerBound(o, !0);
      return s.qt({
        index: cr.readTimeIndex,
        range: u
      }, function (t, e) {
        // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
        // the documents directly since we want to keep sentinel deletes.
        var n = qr(r.D, e);
        i = i.insert(n.key, n), o = e.readTime;
      }).next(function () {
        return {
          En: i,
          readTime: Br(o)
        };
      });
    }(e.Qn, t, e.Un);
  }).then(function (t) {
    var n = t.En,
        r = t.readTime;
    return e.Un = r, n;
  });
}
/**
 * Reads the newest document change from persistence and moves the internal
 * synchronization marker forward so that calls to `getNewDocumentChanges()`
 * only return changes that happened after client initialization.
 */
// PORTING NOTE: Multi-Tab only.


function Zi(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var e;
    return (0, _tslib.__generator)(this, function (n) {
      return [2
      /*return*/
      , (e = C(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", function (t) {
        return function (t) {
          var e = Ni(t),
              n = ie.min(); // If there are no existing entries, we return SnapshotVersion.min().

          return e.qt({
            index: cr.readTimeIndex,
            reverse: !0
          }, function (t, e, r) {
            e.readTime && (n = Br(e.readTime)), r.done();
          }).next(function () {
            return n;
          });
        }(t);
      }).then(function (t) {
        e.Un = t;
      })];
    });
  });
}
/**
 * Creates a new target using the given bundle name, which will be used to
 * hold the keys of all documents from the bundle in query-document mappings.
 * This ensures that the loaded documents do not get garbage collected
 * right away.
 */

/**
 * Applies the documents from a bundle to the "ground-state" (remote)
 * documents.
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */


function to(t, e, n, r) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var i, o, s, u, a, c, h, f, l, d;
    return (0, _tslib.__generator)(this, function (p) {
      switch (p.label) {
        case 0:
          for (i = C(t), o = un(), s = Ze(), u = on(), a = 0, c = n; a < c.length; a++) {
            h = c[a], f = e.Gn(h.metadata.name), h.document && (o = o.add(f)), s = s.insert(f, e.zn(h)), u = u.insert(f, e.Hn(h.metadata.readTime));
          }

          return l = i.Qn.newChangeBuffer({
            trackRemovals: !0
          }), [4
          /*yield*/
          , Hi(i, function (t) {
            // It is OK that the path used for the query is not valid, because this will
            // not be read and queried.
            return Jt(Gt(z.fromString("__bundle__/docs/" + t)));
          }(r))];

        case 1:
          // Allocates a target to hold all document keys from the bundle, such that
          // they will not get garbage collected right away.
          return d = p.sent(), [2
          /*return*/
          , i.persistence.runTransaction("Apply bundle documents", "readwrite", function (t) {
            return Qi(t, l, s, ie.min(), u).next(function (e) {
              return l.apply(t), e;
            }).next(function (e) {
              return i.Ge.removeMatchingKeysForTargetId(t, d.targetId).next(function () {
                return i.Ge.addMatchingKeys(t, o, d.targetId);
              }).next(function () {
                return i.Kn.vn(t, e);
              });
            });
          })];
      }
    });
  });
}
/**
 * Returns a promise of a boolean to indicate if the given bundle has already
 * been loaded and the create time is newer than the current loading bundle.
 */

/**
 * Saves the given `NamedQuery` to local persistence.
 */


function eo(t, e, n) {
  return void 0 === n && (n = un()), (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var r, i;
    return (0, _tslib.__generator)(this, function (o) {
      switch (o.label) {
        case 0:
          return [4
          /*yield*/
          , Hi(t, Jt(Wr(e.bundledQuery)))];

        case 1:
          return r = o.sent(), [2
          /*return*/
          , (i = C(t)).persistence.runTransaction("Save named query", "readwrite", function (t) {
            var o = Sn(e.readTime); // Simply save the query itself if it is older than what the SDK already
            // has.

            if (r.snapshotVersion.compareTo(o) >= 0) return i.He.saveNamedQuery(t, e); // Update existing target data because the query from the bundle is newer.

            var s = r.withResumeToken(Y.EMPTY_BYTE_STRING, o);
            return i.Bn = i.Bn.insert(s.targetId, s), i.Ge.updateTargetData(t, s).next(function () {
              return i.Ge.removeMatchingKeysForTargetId(t, r.targetId);
            }).next(function () {
              return i.Ge.addMatchingKeys(t, n, r.targetId);
            }).next(function () {
              return i.He.saveNamedQuery(t, e);
            });
          })];
      }
    });
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var no =
/** @class */
function () {
  function t(t) {
    this.D = t, this.Jn = new Map(), this.Yn = new Map();
  }

  return t.prototype.getBundleMetadata = function (t, e) {
    return Er.resolve(this.Jn.get(e));
  }, t.prototype.saveBundleMetadata = function (t, e) {
    /** Decodes a BundleMetadata proto into a BundleMetadata object. */
    var n;
    return this.Jn.set(e.id, {
      id: (n = e).id,
      version: n.version,
      createTime: Sn(n.createTime)
    }), Er.resolve();
  }, t.prototype.getNamedQuery = function (t, e) {
    return Er.resolve(this.Yn.get(e));
  }, t.prototype.saveNamedQuery = function (t, e) {
    return this.Yn.set(e.name, function (t) {
      return {
        name: t.name,
        query: Wr(t.bundledQuery),
        readTime: Sn(t.readTime)
      };
    }(e)), Er.resolve();
  }, t;
}(),
    ro =
/** @class */
function () {
  function t() {
    // A set of outstanding references to a document sorted by key.
    this.Xn = new Je(io.Zn), // A set of outstanding references to a document sorted by target id.
    this.ts = new Je(io.es)
    /** Returns true if the reference set contains no references. */
    ;
  }

  return t.prototype.isEmpty = function () {
    return this.Xn.isEmpty();
  },
  /** Adds a reference to the given document key for the given ID. */
  t.prototype.addReference = function (t, e) {
    var n = new io(t, e);
    this.Xn = this.Xn.add(n), this.ts = this.ts.add(n);
  },
  /** Add references to the given document keys for the given ID. */
  t.prototype.ns = function (t, e) {
    var n = this;
    t.forEach(function (t) {
      return n.addReference(t, e);
    });
  },
  /**
   * Removes a reference to the given document key for the given
   * ID.
   */
  t.prototype.removeReference = function (t, e) {
    this.ss(new io(t, e));
  }, t.prototype.rs = function (t, e) {
    var n = this;
    t.forEach(function (t) {
      return n.removeReference(t, e);
    });
  },
  /**
   * Clears all references with a given ID. Calls removeRef() for each key
   * removed.
   */
  t.prototype.os = function (t) {
    var e = this,
        n = new H(new z([])),
        r = new io(n, t),
        i = new io(n, t + 1),
        o = [];
    return this.ts.forEachInRange([r, i], function (t) {
      e.ss(t), o.push(t.key);
    }), o;
  }, t.prototype.cs = function () {
    var t = this;
    this.Xn.forEach(function (e) {
      return t.ss(e);
    });
  }, t.prototype.ss = function (t) {
    this.Xn = this.Xn.delete(t), this.ts = this.ts.delete(t);
  }, t.prototype.us = function (t) {
    var e = new H(new z([])),
        n = new io(e, t),
        r = new io(e, t + 1),
        i = un();
    return this.ts.forEachInRange([n, r], function (t) {
      i = i.add(t.key);
    }), i;
  }, t.prototype.containsKey = function (t) {
    var e = new io(t, 0),
        n = this.Xn.firstAfterOrEqual(e);
    return null !== n && t.isEqual(n.key);
  }, t;
}(),
    io =
/** @class */
function () {
  function t(t, e) {
    this.key = t, this.hs = e
    /** Compare by key then by ID */
    ;
  }

  return t.Zn = function (t, e) {
    return H.comparator(t.key, e.key) || R(t.hs, e.hs);
  },
  /** Compare by ID then by key */
  t.es = function (t, e) {
    return R(t.hs, e.hs) || H.comparator(t.key, e.key);
  }, t;
}(),
    oo =
/** @class */
function () {
  function t(t, e) {
    this.Gt = t, this.referenceDelegate = e,
    /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
    this.Tn = [],
    /** Next value to use when assigning sequential IDs to each mutation batch. */
    this.ls = 1,
    /** An ordered mapping between documents and the mutations batch IDs. */
    this.fs = new Je(io.Zn);
  }

  return t.prototype.checkEmpty = function (t) {
    return Er.resolve(0 === this.Tn.length);
  }, t.prototype.addMutationBatch = function (t, e, n, r) {
    var i = this.ls;
    this.ls++, this.Tn.length > 0 && this.Tn[this.Tn.length - 1];
    var o = new Or(i, e, n, r);
    this.Tn.push(o); // Track references by document key and index collection parents.

    for (var s = 0, u = r; s < u.length; s++) {
      var a = u[s];
      this.fs = this.fs.add(new io(a.key, i)), this.Gt.addToCollectionParentIndex(t, a.key.path.popLast());
    }

    return Er.resolve(o);
  }, t.prototype.lookupMutationBatch = function (t, e) {
    return Er.resolve(this.ds(e));
  }, t.prototype.getNextMutationBatchAfterBatchId = function (t, e) {
    var n = e + 1,
        r = this.ws(n),
        i = r < 0 ? 0 : r; // The requested batchId may still be out of range so normalize it to the
    // start of the queue.

    return Er.resolve(this.Tn.length > i ? this.Tn[i] : null);
  }, t.prototype.getHighestUnacknowledgedBatchId = function () {
    return Er.resolve(0 === this.Tn.length ? -1 : this.ls - 1);
  }, t.prototype.getAllMutationBatches = function (t) {
    return Er.resolve(this.Tn.slice());
  }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function (t, e) {
    var n = this,
        r = new io(e, 0),
        i = new io(e, Number.POSITIVE_INFINITY),
        o = [];
    return this.fs.forEachInRange([r, i], function (t) {
      var e = n.ds(t.hs);
      o.push(e);
    }), Er.resolve(o);
  }, t.prototype.getAllMutationBatchesAffectingDocumentKeys = function (t, e) {
    var n = this,
        r = new Je(R);
    return e.forEach(function (t) {
      var e = new io(t, 0),
          i = new io(t, Number.POSITIVE_INFINITY);
      n.fs.forEachInRange([e, i], function (t) {
        r = r.add(t.hs);
      });
    }), Er.resolve(this._s(r));
  }, t.prototype.getAllMutationBatchesAffectingQuery = function (t, e) {
    // Use the query path as a prefix for testing if a document matches the
    // query.
    var n = e.path,
        r = n.length + 1,
        i = n; // Construct a document reference for actually scanning the index. Unlike
    // the prefix the document key in this reference must have an even number of
    // segments. The empty segment can be used a suffix of the query path
    // because it precedes all other segments in an ordered traversal.

    H.isDocumentKey(i) || (i = i.child(""));
    var o = new io(new H(i), 0),
        s = new Je(R); // Find unique batchIDs referenced by all documents potentially matching the
    // query.

    return this.fs.forEachWhile(function (t) {
      var e = t.key.path;
      return !!n.isPrefixOf(e) && ( // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      e.length === r && (s = s.add(t.hs)), !0);
    }, o), Er.resolve(this._s(s));
  }, t.prototype._s = function (t) {
    var e = this,
        n = []; // Construct an array of matching batches, sorted by batchID to ensure that
    // multiple mutations affecting the same document key are applied in order.

    return t.forEach(function (t) {
      var r = e.ds(t);
      null !== r && n.push(r);
    }), n;
  }, t.prototype.removeMutationBatch = function (t, e) {
    var n = this;
    k(0 === this.ys(e.batchId, "removed")), this.Tn.shift();
    var r = this.fs;
    return Er.forEach(e.mutations, function (i) {
      var o = new io(i.key, e.batchId);
      return r = r.delete(o), n.referenceDelegate.markPotentiallyOrphaned(t, i.key);
    }).next(function () {
      n.fs = r;
    });
  }, t.prototype.Xt = function (t) {// No-op since the memory mutation queue does not maintain a separate cache.
  }, t.prototype.containsKey = function (t, e) {
    var n = new io(e, 0),
        r = this.fs.firstAfterOrEqual(n);
    return Er.resolve(e.isEqual(r && r.key));
  }, t.prototype.performConsistencyCheck = function (t) {
    return this.Tn.length, Er.resolve();
  },
  /**
   * Finds the index of the given batchId in the mutation queue and asserts that
   * the resulting index is within the bounds of the queue.
   *
   * @param batchId - The batchId to search for
   * @param action - A description of what the caller is doing, phrased in passive
   * form (e.g. "acknowledged" in a routine that acknowledges batches).
   */
  t.prototype.ys = function (t, e) {
    return this.ws(t);
  },
  /**
   * Finds the index of the given batchId in the mutation queue. This operation
   * is O(1).
   *
   * @returns The computed index of the batch with the given batchId, based on
   * the state of the queue. Note this index can be negative if the requested
   * batchId has already been remvoed from the queue or past the end of the
   * queue if the batchId is larger than the last added batch.
   */
  t.prototype.ws = function (t) {
    return 0 === this.Tn.length ? 0 : t - this.Tn[0].batchId; // Examine the front of the queue to figure out the difference between the
    // batchId and indexes in the array. Note that since the queue is ordered
    // by batchId, if the first batch has a larger batchId then the requested
    // batchId doesn't exist in the queue.
  },
  /**
   * A version of lookupMutationBatch that doesn't return a promise, this makes
   * other functions that uses this code easier to read and more efficent.
   */
  t.prototype.ds = function (t) {
    var e = this.ws(t);
    return e < 0 || e >= this.Tn.length ? null : this.Tn[e];
  }, t;
}(),
    so =
/** @class */
function () {
  /**
   * @param sizer - Used to assess the size of a document. For eager GC, this is
   * expected to just return 0 to avoid unnecessarily doing the work of
   * calculating the size.
   */
  function t(t, e) {
    this.Gt = t, this.gs = e,
    /** Underlying cache of documents and their read times. */
    this.docs = new We(H.comparator),
    /** Size of all cached documents. */
    this.size = 0
    /**
    * Adds the supplied entry to the cache and updates the cache size as appropriate.
    *
    * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
    * returned by `newChangeBuffer()`.
    */
    ;
  }

  return t.prototype.addEntry = function (t, e, n) {
    var r = e.key,
        i = this.docs.get(r),
        o = i ? i.size : 0,
        s = this.gs(e);
    return this.docs = this.docs.insert(r, {
      maybeDocument: e,
      size: s,
      readTime: n
    }), this.size += s - o, this.Gt.addToCollectionParentIndex(t, r.path.popLast());
  },
  /**
   * Removes the specified entry from the cache and updates the cache size as appropriate.
   *
   * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  t.prototype.removeEntry = function (t) {
    var e = this.docs.get(t);
    e && (this.docs = this.docs.remove(t), this.size -= e.size);
  }, t.prototype.getEntry = function (t, e) {
    var n = this.docs.get(e);
    return Er.resolve(n ? n.maybeDocument : null);
  }, t.prototype.getEntries = function (t, e) {
    var n = this,
        r = tn();
    return e.forEach(function (t) {
      var e = n.docs.get(t);
      r = r.insert(t, e ? e.maybeDocument : null);
    }), Er.resolve(r);
  }, t.prototype.getDocumentsMatchingQuery = function (t, e, n) {
    for (var r = nn(), i = new H(e.path.child("")), o = this.docs.getIteratorFrom(i) // Documents are ordered by key, so we can use a prefix scan to narrow down
    // the documents we need to match the query against.
    ; o.hasNext();) {
      var s = o.getNext(),
          u = s.key,
          a = s.value,
          c = a.maybeDocument,
          h = a.readTime;
      if (!e.path.isPrefixOf(u.path)) break;
      h.compareTo(n) <= 0 || c instanceof gt && ee(e, c) && (r = r.insert(c.key, c));
    }

    return Er.resolve(r);
  }, t.prototype.ps = function (t, e) {
    return Er.forEach(this.docs, function (t) {
      return e(t);
    });
  }, t.prototype.newChangeBuffer = function (t) {
    // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
    // a separate changelog and does not need special handling for removals.
    return new uo(this);
  }, t.prototype.getSize = function (t) {
    return Er.resolve(this.size);
  }, t;
}(),
    uo =
/** @class */
function (t) {
  function e(e) {
    var n = this;
    return (n = t.call(this) || this).Ve = e, n;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.applyChanges = function (t) {
    var e = this,
        n = [];
    return this.changes.forEach(function (r, i) {
      i && i.maybeDocument ? n.push(e.Ve.addEntry(t, i.maybeDocument, e.getReadTime(r))) : e.Ve.removeEntry(r);
    }), Er.waitFor(n);
  }, e.prototype.getFromCache = function (t, e) {
    return this.Ve.getEntry(t, e);
  }, e.prototype.getAllFromCache = function (t, e) {
    return this.Ve.getEntries(t, e);
  }, e;
}(Ti),
    ao =
/** @class */
function () {
  function t(t) {
    this.persistence = t,
    /**
         * Maps a target to the data about that target
         */
    this.Es = new Ei(function (t) {
      return Tt(t);
    }, _t),
    /** The last received snapshot version. */
    this.lastRemoteSnapshotVersion = ie.min(),
    /** The highest numbered target ID encountered. */
    this.highestTargetId = 0,
    /** The highest sequence number encountered. */
    this.Ts = 0,
    /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
    this.Is = new ro(), this.targetCount = 0, this.As = hi.ee();
  }

  return t.prototype.forEachTarget = function (t, e) {
    return this.Es.forEach(function (t, n) {
      return e(n);
    }), Er.resolve();
  }, t.prototype.getLastRemoteSnapshotVersion = function (t) {
    return Er.resolve(this.lastRemoteSnapshotVersion);
  }, t.prototype.getHighestSequenceNumber = function (t) {
    return Er.resolve(this.Ts);
  }, t.prototype.allocateTargetId = function (t) {
    return this.highestTargetId = this.As.next(), Er.resolve(this.highestTargetId);
  }, t.prototype.setTargetsMetadata = function (t, e, n) {
    return n && (this.lastRemoteSnapshotVersion = n), e > this.Ts && (this.Ts = e), Er.resolve();
  }, t.prototype.re = function (t) {
    this.Es.set(t.target, t);
    var e = t.targetId;
    e > this.highestTargetId && (this.As = new hi(e), this.highestTargetId = e), t.sequenceNumber > this.Ts && (this.Ts = t.sequenceNumber);
  }, t.prototype.addTargetData = function (t, e) {
    return this.re(e), this.targetCount += 1, Er.resolve();
  }, t.prototype.updateTargetData = function (t, e) {
    return this.re(e), Er.resolve();
  }, t.prototype.removeTargetData = function (t, e) {
    return this.Es.delete(e.target), this.Is.os(e.targetId), this.targetCount -= 1, Er.resolve();
  }, t.prototype.removeTargets = function (t, e, n) {
    var r = this,
        i = 0,
        o = [];
    return this.Es.forEach(function (s, u) {
      u.sequenceNumber <= e && null === n.get(u.targetId) && (r.Es.delete(s), o.push(r.removeMatchingKeysForTargetId(t, u.targetId)), i++);
    }), Er.waitFor(o).next(function () {
      return i;
    });
  }, t.prototype.getTargetCount = function (t) {
    return Er.resolve(this.targetCount);
  }, t.prototype.getTargetData = function (t, e) {
    var n = this.Es.get(e) || null;
    return Er.resolve(n);
  }, t.prototype.addMatchingKeys = function (t, e, n) {
    return this.Is.ns(e, n), Er.resolve();
  }, t.prototype.removeMatchingKeys = function (t, e, n) {
    this.Is.rs(e, n);
    var r = this.persistence.referenceDelegate,
        i = [];
    return r && e.forEach(function (e) {
      i.push(r.markPotentiallyOrphaned(t, e));
    }), Er.waitFor(i);
  }, t.prototype.removeMatchingKeysForTargetId = function (t, e) {
    return this.Is.os(e), Er.resolve();
  }, t.prototype.getMatchingKeysForTargetId = function (t, e) {
    var n = this.Is.us(e);
    return Er.resolve(n);
  }, t.prototype.containsKey = function (t, e) {
    return Er.resolve(this.Is.containsKey(e));
  }, t;
}(),
    co =
/** @class */
function () {
  /**
   * The constructor accepts a factory for creating a reference delegate. This
   * allows both the delegate and this instance to have strong references to
   * each other without having nullable fields that would then need to be
   * checked or asserted on every access.
   */
  function t(t, e) {
    var n = this;
    this.Rs = {}, this.Me = new I(0), this.Le = !1, this.Le = !0, this.referenceDelegate = t(this), this.Ge = new ao(this), this.Gt = new Xr(), this.ze = function (t, e) {
      return new so(t, function (t) {
        return n.referenceDelegate.bs(t);
      });
    }(this.Gt), this.D = new Fr(e), this.He = new no(this.D);
  }

  return t.prototype.start = function () {
    return Promise.resolve();
  }, t.prototype.shutdown = function () {
    // No durable state to ensure is closed on shutdown.
    return this.Le = !1, Promise.resolve();
  }, Object.defineProperty(t.prototype, "started", {
    get: function get() {
      return this.Le;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.setDatabaseDeletedListener = function () {// No op.
  }, t.prototype.setNetworkEnabled = function () {// No op.
  }, t.prototype.getIndexManager = function () {
    return this.Gt;
  }, t.prototype.getMutationQueue = function (t) {
    var e = this.Rs[t.toKey()];
    return e || (e = new oo(this.Gt, this.referenceDelegate), this.Rs[t.toKey()] = e), e;
  }, t.prototype.getTargetCache = function () {
    return this.Ge;
  }, t.prototype.getRemoteDocumentCache = function () {
    return this.ze;
  }, t.prototype.getBundleCache = function () {
    return this.He;
  }, t.prototype.runTransaction = function (t, e, n) {
    var r = this;

    _("MemoryPersistence", "Starting transaction:", t);

    var i = new ho(this.Me.next());
    return this.referenceDelegate.vs(), n(i).next(function (t) {
      return r.referenceDelegate.Ps(i).next(function () {
        return t;
      });
    }).toPromise().then(function (t) {
      return i.raiseOnCommittedEvent(), t;
    });
  }, t.prototype.Vs = function (t, e) {
    return Er.or(Object.values(this.Rs).map(function (n) {
      return function () {
        return n.containsKey(t, e);
      };
    }));
  }, t;
}(),
    ho =
/** @class */
function (t) {
  function e(e) {
    var n = this;
    return (n = t.call(this) || this).currentSequenceNumber = e, n;
  }

  return (0, _tslib.__extends)(e, t), e;
}(br),
    fo =
/** @class */
function () {
  function t(t) {
    this.persistence = t,
    /** Tracks all documents that are active in Query views. */
    this.Ss = new ro(),
    /** The list of documents that are potentially GCed after each transaction. */
    this.Ds = null;
  }

  return t.Cs = function (e) {
    return new t(e);
  }, Object.defineProperty(t.prototype, "xs", {
    get: function get() {
      if (this.Ds) return this.Ds;
      throw A();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.addReference = function (t, e, n) {
    return this.Ss.addReference(n, e), this.xs.delete(n.toString()), Er.resolve();
  }, t.prototype.removeReference = function (t, e, n) {
    return this.Ss.removeReference(n, e), this.xs.add(n.toString()), Er.resolve();
  }, t.prototype.markPotentiallyOrphaned = function (t, e) {
    return this.xs.add(e.toString()), Er.resolve();
  }, t.prototype.removeTarget = function (t, e) {
    var n = this;
    this.Ss.os(e.targetId).forEach(function (t) {
      return n.xs.add(t.toString());
    });
    var r = this.persistence.getTargetCache();
    return r.getMatchingKeysForTargetId(t, e.targetId).next(function (t) {
      t.forEach(function (t) {
        return n.xs.add(t.toString());
      });
    }).next(function () {
      return r.removeTargetData(t, e);
    });
  }, t.prototype.vs = function () {
    this.Ds = new Set();
  }, t.prototype.Ps = function (t) {
    var e = this,
        n = this.persistence.getRemoteDocumentCache().newChangeBuffer(); // Remove newly orphaned documents.

    return Er.forEach(this.xs, function (r) {
      var i = H.fromPath(r);
      return e.Ns(t, i).next(function (t) {
        t || n.removeEntry(i);
      });
    }).next(function () {
      return e.Ds = null, n.apply(t);
    });
  }, t.prototype.updateLimboDocument = function (t, e) {
    var n = this;
    return this.Ns(t, e).next(function (t) {
      t ? n.xs.delete(e.toString()) : n.xs.add(e.toString());
    });
  }, t.prototype.bs = function (t) {
    // For eager GC, we don't care about the document size, there are no size thresholds.
    return 0;
  }, t.prototype.Ns = function (t, e) {
    var n = this;
    return Er.or([function () {
      return Er.resolve(n.Ss.containsKey(e));
    }, function () {
      return n.persistence.getTargetCache().containsKey(t, e);
    }, function () {
      return n.persistence.Vs(t, e);
    }]);
  }, t;
}(),
    lo =
/** @class */
function () {
  function t(t) {
    this.uid = t;
  }

  return t.prototype.isAuthenticated = function () {
    return null != this.uid;
  },
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  t.prototype.toKey = function () {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }, t.prototype.isEqual = function (t) {
    return t.uid === this.uid;
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */

/** Assembles the key for a client state in WebStorage */


function po(t, e) {
  return "firestore_clients_" + t + "_" + e;
} // The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.

/** Assembles the key for a mutation batch in WebStorage */


function yo(t, e, n) {
  var r = "firestore_mutations_" + t + "_" + n;
  return e.isAuthenticated() && (r += "_" + e.uid), r;
} // The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>

/** Assembles the key for a query state in WebStorage */


function vo(t, e) {
  return "firestore_targets_" + t + "_" + e;
} // The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>

/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing

/** A user with a null UID. */


lo.UNAUTHENTICATED = new lo(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
lo.GOOGLE_CREDENTIALS = new lo("google-credentials-uid"), lo.FIRST_PARTY = new lo("first-party-uid");

var mo =
/** @class */
function () {
  function t(t, e, n, r) {
    this.user = t, this.batchId = e, this.state = n, this.error = r
    /**
    * Parses a MutationMetadata from its JSON representation in WebStorage.
    * Logs a warning and returns null if the format of the data is not valid.
    */
    ;
  }

  return t.$s = function (e, n, r) {
    var i,
        o = JSON.parse(r),
        s = "object" == _typeof(o) && -1 !== ["pending", "acknowledged", "rejected"].indexOf(o.state) && (void 0 === o.error || "object" == _typeof(o.error));

    return s && o.error && (s = "string" == typeof o.error.message && "string" == typeof o.error.code) && (i = new G(o.error.code, o.error.message)), s ? new t(e, n, o.state, i) : (S("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), null);
  }, t.prototype.Fs = function () {
    var t = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t);
  }, t;
}(),
    go =
/** @class */
function () {
  function t(t, e, n) {
    this.targetId = t, this.state = e, this.error = n
    /**
    * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
    * Logs a warning and returns null if the format of the data is not valid.
    */
    ;
  }

  return t.$s = function (e, n) {
    var r,
        i = JSON.parse(n),
        o = "object" == _typeof(i) && -1 !== ["not-current", "current", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == _typeof(i.error));

    return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (r = new G(i.error.code, i.error.message)), o ? new t(e, i.state, r) : (S("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), null);
  }, t.prototype.Fs = function () {
    var t = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t);
  }, t;
}(),
    wo =
/** @class */
function () {
  function t(t, e) {
    this.clientId = t, this.activeTargetIds = e
    /**
    * Parses a RemoteClientState from the JSON representation in WebStorage.
    * Logs a warning and returns null if the format of the data is not valid.
    */
    ;
  }

  return t.$s = function (e, n) {
    for (var r = JSON.parse(n), i = "object" == _typeof(r) && r.activeTargetIds instanceof Array, o = cn(), s = 0; i && s < r.activeTargetIds.length; ++s) {
      i = B(r.activeTargetIds[s]), o = o.add(r.activeTargetIds[s]);
    }

    return i ? new t(e, o) : (S("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), null);
  }, t;
}(),
    bo =
/** @class */
function () {
  function t(t, e) {
    this.clientId = t, this.onlineState = e
    /**
    * Parses a SharedOnlineState from its JSON representation in WebStorage.
    * Logs a warning and returns null if the format of the data is not valid.
    */
    ;
  }

  return t.$s = function (e) {
    var n = JSON.parse(e);
    return "object" == _typeof(n) && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (S("SharedClientState", "Failed to parse online state: " + e), null);
  }, t;
}(),
    Io =
/** @class */
function () {
  function t() {
    this.activeTargetIds = cn();
  }

  return t.prototype.Os = function (t) {
    this.activeTargetIds = this.activeTargetIds.add(t);
  }, t.prototype.ks = function (t) {
    this.activeTargetIds = this.activeTargetIds.delete(t);
  },
  /**
   * Converts this entry into a JSON-encoded format we can use for WebStorage.
   * Does not encode `clientId` as it is part of the key in WebStorage.
   */
  t.prototype.Fs = function () {
    var t = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t);
  }, t;
}(),
    Eo =
/** @class */
function () {
  function t(t, e, n, r, i) {
    this.window = t, this.Fe = e, this.persistenceKey = n, this.Ms = r, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.Ls = this.Bs.bind(this), this.qs = new We(R), this.started = !1,
    /**
         * Captures WebStorage events that occur before `start()` is called. These
         * events are replayed once `WebStorageSharedClientState` is started.
         */
    this.Us = []; // Escape the special characters mentioned here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

    var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    this.storage = this.window.localStorage, this.currentUser = i, this.Qs = po(this.persistenceKey, this.Ms), this.Ks =
    /** Assembles the key for the current sequence number. */
    function (t) {
      return "firestore_sequence_number_" + t;
    }(this.persistenceKey), this.qs = this.qs.insert(this.Ms, new Io()), this.Ws = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.js = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.Gs = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.zs =
    /** Assembles the key for the online state of the primary tab. */
    function (t) {
      return "firestore_online_state_" + t;
    }(this.persistenceKey), this.Hs = function (t) {
      return "firestore_bundle_loaded_" + t;
    }(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
    // storage observer during initialization. This ensures that we collect
    // events before other components populate their initial state (during their
    // respective start() calls). Otherwise, we might for example miss a
    // mutation that is added after LocalStore's start() processed the existing
    // mutations but before we observe WebStorage events.
    this.window.addEventListener("storage", this.Ls);
  }
  /** Returns 'true' if WebStorage is available in the current environment. */


  return t.At = function (t) {
    return !(!t || !t.localStorage);
  }, t.prototype.start = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var t,
          e,
          n,
          r,
          i,
          o,
          s,
          u,
          a,
          c,
          h,
          f = this;
      return (0, _tslib.__generator)(this, function (l) {
        switch (l.label) {
          case 0:
            return [4
            /*yield*/
            , this.syncEngine.gn()];

          case 1:
            for (t = l.sent(), e = 0, n = t; e < n.length; e++) {
              (r = n[e]) !== this.Ms && (i = this.getItem(po(this.persistenceKey, r))) && (o = wo.$s(r, i)) && (this.qs = this.qs.insert(o.clientId, o));
            }

            for (this.Js(), (s = this.storage.getItem(this.zs)) && (u = this.Ys(s)) && this.Xs(u), a = 0, c = this.Us; a < c.length; a++) {
              h = c[a], this.Bs(h);
            }

            return this.Us = [], // Register a window unload hook to remove the client metadata entry from
            // WebStorage even if `shutdown()` was not called.
            this.window.addEventListener("unload", function () {
              return f.shutdown();
            }), this.started = !0, [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.writeSequenceNumber = function (t) {
    this.setItem(this.Ks, JSON.stringify(t));
  }, t.prototype.getAllActiveQueryTargets = function () {
    return this.Zs(this.qs);
  }, t.prototype.isActiveQueryTarget = function (t) {
    var e = !1;
    return this.qs.forEach(function (n, r) {
      r.activeTargetIds.has(t) && (e = !0);
    }), e;
  }, t.prototype.addPendingMutation = function (t) {
    this.ti(t, "pending");
  }, t.prototype.updateMutationState = function (t, e, n) {
    this.ti(t, e, n), // Once a final mutation result is observed by other clients, they no longer
    // access the mutation's metadata entry. Since WebStorage replays events
    // in order, it is safe to delete the entry right after updating it.
    this.ei(t);
  }, t.prototype.addLocalQueryTarget = function (t) {
    var e = "not-current"; // Lookup an existing query state if the target ID was already registered
    // by another tab

    if (this.isActiveQueryTarget(t)) {
      var n = this.storage.getItem(vo(this.persistenceKey, t));

      if (n) {
        var r = go.$s(t, n);
        r && (e = r.state);
      }
    }

    return this.ni.Os(t), this.Js(), e;
  }, t.prototype.removeLocalQueryTarget = function (t) {
    this.ni.ks(t), this.Js();
  }, t.prototype.isLocalQueryTarget = function (t) {
    return this.ni.activeTargetIds.has(t);
  }, t.prototype.clearQueryState = function (t) {
    this.removeItem(vo(this.persistenceKey, t));
  }, t.prototype.updateQueryState = function (t, e, n) {
    this.si(t, e, n);
  }, t.prototype.handleUserChange = function (t, e, n) {
    var r = this;
    e.forEach(function (t) {
      r.ei(t);
    }), this.currentUser = t, n.forEach(function (t) {
      r.addPendingMutation(t);
    });
  }, t.prototype.setOnlineState = function (t) {
    this.ii(t);
  }, t.prototype.notifyBundleLoaded = function () {
    this.ri();
  }, t.prototype.shutdown = function () {
    this.started && (this.window.removeEventListener("storage", this.Ls), this.removeItem(this.Qs), this.started = !1);
  }, t.prototype.getItem = function (t) {
    var e = this.storage.getItem(t);
    return _("SharedClientState", "READ", t, e), e;
  }, t.prototype.setItem = function (t, e) {
    _("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
  }, t.prototype.removeItem = function (t) {
    _("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
  }, t.prototype.Bs = function (t) {
    var e = this,
        n = t; // Note: The function is typed to take Event to be interface-compatible with
    // `Window.addEventListener`.

    if (n.storageArea === this.storage) {
      if (_("SharedClientState", "EVENT", n.key, n.newValue), n.key === this.Qs) return void S("Received WebStorage notification for local change. Another client might have garbage-collected our state");
      this.Fe.enqueueRetryable(function () {
        return (0, _tslib.__awaiter)(e, void 0, void 0, function () {
          var t, e, r, i, o, s;
          return (0, _tslib.__generator)(this, function (u) {
            if (this.started) {
              if (null !== n.key) if (this.Ws.test(n.key)) {
                if (null == n.newValue) return t = this.oi(n.key), [2
                /*return*/
                , this.ci(t, null)];
                if (e = this.ai(n.key, n.newValue)) return [2
                /*return*/
                , this.ci(e.clientId, e)];
              } else if (this.js.test(n.key)) {
                if (null !== n.newValue && (r = this.ui(n.key, n.newValue))) return [2
                /*return*/
                , this.hi(r)];
              } else if (this.Gs.test(n.key)) {
                if (null !== n.newValue && (i = this.li(n.key, n.newValue))) return [2
                /*return*/
                , this.fi(i)];
              } else if (n.key === this.zs) {
                if (null !== n.newValue && (o = this.Ys(n.newValue))) return [2
                /*return*/
                , this.Xs(o)];
              } else if (n.key === this.Ks) (s = function (t) {
                var e = I.o;
                if (null != t) try {
                  var n = JSON.parse(t);
                  k("number" == typeof n), e = n;
                } catch (t) {
                  S("SharedClientState", "Failed to read sequence number from WebStorage", t);
                }
                return e;
              }(n.newValue)) !== I.o && this.sequenceNumberHandler(s);else if (n.key === this.Hs) return [2
              /*return*/
              , this.syncEngine.di()];
            } else this.Us.push(n);

            return [2
            /*return*/
            ];
          });
        });
      });
    }
  }, Object.defineProperty(t.prototype, "ni", {
    get: function get() {
      return this.qs.get(this.Ms);
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.Js = function () {
    this.setItem(this.Qs, this.ni.Fs());
  }, t.prototype.ti = function (t, e, n) {
    var r = new mo(this.currentUser, t, e, n),
        i = yo(this.persistenceKey, this.currentUser, t);
    this.setItem(i, r.Fs());
  }, t.prototype.ei = function (t) {
    var e = yo(this.persistenceKey, this.currentUser, t);
    this.removeItem(e);
  }, t.prototype.ii = function (t) {
    var e = {
      clientId: this.Ms,
      onlineState: t
    };
    this.storage.setItem(this.zs, JSON.stringify(e));
  }, t.prototype.si = function (t, e, n) {
    var r = vo(this.persistenceKey, t),
        i = new go(t, e, n);
    this.setItem(r, i.Fs());
  }, t.prototype.ri = function () {
    this.setItem(this.Hs, "value-not-used");
  },
  /**
   * Parses a client state key in WebStorage. Returns null if the key does not
   * match the expected key format.
   */
  t.prototype.oi = function (t) {
    var e = this.Ws.exec(t);
    return e ? e[1] : null;
  },
  /**
   * Parses a client state in WebStorage. Returns 'null' if the value could not
   * be parsed.
   */
  t.prototype.ai = function (t, e) {
    var n = this.oi(t);
    return wo.$s(n, e);
  },
  /**
   * Parses a mutation batch state in WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  t.prototype.ui = function (t, e) {
    var n = this.js.exec(t),
        r = Number(n[1]),
        i = void 0 !== n[2] ? n[2] : null;
    return mo.$s(new lo(i), r, e);
  },
  /**
   * Parses a query target state from WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  t.prototype.li = function (t, e) {
    var n = this.Gs.exec(t),
        r = Number(n[1]);
    return go.$s(r, e);
  },
  /**
   * Parses an online state from WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  t.prototype.Ys = function (t) {
    return bo.$s(t);
  }, t.prototype.hi = function (t) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (e) {
        return t.user.uid === this.currentUser.uid ? [2
        /*return*/
        , this.syncEngine.wi(t.batchId, t.state, t.error)] : (_("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), [2
        /*return*/
        ]);
      });
    });
  }, t.prototype.fi = function (t) {
    return this.syncEngine._i(t.targetId, t.state, t.error);
  }, t.prototype.ci = function (t, e) {
    var n = this,
        r = e ? this.qs.insert(t, e) : this.qs.remove(t),
        i = this.Zs(this.qs),
        o = this.Zs(r),
        s = [],
        u = [];
    return o.forEach(function (t) {
      i.has(t) || s.push(t);
    }), i.forEach(function (t) {
      o.has(t) || u.push(t);
    }), this.syncEngine.mi(s, u).then(function () {
      n.qs = r;
    });
  }, t.prototype.Xs = function (t) {
    // We check whether the client that wrote this online state is still active
    // by comparing its client ID to the list of clients kept active in
    // IndexedDb. If a client does not update their IndexedDb client state
    // within 5 seconds, it is considered inactive and we don't emit an online
    // state event.
    this.qs.get(t.clientId) && this.onlineStateHandler(t.onlineState);
  }, t.prototype.Zs = function (t) {
    var e = cn();
    return t.forEach(function (t, n) {
      e = e.unionWith(n.activeTargetIds);
    }), e;
  }, t;
}(),
    To =
/** @class */
function () {
  function t() {
    this.yi = new Io(), this.gi = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }

  return t.prototype.addPendingMutation = function (t) {// No op.
  }, t.prototype.updateMutationState = function (t, e, n) {// No op.
  }, t.prototype.addLocalQueryTarget = function (t) {
    return this.yi.Os(t), this.gi[t] || "not-current";
  }, t.prototype.updateQueryState = function (t, e, n) {
    this.gi[t] = e;
  }, t.prototype.removeLocalQueryTarget = function (t) {
    this.yi.ks(t);
  }, t.prototype.isLocalQueryTarget = function (t) {
    return this.yi.activeTargetIds.has(t);
  }, t.prototype.clearQueryState = function (t) {
    delete this.gi[t];
  }, t.prototype.getAllActiveQueryTargets = function () {
    return this.yi.activeTargetIds;
  }, t.prototype.isActiveQueryTarget = function (t) {
    return this.yi.activeTargetIds.has(t);
  }, t.prototype.start = function () {
    return this.yi = new Io(), Promise.resolve();
  }, t.prototype.handleUserChange = function (t, e, n) {// No op.
  }, t.prototype.setOnlineState = function (t) {// No op.
  }, t.prototype.shutdown = function () {}, t.prototype.writeSequenceNumber = function (t) {}, t.prototype.notifyBundleLoaded = function () {// No op.
  }, t;
}(),
    _o =
/** @class */
function () {
  function t() {}

  return t.prototype.pi = function (t) {// No-op.
  }, t.prototype.shutdown = function () {// No-op.
  }, t;
}(),
    So =
/** @class */
function () {
  function t() {
    var t = this;
    this.Ei = function () {
      return t.Ti();
    }, this.Ii = function () {
      return t.Ai();
    }, this.Ri = [], this.bi();
  }

  return t.prototype.pi = function (t) {
    this.Ri.push(t);
  }, t.prototype.shutdown = function () {
    window.removeEventListener("online", this.Ei), window.removeEventListener("offline", this.Ii);
  }, t.prototype.bi = function () {
    window.addEventListener("online", this.Ei), window.addEventListener("offline", this.Ii);
  }, t.prototype.Ti = function () {
    _("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");

    for (var t = 0, e = this.Ri; t < e.length; t++) {
      (0, e[t])(0
      /* AVAILABLE */
      );
    }
  }, t.prototype.Ai = function () {
    _("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");

    for (var t = 0, e = this.Ri; t < e.length; t++) {
      (0, e[t])(1
      /* UNAVAILABLE */
      );
    }
  }, // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.

  /** Checks that all used attributes of window are available. */
  t.At = function () {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }, t;
}(),
    Do = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery"
},
    No =
/** @class */
function () {
  function t(t) {
    this.vi = t.vi, this.Pi = t.Pi;
  }

  return t.prototype.Vi = function (t) {
    this.Si = t;
  }, t.prototype.Di = function (t) {
    this.Ci = t;
  }, t.prototype.onMessage = function (t) {
    this.xi = t;
  }, t.prototype.close = function () {
    this.Pi();
  }, t.prototype.send = function (t) {
    this.vi(t);
  }, t.prototype.Ni = function () {
    this.Si();
  }, t.prototype.$i = function (t) {
    this.Ci(t);
  }, t.prototype.Fi = function (t) {
    this.xi(t);
  }, t;
}(),
    Ao =
/** @class */
function (t) {
  function e(e) {
    var n = this;
    return (n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling, n.autoDetectLongPolling = e.autoDetectLongPolling, n;
  }
  /**
   * Base class for all Rest-based connections to the backend (WebChannel and
   * HTTP).
   */


  return (0, _tslib.__extends)(e, t), e.prototype.qi = function (t, e, n, r) {
    return new Promise(function (i, o) {
      var s = new _webchannelWrapper.XhrIo();
      s.listenOnce(_webchannelWrapper.EventType.COMPLETE, function () {
        try {
          switch (s.getLastErrorCode()) {
            case _webchannelWrapper.ErrorCode.NO_ERROR:
              var e = s.getResponseJson();
              _("Connection", "XHR received:", JSON.stringify(e)), i(e);
              break;

            case _webchannelWrapper.ErrorCode.TIMEOUT:
              _("Connection", 'RPC "' + t + '" timed out'), o(new G(j.DEADLINE_EXCEEDED, "Request time out"));
              break;

            case _webchannelWrapper.ErrorCode.HTTP_ERROR:
              var n = s.getStatus();

              if (_("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", s.getResponseText()), n > 0) {
                var r = s.getResponseJson().error;

                if (r && r.status && r.message) {
                  var u = function (t) {
                    var e = t.toLowerCase().replace(/_/g, "-");
                    return Object.values(j).indexOf(e) >= 0 ? e : j.UNKNOWN;
                  }(r.status);

                  o(new G(u, r.message));
                } else o(new G(j.UNKNOWN, "Server responded with status " + s.getStatus()));
              } else // If we received an HTTP_ERROR but there's no status code,
                // it's most probably a connection issue
                o(new G(j.UNAVAILABLE, "Connection failed."));

              break;

            default:
              A();
          }
        } finally {
          _("Connection", 'RPC "' + t + '" completed.');
        }
      });
      var u = JSON.stringify(r);
      s.send(e, "POST", u, n, 15);
    });
  }, e.prototype.Qi = function (t, e) {
    var n = [this.Oi, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
        c = (0, _webchannelWrapper.createWebChannelTransport)(),
        h = (0, _webchannelWrapper.getStatEventTarget)(),
        f = {
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database
      },
      sendRawJson: !0,
      supportsCrossDomainXhr: !0,
      internalChannelParams: {
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    };
    this.Bi(f.initMessageHeaders, e), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the httpHeadersOverwriteParam option to specify that
    // the headers should instead be encoded into a special "$httpHeaders" query
    // parameter, which is recognized by the webchannel backend. This is
    // formally defined here:
    // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
    // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
    // doesn't have an Origin header. So we have to exclude a few browser environments that are
    // known to (sometimes) not include an Origin. See
    // https://github.com/firebase/firebase-js-sdk/issues/1491.
    (0, _util.isMobileCordova)() || (0, _util.isReactNative)() || (0, _util.isElectron)() || (0, _util.isIE)() || (0, _util.isUWP)() || (0, _util.isBrowserExtension)() || (f.httpHeadersOverwriteParam = "$httpHeaders");
    var m = n.join("");

    _("Connection", "Creating WebChannel: " + m, f);

    var g = c.createWebChannel(m, f),
        w = !1,
        b = !1,
        I = new No({
      vi: function vi(t) {
        b ? _("Connection", "Not sending because WebChannel is closed:", t) : (w || (_("Connection", "Opening WebChannel transport."), g.open(), w = !0), _("Connection", "WebChannel sending:", t), g.send(t));
      },
      Pi: function Pi() {
        return g.close();
      }
    }),
        E = function E(t, e, n) {
      // TODO(dimond): closure typing seems broken because WebChannel does
      // not implement goog.events.Listenable
      t.listen(e, function (t) {
        try {
          n(t);
        } catch (t) {
          setTimeout(function () {
            throw t;
          }, 0);
        }
      });
    }; // WebChannel supports sending the first message with the handshake - saving
    // a network round trip. However, it will have to call send in the same
    // JS event loop as open. In order to enforce this, we delay actually
    // opening the WebChannel until send is called. Whether we have called
    // open is tracked with this variable.
    // Closure events are guarded and exceptions are swallowed, so catch any
    // exception and rethrow using a setTimeout so they become visible again.
    // Note that eventually this function could go away if we are confident
    // enough the code is exception free.


    return E(g, _webchannelWrapper.WebChannel.EventType.OPEN, function () {
      b || _("Connection", "WebChannel transport opened.");
    }), E(g, _webchannelWrapper.WebChannel.EventType.CLOSE, function () {
      b || (b = !0, _("Connection", "WebChannel transport closed"), I.$i());
    }), E(g, _webchannelWrapper.WebChannel.EventType.ERROR, function (t) {
      b || (b = !0, D("Connection", "WebChannel transport errored:", t), I.$i(new G(j.UNAVAILABLE, "The operation could not be completed")));
    }), E(g, _webchannelWrapper.WebChannel.EventType.MESSAGE, function (t) {
      var e;

      if (!b) {
        var n = t.data[0];
        k(!!n); // TODO(b/35143891): There is a bug in One Platform that caused errors
        // (and only errors) to be wrapped in an extra array. To be forward
        // compatible with the bug we need to check either condition. The latter
        // can be removed once the fix has been rolled out.
        // Use any because msgData.error is not typed.

        var r = n,
            i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);

        if (i) {
          _("Connection", "WebChannel received error:", i); // error.status will be a string like 'OK' or 'NOT_FOUND'.


          var o = i.status,
              s =
          /**
          * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
          *
          * @returns The Code equivalent to the given status string or undefined if
          *     there is no match.
          */
          function (t) {
            // lookup by string
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var e = Ue[t];
            if (void 0 !== e) return Qe(e);
          }(o),
              u = i.message;

          void 0 === s && (s = j.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), // Mark closed so no further events are propagated
          b = !0, I.$i(new G(s, u)), g.close();
        } else _("Connection", "WebChannel received:", n), I.Fi(n);
      }
    }), E(h, _webchannelWrapper.Event.STAT_EVENT, function (t) {
      t.stat === _webchannelWrapper.Stat.PROXY ? _("Connection", "Detected buffering proxy") : t.stat === _webchannelWrapper.Stat.NOPROXY && _("Connection", "Detected no buffering proxy");
    }), setTimeout(function () {
      // Technically we could/should wait for the WebChannel opened event,
      // but because we want to send the first message with the WebChannel
      // handshake we pretend the channel opened here (asynchronously), and
      // then delay the actual open until the first message is sent.
      I.Ni();
    }, 0), I;
  }, e;
}(
/** @class */
function () {
  function t(t) {
    this.databaseInfo = t, this.databaseId = t.databaseId;
    var e = t.ssl ? "https" : "http";
    this.Oi = e + "://" + t.host, this.ki = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents";
  }

  return t.prototype.Mi = function (t, e, n, r) {
    var i = this.Li(t, e);

    _("RestConnection", "Sending: ", i, n);

    var o = {};
    return this.Bi(o, r), this.qi(t, i, o, n).then(function (t) {
      return _("RestConnection", "Received: ", t), t;
    }, function (e) {
      throw D("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), e;
    });
  }, t.prototype.Ui = function (t, e, n, r) {
    // The REST API automatically aggregates all of the streamed results, so we
    // can just use the normal invoke() method.
    return this.Mi(t, e, n, r);
  },
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  t.prototype.Bi = function (t, e) {
    if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.3.1", // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    t["Content-Type"] = "text/plain", e) for (var n in e.authHeaders) {
      e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
    }
  }, t.prototype.Li = function (t, e) {
    var n = Do[t];
    return this.Oi + "/v1/" + e + ":" + n;
  }, t;
}());
/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Initializes the WebChannelConnection for the browser. */

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** The Platform's 'window' implementation or null if not available. */


function ko() {
  // `window` is not always available, e.g. in ReactNative and WebWorkers.
  // eslint-disable-next-line no-restricted-globals
  return "undefined" != typeof window ? window : null;
}
/** The Platform's 'document' implementation or null if not available. */


function Co() {
  // `document` is not always available, e.g. in ReactNative and WebWorkers.
  // eslint-disable-next-line no-restricted-globals
  return "undefined" != typeof document ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function xo(t) {
  return new In(t,
  /* useProto3Json= */
  !0);
}
/**
 * An instance of the Platform's 'TextEncoder' implementation.
 */

/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */


var Lo =
/** @class */
function () {
  function t(
  /**
   * The AsyncQueue to run backoff operations on.
   */
  t,
  /**
   * The ID to use when scheduling backoff operations on the AsyncQueue.
   */
  e,
  /**
   * The initial delay (used as the base delay on the first retry attempt).
   * Note that jitter will still be applied, so the actual delay could be as
   * little as 0.5*initialDelayMs.
   */
  n
  /**
   * The multiplier to use to determine the extended base delay after each
   * attempt.
   */
  , r
  /**
   * The maximum base delay after which no further backoff is performed.
   * Note that jitter will still be applied, so the actual delay could be as
   * much as 1.5*maxDelayMs.
   */
  , i) {
    void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.Fe = t, this.timerId = e, this.Ki = n, this.Wi = r, this.ji = i, this.Gi = 0, this.zi = null,
    /** The last backoff attempt, as epoch milliseconds. */
    this.Hi = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */


  return t.prototype.reset = function () {
    this.Gi = 0;
  },
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  t.prototype.Ji = function () {
    this.Gi = this.ji;
  },
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  t.prototype.Yi = function (t) {
    var e = this; // Cancel any pending backoff operation.

    this.cancel(); // First schedule using the current base (which may be 0 and should be
    // honored as such).

    var n = Math.floor(this.Gi + this.Xi()),
        r = Math.max(0, Date.now() - this.Hi),
        i = Math.max(0, n - r); // Guard against lastAttemptTime being in the future due to a clock change.

    i > 0 && _("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Gi + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.zi = this.Fe.enqueueAfterDelay(this.timerId, i, function () {
      return e.Hi = Date.now(), t();
    }), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.Gi *= this.Wi, this.Gi < this.Ki && (this.Gi = this.Ki), this.Gi > this.ji && (this.Gi = this.ji);
  }, t.prototype.Zi = function () {
    null !== this.zi && (this.zi.skipDelay(), this.zi = null);
  }, t.prototype.cancel = function () {
    null !== this.zi && (this.zi.cancel(), this.zi = null);
  },
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  t.prototype.Xi = function () {
    return (Math.random() - .5) * this.Gi;
  }, t;
}(),
    Ro =
/** @class */
function () {
  function t(t, e, n, r, i, o) {
    this.Fe = t, this.tr = n, this.er = r, this.nr = i, this.listener = o, this.state = 0
    /* Initial */
    ,
    /**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */
    this.sr = 0, this.ir = null, this.stream = null, this.rr = new Lo(t, e)
    /**
    * Returns true if start() has been called and no error has occurred. True
    * indicates the stream is open or in the process of opening (which
    * encompasses respecting backoff, getting auth tokens, and starting the
    * actual RPC). Use isOpen() to determine if the stream is open and ready for
    * outbound requests.
    */
    ;
  }

  return t.prototype.cr = function () {
    return 1
    /* Starting */
    === this.state || 2
    /* Open */
    === this.state || 4
    /* Backoff */
    === this.state;
  },
  /**
   * Returns true if the underlying RPC is open (the onOpen() listener has been
   * called) and the stream is ready for outbound requests.
   */
  t.prototype.ar = function () {
    return 2
    /* Open */
    === this.state;
  },
  /**
   * Starts the RPC. Only allowed if isStarted() returns false. The stream is
   * not immediately ready for use: onOpen() will be invoked when the RPC is
   * ready for outbound requests, at which point isOpen() will return true.
   *
   * When start returns, isStarted() will return true.
   */
  t.prototype.start = function () {
    3
    /* Error */
    !== this.state ? this.auth() : this.ur();
  },
  /**
   * Stops the RPC. This call is idempotent and allowed regardless of the
   * current isStarted() state.
   *
   * When stop returns, isStarted() and isOpen() will both return false.
   */
  t.prototype.stop = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (t) {
        switch (t.label) {
          case 0:
            return this.cr() ? [4
            /*yield*/
            , this.close(0
            /* Initial */
            )] : [3
            /*break*/
            , 2];

          case 1:
            t.sent(), t.label = 2;

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * After an error the stream will usually back off on the next attempt to
   * start it. If the error warrants an immediate restart of the stream, the
   * sender can use this to indicate that the receiver should not back off.
   *
   * Each error will call the onClose() listener. That function can decide to
   * inhibit backoff if required.
   */
  t.prototype.hr = function () {
    this.state = 0
    /* Initial */
    , this.rr.reset();
  },
  /**
   * Marks this stream as idle. If no further actions are performed on the
   * stream for one minute, the stream will automatically close itself and
   * notify the stream's onClose() handler with Status.OK. The stream will then
   * be in a !isStarted() state, requiring the caller to start the stream again
   * before further use.
   *
   * Only streams that are in state 'Open' can be marked idle, as all other
   * states imply pending network operations.
   */
  t.prototype.lr = function () {
    var t = this; // Starts the idle time if we are in state 'Open' and are not yet already
    // running a timer (in which case the previous idle timeout still applies).

    this.ar() && null === this.ir && (this.ir = this.Fe.enqueueAfterDelay(this.tr, 6e4, function () {
      return t.dr();
    }));
  },
  /** Sends a message to the underlying stream. */
  t.prototype.wr = function (t) {
    this._r(), this.stream.send(t);
  },
  /** Called by the idle timer when the stream should close due to inactivity. */
  t.prototype.dr = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (t) {
        return this.ar() ? [2
        /*return*/
        , this.close(0
        /* Initial */
        )] : [2
        /*return*/
        ];
      });
    });
  },
  /** Marks the stream as active again. */
  t.prototype._r = function () {
    this.ir && (this.ir.cancel(), this.ir = null);
  },
  /**
   * Closes the stream and cleans up as necessary:
   *
   * * closes the underlying GRPC stream;
   * * calls the onClose handler with the given 'error';
   * * sets internal stream state to 'finalState';
   * * adjusts the backoff timer based on the error
   *
   * A new stream can be opened by calling start().
   *
   * @param finalState - the intended state of the stream after closing.
   * @param error - the error the connection was closed with.
   */
  t.prototype.close = function (t, e) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (n) {
        switch (n.label) {
          case 0:
            // Notify the listener that the stream closed.
            // Cancel any outstanding timers (they're guaranteed not to execute).
            return this._r(), this.rr.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
            // underlying stream), guaranteeing they won't execute.
            this.sr++, 3
            /* Error */
            !== t ? // If this is an intentional close ensure we don't delay our next connection attempt.
            this.rr.reset() : e && e.code === j.RESOURCE_EXHAUSTED ? ( // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
            S(e.toString()), S("Using maximum backoff delay to prevent overloading the backend."), this.rr.Ji()) : e && e.code === j.UNAUTHENTICATED && // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
            // just expired.
            this.nr.invalidateToken(), // Clean up the underlying stream because we are no longer interested in events.
            null !== this.stream && (this.mr(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
            // inhibit backoff or otherwise manipulate the state in its non-started state.
            this.state = t, [4
            /*yield*/
            , this.listener.Di(e)];

          case 1:
            // Cancel any outstanding timers (they're guaranteed not to execute).
            // Notify the listener that the stream closed.
            return n.sent(), [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Can be overridden to perform additional cleanup before the stream is closed.
   * Calling super.tearDown() is not required.
   */
  t.prototype.mr = function () {}, t.prototype.auth = function () {
    var t = this;
    this.state = 1
    /* Starting */
    ;
    var e = this.yr(this.sr),
        n = this.sr; // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.

    this.nr.getToken().then(function (e) {
      // Stream can be stopped while waiting for authentication.
      // TODO(mikelehen): We really should just use dispatchIfNotClosed
      // and let this dispatch onto the queue, but that opened a spec test can
      // of worms that I don't want to deal with in this PR.
      t.sr === n && // Normally we'd have to schedule the callback on the AsyncQueue.
      // However, the following calls are safe to be called outside the
      // AsyncQueue since they don't chain asynchronous calls
      t.gr(e);
    }, function (n) {
      e(function () {
        var e = new G(j.UNKNOWN, "Fetching auth token failed: " + n.message);
        return t.pr(e);
      });
    });
  }, t.prototype.gr = function (t) {
    var e = this,
        n = this.yr(this.sr);
    this.stream = this.Er(t), this.stream.Vi(function () {
      n(function () {
        return e.state = 2
        /* Open */
        , e.listener.Vi();
      });
    }), this.stream.Di(function (t) {
      n(function () {
        return e.pr(t);
      });
    }), this.stream.onMessage(function (t) {
      n(function () {
        return e.onMessage(t);
      });
    });
  }, t.prototype.ur = function () {
    var t = this;
    this.state = 4
    /* Backoff */
    , this.rr.Yi(function () {
      return (0, _tslib.__awaiter)(t, void 0, void 0, function () {
        return (0, _tslib.__generator)(this, function (t) {
          return this.state = 0
          /* Initial */
          , this.start(), [2
          /*return*/
          ];
        });
      });
    });
  }, // Visible for tests
  t.prototype.pr = function (t) {
    // In theory the stream could close cleanly, however, in our current model
    // we never expect this to happen because if we stop a stream ourselves,
    // this callback will never be called. To prevent cases where we retry
    // without a backoff accidentally, we set the stream to error in all cases.
    return _("PersistentStream", "close with error: " + t), this.stream = null, this.close(3
    /* Error */
    , t);
  },
  /**
   * Returns a "dispatcher" function that dispatches operations onto the
   * AsyncQueue but only runs them if closeCount remains unchanged. This allows
   * us to turn auth / stream callbacks into no-ops if the stream is closed /
   * re-opened, etc.
   */
  t.prototype.yr = function (t) {
    var e = this;
    return function (n) {
      e.Fe.enqueueAndForget(function () {
        return e.sr === t ? n() : (_("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
      });
    };
  }, t;
}(),
    Oo =
/** @class */
function (t) {
  function e(e, n, r, i, o) {
    var s = this;
    return (s = t.call(this, e, "listen_stream_connection_backoff"
    /* ListenStreamConnectionBackoff */
    , "listen_stream_idle"
    /* ListenStreamIdle */
    , n, r, o) || this).D = i, s;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.Er = function (t) {
    return this.er.Qi("Listen", t);
  }, e.prototype.onMessage = function (t) {
    // A successful response means the stream is healthy
    this.rr.reset();

    var e = function (t, e) {
      var n;

      if ("targetChange" in e) {
        e.targetChange; // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
        // if unset

        var r = function (t) {
          return "NO_CHANGE" === t ? 0
          /* NoChange */
          : "ADD" === t ? 1
          /* Added */
          : "REMOVE" === t ? 2
          /* Removed */
          : "CURRENT" === t ? 3
          /* Current */
          : "RESET" === t ? 4
          /* Reset */
          : A();
        }(e.targetChange.targetChangeType || "NO_CHANGE"),
            i = e.targetChange.targetIds || [],
            o = function (t, e) {
          return t.V ? (k(void 0 === e || "string" == typeof e), Y.fromBase64String(e || "")) : (k(void 0 === e || e instanceof Uint8Array), Y.fromUint8Array(e || new Uint8Array()));
        }(t, e.targetChange.resumeToken),
            s = (u = e.targetChange.cause) && function (t) {
          var e = void 0 === t.code ? j.UNKNOWN : Qe(t.code);
          return new G(e, t.message || "");
        }(u);

        n = new pn(r, i, o, s || null);
      } else if ("documentChange" in e) {
        e.documentChange, (r = e.documentChange).document, r.document.name, r.document.updateTime, i = kn(t, r.document.name), o = Sn(r.document.updateTime);
        var u = new se({
          mapValue: {
            fields: r.document.fields
          }
        }),
            a = (s = new gt(i, o, u, {}), r.targetIds || []),
            c = r.removedTargetIds || [];
        n = new ln(a, c, s.key, s);
      } else if ("documentDelete" in e) e.documentDelete, (r = e.documentDelete).document, i = kn(t, r.document), o = r.readTime ? Sn(r.readTime) : ie.min(), u = new wt(i, o), s = r.removedTargetIds || [], n = new ln([], s, u.key, u);else if ("documentRemove" in e) e.documentRemove, (r = e.documentRemove).document, i = kn(t, r.document), o = r.removedTargetIds || [], n = new ln([], o, i, null);else {
        if (!("filter" in e)) return A();
        e.filter;
        var h = e.filter;
        h.targetId, r = h.count || 0, i = new Ke(r), o = h.targetId, n = new dn(o, i);
      }

      return n;
    }(this.D, t),
        n = function (t) {
      // We have only reached a consistent snapshot for the entire stream if there
      // is a read_time set and it applies to all targets (i.e. the list of
      // targets is empty). The backend is guaranteed to send such responses.
      if (!("targetChange" in t)) return ie.min();
      var e = t.targetChange;
      return e.targetIds && e.targetIds.length ? ie.min() : e.readTime ? Sn(e.readTime) : ie.min();
    }(t);

    return this.listener.Tr(e, n);
  },
  /**
   * Registers interest in the results of the given target. If the target
   * includes a resumeToken it will be included in the request. Results that
   * affect the target will be streamed back as WatchChange messages that
   * reference the targetId.
   */
  e.prototype.Ir = function (t) {
    var e = {};
    e.database = Ln(this.D), e.addTarget = function (t, e) {
      var n,
          r = e.target;
      return (n = St(r) ? {
        documents: qn(t, r)
      } : {
        query: Vn(t, r)
      }).targetId = e.targetId, e.resumeToken.approximateByteSize() > 0 ? n.resumeToken = Tn(t, e.resumeToken) : e.snapshotVersion.compareTo(ie.min()) > 0 && ( // TODO(wuandy): Consider removing above check because it is most likely true.
      // Right now, many tests depend on this behaviour though (leaving min() out
      // of serialization).
      n.readTime = En(t, e.snapshotVersion.toTimestamp())), n;
    }(this.D, t);

    var n = function (t, e) {
      var n = function (t, e) {
        switch (e) {
          case 0
          /* Listen */
          :
            return null;

          case 1
          /* ExistenceFilterMismatch */
          :
            return "existence-filter-mismatch";

          case 2
          /* LimboResolution */
          :
            return "limbo-document";

          default:
            return A();
        }
      }(0, e.purpose);

      return null == n ? null : {
        "goog-listen-tags": n
      };
    }(this.D, t);

    n && (e.labels = n), this.wr(e);
  },
  /**
   * Unregisters interest in the results of the target associated with the
   * given targetId.
   */
  e.prototype.Ar = function (t) {
    var e = {};
    e.database = Ln(this.D), e.removeTarget = t, this.wr(e);
  }, e;
}(Ro),
    Po =
/** @class */
function (t) {
  function e(e, n, r, i, o) {
    var s = this;
    return (s = t.call(this, e, "write_stream_connection_backoff"
    /* WriteStreamConnectionBackoff */
    , "write_stream_idle"
    /* WriteStreamIdle */
    , n, r, o) || this).D = i, s.Rr = !1, s;
  }

  return (0, _tslib.__extends)(e, t), Object.defineProperty(e.prototype, "br", {
    /**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */
    get: function get() {
      return this.Rr;
    },
    enumerable: !1,
    configurable: !0
  }), // Override of PersistentStream.start
  e.prototype.start = function () {
    this.Rr = !1, this.lastStreamToken = void 0, t.prototype.start.call(this);
  }, e.prototype.mr = function () {
    this.Rr && this.vr([]);
  }, e.prototype.Er = function (t) {
    return this.er.Qi("Write", t);
  }, e.prototype.onMessage = function (t) {
    if ( // Always capture the last stream token.
    k(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Rr) {
      // A successful first write response means the stream is healthy,
      // Note, that we could consider a successful handshake healthy, however,
      // the write itself might be causing an error we want to back off from.
      this.rr.reset();

      var e = function (t, e) {
        return t && t.length > 0 ? (k(void 0 !== e), t.map(function (t) {
          return function (t, e) {
            // NOTE: Deletes don't have an updateTime.
            var n = t.updateTime ? Sn(t.updateTime) : Sn(e);
            return n.isEqual(ie.min()) && ( // The Firestore Emulator currently returns an update time of 0 for
            // deletes of non-existing documents (rather than null). This breaks the
            // test "get deleted doc while offline with source=cache" as NoDocuments
            // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
            // TODO(#2149): Remove this when Emulator is fixed
            n = Sn(e)), new Se(n, t.transformResults || []);
          }(t, e);
        })) : [];
      }(t.writeResults, t.commitTime),
          n = Sn(t.commitTime);

      return this.listener.Pr(n, e);
    } // The first response is always the handshake response


    return k(!t.writeResults || 0 === t.writeResults.length), this.Rr = !0, this.listener.Vr();
  },
  /**
   * Sends an initial streamToken to the server, performing the handshake
   * required to make the StreamingWrite RPC work. Subsequent
   * calls should wait until onHandshakeComplete was called.
   */
  e.prototype.Sr = function () {
    // TODO(dimond): Support stream resumption. We intentionally do not set the
    // stream token on the handshake, ignoring any stream token we might have.
    var t = {};
    t.database = Ln(this.D), this.wr(t);
  },
  /** Sends a group of mutations to the Firestore backend to apply. */
  e.prototype.vr = function (t) {
    var e = this,
        n = {
      streamToken: this.lastStreamToken,
      writes: t.map(function (t) {
        return Mn(e.D, t);
      })
    };
    this.wr(n);
  }, e;
}(Ro),
    Mo =
/** @class */
function (t) {
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this) || this).credentials = e, i.er = n, i.D = r, i.Dr = !1, i;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.Cr = function () {
    if (this.Dr) throw new G(j.FAILED_PRECONDITION, "The client has already been terminated.");
  },
  /** Gets an auth token and invokes the provided RPC. */
  e.prototype.Mi = function (t, e, n) {
    var r = this;
    return this.Cr(), this.credentials.getToken().then(function (i) {
      return r.er.Mi(t, e, n, i);
    }).catch(function (t) {
      throw t.code === j.UNAUTHENTICATED && r.credentials.invalidateToken(), t;
    });
  },
  /** Gets an auth token and invokes the provided RPC with streamed results. */
  e.prototype.Ui = function (t, e, n) {
    var r = this;
    return this.Cr(), this.credentials.getToken().then(function (i) {
      return r.er.Ui(t, e, n, i);
    }).catch(function (t) {
      throw t.code === j.UNAUTHENTICATED && r.credentials.invalidateToken(), t;
    });
  }, e.prototype.terminate = function () {
    this.Dr = !1;
  }, e;
}(function () {}),
    Fo =
/** @class */
function () {
  function t(t, e) {
    this.asyncQueue = t, this.onlineStateHandler = e,
    /** The current OnlineState. */
    this.state = "Unknown"
    /* Unknown */
    ,
    /**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */
    this.Nr = 0,
    /**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */
    this.$r = null,
    /**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */
    this.Fr = !0
    /**
    * Called by RemoteStore when a watch stream is started (including on each
    * backoff attempt).
    *
    * If this is the first attempt, it sets the OnlineState to Unknown and starts
    * the onlineStateTimer.
    */
    ;
  }

  return t.prototype.Or = function () {
    var t = this;
    0 === this.Nr && (this.kr("Unknown"
    /* Unknown */
    ), this.$r = this.asyncQueue.enqueueAfterDelay("online_state_timeout"
    /* OnlineStateTimeout */
    , 1e4, function () {
      return t.$r = null, t.Mr("Backend didn't respond within 10 seconds."), t.kr("Offline"
      /* Offline */
      ), Promise.resolve();
    }));
  },
  /**
   * Updates our OnlineState as appropriate after the watch stream reports a
   * failure. The first failure moves us to the 'Unknown' state. We then may
   * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
   * actually transition to the 'Offline' state.
   */
  t.prototype.Lr = function (t) {
    "Online"
    /* Online */
    === this.state ? this.kr("Unknown"
    /* Unknown */
    ) : (this.Nr++, this.Nr >= 1 && (this.Br(), this.Mr("Connection failed 1 times. Most recent error: " + t.toString()), this.kr("Offline"
    /* Offline */
    )));
  },
  /**
   * Explicitly sets the OnlineState to the specified state.
   *
   * Note that this resets our timers / failure counters, etc. used by our
   * Offline heuristics, so must not be used in place of
   * handleWatchStreamStart() and handleWatchStreamFailure().
   */
  t.prototype.set = function (t) {
    this.Br(), this.Nr = 0, "Online"
    /* Online */
    === t && ( // We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    this.Fr = !1), this.kr(t);
  }, t.prototype.kr = function (t) {
    t !== this.state && (this.state = t, this.onlineStateHandler(t));
  }, t.prototype.Mr = function (t) {
    var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
    this.Fr ? (S(e), this.Fr = !1) : _("OnlineStateTracker", e);
  }, t.prototype.Br = function () {
    null !== this.$r && (this.$r.cancel(), this.$r = null);
  }, t;
}(),
    qo = function qo(
/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
t,
/** The client-side proxy for interacting with the backend. */
e, n, r, i) {
  var o = this;
  this.localStore = t, this.datastore = e, this.asyncQueue = n, this.remoteSyncer = {},
  /**
           * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
           * LocalStore via fillWritePipeline() and have or will send to the write
           * stream.
           *
           * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
           * restart the write stream. When the stream is established the writes in the
           * pipeline will be sent in order.
           *
           * Writes remain in writePipeline until they are acknowledged by the backend
           * and thus will automatically be re-sent if the stream is interrupted /
           * restarted before they're acknowledged.
           *
           * Write responses from the backend are linked to their originating request
           * purely based on order, and so we can just shift() writes from the front of
           * the writePipeline as we receive responses.
           */
  this.qr = [],
  /**
           * A mapping of watched targets that the client cares about tracking and the
           * user has explicitly called a 'listen' for this target.
           *
           * These targets may or may not have been sent to or acknowledged by the
           * server. On re-establishing the listen stream, these targets should be sent
           * to the server. The targets removed with unlistens are removed eagerly
           * without waiting for confirmation from the listen stream.
           */
  this.Ur = new Map(),
  /**
           * A set of reasons for why the RemoteStore may be offline. If empty, the
           * RemoteStore may start its network connections.
           */
  this.Qr = new Set(),
  /**
           * Event handlers that get called when the network is disabled or enabled.
           *
           * PORTING NOTE: These functions are used on the Web client to create the
           * underlying streams (to support tree-shakeable streams). On Android and iOS,
           * the streams are created during construction of RemoteStore.
           */
  this.Kr = [], this.Wr = i, this.Wr.pi(function (t) {
    n.enqueueAndForget(function () {
      return (0, _tslib.__awaiter)(o, void 0, void 0, function () {
        return (0, _tslib.__generator)(this, function (t) {
          switch (t.label) {
            case 0:
              return Wo(this) ? (_("RemoteStore", "Restarting streams for network reachability change."), [4
              /*yield*/
              , function (t) {
                return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
                  var e;
                  return (0, _tslib.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (e = C(t)).Qr.add(4
                        /* ConnectivityChange */
                        ), [4
                        /*yield*/
                        , Uo(e)];

                      case 1:
                        return n.sent(), e.jr.set("Unknown"
                        /* Unknown */
                        ), e.Qr.delete(4
                        /* ConnectivityChange */
                        ), [4
                        /*yield*/
                        , Vo(e)];

                      case 2:
                        return n.sent(), [2
                        /*return*/
                        ];
                    }
                  });
                });
              }(this)]) : [3
              /*break*/
              , 2];

            case 1:
              t.sent(), t.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    });
  }), this.jr = new Fo(n, r);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */


function Vo(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var e, n;
    return (0, _tslib.__generator)(this, function (r) {
      switch (r.label) {
        case 0:
          if (!Wo(t)) return [3
          /*break*/
          , 4];
          e = 0, n = t.Kr, r.label = 1;

        case 1:
          return e < n.length ? [4
          /*yield*/
          , (0, n[e])(
          /* enabled= */
          !0)] : [3
          /*break*/
          , 4];

        case 2:
          r.sent(), r.label = 3;

        case 3:
          return e++, [3
          /*break*/
          , 1];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */


function Uo(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var e, n;
    return (0, _tslib.__generator)(this, function (r) {
      switch (r.label) {
        case 0:
          e = 0, n = t.Kr, r.label = 1;

        case 1:
          return e < n.length ? [4
          /*yield*/
          , (0, n[e])(
          /* enabled= */
          !1)] : [3
          /*break*/
          , 4];

        case 2:
          r.sent(), r.label = 3;

        case 3:
          return e++, [3
          /*break*/
          , 1];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */


function Bo(t, e) {
  var n = C(t);
  n.Ur.has(e.targetId) || ( // Mark this as something the client is currently listening for.
  n.Ur.set(e.targetId, e), Qo(n) ? // The listen will be sent in onWatchStreamOpen
  zo(n) : as(n).ar() && Go(n, e));
}
/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */


function jo(t, e) {
  var n = C(t),
      r = as(n);
  n.Ur.delete(e), r.ar() && Ko(n, e), 0 === n.Ur.size && (r.ar() ? r.lr() : Wo(n) && // Revert to OnlineState.Unknown if the watch stream is not open and we
  // have no listeners, since without any listens to send we cannot
  // confirm if the stream is healthy and upgrade to OnlineState.Online.
  n.jr.set("Unknown"
  /* Unknown */
  ));
}
/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */


function Go(t, e) {
  t.Gr.H(e.targetId), as(t).Ir(e)
  /**
  * We need to increment the expected number of pending responses we're due
  * from watch so we wait for the removal on the server before we process any
  * messages from this target.
  */
  ;
}

function Ko(t, e) {
  t.Gr.H(e), as(t).Ar(e);
}

function zo(t) {
  t.Gr = new vn({
    getRemoteKeysForTarget: function getRemoteKeysForTarget(e) {
      return t.remoteSyncer.getRemoteKeysForTarget(e);
    },
    yt: function yt(e) {
      return t.Ur.get(e) || null;
    }
  }), as(t).start(), t.jr.Or()
  /**
  * Returns whether the watch stream should be started because it's necessary
  * and has not yet been started.
  */
  ;
}

function Qo(t) {
  return Wo(t) && !as(t).cr() && t.Ur.size > 0;
}

function Wo(t) {
  return 0 === C(t).Qr.size;
}

function Ho(t) {
  t.Gr = void 0;
}

function Yo(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    return (0, _tslib.__generator)(this, function (e) {
      return t.Ur.forEach(function (e, n) {
        Go(t, e);
      }), [2
      /*return*/
      ];
    });
  });
}

function Jo(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    return (0, _tslib.__generator)(this, function (n) {
      return Ho(t), // If we still need the watch stream, retry the connection.
      Qo(t) ? (t.jr.Lr(e), zo(t)) : // No need to restart watch stream because there are no active targets.
      // The online state is set to unknown because there is no active attempt
      // at establishing a connection
      t.jr.set("Unknown"
      /* Unknown */
      ), [2
      /*return*/
      ];
    });
  });
}

function Xo(t, e, n) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var r, i, o;
    return (0, _tslib.__generator)(this, function (s) {
      switch (s.label) {
        case 0:
          if (t.jr.set("Online"
          /* Online */
          ), !(e instanceof pn && 2
          /* Removed */
          === e.state && e.cause)) // Mark the client as online since we got a message from the server
            return [3
            /*break*/
            , 6];
          s.label = 1;

        case 1:
          return s.trys.push([1, 3,, 5]), [4
          /*yield*/
          ,
          /** Handles an error on a target */
          function (t, e) {
            return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
              var n, r, i, o;
              return (0, _tslib.__generator)(this, function (s) {
                switch (s.label) {
                  case 0:
                    n = e.cause, r = 0, i = e.targetIds, s.label = 1;

                  case 1:
                    return r < i.length ? (o = i[r], t.Ur.has(o) ? [4
                    /*yield*/
                    , t.remoteSyncer.rejectListen(o, n)] : [3
                    /*break*/
                    , 3]) : [3
                    /*break*/
                    , 5];

                  case 2:
                    s.sent(), t.Ur.delete(o), t.Gr.removeTarget(o), s.label = 3;

                  case 3:
                    s.label = 4;

                  case 4:
                    return r++, [3
                    /*break*/
                    , 1];

                  case 5:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }(t, e)];

        case 2:
          return s.sent(), [3
          /*break*/
          , 5];

        case 3:
          return r = s.sent(), _("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), r), [4
          /*yield*/
          , $o(t, r)];

        case 4:
          return s.sent(), [3
          /*break*/
          , 5];

        case 5:
          return [3
          /*break*/
          , 13];

        case 6:
          if (e instanceof ln ? t.Gr.st(e) : e instanceof dn ? t.Gr.ht(e) : t.Gr.ot(e), n.isEqual(ie.min())) return [3
          /*break*/
          , 13];
          s.label = 7;

        case 7:
          return s.trys.push([7, 11,, 13]), [4
          /*yield*/
          , Ki(t.localStore)];

        case 8:
          return i = s.sent(), n.compareTo(i) >= 0 ? [4
          /*yield*/
          ,
          /**
           * Takes a batch of changes from the Datastore, repackages them as a
           * RemoteEvent, and passes that on to the listener, which is typically the
           * SyncEngine.
           */
          function (t, e) {
            var n = t.Gr.dt(e); // Update in-memory resume tokens. LocalStore will update the
            // persistent view of these when applying the completed RemoteEvent.

            return n.targetChanges.forEach(function (n, r) {
              if (n.resumeToken.approximateByteSize() > 0) {
                var i = t.Ur.get(r); // A watched target might have been removed already.

                i && t.Ur.set(r, i.withResumeToken(n.resumeToken, e));
              }
            }), // Re-establish listens for the targets that have been invalidated by
            // existence filter mismatches.
            n.targetMismatches.forEach(function (e) {
              var n = t.Ur.get(e);

              if (n) {
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                t.Ur.set(e, n.withResumeToken(Y.EMPTY_BYTE_STRING, n.snapshotVersion)), // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                Ko(t, e); // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).

                var r = new Mr(n.target, e, 1
                /* ExistenceFilterMismatch */
                , n.sequenceNumber);
                Go(t, r);
              }
            }), t.remoteSyncer.applyRemoteEvent(n);
          }(t, n)] : [3
          /*break*/
          , 10];
        // We have received a target change with a global snapshot if the snapshot
        // version is not equal to SnapshotVersion.min().

        case 9:
          // We have received a target change with a global snapshot if the snapshot
          // version is not equal to SnapshotVersion.min().
          s.sent(), s.label = 10;

        case 10:
          return [3
          /*break*/
          , 13];

        case 11:
          return _("RemoteStore", "Failed to raise snapshot:", o = s.sent()), [4
          /*yield*/
          , $o(t, o)];

        case 12:
          return s.sent(), [3
          /*break*/
          , 13];

        case 13:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */


function $o(t, e, n) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var r = this;
    return (0, _tslib.__generator)(this, function (i) {
      switch (i.label) {
        case 0:
          if (!Nr(e)) throw e; // Disable network and raise offline snapshots

          return t.Qr.add(1
          /* IndexedDbFailed */
          ), [4
          /*yield*/
          , Uo(t)];

        case 1:
          // Disable network and raise offline snapshots
          return i.sent(), t.jr.set("Offline"
          /* Offline */
          ), n || ( // Use a simple read operation to determine if IndexedDB recovered.
          // Ideally, we would expose a health check directly on SimpleDb, but
          // RemoteStore only has access to persistence through LocalStore.
          n = function n() {
            return Ki(t.localStore);
          }), // Probe IndexedDB periodically and re-enable network
          t.asyncQueue.enqueueRetryable(function () {
            return (0, _tslib.__awaiter)(r, void 0, void 0, function () {
              return (0, _tslib.__generator)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return _("RemoteStore", "Retrying IndexedDB access"), [4
                    /*yield*/
                    , n()];

                  case 1:
                    return e.sent(), t.Qr.delete(1
                    /* IndexedDbFailed */
                    ), [4
                    /*yield*/
                    , Vo(t)];

                  case 2:
                    return e.sent(), [2
                    /*return*/
                    ];
                }
              });
            });
          }), [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */


function Zo(t, e) {
  return e().catch(function (n) {
    return $o(t, n, e);
  });
}

function ts(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var e, n, r, i, o;
    return (0, _tslib.__generator)(this, function (s) {
      switch (s.label) {
        case 0:
          e = C(t), n = cs(e), r = e.qr.length > 0 ? e.qr[e.qr.length - 1].batchId : -1, s.label = 1;

        case 1:
          if (!
          /**
          * Returns true if we can add to the write pipeline (i.e. the network is
          * enabled and the write pipeline is not full).
          */
          function (t) {
            return Wo(t) && t.qr.length < 10;
          }
          /**
          * Queues additional writes to be sent to the write stream, sending them
          * immediately if the write stream is established.
          */
          (e)) return [3
          /*break*/
          , 7];
          s.label = 2;

        case 2:
          return s.trys.push([2, 4,, 6]), [4
          /*yield*/
          , Wi(e.localStore, r)];

        case 3:
          return null === (i = s.sent()) ? (0 === e.qr.length && n.lr(), [3
          /*break*/
          , 7]) : (r = i.batchId, function (t, e) {
            t.qr.push(e);
            var n = cs(t);
            n.ar() && n.br && n.vr(e.mutations);
          }(e, i), [3
          /*break*/
          , 6]);

        case 4:
          return o = s.sent(), [4
          /*yield*/
          , $o(e, o)];

        case 5:
          return s.sent(), [3
          /*break*/
          , 6];

        case 6:
          return [3
          /*break*/
          , 1];

        case 7:
          return es(e) && ns(e), [2
          /*return*/
          ];
      }
    });
  });
}

function es(t) {
  return Wo(t) && !cs(t).cr() && t.qr.length > 0;
}

function ns(t) {
  cs(t).start();
}

function rs(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    return (0, _tslib.__generator)(this, function (e) {
      return cs(t).Sr(), [2
      /*return*/
      ];
    });
  });
}

function is(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var e, n, r, i;
    return (0, _tslib.__generator)(this, function (o) {
      // Send the write pipeline now that the stream is established.
      for (e = cs(t), n = 0, r = t.qr; n < r.length; n++) {
        i = r[n], e.vr(i.mutations);
      }

      return [2
      /*return*/
      ];
    });
  });
}

function os(t, e, n) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var r, i;
    return (0, _tslib.__generator)(this, function (o) {
      switch (o.label) {
        case 0:
          return r = t.qr.shift(), i = Pr.from(r, e, n), [4
          /*yield*/
          , Zo(t, function () {
            return t.remoteSyncer.applySuccessfulWrite(i);
          })];

        case 1:
          // It's possible that with the completion of this mutation another
          // slot has freed up.
          return o.sent(), [4
          /*yield*/
          , ts(t)];

        case 2:
          // It's possible that with the completion of this mutation another
          // slot has freed up.
          return o.sent(), [2
          /*return*/
          ];
      }
    });
  });
}

function ss(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    return (0, _tslib.__generator)(this, function (n) {
      switch (n.label) {
        case 0:
          return e && cs(t).br ? [4
          /*yield*/
          , function (t, e) {
            return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
              var n, r;
              return (0, _tslib.__generator)(this, function (i) {
                switch (i.label) {
                  case 0:
                    return ze(r = e.code) && r !== j.ABORTED ? (n = t.qr.shift(), // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    cs(t).hr(), [4
                    /*yield*/
                    , Zo(t, function () {
                      return t.remoteSyncer.rejectFailedWrite(n.batchId, e);
                    })]) : [3
                    /*break*/
                    , 3];

                  case 1:
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    return i.sent(), [4
                    /*yield*/
                    , ts(t)];

                  case 2:
                    // In this case it's also unlikely that the server itself is melting
                    // down -- this was just a bad request so inhibit backoff on the next
                    // restart.
                    // It's possible that with the completion of this mutation
                    // another slot has freed up.
                    i.sent(), i.label = 3;

                  case 3:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }(t, e)] : [3
          /*break*/
          , 2];
        // This error affects the actual write.

        case 1:
          // This error affects the actual write.
          n.sent(), n.label = 2;

        case 2:
          // If the write stream closed after the write handshake completes, a write
          // operation failed and we fail the pending operation.
          // The write stream might have been started by refilling the write
          // pipeline for failed writes
          return es(t) && ns(t), [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Toggles the network state when the client gains or loses its primary lease.
 */


function us(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r;
    return (0, _tslib.__generator)(this, function (i) {
      switch (i.label) {
        case 0:
          return n = C(t), e ? (n.Qr.delete(2
          /* IsSecondary */
          ), [4
          /*yield*/
          , Vo(n)]) : [3
          /*break*/
          , 2];

        case 1:
          return i.sent(), [3
          /*break*/
          , 5];

        case 2:
          return (r = e) ? [3
          /*break*/
          , 4] : (n.Qr.add(2
          /* IsSecondary */
          ), [4
          /*yield*/
          , Uo(n)]);

        case 3:
          i.sent(), r = n.jr.set("Unknown"
          /* Unknown */
          ), i.label = 4;

        case 4:
          r, i.label = 5;

        case 5:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */


function as(t) {
  var e = this;
  return t.zr || ( // Create stream (but note that it is not started yet).
  t.zr = function (t, e, n) {
    var r = C(t);
    return r.Cr(), new Oo(e, r.er, r.credentials, r.D, n);
  }(t.datastore, t.asyncQueue, {
    Vi: Yo.bind(null, t),
    Di: Jo.bind(null, t),
    Tr: Xo.bind(null, t)
  }), t.Kr.push(function (n) {
    return (0, _tslib.__awaiter)(e, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (e) {
        switch (e.label) {
          case 0:
            return n ? (t.zr.hr(), Qo(t) ? zo(t) : t.jr.set("Unknown"
            /* Unknown */
            ), [3
            /*break*/
            , 3]) : [3
            /*break*/
            , 1];

          case 1:
            return [4
            /*yield*/
            , t.zr.stop()];

          case 2:
            e.sent(), Ho(t), e.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  })), t.zr
  /**
  * If not yet initialized, registers the WriteStream and its network state
  * callback with `remoteStoreImpl`. Returns the existing stream if one is
  * already available.
  *
  * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
  * This is not done on Web to allow it to be tree-shaken.
  */
  ;
}

function cs(t) {
  var e = this;
  return t.Hr || ( // Create stream (but note that it is not started yet).
  t.Hr = function (t, e, n) {
    var r = C(t);
    return r.Cr(), new Po(e, r.er, r.credentials, r.D, n);
  }(t.datastore, t.asyncQueue, {
    Vi: rs.bind(null, t),
    Di: ss.bind(null, t),
    Vr: is.bind(null, t),
    Pr: os.bind(null, t)
  }), t.Kr.push(function (n) {
    return (0, _tslib.__awaiter)(e, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (e) {
        switch (e.label) {
          case 0:
            return n ? (t.Hr.hr(), [4
            /*yield*/
            , ts(t)]) : [3
            /*break*/
            , 2];

          case 1:
            // This will start the write stream if necessary.
            return e.sent(), [3
            /*break*/
            , 4];

          case 2:
            return [4
            /*yield*/
            , t.Hr.stop()];

          case 3:
            e.sent(), t.qr.length > 0 && (_("RemoteStore", "Stopping write stream with " + t.qr.length + " pending writes"), t.qr = []), e.label = 4;

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  })), t.Hr
  /**
  * @license
  * Copyright 2017 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

  /**
  * Represents an operation scheduled to be run in the future on an AsyncQueue.
  *
  * It is created via DelayedOperation.createAndSchedule().
  *
  * Supports cancellation (via cancel()) and early execution (via skipDelay()).
  *
  * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
  * in newer versions of TypeScript defines `finally`, which is not available in
  * IE.
  */
  ;
}

var hs =
/** @class */
function () {
  function t(t, e, n, r, i) {
    this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new Ir(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch(function (t) {})
    /**
    * Creates and returns a DelayedOperation that has been scheduled to be
    * executed on the provided asyncQueue after the provided delayMs.
    *
    * @param asyncQueue - The queue to schedule the operation on.
    * @param id - A Timer ID identifying the type of operation this is.
    * @param delayMs - The delay (ms) before the operation should be scheduled.
    * @param op - The operation to run.
    * @param removalCallback - A callback to be called synchronously once the
    *   operation is executed or canceled, notifying the AsyncQueue to remove it
    *   from its delayedOperations list.
    *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
    *   the DelayedOperation class public.
    */
    ;
  }

  return t.createAndSchedule = function (e, n, r, i, o) {
    var s = new t(e, n, Date.now() + r, i, o);
    return s.start(r), s;
  },
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  t.prototype.start = function (t) {
    var e = this;
    this.timerHandle = setTimeout(function () {
      return e.handleDelayElapsed();
    }, t);
  },
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  t.prototype.skipDelay = function () {
    return this.handleDelayElapsed();
  },
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  t.prototype.cancel = function (t) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new G(j.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
  }, t.prototype.handleDelayElapsed = function () {
    var t = this;
    this.asyncQueue.enqueueAndForget(function () {
      return null !== t.timerHandle ? (t.clearTimeout(), t.op().then(function (e) {
        return t.deferred.resolve(e);
      })) : Promise.resolve();
    });
  }, t.prototype.clearTimeout = function () {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }, t;
}();
/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */


function fs(t, e) {
  if (S("AsyncQueue", e + ": " + t), Nr(t)) return new G(j.UNAVAILABLE, e + ": " + t);
  throw t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */


var ls =
/** @class */
function () {
  /** The default ordering is by key if the comparator is omitted */
  function t(t) {
    // We are adding document key comparator to the end as it's the only
    // guaranteed unique property of a document.
    this.comparator = t ? function (e, n) {
      return t(e, n) || H.comparator(e.key, n.key);
    } : function (t, e) {
      return H.comparator(t.key, e.key);
    }, this.keyedMap = nn(), this.sortedSet = new We(this.comparator)
    /**
    * Returns an empty copy of the existing DocumentSet, using the same
    * comparator.
    */
    ;
  }

  return t.emptySet = function (e) {
    return new t(e.comparator);
  }, t.prototype.has = function (t) {
    return null != this.keyedMap.get(t);
  }, t.prototype.get = function (t) {
    return this.keyedMap.get(t);
  }, t.prototype.first = function () {
    return this.sortedSet.minKey();
  }, t.prototype.last = function () {
    return this.sortedSet.maxKey();
  }, t.prototype.isEmpty = function () {
    return this.sortedSet.isEmpty();
  },
  /**
   * Returns the index of the provided key in the document set, or -1 if the
   * document key is not present in the set;
   */
  t.prototype.indexOf = function (t) {
    var e = this.keyedMap.get(t);
    return e ? this.sortedSet.indexOf(e) : -1;
  }, Object.defineProperty(t.prototype, "size", {
    get: function get() {
      return this.sortedSet.size;
    },
    enumerable: !1,
    configurable: !0
  }),
  /** Iterates documents in order defined by "comparator" */
  t.prototype.forEach = function (t) {
    this.sortedSet.inorderTraversal(function (e, n) {
      return t(e), !1;
    });
  },
  /** Inserts or updates a document with the same key */
  t.prototype.add = function (t) {
    // First remove the element if we have it.
    var e = this.delete(t.key);
    return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
  },
  /** Deletes a document with a given key */
  t.prototype.delete = function (t) {
    var e = this.get(t);
    return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this;
  }, t.prototype.isEqual = function (e) {
    if (!(e instanceof t)) return !1;
    if (this.size !== e.size) return !1;

    for (var n = this.sortedSet.getIterator(), r = e.sortedSet.getIterator(); n.hasNext();) {
      var i = n.getNext().key,
          o = r.getNext().key;
      if (!i.isEqual(o)) return !1;
    }

    return !0;
  }, t.prototype.toString = function () {
    var t = [];
    return this.forEach(function (e) {
      t.push(e.toString());
    }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
  }, t.prototype.copy = function (e, n) {
    var r = new t();
    return r.comparator = this.comparator, r.keyedMap = e, r.sortedSet = n, r;
  }, t;
}(),
    ds =
/** @class */
function () {
  function t() {
    this.Jr = new We(H.comparator);
  }

  return t.prototype.track = function (t) {
    var e = t.doc.key,
        n = this.Jr.get(e);
    n ? // Merge the new change with the existing change.
    0
    /* Added */
    !== t.type && 3
    /* Metadata */
    === n.type ? this.Jr = this.Jr.insert(e, t) : 3
    /* Metadata */
    === t.type && 1
    /* Removed */
    !== n.type ? this.Jr = this.Jr.insert(e, {
      type: n.type,
      doc: t.doc
    }) : 2
    /* Modified */
    === t.type && 2
    /* Modified */
    === n.type ? this.Jr = this.Jr.insert(e, {
      type: 2
      /* Modified */
      ,
      doc: t.doc
    }) : 2
    /* Modified */
    === t.type && 0
    /* Added */
    === n.type ? this.Jr = this.Jr.insert(e, {
      type: 0
      /* Added */
      ,
      doc: t.doc
    }) : 1
    /* Removed */
    === t.type && 0
    /* Added */
    === n.type ? this.Jr = this.Jr.remove(e) : 1
    /* Removed */
    === t.type && 2
    /* Modified */
    === n.type ? this.Jr = this.Jr.insert(e, {
      type: 1
      /* Removed */
      ,
      doc: n.doc
    }) : 0
    /* Added */
    === t.type && 1
    /* Removed */
    === n.type ? this.Jr = this.Jr.insert(e, {
      type: 2
      /* Modified */
      ,
      doc: t.doc
    }) : // This includes these cases, which don't make sense:
    // Added->Added
    // Removed->Removed
    // Modified->Added
    // Removed->Modified
    // Metadata->Added
    // Removed->Metadata
    A() : this.Jr = this.Jr.insert(e, t);
  }, t.prototype.Yr = function () {
    var t = [];
    return this.Jr.inorderTraversal(function (e, n) {
      t.push(n);
    }), t;
  }, t;
}(),
    ps =
/** @class */
function () {
  function t(t, e, n, r, i, o, s, u) {
    this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = o, this.syncStateChanged = s, this.excludesMetadataChanges = u
    /** Returns a view snapshot as if all documents in the snapshot were added. */
    ;
  }

  return t.fromInitialDocuments = function (e, n, r, i) {
    var o = [];
    return n.forEach(function (t) {
      o.push({
        type: 0
        /* Added */
        ,
        doc: t
      });
    }), new t(e, n, ls.emptySet(n), o, r, i,
    /* syncStateChanged= */
    !0,
    /* excludesMetadataChanges= */
    !1);
  }, Object.defineProperty(t.prototype, "hasPendingWrites", {
    get: function get() {
      return !this.mutatedKeys.isEmpty();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (t) {
    if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && $t(this.query, t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
    var e = this.docChanges,
        n = t.docChanges;
    if (e.length !== n.length) return !1;

    for (var r = 0; r < e.length; r++) {
      if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
    }

    return !0;
  }, t;
}(),
    ys = function ys() {
  this.Xr = void 0, this.listeners = [];
},
    vs = function vs() {
  this.queries = new Ei(function (t) {
    return Zt(t);
  }, $t), this.onlineState = "Unknown"
  /* Unknown */
  , this.Zr = new Set();
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */


function ms(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r, i, o, s, u, a;
    return (0, _tslib.__generator)(this, function (c) {
      switch (c.label) {
        case 0:
          if (n = C(t), r = e.query, i = !1, (o = n.queries.get(r)) || (i = !0, o = new ys()), !i) return [3
          /*break*/
          , 4];
          c.label = 1;

        case 1:
          return c.trys.push([1, 3,, 4]), s = o, [4
          /*yield*/
          , n.onListen(r)];

        case 2:
          return s.Xr = c.sent(), [3
          /*break*/
          , 4];

        case 3:
          return u = c.sent(), a = fs(u, "Initialization of query '" + te(e.query) + "' failed"), [2
          /*return*/
          , void e.onError(a)];

        case 4:
          return n.queries.set(r, o), o.listeners.push(e), // Run global snapshot listeners if a consistent snapshot has been emitted.
          e.eo(n.onlineState), o.Xr && e.no(o.Xr) && Is(n), [2
          /*return*/
          ];
      }
    });
  });
}

function gs(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r, i, o, s;
    return (0, _tslib.__generator)(this, function (u) {
      return n = C(t), r = e.query, i = !1, (o = n.queries.get(r)) && (s = o.listeners.indexOf(e)) >= 0 && (o.listeners.splice(s, 1), i = 0 === o.listeners.length), i ? [2
      /*return*/
      , (n.queries.delete(r), n.onUnlisten(r))] : [2
      /*return*/
      ];
    });
  });
}

function ws(t, e) {
  for (var n = C(t), r = !1, i = 0, o = e; i < o.length; i++) {
    var s = o[i],
        u = s.query,
        a = n.queries.get(u);

    if (a) {
      for (var c = 0, h = a.listeners; c < h.length; c++) {
        h[c].no(s) && (r = !0);
      }

      a.Xr = s;
    }
  }

  r && Is(n);
}

function bs(t, e, n) {
  var r = C(t),
      i = r.queries.get(e);
  if (i) for (var o = 0, s = i.listeners; o < s.length; o++) {
    s[o].onError(n);
  } // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
  // after an error.

  r.queries.delete(e);
} // Call all global snapshot listeners that have been set.


function Is(t) {
  t.Zr.forEach(function (t) {
    t.next();
  });
}
/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */


var Es =
/** @class */
function () {
  function t(t, e, n) {
    this.query = t, this.so = e,
    /**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */
    this.io = !1, this.ro = null, this.onlineState = "Unknown"
    /* Unknown */
    , this.options = n || {}
    /**
    * Applies the new ViewSnapshot to this listener, raising a user-facing event
    * if applicable (depending on what changed, whether the user has opted into
    * metadata-only changes, etc.). Returns true if a user-facing event was
    * indeed raised.
    */
    ;
  }

  return t.prototype.no = function (t) {
    if (!this.options.includeMetadataChanges) {
      for ( // Remove the metadata only changes.
      var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
        var i = r[n];
        3
        /* Metadata */
        !== i.type && e.push(i);
      }

      t = new ps(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged,
      /* excludesMetadataChanges= */
      !0);
    }

    var o = !1;
    return this.io ? this.oo(t) && (this.so.next(t), o = !0) : this.co(t, this.onlineState) && (this.ao(t), o = !0), this.ro = t, o;
  }, t.prototype.onError = function (t) {
    this.so.error(t);
  },
  /** Returns whether a snapshot was raised. */
  t.prototype.eo = function (t) {
    this.onlineState = t;
    var e = !1;
    return this.ro && !this.io && this.co(this.ro, t) && (this.ao(this.ro), e = !0), e;
  }, t.prototype.co = function (t, e) {
    // Always raise the first event when we're synced
    if (!t.fromCache) return !0; // NOTE: We consider OnlineState.Unknown as online (it should become Offline
    // or Online if we wait long enough).

    var n = "Offline"
    /* Offline */
    !== e; // Don't raise the event if we're online, aren't synced yet (checked
    // above) and are waiting for a sync.

    return !(this.options.uo && n || t.docs.isEmpty() && "Offline"
    /* Offline */
    !== e); // Raise data from cache if we have any documents or we are offline
  }, t.prototype.oo = function (t) {
    // We don't need to handle includeDocumentMetadataChanges here because
    // the Metadata only changes have already been stripped out if needed.
    // At this point the only changes we will see are the ones we should
    // propagate.
    if (t.docChanges.length > 0) return !0;
    var e = this.ro && this.ro.hasPendingWrites !== t.hasPendingWrites;
    return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges; // Generally we should have hit one of the cases above, but it's possible
    // to get here if there were only metadata docChanges and they got
    // stripped out.
  }, t.prototype.ao = function (t) {
    t = ps.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.io = !0, this.so.next(t);
  }, t;
}(),
    Ts =
/** @class */
function () {
  function t(t, // How many bytes this element takes to store in the bundle.
  e) {
    this.payload = t, this.byteLength = e;
  }

  return t.prototype.ho = function () {
    return "metadata" in this.payload;
  }, t;
}(),
    _s =
/** @class */
function () {
  function t(t) {
    this.D = t;
  }

  return t.prototype.Gn = function (t) {
    return kn(this.D, t);
  },
  /**
   * Converts a BundleDocument to a MaybeDocument.
   */
  t.prototype.zn = function (t) {
    return t.metadata.exists ? Pn(this.D, t.document, !1) : new wt(this.Gn(t.metadata.name), this.Hn(t.metadata.readTime));
  }, t.prototype.Hn = function (t) {
    return Sn(t);
  }, t;
}(),
    Ss =
/** @class */
function () {
  function t(t, e, n) {
    this.lo = t, this.localStore = e, this.D = n,
    /** Batched queries to be saved into storage */
    this.queries = [],
    /** Batched documents to be saved into storage */
    this.documents = [], this.progress = Ds(t)
    /**
    * Adds an element from the bundle to the loader.
    *
    * Returns a new progress if adding the element leads to a new progress,
    * otherwise returns null.
    */
    ;
  }

  return t.prototype.fo = function (t) {
    this.progress.bytesLoaded += t.byteLength;
    var e = this.progress.documentsLoaded;
    return t.payload.namedQuery ? this.queries.push(t.payload.namedQuery) : t.payload.documentMetadata ? (this.documents.push({
      metadata: t.payload.documentMetadata
    }), t.payload.documentMetadata.exists || ++e) : t.payload.document && (this.documents[this.documents.length - 1].document = t.payload.document, ++e), e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, Object.assign({}, this.progress)) : null;
  }, t.prototype.wo = function (t) {
    for (var e = new Map(), n = new _s(this.D), r = 0, i = t; r < i.length; r++) {
      var o = i[r];
      if (o.metadata.queries) for (var s = n.Gn(o.metadata.name), u = 0, a = o.metadata.queries; u < a.length; u++) {
        var c = a[u],
            h = (e.get(c) || un()).add(s);
        e.set(c, h);
      }
    }

    return e;
  },
  /**
   * Update the progress to 'Success' and return the updated progress.
   */
  t.prototype.complete = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var t, e, n, r, i;
      return (0, _tslib.__generator)(this, function (o) {
        switch (o.label) {
          case 0:
            return [4
            /*yield*/
            , to(this.localStore, new _s(this.D), this.documents, this.lo.id)];

          case 1:
            t = o.sent(), e = this.wo(this.documents), n = 0, r = this.queries, o.label = 2;

          case 2:
            return n < r.length ? (i = r[n], [4
            /*yield*/
            , eo(this.localStore, i, e.get(i.name))]) : [3
            /*break*/
            , 5];

          case 3:
            o.sent(), o.label = 4;

          case 4:
            return n++, [3
            /*break*/
            , 2];

          case 5:
            return [2
            /*return*/
            , (this.progress.taskState = "Success", new Mi(Object.assign({}, this.progress), t))];
        }
      });
    });
  }, t;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A complete element in the bundle stream, together with the byte length it
 * occupies in the stream.
 */

/**
 * Returns a `LoadBundleTaskProgress` representing the initial progress of
 * loading a bundle.
 */


function Ds(t) {
  return {
    taskState: "Running",
    documentsLoaded: 0,
    bytesLoaded: 0,
    totalDocuments: t.totalDocuments,
    totalBytes: t.totalBytes
  };
}
/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Ns = function Ns(t) {
  this.key = t;
},
    As = function As(t) {
  this.key = t;
},
    ks =
/** @class */
function () {
  function t(t,
  /** Documents included in the remote target */
  e) {
    this.query = t, this._o = e, this.mo = null,
    /**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */
    this.current = !1,
    /** Documents in the view but not in the remote target */
    this.yo = un(),
    /** Document Keys that have local changes */
    this.mutatedKeys = un(), this.po = ne(t), this.Eo = new ls(this.po);
  }

  return Object.defineProperty(t.prototype, "To", {
    /**
     * The set of remote documents that the server has told us belongs to the target associated with
     * this view.
     */
    get: function get() {
      return this._o;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * Iterates over a set of doc changes, applies the query limit, and computes
   * what the new results should be, what the changes were, and whether we may
   * need to go back to the local cache for more results. Does not make any
   * changes to the view.
   * @param docChanges - The doc changes to apply to this view.
   * @param previousChanges - If this is being called with a refill, then start
   *        with this set of docs and changes instead of the current view.
   * @returns a new set of docs, changes, and refill flag.
   */
  t.prototype.Io = function (t, e) {
    var n = this,
        r = e ? e.Ao : new ds(),
        i = e ? e.Eo : this.Eo,
        o = e ? e.mutatedKeys : this.mutatedKeys,
        s = i,
        u = !1,
        a = Kt(this.query) && i.size === this.query.limit ? i.last() : null,
        c = zt(this.query) && i.size === this.query.limit ? i.first() : null; // Drop documents out to meet limit/limitToLast requirement.

    if (t.inorderTraversal(function (t, e) {
      var h = i.get(t),
          f = e instanceof gt ? e : null;
      f && (f = ee(n.query, f) ? f : null);
      var l = !!h && n.mutatedKeys.has(h.key),
          d = !!f && (f.hasLocalMutations || // We only consider committed mutations for documents that were
      // mutated during the lifetime of the view.
      n.mutatedKeys.has(f.key) && f.hasCommittedMutations),
          p = !1; // Calculate change

      h && f ? h.data().isEqual(f.data()) ? l !== d && (r.track({
        type: 3
        /* Metadata */
        ,
        doc: f
      }), p = !0) : n.Ro(h, f) || (r.track({
        type: 2
        /* Modified */
        ,
        doc: f
      }), p = !0, (a && n.po(f, a) > 0 || c && n.po(f, c) < 0) && ( // This doc moved from inside the limit to outside the limit.
      // That means there may be some other doc in the local cache
      // that should be included instead.
      u = !0)) : !h && f ? (r.track({
        type: 0
        /* Added */
        ,
        doc: f
      }), p = !0) : h && !f && (r.track({
        type: 1
        /* Removed */
        ,
        doc: h
      }), p = !0, (a || c) && ( // A doc was removed from a full limit query. We'll need to
      // requery from the local cache to see if we know about some other
      // doc that should be in the results.
      u = !0)), p && (f ? (s = s.add(f), o = d ? o.add(t) : o.delete(t)) : (s = s.delete(t), o = o.delete(t)));
    }), Kt(this.query) || zt(this.query)) for (; s.size > this.query.limit;) {
      var h = Kt(this.query) ? s.last() : s.first();
      s = s.delete(h.key), o = o.delete(h.key), r.track({
        type: 1
        /* Removed */
        ,
        doc: h
      });
    }
    return {
      Eo: s,
      Ao: r,
      Mn: u,
      mutatedKeys: o
    };
  }, t.prototype.Ro = function (t, e) {
    // We suppress the initial change event for documents that were modified as
    // part of a write acknowledgment (e.g. when the value of a server transform
    // is applied) as Watch will send us the same document again.
    // By suppressing the event, we only raise two user visible events (one with
    // `hasPendingWrites` and the final state of the document) instead of three
    // (one with `hasPendingWrites`, the modified document with
    // `hasPendingWrites` and the final state of the document).
    return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations;
  },
  /**
   * Updates the view with the given ViewDocumentChanges and optionally updates
   * limbo docs and sync state from the provided target change.
   * @param docChanges - The set of changes to make to the view's docs.
   * @param updateLimboDocuments - Whether to update limbo documents based on
   *        this change.
   * @param targetChange - A target change to apply for computing limbo docs and
   *        sync state.
   * @returns A new ViewChange with the given docs, changes, and sync state.
   */
  // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
  t.prototype.applyChanges = function (t, e, n) {
    var r = this,
        i = this.Eo;
    this.Eo = t.Eo, this.mutatedKeys = t.mutatedKeys; // Sort changes based on type and query comparator

    var o = t.Ao.Yr();
    o.sort(function (t, e) {
      return function (t, e) {
        var n = function n(t) {
          switch (t) {
            case 0
            /* Added */
            :
              return 1;

            case 2
            /* Modified */
            :
            case 3
            /* Metadata */
            :
              // A metadata change is converted to a modified change at the public
              // api layer.  Since we sort by document key and then change type,
              // metadata and modified changes must be sorted equivalently.
              return 2;

            case 1
            /* Removed */
            :
              return 0;

            default:
              return A();
          }
        };

        return n(t) - n(e);
      }(t.type, e.type) || r.po(t.doc, e.doc);
    }), this.bo(n);
    var s = e ? this.vo() : [],
        u = 0 === this.yo.size && this.current ? 1
    /* Synced */
    : 0
    /* Local */
    ,
        a = u !== this.mo;
    return this.mo = u, 0 !== o.length || a ? {
      snapshot: new ps(this.query, t.Eo, i, o, t.mutatedKeys, 0
      /* Local */
      === u, a,
      /* excludesMetadataChanges= */
      !1),
      Po: s
    } : {
      Po: s
    }; // no changes
  },
  /**
   * Applies an OnlineState change to the view, potentially generating a
   * ViewChange if the view's syncState changes as a result.
   */
  t.prototype.eo = function (t) {
    return this.current && "Offline"
    /* Offline */
    === t ? ( // If we're offline, set `current` to false and then call applyChanges()
    // to refresh our syncState and generate a ViewChange as appropriate. We
    // are guaranteed to get a new TargetChange that sets `current` back to
    // true once the client is back online.
    this.current = !1, this.applyChanges({
      Eo: this.Eo,
      Ao: new ds(),
      mutatedKeys: this.mutatedKeys,
      Mn: !1
    },
    /* updateLimboDocuments= */
    !1)) : {
      Po: []
    };
  },
  /**
   * Returns whether the doc for the given key should be in limbo.
   */
  t.prototype.Vo = function (t) {
    // If the remote end says it's part of this query, it's not in limbo.
    return !this._o.has(t) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
    !!this.Eo.has(t) && !this.Eo.get(t).hasLocalMutations;
  },
  /**
   * Updates syncedDocuments, current, and limbo docs based on the given change.
   * Returns the list of changes to which docs are in limbo.
   */
  t.prototype.bo = function (t) {
    var e = this;
    t && (t.addedDocuments.forEach(function (t) {
      return e._o = e._o.add(t);
    }), t.modifiedDocuments.forEach(function (t) {}), t.removedDocuments.forEach(function (t) {
      return e._o = e._o.delete(t);
    }), this.current = t.current);
  }, t.prototype.vo = function () {
    var t = this; // We can only determine limbo documents when we're in-sync with the server.

    if (!this.current) return []; // TODO(klimt): Do this incrementally so that it's not quadratic when
    // updating many documents.

    var e = this.yo;
    this.yo = un(), this.Eo.forEach(function (e) {
      t.Vo(e.key) && (t.yo = t.yo.add(e.key));
    }); // Diff the new limbo docs with the old limbo docs.

    var n = [];
    return e.forEach(function (e) {
      t.yo.has(e) || n.push(new As(e));
    }), this.yo.forEach(function (t) {
      e.has(t) || n.push(new Ns(t));
    }), n;
  },
  /**
   * Update the in-memory state of the current view with the state read from
   * persistence.
   *
   * We update the query view whenever a client's primary status changes:
   * - When a client transitions from primary to secondary, it can miss
   *   LocalStorage updates and its query views may temporarily not be
   *   synchronized with the state on disk.
   * - For secondary to primary transitions, the client needs to update the list
   *   of `syncedDocuments` since secondary clients update their query views
   *   based purely on synthesized RemoteEvents.
   *
   * @param queryResult.documents - The documents that match the query according
   * to the LocalStore.
   * @param queryResult.remoteKeys - The keys of the documents that match the
   * query according to the backend.
   *
   * @returns The ViewChange that resulted from this synchronization.
   */
  // PORTING NOTE: Multi-tab only.
  t.prototype.So = function (t) {
    this._o = t.jn, this.yo = un();
    var e = this.Io(t.documents);
    return this.applyChanges(e,
    /*updateLimboDocuments=*/
    !0);
  },
  /**
   * Returns a view snapshot as if this query was just listened to. Contains
   * a document add for every existing document and the `fromCache` and
   * `hasPendingWrites` status of the already established view.
   */
  // PORTING NOTE: Multi-tab only.
  t.prototype.Do = function () {
    return ps.fromInitialDocuments(this.query, this.Eo, this.mutatedKeys, 0
    /* Local */
    === this.mo);
  }, t;
}(),
    Cs = function Cs(
/**
     * The query itself.
     */
t,
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e,
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
  this.query = t, this.targetId = e, this.view = n;
},
    xs = function xs(t) {
  this.key = t,
  /**
           * Set to true once we've received a document. This is used in
           * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
           * decide whether it needs to manufacture a delete event for the target once
           * the target is CURRENT.
           */
  this.Co = !1;
},
    Ls =
/** @class */
function () {
  function t(t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
  r, i, o) {
    this.localStore = t, this.remoteStore = e, this.eventManager = n, this.sharedClientState = r, this.currentUser = i, this.maxConcurrentLimboResolutions = o, this.xo = {}, this.No = new Ei(function (t) {
      return Zt(t);
    }, $t), this.$o = new Map(),
    /**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query. The strings in this set are the result of calling
         * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
         *
         * The `Set` type was chosen because it provides efficient lookup and removal
         * of arbitrary elements and it also maintains insertion order, providing the
         * desired queue-like FIFO semantics.
         */
    this.Fo = new Set(),
    /**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */
    this.Oo = new We(H.comparator),
    /**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */
    this.ko = new Map(), this.Mo = new ro(),
    /** Stores user completion handlers, indexed by User and BatchId. */
    this.Lo = {},
    /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    this.Bo = new Map(), this.qo = hi.ne(), this.onlineState = "Unknown"
    /* Unknown */
    , // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.Uo = void 0;
  }

  return Object.defineProperty(t.prototype, "isPrimaryClient", {
    get: function get() {
      return !0 === this.Uo;
    },
    enumerable: !1,
    configurable: !0
  }), t;
}();
/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */


function Rs(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r, i, o, s, u;
    return (0, _tslib.__generator)(this, function (a) {
      switch (a.label) {
        case 0:
          return n = au(t), (o = n.No.get(e)) ? ( // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
          // already exists when EventManager calls us for the first time. This
          // happens when the primary tab is already listening to this query on
          // behalf of another tab and the user of the primary also starts listening
          // to the query. EventManager will not have an assigned target ID in this
          // case and calls `listen` to obtain this ID.
          r = o.targetId, n.sharedClientState.addLocalQueryTarget(r), i = o.view.Do(), [3
          /*break*/
          , 4]) : [3
          /*break*/
          , 1];

        case 1:
          return [4
          /*yield*/
          , Hi(n.localStore, Jt(e))];

        case 2:
          return s = a.sent(), u = n.sharedClientState.addLocalQueryTarget(s.targetId), r = s.targetId, [4
          /*yield*/
          , Os(n, e, r, "current" === u)];

        case 3:
          i = a.sent(), n.isPrimaryClient && Bo(n.remoteStore, s), a.label = 4;

        case 4:
          return [2
          /*return*/
          , i];
      }
    });
  });
}
/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */


function Os(t, e, n, r) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var i, o, s, u, a, c;
    return (0, _tslib.__generator)(this, function (h) {
      switch (h.label) {
        case 0:
          // PORTING NOTE: On Web only, we inject the code that registers new Limbo
          // targets based on view changes. This allows us to only depend on Limbo
          // changes when user code includes queries.
          return t.Qo = function (e, n, r) {
            return function (t, e, n, r) {
              return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
                var i, o, s;
                return (0, _tslib.__generator)(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return i = e.view.Io(n), i.Mn ? [4
                      /*yield*/
                      , Ji(t.localStore, e.query,
                      /* usePreviousResults= */
                      !1).then(function (t) {
                        var n = t.documents;
                        return e.view.Io(n, i);
                      })] : [3
                      /*break*/
                      , 2];

                    case 1:
                      // The query has a limit and some docs were removed, so we need
                      // to re-run the query against the local store to make sure we
                      // didn't lose any good docs that had been past the limit.
                      i = u.sent(), u.label = 2;

                    case 2:
                      return o = r && r.targetChanges.get(e.targetId), s = e.view.applyChanges(i,
                      /* updateLimboDocuments= */
                      t.isPrimaryClient, o), [2
                      /*return*/
                      , (Ws(t, e.targetId, s.Po), s.snapshot)];
                  }
                });
              });
            }(t, e, n, r);
          }, [4
          /*yield*/
          , Ji(t.localStore, e,
          /* usePreviousResults= */
          !0)];

        case 1:
          return i = h.sent(), o = new ks(e, i.jn), s = o.Io(i.documents), u = fn.createSynthesizedTargetChangeForCurrentChange(n, r && "Offline"
          /* Offline */
          !== t.onlineState), a = o.applyChanges(s,
          /* updateLimboDocuments= */
          t.isPrimaryClient, u), Ws(t, n, a.Po), c = new Cs(e, n, o), [2
          /*return*/
          , (t.No.set(e, c), t.$o.has(n) ? t.$o.get(n).push(e) : t.$o.set(n, [e]), a.snapshot)];
      }
    });
  });
}
/** Stops listening to the query. */


function Ps(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r, i;
    return (0, _tslib.__generator)(this, function (o) {
      switch (o.label) {
        case 0:
          return n = C(t), r = n.No.get(e), (i = n.$o.get(r.targetId)).length > 1 ? [2
          /*return*/
          , (n.$o.set(r.targetId, i.filter(function (t) {
            return !$t(t, e);
          })), void n.No.delete(e))] : n.isPrimaryClient ? ( // We need to remove the local query target first to allow us to verify
          // whether any other client is still interested in this target.
          n.sharedClientState.removeLocalQueryTarget(r.targetId), n.sharedClientState.isActiveQueryTarget(r.targetId) ? [3
          /*break*/
          , 2] : [4
          /*yield*/
          , Yi(n.localStore, r.targetId,
          /*keepPersistedTargetData=*/
          !1).then(function () {
            n.sharedClientState.clearQueryState(r.targetId), jo(n.remoteStore, r.targetId), zs(n, r.targetId);
          }).catch(yi)]) : [3
          /*break*/
          , 3];

        case 1:
          o.sent(), o.label = 2;

        case 2:
          return [3
          /*break*/
          , 5];

        case 3:
          return zs(n, r.targetId), [4
          /*yield*/
          , Yi(n.localStore, r.targetId,
          /*keepPersistedTargetData=*/
          !0)];

        case 4:
          o.sent(), o.label = 5;

        case 5:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */


function Ms(t, e, n) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var r, i, o, s;
    return (0, _tslib.__generator)(this, function (u) {
      switch (u.label) {
        case 0:
          r = cu(t), u.label = 1;

        case 1:
          return u.trys.push([1, 5,, 6]), [4
          /*yield*/
          , function (t, e) {
            var n,
                r = C(t),
                i = tt.now(),
                o = e.reduce(function (t, e) {
              return t.add(e.key);
            }, un());
            return r.persistence.runTransaction("Locally write mutations", "readwrite", function (t) {
              return r.Kn.bn(t, o).next(function (o) {
                n = o;

                for ( // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                var s = [], u = 0, a = e; u < a.length; u++) {
                  var c = a[u],
                      h = xe(c, n.get(c.key));
                  null != h && // NOTE: The base state should only be applied if there's some
                  // existing document to override, so use a Precondition of
                  // exists=true
                  s.push(new Pe(c.key, h, ae(h.proto.mapValue), De.exists(!0)));
                }

                return r.Tn.addMutationBatch(t, i, s, e);
              });
            }).then(function (t) {
              var e = t.applyToLocalDocumentSet(n);
              return {
                batchId: t.batchId,
                changes: e
              };
            });
          }(r.localStore, e)];

        case 2:
          return i = u.sent(), r.sharedClientState.addPendingMutation(i.batchId), function (t, e, n) {
            var r = t.Lo[t.currentUser.toKey()];
            r || (r = new We(R)), r = r.insert(e, n), t.Lo[t.currentUser.toKey()] = r;
          }(r, i.batchId, n), [4
          /*yield*/
          , Js(r, i.changes)];

        case 3:
          return u.sent(), [4
          /*yield*/
          , ts(r.remoteStore)];

        case 4:
          return u.sent(), [3
          /*break*/
          , 6];

        case 5:
          return o = u.sent(), s = fs(o, "Failed to persist write"), n.reject(s), [3
          /*break*/
          , 6];

        case 6:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */


function Fs(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r;
    return (0, _tslib.__generator)(this, function (i) {
      switch (i.label) {
        case 0:
          n = C(t), i.label = 1;

        case 1:
          return i.trys.push([1, 4,, 6]), [4
          /*yield*/
          , zi(n.localStore, e)];

        case 2:
          return r = i.sent(), // Update `receivedDocument` as appropriate for any limbo targets.
          e.targetChanges.forEach(function (t, e) {
            var r = n.ko.get(e);
            r && ( // Since this is a limbo resolution lookup, it's for a single document
            // and it could be added, modified, or removed, but not a combination.
            k(t.addedDocuments.size + t.modifiedDocuments.size + t.removedDocuments.size <= 1), t.addedDocuments.size > 0 ? r.Co = !0 : t.modifiedDocuments.size > 0 ? k(r.Co) : t.removedDocuments.size > 0 && (k(r.Co), r.Co = !1));
          }), [4
          /*yield*/
          , Js(n, r, e)];

        case 3:
          // Update `receivedDocument` as appropriate for any limbo targets.
          return i.sent(), [3
          /*break*/
          , 6];

        case 4:
          return [4
          /*yield*/
          , yi(i.sent())];

        case 5:
          return i.sent(), [3
          /*break*/
          , 6];

        case 6:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */


function qs(t, e, n) {
  var r = C(t); // If we are the secondary client, we explicitly ignore the remote store's
  // online state (the local client may go offline, even though the primary
  // tab remains online) and only apply the primary tab's online state from
  // SharedClientState.

  if (r.isPrimaryClient && 0
  /* RemoteStore */
  === n || !r.isPrimaryClient && 1
  /* SharedClientState */
  === n) {
    var i = [];
    r.No.forEach(function (t, n) {
      var r = n.view.eo(e);
      r.snapshot && i.push(r.snapshot);
    }), function (t, e) {
      var n = C(t);
      n.onlineState = e;
      var r = !1;
      n.queries.forEach(function (t, n) {
        for (var i = 0, o = n.listeners; i < o.length; i++) {
          // Run global snapshot listeners if a consistent snapshot has been emitted.
          o[i].eo(e) && (r = !0);
        }
      }), r && Is(n);
    }(r.eventManager, e), i.length && r.xo.Tr(i), r.onlineState = e, r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
  }
}
/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */


function Vs(t, e, n) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var r, i, o, s, u, a;
    return (0, _tslib.__generator)(this, function (c) {
      switch (c.label) {
        case 0:
          // PORTING NOTE: Multi-tab only.
          return (r = C(t)).sharedClientState.updateQueryState(e, "rejected", n), i = r.ko.get(e), (o = i && i.key) ? (s = (s = new We(H.comparator)).insert(o, new wt(o, ie.min())), u = un().add(o), a = new hn(ie.min(),
          /* targetChanges= */
          new Map(),
          /* targetMismatches= */
          new Je(R), s, u), [4
          /*yield*/
          , Fs(r, a)]) : [3
          /*break*/
          , 2];

        case 1:
          return c.sent(), // Since this query failed, we won't want to manually unlisten to it.
          // We only remove it from bookkeeping after we successfully applied the
          // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
          // this query when the RemoteStore restarts the Watch stream, which should
          // re-trigger the target failure.
          r.Oo = r.Oo.remove(o), r.ko.delete(e), Ys(r), [3
          /*break*/
          , 4];

        case 2:
          return [4
          /*yield*/
          , Yi(r.localStore, e,
          /* keepPersistedTargetData */
          !1).then(function () {
            return zs(r, e, n);
          }).catch(yi)];

        case 3:
          c.sent(), c.label = 4;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function Us(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r, i;
    return (0, _tslib.__generator)(this, function (o) {
      switch (o.label) {
        case 0:
          n = C(t), r = e.batch.batchId, o.label = 1;

        case 1:
          return o.trys.push([1, 4,, 6]), [4
          /*yield*/
          , Gi(n.localStore, e)];

        case 2:
          return i = o.sent(), // The local store may or may not be able to apply the write result and
          // raise events immediately (depending on whether the watcher is caught
          // up), so we raise user callbacks first so that they consistently happen
          // before listen events.
          Ks(n, r,
          /*error=*/
          null), Gs(n, r), n.sharedClientState.updateMutationState(r, "acknowledged"), [4
          /*yield*/
          , Js(n, i)];

        case 3:
          // The local store may or may not be able to apply the write result and
          // raise events immediately (depending on whether the watcher is caught
          // up), so we raise user callbacks first so that they consistently happen
          // before listen events.
          return o.sent(), [3
          /*break*/
          , 6];

        case 4:
          return [4
          /*yield*/
          , yi(o.sent())];

        case 5:
          return o.sent(), [3
          /*break*/
          , 6];

        case 6:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function Bs(t, e, n) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var r, i;
    return (0, _tslib.__generator)(this, function (o) {
      switch (o.label) {
        case 0:
          r = C(t), o.label = 1;

        case 1:
          return o.trys.push([1, 4,, 6]), [4
          /*yield*/
          , function (t, e) {
            var n = C(t);
            return n.persistence.runTransaction("Reject batch", "readwrite-primary", function (t) {
              var r;
              return n.Tn.lookupMutationBatch(t, e).next(function (e) {
                return k(null !== e), r = e.keys(), n.Tn.removeMutationBatch(t, e);
              }).next(function () {
                return n.Tn.performConsistencyCheck(t);
              }).next(function () {
                return n.Kn.bn(t, r);
              });
            });
          }(r.localStore, e)];

        case 2:
          return i = o.sent(), // The local store may or may not be able to apply the write result and
          // raise events immediately (depending on whether the watcher is caught up),
          // so we raise user callbacks first so that they consistently happen before
          // listen events.
          Ks(r, e, n), Gs(r, e), r.sharedClientState.updateMutationState(e, "rejected", n), [4
          /*yield*/
          , Js(r, i)];

        case 3:
          // The local store may or may not be able to apply the write result and
          // raise events immediately (depending on whether the watcher is caught up),
          // so we raise user callbacks first so that they consistently happen before
          // listen events.
          return o.sent(), [3
          /*break*/
          , 6];

        case 4:
          return [4
          /*yield*/
          , yi(o.sent())];

        case 5:
          return o.sent(), [3
          /*break*/
          , 6];

        case 6:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */


function js(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r, i, o, s;
    return (0, _tslib.__generator)(this, function (u) {
      switch (u.label) {
        case 0:
          Wo((n = C(t)).remoteStore) || _("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), u.label = 1;

        case 1:
          return u.trys.push([1, 3,, 4]), [4
          /*yield*/
          , function (t) {
            var e = C(t);
            return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function (t) {
              return e.Tn.getHighestUnacknowledgedBatchId(t);
            });
          }(n.localStore)];

        case 2:
          return -1 === (r = u.sent()) ? [2
          /*return*/
          , void e.resolve()] : ((i = n.Bo.get(r) || []).push(e), n.Bo.set(r, i), [3
          /*break*/
          , 4]);

        case 3:
          return o = u.sent(), s = fs(o, "Initialization of waitForPendingWrites() operation failed"), e.reject(s), [3
          /*break*/
          , 4];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */


function Gs(t, e) {
  (t.Bo.get(e) || []).forEach(function (t) {
    t.resolve();
  }), t.Bo.delete(e)
  /** Reject all outstanding callbacks waiting for pending writes to complete. */
  ;
}

function Ks(t, e, n) {
  var r = C(t),
      i = r.Lo[r.currentUser.toKey()]; // NOTE: Mutations restored from persistence won't have callbacks, so it's
  // okay for there to be no callback for this ID.

  if (i) {
    var o = i.get(e);
    o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.Lo[r.currentUser.toKey()] = i;
  }
}

function zs(t, e, n) {
  void 0 === n && (n = null), t.sharedClientState.removeLocalQueryTarget(e);

  for (var r = 0, i = t.$o.get(e); r < i.length; r++) {
    var o = i[r];
    t.No.delete(o), n && t.xo.Ko(o, n);
  }

  t.$o.delete(e), t.isPrimaryClient && t.Mo.os(e).forEach(function (e) {
    t.Mo.containsKey(e) || // We removed the last reference for this key
    Qs(t, e);
  });
}

function Qs(t, e) {
  t.Fo.delete(e.path.canonicalString()); // It's possible that the target already got removed because the query failed. In that case,
  // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.

  var n = t.Oo.get(e);
  null !== n && (jo(t.remoteStore, n), t.Oo = t.Oo.remove(e), t.ko.delete(n), Ys(t));
}

function Ws(t, e, n) {
  for (var r = 0, i = n; r < i.length; r++) {
    var o = i[r];
    o instanceof Ns ? (t.Mo.addReference(o.key, e), Hs(t, o)) : o instanceof As ? (_("SyncEngine", "Document no longer in limbo: " + o.key), t.Mo.removeReference(o.key, e), t.Mo.containsKey(o.key) || // We removed the last reference for this key
    Qs(t, o.key)) : A();
  }
}

function Hs(t, e) {
  var n = e.key,
      r = n.path.canonicalString();
  t.Oo.get(n) || t.Fo.has(r) || (_("SyncEngine", "New document in limbo: " + n), t.Fo.add(r), Ys(t));
}
/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */


function Ys(t) {
  for (; t.Fo.size > 0 && t.Oo.size < t.maxConcurrentLimboResolutions;) {
    var e = t.Fo.values().next().value;
    t.Fo.delete(e);
    var n = new H(z.fromString(e)),
        r = t.qo.next();
    t.ko.set(r, new xs(n)), t.Oo = t.Oo.insert(n, r), Bo(t.remoteStore, new Mr(Jt(Gt(n.path)), r, 2
    /* LimboResolution */
    , I.o));
  }
}

function Js(t, e, n) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var r, i, o, s;
    return (0, _tslib.__generator)(this, function (u) {
      switch (u.label) {
        case 0:
          return r = C(t), i = [], o = [], s = [], r.No.isEmpty() ? [3
          /*break*/
          , 3] : (r.No.forEach(function (t, u) {
            s.push(r.Qo(u, e, n).then(function (t) {
              if (t) {
                r.isPrimaryClient && r.sharedClientState.updateQueryState(u.targetId, t.fromCache ? "not-current" : "current"), i.push(t);
                var e = qi.Nn(u.targetId, t);
                o.push(e);
              }
            }));
          }), [4
          /*yield*/
          , Promise.all(s)]);

        case 1:
          return u.sent(), r.xo.Tr(i), [4
          /*yield*/
          , function (t, e) {
            return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
              var n, r, i, o, s, u, a, c, h;
              return (0, _tslib.__generator)(this, function (f) {
                switch (f.label) {
                  case 0:
                    n = C(t), f.label = 1;

                  case 1:
                    return f.trys.push([1, 3,, 4]), [4
                    /*yield*/
                    , n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function (t) {
                      return Er.forEach(e, function (e) {
                        return Er.forEach(e.Cn, function (r) {
                          return n.persistence.referenceDelegate.addReference(t, e.targetId, r);
                        }).next(function () {
                          return Er.forEach(e.xn, function (r) {
                            return n.persistence.referenceDelegate.removeReference(t, e.targetId, r);
                          });
                        });
                      });
                    })];

                  case 2:
                    return f.sent(), [3
                    /*break*/
                    , 4];

                  case 3:
                    if (!Nr(r = f.sent())) throw r; // If `notifyLocalViewChanges` fails, we did not advance the sequence
                    // number for the documents that were included in this transaction.
                    // This might trigger them to be deleted earlier than they otherwise
                    // would have, but it should not invalidate the integrity of the data.

                    return _("LocalStore", "Failed to update sequence numbers: " + r), [3
                    /*break*/
                    , 4];

                  case 4:
                    for (i = 0, o = e; i < o.length; i++) {
                      s = o[i], u = s.targetId, s.fromCache || (a = n.Bn.get(u), c = a.snapshotVersion, h = a.withLastLimboFreeSnapshotVersion(c), // Advance the last limbo free snapshot version
                      n.Bn = n.Bn.insert(u, h));
                    }

                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }(r.localStore, o)];

        case 2:
          u.sent(), u.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function Xs(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r;
    return (0, _tslib.__generator)(this, function (i) {
      switch (i.label) {
        case 0:
          return (n = C(t)).currentUser.isEqual(e) ? [3
          /*break*/
          , 3] : (_("SyncEngine", "User change. New user:", e.toKey()), [4
          /*yield*/
          , ji(n.localStore, e)]);

        case 1:
          return r = i.sent(), n.currentUser = e, // Fails tasks waiting for pending writes requested by previous user.
          function (t, e) {
            t.Bo.forEach(function (t) {
              t.forEach(function (t) {
                t.reject(new G(j.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
              });
            }), t.Bo.clear();
          }(n), // TODO(b/114226417): Consider calling this only in the primary tab.
          n.sharedClientState.handleUserChange(e, r.removedBatchIds, r.addedBatchIds), [4
          /*yield*/
          , Js(n, r.Wn)];

        case 2:
          i.sent(), i.label = 3;

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function $s(t, e) {
  var n = C(t),
      r = n.ko.get(e);
  if (r && r.Co) return un().add(r.key);
  var i = un(),
      o = n.$o.get(e);
  if (!o) return i;

  for (var s = 0, u = o; s < u.length; s++) {
    var a = u[s],
        c = n.No.get(a);
    i = i.unionWith(c.view.To);
  }

  return i;
}
/**
 * Reconcile the list of synced documents in an existing view with those
 * from persistence.
 */


function Zs(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r, i;
    return (0, _tslib.__generator)(this, function (o) {
      switch (o.label) {
        case 0:
          return [4
          /*yield*/
          , Ji((n = C(t)).localStore, e.query,
          /* usePreviousResults= */
          !0)];

        case 1:
          return r = o.sent(), i = e.view.So(r), [2
          /*return*/
          , (n.isPrimaryClient && Ws(n, e.targetId, i.Po), i)];
      }
    });
  });
}
/**
 * Retrieves newly changed documents from remote document cache and raises
 * snapshots if needed.
 */
// PORTING NOTE: Multi-Tab only.


function tu(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var e;
    return (0, _tslib.__generator)(this, function (n) {
      return [2
      /*return*/
      , $i((e = C(t)).localStore).then(function (t) {
        return Js(e, t);
      })];
    });
  });
}
/** Applies a mutation state to an existing batch.  */
// PORTING NOTE: Multi-Tab only.


function eu(t, e, n, r) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var i, o;
    return (0, _tslib.__generator)(this, function (s) {
      switch (s.label) {
        case 0:
          return [4
          /*yield*/
          , function (t, e) {
            var n = C(t),
                r = C(n.Tn);
            return n.persistence.runTransaction("Lookup mutation documents", "readonly", function (t) {
              return r.Jt(t, e).next(function (e) {
                return e ? n.Kn.bn(t, e) : Er.resolve(null);
              });
            });
          }((i = C(t)).localStore, e)];

        case 1:
          return null === (o = s.sent()) ? [3
          /*break*/
          , 6] : "pending" !== n ? [3
          /*break*/
          , 3] : [4
          /*yield*/
          , ts(i.remoteStore)];

        case 2:
          // If we are the primary client, we need to send this write to the
          // backend. Secondary clients will ignore these writes since their remote
          // connection is disabled.
          return s.sent(), [3
          /*break*/
          , 4];

        case 3:
          "acknowledged" === n || "rejected" === n ? ( // NOTE: Both these methods are no-ops for batches that originated from
          // other clients.
          Ks(i, e, r || null), Gs(i, e), function (t, e) {
            C(C(t).Tn).Xt(e);
          }(i.localStore, e)) : A(), s.label = 4;

        case 4:
          return [4
          /*yield*/
          , Js(i, o)];

        case 5:
          return s.sent(), [3
          /*break*/
          , 7];

        case 6:
          // A throttled tab may not have seen the mutation before it was completed
          // and removed from the mutation queue, in which case we won't have cached
          // the affected documents. In this case we can safely ignore the update
          // since that means we didn't apply the mutation locally at all (if we
          // had, we would have cached the affected documents), and so we will just
          // see any resulting document changes via normal remote document updates
          // as applicable.
          _("SyncEngine", "Cannot apply mutation batch with id: " + e), s.label = 7;

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.


function nu(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r, i, o, s, u, a, c;
    return (0, _tslib.__generator)(this, function (h) {
      switch (h.label) {
        case 0:
          return au(n = C(t)), cu(n), !0 !== e || !0 === n.Uo ? [3
          /*break*/
          , 3] : (r = n.sharedClientState.getAllActiveQueryTargets(), [4
          /*yield*/
          , ru(n, r.toArray())]);

        case 1:
          return i = h.sent(), n.Uo = !0, [4
          /*yield*/
          , us(n.remoteStore, !0)];

        case 2:
          for (h.sent(), o = 0, s = i; o < s.length; o++) {
            u = s[o], Bo(n.remoteStore, u);
          }

          return [3
          /*break*/
          , 7];

        case 3:
          return !1 !== e || !1 === n.Uo ? [3
          /*break*/
          , 7] : (a = [], c = Promise.resolve(), n.$o.forEach(function (t, e) {
            n.sharedClientState.isLocalQueryTarget(e) ? a.push(e) : c = c.then(function () {
              return zs(n, e), Yi(n.localStore, e,
              /*keepPersistedTargetData=*/
              !0);
            }), jo(n.remoteStore, e);
          }), [4
          /*yield*/
          , c]);

        case 4:
          return h.sent(), [4
          /*yield*/
          , ru(n, a)];

        case 5:
          return h.sent(), // PORTING NOTE: Multi-Tab only.
          function (t) {
            var e = C(t);
            e.ko.forEach(function (t, n) {
              jo(e.remoteStore, n);
            }), e.Mo.cs(), e.ko = new Map(), e.Oo = new We(H.comparator);
          }(n), n.Uo = !1, [4
          /*yield*/
          , us(n.remoteStore, !1)];

        case 6:
          h.sent(), h.label = 7;

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function ru(t, e, n) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r, i, o, s, u, a, c, h, f, l, d, p, y;
    return (0, _tslib.__generator)(this, function (v) {
      switch (v.label) {
        case 0:
          n = C(t), r = [], i = [], o = 0, s = e, v.label = 1;

        case 1:
          return o < s.length ? (u = s[o], a = void 0, (c = n.$o.get(u)) && 0 !== c.length ? [4
          /*yield*/
          , Hi(n.localStore, Jt(c[0]))] : [3
          /*break*/
          , 7]) : [3
          /*break*/
          , 13];

        case 2:
          // For queries that have a local View, we fetch their current state
          // from LocalStore (as the resume token and the snapshot version
          // might have changed) and reconcile their views with the persisted
          // state (the list of syncedDocuments may have gotten out of sync).
          a = v.sent(), h = 0, f = c, v.label = 3;

        case 3:
          return h < f.length ? (l = f[h], d = n.No.get(l), [4
          /*yield*/
          , Zs(n, d)]) : [3
          /*break*/
          , 6];

        case 4:
          (p = v.sent()).snapshot && i.push(p.snapshot), v.label = 5;

        case 5:
          return h++, [3
          /*break*/
          , 3];

        case 6:
          return [3
          /*break*/
          , 11];

        case 7:
          return [4
          /*yield*/
          , Xi(n.localStore, u)];

        case 8:
          return y = v.sent(), [4
          /*yield*/
          , Hi(n.localStore, y)];

        case 9:
          return a = v.sent(), [4
          /*yield*/
          , Os(n, iu(y), u,
          /*current=*/
          !1)];

        case 10:
          v.sent(), v.label = 11;

        case 11:
          r.push(a), v.label = 12;

        case 12:
          return o++, [3
          /*break*/
          , 1];

        case 13:
          return [2
          /*return*/
          , (n.xo.Tr(i), r)];
      }
    });
  });
}
/**
 * Creates a `Query` object from the specified `Target`. There is no way to
 * obtain the original `Query`, so we synthesize a `Query` from the `Target`
 * object.
 *
 * The synthesized result might be different from the original `Query`, but
 * since the synthesized `Query` should return the same results as the
 * original one (only the presentation of results might differ), the potential
 * difference will not cause issues.
 */
// PORTING NOTE: Multi-Tab only.


function iu(t) {
  return jt(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F"
  /* First */
  , t.startAt, t.endAt);
}
/** Returns the IDs of the clients that are currently active. */
// PORTING NOTE: Multi-Tab only.


function ou(t) {
  var e = C(t);
  return C(C(e.localStore).persistence).gn();
}
/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.


function su(t, e, n, r) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var i, o, s;
    return (0, _tslib.__generator)(this, function (u) {
      switch (u.label) {
        case 0:
          return (i = C(t)).Uo ? ( // If we receive a target state notification via WebStorage, we are
          // either already secondary or another tab has taken the primary lease.
          _("SyncEngine", "Ignoring unexpected query state notification."), [3
          /*break*/
          , 8]) : [3
          /*break*/
          , 1];

        case 1:
          if (!i.$o.has(e)) return [3
          /*break*/
          , 8];

          switch (n) {
            case "current":
            case "not-current":
              return [3
              /*break*/
              , 2];

            case "rejected":
              return [3
              /*break*/
              , 5];
          }

          return [3
          /*break*/
          , 7];

        case 2:
          return [4
          /*yield*/
          , $i(i.localStore)];

        case 3:
          return o = u.sent(), s = hn.createSynthesizedRemoteEventForCurrentChange(e, "current" === n), [4
          /*yield*/
          , Js(i, o, s)];

        case 4:
          return u.sent(), [3
          /*break*/
          , 8];

        case 5:
          return [4
          /*yield*/
          , Yi(i.localStore, e,
          /* keepPersistedTargetData */
          !0)];

        case 6:
          return u.sent(), zs(i, e, r), [3
          /*break*/
          , 8];

        case 7:
          A(), u.label = 8;

        case 8:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/** Adds or removes Watch targets for queries from different tabs. */


function uu(t, e, n) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var r, i, o, s, u, a, c, h, f, l;
    return (0, _tslib.__generator)(this, function (d) {
      switch (d.label) {
        case 0:
          if (!(r = au(t)).Uo) return [3
          /*break*/
          , 10];
          i = 0, o = e, d.label = 1;

        case 1:
          return i < o.length ? (s = o[i], r.$o.has(s) ? ( // A target might have been added in a previous attempt
          _("SyncEngine", "Adding an already active target " + s), [3
          /*break*/
          , 5]) : [4
          /*yield*/
          , Xi(r.localStore, s)]) : [3
          /*break*/
          , 6];

        case 2:
          return u = d.sent(), [4
          /*yield*/
          , Hi(r.localStore, u)];

        case 3:
          return a = d.sent(), [4
          /*yield*/
          , Os(r, iu(u), a.targetId,
          /*current=*/
          !1)];

        case 4:
          d.sent(), Bo(r.remoteStore, a), d.label = 5;

        case 5:
          return i++, [3
          /*break*/
          , 1];

        case 6:
          c = function c(t) {
            return (0, _tslib.__generator)(this, function (e) {
              switch (e.label) {
                case 0:
                  return r.$o.has(t) ? [4
                  /*yield*/
                  , Yi(r.localStore, t,
                  /* keepPersistedTargetData */
                  !1).then(function () {
                    jo(r.remoteStore, t), zs(r, t);
                  }).catch(yi)] : [3
                  /*break*/
                  , 2];
                // Release queries that are still active.

                case 1:
                  // Release queries that are still active.
                  e.sent(), e.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          }, h = 0, f = n, d.label = 7;

        case 7:
          return h < f.length ? (l = f[h], [5
          /*yield**/
          , c(l)]) : [3
          /*break*/
          , 10];

        case 8:
          d.sent(), d.label = 9;

        case 9:
          return h++, [3
          /*break*/
          , 7];

        case 10:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function au(t) {
  var e = C(t);
  return e.remoteStore.remoteSyncer.applyRemoteEvent = Fs.bind(null, e), e.remoteStore.remoteSyncer.getRemoteKeysForTarget = $s.bind(null, e), e.remoteStore.remoteSyncer.rejectListen = Vs.bind(null, e), e.xo.Tr = ws.bind(null, e.eventManager), e.xo.Ko = bs.bind(null, e.eventManager), e;
}

function cu(t) {
  var e = C(t);
  return e.remoteStore.remoteSyncer.applySuccessfulWrite = Us.bind(null, e), e.remoteStore.remoteSyncer.rejectFailedWrite = Bs.bind(null, e), e
  /**
  * Loads a Firestore bundle into the SDK. The returned promise resolves when
  * the bundle finished loading.
  *
  * @param syncEngine - SyncEngine to use.
  * @param bundleReader - Bundle to load into the SDK.
  * @param task - LoadBundleTask used to update the loading progress to public API.
  */
  ;
}

function hu(t, e, n) {
  var r = C(t); // eslint-disable-next-line @typescript-eslint/no-floating-promises

  (function (t, e, n) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var r, i, o, s, u, a;
      return (0, _tslib.__generator)(this, function (c) {
        switch (c.label) {
          case 0:
            return c.trys.push([0, 14,, 15]), [4
            /*yield*/
            , e.getMetadata()];

          case 1:
            return r = c.sent(), [4
            /*yield*/
            , function (t, e) {
              var n = C(t),
                  r = Sn(e.createTime);
              return n.persistence.runTransaction("hasNewerBundle", "readonly", function (t) {
                return n.He.getBundleMetadata(t, e.id);
              }).then(function (t) {
                return !!t && t.createTime.compareTo(r) >= 0;
              });
            }(t.localStore, r)];

          case 2:
            return c.sent() ? [4
            /*yield*/
            , e.close()] : [3
            /*break*/
            , 4];

          case 3:
            return [2
            /*return*/
            , (c.sent(), void n._completeWith(function (t) {
              return {
                taskState: "Success",
                documentsLoaded: t.totalDocuments,
                bytesLoaded: t.totalBytes,
                totalDocuments: t.totalDocuments,
                totalBytes: t.totalBytes
              };
            }(r)))];

          case 4:
            return n._updateProgress(Ds(r)), i = new Ss(r, t.localStore, e.D), [4
            /*yield*/
            , e.Wo()];

          case 5:
            o = c.sent(), c.label = 6;

          case 6:
            return o ? [4
            /*yield*/
            , i.fo(o)] : [3
            /*break*/
            , 10];

          case 7:
            return (s = c.sent()) && n._updateProgress(s), [4
            /*yield*/
            , e.Wo()];

          case 8:
            o = c.sent(), c.label = 9;

          case 9:
            return [3
            /*break*/
            , 6];

          case 10:
            return [4
            /*yield*/
            , i.complete()];

          case 11:
            // TODO(b/160876443): This currently raises snapshots with
            // `fromCache=false` if users already listen to some queries and bundles
            // has newer version.
            return u = c.sent(), [4
            /*yield*/
            , Js(t, u.En,
            /* remoteEvent */
            void 0)];

          case 12:
            // Save metadata, so loading the same bundle will skip.
            // TODO(b/160876443): This currently raises snapshots with
            // `fromCache=false` if users already listen to some queries and bundles
            // has newer version.
            return c.sent(), [4
            /*yield*/
            , function (t, e) {
              var n = C(t);
              return n.persistence.runTransaction("Save bundle", "readwrite", function (t) {
                return n.He.saveBundleMetadata(t, e);
              });
            }(t.localStore, r)];

          case 13:
            // TODO(b/160876443): This currently raises snapshots with
            // `fromCache=false` if users already listen to some queries and bundles
            // has newer version.
            // Save metadata, so loading the same bundle will skip.
            return c.sent(), n._completeWith(u.progress), [3
            /*break*/
            , 15];

          case 14:
            return D("SyncEngine", "Loading bundle failed with " + (a = c.sent())), n._failWith(a), [3
            /*break*/
            , 15];

          case 15:
            return [2
            /*return*/
            ];
        }
      });
    });
  }
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

  /**
  * Provides all components needed for Firestore with in-memory persistence.
  * Uses EagerGC garbage collection.
  */
  )(r, e, n).then(function () {
    r.sharedClientState.notifyBundleLoaded();
  });
}

var fu =
/** @class */
function () {
  function t() {
    this.synchronizeTabs = !1;
  }

  return t.prototype.initialize = function (t) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (e) {
        switch (e.label) {
          case 0:
            return this.D = xo(t.databaseInfo.databaseId), this.sharedClientState = this.jo(t), this.persistence = this.Go(t), [4
            /*yield*/
            , this.persistence.start()];

          case 1:
            return e.sent(), this.gcScheduler = this.zo(t), this.localStore = this.Ho(t), [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.zo = function (t) {
    return null;
  }, t.prototype.Ho = function (t) {
    return Bi(this.persistence, new Vi(), t.initialUser, this.D);
  }, t.prototype.Go = function (t) {
    return new co(fo.Cs, this.D);
  }, t.prototype.jo = function (t) {
    return new To();
  }, t.prototype.terminate = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (t) {
        switch (t.label) {
          case 0:
            return this.gcScheduler && this.gcScheduler.stop(), [4
            /*yield*/
            , this.sharedClientState.shutdown()];

          case 1:
            return t.sent(), [4
            /*yield*/
            , this.persistence.shutdown()];

          case 2:
            return t.sent(), [2
            /*return*/
            ];
        }
      });
    });
  }, t;
}(),
    lu =
/** @class */
function (t) {
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this) || this).Jo = e, i.cacheSizeBytes = n, i.forceOwnership = r, i.synchronizeTabs = !1, i;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.initialize = function (e) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (n) {
        switch (n.label) {
          case 0:
            return [4
            /*yield*/
            , t.prototype.initialize.call(this, e)];

          case 1:
            return n.sent(), [4
            /*yield*/
            , Zi(this.localStore)];

          case 2:
            return n.sent(), [4
            /*yield*/
            , this.Jo.initialize(this, e)];

          case 3:
            // Enqueue writes from a previous session
            return n.sent(), [4
            /*yield*/
            , cu(this.Jo.syncEngine)];

          case 4:
            // Enqueue writes from a previous session
            return n.sent(), [4
            /*yield*/
            , ts(this.Jo.remoteStore)];

          case 5:
            return n.sent(), [2
            /*return*/
            ];
        }
      });
    });
  }, e.prototype.Ho = function (t) {
    return Bi(this.persistence, new Vi(), t.initialUser, this.D);
  }, e.prototype.zo = function (t) {
    var e = this.persistence.referenceDelegate.garbageCollector;
    return new gi(e, t.asyncQueue);
  }, e.prototype.Go = function (t) {
    var e = Pi(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey),
        n = void 0 !== this.cacheSizeBytes ? ni.withCacheSize(this.cacheSizeBytes) : ni.DEFAULT;
    return new Li(this.synchronizeTabs, e, t.clientId, n, t.asyncQueue, ko(), Co(), this.D, this.sharedClientState, !!this.forceOwnership);
  }, e.prototype.jo = function (t) {
    return new To();
  }, e;
}(fu),
    du =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, e, n,
    /* forceOwnership= */
    !1) || this).Jo = e, r.cacheSizeBytes = n, r.synchronizeTabs = !0, r;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.initialize = function (e) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var n,
          r = this;
      return (0, _tslib.__generator)(this, function (i) {
        switch (i.label) {
          case 0:
            return [4
            /*yield*/
            , t.prototype.initialize.call(this, e)];

          case 1:
            return i.sent(), n = this.Jo.syncEngine, this.sharedClientState instanceof Eo ? (this.sharedClientState.syncEngine = {
              wi: eu.bind(null, n),
              _i: su.bind(null, n),
              mi: uu.bind(null, n),
              gn: ou.bind(null, n),
              di: tu.bind(null, n)
            }, [4
            /*yield*/
            , this.sharedClientState.start()]) : [3
            /*break*/
            , 3];

          case 2:
            i.sent(), i.label = 3;

          case 3:
            // NOTE: This will immediately call the listener, so we make sure to
            // set it after localStore / remoteStore are started.
            return [4
            /*yield*/
            , this.persistence.en(function (t) {
              return (0, _tslib.__awaiter)(r, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , nu(this.Jo.syncEngine, t)];

                    case 1:
                      return e.sent(), this.gcScheduler && (t && !this.gcScheduler.started ? this.gcScheduler.start(this.localStore) : t || this.gcScheduler.stop()), [2
                      /*return*/
                      ];
                  }
                });
              });
            })];

          case 4:
            // NOTE: This will immediately call the listener, so we make sure to
            // set it after localStore / remoteStore are started.
            return i.sent(), [2
            /*return*/
            ];
        }
      });
    });
  }, e.prototype.jo = function (t) {
    var e = ko();
    if (!Eo.At(e)) throw new G(j.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
    var n = Pi(t.databaseInfo.databaseId, t.databaseInfo.persistenceKey);
    return new Eo(e, t.asyncQueue, n, t.clientId, t.initialUser);
  }, e;
}(lu),
    pu =
/** @class */
function () {
  function t() {}

  return t.prototype.initialize = function (t, e) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var n = this;
      return (0, _tslib.__generator)(this, function (r) {
        switch (r.label) {
          case 0:
            return this.localStore ? [3
            /*break*/
            , 2] : (this.localStore = t.localStore, this.sharedClientState = t.sharedClientState, this.datastore = this.createDatastore(e), this.remoteStore = this.createRemoteStore(e), this.eventManager = this.createEventManager(e), this.syncEngine = this.createSyncEngine(e,
            /* startAsPrimary=*/
            !t.synchronizeTabs), this.sharedClientState.onlineStateHandler = function (t) {
              return qs(n.syncEngine, t, 1
              /* SharedClientState */
              );
            }, this.remoteStore.remoteSyncer.handleCredentialChange = Xs.bind(null, this.syncEngine), [4
            /*yield*/
            , us(this.remoteStore, this.syncEngine.isPrimaryClient)]);

          case 1:
            r.sent(), r.label = 2;

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.createEventManager = function (t) {
    return new vs();
  }, t.prototype.createDatastore = function (t) {
    var e,
        n = xo(t.databaseInfo.databaseId),
        r = (e = t.databaseInfo, new Ao(e));
    /** Return the Platform-specific connectivity monitor. */

    return function (t, e, n) {
      return new Mo(t, e, n);
    }(t.credentials, r, n);
  }, t.prototype.createRemoteStore = function (t) {
    var e,
        n,
        r,
        i,
        o,
        s = this;
    return e = this.localStore, n = this.datastore, r = t.asyncQueue, i = function i(t) {
      return qs(s.syncEngine, t, 0
      /* RemoteStore */
      );
    }, o = So.At() ? new So() : new _o(), new qo(e, n, r, i, o);
  }, t.prototype.createSyncEngine = function (t, e) {
    return function (t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o, s) {
      var u = new Ls(t, e, n, r, i, o);
      return s && (u.Uo = !0), u;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, t.initialUser, t.maxConcurrentLimboResolutions, e);
  }, t.prototype.terminate = function () {
    return function (t) {
      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
        var e;
        return (0, _tslib.__generator)(this, function (n) {
          switch (n.label) {
            case 0:
              return e = C(t), _("RemoteStore", "RemoteStore shutting down."), e.Qr.add(5
              /* Shutdown */
              ), [4
              /*yield*/
              , Uo(e)];

            case 1:
              return n.sent(), e.Wr.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
              // triggering spurious listener events with cached data, etc.
              e.jr.set("Unknown"
              /* Unknown */
              ), [2
              /*return*/
              ];
          }
        });
      });
    }(this.remoteStore);
  }, t;
}();
/**
 * Provides all components needed for Firestore with IndexedDB persistence.
 */

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * How many bytes to read each time when `ReadableStreamReader.read()` is
 * called. Only applicable for byte streams that we control (e.g. those backed
 * by an UInt8Array).
 */

/**
 * Builds a `ByteStreamReader` from a UInt8Array.
 * @param source - The data source to use.
 * @param bytesPerRead - How many bytes each `read()` from the returned reader
 *        will read.
 */


function yu(t, e) {
  void 0 === e && (e = 10240);
  var n = 0;
  return {
    read: function read() {
      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
        var r;
        return (0, _tslib.__generator)(this, function (i) {
          return n < t.byteLength ? (r = {
            value: t.slice(n, n + e),
            done: !1
          }, [2
          /*return*/
          , (n += e, r)]) : [2
          /*return*/
          , {
            done: !0
          }];
        });
      });
    },
    cancel: function cancel() {
      return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
        return (0, _tslib.__generator)(this, function (t) {
          return [2
          /*return*/
          ];
        });
      });
    },
    releaseLock: function releaseLock() {},
    closed: Promise.reject("unimplemented")
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */


var vu =
/** @class */
function () {
  function t(t) {
    this.observer = t,
    /**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */
    this.muted = !1;
  }

  return t.prototype.next = function (t) {
    this.observer.next && this.Yo(this.observer.next, t);
  }, t.prototype.error = function (t) {
    this.observer.error ? this.Yo(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
  }, t.prototype.Xo = function () {
    this.muted = !0;
  }, t.prototype.Yo = function (t, e) {
    var n = this;
    this.muted || setTimeout(function () {
      n.muted || t(e);
    }, 0);
  }, t;
}(),
    mu =
/** @class */
function () {
  function t(
  /** The reader to read from underlying binary bundle data source. */
  t, e) {
    var n = this;
    this.Zo = t, this.D = e,
    /** Cached bundle metadata. */
    this.metadata = new Ir(),
    /**
         * Internal buffer to hold bundle content, accumulating incomplete element
         * content.
         */
    this.buffer = new Uint8Array(), this.tc = new TextDecoder("utf-8"), // Read the metadata (which is the first element).
    this.ec().then(function (t) {
      t && t.ho() ? n.metadata.resolve(t.payload.metadata) : n.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             " + JSON.stringify(null == t ? void 0 : t.payload)));
    }, function (t) {
      return n.metadata.reject(t);
    });
  }

  return t.prototype.close = function () {
    return this.Zo.cancel();
  }, t.prototype.getMetadata = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (t) {
        return [2
        /*return*/
        , this.metadata.promise];
      });
    });
  }, t.prototype.Wo = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (t) {
        switch (t.label) {
          case 0:
            return [4
            /*yield*/
            , this.getMetadata()];

          case 1:
            // Makes sure metadata is read before proceeding.
            return [2
            /*return*/
            , (t.sent(), this.ec())];
        }
      });
    });
  },
  /**
   * Reads from the head of internal buffer, and pulling more data from
   * underlying stream if a complete element cannot be found, until an
   * element(including the prefixed length and the JSON string) is found.
   *
   * Once a complete element is read, it is dropped from internal buffer.
   *
   * Returns either the bundled element, or null if we have reached the end of
   * the stream.
   */
  t.prototype.ec = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var t, e, n, r;
      return (0, _tslib.__generator)(this, function (i) {
        switch (i.label) {
          case 0:
            return [4
            /*yield*/
            , this.nc()];

          case 1:
            return null === (t = i.sent()) ? [2
            /*return*/
            , null] : (e = this.tc.decode(t), n = Number(e), isNaN(n) && this.sc("length string (" + e + ") is not valid number"), [4
            /*yield*/
            , this.ic(n)]);

          case 2:
            return r = i.sent(), [2
            /*return*/
            , new Ts(JSON.parse(r), t.length + n)];
        }
      });
    });
  },
  /** First index of '{' from the underlying buffer. */
  t.prototype.rc = function () {
    return this.buffer.findIndex(function (t) {
      return t === "{".charCodeAt(0);
    });
  },
  /**
   * Reads from the beginning of the internal buffer, until the first '{', and
   * return the content.
   *
   * If reached end of the stream, returns a null.
   */
  t.prototype.nc = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var t, e;
      return (0, _tslib.__generator)(this, function (n) {
        switch (n.label) {
          case 0:
            return this.rc() < 0 ? [4
            /*yield*/
            , this.oc()] : [3
            /*break*/
            , 3];

          case 1:
            if (n.sent()) return [3
            /*break*/
            , 3];
            n.label = 2;

          case 2:
            return [3
            /*break*/
            , 0];

          case 3:
            // Broke out of the loop because underlying stream is closed, and there
            // happens to be no more data to process.
            return 0 === this.buffer.length ? [2
            /*return*/
            , null] : ( // Broke out of the loop because underlying stream is closed, but still
            // cannot find an open bracket.
            (t = this.rc()) < 0 && this.sc("Reached the end of bundle when a length string is expected."), e = this.buffer.slice(0, t), [2
            /*return*/
            , (this.buffer = this.buffer.slice(t), e)]);
        }
      });
    });
  },
  /**
   * Reads from a specified position from the internal buffer, for a specified
   * number of bytes, pulling more data from the underlying stream if needed.
   *
   * Returns a string decoded from the read bytes.
   */
  t.prototype.ic = function (t) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var e;
      return (0, _tslib.__generator)(this, function (n) {
        switch (n.label) {
          case 0:
            return this.buffer.length < t ? [4
            /*yield*/
            , this.oc()] : [3
            /*break*/
            , 3];

          case 1:
            n.sent() && this.sc("Reached the end of bundle when more is expected."), n.label = 2;

          case 2:
            return [3
            /*break*/
            , 0];

          case 3:
            // Update the internal buffer to drop the read json string.
            return e = this.tc.decode(this.buffer.slice(0, t)), [2
            /*return*/
            , (this.buffer = this.buffer.slice(t), e)];
        }
      });
    });
  }, t.prototype.sc = function (t) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    throw this.Zo.cancel(), new Error("Invalid bundle format: " + t);
  },
  /**
   * Pulls more data from underlying stream to internal buffer.
   * Returns a boolean indicating whether the stream is finished.
   */
  t.prototype.oc = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var t, e;
      return (0, _tslib.__generator)(this, function (n) {
        switch (n.label) {
          case 0:
            return [4
            /*yield*/
            , this.Zo.read()];

          case 1:
            return (t = n.sent()).done || ((e = new Uint8Array(this.buffer.length + t.value.length)).set(this.buffer), e.set(t.value, this.buffer.length), this.buffer = e), [2
            /*return*/
            , t.done];
        }
      });
    });
  }, t;
}(),
    gu =
/** @class */
function () {
  function t(t) {
    this.datastore = t, // The version of each document that was read during this transaction.
    this.readVersions = new Map(), this.mutations = [], this.committed = !1,
    /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
    this.lastWriteError = null,
    /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
    this.writtenDocs = new Set();
  }

  return t.prototype.lookup = function (t) {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var e,
          n = this;
      return (0, _tslib.__generator)(this, function (r) {
        switch (r.label) {
          case 0:
            if (this.ensureCommitNotCalled(), this.mutations.length > 0) throw new G(j.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
            return [4
            /*yield*/
            , function (t, e) {
              return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
                var n, r, i, o, s, u;
                return (0, _tslib.__generator)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return n = C(t), r = Ln(n.D) + "/documents", i = {
                        documents: e.map(function (t) {
                          return An(n.D, t);
                        })
                      }, [4
                      /*yield*/
                      , n.Ui("BatchGetDocuments", r, i)];

                    case 1:
                      return o = a.sent(), s = new Map(), o.forEach(function (t) {
                        var e = function (t, e) {
                          return "found" in e ? function (t, e) {
                            k(!!e.found), e.found.name, e.found.updateTime;
                            var n = kn(t, e.found.name),
                                r = Sn(e.found.updateTime),
                                i = new se({
                              mapValue: {
                                fields: e.found.fields
                              }
                            });
                            return new gt(n, r, i, {});
                          }(t, e) : "missing" in e ? function (t, e) {
                            k(!!e.missing), k(!!e.readTime);
                            var n = kn(t, e.missing),
                                r = Sn(e.readTime);
                            return new wt(n, r);
                          }(t, e) : A();
                        }(n.D, t);

                        s.set(e.key.toString(), e);
                      }), u = [], [2
                      /*return*/
                      , (e.forEach(function (t) {
                        var e = s.get(t.toString());
                        k(!!e), u.push(e);
                      }), u)];
                  }
                });
              });
            }(this.datastore, t)];

          case 1:
            return [2
            /*return*/
            , ((e = r.sent()).forEach(function (t) {
              t instanceof wt || t instanceof gt ? n.recordVersion(t) : A();
            }), e)];
        }
      });
    });
  }, t.prototype.set = function (t, e) {
    this.write(e.toMutation(t, this.precondition(t))), this.writtenDocs.add(t.toString());
  }, t.prototype.update = function (t, e) {
    try {
      this.write(e.toMutation(t, this.preconditionForUpdate(t)));
    } catch (t) {
      this.lastWriteError = t;
    }

    this.writtenDocs.add(t.toString());
  }, t.prototype.delete = function (t) {
    this.write(new je(t, this.precondition(t))), this.writtenDocs.add(t.toString());
  }, t.prototype.commit = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var t,
          e = this;
      return (0, _tslib.__generator)(this, function (n) {
        switch (n.label) {
          case 0:
            if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
            return t = this.readVersions, // For each mutation, note that the doc was written.
            this.mutations.forEach(function (e) {
              t.delete(e.key.toString());
            }), // For each document that was read but not written to, we want to perform
            // a `verify` operation.
            t.forEach(function (t, n) {
              var r = H.fromPath(n);
              e.mutations.push(new Ge(r, e.precondition(r)));
            }), [4
            /*yield*/
            , function (t, e) {
              return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
                var n, r, i;
                return (0, _tslib.__generator)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return n = C(t), r = Ln(n.D) + "/documents", i = {
                        writes: e.map(function (t) {
                          return Mn(n.D, t);
                        })
                      }, [4
                      /*yield*/
                      , n.Mi("Commit", r, i)];

                    case 1:
                      return o.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }(this.datastore, this.mutations)];

          case 1:
            // For each mutation, note that the doc was written.
            return n.sent(), this.committed = !0, [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.recordVersion = function (t) {
    var e;
    if (t instanceof gt) e = t.version;else {
      if (!(t instanceof wt)) throw A(); // For deleted docs, we must use baseVersion 0 when we overwrite them.

      e = ie.min();
    }
    var n = this.readVersions.get(t.key.toString());

    if (n) {
      if (!e.isEqual(n)) // This transaction will fail no matter what.
        throw new G(j.ABORTED, "Document version changed between two reads.");
    } else this.readVersions.set(t.key.toString(), e);
  },
  /**
   * Returns the version of this document when it was read in this transaction,
   * as a precondition, or no precondition if it was not read.
   */
  t.prototype.precondition = function (t) {
    var e = this.readVersions.get(t.toString());
    return !this.writtenDocs.has(t.toString()) && e ? De.updateTime(e) : De.none();
  },
  /**
   * Returns the precondition for a document if the operation is an update.
   */
  t.prototype.preconditionForUpdate = function (t) {
    var e = this.readVersions.get(t.toString()); // The first time a document is written, we want to take into account the
    // read time and existence

    if (!this.writtenDocs.has(t.toString()) && e) {
      if (e.isEqual(ie.min())) // The document doesn't exist, so fail the transaction.
        // This has to be validated locally because you can't send a
        // precondition that a document does not exist without changing the
        // semantics of the backend write to be an insert. This is the reverse
        // of what we want, since we want to assert that the document doesn't
        // exist but then send the update and have it fail. Since we can't
        // express that to the backend, we have to validate locally.
        // Note: this can change once we can send separate verify writes in the
        // transaction.
        throw new G(j.INVALID_ARGUMENT, "Can't update a document that doesn't exist."); // Document exists, base precondition on document update time.

      return De.updateTime(e);
    } // Document was not read, so we just use the preconditions for a blind
    // update.


    return De.exists(!0);
  }, t.prototype.write = function (t) {
    this.ensureCommitNotCalled(), this.mutations.push(t);
  }, t.prototype.ensureCommitNotCalled = function () {}, t;
}(),
    wu =
/** @class */
function () {
  function t(t, e, n, r) {
    this.asyncQueue = t, this.datastore = e, this.updateFunction = n, this.deferred = r, this.cc = 5, this.rr = new Lo(this.asyncQueue, "transaction_retry"
    /* TransactionRetry */
    )
    /** Runs the transaction and sets the result on deferred. */
    ;
  }

  return t.prototype.run = function () {
    this.ac();
  }, t.prototype.ac = function () {
    var t = this;
    this.rr.Yi(function () {
      return (0, _tslib.__awaiter)(t, void 0, void 0, function () {
        var t,
            e,
            n = this;
        return (0, _tslib.__generator)(this, function (r) {
          return t = new gu(this.datastore), (e = this.uc(t)) && e.then(function (e) {
            n.asyncQueue.enqueueAndForget(function () {
              return t.commit().then(function () {
                n.deferred.resolve(e);
              }).catch(function (t) {
                n.hc(t);
              });
            });
          }).catch(function (t) {
            n.hc(t);
          }), [2
          /*return*/
          ];
        });
      });
    });
  }, t.prototype.uc = function (t) {
    try {
      var e = this.updateFunction(t);
      return !V(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t) {
      // Do not retry errors thrown by user provided updateFunction.
      return this.deferred.reject(t), null;
    }
  }, t.prototype.hc = function (t) {
    var e = this;
    this.cc > 0 && this.lc(t) ? (this.cc -= 1, this.asyncQueue.enqueueAndForget(function () {
      return e.ac(), Promise.resolve();
    })) : this.deferred.reject(t);
  }, t.prototype.lc = function (t) {
    if ("FirebaseError" === t.name) {
      // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
      // non-matching document versions with ABORTED. These errors should be retried.
      var e = t.code;
      return "aborted" === e || "failed-precondition" === e || !ze(e);
    }

    return !1;
  }, t;
}(),
    bu =
/** @class */
function () {
  function t(t,
  /**
   * Asynchronous queue responsible for all of our internal processing. When
   * we get incoming work from the user (via public API) or the network
   * (incoming GRPC messages), we should always schedule onto this queue.
   * This ensures all of our work is properly serialized (e.g. we don't
   * start processing a new operation while the previous one is waiting for
   * an async I/O to complete).
   */
  e, n) {
    var r = this;
    this.credentials = t, this.asyncQueue = e, this.databaseInfo = n, this.user = lo.UNAUTHENTICATED, this.clientId = L.u(), this.credentialListener = function () {}, this.receivedInitialUser = new Ir(), this.credentials.setChangeListener(function (t) {
      _("FirestoreClient", "Received user=", t.uid), r.user = t, r.credentialListener(t), r.receivedInitialUser.resolve();
    });
  }

  return t.prototype.getConfiguration = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      return (0, _tslib.__generator)(this, function (t) {
        switch (t.label) {
          case 0:
            return [4
            /*yield*/
            , this.receivedInitialUser.promise];

          case 1:
            return [2
            /*return*/
            , (t.sent(), {
              asyncQueue: this.asyncQueue,
              databaseInfo: this.databaseInfo,
              clientId: this.clientId,
              credentials: this.credentials,
              initialUser: this.user,
              maxConcurrentLimboResolutions: 100
            })];
        }
      });
    });
  }, t.prototype.setCredentialChangeListener = function (t) {
    var e = this;
    this.credentialListener = t, // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.receivedInitialUser.promise.then(function () {
      return e.credentialListener(e.user);
    });
  },
  /**
   * Checks that the client has not been terminated. Ensures that other methods on
   * this class cannot be called after the client is terminated.
   */
  t.prototype.verifyNotTerminated = function () {
    if (this.asyncQueue.isShuttingDown) throw new G(j.FAILED_PRECONDITION, "The client has already been terminated.");
  }, t.prototype.terminate = function () {
    var t = this;
    this.asyncQueue.enterRestrictedMode();
    var e = new Ir();
    return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(function () {
      return (0, _tslib.__awaiter)(t, void 0, void 0, function () {
        var t, n;
        return (0, _tslib.__generator)(this, function (r) {
          switch (r.label) {
            case 0:
              return r.trys.push([0, 5,, 6]), this.onlineComponents ? [4
              /*yield*/
              , this.onlineComponents.terminate()] : [3
              /*break*/
              , 2];

            case 1:
              r.sent(), r.label = 2;

            case 2:
              return this.offlineComponents ? [4
              /*yield*/
              , this.offlineComponents.terminate()] : [3
              /*break*/
              , 4];

            case 3:
              r.sent(), r.label = 4;

            case 4:
              // `removeChangeListener` must be called after shutting down the
              // RemoteStore as it will prevent the RemoteStore from retrieving
              // auth tokens.
              return this.credentials.removeChangeListener(), e.resolve(), [3
              /*break*/
              , 6];

            case 5:
              return t = r.sent(), n = fs(t, "Failed to shutdown persistence"), e.reject(n), [3
              /*break*/
              , 6];

            case 6:
              return [2
              /*return*/
              ];
          }
        });
      });
    }), e.promise;
  }, t;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A class representing a bundle.
 *
 * Takes a bundle stream or buffer, and presents abstractions to read bundled
 * elements out of the underlying content.
 */


function Iu(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n,
        r,
        i = this;
    return (0, _tslib.__generator)(this, function (o) {
      switch (o.label) {
        case 0:
          return t.asyncQueue.verifyOperationInProgress(), _("FirestoreClient", "Initializing OfflineComponentProvider"), [4
          /*yield*/
          , t.getConfiguration()];

        case 1:
          return n = o.sent(), [4
          /*yield*/
          , e.initialize(n)];

        case 2:
          return o.sent(), r = n.initialUser, t.setCredentialChangeListener(function (n) {
            r.isEqual(n) || (r = n, t.asyncQueue.enqueueRetryable(function () {
              return (0, _tslib.__awaiter)(i, void 0, void 0, function () {
                return (0, _tslib.__generator)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , ji(e.localStore, n)];

                    case 1:
                      return t.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }));
          }), // When a user calls clearPersistence() in one client, all other clients
          // need to be terminated to allow the delete to succeed.
          e.persistence.setDatabaseDeletedListener(function () {
            return t.terminate();
          }), t.offlineComponents = e, [2
          /*return*/
          ];
      }
    });
  });
}

function Eu(t, e) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var n, r;
    return (0, _tslib.__generator)(this, function (i) {
      switch (i.label) {
        case 0:
          return t.asyncQueue.verifyOperationInProgress(), [4
          /*yield*/
          , Tu(t)];

        case 1:
          return n = i.sent(), _("FirestoreClient", "Initializing OnlineComponentProvider"), [4
          /*yield*/
          , t.getConfiguration()];

        case 2:
          return r = i.sent(), [4
          /*yield*/
          , e.initialize(n, r)];

        case 3:
          return i.sent(), // The CredentialChangeListener of the online component provider takes
          // precedence over the offline component provider.
          t.setCredentialChangeListener(function (n) {
            return t.asyncQueue.enqueueRetryable(function () {
              return function (t, e) {
                return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
                  var n, r;
                  return (0, _tslib.__generator)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (n = C(t)).asyncQueue.verifyOperationInProgress(), _("RemoteStore", "RemoteStore received new credentials"), r = Wo(n), // Tear down and re-create our network streams. This will ensure we get a
                        // fresh auth token for the new user and re-fill the write pipeline with
                        // new mutations from the LocalStore (since mutations are per-user).
                        n.Qr.add(3
                        /* CredentialChange */
                        ), [4
                        /*yield*/
                        , Uo(n)];

                      case 1:
                        return i.sent(), r && // Don't set the network status to Unknown if we are offline.
                        n.jr.set("Unknown"
                        /* Unknown */
                        ), [4
                        /*yield*/
                        , n.remoteSyncer.handleCredentialChange(e)];

                      case 2:
                        return i.sent(), n.Qr.delete(3
                        /* CredentialChange */
                        ), [4
                        /*yield*/
                        , Vo(n)];

                      case 3:
                        // Tear down and re-create our network streams. This will ensure we get a
                        // fresh auth token for the new user and re-fill the write pipeline with
                        // new mutations from the LocalStore (since mutations are per-user).
                        return i.sent(), [2
                        /*return*/
                        ];
                    }
                  });
                });
              }(e.remoteStore, n);
            });
          }), t.onlineComponents = e, [2
          /*return*/
          ];
      }
    });
  });
}

function Tu(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    return (0, _tslib.__generator)(this, function (e) {
      switch (e.label) {
        case 0:
          return t.offlineComponents ? [3
          /*break*/
          , 2] : (_("FirestoreClient", "Using default OfflineComponentProvider"), [4
          /*yield*/
          , Iu(t, new fu())]);

        case 1:
          e.sent(), e.label = 2;

        case 2:
          return [2
          /*return*/
          , t.offlineComponents];
      }
    });
  });
}

function _u(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    return (0, _tslib.__generator)(this, function (e) {
      switch (e.label) {
        case 0:
          return t.onlineComponents ? [3
          /*break*/
          , 2] : (_("FirestoreClient", "Using default OnlineComponentProvider"), [4
          /*yield*/
          , Eu(t, new pu())]);

        case 1:
          e.sent(), e.label = 2;

        case 2:
          return [2
          /*return*/
          , t.onlineComponents];
      }
    });
  });
}

function Su(t) {
  return Tu(t).then(function (t) {
    return t.persistence;
  });
}

function Du(t) {
  return Tu(t).then(function (t) {
    return t.localStore;
  });
}

function Nu(t) {
  return _u(t).then(function (t) {
    return t.remoteStore;
  });
}

function Au(t) {
  return _u(t).then(function (t) {
    return t.syncEngine;
  });
}

function ku(t) {
  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
    var e, n;
    return (0, _tslib.__generator)(this, function (r) {
      switch (r.label) {
        case 0:
          return [4
          /*yield*/
          , _u(t)];

        case 1:
          return e = r.sent(), [2
          /*return*/
          , ((n = e.eventManager).onListen = Rs.bind(null, e.syncEngine), n.onUnlisten = Ps.bind(null, e.syncEngine), n)];
      }
    });
  });
}
/** Enables the network connection and re-enqueues all pending operations. */


function Cu(t, e, n) {
  var r = this;
  void 0 === n && (n = {});
  var i = new Ir();
  return t.asyncQueue.enqueueAndForget(function () {
    return (0, _tslib.__awaiter)(r, void 0, void 0, function () {
      var r;
      return (0, _tslib.__generator)(this, function (o) {
        switch (o.label) {
          case 0:
            return r = function r(t, e, n, _r2, i) {
              var o = new vu({
                next: function next(o) {
                  // Remove query first before passing event to user to avoid
                  // user actions affecting the now stale query.
                  e.enqueueAndForget(function () {
                    return gs(t, s);
                  });
                  var u = o.docs.has(n);
                  !u && o.fromCache ? // TODO(dimond): If we're online and the document doesn't
                  // exist then we resolve with a doc.exists set to false. If
                  // we're offline however, we reject the Promise in this
                  // case. Two options: 1) Cache the negative response from
                  // the server so we can deliver that even when you're
                  // offline 2) Actually reject the Promise in the online case
                  // if the document doesn't exist.
                  i.reject(new G(j.UNAVAILABLE, "Failed to get document because the client is offline.")) : u && o.fromCache && _r2 && "server" === _r2.source ? i.reject(new G(j.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o);
                },
                error: function error(t) {
                  return i.reject(t);
                }
              }),
                  s = new Es(Gt(n.path), o, {
                includeMetadataChanges: !0,
                uo: !0
              });
              return ms(t, s);
            }, [4
            /*yield*/
            , ku(t)];

          case 1:
            return [2
            /*return*/
            , r.apply(void 0, [o.sent(), t.asyncQueue, e, n, i])];
        }
      });
    });
  }), i.promise;
}

function xu(t, e, n) {
  var r = this;
  void 0 === n && (n = {});
  var i = new Ir();
  return t.asyncQueue.enqueueAndForget(function () {
    return (0, _tslib.__awaiter)(r, void 0, void 0, function () {
      var r;
      return (0, _tslib.__generator)(this, function (o) {
        switch (o.label) {
          case 0:
            return r = function r(t, e, n, _r3, i) {
              var o = new vu({
                next: function next(n) {
                  // Remove query first before passing event to user to avoid
                  // user actions affecting the now stale query.
                  e.enqueueAndForget(function () {
                    return gs(t, s);
                  }), n.fromCache && "server" === _r3.source ? i.reject(new G(j.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
                },
                error: function error(t) {
                  return i.reject(t);
                }
              }),
                  s = new Es(n, o, {
                includeMetadataChanges: !0,
                uo: !0
              });
              return ms(t, s);
            }, [4
            /*yield*/
            , ku(t)];

          case 1:
            return [2
            /*return*/
            , r.apply(void 0, [o.sent(), t.asyncQueue, e, n, i])];
        }
      });
    });
  }), i.promise;
}

var Lu =
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     */
function Lu(t, e, n, r, i, o) {
  this.databaseId = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i, this.autoDetectLongPolling = o;
},
    Ru =
/** @class */
function () {
  function t(t, e) {
    this.projectId = t, this.database = e || "(default)";
  }

  return Object.defineProperty(t.prototype, "isDefaultDatabase", {
    get: function get() {
      return "(default)" === this.database;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (e) {
    return e instanceof t && e.projectId === this.projectId && e.database === this.database;
  }, t;
}(),
    Ou = new Map(),
    Pu = function Pu(t, e) {
  this.user = e, this.type = "OAuth", this.authHeaders = {}, // Set the headers using Object Literal notation to avoid minification
  this.authHeaders.Authorization = "Bearer " + t;
},
    Mu =
/** @class */
function () {
  function t() {
    /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.changeListener = null;
  }

  return t.prototype.getToken = function () {
    return Promise.resolve(null);
  }, t.prototype.invalidateToken = function () {}, t.prototype.setChangeListener = function (t) {
    this.changeListener = t, // Fire with initial user.
    t(lo.UNAUTHENTICATED);
  }, t.prototype.removeChangeListener = function () {
    this.changeListener = null;
  }, t;
}(),
    Fu =
/** @class */
function () {
  function t(t) {
    var e = this;
    /**
     * The auth token listener registered with FirebaseApp, retained here so we
     * can unregister it.
     */

    this.fc = null,
    /** Tracks the current User. */
    this.currentUser = lo.UNAUTHENTICATED, this.receivedInitialUser = !1,
    /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
    this.dc = 0,
    /** The listener registered with setChangeListener(). */
    this.changeListener = null, this.forceRefresh = !1, this.fc = function () {
      e.dc++, e.currentUser = e.wc(), e.receivedInitialUser = !0, e.changeListener && e.changeListener(e.currentUser);
    }, this.dc = 0, this.auth = t.getImmediate({
      optional: !0
    }), this.auth ? this.auth.addAuthTokenListener(this.fc) : ( // if auth is not available, invoke tokenListener once with null token
    this.fc(null), t.get().then(function (t) {
      e.auth = t, e.fc && // tokenListener can be removed by removeChangeListener()
      e.auth.addAuthTokenListener(e.fc);
    }, function () {}));
  }

  return t.prototype.getToken = function () {
    var t = this,
        e = this.dc,
        n = this.forceRefresh; // Take note of the current value of the tokenCounter so that this method
    // can fail (with an ABORTED error) if there is a token change while the
    // request is outstanding.

    return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then(function (n) {
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      return t.dc !== e ? (_("FirebaseCredentialsProvider", "getToken aborted due to token change."), t.getToken()) : n ? (k("string" == typeof n.accessToken), new Pu(n.accessToken, t.currentUser)) : null;
    }) : Promise.resolve(null);
  }, t.prototype.invalidateToken = function () {
    this.forceRefresh = !0;
  }, t.prototype.setChangeListener = function (t) {
    this.changeListener = t, // Fire the initial event
    this.receivedInitialUser && t(this.currentUser);
  }, t.prototype.removeChangeListener = function () {
    this.auth && this.auth.removeAuthTokenListener(this.fc), this.fc = null, this.changeListener = null;
  }, // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  t.prototype.wc = function () {
    var t = this.auth && this.auth.getUid();
    return k(null === t || "string" == typeof t), new lo(t);
  }, t;
}(),
    qu =
/** @class */
function () {
  function t(t, e) {
    this._c = t, this.mc = e, this.type = "FirstParty", this.user = lo.FIRST_PARTY;
  }

  return Object.defineProperty(t.prototype, "authHeaders", {
    get: function get() {
      var t = {
        "X-Goog-AuthUser": this.mc
      },
          e = this._c.auth.getAuthHeaderValueForFirstParty([]); // Use array notation to prevent minification


      return e && (t.Authorization = e), t;
    },
    enumerable: !1,
    configurable: !0
  }), t;
}(),
    Vu =
/** @class */
function () {
  function t(t, e) {
    this._c = t, this.mc = e;
  }

  return t.prototype.getToken = function () {
    return Promise.resolve(new qu(this._c, this.mc));
  }, t.prototype.setChangeListener = function (t) {
    // Fire with initial uid.
    t(lo.FIRST_PARTY);
  }, t.prototype.removeChangeListener = function () {}, t.prototype.invalidateToken = function () {}, t;
}();
/** The default database name for a project. */

/** Represents the database ID a Firestore client is associated with. */

/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 */

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function Uu(t, e, n) {
  if (!n) throw new G(j.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".");
}

function Bu(t, e) {
  if (void 0 === e) return {
    merge: !1
  };
  if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new G(j.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
  return e;
}
/**
 * Validates that two boolean options are not set at the same time.
 */


function ju(t, e, n, r) {
  if (!0 === e && !0 === r) throw new G(j.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.");
}
/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */


function Gu(t) {
  if (!H.isDocumentKey(t)) throw new G(j.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t + " has " + t.length + ".");
}
/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */


function Ku(t) {
  if (H.isDocumentKey(t)) throw new G(j.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t + " has " + t.length + ".");
}
/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */

/** Returns a string describing the type / value of the provided input. */


function zu(t) {
  if (void 0 === t) return "undefined";
  if (null === t) return "null";
  if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
  if ("number" == typeof t || "boolean" == typeof t) return "" + t;

  if ("object" == _typeof(t)) {
    if (t instanceof Array) return "an array";

    var e =
    /** Hacky method to try to get the constructor name for an object. */
    function (t) {
      if (t.constructor) {
        var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
        if (e && e.length > 1) return e[1];
      }

      return null;
    }(t);

    return e ? "a custom " + e + " object" : "an object";
  }

  return "function" == typeof t ? "a function" : A();
}

function Qu(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
  if ("_delegate" in t && ( // Unwrap Compat types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t = t._delegate), !(t instanceof e)) {
    if (e.name === t.constructor.name) throw new G(j.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
    var n = zu(t);
    throw new G(j.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + n);
  }

  return t;
}

function Wu(t, e) {
  if (e <= 0) throw new G(j.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:

/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */


var Hu =
/** @class */
function () {
  function t(t) {
    var e;

    if (void 0 === t.host) {
      if (void 0 !== t.ssl) throw new G(j.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = !0;
    } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;

    if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040;else {
      if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new G(j.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, ju("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
  }

  return t.prototype.isEqual = function (t) {
    return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
  }, t;
}(),
    Yu =
/** @class */
function () {
  /** @hideconstructor */
  function t(t, e) {
    this._persistenceKey = "(lite)", this._settings = new Hu({}), this._settingsFrozen = !1, t instanceof Ru ? (this._databaseId = t, this._credentials = new Mu()) : (this._app = t, this._databaseId = function (t) {
      if (!Object.prototype.hasOwnProperty.apply(t.options, ["projectId"])) throw new G(j.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new Ru(t.options.projectId);
    }(t), this._credentials = new Fu(e));
  }

  return Object.defineProperty(t.prototype, "app", {
    /**
     * The {@link FirebaseApp} associated with this `Firestore` service
     * instance.
     */
    get: function get() {
      if (!this._app) throw new G(j.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this._app;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "_initialized", {
    get: function get() {
      return this._settingsFrozen;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "_terminated", {
    get: function get() {
      return void 0 !== this._terminateTask;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._setSettings = function (t) {
    if (this._settingsFrozen) throw new G(j.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new Hu(t), void 0 !== t.credentials && (this._credentials = function (t) {
      if (!t) return new Mu();

      switch (t.type) {
        case "gapi":
          var e = t.client; // Make sure this really is a Gapi client.

          return k(!("object" != _typeof(e) || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Vu(e, t.sessionIndex || "0");

        case "provider":
          return t.client;

        default:
          throw new G(j.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
      }
    }(t.credentials));
  }, t.prototype._getSettings = function () {
    return this._settings;
  }, t.prototype._freezeSettings = function () {
    return this._settingsFrozen = !0, this._settings;
  }, t.prototype._delete = function () {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }, t.prototype.toJSON = function () {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  },
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  t.prototype._terminate = function () {
    /**
    * Removes all components associated with the provided instance. Must be called
    * when the `Firestore` instance is terminated.
    */
    return t = this, (e = Ou.get(t)) && (_("ComponentProvider", "Removing Datastore"), Ou.delete(t), e.terminate()), Promise.resolve();
    var t, e;
  }, t;
}(),
    Ju = function Ju(t) {
  this._delegate = t;
},
    Xu =
/** @class */
function () {
  /** @hideconstructor */
  function t(t, e, n) {
    this._converter = e, this._key = n,
    /** The type of this Firestore reference. */
    this.type = "document", this.firestore = t;
  }

  return Object.defineProperty(t.prototype, "_path", {
    get: function get() {
      return this._key.path;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "id", {
    /**
     * The document's identifier within its collection.
     */
    get: function get() {
      return this._key.path.lastSegment();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "path", {
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */
    get: function get() {
      return this._key.path.canonicalString();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "parent", {
    /**
     * The collection this `DocumentReference` belongs to.
     */
    get: function get() {
      return new Zu(this.firestore, this._converter, this._key.path.popLast());
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.withConverter = function (e) {
    return new t(this.firestore, e, this._key);
  }, t;
}(),
    $u =
/** @class */
function () {
  // This is the lite version of the Query class in the main SDK.

  /** @hideconstructor protected */
  function t(t, e, n) {
    this._converter = e, this._query = n,
    /** The type of this Firestore reference. */
    this.type = "query", this.firestore = t;
  }

  return t.prototype.withConverter = function (e) {
    return new t(this.firestore, e, this._query);
  }, t;
}(),
    Zu =
/** @class */
function (t) {
  /** @hideconstructor */
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this, e, n, Gt(r)) || this).firestore = e, i._path = r, i.type = "collection", i;
  }

  return (0, _tslib.__extends)(e, t), Object.defineProperty(e.prototype, "id", {
    /** The collection's identifier. */
    get: function get() {
      return this._query.path.lastSegment();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "path", {
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */
    get: function get() {
      return this._query.path.canonicalString();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "parent", {
    /**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */
    get: function get() {
      var t = this._path.popLast();

      return t.isEmpty() ? null : new Xu(this.firestore,
      /* converter= */
      null, new H(t));
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.withConverter = function (t) {
    return new e(this.firestore, t, this._path);
  }, e;
}($u);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link getFirestore}.
 */


function ta(t, e) {
  for (var n, r = [], i = 2; i < arguments.length; i++) {
    r[i - 2] = arguments[i];
  }

  if (t instanceof Ju && (t = t._delegate), Uu("collection", "path", e), t instanceof Yu) return Ku(n = z.fromString.apply(z, (0, _tslib.__spreadArray)([e], r))), new Zu(t,
  /* converter= */
  null, n);
  if (!(t instanceof Xu || t instanceof Zu)) throw new G(j.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
  return Ku(n = z.fromString.apply(z, (0, _tslib.__spreadArray)([t.path], r)).child(z.fromString(e))), new Zu(t.firestore,
  /* converter= */
  null, n);
} // TODO(firestorelite): Consider using ErrorFactory -
// https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106

/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root Firestore instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */


function ea(t, e) {
  for (var n, r = [], i = 2; i < arguments.length; i++) {
    r[i - 2] = arguments[i];
  }

  if (t instanceof Ju && (t = t._delegate), // We allow omission of 'pathString' but explicitly prohibit passing in both
  // 'undefined' and 'null'.
  1 === arguments.length && (e = L.u()), Uu("doc", "path", e), t instanceof Yu) return Gu(n = z.fromString.apply(z, (0, _tslib.__spreadArray)([e], r))), new Xu(t,
  /* converter= */
  null, new H(n));
  if (!(t instanceof Xu || t instanceof Zu)) throw new G(j.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
  return Gu(n = t._path.child(z.fromString.apply(z, (0, _tslib.__spreadArray)([e], r)))), new Xu(t.firestore, t instanceof Zu ? t._converter : null, new H(n));
}
/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */


function na(t, e) {
  return t instanceof Ju && (t = t._delegate), e instanceof Ju && (e = e._delegate), (t instanceof Xu || t instanceof Zu) && (e instanceof Xu || e instanceof Zu) && t.firestore === e.firestore && t.path === e.path && t._converter === e._converter
  /**
  * Returns true if the provided queries point to the same collection and apply
  * the same constraints.
  *
  * @param left - A `Query` to compare.
  * @param right - A `Query` to compare.
  * @returns true if the references point to the same location in the same
  * Firestore database.
  */
  ;
}

function ra(t, e) {
  return t instanceof Ju && (t = t._delegate), e instanceof Ju && (e = e._delegate), t instanceof $u && e instanceof $u && t.firestore === e.firestore && $t(t._query, e._query) && t._converter === e._converter
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  ;
}

var ia =
/** @class */
function () {
  function t() {
    var t = this; // The last promise in the queue.

    this.yc = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
    // retried with backoff.
    this.gc = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.Ec = !1, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.Tc = [], // visible for testing
    this.Ic = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.Ac = !1, // List of TimerIds to fast-forward delays for.
    this.Rc = [], // Backoff timer used to schedule retries for retryable operations
    this.rr = new Lo(this, "async_queue_retry"
    /* AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.bc = function () {
      var e = Co();
      e && _("AsyncQueue", "Visibility state changed to " + e.visibilityState), t.rr.Zi();
    };
    var e = Co();
    e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.bc);
  }

  return Object.defineProperty(t.prototype, "isShuttingDown", {
    get: function get() {
      return this.Ec;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  t.prototype.enqueueAndForget = function (t) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.enqueue(t);
  }, t.prototype.enqueueAndForgetEvenWhileRestricted = function (t) {
    this.vc(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.Pc(t);
  }, t.prototype.enterRestrictedMode = function () {
    if (!this.Ec) {
      this.Ec = !0;
      var t = Co();
      t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.bc);
    }
  }, t.prototype.enqueue = function (t) {
    return this.vc(), this.Ec ? new Promise(function (t) {}) : this.Pc(t);
  }, t.prototype.enqueueRetryable = function (t) {
    var e = this;
    this.enqueueAndForget(function () {
      return e.gc.push(t), e.Vc();
    });
  },
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  t.prototype.Vc = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var t,
          e = this;
      return (0, _tslib.__generator)(this, function (n) {
        switch (n.label) {
          case 0:
            if (0 === this.gc.length) return [3
            /*break*/
            , 5];
            n.label = 1;

          case 1:
            return n.trys.push([1, 3,, 4]), [4
            /*yield*/
            , this.gc[0]()];

          case 2:
            return n.sent(), this.gc.shift(), this.rr.reset(), [3
            /*break*/
            , 4];

          case 3:
            if (!Nr(t = n.sent())) throw t; // Failure will be handled by AsyncQueue

            return _("AsyncQueue", "Operation failed with retryable error: " + t), [3
            /*break*/
            , 4];

          case 4:
            this.gc.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
            // This is necessary to run retryable operations that failed during
            // their initial attempt since we don't know whether they are already
            // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
            // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
            // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
            // call scheduled here.
            // Since `backoffAndRun()` cancels an existing backoff and schedules a
            // new backoff on every call, there is only ever a single additional
            // operation in the queue.
            this.rr.Yi(function () {
              return e.Vc();
            }), n.label = 5;

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.Pc = function (t) {
    var e = this,
        n = this.yc.then(function () {
      return e.Ac = !0, t().catch(function (t) {
        // Re-throw the error so that this.tail becomes a rejected Promise and
        // all further attempts to chain (via .then) will just short-circuit
        // and return the rejected Promise.
        throw e.Ic = t, e.Ac = !1, S("INTERNAL UNHANDLED ERROR: ",
        /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error - Error or FirestoreError
        */
        function (t) {
          var e = t.message || "";
          return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), e;
        }(t)), t;
      }).then(function (t) {
        return e.Ac = !1, t;
      });
    });
    return this.yc = n, n;
  }, t.prototype.enqueueAfterDelay = function (t, e, n) {
    var r = this;
    this.vc(), // Fast-forward delays for timerIds that have been overriden.
    this.Rc.indexOf(t) > -1 && (e = 0);
    var i = hs.createAndSchedule(this, t, e, n, function (t) {
      return r.Sc(t);
    });
    return this.Tc.push(i), i;
  }, t.prototype.vc = function () {
    this.Ic && A();
  }, t.prototype.verifyOperationInProgress = function () {},
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  t.prototype.Dc = function () {
    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
      var t;
      return (0, _tslib.__generator)(this, function (e) {
        switch (e.label) {
          case 0:
            return [4
            /*yield*/
            , t = this.yc];

          case 1:
            e.sent(), e.label = 2;

          case 2:
            if (t !== this.yc) return [3
            /*break*/
            , 0];
            e.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  t.prototype.Cc = function (t) {
    for (var e = 0, n = this.Tc; e < n.length; e++) {
      if (n[e].timerId === t) return !0;
    }

    return !1;
  },
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  t.prototype.xc = function (t) {
    var e = this; // Note that draining may generate more delayed ops, so we do that first.

    return this.Dc().then(function () {
      // Run ops in the same order they'd run if they ran naturally.
      e.Tc.sort(function (t, e) {
        return t.targetTimeMs - e.targetTimeMs;
      });

      for (var n = 0, r = e.Tc; n < r.length; n++) {
        var i = r[n];
        if (i.skipDelay(), "all"
        /* All */
        !== t && i.timerId === t) break;
      }

      return e.Dc();
    });
  },
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  t.prototype.Nc = function (t) {
    this.Rc.push(t);
  },
  /** Called once a DelayedOperation is run or canceled. */
  t.prototype.Sc = function (t) {
    // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
    var e = this.Tc.indexOf(t);
    this.Tc.splice(e, 1);
  }, t;
}();

function oa(t) {
  /**
  * Returns true if obj is an object and contains at least one of the specified
  * methods.
  */
  return function (t, e) {
    if ("object" != _typeof(t) || null === t) return !1;

    for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) {
      var o = i[r];
      if (o in n && "function" == typeof n[o]) return !0;
    }

    return !1;
  }(t);
}

var sa =
/** @class */
function () {
  function t() {
    this._progressObserver = {}, this._taskCompletionResolver = new Ir(), this._lastProgress = {
      taskState: "Running",
      totalBytes: 0,
      totalDocuments: 0,
      bytesLoaded: 0,
      documentsLoaded: 0
    }
    /**
    * Registers functions to listen to bundle loading progress events.
    * @param next - Called when there is a progress update from bundle loading. Typically `next` calls occur
    *   each time a Firestore document is loaded from the bundle.
    * @param error - Called when an error occurs during bundle loading. The task aborts after reporting the
    *   error, and there should be no more updates after this.
    * @param complete - Called when the loading task is complete.
    */
    ;
  }

  return t.prototype.onProgress = function (t, e, n) {
    this._progressObserver = {
      next: t,
      error: e,
      complete: n
    };
  },
  /**
   * Implements the `Promise<LoadBundleTaskProgress>.catch` interface.
   *
   * @param onRejected - Called when an error occurs during bundle loading.
   */
  t.prototype.catch = function (t) {
    return this._taskCompletionResolver.promise.catch(t);
  },
  /**
   * Implements the `Promise<LoadBundleTaskProgress>.then` interface.
   *
   * @param onFulfilled - Called on the completion of the loading task with a final `LoadBundleTaskProgress` update.
   *   The update will always have its `taskState` set to `"Success"`.
   * @param onRejected - Called when an error occurs during bundle loading.
   */
  t.prototype.then = function (t, e) {
    return this._taskCompletionResolver.promise.then(t, e);
  },
  /**
   * Notifies all observers that bundle loading has completed, with a provided
   * `LoadBundleTaskProgress` object.
   *
   * @private
   */
  t.prototype._completeWith = function (t) {
    this._updateProgress(t), this._progressObserver.complete && this._progressObserver.complete(), this._taskCompletionResolver.resolve(t);
  },
  /**
   * Notifies all observers that bundle loading has failed, with a provided
   * `Error` as the reason.
   *
   * @private
   */
  t.prototype._failWith = function (t) {
    this._lastProgress.taskState = "Error", this._progressObserver.next && this._progressObserver.next(this._lastProgress), this._progressObserver.error && this._progressObserver.error(t), this._taskCompletionResolver.reject(t);
  },
  /**
   * Notifies a progress update of loading a bundle.
   * @param progress - The new progress.
   *
   * @private
   */
  t.prototype._updateProgress = function (t) {
    this._lastProgress = t, this._progressObserver.next && this._progressObserver.next(t);
  }, t;
}(),
    ua = -1,
    aa =
/** @class */
function (t) {
  /** @hideconstructor */
  function e(e, n) {
    var r = this;
    return (r = t.call(this, e, n) || this)._queue = new ia(), r._persistenceKey = "name" in e ? e.name : "[DEFAULT]", r;
  }

  return (0, _tslib.__extends)(e, t), e.prototype._terminate = function () {
    return this._firestoreClient || // The client must be initialized to ensure that all subsequent API
    // usage throws an exception.
    ha(this), this._firestoreClient.terminate();
  }, e;
}(Yu);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** DOMException error code constants. */

/**
 * @internal
 */


exports.I = aa;
exports.T = ua;

function ca(t) {
  return t._firestoreClient || ha(t), t._firestoreClient.verifyNotTerminated(), t._firestoreClient;
}

function ha(t) {
  var e = t._freezeSettings(),
      n = function (t, e, n) {
    return new Lu(t, e, n.host, n.ssl, n.experimentalForceLongPolling, n.experimentalAutoDetectLongPolling);
  }(t._databaseId, t._persistenceKey, e);

  t._firestoreClient = new bu(t._credentials, t._queue, n);
}
/**
 * Attempts to enable persistent storage, if possible.
 *
 * Must be called before any other functions (other than
 * {@link initializeFirestore}, {@link getFirestore} or
 * {@link clearIndexedDbPersistence}.
 *
 * If this fails, `enableIndexedDbPersistence()` will reject the promise it
 * returns. Note that even after this failure, the `Firestore` instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The `Firestore` instance to enable persistence for.
 * @param persistenceSettings - Optional settings object to configure
 * persistence.
 * @returns A promise that represents successfully enabling persistent storage.
 */

/**
 * Registers both the `OfflineComponentProvider` and `OnlineComponentProvider`.
 * If the operation fails with a recoverable error (see
 * `canRecoverFromIndexedDbError()` below), the returned Promise is rejected
 * but the client remains usable.
 */


function fa(t, e, n) {
  var r = this,
      i = new Ir();
  return t.asyncQueue.enqueue(function () {
    return (0, _tslib.__awaiter)(r, void 0, void 0, function () {
      var r;
      return (0, _tslib.__generator)(this, function (o) {
        switch (o.label) {
          case 0:
            return o.trys.push([0, 3,, 4]), [4
            /*yield*/
            , Iu(t, n)];

          case 1:
            return o.sent(), [4
            /*yield*/
            , Eu(t, e)];

          case 2:
            return o.sent(), i.resolve(), [3
            /*break*/
            , 4];

          case 3:
            if (!
            /**
            * Decides whether the provided error allows us to gracefully disable
            * persistence (as opposed to crashing the client).
            */
            function (t) {
              return "FirebaseError" === t.name ? t.code === j.FAILED_PRECONDITION || t.code === j.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || // Firefox Private Browsing mode disables IndexedDb and returns
              // INVALID_STATE for any usage.
              11 === t.code;
            }(r = o.sent())) throw r;
            return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + r), i.reject(r), [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  }).then(function () {
    return i.promise;
  });
}
/**
 * Re-enables use of the network for this Firestore instance after a prior
 * call to {@link disableNetwork}.
 *
 * @returns A promise that is resolved once the network has been enabled.
 */


function la(t) {
  if (t._initialized || t._terminated) throw new G(j.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */


var da =
/** @class */
function () {
  /**
   * Creates a FieldPath from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  function t() {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    }

    for (var n = 0; n < t.length; ++n) {
      if (0 === t[n].length) throw new G(j.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    }

    this._internalPath = new W(t);
  }
  /**
   * Returns true if this `FieldPath` is equal to the provided one.
   *
   * @param other - The `FieldPath` to compare against.
   * @returns true if this `FieldPath` is equal to the provided one.
   */


  return t.prototype.isEqual = function (t) {
    return this._internalPath.isEqual(t._internalPath);
  }, t;
}(),
    pa =
/** @class */
function () {
  /** @hideconstructor */
  function t(t) {
    this._byteString = t;
  }
  /**
   * Creates a new `Bytes` object from the given Base64 string, converting it to
   * bytes.
   *
   * @param base64 - The Base64 string used to create the `Bytes` object.
   */


  return t.fromBase64String = function (e) {
    try {
      return new t(Y.fromBase64String(e));
    } catch (e) {
      throw new G(j.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
    }
  },
  /**
   * Creates a new `Bytes` object from the given Uint8Array.
   *
   * @param array - The Uint8Array used to create the `Bytes` object.
   */
  t.fromUint8Array = function (e) {
    return new t(Y.fromUint8Array(e));
  },
  /**
   * Returns the underlying bytes as a Base64-encoded string.
   *
   * @returns The Base64-encoded string created from the `Bytes` object.
   */
  t.prototype.toBase64 = function () {
    return this._byteString.toBase64();
  },
  /**
   * Returns the underlying bytes in a new `Uint8Array`.
   *
   * @returns The Uint8Array created from the `Bytes` object.
   */
  t.prototype.toUint8Array = function () {
    return this._byteString.toUint8Array();
  },
  /**
   * Returns a string representation of the `Bytes` object.
   *
   * @returns A string representation of the `Bytes` object.
   */
  t.prototype.toString = function () {
    return "Bytes(base64: " + this.toBase64() + ")";
  },
  /**
   * Returns true if this `Bytes` object is equal to the provided one.
   *
   * @param other - The `Bytes` object to compare against.
   * @returns true if this `Bytes` object is equal to the provided one.
   */
  t.prototype.isEqual = function (t) {
    return this._byteString.isEqual(t._byteString);
  }, t;
}(),
    ya =
/**
     * @param _methodName - The public API endpoint that returns this class.
     */
function ya(t) {
  this._methodName = t;
},
    va =
/** @class */
function () {
  /**
   * Creates a new immutable `GeoPoint` object with the provided latitude and
   * longitude values.
   * @param latitude - The latitude as number between -90 and 90.
   * @param longitude - The longitude as number between -180 and 180.
   */
  function t(t, e) {
    if (!isFinite(t) || t < -90 || t > 90) throw new G(j.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
    if (!isFinite(e) || e < -180 || e > 180) throw new G(j.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this._lat = t, this._long = e;
  }

  return Object.defineProperty(t.prototype, "latitude", {
    /**
     * The latitude of this `GeoPoint` instance.
     */
    get: function get() {
      return this._lat;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "longitude", {
    /**
     * The longitude of this `GeoPoint` instance.
     */
    get: function get() {
      return this._long;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * Returns true if this `GeoPoint` is equal to the provided one.
   *
   * @param other - The `GeoPoint` to compare against.
   * @returns true if this `GeoPoint` is equal to the provided one.
   */
  t.prototype.isEqual = function (t) {
    return this._lat === t._lat && this._long === t._long;
  }, t.prototype.toJSON = function () {
    return {
      latitude: this._lat,
      longitude: this._long
    };
  },
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  t.prototype._compareTo = function (t) {
    return R(this._lat, t._lat) || R(this._long, t._long);
  }, t;
}(),
    ma = /^__.*__$/,
    ga =
/** @class */
function () {
  function t(t, e, n) {
    this.data = t, this.fieldMask = e, this.fieldTransforms = n;
  }

  return t.prototype.toMutation = function (t, e) {
    return null !== this.fieldMask ? new Pe(t, this.data, this.fieldMask, e, this.fieldTransforms) : new Oe(t, this.data, e, this.fieldTransforms);
  }, t;
}(),
    wa =
/** @class */
function () {
  function t(t, // The fieldMask does not include document transforms.
  e, n) {
    this.data = t, this.fieldMask = e, this.fieldTransforms = n;
  }

  return t.prototype.toMutation = function (t, e) {
    return new Pe(t, this.data, this.fieldMask, e, this.fieldTransforms);
  }, t;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An immutable object representing an array of bytes.
 */


exports.x = va;

function ba(t) {
  switch (t) {
    case 0
    /* Set */
    : // fall through

    case 2
    /* MergeSet */
    : // fall through

    case 1
    /* Update */
    :
      return !0;

    case 3
    /* Argument */
    :
    case 4
    /* ArrayArgument */
    :
      return !1;

    default:
      throw A();
  }
}
/** A "context" object passed around while parsing user data. */


var Ia =
/** @class */
function () {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings - The settings for the parser.
   * @param databaseId - The database ID of the Firestore instance.
   * @param serializer - The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties - Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms - A mutable list of field transforms encountered
   * while parsing the data.
   * @param fieldMask - A mutable list of field paths encountered while parsing
   * the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  function t(t, e, n, r, i, o) {
    this.settings = t, this.databaseId = e, this.D = n, this.ignoreUndefinedProperties = r, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    void 0 === i && this.$c(), this.fieldTransforms = i || [], this.fieldMask = o || [];
  }

  return Object.defineProperty(t.prototype, "path", {
    get: function get() {
      return this.settings.path;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "Fc", {
    get: function get() {
      return this.settings.Fc;
    },
    enumerable: !1,
    configurable: !0
  }),
  /** Returns a new context with the specified settings overwritten. */
  t.prototype.Oc = function (e) {
    return new t(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.D, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
  }, t.prototype.kc = function (t) {
    var e,
        n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
        r = this.Oc({
      path: n,
      Mc: !1
    });
    return r.Lc(t), r;
  }, t.prototype.Bc = function (t) {
    var e,
        n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
        r = this.Oc({
      path: n,
      Mc: !1
    });
    return r.$c(), r;
  }, t.prototype.qc = function (t) {
    // TODO(b/34871131): We don't support array paths right now; so make path
    // undefined.
    return this.Oc({
      path: void 0,
      Mc: !0
    });
  }, t.prototype.Uc = function (t) {
    return Ba(t, this.settings.methodName, this.settings.Qc || !1, this.path, this.settings.Kc);
  },
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  t.prototype.contains = function (t) {
    return void 0 !== this.fieldMask.find(function (e) {
      return t.isPrefixOf(e);
    }) || void 0 !== this.fieldTransforms.find(function (e) {
      return t.isPrefixOf(e.field);
    });
  }, t.prototype.$c = function () {
    // TODO(b/34871131): Remove null check once we have proper paths for fields
    // within arrays.
    if (this.path) for (var t = 0; t < this.path.length; t++) {
      this.Lc(this.path.get(t));
    }
  }, t.prototype.Lc = function (t) {
    if (0 === t.length) throw this.Uc("Document fields must not be empty");
    if (ba(this.Fc) && ma.test(t)) throw this.Uc('Document fields cannot begin and end with "__"');
  }, t;
}(),
    Ea =
/** @class */
function () {
  function t(t, e, n) {
    this.databaseId = t, this.ignoreUndefinedProperties = e, this.D = n || xo(t)
    /** Creates a new top-level parse context. */
    ;
  }

  return t.prototype.Wc = function (t, e, n, r) {
    return void 0 === r && (r = !1), new Ia({
      Fc: t,
      methodName: e,
      Kc: n,
      path: W.emptyPath(),
      Mc: !1,
      Qc: r
    }, this.databaseId, this.D, this.ignoreUndefinedProperties);
  }, t;
}();
/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */


function Ta(t) {
  var e = t._freezeSettings(),
      n = xo(t._databaseId);

  return new Ea(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
/** Parse document data from a set() call. */


function _a(t, e, n, r, i, o) {
  void 0 === o && (o = {});
  var s = t.Wc(o.merge || o.mergeFields ? 2
  /* MergeSet */
  : 0
  /* Set */
  , e, n, i);
  Fa("Data must be an object, but it was:", s, r);
  var u,
      a,
      c = Pa(r, s);
  if (o.merge) u = new oe(s.fieldMask), a = s.fieldTransforms;else if (o.mergeFields) {
    for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
      var d = qa(e, l[f], n);
      if (!s.contains(d)) throw new G(j.INVALID_ARGUMENT, "Field '" + d + "' is specified in your field mask but missing from your input data.");
      ja(h, d) || h.push(d);
    }

    u = new oe(h), a = s.fieldTransforms.filter(function (t) {
      return u.covers(t.field);
    });
  } else u = null, a = s.fieldTransforms;
  return new ga(new se(c), u, a);
}

var Sa =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return (0, _tslib.__extends)(e, t), e.prototype._toFieldTransform = function (t) {
    if (2
    /* MergeSet */
    !== t.Fc) throw 1
    /* Update */
    === t.Fc ? t.Uc(this._methodName + "() can only appear at the top level of your update data") : t.Uc(this._methodName + "() cannot be used with set() unless you pass {merge:true}"); // No transform to add for a delete, but we need to add it to our
    // fieldMask so it gets deleted.

    return t.fieldMask.push(t.path), null;
  }, e.prototype.isEqual = function (t) {
    return t instanceof e;
  }, e;
}(ya);
/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue - The sentinel FieldValue for which to create a child
 *     context.
 * @param context - The parent context.
 * @param arrayElement - Whether or not the FieldValue has an array.
 */


function Da(t, e, n) {
  return new Ia({
    Fc: 3
    /* Argument */
    ,
    Kc: e.settings.Kc,
    methodName: t._methodName,
    Mc: n
  }, e.databaseId, e.D, e.ignoreUndefinedProperties);
}

var Na =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return (0, _tslib.__extends)(e, t), e.prototype._toFieldTransform = function (t) {
    return new _e(t.path, new ve());
  }, e.prototype.isEqual = function (t) {
    return t instanceof e;
  }, e;
}(ya),
    Aa =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, e) || this).jc = n, r;
  }

  return (0, _tslib.__extends)(e, t), e.prototype._toFieldTransform = function (t) {
    var e = Da(this, t,
    /*array=*/
    !0),
        n = this.jc.map(function (t) {
      return Oa(t, e);
    }),
        r = new me(n);
    return new _e(t.path, r);
  }, e.prototype.isEqual = function (t) {
    // TODO(mrschmidt): Implement isEquals
    return this === t;
  }, e;
}(ya),
    ka =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, e) || this).jc = n, r;
  }

  return (0, _tslib.__extends)(e, t), e.prototype._toFieldTransform = function (t) {
    var e = Da(this, t,
    /*array=*/
    !0),
        n = this.jc.map(function (t) {
      return Oa(t, e);
    }),
        r = new we(n);
    return new _e(t.path, r);
  }, e.prototype.isEqual = function (t) {
    // TODO(mrschmidt): Implement isEquals
    return this === t;
  }, e;
}(ya),
    Ca =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, e) || this).Gc = n, r;
  }

  return (0, _tslib.__extends)(e, t), e.prototype._toFieldTransform = function (t) {
    var e = new Ie(t.D, fe(t.D, this.Gc));
    return new _e(t.path, e);
  }, e.prototype.isEqual = function (t) {
    // TODO(mrschmidt): Implement isEquals
    return this === t;
  }, e;
}(ya);
/** Parse update data from an update() call. */


function xa(t, e, n, r) {
  var i = t.Wc(1
  /* Update */
  , e, n);
  Fa("Data must be an object, but it was:", i, r);
  var o = [],
      s = new ue();
  F(r, function (t, r) {
    var u = Ua(e, t, n); // For Compat types, we have to "extract" the underlying types before
    // performing validation.

    r instanceof Ju && (r = r._delegate);
    var a = i.Bc(u);
    if (r instanceof Sa) // Add it to the field mask, but don't add anything to updateData.
      o.push(u);else {
      var c = Oa(r, a);
      null != c && (o.push(u), s.set(u, c));
    }
  });
  var u = new oe(o);
  return new wa(s.v(), u, i.fieldTransforms);
}
/** Parse update data from a list of field/value arguments. */


function La(t, e, n, r, i, o) {
  var s = t.Wc(1
  /* Update */
  , e, n),
      u = [qa(e, r, n)],
      a = [i];
  if (o.length % 2 != 0) throw new G(j.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");

  for (var c = 0; c < o.length; c += 2) {
    u.push(qa(e, o[c])), a.push(o[c + 1]);
  } // We iterate in reverse order to pick the last value for a field if the
  // user specified the field multiple times.


  for (var h = [], f = new ue(), l = u.length - 1; l >= 0; --l) {
    if (!ja(h, u[l])) {
      var d = u[l],
          p = a[l]; // For Compat types, we have to "extract" the underlying types before
      // performing validation.

      p instanceof Ju && (p = p._delegate);
      var y = s.Bc(d);
      if (p instanceof Sa) // Add it to the field mask, but don't add anything to updateData.
        h.push(d);else {
        var v = Oa(p, y);
        null != v && (h.push(d), f.set(d, v));
      }
    }
  }

  var m = new oe(h);
  return new wa(f.v(), m, s.fieldTransforms);
}
/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */


function Ra(t, e, n, r) {
  return void 0 === r && (r = !1), Oa(n, t.Wc(r ? 4
  /* ArrayArgument */
  : 3
  /* Argument */
  , e));
}
/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */


function Oa(t, e) {
  if ( // Unwrap the API type from the Compat SDK. This will return the API type
  // from firestore-exp.
  t instanceof Ju && (t = t._delegate), Ma(t)) return Fa("Unsupported field value:", e, t), Pa(t, e);
  if (t instanceof ya) // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.

    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function (t, e) {
      // Sentinels are only supported with writes, and not within arrays.
      if (!ba(e.Fc)) throw e.Uc(t._methodName + "() can only be used with update() and set()");
      if (!e.path) throw e.Uc(t._methodName + "() is not currently supported inside arrays");

      var n = t._toFieldTransform(e);

      n && e.fieldTransforms.push(n);
    }(t, e), null;
  if (void 0 === t && e.ignoreUndefinedProperties) // If the input is undefined it can never participate in the fieldMask, so
    // don't handle this below. If `ignoreUndefinedProperties` is false,
    // `parseScalarValue` will reject an undefined value.
    return null;

  if ( // If context.path is null we are inside an array and we don't support
  // field mask paths more granular than the top-level array.
  e.path && e.fieldMask.push(e.path), t instanceof Array) {
    // TODO(b/34871131): Include the path containing the array in the error
    // message.
    // In the case of IN queries, the parsed data is an array (representing
    // the set of values to be included for the IN query) that may directly
    // contain additional arrays (each representing an individual field
    // value), so we disable this validation.
    if (e.settings.Mc && 4
    /* ArrayArgument */
    !== e.Fc) throw e.Uc("Nested arrays are not supported");
    return function (t, e) {
      for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
        var s = Oa(o[i], e.qc(r));
        null == s && ( // Just include nulls in the array for fields being replaced with a
        // sentinel.
        s = {
          nullValue: "NULL_VALUE"
        }), n.push(s), r++;
      }

      return {
        arrayValue: {
          values: n
        }
      };
    }(t, e);
  }

  return function (t, e) {
    if (t instanceof Ju && (t = t._delegate), null === t) return {
      nullValue: "NULL_VALUE"
    };
    if ("number" == typeof t) return fe(e.D, t);
    if ("boolean" == typeof t) return {
      booleanValue: t
    };
    if ("string" == typeof t) return {
      stringValue: t
    };

    if (t instanceof Date) {
      var n = tt.fromDate(t);
      return {
        timestampValue: En(e.D, n)
      };
    }

    if (t instanceof tt) {
      // Firestore backend truncates precision down to microseconds. To ensure
      // offline mode works the same with regards to truncation, perform the
      // truncation immediately without waiting for the backend to do that.
      n = new tt(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
      return {
        timestampValue: En(e.D, n)
      };
    }

    if (t instanceof va) return {
      geoPointValue: {
        latitude: t.latitude,
        longitude: t.longitude
      }
    };
    if (t instanceof pa) return {
      bytesValue: Tn(e.D, t._byteString)
    };

    if (t instanceof Xu) {
      n = e.databaseId;
      var r = t.firestore._databaseId;
      if (!r.isEqual(n)) throw e.Uc("Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
      return {
        referenceValue: Dn(t.firestore._databaseId || e.databaseId, t._key.path)
      };
    }

    throw e.Uc("Unsupported field value: " + zu(t));
  }(t, e);
}

function Pa(t, e) {
  var n = {};
  return q(t) ? // If we encounter an empty object, we explicitly add it to the update
  // mask to ensure that the server creates a map entry.
  e.path && e.path.length > 0 && e.fieldMask.push(e.path) : F(t, function (t, r) {
    var i = Oa(r, e.kc(t));
    null != i && (n[t] = i);
  }), {
    mapValue: {
      fields: n
    }
  };
}

function Ma(t) {
  return !("object" != _typeof(t) || null === t || t instanceof Array || t instanceof Date || t instanceof tt || t instanceof va || t instanceof pa || t instanceof Xu || t instanceof ya);
}

function Fa(t, e, n) {
  if (!Ma(n) || !function (t) {
    return "object" == _typeof(t) && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
  }(n)) {
    var r = zu(n);
    throw "an object" === r ? e.Uc(t + " a custom object") : e.Uc(t + " " + r);
  }
}
/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */


function qa(t, e, n) {
  if ( // If required, replace the FieldPath Compat class with with the firestore-exp
  // FieldPath.
  e instanceof Ju && (e = e._delegate), e instanceof da) return e._internalPath;
  if ("string" == typeof e) return Ua(t, e);
  throw Ba("Field path arguments must be of type string or FieldPath.", t,
  /* hasConverter= */
  !1,
  /* path= */
  void 0, n);
}
/**
 * Matches any characters in a field path string that are reserved.
 */


var Va = new RegExp("[~\\*/\\[\\]]");
/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */

function Ua(t, e, n) {
  if (e.search(Va) >= 0) throw Ba("Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'", t,
  /* hasConverter= */
  !1,
  /* path= */
  void 0, n);

  try {
    return new (da.bind.apply(da, (0, _tslib.__spreadArray)([void 0], e.split("."))))()._internalPath;
  } catch (r) {
    throw Ba("Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", t,
    /* hasConverter= */
    !1,
    /* path= */
    void 0, n);
  }
}

function Ba(t, e, n, r, i) {
  var o = r && !r.isEmpty(),
      s = void 0 !== i,
      u = "Function " + e + "() called with invalid data";
  n && (u += " (via `toFirestore()`)");
  var a = "";
  return (o || s) && (a += " (found", o && (a += " in field " + r), s && (a += " in document " + i), a += ")"), new G(j.INVALID_ARGUMENT, (u += ". ") + t + a)
  /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */
  ;
}

function ja(t, e) {
  return t.some(function (t) {
    return t.isEqual(e);
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */


var Ga =
/** @class */
function () {
  // Note: This class is stripped down version of the DocumentSnapshot in
  // the legacy SDK. The changes are:
  // - No support for SnapshotMetadata.
  // - No support for SnapshotOptions.

  /** @hideconstructor protected */
  function t(t, e, n, r, i) {
    this._firestore = t, this._userDataWriter = e, this._key = n, this._document = r, this._converter = i;
  }

  return Object.defineProperty(t.prototype, "id", {
    /** Property of the `DocumentSnapshot` that provides the document's ID. */
    get: function get() {
      return this._key.path.lastSegment();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "ref", {
    /**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */
    get: function get() {
      return new Xu(this._firestore, this._converter, this._key);
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * Signals whether or not the document at the snapshot's location exists.
   *
   * @returns true if the document exists.
   */
  t.prototype.exists = function () {
    return null !== this._document;
  },
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * @returns An `Object` containing all fields in the document or `undefined`
   * if the document doesn't exist.
   */
  t.prototype.data = function () {
    if (this._document) {
      if (this._converter) {
        // We only want to use the converter and create a new DocumentSnapshot
        // if a converter has been provided.
        var t = new Ka(this._firestore, this._userDataWriter, this._key, this._document,
        /* converter= */
        null);
        return this._converter.fromFirestore(t);
      }

      return this._userDataWriter.convertValue(this._document.toProto());
    }
  },
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t.prototype.get = function (t) {
    if (this._document) {
      var e = this._document.data().field(za("DocumentSnapshot.get", t));

      if (null !== e) return this._userDataWriter.convertValue(e);
    }
  }, t;
}(),
    Ka =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * @override
   * @returns An `Object` containing all fields in the document.
   */


  return (0, _tslib.__extends)(e, t), e.prototype.data = function () {
    return t.prototype.data.call(this);
  }, e;
}(Ga);
/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */


function za(t, e) {
  return "string" == typeof e ? Ua(t, e) : e instanceof Ju ? e._delegate._internalPath : e._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */


var Qa =
/** @class */
function () {
  /** @hideconstructor */
  function t(t, e) {
    this.hasPendingWrites = t, this.fromCache = e
    /**
    * Returns true if this `SnapshotMetadata` is equal to the provided one.
    *
    * @param other - The `SnapshotMetadata` to compare against.
    * @returns true if this `SnapshotMetadata` is equal to the provided one.
    */
    ;
  }

  return t.prototype.isEqual = function (t) {
    return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
  }, t;
}(),
    Wa =
/** @class */
function (t) {
  /** @hideconstructor protected */
  function e(e, n, r, i, o, s) {
    var u = this;
    return (u = t.call(this, e, n, r, i, s) || this)._firestore = e, u._firestoreImpl = e, u.metadata = o, u;
  }
  /**
   * Property of the `DocumentSnapshot` that signals whether or not the data
   * exists. True if the document exists.
   */


  return (0, _tslib.__extends)(e, t), e.prototype.exists = function () {
    return t.prototype.exists.call(this);
  },
  /**
   * Retrieves all fields in the document as an `Object`. Returns `undefined` if
   * the document doesn't exist.
   *
   * By default, `FieldValue.serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document or `undefined` if
   * the document doesn't exist.
   */
  e.prototype.data = function (t) {
    if (void 0 === t && (t = {}), this._document) {
      if (this._converter) {
        // We only want to use the converter and create a new DocumentSnapshot
        // if a converter has been provided.
        var e = new Ha(this._firestore, this._userDataWriter, this._key, this._document, this.metadata,
        /* converter= */
        null);
        return this._converter.fromFirestore(e, t);
      }

      return this._userDataWriter.convertValue(this._document.toProto(), t.serverTimestamps);
    }
  },
  /**
   * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
   * document or field doesn't exist.
   *
   * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
   * its final value will be returned as `null`. You can override this by
   * passing an options object.
   *
   * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
   * field.
   * @param options - An options object to configure how the field is retrieved
   * from the snapshot (for example the desired behavior for server timestamps
   * that have not yet been set to their final value).
   * @returns The data at the specified field location or undefined if no such
   * field exists in the document.
   */
  // We are using `any` here to avoid an explicit cast by our users.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  e.prototype.get = function (t, e) {
    if (void 0 === e && (e = {}), this._document) {
      var n = this._document.data().field(za("DocumentSnapshot.get", t));

      if (null !== n) return this._userDataWriter.convertValue(n, e.serverTimestamps);
    }
  }, e;
}(Ga),
    Ha =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }
  /**
   * Retrieves all fields in the document as an `Object`.
   *
   * By default, `FieldValue.serverTimestamp()` values that have not yet been
   * set to their final value will be returned as `null`. You can override
   * this by passing an options object.
   *
   * @override
   * @param options - An options object to configure how data is retrieved from
   * the snapshot (for example the desired behavior for server timestamps that
   * have not yet been set to their final value).
   * @returns An `Object` containing all fields in the document.
   */


  return (0, _tslib.__extends)(e, t), e.prototype.data = function (e) {
    return void 0 === e && (e = {}), t.prototype.data.call(this, e);
  }, e;
}(Wa),
    Ya =
/** @class */
function () {
  /** @hideconstructor */
  function t(t, e, n, r) {
    this._firestore = t, this._userDataWriter = e, this._snapshot = r, this.metadata = new Qa(r.hasPendingWrites, r.fromCache), this.query = n;
  }

  return Object.defineProperty(t.prototype, "docs", {
    /** An array of all the documents in the `QuerySnapshot`. */
    get: function get() {
      var t = [];
      return this.forEach(function (e) {
        return t.push(e);
      }), t;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "size", {
    /** The number of documents in the `QuerySnapshot`. */
    get: function get() {
      return this._snapshot.docs.size;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "empty", {
    /** True if there are no documents in the `QuerySnapshot`. */
    get: function get() {
      return 0 === this.size;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * Enumerates all of the documents in the `QuerySnapshot`.
   *
   * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
   * each document in the snapshot.
   * @param thisArg - The `this` binding for the callback.
   */
  t.prototype.forEach = function (t, e) {
    var n = this;

    this._snapshot.docs.forEach(function (r) {
      t.call(e, new Ha(n._firestore, n._userDataWriter, r.key, r, new Qa(n._snapshot.mutatedKeys.has(r.key), n._snapshot.fromCache), n.query._converter));
    });
  },
  /**
   * Returns an array of the documents changes since the last snapshot. If this
   * is the first snapshot, all documents will be in the list as 'added'
   * changes.
   *
   * @param options - `SnapshotListenOptions` that control whether metadata-only
   * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
   * snapshot events.
   */
  t.prototype.docChanges = function (t) {
    void 0 === t && (t = {});
    var e = !!t.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges) throw new G(j.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges =
    /** Calculates the array of DocumentChanges for a given ViewSnapshot. */
    function (t, e) {
      if (t._snapshot.oldDocs.isEmpty()) {
        // Special case the first snapshot because index calculation is easy and
        // fast
        var n = 0;
        return t._snapshot.docChanges.map(function (e) {
          var r = new Ha(t._firestore, t._userDataWriter, e.doc.key, e.doc, new Qa(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache), t.query._converter);
          return e.doc, {
            type: "added",
            doc: r,
            oldIndex: -1,
            newIndex: n++
          };
        });
      } // A DocumentSet that is updated incrementally as changes are applied to use
      // to lookup the index of a document.


      var r = t._snapshot.oldDocs;
      return t._snapshot.docChanges.filter(function (t) {
        return e || 3
        /* Metadata */
        !== t.type;
      }).map(function (e) {
        var n = new Ha(t._firestore, t._userDataWriter, e.doc.key, e.doc, new Qa(t._snapshot.mutatedKeys.has(e.doc.key), t._snapshot.fromCache), t.query._converter),
            i = -1,
            o = -1;
        return 0
        /* Added */
        !== e.type && (i = r.indexOf(e.doc.key), r = r.delete(e.doc.key)), 1
        /* Removed */
        !== e.type && (o = (r = r.add(e.doc)).indexOf(e.doc.key)), {
          type: Ja(e.type),
          doc: n,
          oldIndex: i,
          newIndex: o
        };
      });
    }(this, e), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges;
  }, t;
}();
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */


function Ja(t) {
  switch (t) {
    case 0
    /* Added */
    :
      return "added";

    case 2
    /* Modified */
    :
    case 3
    /* Metadata */
    :
      return "modified";

    case 1
    /* Removed */
    :
      return "removed";

    default:
      return A();
  }
} // TODO(firestoreexp): Add tests for snapshotEqual with different snapshot
// metadata

/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */


function Xa(t, e) {
  return t instanceof Wa && e instanceof Wa ? t._firestore === e._firestore && t._key.isEqual(e._key) && (null === t._document ? null === e._document : t._document.isEqual(e._document)) && t._converter === e._converter : t instanceof Ya && e instanceof Ya && t._firestore === e._firestore && ra(t.query, e.query) && t.metadata.isEqual(e.metadata) && t._snapshot.isEqual(e._snapshot);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function $a(t) {
  if (zt(t) && 0 === t.explicitOrderBy.length) throw new G(j.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}
/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link startAt}, {@link startAfter}, {@link
 * endBefore}, {@link endAt}, {@link limit} or {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */


var Za = function Za() {};
/**
 * Creates a new immutable instance of `query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */


function tc(t) {
  for (var e = [], n = 1; n < arguments.length; n++) {
    e[n - 1] = arguments[n];
  }

  for (var r = 0, i = e; r < i.length; r++) {
    var o = i[r];
    t = o._apply(t);
  }

  return t;
}

var ec =
/** @class */
function (t) {
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this) || this).zc = e, i.Hc = n, i.Jc = r, i.type = "where", i;
  }

  return (0, _tslib.__extends)(e, t), e.prototype._apply = function (t) {
    var e = Ta(t.firestore),
        n = function (t, e, n, r, i, o, s) {
      var u;

      if (i.isKeyField()) {
        if ("array-contains"
        /* ARRAY_CONTAINS */
        === o || "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        === o) throw new G(j.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");

        if ("in"
        /* IN */
        === o || "not-in"
        /* NOT_IN */
        === o) {
          ac(s, o);

          for (var a = [], c = 0, h = s; c < h.length; c++) {
            var f = h[c];
            a.push(uc(r, t, f));
          }

          u = {
            arrayValue: {
              values: a
            }
          };
        } else u = uc(r, t, s);
      } else "in"
      /* IN */
      !== o && "not-in"
      /* NOT_IN */
      !== o && "array-contains-any"
      /* ARRAY_CONTAINS_ANY */
      !== o || ac(s, o), u = Ra(n, "where", s,
      /* allowArrays= */
      "in"
      /* IN */
      === o || "not-in"
      /* NOT_IN */
      === o);

      var l = Dt.create(i, o, u);
      return function (t, e) {
        if (e.g()) {
          var n = Wt(t);
          if (null !== n && !n.isEqual(e.field)) throw new G(j.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
          var r = Qt(t);
          null !== r && cc(t, e.field, r);
        }

        var i = function (t, e) {
          for (var n = 0, r = t.filters; n < r.length; n++) {
            var i = r[n];
            if (e.indexOf(i.op) >= 0) return i.op;
          }

          return null;
        }(t,
        /**
        * Given an operator, returns the set of operators that cannot be used with it.
        *
        * Operators in a query must adhere to the following set of rules:
        * 1. Only one array operator is allowed.
        * 2. Only one disjunctive operator is allowed.
        * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
        * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
        *
        * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
        * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
        */
        function (t) {
          switch (t) {
            case "!="
            /* NOT_EQUAL */
            :
              return ["!="
              /* NOT_EQUAL */
              , "not-in"
              /* NOT_IN */
              ];

            case "array-contains"
            /* ARRAY_CONTAINS */
            :
              return ["array-contains"
              /* ARRAY_CONTAINS */
              , "array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              , "not-in"
              /* NOT_IN */
              ];

            case "in"
            /* IN */
            :
              return ["array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              , "in"
              /* IN */
              , "not-in"
              /* NOT_IN */
              ];

            case "array-contains-any"
            /* ARRAY_CONTAINS_ANY */
            :
              return ["array-contains"
              /* ARRAY_CONTAINS */
              , "array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              , "in"
              /* IN */
              , "not-in"
              /* NOT_IN */
              ];

            case "not-in"
            /* NOT_IN */
            :
              return ["array-contains"
              /* ARRAY_CONTAINS */
              , "array-contains-any"
              /* ARRAY_CONTAINS_ANY */
              , "in"
              /* IN */
              , "not-in"
              /* NOT_IN */
              , "!="
              /* NOT_EQUAL */
              ];

            default:
              return [];
          }
        }(e.op));

        if (null !== i) // Special case when it's a duplicate op to give a slightly clearer error message.
          throw i === e.op ? new G(j.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new G(j.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
      }(t, l), l;
    }(t._query, 0, e, t.firestore._databaseId, this.zc, this.Hc, this.Jc);

    return new $u(t.firestore, t._converter, function (t, e) {
      var n = t.filters.concat([e]);
      return new Bt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
    }(t._query, n));
  }, e;
}(Za),
    nc =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this) || this).zc = e, r.Yc = n, r.type = "orderBy", r;
  }

  return (0, _tslib.__extends)(e, t), e.prototype._apply = function (t) {
    var e = function (t, e, n) {
      if (null !== t.startAt) throw new G(j.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
      if (null !== t.endAt) throw new G(j.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
      var r = new Ft(e, n);
      return function (t, e) {
        if (null === Qt(t)) {
          // This is the first order by. It must match any inequality.
          var n = Wt(t);
          null !== n && cc(t, n, e.field);
        }
      }(t, r), r;
    }(t._query, this.zc, this.Yc);

    return new $u(t.firestore, t._converter, function (t, e) {
      // TODO(dimond): validate that orderBy does not list the same key twice.
      var n = t.explicitOrderBy.concat([e]);
      return new Bt(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
    }(t._query, e));
  }, e;
}(Za),
    rc =
/** @class */
function (t) {
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this) || this).type = e, i.Xc = n, i.Zc = r, i;
  }

  return (0, _tslib.__extends)(e, t), e.prototype._apply = function (t) {
    return new $u(t.firestore, t._converter, Xt(t._query, this.Xc, this.Zc));
  }, e;
}(Za),
    ic =
/** @class */
function (t) {
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this) || this).type = e, i.ta = n, i.ea = r, i;
  }

  return (0, _tslib.__extends)(e, t), e.prototype._apply = function (t) {
    var e = sc(t, this.type, this.ta, this.ea);
    return new $u(t.firestore, t._converter, function (t, e) {
      return new Bt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
    }(t._query, e));
  }, e;
}(Za),
    oc =
/** @class */
function (t) {
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this) || this).type = e, i.ta = n, i.ea = r, i;
  }

  return (0, _tslib.__extends)(e, t), e.prototype._apply = function (t) {
    var e = sc(t, this.type, this.ta, this.ea);
    return new $u(t.firestore, t._converter, function (t, e) {
      return new Bt(t.path, t.collectionGroup, t.explicitOrderBy.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
    }(t._query, e));
  }, e;
}(Za);
/**
 * Creates a `QueryConstraint` that enforces that documents must contain the
 * specified field and that the value should satisfy the relation constraint
 * provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created `Query`.
 */

/** Helper function to create a bound from a document or fields */


function sc(t, e, n, r) {
  if (n[0] instanceof Ju && (n[0] = n[0]._delegate), n[0] instanceof Ga) return function (t, e, n, r, i) {
    if (!r) throw new G(j.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "()."); // Because people expect to continue/end a query at the exact document
    // provided, we need to use the implicit sort order rather than the explicit
    // sort order, because it's guaranteed to contain the document key. That way
    // the position becomes unambiguous and the query continues/ends exactly at
    // the provided document. Without the key (by using the explicit sort
    // orders), multiple documents could match the position, yielding duplicate
    // results.

    for (var o = [], s = 0, u = Yt(t); s < u.length; s++) {
      var a = u[s];
      if (a.field.isKeyField()) o.push(ft(e, r.key));else {
        var c = r.field(a.field);
        if (et(c)) throw new G(j.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');

        if (null === c) {
          var h = a.field.canonicalString();
          throw new G(j.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
        }

        o.push(c);
      }
    }

    return new Pt(o, i);
  }(t._query, t.firestore._databaseId, e, n[0]._document, r);
  var i = Ta(t.firestore);
  return function (t, e, n, r, i, o) {
    // Use explicit order by's because it has to match the query the user made
    var s = t.explicitOrderBy;
    if (i.length > s.length) throw new G(j.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");

    for (var u = [], a = 0; a < i.length; a++) {
      var c = i[a];

      if (s[a].field.isKeyField()) {
        if ("string" != typeof c) throw new G(j.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + _typeof(c));
        if (!Ht(t) && -1 !== c.indexOf("/")) throw new G(j.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
        var h = t.path.child(z.fromString(c));
        if (!H.isDocumentKey(h)) throw new G(j.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
        var f = new H(h);
        u.push(ft(e, f));
      } else {
        var l = Ra(n, r, c);
        u.push(l);
      }
    }

    return new Pt(u, o);
  }(t._query, t.firestore._databaseId, i, e, n, r);
}

function uc(t, e, n) {
  if (n instanceof Ju && (n = n._delegate), "string" == typeof n) {
    if ("" === n) throw new G(j.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!Ht(e) && -1 !== n.indexOf("/")) throw new G(j.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
    var r = e.path.child(z.fromString(n));
    if (!H.isDocumentKey(r)) throw new G(j.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
    return ft(t, new H(r));
  }

  if (n instanceof Xu) return ft(t, n._key);
  throw new G(j.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + zu(n) + ".");
}
/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */


function ac(t, e) {
  if (!Array.isArray(t) || 0 === t.length) throw new G(j.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
  if (t.length > 10) throw new G(j.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
}

function cc(t, e, n) {
  if (!n.isEqual(e)) throw new G(j.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 *
 * @internal
 */


var hc =
/** @class */
function () {
  function t() {}

  return t.prototype.convertValue = function (t, e) {
    switch (void 0 === e && (e = "none"), it(t)) {
      case 0
      /* NullValue */
      :
        return null;

      case 1
      /* BooleanValue */
      :
        return t.booleanValue;

      case 2
      /* NumberValue */
      :
        return $(t.integerValue || t.doubleValue);

      case 3
      /* TimestampValue */
      :
        return this.convertTimestamp(t.timestampValue);

      case 4
      /* ServerTimestampValue */
      :
        return this.convertServerTimestamp(t, e);

      case 5
      /* StringValue */
      :
        return t.stringValue;

      case 6
      /* BlobValue */
      :
        return this.convertBytes(Z(t.bytesValue));

      case 7
      /* RefValue */
      :
        return this.convertReference(t.referenceValue);

      case 8
      /* GeoPointValue */
      :
        return this.convertGeoPoint(t.geoPointValue);

      case 9
      /* ArrayValue */
      :
        return this.convertArray(t.arrayValue, e);

      case 10
      /* ObjectValue */
      :
        return this.convertObject(t.mapValue, e);

      default:
        throw A();
    }
  }, t.prototype.convertObject = function (t, e) {
    var n = this,
        r = {};
    return F(t.fields || {}, function (t, i) {
      r[t] = n.convertValue(i, e);
    }), r;
  }, t.prototype.convertGeoPoint = function (t) {
    return new va($(t.latitude), $(t.longitude));
  }, t.prototype.convertArray = function (t, e) {
    var n = this;
    return (t.values || []).map(function (t) {
      return n.convertValue(t, e);
    });
  }, t.prototype.convertServerTimestamp = function (t, e) {
    switch (e) {
      case "previous":
        var n = nt(t);
        return null == n ? null : this.convertValue(n, e);

      case "estimate":
        return this.convertTimestamp(rt(t));

      default:
        return null;
    }
  }, t.prototype.convertTimestamp = function (t) {
    var e = X(t);
    return new tt(e.seconds, e.nanos);
  }, t.prototype.convertDocumentKey = function (t, e) {
    var n = z.fromString(t);
    k(Xn(n));
    var r = new Ru(n.get(1), n.get(3)),
        i = new H(n.popFirst(5));
    return r.isEqual(e) || // TODO(b/64130202): Somehow support foreign references.
    S("Document " + i + " contains a document reference within a different database (" + r.projectId + "/" + r.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), i;
  }, t;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */


function fc(t, e, n) {
  // Cast to `any` in order to satisfy the union type constraint on
  // toFirestore().
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

var lc =
/** @class */
function (t) {
  function e(e) {
    var n = this;
    return (n = t.call(this) || this).firestore = e, n;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.convertBytes = function (t) {
    return new pa(t);
  }, e.prototype.convertReference = function (t) {
    var e = this.convertDocumentKey(t, this.firestore._databaseId);
    return new Xu(this.firestore,
    /* converter= */
    null, e);
  }, e;
}(hc),
    dc =
/** @class */
function () {
  /** @hideconstructor */
  function t(t, e) {
    this._firestore = t, this._commitHandler = e, this._mutations = [], this._committed = !1, this._dataReader = Ta(t);
  }

  return t.prototype.set = function (t, e, n) {
    this._verifyNotCommitted();

    var r = pc(t, this._firestore),
        i = fc(r._converter, e, n),
        o = _a(this._dataReader, "WriteBatch.set", r._key, i, null !== r._converter, n);

    return this._mutations.push(o.toMutation(r._key, De.none())), this;
  }, t.prototype.update = function (t, e, n) {
    for (var r = [], i = 3; i < arguments.length; i++) {
      r[i - 3] = arguments[i];
    }

    this._verifyNotCommitted();

    var o,
        s = pc(t, this._firestore); // For Compat types, we have to "extract" the underlying types before
    // performing validation.

    return e instanceof Ju && (e = e._delegate), o = "string" == typeof e || e instanceof da ? La(this._dataReader, "WriteBatch.update", s._key, e, n, r) : xa(this._dataReader, "WriteBatch.update", s._key, e), this._mutations.push(o.toMutation(s._key, De.exists(!0))), this;
  },
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `WriteBatch` instance. Used for chaining method calls.
   */
  t.prototype.delete = function (t) {
    this._verifyNotCommitted();

    var e = pc(t, this._firestore);
    return this._mutations = this._mutations.concat(new je(e._key, De.none())), this;
  },
  /**
   * Commits all of the writes in this write batch as a single atomic unit.
   *
   * The result of these writes will only be reflected in document reads that
   * occur after the returned Promise resolves. If the client is offline, the
   * write fails. If you would like to see local modifications or buffer writes
   * until the client is online, use the full Firestore SDK.
   *
   * @returns A Promise resolved once all of the writes in the batch have been
   * successfully written to the backend as an atomic unit (note that it won't
   * resolve while you're offline).
   */
  t.prototype.commit = function () {
    return this._verifyNotCommitted(), this._committed = !0, this._mutations.length > 0 ? this._commitHandler(this._mutations) : Promise.resolve();
  }, t.prototype._verifyNotCommitted = function () {
    if (this._committed) throw new G(j.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }, t;
}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch#commit} is
 * called.
 */


function pc(t, e) {
  if (t instanceof Ju && (t = t._delegate), t.firestore !== e) throw new G(j.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.

/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */


var yc =
/** @class */
function (t) {
  function e(e) {
    var n = this;
    return (n = t.call(this) || this).firestore = e, n;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.convertBytes = function (t) {
    return new pa(t);
  }, e.prototype.convertReference = function (t) {
    var e = this.convertDocumentKey(t, this.firestore._databaseId);
    return new Xu(this.firestore,
    /* converter= */
    null, e);
  }, e;
}(hc);
/**
 * Reads the document referred to by this `DocumentReference` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */


function vc(t, e, n) {
  for (var r = [], i = 3; i < arguments.length; i++) {
    r[i - 3] = arguments[i];
  }

  t = Qu(t, Xu);
  var o = Qu(t.firestore, aa),
      s = Ta(o); // For Compat types, we have to "extract" the underlying types before
  // performing validation.

  return e instanceof Ju && (e = e._delegate), gc(o, [("string" == typeof e || e instanceof da ? La(s, "updateDoc", t._key, e, n, r) : xa(s, "updateDoc", t._key, e)).toMutation(t._key, De.exists(!0))]);
}
/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */


function mc(t) {
  for (var e, n, r, i = [], o = 1; o < arguments.length; o++) {
    i[o - 1] = arguments[o];
  }

  t instanceof Ju && (t = t._delegate);
  var s = {
    includeMetadataChanges: !1
  },
      u = 0;
  "object" != _typeof(i[u]) || oa(i[u]) || (s = i[u], u++);
  var a,
      c,
      h,
      f = {
    includeMetadataChanges: s.includeMetadataChanges
  };

  if (oa(i[u])) {
    var l = i[u];
    i[u] = null === (e = l.next) || void 0 === e ? void 0 : e.bind(l), i[u + 1] = null === (n = l.error) || void 0 === n ? void 0 : n.bind(l), i[u + 2] = null === (r = l.complete) || void 0 === r ? void 0 : r.bind(l);
  }

  if (t instanceof Xu) c = Qu(t.firestore, aa), h = Gt(t._key.path), a = {
    next: function next(e) {
      i[u] && i[u](wc(c, t, e));
    },
    error: i[u + 1],
    complete: i[u + 2]
  };else {
    var d = Qu(t, $u);
    c = Qu(d.firestore, aa), h = d._query;
    var p = new yc(c);
    a = {
      next: function next(t) {
        i[u] && i[u](new Ya(c, p, d, t));
      },
      error: i[u + 1],
      complete: i[u + 2]
    }, $a(t._query);
  }
  return function (t, e, n, r) {
    var i = this,
        o = new vu(r),
        s = new Es(e, o, n);
    return t.asyncQueue.enqueueAndForget(function () {
      return (0, _tslib.__awaiter)(i, void 0, void 0, function () {
        var e;
        return (0, _tslib.__generator)(this, function (n) {
          switch (n.label) {
            case 0:
              return e = ms, [4
              /*yield*/
              , ku(t)];

            case 1:
              return [2
              /*return*/
              , e.apply(void 0, [n.sent(), s])];
          }
        });
      });
    }), function () {
      o.Xo(), t.asyncQueue.enqueueAndForget(function () {
        return (0, _tslib.__awaiter)(i, void 0, void 0, function () {
          var e;
          return (0, _tslib.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return e = gs, [4
                /*yield*/
                , ku(t)];

              case 1:
                return [2
                /*return*/
                , e.apply(void 0, [n.sent(), s])];
            }
          });
        });
      });
    };
  }(ca(c), h, f, a);
}
/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */


function gc(t, e) {
  return function (t, e) {
    var n = this,
        r = new Ir();
    return t.asyncQueue.enqueueAndForget(function () {
      return (0, _tslib.__awaiter)(n, void 0, void 0, function () {
        var n;
        return (0, _tslib.__generator)(this, function (i) {
          switch (i.label) {
            case 0:
              return n = Ms, [4
              /*yield*/
              , Au(t)];

            case 1:
              return [2
              /*return*/
              , n.apply(void 0, [i.sent(), e, r])];
          }
        });
      });
    }), r.promise;
  }(ca(t), e);
}
/**
 * Converts a ViewSnapshot that contains the single document specified by `ref`
 * to a DocumentSnapshot.
 */


function wc(t, e, n) {
  var r = n.docs.get(e._key),
      i = new yc(t);
  return new Wa(t, i, e._key, r, new Qa(n.hasPendingWrites, n.fromCache), e._converter);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */


var bc =
/** @class */
function (t) {
  // This class implements the same logic as the Transaction API in the Lite SDK
  // but is subclassed in order to return its own DocumentSnapshot types.

  /** @hideconstructor */
  function e(e, n) {
    var r = this;
    return (r = t.call(this, e, n) || this)._firestore = e, r;
  }
  /**
   * Reads the document referenced by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be read.
   * @returns A `DocumentSnapshot` with the read data.
   */


  return (0, _tslib.__extends)(e, t), e.prototype.get = function (e) {
    var n = this,
        r = pc(e, this._firestore),
        i = new yc(this._firestore);
    return t.prototype.get.call(this, e).then(function (t) {
      return new Wa(n._firestore, i, r._key, t._document, new Qa(
      /* hasPendingWrites= */
      !1,
      /* fromCache= */
      !1), r._converter);
    });
  }, e;
}(
/** @class */
function () {
  /** @hideconstructor */
  function t(t, e) {
    this._firestore = t, this._transaction = e, this._dataReader = Ta(t)
    /**
    * Reads the document referenced by the provided {@link DocumentReference}.
    *
    * @param documentRef - A reference to the document to be read.
    * @returns A `DocumentSnapshot` with the read data.
    */
    ;
  }

  return t.prototype.get = function (t) {
    var e = this,
        n = pc(t, this._firestore),
        r = new lc(this._firestore);
    return this._transaction.lookup([n._key]).then(function (t) {
      if (!t || 1 !== t.length) return A();
      var i = t[0];
      if (i instanceof wt) return new Ga(e._firestore, r, n._key, null, n._converter);
      if (i instanceof gt) return new Ga(e._firestore, r, i.key, i, n._converter);
      throw A();
    });
  }, t.prototype.set = function (t, e, n) {
    var r = pc(t, this._firestore),
        i = fc(r._converter, e, n),
        o = _a(this._dataReader, "Transaction.set", r._key, i, null !== r._converter, n);

    return this._transaction.set(r._key, o), this;
  }, t.prototype.update = function (t, e, n) {
    for (var r = [], i = 3; i < arguments.length; i++) {
      r[i - 3] = arguments[i];
    }

    var o,
        s = pc(t, this._firestore); // For Compat types, we have to "extract" the underlying types before
    // performing validation.

    return e instanceof Ju && (e = e._delegate), o = "string" == typeof e || e instanceof da ? La(this._dataReader, "Transaction.update", s._key, e, n, r) : xa(this._dataReader, "Transaction.update", s._key, e), this._transaction.update(s._key, o), this;
  },
  /**
   * Deletes the document referred to by the provided {@link DocumentReference}.
   *
   * @param documentRef - A reference to the document to be deleted.
   * @returns This `Transaction` instance. Used for chaining method calls.
   */
  t.prototype.delete = function (t) {
    var e = pc(t, this._firestore);
    return this._transaction.delete(e._key), this;
  }, t;
}());
/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Helper function to assert Uint8Array is available at runtime. */


function Ic() {
  if ("undefined" == typeof Uint8Array) throw new G(j.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}
/** Helper function to assert Base64 functions are available at runtime. */


function Ec() {
  if ("undefined" == typeof atob) throw new G(j.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}
/** Immutable class holding a blob (binary data) */


var Tc =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return (0, _tslib.__extends)(e, t), e.fromBase64String = function (t) {
    return Ec(), new e(pa.fromBase64String(t));
  }, e.fromUint8Array = function (t) {
    return Ic(), new e(pa.fromUint8Array(t));
  }, e.prototype.toBase64 = function () {
    return Ec(), this._delegate.toBase64();
  }, e.prototype.toUint8Array = function () {
    return Ic(), this._delegate.toUint8Array();
  }, e.prototype.isEqual = function (t) {
    return this._delegate.isEqual(t._delegate);
  }, e.prototype.toString = function () {
    return "Blob(base64: " + this.toBase64() + ")";
  }, e;
}(Ju),
    _c =
/** @class */
function () {
  function t() {}

  return t.prototype.enableIndexedDbPersistence = function (t, e) {
    return function (t, e) {
      la(t = Qu(t, aa));

      var n = ca(t),
          r = t._freezeSettings(),
          i = new pu();

      return fa(n, i, new lu(i, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
    }(t._delegate, {
      forceOwnership: e
    });
  }, t.prototype.enableMultiTabIndexedDbPersistence = function (t) {
    return function (t) {
      la(t = Qu(t, aa));

      var e = ca(t),
          n = t._freezeSettings(),
          r = new pu();

      return fa(e, r, new du(r, n.cacheSizeBytes));
    }(t._delegate);
  }, t.prototype.clearIndexedDbPersistence = function (t) {
    return function (t) {
      var e = this;
      if (t._initialized && !t._terminated) throw new G(j.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
      var n = new Ir();
      return t._queue.enqueueAndForgetEvenWhileRestricted(function () {
        return (0, _tslib.__awaiter)(e, void 0, void 0, function () {
          var e;
          return (0, _tslib.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return r.trys.push([0, 2,, 3]), [4
                /*yield*/
                , function (t) {
                  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
                    var e;
                    return (0, _tslib.__generator)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return _r.At() ? (e = t + "main", [4
                          /*yield*/
                          , _r.delete(e)]) : [2
                          /*return*/
                          , Promise.resolve()];

                        case 1:
                          return n.sent(), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }(Pi(t._databaseId, t._persistenceKey))];

              case 1:
                return r.sent(), n.resolve(), [3
                /*break*/
                , 3];

              case 2:
                return e = r.sent(), n.reject(e), [3
                /*break*/
                , 3];

              case 3:
                return [2
                /*return*/
                ];
            }
          });
        });
      }), n.promise
      /**
      * Waits until all currently pending writes for the active user have been
      * acknowledged by the backend.
      *
      * The returned Promise resolves immediately if there are no outstanding writes.
      * Otherwise, the Promise waits for all previously issued writes (including
      * those written in a previous app session), but it does not wait for writes
      * that were added after the function is called. If you want to wait for
      * additional writes, call `waitForPendingWrites()` again.
      *
      * Any outstanding `waitForPendingWrites()` Promises are rejected during user
      * changes.
      *
      * @returns A Promise which resolves when all currently pending writes have been
      * acknowledged by the backend.
      */
      ;
    }(t._delegate);
  }, t;
}(),
    Sc =
/** @class */
function (t) {
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this, n) || this).na = r, i.INTERNAL = {
      delete: function _delete() {
        return i.terminate();
      }
    }, e instanceof Ru || (i.sa = e), i;
  }

  return (0, _tslib.__extends)(e, t), Object.defineProperty(e.prototype, "_databaseId", {
    get: function get() {
      return this._delegate._databaseId;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.settings = function (t) {
    t.merge && // Remove the property from the settings once the merge is completed
    delete (t = Object.assign(Object.assign({}, this._delegate._getSettings()), t)).merge, this._delegate._setSettings(t);
  }, e.prototype.useEmulator = function (t, e) {
    !function (t, e, n) {
      var r = (t = Qu(t, Yu))._getSettings();

      "firestore.googleapis.com" !== r.host && r.host !== e && D("Host has been set in both settings() and useEmulator(), emulator host will be used"), t._setSettings(Object.assign(Object.assign({}, r), {
        host: e + ":" + n,
        ssl: !1
      }));
    }(this._delegate, t, e);
  }, e.prototype.enableNetwork = function () {
    return function (t) {
      var e = this;
      return t.asyncQueue.enqueue(function () {
        return (0, _tslib.__awaiter)(e, void 0, void 0, function () {
          var e, n;
          return (0, _tslib.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return [4
                /*yield*/
                , Su(t)];

              case 1:
                return e = r.sent(), [4
                /*yield*/
                , Nu(t)];

              case 2:
                return n = r.sent(), [2
                /*return*/
                , (e.setNetworkEnabled(!0), function (t) {
                  var e = C(t);
                  return e.Qr.delete(0
                  /* UserDisabled */
                  ), Vo(e);
                }(n))];
            }
          });
        });
      });
    }
    /** Disables the network connection. Pending operations will not complete. */
    (ca(Qu(this._delegate, aa)));
  }, e.prototype.disableNetwork = function () {
    return function (t) {
      var e = this;
      return t.asyncQueue.enqueue(function () {
        return (0, _tslib.__awaiter)(e, void 0, void 0, function () {
          var e, n;
          return (0, _tslib.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return [4
                /*yield*/
                , Su(t)];

              case 1:
                return e = r.sent(), [4
                /*yield*/
                , Nu(t)];

              case 2:
                return n = r.sent(), [2
                /*return*/
                , (e.setNetworkEnabled(!1), function (t) {
                  return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
                    var e;
                    return (0, _tslib.__generator)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (e = C(t)).Qr.add(0
                          /* UserDisabled */
                          ), [4
                          /*yield*/
                          , Uo(e)];

                        case 1:
                          return n.sent(), // Set the OnlineState to Offline so get()s return from cache, etc.
                          e.jr.set("Offline"
                          /* Offline */
                          ), [2
                          /*return*/
                          ];
                      }
                    });
                  });
                }(n))];
            }
          });
        });
      });
    }
    /**
    * Returns a Promise that resolves when all writes that were pending at the time
    * this method was called received server acknowledgement. An acknowledgement
    * can be either acceptance or rejection.
    */
    (ca(Qu(this._delegate, aa)));
  }, e.prototype.enablePersistence = function (t) {
    var e = !1,
        n = !1;
    return t && ju("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab), e ? this.na.enableMultiTabIndexedDbPersistence(this) : this.na.enableIndexedDbPersistence(this, n);
  }, e.prototype.clearPersistence = function () {
    return this.na.clearIndexedDbPersistence(this);
  }, e.prototype.terminate = function () {
    return this.sa && (this.sa._removeServiceInstance("firestore"), this.sa._removeServiceInstance("firestore-exp")), this._delegate._delete();
  }, e.prototype.waitForPendingWrites = function () {
    return function (t) {
      var e = this,
          n = new Ir();
      return t.asyncQueue.enqueueAndForget(function () {
        return (0, _tslib.__awaiter)(e, void 0, void 0, function () {
          var e;
          return (0, _tslib.__generator)(this, function (r) {
            switch (r.label) {
              case 0:
                return e = js, [4
                /*yield*/
                , Au(t)];

              case 1:
                return [2
                /*return*/
                , e.apply(void 0, [r.sent(), n])];
            }
          });
        });
      }), n.promise;
    }(ca(Qu(this._delegate, aa)));
  }, e.prototype.onSnapshotsInSync = function (t) {
    return function (t, e) {
      return function (t, e) {
        var n = this,
            r = new vu(e);
        return t.asyncQueue.enqueueAndForget(function () {
          return (0, _tslib.__awaiter)(n, void 0, void 0, function () {
            var e;
            return (0, _tslib.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  return e = function e(t, _e2) {
                    C(t).Zr.add(_e2), // Immediately fire an initial event, indicating all existing listeners
                    // are in-sync.
                    _e2.next();
                  }, [4
                  /*yield*/
                  , ku(t)];

                case 1:
                  return [2
                  /*return*/
                  , e.apply(void 0, [n.sent(), r])];
              }
            });
          });
        }), function () {
          r.Xo(), t.asyncQueue.enqueueAndForget(function () {
            return (0, _tslib.__awaiter)(n, void 0, void 0, function () {
              var e;
              return (0, _tslib.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return e = function e(t, _e3) {
                      C(t).Zr.delete(_e3);
                    }, [4
                    /*yield*/
                    , ku(t)];

                  case 1:
                    return [2
                    /*return*/
                    , e.apply(void 0, [n.sent(), r])];
                }
              });
            });
          });
        }
        /**
        * Takes an updateFunction in which a set of reads and writes can be performed
        * atomically. In the updateFunction, the client can read and write values
        * using the supplied transaction object. After the updateFunction, all
        * changes will be committed. If a retryable error occurs (ex: some other
        * client has changed any of the data referenced), then the updateFunction
        * will be called again after a backoff. If the updateFunction still fails
        * after all retries, then the transaction will be rejected.
        *
        * The transaction object passed to the updateFunction contains methods for
        * accessing documents and collections. Unlike other datastore access, data
        * accessed with the transaction will not reflect local changes that have not
        * been committed. For this reason, it is required that all reads are
        * performed before any writes. Transactions must be performed while online.
        */
        ;
      }(ca(t = Qu(t, aa)), oa(e) ? e : {
        next: e
      });
    }(this._delegate, t);
  }, Object.defineProperty(e.prototype, "app", {
    get: function get() {
      if (!this.sa) throw new G(j.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this.sa;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.collection = function (t) {
    try {
      return new Uc(this, ta(this._delegate, t));
    } catch (t) {
      throw Lc(t, "collection()", "Firestore.collection()");
    }
  }, e.prototype.doc = function (t) {
    try {
      return new xc(this, ea(this._delegate, t));
    } catch (t) {
      throw Lc(t, "doc()", "Firestore.doc()");
    }
  }, e.prototype.collectionGroup = function (t) {
    try {
      return new Fc(this, function (t, e) {
        if (t = Qu(t, Yu), Uu("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new G(j.INVALID_ARGUMENT, "Invalid collection ID '" + e + "' passed to function collectionGroup(). Collection IDs must not contain '/'.");
        return new $u(t,
        /* converter= */
        null,
        /**
        * Creates a new Query for a collection group query that matches all documents
        * within the provided collection group.
        */
        function (t) {
          return new Bt(z.emptyPath(), t);
        }(e));
      }(this._delegate, t));
    } catch (t) {
      throw Lc(t, "collectionGroup()", "Firestore.collectionGroup()");
    }
  }, e.prototype.runTransaction = function (t) {
    var e = this;
    return function (t, e) {
      return function (t, e) {
        var n = this,
            r = new Ir();
        return t.asyncQueue.enqueueAndForget(function () {
          return (0, _tslib.__awaiter)(n, void 0, void 0, function () {
            var n;
            return (0, _tslib.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4
                  /*yield*/
                  , function (t) {
                    return _u(t).then(function (t) {
                      return t.datastore;
                    });
                  }(t)];

                case 1:
                  return n = i.sent(), new wu(t.asyncQueue, n, e, r).run(), [2
                  /*return*/
                  ];
              }
            });
          });
        }), r.promise;
      }(ca(t), function (n) {
        return e(new bc(t, n));
      });
    }(this._delegate, function (n) {
      return t(new Ac(e, n));
    });
  }, e.prototype.batch = function () {
    var t = this;
    return ca(this._delegate), new kc(new dc(this._delegate, function (e) {
      return gc(t._delegate, e);
    }));
  }, e.prototype.loadBundle = function (t) {
    throw new G(j.FAILED_PRECONDITION, '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?');
  }, e.prototype.namedQuery = function (t) {
    throw new G(j.FAILED_PRECONDITION, '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?');
  }, e;
}(Ju),
    Dc =
/** @class */
function (t) {
  function e(e) {
    var n = this;
    return (n = t.call(this) || this).firestore = e, n;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.convertBytes = function (t) {
    return new Tc(new pa(t));
  }, e.prototype.convertReference = function (t) {
    var e = this.convertDocumentKey(t, this.firestore._databaseId);
    return xc.ia(e, this.firestore,
    /* converter= */
    null);
  }, e;
}(hc);
/**
 * The persistence provider included with the full Firestore SDK.
 */


exports.Q = Sc;
exports.U = _c;
exports.L = Tc;

function Nc(t) {
  var e;
  e = t, E.setLogLevel(e);
}
/**
 * A reference to a transaction.
 */


var Ac =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, n) || this)._firestore = e, r._userDataWriter = new Dc(e), r;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.get = function (t) {
    var e = this,
        n = Bc(t);
    return this._delegate.get(n).then(function (t) {
      return new Pc(e._firestore, new Wa(e._firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, n._converter));
    });
  }, e.prototype.set = function (t, e, n) {
    var r = Bc(t);
    return n ? (Bu("Transaction.set", n), this._delegate.set(r, e, n)) : this._delegate.set(r, e), this;
  }, e.prototype.update = function (t, e, n) {
    for (var r, i = [], o = 3; o < arguments.length; o++) {
      i[o - 3] = arguments[o];
    }

    var s = Bc(t);
    return 2 === arguments.length ? this._delegate.update(s, e) : (r = this._delegate).update.apply(r, (0, _tslib.__spreadArray)([s, e, n], i)), this;
  }, e.prototype.delete = function (t) {
    var e = Bc(t);
    return this._delegate.delete(e), this;
  }, e;
}(Ju),
    kc =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.set = function (t, e, n) {
    var r = Bc(t);
    return n ? (Bu("WriteBatch.set", n), this._delegate.set(r, e, n)) : this._delegate.set(r, e), this;
  }, e.prototype.update = function (t, e, n) {
    for (var r, i = [], o = 3; o < arguments.length; o++) {
      i[o - 3] = arguments[o];
    }

    var s = Bc(t);
    return 2 === arguments.length ? this._delegate.update(s, e) : (r = this._delegate).update.apply(r, (0, _tslib.__spreadArray)([s, e, n], i)), this;
  }, e.prototype.delete = function (t) {
    var e = Bc(t);
    return this._delegate.delete(e), this;
  }, e.prototype.commit = function () {
    return this._delegate.commit();
  }, e;
}(Ju),
    Cc =
/** @class */
function (t) {
  function e(e, n, r) {
    var i = this;
    return (i = t.call(this, r) || this)._firestore = e, i._userDataWriter = n, i;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.fromFirestore = function (t, e) {
    var n = new Ha(this._firestore._delegate, this._userDataWriter, t._key, t._document, t.metadata,
    /* converter= */
    null);
    return this._delegate.fromFirestore(new Mc(this._firestore, n), null != e ? e : {});
  }, e.prototype.toFirestore = function (t, e) {
    return e ? this._delegate.toFirestore(t, e) : this._delegate.toFirestore(t);
  }, // Use the same instance of `FirestoreDataConverter` for the given instances
  // of `Firestore` and `PublicFirestoreDataConverter` so that isEqual() will
  // compare equal for two objects created with the same converter instance.
  e.ra = function (t, n) {
    var r = e.oa,
        i = r.get(t);
    i || (i = new WeakMap(), r.set(t, i));
    var o = i.get(n);
    return o || (o = new e(t, new Dc(t), n), i.set(n, o)), o;
  }, e;
}(Ju);

exports.G = kc;
exports.j = Ac;
Cc.oa = new WeakMap();
/**
 * A reference to a particular document in a collection in the database.
 */

var xc =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, n) || this).firestore = e, r._userDataWriter = new Dc(e), r;
  }

  return (0, _tslib.__extends)(e, t), e.ca = function (t, n, r) {
    if (t.length % 2 != 0) throw new G(j.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.canonicalString() + " has " + t.length);
    return new e(n, new Xu(n._delegate, r, new H(t)));
  }, e.ia = function (t, n, r) {
    return new e(n, new Xu(n._delegate, r, t));
  }, Object.defineProperty(e.prototype, "id", {
    get: function get() {
      return this._delegate.id;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "parent", {
    get: function get() {
      return new Uc(this.firestore, this._delegate.parent);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "path", {
    get: function get() {
      return this._delegate.path;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.collection = function (t) {
    try {
      return new Uc(this.firestore, ta(this._delegate, t));
    } catch (t) {
      throw Lc(t, "collection()", "DocumentReference.collection()");
    }
  }, e.prototype.isEqual = function (t) {
    return t instanceof Ju && (t = t._delegate), t instanceof Xu && na(this._delegate, t);
  }, e.prototype.set = function (t, e) {
    e = Bu("DocumentReference.set", e);

    try {
      return function (t, e, n) {
        t = Qu(t, Xu);
        var r = Qu(t.firestore, aa),
            i = fc(t._converter, e, n);
        return gc(r, [_a(Ta(r), "setDoc", t._key, i, null !== t._converter, n).toMutation(t._key, De.none())]);
      }(this._delegate, t, e);
    } catch (t) {
      throw Lc(t, "setDoc()", "DocumentReference.set()");
    }
  }, e.prototype.update = function (t, e) {
    for (var n = [], r = 2; r < arguments.length; r++) {
      n[r - 2] = arguments[r];
    }

    try {
      return 1 === arguments.length ? vc(this._delegate, t) : vc.apply(void 0, (0, _tslib.__spreadArray)([this._delegate, t, e], n));
    } catch (t) {
      throw Lc(t, "updateDoc()", "DocumentReference.update()");
    }
  }, e.prototype.delete = function () {
    return gc(Qu((t = this._delegate).firestore, aa), [new je(t._key, De.none())]);
    var t;
    /**
    * Add a new document to specified `CollectionReference` with the given data,
    * assigning it a document ID automatically.
    *
    * @param reference - A reference to the collection to add this document to.
    * @param data - An Object containing the data for the new document.
    * @returns A Promise resolved with a `DocumentReference` pointing to the
    * newly created document after it has been written to the backend (Note that it
    * won't resolve while you're offline).
    */
  }, e.prototype.onSnapshot = function () {
    for (var t = this, e = [], n = 0; n < arguments.length; n++) {
      e[n] = arguments[n];
    }

    var r = Rc(e),
        i = Oc(e, function (e) {
      return new Pc(t.firestore, new Wa(t.firestore._delegate, t._userDataWriter, e._key, e._document, e.metadata, t._delegate._converter));
    });
    return mc(this._delegate, r, i);
  }, e.prototype.get = function (t) {
    var e = this;
    return ("cache" === (null == t ? void 0 : t.source) ? function (t) {
      t = Qu(t, Xu);
      var e = Qu(t.firestore, aa),
          n = ca(e),
          r = new yc(e);
      return function (t, e) {
        var n = this,
            r = new Ir();
        return t.asyncQueue.enqueueAndForget(function () {
          return (0, _tslib.__awaiter)(n, void 0, void 0, function () {
            var n;
            return (0, _tslib.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  return n = function n(t, e, _n2) {
                    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
                      var r, i;
                      return (0, _tslib.__generator)(this, function (o) {
                        switch (o.label) {
                          case 0:
                            return o.trys.push([0, 2,, 3]), [4
                            /*yield*/
                            , function (t, e) {
                              var n = C(t);
                              return n.persistence.runTransaction("read document", "readonly", function (t) {
                                return n.Kn.In(t, e);
                              });
                            }(t, e)];

                          case 1:
                            return (i = o.sent()) instanceof gt ? _n2.resolve(i) : i instanceof wt ? _n2.resolve(null) : _n2.reject(new G(j.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3
                            /*break*/
                            , 3];

                          case 2:
                            return r = o.sent(), i = fs(r, "Failed to get document '" + e + " from cache"), _n2.reject(i), [3
                            /*break*/
                            , 3];

                          case 3:
                            return [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  }, [4
                  /*yield*/
                  , Du(t)];

                case 1:
                  return [2
                  /*return*/
                  , n.apply(void 0, [i.sent(), e, r])];
              }
            });
          });
        }), r.promise;
      }(n, t._key).then(function (n) {
        return new Wa(e, r, t._key, n, new Qa(n instanceof gt && n.hasLocalMutations,
        /* fromCache= */
        !0), t._converter);
      });
    }(this._delegate) : "server" === (null == t ? void 0 : t.source) ? function (t) {
      t = Qu(t, Xu);
      var e = Qu(t.firestore, aa);
      return Cu(ca(e), t._key, {
        source: "server"
      }).then(function (n) {
        return wc(e, t, n);
      });
    }(this._delegate) : function (t) {
      t = Qu(t, Xu);
      var e = Qu(t.firestore, aa);
      return Cu(ca(e), t._key).then(function (n) {
        return wc(e, t, n);
      });
    }(this._delegate)).then(function (t) {
      return new Pc(e.firestore, new Wa(e.firestore._delegate, e._userDataWriter, t._key, t._document, t.metadata, e._delegate._converter));
    });
  }, e.prototype.withConverter = function (t) {
    return new e(this.firestore, t ? this._delegate.withConverter(Cc.ra(this.firestore, t)) : this._delegate.withConverter(null));
  }, e;
}(Ju);
/**
 * Replaces the function name in an error thrown by the firestore-exp API
 * with the function names used in the classic API.
 */


exports.H = xc;

function Lc(t, e, n) {
  return t.message = t.message.replace(e, n), t
  /**
  * Iterates the list of arguments from an `onSnapshot` call and returns the
  * first argument that may be an `SnapshotListenOptions` object. Returns an
  * empty object if none is found.
  */
  ;
}

function Rc(t) {
  for (var e = 0, n = t; e < n.length; e++) {
    var r = n[e];
    if ("object" == _typeof(r) && !oa(r)) return r;
  }

  return {};
}
/**
 * Creates an observer that can be passed to the firestore-exp SDK. The
 * observer converts all observed values into the format expected by the classic
 * SDK.
 *
 * @param args - The list of arguments from an `onSnapshot` call.
 * @param wrapper - The function that converts the firestore-exp type into the
 * type used by this shim.
 */


function Oc(t, e) {
  var n, r, i;
  return {
    next: function next(t) {
      i.next && i.next(e(t));
    },
    error: null === (n = (i = oa(t[0]) ? t[0] : oa(t[1]) ? t[1] : "function" == typeof t[0] ? {
      next: t[0],
      error: t[1],
      complete: t[2]
    } : {
      next: t[1],
      error: t[2],
      complete: t[3]
    }).error) || void 0 === n ? void 0 : n.bind(i),
    complete: null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i)
  };
}

var Pc =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, n) || this)._firestore = e, r;
  }

  return (0, _tslib.__extends)(e, t), Object.defineProperty(e.prototype, "ref", {
    get: function get() {
      return new xc(this._firestore, this._delegate.ref);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "id", {
    get: function get() {
      return this._delegate.id;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "metadata", {
    get: function get() {
      return this._delegate.metadata;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "exists", {
    get: function get() {
      return this._delegate.exists();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.data = function (t) {
    return this._delegate.data(t);
  }, e.prototype.get = function (t, e) {
    return this._delegate.get(t, e);
  }, e.prototype.isEqual = function (t) {
    return Xa(this._delegate, t._delegate);
  }, e;
}(Ju),
    Mc =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.data = function (t) {
    return this._delegate.data(t);
  }, e;
}(Pc),
    Fc =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, n) || this).firestore = e, r._userDataWriter = new Dc(e), r;
  }

  return (0, _tslib.__extends)(e, t), e.prototype.where = function (t, n, r) {
    try {
      // The "as string" cast is a little bit of a hack. `where` accepts the
      // FieldPath Compat type as input, but is not typed as such in order to
      // not expose this via our public typings file.
      return new e(this.firestore, tc(this._delegate, function (t, e, n) {
        var r = e,
            i = za("where", t);
        return new ec(i, r, n);
      }(t, n, r)));
    } catch (t) {
      throw Lc(t, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }, e.prototype.orderBy = function (t, n) {
    try {
      // The "as string" cast is a little bit of a hack. `orderBy` accepts the
      // FieldPath Compat type as input, but is not typed as such in order to
      // not expose this via our public typings file.
      return new e(this.firestore, tc(this._delegate, function (t, e) {
        void 0 === e && (e = "asc");
        var n = e,
            r = za("orderBy", t);
        return new nc(r, n);
      }(t, n)));
    } catch (t) {
      throw Lc(t, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }, e.prototype.limit = function (t) {
    try {
      return new e(this.firestore, tc(this._delegate, function (t) {
        return Wu("limit", t), new rc("limit", t, "F"
        /* First */
        );
      }(t)));
    } catch (t) {
      throw Lc(t, "limit()", "Query.limit()");
    }
  }, e.prototype.limitToLast = function (t) {
    try {
      return new e(this.firestore, tc(this._delegate, function (t) {
        return Wu("limitToLast", t), new rc("limitToLast", t, "L"
        /* Last */
        );
      }(t)));
    } catch (t) {
      throw Lc(t, "limitToLast()", "Query.limitToLast()");
    }
  }, e.prototype.startAt = function () {
    for (var t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }

    try {
      return new e(this.firestore, tc(this._delegate, function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        return new ic("startAt", t,
        /*before=*/
        !0);
      }.apply(void 0, t)));
    } catch (t) {
      throw Lc(t, "startAt()", "Query.startAt()");
    }
  }, e.prototype.startAfter = function () {
    for (var t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }

    try {
      return new e(this.firestore, tc(this._delegate, function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        return new ic("startAfter", t,
        /*before=*/
        !1);
      }.apply(void 0, t)));
    } catch (t) {
      throw Lc(t, "startAfter()", "Query.startAfter()");
    }
  }, e.prototype.endBefore = function () {
    for (var t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }

    try {
      return new e(this.firestore, tc(this._delegate, function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        return new oc("endBefore", t,
        /*before=*/
        !0);
      }.apply(void 0, t)));
    } catch (t) {
      throw Lc(t, "endBefore()", "Query.endBefore()");
    }
  }, e.prototype.endAt = function () {
    for (var t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }

    try {
      return new e(this.firestore, tc(this._delegate, function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        return new oc("endAt", t,
        /*before=*/
        !1);
      }.apply(void 0, t)));
    } catch (t) {
      throw Lc(t, "endAt()", "Query.endAt()");
    }
  }, e.prototype.isEqual = function (t) {
    return ra(this._delegate, t._delegate);
  }, e.prototype.get = function (t) {
    var e = this;
    return ("cache" === (null == t ? void 0 : t.source) ?
    /**
    * Executes the query and returns the results as a `QuerySnapshot` from cache.
    * Returns an error if the document is not currently cached.
    *
    * @returns A Promise that will be resolved with the results of the query.
    */
    function (t) {
      t = Qu(t, $u);
      var e = Qu(t.firestore, aa),
          n = ca(e),
          r = new yc(e);
      return function (t, e) {
        var n = this,
            r = new Ir();
        return t.asyncQueue.enqueueAndForget(function () {
          return (0, _tslib.__awaiter)(n, void 0, void 0, function () {
            var n;
            return (0, _tslib.__generator)(this, function (i) {
              switch (i.label) {
                case 0:
                  return n = function n(t, e, _n3) {
                    return (0, _tslib.__awaiter)(this, void 0, void 0, function () {
                      var r, i, o, s, u;
                      return (0, _tslib.__generator)(this, function (a) {
                        switch (a.label) {
                          case 0:
                            return a.trys.push([0, 2,, 3]), [4
                            /*yield*/
                            , Ji(t, e,
                            /* usePreviousResults= */
                            !0)];

                          case 1:
                            return u = a.sent(), r = new ks(e, u.jn), i = r.Io(u.documents), o = r.applyChanges(i,
                            /* updateLimboDocuments= */
                            !1), _n3.resolve(o.snapshot), [3
                            /*break*/
                            , 3];

                          case 2:
                            return s = a.sent(), u = fs(s, "Failed to execute query '" + e + " against cache"), _n3.reject(u), [3
                            /*break*/
                            , 3];

                          case 3:
                            return [2
                            /*return*/
                            ];
                        }
                      });
                    });
                  }, [4
                  /*yield*/
                  , Du(t)];

                case 1:
                  return [2
                  /*return*/
                  , n.apply(void 0, [i.sent(), e, r])];
              }
            });
          });
        }), r.promise;
      }(n, t._query).then(function (n) {
        return new Ya(e, r, t, n);
      });
    }(this._delegate) : "server" === (null == t ? void 0 : t.source) ? function (t) {
      t = Qu(t, $u);
      var e = Qu(t.firestore, aa),
          n = ca(e),
          r = new yc(e);
      return xu(n, t._query, {
        source: "server"
      }).then(function (n) {
        return new Ya(e, r, t, n);
      });
    }(this._delegate) : function (t) {
      t = Qu(t, $u);
      var e = Qu(t.firestore, aa),
          n = ca(e),
          r = new yc(e);
      return $a(t._query), xu(n, t._query).then(function (n) {
        return new Ya(e, r, t, n);
      });
    }(this._delegate)).then(function (t) {
      return new Vc(e.firestore, new Ya(e.firestore._delegate, e._userDataWriter, e._delegate, t._snapshot));
    });
  }, e.prototype.onSnapshot = function () {
    for (var t = this, e = [], n = 0; n < arguments.length; n++) {
      e[n] = arguments[n];
    }

    var r = Rc(e),
        i = Oc(e, function (e) {
      return new Vc(t.firestore, new Ya(t.firestore._delegate, t._userDataWriter, t._delegate, e._snapshot));
    });
    return mc(this._delegate, r, i);
  }, e.prototype.withConverter = function (t) {
    return new e(this.firestore, t ? this._delegate.withConverter(Cc.ra(this.firestore, t)) : this._delegate.withConverter(null));
  }, e;
}(Ju),
    qc =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, n) || this)._firestore = e, r;
  }

  return (0, _tslib.__extends)(e, t), Object.defineProperty(e.prototype, "type", {
    get: function get() {
      return this._delegate.type;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "doc", {
    get: function get() {
      return new Mc(this._firestore, this._delegate.doc);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "oldIndex", {
    get: function get() {
      return this._delegate.oldIndex;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "newIndex", {
    get: function get() {
      return this._delegate.newIndex;
    },
    enumerable: !1,
    configurable: !0
  }), e;
}(Ju),
    Vc =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, n) || this)._firestore = e, r;
  }

  return (0, _tslib.__extends)(e, t), Object.defineProperty(e.prototype, "query", {
    get: function get() {
      return new Fc(this._firestore, this._delegate.query);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "metadata", {
    get: function get() {
      return this._delegate.metadata;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "size", {
    get: function get() {
      return this._delegate.size;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "empty", {
    get: function get() {
      return this._delegate.empty;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "docs", {
    get: function get() {
      var t = this;
      return this._delegate.docs.map(function (e) {
        return new Mc(t._firestore, e);
      });
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.docChanges = function (t) {
    var e = this;
    return this._delegate.docChanges(t).map(function (t) {
      return new qc(e._firestore, t);
    });
  }, e.prototype.forEach = function (t, e) {
    var n = this;

    this._delegate.forEach(function (r) {
      t.call(e, new Mc(n._firestore, r));
    });
  }, e.prototype.isEqual = function (t) {
    return Xa(this._delegate, t._delegate);
  }, e;
}(Ju),
    Uc =
/** @class */
function (t) {
  function e(e, n) {
    var r = this;
    return (r = t.call(this, e, n) || this).firestore = e, r._delegate = n, r;
  }

  return (0, _tslib.__extends)(e, t), Object.defineProperty(e.prototype, "id", {
    get: function get() {
      return this._delegate.id;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "path", {
    get: function get() {
      return this._delegate.path;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e.prototype, "parent", {
    get: function get() {
      var t = this._delegate.parent;
      return t ? new xc(this.firestore, t) : null;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.doc = function (t) {
    try {
      return new xc(this.firestore, void 0 === t ? ea(this._delegate) : ea(this._delegate, t));
    } catch (t) {
      throw Lc(t, "doc()", "CollectionReference.doc()");
    }
  }, e.prototype.add = function (t) {
    var e = this;
    return function (t, e) {
      var n = Qu(t.firestore, aa),
          r = ea(t),
          i = fc(t._converter, e);
      return gc(n, [_a(Ta(t.firestore), "addDoc", r._key, i, null !== t._converter, {}).toMutation(r._key, De.exists(!1))]).then(function () {
        return r;
      });
    }(this._delegate, t).then(function (t) {
      return new xc(e.firestore, t);
    });
  }, e.prototype.isEqual = function (t) {
    return na(this._delegate, t._delegate);
  }, e.prototype.withConverter = function (t) {
    return new e(this.firestore, t ? this._delegate.withConverter(Cc.ra(this.firestore, t)) : this._delegate.withConverter(null));
  }, e;
}(Fc);

exports.i = Uc;
exports.s = Vc;
exports.e = Fc;
exports.t = Mc;
exports.Z = Pc;

function Bc(t) {
  return t instanceof Ju && (t = t._delegate), Qu(t, Xu);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.

/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a list
 * of field names (referring to a nested field in the document).
 */


var jc =
/** @class */
function (t) {
  /**
   * Creates a FieldPath from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  function e() {
    for (var e = [], n = 0; n < arguments.length; n++) {
      e[n] = arguments[n];
    }

    return t.call(this, new (da.bind.apply(da, (0, _tslib.__spreadArray)([void 0], e)))()) || this;
  }

  return (0, _tslib.__extends)(e, t), e.documentId = function () {
    /**
     * Internal Note: The backend doesn't technically support querying by
     * document ID. Instead it queries by the entire document name (full path
     * included), but in the cases we currently support documentId(), the net
     * effect is the same.
     */
    return new e(W.keyField().canonicalString());
  }, e.prototype.isEqual = function (t) {
    return t instanceof Ju && (t = t._delegate), t instanceof da && this._delegate._internalPath.isEqual(t._internalPath);
  }, e;
}(Ju),
    Gc =
/** @class */
function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return (0, _tslib.__extends)(e, t), e.serverTimestamp = function () {
    var t = new Na("serverTimestamp");
    return t._methodName = "FieldValue.serverTimestamp", new e(t);
  }, e.delete = function () {
    var t = new Sa("deleteField");
    return t._methodName = "FieldValue.delete", new e(t);
  }, e.arrayUnion = function () {
    for (var t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }

    var r =
    /**
    * Returns a special value that can be used with {@link setDoc} or {@link
    * updateDoc} that tells the server to union the given elements with any array
    * value that already exists on the server. Each specified element that doesn't
    * already exist in the array will be added to the end. If the field being
    * modified is not already an array it will be overwritten with an array
    * containing exactly the specified elements.
    *
    * @param elements - The elements to union into the array.
    * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
    * `updateDoc()`.
    */
    function () {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      } // NOTE: We don't actually parse the data until it's used in set() or
      // update() since we'd need the Firestore instance to do this.


      return new Aa("arrayUnion", t);
    }.apply(void 0, t);

    return r._methodName = "FieldValue.arrayUnion", new e(r);
  }, e.arrayRemove = function () {
    for (var t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }

    var r = function () {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      } // NOTE: We don't actually parse the data until it's used in set() or
      // update() since we'd need the Firestore instance to do this.


      return new ka("arrayRemove", t);
    }.apply(void 0, t);

    return r._methodName = "FieldValue.arrayRemove", new e(r);
  }, e.increment = function (t) {
    var n = function (t) {
      return new Ca("increment", t);
    }(t);

    return n._methodName = "FieldValue.increment", new e(n);
  }, e.prototype.isEqual = function (t) {
    return this._delegate.isEqual(t._delegate);
  }, e;
}(Ju);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.c = Gc;
exports.o = jc;

function Kc(t) {
  /**
  * Loads a Firestore bundle into the local cache.
  *
  * @param firestore - The `Firestore` instance to load bundles for for.
  * @param bundleData - An object representing the bundle to be loaded. Valid objects are
  *   `ArrayBuffer`, `ReadableStream<Uint8Array>` or `string`.
  *
  * @return
  *   A `LoadBundleTask` object, which notifies callers with progress updates, and completion
  *   or error events. It can be used as a `Promise<LoadBundleTaskProgress>`.
  */
  return function (t, e) {
    var n = ca(t = Qu(t, aa)),
        r = new sa();
    return function (t, e, n, r) {
      var i = this,
          o = function (t, e) {
        return function (t, e) {
          return new mu(t, e);
        }(function (t, e) {
          if (t instanceof Uint8Array) return yu(t, e);
          if (t instanceof ArrayBuffer) return yu(new Uint8Array(t), e);
          if (t instanceof ReadableStream) return t.getReader();
          throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream");
        }("string" == typeof t ? new TextEncoder().encode(t) : t), e);
      }(n, xo(e));

      t.asyncQueue.enqueueAndForget(function () {
        return (0, _tslib.__awaiter)(i, void 0, void 0, function () {
          var e;
          return (0, _tslib.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return e = hu, [4
                /*yield*/
                , Au(t)];

              case 1:
                return e.apply(void 0, [n.sent(), o, r]), [2
                /*return*/
                ];
            }
          });
        });
      });
    }(n, t._databaseId, e, r), r;
  }(this._delegate, t);
}

function zc(t) {
  var e,
      n,
      r = this;
  return (e = this._delegate, n = t, function (t, e) {
    var n = this;
    return t.asyncQueue.enqueue(function () {
      return (0, _tslib.__awaiter)(n, void 0, void 0, function () {
        var n;
        return (0, _tslib.__generator)(this, function (r) {
          switch (r.label) {
            case 0:
              return n = function n(t, e) {
                var n = C(t);
                return n.persistence.runTransaction("Get named query", "readonly", function (t) {
                  return n.He.getNamedQuery(t, e);
                });
              }, [4
              /*yield*/
              , Du(t)];

            case 1:
              return [2
              /*return*/
              , n.apply(void 0, [r.sent(), e])];
          }
        });
      });
    });
  }(ca(e = Qu(e, aa)), n).then(function (t) {
    return t ? new $u(e, null, t.query) : null;
  })).then(function (t) {
    return t ? new Fc(r, t) : null;
  });
}
},{"@firebase/logger":"node_modules/@firebase/logger/dist/index.esm.js","@firebase/util":"node_modules/@firebase/util/dist/index.esm.js","@firebase/webchannel-wrapper":"node_modules/@firebase/webchannel-wrapper/dist/index.esm.js","tslib":"node_modules/tslib/tslib.es6.js","process":"node_modules/process/browser.js"}],"node_modules/@firebase/firestore/dist/esm5/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerFirestore = P;

var _app = _interopRequireDefault(require("@firebase/app"));

require("@firebase/logger");

require("@firebase/util");

require("@firebase/webchannel-wrapper");

require("tslib");

var _prebuilt7525c6cbCb60b4b = require("./prebuilt-7525c6cb-cb60b4b9.js");

var _component = require("@firebase/component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var L = {
  Firestore: _prebuilt7525c6cbCb60b4b.Q,
  GeoPoint: _prebuilt7525c6cbCb60b4b.x,
  Timestamp: _prebuilt7525c6cbCb60b4b.J,
  Blob: _prebuilt7525c6cbCb60b4b.L,
  Transaction: _prebuilt7525c6cbCb60b4b.j,
  WriteBatch: _prebuilt7525c6cbCb60b4b.G,
  DocumentReference: _prebuilt7525c6cbCb60b4b.H,
  DocumentSnapshot: _prebuilt7525c6cbCb60b4b.Z,
  Query: _prebuilt7525c6cbCb60b4b.e,
  QueryDocumentSnapshot: _prebuilt7525c6cbCb60b4b.t,
  QuerySnapshot: _prebuilt7525c6cbCb60b4b.s,
  CollectionReference: _prebuilt7525c6cbCb60b4b.i,
  FieldPath: _prebuilt7525c6cbCb60b4b.o,
  FieldValue: _prebuilt7525c6cbCb60b4b.c,
  setLogLevel: _prebuilt7525c6cbCb60b4b.W,
  CACHE_SIZE_UNLIMITED: _prebuilt7525c6cbCb60b4b.T
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */

function P(e) {
  !
  /**
  * Configures Firestore as part of the Firebase SDK by calling registerService.
  *
  * @param firebase - The FirebaseNamespace to register Firestore with
  * @param firestoreFactory - A factory function that returns a new Firestore
  *    instance.
  */
  function (e, r) {
    e.INTERNAL.registerComponent(new _component.Component("firestore", function (e) {
      var t = e.getProvider("app").getImmediate();
      return r(t, e.getProvider("auth-internal"));
    }, "PUBLIC"
    /* PUBLIC */
    ).setServiceProps(Object.assign({}, L)));
  }(e, function (e, s) {
    return new _prebuilt7525c6cbCb60b4b.Q(e, new _prebuilt7525c6cbCb60b4b.I(e, s), new _prebuilt7525c6cbCb60b4b.U());
  }), e.registerVersion("@firebase/firestore", "2.2.1");
}

P(_app.default);
},{"@firebase/app":"node_modules/@firebase/app/dist/index.esm.js","@firebase/logger":"node_modules/@firebase/logger/dist/index.esm.js","@firebase/util":"node_modules/@firebase/util/dist/index.esm.js","@firebase/webchannel-wrapper":"node_modules/@firebase/webchannel-wrapper/dist/index.esm.js","tslib":"node_modules/tslib/tslib.es6.js","./prebuilt-7525c6cb-cb60b4b9.js":"node_modules/@firebase/firestore/dist/esm5/prebuilt-7525c6cb-cb60b4b9.js","@firebase/component":"node_modules/@firebase/component/dist/index.esm.js"}],"node_modules/firebase/firestore/dist/index.esm.js":[function(require,module,exports) {
"use strict";

require("@firebase/firestore");
},{"@firebase/firestore":"node_modules/@firebase/firestore/dist/esm5/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app.default.initializeApp({
  apiKey: "AIzaSyAL-Jeu4Ck0gRc35Ga-cYNgCxVYhf9TVbk",
  authDomain: "tca-ratings.firebaseapp.com",
  projectId: "tca-ratings",
  storageBucket: "tca-ratings.appspot.com",
  messagingSenderId: "64357630658",
  appId: "1:64357630658:web:3011d2c8a5f12c7206b15b"
});

var db = _app.default.firestore();

function initMap() {
  // The location of Uluru
  var uluru = {
    lat: -25.344,
    lng: 131.036
  }; // The map, centered at Uluru

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  }); // The marker, positioned at Uluru

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
},{"firebase/app":"node_modules/firebase/app/dist/index.esm.js","firebase/firestore":"node_modules/firebase/firestore/dist/index.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60918" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/TCARatings.e31bb0bc.js.map
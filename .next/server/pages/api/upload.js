module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+0Cv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fetch = __webpack_require__("Kq1p");
var fetch__default = _interopDefault(fetch);
var formData = __webpack_require__("TvLT");
var blob = __webpack_require__("Qobo");
var file = __webpack_require__("X1Jm");

/**
 * A client library for the https://nft.storage/ service. It provides a convenient
 * interface for working with the [Raw HTTP API](https://nft.storage/#api-docs)
 * from a web browser or [Node.js](https://nodejs.org/) and comes bundled with
 * TS for out-of-the box type inference and better IntelliSense.
 *
 * @example
 * ```js
 * import { NFTStorage, File, Blob } from "nft.storage"
 * const client = new NFTStorage({ token: API_TOKEN })
 *
 * const cid = await client.storeBlob(new Blob(['hello world']))
 * ```
 * @module
 */

/**
 * @implements API.Service
 */
class NFTStorage {
  /**
   * Constructs a client bound to the given `options.token` and
   * `options.endpoint`.
   *
   * @example
   * ```js
   * import { NFTStorage, File, Blob } from "nft.storage"
   * const client = new NFTStorage({ token: API_TOKEN })
   *
   * const cid = await client.storeBlob(new Blob(['hello world']))
   * ```
   * Optionally you could pass an alternative API endpoint (e.g. for testing)
   * @example
   * ```js
   * import { NFTStorage } from "nft.storage"
   * const client = new NFTStorage({
   *   token: API_TOKEN
   *   endpoint: new URL('http://localhost:8080/')
   * })
   * ```
   *
   * @param {{token: string, endpoint?:URL}} options
   */
  constructor({ token, endpoint = new URL('https://nft.storage') }) {
    /**
     * Authorization token.
     *
     * @readonly
     */
    this.token = token;
    /**
     * Service API endpoint `URL`.
     * @readonly
     */
    this.endpoint = endpoint;
  }

  /**
   * @hidden
   * @param {string} token
   */
  static auth(token) {
    return { Authorization: `Bearer ${token}` }
  }
  /**
   * @param {API.Service} service
   * @param {Blob} blob
   * @returns {Promise<API.CIDString>}
   */
  static async storeBlob({ endpoint, token }, blob) {
    const url = new URL('/api/upload', endpoint);

    const request = await fetch__default(url.toString(), {
      method: 'POST',
      headers: NFTStorage.auth(token),
      body: blob,
    });
    const result = await request.json();

    if (result.ok) {
      return result.value.cid
    } else {
      throw new Error(result.error.message)
    }
  }
  /**
   * @param {API.Service} service
   * @param {Iterable<File>} files
   * @returns {Promise<API.CIDString>}
   */
  static async storeDirectory({ endpoint, token }, files) {
    const url = new URL('/api/upload', endpoint);
    const body = new formData.FormData();
    for (const file of files) {
      body.append('file', file, file.name);
    }

    const response = await fetch__default(url.toString(), {
      method: 'POST',
      headers: NFTStorage.auth(token),
      body,
    });
    const result = await response.json();

    if (result.ok) {
      return result.value.cid
    } else {
      throw new Error(result.error.message)
    }
  }

  /**
   * @param {API.Service} service
   * @param {string} cid
   * @returns {Promise<API.StatusResult>}
   */
  static async status({ endpoint, token }, cid) {
    const url = new URL(`/api/${cid}`, endpoint);
    const response = await fetch__default(url.toString(), {
      method: 'GET',
      headers: NFTStorage.auth(token),
    });
    const result = await response.json();

    if (result.ok) {
      return {
        cid: result.value.cid,
        deals: result.value.deals,
        size: result.value.size,
        pin: result.value.pin,
        created: new Date(result.value.created),
      }
    } else {
      throw new Error(result.error.message)
    }
  }

  /**
   * @param {API.Service} service
   * @param {string} cid
   * @returns {Promise<void>}
   */
  static async delete({ endpoint, token }, cid) {
    const url = new URL(`/api/${cid}`, endpoint);
    const response = await fetch__default(url.toString(), {
      method: 'DELETE',
      headers: NFTStorage.auth(token),
    });
    const result = await response.json();
    if (!result.ok) {
      throw new Error(result.error.message)
    }
  }

  // Just a sugar so you don't have to pass around endpoint and token around.

  /**
   * Stores a single file and returns the corresponding Content Identifier (CID).
   * Takes a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob)
   * or a [File](https://developer.mozilla.org/en-US/docs/Web/API/File). Note
   * that no file name or file metadata is retained.
   *
   * @example
   * ```js
   * const content = new Blob(['hello world'])
   * const cid = await client.storeBlob(content)
   * cid //> 'Qmf412jQZiuVUtdgnB36FXFX7xg5V6KEbSJ4dpQuhkLyfD'
   * ```
   *
   * @param {Blob} blob
   */
  storeBlob(blob) {
    return NFTStorage.storeBlob(this, blob)
  }
  /**
   * Stores a directory of files and returns a CID for the directory.
   *
   * @example
   * ```js
   * const cid = client.storeDirectory([
   *   new File(['hello world'], 'hello.txt'),
   *   new File([JSON.stringify({'from': 'incognito'}, null, 2)], 'metadata.json')
   * ])
   * cid //>
   * ```
   *
   * Argument can be a [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
   * instance as well, in which case directory structure will be retained.
   *
   * @param {Iterable<File>} files
   */
  storeDirectory(files) {
    return NFTStorage.storeDirectory(this, files)
  }
  /**
   * Returns current status of the stored content by its CID.
   * @example
   * ```js
   * const status = await client.status('Qmf412jQZiuVUtdgnB36FXFX7xg5V6KEbSJ4dpQuhkLyfD')
   * ```
   *
   * @param {string} cid
   */
  status(cid) {
    return NFTStorage.status(this, cid)
  }
  /**
   * Removes stored content by its CID from the service.
   *
   * > Please note that even if content is removed from the service other nodes
   * that have replicated it might still continue providing it.
   *
   * @example
   * ```js
   * await client.delete('Qmf412jQZiuVUtdgnB36FXFX7xg5V6KEbSJ4dpQuhkLyfD')
   * ```
   *
   * @param {string} cid
   */
  delete(cid) {
    return NFTStorage.delete(this, cid)
  }
}

Object.defineProperty(exports, 'FormData', {
  enumerable: true,
  get: function () {
    return formData.FormData;
  }
});
Object.defineProperty(exports, 'Blob', {
  enumerable: true,
  get: function () {
    return blob.Blob;
  }
});
Object.defineProperty(exports, 'File', {
  enumerable: true,
  get: function () {
    return file.File;
  }
});
exports.NFTStorage = NFTStorage;
//# sourceMappingURL=lib.cjs.map


/***/ }),

/***/ "/NSD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var webEncoding = __webpack_require__("Z/+5");
var _package = __webpack_require__("wxb8");

/**
 * @implements {globalThis.Blob}
 */
const WebBlob = class Blob {
  /**
   * @param {BlobPart[]} [init]
   * @param {BlobPropertyBag} [options]
   */
  constructor(init = [], options = {}) {
    /** @type {Uint8Array[]} */
    const parts = [];

    let size = 0;
    for (const part of init) {
      if (typeof part === "string") {
        const bytes = new webEncoding.TextEncoder().encode(part);
        parts.push(bytes);
        size += bytes.byteLength;
      } else if (part instanceof WebBlob) {
        size += part.size;
        // @ts-ignore - `_parts` is marked private so TS will complain about
        // accessing it.
        parts.push(...part._parts);
      } else if (part instanceof ArrayBuffer) {
        parts.push(new Uint8Array(part));
        size += part.byteLength;
      } else if (part instanceof Uint8Array) {
        parts.push(part);
        size += part.byteLength;
      } else if (ArrayBuffer.isView(part)) {
        const { buffer, byteOffset, byteLength } = part;
        parts.push(new Uint8Array(buffer, byteOffset, byteLength));
        size += byteLength;
      } else {
        const bytes = new webEncoding.TextEncoder().encode(String(part));
        parts.push(bytes);
        size += bytes.byteLength;
      }
    }

    /** @private */
    this._size = size;
    /** @private */
    this._type = readType(options.type);
    /** @private */
    this._parts = parts;

    Object.defineProperties(this, {
      _size: { enumerable: false },
      _type: { enumerable: false },
      _parts: { enumerable: false }
    });
  }

  /**
   * A string indicating the MIME type of the data contained in the Blob.
   * If the type is unknown, this string is empty.
   * @type {string}
   */
  get type() {
    return this._type
  }
  /**
   * The size, in bytes, of the data contained in the Blob object.
   * @type {number}
   */
  get size() {
    return this._size
  }

  /**
   * Returns a new Blob object containing the data in the specified range of
   * bytes of the blob on which it's called.
   * @param {number} [start=0] - An index into the Blob indicating the first
   * byte to include in the new Blob. If you specify a negative value, it's
   * treated as an offset from the end of the Blob toward the beginning. For
   * example, `-10` would be the 10th from last byte in the Blob. The default
   * value is `0`. If you specify a value for start that is larger than the
   * size of the source Blob, the returned Blob has size 0 and contains no
   * data.
   * @param {number} [end] - An index into the `Blob` indicating the first byte
   *  that will *not* be included in the new `Blob` (i.e. the byte exactly at
   * this index is not included). If you specify a negative value, it's treated
   * as an offset from the end of the Blob toward the beginning. For example,
   * `-10` would be the 10th from last byte in the `Blob`. The default value is
   * size.
   * @param {string} [type] - The content type to assign to the new Blob;
   * this will be the value of its type property. The default value is an empty
   * string.
   * @returns {Blob}
   */
  slice(start = 0, end = this.size, type = "") {
    const { size, _parts } = this;
    let offset = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);

    let limit = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(limit - offset, 0);
    const blob = new Blob([], { type });

    if (span === 0) {
      return blob
    }

    let blobSize = 0;
    const blobParts = [];
    for (const part of _parts) {
      const { byteLength } = part;
      if (offset > 0 && byteLength <= offset) {
        offset -= byteLength;
        limit -= byteLength;
      } else {
        const chunk = part.subarray(offset, Math.min(byteLength, limit));
        blobParts.push(chunk);
        blobSize += chunk.byteLength;
        // no longer need to take that into account
        offset = 0;

        // don't add the overflow to new blobParts
        if (blobSize >= span) {
          break
        }
      }
    }

    blob._parts = blobParts;
    blob._size = blobSize;

    return blob
  }

  /**
   * Returns a promise that resolves with an ArrayBuffer containing the entire
   * contents of the Blob as binary data.
   * @returns {Promise<ArrayBuffer>}
   */
  // eslint-disable-next-line require-await
  async arrayBuffer() {
    const buffer = new ArrayBuffer(this.size);
    const bytes = new Uint8Array(buffer);
    let offset = 0;
    for (const part of this._parts) {
      bytes.set(part, offset);
      offset += part.byteLength;
    }
    return buffer
  }

  /**
   * Returns a promise that resolves with a USVString containing the entire
   * contents of the Blob interpreted as UTF-8 text.
   * @returns {Promise<string>}
   */
  // eslint-disable-next-line require-await
  async text() {
    const decoder = new webEncoding.TextDecoder();
    let text = "";
    for (const part of this._parts) {
      text += decoder.decode(part);
    }
    return text
  }

  /**
   * @returns {BlobStream}
   */
  stream() {
    return new BlobStream(this._parts)
  }

  /**
   * @returns {string}
   */
  toString() {
    return "[object Blob]"
  }

  get [Symbol.toStringTag]() {
    return "Blob"
  }
};

// Marking export as a DOM File object instead of custom class.
/** @type {typeof globalThis.Blob} */
const Blob = WebBlob;

/**
 * Blob stream is a `ReadableStream` extension optimized to have minimal
 * overhead when consumed as `AsyncIterable<Uint8Array>`.
 * @extends {ReadableStream<Uint8Array>}
 * @implements {AsyncIterable<Uint8Array>}
 */
class BlobStream extends _package.ReadableStream {
  /**
   * @param {Uint8Array[]} chunks
   */
  constructor(chunks) {
    // @ts-ignore
    super(new BlobStreamController(chunks.values()), { type: "bytes" });
    /** @private */
    this._chunks = chunks;
  }

  /**
   * @param {Object} [_options]
   * @property {boolean} [_options.preventCancel]
   * @returns {AsyncIterator<Uint8Array>}
   */
  async *[Symbol.asyncIterator](_options) {
    const reader = this.getReader();
    yield* this._chunks;
    reader.releaseLock();
  }
}

class BlobStreamController {
  /**
   * @param {Iterator<Uint8Array>} chunks
   */
  constructor(chunks) {
    this.chunks = chunks;
  }

  /**
   * @param {ReadableStreamDefaultController} controller
   */
  start(controller) {
    this.work(controller);
    this.isWorking = false;
    this.isCancelled = false;
  }
  /**
   *
   * @param {ReadableStreamDefaultController} controller
   */
  async work(controller) {
    const { chunks } = this;

    this.isWorking = true;
    while (!this.isCancelled && (controller.desiredSize || 0) > 0) {
      let next = null;
      try {
        next = chunks.next();
      } catch (error) {
        controller.error(error);
        break
      }

      if (next) {
        if (!next.done && !this.isCancelled) {
          controller.enqueue(next.value);
        } else {
          controller.close();
        }
      }
    }

    this.isWorking = false;
  }

  /**
   * @param {ReadableStreamDefaultController} controller
   */
  pull(controller) {
    if (!this.isWorking) {
      this.work(controller);
    }
  }
  cancel() {
    this.isCancelled = true;
  }
}

/**
 * @param {string} [input]
 * @returns {string}
 */
const readType = (input = "") => {
  const type = String(input).toLowerCase();
  return /[^\u0020-\u007E]/.test(type) ? "" : type
};

Object.defineProperty(exports, 'TextDecoder', {
  enumerable: true,
  get: function () {
    return webEncoding.TextDecoder;
  }
});
Object.defineProperty(exports, 'TextEncoder', {
  enumerable: true,
  get: function () {
    return webEncoding.TextEncoder;
  }
});
exports.ReadableStream = _package.ReadableStream;
exports.Blob = Blob;
//# sourceMappingURL=lib.cjs.map


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xiHj");


/***/ }),

/***/ "7WL4":
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "FMKJ":
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ "GIVA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var webEncoding = __webpack_require__("Z/+5");
var streams = _interopDefault(__webpack_require__("xMnz"));

const { ReadableStream: ReadableStreamPolyfill } = streams;
/** @type {typeof globalThis.ReadableStream} */
// @ts-ignore
const ReadableStream = ReadableStreamPolyfill;

Object.defineProperty(exports, 'TextDecoder', {
	enumerable: true,
	get: function () {
		return webEncoding.TextDecoder;
	}
});
Object.defineProperty(exports, 'TextEncoder', {
	enumerable: true,
	get: function () {
		return webEncoding.TextEncoder;
	}
});
exports.ReadableStream = ReadableStream;
//# sourceMappingURL=package.cjs.map


/***/ }),

/***/ "KEll":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "Kq1p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports = module.exports = fetch;

const http = __webpack_require__("KEll");
const https = __webpack_require__("7WL4");
const zlib = __webpack_require__("FMKJ");
const Stream = __webpack_require__("msIP");
const dataUriToBuffer = __webpack_require__("syyk");
const util = __webpack_require__("jK02");
const Blob = __webpack_require__("cfgC");
const crypto = __webpack_require__("PJMN");
const url = __webpack_require__("bzos");

class FetchBaseError extends Error {
	constructor(message, type) {
		super(message);
		// Hide custom error implementation details from end-users
		Error.captureStackTrace(this, this.constructor);

		this.type = type;
	}

	get name() {
		return this.constructor.name;
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}
}

/**
 * @typedef {{ address?: string, code: string, dest?: string, errno: number, info?: object, message: string, path?: string, port?: number, syscall: string}} SystemError
*/

/**
 * FetchError interface for operational errors
 */
class FetchError extends FetchBaseError {
	/**
	 * @param  {string} message -      Error message for human
	 * @param  {string} [type] -        Error type for machine
	 * @param  {SystemError} [systemError] - For Node.js system error
	 */
	constructor(message, type, systemError) {
		super(message, type);
		// When err.type is `system`, err.erroredSysCall contains system error and err.code contains system error code
		if (systemError) {
			// eslint-disable-next-line no-multi-assign
			this.code = this.errno = systemError.code;
			this.erroredSysCall = systemError.syscall;
		}
	}
}

/**
 * Is.js
 *
 * Object type checks.
 */

const NAME = Symbol.toStringTag;

/**
 * Check if `obj` is a URLSearchParams object
 * ref: https://github.com/node-fetch/node-fetch/issues/296#issuecomment-307598143
 *
 * @param  {*} obj
 * @return {boolean}
 */
const isURLSearchParameters = object => {
	return (
		typeof object === 'object' &&
		typeof object.append === 'function' &&
		typeof object.delete === 'function' &&
		typeof object.get === 'function' &&
		typeof object.getAll === 'function' &&
		typeof object.has === 'function' &&
		typeof object.set === 'function' &&
		typeof object.sort === 'function' &&
		object[NAME] === 'URLSearchParams'
	);
};

/**
 * Check if `object` is a W3C `Blob` object (which `File` inherits from)
 *
 * @param  {*} obj
 * @return {boolean}
 */
const isBlob = object => {
	return (
		typeof object === 'object' &&
		typeof object.arrayBuffer === 'function' &&
		typeof object.type === 'string' &&
		// typeof object.stream === 'function' &&
		typeof object.constructor === 'function' &&
		(
			/* c8 ignore next 2 */
			/^(Blob|File)$/.test(object[NAME]) ||
			/^(Blob|File)$/.test(object.constructor.name)
		)
	);
};

/**
 * Check if `obj` is a spec-compliant `FormData` object
 *
 * @param {*} object
 * @return {boolean}
 */
function isFormData(object) {
	return (
		typeof object === 'object' &&
		typeof object.append === 'function' &&
		typeof object.set === 'function' &&
		typeof object.get === 'function' &&
		typeof object.getAll === 'function' &&
		typeof object.delete === 'function' &&
		typeof object.keys === 'function' &&
		typeof object.values === 'function' &&
		typeof object.entries === 'function' &&
		typeof object.constructor === 'function' &&
		object[NAME] === 'FormData'
	);
}

/**
 * Check if `obj` is an instance of AbortSignal.
 *
 * @param  {*} obj
 * @return {boolean}
 */
const isAbortSignal = object => {
	return (
		typeof object === 'object' && (
			object[NAME] === 'AbortSignal' ||
			object[NAME] === 'EventTarget'
		)
	);
};

const carriage = '\r\n';
const dashes = '-'.repeat(2);
const carriageLength = Buffer.byteLength(carriage);

/**
 * @param {string} boundary
 */
const getFooter = boundary => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;

/**
 * @param {string} boundary
 * @param {string} name
 * @param {*} field
 *
 * @return {string}
 */
function getHeader(boundary, name, field) {
	let header = '';

	header += `${dashes}${boundary}${carriage}`;
	header += `Content-Disposition: form-data; name="${name}"`;

	if (isBlob(field)) {
		header += `; filename="${field.name}"${carriage}`;
		header += `Content-Type: ${field.type || 'application/octet-stream'}`;
	}

	return `${header}${carriage.repeat(2)}`;
}

/**
 * @return {string}
 */
const getBoundary = () => crypto.randomBytes(8).toString('hex');

/**
 * @param {FormData} form
 * @param {string} boundary
 */
async function * formDataIterator(form, boundary) {
	for (const [name, value] of form) {
		yield getHeader(boundary, name, value);

		if (isBlob(value)) {
			yield * value.stream();
		} else {
			yield value;
		}

		yield carriage;
	}

	yield getFooter(boundary);
}

/**
 * @param {FormData} form
 * @param {string} boundary
 */
function getFormDataLength(form, boundary) {
	let length = 0;

	for (const [name, value] of form) {
		length += Buffer.byteLength(getHeader(boundary, name, value));

		if (isBlob(value)) {
			length += value.size;
		} else {
			length += Buffer.byteLength(String(value));
		}

		length += carriageLength;
	}

	length += Buffer.byteLength(getFooter(boundary));

	return length;
}

// 64 KiB (same size chrome slice theirs blob into Uint8array's)
const POOL_SIZE = 65536;

/* c8 ignore start */
async function * read(blob) {
	let position = 0;
	while (position !== blob.size) {
		const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE));
		// eslint-disable-next-line no-await-in-loop
		const buffer = await chunk.arrayBuffer();
		position += buffer.byteLength;
		yield new Uint8Array(buffer);
	}
}
/* c8 ignore end */

function blobToNodeStream(blob) {
	return Stream.Readable.from(blob.stream ? blob.stream() : read(blob), {
		objectMode: false
	});
}

const INTERNALS$2 = Symbol('Body internals');

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Body {
	constructor(body, {
		size = 0
	} = {}) {
		let boundary = null;

		if (body === null) {
			// Body is undefined or null
			body = null;
		} else if (isURLSearchParameters(body)) {
		// Body is a URLSearchParams
			body = Buffer.from(body.toString());
		} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (util.types.isAnyArrayBuffer(body)) {
			// Body is ArrayBuffer
			body = Buffer.from(body);
		} else if (ArrayBuffer.isView(body)) {
			// Body is ArrayBufferView
			body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
		} else if (body instanceof Stream) ; else if (isFormData(body)) {
			// Body is an instance of formdata-node
			boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
			body = Stream.Readable.from(formDataIterator(body, boundary));
		} else {
			// None of the above
			// coerce to string then buffer
			body = Buffer.from(String(body));
		}

		this[INTERNALS$2] = {
			body,
			boundary,
			disturbed: false,
			error: null
		};
		this.size = size;

		if (body instanceof Stream) {
			body.on('error', err => {
				const error = err instanceof FetchBaseError ?
					err :
					new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, 'system', err);
				this[INTERNALS$2].error = error;
			});
		}
	}

	get body() {
		return this[INTERNALS$2].body;
	}

	get bodyUsed() {
		return this[INTERNALS$2].disturbed;
	}

	/**
	 * Decode response as ArrayBuffer
	 *
	 * @return  Promise
	 */
	async arrayBuffer() {
		const {buffer, byteOffset, byteLength} = await consumeBody(this);
		return buffer.slice(byteOffset, byteOffset + byteLength);
	}

	/**
	 * Return raw response as Blob
	 *
	 * @return Promise
	 */
	async blob() {
		const ct = (this.headers && this.headers.get('content-type')) || (this[INTERNALS$2].body && this[INTERNALS$2].body.type) || '';
		const buf = await this.buffer();

		return new Blob([buf], {
			type: ct
		});
	}

	/**
	 * Decode response as json
	 *
	 * @return  Promise
	 */
	async json() {
		const buffer = await consumeBody(this);
		return JSON.parse(buffer.toString());
	}

	/**
	 * Decode response as text
	 *
	 * @return  Promise
	 */
	async text() {
		const buffer = await consumeBody(this);
		return buffer.toString();
	}

	async formData() {
		
	}

	/**
	 * Decode response as buffer (non-spec api)
	 *
	 * @return  Promise
	 */
	buffer() {
		return consumeBody(this);
	}
}

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: {enumerable: true},
	bodyUsed: {enumerable: true},
	arrayBuffer: {enumerable: true},
	blob: {enumerable: true},
	json: {enumerable: true},
	text: {enumerable: true}
});

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return Promise
 */
async function consumeBody(data) {
	if (data[INTERNALS$2].disturbed) {
		throw new TypeError(`body used already for: ${data.url}`);
	}

	data[INTERNALS$2].disturbed = true;

	if (data[INTERNALS$2].error) {
		throw data[INTERNALS$2].error;
	}

	let {body} = data;

	// Body is null
	if (body === null) {
		return Buffer.alloc(0);
	}

	// Body is blob
	if (isBlob(body)) {
		body = blobToNodeStream(body);
	}

	// Body is buffer
	if (Buffer.isBuffer(body)) {
		return body;
	}

	/* c8 ignore next 3 */
	if (!(body instanceof Stream)) {
		return Buffer.alloc(0);
	}

	// Body is stream
	// get ready to actually consume the body
	const accum = [];
	let accumBytes = 0;

	try {
		for await (const chunk of body) {
			const bytes = typeof chunk === "string" ? Buffer.from(chunk) : chunk;
			if (data.size > 0 && accumBytes + bytes.byteLength > data.size) {
				const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, 'max-size');
				body.destroy(err);
				throw err;
			}

			accumBytes += bytes.byteLength;
			accum.push(bytes);
		}
	} catch (error) {
		if (error instanceof FetchBaseError) {
			throw error;
		} else {
			// Other errors, such as incorrect content-encoding
			throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, 'system', error);
		}
	}

	if (body.readableEnded === true || body._readableState.ended === true) {
		try {
			return Buffer.concat(accum, accumBytes);
		} catch (error) {
			throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, 'system', error);
		}
	} else {
		throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
	}
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed   instance       Response or Request instance
 * @param   String  highWaterMark  highWaterMark for both PassThrough body streams
 * @return  Mixed
 */
const clone = (instance, highWaterMark) => {
	let p1;
	let p2;
	let {body} = instance;

	// Don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// Check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if ((body instanceof Stream) && (typeof body.getBoundary !== 'function')) {
		// Tee instance body
		p1 = new Stream.PassThrough({highWaterMark});
		p2 = new Stream.PassThrough({highWaterMark});
		body.pipe(p1);
		body.pipe(p2);
		// Set instance body to teed body and return the other teed body
		instance[INTERNALS$2].body = p1;
		body = p2;
	}

	return body;
};

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param {any} body Any options.body input
 * @returns {string | null}
 */
const extractContentType = (body, request) => {
	// Body is null or undefined
	if (body === null) {
		return null;
	}

	// Body is string
	if (typeof body === 'string') {
		return 'text/plain;charset=UTF-8';
	}

	// Body is a URLSearchParams
	if (isURLSearchParameters(body)) {
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	}

	// Body is blob
	if (isBlob(body)) {
		return body.type || null;
	}

	// Body is a Buffer (Buffer, ArrayBuffer or ArrayBufferView)
	if (Buffer.isBuffer(body) || util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
		return null;
	}

	// Detect form data input from form-data module
	if (body && typeof body.getBoundary === 'function') {
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	}

	if (isFormData(body)) {
		return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
	}

	// Body is stream - can't really do much about this
	if (body instanceof Stream) {
		return null;
	}

	// Body constructor defaults other things to string
	return 'text/plain;charset=UTF-8';
};

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param {any} obj.body Body object from the Body instance.
 * @returns {number | null}
 */
const getTotalBytes = request => {
	const {body} = request;

	// Body is null or undefined
	if (body === null) {
		return 0;
	}

	// Body is Blob
	if (isBlob(body)) {
		return body.size;
	}

	// Body is Buffer
	if (Buffer.isBuffer(body)) {
		return body.length;
	}

	// Detect form data input from form-data module
	if (body && typeof body.getLengthSync === 'function') {
		return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
	}

	// Body is a spec-compliant form-data
	if (isFormData(body)) {
		return getFormDataLength(request[INTERNALS$2].boundary);
	}

	// Body is stream
	return null;
};

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param {Stream.Writable} dest The stream to write to.
 * @param obj.body Body object from the Body instance.
 * @returns {void}
 */
const writeToStream = (dest, {body}) => {
	if (body === null) {
		// Body is null
		dest.end();
	} else if (isBlob(body)) {
		// Body is Blob
		blobToNodeStream(body).pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// Body is buffer
		dest.write(body);
		dest.end();
	} else {
		// Body is stream
		body.pipe(dest);
	}
};

/**
 * Headers.js
 *
 * Headers class offers convenient helpers
 */

const validateHeaderName = typeof http.validateHeaderName === 'function' ?
	http.validateHeaderName :
	name => {
		if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
			const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
			Object.defineProperty(err, 'code', {value: 'ERR_INVALID_HTTP_TOKEN'});
			throw err;
		}
	};

const validateHeaderValue = typeof http.validateHeaderValue === 'function' ?
	http.validateHeaderValue :
	(name, value) => {
		if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
			const err = new TypeError(`Invalid character in header content ["${name}"]`);
			Object.defineProperty(err, 'code', {value: 'ERR_INVALID_CHAR'});
			throw err;
		}
	};

/**
 * @typedef {Headers | Record<string, string> | Iterable<readonly [string, string]> | Iterable<Iterable<string>>} HeadersInit
 */

/**
 * This Fetch API interface allows you to perform various actions on HTTP request and response headers.
 * These actions include retrieving, setting, adding to, and removing.
 * A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
 * You can add to this using methods like append() (see Examples.)
 * In all methods of this interface, header names are matched by case-insensitive byte sequence.
 *
 */
class Headers extends URLSearchParams {
	/**
	 * Headers class
	 *
	 * @constructor
	 * @param {HeadersInit} [init] - Response headers
	 */
	constructor(init) {
		// Validate and normalize init object in [name, value(s)][]
		/** @type {string[][]} */
		let result = [];
		if (init instanceof Headers) {
			const raw = init.raw();
			for (const [name, values] of Object.entries(raw)) {
				result.push(...values.map(value => [name, value]));
			}
		} else if (init == null) ; else if (typeof init === 'object' && !util.types.isBoxedPrimitive(init)) {
			const method = init[Symbol.iterator];
			// eslint-disable-next-line no-eq-null, eqeqeq
			if (method == null) {
				// Record<ByteString, ByteString>
				result.push(...Object.entries(init));
			} else {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// Sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				result = [...init]
					.map(pair => {
						if (
							typeof pair !== 'object' || util.types.isBoxedPrimitive(pair)
						) {
							throw new TypeError('Each header pair must be an iterable object');
						}

						return [...pair];
					}).map(pair => {
						if (pair.length !== 2) {
							throw new TypeError('Each header pair must be a name/value tuple');
						}

						return [...pair];
					});
			}
		} else {
			throw new TypeError('Failed to construct \'Headers\': The provided value is not of type \'(sequence<sequence<ByteString>> or record<ByteString, ByteString>)');
		}

		// Validate and lowercase
		result =
			result.length > 0 ?
				result.map(([name, value]) => {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return [String(name).toLowerCase(), String(value)];
				}) :
				undefined;

		super(result);

		// Returning a Proxy that will lowercase key names, validate parameters and sort keys
		// eslint-disable-next-line no-constructor-return
		return new Proxy(this, {
			get(target, p, receiver) {
				switch (p) {
					case 'append':
					case 'set':
						return (name, value) => {
							validateHeaderName(name);
							validateHeaderValue(name, String(value));
							return URLSearchParams.prototype[p].call(
								receiver,
								String(name).toLowerCase(),
								String(value)
							);
						};

					case 'delete':
					case 'has':
					case 'getAll':
						return name => {
							validateHeaderName(name);
							return URLSearchParams.prototype[p].call(
								receiver,
								String(name).toLowerCase()
							);
						};

					case 'keys':
						return () => {
							target.sort();
							return new Set(URLSearchParams.prototype.keys.call(target)).keys();
						};

					default:
						return Reflect.get(target, p, receiver);
				}
			}
			/* c8 ignore next */
		});
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}

	toString() {
		return Object.prototype.toString.call(this);
	}

	get(name) {
		const values = this.getAll(name);
		if (values.length === 0) {
			return null;
		}

		let value = values.join(', ');
		if (/^content-encoding$/i.test(name)) {
			value = value.toLowerCase();
		}

		return value;
	}

	forEach(callback, thisArg = undefined) {
		for (const name of this.keys()) {
			Reflect.apply(callback, thisArg, [this.get(name), name, this]);
		}
	}

	* values() {
		for (const name of this.keys()) {
			yield this.get(name);
		}
	}

	/**
	 * @type {() => IterableIterator<[string, string]>}
	 */
	* entries() {
		for (const name of this.keys()) {
			yield [name, this.get(name)];
		}
	}

	[Symbol.iterator]() {
		return this.entries();
	}

	/**
	 * Node-fetch non-spec method
	 * returning all headers and their values as array
	 * @returns {Record<string, string[]>}
	 */
	raw() {
		return [...this.keys()].reduce((result, key) => {
			result[key] = this.getAll(key);
			return result;
		}, {});
	}

	/**
	 * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
	 */
	[Symbol.for('nodejs.util.inspect.custom')]() {
		return [...this.keys()].reduce((result, key) => {
			const values = this.getAll(key);
			// Http.request() only supports string as Host header.
			// This hack makes specifying custom Host header possible.
			if (key === 'host') {
				result[key] = values[0];
			} else {
				result[key] = values.length > 1 ? values : values[0];
			}

			return result;
		}, {});
	}
}

/**
 * Re-shaping object for Web IDL tests
 * Only need to do it for overridden methods
 */
Object.defineProperties(
	Headers.prototype,
	['get', 'entries', 'forEach', 'values'].reduce((result, property) => {
		result[property] = {enumerable: true};
		return result;
	}, {})
);

/**
 * Create a Headers object from an http.IncomingMessage.rawHeaders, ignoring those that do
 * not conform to HTTP grammar productions.
 * @param {import('http').IncomingMessage['rawHeaders']} headers
 */
function fromRawHeaders(headers = []) {
	return new Headers(
		headers
			// Split into pairs
			.reduce((result, value, index, array) => {
				if (index % 2 === 0) {
					result.push(array.slice(index, index + 2));
				}

				return result;
			}, [])
			.filter(([name, value]) => {
				try {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return true;
				} catch {
					return false;
				}
			})

	);
}

const redirectStatus = new Set([301, 302, 303, 307, 308]);

/**
 * Redirect code matching
 *
 * @param {number} code - Status code
 * @return {boolean}
 */
const isRedirect = code => {
	return redirectStatus.has(code);
};

/**
 * Response.js
 *
 * Response class provides content decoding
 */

const INTERNALS$1 = Symbol('Response internals');

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response extends Body {
	constructor(body = null, options = {}) {
		super(body, options);

		const status = options.status || 200;
		const headers = new Headers(options.headers);

		if (body !== null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body, this);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: options.url,
			status,
			statusText: options.statusText || '',
			headers,
			counter: options.counter,
			highWaterMark: options.highWaterMark
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
	 * Convenience property representing if the request ended normally
	 */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	get highWaterMark() {
		return this[INTERNALS$1].highWaterMark;
	}

	/**
	 * Clone this response
	 *
	 * @return  Response
	 */
	clone() {
		return new Response(clone(this, this.highWaterMark), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected,
			size: this.size
		});
	}

	/**
	 * @param {string} url    The URL that the new response is to originate from.
	 * @param {number} status An optional status code for the response (e.g., 302.)
	 * @returns {Response}    A Response object.
	 */
	static redirect(url, status = 302) {
		if (!isRedirect(status)) {
			throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
		}

		return new Response(null, {
			headers: {
				location: new URL(url).toString()
			},
			status
		});
	}

	get [Symbol.toStringTag]() {
		return 'Response';
	}
}

Object.defineProperties(Response.prototype, {
	url: {enumerable: true},
	status: {enumerable: true},
	ok: {enumerable: true},
	redirected: {enumerable: true},
	statusText: {enumerable: true},
	headers: {enumerable: true},
	clone: {enumerable: true}
});

const getSearch = parsedURL => {
	if (parsedURL.search) {
		return parsedURL.search;
	}

	const lastOffset = parsedURL.href.length - 1;
	const hash = parsedURL.hash || (parsedURL.href[lastOffset] === '#' ? '#' : '');
	return parsedURL.href[lastOffset - hash.length] === '?' ? '?' : '';
};

const INTERNALS = Symbol('Request internals');

/**
 * Check if `obj` is an instance of Request.
 *
 * @param  {*} obj
 * @return {boolean}
 */
const isRequest = object => {
	return (
		typeof object === 'object' &&
		typeof object[INTERNALS] === 'object'
	);
};

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request extends Body {
	constructor(input, init = {}) {
		let parsedURL;

		// Normalize input and force URL to be encoded as UTF-8 (https://github.com/node-fetch/node-fetch/issues/245)
		if (isRequest(input)) {
			parsedURL = new URL(input.url);
		} else {
			parsedURL = new URL(input);
			input = {};
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		// eslint-disable-next-line no-eq-null, eqeqeq
		if (((init.body != null || isRequest(input)) && input.body !== null) &&
			(method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		const inputBody = init.body ?
			init.body :
			(isRequest(input) && input.body !== null ?
				clone(input) :
				null);

		super(inputBody, {
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody !== null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody, this);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ?
			input.signal :
			null;
		if ('signal' in init) {
			signal = init.signal;
		}

		// eslint-disable-next-line no-eq-null, eqeqeq
		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal or EventTarget');
		}

		this[INTERNALS] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// Node-fetch-only options
		this.follow = init.follow === undefined ? (input.follow === undefined ? 20 : input.follow) : init.follow;
		this.compress = init.compress === undefined ? (input.compress === undefined ? true : input.compress) : init.compress;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
		this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
		this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;
	}

	get method() {
		return this[INTERNALS].method;
	}

	get url() {
		return url.format(this[INTERNALS].parsedURL);
	}

	get headers() {
		return this[INTERNALS].headers;
	}

	get redirect() {
		return this[INTERNALS].redirect;
	}

	get signal() {
		return this[INTERNALS].signal;
	}

	/**
	 * Clone this request
	 *
	 * @return  Request
	 */
	clone() {
		return new Request(this);
	}

	get [Symbol.toStringTag]() {
		return 'Request';
	}
}

Object.defineProperties(Request.prototype, {
	method: {enumerable: true},
	url: {enumerable: true},
	headers: {enumerable: true},
	redirect: {enumerable: true},
	clone: {enumerable: true},
	signal: {enumerable: true}
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
const getNodeRequestOptions = request => {
	const {parsedURL} = request[INTERNALS];
	const headers = new Headers(request[INTERNALS].headers);

	// Fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body === null && /^(post|put)$/i.test(request.method)) {
		contentLengthValue = '0';
	}

	if (request.body !== null) {
		const totalBytes = getTotalBytes(request);
		// Set Content-Length if totalBytes is a number (that is not NaN)
		if (typeof totalBytes === 'number' && !Number.isNaN(totalBytes)) {
			contentLengthValue = String(totalBytes);
		}
	}

	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate,br');
	}

	let {agent} = request;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	const search = getSearch(parsedURL);

	// Manually spread the URL object instead of spread syntax
	const requestOptions = {
		path: parsedURL.pathname + search,
		pathname: parsedURL.pathname,
		hostname: parsedURL.hostname,
		protocol: parsedURL.protocol,
		port: parsedURL.port,
		hash: parsedURL.hash,
		search: parsedURL.search,
		query: parsedURL.query,
		href: parsedURL.href,
		method: request.method,
		headers: headers[Symbol.for('nodejs.util.inspect.custom')](),
		insecureHTTPParser: request.insecureHTTPParser,
		agent
	};

	return requestOptions;
};

/**
 * AbortError interface for cancelled requests
 */
class AbortError extends FetchBaseError {
	constructor(message, type = 'aborted') {
		super(message, type);
	}
}

/**
 * Index.js
 *
 * a request API compatible with window.fetch
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */

const supportedSchemas = new Set(['data:', 'http:', 'https:']);

/**
 * Fetch function
 *
 * @param   {string | URL | import('./request').default} url - Absolute url or Request instance
 * @param   {*} [options_] - Fetch options
 * @return  {Promise<import('./response').default>}
 */
async function fetch(url, options_) {
	return new Promise((resolve, reject) => {
		// Build request object
		const request = new Request(url, options_);
		const options = getNodeRequestOptions(request);
		if (!supportedSchemas.has(options.protocol)) {
			throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options.protocol.replace(/:$/, '')}" is not supported.`);
		}

		if (options.protocol === 'data:') {
			const data = dataUriToBuffer(request.url);
			const response = new Response(data, {headers: {'Content-Type': data.typeFull}});
			resolve(response);
			return;
		}

		// Wrap http.request into fetch
		const send = (options.protocol === 'https:' ? https : http).request;
		const {signal} = request;
		let response = null;

		const abort = () => {
			const error = new AbortError('The operation was aborted.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}

			if (!response || !response.body) {
				return;
			}

			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = () => {
			abort();
			finalize();
		};

		// Send request
		const request_ = send(options);

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		const finalize = () => {
			request_.abort();
			if (signal) {
				signal.removeEventListener('abort', abortAndFinalize);
			}
		};

		request_.on('error', err => {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		request_.on('response', response_ => {
			request_.setTimeout(0);
			const headers = fromRawHeaders(response_.rawHeaders);

			// HTTP fetch step 5
			if (isRedirect(response_.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : new URL(location, request.url);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// Node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							headers.set('Location', locationURL);
						}

						break;
					case 'follow': {
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOptions = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (response_.statusCode !== 303 && request.body && options_.body instanceof Stream.Readable) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (response_.statusCode === 303 || ((response_.statusCode === 301 || response_.statusCode === 302) && request.method === 'POST')) {
							requestOptions.method = 'GET';
							requestOptions.body = undefined;
							requestOptions.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOptions)));
						finalize();
						return;
					}

					default:
						return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
				}
			}

			// Prepare response
			if (signal) {
				response_.once('end', () => {
					signal.removeEventListener('abort', abortAndFinalize);
				});
			}

			let body = Stream.pipeline(response_, new Stream.PassThrough(), reject);
			// see https://github.com/nodejs/node/pull/29376
			if (process.version < 'v12.10') {
				response_.on('aborted', abortAndFinalize);
			}

			const responseOptions = {
				url: request.url,
				status: response_.statusCode,
				statusText: response_.statusMessage,
				headers,
				size: request.size,
				counter: request.counter,
				highWaterMark: request.highWaterMark
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
				response = new Response(body, responseOptions);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// For gzip
			if (codings === 'gzip' || codings === 'x-gzip') {
				body = Stream.pipeline(body, zlib.createGunzip(zlibOptions), reject);
				response = new Response(body, responseOptions);
				resolve(response);
				return;
			}

			// For deflate
			if (codings === 'deflate' || codings === 'x-deflate') {
				// Handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = Stream.pipeline(response_, new Stream.PassThrough(), reject);
				raw.once('data', chunk => {
					// See http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = Stream.pipeline(body, zlib.createInflate(), reject);
					} else {
						body = Stream.pipeline(body, zlib.createInflateRaw(), reject);
					}

					response = new Response(body, responseOptions);
					resolve(response);
				});
				return;
			}

			// For br
			if (codings === 'br') {
				body = Stream.pipeline(body, zlib.createBrotliDecompress(), reject);
				response = new Response(body, responseOptions);
				resolve(response);
				return;
			}

			// Otherwise, use response as-is
			response = new Response(body, responseOptions);
			resolve(response);
		});

		writeToStream(request_, request);
	});
}

exports.AbortError = AbortError;
exports.FetchError = FetchError;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.default = fetch;
exports.isRedirect = isRedirect;
//# sourceMappingURL=index.cjs.map


/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "Qobo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var webEncoding = __webpack_require__("Z/+5");
var _package = __webpack_require__("GIVA");

/**
 * @implements {globalThis.Blob}
 */
const WebBlob = class Blob {
  /**
   * @param {BlobPart[]} [init]
   * @param {BlobPropertyBag} [options]
   */
  constructor(init = [], options = {}) {
    /** @type {Uint8Array[]} */
    const parts = [];

    let size = 0;
    for (const part of init) {
      if (typeof part === "string") {
        const bytes = new webEncoding.TextEncoder().encode(part);
        parts.push(bytes);
        size += bytes.byteLength;
      } else if (part instanceof WebBlob) {
        size += part.size;
        // @ts-ignore - `_parts` is marked private so TS will complain about
        // accessing it.
        parts.push(...part._parts);
      } else if (part instanceof ArrayBuffer) {
        parts.push(new Uint8Array(part));
        size += part.byteLength;
      } else if (part instanceof Uint8Array) {
        parts.push(part);
        size += part.byteLength;
      } else if (ArrayBuffer.isView(part)) {
        const { buffer, byteOffset, byteLength } = part;
        parts.push(new Uint8Array(buffer, byteOffset, byteLength));
        size += byteLength;
      } else {
        const bytes = new webEncoding.TextEncoder().encode(String(part));
        parts.push(bytes);
        size += bytes.byteLength;
      }
    }

    /** @private */
    this._size = size;
    /** @private */
    this._type = readType(options.type);
    /** @private */
    this._parts = parts;

    Object.defineProperties(this, {
      _size: { enumerable: false },
      _type: { enumerable: false },
      _parts: { enumerable: false }
    });
  }

  /**
   * A string indicating the MIME type of the data contained in the Blob.
   * If the type is unknown, this string is empty.
   * @type {string}
   */
  get type() {
    return this._type
  }
  /**
   * The size, in bytes, of the data contained in the Blob object.
   * @type {number}
   */
  get size() {
    return this._size
  }

  /**
   * Returns a new Blob object containing the data in the specified range of
   * bytes of the blob on which it's called.
   * @param {number} [start=0] - An index into the Blob indicating the first
   * byte to include in the new Blob. If you specify a negative value, it's
   * treated as an offset from the end of the Blob toward the beginning. For
   * example, `-10` would be the 10th from last byte in the Blob. The default
   * value is `0`. If you specify a value for start that is larger than the
   * size of the source Blob, the returned Blob has size 0 and contains no
   * data.
   * @param {number} [end] - An index into the `Blob` indicating the first byte
   *  that will *not* be included in the new `Blob` (i.e. the byte exactly at
   * this index is not included). If you specify a negative value, it's treated
   * as an offset from the end of the Blob toward the beginning. For example,
   * `-10` would be the 10th from last byte in the `Blob`. The default value is
   * size.
   * @param {string} [type] - The content type to assign to the new Blob;
   * this will be the value of its type property. The default value is an empty
   * string.
   * @returns {Blob}
   */
  slice(start = 0, end = this.size, type = "") {
    const { size, _parts } = this;
    let offset = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);

    let limit = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(limit - offset, 0);
    const blob = new Blob([], { type });

    if (span === 0) {
      return blob
    }

    let blobSize = 0;
    const blobParts = [];
    for (const part of _parts) {
      const { byteLength } = part;
      if (offset > 0 && byteLength <= offset) {
        offset -= byteLength;
        limit -= byteLength;
      } else {
        const chunk = part.subarray(offset, Math.min(byteLength, limit));
        blobParts.push(chunk);
        blobSize += chunk.byteLength;
        // no longer need to take that into account
        offset = 0;

        // don't add the overflow to new blobParts
        if (blobSize >= span) {
          break
        }
      }
    }

    blob._parts = blobParts;
    blob._size = blobSize;

    return blob
  }

  /**
   * Returns a promise that resolves with an ArrayBuffer containing the entire
   * contents of the Blob as binary data.
   * @returns {Promise<ArrayBuffer>}
   */
  // eslint-disable-next-line require-await
  async arrayBuffer() {
    const buffer = new ArrayBuffer(this.size);
    const bytes = new Uint8Array(buffer);
    let offset = 0;
    for (const part of this._parts) {
      bytes.set(part, offset);
      offset += part.byteLength;
    }
    return buffer
  }

  /**
   * Returns a promise that resolves with a USVString containing the entire
   * contents of the Blob interpreted as UTF-8 text.
   * @returns {Promise<string>}
   */
  // eslint-disable-next-line require-await
  async text() {
    const decoder = new webEncoding.TextDecoder();
    let text = "";
    for (const part of this._parts) {
      text += decoder.decode(part);
    }
    return text
  }

  /**
   * @returns {BlobStream}
   */
  stream() {
    return new BlobStream(this._parts)
  }

  /**
   * @returns {string}
   */
  toString() {
    return "[object Blob]"
  }

  get [Symbol.toStringTag]() {
    return "Blob"
  }
};

// Marking export as a DOM File object instead of custom class.
/** @type {typeof globalThis.Blob} */
const Blob = WebBlob;

/**
 * Blob stream is a `ReadableStream` extension optimized to have minimal
 * overhead when consumed as `AsyncIterable<Uint8Array>`.
 * @extends {ReadableStream<Uint8Array>}
 * @implements {AsyncIterable<Uint8Array>}
 */
class BlobStream extends _package.ReadableStream {
  /**
   * @param {Uint8Array[]} chunks
   */
  constructor(chunks) {
    // @ts-ignore
    super(new BlobStreamController(chunks.values()), { type: "bytes" });
    /** @private */
    this._chunks = chunks;
  }

  /**
   * @param {Object} [_options]
   * @property {boolean} [_options.preventCancel]
   * @returns {AsyncIterator<Uint8Array>}
   */
  async *[Symbol.asyncIterator](_options) {
    const reader = this.getReader();
    yield* this._chunks;
    reader.releaseLock();
  }
}

class BlobStreamController {
  /**
   * @param {Iterator<Uint8Array>} chunks
   */
  constructor(chunks) {
    this.chunks = chunks;
  }

  /**
   * @param {ReadableStreamDefaultController} controller
   */
  start(controller) {
    this.work(controller);
    this.isWorking = false;
    this.isCancelled = false;
  }
  /**
   *
   * @param {ReadableStreamDefaultController} controller
   */
  async work(controller) {
    const { chunks } = this;

    this.isWorking = true;
    while (!this.isCancelled && (controller.desiredSize || 0) > 0) {
      let next = null;
      try {
        next = chunks.next();
      } catch (error) {
        controller.error(error);
        break
      }

      if (next) {
        if (!next.done && !this.isCancelled) {
          controller.enqueue(next.value);
        } else {
          controller.close();
        }
      }
    }

    this.isWorking = false;
  }

  /**
   * @param {ReadableStreamDefaultController} controller
   */
  pull(controller) {
    if (!this.isWorking) {
      this.work(controller);
    }
  }
  cancel() {
    this.isCancelled = true;
  }
}

/**
 * @param {string} [input]
 * @returns {string}
 */
const readType = (input = "") => {
  const type = String(input).toLowerCase();
  return /[^\u0020-\u007E]/.test(type) ? "" : type
};

Object.defineProperty(exports, 'TextDecoder', {
  enumerable: true,
  get: function () {
    return webEncoding.TextDecoder;
  }
});
Object.defineProperty(exports, 'TextEncoder', {
  enumerable: true,
  get: function () {
    return webEncoding.TextEncoder;
  }
});
exports.ReadableStream = _package.ReadableStream;
exports.Blob = Blob;
//# sourceMappingURL=lib.cjs.map


/***/ }),

/***/ "TvLT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @implements {globalThis.FormData}
 */
const WebFormData = class FormData {
  /**
   * @param {HTMLFormElement} [form]
   */
  constructor(form) {
    if (form !== undefined) {
      const error = isHTMLFormElement(form)
        ? new TypeError(
            "FormData constructor: HTMLFormElement parameter is not supported, if you need it submit an issue"
          )
        : new TypeError(
            "FormData constructor: Argument 1 does not implement interface HTMLFormElement."
          );

      throw error
    }

    /**
     * @private
     * @readonly
     * @type {Array<[string, FormDataEntryValue]>}
     */
    this._entries = [];

    Object.defineProperty(this, "_entries", { enumerable: false });
  }
  get [Symbol.toStringTag]() {
    return "FormData"
  }

  /**
   * Appends a new value onto an existing key inside a FormData object, or adds
   * the key if it does not already exist.
   *
   * The difference between `set` and `append` is that if the specified key
   * already exists, `set` will overwrite all existing values with the new one,
   * whereas `append` will append the new value onto the end of the existing
   * set of values.
   *
   * @param {string} name
   * @param {string|Blob|File} value - The name of the field whose data is
   * contained in value.
   * @param {string} [filename] - The filename reported to the server, when a
   * value is a `Blob` or a `File`. The default filename for a `Blob` objects is
   * `"blob"`. The default filename for a `File` is the it's name.
   */
  append(
    name,
    value = panic(
      new TypeError("FormData.append: requires at least 2 arguments")
    ),
    filename
  ) {
    this._entries.push([name, toEntryValue(value, filename)]);
  }

  /**
   * Deletes a key and all its values from a FormData object.
   *
   * @param {string} name
   */
  delete(
    name = panic(new TypeError("FormData.delete: requires string argument"))
  ) {
    const entries = this._entries;
    let index = 0;
    while (index < entries.length) {
      const [entryName] = /** @type {[string, FormDataEntryValue]}*/ (entries[
        index
      ]);
      if (entryName === name) {
        entries.splice(index, 1);
      } else {
        index++;
      }
    }
  }

  /**
   * Returns the first value associated with a given key from within a
   * FormData object.
   *
   * @param {string} name
   * @returns {FormDataEntryValue|null}
   */

  get(name = panic(new TypeError("FormData.get: requires string argument"))) {
    for (const [entryName, value] of this._entries) {
      if (entryName === name) {
        return value
      }
    }
    return null
  }

  /**
   * Returns an array of all the values associated with a given key from within
   * a FormData.
   *
   * @param {string} name
   * @returns {FormDataEntryValue[]}
   */
  getAll(
    name = panic(new TypeError("FormData.getAll: requires string argument"))
  ) {
    const values = [];
    for (const [entryName, value] of this._entries) {
      if (entryName === name) {
        values.push(value);
      }
    }
    return values
  }

  /**
   * Returns a boolean stating whether a FormData object contains a certain key.
   *
   * @param {string} name
   */

  has(name = panic(new TypeError("FormData.has: requires string argument"))) {
    for (const [entryName] of this._entries) {
      if (entryName === name) {
        return true
      }
    }
    return false
  }

  /**
   * Sets a new value for an existing key inside a FormData object, or adds the
   * key/value if it does not already exist.
   *
   * @param {string} name
   * @param {string|Blob|File} value
   * @param {string} [filename]
   */

  set(
    name,
    value = panic(new TypeError("FormData.set: requires at least 2 arguments")),
    filename
  ) {
    let index = 0;
    const { _entries: entries } = this;
    const entryValue = toEntryValue(value, filename);
    let wasSet = false;
    while (index < entries.length) {
      const entry = /** @type {[string, FormDataEntryValue]}*/ (entries[index]);
      if (entry[0] === name) {
        if (wasSet) {
          entries.splice(index, 1);
        } else {
          wasSet = true;
          entry[1] = entryValue;
          index++;
        }
      } else {
        index++;
      }
    }

    if (!wasSet) {
      entries.push([name, entryValue]);
    }
  }

  /**
   * Method returns an iterator allowing to go through all key/value pairs
   * contained in this object.
   */
  entries() {
    return this._entries.values()
  }

  /**
   * Returns an iterator allowing to go through all keys of the key/value pairs
   * contained in this object.
   *
   * @returns {IterableIterator<string>}
   */
  *keys() {
    for (const [name] of this._entries) {
      yield name;
    }
  }

  /**
   * Returns an iterator allowing to go through all values contained in this
   * object.
   *
   * @returns {IterableIterator<FormDataEntryValue>}
   */
  *values() {
    for (const [_, value] of this._entries) {
      yield value;
    }
  }

  /**
   * @returns {IterableIterator<[string, FormDataEntryValue]>}
   */
  [Symbol.iterator]() {
    return this._entries.values()
  }

  /**
   * @param {(value: FormDataEntryValue, key: string, parent: globalThis.FormData) => void} fn
   * @param {any} [thisArg]
   * @returns {void}
   */
  forEach(fn, thisArg) {
    for (const [key, value] of this._entries) {
      fn.call(thisArg, value, key, this);
    }
  }

  // // This is annoying but is required to make our implementation node-fetch
  // // compatible.
  // getBoundary() {
  //   return this.boundary
  // }
  // get boundary() {
  //   // This generates a 50 character boundary similar to those used by Firefox.
  //   // They are optimized for boyer-moore parsing.
  //   let boundary = "--------------------------"
  //   for (var i = 0; i < 24; i++) {
  //     boundary += Math.floor(Math.random() * 10).toString(16)
  //   }

  //   Object.defineProperty(this, "boundary", {
  //     value: boundary,
  //     enumerable: false,
  //     writable: false,
  //   })

  //   return boundary
  // }
};

/**
 * @param {any} value
 * @returns {value is HTMLFormElement}
 */
const isHTMLFormElement = value =>
  Object.prototype.toString.call(value) === "[object HTMLFormElement]";

/**
 * @param {string|Blob|File} value
 * @param {string} [filename]
 * @returns {FormDataEntryValue}
 */
const toEntryValue = (value, filename) => {
  if (isFile(value)) {
    return filename != null ? new BlobFile([value], filename, value) : value
  } else if (isBlob(value)) {
    return new BlobFile([value], filename != null ? filename : "blob")
  } else {
    if (filename != null) {
      throw new TypeError(
        "filename is only supported when value is Blob or File"
      )
    }
    return `${value}`
  }
};

/**
 * @param {any} value
 * @returns {value is File}
 */
const isFile = value =>
  Object.prototype.toString.call(value) === "[object File]" &&
  typeof value.name === "string";

/**
 * @param {any} value
 * @returns {value is Blob}
 */
const isBlob = value =>
  Object.prototype.toString.call(value) === "[object Blob]";

/**
 * Simple `File` implementation that just wraps a given blob.
 * @implements {globalThis.File}
 */
const BlobFile = class File {
  /**
   * @param {[Blob]} parts
   * @param {string} name
   * @param {FilePropertyBag} [options]
   */
  constructor([blob], name, { lastModified = Date.now() } = {}) {
    this.blob = blob;
    this.name = name;
    this.lastModified = lastModified;
  }
  get size() {
    return this.blob.size
  }
  get type() {
    return this.blob.type
  }
  /**
   *
   * @param {number} [start]
   * @param {number} [end]
   * @param {string} [contentType]
   */
  slice(start, end, contentType) {
    return this.blob.slice(start, end, contentType)
  }
  stream() {
    return this.blob.stream()
  }
  text() {
    return this.blob.text()
  }
  arrayBuffer() {
    return this.blob.arrayBuffer()
  }
  [Symbol.toStringTag]() {
    return "File"
  }
};

/** @type {typeof globalThis.FormData} */
const FormData = WebFormData;

/**
 * @param {*} error
 * @returns {never}
 */
const panic = error => {
  throw error
};

exports.FormData = FormData;
//# sourceMappingURL=lib.cjs.map


/***/ }),

/***/ "X1Jm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var blob = __webpack_require__("/NSD");

// @ts-check

/**
 * @implements {globalThis.File}
 */
const WebFile = class File extends blob.Blob {
  /**
   *
   * @param {BlobPart[]} init
   * @param {string} name - A USVString representing the file name or the path
   * to the file.
   * @param {FilePropertyBag} [options]
   */
  constructor(
    init,
    name = panic(new TypeError("File constructor requires name argument")),
    options = {}
  ) {
    super(init, options);
    // Per File API spec https://w3c.github.io/FileAPI/#file-constructor
    // Every "/" character of file name must be replaced with a ":".
    /** @private */
    this._name = name;
    // It appears that browser do not follow the spec here.
    // String(name).replace(/\//g, ":")
    /** @private */
    this._lastModified = options.lastModified || Date.now();
  }

  /**
   * The name of the file referenced by the File object.
   * @type {string}
   */
  get name() {
    return this._name
  }

  /**
   * The path the URL of the File is relative to.
   * @type {string}
   */
  get webkitRelativePath() {
    return ""
  }

  /**
   * Returns the last modified time of the file, in millisecond since the UNIX
   * epoch (January 1st, 1970 at Midnight).
   * @returns {number}
   */
  get lastModified() {
    return this._lastModified
  }

  get [Symbol.toStringTag]() {
    return "File"
  }
};

/**
 * @param {*} error
 * @returns {never}
 */
const panic = error => {
  throw error
};

// Marking export as a DOM File object instead of custom class.
/** @type {typeof globalThis.File} */
const File = WebFile;

Object.defineProperty(exports, 'Blob', {
  enumerable: true,
  get: function () {
    return blob.Blob;
  }
});
exports.File = File;
//# sourceMappingURL=lib.cjs.map


/***/ }),

/***/ "Z/+5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.TextEncoder =
  typeof TextEncoder !== "undefined" ? TextEncoder : __webpack_require__("jK02").TextEncoder

exports.TextDecoder =
  typeof TextDecoder !== "undefined" ? TextDecoder : __webpack_require__("jK02").TextDecoder


/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cfgC":
/***/ (function(module, exports) {

module.exports = require("fetch-blob");

/***/ }),

/***/ "jK02":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "msIP":
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "syyk":
/***/ (function(module, exports) {

module.exports = require("data-uri-to-buffer");

/***/ }),

/***/ "u00C":
/***/ (function(module, exports) {

module.exports = require("formidable");

/***/ }),

/***/ "wxb8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var webEncoding = __webpack_require__("Z/+5");
var streams = _interopDefault(__webpack_require__("xMnz"));

const { ReadableStream: ReadableStreamPolyfill } = streams;
/** @type {typeof globalThis.ReadableStream} */
// @ts-ignore
const ReadableStream = ReadableStreamPolyfill;

Object.defineProperty(exports, 'TextDecoder', {
	enumerable: true,
	get: function () {
		return webEncoding.TextDecoder;
	}
});
Object.defineProperty(exports, 'TextEncoder', {
	enumerable: true,
	get: function () {
		return webEncoding.TextEncoder;
	}
});
exports.ReadableStream = ReadableStream;
//# sourceMappingURL=package.cjs.map


/***/ }),

/***/ "xMnz":
/***/ (function(module, exports) {

module.exports = require("web-streams-polyfill");

/***/ }),

/***/ "xiHj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("jK02");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("u00C");
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nft_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+0Cv");
/* harmony import */ var nft_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nft_storage__WEBPACK_IMPORTED_MODULE_4__);
 // Filesystem

 // Promisify fs

 // UUID generation

 // Formidable form handling
// import fleekStorage from "@fleekhq/fleek-storage-js"; // Fleek storage

 // NFT.Storage
// Fleek authentication
//const fleekAuth = {
//  apiKey: process.env.FLEEK_API_KEY,
//  apiSecret: process.env.FLEEK_API_SECRET,
//};
//NFT.Storage authentication

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnaXRodWJ8NzM1NzcxMTYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYxNjI2MzUwMjUwNSwibmFtZSI6IlpvcmFVcGxvYWQifQ.bFZ9Rqp_483Jkscr_8T_1zN66SvBC-ngfmxg0GX004E';
const client = new nft_storage__WEBPACK_IMPORTED_MODULE_4__["NFTStorage"]({
  token: apiKey
});
const ipfsGateway = 'https://dweb.link/'; // Async readFile operation

const readFileAsync = Object(util__WEBPACK_IMPORTED_MODULE_1__["promisify"])(fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFile);
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  // Setup incoming form data
  const form = new formidable__WEBPACK_IMPORTED_MODULE_3___default.a.IncomingForm({
    keepExtensions: true
  }); // Collect data from form

  const data = await new Promise((res, rej) => {
    // Parse form data
    form.parse(req, (err, fields, files) => {
      // if error, reject promise
      if (err) return rej(err); // Else, return fields and files

      res({
        fields,
        files
      });
    });
  }); // Collect file and metadataJSON from POST request

  const {
    name,
    metadata
  } = data.fields; // Collect uploaded media

  const {
    upload: file
  } = data.files;
  const fileData = await readFileAsync(file.path); // If file, name, and metadata provided

  if (fileData && name && metadata) {
    // Upload media to NFT.Storage
    const contentFile = new nft_storage__WEBPACK_IMPORTED_MODULE_4__["Blob"]([fileData]);
    const fileUrl = ipfsGateway + (await client.storeBlob(contentFile)) + '/'; // Upload MetaData to NFT.Storage

    const contentMeta = new nft_storage__WEBPACK_IMPORTED_MODULE_4__["Blob"]([metadata]);
    const metadataUrl = ipfsGateway + (await client.storeBlob(contentMeta)) + '/';
    console.log({
      fileUrl,
      metadataUrl
    }); // Upload media to Fleek
    // const { publicUrl: fileUrl } = await fleekStorage.upload({
    //  ...fleekAuth,
    // key: uuid(),
    // data: fileData,
    //});
    // Upload metdata to Fleek
    //const { publicUrl: metadataUrl } = await fleekStorage.upload({
    //...fleekAuth,
    //key: uuid(),
    //data: metadata,
    //});
    // Return fileUrl and metadataUrl

    res.send({
      fileUrl,
      metadataUrl
    });
  } else {
    // Else, return 501
    res.status(501);
  } // End


  res.end();
}); // Remove bodyParser from endpoint

const config = {
  api: {
    bodyParser: false
  }
};

/***/ })

/******/ });
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0VJI":
/***/ (function(module, exports) {

module.exports = require("@walletconnect/web3-provider");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("H/sG");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ynM+");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Global styles


function MyApp({
  Component,
  pageProps
}) {
  return (
    /*#__PURE__*/
    // Wrap page in global state provider
    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_containers_index__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps)), ";"]
    })
  );
}

/***/ }),

/***/ "2ZqG":
/***/ (function(module, exports) {

module.exports = require("unstated-next");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "H/sG":
/***/ (function(module, exports) {



/***/ }),

/***/ "TYn5":
/***/ (function(module, exports) {

module.exports = require("ethers");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fPRj":
/***/ (function(module, exports) {

module.exports = require("@zoralabs/zdk");

/***/ }),

/***/ "sdPn":
/***/ (function(module, exports) {

module.exports = require("web3modal");

/***/ }),

/***/ "ynM+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ GlobalProvider; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ containers_web3; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@zoralabs/zdk"
var zdk_ = __webpack_require__("fPRj");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "web3modal"
var external_web3modal_ = __webpack_require__("sdPn");
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_);

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__("TYn5");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "unstated-next"
var external_unstated_next_ = __webpack_require__("2ZqG");

// EXTERNAL MODULE: external "@walletconnect/web3-provider"
var web3_provider_ = __webpack_require__("0VJI");
var web3_provider_default = /*#__PURE__*/__webpack_require__.n(web3_provider_);

// CONCATENATED MODULE: ./containers/web3.js
 // Zora provider

 // axios requests

 // Web3Modal

 // Ethers

 // State management

 // Unstated-next containerization

 // WalletConnectProvider (Web3Modal)
// Web3Modal provider options

const providerOptions = {
  walletconnect: {
    package: web3_provider_default.a,
    options: {
      // Inject Infura
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID
    }
  }
};

function useWeb3() {
  const {
    0: zora,
    1: setZora
  } = Object(external_react_["useState"])(null); // Zora provider

  const {
    0: modal,
    1: setModal
  } = Object(external_react_["useState"])(null); // Web3Modal

  const {
    0: address,
    1: setAddress
  } = Object(external_react_["useState"])(null); // ETH address

  /**
   * Setup Web3Modal on page load (requires window)
   */

  const setupWeb3Modal = () => {
    // Creaste new web3Modal
    const web3Modal = new external_web3modal_default.a({
      network: "mainnet",
      cacheProvider: true,
      providerOptions: providerOptions
    }); // Set web3Modal

    setModal(web3Modal);
  };
  /**
   * Authenticate and store necessary items in global state
   */


  const authenticate = async () => {
    // Initiate web3Modal
    const web3Provider = await modal.connect();
    await web3Provider.enable(); // Generate ethers provider

    const provider = new external_ethers_["providers"].Web3Provider(web3Provider); // Collect address

    const signer = provider.getSigner();
    const address = await signer.getAddress();
    setAddress(address); // Generate Zora provider

    const zora = new zdk_["Zora"](signer, 1);
    setZora(zora);
  };
  /**
   * Converts File to an ArrayBuffer for hashing preperation
   * @param {File} file uploaded file
   * @returns {ArrayBuffer} from file
   */


  const getFileBuffer = async file => {
    return new Promise((res, rej) => {
      // create file reader
      let reader = new FileReader(); // register event listeners

      reader.addEventListener("loadend", e => res(e.target.result));
      reader.addEventListener("error", rej); // read file

      reader.readAsArrayBuffer(file);
    });
  };
  /**
   * Mints media to Zora
   * @param {File} file media to mint
   * @param {String} name of media
   * @param {String} description of media
   * @param {Number} fee to share with previous owner
   */


  const mintMedia = async (file, name, description, fee) => {
    // Generate metadataJSON
    const metadataJSON = Object(zdk_["generateMetadata"])("zora-20210101", {
      description: description ? description : "",
      mimeType: file.type,
      name: name,
      version: "zora-20210101"
    }); // Generate media buffer

    const buffer = await getFileBuffer(file); // Generate content hashes

    const contentHash = Object(zdk_["sha256FromBuffer"])(Buffer.from(buffer));
    const metadataHash = Object(zdk_["sha256FromBuffer"])(Buffer.from(metadataJSON)); // Upload files to fleek

    let formData = new FormData();
    formData.append("upload", file);
    formData.append("name", name);
    formData.append("metadata", metadataJSON); // Post upload endpoint

    const upload = await external_axios_default.a.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }); // Collect fileUrl and metadataUrl from Fleek

    const {
      fileUrl,
      metadataUrl
    } = upload.data; // Construct mediaData object

    const mediaData = Object(zdk_["constructMediaData"])(fileUrl, metadataUrl, contentHash, metadataHash);
    const bidShares = Object(zdk_["constructBidShares"])(0, // Creator share
    100 - parseFloat(fee), // Owner share
    parseFloat(fee) // Previous owner share
    ); // Make transaction

    const tx = await zora.mint(mediaData, bidShares);
    await tx.wait(1); // Wait 1 confirmation and throw user to next screen
  }; // On load events


  Object(external_react_["useEffect"])(setupWeb3Modal, []);
  return {
    address,
    mintMedia,
    authenticate
  };
} // Create unstate-next container


const web3 = Object(external_unstated_next_["createContainer"])(useWeb3);
/* harmony default export */ var containers_web3 = (web3);
// CONCATENATED MODULE: ./containers/index.js

 // Web3 provider
// Global state provider

function GlobalProvider({
  children
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(containers_web3.Provider, {
    children: children
  });
} // Export individual containers



/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
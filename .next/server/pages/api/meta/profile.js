module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ig/g");


/***/ }),

/***/ "KSab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dAJ7");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
 // GraphQL request client
// Create client

const client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__["GraphQLClient"]( // Zora mainnet subgraph
"https://api.thegraph.com/subgraphs/name/ourzora/zora-v1"); // Export client

/* harmony default export */ __webpack_exports__["a"] = (client);

/***/ }),

/***/ "OcCo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPostByID; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KSab");
/* harmony import */ var _data_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gCbI");
 // Requests

 // GraphQL requests

 // GraphQL Queries

/**
 * Collect Zora media post by ID
 * @param {Number} id post number
 * @returns {Object} containing Zora media details
 */

const getPostByID = async id => {
  // Collect post
  let post = await data__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].request(Object(_data_queries__WEBPACK_IMPORTED_MODULE_2__[/* ZORA_MEDIA_BY_ID */ "b"])(id));
  post = post.media; // Collect post metadata

  const metadata = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(post.metadataURI);
  post.metadata = metadata.data; // If text media, collect post content

  if (metadata.data.mimeType.startsWith("text")) {
    const text = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(post.contentURI);
    post.contentURI = text.data;
  } // Return post


  return post;
};

/***/ }),

/***/ "TfI4":
/***/ (function(module, exports) {

module.exports = require("puppeteer-core");

/***/ }),

/***/ "dAJ7":
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "gCbI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZORA_CREATIONS_BY_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ZORA_MEDIA_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ZORA_MEDIA_BY_OWNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return calculateLatestCreation; });
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dAJ7");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);
 // graphql query language
// Collect all users and creation ids

const ZORA_CREATIONS_BY_USER = graphql_request__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  {
    users {
      creations {
        id
      }
    }
  }
`;
/**
 * Returns gql query to retrieve specific Zora post
 * @param {Number} id post infromation to retrieve
 * @returns {gql} query with template string embedded
 */

const ZORA_MEDIA_BY_ID = id => {
  return graphql_request__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  {
    media(id:"${id.toString()}") {
      id,
      owner {
        id
      },
      creator {
        id
      },
      contentURI,
      metadataURI,
      createdAtTimestamp
    }
  }
  `;
};
/**
 * Returns gql query to retrieve all Zora posts by owner
 * @param {String} owner address
 * @returns {gql} query with template string embedded
 */

const ZORA_MEDIA_BY_OWNER = owner => {
  return graphql_request__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    {
      medias(where: { owner: "${owner}" }) {
        id
        owner {
          id
        }
        creator {
          id
        }
        contentURI
        metadataURI
        createdAtTimestamp
      }
    }
  `;
};
/**
 * Calculates maximum number of Zora media items
 * @param {Object[]} users
 * @returns {Number} max number of Zora media items
 */

const calculateLatestCreation = users => {
  // Collect all users
  const allUsers = users.users;
  let allCreationIDs = []; // For each user

  for (const user of allUsers) {
    // If user has creations
    if (user.creations && user.creations.length > 0) {
      // For each creation
      for (const creation of user.creations) {
        // Push creation ID (cast to int) to allCreationIDs
        allCreationIDs.push(parseInt(creation.id));
      }
    }
  } // Return max creation ID


  return Math.max(...allCreationIDs);
};

/***/ }),

/***/ "ig/g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var data_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KSab");
/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wVT7");
/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var puppeteer_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TfI4");
/* harmony import */ var puppeteer_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(puppeteer_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("OcCo");
/* harmony import */ var data_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("gCbI");
 // Axios requests

 // GraphQL client

 // Chromium settings

 // Puppeteer core

 // Query function

 // Query utils

/**
 * Generates HTML page from media and address template
 * @param {String} media highlighted image media
 * @param {String} address profile address
 */

const generateHTML = (media, address) => {
  return `
  <html>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
      
      * {
        margin: 0;
        padding: 0;
      }
      
      html {
        width: 1200px;
        height: 600px;
        background-color: #fff;
        font-family: 'Poppins', sans-serif;
      }

      .zora {
        width: 70px;
        height: 70px;
        position: absolute;
        top: 25px;
        left: 25px;
      }

      .highlight {
        height: 400px;
        width: auto;
        margin-top: 100px;
      }

      .address {
        font-size: 30px;
        top: 45px;
        left: 110px;
        position: absolute;
      }
    </style>
    <div>
      <img class="zora" src="https://zora.gallery/logo_orb.png" alt="Orb" />
      <h2 class="address">${address.substr(0, 5) + "..." + address.slice(address.length - 5)}
      </h2>
      <center>
        <img class="highlight" src="data:image/png;base64, ${media}" />
      </center>
    </div>
  </html>
  `;
};
/**
 * Generates screenshot of html page
 */


const getScreenshot = async ({
  html,
  type = "png"
}) => {
  // Launch puppeteer browser
  const browser = await puppeteer_core__WEBPACK_IMPORTED_MODULE_3___default.a.launch({
    // With chrome default args
    args: chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2___default.a.args,
    executablePath: await chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2___default.a.executablePath,
    headless: false
  }); // Make new page

  const page = await browser.newPage(); // Set content to generated html, wait for image load

  await page.setContent(html, {
    waitUntil: "networkidle0"
  });
  const element = await page.$("html"); // Take screenshot to png form

  return await element.screenshot({
    type
  }).then(async data => {
    // Close browser and return screenshot
    await browser.close();
    return data;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    address
  } = req.query; // Collect address from request query
  // If address not present, throw error

  if (!address) {
    res.status(404).end();
  } // Collect posts


  const allPosts = await data_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].request( // By address
  Object(data_queries__WEBPACK_IMPORTED_MODULE_5__[/* ZORA_MEDIA_BY_OWNER */ "c"])(address.toLowerCase()));
  let ownedMedia = [];

  for (let i = 0; i < allPosts.medias.length; i++) {
    // Collect postID
    const postID = allPosts.medias[i].id; // FIXME: hardcoded fix for /dev/null lmao

    if (postID !== "2") {
      // Collect post
      const post = await Object(_data_functions__WEBPACK_IMPORTED_MODULE_4__[/* getPostByID */ "a"])(allPosts.medias[i].id); // Push post to ownedMedia

      ownedMedia.push(post);
    }
  } // Filter posts array for only images


  ownedMedia = ownedMedia.filter(post => post.metadata.mimeType.startsWith("image")); // If there is at least 1 image

  if (ownedMedia.length > 0) {
    // Collect the base64 of the image
    const image = await getBase64(ownedMedia[0].contentURI); // Generate page html and take screenshot

    const html = generateHTML(image, address);
    const result = await getScreenshot({
      html
    }); // Return screenshot

    res.writeHead(200, {
      "Content-Type": "image/png"
    });
    res.end(result);
  } else {
    // Else, collect base64 of default meta
    const image = Buffer.from(getBase64("https://zora.gallery/meta.png"), "base64"); // Return screenshot

    res.writeHead(200, {
      "Content-Type": "image/png"
    });
    res.end(image);
  }
});
/**
 * Returns media contentURI as Base64
 * @param {String} url of media
 */

async function getBase64(url) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, {
    // Collect as ArrayBuffer
    responseType: "arraybuffer"
  }).then(response => // Convert response to base64
  Buffer.from(response.data, "binary").toString("base64"));
}

/***/ }),

/***/ "wVT7":
/***/ (function(module, exports) {

module.exports = require("chrome-aws-lambda");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
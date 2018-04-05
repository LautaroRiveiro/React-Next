module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "title",
                null,
                props.titulo
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css" }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js" })
        )
    );
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);



var menu = [{
    id: 1,
    url: '/',
    nombre: 'Home'
}, {
    id: 2,
    url: '/calculadora',
    nombre: 'Calculadora'
}];

/* harmony default export */ __webpack_exports__["a"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'nav-wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                { href: '/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'brand-logo' },
                    '\xC7\xFCrS0'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { id: 'nav-mobile', className: 'right hide-on-med-and-down' },
                menu.map(function (opcion) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        { key: opcion.id },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { href: opcion.url },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'a',
                                null,
                                ' ',
                                opcion.nombre,
                                ' '
                            )
                        )
                    );
                })
            )
        )
    );
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// CONCATENATED MODULE: ./components/Saludos.js


/* harmony default export */ var Saludos = (function (props) {
    return external__react__default.a.createElement(
        "div",
        {
            className: "jsx-447550414 " + style__default.a.dynamic([["1539535139", [props.color, props.color]]]) + " " + "equipo"
        },
        external__react__default.a.createElement(
            "h2",
            {
                className: "jsx-447550414 " + style__default.a.dynamic([["1539535139", [props.color, props.color]]])
            },
            "Equipo"
        ),
        external__react__default.a.createElement(
            "ul",
            {
                className: "jsx-447550414 " + style__default.a.dynamic([["1539535139", [props.color, props.color]]])
            },
            props.personas.map(function (persona) {
                return external__react__default.a.createElement(
                    "li",
                    { key: persona.id, className: "jsx-447550414 " + style__default.a.dynamic([["1539535139", [props.color, props.color]]])
                    },
                    external__react__default.a.createElement("img", { src: persona.img, alt: "", className: "jsx-447550414 " + style__default.a.dynamic([["1539535139", [props.color, props.color]]])
                    }),
                    external__react__default.a.createElement(
                        "span",
                        {
                            className: "jsx-447550414 " + style__default.a.dynamic([["1539535139", [props.color, props.color]]])
                        },
                        persona.first_name,
                        " ",
                        persona.last_name
                    )
                );
            })
        ),
        external__react__default.a.createElement(style__default.a, {
            styleId: "1539535139",
            css: ["ul.__jsx-style-dynamic-selector{list-style-type:none;padding-left:0px;}", "li.__jsx-style-dynamic-selector{font-family:Calibri;text-shadow:1px 1px " + props.color + ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "li.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{padding-left:10px;}", "li.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{border:0.5px " + props.color + " dashed;border-radius:100%;padding:3px;}"],
            dynamic: [props.color, props.color]
        }),
        external__react__default.a.createElement(style__default.a, {
            styleId: "447550414",
            css: ["div.jsx-447550414{background:orange;border:1px solid black;}", ".equipo.jsx-447550414{padding:0px 50px;}", "h2.jsx-447550414{text-align:center;}"]
        })
    );
});
// EXTERNAL MODULE: ./static/data/jugadores.js
var jugadores = __webpack_require__(11);
var jugadores_default = /*#__PURE__*/__webpack_require__.n(jugadores);

// EXTERNAL MODULE: ./components/Head.js
var Head = __webpack_require__(2);

// EXTERNAL MODULE: ./components/Navbar.js
var Navbar = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.js







/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
    return external__react__default.a.createElement(
        'div',
        {
            className: 'jsx-1342695346'
        },
        external__react__default.a.createElement(Head["a" /* default */], { titulo: 'Equipos' }),
        external__react__default.a.createElement(Navbar["a" /* default */], null),
        external__react__default.a.createElement(
            'h1',
            { style: { textAlign: "center" }, className: 'jsx-1342695346'
            },
            'Equipos'
        ),
        external__react__default.a.createElement('hr', {
            className: 'jsx-1342695346'
        }),
        external__react__default.a.createElement(
            'div',
            { style: { display: "flex", justifyContent: "space-around" }, className: 'jsx-1342695346'
            },
            external__react__default.a.createElement(Saludos, { className: 'equipo', personas: jugadores["local"], color: 'blue' }),
            external__react__default.a.createElement(Saludos, { className: 'equipo', personas: jugadores["visitante"], color: 'green' })
        ),
        external__react__default.a.createElement(style__default.a, {
            styleId: '1342695346',
            css: []
        })
    );
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var local = [{
  "id": 1,
  "first_name": "Cecil",
  "last_name": "Washbrook",
  "img": "https://robohash.org/totameosfugit.png?size=50x50&set=set1"
}, {
  "id": 2,
  "first_name": "Lona",
  "last_name": "Went",
  "img": "https://robohash.org/occaecatisequised.png?size=50x50&set=set1"
}, {
  "id": 3,
  "first_name": "Kelly",
  "last_name": "McCourtie",
  "img": "https://robohash.org/autemnonprovident.png?size=50x50&set=set1"
}, {
  "id": 4,
  "first_name": "Donovan",
  "last_name": "Ingyon",
  "img": "https://robohash.org/estsintvoluptatem.png?size=50x50&set=set1"
}, {
  "id": 5,
  "first_name": "Mohandas",
  "last_name": "Laffan",
  "img": "https://robohash.org/utasperioresearum.png?size=50x50&set=set1"
}, {
  "id": 6,
  "first_name": "Sammie",
  "last_name": "Demonge",
  "img": "https://robohash.org/estquiavelit.png?size=50x50&set=set1"
}, {
  "id": 7,
  "first_name": "Malanie",
  "last_name": "Le Conte",
  "img": "https://robohash.org/distinctioquisquamfacilis.png?size=50x50&set=set1"
}, {
  "id": 8,
  "first_name": "Gladi",
  "last_name": "Stancer",
  "img": "https://robohash.org/ipsamsimiliquedolor.png?size=50x50&set=set1"
}, {
  "id": 9,
  "first_name": "Lannie",
  "last_name": "McKenna",
  "img": "https://robohash.org/etmolestiaequam.png?size=50x50&set=set1"
}, {
  "id": 10,
  "first_name": "Shurlock",
  "last_name": "Bayston",
  "img": "https://robohash.org/voluptatembeataeiure.png?size=50x50&set=set1"
}, {
  "id": 11,
  "first_name": "Lurleen",
  "last_name": "Edworthie",
  "img": "https://robohash.org/facereaspernaturest.png?size=50x50&set=set1"
}];

var visitante = [{
  "id": 1,
  "first_name": "Trudie",
  "last_name": "Gueny",
  "img": "https://robohash.org/culpanatusin.png?size=50x50&set=set1"
}, {
  "id": 2,
  "first_name": "Quinn",
  "last_name": "Acome",
  "img": "https://robohash.org/fugiatmollitianulla.png?size=50x50&set=set1"
}, {
  "id": 3,
  "first_name": "Sephira",
  "last_name": "de Courcey",
  "img": "https://robohash.org/veroquiadolor.png?size=50x50&set=set1"
}, {
  "id": 4,
  "first_name": "Suzanne",
  "last_name": "Athersmith",
  "img": "https://robohash.org/omnisducimusnihil.png?size=50x50&set=set1"
}, {
  "id": 5,
  "first_name": "Zondra",
  "last_name": "Renol",
  "img": "https://robohash.org/veladipisciaspernatur.png?size=50x50&set=set1"
}, {
  "id": 6,
  "first_name": "Jerrold",
  "last_name": "Makeswell",
  "img": "https://robohash.org/sitcumqueperspiciatis.png?size=50x50&set=set1"
}, {
  "id": 7,
  "first_name": "Letitia",
  "last_name": "Beathem",
  "img": "https://robohash.org/doloraspernaturhic.png?size=50x50&set=set1"
}, {
  "id": 8,
  "first_name": "Kerrill",
  "last_name": "Rizon",
  "img": "https://robohash.org/velitfugavel.png?size=50x50&set=set1"
}, {
  "id": 9,
  "first_name": "Mac",
  "last_name": "Lovie",
  "img": "https://robohash.org/quiaveropariatur.png?size=50x50&set=set1"
}, {
  "id": 10,
  "first_name": "Egbert",
  "last_name": "Tripney",
  "img": "https://robohash.org/consequunturdoloremvoluptatem.png?size=50x50&set=set1"
}, {
  "id": 11,
  "first_name": "Kimberlee",
  "last_name": "Matuszewski",
  "img": "https://robohash.org/quimodilaboriosam.png?size=50x50&set=set1"
}];

module.exports = {
  local: local,
  visitante: visitante
};

/***/ })
/******/ ]);
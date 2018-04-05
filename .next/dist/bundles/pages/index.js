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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "C:\\Users\\Lautaro\\Desktop\\React\\components\\Head.js";



/* harmony default export */ __webpack_exports__["a"] = (function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 4
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "title",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                props.titulo
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            })
        )
    );
});

/***/ }),

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = 'C:\\Users\\Lautaro\\Desktop\\React\\components\\Navbar.js';



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
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'nav-wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                { href: '/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    { className: 'brand-logo', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    },
                    '\xC7\xFCrS0'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { id: 'nav-mobile', className: 'right hide-on-med-and-down', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                },
                menu.map(function (opcion) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        { key: opcion.id, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                            { href: opcion.url, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 24
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'a',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 24
                                    }
                                },
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

/***/ "./components/Saludos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Users\\Lautaro\\Desktop\\React\\components\\Saludos.js";


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
            className: "jsx-447550414 " + __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1539535139", [props.color, props.color]]]) + " " + "equipo",
            __source: {
                fileName: _jsxFileName,
                lineNumber: 3
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "h2",
            {
                className: "jsx-447550414 " + __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1539535139", [props.color, props.color]]]),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 4
                }
            },
            "Equipo"
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "ul",
            {
                className: "jsx-447550414 " + __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1539535139", [props.color, props.color]]]),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            },
            props.personas.map(function (persona) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "li",
                    { key: persona.id, className: "jsx-447550414 " + __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1539535139", [props.color, props.color]]]),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: persona.img, alt: "", className: "jsx-447550414 " + __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1539535139", [props.color, props.color]]]),
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        "span",
                        {
                            className: "jsx-447550414 " + __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["1539535139", [props.color, props.color]]]),
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            }
                        },
                        persona.first_name,
                        " ",
                        persona.last_name
                    )
                );
            })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: "1539535139",
            css: "ul.__jsx-style-dynamic-selector{list-style-type:none;padding-left:0px;}li.__jsx-style-dynamic-selector{font-family:Calibri;text-shadow:1px 1px " + props.color + ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}li.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{padding-left:10px;}li.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{border:0.5px " + props.color + " dashed;border-radius:100%;padding:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNhbHVkb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JpQixBQUc4QyxBQUlELEFBT0YsQUFHK0Isa0JBRnJELEVBUHFELENBSmhDLGlCQUNyQixXQWF1QixtQkFDUCxDQVZDLFdBV2pCLCtEQVYrQix5R0FDUiw2RkFDdkIiLCJmaWxlIjoiY29tcG9uZW50c1xcU2FsdWRvcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9MYXV0YXJvL0Rlc2t0b3AvUmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcXVpcG9cIj5cclxuICAgICAgICAgICAgPGgyPkVxdWlwbzwvaDI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMucGVyc29uYXMubWFwKCAocGVyc29uYSk9PihcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsgcGVyc29uYS5pZCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGVyc29uYS5pbWd9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3BlcnNvbmEuZmlyc3RfbmFtZX0ge3BlcnNvbmEubGFzdF9uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggJHsgcHJvcHMuY29sb3IgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsaSBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjVweCAkeyBwcm9wcy5jb2xvciB9IGRhc2hlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZXF1aXBve1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdfQ== */\n/*@ sourceURL=components\\Saludos.js */",
            dynamic: [props.color, props.color]
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: "447550414",
            css: "div.jsx-447550414{background:orange;border:1px solid black;}.equipo.jsx-447550414{padding:0px 50px;}h2.jsx-447550414{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFNhbHVkb3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NpQixBQUcyQyxBQUtELEFBSUMsaUJBSHRCLENBTDJCLEFBUzNCLHVCQVJBIiwiZmlsZSI6ImNvbXBvbmVudHNcXFNhbHVkb3MuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvTGF1dGFyby9EZXNrdG9wL1JlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXF1aXBvXCI+XHJcbiAgICAgICAgICAgIDxoMj5FcXVpcG88L2gyPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnBlcnNvbmFzLm1hcCggKHBlcnNvbmEpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17IHBlcnNvbmEuaWQgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BlcnNvbmEuaW1nfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwZXJzb25hLmZpcnN0X25hbWV9IHtwZXJzb25hLmxhc3RfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4ICR7IHByb3BzLmNvbG9yIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGkgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsaSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC41cHggJHsgcHJvcHMuY29sb3IgfSBkYXNoZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmVxdWlwb3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=components\\Saludos.js */"
        })
    );
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Saludos__ = __webpack_require__("./components/Saludos.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_data_jugadores__ = __webpack_require__("./static/data/jugadores.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_data_jugadores___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_data_jugadores__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Head__ = __webpack_require__("./components/Head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Navbar__ = __webpack_require__("./components/Navbar.js");
var _jsxFileName = 'C:\\Users\\Lautaro\\Desktop\\React\\pages\\index.js';







/* harmony default export */ __webpack_exports__["default"] = (function () {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
            className: 'jsx-1342695346',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 7
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Head__["a" /* default */], { titulo: 'Equipos', __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Navbar__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h1',
            { style: { textAlign: "center" }, className: 'jsx-1342695346',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            },
            'Equipos'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('hr', {
            className: 'jsx-1342695346',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { style: { display: "flex", justifyContent: "space-around" }, className: 'jsx-1342695346',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Saludos__["a" /* default */], { className: 'equipo', personas: __WEBPACK_IMPORTED_MODULE_3__static_data_jugadores__["local"], color: 'blue', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Saludos__["a" /* default */], { className: 'equipo', personas: __WEBPACK_IMPORTED_MODULE_3__static_data_jugadores__["visitante"], color: 'green', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '1342695346',
            css: '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmEiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0xhdXRhcm8vRGVza3RvcC9SZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTYWx1ZG9zIGZyb20gJy4uL2NvbXBvbmVudHMvU2FsdWRvcyc7XHJcbmltcG9ydCB7bG9jYWwsIHZpc2l0YW50ZX0gZnJvbSAnLi4vc3RhdGljL2RhdGEvanVnYWRvcmVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkIHRpdHVsbz1cIkVxdWlwb3NcIi8+XHJcbiAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgPGgxIHN0eWxlPXsge3RleHRBbGlnbjpcImNlbnRlclwifSB9PkVxdWlwb3M8L2gxPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OlwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1hcm91bmRcIiB9fT5cclxuICAgICAgICAgICAgPFNhbHVkb3MgY2xhc3NOYW1lPVwiZXF1aXBvXCIgcGVyc29uYXM9e2xvY2FsfSBjb2xvcj1cImJsdWVcIiAvPlxyXG4gICAgICAgICAgICA8U2FsdWRvcyBjbGFzc05hbWU9XCJlcXVpcG9cIiBwZXJzb25hcz17dmlzaXRhbnRlfSBjb2xvcj1cImdyZWVuXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbikiXX0= */\n/*@ sourceURL=pages\\index.js */'
        })
    );
});

/***/ }),

/***/ "./static/data/jugadores.js":
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

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
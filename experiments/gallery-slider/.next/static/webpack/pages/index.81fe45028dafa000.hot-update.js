"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/GallerySlider.js/index.js":
/*!**********************************************!*\
  !*** ./components/GallerySlider.js/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"../../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n// slide image component\nconst GallerySlider = (param)=>{\n    let { array } = param;\n    _s();\n    const [activeImg, setActiveImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (activeImg > (array === null || array === void 0 ? void 0 : array.length)) {\n            setActiveImg(1);\n        }\n        const interval = setInterval(()=>{\n            setActiveImg(activeImg + 1);\n        }, 8000);\n        return ()=>clearInterval(interval);\n    }, [\n        activeImg,\n        array === null || array === void 0 ? void 0 : array.length\n    ]);\n    const updateActive = (num)=>{\n        setActiveImg(num);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1000px] mx-auto md:h-[410px] flex gap-1 md:gap-2 mt-8 \",\n        children: array === null || array === void 0 ? void 0 : array.map((slide)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageSlide, {\n                slide: slide,\n                updateActive: updateActive,\n                activeImg: activeImg,\n                alt: \"Image slide\"\n            }, slide.id, false, {\n                fileName: \"/Users/missChievous/frontend-libraries/experiments/gallery-slider/components/GallerySlider.js/index.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/missChievous/frontend-libraries/experiments/gallery-slider/components/GallerySlider.js/index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GallerySlider, \"+jpkjfcUE/5/HE031ISW042FL9M=\");\n_c = GallerySlider;\n// single image componnet\nconst ImageSlide = (param)=>{\n    let { slide, updateActive, activeImg } = param;\n    var _slide_text, _slide_text1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            transition: \"0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)\"\n        },\n        onClick: ()=>updateActive(slide.id),\n        className: \"\".concat(activeImg === (slide === null || slide === void 0 ? void 0 : slide.id) ? \"h-80 w-4/5 md:w-[400px] lg:w-[500px] grow-1 animate-slightFade\" : \"h-80  w-4 md:w-16 lg:w-28 flex-none cursor-pointer\", \" md:h-full  relative rounded-2xl overflow-hidden bg-gray-200\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: slide.src,\n                alt: \"about slide\",\n                fill: true,\n                \"object-fit\": \"cover\",\n                priority: true\n            }, void 0, false, {\n                fileName: \"/Users/missChievous/frontend-libraries/experiments/gallery-slider/components/GallerySlider.js/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            (slide === null || slide === void 0 ? void 0 : slide.text) && activeImg === (slide === null || slide === void 0 ? void 0 : slide.id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"animate-fadeIn absolute bottom-[10%] text-white p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"font-bold text-2xl text-white\",\n                        children: slide === null || slide === void 0 ? void 0 : (_slide_text = slide.text) === null || _slide_text === void 0 ? void 0 : _slide_text.header\n                    }, void 0, false, {\n                        fileName: \"/Users/missChievous/frontend-libraries/experiments/gallery-slider/components/GallerySlider.js/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs text-white\",\n                        children: slide === null || slide === void 0 ? void 0 : (_slide_text1 = slide.text) === null || _slide_text1 === void 0 ? void 0 : _slide_text1.sub\n                    }, void 0, false, {\n                        fileName: \"/Users/missChievous/frontend-libraries/experiments/gallery-slider/components/GallerySlider.js/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/missChievous/frontend-libraries/experiments/gallery-slider/components/GallerySlider.js/index.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/missChievous/frontend-libraries/experiments/gallery-slider/components/GallerySlider.js/index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = ImageSlide;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GallerySlider);\nvar _c, _c1;\n$RefreshReg$(_c, \"GallerySlider\");\n$RefreshReg$(_c1, \"ImageSlide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbGxlcnlTbGlkZXIuanMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBRXBCO0FBRS9CLHdCQUF3QjtBQUN4QixNQUFNSSxnQkFBZ0I7UUFBQyxFQUFFQyxLQUFLLEVBQUU7O0lBQzlCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUixJQUFJSSxhQUFZRCxrQkFBQUEsNEJBQUFBLE1BQU9HLE1BQU0sR0FBRTtZQUM3QkQsYUFBYTtRQUNmO1FBQ0EsTUFBTUUsV0FBV0MsWUFBWTtZQUMzQkgsYUFBYUQsWUFBWTtRQUMzQixHQUFHO1FBQ0gsT0FBTyxJQUFNSyxjQUFjRjtJQUM3QixHQUFHO1FBQUNIO1FBQVdELGtCQUFBQSw0QkFBQUEsTUFBT0csTUFBTTtLQUFDO0lBRTdCLE1BQU1JLGVBQWUsQ0FBQ0M7UUFDcEJOLGFBQWFNO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWlYsa0JBQUFBLDRCQUFBQSxNQUFPVyxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNDO2dCQUVDRCxPQUFPQTtnQkFDUEwsY0FBY0E7Z0JBQ2ROLFdBQVdBO2dCQUNYYSxLQUFJO2VBSkNGLE1BQU1HLEVBQUU7Ozs7Ozs7Ozs7QUFTdkI7R0E5Qk1oQjtLQUFBQTtBQWdDTix5QkFBeUI7QUFDekIsTUFBTWMsYUFBYTtRQUFDLEVBQUVELEtBQUssRUFBRUwsWUFBWSxFQUFFTixTQUFTLEVBQUU7UUF3QnpDVyxhQUVnQ0E7SUF6QjNDLHFCQUNFLDhEQUFDSDtRQUNDTyxPQUFPO1lBQ0xDLFlBQVk7UUFDZDtRQUNBQyxTQUFTLElBQU1YLGFBQWFLLE1BQU1HLEVBQUU7UUFDcENMLFdBQVcsR0FJVixPQUhDVCxlQUFjVyxrQkFBQUEsNEJBQUFBLE1BQU9HLEVBQUUsSUFDbkIsbUVBQ0Esc0RBQ0w7OzBCQUVELDhEQUFDakIsbURBQUtBO2dCQUNKcUIsS0FBS1AsTUFBTU8sR0FBRztnQkFDZEwsS0FBSTtnQkFDSk0sSUFBSTtnQkFDSkMsY0FBVztnQkFDWEMsUUFBUTs7Ozs7O1lBR1RWLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT1csSUFBSSxLQUFJdEIsZUFBY1csa0JBQUFBLDRCQUFBQSxNQUFPRyxFQUFFLGtCQUNyQyw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDYzt3QkFBR2QsV0FBVTtrQ0FDWEUsa0JBQUFBLDZCQUFBQSxjQUFBQSxNQUFPVyxJQUFJLGNBQVhYLGtDQUFBQSxZQUFhYSxNQUFNOzs7Ozs7a0NBRXRCLDhEQUFDQzt3QkFBRWhCLFdBQVU7a0NBQXNCRSxrQkFBQUEsNkJBQUFBLGVBQUFBLE1BQU9XLElBQUksY0FBWFgsbUNBQUFBLGFBQWFlLEdBQUc7Ozs7Ozs7Ozs7OzRCQUdyRDs7Ozs7OztBQUlSO01BakNNZDtBQW1DTiwrREFBZWQsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbGxlcnlTbGlkZXIuanMvaW5kZXguanM/NmMxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG4vLyBzbGlkZSBpbWFnZSBjb21wb25lbnRcbmNvbnN0IEdhbGxlcnlTbGlkZXIgPSAoeyBhcnJheSB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVJbWcsIHNldEFjdGl2ZUltZ10gPSB1c2VTdGF0ZSgxKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3RpdmVJbWcgPiBhcnJheT8ubGVuZ3RoKSB7XG4gICAgICBzZXRBY3RpdmVJbWcoMSk7XG4gICAgfVxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0QWN0aXZlSW1nKGFjdGl2ZUltZyArIDEpO1xuICAgIH0sIDgwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2FjdGl2ZUltZywgYXJyYXk/Lmxlbmd0aF0pO1xuXG4gIGNvbnN0IHVwZGF0ZUFjdGl2ZSA9IChudW0pID0+IHtcbiAgICBzZXRBY3RpdmVJbWcobnVtKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzEwMDBweF0gbXgtYXV0byBtZDpoLVs0MTBweF0gZmxleCBnYXAtMSBtZDpnYXAtMiBtdC04IFwiPlxuICAgICAge2FycmF5Py5tYXAoKHNsaWRlKSA9PiAoXG4gICAgICAgIDxJbWFnZVNsaWRlXG4gICAgICAgICAga2V5PXtzbGlkZS5pZH1cbiAgICAgICAgICBzbGlkZT17c2xpZGV9XG4gICAgICAgICAgdXBkYXRlQWN0aXZlPXt1cGRhdGVBY3RpdmV9XG4gICAgICAgICAgYWN0aXZlSW1nPXthY3RpdmVJbWd9XG4gICAgICAgICAgYWx0PVwiSW1hZ2Ugc2xpZGVcIlxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBzaW5nbGUgaW1hZ2UgY29tcG9ubmV0XG5jb25zdCBJbWFnZVNsaWRlID0gKHsgc2xpZGUsIHVwZGF0ZUFjdGl2ZSwgYWN0aXZlSW1nIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB0cmFuc2l0aW9uOiAnMC41cyBjdWJpYy1iZXppZXIoMC4wNSwgMC42MSwgMC40MSwgMC45NSknLFxuICAgICAgfX1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZUFjdGl2ZShzbGlkZS5pZCl9XG4gICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICBhY3RpdmVJbWcgPT09IHNsaWRlPy5pZFxuICAgICAgICAgID8gJ2gtODAgdy00LzUgbWQ6dy1bNDAwcHhdIGxnOnctWzUwMHB4XSBncm93LTEgYW5pbWF0ZS1zbGlnaHRGYWRlJ1xuICAgICAgICAgIDogJ2gtODAgIHctNCBtZDp3LTE2IGxnOnctMjggZmxleC1ub25lIGN1cnNvci1wb2ludGVyJ1xuICAgICAgfSBtZDpoLWZ1bGwgIHJlbGF0aXZlIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTIwMGB9XG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17c2xpZGUuc3JjfVxuICAgICAgICBhbHQ9XCJhYm91dCBzbGlkZVwiXG4gICAgICAgIGZpbGxcbiAgICAgICAgb2JqZWN0LWZpdD1cImNvdmVyXCJcbiAgICAgICAgcHJpb3JpdHlcbiAgICAgIC8+XG5cbiAgICAgIHtzbGlkZT8udGV4dCAmJiBhY3RpdmVJbWcgPT09IHNsaWRlPy5pZCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWZhZGVJbiBhYnNvbHV0ZSBib3R0b20tWzEwJV0gdGV4dC13aGl0ZSBwLTRcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIHtzbGlkZT8udGV4dD8uaGVhZGVyfVxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXdoaXRlXCI+e3NsaWRlPy50ZXh0Py5zdWJ9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgICcnXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVNsaWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJHYWxsZXJ5U2xpZGVyIiwiYXJyYXkiLCJhY3RpdmVJbWciLCJzZXRBY3RpdmVJbWciLCJsZW5ndGgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInVwZGF0ZUFjdGl2ZSIsIm51bSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNsaWRlIiwiSW1hZ2VTbGlkZSIsImFsdCIsImlkIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwib25DbGljayIsInNyYyIsImZpbGwiLCJvYmplY3QtZml0IiwicHJpb3JpdHkiLCJ0ZXh0IiwiaDQiLCJoZWFkZXIiLCJwIiwic3ViIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GallerySlider.js/index.js\n"));

/***/ })

});
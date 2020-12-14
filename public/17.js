(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/Platform.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/service/Platform.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["data"]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/Platform.vue?vue&type=template&id=5ccc6278&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/service/Platform.vue?vue&type=template&id=5ccc6278& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "serviceLists" }, [
      _c("div", { staticClass: "mainContainer" }, [
        _c("div", { staticClass: "serviceName" }, [
          _vm._v(_vm._s(_vm.data.name))
        ]),
        _vm._v(" "),
        _c("div", [
          _c("img", {
            staticClass: "representativeImage",
            attrs: { src: _vm.data.img }
          })
        ])
      ]),
      _vm._v(" "),
      _c("article", [
        _c("div", { staticClass: "flatformBody" }, [
          _c("div", { staticClass: "logoBox" }, [
            _c("img", { staticClass: "logo", attrs: { src: _vm.data.logo } })
          ]),
          _vm._v(" "),
          _c("h2", [_vm._v(_vm._s(_vm.data.description))]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "historyBox" },
            [
              _c("h2", { staticClass: "history" }, [_vm._v("히스토리")]),
              _vm._v(" "),
              _vm._l(_vm.data.history, function(item) {
                return _c("ul", { key: item.id, staticClass: "timelineArea" }, [
                  _c("li", [
                    _c("span", [_vm._v(_vm._s(item.date))]),
                    _vm._v(" "),
                    _c("span", { staticClass: "content" }, [
                      _vm._v(_vm._s(item.text))
                    ])
                  ])
                ])
              })
            ],
            2
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/service/Platform.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/service/Platform.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Platform_vue_vue_type_template_id_5ccc6278___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Platform.vue?vue&type=template&id=5ccc6278& */ "./resources/js/components/service/Platform.vue?vue&type=template&id=5ccc6278&");
/* harmony import */ var _Platform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Platform.vue?vue&type=script&lang=js& */ "./resources/js/components/service/Platform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Platform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Platform_vue_vue_type_template_id_5ccc6278___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Platform_vue_vue_type_template_id_5ccc6278___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/service/Platform.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/service/Platform.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/service/Platform.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Platform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Platform.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/Platform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Platform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/service/Platform.vue?vue&type=template&id=5ccc6278&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/service/Platform.vue?vue&type=template&id=5ccc6278& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Platform_vue_vue_type_template_id_5ccc6278___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Platform.vue?vue&type=template&id=5ccc6278& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/Platform.vue?vue&type=template&id=5ccc6278&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Platform_vue_vue_type_template_id_5ccc6278___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Platform_vue_vue_type_template_id_5ccc6278___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
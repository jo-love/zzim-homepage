(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "History",
  props: ["history"],
  data: function data() {
    return {
      isOpen: false
    };
  },
  methods: {
    isOpenHandler: function isOpenHandler() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    slicedHistory: function slicedHistory() {
      return Object.values(this.history).slice(0, 2);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=template&id=7201f5a7&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=template&id=7201f5a7& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "ul",
      _vm._l(_vm.isOpen ? _vm.history : _vm.slicedHistory, function(story) {
        return _c("li", { key: story.year }, [
          _c("span", [_vm._v(_vm._s(story.year))]),
          _vm._v(" "),
          _c(
            "table",
            _vm._l(story.historyList, function(list) {
              return _c("tr", { key: list.month }, [
                _c("td", [_vm._v(_vm._s(list.month))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(list.description))])
              ])
            }),
            0
          )
        ])
      }),
      0
    ),
    _vm._v(" "),
    _c("button", { on: { click: _vm.isOpenHandler } }, [
      _vm._v(
        "\n        " + _vm._s(_vm.isOpen ? "접어두기" : "더보기") + "\n    "
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/companyInfo/companyInfoComponents/History.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/companyInfo/companyInfoComponents/History.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _History_vue_vue_type_template_id_7201f5a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./History.vue?vue&type=template&id=7201f5a7& */ "./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=template&id=7201f5a7&");
/* harmony import */ var _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./History.vue?vue&type=script&lang=js& */ "./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _History_vue_vue_type_template_id_7201f5a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _History_vue_vue_type_template_id_7201f5a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/companyInfo/companyInfoComponents/History.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=template&id=7201f5a7&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=template&id=7201f5a7& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_7201f5a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=template&id=7201f5a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/companyInfoComponents/History.vue?vue&type=template&id=7201f5a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_7201f5a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_7201f5a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
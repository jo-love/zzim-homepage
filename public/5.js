(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/Service.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/service/Service.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel-theme.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Platform_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Platform.vue */ "./resources/js/components/service/Platform.vue");
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
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MyComponent",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1___default.a,
    Platform: _Platform_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/mock/data.json").then(function (response) {
      _this.data = response.data;
      console.log(response.data);
    })["catch"](function (e) {
      console.log(e);
    });
  },
  data: function data() {
    return {
      data: "",
      settings: {
        arrows: true,
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/Service.vue?vue&type=template&id=3b75e780&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/service/Service.vue?vue&type=template&id=3b75e780& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "service" },
    [
      _c(
        "section",
        { staticClass: "slickContainer" },
        [
          _c(
            "VueSlickCarousel",
            _vm._b({}, "VueSlickCarousel", _vm.settings, false),
            [
              _c("div", { staticClass: "list" }, [
                _c("div", { staticClass: "background item1" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "list" }, [
                _c("div", { staticClass: "background item2" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "list" }, [
                _c("div", { staticClass: "background item3" })
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("section", { staticClass: "summarySection" }, [
        _c("div", { staticClass: "mainTitle" }, [_vm._v("Summary.")]),
        _vm._v(" "),
        _c("div", { staticClass: "descriptionBox" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "listBox" },
            _vm._l(_vm.data.items, function(item) {
              return _c("div", { key: item.id, staticClass: "logoList" }, [
                _c("span", [_vm._v(_vm._s(item.title))]),
                _vm._v(" "),
                _c("img", { attrs: { src: item.logo } })
              ])
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.data.items, function(item) {
        return _c(
          "div",
          { key: item.id },
          [_c("Platform", { attrs: { data: item } })],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "description" }, [
      _vm._v(
        "\n                찜은 현재 소셜커머스 영역에서 사업을 전개하고 있으며\n                "
      ),
      _c("br"),
      _vm._v(
        "혼자가 아닌 누군가와 함께 한다는 즐거움을 목표로\n                정보를 공유하는 징검다리 역할을 하고 있습니다.\n            "
      )
    ])
  }
]
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



/***/ }),

/***/ "./resources/js/components/service/Service.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/service/Service.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Service_vue_vue_type_template_id_3b75e780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service.vue?vue&type=template&id=3b75e780& */ "./resources/js/components/service/Service.vue?vue&type=template&id=3b75e780&");
/* harmony import */ var _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service.vue?vue&type=script&lang=js& */ "./resources/js/components/service/Service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Service_vue_vue_type_template_id_3b75e780___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Service_vue_vue_type_template_id_3b75e780___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/service/Service.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/service/Service.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/service/Service.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/Service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/service/Service.vue?vue&type=template&id=3b75e780&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/service/Service.vue?vue&type=template&id=3b75e780& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_3b75e780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=template&id=3b75e780& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/service/Service.vue?vue&type=template&id=3b75e780&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_3b75e780___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_3b75e780___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel-theme.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2__);
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


 // css 집어넣는거 물어보기.

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MyComponent",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      imageList: [{
        id: 1,
        imgSrc: "https://images.unsplash.com/photo-1580508158643-4bf9f8da03c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      }, {
        id: 2,
        imgSrc: "https://images.unsplash.com/photo-1549921613-8db30562bad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      }, {
        id: 3,
        imgSrc: "https://images.unsplash.com/photo-1516959512470-53955cd40f40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1946&q=80"
      }],
      settings: {
        fade: true,
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=template&id=3923ac02&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=template&id=3923ac02& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "MainBanner" }, [
    _c(
      "div",
      [
        _c(
          "VueSlickCarousel",
          _vm._b({}, "VueSlickCarousel", _vm.settings, false),
          _vm._l(_vm.imageList, function(img) {
            return _c("img", { key: img.id, attrs: { src: img.imgSrc } })
          }),
          0
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("내가 원하는 그곳을 "),
      _c("span", { staticClass: "point" }, [_vm._v("찜")]),
      _vm._v("하다.")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainBanner_vue_vue_type_template_id_3923ac02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainBanner.vue?vue&type=template&id=3923ac02& */ "./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=template&id=3923ac02&");
/* harmony import */ var _MainBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainBanner.vue?vue&type=script&lang=js& */ "./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainBanner_vue_vue_type_template_id_3923ac02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainBanner_vue_vue_type_template_id_3923ac02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=template&id=3923ac02&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=template&id=3923ac02& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainBanner_vue_vue_type_template_id_3923ac02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainBanner.vue?vue&type=template&id=3923ac02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companyInfo/companyInfoComponents/MainBanner.vue?vue&type=template&id=3923ac02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainBanner_vue_vue_type_template_id_3923ac02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainBanner_vue_vue_type_template_id_3923ac02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
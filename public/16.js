(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register/components/Signup.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/register/components/Signup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: "",
      nameErrMsg: "",
      email: "",
      emailErrMsg: "",
      phone: "",
      phoneErrMsg: "",
      password: "",
      passwordErrMsg: ""
    };
  },
  watch: {
    name: function name() {
      if (!this.name.length) {
        this.nameErrMsg = "이름을 입력해주세요.";
      } else {
        this.nameErrMsg = "";
      }
    },
    email: function email() {
      var isMail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

      if (!isMail.test(this.email) && this.email.length) {
        this.emailErrMsg = "올바른 이메일이 아닙니다.";
      } else if (!this.email.length) {
        this.emailErrMsg = "이메일을 입력해주세요.";
      } else {
        this.emailErrMsg = "";
      }
    },
    phone: function phone() {
      var isPhone = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;

      if (!isPhone.test(this.phone) && this.phone.length) {
        this.phoneErrMsg = "올바른 휴대폰 번호가 아닙니다..";
      } else if (!this.phone.length) {
        this.phoneErrMsg = "휴대폰 번호를 입력해주세요.";
      } else {
        this.phoneErrMsg = "";
      }
    },
    password: function password() {
      if (!this.password.length) {
        this.passwordErrMsg = "비밀번호를 입력해주세요.";
      } else if (this.password.length < 8) {
        this.passwordErrMsg = "8자이상 입력해주세요.";
      } else {
        this.passwordErrMsg = "";
      }
    }
  },
  methods: {
    submitForm: function submitForm(e) {
      e.preventDefault();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register/components/Signup.vue?vue&type=template&id=3d93c5f0&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/register/components/Signup.vue?vue&type=template&id=3d93c5f0& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    _c("form", { staticClass: "loginForm", on: { submit: _vm.submitForm } }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.name,
            expression: "name"
          }
        ],
        attrs: { type: "text", placeholder: "이름" },
        domProps: { value: _vm.name },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.name = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "errorMsg" }, [_vm._v(_vm._s(_vm.nameErrMsg))]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.email,
            expression: "email"
          }
        ],
        attrs: { type: "text", placeholder: "이메일" },
        domProps: { value: _vm.email },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.email = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "errorMsg" }, [
        _vm._v(_vm._s(_vm.emailErrMsg))
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.phone,
            expression: "phone"
          }
        ],
        attrs: { type: "text", placeholder: "휴대폰 번호" },
        domProps: { value: _vm.phone },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.phone = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "errorMsg" }, [
        _vm._v(_vm._s(_vm.phoneErrMsg))
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.password,
            expression: "password"
          }
        ],
        attrs: { type: "password", placeholder: "비밀번호" },
        domProps: { value: _vm.password },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.password = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "errorMsg" }, [
        _vm._v(_vm._s(_vm.passwordErrMsg))
      ]),
      _vm._v(" "),
      _c("button", [_vm._v("회원가입")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/register/components/Signup.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/register/components/Signup.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Signup_vue_vue_type_template_id_3d93c5f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signup.vue?vue&type=template&id=3d93c5f0& */ "./resources/js/components/register/components/Signup.vue?vue&type=template&id=3d93c5f0&");
/* harmony import */ var _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.vue?vue&type=script&lang=js& */ "./resources/js/components/register/components/Signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Signup_vue_vue_type_template_id_3d93c5f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Signup_vue_vue_type_template_id_3d93c5f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/register/components/Signup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/register/components/Signup.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/register/components/Signup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register/components/Signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/register/components/Signup.vue?vue&type=template&id=3d93c5f0&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/register/components/Signup.vue?vue&type=template&id=3d93c5f0& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_3d93c5f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=template&id=3d93c5f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/register/components/Signup.vue?vue&type=template&id=3d93c5f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_3d93c5f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_3d93c5f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
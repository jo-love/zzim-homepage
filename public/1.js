(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recruit/Description.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/recruit/Description.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.json */ "./resources/js/components/recruit/content.json");
var _content_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./content.json */ "./resources/js/components/recruit/content.json", 1);
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
  created: function created() {
    this.content = _content_json__WEBPACK_IMPORTED_MODULE_0__.server;
  },
  props: ["isSelected"],
  data: function data() {
    return {
      propsIsSelected: this.isSelected,
      content: {}
    };
  },
  watch: {
    isSelected: function isSelected() {
      if (this.isSelected === 1) {
        this.content = _content_json__WEBPACK_IMPORTED_MODULE_0__.server;
      }

      if (this.isSelected === 2) {
        this.content = _content_json__WEBPACK_IMPORTED_MODULE_0__.ios;
      }

      if (this.isSelected === 3) {
        this.content = _content_json__WEBPACK_IMPORTED_MODULE_0__.android;
      }

      if (this.isSelected === 4) {
        this.content = _content_json__WEBPACK_IMPORTED_MODULE_0__.data;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recruit/Description.vue?vue&type=template&id=53776b10&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/recruit/Description.vue?vue&type=template&id=53776b10& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "Description" }, [
    _c("div", { staticClass: "teams" }, [
      _c(
        "div",
        { staticClass: "description activeMenu" },
        [
          _c("h3", [_vm._v("팀 소개")]),
          _vm._v(" "),
          _vm._l(_vm.content.team, function(text) {
            return _c("ul", { key: text }, [_c("li", [_vm._v(_vm._s(text))])])
          }),
          _vm._v(" "),
          _c("h3", [_vm._v("주요업무")]),
          _vm._v(" "),
          _vm._l(_vm.content.work, function(text) {
            return _c("ul", { key: text }, [_c("li", [_vm._v(_vm._s(text))])])
          }),
          _vm._v(" "),
          _c("h3", [_vm._v("자격요건")]),
          _vm._v(" "),
          _vm._l(_vm.content.qualification, function(text) {
            return _c("ul", { key: text }, [_c("li", [_vm._v(_vm._s(text))])])
          }),
          _vm._v(" "),
          _c("h3", [_vm._v("우대사항")]),
          _vm._v(" "),
          _vm._l(_vm.content.treatment, function(text) {
            return _c("ul", { key: text }, [_c("li", [_vm._v(_vm._s(text))])])
          }),
          _vm._v(" "),
          _c("h3", [_vm._v("지원방법")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                '지원하기'버튼을 눌러서 이력서, 자유로운 형식의\n                자기소개서(PDF), Github ID(필수 아님)을 보내주세요.\n            "
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "apply" }, [
      _c("a", { attrs: { href: "" } }, [_vm._v("지원하기")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          '\n                    이름, 나이 연락처, 학력 사항 지원분야는 꼭 적어 주세요.\n                    자기 소개서는 자기 자신을 가장 잘 드러낼 수 있는 방법을\n                    택해 주세요. "저는 엄격한 아버지와 자상한 어머니 밑에서\n                    자라난~"으로 시작하는 형식적인 자기소개는 정중히\n                    사양합니다. 문서양식은 PDF만 받습니다.\n                '
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/recruit/Description.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/recruit/Description.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Description_vue_vue_type_template_id_53776b10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Description.vue?vue&type=template&id=53776b10& */ "./resources/js/components/recruit/Description.vue?vue&type=template&id=53776b10&");
/* harmony import */ var _Description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Description.vue?vue&type=script&lang=js& */ "./resources/js/components/recruit/Description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Description_vue_vue_type_template_id_53776b10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Description_vue_vue_type_template_id_53776b10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/recruit/Description.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/recruit/Description.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/recruit/Description.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Description.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recruit/Description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/recruit/Description.vue?vue&type=template&id=53776b10&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/recruit/Description.vue?vue&type=template&id=53776b10& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Description_vue_vue_type_template_id_53776b10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Description.vue?vue&type=template&id=53776b10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/recruit/Description.vue?vue&type=template&id=53776b10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Description_vue_vue_type_template_id_53776b10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Description_vue_vue_type_template_id_53776b10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/recruit/content.json":
/*!******************************************************!*\
  !*** ./resources/js/components/recruit/content.json ***!
  \******************************************************/
/*! exports provided: server, ios, android, data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"server\":{\"team\":[\"찜(찌읏) 서버 팀은 2000만 유저의 트래픽을 견뎌내는 안정적이고 확장성 있는 서버를 만듭니다.\"],\"work\":[\"찜(찌읏)의 백엔드 시스템 개발\"],\"qualification\":[\"잘 하는 프로그래밍 언어가 하나 이상 있으신 분\",\"새로운 것을 배우고 익히는 것에 두려움이 없으신 분\",\"책임감이 강하신 분\",\"빈틈없고 퀄리티 높은 서비스를 만들기 위해 노력하시는 분\"],\"treatment\":[\"확장성 있는 서버 아키텍처에 대한 이해\",\"AWS 사용 경험\",\"다양한 국가에서 사용되는 서비스 개발 경험\",\"Vue 등 Front-end 개발 경험\"]},\"ios\":{\"team\":[\"찜(찌읏) 아이폰 팀은 어느 곳보다도 난이도 있고, 큰 규모의 앱을 만듭니다.\",\"찜(찌읏) 아이폰 앱은 아래의 기술들로 만들어집니다.\",\"AFNetworking, Mantle, Typhoon, Expecta, OCMock, thrift, Alamofire, SnapKit, pop 등의 다양한 오픈소스를 앱 곳곳에서 적극적으로 활용\",\"Objective-C, Swift를 기반으로 하고 각종 스크립트 언어 사용\",\"VIPER 아키텍쳐 적용\",\"Github을 활용한 소스코드 및 이슈 관리\",\"Jenkins를 활용한 지속적 통합\",\"다양한 광고 플랫폼과 버그 수집 툴\"],\"work\":[\"찜(찌읏)의 iOS 클라이언트 개발\",\"2000만 유저와 직접 소통하는 감성적인 앱 서비스를 개발\",\"기획, 디자인, 사업개발 팀과의 협업\"],\"qualification\":[\"새로운 것을 배우고 싶으신 분\",\"자신의 작업에 대한 책임감이 강하고 자부심이 있으신 분\",\"Framework에 대한 이해를 바탕으로 완벽한 제품을 위해 장인정신을 발휘하실 분\",\"개발 실무 경험이 있으신 분\"],\"treatment\":[\"프론트엔드 아키텍쳐에 대한 이해\",\"Swift 또는 Objective-C에 대한 지식 및 경험\",\"앱 출시 경험\"]},\"android\":{\"team\":[\"찜(찌읏) 안드로이드 팀은 어느 곳보다도 난이도 있고 복잡한, 큰규모의 앱을 만들어 낸다는 것에 강한 자부심을 느낍니다.\",\"찜(찌읏) 안드로이드 앱은 아래의 기술들로 만들어집니다.\"],\"work\":[\"Firebase, RxJava, Retrofit, Dagger, Glide, Fresco, ButterKnife, Jackson, Guava, Thrift, Netty, Mockito, ThreeTen, TotallyLazy, FFmpeg 등의 다양한 오픈소스를 앱 곳곳에서 적극적으로 활용\",\"APT 및 스크립트를 활용한 소스코드 자동 생성\",\"Github을 활용한 소스코드 및 이슈 관리\",\"Jenkins를 활용한 지속적 통합\",\"다양한 광고 플랫폼과 버그 수집 툴\"],\"qualification\":[\"찜(찌읏)의 안드로이드 클라이언트 개발\",\"2000만 유저와 직접 소통하는 감성적인 앱 서비스를 개발\",\"새로운 기술을 배우고 과거의 코드를 개선하는 데에 재미를 느끼거나 의욕이 강하신 분\",\"Android Framework와 각종 오픈소스의 내부를 과감하게 파헤칠 수 있으신 분\",\"제품, 혹은 개발에 대한 의견을 거리낌없이 공유하시는 분\",\"자신의 작업에 대한 책임감이 강하고 자부심이 있으신 분\",\"구글 서비스 및 Android 기기 사용이 익숙하신 분\",\"Java에 대한 지식 및 경험이 있으신 분\"],\"treatment\":[\"찜(찌읏) 안드로이드 버전을 쓰고 계신 분\",\"MVP, MVVM 등의 코드 아키텍쳐 및 테스트 자동화에 대한 이해가 있으신 분\",\"RxJava2를 비롯한 찜(찌읏)에 포함된 오픈소스 라이브러리들을 적극적으로 활용해 보신 분\",\"채팅, 동영상 처리, 음성 및 영상 통화 개발 경험\",\"NDK 개발 경험\",\"Android Wear 개발 경험\",\"안드로이드 앱들을 디컴파일 해서 분석을 시도해 본 분\",\"Kotlin으로 앱을 제작해 보신 분\",\"아이폰 혹은 타 모바일 플랫폼에서의 개발 경험\"]},\"data\":{\"team\":[\"찜(찌읏) 데이터 팀은 2000만 유저가 만들어내는 로그에 대한 이해를 바탕으로 회사와 제품의 미래 방향성을 제시합니다\"],\"work\":[\"찜(찌읏)의 데이터 분석\",\"찜(찌읏)의 누적된 데이터를 이용한 새로운 비지니스 모델 탐색\",\"찜(찌읏)의 에서 사용되고 있는 AdNetwork 최적화 및 운영\",\"찜(찌읏)의 서버와 클라이언트의 로그 수집과 정제, 분석 과정 전반에 대한 방향 제시\"],\"qualification\":[\"Spark, MapReduce, R, Zeppelin 등을 이용한 분석 경험\",\"모바일/웹 서비스 전반의 구동방식에 대한 이해\"],\"treatment\":[\"대용량 데이터를 처리한 경험이 있으신 분\",\"수학적 감각 혹은 통계적 지식 기반이 있으신 분\",\"NLP, Machine Learning 쪽 경험이 있으신 분\",\"비지니스적인 관점과 개발적인 관점을 잘 조화시키실 수 있으신 분\",\"AWS 사용 경험\"]}}");

/***/ })

}]);
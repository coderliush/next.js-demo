(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/splitter/index.js":
/*!**************************************!*\
  !*** ./components/splitter/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Splitter; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react_splitter_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-splitter-layout */ "./node_modules/react-splitter-layout/lib/index.js");
/* harmony import */ var react_splitter_layout__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_splitter_layout__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_splitter_layout_lib_index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-splitter-layout/lib/index.css */ "./node_modules/react-splitter-layout/lib/index.css");
/* harmony import */ var react_splitter_layout_lib_index_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_splitter_layout_lib_index_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./index.less */ "./components/splitter/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_18__);













var _jsxFileName = "E:\\project\\react\\ssr\\create-next-app\\create-next-app\\components\\splitter\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement;






var splitterLineSize = 16,
    // 缓存中的标识，含有'disabledDrag'时只有主板块
disabledDrag = 'disabledDrag';

var Splitter =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__["default"])(Splitter, _Component);

  function Splitter(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Splitter);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(Splitter).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "secondaryIndex", function () {
      var secondaryIndex;
      _this.props.primaryIndex === 0 ? secondaryIndex = 1 : secondaryIndex = 0;
      return secondaryIndex;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "getInitSize", function () {
      _this.storageValue = localStorage.getItem(_this.props.storageName);
      var secondaryInitialSize = _this.props.secondaryInitialSize;

      if (_this.storageValue && _this.storageValue.includes(disabledDrag)) {
        _this.disabledDrag = true;
        return _this.foldSize;
      } else if (_this.storageValue) {
        return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(_this.storageValue);
      } else if (secondaryInitialSize) {
        return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(secondaryInitialSize);
      } else {
        return undefined;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "addButtonEvent", function () {
      var direction, opposite;
      var vertical = _this.props.vertical;
      var secondaryIndex = _this.state.secondaryIndex;

      if (vertical) {
        if (secondaryIndex === 1) {
          if (_this.storageValue && _this.storageValue.includes(disabledDrag)) {
            direction = 'top';
            opposite = 'bottom';
          } else {
            direction = 'bottom';
            opposite = 'top';
          }
        } else if (secondaryIndex === 0) {
          if (_this.storageValue && _this.storageValue.includes(disabledDrag)) {
            direction = 'bottom';
            opposite = 'top';
          } else {
            direction = 'top';
            opposite = 'bottom';
          }
        } // 垂直预览的 className


        _this.previewClassName = 'preview-secondaryDom-vertical';

        _this.splitterButton.onclick = function () {
          return _this.onSplitterButton(direction, opposite);
        };
      } else {
        if (secondaryIndex === 1) {
          if (_this.storageValue && _this.storageValue.includes(disabledDrag)) {
            direction = 'left';
            opposite = 'right';
          } else {
            direction = 'right';
            opposite = 'left';
          }
        } else if (secondaryIndex === 0) {
          if (_this.storageValue && _this.storageValue.includes(disabledDrag)) {
            direction = 'right';
            opposite = 'left';
          } else {
            direction = 'left';
            opposite = 'right';
          }
        } // 水平预览的 className


        _this.previewClassName = 'preview-secondaryDom-horizontal';

        _this.splitterButton.onclick = function () {
          return _this.onSplitterButton(direction, opposite);
        };
      }

      _this.splitterButton.classList.add(direction);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "onSplitterButton", function (direction, opposite) {
      var storageName = _this.props.storageName;
      var _this$state = _this.state,
          visibleFold = _this$state.visibleFold,
          visibleContent = _this$state.visibleContent;

      _this.setState({
        visibleFold: !visibleFold,
        visibleContent: !visibleContent
      });

      if (_this.secondaryDom.style[_this.size] === "".concat(_this.foldSize, "px")) {
        _this.disabledDrag = false;
        _this.secondaryDom.style[_this.size] = "".concat(_this["secondary".concat(_this.upSize)], "px"); // this.secondaryWidth, this.secondaryHeight

        _this.splitterLine.style.cssText = 'pointer-events: auto';
      } else {
        _this.disabledDrag = true; // 存储次板块宽度，折叠宽度设置为提示面板的宽度

        _this["secondary".concat(_this.upSize)] = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(_this.secondaryDom.style[_this.size]); // 收起次板块时保存尺寸，用于初次渲染时还原

        storageName && localStorage.setItem(storageName, "".concat(_this["secondary".concat(_this.upSize)]).concat(disabledDrag));
        _this.secondaryDom.style[_this.size] = "".concat(_this.foldSize, "px");
        _this.splitterLine.style.cssText = 'pointer-events: none';
        _this.splitterButton.style.cssText = 'pointer-events: auto'; // fix：修改宽度为0，调整浏览器高度后，次板块宽度会改变为最小宽度。

        _this.setState({
          secondaryMinSize: _this.foldSize
        });
      }

      _this.secondaryDom.classList.remove(_this.previewClassName);

      _this.splitterButton.classList.remove(direction);

      _this.splitterButton.classList.add(opposite);

      _this.splitterButton.onclick = function () {
        return _this.onSplitterButton(opposite, direction);
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "onFold", function (direction) {
      var visibleContent = _this.state.visibleContent;

      _this.setState({
        visibleContent: !visibleContent
      }); // 当次板块内容显示时，点击折叠收起内容。尺寸等于折叠面板


      if (visibleContent) {
        _this.secondaryDom.style.cssText = "".concat(_this.size, ": ").concat(_this.foldSize, "px");
        setTimeout(function () {
          _this.secondaryDom.classList.remove(_this.previewClassName);
        });
      } else {
        // 当次板块内容不显示时，点击展开显示内容。尺寸还原
        _this.secondaryDom.classList.add(_this.previewClassName);

        _this.secondaryDom.style.cssText = "".concat(_this.size, ": ").concat(_this["secondary".concat(_this.upSize)]); // width: this.secondaryWidth
      } // 设置展开时预览窗口的位置


      document.querySelector(".".concat(_this.previewClassName)).style["".concat(direction)] = 0;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "onDragStart", function () {
      var primaryMinSize, secondaryMinSize; // 当分割线不可拖拽时，设置主板块和次板块的最小尺寸，使之拖不动

      if (_this.disabledDrag) {
        primaryMinSize = _this.splitterSize - splitterLineSize - _this.foldSize;
        secondaryMinSize = _this.foldSize;
      } else {
        primaryMinSize = _this.props.primaryMinSize;
        secondaryMinSize = _this.props.secondaryMinSize;
      }

      _this.setState({
        primaryMinSize: primaryMinSize,
        secondaryMinSize: secondaryMinSize
      });

      _this.props.onDragStart && _this.props.onDragStart();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "getSplitterSize", function () {
      _this.splitterSize = _this.splitter.current.container["client".concat(_this.upSize)]; // 不能拖动时，次板块是0，

      if (_this.storageValue && _this.storageValue.includes(disabledDrag)) {
        // fix: 设置次板块最小尺寸解决改变页面高度位置变化的问题
        _this.setState({
          secondaryMinSize: _this.foldSize,
          visibleContent: false
        }); // 设置缓存中的尺寸用于还原


        _this["secondary".concat(_this.upSize)] = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(_this.storageValue);
        _this.splitterLine.style.cssText = 'pointer-events: none';
        _this.splitterButton.style.cssText = 'pointer-events: auto';
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "setGlobalVar", function () {
      var vertical = _this.props.vertical;
      var secondaryIndex = _this.state.secondaryIndex;

      if (vertical) {
        _this.size = 'height';
        _this.upSize = 'Height';
      } else {
        _this.size = 'width';
        _this.upSize = 'Width';
      } // 将分割线上的按钮 push 到分割线中


      _this.splitterLine = document.querySelector('.layout-splitter');
      _this.secondaryDom = document.querySelectorAll('.layout-pane')[secondaryIndex];
      var img = document.createElement('img');
      img.className = 'splitter-button'; // img.src = require('../../static/splitter-button.svg')

      _this.splitterLine.appendChild(img);

      _this.splitterButton = document.querySelector('.splitter-button');

      _this.addButtonEvent();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "isVisibleFold", function () {
      _this.storageValue = localStorage.getItem(_this.props.storageName);

      if (_this.storageValue && _this.storageValue.includes(disabledDrag)) {
        _this.setState({
          visibleFold: true
        });
      } else {
        _this.setState({
          visibleFold: false
        });
      }
    });

    props.showFold ? _this.foldSize = 26 : _this.foldSize = 0;
    _this.state = {
      primaryMinSize: props.primaryMinSize,
      secondaryMinSize: props.secondaryMinSize,
      // 次板块的索引。默认左边为主板块0， 右边为次板块1。通过修改 width 属性修改两块的大小，width 属性始终在次板块上 
      secondaryIndex: _this.secondaryIndex(),
      secondaryInitialSize: _this.getInitSize(),
      // 当折叠时显示，展开时不显示。
      // visibleFold: false,
      // 是否显示次板块内容 
      visibleContent: true
    };
    _this.splitter = react__WEBPACK_IMPORTED_MODULE_15___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(Splitter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setGlobalVar(); // 获取主板块次板块分割线一共占据的尺寸   

      this.getSplitterSize();
      this.isVisibleFold();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var storageName = this.props.storageName; // disabledDrag 用来标识次板块尺寸为 0，此时 1. 保存上次的尺寸用于还原。2. 分割线不可拖拽。

      if (storageName) {
        if (this.secondaryDom.style[this.size] === "".concat(this.foldSize, "px")) {
          localStorage.setItem(storageName, "".concat(this["secondary".concat(this.upSize)]).concat(disabledDrag));
        } else {
          localStorage.setItem(storageName, this.secondaryDom.style[this.size]);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          vertical = _this$props.vertical,
          foldText = _this$props.foldText,
          showFold = _this$props.showFold;
      var _this$state2 = this.state,
          primaryMinSize = _this$state2.primaryMinSize,
          secondaryMinSize = _this$state2.secondaryMinSize,
          secondaryInitialSize = _this$state2.secondaryInitialSize,
          secondaryIndex = _this$state2.secondaryIndex,
          visibleFold = _this$state2.visibleFold,
          visibleContent = _this$state2.visibleContent;
      var childrenArr = react__WEBPACK_IMPORTED_MODULE_15___default.a.Children.toArray(this.props.children);
      var itemClassNames = classnames__WEBPACK_IMPORTED_MODULE_17___default()('splitter-item', vertical ? 'splitter-vertical' : 'splitter-horizontal'); // 主板块内容一直显示；当点击收齐时，次板块内容不显示。

      var visibleChildren0 = secondaryIndex === 1 || secondaryIndex === 0 && visibleContent;
      var visibleChildren1 = secondaryIndex === 0 || secondaryIndex === 1 && visibleContent;
      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_splitter_layout__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        primaryMinSize: primaryMinSize,
        secondaryMinSize: secondaryMinSize,
        secondaryInitialSize: secondaryInitialSize,
        onDragStart: this.onDragStart,
        customClassName: this.props.customClassName ? "splitter-componented ".concat(this.props.customClassName) : 'splitter-componented',
        ref: this.splitter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: itemClassNames,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, showFold && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, secondaryIndex === 0 && visibleFold && !vertical && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "fold-panel fold-panel-left",
        onClick: function onClick() {
          return _this2.onFold('left');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "double-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }), foldText && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, foldText)), secondaryIndex === 0 && visibleFold && vertical && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "fold-panel fold-panel-top",
        onClick: function onClick() {
          return _this2.onFold('top');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "double-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }), foldText && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, foldText))), visibleChildren0 && childrenArr[0]), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: itemClassNames,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, visibleChildren1 && childrenArr[1], showFold && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, secondaryIndex === 1 && visibleFold && !vertical && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "fold-panel fold-panel-right",
        onClick: function onClick() {
          return _this2.onFold('right');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "double-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }), foldText && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, foldText)), secondaryIndex === 1 && visibleFold && vertical && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "fold-panel fold-panel-bottom",
        onClick: function onClick() {
          return _this2.onFold('bottom');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "double-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }), foldText && react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, foldText)))));
    }
  }]);

  return Splitter;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Splitter, "defaultProps", {
  storageName: null,
  primaryIndex: 0,
  // 默认主板块是第一个
  primaryMinSize: 40,
  // 默认主板块最小尺寸
  secondaryMinSize: 40,
  // 默认次板块最小尺寸
  vertical: false,
  // 默认水平方向
  showFold: false // 是否需要折叠区域，默认不显示

});


Splitter.propTypes = {
  showFold: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool,
  storageName: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string,
  foldText: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/react-splitter-layout/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-splitter-layout/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(window,function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),i=n(0),a=n.n(i);function s(e){var t=e.size||0,n=e.percentage?"%":"px",o="layout-pane",i={};return e.primary?o+=" layout-pane-primary":e.vertical?i.height="".concat(t).concat(n):i.width="".concat(t).concat(n),r.a.createElement("div",{className:o,style:i},e.children)}s.propTypes={vertical:a.a.bool,primary:a.a.bool,size:a.a.number,percentage:a.a.bool,children:a.a.oneOfType([a.a.arrayOf(a.a.node),a.a.node])},s.defaultProps={vertical:!1,primary:!1,size:0,percentage:!1,children:[]};var c=s;function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){if(document.body.createTextRange){var e=document.body.createTextRange();e.collapse(),e.select()}else window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}var y=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=p(t).call(this,e))||"object"!==l(r)&&"function"!=typeof r?h(o):r).handleResize=n.handleResize.bind(h(h(n))),n.handleMouseMove=n.handleMouseMove.bind(h(h(n))),n.handleMouseUp=n.handleMouseUp.bind(h(h(n))),n.handleTouchMove=n.handleTouchMove.bind(h(h(n))),n.handleSplitterMouseDown=n.handleSplitterMouseDown.bind(h(h(n))),n.state={secondaryPaneSize:0,resizing:!1},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e;if(window.addEventListener("resize",this.handleResize),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("touchend",this.handleMouseUp),document.addEventListener("touchmove",this.handleTouchMove),void 0!==this.props.secondaryInitialSize)e=this.props.secondaryInitialSize;else{var t,n=this.container.getBoundingClientRect();t=this.splitter?this.splitter.getBoundingClientRect():{width:4,height:4},e=this.getSecondaryPaneSize(n,t,{left:n.left+(n.width-t.width)/2,top:n.top+(n.height-t.height)/2},!1)}this.setState({secondaryPaneSize:e})}},{key:"componentDidUpdate",value:function(e,t){t.secondaryPaneSize!==this.state.secondaryPaneSize&&this.props.onSecondaryPaneSizeChange&&this.props.onSecondaryPaneSizeChange(this.state.secondaryPaneSize),t.resizing!==this.state.resizing&&(this.state.resizing?this.props.onDragStart&&this.props.onDragStart():this.props.onDragEnd&&this.props.onDragEnd())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("touchend",this.handleMouseUp),document.removeEventListener("touchmove",this.handleTouchMove)}},{key:"getSecondaryPaneSize",value:function(e,t,n,o){var r,i,a,s;this.props.vertical?(r=e.height,i=t.height,a=n.top-e.top):(r=e.width,i=t.width,a=n.left-e.left),o&&(a-=i/2),a<0?a=0:a>r-i&&(a=r-i);var c=r-i-(s=1===this.props.primaryIndex?a:r-i-a);return this.props.percentage&&(s=100*s/r,c=100*c/r,i=100*i/r,r=100),c<this.props.primaryMinSize?s=Math.max(s-(this.props.primaryMinSize-c),0):s<this.props.secondaryMinSize&&(s=Math.min(r-i-this.props.primaryMinSize,this.props.secondaryMinSize)),s}},{key:"handleResize",value:function(){if(this.splitter&&!this.props.percentage){var e=this.container.getBoundingClientRect(),t=this.splitter.getBoundingClientRect(),n=this.getSecondaryPaneSize(e,t,{left:t.left,top:t.top},!1);this.setState({secondaryPaneSize:n})}}},{key:"handleMouseMove",value:function(e){if(this.state.resizing){var t=this.container.getBoundingClientRect(),n=this.splitter.getBoundingClientRect(),o=this.getSecondaryPaneSize(t,n,{left:e.clientX,top:e.clientY},!0);f(),this.setState({secondaryPaneSize:o})}}},{key:"handleTouchMove",value:function(e){this.handleMouseMove(e.changedTouches[0])}},{key:"handleSplitterMouseDown",value:function(){f(),this.setState({resizing:!0})}},{key:"handleMouseUp",value:function(){this.setState(function(e){return e.resizing?{resizing:!1}:null})}},{key:"render",value:function(){var e=this,t="splitter-layout";this.props.customClassName&&(t+=" ".concat(this.props.customClassName)),this.props.vertical&&(t+=" splitter-layout-vertical"),this.state.resizing&&(t+=" layout-changing");var n=r.a.Children.toArray(this.props.children).slice(0,2);0===n.length&&n.push(r.a.createElement("div",null));for(var o=[],i=0!==this.props.primaryIndex&&1!==this.props.primaryIndex?0:this.props.primaryIndex,a=0;a<n.length;++a){var s=!0,l=null;n.length>1&&a!==i&&(s=!1,l=this.state.secondaryPaneSize),o.push(r.a.createElement(c,{vertical:this.props.vertical,percentage:this.props.percentage,primary:s,size:l},n[a]))}return r.a.createElement("div",{className:t,ref:function(t){e.container=t}},o[0],o.length>1&&r.a.createElement("div",{role:"separator",className:"layout-splitter",ref:function(t){e.splitter=t},onMouseDown:this.handleSplitterMouseDown,onTouchStart:this.handleSplitterMouseDown}),o.length>1&&o[1])}}])&&u(n.prototype,o),i&&u(n,i),t}();y.propTypes={customClassName:a.a.string,vertical:a.a.bool,percentage:a.a.bool,primaryIndex:a.a.number,primaryMinSize:a.a.number,secondaryInitialSize:a.a.number,secondaryMinSize:a.a.number,onDragStart:a.a.func,onDragEnd:a.a.func,onSecondaryPaneSizeChange:a.a.func,children:a.a.arrayOf(a.a.node)},y.defaultProps={customClassName:"",vertical:!1,percentage:!1,primaryIndex:0,primaryMinSize:0,secondaryInitialSize:void 0,secondaryMinSize:0,onDragStart:null,onDragEnd:null,onSecondaryPaneSizeChange:null,children:[]};var m=y;t.default=m}])});

/***/ })

}]);
//# sourceMappingURL=2.js.map
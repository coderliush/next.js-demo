exports.ids = [1];
exports.modules = {

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
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react_splitter_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-splitter-layout */ "react-splitter-layout");
/* harmony import */ var react_splitter_layout__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_splitter_layout__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_splitter_layout_lib_index_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-splitter-layout/lib/index.css */ "./node_modules/react-splitter-layout/lib/index.css");
/* harmony import */ var react_splitter_layout_lib_index_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_splitter_layout_lib_index_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! classnames */ "classnames");
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

/***/ "./components/splitter/index.less":
/*!****************************************!*\
  !*** ./components/splitter/index.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-splitter-layout/lib/index.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-splitter-layout/lib/index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=1.js.map
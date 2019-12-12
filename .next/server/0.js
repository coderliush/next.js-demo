exports.ids = [0];
exports.modules = {

/***/ "./components/ag-grid/agGrid.less":
/*!****************************************!*\
  !*** ./components/ag-grid/agGrid.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ag-grid/agGridTheme.scss":
/*!*********************************************!*\
  !*** ./components/ag-grid/agGridTheme.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ag-grid/grid-loading/index.js":
/*!**************************************************!*\
  !*** ./components/ag-grid/grid-loading/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./components/ag-grid/grid-loading/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\project\\react\\ssr\\create-next-app\\create-next-app\\components\\ag-grid\\grid-loading\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * @Author: chenshizhong
 * @Date: 2019/08/15 14:41:31
 * @Description: loading
 */


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var loading = _ref.loading,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: loading ? 'inline-block' : 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ag-grid-loading",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ag-grid-loading-animate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "spin-dot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spin-dot-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spin-dot-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spin-dot-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "spin-dot-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }))));
});

/***/ }),

/***/ "./components/ag-grid/grid-loading/index.less":
/*!****************************************************!*\
  !*** ./components/ag-grid/grid-loading/index.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ag-grid/index.js":
/*!*************************************!*\
  !*** ./components/ag-grid/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ag_grid_react_main__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ag-grid-react/main */ "ag-grid-react/main");
/* harmony import */ var ag_grid_react_main__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ag_grid_react_main__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _locales_zh_CN__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./locales/zh-CN */ "./components/ag-grid/locales/zh-CN.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pagination */ "./components/pagination/index.js");
/* harmony import */ var _grid_loading__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./grid-loading */ "./components/ag-grid/grid-loading/index.js");
/* harmony import */ var _agGridTheme_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./agGridTheme.scss */ "./components/ag-grid/agGridTheme.scss");
/* harmony import */ var _agGridTheme_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_agGridTheme_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _agGrid_less__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./agGrid.less */ "./components/ag-grid/agGrid.less");
/* harmony import */ var _agGrid_less__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_agGrid_less__WEBPACK_IMPORTED_MODULE_22__);















var _jsxFileName = "E:\\project\\react\\ssr\\create-next-app\\create-next-app\\components\\ag-grid\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/**
 * Created by csz on 2019/7/24
 */



 // import {GridDatePicker, GridDatePickerRender} from './gridDatePicker'





var currentLang = window.localStorage.getItem('gyLang') || 'zh_CN'; // grid国际化

var ag_langMap = {
  'zh_CN': _locales_zh_CN__WEBPACK_IMPORTED_MODULE_18__["default"],
  'en_US': null
}; // 关联ag-Grid语言包 默认为英文en_US可设置为null
// grid基本默认配置 以下属性均可在使用AgGrid组件时传入对应Props修改
// 如修改列表的行高度为50,使用时<AgGrid rowHeight={50}/>

var gridOptions = {
  localeText: ag_langMap[currentLang],
  // 国际化(根据本地localStorage的gyLang显示对应语言
  enableSorting: false,
  // 是否开启排序(默认false关闭、true开启)可在columnDefs对应列中单独配置sortable
  enableFilter: false,
  // 是否开启过滤(默认false关闭、true开启)可在columnDefs对应列中单独配置filter
  suppressMenuHide: true,
  // 是否阻止列菜单隐藏(默认false隐藏、true始终显示)
  rowDragManaged: true,
  // 是否支持行拖拽(true为支持、false为不支持)
  animateRows: true,
  // 是否显示行拖拽动画效果(true为显示、false为不显示)
  suppressRowClickSelection: false,
  // 点击行是否会勾选该行(true为不勾选、false勾选)
  rowSelection: 'multiple',
  // 行选中方式(单选single、多选multiple) 按住shift支持多选
  suppressCellSelection: true,
  // 单元格是否允许选中，true：不选中，false：选中（默认）   
  rowStyle: {
    // 行样式
    borderColor: '#e8e8e8'
  },
  headerHeight: 32,
  // 表头高度
  rowHeight: 40,
  // 默认行高
  enableCellTextSelection: false // 是否允许选中行内文本

}; // gird基本列配置（初始化表格默认使用以下配置来配置每一列）
// 如需修改基本列设置 则按以下格式传入自定义的基础列配置 如<AgGrid defaultColDef = {your_defaultColDef}>
// 如需单独个性化配置某列、可在columnDefs的对应列中添加相应属性进行个性化配置

var gridDefaultColDef = {
  width: 150,
  // 列默认宽度px
  filter: 'agNumberColumnFilter',
  // 列默认使用ag-grid提供的数字过滤器(文本过滤器'agTextColumnFilter'|日期过滤器'agDateColumnFilter')
  resizable: true,
  // 是否列可伸缩(true为支持列伸缩、false为禁止列伸缩)
  editable: false,
  // 是否列可编辑(默认false即不可编辑)可在columnDefs对应列中单独配置filter
  cellStyle: {
    // 单元格样式
    color: "#333",
    lineHeight: '40px'
  }
};

var AgGrid =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__["default"])(AgGrid, _Component);

  function AgGrid(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, AgGrid);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__["default"])(AgGrid).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "computeContextMenuPosition", function (clientX, clientY) {
      var contextMenuNode = document.getElementById('ag-grid-context-menu');
      var screenW = window.innerWidth; // 视窗宽度

      var screenH = window.innerHeight; // 视窗高度

      var menuW = contextMenuNode.offsetWidth; // 目标宽度

      var menuH = contextMenuNode.offsetHeight; // 目标高度

      var right = screenW - clientX > menuW;
      var left = !right;
      var bottom = screenH - clientY > menuH;
      var top = !bottom;
      var position = {};

      if (right) {
        position.left = "".concat(clientX, "px");
      }

      if (left) {
        position.left = "".concat(clientX - menuW, "px");
      }

      if (bottom) {
        position.top = "".concat(clientY, "px");
      }

      if (top) {
        position.top = "".concat(clientY - menuH, "px");
      }

      return position;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "onColumnResized", function (params) {} // this.gridApi.resetRowHeights();
    // 以某个字段计算行高（超过三张图片换行）
    // getRowHeight = (params) => {
    //     console.log(params);
    //     return 28 * (Math.floor(params.data.receiverAddress.length / 35) + 1)
    // }
    // 右键项点击
    );

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "onGridContextMenuItemClick", function (menuItemObject) {
      var domEvent = menuItemObject.domEvent;
      domEvent.stopPropagation();
      domEvent.preventDefault();

      _this.props.contextMenu.props.onClick(menuItemObject, _this.targetRowDataObject);
    });

    _this.targetRowDataObject = null; // 存储右键行数据对象

    _this.state = {
      top: 0,
      left: '-10000px'
    };
    _this.defaultColDef = {
      onCellContextMenu: function onCellContextMenu(params) {
        var event = params.event,
            api = params.api,
            node = params.node;
        event.preventDefault();
        event.stopPropagation();
        api.deselectAll(); // 取消所有选中

        node.setSelected(true); // 选中当前行

        if (_this.props.contextMenu) {
          var _this$computeContextM = _this.computeContextMenuPosition(event.clientX, event.clientY),
              top = _this$computeContextM.top,
              left = _this$computeContextM.left;

          _this.setState({
            top: top,
            left: left
          }); // 设置右键菜单位置


          _this.targetRowDataObject = params;
        }
      }
    };
    return _this;
  } // 计算右键菜单位置


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(AgGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // 干掉主表格区域浏览器默认右键
      document.getElementById('ag-grid-bolck').oncontextmenu = function () {
        return false;
      }; // 全局监听mouseup，关闭右键列表


      document.addEventListener('mouseup', function (e) {
        // 判断右键菜单是否显示在可视区域内（目前仅根据top来做区分）
        if (_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(_this2.state.top) > 0) {
          e.stopPropagation();
          e.preventDefault();

          _this2.setState({
            top: 0,
            left: '-10000px'
          });
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pagination = _this$props.pagination,
          contextMenu = _this$props.contextMenu,
          loading = _this$props.loading,
          extraMaskHeight = _this$props.extraMaskHeight,
          columnDefs = _this$props.columnDefs,
          rowData = _this$props.rowData,
          defaultColDef = _this$props.defaultColDef;
      var _this$state = this.state,
          top = _this$state.top,
          left = _this$state.left;
      var hidePagination = typeof pagination === 'boolean' && pagination == false; // 不使用分页

      var gridBodyHeight = hidePagination ? "100%" : "calc(100% - 34px)"; // 隐藏分页则100% 使用分页则减分页高度

      var loadingHeight = typeof extraMaskHeight === 'number' ? "calc(100% + ".concat(extraMaskHeight, "px)") : "100%"; // 隐藏分页、loading遮罩增加extraHeight
      // 添加行在总数据中的index

      if (rowData) {
        var page = pagination.page,
            pageSize = pagination.pageSize,
            total = pagination.total;

        if (page * pageSize < total) {
          rowData.forEach(function (item, index) {
            var totalIndex = pageSize * (page - 1) + index + 1;
            item['rowNum'] = totalIndex < 10 ? "0" + totalIndex : totalIndex;
          });
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "ag-theme-balham ag-grid-block",
        id: "ag-grid-bolck",
        style: {
          width: '100%',
          height: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        style: {
          height: gridBodyHeight
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(ag_grid_react_main__WEBPACK_IMPORTED_MODULE_17__["AgGridReact"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, gridOptions, this.props, {
        // 自定义props修改默认配置(对外暴露)
        defaultColDef: _objectSpread({}, gridDefaultColDef, {}, defaultColDef) // ag-grid默认列配置
        // rowData = {rowData}                              // 表格行数据
        // onGridReady={onGridReady}                        // 监听表格加载完毕
        // columnDefs={columnDefs}                             // 列配置细节
        // getRowHeight={this.getRowHeight}                 // 行高设置
        // context={context}                                // react组件的this
        // frameworkComponents={frameworkComponents}        // 注册react组件
        ,
        pagination: false // 完全屏蔽ag-grid的分页
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }))), hidePagination ? '' : react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_pagination__WEBPACK_IMPORTED_MODULE_19__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, pagination, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_grid_loading__WEBPACK_IMPORTED_MODULE_20__["default"], {
        loading: loading,
        style: {
          height: loadingHeight
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      })), contextMenu && react__WEBPACK_IMPORTED_MODULE_15___default.a.cloneElement(contextMenu, {
        onClick: this.onGridContextMenuItemClick,
        mode: "vertical",
        id: 'ag-grid-context-menu',
        className: "ag-grid-context-menu",
        style: {
          top: top,
          left: left
        }
      }));
    }
  }]);

  return AgGrid;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]); // props校验


AgGrid.propTypes = {
  rowData: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.array,
  onGridReady: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.func,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool,
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.bool]),
  extraHeight: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number // 扩展loading遮盖高度

}; // 默认属性

AgGrid.defaultProps = {
  rowData: null,
  loading: false
};
/* harmony default export */ __webpack_exports__["default"] = (AgGrid);

/***/ }),

/***/ "./components/ag-grid/locales/zh-CN.js":
/*!*********************************************!*\
  !*** ./components/ag-grid/locales/zh-CN.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Created by csz on 2019/7/1
 */
// 中文
/* harmony default export */ __webpack_exports__["default"] = ({
  // 过滤菜单面板
  page: "页",
  more: "更多",
  to: "到",
  of: "总数",
  next: "下一页",
  last: "上一页",
  first: "首页",
  previous: "上一页",
  loadingOoo: "加载中...",
  // 过滤设置
  selectAll: "查询全部",
  searchOoo: "查询...",
  blanks: "空白",
  // 数字过滤和文本过滤
  filterOoo: "过滤...",
  applyFilter: "应用过滤",
  equals: "相等",
  notEqual: "不相等",
  // 数字过滤
  lessThan: "小于",
  greaterThan: "大于",
  lessThanOrEqual: "小于等于",
  greaterThanOrEqual: "大于等于",
  inRange: "范围",
  // 文本过滤
  contains: "包含",
  notContains: "不包含",
  startsWith: "开始于",
  endsWith: "结束于",
  // 过滤条件
  andCondition: '并且',
  orCondition: '或者',
  // 默认组列的标题
  group: "组",
  // 工具面板
  columns: "列",
  filters: "筛选",
  rowGroupColumns: "laPivot Cols",
  rowGroupColumnsEmptyMessage: "la drag cols to group",
  valueColumns: "laValue Cols",
  pivotMode: "laPivot-Mode",
  groups: "laGroups",
  values: "值",
  pivots: "laPivots",
  valueColumnsEmptyMessage: "la drag cols to aggregate",
  pivotColumnsEmptyMessage: "la drag here to pivot",
  toolPanelButton: "la tool panel",
  // 其他
  noRowsToShow: "数据为空",
  // 企业菜单
  pinColumn: "laPin Column",
  valueAggregation: "laValue Agg",
  autosizeThiscolumn: "laAutosize Diz",
  autosizeAllColumns: "laAutsoie em All",
  groupBy: "排序",
  ungroupBy: "不排序",
  resetColumns: "重置列",
  expandAll: "展开全部",
  collapseAll: "关闭",
  toolPanel: "工具面板",
  export: "导出",
  csvExport: "导出为CSV格式文件",
  excelExport: "导出到Excel",
  excelXmlExport: '导出到XML',
  // 企业菜单 pinning
  pinLeft: "laPin &lt;&lt;",
  pinRight: "laPin &gt;&gt;",
  noPin: "laDontPin &lt;&gt;",
  // 企业菜单聚合和状态栏
  sum: "总数",
  min: "最小值",
  max: "最大值",
  none: "无",
  count: "总",
  average: "平均值",
  filteredRows: 'laFiltered',
  selectedRows: 'laSelected',
  totalRows: 'laTotal Rows',
  totalAndFilteredRows: 'laRows',
  // 标准菜单
  copy: "复制",
  copyWithHeaders: "携带表头复制",
  ctrlC: "ctrl + C",
  paste: "粘贴",
  ctrlV: "ctrl + V"
});

/***/ }),

/***/ "./components/pagination/antd-pagination.js":
/*!**************************************************!*\
  !*** ./components/pagination/antd-pagination.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/index */ "antd/lib/index");
/* harmony import */ var antd_lib_index__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.less */ "./components/pagination/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "E:\\project\\react\\ssr\\create-next-app\\create-next-app\\components\\pagination\\antd-pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var Pagination =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Pagination, _Component);

  function Pagination(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Pagination);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Pagination).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onPageSizeChange", function (pageSize) {
      var _this$props = _this.props,
          onPageSizeChange = _this$props.onPageSizeChange,
          total = _this$props.total;
      var page = _this.state.page;

      if (total && pageSize * page > total) {
        page = Math.ceil(total / pageSize);
      }

      _this.setState({
        page: page,
        pageSize: pageSize
      });

      if (onPageSizeChange) {
        onPageSizeChange(page, pageSize);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onPrev", function () {
      var _this$state = _this.state,
          page = _this$state.page,
          pageSize = _this$state.pageSize;
      var onPageChange = _this.props.onPageChange;

      if (page <= 1) {
        antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["message"].warning('已是第一页！');
        return;
      }

      _this.setState({
        page: page - 1
      }, function () {
        if (onPageChange) {
          onPageChange(page - 1, pageSize);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onNext", function () {
      var _this$state2 = _this.state,
          page = _this$state2.page,
          pageSize = _this$state2.pageSize;
      var _this$props2 = _this.props,
          total = _this$props2.total,
          onPageChange = _this$props2.onPageChange;
      var totalPage = Math.ceil(total / pageSize);

      if (totalPage && page == totalPage) {
        antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["message"].warning('已是最后一页！');
        return;
      }

      _this.setState({
        page: page + 1
      }, function () {
        if (onPageChange) {
          onPageChange(page + 1, pageSize);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFirst", function () {
      var _this$state3 = _this.state,
          page = _this$state3.page,
          pageSize = _this$state3.pageSize;
      var onPageChange = _this.props.onPageChange;

      if (page == 1) {
        antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["message"].warning('已是第一页！');
        return;
      }

      _this.setState({
        page: 1
      }, function () {
        if (onPageChange) {
          onPageChange(1, pageSize);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onLast", function () {
      var _this$state4 = _this.state,
          page = _this$state4.page,
          pageSize = _this$state4.pageSize;
      var _this$props3 = _this.props,
          total = _this$props3.total,
          onPageChange = _this$props3.onPageChange; // 检验当前是否为最后一页

      var totalPage = Math.ceil(total / pageSize);

      if (totalPage && page == totalPage) {
        antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["message"].warning('已是最后一页！');
        return;
      }

      var pageLast = Math.ceil(total / pageSize);

      _this.setState({
        page: pageLast
      }, function () {
        if (onPageChange) {
          onPageChange(pageLast, pageSize);
        }
      });
    });

    _this.state = {
      page: props.page,
      // 显示当前在第几页
      pageSizeOptions: props.pageSizeOptions,
      // 可选的每页大小数组
      pageSize: props.pageSize || props.pageSizeOptions[0],
      // 每页大小
      total: props.total // 真实总条数

    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pagination, [{
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
          page = _this$state5.page,
          pageSizeOptions = _this$state5.pageSizeOptions,
          pageSize = _this$state5.pageSize;
      var total = this.props.total;
      var totalPage = Math.ceil(total / pageSize);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "antd-pagination",
        style: {
          textAlign: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "\u6BCF\u9875\u8BB0\u5F55\u6761\u6570"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        size: "small",
        style: {
          width: 55,
          marginLeft: 10
        },
        value: pageSize,
        onChange: this.onPageSizeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, pageSizeOptions.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Select"].Option, {
          key: i,
          value: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, item);
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page-total-page",
        style: {
          marginLeft: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "\u5171", total, "\u6761"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-middle",
        style: {
          marginLeft: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, page, "/", totalPage, "\u9875")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page-jump-to",
        style: {
          marginLeft: 20
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "step-backward",
        title: "\u7B2C\u4E00\u9875",
        onClick: this.onFirst,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "caret-left",
        title: "\u4E0A\u4E00\u9875",
        onClick: this.onPrev,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "caret-right",
        title: "\u4E0B\u4E00\u9875",
        onClick: this.onNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "step-forward",
        title: "\u6700\u540E\u9875",
        onClick: this.onLast,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      })));
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Pagination, "defaultProps", {
  page: 1,
  total: null,
  pageSizeOptions: [50, 100, 200, 500]
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Pagination, "propTypes", {
  page: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  total: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  onPageSizeChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/pagination/cerp-pagination.js":
/*!**************************************************!*\
  !*** ./components/pagination/cerp-pagination.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/index */ "antd/lib/index");
/* harmony import */ var antd_lib_index__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.less */ "./components/pagination/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "E:\\project\\react\\ssr\\create-next-app\\create-next-app\\components\\pagination\\cerp-pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var Pagination =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Pagination, _Component);

  function Pagination(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Pagination);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Pagination).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onPageSizeChange", function (pageSize) {
      var _this$props = _this.props,
          onPageSizeChange = _this$props.onPageSizeChange,
          total = _this$props.total,
          falseTotal = _this$props.falseTotal;
      var page = _this.state.page;

      if (total && total != falseTotal && pageSize * page > total) {
        page = Math.ceil(total / pageSize);
      }

      _this.setState({
        page: page,
        pageSize: pageSize
      }, function () {
        if (onPageSizeChange) {
          onPageSizeChange(page, pageSize);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onPrev", function () {
      var _this$state = _this.state,
          page = _this$state.page,
          pageSize = _this$state.pageSize;
      var onPageChange = _this.props.onPageChange;

      if (page <= 1) {
        antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["message"].warning('已是第一页！');
        return;
      }

      _this.setState({
        page: page - 1
      }, function () {
        if (onPageChange) {
          onPageChange(page - 1, pageSize);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onNext", function () {
      var _this$state2 = _this.state,
          page = _this$state2.page,
          pageSize = _this$state2.pageSize;
      var _this$props2 = _this.props,
          total = _this$props2.total,
          onPageChange = _this$props2.onPageChange;
      var totalPage = Math.ceil(total / pageSize);

      if (totalPage && page == totalPage) {
        antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["message"].warning('已是最后一页！');
        return;
      }

      _this.setState({
        page: page + 1
      }, function () {
        if (onPageChange) {
          onPageChange(page + 1, pageSize);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onFirst", function () {
      var _this$state3 = _this.state,
          page = _this$state3.page,
          pageSize = _this$state3.pageSize;
      var onPageChange = _this.props.onPageChange;

      if (page == 1) {
        antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["message"].warning('已是第一页！');
        return;
      }

      _this.setState({
        page: 1
      }, function () {
        if (onPageChange) {
          onPageChange(1, pageSize);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onLast", function () {
      var _this$state4 = _this.state,
          page = _this$state4.page,
          pageSize = _this$state4.pageSize;
      var _this$props3 = _this.props,
          total = _this$props3.total,
          onPageChange = _this$props3.onPageChange,
          falseTotal = _this$props3.falseTotal; // 检验当前是否为最后一页

      var totalPage = Math.ceil(total / pageSize);

      if (totalPage && page == totalPage) {
        antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["message"].warning('已是最后一页！');
        return;
      } // 跳至最后页 使用falseTotal作为总页数 但是不需要将总页数显示


      var pageLast = Math.ceil(falseTotal / pageSize);

      if (onPageChange) {
        onPageChange(pageLast, pageSize);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onInputPage", function (e) {
      e.preventDefault();
      var page = e.currentTarget.value;

      if (page >= 0) {
        _this.setState({
          page: page
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onPagePressEnter", function (e) {
      e.preventDefault();
      var pageSize = _this.state.pageSize;
      var _this$props4 = _this.props,
          total = _this$props4.total,
          onPageChange = _this$props4.onPageChange,
          falseTotal = _this$props4.falseTotal;
      var totalPage = Math.ceil(total / pageSize);
      var page = e.currentTarget.value - 0;

      if (totalPage && total != falseTotal) {
        if (page > totalPage) {
          _this.setState({
            page: totalPage
          }, function () {
            if (onPageChange) {
              onPageChange(totalPage, pageSize);
            }
          });

          antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["message"].warning("已设置为最大页数");
          return;
        } else if (page == totalPage) {
          return;
        } else if (page < totalPage) {
          if (page <= 1) {
            page = 1;
          }
        }
      }

      if (page) {
        _this.setState({
          page: page
        }, function () {
          if (onPageChange) {
            onPageChange(page, pageSize);
          }
        });
      } else {
        _this.setState({
          page: ''
        });

        antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["message"].warning("请输入正确的页数!");
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onRefreshTotal", function () {
      var refreshTotal = _this.props.refreshTotal;

      if (refreshTotal) {
        refreshTotal().then(function (total) {
          if (total) {
            _this.setState({
              total: total
            });
          }
        });
      }
    });

    _this.state = {
      page: props.page,
      // 显示当前在第几页
      pageSizeOptions: props.pageSizeOptions,
      // 可选的每页大小数组
      pageSize: props.pageSize || props.pageSizeOptions[0],
      // 每页大小
      total: props.total // 真实总条数

    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Pagination, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      var total = nextProps.total,
          falseTotal = nextProps.falseTotal,
          onPageChange = nextProps.onPageChange,
          pageSize = nextProps.pageSize,
          page = nextProps.page; //（如果不是最后页 total始终为1000000）（如果当前页是最后页 total为真实总条数）

      if (this.props.page == page && this.props.pageSize == pageSize) return false;

      if (total && total != falseTotal) {
        var _page = Math.ceil(total / this.state.pageSize);

        this.setState({
          page: _page
        }, function () {
          if (onPageChange) {
            onPageChange(_page, pageSize);
          }
        });
      }
    } // 改变每页大小 理论上当前页不变 但是如果 pageSize*page>total 则需要重新计算当前页 Select回调  （重点）

  }, {
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
          page = _this$state5.page,
          pageSizeOptions = _this$state5.pageSizeOptions,
          pageSize = _this$state5.pageSize,
          total = _this$state5.total;
      var trueTotalPage = total ? Math.ceil(total / pageSize) : null;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "erp-pagination",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        size: "small",
        style: {
          width: 100
        },
        value: pageSize,
        onChange: this.onPageSizeChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, pageSizeOptions.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Select"].Option, {
          key: i,
          value: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, item + '条/页');
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page-jump-to",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "step-backward",
        title: "\u7B2C\u4E00\u9875",
        onClick: this.onFirst,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "caret-left",
        title: "\u4E0A\u4E00\u9875",
        onClick: this.onPrev,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "\u7B2C ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Input"] // ref={input => this.pageInput = input} />
      , {
        size: "small",
        style: {
          width: '50px'
        },
        onChange: this.onInputPage,
        onPressEnter: this.onPagePressEnter,
        title: page,
        value: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), " \u9875"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "caret-right",
        title: "\u4E0B\u4E00\u9875",
        onClick: this.onNext,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "step-forward",
        title: "\u6700\u540E\u9875",
        onClick: this.onLast,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page-total",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "\u5171"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        className: "text-middle",
        size: "small",
        addonAfter: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          className: "redo-btn",
          size: "small",
          type: "redo",
          onClick: this.onRefreshTotal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }),
        title: total,
        style: {
          width: 80
        },
        value: total,
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "\u6761\u8BB0\u5F55"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page-total-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, "\u5171"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_index__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        className: "text-middle",
        size: "small",
        style: {
          width: '50px'
        },
        title: trueTotalPage,
        value: trueTotalPage,
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-middle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "\u9875"))));
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Pagination, "defaultProps", {
  page: 1,
  total: null,
  falseTotal: 1000000,
  pageSizeOptions: [50, 100, 200, 500]
});

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Pagination, "propTypes", {
  page: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  total: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  falseTotal: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.number,
  onPageSizeChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  refreshTotal: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/pagination/index.js":
/*!****************************************!*\
  !*** ./components/pagination/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cerp_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cerp-pagination */ "./components/pagination/cerp-pagination.js");
/* harmony import */ var _antd_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./antd-pagination */ "./components/pagination/antd-pagination.js");






var _jsxFileName = "E:\\project\\react\\ssr\\create-next-app\\create-next-app\\components\\pagination\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Pagination =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Pagination, _Component);

  function Pagination(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Pagination);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Pagination).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Pagination, [{
    key: "render",
    value: function render() {
      var type = this.props.type;
      return type == 'cerp' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_cerp_pagination__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_antd_pagination__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./components/pagination/index.less":
/*!******************************************!*\
  !*** ./components/pagination/index.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=0.js.map
webpackHotUpdate(6,{

/***/ 1262:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/Administrator/Desktop/mzjb/components/DBTable/InnerTable.js: Unexpected token (354:6)\n\n\u001b[0m \u001b[90m 352 | \u001b[39m      \u001b[90m// 跟InnerForm中的filterQueryObj方法很相似\u001b[39m\n \u001b[90m 353 | \u001b[39m      \u001b[36mif\u001b[39m (key \u001b[33m===\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprimaryKey \u001b[33m&&\u001b[39m \u001b[36mtypeof\u001b[39m oldObj[key] \u001b[33m===\u001b[39m \u001b[32m'string'\u001b[39m) \n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 354 | \u001b[39m      } \u001b[36melse\u001b[39m \u001b[36mif\u001b[39m (oldObj[key] \u001b[36minstanceof\u001b[39m \u001b[33mDate\u001b[39m) {\n \u001b[90m     | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 355 | \u001b[39m        newObj[key] \u001b[33m=\u001b[39m oldObj[key]\u001b[33m.\u001b[39mformat(\u001b[32m'yyyy-MM-dd HH:mm:ss'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 356 | \u001b[39m      } \u001b[36melse\u001b[39m \u001b[36mif\u001b[39m (moment\u001b[33m.\u001b[39misMoment(oldObj[key])) {  \u001b[90m// 处理moment对象\u001b[39m\n \u001b[90m 357 | \u001b[39m        newObj[key] \u001b[33m=\u001b[39m oldObj[key]\u001b[33m.\u001b[39mformat(\u001b[32m'YYYY-MM-DD HH:mm:ss'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 1263:
false,

/***/ 1267:
false,

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(17);
var factory = __webpack_require__(767);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_util_es_Children_mapSelf__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__month_MonthPanel__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__year_YearPanel__ = __webpack_require__(871);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__decade_DecadePanel__ = __webpack_require__(872);








function goMonth(direction) {
  var next = this.props.value.clone();
  next.add(direction, 'months');
  this.props.onValueChange(next);
}

function goYear(direction) {
  var next = this.props.value.clone();
  next.add(direction, 'years');
  this.props.onValueChange(next);
}

function showIf(condition, el) {
  return condition ? el : null;
}

var CalendarHeader = __WEBPACK_IMPORTED_MODULE_1_create_react_class___default()({
  displayName: 'CalendarHeader',

  propTypes: {
    prefixCls: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
    onValueChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    showTimePicker: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    onPanelChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    locale: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
    enablePrev: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
    enableNext: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
    disabledMonth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      enableNext: 1,
      enablePrev: 1,
      onPanelChange: function onPanelChange() {},
      onValueChange: function onValueChange() {}
    };
  },
  getInitialState: function getInitialState() {
    this.nextMonth = goMonth.bind(this, 1);
    this.previousMonth = goMonth.bind(this, -1);
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    return { yearPanelReferer: null };
  },
  onMonthSelect: function onMonthSelect(value) {
    this.props.onPanelChange(value, 'date');
    if (this.props.onMonthSelect) {
      this.props.onMonthSelect(value);
    } else {
      this.props.onValueChange(value);
    }
  },
  onYearSelect: function onYearSelect(value) {
    var referer = this.state.yearPanelReferer;
    this.setState({ yearPanelReferer: null });
    this.props.onPanelChange(value, referer);
    this.props.onValueChange(value);
  },
  onDecadeSelect: function onDecadeSelect(value) {
    this.props.onPanelChange(value, 'year');
    this.props.onValueChange(value);
  },
  monthYearElement: function monthYearElement(showTimePicker) {
    var _this = this;

    var props = this.props;
    var prefixCls = props.prefixCls;
    var locale = props.locale;
    var value = props.value;
    var localeData = value.localeData();
    var monthBeforeYear = locale.monthBeforeYear;
    var selectClassName = prefixCls + '-' + (monthBeforeYear ? 'my-select' : 'ym-select');
    var year = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      {
        className: prefixCls + '-year-select',
        role: 'button',
        onClick: showTimePicker ? null : function () {
          return _this.showYearPanel('date');
        },
        title: locale.yearSelect
      },
      value.format(locale.yearFormat)
    );
    var month = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      {
        className: prefixCls + '-month-select',
        role: 'button',
        onClick: showTimePicker ? null : this.showMonthPanel,
        title: locale.monthSelect
      },
      localeData.monthsShort(value)
    );
    var day = void 0;
    if (showTimePicker) {
      day = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        {
          className: prefixCls + '-day-select',
          role: 'button'
        },
        value.format(locale.dayFormat)
      );
    }
    var my = [];
    if (monthBeforeYear) {
      my = [month, day, year];
    } else {
      my = [year, month, day];
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { className: selectClassName },
      Object(__WEBPACK_IMPORTED_MODULE_3_rc_util_es_Children_mapSelf__["a" /* default */])(my)
    );
  },
  showMonthPanel: function showMonthPanel() {
    // null means that users' interaction doesn't change value
    this.props.onPanelChange(null, 'month');
  },
  showYearPanel: function showYearPanel(referer) {
    this.setState({ yearPanelReferer: referer });
    this.props.onPanelChange(null, 'year');
  },
  showDecadePanel: function showDecadePanel() {
    this.props.onPanelChange(null, 'decade');
  },
  render: function render() {
    var _this2 = this;

    var props = this.props;
    var prefixCls = props.prefixCls,
        locale = props.locale,
        mode = props.mode,
        value = props.value,
        showTimePicker = props.showTimePicker,
        enableNext = props.enableNext,
        enablePrev = props.enablePrev,
        disabledMonth = props.disabledMonth;


    var panel = null;
    if (mode === 'month') {
      panel = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__month_MonthPanel__["a" /* default */], {
        locale: locale,
        defaultValue: value,
        rootPrefixCls: prefixCls,
        onSelect: this.onMonthSelect,
        onYearPanelShow: function onYearPanelShow() {
          return _this2.showYearPanel('month');
        },
        disabledDate: disabledMonth,
        cellRender: props.monthCellRender,
        contentRender: props.monthCellContentRender
      });
    }
    if (mode === 'year') {
      panel = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__year_YearPanel__["a" /* default */], {
        locale: locale,
        defaultValue: value,
        rootPrefixCls: prefixCls,
        onSelect: this.onYearSelect,
        onDecadePanelShow: this.showDecadePanel
      });
    }
    if (mode === 'decade') {
      panel = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__decade_DecadePanel__["a" /* default */], {
        locale: locale,
        defaultValue: value,
        rootPrefixCls: prefixCls,
        onSelect: this.onDecadeSelect
      });
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: prefixCls + '-header' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { position: 'relative' } },
        showIf(enablePrev && !showTimePicker, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', {
          className: prefixCls + '-prev-year-btn',
          role: 'button',
          onClick: this.previousYear,
          title: locale.previousYear
        })),
        showIf(enablePrev && !showTimePicker, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', {
          className: prefixCls + '-prev-month-btn',
          role: 'button',
          onClick: this.previousMonth,
          title: locale.previousMonth
        })),
        this.monthYearElement(showTimePicker),
        showIf(enableNext && !showTimePicker, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', {
          className: prefixCls + '-next-month-btn',
          onClick: this.nextMonth,
          title: locale.nextMonth
        })),
        showIf(enableNext && !showTimePicker, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', {
          className: prefixCls + '-next-year-btn',
          onClick: this.nextYear,
          title: locale.nextYear
        }))
      ),
      panel
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (CalendarHeader);

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_util_es_createChainedFunction__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__picker_placements__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_trigger__ = __webpack_require__(419);









function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
  displayName: 'Picker',

  propTypes: {
    animation: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string]),
    disabled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    transitionName: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    onChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onOpenChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    getCalendarContainer: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    calendar: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element,
    style: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
    open: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    defaultOpen: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    prefixCls: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    placement: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array]),
    defaultValue: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array]),
    align: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-calendar-picker',
      style: {},
      align: {},
      placement: 'bottomLeft',
      defaultOpen: false,
      onChange: noop,
      onOpenChange: noop
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var open = void 0;
    if ('open' in props) {
      open = props.open;
    } else {
      open = props.defaultOpen;
    }
    var value = props.value || props.defaultValue;
    this.saveCalendarRef = refFn.bind(this, 'calendarInstance');
    return {
      open: open,
      value: value
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value,
        open = nextProps.open;

    if ('value' in nextProps) {
      this.setState({
        value: value
      });
    }
    if (open !== undefined) {
      this.setState({
        open: open
      });
    }
  },
  componentDidUpdate: function componentDidUpdate(_, prevState) {
    if (!prevState.open && this.state.open) {
      // setTimeout is for making sure saveCalendarRef happen before focusCalendar
      this.focusTimeout = setTimeout(this.focusCalendar, 0, this);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.focusTimeout);
  },
  onCalendarKeyDown: function onCalendarKeyDown(event) {
    if (event.keyCode === __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].ESC) {
      event.stopPropagation();
      this.close(this.focus);
    }
  },
  onCalendarSelect: function onCalendarSelect(value) {
    var cause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var props = this.props;
    if (!('value' in props)) {
      this.setState({
        value: value
      });
    }
    if (cause.source === 'keyboard' || !props.calendar.props.timePicker && cause.source !== 'dateInput' || cause.source === 'todayButton') {
      this.close(this.focus);
    }
    props.onChange(value);
  },
  onKeyDown: function onKeyDown(event) {
    if (event.keyCode === __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].DOWN && !this.state.open) {
      this.open();
      event.preventDefault();
    }
  },
  onCalendarOk: function onCalendarOk() {
    this.close(this.focus);
  },
  onCalendarClear: function onCalendarClear() {
    this.close(this.focus);
  },
  onVisibleChange: function onVisibleChange(open) {
    this.setOpen(open);
  },
  getCalendarElement: function getCalendarElement() {
    var props = this.props;
    var state = this.state;
    var calendarProps = props.calendar.props;
    var value = state.value;

    var defaultValue = value;
    var extraProps = {
      ref: this.saveCalendarRef,
      defaultValue: defaultValue || calendarProps.defaultValue,
      selectedValue: value,
      onKeyDown: this.onCalendarKeyDown,
      onOk: Object(__WEBPACK_IMPORTED_MODULE_4_rc_util_es_createChainedFunction__["a" /* default */])(calendarProps.onOk, this.onCalendarOk),
      onSelect: Object(__WEBPACK_IMPORTED_MODULE_4_rc_util_es_createChainedFunction__["a" /* default */])(calendarProps.onSelect, this.onCalendarSelect),
      onClear: Object(__WEBPACK_IMPORTED_MODULE_4_rc_util_es_createChainedFunction__["a" /* default */])(calendarProps.onClear, this.onCalendarClear)
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(props.calendar, extraProps);
  },
  setOpen: function setOpen(open, callback) {
    var onOpenChange = this.props.onOpenChange;

    if (this.state.open !== open) {
      if (!('open' in this.props)) {
        this.setState({
          open: open
        }, callback);
      }
      onOpenChange(open);
    }
  },
  open: function open(callback) {
    this.setOpen(true, callback);
  },
  close: function close(callback) {
    this.setOpen(false, callback);
  },
  focus: function focus() {
    if (!this.state.open) {
      __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this).focus();
    }
  },
  focusCalendar: function focusCalendar() {
    if (this.state.open && !!this.calendarInstance) {
      this.calendarInstance.focus();
    }
  },
  render: function render() {
    var props = this.props;
    var prefixCls = props.prefixCls,
        placement = props.placement,
        style = props.style,
        getCalendarContainer = props.getCalendarContainer,
        align = props.align,
        animation = props.animation,
        disabled = props.disabled,
        dropdownClassName = props.dropdownClassName,
        transitionName = props.transitionName,
        children = props.children;

    var state = this.state;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_7_rc_trigger__["a" /* default */],
      {
        popup: this.getCalendarElement(),
        popupAlign: align,
        builtinPlacements: __WEBPACK_IMPORTED_MODULE_6__picker_placements__["a" /* default */],
        popupPlacement: placement,
        action: disabled && !state.open ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getCalendarContainer,
        popupStyle: style,
        popupAnimation: animation,
        popupTransitionName: transitionName,
        popupVisible: state.open,
        onPopupVisibleChange: this.onVisibleChange,
        prefixCls: prefixCls,
        popupClassName: dropdownClassName
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children(state, props), { onKeyDown: this.onKeyDown })
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Picker);

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(433);









var TabPane = __WEBPACK_IMPORTED_MODULE_5_create_react_class___default()({
  displayName: 'TabPane',
  propTypes: {
    className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    active: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    destroyInactiveTabPane: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    forceRender: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    placeholder: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node
  },
  getDefaultProps: function getDefaultProps() {
    return { placeholder: null };
  },
  render: function render() {
    var _classnames;

    var _props = this.props,
        className = _props.className,
        destroyInactiveTabPane = _props.destroyInactiveTabPane,
        active = _props.active,
        forceRender = _props.forceRender,
        rootPrefixCls = _props.rootPrefixCls,
        style = _props.style,
        children = _props.children,
        placeholder = _props.placeholder,
        restProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'destroyInactiveTabPane', 'active', 'forceRender', 'rootPrefixCls', 'style', 'children', 'placeholder']);

    this._isActived = this._isActived || active;
    var prefixCls = rootPrefixCls + '-tabpane';
    var cls = __WEBPACK_IMPORTED_MODULE_6_classnames___default()((_classnames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls, 1), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls + '-inactive', !active), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls + '-active', active), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, className, className), _classnames));
    var isRender = destroyInactiveTabPane ? active : this._isActived;
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'div',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        style: style,
        role: 'tabpanel',
        'aria-hidden': active ? 'false' : 'true',
        className: cls
      }, Object(__WEBPACK_IMPORTED_MODULE_7__utils__["b" /* getDataAttr */])(restProps)),
      isRender || forceRender ? children : placeholder
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (TabPane);

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(433);








var TabContent = __WEBPACK_IMPORTED_MODULE_3_create_react_class___default()({
  displayName: 'TabContent',
  propTypes: {
    animated: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    animatedWithMargin: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    prefixCls: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    activeKey: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    tabBarPosition: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      animated: true
    };
  },
  getTabPanes: function getTabPanes() {
    var props = this.props;
    var activeKey = props.activeKey;
    var children = props.children;
    var newChildren = [];

    __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      var key = child.key;
      var active = activeKey === key;
      newChildren.push(__WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(child, {
        active: active,
        destroyInactiveTabPane: props.destroyInactiveTabPane,
        rootPrefixCls: props.prefixCls
      }));
    });

    return newChildren;
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var prefixCls = props.prefixCls,
        children = props.children,
        activeKey = props.activeKey,
        tabBarPosition = props.tabBarPosition,
        animated = props.animated,
        animatedWithMargin = props.animatedWithMargin;
    var style = props.style;

    var classes = __WEBPACK_IMPORTED_MODULE_5_classnames___default()((_classnames = {}, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, prefixCls + '-content', true), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames));
    if (animated) {
      var activeIndex = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* getActiveIndex */])(children, activeKey);
      if (activeIndex !== -1) {
        var animatedStyle = animatedWithMargin ? Object(__WEBPACK_IMPORTED_MODULE_6__utils__["c" /* getMarginStyle */])(activeIndex, tabBarPosition) : Object(__WEBPACK_IMPORTED_MODULE_6__utils__["e" /* getTransformPropValue */])(Object(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* getTransformByIndex */])(activeIndex, tabBarPosition));
        style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, animatedStyle);
      } else {
        style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, style, {
          display: 'none'
        });
      }
    }
    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      'div',
      {
        className: classes,
        style: style
      },
      this.getTabPanes()
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (TabContent);

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_util_es_Children_mapSelf__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_TodayButton__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendar_OkButton__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calendar_TimePickerButton__ = __webpack_require__(668);











var CalendarFooter = __WEBPACK_IMPORTED_MODULE_3_create_react_class___default()({
  displayName: 'CalendarFooter',

  propTypes: {
    prefixCls: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    showDateInput: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    disabledTime: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    timePicker: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.element,
    selectedValue: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    showOk: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    onSelect: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    value: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    renderFooter: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    defaultValue: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object
  },

  onSelect: function onSelect(value) {
    this.props.onSelect(value);
  },
  getRootDOMNode: function getRootDOMNode() {
    return __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this);
  },
  render: function render() {
    var props = this.props;
    var value = props.value,
        prefixCls = props.prefixCls,
        showOk = props.showOk,
        timePicker = props.timePicker,
        renderFooter = props.renderFooter;

    var footerEl = null;
    var extraFooter = renderFooter();
    if (props.showToday || timePicker || extraFooter) {
      var _cx;

      var nowEl = void 0;
      if (props.showToday) {
        nowEl = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__calendar_TodayButton__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { value: value }));
      }
      var okBtn = void 0;
      if (showOk === true || showOk !== false && !!props.timePicker) {
        okBtn = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__calendar_OkButton__["a" /* default */], props);
      }
      var timePickerBtn = void 0;
      if (!!props.timePicker) {
        timePickerBtn = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__calendar_TimePickerButton__["a" /* default */], props);
      }

      var footerBtn = void 0;
      if (nowEl || timePickerBtn || okBtn) {
        footerBtn = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'span',
          { className: prefixCls + '-footer-btn' },
          Object(__WEBPACK_IMPORTED_MODULE_5_rc_util_es_Children_mapSelf__["a" /* default */])([nowEl, timePickerBtn, okBtn])
        );
      }
      var cls = __WEBPACK_IMPORTED_MODULE_6_classnames___default()((_cx = {}, _cx[prefixCls + '-footer'] = true, _cx[prefixCls + '-footer-show-ok'] = okBtn, _cx));
      footerEl = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: cls },
        extraFooter,
        footerBtn
      );
    }
    return footerEl;
  }
});

/* harmony default export */ __webpack_exports__["a"] = (CalendarFooter);

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);






var DateInput = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
  displayName: 'DateInput',

  propTypes: {
    prefixCls: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    timePicker: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
    value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
    disabledTime: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    format: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    locale: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
    disabledDate: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onClear: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    placeholder: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    onSelect: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    selectedValue: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
  },

  getInitialState: function getInitialState() {
    var selectedValue = this.props.selectedValue;
    return {
      str: selectedValue && selectedValue.format(this.props.format) || '',
      invalid: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.cachedSelectionStart = this.dateInputInstance.selectionStart;
    this.cachedSelectionEnd = this.dateInputInstance.selectionEnd;
    // when popup show, click body will call this, bug!
    var selectedValue = nextProps.selectedValue;
    this.setState({
      str: selectedValue && selectedValue.format(nextProps.format) || '',
      invalid: false
    });
  },
  componentDidUpdate: function componentDidUpdate() {
    if (!this.state.invalid) {
      this.dateInputInstance.setSelectionRange(this.cachedSelectionStart, this.cachedSelectionEnd);
    }
  },
  onInputChange: function onInputChange(event) {
    var str = event.target.value;
    this.setState({
      str: str
    });
    var value = void 0;
    var _props = this.props,
        disabledDate = _props.disabledDate,
        format = _props.format,
        onChange = _props.onChange;

    if (str) {
      var parsed = __WEBPACK_IMPORTED_MODULE_4_moment___default()(str, format, true);
      if (!parsed.isValid()) {
        this.setState({
          invalid: true
        });
        return;
      }
      value = this.props.value.clone();
      value.year(parsed.year()).month(parsed.month()).date(parsed.date()).hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

      if (value && (!disabledDate || !disabledDate(value))) {
        var originalValue = this.props.selectedValue;
        if (originalValue && value) {
          if (!originalValue.isSame(value)) {
            onChange(value);
          }
        } else if (originalValue !== value) {
          onChange(value);
        }
      } else {
        this.setState({
          invalid: true
        });
        return;
      }
    } else {
      onChange(null);
    }
    this.setState({
      invalid: false
    });
  },
  onClear: function onClear() {
    this.setState({
      str: ''
    });
    this.props.onClear(null);
  },
  getRootDOMNode: function getRootDOMNode() {
    return __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this);
  },
  focus: function focus() {
    if (this.dateInputInstance) {
      this.dateInputInstance.focus();
    }
  },
  saveDateInput: function saveDateInput(dateInput) {
    this.dateInputInstance = dateInput;
  },
  render: function render() {
    var props = this.props;
    var _state = this.state,
        invalid = _state.invalid,
        str = _state.str;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        placeholder = props.placeholder;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: prefixCls + '-date-input-wrap' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          ref: this.saveDateInput,
          className: prefixCls + '-input ' + invalidClass,
          value: str,
          disabled: props.disabled,
          placeholder: placeholder,
          onChange: this.onInputChange
        })
      ),
      props.showClear ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', {
        className: prefixCls + '-clear-btn',
        role: 'button',
        title: locale.clear,
        onClick: this.onClear
      }) : null
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (DateInput);

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_util_es_KeyCode__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_CalendarHeader__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_CalendarFooter__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixin_CalendarMixin__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixin_CommonMixin__ = __webpack_require__(453);









var MonthCalendar = __WEBPACK_IMPORTED_MODULE_1_create_react_class___default()({
  displayName: 'MonthCalendar',

  propTypes: {
    monthCellRender: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    dateCellRender: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_7__mixin_CommonMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixin_CalendarMixin__["a" /* default */]],

  getInitialState: function getInitialState() {
    return { mode: 'month' };
  },
  onKeyDown: function onKeyDown(event) {
    var keyCode = event.keyCode;
    var ctrlKey = event.ctrlKey || event.metaKey;
    var stateValue = this.state.value;
    var disabledDate = this.props.disabledDate;

    var value = stateValue;
    switch (keyCode) {
      case __WEBPACK_IMPORTED_MODULE_3_rc_util_es_KeyCode__["a" /* default */].DOWN:
        value = stateValue.clone();
        value.add(3, 'months');
        break;
      case __WEBPACK_IMPORTED_MODULE_3_rc_util_es_KeyCode__["a" /* default */].UP:
        value = stateValue.clone();
        value.add(-3, 'months');
        break;
      case __WEBPACK_IMPORTED_MODULE_3_rc_util_es_KeyCode__["a" /* default */].LEFT:
        value = stateValue.clone();
        if (ctrlKey) {
          value.add(-1, 'years');
        } else {
          value.add(-1, 'months');
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_3_rc_util_es_KeyCode__["a" /* default */].RIGHT:
        value = stateValue.clone();
        if (ctrlKey) {
          value.add(1, 'years');
        } else {
          value.add(1, 'months');
        }
        break;
      case __WEBPACK_IMPORTED_MODULE_3_rc_util_es_KeyCode__["a" /* default */].ENTER:
        if (!disabledDate || !disabledDate(stateValue)) {
          this.onSelect(stateValue);
        }
        event.preventDefault();
        return 1;
      default:
        return undefined;
    }
    if (value !== stateValue) {
      this.setValue(value);
      event.preventDefault();
      return 1;
    }
  },
  handlePanelChange: function handlePanelChange(_, mode) {
    if (mode !== 'date') {
      this.setState({ mode: mode });
    }
  },
  render: function render() {
    var props = this.props,
        state = this.state;
    var mode = state.mode,
        value = state.value;

    var children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: props.prefixCls + '-month-calendar-content' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: props.prefixCls + '-month-header-wrap' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__calendar_CalendarHeader__["a" /* default */], {
          prefixCls: props.prefixCls,
          mode: mode,
          value: value,
          locale: props.locale,
          disabledMonth: props.disabledDate,
          monthCellRender: props.monthCellRender,
          monthCellContentRender: props.monthCellContentRender,
          onMonthSelect: this.onSelect,
          onValueChange: this.setValue,
          onPanelChange: this.handlePanelChange
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__calendar_CalendarFooter__["a" /* default */], {
        prefixCls: props.prefixCls,
        renderFooter: props.renderFooter
      })
    );
    return this.renderRoot({
      className: props.prefixCls + '-month-calendar',
      children: children
    });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (MonthCalendar);

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_async_validator__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_warning__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_get__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_set__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__createFieldsStore__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils__ = __webpack_require__(476);














var DEFAULT_TRIGGER = 'onChange';

function createBaseForm() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var validateMessages = option.validateMessages,
      onFieldsChange = option.onFieldsChange,
      onValuesChange = option.onValuesChange,
      _option$mapProps = option.mapProps,
      mapProps = _option$mapProps === undefined ? __WEBPACK_IMPORTED_MODULE_12__utils__["i" /* identity */] : _option$mapProps,
      mapPropsToFields = option.mapPropsToFields,
      fieldNameProp = option.fieldNameProp,
      fieldMetaProp = option.fieldMetaProp,
      fieldDataProp = option.fieldDataProp,
      _option$formPropName = option.formPropName,
      formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName,
      withRef = option.withRef;


  return function decorate(WrappedComponent) {
    var Form = __WEBPACK_IMPORTED_MODULE_6_create_react_class___default()({
      displayName: 'Form',

      mixins: mixins,

      getInitialState: function getInitialState() {
        var _this = this;

        var fields = mapPropsToFields && mapPropsToFields(this.props);
        this.fieldsStore = Object(__WEBPACK_IMPORTED_MODULE_11__createFieldsStore__["a" /* default */])(fields || {});

        this.instances = {};
        this.cachedBind = {};
        this.clearedFieldMetaCache = {};
        // HACK: https://github.com/ant-design/ant-design/issues/6406
        ['getFieldsValue', 'getFieldValue', 'setFieldsInitialValue', 'getFieldsError', 'getFieldError', 'isFieldValidating', 'isFieldsValidating', 'isFieldsTouched', 'isFieldTouched'].forEach(function (key) {
          return _this[key] = function () {
            var _fieldsStore;

            if (true) {
              __WEBPACK_IMPORTED_MODULE_8_warning___default()(false, 'you should not use `ref` on enhanced form, please use `wrappedComponentRef`. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
            }
            return (_fieldsStore = _this.fieldsStore)[key].apply(_fieldsStore, arguments);
          };
        });

        return {
          submitting: false
        };
      },
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          this.fieldsStore.updateFields(mapPropsToFields(nextProps));
        }
      },
      onCollectCommon: function onCollectCommon(name, action, args) {
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta[action]) {
          fieldMeta[action].apply(fieldMeta, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default()(args));
        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
          var _fieldMeta$originalPr;

          (_fieldMeta$originalPr = fieldMeta.originalProps)[action].apply(_fieldMeta$originalPr, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default()(args));
        }
        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default()(args)) : __WEBPACK_IMPORTED_MODULE_12__utils__["g" /* getValueFromEvent */].apply(undefined, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_toConsumableArray___default()(args));
        if (onValuesChange && value !== this.fieldsStore.getFieldValue(name)) {
          var valuesAll = this.fieldsStore.getAllValues();
          var valuesAllSet = {};
          valuesAll[name] = value;
          Object.keys(valuesAll).forEach(function (key) {
            return __WEBPACK_IMPORTED_MODULE_10_lodash_set___default()(valuesAllSet, key, valuesAll[key]);
          });
          onValuesChange(this.props, __WEBPACK_IMPORTED_MODULE_10_lodash_set___default()({}, name, value), valuesAllSet);
        }
        var field = this.fieldsStore.getField(name);
        return { name: name, field: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, field, { value: value, touched: true }), fieldMeta: fieldMeta };
      },
      onCollect: function onCollect(name_, action) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var _onCollectCommon = this.onCollectCommon(name_, action, args),
            name = _onCollectCommon.name,
            field = _onCollectCommon.field,
            fieldMeta = _onCollectCommon.fieldMeta;

        var validate = fieldMeta.validate;

        var newField = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, field, {
          dirty: Object(__WEBPACK_IMPORTED_MODULE_12__utils__["h" /* hasRules */])(validate)
        });
        this.setFields(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, name, newField));
      },
      onCollectValidate: function onCollectValidate(name_, action) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        var _onCollectCommon2 = this.onCollectCommon(name_, action, args),
            field = _onCollectCommon2.field,
            fieldMeta = _onCollectCommon2.fieldMeta;

        var newField = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, field, {
          dirty: true
        });
        this.validateFieldsInternal([newField], {
          action: action,
          options: {
            firstFields: !!fieldMeta.validateFirst
          }
        });
      },
      getCacheBind: function getCacheBind(name, action, fn) {
        if (!this.cachedBind[name]) {
          this.cachedBind[name] = {};
        }
        var cache = this.cachedBind[name];
        if (!cache[action]) {
          cache[action] = fn.bind(this, name, action);
        }
        return cache[action];
      },
      recoverClearedField: function recoverClearedField(name) {
        if (this.clearedFieldMetaCache[name]) {
          this.fieldsStore.setFields(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, name, this.clearedFieldMetaCache[name].field));
          this.fieldsStore.setFieldMeta(name, this.clearedFieldMetaCache[name].meta);
          delete this.clearedFieldMetaCache[name];
        }
      },
      getFieldDecorator: function getFieldDecorator(name, fieldOption) {
        var _this2 = this;

        var props = this.getFieldProps(name, fieldOption);
        return function (fieldElem) {
          var fieldMeta = _this2.fieldsStore.getFieldMeta(name);
          var originalProps = fieldElem.props;
          if (true) {
            var valuePropName = fieldMeta.valuePropName;
            __WEBPACK_IMPORTED_MODULE_8_warning___default()(!(valuePropName in originalProps), '`getFieldDecorator` will override `' + valuePropName + '`, ' + ('so please don\'t set `' + valuePropName + '` directly ') + 'and use `setFieldsValue` to set it.');
            var defaultValuePropName = 'default' + valuePropName[0].toUpperCase() + valuePropName.slice(1);
            __WEBPACK_IMPORTED_MODULE_8_warning___default()(!(defaultValuePropName in originalProps), '`' + defaultValuePropName + '` is invalid ' + ('for `getFieldDecorator` will set `' + valuePropName + '`,') + ' please use `option.initialValue` instead.');
          }
          fieldMeta.originalProps = originalProps;
          fieldMeta.ref = fieldElem.ref;
          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(fieldElem, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, props, _this2.fieldsStore.getFieldValuePropValue(fieldMeta)));
        };
      },
      getFieldProps: function getFieldProps(name) {
        var _this3 = this;

        var usersFieldOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!name) {
          throw new Error('Must call `getFieldProps` with valid name string!');
        }
        if (true) {
          __WEBPACK_IMPORTED_MODULE_8_warning___default()(this.fieldsStore.isValidNestedFieldName(name), 'One field name cannot be part of another, e.g. `a` and `a.b`.');
          __WEBPACK_IMPORTED_MODULE_8_warning___default()(!('exclusive' in usersFieldOption), '`option.exclusive` of `getFieldProps`|`getFieldDecorator` had been remove.');
        }

        delete this.clearedFieldMetaCache[name];

        var fieldOption = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({
          name: name,
          trigger: DEFAULT_TRIGGER,
          valuePropName: 'value',
          validate: []
        }, usersFieldOption);

        var rules = fieldOption.rules,
            trigger = fieldOption.trigger,
            _fieldOption$validate = fieldOption.validateTrigger,
            validateTrigger = _fieldOption$validate === undefined ? trigger : _fieldOption$validate,
            validate = fieldOption.validate;


        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if ('initialValue' in fieldOption) {
          fieldMeta.initialValue = fieldOption.initialValue;
        }

        var inputProps = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, this.fieldsStore.getFieldValuePropValue(fieldOption), {
          ref: this.getCacheBind(name, name + '__ref', this.saveRef)
        });
        if (fieldNameProp) {
          inputProps[fieldNameProp] = name;
        }

        var validateRules = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["k" /* normalizeValidateRules */])(validate, rules, validateTrigger);
        var validateTriggers = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["f" /* getValidateTriggers */])(validateRules);
        validateTriggers.forEach(function (action) {
          if (inputProps[action]) return;
          inputProps[action] = _this3.getCacheBind(name, action, _this3.onCollectValidate);
        });

        // make sure that the value will be collect
        if (trigger && validateTriggers.indexOf(trigger) === -1) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onCollect);
        }

        var meta = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, fieldMeta, fieldOption, {
          validate: validateRules
        });
        this.fieldsStore.setFieldMeta(name, meta);
        if (fieldMetaProp) {
          inputProps[fieldMetaProp] = meta;
        }

        if (fieldDataProp) {
          inputProps[fieldDataProp] = this.fieldsStore.getField(name);
        }

        return inputProps;
      },
      getFieldInstance: function getFieldInstance(name) {
        return this.instances[name];
      },
      getRules: function getRules(fieldMeta, action) {
        var actionRules = fieldMeta.validate.filter(function (item) {
          return !action || item.trigger.indexOf(action) >= 0;
        }).map(function (item) {
          return item.rules;
        });
        return Object(__WEBPACK_IMPORTED_MODULE_12__utils__["b" /* flattenArray */])(actionRules);
      },
      setFields: function setFields(maybeNestedFields, callback) {
        var _this4 = this;

        var fields = this.fieldsStore.flattenRegisteredFields(maybeNestedFields);
        this.fieldsStore.setFields(fields);
        if (onFieldsChange) {
          var changedFields = Object.keys(fields).reduce(function (acc, name) {
            return __WEBPACK_IMPORTED_MODULE_10_lodash_set___default()(acc, name, _this4.fieldsStore.getField(name));
          }, {});
          onFieldsChange(this.props, changedFields, this.fieldsStore.getNestedAllFields());
        }
        this.forceUpdate(callback);
      },
      resetFields: function resetFields(ns) {
        var _this5 = this;

        var newFields = this.fieldsStore.resetFields(ns);
        if (Object.keys(newFields).length > 0) {
          this.setFields(newFields);
        }
        if (ns) {
          var names = Array.isArray(ns) ? ns : [ns];
          names.forEach(function (name) {
            return delete _this5.clearedFieldMetaCache[name];
          });
        } else {
          this.clearedFieldMetaCache = {};
        }
      },
      setFieldsValue: function setFieldsValue(changedValues, callback) {
        var fieldsMeta = this.fieldsStore.fieldsMeta;

        var values = this.fieldsStore.flattenRegisteredFields(changedValues);
        var newFields = Object.keys(values).reduce(function (acc, name) {
          var isRegistered = fieldsMeta[name];
          if (true) {
            __WEBPACK_IMPORTED_MODULE_8_warning___default()(isRegistered, 'Cannot use `setFieldsValue` until ' + 'you use `getFieldDecorator` or `getFieldProps` to register it.');
          }
          if (isRegistered) {
            var value = values[name];
            acc[name] = {
              value: value
            };
          }
          return acc;
        }, {});
        this.setFields(newFields, callback);
        if (onValuesChange) {
          var allValues = this.fieldsStore.getAllValues();
          onValuesChange(this.props, changedValues, allValues);
        }
      },
      saveRef: function saveRef(name, _, component) {
        if (!component) {
          // after destroy, delete data
          this.clearedFieldMetaCache[name] = {
            field: this.fieldsStore.getField(name),
            meta: this.fieldsStore.getFieldMeta(name)
          };
          this.fieldsStore.clearField(name);
          delete this.instances[name];
          delete this.cachedBind[name];
          return;
        }
        this.recoverClearedField(name);
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta) {
          var ref = fieldMeta.ref;
          if (ref) {
            if (typeof ref === 'string') {
              throw new Error('can not set ref string for ' + name);
            }
            ref(component);
          }
        }
        this.instances[name] = component;
      },
      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
        var _this6 = this;

        var fieldNames = _ref.fieldNames,
            action = _ref.action,
            _ref$options = _ref.options,
            options = _ref$options === undefined ? {} : _ref$options;

        var allRules = {};
        var allValues = {};
        var allFields = {};
        var alreadyErrors = {};
        fields.forEach(function (field) {
          var name = field.name;
          if (options.force !== true && field.dirty === false) {
            if (field.errors) {
              __WEBPACK_IMPORTED_MODULE_10_lodash_set___default()(alreadyErrors, name, { errors: field.errors });
            }
            return;
          }
          var fieldMeta = _this6.fieldsStore.getFieldMeta(name);
          var newField = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, field);
          newField.errors = undefined;
          newField.validating = true;
          newField.dirty = true;
          allRules[name] = _this6.getRules(fieldMeta, action);
          allValues[name] = newField.value;
          allFields[name] = newField;
        });
        this.setFields(allFields);
        // in case normalize
        Object.keys(allValues).forEach(function (f) {
          allValues[f] = _this6.fieldsStore.getFieldValue(f);
        });
        if (callback && Object(__WEBPACK_IMPORTED_MODULE_12__utils__["j" /* isEmptyObject */])(allFields)) {
          callback(Object(__WEBPACK_IMPORTED_MODULE_12__utils__["j" /* isEmptyObject */])(alreadyErrors) ? null : alreadyErrors, this.fieldsStore.getFieldsValue(fieldNames));
          return;
        }
        var validator = new __WEBPACK_IMPORTED_MODULE_7_async_validator__["a" /* default */](allRules);
        if (validateMessages) {
          validator.messages(validateMessages);
        }
        validator.validate(allValues, options, function (errors) {
          var errorsGroup = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, alreadyErrors);
          if (errors && errors.length) {
            errors.forEach(function (e) {
              var fieldName = e.field;
              var field = __WEBPACK_IMPORTED_MODULE_9_lodash_get___default()(errorsGroup, fieldName);
              if ((typeof field === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(field)) !== 'object' || Array.isArray(field)) {
                __WEBPACK_IMPORTED_MODULE_10_lodash_set___default()(errorsGroup, fieldName, { errors: [] });
              }
              var fieldErrors = __WEBPACK_IMPORTED_MODULE_9_lodash_get___default()(errorsGroup, fieldName.concat('.errors'));
              fieldErrors.push(e);
            });
          }
          var expired = [];
          var nowAllFields = {};
          Object.keys(allRules).forEach(function (name) {
            var fieldErrors = __WEBPACK_IMPORTED_MODULE_9_lodash_get___default()(errorsGroup, name);
            var nowField = _this6.fieldsStore.getField(name);
            // avoid concurrency problems
            if (nowField.value !== allValues[name]) {
              expired.push({
                name: name
              });
            } else {
              nowField.errors = fieldErrors && fieldErrors.errors;
              nowField.value = allValues[name];
              nowField.validating = false;
              nowField.dirty = false;
              nowAllFields[name] = nowField;
            }
          });
          _this6.setFields(nowAllFields);
          if (callback) {
            if (expired.length) {
              expired.forEach(function (_ref2) {
                var name = _ref2.name;

                var fieldErrors = [{
                  message: name + ' need to revalidate',
                  field: name
                }];
                __WEBPACK_IMPORTED_MODULE_10_lodash_set___default()(errorsGroup, name, {
                  expired: true,
                  errors: fieldErrors
                });
              });
            }

            callback(Object(__WEBPACK_IMPORTED_MODULE_12__utils__["j" /* isEmptyObject */])(errorsGroup) ? null : errorsGroup, _this6.fieldsStore.getFieldsValue(fieldNames));
          }
        });
      },
      validateFields: function validateFields(ns, opt, cb) {
        var _this7 = this;

        var _getParams = Object(__WEBPACK_IMPORTED_MODULE_12__utils__["e" /* getParams */])(ns, opt, cb),
            names = _getParams.names,
            callback = _getParams.callback,
            options = _getParams.options;

        var fieldNames = names ? this.fieldsStore.getValidFieldsFullName(names) : this.fieldsStore.getValidFieldsName();
        var fields = fieldNames.filter(function (name) {
          var fieldMeta = _this7.fieldsStore.getFieldMeta(name);
          return Object(__WEBPACK_IMPORTED_MODULE_12__utils__["h" /* hasRules */])(fieldMeta.validate);
        }).map(function (name) {
          var field = _this7.fieldsStore.getField(name);
          field.value = _this7.fieldsStore.getFieldValue(name);
          return field;
        });
        if (!fields.length) {
          if (callback) {
            callback(null, this.fieldsStore.getFieldsValue(fieldNames));
          }
          return;
        }
        if (!('firstFields' in options)) {
          options.firstFields = fieldNames.filter(function (name) {
            var fieldMeta = _this7.fieldsStore.getFieldMeta(name);
            return !!fieldMeta.validateFirst;
          });
        }
        this.validateFieldsInternal(fields, {
          fieldNames: fieldNames,
          options: options
        }, callback);
      },
      isSubmitting: function isSubmitting() {
        if (true) {
          __WEBPACK_IMPORTED_MODULE_8_warning___default()(false, '`isSubmitting` is deprecated. ' + 'Actually, it\'s more convenient to handle submitting status by yourself.');
        }
        return this.state.submitting;
      },
      submit: function submit(callback) {
        var _this8 = this;

        if (true) {
          __WEBPACK_IMPORTED_MODULE_8_warning___default()(false, '`submit` is deprecated.' + 'Actually, it\'s more convenient to handle submitting status by yourself.');
        }
        var fn = function fn() {
          _this8.setState({
            submitting: false
          });
        };
        this.setState({
          submitting: true
        });
        callback(fn);
      },
      render: function render() {
        var _props = this.props,
            wrappedComponentRef = _props.wrappedComponentRef,
            restProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['wrappedComponentRef']);

        var formProps = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, formPropName, this.getForm());
        if (withRef) {
          if (true) {
            __WEBPACK_IMPORTED_MODULE_8_warning___default()(false, '`withRef` is deprecated, please use `wrappedComponentRef` instead. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
          }
          formProps.ref = 'wrappedComponent';
        } else if (wrappedComponentRef) {
          formProps.ref = wrappedComponentRef;
        }
        var props = mapProps.call(this, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, formProps, restProps));
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(WrappedComponent, props);
      }
    });

    return Object(__WEBPACK_IMPORTED_MODULE_12__utils__["a" /* argumentContainer */])(Form, WrappedComponent);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createBaseForm);

/***/ }),

/***/ 750:
false,

/***/ 752:
false,

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mini_store__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MenuMixin__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__(450);








var Menu = __WEBPACK_IMPORTED_MODULE_3_create_react_class___default()({
  displayName: 'Menu',

  propTypes: {
    defaultSelectedKeys: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
    selectedKeys: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
    defaultOpenKeys: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
    openKeys: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
    mode: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['horizontal', 'vertical', 'vertical-left', 'vertical-right', 'inline']),
    getPopupContainer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    onSelect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    onDeselect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    onDestroy: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    openTransitionName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    openAnimation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object]),
    subMenuOpenDelay: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    subMenuCloseDelay: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    forceSubMenuRender: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    triggerSubMenuAction: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    level: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    selectable: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    multiple: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_5__MenuMixin__["a" /* default */]],

  isRootMenu: true,

  getDefaultProps: function getDefaultProps() {
    return {
      selectable: true,
      onClick: __WEBPACK_IMPORTED_MODULE_6__util__["e" /* noop */],
      onSelect: __WEBPACK_IMPORTED_MODULE_6__util__["e" /* noop */],
      onOpenChange: __WEBPACK_IMPORTED_MODULE_6__util__["e" /* noop */],
      onDeselect: __WEBPACK_IMPORTED_MODULE_6__util__["e" /* noop */],
      defaultSelectedKeys: [],
      defaultOpenKeys: [],
      subMenuOpenDelay: 0.1,
      subMenuCloseDelay: 0.1,
      triggerSubMenuAction: 'hover'
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var selectedKeys = props.defaultSelectedKeys;
    var openKeys = props.defaultOpenKeys;
    if ('selectedKeys' in props) {
      selectedKeys = props.selectedKeys || [];
    }
    if ('openKeys' in props) {
      openKeys = props.openKeys || [];
    }

    this.store = Object(__WEBPACK_IMPORTED_MODULE_4_mini_store__["create"])({
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      activeKey: { '0-menu-': Object(__WEBPACK_IMPORTED_MODULE_5__MenuMixin__["b" /* getActiveKey */])(props, props.activeKey) }
    });

    return {};
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('selectedKeys' in nextProps) {
      this.store.setState({
        selectedKeys: nextProps.selectedKeys || []
      });
    }
    if ('openKeys' in nextProps) {
      this.store.setState({
        openKeys: nextProps.openKeys || []
      });
    }
  },
  onSelect: function onSelect(selectInfo) {
    var props = this.props;
    if (props.selectable) {
      // root menu
      var selectedKeys = this.store.getState().selectedKeys;
      var selectedKey = selectInfo.key;
      if (props.multiple) {
        selectedKeys = selectedKeys.concat([selectedKey]);
      } else {
        selectedKeys = [selectedKey];
      }
      if (!('selectedKeys' in props)) {
        this.store.setState({
          selectedKeys: selectedKeys
        });
      }
      props.onSelect(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, selectInfo, {
        selectedKeys: selectedKeys
      }));
    }
  },
  onClick: function onClick(e) {
    this.props.onClick(e);
  },
  onOpenChange: function onOpenChange(event) {
    var props = this.props;
    var openKeys = this.store.getState().openKeys.concat();
    var changed = false;
    var processSingle = function processSingle(e) {
      var oneChanged = false;
      if (e.open) {
        oneChanged = openKeys.indexOf(e.key) === -1;
        if (oneChanged) {
          openKeys.push(e.key);
        }
      } else {
        var index = openKeys.indexOf(e.key);
        oneChanged = index !== -1;
        if (oneChanged) {
          openKeys.splice(index, 1);
        }
      }
      changed = changed || oneChanged;
    };
    if (Array.isArray(event)) {
      // batch change call
      event.forEach(processSingle);
    } else {
      processSingle(event);
    }
    if (changed) {
      if (!('openKeys' in this.props)) {
        this.store.setState({ openKeys: openKeys });
      }
      props.onOpenChange(openKeys);
    }
  },
  onDeselect: function onDeselect(selectInfo) {
    var props = this.props;
    if (props.selectable) {
      var selectedKeys = this.store.getState().selectedKeys.concat();
      var selectedKey = selectInfo.key;
      var index = selectedKeys.indexOf(selectedKey);
      if (index !== -1) {
        selectedKeys.splice(index, 1);
      }
      if (!('selectedKeys' in props)) {
        this.store.setState({
          selectedKeys: selectedKeys
        });
      }
      props.onDeselect(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, selectInfo, {
        selectedKeys: selectedKeys
      }));
    }
  },
  getOpenTransitionName: function getOpenTransitionName() {
    var props = this.props;
    var transitionName = props.openTransitionName;
    var animationName = props.openAnimation;
    if (!transitionName && typeof animationName === 'string') {
      transitionName = props.prefixCls + '-open-' + animationName;
    }
    return transitionName;
  },
  isInlineMode: function isInlineMode() {
    return this.props.mode === 'inline';
  },
  lastOpenSubMenu: function lastOpenSubMenu() {
    var lastOpen = [];

    var _store$getState = this.store.getState(),
        openKeys = _store$getState.openKeys;

    if (openKeys.length) {
      lastOpen = this.getFlatInstanceArray().filter(function (c) {
        return c && openKeys.indexOf(c.props.eventKey) !== -1;
      });
    }
    return lastOpen[0];
  },
  renderMenuItem: function renderMenuItem(c, i, subIndex, subMenuKey) {
    if (!c) {
      return null;
    }
    var state = this.store.getState();
    var extraProps = {
      openKeys: state.openKeys,
      selectedKeys: state.selectedKeys,
      triggerSubMenuAction: this.props.triggerSubMenuAction,
      subMenuKey: subMenuKey
    };
    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
  },
  render: function render() {
    var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props);
    props.className += ' ' + props.prefixCls + '-root';
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_mini_store__["Provider"],
      { store: this.store },
      this.renderRoot(props)
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_create_react_class__);





var DOMWrap = __WEBPACK_IMPORTED_MODULE_3_create_react_class___default()({
  displayName: 'DOMWrap',

  propTypes: {
    tag: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    hiddenClassName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    visible: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      tag: 'div'
    };
  },
  render: function render() {
    var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props);
    if (!props.visible) {
      props.className = props.className || '';
      props.className += ' ' + props.hiddenClassName;
    }
    var Tag = props.tag;
    delete props.tag;
    delete props.hiddenClassName;
    delete props.visible;
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Tag, props);
  }
});

/* harmony default export */ __webpack_exports__["a"] = (DOMWrap);

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_trigger__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mini_store__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SubPopupMenu__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__placements__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util__ = __webpack_require__(450);













var guid = 0;

var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};

var updateDefaultActiveFirst = function updateDefaultActiveFirst(store, eventKey, defaultActiveFirst) {
  var _extends2;

  var menuId = Object(__WEBPACK_IMPORTED_MODULE_11__util__["b" /* getMenuIdFromSubMenuEventKey */])(eventKey);
  var state = store.getState();
  store.setState({
    defaultActiveFirst: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, state.defaultActiveFirst, (_extends2 = {}, _extends2[menuId] = defaultActiveFirst, _extends2))
  });
};

var SubMenu = __WEBPACK_IMPORTED_MODULE_4_create_react_class___default()({
  displayName: 'SubMenu',

  propTypes: {
    parentMenu: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
    title: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
    children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    selectedKeys: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
    openKeys: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
    onClick: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onOpenChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    rootPrefixCls: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    eventKey: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    multiple: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    active: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool, // TODO: remove
    onItemHover: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onSelect: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    triggerSubMenuAction: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    onDeselect: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onDestroy: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onMouseEnter: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onMouseLeave: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onTitleMouseEnter: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onTitleMouseLeave: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onTitleClick: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    isOpen: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
  },

  isRootMenu: false,

  getDefaultProps: function getDefaultProps() {
    return {
      onMouseEnter: __WEBPACK_IMPORTED_MODULE_11__util__["e" /* noop */],
      onMouseLeave: __WEBPACK_IMPORTED_MODULE_11__util__["e" /* noop */],
      onTitleMouseEnter: __WEBPACK_IMPORTED_MODULE_11__util__["e" /* noop */],
      onTitleMouseLeave: __WEBPACK_IMPORTED_MODULE_11__util__["e" /* noop */],
      onTitleClick: __WEBPACK_IMPORTED_MODULE_11__util__["e" /* noop */],
      title: ''
    };
  },
  getInitialState: function getInitialState() {
    this.isSubMenu = 1;
    var props = this.props;
    var store = props.store;
    var eventKey = props.eventKey;
    var defaultActiveFirst = store.getState().defaultActiveFirst;
    var value = false;

    if (defaultActiveFirst) {
      value = defaultActiveFirst[eventKey];
    }

    updateDefaultActiveFirst(store, eventKey, value);

    return {};
  },
  componentDidMount: function componentDidMount() {
    this.componentDidUpdate();
    // invoke customized ref to expose component to mixin
    if (this.props.manualRef) {
      this.props.manualRef(this);
    }
  },
  componentDidUpdate: function componentDidUpdate() {
    var _this = this;

    var _props = this.props,
        mode = _props.mode,
        parentMenu = _props.parentMenu;

    if (mode !== 'horizontal' || !parentMenu.isRootMenu || !this.props.isOpen) {
      return;
    }
    this.minWidthTimeout = setTimeout(function () {
      if (!_this.subMenuTitle || !_this.menuInstance) {
        return;
      }
      var popupMenu = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(_this.menuInstance);
      if (popupMenu.offsetWidth >= _this.subMenuTitle.offsetWidth) {
        return;
      }
      popupMenu.style.minWidth = _this.subMenuTitle.offsetWidth + 'px';
    }, 0);
  },
  componentWillUnmount: function componentWillUnmount() {
    var _props2 = this.props,
        onDestroy = _props2.onDestroy,
        eventKey = _props2.eventKey;

    if (onDestroy) {
      onDestroy(eventKey);
    }
    if (this.minWidthTimeout) {
      clearTimeout(this.minWidthTimeout);
    }
    if (this.mouseenterTimeout) {
      clearTimeout(this.mouseenterTimeout);
    }
  },
  onDestroy: function onDestroy(key) {
    this.props.onDestroy(key);
  },
  onKeyDown: function onKeyDown(e) {
    var keyCode = e.keyCode;
    var menu = this.menuInstance;
    var _props3 = this.props,
        isOpen = _props3.isOpen,
        store = _props3.store;


    if (keyCode === __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].ENTER) {
      this.onTitleClick(e);
      updateDefaultActiveFirst(store, this.props.eventKey, true);
      return true;
    }

    if (keyCode === __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].RIGHT) {
      if (isOpen) {
        menu.onKeyDown(e);
      } else {
        this.triggerOpenChange(true);
        // need to update current menu's defaultActiveFirst value
        updateDefaultActiveFirst(store, this.props.eventKey, true);
      }
      return true;
    }
    if (keyCode === __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].LEFT) {
      var handled = void 0;
      if (isOpen) {
        handled = menu.onKeyDown(e);
      } else {
        return undefined;
      }
      if (!handled) {
        this.triggerOpenChange(false);
        handled = true;
      }
      return handled;
    }

    if (isOpen && (keyCode === __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].UP || keyCode === __WEBPACK_IMPORTED_MODULE_6_rc_util_es_KeyCode__["a" /* default */].DOWN)) {
      return menu.onKeyDown(e);
    }
  },
  onOpenChange: function onOpenChange(e) {
    this.props.onOpenChange(e);
  },
  onPopupVisibleChange: function onPopupVisibleChange(visible) {
    this.triggerOpenChange(visible, visible ? 'mouseenter' : 'mouseleave');
  },
  onMouseEnter: function onMouseEnter(e) {
    var _props4 = this.props,
        key = _props4.eventKey,
        onMouseEnter = _props4.onMouseEnter,
        store = _props4.store;

    updateDefaultActiveFirst(store, this.props.eventKey, false);
    onMouseEnter({
      key: key,
      domEvent: e
    });
  },
  onMouseLeave: function onMouseLeave(e) {
    var _props5 = this.props,
        parentMenu = _props5.parentMenu,
        eventKey = _props5.eventKey,
        onMouseLeave = _props5.onMouseLeave;

    parentMenu.subMenuInstance = this;
    onMouseLeave({
      key: eventKey,
      domEvent: e
    });
  },
  onTitleMouseEnter: function onTitleMouseEnter(domEvent) {
    var _props6 = this.props,
        key = _props6.eventKey,
        onItemHover = _props6.onItemHover,
        onTitleMouseEnter = _props6.onTitleMouseEnter;

    onItemHover({
      key: key,
      hover: true
    });
    onTitleMouseEnter({
      key: key,
      domEvent: domEvent
    });
  },
  onTitleMouseLeave: function onTitleMouseLeave(e) {
    var _props7 = this.props,
        parentMenu = _props7.parentMenu,
        eventKey = _props7.eventKey,
        onItemHover = _props7.onItemHover,
        onTitleMouseLeave = _props7.onTitleMouseLeave;

    parentMenu.subMenuInstance = this;
    onItemHover({
      key: eventKey,
      hover: false
    });
    onTitleMouseLeave({
      key: eventKey,
      domEvent: e
    });
  },
  onTitleClick: function onTitleClick(e) {
    var props = this.props;

    props.onTitleClick({
      key: props.eventKey,
      domEvent: e
    });
    if (props.triggerSubMenuAction === 'hover') {
      return;
    }
    this.triggerOpenChange(!props.isOpen, 'click');
    updateDefaultActiveFirst(props.store, this.props.eventKey, false);
  },
  onSubMenuClick: function onSubMenuClick(info) {
    this.props.onClick(this.addKeyPath(info));
  },
  onSelect: function onSelect(info) {
    this.props.onSelect(info);
  },
  onDeselect: function onDeselect(info) {
    this.props.onDeselect(info);
  },
  getPrefixCls: function getPrefixCls() {
    return this.props.rootPrefixCls + '-submenu';
  },
  getActiveClassName: function getActiveClassName() {
    return this.getPrefixCls() + '-active';
  },
  getDisabledClassName: function getDisabledClassName() {
    return this.getPrefixCls() + '-disabled';
  },
  getSelectedClassName: function getSelectedClassName() {
    return this.getPrefixCls() + '-selected';
  },
  getOpenClassName: function getOpenClassName() {
    return this.props.rootPrefixCls + '-submenu-open';
  },
  saveMenuInstance: function saveMenuInstance(c) {
    // children menu instance
    this.menuInstance = c;
  },
  addKeyPath: function addKeyPath(info) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, info, {
      keyPath: (info.keyPath || []).concat(this.props.eventKey)
    });
  },
  triggerOpenChange: function triggerOpenChange(open, type) {
    var _this2 = this;

    var key = this.props.eventKey;
    var openChange = function openChange() {
      _this2.onOpenChange({
        key: key,
        item: _this2,
        trigger: type,
        open: open
      });
    };
    if (type === 'mouseenter') {
      // make sure mouseenter happen after other menu item's mouseleave
      this.mouseenterTimeout = setTimeout(function () {
        openChange();
      }, 0);
    } else {
      openChange();
    }
  },
  isChildrenSelected: function isChildrenSelected() {
    var ret = { find: false };
    Object(__WEBPACK_IMPORTED_MODULE_11__util__["d" /* loopMenuItemRecusively */])(this.props.children, this.props.selectedKeys, ret);
    return ret.find;
  },
  isOpen: function isOpen() {
    return this.props.openKeys.indexOf(this.props.eventKey) !== -1;
  },
  renderChildren: function renderChildren(children) {
    var props = this.props;
    var baseProps = {
      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
      visible: this.props.isOpen,
      level: props.level + 1,
      inlineIndent: props.inlineIndent,
      focusable: false,
      onClick: this.onSubMenuClick,
      onSelect: this.onSelect,
      onDeselect: this.onDeselect,
      onDestroy: this.onDestroy,
      selectedKeys: props.selectedKeys,
      eventKey: props.eventKey + '-menu-',
      openKeys: props.openKeys,
      openTransitionName: props.openTransitionName,
      openAnimation: props.openAnimation,
      onOpenChange: this.onOpenChange,
      subMenuOpenDelay: props.subMenuOpenDelay,
      subMenuCloseDelay: props.subMenuCloseDelay,
      forceSubMenuRender: props.forceSubMenuRender,
      triggerSubMenuAction: props.triggerSubMenuAction,
      defaultActiveFirst: props.store.getState().defaultActiveFirst[Object(__WEBPACK_IMPORTED_MODULE_11__util__["b" /* getMenuIdFromSubMenuEventKey */])(props.eventKey)],
      multiple: props.multiple,
      prefixCls: props.rootPrefixCls,
      id: this._menuId,
      manualRef: this.saveMenuInstance
    };
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_9__SubPopupMenu__["a" /* default */],
      baseProps,
      children
    );
  },
  saveSubMenuTitle: function saveSubMenuTitle(subMenuTitle) {
    this.subMenuTitle = subMenuTitle;
  },
  render: function render() {
    var _classNames;

    var props = this.props;
    var isOpen = props.isOpen;
    var prefixCls = this.getPrefixCls();
    var isInlineMode = props.mode === 'inline';
    var className = __WEBPACK_IMPORTED_MODULE_7_classnames___default()(prefixCls, prefixCls + '-' + props.mode, (_classNames = {}, _classNames[props.className] = !!props.className, _classNames[this.getOpenClassName()] = isOpen, _classNames[this.getActiveClassName()] = props.active || isOpen && !isInlineMode, _classNames[this.getDisabledClassName()] = props.disabled, _classNames[this.getSelectedClassName()] = this.isChildrenSelected(), _classNames));

    if (!this._menuId) {
      if (props.eventKey) {
        this._menuId = props.eventKey + '$Menu';
      } else {
        this._menuId = '$__$' + ++guid + '$Menu';
      }
    }

    var mouseEvents = {};
    var titleClickEvents = {};
    var titleMouseEvents = {};
    if (!props.disabled) {
      mouseEvents = {
        onMouseLeave: this.onMouseLeave,
        onMouseEnter: this.onMouseEnter
      };

      // only works in title, not outer li
      titleClickEvents = {
        onClick: this.onTitleClick
      };
      titleMouseEvents = {
        onMouseEnter: this.onTitleMouseEnter,
        onMouseLeave: this.onTitleMouseLeave
      };
    }

    var style = {};
    if (isInlineMode) {
      style.paddingLeft = props.inlineIndent * props.level;
    }
    var title = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        ref: this.saveSubMenuTitle,
        style: style,
        className: prefixCls + '-title'
      }, titleMouseEvents, titleClickEvents, {
        'aria-expanded': isOpen,
        'aria-owns': this._menuId,
        'aria-haspopup': 'true',
        title: typeof props.title === 'string' ? props.title : undefined
      }),
      props.title,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('i', { className: prefixCls + '-arrow' })
    );
    var children = this.renderChildren(props.children);

    var getPopupContainer = props.parentMenu.isRootMenu ? props.parentMenu.props.getPopupContainer : function (triggerNode) {
      return triggerNode.parentNode;
    };
    var popupPlacement = popupPlacementMap[props.mode];
    var popupClassName = props.mode === 'inline' ? '' : props.popupClassName;

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'li',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, mouseEvents, { className: className, style: props.style }),
      isInlineMode && title,
      isInlineMode && children,
      !isInlineMode && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_rc_trigger__["a" /* default */],
        {
          prefixCls: prefixCls,
          popupClassName: prefixCls + '-popup ' + popupClassName,
          getPopupContainer: getPopupContainer,
          builtinPlacements: __WEBPACK_IMPORTED_MODULE_10__placements__["a" /* default */],
          popupPlacement: popupPlacement,
          popupVisible: isOpen,
          popup: children,
          action: props.disabled ? [] : [props.triggerSubMenuAction],
          mouseEnterDelay: props.subMenuOpenDelay,
          mouseLeaveDelay: props.subMenuCloseDelay,
          onPopupVisibleChange: this.onPopupVisibleChange,
          forceRender: props.forceSubMenuRender
        },
        title
      )
    );
  }
});

SubMenu.isSubMenu = 1;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8_mini_store__["connect"])(function (_ref, _ref2) {
  var openKeys = _ref.openKeys,
      activeKey = _ref.activeKey;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    isOpen: openKeys.indexOf(eventKey) > -1,
    active: activeKey[subMenuKey] === eventKey
  };
})(SubMenu));

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_animate__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mini_store__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MenuMixin__ = __webpack_require__(510);








var SubPopupMenu = __WEBPACK_IMPORTED_MODULE_3_create_react_class___default()({
  displayName: 'SubPopupMenu',

  propTypes: {
    onSelect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    onDeselect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    onOpenChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    onDestroy: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    openTransitionName: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    openAnimation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object]),
    openKeys: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
    visible: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_6__MenuMixin__["a" /* default */]],

  getInitialState: function getInitialState() {
    var _extends2;

    var props = this.props;
    props.store.setState({
      activeKey: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.store.getState().activeKey, (_extends2 = {}, _extends2[props.eventKey] = Object(__WEBPACK_IMPORTED_MODULE_6__MenuMixin__["b" /* getActiveKey */])(props, props.activeKey), _extends2))
    });

    return {};
  },
  componentDidMount: function componentDidMount() {
    // invoke customized ref to expose component to mixin
    if (this.props.manualRef) {
      this.props.manualRef(this);
    }
  },
  onDeselect: function onDeselect(selectInfo) {
    this.props.onDeselect(selectInfo);
  },
  onSelect: function onSelect(selectInfo) {
    this.props.onSelect(selectInfo);
  },
  onClick: function onClick(e) {
    this.props.onClick(e);
  },
  onOpenChange: function onOpenChange(e) {
    this.props.onOpenChange(e);
  },
  onDestroy: function onDestroy(key) {
    this.props.onDestroy(key);
  },
  getOpenTransitionName: function getOpenTransitionName() {
    return this.props.openTransitionName;
  },
  renderMenuItem: function renderMenuItem(c, i, subIndex, subMenuKey) {
    if (!c) {
      return null;
    }
    var props = this.props;
    var extraProps = {
      openKeys: props.openKeys,
      selectedKeys: props.selectedKeys,
      triggerSubMenuAction: props.triggerSubMenuAction,
      subMenuKey: subMenuKey
    };
    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
  },
  render: function render() {
    var props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props);

    var haveRendered = this.haveRendered;
    this.haveRendered = true;

    this.haveOpened = this.haveOpened || props.visible || props.forceSubMenuRender;
    if (!this.haveOpened) {
      return null;
    }

    var transitionAppear = !(!haveRendered && props.visible && props.mode === 'inline');

    props.className += ' ' + props.prefixCls + '-sub';
    var animProps = {};
    if (props.openTransitionName) {
      animProps.transitionName = props.openTransitionName;
    } else if (typeof props.openAnimation === 'object') {
      animProps.animation = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.openAnimation);
      if (!transitionAppear) {
        delete animProps.animation.appear;
      }
    }

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_rc_animate__["a" /* default */],
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, animProps, {
        showProp: 'visible',
        component: '',
        transitionAppear: transitionAppear
      }),
      this.renderRoot(props)
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_mini_store__["connect"])()(SubPopupMenu));

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_dom_scroll_into_view__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_dom_scroll_into_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_dom_scroll_into_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mini_store__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_mini_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_mini_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util__ = __webpack_require__(450);











/* eslint react/no-is-mounted:0 */

var MenuItem = __WEBPACK_IMPORTED_MODULE_4_create_react_class___default()({
  displayName: 'MenuItem',

  propTypes: {
    rootPrefixCls: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    eventKey: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    active: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    selectedKeys: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
    disabled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    title: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    onItemHover: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onSelect: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onClick: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onDeselect: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    parentMenu: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
    onDestroy: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onMouseEnter: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onMouseLeave: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onSelect: __WEBPACK_IMPORTED_MODULE_9__util__["e" /* noop */],
      onMouseEnter: __WEBPACK_IMPORTED_MODULE_9__util__["e" /* noop */],
      onMouseLeave: __WEBPACK_IMPORTED_MODULE_9__util__["e" /* noop */]
    };
  },
  componentWillUnmount: function componentWillUnmount() {
    var props = this.props;
    if (props.onDestroy) {
      props.onDestroy(props.eventKey);
    }
  },
  componentDidMount: function componentDidMount() {
    // invoke customized ref to expose component to mixin
    this.callRef();
  },
  componentDidUpdate: function componentDidUpdate() {
    if (this.props.active) {
      __WEBPACK_IMPORTED_MODULE_7_dom_scroll_into_view___default()(__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this), __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this.props.parentMenu), {
        onlyScrollIfNeeded: true
      });
    }

    this.callRef();
  },
  onKeyDown: function onKeyDown(e) {
    var keyCode = e.keyCode;
    if (keyCode === __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].ENTER) {
      this.onClick(e);
      return true;
    }
  },
  onMouseLeave: function onMouseLeave(e) {
    var _props = this.props,
        eventKey = _props.eventKey,
        onItemHover = _props.onItemHover,
        onMouseLeave = _props.onMouseLeave;

    onItemHover({
      key: eventKey,
      hover: false
    });
    onMouseLeave({
      key: eventKey,
      domEvent: e
    });
  },
  onMouseEnter: function onMouseEnter(e) {
    var _props2 = this.props,
        eventKey = _props2.eventKey,
        onItemHover = _props2.onItemHover,
        onMouseEnter = _props2.onMouseEnter;

    onItemHover({
      key: eventKey,
      hover: true
    });
    onMouseEnter({
      key: eventKey,
      domEvent: e
    });
  },
  onClick: function onClick(e) {
    var _props3 = this.props,
        eventKey = _props3.eventKey,
        multiple = _props3.multiple,
        onClick = _props3.onClick,
        onSelect = _props3.onSelect,
        onDeselect = _props3.onDeselect,
        isSelected = _props3.isSelected;

    var info = {
      key: eventKey,
      keyPath: [eventKey],
      item: this,
      domEvent: e
    };
    onClick(info);
    if (multiple) {
      if (isSelected) {
        onDeselect(info);
      } else {
        onSelect(info);
      }
    } else if (!isSelected) {
      onSelect(info);
    }
  },
  getPrefixCls: function getPrefixCls() {
    return this.props.rootPrefixCls + '-item';
  },
  getActiveClassName: function getActiveClassName() {
    return this.getPrefixCls() + '-active';
  },
  getSelectedClassName: function getSelectedClassName() {
    return this.getPrefixCls() + '-selected';
  },
  getDisabledClassName: function getDisabledClassName() {
    return this.getPrefixCls() + '-disabled';
  },
  callRef: function callRef() {
    if (this.props.manualRef) {
      this.props.manualRef(this);
    }
  },
  render: function render() {
    var _classNames;

    var props = this.props;
    var className = __WEBPACK_IMPORTED_MODULE_6_classnames___default()(this.getPrefixCls(), props.className, (_classNames = {}, _classNames[this.getActiveClassName()] = !props.disabled && props.active, _classNames[this.getSelectedClassName()] = props.isSelected, _classNames[this.getDisabledClassName()] = props.disabled, _classNames));
    var attrs = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.attribute, {
      title: props.title,
      className: className,
      role: 'menuitem',
      'aria-selected': props.isSelected,
      'aria-disabled': props.disabled
    });
    var mouseEvent = {};
    if (!props.disabled) {
      mouseEvent = {
        onClick: this.onClick,
        onMouseLeave: this.onMouseLeave,
        onMouseEnter: this.onMouseEnter
      };
    }
    var style = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props.style);
    if (props.mode === 'inline') {
      style.paddingLeft = props.inlineIndent * props.level;
    }
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'li',
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, attrs, mouseEvent, {
        style: style
      }),
      props.children
    );
  }
});

MenuItem.isMenuItem = 1;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8_mini_store__["connect"])(function (_ref, _ref2) {
  var activeKey = _ref.activeKey,
      selectedKeys = _ref.selectedKeys;
  var eventKey = _ref2.eventKey,
      subMenuKey = _ref2.subMenuKey;
  return {
    active: activeKey[subMenuKey] === eventKey,
    isSelected: selectedKeys.indexOf(eventKey) !== -1
  };
})(MenuItem));

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);




var MenuItemGroup = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
  displayName: 'MenuItemGroup',

  propTypes: {
    renderMenuItem: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    index: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    rootPrefixCls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  },

  getDefaultProps: function getDefaultProps() {
    // To fix keyboard UX.
    return { disabled: true };
  },
  renderInnerMenuItem: function renderInnerMenuItem(item, subIndex) {
    var _props = this.props,
        renderMenuItem = _props.renderMenuItem,
        index = _props.index;

    return renderMenuItem(item, index, subIndex, this.props.subMenuKey);
  },
  render: function render() {
    var props = this.props;
    var _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        rootPrefixCls = props.rootPrefixCls;

    var titleClassName = rootPrefixCls + '-item-group-title';
    var listClassName = rootPrefixCls + '-item-group-list';
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: className + ' ' + rootPrefixCls + '-item-group' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          className: titleClassName,
          title: typeof props.title === 'string' ? props.title : undefined
        },
        props.title
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: listClassName },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(props.children, this.renderInnerMenuItem)
      )
    );
  }
});

MenuItemGroup.isMenuItemGroup = true;

/* harmony default export */ __webpack_exports__["a"] = (MenuItemGroup);

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);




var Divider = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
  displayName: 'Divider',

  propTypes: {
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    rootPrefixCls: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  },

  getDefaultProps: function getDefaultProps() {
    // To fix keyboard UX.
    return { disabled: true };
  },
  render: function render() {
    var _props = this.props,
        _props$className = _props.className,
        className = _props$className === undefined ? '' : _props$className,
        rootPrefixCls = _props.rootPrefixCls;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li', { className: className + ' ' + rootPrefixCls + '-item-divider' });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Divider);

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_DateTable__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__month_MonthTable__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mixin_CalendarMixin__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mixin_CommonMixin__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__full_calendar_CalendarHeader__ = __webpack_require__(816);










var FullCalendar = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
  displayName: 'FullCalendar',

  propTypes: {
    defaultType: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    type: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    prefixCls: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    locale: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
    onTypeChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    fullscreen: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    monthCellRender: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    dateCellRender: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    showTypeSwitch: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    Select: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
    headerComponents: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
    headerComponent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, // The whole header component
    headerRender: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    showHeader: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    disabledDate: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_7__mixin_CommonMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__mixin_CalendarMixin__["a" /* default */]],
  getDefaultProps: function getDefaultProps() {
    return {
      defaultType: 'date',
      fullscreen: false,
      showTypeSwitch: true,
      showHeader: true,
      onTypeChange: function onTypeChange() {}
    };
  },
  getInitialState: function getInitialState() {
    var type = void 0;
    if ('type' in this.props) {
      type = this.props.type;
    } else {
      type = this.props.defaultType;
    }
    return {
      type: type
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('type' in nextProps) {
      this.setState({
        type: nextProps.type
      });
    }
  },
  onMonthSelect: function onMonthSelect(value) {
    this.onSelect(value, {
      target: 'month'
    });
  },
  setType: function setType(type) {
    if (!('type' in this.props)) {
      this.setState({
        type: type
      });
    }
    this.props.onTypeChange(type);
  },
  render: function render() {
    var props = this.props;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        fullscreen = props.fullscreen,
        showHeader = props.showHeader,
        headerComponent = props.headerComponent,
        headerRender = props.headerRender,
        disabledDate = props.disabledDate;
    var _state = this.state,
        value = _state.value,
        type = _state.type;


    var header = null;
    if (showHeader) {
      if (headerRender) {
        header = headerRender(value, type, locale);
      } else {
        var TheHeader = headerComponent || __WEBPACK_IMPORTED_MODULE_8__full_calendar_CalendarHeader__["a" /* default */];
        header = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(TheHeader, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          key: 'calendar-header'
        }, props, {
          prefixCls: prefixCls + '-full',
          type: type,
          value: value,
          onTypeChange: this.setType,
          onValueChange: this.setValue
        }));
      }
    }

    var table = type === 'date' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__date_DateTable__["a" /* default */], {
      dateRender: props.dateCellRender,
      contentRender: props.dateCellContentRender,
      locale: locale,
      prefixCls: prefixCls,
      onSelect: this.onSelect,
      value: value,
      disabledDate: disabledDate
    }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__month_MonthTable__["a" /* default */], {
      cellRender: props.monthCellRender,
      contentRender: props.monthCellContentRender,
      locale: locale,
      onSelect: this.onMonthSelect,
      prefixCls: prefixCls + '-month-panel',
      value: value,
      disabledDate: disabledDate
    });

    var children = [header, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { key: 'calendar-body', className: prefixCls + '-calendar-body' },
      table
    )];

    var className = [prefixCls + '-full'];

    if (fullscreen) {
      className.push(prefixCls + '-fullscreen');
    }

    return this.renderRoot({
      children: children,
      className: className.join(' ')
    });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (FullCalendar);

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DateConstants__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util___ = __webpack_require__(420);







function isSameDay(one, two) {
  return one && two && one.isSame(two, 'day');
}

function beforeCurrentMonthYear(current, today) {
  if (current.year() < today.year()) {
    return 1;
  }
  return current.year() === today.year() && current.month() < today.month();
}

function afterCurrentMonthYear(current, today) {
  if (current.year() > today.year()) {
    return 1;
  }
  return current.year() === today.year() && current.month() > today.month();
}

function getIdFromDate(date) {
  return 'rc-calendar-' + date.year() + '-' + date.month() + '-' + date.date();
}

var DateTBody = __WEBPACK_IMPORTED_MODULE_1_create_react_class___default()({
  displayName: 'DateTBody',

  propTypes: {
    contentRender: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    dateRender: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    disabledDate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    prefixCls: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    selectedValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object)]),
    value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
    hoverValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
    showWeekNumber: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      hoverValue: []
    };
  },
  render: function render() {
    var props = this.props;
    var contentRender = props.contentRender,
        prefixCls = props.prefixCls,
        selectedValue = props.selectedValue,
        value = props.value,
        showWeekNumber = props.showWeekNumber,
        dateRender = props.dateRender,
        disabledDate = props.disabledDate,
        hoverValue = props.hoverValue;

    var iIndex = void 0;
    var jIndex = void 0;
    var current = void 0;
    var dateTable = [];
    var today = Object(__WEBPACK_IMPORTED_MODULE_5__util___["d" /* getTodayTime */])(value);
    var cellClass = prefixCls + '-cell';
    var weekNumberCellClass = prefixCls + '-week-number-cell';
    var dateClass = prefixCls + '-date';
    var todayClass = prefixCls + '-today';
    var selectedClass = prefixCls + '-selected-day';
    var selectedDateClass = prefixCls + '-selected-date'; // do not move with mouse operation
    var selectedStartDateClass = prefixCls + '-selected-start-date';
    var selectedEndDateClass = prefixCls + '-selected-end-date';
    var inRangeClass = prefixCls + '-in-range-cell';
    var lastMonthDayClass = prefixCls + '-last-month-cell';
    var nextMonthDayClass = prefixCls + '-next-month-btn-day';
    var disabledClass = prefixCls + '-disabled-cell';
    var firstDisableClass = prefixCls + '-disabled-cell-first-of-row';
    var lastDisableClass = prefixCls + '-disabled-cell-last-of-row';
    var month1 = value.clone();
    month1.date(1);
    var day = month1.day();
    var lastMonthDiffDay = (day + 7 - value.localeData().firstDayOfWeek()) % 7;
    // calculate last month
    var lastMonth1 = month1.clone();
    lastMonth1.add(0 - lastMonthDiffDay, 'days');
    var passed = 0;
    for (iIndex = 0; iIndex < __WEBPACK_IMPORTED_MODULE_4__DateConstants__["a" /* default */].DATE_ROW_COUNT; iIndex++) {
      for (jIndex = 0; jIndex < __WEBPACK_IMPORTED_MODULE_4__DateConstants__["a" /* default */].DATE_COL_COUNT; jIndex++) {
        current = lastMonth1;
        if (passed) {
          current = current.clone();
          current.add(passed, 'days');
        }
        dateTable.push(current);
        passed++;
      }
    }
    var tableHtml = [];
    passed = 0;

    for (iIndex = 0; iIndex < __WEBPACK_IMPORTED_MODULE_4__DateConstants__["a" /* default */].DATE_ROW_COUNT; iIndex++) {
      var _cx;

      var isCurrentWeek = void 0;
      var weekNumberCell = void 0;
      var isActiveWeek = false;
      var dateCells = [];
      if (showWeekNumber) {
        weekNumberCell = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'td',
          {
            key: dateTable[passed].week(),
            role: 'gridcell',
            className: weekNumberCellClass
          },
          dateTable[passed].week()
        );
      }
      for (jIndex = 0; jIndex < __WEBPACK_IMPORTED_MODULE_4__DateConstants__["a" /* default */].DATE_COL_COUNT; jIndex++) {
        var next = null;
        var last = null;
        current = dateTable[passed];
        if (jIndex < __WEBPACK_IMPORTED_MODULE_4__DateConstants__["a" /* default */].DATE_COL_COUNT - 1) {
          next = dateTable[passed + 1];
        }
        if (jIndex > 0) {
          last = dateTable[passed - 1];
        }
        var cls = cellClass;
        var disabled = false;
        var selected = false;

        if (isSameDay(current, today)) {
          cls += ' ' + todayClass;
          isCurrentWeek = true;
        }

        var isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, value);
        var isAfterCurrentMonthYear = afterCurrentMonthYear(current, value);

        if (selectedValue && Array.isArray(selectedValue)) {
          var rangeValue = hoverValue.length ? hoverValue : selectedValue;
          if (!isBeforeCurrentMonthYear && !isAfterCurrentMonthYear) {
            var startValue = rangeValue[0];
            var endValue = rangeValue[1];
            if (startValue) {
              if (isSameDay(current, startValue)) {
                selected = true;
                isActiveWeek = true;
                cls += ' ' + selectedStartDateClass;
              }
            }
            if (startValue && endValue) {
              if (isSameDay(current, endValue)) {
                selected = true;
                isActiveWeek = true;
                cls += ' ' + selectedEndDateClass;
              } else if (current.isAfter(startValue, 'day') && current.isBefore(endValue, 'day')) {
                cls += ' ' + inRangeClass;
              }
            }
          }
        } else if (isSameDay(current, value)) {
          // keyboard change value, highlight works
          selected = true;
          isActiveWeek = true;
        }

        if (isSameDay(current, selectedValue)) {
          cls += ' ' + selectedDateClass;
        }

        if (isBeforeCurrentMonthYear) {
          cls += ' ' + lastMonthDayClass;
        }
        if (isAfterCurrentMonthYear) {
          cls += ' ' + nextMonthDayClass;
        }

        if (disabledDate) {
          if (disabledDate(current, value)) {
            disabled = true;

            if (!last || !disabledDate(last, value)) {
              cls += ' ' + firstDisableClass;
            }

            if (!next || !disabledDate(next, value)) {
              cls += ' ' + lastDisableClass;
            }
          }
        }

        if (selected) {
          cls += ' ' + selectedClass;
        }

        if (disabled) {
          cls += ' ' + disabledClass;
        }

        var dateHtml = void 0;
        if (dateRender) {
          dateHtml = dateRender(current, value);
        } else {
          var content = contentRender ? contentRender(current, value) : current.date();
          dateHtml = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              key: getIdFromDate(current),
              className: dateClass,
              'aria-selected': selected,
              'aria-disabled': disabled
            },
            content
          );
        }

        dateCells.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'td',
          {
            key: passed,
            onClick: disabled ? undefined : props.onSelect.bind(null, current),
            onMouseEnter: disabled ? undefined : props.onDayHover && props.onDayHover.bind(null, current) || undefined,
            role: 'gridcell',
            title: Object(__WEBPACK_IMPORTED_MODULE_5__util___["c" /* getTitleString */])(current), className: cls
          },
          dateHtml
        ));

        passed++;
      }

      tableHtml.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tr',
        {
          key: iIndex,
          role: 'row',
          className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()((_cx = {}, _cx[prefixCls + '-current-week'] = isCurrentWeek, _cx[prefixCls + '-active-week'] = isActiveWeek, _cx))
        },
        weekNumberCell,
        dateCells
      ));
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tbody',
      { className: prefixCls + '-tbody' },
      tableHtml
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (DateTBody);

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InkTabBarMixin__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ScrollableTabBarMixin__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TabBarMixin__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RefMixin__ = __webpack_require__(837);






var ScrollableInkTabBar = __WEBPACK_IMPORTED_MODULE_0_create_react_class___default()({
  displayName: 'ScrollableInkTabBar',
  mixins: [__WEBPACK_IMPORTED_MODULE_4__RefMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__TabBarMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__InkTabBarMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__ScrollableTabBarMixin__["a" /* default */]],
  render: function render() {
    var inkBarNode = this.getInkBarNode();
    var tabs = this.getTabs();
    var scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }
});

/* harmony default export */ __webpack_exports__["a"] = (ScrollableInkTabBar);

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__date_DateTable__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_CalendarHeader__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendar_CalendarFooter__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mixin_CalendarMixin__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mixin_CommonMixin__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__date_DateInput__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util__ = __webpack_require__(420);














function noop() {}

function goStartMonth() {
  var next = this.state.value.clone();
  next.startOf('month');
  this.setValue(next);
}

function goEndMonth() {
  var next = this.state.value.clone();
  next.endOf('month');
  this.setValue(next);
}

function goTime(direction, unit) {
  var next = this.state.value.clone();
  next.add(direction, unit);
  this.setValue(next);
}

function goMonth(direction) {
  return goTime.call(this, direction, 'months');
}

function goYear(direction) {
  return goTime.call(this, direction, 'years');
}

function goWeek(direction) {
  return goTime.call(this, direction, 'weeks');
}

function goDay(direction) {
  return goTime.call(this, direction, 'days');
}

var Calendar = __WEBPACK_IMPORTED_MODULE_3_create_react_class___default()({
  displayName: 'Calendar',

  propTypes: {
    prefixCls: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
    style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    defaultValue: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    value: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    selectedValue: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    mode: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['time', 'date', 'month', 'year', 'decade']),
    locale: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
    showDateInput: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    showWeekNumber: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    showToday: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    showOk: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
    onSelect: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    onOk: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    onKeyDown: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    timePicker: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.element,
    dateInputPlaceholder: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    onClear: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    onChange: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    onPanelChange: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    disabledDate: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    disabledTime: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
    renderFooter: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
    renderSidebar: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_10__mixin_CommonMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_9__mixin_CalendarMixin__["a" /* default */]],

  getDefaultProps: function getDefaultProps() {
    return {
      showToday: true,
      showDateInput: true,
      timePicker: null,
      onOk: noop,
      onPanelChange: noop
    };
  },
  getInitialState: function getInitialState() {
    return {
      mode: this.props.mode || 'date'
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('mode' in nextProps && this.state.mode !== nextProps.mode) {
      this.setState({ mode: nextProps.mode });
    }
  },
  onKeyDown: function onKeyDown(event) {
    if (event.target.nodeName.toLowerCase() === 'input') {
      return undefined;
    }
    var keyCode = event.keyCode;
    // mac
    var ctrlKey = event.ctrlKey || event.metaKey;
    var disabledDate = this.props.disabledDate;
    var value = this.state.value;

    switch (keyCode) {
      case __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].DOWN:
        goWeek.call(this, 1);
        event.preventDefault();
        return 1;
      case __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].UP:
        goWeek.call(this, -1);
        event.preventDefault();
        return 1;
      case __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].LEFT:
        if (ctrlKey) {
          goYear.call(this, -1);
        } else {
          goDay.call(this, -1);
        }
        event.preventDefault();
        return 1;
      case __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].RIGHT:
        if (ctrlKey) {
          goYear.call(this, 1);
        } else {
          goDay.call(this, 1);
        }
        event.preventDefault();
        return 1;
      case __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].HOME:
        goStartMonth.call(this);
        event.preventDefault();
        return 1;
      case __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].END:
        goEndMonth.call(this);
        event.preventDefault();
        return 1;
      case __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].PAGE_DOWN:
        goMonth.call(this, 1);
        event.preventDefault();
        return 1;
      case __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].PAGE_UP:
        goMonth.call(this, -1);
        event.preventDefault();
        return 1;
      case __WEBPACK_IMPORTED_MODULE_5_rc_util_es_KeyCode__["a" /* default */].ENTER:
        if (!disabledDate || !disabledDate(value)) {
          this.onSelect(value, {
            source: 'keyboard'
          });
        }
        event.preventDefault();
        return 1;
      default:
        this.props.onKeyDown(event);
        return 1;
    }
  },
  onClear: function onClear() {
    this.onSelect(null);
    this.props.onClear();
  },
  onOk: function onOk() {
    var selectedValue = this.state.selectedValue;

    if (this.isAllowedDate(selectedValue)) {
      this.props.onOk(selectedValue);
    }
  },
  onDateInputChange: function onDateInputChange(value) {
    this.onSelect(value, {
      source: 'dateInput'
    });
  },
  onDateTableSelect: function onDateTableSelect(value) {
    var timePicker = this.props.timePicker;
    var selectedValue = this.state.selectedValue;

    if (!selectedValue && timePicker) {
      var timePickerDefaultValue = timePicker.props.defaultValue;
      if (timePickerDefaultValue) {
        Object(__WEBPACK_IMPORTED_MODULE_12__util__["g" /* syncTime */])(timePickerDefaultValue, value);
      }
    }
    this.onSelect(value);
  },
  onToday: function onToday() {
    var value = this.state.value;

    var now = Object(__WEBPACK_IMPORTED_MODULE_12__util__["d" /* getTodayTime */])(value);
    this.onSelect(now, {
      source: 'todayButton'
    });
  },
  onPanelChange: function onPanelChange(value, mode) {
    var props = this.props,
        state = this.state;

    if (!('mode' in props)) {
      this.setState({ mode: mode });
    }
    props.onPanelChange(value || state.value, mode);
  },
  getRootDOMNode: function getRootDOMNode() {
    return __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this);
  },
  openTimePicker: function openTimePicker() {
    this.onPanelChange(null, 'time');
  },
  closeTimePicker: function closeTimePicker() {
    this.onPanelChange(null, 'date');
  },
  render: function render() {
    var props = this.props,
        state = this.state;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        disabledDate = props.disabledDate,
        dateInputPlaceholder = props.dateInputPlaceholder,
        timePicker = props.timePicker,
        disabledTime = props.disabledTime;
    var value = state.value,
        selectedValue = state.selectedValue,
        mode = state.mode;

    var showTimePicker = mode === 'time';
    var disabledTimeConfig = showTimePicker && disabledTime && timePicker ? Object(__WEBPACK_IMPORTED_MODULE_12__util__["b" /* getTimeConfig */])(selectedValue, disabledTime) : null;

    var timePickerEle = null;

    if (timePicker && showTimePicker) {
      var timePickerProps = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        showHour: true,
        showSecond: true,
        showMinute: true
      }, timePicker.props, disabledTimeConfig, {
        onChange: this.onDateInputChange,
        value: selectedValue,
        disabledTime: disabledTime
      });

      if (timePicker.props.defaultValue !== undefined) {
        timePickerProps.defaultOpenValue = timePicker.props.defaultValue;
      }

      timePickerEle = __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(timePicker, timePickerProps);
    }

    var dateInputElement = props.showDateInput ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__date_DateInput__["a" /* default */], {
      format: this.getFormat(),
      key: 'date-input',
      value: value,
      locale: locale,
      placeholder: dateInputPlaceholder,
      showClear: true,
      disabledTime: disabledTime,
      disabledDate: disabledDate,
      onClear: this.onClear,
      prefixCls: prefixCls,
      selectedValue: selectedValue,
      onChange: this.onDateInputChange
    }) : null;
    var children = [props.renderSidebar(), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { className: prefixCls + '-panel', key: 'panel' },
      dateInputElement,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: prefixCls + '-date-panel' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__calendar_CalendarHeader__["a" /* default */], {
          locale: locale,
          mode: mode,
          value: value,
          onValueChange: this.setValue,
          onPanelChange: this.onPanelChange,
          showTimePicker: showTimePicker,
          prefixCls: prefixCls
        }),
        timePicker && showTimePicker ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: prefixCls + '-time-picker' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: prefixCls + '-time-picker-panel' },
            timePickerEle
          )
        ) : null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: prefixCls + '-body' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__date_DateTable__["a" /* default */], {
            locale: locale,
            value: value,
            selectedValue: selectedValue,
            prefixCls: prefixCls,
            dateRender: props.dateRender,
            onSelect: this.onDateTableSelect,
            disabledDate: disabledDate,
            showWeekNumber: props.showWeekNumber
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__calendar_CalendarFooter__["a" /* default */], {
          showOk: props.showOk,
          renderFooter: props.renderFooter,
          locale: locale,
          prefixCls: prefixCls,
          showToday: props.showToday,
          disabledTime: disabledTime,
          showTimePicker: showTimePicker,
          showDateInput: props.showDateInput,
          timePicker: timePicker,
          selectedValue: selectedValue,
          value: value,
          disabledDate: disabledDate,
          okDisabled: !this.isAllowedDate(selectedValue),
          onOk: this.onOk,
          onSelect: this.onSelect,
          onToday: this.onToday,
          onOpenTimePicker: this.openTimePicker,
          onCloseTimePicker: this.closeTimePicker
        })
      )
    )];

    return this.renderRoot({
      children: children,
      className: props.showWeekNumber ? prefixCls + '-week-number' : ''
    });
  }
});

/* harmony default export */ __webpack_exports__["a"] = (Calendar);

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MonthTable__ = __webpack_require__(647);





function goYear(direction) {
  var next = this.state.value.clone();
  next.add(direction, 'year');
  this.setAndChangeValue(next);
}

function noop() {}

var MonthPanel = __WEBPACK_IMPORTED_MODULE_1_create_react_class___default()({
  displayName: 'MonthPanel',

  propTypes: {
    onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    disabledDate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    onSelect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onChange: noop,
      onSelect: noop
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    // bind methods
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    this.prefixCls = props.rootPrefixCls + '-month-panel';
    return {
      value: props.value || props.defaultValue
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  },
  setAndChangeValue: function setAndChangeValue(value) {
    this.setValue(value);
    this.props.onChange(value);
  },
  setAndSelectValue: function setAndSelectValue(value) {
    this.setValue(value);
    this.props.onSelect(value);
  },
  setValue: function setValue(value) {
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
  },
  render: function render() {
    var props = this.props;
    var value = this.state.value;
    var cellRender = props.cellRender;
    var contentRender = props.contentRender;
    var locale = props.locale;
    var year = value.year();
    var prefixCls = this.prefixCls;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: prefixCls, style: props.style },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: prefixCls + '-header' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', {
            className: prefixCls + '-prev-year-btn',
            role: 'button',
            onClick: this.previousYear,
            title: locale.previousYear
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            {
              className: prefixCls + '-year-select',
              role: 'button',
              onClick: props.onYearPanelShow,
              title: locale.yearSelect
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: prefixCls + '-year-select-content' },
              year
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: prefixCls + '-year-select-arrow' },
              'x'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', {
            className: prefixCls + '-next-year-btn',
            role: 'button',
            onClick: this.nextYear,
            title: locale.nextYear
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: prefixCls + '-body' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__MonthTable__["a" /* default */], {
            disabledDate: props.disabledDate,
            onSelect: this.setAndSelectValue,
            locale: locale,
            value: value,
            cellRender: cellRender,
            contentRender: contentRender,
            prefixCls: prefixCls
          })
        )
      )
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (MonthPanel);

/***/ }),

/***/ 882:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__range_calendar_CalendarPart__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__calendar_TodayButton__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendar_OkButton__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calendar_TimePickerButton__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mixin_CommonMixin__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util___ = __webpack_require__(420);













function noop() {}

function isEmptyArray(arr) {
  return Array.isArray(arr) && (arr.length === 0 || arr.every(function (i) {
    return !i;
  }));
}

function isArraysEqual(a, b) {
  if (a === b) return true;
  if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
    return false;
  }
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function getValueFromSelectedValue(selectedValue) {
  var start = selectedValue[0],
      end = selectedValue[1];

  var newEnd = end && end.isSame(start, 'month') ? end.clone().add(1, 'month') : end;
  return [start, newEnd];
}

function normalizeAnchor(props, init) {
  var selectedValue = props.selectedValue || init && props.defaultSelectedValue;
  var value = props.value || init && props.defaultValue;
  var normalizedValue = value ? getValueFromSelectedValue(value) : getValueFromSelectedValue(selectedValue);
  return !isEmptyArray(normalizedValue) ? normalizedValue : init && [__WEBPACK_IMPORTED_MODULE_4_moment___default()(), __WEBPACK_IMPORTED_MODULE_4_moment___default()().add(1, 'months')];
}

function generateOptions(length, extraOptionGen) {
  var arr = extraOptionGen ? extraOptionGen().concat() : [];
  for (var value = 0; value < length; value++) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }
  return arr;
}

function onInputSelect(direction, value) {
  if (!value) {
    return;
  }
  var originalValue = this.state.selectedValue;
  var selectedValue = originalValue.concat();
  var index = direction === 'left' ? 0 : 1;
  selectedValue[index] = value;
  if (selectedValue[0] && this.compare(selectedValue[0], selectedValue[1]) > 0) {
    selectedValue[1 - index] = this.state.showTimePicker ? selectedValue[index] : undefined;
  }
  this.props.onInputSelect(selectedValue);
  this.fireSelectValueChange(selectedValue);
}

var RangeCalendar = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
  displayName: 'RangeCalendar',

  propTypes: {
    prefixCls: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    dateInputPlaceholder: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    defaultValue: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    hoverValue: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    mode: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['date', 'month', 'year', 'decade'])),
    showDateInput: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    timePicker: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    showOk: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    showToday: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    defaultSelectedValue: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
    selectedValue: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
    onOk: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    showClear: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    locale: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
    onChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onSelect: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onValueChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onHoverChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    onPanelChange: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    format: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string]),
    onClear: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    type: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    disabledDate: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    disabledTime: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_10__mixin_CommonMixin__["a" /* default */]],

  getDefaultProps: function getDefaultProps() {
    return {
      type: 'both',
      defaultSelectedValue: [],
      onValueChange: noop,
      onHoverChange: noop,
      onPanelChange: noop,
      disabledTime: noop,
      onInputSelect: noop,
      showToday: true,
      showDateInput: true
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var selectedValue = props.selectedValue || props.defaultSelectedValue;
    var value = normalizeAnchor(props, 1);
    return {
      selectedValue: selectedValue,
      prevSelectedValue: selectedValue,
      firstSelectedValue: null,
      hoverValue: props.hoverValue || [],
      value: value,
      showTimePicker: false,
      mode: props.mode || ['date', 'date']
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var state = this.state;

    var newState = {};
    if ('value' in nextProps) {
      newState.value = normalizeAnchor(nextProps, 0);
      this.setState(newState);
    }
    if ('hoverValue' in nextProps && !isArraysEqual(state.hoverValue, nextProps.hoverValue)) {
      this.setState({ hoverValue: nextProps.hoverValue });
    }
    if ('selectedValue' in nextProps) {
      newState.selectedValue = nextProps.selectedValue;
      newState.prevSelectedValue = nextProps.selectedValue;
      this.setState(newState);
    }
    if ('mode' in nextProps && !isArraysEqual(state.mode, nextProps.mode)) {
      this.setState({ mode: nextProps.mode });
    }
  },
  onDatePanelEnter: function onDatePanelEnter() {
    if (this.hasSelectedValue()) {
      this.fireHoverValueChange(this.state.selectedValue.concat());
    }
  },
  onDatePanelLeave: function onDatePanelLeave() {
    if (this.hasSelectedValue()) {
      this.fireHoverValueChange([]);
    }
  },
  onSelect: function onSelect(value) {
    var type = this.props.type;
    var _state = this.state,
        selectedValue = _state.selectedValue,
        prevSelectedValue = _state.prevSelectedValue,
        firstSelectedValue = _state.firstSelectedValue;

    var nextSelectedValue = void 0;
    if (type === 'both') {
      if (!firstSelectedValue) {
        Object(__WEBPACK_IMPORTED_MODULE_11__util___["g" /* syncTime */])(prevSelectedValue[0], value);
        nextSelectedValue = [value];
      } else if (this.compare(firstSelectedValue, value) < 0) {
        Object(__WEBPACK_IMPORTED_MODULE_11__util___["g" /* syncTime */])(prevSelectedValue[1], value);
        nextSelectedValue = [firstSelectedValue, value];
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_11__util___["g" /* syncTime */])(prevSelectedValue[0], value);
        Object(__WEBPACK_IMPORTED_MODULE_11__util___["g" /* syncTime */])(prevSelectedValue[1], firstSelectedValue);
        nextSelectedValue = [value, firstSelectedValue];
      }
    } else if (type === 'start') {
      Object(__WEBPACK_IMPORTED_MODULE_11__util___["g" /* syncTime */])(prevSelectedValue[0], value);
      var endValue = selectedValue[1];
      nextSelectedValue = endValue && this.compare(endValue, value) > 0 ? [value, endValue] : [value];
    } else {
      // type === 'end'
      var startValue = selectedValue[0];
      if (startValue && this.compare(startValue, value) <= 0) {
        Object(__WEBPACK_IMPORTED_MODULE_11__util___["g" /* syncTime */])(prevSelectedValue[1], value);
        nextSelectedValue = [startValue, value];
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_11__util___["g" /* syncTime */])(prevSelectedValue[0], value);
        nextSelectedValue = [value];
      }
    }

    this.fireSelectValueChange(nextSelectedValue);
  },
  onDayHover: function onDayHover(value) {
    var hoverValue = [];
    var _state2 = this.state,
        selectedValue = _state2.selectedValue,
        firstSelectedValue = _state2.firstSelectedValue;
    var type = this.props.type;

    if (type === 'start' && selectedValue[1]) {
      hoverValue = this.compare(value, selectedValue[1]) < 0 ? [value, selectedValue[1]] : [value];
    } else if (type === 'end' && selectedValue[0]) {
      hoverValue = this.compare(value, selectedValue[0]) > 0 ? [selectedValue[0], value] : [];
    } else {
      if (!firstSelectedValue) {
        return;
      }
      hoverValue = this.compare(value, firstSelectedValue) < 0 ? [value, firstSelectedValue] : [firstSelectedValue, value];
    }
    this.fireHoverValueChange(hoverValue);
  },
  onToday: function onToday() {
    var startValue = Object(__WEBPACK_IMPORTED_MODULE_11__util___["d" /* getTodayTime */])(this.state.value[0]);
    var endValue = startValue.clone().add(1, 'months');
    this.setState({ value: [startValue, endValue] });
  },
  onOpenTimePicker: function onOpenTimePicker() {
    this.setState({
      showTimePicker: true
    });
  },
  onCloseTimePicker: function onCloseTimePicker() {
    this.setState({
      showTimePicker: false
    });
  },
  onOk: function onOk() {
    var selectedValue = this.state.selectedValue;

    if (this.isAllowedDateAndTime(selectedValue)) {
      this.props.onOk(this.state.selectedValue);
    }
  },
  onStartInputSelect: function onStartInputSelect() {
    for (var _len = arguments.length, oargs = Array(_len), _key = 0; _key < _len; _key++) {
      oargs[_key] = arguments[_key];
    }

    var args = ['left'].concat(oargs);
    return onInputSelect.apply(this, args);
  },
  onEndInputSelect: function onEndInputSelect() {
    for (var _len2 = arguments.length, oargs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      oargs[_key2] = arguments[_key2];
    }

    var args = ['right'].concat(oargs);
    return onInputSelect.apply(this, args);
  },
  onStartValueChange: function onStartValueChange(leftValue) {
    var value = [].concat(this.state.value);
    value[0] = leftValue;
    return this.fireValueChange(value);
  },
  onEndValueChange: function onEndValueChange(rightValue) {
    var value = [].concat(this.state.value);
    value[1] = rightValue;
    return this.fireValueChange(value);
  },
  onStartPanelChange: function onStartPanelChange(value, mode) {
    var props = this.props,
        state = this.state;

    var newMode = [mode, state.mode[1]];
    if (!('mode' in props)) {
      this.setState({
        mode: newMode
      });
    }
    var newValue = [value || state.value[0], state.value[1]];
    props.onPanelChange(newValue, newMode);
  },
  onEndPanelChange: function onEndPanelChange(value, mode) {
    var props = this.props,
        state = this.state;

    var newMode = [state.mode[0], mode];
    if (!('mode' in props)) {
      this.setState({
        mode: newMode
      });
    }
    var newValue = [state.value[0], value || state.value[1]];
    props.onPanelChange(newValue, newMode);
  },
  getStartValue: function getStartValue() {
    var value = this.state.value[0];
    var selectedValue = this.state.selectedValue;
    // keep selectedTime when select date
    if (selectedValue[0] && this.props.timePicker) {
      value = value.clone();
      Object(__WEBPACK_IMPORTED_MODULE_11__util___["g" /* syncTime */])(selectedValue[0], value);
    }
    if (this.state.showTimePicker && selectedValue[0]) {
      return selectedValue[0];
    }
    return value;
  },
  getEndValue: function getEndValue() {
    var _state3 = this.state,
        value = _state3.value,
        selectedValue = _state3.selectedValue,
        showTimePicker = _state3.showTimePicker;

    var endValue = value[1] ? value[1].clone() : value[0].clone().add(1, 'month');
    // keep selectedTime when select date
    if (selectedValue[1] && this.props.timePicker) {
      Object(__WEBPACK_IMPORTED_MODULE_11__util___["g" /* syncTime */])(selectedValue[1], endValue);
    }
    if (showTimePicker) {
      return selectedValue[1] ? selectedValue[1] : this.getStartValue();
    }
    return endValue;
  },

  // get disabled hours for second picker
  getEndDisableTime: function getEndDisableTime() {
    var _state4 = this.state,
        selectedValue = _state4.selectedValue,
        value = _state4.value;
    var disabledTime = this.props.disabledTime;

    var userSettingDisabledTime = disabledTime(selectedValue, 'end') || {};
    var startValue = selectedValue && selectedValue[0] || value[0].clone();
    // if startTime and endTime is same day..
    // the second time picker will not able to pick time before first time picker
    if (!selectedValue[1] || startValue.isSame(selectedValue[1], 'day')) {
      var hours = startValue.hour();
      var minutes = startValue.minute();
      var second = startValue.second();
      var _disabledHours = userSettingDisabledTime.disabledHours,
          _disabledMinutes = userSettingDisabledTime.disabledMinutes,
          _disabledSeconds = userSettingDisabledTime.disabledSeconds;

      var oldDisabledMinutes = _disabledMinutes ? _disabledMinutes() : [];
      var olddisabledSeconds = _disabledSeconds ? _disabledSeconds() : [];
      _disabledHours = generateOptions(hours, _disabledHours);
      _disabledMinutes = generateOptions(minutes, _disabledMinutes);
      _disabledSeconds = generateOptions(second, _disabledSeconds);
      return {
        disabledHours: function disabledHours() {
          return _disabledHours;
        },
        disabledMinutes: function disabledMinutes(hour) {
          if (hour === hours) {
            return _disabledMinutes;
          }
          return oldDisabledMinutes;
        },
        disabledSeconds: function disabledSeconds(hour, minute) {
          if (hour === hours && minute === minutes) {
            return _disabledSeconds;
          }
          return olddisabledSeconds;
        }
      };
    }
    return userSettingDisabledTime;
  },
  isAllowedDateAndTime: function isAllowedDateAndTime(selectedValue) {
    return Object(__WEBPACK_IMPORTED_MODULE_11__util___["f" /* isAllowedDate */])(selectedValue[0], this.props.disabledDate, this.disabledStartTime) && Object(__WEBPACK_IMPORTED_MODULE_11__util___["f" /* isAllowedDate */])(selectedValue[1], this.props.disabledDate, this.disabledEndTime);
  },
  isMonthYearPanelShow: function isMonthYearPanelShow(mode) {
    return ['month', 'year', 'decade'].indexOf(mode) > -1;
  },
  hasSelectedValue: function hasSelectedValue() {
    var selectedValue = this.state.selectedValue;

    return !!selectedValue[1] && !!selectedValue[0];
  },
  compare: function compare(v1, v2) {
    if (this.props.timePicker) {
      return v1.diff(v2);
    }
    return v1.diff(v2, 'days');
  },
  fireSelectValueChange: function fireSelectValueChange(selectedValue, direct) {
    var timePicker = this.props.timePicker;
    var prevSelectedValue = this.state.prevSelectedValue;

    if (timePicker && timePicker.props.defaultValue) {
      var timePickerDefaultValue = timePicker.props.defaultValue;
      if (!prevSelectedValue[0] && selectedValue[0]) {
        Object(__WEBPACK_IMPORTED_MODULE_11__util___["g" /* syncTime */])(timePickerDefaultValue[0], selectedValue[0]);
      }
      if (!prevSelectedValue[1] && selectedValue[1]) {
        Object(__WEBPACK_IMPORTED_MODULE_11__util___["g" /* syncTime */])(timePickerDefaultValue[1], selectedValue[1]);
      }
    }

    if (!('selectedValue' in this.props)) {
      this.setState({
        selectedValue: selectedValue
      });
    }

    // 尚未选择过时间，直接输入的话
    if (!this.state.selectedValue[0] || !this.state.selectedValue[1]) {
      var startValue = selectedValue[0] || __WEBPACK_IMPORTED_MODULE_4_moment___default()();
      var endValue = selectedValue[1] || startValue.clone().add(1, 'months');
      this.setState({
        selectedValue: selectedValue,
        value: getValueFromSelectedValue([startValue, endValue])
      });
    }

    if (selectedValue[0] && !selectedValue[1]) {
      this.setState({ firstSelectedValue: selectedValue[0] });
      this.fireHoverValueChange(selectedValue.concat());
    }
    this.props.onChange(selectedValue);
    if (direct || selectedValue[0] && selectedValue[1]) {
      this.setState({
        prevSelectedValue: selectedValue,
        firstSelectedValue: null
      });
      this.fireHoverValueChange([]);
      this.props.onSelect(selectedValue);
    }
  },
  fireValueChange: function fireValueChange(value) {
    var props = this.props;
    if (!('value' in props)) {
      this.setState({
        value: value
      });
    }
    props.onValueChange(value);
  },
  fireHoverValueChange: function fireHoverValueChange(hoverValue) {
    var props = this.props;
    if (!('hoverValue' in props)) {
      this.setState({ hoverValue: hoverValue });
    }
    props.onHoverChange(hoverValue);
  },
  clear: function clear() {
    this.fireSelectValueChange([], true);
    this.props.onClear();
  },
  disabledStartTime: function disabledStartTime(time) {
    return this.props.disabledTime(time, 'start');
  },
  disabledEndTime: function disabledEndTime(time) {
    return this.props.disabledTime(time, 'end');
  },
  disabledStartMonth: function disabledStartMonth(month) {
    var value = this.state.value;

    return month.isSameOrAfter(value[1], 'month');
  },
  disabledEndMonth: function disabledEndMonth(month) {
    var value = this.state.value;

    return month.isSameOrBefore(value[0], 'month');
  },
  render: function render() {
    var _className, _classnames;

    var props = this.props,
        state = this.state;
    var prefixCls = props.prefixCls,
        dateInputPlaceholder = props.dateInputPlaceholder,
        timePicker = props.timePicker,
        showOk = props.showOk,
        locale = props.locale,
        showClear = props.showClear,
        showToday = props.showToday,
        type = props.type;
    var hoverValue = state.hoverValue,
        selectedValue = state.selectedValue,
        mode = state.mode,
        showTimePicker = state.showTimePicker;

    var className = (_className = {}, _className[props.className] = !!props.className, _className[prefixCls] = 1, _className[prefixCls + '-hidden'] = !props.visible, _className[prefixCls + '-range'] = 1, _className[prefixCls + '-show-time-picker'] = showTimePicker, _className[prefixCls + '-week-number'] = props.showWeekNumber, _className);
    var classes = __WEBPACK_IMPORTED_MODULE_5_classnames___default()(className);
    var newProps = {
      selectedValue: state.selectedValue,
      onSelect: this.onSelect,
      onDayHover: type === 'start' && selectedValue[1] || type === 'end' && selectedValue[0] || !!hoverValue.length ? this.onDayHover : undefined
    };

    var placeholder1 = void 0;
    var placeholder2 = void 0;

    if (dateInputPlaceholder) {
      if (Array.isArray(dateInputPlaceholder)) {
        placeholder1 = dateInputPlaceholder[0];
        placeholder2 = dateInputPlaceholder[1];
      } else {
        placeholder1 = placeholder2 = dateInputPlaceholder;
      }
    }
    var showOkButton = showOk === true || showOk !== false && !!timePicker;
    var cls = __WEBPACK_IMPORTED_MODULE_5_classnames___default()((_classnames = {}, _classnames[prefixCls + '-footer'] = true, _classnames[prefixCls + '-range-bottom'] = true, _classnames[prefixCls + '-footer-show-ok'] = showOkButton, _classnames));

    var startValue = this.getStartValue();
    var endValue = this.getEndValue();
    var todayTime = Object(__WEBPACK_IMPORTED_MODULE_11__util___["d" /* getTodayTime */])(startValue);
    var thisMonth = todayTime.month();
    var thisYear = todayTime.year();
    var isTodayInView = startValue.year() === thisYear && startValue.month() === thisMonth || endValue.year() === thisYear && endValue.month() === thisMonth;
    var nextMonthOfStart = startValue.clone().add(1, 'months');
    var isClosestMonths = nextMonthOfStart.year() === endValue.year() && nextMonthOfStart.month() === endValue.month();
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        ref: this.saveRoot,
        className: classes,
        style: props.style,
        tabIndex: '0'
      },
      props.renderSidebar(),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: prefixCls + '-panel' },
        showClear && selectedValue[0] && selectedValue[1] ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('a', {
          className: prefixCls + '-clear-btn',
          role: 'button',
          title: locale.clear,
          onClick: this.clear
        }) : null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: prefixCls + '-date-panel',
            onMouseLeave: type !== 'both' ? this.onDatePanelLeave : undefined,
            onMouseEnter: type !== 'both' ? this.onDatePanelEnter : undefined
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__range_calendar_CalendarPart__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, newProps, {
            hoverValue: hoverValue,
            direction: 'left',
            disabledTime: this.disabledStartTime,
            disabledMonth: this.disabledStartMonth,
            format: this.getFormat(),
            value: startValue,
            mode: mode[0],
            placeholder: placeholder1,
            onInputSelect: this.onStartInputSelect,
            onValueChange: this.onStartValueChange,
            onPanelChange: this.onStartPanelChange,
            showDateInput: this.props.showDateInput,
            timePicker: timePicker,
            showTimePicker: showTimePicker,
            enablePrev: true,
            enableNext: !isClosestMonths || this.isMonthYearPanelShow(mode[1])
          })),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            { className: prefixCls + '-range-middle' },
            '~'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__range_calendar_CalendarPart__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, newProps, {
            hoverValue: hoverValue,
            direction: 'right',
            format: this.getFormat(),
            timePickerDisabledTime: this.getEndDisableTime(),
            placeholder: placeholder2,
            value: endValue,
            mode: mode[1],
            onInputSelect: this.onEndInputSelect,
            onValueChange: this.onEndValueChange,
            onPanelChange: this.onEndPanelChange,
            showDateInput: this.props.showDateInput,
            timePicker: timePicker,
            showTimePicker: showTimePicker,
            disabledTime: this.disabledEndTime,
            disabledMonth: this.disabledEndMonth,
            enablePrev: !isClosestMonths || this.isMonthYearPanelShow(mode[0]),
            enableNext: true
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: cls },
          props.renderFooter(),
          showToday || props.timePicker || showOkButton ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: prefixCls + '-footer-btn' },
            showToday ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__calendar_TodayButton__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
              disabled: isTodayInView,
              value: state.value[0],
              onToday: this.onToday,
              text: locale.backToToday
            })) : null,
            props.timePicker ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__calendar_TimePickerButton__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
              showTimePicker: showTimePicker,
              onOpenTimePicker: this.onOpenTimePicker,
              onCloseTimePicker: this.onCloseTimePicker,
              timePickerDisabled: !this.hasSelectedValue() || hoverValue.length
            })) : null,
            showOkButton ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__calendar_OkButton__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
              onOk: this.onOk,
              okDisabled: !this.isAllowedDateAndTime(selectedValue) || !this.hasSelectedValue() || hoverValue.length
            })) : null
          ) : null
        )
      )
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (RangeCalendar);

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_react_class___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_create_react_class__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_CalendarHeader__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__date_DateTable__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__date_DateInput__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_index__ = __webpack_require__(420);









var CalendarPart = __WEBPACK_IMPORTED_MODULE_2_create_react_class___default()({
  displayName: 'CalendarPart',

  propTypes: {
    prefixCls: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
    value: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    hoverValue: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    selectedValue: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    direction: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    locale: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    showDateInput: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    showTimePicker: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    format: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    placeholder: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    disabledDate: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    timePicker: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    disabledTime: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    onInputSelect: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
    timePickerDisabledTime: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
    enableNext: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,
    enablePrev: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any
  },
  render: function render() {
    var props = this.props;
    var prefixCls = props.prefixCls,
        value = props.value,
        hoverValue = props.hoverValue,
        selectedValue = props.selectedValue,
        mode = props.mode,
        direction = props.direction,
        locale = props.locale,
        format = props.format,
        placeholder = props.placeholder,
        disabledDate = props.disabledDate,
        timePicker = props.timePicker,
        disabledTime = props.disabledTime,
        timePickerDisabledTime = props.timePickerDisabledTime,
        showTimePicker = props.showTimePicker,
        onInputSelect = props.onInputSelect,
        enablePrev = props.enablePrev,
        enableNext = props.enableNext;

    var shouldShowTimePicker = showTimePicker && timePicker;
    var disabledTimeConfig = shouldShowTimePicker && disabledTime ? Object(__WEBPACK_IMPORTED_MODULE_7__util_index__["b" /* getTimeConfig */])(selectedValue, disabledTime) : null;
    var rangeClassName = prefixCls + '-range';
    var newProps = {
      locale: locale,
      value: value,
      prefixCls: prefixCls,
      showTimePicker: showTimePicker
    };
    var index = direction === 'left' ? 0 : 1;
    var timePickerEle = shouldShowTimePicker && __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(timePicker, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      showHour: true,
      showMinute: true,
      showSecond: true
    }, timePicker.props, disabledTimeConfig, timePickerDisabledTime, {
      onChange: onInputSelect,
      defaultOpenValue: value,
      value: selectedValue[index]
    }));

    var dateInputElement = props.showDateInput && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__date_DateInput__["a" /* default */], {
      format: format,
      locale: locale,
      prefixCls: prefixCls,
      timePicker: timePicker,
      disabledDate: disabledDate,
      placeholder: placeholder,
      disabledTime: disabledTime,
      value: value,
      showClear: false,
      selectedValue: selectedValue[index],
      onChange: onInputSelect
    });

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      { className: rangeClassName + '-part ' + rangeClassName + '-' + direction },
      dateInputElement,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { style: { outline: 'none' } },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__calendar_CalendarHeader__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, newProps, {
          mode: mode,
          enableNext: enableNext,
          enablePrev: enablePrev,
          onValueChange: props.onValueChange,
          onPanelChange: props.onPanelChange,
          disabledMonth: props.disabledMonth
        })),
        showTimePicker ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: prefixCls + '-time-picker' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            { className: prefixCls + '-time-picker-panel' },
            timePickerEle
          )
        ) : null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: prefixCls + '-body' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__date_DateTable__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, newProps, {
            hoverValue: hoverValue,
            selectedValue: selectedValue,
            dateRender: props.dateRender,
            onSelect: props.onSelect,
            onDayHover: props.onDayHover,
            disabledDate: disabledDate,
            showWeekNumber: props.showWeekNumber
          }))
        )
      )
    );
  }
});

/* harmony default export */ __webpack_exports__["a"] = (CalendarPart);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5iMjU3NWQ0M2JjMmM1MTkwYmI5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jcmVhdGUtcmVhY3QtY2xhc3NAMTUuNi4zQGNyZWF0ZS1yZWFjdC1jbGFzcy9pbmRleC5qcz9hNzI4YzRmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcmMtY2FsZW5kYXJAOS42LjBAcmMtY2FsZW5kYXIvZXMvY2FsZW5kYXIvQ2FsZW5kYXJIZWFkZXIuanM/YzhjOWFjZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL1BpY2tlci5qcz9jOGM5YWNmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcmMtdGFic0A5LjIuNUByYy10YWJzL2VzL1RhYlBhbmUuanM/MmM2Njk4YiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JjLXRhYnNAOS4yLjVAcmMtdGFicy9lcy9UYWJDb250ZW50LmpzPzJjNjY5OGIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19yYy1jYWxlbmRhckA5LjYuMEByYy1jYWxlbmRhci9lcy9jYWxlbmRhci9DYWxlbmRhckZvb3Rlci5qcz9lMDBlOGZjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcmMtY2FsZW5kYXJAOS42LjBAcmMtY2FsZW5kYXIvZXMvZGF0ZS9EYXRlSW5wdXQuanM/ZTAwZThmYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL01vbnRoQ2FsZW5kYXIuanM/ZTAwZThmYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JjLWZvcm1AMi4yLjBAcmMtZm9ybS9lcy9jcmVhdGVCYXNlRm9ybS5qcz9lMDBlOGZjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcmMtbWVudUA2LjIuMTBAcmMtbWVudS9lcy9NZW51LmpzP2MwZjZmYTIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19yYy1tZW51QDYuMi4xMEByYy1tZW51L2VzL0RPTVdyYXAuanM/YzBmNmZhMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JjLW1lbnVANi4yLjEwQHJjLW1lbnUvZXMvU3ViTWVudS5qcz9jMGY2ZmEyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcmMtbWVudUA2LjIuMTBAcmMtbWVudS9lcy9TdWJQb3B1cE1lbnUuanM/YzBmNmZhMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JjLW1lbnVANi4yLjEwQHJjLW1lbnUvZXMvTWVudUl0ZW0uanM/NDEyZDBhNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JjLW1lbnVANi4yLjEwQHJjLW1lbnUvZXMvTWVudUl0ZW1Hcm91cC5qcz80MTJkMGE0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcmMtbWVudUA2LjIuMTBAcmMtbWVudS9lcy9EaXZpZGVyLmpzPzQxMmQwYTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19yYy1jYWxlbmRhckA5LjYuMEByYy1jYWxlbmRhci9lcy9GdWxsQ2FsZW5kYXIuanM/NDEyZDBhNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL2RhdGUvRGF0ZVRCb2R5LmpzPzQxMmQwYTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19yYy10YWJzQDkuMi41QHJjLXRhYnMvZXMvU2Nyb2xsYWJsZUlua1RhYkJhci5qcz81ZmYzOTdkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcmMtY2FsZW5kYXJAOS42LjBAcmMtY2FsZW5kYXIvZXMvQ2FsZW5kYXIuanM/NWQ4ODBkOCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL21vbnRoL01vbnRoUGFuZWwuanM/NWQ4ODBkOCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL1JhbmdlQ2FsZW5kYXIuanM/NWQ4ODBkOCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL3JhbmdlLWNhbGVuZGFyL0NhbGVuZGFyUGFydC5qcz9hYzkyNGQ4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBmYWN0b3J5ID0gcmVxdWlyZSgnLi9mYWN0b3J5Jyk7XG5cbmlmICh0eXBlb2YgUmVhY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gIHRocm93IEVycm9yKFxuICAgICdjcmVhdGUtcmVhY3QtY2xhc3MgY291bGQgbm90IGZpbmQgdGhlIFJlYWN0IG9iamVjdC4gSWYgeW91IGFyZSB1c2luZyBzY3JpcHQgdGFncywgJyArXG4gICAgICAnbWFrZSBzdXJlIHRoYXQgUmVhY3QgaXMgYmVpbmcgbG9hZGVkIGJlZm9yZSBjcmVhdGUtcmVhY3QtY2xhc3MuJ1xuICApO1xufVxuXG4vLyBIYWNrIHRvIGdyYWIgTm9vcFVwZGF0ZVF1ZXVlIGZyb20gaXNvbW9ycGhpYyBSZWFjdFxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0gbmV3IFJlYWN0LkNvbXBvbmVudCgpLnVwZGF0ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgUmVhY3QuQ29tcG9uZW50LFxuICBSZWFjdC5pc1ZhbGlkRWxlbWVudCxcbiAgUmVhY3ROb29wVXBkYXRlUXVldWVcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY3JlYXRlLXJlYWN0LWNsYXNzQDE1LjYuM0BjcmVhdGUtcmVhY3QtY2xhc3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tICdjcmVhdGUtcmVhY3QtY2xhc3MnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB0b0ZyYWdtZW50IGZyb20gJ3JjLXV0aWwvZXMvQ2hpbGRyZW4vbWFwU2VsZic7XG5pbXBvcnQgTW9udGhQYW5lbCBmcm9tICcuLi9tb250aC9Nb250aFBhbmVsJztcbmltcG9ydCBZZWFyUGFuZWwgZnJvbSAnLi4veWVhci9ZZWFyUGFuZWwnO1xuaW1wb3J0IERlY2FkZVBhbmVsIGZyb20gJy4uL2RlY2FkZS9EZWNhZGVQYW5lbCc7XG5cbmZ1bmN0aW9uIGdvTW9udGgoZGlyZWN0aW9uKSB7XG4gIHZhciBuZXh0ID0gdGhpcy5wcm9wcy52YWx1ZS5jbG9uZSgpO1xuICBuZXh0LmFkZChkaXJlY3Rpb24sICdtb250aHMnKTtcbiAgdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlKG5leHQpO1xufVxuXG5mdW5jdGlvbiBnb1llYXIoZGlyZWN0aW9uKSB7XG4gIHZhciBuZXh0ID0gdGhpcy5wcm9wcy52YWx1ZS5jbG9uZSgpO1xuICBuZXh0LmFkZChkaXJlY3Rpb24sICd5ZWFycycpO1xuICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UobmV4dCk7XG59XG5cbmZ1bmN0aW9uIHNob3dJZihjb25kaXRpb24sIGVsKSB7XG4gIHJldHVybiBjb25kaXRpb24gPyBlbCA6IG51bGw7XG59XG5cbnZhciBDYWxlbmRhckhlYWRlciA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0NhbGVuZGFySGVhZGVyJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd1RpbWVQaWNrZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uUGFuZWxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBlbmFibGVQcmV2OiBQcm9wVHlwZXMuYW55LFxuICAgIGVuYWJsZU5leHQ6IFByb3BUeXBlcy5hbnksXG4gICAgZGlzYWJsZWRNb250aDogUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW5hYmxlTmV4dDogMSxcbiAgICAgIGVuYWJsZVByZXY6IDEsXG4gICAgICBvblBhbmVsQ2hhbmdlOiBmdW5jdGlvbiBvblBhbmVsQ2hhbmdlKCkge30sXG4gICAgICBvblZhbHVlQ2hhbmdlOiBmdW5jdGlvbiBvblZhbHVlQ2hhbmdlKCkge31cbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB0aGlzLm5leHRNb250aCA9IGdvTW9udGguYmluZCh0aGlzLCAxKTtcbiAgICB0aGlzLnByZXZpb3VzTW9udGggPSBnb01vbnRoLmJpbmQodGhpcywgLTEpO1xuICAgIHRoaXMubmV4dFllYXIgPSBnb1llYXIuYmluZCh0aGlzLCAxKTtcbiAgICB0aGlzLnByZXZpb3VzWWVhciA9IGdvWWVhci5iaW5kKHRoaXMsIC0xKTtcbiAgICByZXR1cm4geyB5ZWFyUGFuZWxSZWZlcmVyOiBudWxsIH07XG4gIH0sXG4gIG9uTW9udGhTZWxlY3Q6IGZ1bmN0aW9uIG9uTW9udGhTZWxlY3QodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm9uUGFuZWxDaGFuZ2UodmFsdWUsICdkYXRlJyk7XG4gICAgaWYgKHRoaXMucHJvcHMub25Nb250aFNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1vbnRoU2VsZWN0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIG9uWWVhclNlbGVjdDogZnVuY3Rpb24gb25ZZWFyU2VsZWN0KHZhbHVlKSB7XG4gICAgdmFyIHJlZmVyZXIgPSB0aGlzLnN0YXRlLnllYXJQYW5lbFJlZmVyZXI7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHllYXJQYW5lbFJlZmVyZXI6IG51bGwgfSk7XG4gICAgdGhpcy5wcm9wcy5vblBhbmVsQ2hhbmdlKHZhbHVlLCByZWZlcmVyKTtcbiAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUpO1xuICB9LFxuICBvbkRlY2FkZVNlbGVjdDogZnVuY3Rpb24gb25EZWNhZGVTZWxlY3QodmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLm9uUGFuZWxDaGFuZ2UodmFsdWUsICd5ZWFyJyk7XG4gICAgdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcbiAgfSxcbiAgbW9udGhZZWFyRWxlbWVudDogZnVuY3Rpb24gbW9udGhZZWFyRWxlbWVudChzaG93VGltZVBpY2tlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHM7XG4gICAgdmFyIGxvY2FsZSA9IHByb3BzLmxvY2FsZTtcbiAgICB2YXIgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICB2YXIgbG9jYWxlRGF0YSA9IHZhbHVlLmxvY2FsZURhdGEoKTtcbiAgICB2YXIgbW9udGhCZWZvcmVZZWFyID0gbG9jYWxlLm1vbnRoQmVmb3JlWWVhcjtcbiAgICB2YXIgc2VsZWN0Q2xhc3NOYW1lID0gcHJlZml4Q2xzICsgJy0nICsgKG1vbnRoQmVmb3JlWWVhciA/ICdteS1zZWxlY3QnIDogJ3ltLXNlbGVjdCcpO1xuICAgIHZhciB5ZWFyID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXllYXItc2VsZWN0JyxcbiAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgIG9uQ2xpY2s6IHNob3dUaW1lUGlja2VyID8gbnVsbCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd1llYXJQYW5lbCgnZGF0ZScpO1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZTogbG9jYWxlLnllYXJTZWxlY3RcbiAgICAgIH0sXG4gICAgICB2YWx1ZS5mb3JtYXQobG9jYWxlLnllYXJGb3JtYXQpXG4gICAgKTtcbiAgICB2YXIgbW9udGggPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctbW9udGgtc2VsZWN0JyxcbiAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgIG9uQ2xpY2s6IHNob3dUaW1lUGlja2VyID8gbnVsbCA6IHRoaXMuc2hvd01vbnRoUGFuZWwsXG4gICAgICAgIHRpdGxlOiBsb2NhbGUubW9udGhTZWxlY3RcbiAgICAgIH0sXG4gICAgICBsb2NhbGVEYXRhLm1vbnRoc1Nob3J0KHZhbHVlKVxuICAgICk7XG4gICAgdmFyIGRheSA9IHZvaWQgMDtcbiAgICBpZiAoc2hvd1RpbWVQaWNrZXIpIHtcbiAgICAgIGRheSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1kYXktc2VsZWN0JyxcbiAgICAgICAgICByb2xlOiAnYnV0dG9uJ1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZS5mb3JtYXQobG9jYWxlLmRheUZvcm1hdClcbiAgICAgICk7XG4gICAgfVxuICAgIHZhciBteSA9IFtdO1xuICAgIGlmIChtb250aEJlZm9yZVllYXIpIHtcbiAgICAgIG15ID0gW21vbnRoLCBkYXksIHllYXJdO1xuICAgIH0gZWxzZSB7XG4gICAgICBteSA9IFt5ZWFyLCBtb250aCwgZGF5XTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7IGNsYXNzTmFtZTogc2VsZWN0Q2xhc3NOYW1lIH0sXG4gICAgICB0b0ZyYWdtZW50KG15KVxuICAgICk7XG4gIH0sXG4gIHNob3dNb250aFBhbmVsOiBmdW5jdGlvbiBzaG93TW9udGhQYW5lbCgpIHtcbiAgICAvLyBudWxsIG1lYW5zIHRoYXQgdXNlcnMnIGludGVyYWN0aW9uIGRvZXNuJ3QgY2hhbmdlIHZhbHVlXG4gICAgdGhpcy5wcm9wcy5vblBhbmVsQ2hhbmdlKG51bGwsICdtb250aCcpO1xuICB9LFxuICBzaG93WWVhclBhbmVsOiBmdW5jdGlvbiBzaG93WWVhclBhbmVsKHJlZmVyZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgeWVhclBhbmVsUmVmZXJlcjogcmVmZXJlciB9KTtcbiAgICB0aGlzLnByb3BzLm9uUGFuZWxDaGFuZ2UobnVsbCwgJ3llYXInKTtcbiAgfSxcbiAgc2hvd0RlY2FkZVBhbmVsOiBmdW5jdGlvbiBzaG93RGVjYWRlUGFuZWwoKSB7XG4gICAgdGhpcy5wcm9wcy5vblBhbmVsQ2hhbmdlKG51bGwsICdkZWNhZGUnKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgICAgbW9kZSA9IHByb3BzLm1vZGUsXG4gICAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUsXG4gICAgICAgIHNob3dUaW1lUGlja2VyID0gcHJvcHMuc2hvd1RpbWVQaWNrZXIsXG4gICAgICAgIGVuYWJsZU5leHQgPSBwcm9wcy5lbmFibGVOZXh0LFxuICAgICAgICBlbmFibGVQcmV2ID0gcHJvcHMuZW5hYmxlUHJldixcbiAgICAgICAgZGlzYWJsZWRNb250aCA9IHByb3BzLmRpc2FibGVkTW9udGg7XG5cblxuICAgIHZhciBwYW5lbCA9IG51bGw7XG4gICAgaWYgKG1vZGUgPT09ICdtb250aCcpIHtcbiAgICAgIHBhbmVsID0gUmVhY3QuY3JlYXRlRWxlbWVudChNb250aFBhbmVsLCB7XG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHZhbHVlLFxuICAgICAgICByb290UHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLm9uTW9udGhTZWxlY3QsXG4gICAgICAgIG9uWWVhclBhbmVsU2hvdzogZnVuY3Rpb24gb25ZZWFyUGFuZWxTaG93KCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuc2hvd1llYXJQYW5lbCgnbW9udGgnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWREYXRlOiBkaXNhYmxlZE1vbnRoLFxuICAgICAgICBjZWxsUmVuZGVyOiBwcm9wcy5tb250aENlbGxSZW5kZXIsXG4gICAgICAgIGNvbnRlbnRSZW5kZXI6IHByb3BzLm1vbnRoQ2VsbENvbnRlbnRSZW5kZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobW9kZSA9PT0gJ3llYXInKSB7XG4gICAgICBwYW5lbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoWWVhclBhbmVsLCB7XG4gICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHZhbHVlLFxuICAgICAgICByb290UHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIG9uU2VsZWN0OiB0aGlzLm9uWWVhclNlbGVjdCxcbiAgICAgICAgb25EZWNhZGVQYW5lbFNob3c6IHRoaXMuc2hvd0RlY2FkZVBhbmVsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG1vZGUgPT09ICdkZWNhZGUnKSB7XG4gICAgICBwYW5lbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVjYWRlUGFuZWwsIHtcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdmFsdWUsXG4gICAgICAgIHJvb3RQcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgb25TZWxlY3Q6IHRoaXMub25EZWNhZGVTZWxlY3RcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1oZWFkZXInIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogeyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9IH0sXG4gICAgICAgIHNob3dJZihlbmFibGVQcmV2ICYmICFzaG93VGltZVBpY2tlciwgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctcHJldi15ZWFyLWJ0bicsXG4gICAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgICAgb25DbGljazogdGhpcy5wcmV2aW91c1llYXIsXG4gICAgICAgICAgdGl0bGU6IGxvY2FsZS5wcmV2aW91c1llYXJcbiAgICAgICAgfSkpLFxuICAgICAgICBzaG93SWYoZW5hYmxlUHJldiAmJiAhc2hvd1RpbWVQaWNrZXIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXByZXYtbW9udGgtYnRuJyxcbiAgICAgICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLnByZXZpb3VzTW9udGgsXG4gICAgICAgICAgdGl0bGU6IGxvY2FsZS5wcmV2aW91c01vbnRoXG4gICAgICAgIH0pKSxcbiAgICAgICAgdGhpcy5tb250aFllYXJFbGVtZW50KHNob3dUaW1lUGlja2VyKSxcbiAgICAgICAgc2hvd0lmKGVuYWJsZU5leHQgJiYgIXNob3dUaW1lUGlja2VyLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywge1xuICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1uZXh0LW1vbnRoLWJ0bicsXG4gICAgICAgICAgb25DbGljazogdGhpcy5uZXh0TW9udGgsXG4gICAgICAgICAgdGl0bGU6IGxvY2FsZS5uZXh0TW9udGhcbiAgICAgICAgfSkpLFxuICAgICAgICBzaG93SWYoZW5hYmxlTmV4dCAmJiAhc2hvd1RpbWVQaWNrZXIsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLW5leHQteWVhci1idG4nLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMubmV4dFllYXIsXG4gICAgICAgICAgdGl0bGU6IGxvY2FsZS5uZXh0WWVhclxuICAgICAgICB9KSlcbiAgICAgICksXG4gICAgICBwYW5lbFxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhckhlYWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fcmMtY2FsZW5kYXJAOS42LjBAcmMtY2FsZW5kYXIvZXMvY2FsZW5kYXIvQ2FsZW5kYXJIZWFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZUNoYWluZWRGdW5jdGlvbiBmcm9tICdyYy11dGlsL2VzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbic7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICdyYy11dGlsL2VzL0tleUNvZGUnO1xuaW1wb3J0IHBsYWNlbWVudHMgZnJvbSAnLi9waWNrZXIvcGxhY2VtZW50cyc7XG5pbXBvcnQgVHJpZ2dlciBmcm9tICdyYy10cmlnZ2VyJztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIHJlZkZuKGZpZWxkLCBjb21wb25lbnQpIHtcbiAgdGhpc1tmaWVsZF0gPSBjb21wb25lbnQ7XG59XG5cbnZhciBQaWNrZXIgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdQaWNrZXInLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uT3BlbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLFxuICAgIGdldENhbGVuZGFyQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjYWxlbmRhcjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheV0pLFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5XSksXG4gICAgYWxpZ246IFByb3BUeXBlcy5vYmplY3RcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4Q2xzOiAncmMtY2FsZW5kYXItcGlja2VyJyxcbiAgICAgIHN0eWxlOiB7fSxcbiAgICAgIGFsaWduOiB7fSxcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbUxlZnQnLFxuICAgICAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICAgICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgICBvbk9wZW5DaGFuZ2U6IG5vb3BcbiAgICB9O1xuICB9LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvcGVuID0gdm9pZCAwO1xuICAgIGlmICgnb3BlbicgaW4gcHJvcHMpIHtcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuID0gcHJvcHMuZGVmYXVsdE9wZW47XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlIHx8IHByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgICB0aGlzLnNhdmVDYWxlbmRhclJlZiA9IHJlZkZuLmJpbmQodGhpcywgJ2NhbGVuZGFySW5zdGFuY2UnKTtcbiAgICByZXR1cm4ge1xuICAgICAgb3Blbjogb3BlbixcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdmFyIHZhbHVlID0gbmV4dFByb3BzLnZhbHVlLFxuICAgICAgICBvcGVuID0gbmV4dFByb3BzLm9wZW47XG5cbiAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAob3BlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3Blbjogb3BlblxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShfLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAoIXByZXZTdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgLy8gc2V0VGltZW91dCBpcyBmb3IgbWFraW5nIHN1cmUgc2F2ZUNhbGVuZGFyUmVmIGhhcHBlbiBiZWZvcmUgZm9jdXNDYWxlbmRhclxuICAgICAgdGhpcy5mb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuZm9jdXNDYWxlbmRhciwgMCwgdGhpcyk7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZm9jdXNUaW1lb3V0KTtcbiAgfSxcbiAgb25DYWxlbmRhcktleURvd246IGZ1bmN0aW9uIG9uQ2FsZW5kYXJLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuRVNDKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuY2xvc2UodGhpcy5mb2N1cyk7XG4gICAgfVxuICB9LFxuICBvbkNhbGVuZGFyU2VsZWN0OiBmdW5jdGlvbiBvbkNhbGVuZGFyU2VsZWN0KHZhbHVlKSB7XG4gICAgdmFyIGNhdXNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCEoJ3ZhbHVlJyBpbiBwcm9wcykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2F1c2Uuc291cmNlID09PSAna2V5Ym9hcmQnIHx8ICFwcm9wcy5jYWxlbmRhci5wcm9wcy50aW1lUGlja2VyICYmIGNhdXNlLnNvdXJjZSAhPT0gJ2RhdGVJbnB1dCcgfHwgY2F1c2Uuc291cmNlID09PSAndG9kYXlCdXR0b24nKSB7XG4gICAgICB0aGlzLmNsb3NlKHRoaXMuZm9jdXMpO1xuICAgIH1cbiAgICBwcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gIH0sXG4gIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuRE9XTiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LFxuICBvbkNhbGVuZGFyT2s6IGZ1bmN0aW9uIG9uQ2FsZW5kYXJPaygpIHtcbiAgICB0aGlzLmNsb3NlKHRoaXMuZm9jdXMpO1xuICB9LFxuICBvbkNhbGVuZGFyQ2xlYXI6IGZ1bmN0aW9uIG9uQ2FsZW5kYXJDbGVhcigpIHtcbiAgICB0aGlzLmNsb3NlKHRoaXMuZm9jdXMpO1xuICB9LFxuICBvblZpc2libGVDaGFuZ2U6IGZ1bmN0aW9uIG9uVmlzaWJsZUNoYW5nZShvcGVuKSB7XG4gICAgdGhpcy5zZXRPcGVuKG9wZW4pO1xuICB9LFxuICBnZXRDYWxlbmRhckVsZW1lbnQ6IGZ1bmN0aW9uIGdldENhbGVuZGFyRWxlbWVudCgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGNhbGVuZGFyUHJvcHMgPSBwcm9wcy5jYWxlbmRhci5wcm9wcztcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZTtcblxuICAgIHZhciBkZWZhdWx0VmFsdWUgPSB2YWx1ZTtcbiAgICB2YXIgZXh0cmFQcm9wcyA9IHtcbiAgICAgIHJlZjogdGhpcy5zYXZlQ2FsZW5kYXJSZWYsXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSB8fCBjYWxlbmRhclByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIHNlbGVjdGVkVmFsdWU6IHZhbHVlLFxuICAgICAgb25LZXlEb3duOiB0aGlzLm9uQ2FsZW5kYXJLZXlEb3duLFxuICAgICAgb25PazogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKGNhbGVuZGFyUHJvcHMub25PaywgdGhpcy5vbkNhbGVuZGFyT2spLFxuICAgICAgb25TZWxlY3Q6IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihjYWxlbmRhclByb3BzLm9uU2VsZWN0LCB0aGlzLm9uQ2FsZW5kYXJTZWxlY3QpLFxuICAgICAgb25DbGVhcjogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKGNhbGVuZGFyUHJvcHMub25DbGVhciwgdGhpcy5vbkNhbGVuZGFyQ2xlYXIpXG4gICAgfTtcblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQocHJvcHMuY2FsZW5kYXIsIGV4dHJhUHJvcHMpO1xuICB9LFxuICBzZXRPcGVuOiBmdW5jdGlvbiBzZXRPcGVuKG9wZW4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIG9uT3BlbkNoYW5nZSA9IHRoaXMucHJvcHMub25PcGVuQ2hhbmdlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbiAhPT0gb3Blbikge1xuICAgICAgaWYgKCEoJ29wZW4nIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46IG9wZW5cbiAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgb25PcGVuQ2hhbmdlKG9wZW4pO1xuICAgIH1cbiAgfSxcbiAgb3BlbjogZnVuY3Rpb24gb3BlbihjYWxsYmFjaykge1xuICAgIHRoaXMuc2V0T3Blbih0cnVlLCBjYWxsYmFjayk7XG4gIH0sXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZShjYWxsYmFjaykge1xuICAgIHRoaXMuc2V0T3BlbihmYWxzZSwgY2FsbGJhY2spO1xuICB9LFxuICBmb2N1czogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLmZvY3VzKCk7XG4gICAgfVxuICB9LFxuICBmb2N1c0NhbGVuZGFyOiBmdW5jdGlvbiBmb2N1c0NhbGVuZGFyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm9wZW4gJiYgISF0aGlzLmNhbGVuZGFySW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuY2FsZW5kYXJJbnN0YW5jZS5mb2N1cygpO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBwbGFjZW1lbnQgPSBwcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICAgIGdldENhbGVuZGFyQ29udGFpbmVyID0gcHJvcHMuZ2V0Q2FsZW5kYXJDb250YWluZXIsXG4gICAgICAgIGFsaWduID0gcHJvcHMuYWxpZ24sXG4gICAgICAgIGFuaW1hdGlvbiA9IHByb3BzLmFuaW1hdGlvbixcbiAgICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgZHJvcGRvd25DbGFzc05hbWUgPSBwcm9wcy5kcm9wZG93bkNsYXNzTmFtZSxcbiAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUcmlnZ2VyLFxuICAgICAge1xuICAgICAgICBwb3B1cDogdGhpcy5nZXRDYWxlbmRhckVsZW1lbnQoKSxcbiAgICAgICAgcG9wdXBBbGlnbjogYWxpZ24sXG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwbGFjZW1lbnRzLFxuICAgICAgICBwb3B1cFBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBhY3Rpb246IGRpc2FibGVkICYmICFzdGF0ZS5vcGVuID8gW10gOiBbJ2NsaWNrJ10sXG4gICAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZTogdHJ1ZSxcbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGdldENhbGVuZGFyQ29udGFpbmVyLFxuICAgICAgICBwb3B1cFN0eWxlOiBzdHlsZSxcbiAgICAgICAgcG9wdXBBbmltYXRpb246IGFuaW1hdGlvbixcbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIHBvcHVwVmlzaWJsZTogc3RhdGUub3BlbixcbiAgICAgICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IHRoaXMub25WaXNpYmxlQ2hhbmdlLFxuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgcG9wdXBDbGFzc05hbWU6IGRyb3Bkb3duQ2xhc3NOYW1lXG4gICAgICB9LFxuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuKHN0YXRlLCBwcm9wcyksIHsgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93biB9KVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQaWNrZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL1BpY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gNDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZ2V0RGF0YUF0dHIgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIFRhYlBhbmUgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUYWJQYW5lJyxcbiAgcHJvcFR5cGVzOiB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5hbnksXG4gICAgZGVzdHJveUluYWN0aXZlVGFiUGFuZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9yY2VSZW5kZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMubm9kZVxuICB9LFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4geyBwbGFjZWhvbGRlcjogbnVsbCB9O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2NsYXNzbmFtZXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgZGVzdHJveUluYWN0aXZlVGFiUGFuZSA9IF9wcm9wcy5kZXN0cm95SW5hY3RpdmVUYWJQYW5lLFxuICAgICAgICBhY3RpdmUgPSBfcHJvcHMuYWN0aXZlLFxuICAgICAgICBmb3JjZVJlbmRlciA9IF9wcm9wcy5mb3JjZVJlbmRlcixcbiAgICAgICAgcm9vdFByZWZpeENscyA9IF9wcm9wcy5yb290UHJlZml4Q2xzLFxuICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIHBsYWNlaG9sZGVyID0gX3Byb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdkZXN0cm95SW5hY3RpdmVUYWJQYW5lJywgJ2FjdGl2ZScsICdmb3JjZVJlbmRlcicsICdyb290UHJlZml4Q2xzJywgJ3N0eWxlJywgJ2NoaWxkcmVuJywgJ3BsYWNlaG9sZGVyJ10pO1xuXG4gICAgdGhpcy5faXNBY3RpdmVkID0gdGhpcy5faXNBY3RpdmVkIHx8IGFjdGl2ZTtcbiAgICB2YXIgcHJlZml4Q2xzID0gcm9vdFByZWZpeENscyArICctdGFicGFuZSc7XG4gICAgdmFyIGNscyA9IGNsYXNzbmFtZXMoKF9jbGFzc25hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgcHJlZml4Q2xzLCAxKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc25hbWVzLCBwcmVmaXhDbHMgKyAnLWluYWN0aXZlJywgIWFjdGl2ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgcHJlZml4Q2xzICsgJy1hY3RpdmUnLCBhY3RpdmUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIGNsYXNzTmFtZSwgY2xhc3NOYW1lKSwgX2NsYXNzbmFtZXMpKTtcbiAgICB2YXIgaXNSZW5kZXIgPSBkZXN0cm95SW5hY3RpdmVUYWJQYW5lID8gYWN0aXZlIDogdGhpcy5faXNBY3RpdmVkO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgcm9sZTogJ3RhYnBhbmVsJyxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogYWN0aXZlID8gJ2ZhbHNlJyA6ICd0cnVlJyxcbiAgICAgICAgY2xhc3NOYW1lOiBjbHNcbiAgICAgIH0sIGdldERhdGFBdHRyKHJlc3RQcm9wcykpLFxuICAgICAgaXNSZW5kZXIgfHwgZm9yY2VSZW5kZXIgPyBjaGlsZHJlbiA6IHBsYWNlaG9sZGVyXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlBhbmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLXRhYnNAOS4yLjVAcmMtdGFicy9lcy9UYWJQYW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2NTFcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2Zvcm1CeUluZGV4LCBnZXRBY3RpdmVJbmRleCwgZ2V0VHJhbnNmb3JtUHJvcFZhbHVlLCBnZXRNYXJnaW5TdHlsZSB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgVGFiQ29udGVudCA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1RhYkNvbnRlbnQnLFxuICBwcm9wVHlwZXM6IHtcbiAgICBhbmltYXRlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgYW5pbWF0ZWRXaXRoTWFyZ2luOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgYWN0aXZlS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICAgIHRhYkJhclBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbmltYXRlZDogdHJ1ZVxuICAgIH07XG4gIH0sXG4gIGdldFRhYlBhbmVzOiBmdW5jdGlvbiBnZXRUYWJQYW5lcygpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBhY3RpdmVLZXkgPSBwcm9wcy5hY3RpdmVLZXk7XG4gICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIG5ld0NoaWxkcmVuID0gW107XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGtleSA9IGNoaWxkLmtleTtcbiAgICAgIHZhciBhY3RpdmUgPSBhY3RpdmVLZXkgPT09IGtleTtcbiAgICAgIG5ld0NoaWxkcmVuLnB1c2goUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgICBkZXN0cm95SW5hY3RpdmVUYWJQYW5lOiBwcm9wcy5kZXN0cm95SW5hY3RpdmVUYWJQYW5lLFxuICAgICAgICByb290UHJlZml4Q2xzOiBwcm9wcy5wcmVmaXhDbHNcbiAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdDaGlsZHJlbjtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc25hbWVzO1xuXG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBhY3RpdmVLZXkgPSBwcm9wcy5hY3RpdmVLZXksXG4gICAgICAgIHRhYkJhclBvc2l0aW9uID0gcHJvcHMudGFiQmFyUG9zaXRpb24sXG4gICAgICAgIGFuaW1hdGVkID0gcHJvcHMuYW5pbWF0ZWQsXG4gICAgICAgIGFuaW1hdGVkV2l0aE1hcmdpbiA9IHByb3BzLmFuaW1hdGVkV2l0aE1hcmdpbjtcbiAgICB2YXIgc3R5bGUgPSBwcm9wcy5zdHlsZTtcblxuICAgIHZhciBjbGFzc2VzID0gY2xhc3NuYW1lcygoX2NsYXNzbmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc25hbWVzLCBwcmVmaXhDbHMgKyAnLWNvbnRlbnQnLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc25hbWVzLCBhbmltYXRlZCA/IHByZWZpeENscyArICctY29udGVudC1hbmltYXRlZCcgOiBwcmVmaXhDbHMgKyAnLWNvbnRlbnQtbm8tYW5pbWF0ZWQnLCB0cnVlKSwgX2NsYXNzbmFtZXMpKTtcbiAgICBpZiAoYW5pbWF0ZWQpIHtcbiAgICAgIHZhciBhY3RpdmVJbmRleCA9IGdldEFjdGl2ZUluZGV4KGNoaWxkcmVuLCBhY3RpdmVLZXkpO1xuICAgICAgaWYgKGFjdGl2ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICB2YXIgYW5pbWF0ZWRTdHlsZSA9IGFuaW1hdGVkV2l0aE1hcmdpbiA/IGdldE1hcmdpblN0eWxlKGFjdGl2ZUluZGV4LCB0YWJCYXJQb3NpdGlvbikgOiBnZXRUcmFuc2Zvcm1Qcm9wVmFsdWUoZ2V0VHJhbnNmb3JtQnlJbmRleChhY3RpdmVJbmRleCwgdGFiQmFyUG9zaXRpb24pKTtcbiAgICAgICAgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIGFuaW1hdGVkU3R5bGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9LFxuICAgICAgdGhpcy5nZXRUYWJQYW5lcygpXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYkNvbnRlbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLXRhYnNAOS4yLjVAcmMtdGFicy9lcy9UYWJDb250ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2NTJcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdG9GcmFnbWVudCBmcm9tICdyYy11dGlsL2VzL0NoaWxkcmVuL21hcFNlbGYnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFRvZGF5QnV0dG9uIGZyb20gJy4uL2NhbGVuZGFyL1RvZGF5QnV0dG9uJztcbmltcG9ydCBPa0J1dHRvbiBmcm9tICcuLi9jYWxlbmRhci9Pa0J1dHRvbic7XG5pbXBvcnQgVGltZVBpY2tlckJ1dHRvbiBmcm9tICcuLi9jYWxlbmRhci9UaW1lUGlja2VyQnV0dG9uJztcblxudmFyIENhbGVuZGFyRm9vdGVyID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnQ2FsZW5kYXJGb290ZXInLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaG93RGF0ZUlucHV0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZFRpbWU6IFByb3BUeXBlcy5hbnksXG4gICAgdGltZVBpY2tlcjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgc2VsZWN0ZWRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBzaG93T2s6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICByZW5kZXJGb290ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9iamVjdFxuICB9LFxuXG4gIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdCh2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMub25TZWxlY3QodmFsdWUpO1xuICB9LFxuICBnZXRSb290RE9NTm9kZTogZnVuY3Rpb24gZ2V0Um9vdERPTU5vZGUoKSB7XG4gICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHNob3dPayA9IHByb3BzLnNob3dPayxcbiAgICAgICAgdGltZVBpY2tlciA9IHByb3BzLnRpbWVQaWNrZXIsXG4gICAgICAgIHJlbmRlckZvb3RlciA9IHByb3BzLnJlbmRlckZvb3RlcjtcblxuICAgIHZhciBmb290ZXJFbCA9IG51bGw7XG4gICAgdmFyIGV4dHJhRm9vdGVyID0gcmVuZGVyRm9vdGVyKCk7XG4gICAgaWYgKHByb3BzLnNob3dUb2RheSB8fCB0aW1lUGlja2VyIHx8IGV4dHJhRm9vdGVyKSB7XG4gICAgICB2YXIgX2N4O1xuXG4gICAgICB2YXIgbm93RWwgPSB2b2lkIDA7XG4gICAgICBpZiAocHJvcHMuc2hvd1RvZGF5KSB7XG4gICAgICAgIG5vd0VsID0gUmVhY3QuY3JlYXRlRWxlbWVudChUb2RheUJ1dHRvbiwgX2V4dGVuZHMoe30sIHByb3BzLCB7IHZhbHVlOiB2YWx1ZSB9KSk7XG4gICAgICB9XG4gICAgICB2YXIgb2tCdG4gPSB2b2lkIDA7XG4gICAgICBpZiAoc2hvd09rID09PSB0cnVlIHx8IHNob3dPayAhPT0gZmFsc2UgJiYgISFwcm9wcy50aW1lUGlja2VyKSB7XG4gICAgICAgIG9rQnRuID0gUmVhY3QuY3JlYXRlRWxlbWVudChPa0J1dHRvbiwgcHJvcHMpO1xuICAgICAgfVxuICAgICAgdmFyIHRpbWVQaWNrZXJCdG4gPSB2b2lkIDA7XG4gICAgICBpZiAoISFwcm9wcy50aW1lUGlja2VyKSB7XG4gICAgICAgIHRpbWVQaWNrZXJCdG4gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRpbWVQaWNrZXJCdXR0b24sIHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvb3RlckJ0biA9IHZvaWQgMDtcbiAgICAgIGlmIChub3dFbCB8fCB0aW1lUGlja2VyQnRuIHx8IG9rQnRuKSB7XG4gICAgICAgIGZvb3RlckJ0biA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWZvb3Rlci1idG4nIH0sXG4gICAgICAgICAgdG9GcmFnbWVudChbbm93RWwsIHRpbWVQaWNrZXJCdG4sIG9rQnRuXSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZhciBjbHMgPSBjeCgoX2N4ID0ge30sIF9jeFtwcmVmaXhDbHMgKyAnLWZvb3RlciddID0gdHJ1ZSwgX2N4W3ByZWZpeENscyArICctZm9vdGVyLXNob3ctb2snXSA9IG9rQnRuLCBfY3gpKTtcbiAgICAgIGZvb3RlckVsID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBjbHMgfSxcbiAgICAgICAgZXh0cmFGb290ZXIsXG4gICAgICAgIGZvb3RlckJ0blxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvb3RlckVsO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXJGb290ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL2NhbGVuZGFyL0NhbGVuZGFyRm9vdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NjVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tICdjcmVhdGUtcmVhY3QtY2xhc3MnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxudmFyIERhdGVJbnB1dCA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0RhdGVJbnB1dCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpbWVQaWNrZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGlzYWJsZWRUaW1lOiBQcm9wVHlwZXMuYW55LFxuICAgIGZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGlzYWJsZWREYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbGVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNlbGVjdGVkVmFsdWU6IFByb3BUeXBlcy5vYmplY3RcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RyOiBzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWUuZm9ybWF0KHRoaXMucHJvcHMuZm9ybWF0KSB8fCAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLmNhY2hlZFNlbGVjdGlvblN0YXJ0ID0gdGhpcy5kYXRlSW5wdXRJbnN0YW5jZS5zZWxlY3Rpb25TdGFydDtcbiAgICB0aGlzLmNhY2hlZFNlbGVjdGlvbkVuZCA9IHRoaXMuZGF0ZUlucHV0SW5zdGFuY2Uuc2VsZWN0aW9uRW5kO1xuICAgIC8vIHdoZW4gcG9wdXAgc2hvdywgY2xpY2sgYm9keSB3aWxsIGNhbGwgdGhpcywgYnVnIVxuICAgIHZhciBzZWxlY3RlZFZhbHVlID0gbmV4dFByb3BzLnNlbGVjdGVkVmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdHI6IHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZS5mb3JtYXQobmV4dFByb3BzLmZvcm1hdCkgfHwgJycsXG4gICAgICBpbnZhbGlkOiBmYWxzZVxuICAgIH0pO1xuICB9LFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaW52YWxpZCkge1xuICAgICAgdGhpcy5kYXRlSW5wdXRJbnN0YW5jZS5zZXRTZWxlY3Rpb25SYW5nZSh0aGlzLmNhY2hlZFNlbGVjdGlvblN0YXJ0LCB0aGlzLmNhY2hlZFNlbGVjdGlvbkVuZCk7XG4gICAgfVxuICB9LFxuICBvbklucHV0Q2hhbmdlOiBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgdmFyIHN0ciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0cjogc3RyXG4gICAgfSk7XG4gICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBkaXNhYmxlZERhdGUgPSBfcHJvcHMuZGlzYWJsZWREYXRlLFxuICAgICAgICBmb3JtYXQgPSBfcHJvcHMuZm9ybWF0LFxuICAgICAgICBvbkNoYW5nZSA9IF9wcm9wcy5vbkNoYW5nZTtcblxuICAgIGlmIChzdHIpIHtcbiAgICAgIHZhciBwYXJzZWQgPSBtb21lbnQoc3RyLCBmb3JtYXQsIHRydWUpO1xuICAgICAgaWYgKCFwYXJzZWQuaXNWYWxpZCgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGludmFsaWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZS5jbG9uZSgpO1xuICAgICAgdmFsdWUueWVhcihwYXJzZWQueWVhcigpKS5tb250aChwYXJzZWQubW9udGgoKSkuZGF0ZShwYXJzZWQuZGF0ZSgpKS5ob3VyKHBhcnNlZC5ob3VyKCkpLm1pbnV0ZShwYXJzZWQubWludXRlKCkpLnNlY29uZChwYXJzZWQuc2Vjb25kKCkpO1xuXG4gICAgICBpZiAodmFsdWUgJiYgKCFkaXNhYmxlZERhdGUgfHwgIWRpc2FibGVkRGF0ZSh2YWx1ZSkpKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gdGhpcy5wcm9wcy5zZWxlY3RlZFZhbHVlO1xuICAgICAgICBpZiAob3JpZ2luYWxWYWx1ZSAmJiB2YWx1ZSkge1xuICAgICAgICAgIGlmICghb3JpZ2luYWxWYWx1ZS5pc1NhbWUodmFsdWUpKSB7XG4gICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG9yaWdpbmFsVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnZhbGlkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQ2hhbmdlKG51bGwpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGludmFsaWQ6IGZhbHNlXG4gICAgfSk7XG4gIH0sXG4gIG9uQ2xlYXI6IGZ1bmN0aW9uIG9uQ2xlYXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdHI6ICcnXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNsZWFyKG51bGwpO1xuICB9LFxuICBnZXRSb290RE9NTm9kZTogZnVuY3Rpb24gZ2V0Um9vdERPTU5vZGUoKSB7XG4gICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICB9LFxuICBmb2N1czogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuZGF0ZUlucHV0SW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuZGF0ZUlucHV0SW5zdGFuY2UuZm9jdXMoKTtcbiAgICB9XG4gIH0sXG4gIHNhdmVEYXRlSW5wdXQ6IGZ1bmN0aW9uIHNhdmVEYXRlSW5wdXQoZGF0ZUlucHV0KSB7XG4gICAgdGhpcy5kYXRlSW5wdXRJbnN0YW5jZSA9IGRhdGVJbnB1dDtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgaW52YWxpZCA9IF9zdGF0ZS5pbnZhbGlkLFxuICAgICAgICBzdHIgPSBfc3RhdGUuc3RyO1xuICAgIHZhciBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcjtcblxuICAgIHZhciBpbnZhbGlkQ2xhc3MgPSBpbnZhbGlkID8gcHJlZml4Q2xzICsgJy1pbnB1dC1pbnZhbGlkJyA6ICcnO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pbnB1dC13cmFwJyB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWRhdGUtaW5wdXQtd3JhcCcgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgcmVmOiB0aGlzLnNhdmVEYXRlSW5wdXQsXG4gICAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWlucHV0ICcgKyBpbnZhbGlkQ2xhc3MsXG4gICAgICAgICAgdmFsdWU6IHN0cixcbiAgICAgICAgICBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2VcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBwcm9wcy5zaG93Q2xlYXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywge1xuICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctY2xlYXItYnRuJyxcbiAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgIHRpdGxlOiBsb2NhbGUuY2xlYXIsXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGVhclxuICAgICAgfSkgOiBudWxsXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVJbnB1dDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fcmMtY2FsZW5kYXJAOS42LjBAcmMtY2FsZW5kYXIvZXMvZGF0ZS9EYXRlSW5wdXQuanNcbi8vIG1vZHVsZSBpZCA9IDY2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tICdjcmVhdGUtcmVhY3QtY2xhc3MnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBLZXlDb2RlIGZyb20gJ3JjLXV0aWwvZXMvS2V5Q29kZSc7XG5pbXBvcnQgQ2FsZW5kYXJIZWFkZXIgZnJvbSAnLi9jYWxlbmRhci9DYWxlbmRhckhlYWRlcic7XG5pbXBvcnQgQ2FsZW5kYXJGb290ZXIgZnJvbSAnLi9jYWxlbmRhci9DYWxlbmRhckZvb3Rlcic7XG5pbXBvcnQgQ2FsZW5kYXJNaXhpbiBmcm9tICcuL21peGluL0NhbGVuZGFyTWl4aW4nO1xuaW1wb3J0IENvbW1vbk1peGluIGZyb20gJy4vbWl4aW4vQ29tbW9uTWl4aW4nO1xuXG52YXIgTW9udGhDYWxlbmRhciA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01vbnRoQ2FsZW5kYXInLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG1vbnRoQ2VsbFJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGF0ZUNlbGxSZW5kZXI6IFByb3BUeXBlcy5mdW5jXG4gIH0sXG4gIG1peGluczogW0NvbW1vbk1peGluLCBDYWxlbmRhck1peGluXSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4geyBtb2RlOiAnbW9udGgnIH07XG4gIH0sXG4gIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gICAgdmFyIGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIHZhciBjdHJsS2V5ID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5O1xuICAgIHZhciBzdGF0ZVZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB2YXIgZGlzYWJsZWREYXRlID0gdGhpcy5wcm9wcy5kaXNhYmxlZERhdGU7XG5cbiAgICB2YXIgdmFsdWUgPSBzdGF0ZVZhbHVlO1xuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgY2FzZSBLZXlDb2RlLkRPV046XG4gICAgICAgIHZhbHVlID0gc3RhdGVWYWx1ZS5jbG9uZSgpO1xuICAgICAgICB2YWx1ZS5hZGQoMywgJ21vbnRocycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5Q29kZS5VUDpcbiAgICAgICAgdmFsdWUgPSBzdGF0ZVZhbHVlLmNsb25lKCk7XG4gICAgICAgIHZhbHVlLmFkZCgtMywgJ21vbnRocycpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5Q29kZS5MRUZUOlxuICAgICAgICB2YWx1ZSA9IHN0YXRlVmFsdWUuY2xvbmUoKTtcbiAgICAgICAgaWYgKGN0cmxLZXkpIHtcbiAgICAgICAgICB2YWx1ZS5hZGQoLTEsICd5ZWFycycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlLmFkZCgtMSwgJ21vbnRocycpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLZXlDb2RlLlJJR0hUOlxuICAgICAgICB2YWx1ZSA9IHN0YXRlVmFsdWUuY2xvbmUoKTtcbiAgICAgICAgaWYgKGN0cmxLZXkpIHtcbiAgICAgICAgICB2YWx1ZS5hZGQoMSwgJ3llYXJzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUuYWRkKDEsICdtb250aHMnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5Q29kZS5FTlRFUjpcbiAgICAgICAgaWYgKCFkaXNhYmxlZERhdGUgfHwgIWRpc2FibGVkRGF0ZShzdGF0ZVZhbHVlKSkge1xuICAgICAgICAgIHRoaXMub25TZWxlY3Qoc3RhdGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IHN0YXRlVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfSxcbiAgaGFuZGxlUGFuZWxDaGFuZ2U6IGZ1bmN0aW9uIGhhbmRsZVBhbmVsQ2hhbmdlKF8sIG1vZGUpIHtcbiAgICBpZiAobW9kZSAhPT0gJ2RhdGUnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW9kZTogbW9kZSB9KTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgbW9kZSA9IHN0YXRlLm1vZGUsXG4gICAgICAgIHZhbHVlID0gc3RhdGUudmFsdWU7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1tb250aC1jYWxlbmRhci1jb250ZW50JyB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLW1vbnRoLWhlYWRlci13cmFwJyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhbGVuZGFySGVhZGVyLCB7XG4gICAgICAgICAgcHJlZml4Q2xzOiBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgbW9kZTogbW9kZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgbG9jYWxlOiBwcm9wcy5sb2NhbGUsXG4gICAgICAgICAgZGlzYWJsZWRNb250aDogcHJvcHMuZGlzYWJsZWREYXRlLFxuICAgICAgICAgIG1vbnRoQ2VsbFJlbmRlcjogcHJvcHMubW9udGhDZWxsUmVuZGVyLFxuICAgICAgICAgIG1vbnRoQ2VsbENvbnRlbnRSZW5kZXI6IHByb3BzLm1vbnRoQ2VsbENvbnRlbnRSZW5kZXIsXG4gICAgICAgICAgb25Nb250aFNlbGVjdDogdGhpcy5vblNlbGVjdCxcbiAgICAgICAgICBvblZhbHVlQ2hhbmdlOiB0aGlzLnNldFZhbHVlLFxuICAgICAgICAgIG9uUGFuZWxDaGFuZ2U6IHRoaXMuaGFuZGxlUGFuZWxDaGFuZ2VcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhbGVuZGFyRm9vdGVyLCB7XG4gICAgICAgIHByZWZpeENsczogcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICByZW5kZXJGb290ZXI6IHByb3BzLnJlbmRlckZvb3RlclxuICAgICAgfSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnJlbmRlclJvb3Qoe1xuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLW1vbnRoLWNhbGVuZGFyJyxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH0pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTW9udGhDYWxlbmRhcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fcmMtY2FsZW5kYXJAOS42LjBAcmMtY2FsZW5kYXIvZXMvTW9udGhDYWxlbmRhci5qc1xuLy8gbW9kdWxlIGlkID0gNjcwXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF90eXBlb2YgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5pbXBvcnQgQXN5bmNWYWxpZGF0b3IgZnJvbSAnYXN5bmMtdmFsaWRhdG9yJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBzZXQgZnJvbSAnbG9kYXNoL3NldCc7XG5pbXBvcnQgY3JlYXRlRmllbGRzU3RvcmUgZnJvbSAnLi9jcmVhdGVGaWVsZHNTdG9yZSc7XG5pbXBvcnQgeyBhcmd1bWVudENvbnRhaW5lciwgaWRlbnRpdHksIG5vcm1hbGl6ZVZhbGlkYXRlUnVsZXMsIGdldFZhbGlkYXRlVHJpZ2dlcnMsIGdldFZhbHVlRnJvbUV2ZW50LCBoYXNSdWxlcywgZ2V0UGFyYW1zLCBpc0VtcHR5T2JqZWN0LCBmbGF0dGVuQXJyYXkgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIERFRkFVTFRfVFJJR0dFUiA9ICdvbkNoYW5nZSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3JtKCkge1xuICB2YXIgb3B0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIG1peGlucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG4gIHZhciB2YWxpZGF0ZU1lc3NhZ2VzID0gb3B0aW9uLnZhbGlkYXRlTWVzc2FnZXMsXG4gICAgICBvbkZpZWxkc0NoYW5nZSA9IG9wdGlvbi5vbkZpZWxkc0NoYW5nZSxcbiAgICAgIG9uVmFsdWVzQ2hhbmdlID0gb3B0aW9uLm9uVmFsdWVzQ2hhbmdlLFxuICAgICAgX29wdGlvbiRtYXBQcm9wcyA9IG9wdGlvbi5tYXBQcm9wcyxcbiAgICAgIG1hcFByb3BzID0gX29wdGlvbiRtYXBQcm9wcyA9PT0gdW5kZWZpbmVkID8gaWRlbnRpdHkgOiBfb3B0aW9uJG1hcFByb3BzLFxuICAgICAgbWFwUHJvcHNUb0ZpZWxkcyA9IG9wdGlvbi5tYXBQcm9wc1RvRmllbGRzLFxuICAgICAgZmllbGROYW1lUHJvcCA9IG9wdGlvbi5maWVsZE5hbWVQcm9wLFxuICAgICAgZmllbGRNZXRhUHJvcCA9IG9wdGlvbi5maWVsZE1ldGFQcm9wLFxuICAgICAgZmllbGREYXRhUHJvcCA9IG9wdGlvbi5maWVsZERhdGFQcm9wLFxuICAgICAgX29wdGlvbiRmb3JtUHJvcE5hbWUgPSBvcHRpb24uZm9ybVByb3BOYW1lLFxuICAgICAgZm9ybVByb3BOYW1lID0gX29wdGlvbiRmb3JtUHJvcE5hbWUgPT09IHVuZGVmaW5lZCA/ICdmb3JtJyA6IF9vcHRpb24kZm9ybVByb3BOYW1lLFxuICAgICAgd2l0aFJlZiA9IG9wdGlvbi53aXRoUmVmO1xuXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICB2YXIgRm9ybSA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICAgICAgZGlzcGxheU5hbWU6ICdGb3JtJyxcblxuICAgICAgbWl4aW5zOiBtaXhpbnMsXG5cbiAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBmaWVsZHMgPSBtYXBQcm9wc1RvRmllbGRzICYmIG1hcFByb3BzVG9GaWVsZHModGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMuZmllbGRzU3RvcmUgPSBjcmVhdGVGaWVsZHNTdG9yZShmaWVsZHMgfHwge30pO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0ge307XG4gICAgICAgIHRoaXMuY2FjaGVkQmluZCA9IHt9O1xuICAgICAgICB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZSA9IHt9O1xuICAgICAgICAvLyBIQUNLOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy82NDA2XG4gICAgICAgIFsnZ2V0RmllbGRzVmFsdWUnLCAnZ2V0RmllbGRWYWx1ZScsICdzZXRGaWVsZHNJbml0aWFsVmFsdWUnLCAnZ2V0RmllbGRzRXJyb3InLCAnZ2V0RmllbGRFcnJvcicsICdpc0ZpZWxkVmFsaWRhdGluZycsICdpc0ZpZWxkc1ZhbGlkYXRpbmcnLCAnaXNGaWVsZHNUb3VjaGVkJywgJ2lzRmllbGRUb3VjaGVkJ10uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzW2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2ZpZWxkc1N0b3JlO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAneW91IHNob3VsZCBub3QgdXNlIGByZWZgIG9uIGVuaGFuY2VkIGZvcm0sIHBsZWFzZSB1c2UgYHdyYXBwZWRDb21wb25lbnRSZWZgLiAnICsgJ1NlZTogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9mb3JtI25vdGUtdXNlLXdyYXBwZWRjb21wb25lbnRyZWYtaW5zdGVhZC1vZi13aXRocmVmLWFmdGVyLXJjLWZvcm0xNDAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoX2ZpZWxkc1N0b3JlID0gX3RoaXMuZmllbGRzU3RvcmUpW2tleV0uYXBwbHkoX2ZpZWxkc1N0b3JlLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3VibWl0dGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAobWFwUHJvcHNUb0ZpZWxkcykge1xuICAgICAgICAgIHRoaXMuZmllbGRzU3RvcmUudXBkYXRlRmllbGRzKG1hcFByb3BzVG9GaWVsZHMobmV4dFByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkNvbGxlY3RDb21tb246IGZ1bmN0aW9uIG9uQ29sbGVjdENvbW1vbihuYW1lLCBhY3Rpb24sIGFyZ3MpIHtcbiAgICAgICAgdmFyIGZpZWxkTWV0YSA9IHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICBpZiAoZmllbGRNZXRhW2FjdGlvbl0pIHtcbiAgICAgICAgICBmaWVsZE1ldGFbYWN0aW9uXS5hcHBseShmaWVsZE1ldGEsIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGRNZXRhLm9yaWdpbmFsUHJvcHMgJiYgZmllbGRNZXRhLm9yaWdpbmFsUHJvcHNbYWN0aW9uXSkge1xuICAgICAgICAgIHZhciBfZmllbGRNZXRhJG9yaWdpbmFsUHI7XG5cbiAgICAgICAgICAoX2ZpZWxkTWV0YSRvcmlnaW5hbFByID0gZmllbGRNZXRhLm9yaWdpbmFsUHJvcHMpW2FjdGlvbl0uYXBwbHkoX2ZpZWxkTWV0YSRvcmlnaW5hbFByLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGZpZWxkTWV0YS5nZXRWYWx1ZUZyb21FdmVudCA/IGZpZWxkTWV0YS5nZXRWYWx1ZUZyb21FdmVudC5hcHBseShmaWVsZE1ldGEsIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSkgOiBnZXRWYWx1ZUZyb21FdmVudC5hcHBseSh1bmRlZmluZWQsIF90b0NvbnN1bWFibGVBcnJheShhcmdzKSk7XG4gICAgICAgIGlmIChvblZhbHVlc0NoYW5nZSAmJiB2YWx1ZSAhPT0gdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZFZhbHVlKG5hbWUpKSB7XG4gICAgICAgICAgdmFyIHZhbHVlc0FsbCA9IHRoaXMuZmllbGRzU3RvcmUuZ2V0QWxsVmFsdWVzKCk7XG4gICAgICAgICAgdmFyIHZhbHVlc0FsbFNldCA9IHt9O1xuICAgICAgICAgIHZhbHVlc0FsbFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgIE9iamVjdC5rZXlzKHZhbHVlc0FsbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0KHZhbHVlc0FsbFNldCwga2V5LCB2YWx1ZXNBbGxba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2UodGhpcy5wcm9wcywgc2V0KHt9LCBuYW1lLCB2YWx1ZSksIHZhbHVlc0FsbFNldCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZChuYW1lKTtcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogbmFtZSwgZmllbGQ6IF9leHRlbmRzKHt9LCBmaWVsZCwgeyB2YWx1ZTogdmFsdWUsIHRvdWNoZWQ6IHRydWUgfSksIGZpZWxkTWV0YTogZmllbGRNZXRhIH07XG4gICAgICB9LFxuICAgICAgb25Db2xsZWN0OiBmdW5jdGlvbiBvbkNvbGxlY3QobmFtZV8sIGFjdGlvbikge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfb25Db2xsZWN0Q29tbW9uID0gdGhpcy5vbkNvbGxlY3RDb21tb24obmFtZV8sIGFjdGlvbiwgYXJncyksXG4gICAgICAgICAgICBuYW1lID0gX29uQ29sbGVjdENvbW1vbi5uYW1lLFxuICAgICAgICAgICAgZmllbGQgPSBfb25Db2xsZWN0Q29tbW9uLmZpZWxkLFxuICAgICAgICAgICAgZmllbGRNZXRhID0gX29uQ29sbGVjdENvbW1vbi5maWVsZE1ldGE7XG5cbiAgICAgICAgdmFyIHZhbGlkYXRlID0gZmllbGRNZXRhLnZhbGlkYXRlO1xuXG4gICAgICAgIHZhciBuZXdGaWVsZCA9IF9leHRlbmRzKHt9LCBmaWVsZCwge1xuICAgICAgICAgIGRpcnR5OiBoYXNSdWxlcyh2YWxpZGF0ZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RmllbGRzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgbmFtZSwgbmV3RmllbGQpKTtcbiAgICAgIH0sXG4gICAgICBvbkNvbGxlY3RWYWxpZGF0ZTogZnVuY3Rpb24gb25Db2xsZWN0VmFsaWRhdGUobmFtZV8sIGFjdGlvbikge1xuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfb25Db2xsZWN0Q29tbW9uMiA9IHRoaXMub25Db2xsZWN0Q29tbW9uKG5hbWVfLCBhY3Rpb24sIGFyZ3MpLFxuICAgICAgICAgICAgZmllbGQgPSBfb25Db2xsZWN0Q29tbW9uMi5maWVsZCxcbiAgICAgICAgICAgIGZpZWxkTWV0YSA9IF9vbkNvbGxlY3RDb21tb24yLmZpZWxkTWV0YTtcblxuICAgICAgICB2YXIgbmV3RmllbGQgPSBfZXh0ZW5kcyh7fSwgZmllbGQsIHtcbiAgICAgICAgICBkaXJ0eTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUZpZWxkc0ludGVybmFsKFtuZXdGaWVsZF0sIHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBmaXJzdEZpZWxkczogISFmaWVsZE1ldGEudmFsaWRhdGVGaXJzdFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0Q2FjaGVCaW5kOiBmdW5jdGlvbiBnZXRDYWNoZUJpbmQobmFtZSwgYWN0aW9uLCBmbikge1xuICAgICAgICBpZiAoIXRoaXMuY2FjaGVkQmluZFtuYW1lXSkge1xuICAgICAgICAgIHRoaXMuY2FjaGVkQmluZFtuYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGVkQmluZFtuYW1lXTtcbiAgICAgICAgaWYgKCFjYWNoZVthY3Rpb25dKSB7XG4gICAgICAgICAgY2FjaGVbYWN0aW9uXSA9IGZuLmJpbmQodGhpcywgbmFtZSwgYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVbYWN0aW9uXTtcbiAgICAgIH0sXG4gICAgICByZWNvdmVyQ2xlYXJlZEZpZWxkOiBmdW5jdGlvbiByZWNvdmVyQ2xlYXJlZEZpZWxkKG5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xlYXJlZEZpZWxkTWV0YUNhY2hlW25hbWVdKSB7XG4gICAgICAgICAgdGhpcy5maWVsZHNTdG9yZS5zZXRGaWVsZHMoX2RlZmluZVByb3BlcnR5KHt9LCBuYW1lLCB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXS5maWVsZCkpO1xuICAgICAgICAgIHRoaXMuZmllbGRzU3RvcmUuc2V0RmllbGRNZXRhKG5hbWUsIHRoaXMuY2xlYXJlZEZpZWxkTWV0YUNhY2hlW25hbWVdLm1ldGEpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldEZpZWxkRGVjb3JhdG9yOiBmdW5jdGlvbiBnZXRGaWVsZERlY29yYXRvcihuYW1lLCBmaWVsZE9wdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLmdldEZpZWxkUHJvcHMobmFtZSwgZmllbGRPcHRpb24pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGZpZWxkRWxlbSkge1xuICAgICAgICAgIHZhciBmaWVsZE1ldGEgPSBfdGhpczIuZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICAgIHZhciBvcmlnaW5hbFByb3BzID0gZmllbGRFbGVtLnByb3BzO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVQcm9wTmFtZSA9IGZpZWxkTWV0YS52YWx1ZVByb3BOYW1lO1xuICAgICAgICAgICAgd2FybmluZyghKHZhbHVlUHJvcE5hbWUgaW4gb3JpZ2luYWxQcm9wcyksICdgZ2V0RmllbGREZWNvcmF0b3JgIHdpbGwgb3ZlcnJpZGUgYCcgKyB2YWx1ZVByb3BOYW1lICsgJ2AsICcgKyAoJ3NvIHBsZWFzZSBkb25cXCd0IHNldCBgJyArIHZhbHVlUHJvcE5hbWUgKyAnYCBkaXJlY3RseSAnKSArICdhbmQgdXNlIGBzZXRGaWVsZHNWYWx1ZWAgdG8gc2V0IGl0LicpO1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZVByb3BOYW1lID0gJ2RlZmF1bHQnICsgdmFsdWVQcm9wTmFtZVswXS50b1VwcGVyQ2FzZSgpICsgdmFsdWVQcm9wTmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgIHdhcm5pbmcoIShkZWZhdWx0VmFsdWVQcm9wTmFtZSBpbiBvcmlnaW5hbFByb3BzKSwgJ2AnICsgZGVmYXVsdFZhbHVlUHJvcE5hbWUgKyAnYCBpcyBpbnZhbGlkICcgKyAoJ2ZvciBgZ2V0RmllbGREZWNvcmF0b3JgIHdpbGwgc2V0IGAnICsgdmFsdWVQcm9wTmFtZSArICdgLCcpICsgJyBwbGVhc2UgdXNlIGBvcHRpb24uaW5pdGlhbFZhbHVlYCBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaWVsZE1ldGEub3JpZ2luYWxQcm9wcyA9IG9yaWdpbmFsUHJvcHM7XG4gICAgICAgICAgZmllbGRNZXRhLnJlZiA9IGZpZWxkRWxlbS5yZWY7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChmaWVsZEVsZW0sIF9leHRlbmRzKHt9LCBwcm9wcywgX3RoaXMyLmZpZWxkc1N0b3JlLmdldEZpZWxkVmFsdWVQcm9wVmFsdWUoZmllbGRNZXRhKSkpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGdldEZpZWxkUHJvcHM6IGZ1bmN0aW9uIGdldEZpZWxkUHJvcHMobmFtZSkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgdXNlcnNGaWVsZE9wdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGNhbGwgYGdldEZpZWxkUHJvcHNgIHdpdGggdmFsaWQgbmFtZSBzdHJpbmchJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB3YXJuaW5nKHRoaXMuZmllbGRzU3RvcmUuaXNWYWxpZE5lc3RlZEZpZWxkTmFtZShuYW1lKSwgJ09uZSBmaWVsZCBuYW1lIGNhbm5vdCBiZSBwYXJ0IG9mIGFub3RoZXIsIGUuZy4gYGFgIGFuZCBgYS5iYC4nKTtcbiAgICAgICAgICB3YXJuaW5nKCEoJ2V4Y2x1c2l2ZScgaW4gdXNlcnNGaWVsZE9wdGlvbiksICdgb3B0aW9uLmV4Y2x1c2l2ZWAgb2YgYGdldEZpZWxkUHJvcHNgfGBnZXRGaWVsZERlY29yYXRvcmAgaGFkIGJlZW4gcmVtb3ZlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuY2xlYXJlZEZpZWxkTWV0YUNhY2hlW25hbWVdO1xuXG4gICAgICAgIHZhciBmaWVsZE9wdGlvbiA9IF9leHRlbmRzKHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIHRyaWdnZXI6IERFRkFVTFRfVFJJR0dFUixcbiAgICAgICAgICB2YWx1ZVByb3BOYW1lOiAndmFsdWUnLFxuICAgICAgICAgIHZhbGlkYXRlOiBbXVxuICAgICAgICB9LCB1c2Vyc0ZpZWxkT3B0aW9uKTtcblxuICAgICAgICB2YXIgcnVsZXMgPSBmaWVsZE9wdGlvbi5ydWxlcyxcbiAgICAgICAgICAgIHRyaWdnZXIgPSBmaWVsZE9wdGlvbi50cmlnZ2VyLFxuICAgICAgICAgICAgX2ZpZWxkT3B0aW9uJHZhbGlkYXRlID0gZmllbGRPcHRpb24udmFsaWRhdGVUcmlnZ2VyLFxuICAgICAgICAgICAgdmFsaWRhdGVUcmlnZ2VyID0gX2ZpZWxkT3B0aW9uJHZhbGlkYXRlID09PSB1bmRlZmluZWQgPyB0cmlnZ2VyIDogX2ZpZWxkT3B0aW9uJHZhbGlkYXRlLFxuICAgICAgICAgICAgdmFsaWRhdGUgPSBmaWVsZE9wdGlvbi52YWxpZGF0ZTtcblxuXG4gICAgICAgIHZhciBmaWVsZE1ldGEgPSB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkTWV0YShuYW1lKTtcbiAgICAgICAgaWYgKCdpbml0aWFsVmFsdWUnIGluIGZpZWxkT3B0aW9uKSB7XG4gICAgICAgICAgZmllbGRNZXRhLmluaXRpYWxWYWx1ZSA9IGZpZWxkT3B0aW9uLmluaXRpYWxWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbnB1dFByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRWYWx1ZVByb3BWYWx1ZShmaWVsZE9wdGlvbiksIHtcbiAgICAgICAgICByZWY6IHRoaXMuZ2V0Q2FjaGVCaW5kKG5hbWUsIG5hbWUgKyAnX19yZWYnLCB0aGlzLnNhdmVSZWYpXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZmllbGROYW1lUHJvcCkge1xuICAgICAgICAgIGlucHV0UHJvcHNbZmllbGROYW1lUHJvcF0gPSBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbGlkYXRlUnVsZXMgPSBub3JtYWxpemVWYWxpZGF0ZVJ1bGVzKHZhbGlkYXRlLCBydWxlcywgdmFsaWRhdGVUcmlnZ2VyKTtcbiAgICAgICAgdmFyIHZhbGlkYXRlVHJpZ2dlcnMgPSBnZXRWYWxpZGF0ZVRyaWdnZXJzKHZhbGlkYXRlUnVsZXMpO1xuICAgICAgICB2YWxpZGF0ZVRyaWdnZXJzLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgIGlmIChpbnB1dFByb3BzW2FjdGlvbl0pIHJldHVybjtcbiAgICAgICAgICBpbnB1dFByb3BzW2FjdGlvbl0gPSBfdGhpczMuZ2V0Q2FjaGVCaW5kKG5hbWUsIGFjdGlvbiwgX3RoaXMzLm9uQ29sbGVjdFZhbGlkYXRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIHdpbGwgYmUgY29sbGVjdFxuICAgICAgICBpZiAodHJpZ2dlciAmJiB2YWxpZGF0ZVRyaWdnZXJzLmluZGV4T2YodHJpZ2dlcikgPT09IC0xKSB7XG4gICAgICAgICAgaW5wdXRQcm9wc1t0cmlnZ2VyXSA9IHRoaXMuZ2V0Q2FjaGVCaW5kKG5hbWUsIHRyaWdnZXIsIHRoaXMub25Db2xsZWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtZXRhID0gX2V4dGVuZHMoe30sIGZpZWxkTWV0YSwgZmllbGRPcHRpb24sIHtcbiAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGVSdWxlc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWVsZHNTdG9yZS5zZXRGaWVsZE1ldGEobmFtZSwgbWV0YSk7XG4gICAgICAgIGlmIChmaWVsZE1ldGFQcm9wKSB7XG4gICAgICAgICAgaW5wdXRQcm9wc1tmaWVsZE1ldGFQcm9wXSA9IG1ldGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGREYXRhUHJvcCkge1xuICAgICAgICAgIGlucHV0UHJvcHNbZmllbGREYXRhUHJvcF0gPSB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkKG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlucHV0UHJvcHM7XG4gICAgICB9LFxuICAgICAgZ2V0RmllbGRJbnN0YW5jZTogZnVuY3Rpb24gZ2V0RmllbGRJbnN0YW5jZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1tuYW1lXTtcbiAgICAgIH0sXG4gICAgICBnZXRSdWxlczogZnVuY3Rpb24gZ2V0UnVsZXMoZmllbGRNZXRhLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGFjdGlvblJ1bGVzID0gZmllbGRNZXRhLnZhbGlkYXRlLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiAhYWN0aW9uIHx8IGl0ZW0udHJpZ2dlci5pbmRleE9mKGFjdGlvbikgPj0gMDtcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0ucnVsZXM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmxhdHRlbkFycmF5KGFjdGlvblJ1bGVzKTtcbiAgICAgIH0sXG4gICAgICBzZXRGaWVsZHM6IGZ1bmN0aW9uIHNldEZpZWxkcyhtYXliZU5lc3RlZEZpZWxkcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGZpZWxkcyA9IHRoaXMuZmllbGRzU3RvcmUuZmxhdHRlblJlZ2lzdGVyZWRGaWVsZHMobWF5YmVOZXN0ZWRGaWVsZHMpO1xuICAgICAgICB0aGlzLmZpZWxkc1N0b3JlLnNldEZpZWxkcyhmaWVsZHMpO1xuICAgICAgICBpZiAob25GaWVsZHNDaGFuZ2UpIHtcbiAgICAgICAgICB2YXIgY2hhbmdlZEZpZWxkcyA9IE9iamVjdC5rZXlzKGZpZWxkcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXQoYWNjLCBuYW1lLCBfdGhpczQuZmllbGRzU3RvcmUuZ2V0RmllbGQobmFtZSkpO1xuICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICBvbkZpZWxkc0NoYW5nZSh0aGlzLnByb3BzLCBjaGFuZ2VkRmllbGRzLCB0aGlzLmZpZWxkc1N0b3JlLmdldE5lc3RlZEFsbEZpZWxkcygpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKGNhbGxiYWNrKTtcbiAgICAgIH0sXG4gICAgICByZXNldEZpZWxkczogZnVuY3Rpb24gcmVzZXRGaWVsZHMobnMpIHtcbiAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgdmFyIG5ld0ZpZWxkcyA9IHRoaXMuZmllbGRzU3RvcmUucmVzZXRGaWVsZHMobnMpO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3RmllbGRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZHMobmV3RmllbGRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnMpIHtcbiAgICAgICAgICB2YXIgbmFtZXMgPSBBcnJheS5pc0FycmF5KG5zKSA/IG5zIDogW25zXTtcbiAgICAgICAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsZXRlIF90aGlzNS5jbGVhcmVkRmllbGRNZXRhQ2FjaGVbbmFtZV07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbGVhcmVkRmllbGRNZXRhQ2FjaGUgPSB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldEZpZWxkc1ZhbHVlOiBmdW5jdGlvbiBzZXRGaWVsZHNWYWx1ZShjaGFuZ2VkVmFsdWVzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZmllbGRzTWV0YSA9IHRoaXMuZmllbGRzU3RvcmUuZmllbGRzTWV0YTtcblxuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy5maWVsZHNTdG9yZS5mbGF0dGVuUmVnaXN0ZXJlZEZpZWxkcyhjaGFuZ2VkVmFsdWVzKTtcbiAgICAgICAgdmFyIG5ld0ZpZWxkcyA9IE9iamVjdC5rZXlzKHZhbHVlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5hbWUpIHtcbiAgICAgICAgICB2YXIgaXNSZWdpc3RlcmVkID0gZmllbGRzTWV0YVtuYW1lXTtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgd2FybmluZyhpc1JlZ2lzdGVyZWQsICdDYW5ub3QgdXNlIGBzZXRGaWVsZHNWYWx1ZWAgdW50aWwgJyArICd5b3UgdXNlIGBnZXRGaWVsZERlY29yYXRvcmAgb3IgYGdldEZpZWxkUHJvcHNgIHRvIHJlZ2lzdGVyIGl0LicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNSZWdpc3RlcmVkKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNbbmFtZV07XG4gICAgICAgICAgICBhY2NbbmFtZV0gPSB7XG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge30pO1xuICAgICAgICB0aGlzLnNldEZpZWxkcyhuZXdGaWVsZHMsIGNhbGxiYWNrKTtcbiAgICAgICAgaWYgKG9uVmFsdWVzQ2hhbmdlKSB7XG4gICAgICAgICAgdmFyIGFsbFZhbHVlcyA9IHRoaXMuZmllbGRzU3RvcmUuZ2V0QWxsVmFsdWVzKCk7XG4gICAgICAgICAgb25WYWx1ZXNDaGFuZ2UodGhpcy5wcm9wcywgY2hhbmdlZFZhbHVlcywgYWxsVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNhdmVSZWY6IGZ1bmN0aW9uIHNhdmVSZWYobmFtZSwgXywgY29tcG9uZW50KSB7XG4gICAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgICAgLy8gYWZ0ZXIgZGVzdHJveSwgZGVsZXRlIGRhdGFcbiAgICAgICAgICB0aGlzLmNsZWFyZWRGaWVsZE1ldGFDYWNoZVtuYW1lXSA9IHtcbiAgICAgICAgICAgIGZpZWxkOiB0aGlzLmZpZWxkc1N0b3JlLmdldEZpZWxkKG5hbWUpLFxuICAgICAgICAgICAgbWV0YTogdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZE1ldGEobmFtZSlcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuZmllbGRzU3RvcmUuY2xlYXJGaWVsZChuYW1lKTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5pbnN0YW5jZXNbbmFtZV07XG4gICAgICAgICAgZGVsZXRlIHRoaXMuY2FjaGVkQmluZFtuYW1lXTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWNvdmVyQ2xlYXJlZEZpZWxkKG5hbWUpO1xuICAgICAgICB2YXIgZmllbGRNZXRhID0gdGhpcy5maWVsZHNTdG9yZS5nZXRGaWVsZE1ldGEobmFtZSk7XG4gICAgICAgIGlmIChmaWVsZE1ldGEpIHtcbiAgICAgICAgICB2YXIgcmVmID0gZmllbGRNZXRhLnJlZjtcbiAgICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IHNldCByZWYgc3RyaW5nIGZvciAnICsgbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWYoY29tcG9uZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnN0YW5jZXNbbmFtZV0gPSBjb21wb25lbnQ7XG4gICAgICB9LFxuICAgICAgdmFsaWRhdGVGaWVsZHNJbnRlcm5hbDogZnVuY3Rpb24gdmFsaWRhdGVGaWVsZHNJbnRlcm5hbChmaWVsZHMsIF9yZWYsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICAgIHZhciBmaWVsZE5hbWVzID0gX3JlZi5maWVsZE5hbWVzLFxuICAgICAgICAgICAgYWN0aW9uID0gX3JlZi5hY3Rpb24sXG4gICAgICAgICAgICBfcmVmJG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZiRvcHRpb25zID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYkb3B0aW9ucztcblxuICAgICAgICB2YXIgYWxsUnVsZXMgPSB7fTtcbiAgICAgICAgdmFyIGFsbFZhbHVlcyA9IHt9O1xuICAgICAgICB2YXIgYWxsRmllbGRzID0ge307XG4gICAgICAgIHZhciBhbHJlYWR5RXJyb3JzID0ge307XG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICAgIHZhciBuYW1lID0gZmllbGQubmFtZTtcbiAgICAgICAgICBpZiAob3B0aW9ucy5mb3JjZSAhPT0gdHJ1ZSAmJiBmaWVsZC5kaXJ0eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZC5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgc2V0KGFscmVhZHlFcnJvcnMsIG5hbWUsIHsgZXJyb3JzOiBmaWVsZC5lcnJvcnMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBmaWVsZE1ldGEgPSBfdGhpczYuZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICAgIHZhciBuZXdGaWVsZCA9IF9leHRlbmRzKHt9LCBmaWVsZCk7XG4gICAgICAgICAgbmV3RmllbGQuZXJyb3JzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5ld0ZpZWxkLnZhbGlkYXRpbmcgPSB0cnVlO1xuICAgICAgICAgIG5ld0ZpZWxkLmRpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICBhbGxSdWxlc1tuYW1lXSA9IF90aGlzNi5nZXRSdWxlcyhmaWVsZE1ldGEsIGFjdGlvbik7XG4gICAgICAgICAgYWxsVmFsdWVzW25hbWVdID0gbmV3RmllbGQudmFsdWU7XG4gICAgICAgICAgYWxsRmllbGRzW25hbWVdID0gbmV3RmllbGQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldEZpZWxkcyhhbGxGaWVsZHMpO1xuICAgICAgICAvLyBpbiBjYXNlIG5vcm1hbGl6ZVxuICAgICAgICBPYmplY3Qua2V5cyhhbGxWYWx1ZXMpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICBhbGxWYWx1ZXNbZl0gPSBfdGhpczYuZmllbGRzU3RvcmUuZ2V0RmllbGRWYWx1ZShmKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjYWxsYmFjayAmJiBpc0VtcHR5T2JqZWN0KGFsbEZpZWxkcykpIHtcbiAgICAgICAgICBjYWxsYmFjayhpc0VtcHR5T2JqZWN0KGFscmVhZHlFcnJvcnMpID8gbnVsbCA6IGFscmVhZHlFcnJvcnMsIHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRzVmFsdWUoZmllbGROYW1lcykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsaWRhdG9yID0gbmV3IEFzeW5jVmFsaWRhdG9yKGFsbFJ1bGVzKTtcbiAgICAgICAgaWYgKHZhbGlkYXRlTWVzc2FnZXMpIHtcbiAgICAgICAgICB2YWxpZGF0b3IubWVzc2FnZXModmFsaWRhdGVNZXNzYWdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsaWRhdG9yLnZhbGlkYXRlKGFsbFZhbHVlcywgb3B0aW9ucywgZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgICAgIHZhciBlcnJvcnNHcm91cCA9IF9leHRlbmRzKHt9LCBhbHJlYWR5RXJyb3JzKTtcbiAgICAgICAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciBmaWVsZE5hbWUgPSBlLmZpZWxkO1xuICAgICAgICAgICAgICB2YXIgZmllbGQgPSBnZXQoZXJyb3JzR3JvdXAsIGZpZWxkTmFtZSk7XG4gICAgICAgICAgICAgIGlmICgodHlwZW9mIGZpZWxkID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihmaWVsZCkpICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGZpZWxkKSkge1xuICAgICAgICAgICAgICAgIHNldChlcnJvcnNHcm91cCwgZmllbGROYW1lLCB7IGVycm9yczogW10gfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGZpZWxkRXJyb3JzID0gZ2V0KGVycm9yc0dyb3VwLCBmaWVsZE5hbWUuY29uY2F0KCcuZXJyb3JzJykpO1xuICAgICAgICAgICAgICBmaWVsZEVycm9ycy5wdXNoKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBleHBpcmVkID0gW107XG4gICAgICAgICAgdmFyIG5vd0FsbEZpZWxkcyA9IHt9O1xuICAgICAgICAgIE9iamVjdC5rZXlzKGFsbFJ1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRFcnJvcnMgPSBnZXQoZXJyb3JzR3JvdXAsIG5hbWUpO1xuICAgICAgICAgICAgdmFyIG5vd0ZpZWxkID0gX3RoaXM2LmZpZWxkc1N0b3JlLmdldEZpZWxkKG5hbWUpO1xuICAgICAgICAgICAgLy8gYXZvaWQgY29uY3VycmVuY3kgcHJvYmxlbXNcbiAgICAgICAgICAgIGlmIChub3dGaWVsZC52YWx1ZSAhPT0gYWxsVmFsdWVzW25hbWVdKSB7XG4gICAgICAgICAgICAgIGV4cGlyZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vd0ZpZWxkLmVycm9ycyA9IGZpZWxkRXJyb3JzICYmIGZpZWxkRXJyb3JzLmVycm9ycztcbiAgICAgICAgICAgICAgbm93RmllbGQudmFsdWUgPSBhbGxWYWx1ZXNbbmFtZV07XG4gICAgICAgICAgICAgIG5vd0ZpZWxkLnZhbGlkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbm93RmllbGQuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbm93QWxsRmllbGRzW25hbWVdID0gbm93RmllbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX3RoaXM2LnNldEZpZWxkcyhub3dBbGxGaWVsZHMpO1xuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKGV4cGlyZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGV4cGlyZWQuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYyLm5hbWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgZmllbGRFcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbmFtZSArICcgbmVlZCB0byByZXZhbGlkYXRlJyxcbiAgICAgICAgICAgICAgICAgIGZpZWxkOiBuYW1lXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgc2V0KGVycm9yc0dyb3VwLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgICBleHBpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgZXJyb3JzOiBmaWVsZEVycm9yc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2soaXNFbXB0eU9iamVjdChlcnJvcnNHcm91cCkgPyBudWxsIDogZXJyb3JzR3JvdXAsIF90aGlzNi5maWVsZHNTdG9yZS5nZXRGaWVsZHNWYWx1ZShmaWVsZE5hbWVzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0ZUZpZWxkczogZnVuY3Rpb24gdmFsaWRhdGVGaWVsZHMobnMsIG9wdCwgY2IpIHtcbiAgICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF9nZXRQYXJhbXMgPSBnZXRQYXJhbXMobnMsIG9wdCwgY2IpLFxuICAgICAgICAgICAgbmFtZXMgPSBfZ2V0UGFyYW1zLm5hbWVzLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSBfZ2V0UGFyYW1zLmNhbGxiYWNrLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9nZXRQYXJhbXMub3B0aW9ucztcblxuICAgICAgICB2YXIgZmllbGROYW1lcyA9IG5hbWVzID8gdGhpcy5maWVsZHNTdG9yZS5nZXRWYWxpZEZpZWxkc0Z1bGxOYW1lKG5hbWVzKSA6IHRoaXMuZmllbGRzU3RvcmUuZ2V0VmFsaWRGaWVsZHNOYW1lKCk7XG4gICAgICAgIHZhciBmaWVsZHMgPSBmaWVsZE5hbWVzLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHZhciBmaWVsZE1ldGEgPSBfdGhpczcuZmllbGRzU3RvcmUuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICAgICAgICAgIHJldHVybiBoYXNSdWxlcyhmaWVsZE1ldGEudmFsaWRhdGUpO1xuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICB2YXIgZmllbGQgPSBfdGhpczcuZmllbGRzU3RvcmUuZ2V0RmllbGQobmFtZSk7XG4gICAgICAgICAgZmllbGQudmFsdWUgPSBfdGhpczcuZmllbGRzU3RvcmUuZ2V0RmllbGRWYWx1ZShuYW1lKTtcbiAgICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHRoaXMuZmllbGRzU3RvcmUuZ2V0RmllbGRzVmFsdWUoZmllbGROYW1lcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoJ2ZpcnN0RmllbGRzJyBpbiBvcHRpb25zKSkge1xuICAgICAgICAgIG9wdGlvbnMuZmlyc3RGaWVsZHMgPSBmaWVsZE5hbWVzLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgdmFyIGZpZWxkTWV0YSA9IF90aGlzNy5maWVsZHNTdG9yZS5nZXRGaWVsZE1ldGEobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gISFmaWVsZE1ldGEudmFsaWRhdGVGaXJzdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbGlkYXRlRmllbGRzSW50ZXJuYWwoZmllbGRzLCB7XG4gICAgICAgICAgZmllbGROYW1lczogZmllbGROYW1lcyxcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgIH0sXG4gICAgICBpc1N1Ym1pdHRpbmc6IGZ1bmN0aW9uIGlzU3VibWl0dGluZygpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgICAgIHdhcm5pbmcoZmFsc2UsICdgaXNTdWJtaXR0aW5nYCBpcyBkZXByZWNhdGVkLiAnICsgJ0FjdHVhbGx5LCBpdFxcJ3MgbW9yZSBjb252ZW5pZW50IHRvIGhhbmRsZSBzdWJtaXR0aW5nIHN0YXR1cyBieSB5b3Vyc2VsZi4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zdWJtaXR0aW5nO1xuICAgICAgfSxcbiAgICAgIHN1Ym1pdDogZnVuY3Rpb24gc3VibWl0KGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnYHN1Ym1pdGAgaXMgZGVwcmVjYXRlZC4nICsgJ0FjdHVhbGx5LCBpdFxcJ3MgbW9yZSBjb252ZW5pZW50IHRvIGhhbmRsZSBzdWJtaXR0aW5nIHN0YXR1cyBieSB5b3Vyc2VsZi4nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZm4gPSBmdW5jdGlvbiBmbigpIHtcbiAgICAgICAgICBfdGhpczguc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3VibWl0dGluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgY2FsbGJhY2soZm4pO1xuICAgICAgfSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHdyYXBwZWRDb21wb25lbnRSZWYgPSBfcHJvcHMud3JhcHBlZENvbXBvbmVudFJlZixcbiAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnd3JhcHBlZENvbXBvbmVudFJlZiddKTtcblxuICAgICAgICB2YXIgZm9ybVByb3BzID0gX2RlZmluZVByb3BlcnR5KHt9LCBmb3JtUHJvcE5hbWUsIHRoaXMuZ2V0Rm9ybSgpKTtcbiAgICAgICAgaWYgKHdpdGhSZWYpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICAgICAgICB3YXJuaW5nKGZhbHNlLCAnYHdpdGhSZWZgIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHdyYXBwZWRDb21wb25lbnRSZWZgIGluc3RlYWQuICcgKyAnU2VlOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L2Zvcm0jbm90ZS11c2Utd3JhcHBlZGNvbXBvbmVudHJlZi1pbnN0ZWFkLW9mLXdpdGhyZWYtYWZ0ZXItcmMtZm9ybTE0MCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtUHJvcHMucmVmID0gJ3dyYXBwZWRDb21wb25lbnQnO1xuICAgICAgICB9IGVsc2UgaWYgKHdyYXBwZWRDb21wb25lbnRSZWYpIHtcbiAgICAgICAgICBmb3JtUHJvcHMucmVmID0gd3JhcHBlZENvbXBvbmVudFJlZjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcHMgPSBtYXBQcm9wcy5jYWxsKHRoaXMsIF9leHRlbmRzKHt9LCBmb3JtUHJvcHMsIHJlc3RQcm9wcykpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBwcm9wcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJndW1lbnRDb250YWluZXIoRm9ybSwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJhc2VGb3JtO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19yYy1mb3JtQDIuMi4wQHJjLWZvcm0vZXMvY3JlYXRlQmFzZUZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDY3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5pbXBvcnQgeyBQcm92aWRlciwgY3JlYXRlIH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIE1lbnVNaXhpbiwgZ2V0QWN0aXZlS2V5IH0gZnJvbSAnLi9NZW51TWl4aW4nO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBNZW51ID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWVudScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZGVmYXVsdFNlbGVjdGVkS2V5czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgc2VsZWN0ZWRLZXlzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBkZWZhdWx0T3BlbktleXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIG9wZW5LZXlzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBtb2RlOiBQcm9wVHlwZXMub25lT2YoWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ3ZlcnRpY2FsLWxlZnQnLCAndmVydGljYWwtcmlnaHQnLCAnaW5saW5lJ10pLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXN0cm95OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvcGVuVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3BlbkFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHN1Yk1lbnVPcGVuRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc3ViTWVudUNsb3NlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZm9yY2VTdWJNZW51UmVuZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0cmlnZ2VyU3ViTWVudUFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsZXZlbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnlcbiAgfSxcblxuICBtaXhpbnM6IFtNZW51TWl4aW5dLFxuXG4gIGlzUm9vdE1lbnU6IHRydWUsXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGFibGU6IHRydWUsXG4gICAgICBvbkNsaWNrOiBub29wLFxuICAgICAgb25TZWxlY3Q6IG5vb3AsXG4gICAgICBvbk9wZW5DaGFuZ2U6IG5vb3AsXG4gICAgICBvbkRlc2VsZWN0OiBub29wLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5czogW10sXG4gICAgICBkZWZhdWx0T3BlbktleXM6IFtdLFxuICAgICAgc3ViTWVudU9wZW5EZWxheTogMC4xLFxuICAgICAgc3ViTWVudUNsb3NlRGVsYXk6IDAuMSxcbiAgICAgIHRyaWdnZXJTdWJNZW51QWN0aW9uOiAnaG92ZXInXG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgc2VsZWN0ZWRLZXlzID0gcHJvcHMuZGVmYXVsdFNlbGVjdGVkS2V5cztcbiAgICB2YXIgb3BlbktleXMgPSBwcm9wcy5kZWZhdWx0T3BlbktleXM7XG4gICAgaWYgKCdzZWxlY3RlZEtleXMnIGluIHByb3BzKSB7XG4gICAgICBzZWxlY3RlZEtleXMgPSBwcm9wcy5zZWxlY3RlZEtleXMgfHwgW107XG4gICAgfVxuICAgIGlmICgnb3BlbktleXMnIGluIHByb3BzKSB7XG4gICAgICBvcGVuS2V5cyA9IHByb3BzLm9wZW5LZXlzIHx8IFtdO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmUgPSBjcmVhdGUoe1xuICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXMsXG4gICAgICBvcGVuS2V5czogb3BlbktleXMsXG4gICAgICBhY3RpdmVLZXk6IHsgJzAtbWVudS0nOiBnZXRBY3RpdmVLZXkocHJvcHMsIHByb3BzLmFjdGl2ZUtleSkgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICgnc2VsZWN0ZWRLZXlzJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZEtleXM6IG5leHRQcm9wcy5zZWxlY3RlZEtleXMgfHwgW11cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoJ29wZW5LZXlzJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuS2V5czogbmV4dFByb3BzLm9wZW5LZXlzIHx8IFtdXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChzZWxlY3RJbmZvKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJvcHMuc2VsZWN0YWJsZSkge1xuICAgICAgLy8gcm9vdCBtZW51XG4gICAgICB2YXIgc2VsZWN0ZWRLZXlzID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGVkS2V5cztcbiAgICAgIHZhciBzZWxlY3RlZEtleSA9IHNlbGVjdEluZm8ua2V5O1xuICAgICAgaWYgKHByb3BzLm11bHRpcGxlKSB7XG4gICAgICAgIHNlbGVjdGVkS2V5cyA9IHNlbGVjdGVkS2V5cy5jb25jYXQoW3NlbGVjdGVkS2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZEtleXMgPSBbc2VsZWN0ZWRLZXldO1xuICAgICAgfVxuICAgICAgaWYgKCEoJ3NlbGVjdGVkS2V5cycgaW4gcHJvcHMpKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgIHNlbGVjdGVkS2V5czogc2VsZWN0ZWRLZXlzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcHJvcHMub25TZWxlY3QoX2V4dGVuZHMoe30sIHNlbGVjdEluZm8sIHtcbiAgICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXNcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgfSxcbiAgb25PcGVuQ2hhbmdlOiBmdW5jdGlvbiBvbk9wZW5DaGFuZ2UoZXZlbnQpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBvcGVuS2V5cyA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5vcGVuS2V5cy5jb25jYXQoKTtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBwcm9jZXNzU2luZ2xlID0gZnVuY3Rpb24gcHJvY2Vzc1NpbmdsZShlKSB7XG4gICAgICB2YXIgb25lQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgaWYgKGUub3Blbikge1xuICAgICAgICBvbmVDaGFuZ2VkID0gb3BlbktleXMuaW5kZXhPZihlLmtleSkgPT09IC0xO1xuICAgICAgICBpZiAob25lQ2hhbmdlZCkge1xuICAgICAgICAgIG9wZW5LZXlzLnB1c2goZS5rZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5kZXggPSBvcGVuS2V5cy5pbmRleE9mKGUua2V5KTtcbiAgICAgICAgb25lQ2hhbmdlZCA9IGluZGV4ICE9PSAtMTtcbiAgICAgICAgaWYgKG9uZUNoYW5nZWQpIHtcbiAgICAgICAgICBvcGVuS2V5cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGFuZ2VkID0gY2hhbmdlZCB8fCBvbmVDaGFuZ2VkO1xuICAgIH07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICAvLyBiYXRjaCBjaGFuZ2UgY2FsbFxuICAgICAgZXZlbnQuZm9yRWFjaChwcm9jZXNzU2luZ2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzc1NpbmdsZShldmVudCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICBpZiAoISgnb3BlbktleXMnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuc2V0U3RhdGUoeyBvcGVuS2V5czogb3BlbktleXMgfSk7XG4gICAgICB9XG4gICAgICBwcm9wcy5vbk9wZW5DaGFuZ2Uob3BlbktleXMpO1xuICAgIH1cbiAgfSxcbiAgb25EZXNlbGVjdDogZnVuY3Rpb24gb25EZXNlbGVjdChzZWxlY3RJbmZvKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJvcHMuc2VsZWN0YWJsZSkge1xuICAgICAgdmFyIHNlbGVjdGVkS2V5cyA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3RlZEtleXMuY29uY2F0KCk7XG4gICAgICB2YXIgc2VsZWN0ZWRLZXkgPSBzZWxlY3RJbmZvLmtleTtcbiAgICAgIHZhciBpbmRleCA9IHNlbGVjdGVkS2V5cy5pbmRleE9mKHNlbGVjdGVkS2V5KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgc2VsZWN0ZWRLZXlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICBpZiAoISgnc2VsZWN0ZWRLZXlzJyBpbiBwcm9wcykpIHtcbiAgICAgICAgdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwcm9wcy5vbkRlc2VsZWN0KF9leHRlbmRzKHt9LCBzZWxlY3RJbmZvLCB7XG4gICAgICAgIHNlbGVjdGVkS2V5czogc2VsZWN0ZWRLZXlzXG4gICAgICB9KSk7XG4gICAgfVxuICB9LFxuICBnZXRPcGVuVHJhbnNpdGlvbk5hbWU6IGZ1bmN0aW9uIGdldE9wZW5UcmFuc2l0aW9uTmFtZSgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLm9wZW5UcmFuc2l0aW9uTmFtZTtcbiAgICB2YXIgYW5pbWF0aW9uTmFtZSA9IHByb3BzLm9wZW5BbmltYXRpb247XG4gICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiB0eXBlb2YgYW5pbWF0aW9uTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy1vcGVuLScgKyBhbmltYXRpb25OYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gIH0sXG4gIGlzSW5saW5lTW9kZTogZnVuY3Rpb24gaXNJbmxpbmVNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm1vZGUgPT09ICdpbmxpbmUnO1xuICB9LFxuICBsYXN0T3BlblN1Yk1lbnU6IGZ1bmN0aW9uIGxhc3RPcGVuU3ViTWVudSgpIHtcbiAgICB2YXIgbGFzdE9wZW4gPSBbXTtcblxuICAgIHZhciBfc3RvcmUkZ2V0U3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgIG9wZW5LZXlzID0gX3N0b3JlJGdldFN0YXRlLm9wZW5LZXlzO1xuXG4gICAgaWYgKG9wZW5LZXlzLmxlbmd0aCkge1xuICAgICAgbGFzdE9wZW4gPSB0aGlzLmdldEZsYXRJbnN0YW5jZUFycmF5KCkuZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjICYmIG9wZW5LZXlzLmluZGV4T2YoYy5wcm9wcy5ldmVudEtleSkgIT09IC0xO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsYXN0T3BlblswXTtcbiAgfSxcbiAgcmVuZGVyTWVudUl0ZW06IGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtKGMsIGksIHN1YkluZGV4LCBzdWJNZW51S2V5KSB7XG4gICAgaWYgKCFjKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHZhciBleHRyYVByb3BzID0ge1xuICAgICAgb3BlbktleXM6IHN0YXRlLm9wZW5LZXlzLFxuICAgICAgc2VsZWN0ZWRLZXlzOiBzdGF0ZS5zZWxlY3RlZEtleXMsXG4gICAgICB0cmlnZ2VyU3ViTWVudUFjdGlvbjogdGhpcy5wcm9wcy50cmlnZ2VyU3ViTWVudUFjdGlvbixcbiAgICAgIHN1Yk1lbnVLZXk6IHN1Yk1lbnVLZXlcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnJlbmRlckNvbW1vbk1lbnVJdGVtKGMsIGksIHN1YkluZGV4LCBleHRyYVByb3BzKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuICAgIHByb3BzLmNsYXNzTmFtZSArPSAnICcgKyBwcm9wcy5wcmVmaXhDbHMgKyAnLXJvb3QnO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgUHJvdmlkZXIsXG4gICAgICB7IHN0b3JlOiB0aGlzLnN0b3JlIH0sXG4gICAgICB0aGlzLnJlbmRlclJvb3QocHJvcHMpXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLW1lbnVANi4yLjEwQHJjLW1lbnUvZXMvTWVudS5qc1xuLy8gbW9kdWxlIGlkID0gNzY2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJztcblxudmFyIERPTVdyYXAgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdET01XcmFwJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICB0YWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGlkZGVuQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZzogJ2RpdidcbiAgICB9O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG4gICAgaWYgKCFwcm9wcy52aXNpYmxlKSB7XG4gICAgICBwcm9wcy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgfHwgJyc7XG4gICAgICBwcm9wcy5jbGFzc05hbWUgKz0gJyAnICsgcHJvcHMuaGlkZGVuQ2xhc3NOYW1lO1xuICAgIH1cbiAgICB2YXIgVGFnID0gcHJvcHMudGFnO1xuICAgIGRlbGV0ZSBwcm9wcy50YWc7XG4gICAgZGVsZXRlIHByb3BzLmhpZGRlbkNsYXNzTmFtZTtcbiAgICBkZWxldGUgcHJvcHMudmlzaWJsZTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUYWcsIHByb3BzKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTVdyYXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLW1lbnVANi4yLjEwQHJjLW1lbnUvZXMvRE9NV3JhcC5qc1xuLy8gbW9kdWxlIGlkID0gNzcxXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tICdjcmVhdGUtcmVhY3QtY2xhc3MnO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICdyYy11dGlsL2VzL0tleUNvZGUnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgU3ViUG9wdXBNZW51IGZyb20gJy4vU3ViUG9wdXBNZW51JztcbmltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4vcGxhY2VtZW50cyc7XG5pbXBvcnQgeyBub29wLCBsb29wTWVudUl0ZW1SZWN1c2l2ZWx5LCBnZXRNZW51SWRGcm9tU3ViTWVudUV2ZW50S2V5IH0gZnJvbSAnLi91dGlsJztcblxudmFyIGd1aWQgPSAwO1xuXG52YXIgcG9wdXBQbGFjZW1lbnRNYXAgPSB7XG4gIGhvcml6b250YWw6ICdib3R0b21MZWZ0JyxcbiAgdmVydGljYWw6ICdyaWdodFRvcCcsXG4gICd2ZXJ0aWNhbC1sZWZ0JzogJ3JpZ2h0VG9wJyxcbiAgJ3ZlcnRpY2FsLXJpZ2h0JzogJ2xlZnRUb3AnXG59O1xuXG52YXIgdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0ID0gZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0KHN0b3JlLCBldmVudEtleSwgZGVmYXVsdEFjdGl2ZUZpcnN0KSB7XG4gIHZhciBfZXh0ZW5kczI7XG5cbiAgdmFyIG1lbnVJZCA9IGdldE1lbnVJZEZyb21TdWJNZW51RXZlbnRLZXkoZXZlbnRLZXkpO1xuICB2YXIgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBzdG9yZS5zZXRTdGF0ZSh7XG4gICAgZGVmYXVsdEFjdGl2ZUZpcnN0OiBfZXh0ZW5kcyh7fSwgc3RhdGUuZGVmYXVsdEFjdGl2ZUZpcnN0LCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMlttZW51SWRdID0gZGVmYXVsdEFjdGl2ZUZpcnN0LCBfZXh0ZW5kczIpKVxuICB9KTtcbn07XG5cbnZhciBTdWJNZW51ID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnU3ViTWVudScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcGFyZW50TWVudTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgc2VsZWN0ZWRLZXlzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgb3BlbktleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbk9wZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJvb3RQcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXZlbnRLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsIC8vIFRPRE86IHJlbW92ZVxuICAgIG9uSXRlbUhvdmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdHJpZ2dlclN1Yk1lbnVBY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXN0cm95OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25UaXRsZU1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVGl0bGVNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblRpdGxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2xcbiAgfSxcblxuICBpc1Jvb3RNZW51OiBmYWxzZSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25Nb3VzZUVudGVyOiBub29wLFxuICAgICAgb25Nb3VzZUxlYXZlOiBub29wLFxuICAgICAgb25UaXRsZU1vdXNlRW50ZXI6IG5vb3AsXG4gICAgICBvblRpdGxlTW91c2VMZWF2ZTogbm9vcCxcbiAgICAgIG9uVGl0bGVDbGljazogbm9vcCxcbiAgICAgIHRpdGxlOiAnJ1xuICAgIH07XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHRoaXMuaXNTdWJNZW51ID0gMTtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBzdG9yZSA9IHByb3BzLnN0b3JlO1xuICAgIHZhciBldmVudEtleSA9IHByb3BzLmV2ZW50S2V5O1xuICAgIHZhciBkZWZhdWx0QWN0aXZlRmlyc3QgPSBzdG9yZS5nZXRTdGF0ZSgpLmRlZmF1bHRBY3RpdmVGaXJzdDtcbiAgICB2YXIgdmFsdWUgPSBmYWxzZTtcblxuICAgIGlmIChkZWZhdWx0QWN0aXZlRmlyc3QpIHtcbiAgICAgIHZhbHVlID0gZGVmYXVsdEFjdGl2ZUZpcnN0W2V2ZW50S2V5XTtcbiAgICB9XG5cbiAgICB1cGRhdGVEZWZhdWx0QWN0aXZlRmlyc3Qoc3RvcmUsIGV2ZW50S2V5LCB2YWx1ZSk7XG5cbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuICAgIC8vIGludm9rZSBjdXN0b21pemVkIHJlZiB0byBleHBvc2UgY29tcG9uZW50IHRvIG1peGluXG4gICAgaWYgKHRoaXMucHJvcHMubWFudWFsUmVmKSB7XG4gICAgICB0aGlzLnByb3BzLm1hbnVhbFJlZih0aGlzKTtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgbW9kZSA9IF9wcm9wcy5tb2RlLFxuICAgICAgICBwYXJlbnRNZW51ID0gX3Byb3BzLnBhcmVudE1lbnU7XG5cbiAgICBpZiAobW9kZSAhPT0gJ2hvcml6b250YWwnIHx8ICFwYXJlbnRNZW51LmlzUm9vdE1lbnUgfHwgIXRoaXMucHJvcHMuaXNPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubWluV2lkdGhUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnN1Yk1lbnVUaXRsZSB8fCAhX3RoaXMubWVudUluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBwb3B1cE1lbnUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcy5tZW51SW5zdGFuY2UpO1xuICAgICAgaWYgKHBvcHVwTWVudS5vZmZzZXRXaWR0aCA+PSBfdGhpcy5zdWJNZW51VGl0bGUub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcG9wdXBNZW51LnN0eWxlLm1pbldpZHRoID0gX3RoaXMuc3ViTWVudVRpdGxlLm9mZnNldFdpZHRoICsgJ3B4JztcbiAgICB9LCAwKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25EZXN0cm95ID0gX3Byb3BzMi5vbkRlc3Ryb3ksXG4gICAgICAgIGV2ZW50S2V5ID0gX3Byb3BzMi5ldmVudEtleTtcblxuICAgIGlmIChvbkRlc3Ryb3kpIHtcbiAgICAgIG9uRGVzdHJveShldmVudEtleSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1pbldpZHRoVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWluV2lkdGhUaW1lb3V0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubW91c2VlbnRlclRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1vdXNlZW50ZXJUaW1lb3V0KTtcbiAgICB9XG4gIH0sXG4gIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KGtleSkge1xuICAgIHRoaXMucHJvcHMub25EZXN0cm95KGtleSk7XG4gIH0sXG4gIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcbiAgICB2YXIgbWVudSA9IHRoaXMubWVudUluc3RhbmNlO1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaXNPcGVuID0gX3Byb3BzMy5pc09wZW4sXG4gICAgICAgIHN0b3JlID0gX3Byb3BzMy5zdG9yZTtcblxuXG4gICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuRU5URVIpIHtcbiAgICAgIHRoaXMub25UaXRsZUNsaWNrKGUpO1xuICAgICAgdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0KHN0b3JlLCB0aGlzLnByb3BzLmV2ZW50S2V5LCB0cnVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLlJJR0hUKSB7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIG1lbnUub25LZXlEb3duKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyT3BlbkNoYW5nZSh0cnVlKTtcbiAgICAgICAgLy8gbmVlZCB0byB1cGRhdGUgY3VycmVudCBtZW51J3MgZGVmYXVsdEFjdGl2ZUZpcnN0IHZhbHVlXG4gICAgICAgIHVwZGF0ZURlZmF1bHRBY3RpdmVGaXJzdChzdG9yZSwgdGhpcy5wcm9wcy5ldmVudEtleSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuTEVGVCkge1xuICAgICAgdmFyIGhhbmRsZWQgPSB2b2lkIDA7XG4gICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgIGhhbmRsZWQgPSBtZW51Lm9uS2V5RG93bihlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoIWhhbmRsZWQpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyT3BlbkNoYW5nZShmYWxzZSk7XG4gICAgICAgIGhhbmRsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhbmRsZWQ7XG4gICAgfVxuXG4gICAgaWYgKGlzT3BlbiAmJiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5VUCB8fCBrZXlDb2RlID09PSBLZXlDb2RlLkRPV04pKSB7XG4gICAgICByZXR1cm4gbWVudS5vbktleURvd24oZSk7XG4gICAgfVxuICB9LFxuICBvbk9wZW5DaGFuZ2U6IGZ1bmN0aW9uIG9uT3BlbkNoYW5nZShlKSB7XG4gICAgdGhpcy5wcm9wcy5vbk9wZW5DaGFuZ2UoZSk7XG4gIH0sXG4gIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBmdW5jdGlvbiBvblBvcHVwVmlzaWJsZUNoYW5nZSh2aXNpYmxlKSB7XG4gICAgdGhpcy50cmlnZ2VyT3BlbkNoYW5nZSh2aXNpYmxlLCB2aXNpYmxlID8gJ21vdXNlZW50ZXInIDogJ21vdXNlbGVhdmUnKTtcbiAgfSxcbiAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoZSkge1xuICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAga2V5ID0gX3Byb3BzNC5ldmVudEtleSxcbiAgICAgICAgb25Nb3VzZUVudGVyID0gX3Byb3BzNC5vbk1vdXNlRW50ZXIsXG4gICAgICAgIHN0b3JlID0gX3Byb3BzNC5zdG9yZTtcblxuICAgIHVwZGF0ZURlZmF1bHRBY3RpdmVGaXJzdChzdG9yZSwgdGhpcy5wcm9wcy5ldmVudEtleSwgZmFsc2UpO1xuICAgIG9uTW91c2VFbnRlcih7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGRvbUV2ZW50OiBlXG4gICAgfSk7XG4gIH0sXG4gIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKGUpIHtcbiAgICB2YXIgX3Byb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgIHBhcmVudE1lbnUgPSBfcHJvcHM1LnBhcmVudE1lbnUsXG4gICAgICAgIGV2ZW50S2V5ID0gX3Byb3BzNS5ldmVudEtleSxcbiAgICAgICAgb25Nb3VzZUxlYXZlID0gX3Byb3BzNS5vbk1vdXNlTGVhdmU7XG5cbiAgICBwYXJlbnRNZW51LnN1Yk1lbnVJbnN0YW5jZSA9IHRoaXM7XG4gICAgb25Nb3VzZUxlYXZlKHtcbiAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICBkb21FdmVudDogZVxuICAgIH0pO1xuICB9LFxuICBvblRpdGxlTW91c2VFbnRlcjogZnVuY3Rpb24gb25UaXRsZU1vdXNlRW50ZXIoZG9tRXZlbnQpIHtcbiAgICB2YXIgX3Byb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGtleSA9IF9wcm9wczYuZXZlbnRLZXksXG4gICAgICAgIG9uSXRlbUhvdmVyID0gX3Byb3BzNi5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgb25UaXRsZU1vdXNlRW50ZXIgPSBfcHJvcHM2Lm9uVGl0bGVNb3VzZUVudGVyO1xuXG4gICAgb25JdGVtSG92ZXIoe1xuICAgICAga2V5OiBrZXksXG4gICAgICBob3ZlcjogdHJ1ZVxuICAgIH0pO1xuICAgIG9uVGl0bGVNb3VzZUVudGVyKHtcbiAgICAgIGtleToga2V5LFxuICAgICAgZG9tRXZlbnQ6IGRvbUV2ZW50XG4gICAgfSk7XG4gIH0sXG4gIG9uVGl0bGVNb3VzZUxlYXZlOiBmdW5jdGlvbiBvblRpdGxlTW91c2VMZWF2ZShlKSB7XG4gICAgdmFyIF9wcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICBwYXJlbnRNZW51ID0gX3Byb3BzNy5wYXJlbnRNZW51LFxuICAgICAgICBldmVudEtleSA9IF9wcm9wczcuZXZlbnRLZXksXG4gICAgICAgIG9uSXRlbUhvdmVyID0gX3Byb3BzNy5vbkl0ZW1Ib3ZlcixcbiAgICAgICAgb25UaXRsZU1vdXNlTGVhdmUgPSBfcHJvcHM3Lm9uVGl0bGVNb3VzZUxlYXZlO1xuXG4gICAgcGFyZW50TWVudS5zdWJNZW51SW5zdGFuY2UgPSB0aGlzO1xuICAgIG9uSXRlbUhvdmVyKHtcbiAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICBob3ZlcjogZmFsc2VcbiAgICB9KTtcbiAgICBvblRpdGxlTW91c2VMZWF2ZSh7XG4gICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgZG9tRXZlbnQ6IGVcbiAgICB9KTtcbiAgfSxcbiAgb25UaXRsZUNsaWNrOiBmdW5jdGlvbiBvblRpdGxlQ2xpY2soZSkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICBwcm9wcy5vblRpdGxlQ2xpY2soe1xuICAgICAga2V5OiBwcm9wcy5ldmVudEtleSxcbiAgICAgIGRvbUV2ZW50OiBlXG4gICAgfSk7XG4gICAgaWYgKHByb3BzLnRyaWdnZXJTdWJNZW51QWN0aW9uID09PSAnaG92ZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudHJpZ2dlck9wZW5DaGFuZ2UoIXByb3BzLmlzT3BlbiwgJ2NsaWNrJyk7XG4gICAgdXBkYXRlRGVmYXVsdEFjdGl2ZUZpcnN0KHByb3BzLnN0b3JlLCB0aGlzLnByb3BzLmV2ZW50S2V5LCBmYWxzZSk7XG4gIH0sXG4gIG9uU3ViTWVudUNsaWNrOiBmdW5jdGlvbiBvblN1Yk1lbnVDbGljayhpbmZvKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMuYWRkS2V5UGF0aChpbmZvKSk7XG4gIH0sXG4gIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChpbmZvKSB7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdChpbmZvKTtcbiAgfSxcbiAgb25EZXNlbGVjdDogZnVuY3Rpb24gb25EZXNlbGVjdChpbmZvKSB7XG4gICAgdGhpcy5wcm9wcy5vbkRlc2VsZWN0KGluZm8pO1xuICB9LFxuICBnZXRQcmVmaXhDbHM6IGZ1bmN0aW9uIGdldFByZWZpeENscygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yb290UHJlZml4Q2xzICsgJy1zdWJtZW51JztcbiAgfSxcbiAgZ2V0QWN0aXZlQ2xhc3NOYW1lOiBmdW5jdGlvbiBnZXRBY3RpdmVDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJlZml4Q2xzKCkgKyAnLWFjdGl2ZSc7XG4gIH0sXG4gIGdldERpc2FibGVkQ2xhc3NOYW1lOiBmdW5jdGlvbiBnZXREaXNhYmxlZENsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcmVmaXhDbHMoKSArICctZGlzYWJsZWQnO1xuICB9LFxuICBnZXRTZWxlY3RlZENsYXNzTmFtZTogZnVuY3Rpb24gZ2V0U2VsZWN0ZWRDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJlZml4Q2xzKCkgKyAnLXNlbGVjdGVkJztcbiAgfSxcbiAgZ2V0T3BlbkNsYXNzTmFtZTogZnVuY3Rpb24gZ2V0T3BlbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yb290UHJlZml4Q2xzICsgJy1zdWJtZW51LW9wZW4nO1xuICB9LFxuICBzYXZlTWVudUluc3RhbmNlOiBmdW5jdGlvbiBzYXZlTWVudUluc3RhbmNlKGMpIHtcbiAgICAvLyBjaGlsZHJlbiBtZW51IGluc3RhbmNlXG4gICAgdGhpcy5tZW51SW5zdGFuY2UgPSBjO1xuICB9LFxuICBhZGRLZXlQYXRoOiBmdW5jdGlvbiBhZGRLZXlQYXRoKGluZm8pIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGluZm8sIHtcbiAgICAgIGtleVBhdGg6IChpbmZvLmtleVBhdGggfHwgW10pLmNvbmNhdCh0aGlzLnByb3BzLmV2ZW50S2V5KVxuICAgIH0pO1xuICB9LFxuICB0cmlnZ2VyT3BlbkNoYW5nZTogZnVuY3Rpb24gdHJpZ2dlck9wZW5DaGFuZ2Uob3BlbiwgdHlwZSkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGtleSA9IHRoaXMucHJvcHMuZXZlbnRLZXk7XG4gICAgdmFyIG9wZW5DaGFuZ2UgPSBmdW5jdGlvbiBvcGVuQ2hhbmdlKCkge1xuICAgICAgX3RoaXMyLm9uT3BlbkNoYW5nZSh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBpdGVtOiBfdGhpczIsXG4gICAgICAgIHRyaWdnZXI6IHR5cGUsXG4gICAgICAgIG9wZW46IG9wZW5cbiAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKHR5cGUgPT09ICdtb3VzZWVudGVyJykge1xuICAgICAgLy8gbWFrZSBzdXJlIG1vdXNlZW50ZXIgaGFwcGVuIGFmdGVyIG90aGVyIG1lbnUgaXRlbSdzIG1vdXNlbGVhdmVcbiAgICAgIHRoaXMubW91c2VlbnRlclRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb3BlbkNoYW5nZSgpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZW5DaGFuZ2UoKTtcbiAgICB9XG4gIH0sXG4gIGlzQ2hpbGRyZW5TZWxlY3RlZDogZnVuY3Rpb24gaXNDaGlsZHJlblNlbGVjdGVkKCkge1xuICAgIHZhciByZXQgPSB7IGZpbmQ6IGZhbHNlIH07XG4gICAgbG9vcE1lbnVJdGVtUmVjdXNpdmVseSh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnByb3BzLnNlbGVjdGVkS2V5cywgcmV0KTtcbiAgICByZXR1cm4gcmV0LmZpbmQ7XG4gIH0sXG4gIGlzT3BlbjogZnVuY3Rpb24gaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9wZW5LZXlzLmluZGV4T2YodGhpcy5wcm9wcy5ldmVudEtleSkgIT09IC0xO1xuICB9LFxuICByZW5kZXJDaGlsZHJlbjogZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBiYXNlUHJvcHMgPSB7XG4gICAgICBtb2RlOiBwcm9wcy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogcHJvcHMubW9kZSxcbiAgICAgIHZpc2libGU6IHRoaXMucHJvcHMuaXNPcGVuLFxuICAgICAgbGV2ZWw6IHByb3BzLmxldmVsICsgMSxcbiAgICAgIGlubGluZUluZGVudDogcHJvcHMuaW5saW5lSW5kZW50LFxuICAgICAgZm9jdXNhYmxlOiBmYWxzZSxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25TdWJNZW51Q2xpY2ssXG4gICAgICBvblNlbGVjdDogdGhpcy5vblNlbGVjdCxcbiAgICAgIG9uRGVzZWxlY3Q6IHRoaXMub25EZXNlbGVjdCxcbiAgICAgIG9uRGVzdHJveTogdGhpcy5vbkRlc3Ryb3ksXG4gICAgICBzZWxlY3RlZEtleXM6IHByb3BzLnNlbGVjdGVkS2V5cyxcbiAgICAgIGV2ZW50S2V5OiBwcm9wcy5ldmVudEtleSArICctbWVudS0nLFxuICAgICAgb3BlbktleXM6IHByb3BzLm9wZW5LZXlzLFxuICAgICAgb3BlblRyYW5zaXRpb25OYW1lOiBwcm9wcy5vcGVuVHJhbnNpdGlvbk5hbWUsXG4gICAgICBvcGVuQW5pbWF0aW9uOiBwcm9wcy5vcGVuQW5pbWF0aW9uLFxuICAgICAgb25PcGVuQ2hhbmdlOiB0aGlzLm9uT3BlbkNoYW5nZSxcbiAgICAgIHN1Yk1lbnVPcGVuRGVsYXk6IHByb3BzLnN1Yk1lbnVPcGVuRGVsYXksXG4gICAgICBzdWJNZW51Q2xvc2VEZWxheTogcHJvcHMuc3ViTWVudUNsb3NlRGVsYXksXG4gICAgICBmb3JjZVN1Yk1lbnVSZW5kZXI6IHByb3BzLmZvcmNlU3ViTWVudVJlbmRlcixcbiAgICAgIHRyaWdnZXJTdWJNZW51QWN0aW9uOiBwcm9wcy50cmlnZ2VyU3ViTWVudUFjdGlvbixcbiAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdDogcHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5kZWZhdWx0QWN0aXZlRmlyc3RbZ2V0TWVudUlkRnJvbVN1Yk1lbnVFdmVudEtleShwcm9wcy5ldmVudEtleSldLFxuICAgICAgbXVsdGlwbGU6IHByb3BzLm11bHRpcGxlLFxuICAgICAgcHJlZml4Q2xzOiBwcm9wcy5yb290UHJlZml4Q2xzLFxuICAgICAgaWQ6IHRoaXMuX21lbnVJZCxcbiAgICAgIG1hbnVhbFJlZjogdGhpcy5zYXZlTWVudUluc3RhbmNlXG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFN1YlBvcHVwTWVudSxcbiAgICAgIGJhc2VQcm9wcyxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfSxcbiAgc2F2ZVN1Yk1lbnVUaXRsZTogZnVuY3Rpb24gc2F2ZVN1Yk1lbnVUaXRsZShzdWJNZW51VGl0bGUpIHtcbiAgICB0aGlzLnN1Yk1lbnVUaXRsZSA9IHN1Yk1lbnVUaXRsZTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgaXNPcGVuID0gcHJvcHMuaXNPcGVuO1xuICAgIHZhciBwcmVmaXhDbHMgPSB0aGlzLmdldFByZWZpeENscygpO1xuICAgIHZhciBpc0lubGluZU1vZGUgPSBwcm9wcy5tb2RlID09PSAnaW5saW5lJztcbiAgICB2YXIgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIHByZWZpeENscyArICctJyArIHByb3BzLm1vZGUsIChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1twcm9wcy5jbGFzc05hbWVdID0gISFwcm9wcy5jbGFzc05hbWUsIF9jbGFzc05hbWVzW3RoaXMuZ2V0T3BlbkNsYXNzTmFtZSgpXSA9IGlzT3BlbiwgX2NsYXNzTmFtZXNbdGhpcy5nZXRBY3RpdmVDbGFzc05hbWUoKV0gPSBwcm9wcy5hY3RpdmUgfHwgaXNPcGVuICYmICFpc0lubGluZU1vZGUsIF9jbGFzc05hbWVzW3RoaXMuZ2V0RGlzYWJsZWRDbGFzc05hbWUoKV0gPSBwcm9wcy5kaXNhYmxlZCwgX2NsYXNzTmFtZXNbdGhpcy5nZXRTZWxlY3RlZENsYXNzTmFtZSgpXSA9IHRoaXMuaXNDaGlsZHJlblNlbGVjdGVkKCksIF9jbGFzc05hbWVzKSk7XG5cbiAgICBpZiAoIXRoaXMuX21lbnVJZCkge1xuICAgICAgaWYgKHByb3BzLmV2ZW50S2V5KSB7XG4gICAgICAgIHRoaXMuX21lbnVJZCA9IHByb3BzLmV2ZW50S2V5ICsgJyRNZW51JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX21lbnVJZCA9ICckX18kJyArICsrZ3VpZCArICckTWVudSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG1vdXNlRXZlbnRzID0ge307XG4gICAgdmFyIHRpdGxlQ2xpY2tFdmVudHMgPSB7fTtcbiAgICB2YXIgdGl0bGVNb3VzZUV2ZW50cyA9IHt9O1xuICAgIGlmICghcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIG1vdXNlRXZlbnRzID0ge1xuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25Nb3VzZUxlYXZlLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMub25Nb3VzZUVudGVyXG4gICAgICB9O1xuXG4gICAgICAvLyBvbmx5IHdvcmtzIGluIHRpdGxlLCBub3Qgb3V0ZXIgbGlcbiAgICAgIHRpdGxlQ2xpY2tFdmVudHMgPSB7XG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25UaXRsZUNsaWNrXG4gICAgICB9O1xuICAgICAgdGl0bGVNb3VzZUV2ZW50cyA9IHtcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uVGl0bGVNb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMub25UaXRsZU1vdXNlTGVhdmVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0ge307XG4gICAgaWYgKGlzSW5saW5lTW9kZSkge1xuICAgICAgc3R5bGUucGFkZGluZ0xlZnQgPSBwcm9wcy5pbmxpbmVJbmRlbnQgKiBwcm9wcy5sZXZlbDtcbiAgICB9XG4gICAgdmFyIHRpdGxlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IHRoaXMuc2F2ZVN1Yk1lbnVUaXRsZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctdGl0bGUnXG4gICAgICB9LCB0aXRsZU1vdXNlRXZlbnRzLCB0aXRsZUNsaWNrRXZlbnRzLCB7XG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogaXNPcGVuLFxuICAgICAgICAnYXJpYS1vd25zJzogdGhpcy5fbWVudUlkLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6ICd0cnVlJyxcbiAgICAgICAgdGl0bGU6IHR5cGVvZiBwcm9wcy50aXRsZSA9PT0gJ3N0cmluZycgPyBwcm9wcy50aXRsZSA6IHVuZGVmaW5lZFxuICAgICAgfSksXG4gICAgICBwcm9wcy50aXRsZSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1hcnJvdycgfSlcbiAgICApO1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucmVuZGVyQ2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgdmFyIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMucGFyZW50TWVudS5pc1Jvb3RNZW51ID8gcHJvcHMucGFyZW50TWVudS5wcm9wcy5nZXRQb3B1cENvbnRhaW5lciA6IGZ1bmN0aW9uICh0cmlnZ2VyTm9kZSkge1xuICAgICAgcmV0dXJuIHRyaWdnZXJOb2RlLnBhcmVudE5vZGU7XG4gICAgfTtcbiAgICB2YXIgcG9wdXBQbGFjZW1lbnQgPSBwb3B1cFBsYWNlbWVudE1hcFtwcm9wcy5tb2RlXTtcbiAgICB2YXIgcG9wdXBDbGFzc05hbWUgPSBwcm9wcy5tb2RlID09PSAnaW5saW5lJyA/ICcnIDogcHJvcHMucG9wdXBDbGFzc05hbWU7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdsaScsXG4gICAgICBfZXh0ZW5kcyh7fSwgbW91c2VFdmVudHMsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBwcm9wcy5zdHlsZSB9KSxcbiAgICAgIGlzSW5saW5lTW9kZSAmJiB0aXRsZSxcbiAgICAgIGlzSW5saW5lTW9kZSAmJiBjaGlsZHJlbixcbiAgICAgICFpc0lubGluZU1vZGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgVHJpZ2dlcixcbiAgICAgICAge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXBvcHVwICcgKyBwb3B1cENsYXNzTmFtZSxcbiAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgYnVpbHRpblBsYWNlbWVudHM6IHBsYWNlbWVudHMsXG4gICAgICAgICAgcG9wdXBQbGFjZW1lbnQ6IHBvcHVwUGxhY2VtZW50LFxuICAgICAgICAgIHBvcHVwVmlzaWJsZTogaXNPcGVuLFxuICAgICAgICAgIHBvcHVwOiBjaGlsZHJlbixcbiAgICAgICAgICBhY3Rpb246IHByb3BzLmRpc2FibGVkID8gW10gOiBbcHJvcHMudHJpZ2dlclN1Yk1lbnVBY3Rpb25dLFxuICAgICAgICAgIG1vdXNlRW50ZXJEZWxheTogcHJvcHMuc3ViTWVudU9wZW5EZWxheSxcbiAgICAgICAgICBtb3VzZUxlYXZlRGVsYXk6IHByb3BzLnN1Yk1lbnVDbG9zZURlbGF5LFxuICAgICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiB0aGlzLm9uUG9wdXBWaXNpYmxlQ2hhbmdlLFxuICAgICAgICAgIGZvcmNlUmVuZGVyOiBwcm9wcy5mb3JjZVN1Yk1lbnVSZW5kZXJcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGVcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuU3ViTWVudS5pc1N1Yk1lbnUgPSAxO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KGZ1bmN0aW9uIChfcmVmLCBfcmVmMikge1xuICB2YXIgb3BlbktleXMgPSBfcmVmLm9wZW5LZXlzLFxuICAgICAgYWN0aXZlS2V5ID0gX3JlZi5hY3RpdmVLZXk7XG4gIHZhciBldmVudEtleSA9IF9yZWYyLmV2ZW50S2V5LFxuICAgICAgc3ViTWVudUtleSA9IF9yZWYyLnN1Yk1lbnVLZXk7XG4gIHJldHVybiB7XG4gICAgaXNPcGVuOiBvcGVuS2V5cy5pbmRleE9mKGV2ZW50S2V5KSA+IC0xLFxuICAgIGFjdGl2ZTogYWN0aXZlS2V5W3N1Yk1lbnVLZXldID09PSBldmVudEtleVxuICB9O1xufSkoU3ViTWVudSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLW1lbnVANi4yLjEwQHJjLW1lbnUvZXMvU3ViTWVudS5qc1xuLy8gbW9kdWxlIGlkID0gNzcyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJztcbmltcG9ydCBBbmltYXRlIGZyb20gJ3JjLWFuaW1hdGUnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ21pbmktc3RvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBNZW51TWl4aW4sIGdldEFjdGl2ZUtleSB9IGZyb20gJy4vTWVudU1peGluJztcblxudmFyIFN1YlBvcHVwTWVudSA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1N1YlBvcHVwTWVudScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uT3BlbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXN0cm95OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvcGVuVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3BlbkFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIG9wZW5LZXlzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxuICB9LFxuXG4gIG1peGluczogW01lbnVNaXhpbl0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIF9leHRlbmRzMjtcblxuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgcHJvcHMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlS2V5OiBfZXh0ZW5kcyh7fSwgcHJvcHMuc3RvcmUuZ2V0U3RhdGUoKS5hY3RpdmVLZXksIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3Byb3BzLmV2ZW50S2V5XSA9IGdldEFjdGl2ZUtleShwcm9wcywgcHJvcHMuYWN0aXZlS2V5KSwgX2V4dGVuZHMyKSlcbiAgICB9KTtcblxuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGludm9rZSBjdXN0b21pemVkIHJlZiB0byBleHBvc2UgY29tcG9uZW50IHRvIG1peGluXG4gICAgaWYgKHRoaXMucHJvcHMubWFudWFsUmVmKSB7XG4gICAgICB0aGlzLnByb3BzLm1hbnVhbFJlZih0aGlzKTtcbiAgICB9XG4gIH0sXG4gIG9uRGVzZWxlY3Q6IGZ1bmN0aW9uIG9uRGVzZWxlY3Qoc2VsZWN0SW5mbykge1xuICAgIHRoaXMucHJvcHMub25EZXNlbGVjdChzZWxlY3RJbmZvKTtcbiAgfSxcbiAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KHNlbGVjdEluZm8pIHtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHNlbGVjdEluZm8pO1xuICB9LFxuICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gIH0sXG4gIG9uT3BlbkNoYW5nZTogZnVuY3Rpb24gb25PcGVuQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uT3BlbkNoYW5nZShlKTtcbiAgfSxcbiAgb25EZXN0cm95OiBmdW5jdGlvbiBvbkRlc3Ryb3koa2V5KSB7XG4gICAgdGhpcy5wcm9wcy5vbkRlc3Ryb3koa2V5KTtcbiAgfSxcbiAgZ2V0T3BlblRyYW5zaXRpb25OYW1lOiBmdW5jdGlvbiBnZXRPcGVuVHJhbnNpdGlvbk5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMub3BlblRyYW5zaXRpb25OYW1lO1xuICB9LFxuICByZW5kZXJNZW51SXRlbTogZnVuY3Rpb24gcmVuZGVyTWVudUl0ZW0oYywgaSwgc3ViSW5kZXgsIHN1Yk1lbnVLZXkpIHtcbiAgICBpZiAoIWMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBleHRyYVByb3BzID0ge1xuICAgICAgb3BlbktleXM6IHByb3BzLm9wZW5LZXlzLFxuICAgICAgc2VsZWN0ZWRLZXlzOiBwcm9wcy5zZWxlY3RlZEtleXMsXG4gICAgICB0cmlnZ2VyU3ViTWVudUFjdGlvbjogcHJvcHMudHJpZ2dlclN1Yk1lbnVBY3Rpb24sXG4gICAgICBzdWJNZW51S2V5OiBzdWJNZW51S2V5XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21tb25NZW51SXRlbShjLCBpLCBzdWJJbmRleCwgZXh0cmFQcm9wcyk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcblxuICAgIHZhciBoYXZlUmVuZGVyZWQgPSB0aGlzLmhhdmVSZW5kZXJlZDtcbiAgICB0aGlzLmhhdmVSZW5kZXJlZCA9IHRydWU7XG5cbiAgICB0aGlzLmhhdmVPcGVuZWQgPSB0aGlzLmhhdmVPcGVuZWQgfHwgcHJvcHMudmlzaWJsZSB8fCBwcm9wcy5mb3JjZVN1Yk1lbnVSZW5kZXI7XG4gICAgaWYgKCF0aGlzLmhhdmVPcGVuZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2l0aW9uQXBwZWFyID0gISghaGF2ZVJlbmRlcmVkICYmIHByb3BzLnZpc2libGUgJiYgcHJvcHMubW9kZSA9PT0gJ2lubGluZScpO1xuXG4gICAgcHJvcHMuY2xhc3NOYW1lICs9ICcgJyArIHByb3BzLnByZWZpeENscyArICctc3ViJztcbiAgICB2YXIgYW5pbVByb3BzID0ge307XG4gICAgaWYgKHByb3BzLm9wZW5UcmFuc2l0aW9uTmFtZSkge1xuICAgICAgYW5pbVByb3BzLnRyYW5zaXRpb25OYW1lID0gcHJvcHMub3BlblRyYW5zaXRpb25OYW1lO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BzLm9wZW5BbmltYXRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICBhbmltUHJvcHMuYW5pbWF0aW9uID0gX2V4dGVuZHMoe30sIHByb3BzLm9wZW5BbmltYXRpb24pO1xuICAgICAgaWYgKCF0cmFuc2l0aW9uQXBwZWFyKSB7XG4gICAgICAgIGRlbGV0ZSBhbmltUHJvcHMuYW5pbWF0aW9uLmFwcGVhcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIEFuaW1hdGUsXG4gICAgICBfZXh0ZW5kcyh7fSwgYW5pbVByb3BzLCB7XG4gICAgICAgIHNob3dQcm9wOiAndmlzaWJsZScsXG4gICAgICAgIGNvbXBvbmVudDogJycsXG4gICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHRyYW5zaXRpb25BcHBlYXJcbiAgICAgIH0pLFxuICAgICAgdGhpcy5yZW5kZXJSb290KHByb3BzKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoU3ViUG9wdXBNZW51KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fcmMtbWVudUA2LjIuMTBAcmMtbWVudS9lcy9TdWJQb3B1cE1lbnUuanNcbi8vIG1vZHVsZSBpZCA9IDc4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJztcbmltcG9ydCBLZXlDb2RlIGZyb20gJ3JjLXV0aWwvZXMvS2V5Q29kZSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzY3JvbGxJbnRvVmlldyBmcm9tICdkb20tc2Nyb2xsLWludG8tdmlldyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi91dGlsJztcblxuLyogZXNsaW50IHJlYWN0L25vLWlzLW1vdW50ZWQ6MCAqL1xuXG52YXIgTWVudUl0ZW0gPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNZW51SXRlbScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcm9vdFByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBldmVudEtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgIHNlbGVjdGVkS2V5czogUHJvcFR5cGVzLmFycmF5LFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkl0ZW1Ib3ZlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBhcmVudE1lbnU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25EZXN0cm95OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25TZWxlY3Q6IG5vb3AsXG4gICAgICBvbk1vdXNlRW50ZXI6IG5vb3AsXG4gICAgICBvbk1vdXNlTGVhdmU6IG5vb3BcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBpZiAocHJvcHMub25EZXN0cm95KSB7XG4gICAgICBwcm9wcy5vbkRlc3Ryb3kocHJvcHMuZXZlbnRLZXkpO1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGludm9rZSBjdXN0b21pemVkIHJlZiB0byBleHBvc2UgY29tcG9uZW50IHRvIG1peGluXG4gICAgdGhpcy5jYWxsUmVmKCk7XG4gIH0sXG4gIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgc2Nyb2xsSW50b1ZpZXcoUmVhY3RET00uZmluZERPTU5vZGUodGhpcyksIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucHJvcHMucGFyZW50TWVudSksIHtcbiAgICAgICAgb25seVNjcm9sbElmTmVlZGVkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbGxSZWYoKTtcbiAgfSxcbiAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLkVOVEVSKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKGUpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZXZlbnRLZXkgPSBfcHJvcHMuZXZlbnRLZXksXG4gICAgICAgIG9uSXRlbUhvdmVyID0gX3Byb3BzLm9uSXRlbUhvdmVyLFxuICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcHJvcHMub25Nb3VzZUxlYXZlO1xuXG4gICAgb25JdGVtSG92ZXIoe1xuICAgICAga2V5OiBldmVudEtleSxcbiAgICAgIGhvdmVyOiBmYWxzZVxuICAgIH0pO1xuICAgIG9uTW91c2VMZWF2ZSh7XG4gICAgICBrZXk6IGV2ZW50S2V5LFxuICAgICAgZG9tRXZlbnQ6IGVcbiAgICB9KTtcbiAgfSxcbiAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoZSkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZXZlbnRLZXkgPSBfcHJvcHMyLmV2ZW50S2V5LFxuICAgICAgICBvbkl0ZW1Ib3ZlciA9IF9wcm9wczIub25JdGVtSG92ZXIsXG4gICAgICAgIG9uTW91c2VFbnRlciA9IF9wcm9wczIub25Nb3VzZUVudGVyO1xuXG4gICAgb25JdGVtSG92ZXIoe1xuICAgICAga2V5OiBldmVudEtleSxcbiAgICAgIGhvdmVyOiB0cnVlXG4gICAgfSk7XG4gICAgb25Nb3VzZUVudGVyKHtcbiAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICBkb21FdmVudDogZVxuICAgIH0pO1xuICB9LFxuICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGV2ZW50S2V5ID0gX3Byb3BzMy5ldmVudEtleSxcbiAgICAgICAgbXVsdGlwbGUgPSBfcHJvcHMzLm11bHRpcGxlLFxuICAgICAgICBvbkNsaWNrID0gX3Byb3BzMy5vbkNsaWNrLFxuICAgICAgICBvblNlbGVjdCA9IF9wcm9wczMub25TZWxlY3QsXG4gICAgICAgIG9uRGVzZWxlY3QgPSBfcHJvcHMzLm9uRGVzZWxlY3QsXG4gICAgICAgIGlzU2VsZWN0ZWQgPSBfcHJvcHMzLmlzU2VsZWN0ZWQ7XG5cbiAgICB2YXIgaW5mbyA9IHtcbiAgICAgIGtleTogZXZlbnRLZXksXG4gICAgICBrZXlQYXRoOiBbZXZlbnRLZXldLFxuICAgICAgaXRlbTogdGhpcyxcbiAgICAgIGRvbUV2ZW50OiBlXG4gICAgfTtcbiAgICBvbkNsaWNrKGluZm8pO1xuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgICAgb25EZXNlbGVjdChpbmZvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uU2VsZWN0KGluZm8pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU2VsZWN0ZWQpIHtcbiAgICAgIG9uU2VsZWN0KGluZm8pO1xuICAgIH1cbiAgfSxcbiAgZ2V0UHJlZml4Q2xzOiBmdW5jdGlvbiBnZXRQcmVmaXhDbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucm9vdFByZWZpeENscyArICctaXRlbSc7XG4gIH0sXG4gIGdldEFjdGl2ZUNsYXNzTmFtZTogZnVuY3Rpb24gZ2V0QWN0aXZlQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFByZWZpeENscygpICsgJy1hY3RpdmUnO1xuICB9LFxuICBnZXRTZWxlY3RlZENsYXNzTmFtZTogZnVuY3Rpb24gZ2V0U2VsZWN0ZWRDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJlZml4Q2xzKCkgKyAnLXNlbGVjdGVkJztcbiAgfSxcbiAgZ2V0RGlzYWJsZWRDbGFzc05hbWU6IGZ1bmN0aW9uIGdldERpc2FibGVkQ2xhc3NOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmdldFByZWZpeENscygpICsgJy1kaXNhYmxlZCc7XG4gIH0sXG4gIGNhbGxSZWY6IGZ1bmN0aW9uIGNhbGxSZWYoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWFudWFsUmVmKSB7XG4gICAgICB0aGlzLnByb3BzLm1hbnVhbFJlZih0aGlzKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXModGhpcy5nZXRQcmVmaXhDbHMoKSwgcHJvcHMuY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2NsYXNzTmFtZXNbdGhpcy5nZXRBY3RpdmVDbGFzc05hbWUoKV0gPSAhcHJvcHMuZGlzYWJsZWQgJiYgcHJvcHMuYWN0aXZlLCBfY2xhc3NOYW1lc1t0aGlzLmdldFNlbGVjdGVkQ2xhc3NOYW1lKCldID0gcHJvcHMuaXNTZWxlY3RlZCwgX2NsYXNzTmFtZXNbdGhpcy5nZXREaXNhYmxlZENsYXNzTmFtZSgpXSA9IHByb3BzLmRpc2FibGVkLCBfY2xhc3NOYW1lcykpO1xuICAgIHZhciBhdHRycyA9IF9leHRlbmRzKHt9LCBwcm9wcy5hdHRyaWJ1dGUsIHtcbiAgICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgcm9sZTogJ21lbnVpdGVtJyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogcHJvcHMuaXNTZWxlY3RlZCxcbiAgICAgICdhcmlhLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZWRcbiAgICB9KTtcbiAgICB2YXIgbW91c2VFdmVudCA9IHt9O1xuICAgIGlmICghcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIG1vdXNlRXZlbnQgPSB7XG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLm9uTW91c2VFbnRlclxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIHN0eWxlID0gX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlKTtcbiAgICBpZiAocHJvcHMubW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHN0eWxlLnBhZGRpbmdMZWZ0ID0gcHJvcHMuaW5saW5lSW5kZW50ICogcHJvcHMubGV2ZWw7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIF9leHRlbmRzKHt9LCBhdHRycywgbW91c2VFdmVudCwge1xuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0pLFxuICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9XG59KTtcblxuTWVudUl0ZW0uaXNNZW51SXRlbSA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoZnVuY3Rpb24gKF9yZWYsIF9yZWYyKSB7XG4gIHZhciBhY3RpdmVLZXkgPSBfcmVmLmFjdGl2ZUtleSxcbiAgICAgIHNlbGVjdGVkS2V5cyA9IF9yZWYuc2VsZWN0ZWRLZXlzO1xuICB2YXIgZXZlbnRLZXkgPSBfcmVmMi5ldmVudEtleSxcbiAgICAgIHN1Yk1lbnVLZXkgPSBfcmVmMi5zdWJNZW51S2V5O1xuICByZXR1cm4ge1xuICAgIGFjdGl2ZTogYWN0aXZlS2V5W3N1Yk1lbnVLZXldID09PSBldmVudEtleSxcbiAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZEtleXMuaW5kZXhPZihldmVudEtleSkgIT09IC0xXG4gIH07XG59KShNZW51SXRlbSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLW1lbnVANi4yLjEwQHJjLW1lbnUvZXMvTWVudUl0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDc4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJztcblxudmFyIE1lbnVJdGVtR3JvdXAgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNZW51SXRlbUdyb3VwJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICByZW5kZXJNZW51SXRlbTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJvb3RQcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAvLyBUbyBmaXgga2V5Ym9hcmQgVVguXG4gICAgcmV0dXJuIHsgZGlzYWJsZWQ6IHRydWUgfTtcbiAgfSxcbiAgcmVuZGVySW5uZXJNZW51SXRlbTogZnVuY3Rpb24gcmVuZGVySW5uZXJNZW51SXRlbShpdGVtLCBzdWJJbmRleCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICByZW5kZXJNZW51SXRlbSA9IF9wcm9wcy5yZW5kZXJNZW51SXRlbSxcbiAgICAgICAgaW5kZXggPSBfcHJvcHMuaW5kZXg7XG5cbiAgICByZXR1cm4gcmVuZGVyTWVudUl0ZW0oaXRlbSwgaW5kZXgsIHN1YkluZGV4LCB0aGlzLnByb3BzLnN1Yk1lbnVLZXkpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBfcHJvcHMkY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9wcm9wcyRjbGFzc05hbWUsXG4gICAgICAgIHJvb3RQcmVmaXhDbHMgPSBwcm9wcy5yb290UHJlZml4Q2xzO1xuXG4gICAgdmFyIHRpdGxlQ2xhc3NOYW1lID0gcm9vdFByZWZpeENscyArICctaXRlbS1ncm91cC10aXRsZSc7XG4gICAgdmFyIGxpc3RDbGFzc05hbWUgPSByb290UHJlZml4Q2xzICsgJy1pdGVtLWdyb3VwLWxpc3QnO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnICcgKyByb290UHJlZml4Q2xzICsgJy1pdGVtLWdyb3VwJyB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRpdGxlQ2xhc3NOYW1lLFxuICAgICAgICAgIHRpdGxlOiB0eXBlb2YgcHJvcHMudGl0bGUgPT09ICdzdHJpbmcnID8gcHJvcHMudGl0bGUgOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHMudGl0bGVcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAndWwnLFxuICAgICAgICB7IGNsYXNzTmFtZTogbGlzdENsYXNzTmFtZSB9LFxuICAgICAgICBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIHRoaXMucmVuZGVySW5uZXJNZW51SXRlbSlcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxuTWVudUl0ZW1Hcm91cC5pc01lbnVJdGVtR3JvdXAgPSB0cnVlO1xuXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbUdyb3VwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19yYy1tZW51QDYuMi4xMEByYy1tZW51L2VzL01lbnVJdGVtR3JvdXAuanNcbi8vIG1vZHVsZSBpZCA9IDc5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJztcblxudmFyIERpdmlkZXIgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdEaXZpZGVyJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm9vdFByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIC8vIFRvIGZpeCBrZXlib2FyZCBVWC5cbiAgICByZXR1cm4geyBkaXNhYmxlZDogdHJ1ZSB9O1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgX3Byb3BzJGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcyRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX3Byb3BzJGNsYXNzTmFtZSxcbiAgICAgICAgcm9vdFByZWZpeENscyA9IF9wcm9wcy5yb290UHJlZml4Q2xzO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2xpJywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSArICcgJyArIHJvb3RQcmVmaXhDbHMgKyAnLWl0ZW0tZGl2aWRlcicgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEaXZpZGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19yYy1tZW51QDYuMi4xMEByYy1tZW51L2VzL0RpdmlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDc5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRGF0ZVRhYmxlIGZyb20gJy4vZGF0ZS9EYXRlVGFibGUnO1xuaW1wb3J0IE1vbnRoVGFibGUgZnJvbSAnLi9tb250aC9Nb250aFRhYmxlJztcbmltcG9ydCBDYWxlbmRhck1peGluIGZyb20gJy4vbWl4aW4vQ2FsZW5kYXJNaXhpbic7XG5pbXBvcnQgQ29tbW9uTWl4aW4gZnJvbSAnLi9taXhpbi9Db21tb25NaXhpbic7XG5pbXBvcnQgQ2FsZW5kYXJIZWFkZXIgZnJvbSAnLi9mdWxsLWNhbGVuZGFyL0NhbGVuZGFySGVhZGVyJztcblxudmFyIEZ1bGxDYWxlbmRhciA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0Z1bGxDYWxlbmRhcicsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZGVmYXVsdFR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uVHlwZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZnVsbHNjcmVlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbW9udGhDZWxsUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkYXRlQ2VsbFJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd1R5cGVTd2l0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIFNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBoZWFkZXJDb21wb25lbnRzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgaGVhZGVyQ29tcG9uZW50OiBQcm9wVHlwZXMub2JqZWN0LCAvLyBUaGUgd2hvbGUgaGVhZGVyIGNvbXBvbmVudFxuICAgIGhlYWRlclJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd0hlYWRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZWREYXRlOiBQcm9wVHlwZXMuZnVuY1xuICB9LFxuICBtaXhpbnM6IFtDb21tb25NaXhpbiwgQ2FsZW5kYXJNaXhpbl0sXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0VHlwZTogJ2RhdGUnLFxuICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICBzaG93VHlwZVN3aXRjaDogdHJ1ZSxcbiAgICAgIHNob3dIZWFkZXI6IHRydWUsXG4gICAgICBvblR5cGVDaGFuZ2U6IGZ1bmN0aW9uIG9uVHlwZUNoYW5nZSgpIHt9XG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIHR5cGUgPSB2b2lkIDA7XG4gICAgaWYgKCd0eXBlJyBpbiB0aGlzLnByb3BzKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcm9wcy50eXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gdGhpcy5wcm9wcy5kZWZhdWx0VHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICgndHlwZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdHlwZTogbmV4dFByb3BzLnR5cGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgb25Nb250aFNlbGVjdDogZnVuY3Rpb24gb25Nb250aFNlbGVjdCh2YWx1ZSkge1xuICAgIHRoaXMub25TZWxlY3QodmFsdWUsIHtcbiAgICAgIHRhcmdldDogJ21vbnRoJ1xuICAgIH0pO1xuICB9LFxuICBzZXRUeXBlOiBmdW5jdGlvbiBzZXRUeXBlKHR5cGUpIHtcbiAgICBpZiAoISgndHlwZScgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0eXBlOiB0eXBlXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5vblR5cGVDaGFuZ2UodHlwZSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBmdWxsc2NyZWVuID0gcHJvcHMuZnVsbHNjcmVlbixcbiAgICAgICAgc2hvd0hlYWRlciA9IHByb3BzLnNob3dIZWFkZXIsXG4gICAgICAgIGhlYWRlckNvbXBvbmVudCA9IHByb3BzLmhlYWRlckNvbXBvbmVudCxcbiAgICAgICAgaGVhZGVyUmVuZGVyID0gcHJvcHMuaGVhZGVyUmVuZGVyLFxuICAgICAgICBkaXNhYmxlZERhdGUgPSBwcm9wcy5kaXNhYmxlZERhdGU7XG4gICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIHZhbHVlID0gX3N0YXRlLnZhbHVlLFxuICAgICAgICB0eXBlID0gX3N0YXRlLnR5cGU7XG5cblxuICAgIHZhciBoZWFkZXIgPSBudWxsO1xuICAgIGlmIChzaG93SGVhZGVyKSB7XG4gICAgICBpZiAoaGVhZGVyUmVuZGVyKSB7XG4gICAgICAgIGhlYWRlciA9IGhlYWRlclJlbmRlcih2YWx1ZSwgdHlwZSwgbG9jYWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBUaGVIZWFkZXIgPSBoZWFkZXJDb21wb25lbnQgfHwgQ2FsZW5kYXJIZWFkZXI7XG4gICAgICAgIGhlYWRlciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGhlSGVhZGVyLCBfZXh0ZW5kcyh7XG4gICAgICAgICAga2V5OiAnY2FsZW5kYXItaGVhZGVyJ1xuICAgICAgICB9LCBwcm9wcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzICsgJy1mdWxsJyxcbiAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBvblR5cGVDaGFuZ2U6IHRoaXMuc2V0VHlwZSxcbiAgICAgICAgICBvblZhbHVlQ2hhbmdlOiB0aGlzLnNldFZhbHVlXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdGFibGUgPSB0eXBlID09PSAnZGF0ZScgPyBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGVUYWJsZSwge1xuICAgICAgZGF0ZVJlbmRlcjogcHJvcHMuZGF0ZUNlbGxSZW5kZXIsXG4gICAgICBjb250ZW50UmVuZGVyOiBwcm9wcy5kYXRlQ2VsbENvbnRlbnRSZW5kZXIsXG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgb25TZWxlY3Q6IHRoaXMub25TZWxlY3QsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBkaXNhYmxlZERhdGU6IGRpc2FibGVkRGF0ZVxuICAgIH0pIDogUmVhY3QuY3JlYXRlRWxlbWVudChNb250aFRhYmxlLCB7XG4gICAgICBjZWxsUmVuZGVyOiBwcm9wcy5tb250aENlbGxSZW5kZXIsXG4gICAgICBjb250ZW50UmVuZGVyOiBwcm9wcy5tb250aENlbGxDb250ZW50UmVuZGVyLFxuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBvblNlbGVjdDogdGhpcy5vbk1vbnRoU2VsZWN0LFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMgKyAnLW1vbnRoLXBhbmVsJyxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGRpc2FibGVkRGF0ZTogZGlzYWJsZWREYXRlXG4gICAgfSk7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBbaGVhZGVyLCBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGtleTogJ2NhbGVuZGFyLWJvZHknLCBjbGFzc05hbWU6IHByZWZpeENscyArICctY2FsZW5kYXItYm9keScgfSxcbiAgICAgIHRhYmxlXG4gICAgKV07XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gW3ByZWZpeENscyArICctZnVsbCddO1xuXG4gICAgaWYgKGZ1bGxzY3JlZW4pIHtcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHByZWZpeENscyArICctZnVsbHNjcmVlbicpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlbmRlclJvb3Qoe1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUuam9pbignICcpXG4gICAgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGdWxsQ2FsZW5kYXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL0Z1bGxDYWxlbmRhci5qc1xuLy8gbW9kdWxlIGlkID0gODEzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IERhdGVDb25zdGFudHMgZnJvbSAnLi9EYXRlQ29uc3RhbnRzJztcbmltcG9ydCB7IGdldFRpdGxlU3RyaW5nLCBnZXRUb2RheVRpbWUgfSBmcm9tICcuLi91dGlsLyc7XG5cbmZ1bmN0aW9uIGlzU2FtZURheShvbmUsIHR3bykge1xuICByZXR1cm4gb25lICYmIHR3byAmJiBvbmUuaXNTYW1lKHR3bywgJ2RheScpO1xufVxuXG5mdW5jdGlvbiBiZWZvcmVDdXJyZW50TW9udGhZZWFyKGN1cnJlbnQsIHRvZGF5KSB7XG4gIGlmIChjdXJyZW50LnllYXIoKSA8IHRvZGF5LnllYXIoKSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiBjdXJyZW50LnllYXIoKSA9PT0gdG9kYXkueWVhcigpICYmIGN1cnJlbnQubW9udGgoKSA8IHRvZGF5Lm1vbnRoKCk7XG59XG5cbmZ1bmN0aW9uIGFmdGVyQ3VycmVudE1vbnRoWWVhcihjdXJyZW50LCB0b2RheSkge1xuICBpZiAoY3VycmVudC55ZWFyKCkgPiB0b2RheS55ZWFyKCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gY3VycmVudC55ZWFyKCkgPT09IHRvZGF5LnllYXIoKSAmJiBjdXJyZW50Lm1vbnRoKCkgPiB0b2RheS5tb250aCgpO1xufVxuXG5mdW5jdGlvbiBnZXRJZEZyb21EYXRlKGRhdGUpIHtcbiAgcmV0dXJuICdyYy1jYWxlbmRhci0nICsgZGF0ZS55ZWFyKCkgKyAnLScgKyBkYXRlLm1vbnRoKCkgKyAnLScgKyBkYXRlLmRhdGUoKTtcbn1cblxudmFyIERhdGVUQm9keSA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0RhdGVUQm9keScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29udGVudFJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGF0ZVJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWREYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCldKSxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBob3ZlclZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIHNob3dXZWVrTnVtYmVyOiBQcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBob3ZlclZhbHVlOiBbXVxuICAgIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNvbnRlbnRSZW5kZXIgPSBwcm9wcy5jb250ZW50UmVuZGVyLFxuICAgICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSBwcm9wcy5zZWxlY3RlZFZhbHVlLFxuICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICBzaG93V2Vla051bWJlciA9IHByb3BzLnNob3dXZWVrTnVtYmVyLFxuICAgICAgICBkYXRlUmVuZGVyID0gcHJvcHMuZGF0ZVJlbmRlcixcbiAgICAgICAgZGlzYWJsZWREYXRlID0gcHJvcHMuZGlzYWJsZWREYXRlLFxuICAgICAgICBob3ZlclZhbHVlID0gcHJvcHMuaG92ZXJWYWx1ZTtcblxuICAgIHZhciBpSW5kZXggPSB2b2lkIDA7XG4gICAgdmFyIGpJbmRleCA9IHZvaWQgMDtcbiAgICB2YXIgY3VycmVudCA9IHZvaWQgMDtcbiAgICB2YXIgZGF0ZVRhYmxlID0gW107XG4gICAgdmFyIHRvZGF5ID0gZ2V0VG9kYXlUaW1lKHZhbHVlKTtcbiAgICB2YXIgY2VsbENsYXNzID0gcHJlZml4Q2xzICsgJy1jZWxsJztcbiAgICB2YXIgd2Vla051bWJlckNlbGxDbGFzcyA9IHByZWZpeENscyArICctd2Vlay1udW1iZXItY2VsbCc7XG4gICAgdmFyIGRhdGVDbGFzcyA9IHByZWZpeENscyArICctZGF0ZSc7XG4gICAgdmFyIHRvZGF5Q2xhc3MgPSBwcmVmaXhDbHMgKyAnLXRvZGF5JztcbiAgICB2YXIgc2VsZWN0ZWRDbGFzcyA9IHByZWZpeENscyArICctc2VsZWN0ZWQtZGF5JztcbiAgICB2YXIgc2VsZWN0ZWREYXRlQ2xhc3MgPSBwcmVmaXhDbHMgKyAnLXNlbGVjdGVkLWRhdGUnOyAvLyBkbyBub3QgbW92ZSB3aXRoIG1vdXNlIG9wZXJhdGlvblxuICAgIHZhciBzZWxlY3RlZFN0YXJ0RGF0ZUNsYXNzID0gcHJlZml4Q2xzICsgJy1zZWxlY3RlZC1zdGFydC1kYXRlJztcbiAgICB2YXIgc2VsZWN0ZWRFbmREYXRlQ2xhc3MgPSBwcmVmaXhDbHMgKyAnLXNlbGVjdGVkLWVuZC1kYXRlJztcbiAgICB2YXIgaW5SYW5nZUNsYXNzID0gcHJlZml4Q2xzICsgJy1pbi1yYW5nZS1jZWxsJztcbiAgICB2YXIgbGFzdE1vbnRoRGF5Q2xhc3MgPSBwcmVmaXhDbHMgKyAnLWxhc3QtbW9udGgtY2VsbCc7XG4gICAgdmFyIG5leHRNb250aERheUNsYXNzID0gcHJlZml4Q2xzICsgJy1uZXh0LW1vbnRoLWJ0bi1kYXknO1xuICAgIHZhciBkaXNhYmxlZENsYXNzID0gcHJlZml4Q2xzICsgJy1kaXNhYmxlZC1jZWxsJztcbiAgICB2YXIgZmlyc3REaXNhYmxlQ2xhc3MgPSBwcmVmaXhDbHMgKyAnLWRpc2FibGVkLWNlbGwtZmlyc3Qtb2Ytcm93JztcbiAgICB2YXIgbGFzdERpc2FibGVDbGFzcyA9IHByZWZpeENscyArICctZGlzYWJsZWQtY2VsbC1sYXN0LW9mLXJvdyc7XG4gICAgdmFyIG1vbnRoMSA9IHZhbHVlLmNsb25lKCk7XG4gICAgbW9udGgxLmRhdGUoMSk7XG4gICAgdmFyIGRheSA9IG1vbnRoMS5kYXkoKTtcbiAgICB2YXIgbGFzdE1vbnRoRGlmZkRheSA9IChkYXkgKyA3IC0gdmFsdWUubG9jYWxlRGF0YSgpLmZpcnN0RGF5T2ZXZWVrKCkpICUgNztcbiAgICAvLyBjYWxjdWxhdGUgbGFzdCBtb250aFxuICAgIHZhciBsYXN0TW9udGgxID0gbW9udGgxLmNsb25lKCk7XG4gICAgbGFzdE1vbnRoMS5hZGQoMCAtIGxhc3RNb250aERpZmZEYXksICdkYXlzJyk7XG4gICAgdmFyIHBhc3NlZCA9IDA7XG4gICAgZm9yIChpSW5kZXggPSAwOyBpSW5kZXggPCBEYXRlQ29uc3RhbnRzLkRBVEVfUk9XX0NPVU5UOyBpSW5kZXgrKykge1xuICAgICAgZm9yIChqSW5kZXggPSAwOyBqSW5kZXggPCBEYXRlQ29uc3RhbnRzLkRBVEVfQ09MX0NPVU5UOyBqSW5kZXgrKykge1xuICAgICAgICBjdXJyZW50ID0gbGFzdE1vbnRoMTtcbiAgICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LmNsb25lKCk7XG4gICAgICAgICAgY3VycmVudC5hZGQocGFzc2VkLCAnZGF5cycpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGVUYWJsZS5wdXNoKGN1cnJlbnQpO1xuICAgICAgICBwYXNzZWQrKztcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHRhYmxlSHRtbCA9IFtdO1xuICAgIHBhc3NlZCA9IDA7XG5cbiAgICBmb3IgKGlJbmRleCA9IDA7IGlJbmRleCA8IERhdGVDb25zdGFudHMuREFURV9ST1dfQ09VTlQ7IGlJbmRleCsrKSB7XG4gICAgICB2YXIgX2N4O1xuXG4gICAgICB2YXIgaXNDdXJyZW50V2VlayA9IHZvaWQgMDtcbiAgICAgIHZhciB3ZWVrTnVtYmVyQ2VsbCA9IHZvaWQgMDtcbiAgICAgIHZhciBpc0FjdGl2ZVdlZWsgPSBmYWxzZTtcbiAgICAgIHZhciBkYXRlQ2VsbHMgPSBbXTtcbiAgICAgIGlmIChzaG93V2Vla051bWJlcikge1xuICAgICAgICB3ZWVrTnVtYmVyQ2VsbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3RkJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGRhdGVUYWJsZVtwYXNzZWRdLndlZWsoKSxcbiAgICAgICAgICAgIHJvbGU6ICdncmlkY2VsbCcsXG4gICAgICAgICAgICBjbGFzc05hbWU6IHdlZWtOdW1iZXJDZWxsQ2xhc3NcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGVUYWJsZVtwYXNzZWRdLndlZWsoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgZm9yIChqSW5kZXggPSAwOyBqSW5kZXggPCBEYXRlQ29uc3RhbnRzLkRBVEVfQ09MX0NPVU5UOyBqSW5kZXgrKykge1xuICAgICAgICB2YXIgbmV4dCA9IG51bGw7XG4gICAgICAgIHZhciBsYXN0ID0gbnVsbDtcbiAgICAgICAgY3VycmVudCA9IGRhdGVUYWJsZVtwYXNzZWRdO1xuICAgICAgICBpZiAoakluZGV4IDwgRGF0ZUNvbnN0YW50cy5EQVRFX0NPTF9DT1VOVCAtIDEpIHtcbiAgICAgICAgICBuZXh0ID0gZGF0ZVRhYmxlW3Bhc3NlZCArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChqSW5kZXggPiAwKSB7XG4gICAgICAgICAgbGFzdCA9IGRhdGVUYWJsZVtwYXNzZWQgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2xzID0gY2VsbENsYXNzO1xuICAgICAgICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzU2FtZURheShjdXJyZW50LCB0b2RheSkpIHtcbiAgICAgICAgICBjbHMgKz0gJyAnICsgdG9kYXlDbGFzcztcbiAgICAgICAgICBpc0N1cnJlbnRXZWVrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpc0JlZm9yZUN1cnJlbnRNb250aFllYXIgPSBiZWZvcmVDdXJyZW50TW9udGhZZWFyKGN1cnJlbnQsIHZhbHVlKTtcbiAgICAgICAgdmFyIGlzQWZ0ZXJDdXJyZW50TW9udGhZZWFyID0gYWZ0ZXJDdXJyZW50TW9udGhZZWFyKGN1cnJlbnQsIHZhbHVlKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiBBcnJheS5pc0FycmF5KHNlbGVjdGVkVmFsdWUpKSB7XG4gICAgICAgICAgdmFyIHJhbmdlVmFsdWUgPSBob3ZlclZhbHVlLmxlbmd0aCA/IGhvdmVyVmFsdWUgOiBzZWxlY3RlZFZhbHVlO1xuICAgICAgICAgIGlmICghaXNCZWZvcmVDdXJyZW50TW9udGhZZWFyICYmICFpc0FmdGVyQ3VycmVudE1vbnRoWWVhcikge1xuICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSByYW5nZVZhbHVlWzBdO1xuICAgICAgICAgICAgdmFyIGVuZFZhbHVlID0gcmFuZ2VWYWx1ZVsxXTtcbiAgICAgICAgICAgIGlmIChzdGFydFZhbHVlKSB7XG4gICAgICAgICAgICAgIGlmIChpc1NhbWVEYXkoY3VycmVudCwgc3RhcnRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaXNBY3RpdmVXZWVrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjbHMgKz0gJyAnICsgc2VsZWN0ZWRTdGFydERhdGVDbGFzcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0VmFsdWUgJiYgZW5kVmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKGlzU2FtZURheShjdXJyZW50LCBlbmRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaXNBY3RpdmVXZWVrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjbHMgKz0gJyAnICsgc2VsZWN0ZWRFbmREYXRlQ2xhc3M7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5pc0FmdGVyKHN0YXJ0VmFsdWUsICdkYXknKSAmJiBjdXJyZW50LmlzQmVmb3JlKGVuZFZhbHVlLCAnZGF5JykpIHtcbiAgICAgICAgICAgICAgICBjbHMgKz0gJyAnICsgaW5SYW5nZUNsYXNzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzU2FtZURheShjdXJyZW50LCB2YWx1ZSkpIHtcbiAgICAgICAgICAvLyBrZXlib2FyZCBjaGFuZ2UgdmFsdWUsIGhpZ2hsaWdodCB3b3Jrc1xuICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICBpc0FjdGl2ZVdlZWsgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzU2FtZURheShjdXJyZW50LCBzZWxlY3RlZFZhbHVlKSkge1xuICAgICAgICAgIGNscyArPSAnICcgKyBzZWxlY3RlZERhdGVDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0JlZm9yZUN1cnJlbnRNb250aFllYXIpIHtcbiAgICAgICAgICBjbHMgKz0gJyAnICsgbGFzdE1vbnRoRGF5Q2xhc3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQWZ0ZXJDdXJyZW50TW9udGhZZWFyKSB7XG4gICAgICAgICAgY2xzICs9ICcgJyArIG5leHRNb250aERheUNsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpc2FibGVkRGF0ZSkge1xuICAgICAgICAgIGlmIChkaXNhYmxlZERhdGUoY3VycmVudCwgdmFsdWUpKSB7XG4gICAgICAgICAgICBkaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICghbGFzdCB8fCAhZGlzYWJsZWREYXRlKGxhc3QsIHZhbHVlKSkge1xuICAgICAgICAgICAgICBjbHMgKz0gJyAnICsgZmlyc3REaXNhYmxlQ2xhc3M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbmV4dCB8fCAhZGlzYWJsZWREYXRlKG5leHQsIHZhbHVlKSkge1xuICAgICAgICAgICAgICBjbHMgKz0gJyAnICsgbGFzdERpc2FibGVDbGFzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICBjbHMgKz0gJyAnICsgc2VsZWN0ZWRDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgIGNscyArPSAnICcgKyBkaXNhYmxlZENsYXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRhdGVIdG1sID0gdm9pZCAwO1xuICAgICAgICBpZiAoZGF0ZVJlbmRlcikge1xuICAgICAgICAgIGRhdGVIdG1sID0gZGF0ZVJlbmRlcihjdXJyZW50LCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSBjb250ZW50UmVuZGVyID8gY29udGVudFJlbmRlcihjdXJyZW50LCB2YWx1ZSkgOiBjdXJyZW50LmRhdGUoKTtcbiAgICAgICAgICBkYXRlSHRtbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBnZXRJZEZyb21EYXRlKGN1cnJlbnQpLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGRhdGVDbGFzcyxcbiAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBkaXNhYmxlZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0ZUNlbGxzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndGQnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogcGFzc2VkLFxuICAgICAgICAgICAgb25DbGljazogZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBwcm9wcy5vblNlbGVjdC5iaW5kKG51bGwsIGN1cnJlbnQpLFxuICAgICAgICAgICAgb25Nb3VzZUVudGVyOiBkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHByb3BzLm9uRGF5SG92ZXIgJiYgcHJvcHMub25EYXlIb3Zlci5iaW5kKG51bGwsIGN1cnJlbnQpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJvbGU6ICdncmlkY2VsbCcsXG4gICAgICAgICAgICB0aXRsZTogZ2V0VGl0bGVTdHJpbmcoY3VycmVudCksIGNsYXNzTmFtZTogY2xzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRlSHRtbFxuICAgICAgICApKTtcblxuICAgICAgICBwYXNzZWQrKztcbiAgICAgIH1cblxuICAgICAgdGFibGVIdG1sLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3RyJyxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogaUluZGV4LFxuICAgICAgICAgIHJvbGU6ICdyb3cnLFxuICAgICAgICAgIGNsYXNzTmFtZTogY3goKF9jeCA9IHt9LCBfY3hbcHJlZml4Q2xzICsgJy1jdXJyZW50LXdlZWsnXSA9IGlzQ3VycmVudFdlZWssIF9jeFtwcmVmaXhDbHMgKyAnLWFjdGl2ZS13ZWVrJ10gPSBpc0FjdGl2ZVdlZWssIF9jeCkpXG4gICAgICAgIH0sXG4gICAgICAgIHdlZWtOdW1iZXJDZWxsLFxuICAgICAgICBkYXRlQ2VsbHNcbiAgICAgICkpO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICd0Ym9keScsXG4gICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10Ym9keScgfSxcbiAgICAgIHRhYmxlSHRtbFxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlVEJvZHk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL2RhdGUvRGF0ZVRCb2R5LmpzXG4vLyBtb2R1bGUgaWQgPSA4MTVcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCJpbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tICdjcmVhdGUtcmVhY3QtY2xhc3MnO1xuaW1wb3J0IElua1RhYkJhck1peGluIGZyb20gJy4vSW5rVGFiQmFyTWl4aW4nO1xuaW1wb3J0IFNjcm9sbGFibGVUYWJCYXJNaXhpbiBmcm9tICcuL1Njcm9sbGFibGVUYWJCYXJNaXhpbic7XG5pbXBvcnQgVGFiQmFyTWl4aW4gZnJvbSAnLi9UYWJCYXJNaXhpbic7XG5pbXBvcnQgUmVmTWl4aW4gZnJvbSAnLi9SZWZNaXhpbic7XG5cbnZhciBTY3JvbGxhYmxlSW5rVGFiQmFyID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnU2Nyb2xsYWJsZUlua1RhYkJhcicsXG4gIG1peGluczogW1JlZk1peGluLCBUYWJCYXJNaXhpbiwgSW5rVGFiQmFyTWl4aW4sIFNjcm9sbGFibGVUYWJCYXJNaXhpbl0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBpbmtCYXJOb2RlID0gdGhpcy5nZXRJbmtCYXJOb2RlKCk7XG4gICAgdmFyIHRhYnMgPSB0aGlzLmdldFRhYnMoKTtcbiAgICB2YXIgc2Nyb2xsYmFyTm9kZSA9IHRoaXMuZ2V0U2Nyb2xsQmFyTm9kZShbaW5rQmFyTm9kZSwgdGFic10pO1xuICAgIHJldHVybiB0aGlzLmdldFJvb3ROb2RlKHNjcm9sbGJhck5vZGUpO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsYWJsZUlua1RhYkJhcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fcmMtdGFic0A5LjIuNUByYy10YWJzL2VzL1Njcm9sbGFibGVJbmtUYWJCYXIuanNcbi8vIG1vZHVsZSBpZCA9IDgzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tICdjcmVhdGUtcmVhY3QtY2xhc3MnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBLZXlDb2RlIGZyb20gJ3JjLXV0aWwvZXMvS2V5Q29kZSc7XG5pbXBvcnQgRGF0ZVRhYmxlIGZyb20gJy4vZGF0ZS9EYXRlVGFibGUnO1xuaW1wb3J0IENhbGVuZGFySGVhZGVyIGZyb20gJy4vY2FsZW5kYXIvQ2FsZW5kYXJIZWFkZXInO1xuaW1wb3J0IENhbGVuZGFyRm9vdGVyIGZyb20gJy4vY2FsZW5kYXIvQ2FsZW5kYXJGb290ZXInO1xuaW1wb3J0IENhbGVuZGFyTWl4aW4gZnJvbSAnLi9taXhpbi9DYWxlbmRhck1peGluJztcbmltcG9ydCBDb21tb25NaXhpbiBmcm9tICcuL21peGluL0NvbW1vbk1peGluJztcbmltcG9ydCBEYXRlSW5wdXQgZnJvbSAnLi9kYXRlL0RhdGVJbnB1dCc7XG5pbXBvcnQgeyBnZXRUaW1lQ29uZmlnLCBnZXRUb2RheVRpbWUsIHN5bmNUaW1lIH0gZnJvbSAnLi91dGlsJztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGdvU3RhcnRNb250aCgpIHtcbiAgdmFyIG5leHQgPSB0aGlzLnN0YXRlLnZhbHVlLmNsb25lKCk7XG4gIG5leHQuc3RhcnRPZignbW9udGgnKTtcbiAgdGhpcy5zZXRWYWx1ZShuZXh0KTtcbn1cblxuZnVuY3Rpb24gZ29FbmRNb250aCgpIHtcbiAgdmFyIG5leHQgPSB0aGlzLnN0YXRlLnZhbHVlLmNsb25lKCk7XG4gIG5leHQuZW5kT2YoJ21vbnRoJyk7XG4gIHRoaXMuc2V0VmFsdWUobmV4dCk7XG59XG5cbmZ1bmN0aW9uIGdvVGltZShkaXJlY3Rpb24sIHVuaXQpIHtcbiAgdmFyIG5leHQgPSB0aGlzLnN0YXRlLnZhbHVlLmNsb25lKCk7XG4gIG5leHQuYWRkKGRpcmVjdGlvbiwgdW5pdCk7XG4gIHRoaXMuc2V0VmFsdWUobmV4dCk7XG59XG5cbmZ1bmN0aW9uIGdvTW9udGgoZGlyZWN0aW9uKSB7XG4gIHJldHVybiBnb1RpbWUuY2FsbCh0aGlzLCBkaXJlY3Rpb24sICdtb250aHMnKTtcbn1cblxuZnVuY3Rpb24gZ29ZZWFyKGRpcmVjdGlvbikge1xuICByZXR1cm4gZ29UaW1lLmNhbGwodGhpcywgZGlyZWN0aW9uLCAneWVhcnMnKTtcbn1cblxuZnVuY3Rpb24gZ29XZWVrKGRpcmVjdGlvbikge1xuICByZXR1cm4gZ29UaW1lLmNhbGwodGhpcywgZGlyZWN0aW9uLCAnd2Vla3MnKTtcbn1cblxuZnVuY3Rpb24gZ29EYXkoZGlyZWN0aW9uKSB7XG4gIHJldHVybiBnb1RpbWUuY2FsbCh0aGlzLCBkaXJlY3Rpb24sICdkYXlzJyk7XG59XG5cbnZhciBDYWxlbmRhciA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0NhbGVuZGFyJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzZWxlY3RlZFZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1vZGU6IFByb3BUeXBlcy5vbmVPZihbJ3RpbWUnLCAnZGF0ZScsICdtb250aCcsICd5ZWFyJywgJ2RlY2FkZSddKSxcbiAgICBsb2NhbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2hvd0RhdGVJbnB1dDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1dlZWtOdW1iZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dUb2RheTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd09rOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25PazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0aW1lUGlja2VyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBkYXRlSW5wdXRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLmFueSxcbiAgICBvbkNsZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25QYW5lbENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWREYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZFRpbWU6IFByb3BUeXBlcy5hbnksXG4gICAgcmVuZGVyRm9vdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZW5kZXJTaWRlYmFyOiBQcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIG1peGluczogW0NvbW1vbk1peGluLCBDYWxlbmRhck1peGluXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd1RvZGF5OiB0cnVlLFxuICAgICAgc2hvd0RhdGVJbnB1dDogdHJ1ZSxcbiAgICAgIHRpbWVQaWNrZXI6IG51bGwsXG4gICAgICBvbk9rOiBub29wLFxuICAgICAgb25QYW5lbENoYW5nZTogbm9vcFxuICAgIH07XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlOiB0aGlzLnByb3BzLm1vZGUgfHwgJ2RhdGUnXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoJ21vZGUnIGluIG5leHRQcm9wcyAmJiB0aGlzLnN0YXRlLm1vZGUgIT09IG5leHRQcm9wcy5tb2RlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW9kZTogbmV4dFByb3BzLm1vZGUgfSk7XG4gICAgfVxuICB9LFxuICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdmFyIGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIC8vIG1hY1xuICAgIHZhciBjdHJsS2V5ID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5O1xuICAgIHZhciBkaXNhYmxlZERhdGUgPSB0aGlzLnByb3BzLmRpc2FibGVkRGF0ZTtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEtleUNvZGUuRE9XTjpcbiAgICAgICAgZ29XZWVrLmNhbGwodGhpcywgMSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgY2FzZSBLZXlDb2RlLlVQOlxuICAgICAgICBnb1dlZWsuY2FsbCh0aGlzLCAtMSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgY2FzZSBLZXlDb2RlLkxFRlQ6XG4gICAgICAgIGlmIChjdHJsS2V5KSB7XG4gICAgICAgICAgZ29ZZWFyLmNhbGwodGhpcywgLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdvRGF5LmNhbGwodGhpcywgLTEpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgY2FzZSBLZXlDb2RlLlJJR0hUOlxuICAgICAgICBpZiAoY3RybEtleSkge1xuICAgICAgICAgIGdvWWVhci5jYWxsKHRoaXMsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdvRGF5LmNhbGwodGhpcywgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICBjYXNlIEtleUNvZGUuSE9NRTpcbiAgICAgICAgZ29TdGFydE1vbnRoLmNhbGwodGhpcyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgY2FzZSBLZXlDb2RlLkVORDpcbiAgICAgICAgZ29FbmRNb250aC5jYWxsKHRoaXMpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIGNhc2UgS2V5Q29kZS5QQUdFX0RPV046XG4gICAgICAgIGdvTW9udGguY2FsbCh0aGlzLCAxKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICBjYXNlIEtleUNvZGUuUEFHRV9VUDpcbiAgICAgICAgZ29Nb250aC5jYWxsKHRoaXMsIC0xKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICBjYXNlIEtleUNvZGUuRU5URVI6XG4gICAgICAgIGlmICghZGlzYWJsZWREYXRlIHx8ICFkaXNhYmxlZERhdGUodmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5vblNlbGVjdCh2YWx1ZSwge1xuICAgICAgICAgICAgc291cmNlOiAna2V5Ym9hcmQnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihldmVudCk7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfSxcbiAgb25DbGVhcjogZnVuY3Rpb24gb25DbGVhcigpIHtcbiAgICB0aGlzLm9uU2VsZWN0KG51bGwpO1xuICAgIHRoaXMucHJvcHMub25DbGVhcigpO1xuICB9LFxuICBvbk9rOiBmdW5jdGlvbiBvbk9rKCkge1xuICAgIHZhciBzZWxlY3RlZFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlO1xuXG4gICAgaWYgKHRoaXMuaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbk9rKHNlbGVjdGVkVmFsdWUpO1xuICAgIH1cbiAgfSxcbiAgb25EYXRlSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIG9uRGF0ZUlucHV0Q2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5vblNlbGVjdCh2YWx1ZSwge1xuICAgICAgc291cmNlOiAnZGF0ZUlucHV0J1xuICAgIH0pO1xuICB9LFxuICBvbkRhdGVUYWJsZVNlbGVjdDogZnVuY3Rpb24gb25EYXRlVGFibGVTZWxlY3QodmFsdWUpIHtcbiAgICB2YXIgdGltZVBpY2tlciA9IHRoaXMucHJvcHMudGltZVBpY2tlcjtcbiAgICB2YXIgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZTtcblxuICAgIGlmICghc2VsZWN0ZWRWYWx1ZSAmJiB0aW1lUGlja2VyKSB7XG4gICAgICB2YXIgdGltZVBpY2tlckRlZmF1bHRWYWx1ZSA9IHRpbWVQaWNrZXIucHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgICAgaWYgKHRpbWVQaWNrZXJEZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgc3luY1RpbWUodGltZVBpY2tlckRlZmF1bHRWYWx1ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uU2VsZWN0KHZhbHVlKTtcbiAgfSxcbiAgb25Ub2RheTogZnVuY3Rpb24gb25Ub2RheSgpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgdmFyIG5vdyA9IGdldFRvZGF5VGltZSh2YWx1ZSk7XG4gICAgdGhpcy5vblNlbGVjdChub3csIHtcbiAgICAgIHNvdXJjZTogJ3RvZGF5QnV0dG9uJ1xuICAgIH0pO1xuICB9LFxuICBvblBhbmVsQ2hhbmdlOiBmdW5jdGlvbiBvblBhbmVsQ2hhbmdlKHZhbHVlLCBtb2RlKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCEoJ21vZGUnIGluIHByb3BzKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGU6IG1vZGUgfSk7XG4gICAgfVxuICAgIHByb3BzLm9uUGFuZWxDaGFuZ2UodmFsdWUgfHwgc3RhdGUudmFsdWUsIG1vZGUpO1xuICB9LFxuICBnZXRSb290RE9NTm9kZTogZnVuY3Rpb24gZ2V0Um9vdERPTU5vZGUoKSB7XG4gICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICB9LFxuICBvcGVuVGltZVBpY2tlcjogZnVuY3Rpb24gb3BlblRpbWVQaWNrZXIoKSB7XG4gICAgdGhpcy5vblBhbmVsQ2hhbmdlKG51bGwsICd0aW1lJyk7XG4gIH0sXG4gIGNsb3NlVGltZVBpY2tlcjogZnVuY3Rpb24gY2xvc2VUaW1lUGlja2VyKCkge1xuICAgIHRoaXMub25QYW5lbENoYW5nZShudWxsLCAnZGF0ZScpO1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBkaXNhYmxlZERhdGUgPSBwcm9wcy5kaXNhYmxlZERhdGUsXG4gICAgICAgIGRhdGVJbnB1dFBsYWNlaG9sZGVyID0gcHJvcHMuZGF0ZUlucHV0UGxhY2Vob2xkZXIsXG4gICAgICAgIHRpbWVQaWNrZXIgPSBwcm9wcy50aW1lUGlja2VyLFxuICAgICAgICBkaXNhYmxlZFRpbWUgPSBwcm9wcy5kaXNhYmxlZFRpbWU7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWUsXG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSBzdGF0ZS5zZWxlY3RlZFZhbHVlLFxuICAgICAgICBtb2RlID0gc3RhdGUubW9kZTtcblxuICAgIHZhciBzaG93VGltZVBpY2tlciA9IG1vZGUgPT09ICd0aW1lJztcbiAgICB2YXIgZGlzYWJsZWRUaW1lQ29uZmlnID0gc2hvd1RpbWVQaWNrZXIgJiYgZGlzYWJsZWRUaW1lICYmIHRpbWVQaWNrZXIgPyBnZXRUaW1lQ29uZmlnKHNlbGVjdGVkVmFsdWUsIGRpc2FibGVkVGltZSkgOiBudWxsO1xuXG4gICAgdmFyIHRpbWVQaWNrZXJFbGUgPSBudWxsO1xuXG4gICAgaWYgKHRpbWVQaWNrZXIgJiYgc2hvd1RpbWVQaWNrZXIpIHtcbiAgICAgIHZhciB0aW1lUGlja2VyUHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIHNob3dIb3VyOiB0cnVlLFxuICAgICAgICBzaG93U2Vjb25kOiB0cnVlLFxuICAgICAgICBzaG93TWludXRlOiB0cnVlXG4gICAgICB9LCB0aW1lUGlja2VyLnByb3BzLCBkaXNhYmxlZFRpbWVDb25maWcsIHtcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25EYXRlSW5wdXRDaGFuZ2UsXG4gICAgICAgIHZhbHVlOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICBkaXNhYmxlZFRpbWU6IGRpc2FibGVkVGltZVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aW1lUGlja2VyLnByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRpbWVQaWNrZXJQcm9wcy5kZWZhdWx0T3BlblZhbHVlID0gdGltZVBpY2tlci5wcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRpbWVQaWNrZXJFbGUgPSBSZWFjdC5jbG9uZUVsZW1lbnQodGltZVBpY2tlciwgdGltZVBpY2tlclByb3BzKTtcbiAgICB9XG5cbiAgICB2YXIgZGF0ZUlucHV0RWxlbWVudCA9IHByb3BzLnNob3dEYXRlSW5wdXQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGVJbnB1dCwge1xuICAgICAgZm9ybWF0OiB0aGlzLmdldEZvcm1hdCgpLFxuICAgICAga2V5OiAnZGF0ZS1pbnB1dCcsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIHBsYWNlaG9sZGVyOiBkYXRlSW5wdXRQbGFjZWhvbGRlcixcbiAgICAgIHNob3dDbGVhcjogdHJ1ZSxcbiAgICAgIGRpc2FibGVkVGltZTogZGlzYWJsZWRUaW1lLFxuICAgICAgZGlzYWJsZWREYXRlOiBkaXNhYmxlZERhdGUsXG4gICAgICBvbkNsZWFyOiB0aGlzLm9uQ2xlYXIsXG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIHNlbGVjdGVkVmFsdWU6IHNlbGVjdGVkVmFsdWUsXG4gICAgICBvbkNoYW5nZTogdGhpcy5vbkRhdGVJbnB1dENoYW5nZVxuICAgIH0pIDogbnVsbDtcbiAgICB2YXIgY2hpbGRyZW4gPSBbcHJvcHMucmVuZGVyU2lkZWJhcigpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1wYW5lbCcsIGtleTogJ3BhbmVsJyB9LFxuICAgICAgZGF0ZUlucHV0RWxlbWVudCxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1kYXRlLXBhbmVsJyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhbGVuZGFySGVhZGVyLCB7XG4gICAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgICAgbW9kZTogbW9kZSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgb25WYWx1ZUNoYW5nZTogdGhpcy5zZXRWYWx1ZSxcbiAgICAgICAgICBvblBhbmVsQ2hhbmdlOiB0aGlzLm9uUGFuZWxDaGFuZ2UsXG4gICAgICAgICAgc2hvd1RpbWVQaWNrZXI6IHNob3dUaW1lUGlja2VyLFxuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gICAgICAgIH0pLFxuICAgICAgICB0aW1lUGlja2VyICYmIHNob3dUaW1lUGlja2VyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10aW1lLXBpY2tlcicgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10aW1lLXBpY2tlci1wYW5lbCcgfSxcbiAgICAgICAgICAgIHRpbWVQaWNrZXJFbGVcbiAgICAgICAgICApXG4gICAgICAgICkgOiBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJvZHknIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEYXRlVGFibGUsIHtcbiAgICAgICAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgICAgZGF0ZVJlbmRlcjogcHJvcHMuZGF0ZVJlbmRlcixcbiAgICAgICAgICAgIG9uU2VsZWN0OiB0aGlzLm9uRGF0ZVRhYmxlU2VsZWN0LFxuICAgICAgICAgICAgZGlzYWJsZWREYXRlOiBkaXNhYmxlZERhdGUsXG4gICAgICAgICAgICBzaG93V2Vla051bWJlcjogcHJvcHMuc2hvd1dlZWtOdW1iZXJcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhbGVuZGFyRm9vdGVyLCB7XG4gICAgICAgICAgc2hvd09rOiBwcm9wcy5zaG93T2ssXG4gICAgICAgICAgcmVuZGVyRm9vdGVyOiBwcm9wcy5yZW5kZXJGb290ZXIsXG4gICAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgc2hvd1RvZGF5OiBwcm9wcy5zaG93VG9kYXksXG4gICAgICAgICAgZGlzYWJsZWRUaW1lOiBkaXNhYmxlZFRpbWUsXG4gICAgICAgICAgc2hvd1RpbWVQaWNrZXI6IHNob3dUaW1lUGlja2VyLFxuICAgICAgICAgIHNob3dEYXRlSW5wdXQ6IHByb3BzLnNob3dEYXRlSW5wdXQsXG4gICAgICAgICAgdGltZVBpY2tlcjogdGltZVBpY2tlcixcbiAgICAgICAgICBzZWxlY3RlZFZhbHVlOiBzZWxlY3RlZFZhbHVlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBkaXNhYmxlZERhdGU6IGRpc2FibGVkRGF0ZSxcbiAgICAgICAgICBva0Rpc2FibGVkOiAhdGhpcy5pc0FsbG93ZWREYXRlKHNlbGVjdGVkVmFsdWUpLFxuICAgICAgICAgIG9uT2s6IHRoaXMub25PayxcbiAgICAgICAgICBvblNlbGVjdDogdGhpcy5vblNlbGVjdCxcbiAgICAgICAgICBvblRvZGF5OiB0aGlzLm9uVG9kYXksXG4gICAgICAgICAgb25PcGVuVGltZVBpY2tlcjogdGhpcy5vcGVuVGltZVBpY2tlcixcbiAgICAgICAgICBvbkNsb3NlVGltZVBpY2tlcjogdGhpcy5jbG9zZVRpbWVQaWNrZXJcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXTtcblxuICAgIHJldHVybiB0aGlzLnJlbmRlclJvb3Qoe1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lOiBwcm9wcy5zaG93V2Vla051bWJlciA/IHByZWZpeENscyArICctd2Vlay1udW1iZXInIDogJydcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19yYy1jYWxlbmRhckA5LjYuMEByYy1jYWxlbmRhci9lcy9DYWxlbmRhci5qc1xuLy8gbW9kdWxlIGlkID0gODY5XG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE1vbnRoVGFibGUgZnJvbSAnLi9Nb250aFRhYmxlJztcblxuZnVuY3Rpb24gZ29ZZWFyKGRpcmVjdGlvbikge1xuICB2YXIgbmV4dCA9IHRoaXMuc3RhdGUudmFsdWUuY2xvbmUoKTtcbiAgbmV4dC5hZGQoZGlyZWN0aW9uLCAneWVhcicpO1xuICB0aGlzLnNldEFuZENoYW5nZVZhbHVlKG5leHQpO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIE1vbnRoUGFuZWwgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdNb250aFBhbmVsJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWREYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgICBvblNlbGVjdDogbm9vcFxuICAgIH07XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgLy8gYmluZCBtZXRob2RzXG4gICAgdGhpcy5uZXh0WWVhciA9IGdvWWVhci5iaW5kKHRoaXMsIDEpO1xuICAgIHRoaXMucHJldmlvdXNZZWFyID0gZ29ZZWFyLmJpbmQodGhpcywgLTEpO1xuICAgIHRoaXMucHJlZml4Q2xzID0gcHJvcHMucm9vdFByZWZpeENscyArICctbW9udGgtcGFuZWwnO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcHJvcHMudmFsdWUgfHwgcHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZTogbmV4dFByb3BzLnZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHNldEFuZENoYW5nZVZhbHVlOiBmdW5jdGlvbiBzZXRBbmRDaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICB9LFxuICBzZXRBbmRTZWxlY3RWYWx1ZTogZnVuY3Rpb24gc2V0QW5kU2VsZWN0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHZhbHVlKTtcbiAgfSxcbiAgc2V0VmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKCEoJ3ZhbHVlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgdmFyIGNlbGxSZW5kZXIgPSBwcm9wcy5jZWxsUmVuZGVyO1xuICAgIHZhciBjb250ZW50UmVuZGVyID0gcHJvcHMuY29udGVudFJlbmRlcjtcbiAgICB2YXIgbG9jYWxlID0gcHJvcHMubG9jYWxlO1xuICAgIHZhciB5ZWFyID0gdmFsdWUueWVhcigpO1xuICAgIHZhciBwcmVmaXhDbHMgPSB0aGlzLnByZWZpeENscztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscywgc3R5bGU6IHByb3BzLnN0eWxlIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1oZWFkZXInIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1wcmV2LXllYXItYnRuJyxcbiAgICAgICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5wcmV2aW91c1llYXIsXG4gICAgICAgICAgICB0aXRsZTogbG9jYWxlLnByZXZpb3VzWWVhclxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnYScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy15ZWFyLXNlbGVjdCcsXG4gICAgICAgICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBwcm9wcy5vblllYXJQYW5lbFNob3csXG4gICAgICAgICAgICAgIHRpdGxlOiBsb2NhbGUueWVhclNlbGVjdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICcteWVhci1zZWxlY3QtY29udGVudCcgfSxcbiAgICAgICAgICAgICAgeWVhclxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICcteWVhci1zZWxlY3QtYXJyb3cnIH0sXG4gICAgICAgICAgICAgICd4J1xuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1uZXh0LXllYXItYnRuJyxcbiAgICAgICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5uZXh0WWVhcixcbiAgICAgICAgICAgIHRpdGxlOiBsb2NhbGUubmV4dFllYXJcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJvZHknIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb250aFRhYmxlLCB7XG4gICAgICAgICAgICBkaXNhYmxlZERhdGU6IHByb3BzLmRpc2FibGVkRGF0ZSxcbiAgICAgICAgICAgIG9uU2VsZWN0OiB0aGlzLnNldEFuZFNlbGVjdFZhbHVlLFxuICAgICAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBjZWxsUmVuZGVyOiBjZWxsUmVuZGVyLFxuICAgICAgICAgICAgY29udGVudFJlbmRlcjogY29udGVudFJlbmRlcixcbiAgICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNb250aFBhbmVsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19yYy1jYWxlbmRhckA5LjYuMEByYy1jYWxlbmRhci9lcy9tb250aC9Nb250aFBhbmVsLmpzXG4vLyBtb2R1bGUgaWQgPSA4NzBcbi8vIG1vZHVsZSBjaHVua3MgPSA2IDciLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQ2FsZW5kYXJQYXJ0IGZyb20gJy4vcmFuZ2UtY2FsZW5kYXIvQ2FsZW5kYXJQYXJ0JztcbmltcG9ydCBUb2RheUJ1dHRvbiBmcm9tICcuL2NhbGVuZGFyL1RvZGF5QnV0dG9uJztcbmltcG9ydCBPa0J1dHRvbiBmcm9tICcuL2NhbGVuZGFyL09rQnV0dG9uJztcbmltcG9ydCBUaW1lUGlja2VyQnV0dG9uIGZyb20gJy4vY2FsZW5kYXIvVGltZVBpY2tlckJ1dHRvbic7XG5pbXBvcnQgQ29tbW9uTWl4aW4gZnJvbSAnLi9taXhpbi9Db21tb25NaXhpbic7XG5pbXBvcnQgeyBzeW5jVGltZSwgZ2V0VG9kYXlUaW1lLCBpc0FsbG93ZWREYXRlIH0gZnJvbSAnLi91dGlsLyc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBpc0VtcHR5QXJyYXkoYXJyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgJiYgKGFyci5sZW5ndGggPT09IDAgfHwgYXJyLmV2ZXJ5KGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuICFpO1xuICB9KSk7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlzRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gIGlmIChhID09PSBudWxsIHx8IHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyB8fCBiID09PSBudWxsIHx8IHR5cGVvZiBiID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tU2VsZWN0ZWRWYWx1ZShzZWxlY3RlZFZhbHVlKSB7XG4gIHZhciBzdGFydCA9IHNlbGVjdGVkVmFsdWVbMF0sXG4gICAgICBlbmQgPSBzZWxlY3RlZFZhbHVlWzFdO1xuXG4gIHZhciBuZXdFbmQgPSBlbmQgJiYgZW5kLmlzU2FtZShzdGFydCwgJ21vbnRoJykgPyBlbmQuY2xvbmUoKS5hZGQoMSwgJ21vbnRoJykgOiBlbmQ7XG4gIHJldHVybiBbc3RhcnQsIG5ld0VuZF07XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFuY2hvcihwcm9wcywgaW5pdCkge1xuICB2YXIgc2VsZWN0ZWRWYWx1ZSA9IHByb3BzLnNlbGVjdGVkVmFsdWUgfHwgaW5pdCAmJiBwcm9wcy5kZWZhdWx0U2VsZWN0ZWRWYWx1ZTtcbiAgdmFyIHZhbHVlID0gcHJvcHMudmFsdWUgfHwgaW5pdCAmJiBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gIHZhciBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZSA/IGdldFZhbHVlRnJvbVNlbGVjdGVkVmFsdWUodmFsdWUpIDogZ2V0VmFsdWVGcm9tU2VsZWN0ZWRWYWx1ZShzZWxlY3RlZFZhbHVlKTtcbiAgcmV0dXJuICFpc0VtcHR5QXJyYXkobm9ybWFsaXplZFZhbHVlKSA/IG5vcm1hbGl6ZWRWYWx1ZSA6IGluaXQgJiYgW21vbWVudCgpLCBtb21lbnQoKS5hZGQoMSwgJ21vbnRocycpXTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25zKGxlbmd0aCwgZXh0cmFPcHRpb25HZW4pIHtcbiAgdmFyIGFyciA9IGV4dHJhT3B0aW9uR2VuID8gZXh0cmFPcHRpb25HZW4oKS5jb25jYXQoKSA6IFtdO1xuICBmb3IgKHZhciB2YWx1ZSA9IDA7IHZhbHVlIDwgbGVuZ3RoOyB2YWx1ZSsrKSB7XG4gICAgaWYgKGFyci5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIGFyci5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gb25JbnB1dFNlbGVjdChkaXJlY3Rpb24sIHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG9yaWdpbmFsVmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWU7XG4gIHZhciBzZWxlY3RlZFZhbHVlID0gb3JpZ2luYWxWYWx1ZS5jb25jYXQoKTtcbiAgdmFyIGluZGV4ID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyAwIDogMTtcbiAgc2VsZWN0ZWRWYWx1ZVtpbmRleF0gPSB2YWx1ZTtcbiAgaWYgKHNlbGVjdGVkVmFsdWVbMF0gJiYgdGhpcy5jb21wYXJlKHNlbGVjdGVkVmFsdWVbMF0sIHNlbGVjdGVkVmFsdWVbMV0pID4gMCkge1xuICAgIHNlbGVjdGVkVmFsdWVbMSAtIGluZGV4XSA9IHRoaXMuc3RhdGUuc2hvd1RpbWVQaWNrZXIgPyBzZWxlY3RlZFZhbHVlW2luZGV4XSA6IHVuZGVmaW5lZDtcbiAgfVxuICB0aGlzLnByb3BzLm9uSW5wdXRTZWxlY3Qoc2VsZWN0ZWRWYWx1ZSk7XG4gIHRoaXMuZmlyZVNlbGVjdFZhbHVlQ2hhbmdlKHNlbGVjdGVkVmFsdWUpO1xufVxuXG52YXIgUmFuZ2VDYWxlbmRhciA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JhbmdlQ2FsZW5kYXInLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkYXRlSW5wdXRQbGFjZWhvbGRlcjogUHJvcFR5cGVzLmFueSxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgaG92ZXJWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBtb2RlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2YoWydkYXRlJywgJ21vbnRoJywgJ3llYXInLCAnZGVjYWRlJ10pKSxcbiAgICBzaG93RGF0ZUlucHV0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0aW1lUGlja2VyOiBQcm9wVHlwZXMuYW55LFxuICAgIHNob3dPazogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1RvZGF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkZWZhdWx0U2VsZWN0ZWRWYWx1ZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNlbGVjdGVkVmFsdWU6IFByb3BUeXBlcy5hcnJheSxcbiAgICBvbk9rOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93Q2xlYXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uSG92ZXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUGFuZWxDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZvcm1hdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIG9uQ2xlYXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHR5cGU6IFByb3BUeXBlcy5hbnksXG4gICAgZGlzYWJsZWREYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZFRpbWU6IFByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgbWl4aW5zOiBbQ29tbW9uTWl4aW5dLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnYm90aCcsXG4gICAgICBkZWZhdWx0U2VsZWN0ZWRWYWx1ZTogW10sXG4gICAgICBvblZhbHVlQ2hhbmdlOiBub29wLFxuICAgICAgb25Ib3ZlckNoYW5nZTogbm9vcCxcbiAgICAgIG9uUGFuZWxDaGFuZ2U6IG5vb3AsXG4gICAgICBkaXNhYmxlZFRpbWU6IG5vb3AsXG4gICAgICBvbklucHV0U2VsZWN0OiBub29wLFxuICAgICAgc2hvd1RvZGF5OiB0cnVlLFxuICAgICAgc2hvd0RhdGVJbnB1dDogdHJ1ZVxuICAgIH07XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHNlbGVjdGVkVmFsdWUgPSBwcm9wcy5zZWxlY3RlZFZhbHVlIHx8IHByb3BzLmRlZmF1bHRTZWxlY3RlZFZhbHVlO1xuICAgIHZhciB2YWx1ZSA9IG5vcm1hbGl6ZUFuY2hvcihwcm9wcywgMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlbGVjdGVkVmFsdWU6IHNlbGVjdGVkVmFsdWUsXG4gICAgICBwcmV2U2VsZWN0ZWRWYWx1ZTogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgIGZpcnN0U2VsZWN0ZWRWYWx1ZTogbnVsbCxcbiAgICAgIGhvdmVyVmFsdWU6IHByb3BzLmhvdmVyVmFsdWUgfHwgW10sXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBzaG93VGltZVBpY2tlcjogZmFsc2UsXG4gICAgICBtb2RlOiBwcm9wcy5tb2RlIHx8IFsnZGF0ZScsICdkYXRlJ11cbiAgICB9O1xuICB9LFxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICB2YXIgbmV3U3RhdGUgPSB7fTtcbiAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgIG5ld1N0YXRlLnZhbHVlID0gbm9ybWFsaXplQW5jaG9yKG5leHRQcm9wcywgMCk7XG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9XG4gICAgaWYgKCdob3ZlclZhbHVlJyBpbiBuZXh0UHJvcHMgJiYgIWlzQXJyYXlzRXF1YWwoc3RhdGUuaG92ZXJWYWx1ZSwgbmV4dFByb3BzLmhvdmVyVmFsdWUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaG92ZXJWYWx1ZTogbmV4dFByb3BzLmhvdmVyVmFsdWUgfSk7XG4gICAgfVxuICAgIGlmICgnc2VsZWN0ZWRWYWx1ZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICBuZXdTdGF0ZS5zZWxlY3RlZFZhbHVlID0gbmV4dFByb3BzLnNlbGVjdGVkVmFsdWU7XG4gICAgICBuZXdTdGF0ZS5wcmV2U2VsZWN0ZWRWYWx1ZSA9IG5leHRQcm9wcy5zZWxlY3RlZFZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgfVxuICAgIGlmICgnbW9kZScgaW4gbmV4dFByb3BzICYmICFpc0FycmF5c0VxdWFsKHN0YXRlLm1vZGUsIG5leHRQcm9wcy5tb2RlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGU6IG5leHRQcm9wcy5tb2RlIH0pO1xuICAgIH1cbiAgfSxcbiAgb25EYXRlUGFuZWxFbnRlcjogZnVuY3Rpb24gb25EYXRlUGFuZWxFbnRlcigpIHtcbiAgICBpZiAodGhpcy5oYXNTZWxlY3RlZFZhbHVlKCkpIHtcbiAgICAgIHRoaXMuZmlyZUhvdmVyVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlLmNvbmNhdCgpKTtcbiAgICB9XG4gIH0sXG4gIG9uRGF0ZVBhbmVsTGVhdmU6IGZ1bmN0aW9uIG9uRGF0ZVBhbmVsTGVhdmUoKSB7XG4gICAgaWYgKHRoaXMuaGFzU2VsZWN0ZWRWYWx1ZSgpKSB7XG4gICAgICB0aGlzLmZpcmVIb3ZlclZhbHVlQ2hhbmdlKFtdKTtcbiAgICB9XG4gIH0sXG4gIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdCh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gdGhpcy5wcm9wcy50eXBlO1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzZWxlY3RlZFZhbHVlID0gX3N0YXRlLnNlbGVjdGVkVmFsdWUsXG4gICAgICAgIHByZXZTZWxlY3RlZFZhbHVlID0gX3N0YXRlLnByZXZTZWxlY3RlZFZhbHVlLFxuICAgICAgICBmaXJzdFNlbGVjdGVkVmFsdWUgPSBfc3RhdGUuZmlyc3RTZWxlY3RlZFZhbHVlO1xuXG4gICAgdmFyIG5leHRTZWxlY3RlZFZhbHVlID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSAnYm90aCcpIHtcbiAgICAgIGlmICghZmlyc3RTZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgIHN5bmNUaW1lKHByZXZTZWxlY3RlZFZhbHVlWzBdLCB2YWx1ZSk7XG4gICAgICAgIG5leHRTZWxlY3RlZFZhbHVlID0gW3ZhbHVlXTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJlKGZpcnN0U2VsZWN0ZWRWYWx1ZSwgdmFsdWUpIDwgMCkge1xuICAgICAgICBzeW5jVGltZShwcmV2U2VsZWN0ZWRWYWx1ZVsxXSwgdmFsdWUpO1xuICAgICAgICBuZXh0U2VsZWN0ZWRWYWx1ZSA9IFtmaXJzdFNlbGVjdGVkVmFsdWUsIHZhbHVlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN5bmNUaW1lKHByZXZTZWxlY3RlZFZhbHVlWzBdLCB2YWx1ZSk7XG4gICAgICAgIHN5bmNUaW1lKHByZXZTZWxlY3RlZFZhbHVlWzFdLCBmaXJzdFNlbGVjdGVkVmFsdWUpO1xuICAgICAgICBuZXh0U2VsZWN0ZWRWYWx1ZSA9IFt2YWx1ZSwgZmlyc3RTZWxlY3RlZFZhbHVlXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdGFydCcpIHtcbiAgICAgIHN5bmNUaW1lKHByZXZTZWxlY3RlZFZhbHVlWzBdLCB2YWx1ZSk7XG4gICAgICB2YXIgZW5kVmFsdWUgPSBzZWxlY3RlZFZhbHVlWzFdO1xuICAgICAgbmV4dFNlbGVjdGVkVmFsdWUgPSBlbmRWYWx1ZSAmJiB0aGlzLmNvbXBhcmUoZW5kVmFsdWUsIHZhbHVlKSA+IDAgPyBbdmFsdWUsIGVuZFZhbHVlXSA6IFt2YWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHR5cGUgPT09ICdlbmQnXG4gICAgICB2YXIgc3RhcnRWYWx1ZSA9IHNlbGVjdGVkVmFsdWVbMF07XG4gICAgICBpZiAoc3RhcnRWYWx1ZSAmJiB0aGlzLmNvbXBhcmUoc3RhcnRWYWx1ZSwgdmFsdWUpIDw9IDApIHtcbiAgICAgICAgc3luY1RpbWUocHJldlNlbGVjdGVkVmFsdWVbMV0sIHZhbHVlKTtcbiAgICAgICAgbmV4dFNlbGVjdGVkVmFsdWUgPSBbc3RhcnRWYWx1ZSwgdmFsdWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3luY1RpbWUocHJldlNlbGVjdGVkVmFsdWVbMF0sIHZhbHVlKTtcbiAgICAgICAgbmV4dFNlbGVjdGVkVmFsdWUgPSBbdmFsdWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZmlyZVNlbGVjdFZhbHVlQ2hhbmdlKG5leHRTZWxlY3RlZFZhbHVlKTtcbiAgfSxcbiAgb25EYXlIb3ZlcjogZnVuY3Rpb24gb25EYXlIb3Zlcih2YWx1ZSkge1xuICAgIHZhciBob3ZlclZhbHVlID0gW107XG4gICAgdmFyIF9zdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzZWxlY3RlZFZhbHVlID0gX3N0YXRlMi5zZWxlY3RlZFZhbHVlLFxuICAgICAgICBmaXJzdFNlbGVjdGVkVmFsdWUgPSBfc3RhdGUyLmZpcnN0U2VsZWN0ZWRWYWx1ZTtcbiAgICB2YXIgdHlwZSA9IHRoaXMucHJvcHMudHlwZTtcblxuICAgIGlmICh0eXBlID09PSAnc3RhcnQnICYmIHNlbGVjdGVkVmFsdWVbMV0pIHtcbiAgICAgIGhvdmVyVmFsdWUgPSB0aGlzLmNvbXBhcmUodmFsdWUsIHNlbGVjdGVkVmFsdWVbMV0pIDwgMCA/IFt2YWx1ZSwgc2VsZWN0ZWRWYWx1ZVsxXV0gOiBbdmFsdWVdO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2VuZCcgJiYgc2VsZWN0ZWRWYWx1ZVswXSkge1xuICAgICAgaG92ZXJWYWx1ZSA9IHRoaXMuY29tcGFyZSh2YWx1ZSwgc2VsZWN0ZWRWYWx1ZVswXSkgPiAwID8gW3NlbGVjdGVkVmFsdWVbMF0sIHZhbHVlXSA6IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWZpcnN0U2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBob3ZlclZhbHVlID0gdGhpcy5jb21wYXJlKHZhbHVlLCBmaXJzdFNlbGVjdGVkVmFsdWUpIDwgMCA/IFt2YWx1ZSwgZmlyc3RTZWxlY3RlZFZhbHVlXSA6IFtmaXJzdFNlbGVjdGVkVmFsdWUsIHZhbHVlXTtcbiAgICB9XG4gICAgdGhpcy5maXJlSG92ZXJWYWx1ZUNoYW5nZShob3ZlclZhbHVlKTtcbiAgfSxcbiAgb25Ub2RheTogZnVuY3Rpb24gb25Ub2RheSgpIHtcbiAgICB2YXIgc3RhcnRWYWx1ZSA9IGdldFRvZGF5VGltZSh0aGlzLnN0YXRlLnZhbHVlWzBdKTtcbiAgICB2YXIgZW5kVmFsdWUgPSBzdGFydFZhbHVlLmNsb25lKCkuYWRkKDEsICdtb250aHMnKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFtzdGFydFZhbHVlLCBlbmRWYWx1ZV0gfSk7XG4gIH0sXG4gIG9uT3BlblRpbWVQaWNrZXI6IGZ1bmN0aW9uIG9uT3BlblRpbWVQaWNrZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93VGltZVBpY2tlcjogdHJ1ZVxuICAgIH0pO1xuICB9LFxuICBvbkNsb3NlVGltZVBpY2tlcjogZnVuY3Rpb24gb25DbG9zZVRpbWVQaWNrZXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93VGltZVBpY2tlcjogZmFsc2VcbiAgICB9KTtcbiAgfSxcbiAgb25PazogZnVuY3Rpb24gb25PaygpIHtcbiAgICB2YXIgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZTtcblxuICAgIGlmICh0aGlzLmlzQWxsb3dlZERhdGVBbmRUaW1lKHNlbGVjdGVkVmFsdWUpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uT2sodGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIG9uU3RhcnRJbnB1dFNlbGVjdDogZnVuY3Rpb24gb25TdGFydElucHV0U2VsZWN0KCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBvYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgb2FyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ3MgPSBbJ2xlZnQnXS5jb25jYXQob2FyZ3MpO1xuICAgIHJldHVybiBvbklucHV0U2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9LFxuICBvbkVuZElucHV0U2VsZWN0OiBmdW5jdGlvbiBvbkVuZElucHV0U2VsZWN0KCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgb2FyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgb2FyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgYXJncyA9IFsncmlnaHQnXS5jb25jYXQob2FyZ3MpO1xuICAgIHJldHVybiBvbklucHV0U2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9LFxuICBvblN0YXJ0VmFsdWVDaGFuZ2U6IGZ1bmN0aW9uIG9uU3RhcnRWYWx1ZUNoYW5nZShsZWZ0VmFsdWUpIHtcbiAgICB2YXIgdmFsdWUgPSBbXS5jb25jYXQodGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgdmFsdWVbMF0gPSBsZWZ0VmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuZmlyZVZhbHVlQ2hhbmdlKHZhbHVlKTtcbiAgfSxcbiAgb25FbmRWYWx1ZUNoYW5nZTogZnVuY3Rpb24gb25FbmRWYWx1ZUNoYW5nZShyaWdodFZhbHVlKSB7XG4gICAgdmFyIHZhbHVlID0gW10uY29uY2F0KHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIHZhbHVlWzFdID0gcmlnaHRWYWx1ZTtcbiAgICByZXR1cm4gdGhpcy5maXJlVmFsdWVDaGFuZ2UodmFsdWUpO1xuICB9LFxuICBvblN0YXJ0UGFuZWxDaGFuZ2U6IGZ1bmN0aW9uIG9uU3RhcnRQYW5lbENoYW5nZSh2YWx1ZSwgbW9kZSkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIHZhciBuZXdNb2RlID0gW21vZGUsIHN0YXRlLm1vZGVbMV1dO1xuICAgIGlmICghKCdtb2RlJyBpbiBwcm9wcykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb2RlOiBuZXdNb2RlXG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIG5ld1ZhbHVlID0gW3ZhbHVlIHx8IHN0YXRlLnZhbHVlWzBdLCBzdGF0ZS52YWx1ZVsxXV07XG4gICAgcHJvcHMub25QYW5lbENoYW5nZShuZXdWYWx1ZSwgbmV3TW9kZSk7XG4gIH0sXG4gIG9uRW5kUGFuZWxDaGFuZ2U6IGZ1bmN0aW9uIG9uRW5kUGFuZWxDaGFuZ2UodmFsdWUsIG1vZGUpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICB2YXIgbmV3TW9kZSA9IFtzdGF0ZS5tb2RlWzBdLCBtb2RlXTtcbiAgICBpZiAoISgnbW9kZScgaW4gcHJvcHMpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW9kZTogbmV3TW9kZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBuZXdWYWx1ZSA9IFtzdGF0ZS52YWx1ZVswXSwgdmFsdWUgfHwgc3RhdGUudmFsdWVbMV1dO1xuICAgIHByb3BzLm9uUGFuZWxDaGFuZ2UobmV3VmFsdWUsIG5ld01vZGUpO1xuICB9LFxuICBnZXRTdGFydFZhbHVlOiBmdW5jdGlvbiBnZXRTdGFydFZhbHVlKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWVbMF07XG4gICAgdmFyIHNlbGVjdGVkVmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWU7XG4gICAgLy8ga2VlcCBzZWxlY3RlZFRpbWUgd2hlbiBzZWxlY3QgZGF0ZVxuICAgIGlmIChzZWxlY3RlZFZhbHVlWzBdICYmIHRoaXMucHJvcHMudGltZVBpY2tlcikge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5jbG9uZSgpO1xuICAgICAgc3luY1RpbWUoc2VsZWN0ZWRWYWx1ZVswXSwgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93VGltZVBpY2tlciAmJiBzZWxlY3RlZFZhbHVlWzBdKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZVswXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBnZXRFbmRWYWx1ZTogZnVuY3Rpb24gZ2V0RW5kVmFsdWUoKSB7XG4gICAgdmFyIF9zdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICB2YWx1ZSA9IF9zdGF0ZTMudmFsdWUsXG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSBfc3RhdGUzLnNlbGVjdGVkVmFsdWUsXG4gICAgICAgIHNob3dUaW1lUGlja2VyID0gX3N0YXRlMy5zaG93VGltZVBpY2tlcjtcblxuICAgIHZhciBlbmRWYWx1ZSA9IHZhbHVlWzFdID8gdmFsdWVbMV0uY2xvbmUoKSA6IHZhbHVlWzBdLmNsb25lKCkuYWRkKDEsICdtb250aCcpO1xuICAgIC8vIGtlZXAgc2VsZWN0ZWRUaW1lIHdoZW4gc2VsZWN0IGRhdGVcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZVsxXSAmJiB0aGlzLnByb3BzLnRpbWVQaWNrZXIpIHtcbiAgICAgIHN5bmNUaW1lKHNlbGVjdGVkVmFsdWVbMV0sIGVuZFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHNob3dUaW1lUGlja2VyKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZVsxXSA/IHNlbGVjdGVkVmFsdWVbMV0gOiB0aGlzLmdldFN0YXJ0VmFsdWUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuZFZhbHVlO1xuICB9LFxuXG4gIC8vIGdldCBkaXNhYmxlZCBob3VycyBmb3Igc2Vjb25kIHBpY2tlclxuICBnZXRFbmREaXNhYmxlVGltZTogZnVuY3Rpb24gZ2V0RW5kRGlzYWJsZVRpbWUoKSB7XG4gICAgdmFyIF9zdGF0ZTQgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzZWxlY3RlZFZhbHVlID0gX3N0YXRlNC5zZWxlY3RlZFZhbHVlLFxuICAgICAgICB2YWx1ZSA9IF9zdGF0ZTQudmFsdWU7XG4gICAgdmFyIGRpc2FibGVkVGltZSA9IHRoaXMucHJvcHMuZGlzYWJsZWRUaW1lO1xuXG4gICAgdmFyIHVzZXJTZXR0aW5nRGlzYWJsZWRUaW1lID0gZGlzYWJsZWRUaW1lKHNlbGVjdGVkVmFsdWUsICdlbmQnKSB8fCB7fTtcbiAgICB2YXIgc3RhcnRWYWx1ZSA9IHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZVswXSB8fCB2YWx1ZVswXS5jbG9uZSgpO1xuICAgIC8vIGlmIHN0YXJ0VGltZSBhbmQgZW5kVGltZSBpcyBzYW1lIGRheS4uXG4gICAgLy8gdGhlIHNlY29uZCB0aW1lIHBpY2tlciB3aWxsIG5vdCBhYmxlIHRvIHBpY2sgdGltZSBiZWZvcmUgZmlyc3QgdGltZSBwaWNrZXJcbiAgICBpZiAoIXNlbGVjdGVkVmFsdWVbMV0gfHwgc3RhcnRWYWx1ZS5pc1NhbWUoc2VsZWN0ZWRWYWx1ZVsxXSwgJ2RheScpKSB7XG4gICAgICB2YXIgaG91cnMgPSBzdGFydFZhbHVlLmhvdXIoKTtcbiAgICAgIHZhciBtaW51dGVzID0gc3RhcnRWYWx1ZS5taW51dGUoKTtcbiAgICAgIHZhciBzZWNvbmQgPSBzdGFydFZhbHVlLnNlY29uZCgpO1xuICAgICAgdmFyIF9kaXNhYmxlZEhvdXJzID0gdXNlclNldHRpbmdEaXNhYmxlZFRpbWUuZGlzYWJsZWRIb3VycyxcbiAgICAgICAgICBfZGlzYWJsZWRNaW51dGVzID0gdXNlclNldHRpbmdEaXNhYmxlZFRpbWUuZGlzYWJsZWRNaW51dGVzLFxuICAgICAgICAgIF9kaXNhYmxlZFNlY29uZHMgPSB1c2VyU2V0dGluZ0Rpc2FibGVkVGltZS5kaXNhYmxlZFNlY29uZHM7XG5cbiAgICAgIHZhciBvbGREaXNhYmxlZE1pbnV0ZXMgPSBfZGlzYWJsZWRNaW51dGVzID8gX2Rpc2FibGVkTWludXRlcygpIDogW107XG4gICAgICB2YXIgb2xkZGlzYWJsZWRTZWNvbmRzID0gX2Rpc2FibGVkU2Vjb25kcyA/IF9kaXNhYmxlZFNlY29uZHMoKSA6IFtdO1xuICAgICAgX2Rpc2FibGVkSG91cnMgPSBnZW5lcmF0ZU9wdGlvbnMoaG91cnMsIF9kaXNhYmxlZEhvdXJzKTtcbiAgICAgIF9kaXNhYmxlZE1pbnV0ZXMgPSBnZW5lcmF0ZU9wdGlvbnMobWludXRlcywgX2Rpc2FibGVkTWludXRlcyk7XG4gICAgICBfZGlzYWJsZWRTZWNvbmRzID0gZ2VuZXJhdGVPcHRpb25zKHNlY29uZCwgX2Rpc2FibGVkU2Vjb25kcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkaXNhYmxlZEhvdXJzOiBmdW5jdGlvbiBkaXNhYmxlZEhvdXJzKCkge1xuICAgICAgICAgIHJldHVybiBfZGlzYWJsZWRIb3VycztcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWRNaW51dGVzOiBmdW5jdGlvbiBkaXNhYmxlZE1pbnV0ZXMoaG91cikge1xuICAgICAgICAgIGlmIChob3VyID09PSBob3Vycykge1xuICAgICAgICAgICAgcmV0dXJuIF9kaXNhYmxlZE1pbnV0ZXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvbGREaXNhYmxlZE1pbnV0ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkU2Vjb25kczogZnVuY3Rpb24gZGlzYWJsZWRTZWNvbmRzKGhvdXIsIG1pbnV0ZSkge1xuICAgICAgICAgIGlmIChob3VyID09PSBob3VycyAmJiBtaW51dGUgPT09IG1pbnV0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBfZGlzYWJsZWRTZWNvbmRzO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb2xkZGlzYWJsZWRTZWNvbmRzO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdXNlclNldHRpbmdEaXNhYmxlZFRpbWU7XG4gIH0sXG4gIGlzQWxsb3dlZERhdGVBbmRUaW1lOiBmdW5jdGlvbiBpc0FsbG93ZWREYXRlQW5kVGltZShzZWxlY3RlZFZhbHVlKSB7XG4gICAgcmV0dXJuIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVswXSwgdGhpcy5wcm9wcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRTdGFydFRpbWUpICYmIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVsxXSwgdGhpcy5wcm9wcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRFbmRUaW1lKTtcbiAgfSxcbiAgaXNNb250aFllYXJQYW5lbFNob3c6IGZ1bmN0aW9uIGlzTW9udGhZZWFyUGFuZWxTaG93KG1vZGUpIHtcbiAgICByZXR1cm4gWydtb250aCcsICd5ZWFyJywgJ2RlY2FkZSddLmluZGV4T2YobW9kZSkgPiAtMTtcbiAgfSxcbiAgaGFzU2VsZWN0ZWRWYWx1ZTogZnVuY3Rpb24gaGFzU2VsZWN0ZWRWYWx1ZSgpIHtcbiAgICB2YXIgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZTtcblxuICAgIHJldHVybiAhIXNlbGVjdGVkVmFsdWVbMV0gJiYgISFzZWxlY3RlZFZhbHVlWzBdO1xuICB9LFxuICBjb21wYXJlOiBmdW5jdGlvbiBjb21wYXJlKHYxLCB2Mikge1xuICAgIGlmICh0aGlzLnByb3BzLnRpbWVQaWNrZXIpIHtcbiAgICAgIHJldHVybiB2MS5kaWZmKHYyKTtcbiAgICB9XG4gICAgcmV0dXJuIHYxLmRpZmYodjIsICdkYXlzJyk7XG4gIH0sXG4gIGZpcmVTZWxlY3RWYWx1ZUNoYW5nZTogZnVuY3Rpb24gZmlyZVNlbGVjdFZhbHVlQ2hhbmdlKHNlbGVjdGVkVmFsdWUsIGRpcmVjdCkge1xuICAgIHZhciB0aW1lUGlja2VyID0gdGhpcy5wcm9wcy50aW1lUGlja2VyO1xuICAgIHZhciBwcmV2U2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc3RhdGUucHJldlNlbGVjdGVkVmFsdWU7XG5cbiAgICBpZiAodGltZVBpY2tlciAmJiB0aW1lUGlja2VyLnByb3BzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgdmFyIHRpbWVQaWNrZXJEZWZhdWx0VmFsdWUgPSB0aW1lUGlja2VyLnByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgICAgIGlmICghcHJldlNlbGVjdGVkVmFsdWVbMF0gJiYgc2VsZWN0ZWRWYWx1ZVswXSkge1xuICAgICAgICBzeW5jVGltZSh0aW1lUGlja2VyRGVmYXVsdFZhbHVlWzBdLCBzZWxlY3RlZFZhbHVlWzBdKTtcbiAgICAgIH1cbiAgICAgIGlmICghcHJldlNlbGVjdGVkVmFsdWVbMV0gJiYgc2VsZWN0ZWRWYWx1ZVsxXSkge1xuICAgICAgICBzeW5jVGltZSh0aW1lUGlja2VyRGVmYXVsdFZhbHVlWzFdLCBzZWxlY3RlZFZhbHVlWzFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoISgnc2VsZWN0ZWRWYWx1ZScgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZFZhbHVlOiBzZWxlY3RlZFZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDlsJrmnKrpgInmi6nov4fml7bpl7TvvIznm7TmjqXovpPlhaXnmoTor51cbiAgICBpZiAoIXRoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZVswXSB8fCAhdGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlWzFdKSB7XG4gICAgICB2YXIgc3RhcnRWYWx1ZSA9IHNlbGVjdGVkVmFsdWVbMF0gfHwgbW9tZW50KCk7XG4gICAgICB2YXIgZW5kVmFsdWUgPSBzZWxlY3RlZFZhbHVlWzFdIHx8IHN0YXJ0VmFsdWUuY2xvbmUoKS5hZGQoMSwgJ21vbnRocycpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkVmFsdWU6IHNlbGVjdGVkVmFsdWUsXG4gICAgICAgIHZhbHVlOiBnZXRWYWx1ZUZyb21TZWxlY3RlZFZhbHVlKFtzdGFydFZhbHVlLCBlbmRWYWx1ZV0pXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZVswXSAmJiAhc2VsZWN0ZWRWYWx1ZVsxXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpcnN0U2VsZWN0ZWRWYWx1ZTogc2VsZWN0ZWRWYWx1ZVswXSB9KTtcbiAgICAgIHRoaXMuZmlyZUhvdmVyVmFsdWVDaGFuZ2Uoc2VsZWN0ZWRWYWx1ZS5jb25jYXQoKSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgaWYgKGRpcmVjdCB8fCBzZWxlY3RlZFZhbHVlWzBdICYmIHNlbGVjdGVkVmFsdWVbMV0pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwcmV2U2VsZWN0ZWRWYWx1ZTogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgZmlyc3RTZWxlY3RlZFZhbHVlOiBudWxsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmlyZUhvdmVyVmFsdWVDaGFuZ2UoW10pO1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChzZWxlY3RlZFZhbHVlKTtcbiAgICB9XG4gIH0sXG4gIGZpcmVWYWx1ZUNoYW5nZTogZnVuY3Rpb24gZmlyZVZhbHVlQ2hhbmdlKHZhbHVlKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBpZiAoISgndmFsdWUnIGluIHByb3BzKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWUpO1xuICB9LFxuICBmaXJlSG92ZXJWYWx1ZUNoYW5nZTogZnVuY3Rpb24gZmlyZUhvdmVyVmFsdWVDaGFuZ2UoaG92ZXJWYWx1ZSkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCEoJ2hvdmVyVmFsdWUnIGluIHByb3BzKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhvdmVyVmFsdWU6IGhvdmVyVmFsdWUgfSk7XG4gICAgfVxuICAgIHByb3BzLm9uSG92ZXJDaGFuZ2UoaG92ZXJWYWx1ZSk7XG4gIH0sXG4gIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB0aGlzLmZpcmVTZWxlY3RWYWx1ZUNoYW5nZShbXSwgdHJ1ZSk7XG4gICAgdGhpcy5wcm9wcy5vbkNsZWFyKCk7XG4gIH0sXG4gIGRpc2FibGVkU3RhcnRUaW1lOiBmdW5jdGlvbiBkaXNhYmxlZFN0YXJ0VGltZSh0aW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzYWJsZWRUaW1lKHRpbWUsICdzdGFydCcpO1xuICB9LFxuICBkaXNhYmxlZEVuZFRpbWU6IGZ1bmN0aW9uIGRpc2FibGVkRW5kVGltZSh0aW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzYWJsZWRUaW1lKHRpbWUsICdlbmQnKTtcbiAgfSxcbiAgZGlzYWJsZWRTdGFydE1vbnRoOiBmdW5jdGlvbiBkaXNhYmxlZFN0YXJ0TW9udGgobW9udGgpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuXG4gICAgcmV0dXJuIG1vbnRoLmlzU2FtZU9yQWZ0ZXIodmFsdWVbMV0sICdtb250aCcpO1xuICB9LFxuICBkaXNhYmxlZEVuZE1vbnRoOiBmdW5jdGlvbiBkaXNhYmxlZEVuZE1vbnRoKG1vbnRoKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblxuICAgIHJldHVybiBtb250aC5pc1NhbWVPckJlZm9yZSh2YWx1ZVswXSwgJ21vbnRoJyk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NOYW1lLCBfY2xhc3NuYW1lcztcblxuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBkYXRlSW5wdXRQbGFjZWhvbGRlciA9IHByb3BzLmRhdGVJbnB1dFBsYWNlaG9sZGVyLFxuICAgICAgICB0aW1lUGlja2VyID0gcHJvcHMudGltZVBpY2tlcixcbiAgICAgICAgc2hvd09rID0gcHJvcHMuc2hvd09rLFxuICAgICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICAgIHNob3dDbGVhciA9IHByb3BzLnNob3dDbGVhcixcbiAgICAgICAgc2hvd1RvZGF5ID0gcHJvcHMuc2hvd1RvZGF5LFxuICAgICAgICB0eXBlID0gcHJvcHMudHlwZTtcbiAgICB2YXIgaG92ZXJWYWx1ZSA9IHN0YXRlLmhvdmVyVmFsdWUsXG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSBzdGF0ZS5zZWxlY3RlZFZhbHVlLFxuICAgICAgICBtb2RlID0gc3RhdGUubW9kZSxcbiAgICAgICAgc2hvd1RpbWVQaWNrZXIgPSBzdGF0ZS5zaG93VGltZVBpY2tlcjtcblxuICAgIHZhciBjbGFzc05hbWUgPSAoX2NsYXNzTmFtZSA9IHt9LCBfY2xhc3NOYW1lW3Byb3BzLmNsYXNzTmFtZV0gPSAhIXByb3BzLmNsYXNzTmFtZSwgX2NsYXNzTmFtZVtwcmVmaXhDbHNdID0gMSwgX2NsYXNzTmFtZVtwcmVmaXhDbHMgKyAnLWhpZGRlbiddID0gIXByb3BzLnZpc2libGUsIF9jbGFzc05hbWVbcHJlZml4Q2xzICsgJy1yYW5nZSddID0gMSwgX2NsYXNzTmFtZVtwcmVmaXhDbHMgKyAnLXNob3ctdGltZS1waWNrZXInXSA9IHNob3dUaW1lUGlja2VyLCBfY2xhc3NOYW1lW3ByZWZpeENscyArICctd2Vlay1udW1iZXInXSA9IHByb3BzLnNob3dXZWVrTnVtYmVyLCBfY2xhc3NOYW1lKTtcbiAgICB2YXIgY2xhc3NlcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lKTtcbiAgICB2YXIgbmV3UHJvcHMgPSB7XG4gICAgICBzZWxlY3RlZFZhbHVlOiBzdGF0ZS5zZWxlY3RlZFZhbHVlLFxuICAgICAgb25TZWxlY3Q6IHRoaXMub25TZWxlY3QsXG4gICAgICBvbkRheUhvdmVyOiB0eXBlID09PSAnc3RhcnQnICYmIHNlbGVjdGVkVmFsdWVbMV0gfHwgdHlwZSA9PT0gJ2VuZCcgJiYgc2VsZWN0ZWRWYWx1ZVswXSB8fCAhIWhvdmVyVmFsdWUubGVuZ3RoID8gdGhpcy5vbkRheUhvdmVyIDogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIHZhciBwbGFjZWhvbGRlcjEgPSB2b2lkIDA7XG4gICAgdmFyIHBsYWNlaG9sZGVyMiA9IHZvaWQgMDtcblxuICAgIGlmIChkYXRlSW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0ZUlucHV0UGxhY2Vob2xkZXIpKSB7XG4gICAgICAgIHBsYWNlaG9sZGVyMSA9IGRhdGVJbnB1dFBsYWNlaG9sZGVyWzBdO1xuICAgICAgICBwbGFjZWhvbGRlcjIgPSBkYXRlSW5wdXRQbGFjZWhvbGRlclsxXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYWNlaG9sZGVyMSA9IHBsYWNlaG9sZGVyMiA9IGRhdGVJbnB1dFBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2hvd09rQnV0dG9uID0gc2hvd09rID09PSB0cnVlIHx8IHNob3dPayAhPT0gZmFsc2UgJiYgISF0aW1lUGlja2VyO1xuICAgIHZhciBjbHMgPSBjbGFzc25hbWVzKChfY2xhc3NuYW1lcyA9IHt9LCBfY2xhc3NuYW1lc1twcmVmaXhDbHMgKyAnLWZvb3RlciddID0gdHJ1ZSwgX2NsYXNzbmFtZXNbcHJlZml4Q2xzICsgJy1yYW5nZS1ib3R0b20nXSA9IHRydWUsIF9jbGFzc25hbWVzW3ByZWZpeENscyArICctZm9vdGVyLXNob3ctb2snXSA9IHNob3dPa0J1dHRvbiwgX2NsYXNzbmFtZXMpKTtcblxuICAgIHZhciBzdGFydFZhbHVlID0gdGhpcy5nZXRTdGFydFZhbHVlKCk7XG4gICAgdmFyIGVuZFZhbHVlID0gdGhpcy5nZXRFbmRWYWx1ZSgpO1xuICAgIHZhciB0b2RheVRpbWUgPSBnZXRUb2RheVRpbWUoc3RhcnRWYWx1ZSk7XG4gICAgdmFyIHRoaXNNb250aCA9IHRvZGF5VGltZS5tb250aCgpO1xuICAgIHZhciB0aGlzWWVhciA9IHRvZGF5VGltZS55ZWFyKCk7XG4gICAgdmFyIGlzVG9kYXlJblZpZXcgPSBzdGFydFZhbHVlLnllYXIoKSA9PT0gdGhpc1llYXIgJiYgc3RhcnRWYWx1ZS5tb250aCgpID09PSB0aGlzTW9udGggfHwgZW5kVmFsdWUueWVhcigpID09PSB0aGlzWWVhciAmJiBlbmRWYWx1ZS5tb250aCgpID09PSB0aGlzTW9udGg7XG4gICAgdmFyIG5leHRNb250aE9mU3RhcnQgPSBzdGFydFZhbHVlLmNsb25lKCkuYWRkKDEsICdtb250aHMnKTtcbiAgICB2YXIgaXNDbG9zZXN0TW9udGhzID0gbmV4dE1vbnRoT2ZTdGFydC55ZWFyKCkgPT09IGVuZFZhbHVlLnllYXIoKSAmJiBuZXh0TW9udGhPZlN0YXJ0Lm1vbnRoKCkgPT09IGVuZFZhbHVlLm1vbnRoKCk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVSb290LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIHN0eWxlOiBwcm9wcy5zdHlsZSxcbiAgICAgICAgdGFiSW5kZXg6ICcwJ1xuICAgICAgfSxcbiAgICAgIHByb3BzLnJlbmRlclNpZGViYXIoKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1wYW5lbCcgfSxcbiAgICAgICAgc2hvd0NsZWFyICYmIHNlbGVjdGVkVmFsdWVbMF0gJiYgc2VsZWN0ZWRWYWx1ZVsxXSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNsZWFyLWJ0bicsXG4gICAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgICAgdGl0bGU6IGxvY2FsZS5jbGVhcixcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmNsZWFyXG4gICAgICAgIH0pIDogbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctZGF0ZS1wYW5lbCcsXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU6IHR5cGUgIT09ICdib3RoJyA/IHRoaXMub25EYXRlUGFuZWxMZWF2ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcjogdHlwZSAhPT0gJ2JvdGgnID8gdGhpcy5vbkRhdGVQYW5lbEVudGVyIDogdW5kZWZpbmVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENhbGVuZGFyUGFydCwgX2V4dGVuZHMoe30sIHByb3BzLCBuZXdQcm9wcywge1xuICAgICAgICAgICAgaG92ZXJWYWx1ZTogaG92ZXJWYWx1ZSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2xlZnQnLFxuICAgICAgICAgICAgZGlzYWJsZWRUaW1lOiB0aGlzLmRpc2FibGVkU3RhcnRUaW1lLFxuICAgICAgICAgICAgZGlzYWJsZWRNb250aDogdGhpcy5kaXNhYmxlZFN0YXJ0TW9udGgsXG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMuZ2V0Rm9ybWF0KCksXG4gICAgICAgICAgICB2YWx1ZTogc3RhcnRWYWx1ZSxcbiAgICAgICAgICAgIG1vZGU6IG1vZGVbMF0sXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIxLFxuICAgICAgICAgICAgb25JbnB1dFNlbGVjdDogdGhpcy5vblN0YXJ0SW5wdXRTZWxlY3QsXG4gICAgICAgICAgICBvblZhbHVlQ2hhbmdlOiB0aGlzLm9uU3RhcnRWYWx1ZUNoYW5nZSxcbiAgICAgICAgICAgIG9uUGFuZWxDaGFuZ2U6IHRoaXMub25TdGFydFBhbmVsQ2hhbmdlLFxuICAgICAgICAgICAgc2hvd0RhdGVJbnB1dDogdGhpcy5wcm9wcy5zaG93RGF0ZUlucHV0LFxuICAgICAgICAgICAgdGltZVBpY2tlcjogdGltZVBpY2tlcixcbiAgICAgICAgICAgIHNob3dUaW1lUGlja2VyOiBzaG93VGltZVBpY2tlcixcbiAgICAgICAgICAgIGVuYWJsZVByZXY6IHRydWUsXG4gICAgICAgICAgICBlbmFibGVOZXh0OiAhaXNDbG9zZXN0TW9udGhzIHx8IHRoaXMuaXNNb250aFllYXJQYW5lbFNob3cobW9kZVsxXSlcbiAgICAgICAgICB9KSksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXJhbmdlLW1pZGRsZScgfSxcbiAgICAgICAgICAgICd+J1xuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDYWxlbmRhclBhcnQsIF9leHRlbmRzKHt9LCBwcm9wcywgbmV3UHJvcHMsIHtcbiAgICAgICAgICAgIGhvdmVyVmFsdWU6IGhvdmVyVmFsdWUsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMuZ2V0Rm9ybWF0KCksXG4gICAgICAgICAgICB0aW1lUGlja2VyRGlzYWJsZWRUaW1lOiB0aGlzLmdldEVuZERpc2FibGVUaW1lKCksXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIyLFxuICAgICAgICAgICAgdmFsdWU6IGVuZFZhbHVlLFxuICAgICAgICAgICAgbW9kZTogbW9kZVsxXSxcbiAgICAgICAgICAgIG9uSW5wdXRTZWxlY3Q6IHRoaXMub25FbmRJbnB1dFNlbGVjdCxcbiAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U6IHRoaXMub25FbmRWYWx1ZUNoYW5nZSxcbiAgICAgICAgICAgIG9uUGFuZWxDaGFuZ2U6IHRoaXMub25FbmRQYW5lbENoYW5nZSxcbiAgICAgICAgICAgIHNob3dEYXRlSW5wdXQ6IHRoaXMucHJvcHMuc2hvd0RhdGVJbnB1dCxcbiAgICAgICAgICAgIHRpbWVQaWNrZXI6IHRpbWVQaWNrZXIsXG4gICAgICAgICAgICBzaG93VGltZVBpY2tlcjogc2hvd1RpbWVQaWNrZXIsXG4gICAgICAgICAgICBkaXNhYmxlZFRpbWU6IHRoaXMuZGlzYWJsZWRFbmRUaW1lLFxuICAgICAgICAgICAgZGlzYWJsZWRNb250aDogdGhpcy5kaXNhYmxlZEVuZE1vbnRoLFxuICAgICAgICAgICAgZW5hYmxlUHJldjogIWlzQ2xvc2VzdE1vbnRocyB8fCB0aGlzLmlzTW9udGhZZWFyUGFuZWxTaG93KG1vZGVbMF0pLFxuICAgICAgICAgICAgZW5hYmxlTmV4dDogdHJ1ZVxuICAgICAgICAgIH0pKVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbHMgfSxcbiAgICAgICAgICBwcm9wcy5yZW5kZXJGb290ZXIoKSxcbiAgICAgICAgICBzaG93VG9kYXkgfHwgcHJvcHMudGltZVBpY2tlciB8fCBzaG93T2tCdXR0b24gPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1mb290ZXItYnRuJyB9LFxuICAgICAgICAgICAgc2hvd1RvZGF5ID8gUmVhY3QuY3JlYXRlRWxlbWVudChUb2RheUJ1dHRvbiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOiBpc1RvZGF5SW5WaWV3LFxuICAgICAgICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWVbMF0sXG4gICAgICAgICAgICAgIG9uVG9kYXk6IHRoaXMub25Ub2RheSxcbiAgICAgICAgICAgICAgdGV4dDogbG9jYWxlLmJhY2tUb1RvZGF5XG4gICAgICAgICAgICB9KSkgOiBudWxsLFxuICAgICAgICAgICAgcHJvcHMudGltZVBpY2tlciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGltZVBpY2tlckJ1dHRvbiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgICAgIHNob3dUaW1lUGlja2VyOiBzaG93VGltZVBpY2tlcixcbiAgICAgICAgICAgICAgb25PcGVuVGltZVBpY2tlcjogdGhpcy5vbk9wZW5UaW1lUGlja2VyLFxuICAgICAgICAgICAgICBvbkNsb3NlVGltZVBpY2tlcjogdGhpcy5vbkNsb3NlVGltZVBpY2tlcixcbiAgICAgICAgICAgICAgdGltZVBpY2tlckRpc2FibGVkOiAhdGhpcy5oYXNTZWxlY3RlZFZhbHVlKCkgfHwgaG92ZXJWYWx1ZS5sZW5ndGhcbiAgICAgICAgICAgIH0pKSA6IG51bGwsXG4gICAgICAgICAgICBzaG93T2tCdXR0b24gPyBSZWFjdC5jcmVhdGVFbGVtZW50KE9rQnV0dG9uLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICAgICAgb25PazogdGhpcy5vbk9rLFxuICAgICAgICAgICAgICBva0Rpc2FibGVkOiAhdGhpcy5pc0FsbG93ZWREYXRlQW5kVGltZShzZWxlY3RlZFZhbHVlKSB8fCAhdGhpcy5oYXNTZWxlY3RlZFZhbHVlKCkgfHwgaG92ZXJWYWx1ZS5sZW5ndGhcbiAgICAgICAgICAgIH0pKSA6IG51bGxcbiAgICAgICAgICApIDogbnVsbFxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlQ2FsZW5kYXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL1JhbmdlQ2FsZW5kYXIuanNcbi8vIG1vZHVsZSBpZCA9IDg4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDYgNyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSAnY3JlYXRlLXJlYWN0LWNsYXNzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2FsZW5kYXJIZWFkZXIgZnJvbSAnLi4vY2FsZW5kYXIvQ2FsZW5kYXJIZWFkZXInO1xuaW1wb3J0IERhdGVUYWJsZSBmcm9tICcuLi9kYXRlL0RhdGVUYWJsZSc7XG5pbXBvcnQgRGF0ZUlucHV0IGZyb20gJy4uL2RhdGUvRGF0ZUlucHV0JztcbmltcG9ydCB7IGdldFRpbWVDb25maWcgfSBmcm9tICcuLi91dGlsL2luZGV4JztcblxudmFyIENhbGVuZGFyUGFydCA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0NhbGVuZGFyUGFydCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIGhvdmVyVmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgc2VsZWN0ZWRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBkaXJlY3Rpb246IFByb3BUeXBlcy5hbnksXG4gICAgbG9jYWxlOiBQcm9wVHlwZXMuYW55LFxuICAgIHNob3dEYXRlSW5wdXQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dUaW1lUGlja2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5hbnksXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5hbnksXG4gICAgZGlzYWJsZWREYXRlOiBQcm9wVHlwZXMuYW55LFxuICAgIHRpbWVQaWNrZXI6IFByb3BUeXBlcy5hbnksXG4gICAgZGlzYWJsZWRUaW1lOiBQcm9wVHlwZXMuYW55LFxuICAgIG9uSW5wdXRTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRpbWVQaWNrZXJEaXNhYmxlZFRpbWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZW5hYmxlTmV4dDogUHJvcFR5cGVzLmFueSxcbiAgICBlbmFibGVQcmV2OiBQcm9wVHlwZXMuYW55XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgICAgaG92ZXJWYWx1ZSA9IHByb3BzLmhvdmVyVmFsdWUsXG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSBwcm9wcy5zZWxlY3RlZFZhbHVlLFxuICAgICAgICBtb2RlID0gcHJvcHMubW9kZSxcbiAgICAgICAgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICBsb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICAgIGZvcm1hdCA9IHByb3BzLmZvcm1hdCxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgICAgZGlzYWJsZWREYXRlID0gcHJvcHMuZGlzYWJsZWREYXRlLFxuICAgICAgICB0aW1lUGlja2VyID0gcHJvcHMudGltZVBpY2tlcixcbiAgICAgICAgZGlzYWJsZWRUaW1lID0gcHJvcHMuZGlzYWJsZWRUaW1lLFxuICAgICAgICB0aW1lUGlja2VyRGlzYWJsZWRUaW1lID0gcHJvcHMudGltZVBpY2tlckRpc2FibGVkVGltZSxcbiAgICAgICAgc2hvd1RpbWVQaWNrZXIgPSBwcm9wcy5zaG93VGltZVBpY2tlcixcbiAgICAgICAgb25JbnB1dFNlbGVjdCA9IHByb3BzLm9uSW5wdXRTZWxlY3QsXG4gICAgICAgIGVuYWJsZVByZXYgPSBwcm9wcy5lbmFibGVQcmV2LFxuICAgICAgICBlbmFibGVOZXh0ID0gcHJvcHMuZW5hYmxlTmV4dDtcblxuICAgIHZhciBzaG91bGRTaG93VGltZVBpY2tlciA9IHNob3dUaW1lUGlja2VyICYmIHRpbWVQaWNrZXI7XG4gICAgdmFyIGRpc2FibGVkVGltZUNvbmZpZyA9IHNob3VsZFNob3dUaW1lUGlja2VyICYmIGRpc2FibGVkVGltZSA/IGdldFRpbWVDb25maWcoc2VsZWN0ZWRWYWx1ZSwgZGlzYWJsZWRUaW1lKSA6IG51bGw7XG4gICAgdmFyIHJhbmdlQ2xhc3NOYW1lID0gcHJlZml4Q2xzICsgJy1yYW5nZSc7XG4gICAgdmFyIG5ld1Byb3BzID0ge1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIHNob3dUaW1lUGlja2VyOiBzaG93VGltZVBpY2tlclxuICAgIH07XG4gICAgdmFyIGluZGV4ID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyAwIDogMTtcbiAgICB2YXIgdGltZVBpY2tlckVsZSA9IHNob3VsZFNob3dUaW1lUGlja2VyICYmIFJlYWN0LmNsb25lRWxlbWVudCh0aW1lUGlja2VyLCBfZXh0ZW5kcyh7XG4gICAgICBzaG93SG91cjogdHJ1ZSxcbiAgICAgIHNob3dNaW51dGU6IHRydWUsXG4gICAgICBzaG93U2Vjb25kOiB0cnVlXG4gICAgfSwgdGltZVBpY2tlci5wcm9wcywgZGlzYWJsZWRUaW1lQ29uZmlnLCB0aW1lUGlja2VyRGlzYWJsZWRUaW1lLCB7XG4gICAgICBvbkNoYW5nZTogb25JbnB1dFNlbGVjdCxcbiAgICAgIGRlZmF1bHRPcGVuVmFsdWU6IHZhbHVlLFxuICAgICAgdmFsdWU6IHNlbGVjdGVkVmFsdWVbaW5kZXhdXG4gICAgfSkpO1xuXG4gICAgdmFyIGRhdGVJbnB1dEVsZW1lbnQgPSBwcm9wcy5zaG93RGF0ZUlucHV0ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0ZUlucHV0LCB7XG4gICAgICBmb3JtYXQ6IGZvcm1hdCxcbiAgICAgIGxvY2FsZTogbG9jYWxlLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICB0aW1lUGlja2VyOiB0aW1lUGlja2VyLFxuICAgICAgZGlzYWJsZWREYXRlOiBkaXNhYmxlZERhdGUsXG4gICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBkaXNhYmxlZFRpbWU6IGRpc2FibGVkVGltZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHNob3dDbGVhcjogZmFsc2UsXG4gICAgICBzZWxlY3RlZFZhbHVlOiBzZWxlY3RlZFZhbHVlW2luZGV4XSxcbiAgICAgIG9uQ2hhbmdlOiBvbklucHV0U2VsZWN0XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IHJhbmdlQ2xhc3NOYW1lICsgJy1wYXJ0ICcgKyByYW5nZUNsYXNzTmFtZSArICctJyArIGRpcmVjdGlvbiB9LFxuICAgICAgZGF0ZUlucHV0RWxlbWVudCxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiB7IG91dGxpbmU6ICdub25lJyB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2FsZW5kYXJIZWFkZXIsIF9leHRlbmRzKHt9LCBuZXdQcm9wcywge1xuICAgICAgICAgIG1vZGU6IG1vZGUsXG4gICAgICAgICAgZW5hYmxlTmV4dDogZW5hYmxlTmV4dCxcbiAgICAgICAgICBlbmFibGVQcmV2OiBlbmFibGVQcmV2LFxuICAgICAgICAgIG9uVmFsdWVDaGFuZ2U6IHByb3BzLm9uVmFsdWVDaGFuZ2UsXG4gICAgICAgICAgb25QYW5lbENoYW5nZTogcHJvcHMub25QYW5lbENoYW5nZSxcbiAgICAgICAgICBkaXNhYmxlZE1vbnRoOiBwcm9wcy5kaXNhYmxlZE1vbnRoXG4gICAgICAgIH0pKSxcbiAgICAgICAgc2hvd1RpbWVQaWNrZXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXRpbWUtcGlja2VyJyB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXRpbWUtcGlja2VyLXBhbmVsJyB9LFxuICAgICAgICAgICAgdGltZVBpY2tlckVsZVxuICAgICAgICAgIClcbiAgICAgICAgKSA6IG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctYm9keScgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGVUYWJsZSwgX2V4dGVuZHMoe30sIG5ld1Byb3BzLCB7XG4gICAgICAgICAgICBob3ZlclZhbHVlOiBob3ZlclZhbHVlLFxuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgIGRhdGVSZW5kZXI6IHByb3BzLmRhdGVSZW5kZXIsXG4gICAgICAgICAgICBvblNlbGVjdDogcHJvcHMub25TZWxlY3QsXG4gICAgICAgICAgICBvbkRheUhvdmVyOiBwcm9wcy5vbkRheUhvdmVyLFxuICAgICAgICAgICAgZGlzYWJsZWREYXRlOiBkaXNhYmxlZERhdGUsXG4gICAgICAgICAgICBzaG93V2Vla051bWJlcjogcHJvcHMuc2hvd1dlZWtOdW1iZXJcbiAgICAgICAgICB9KSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhclBhcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JjLWNhbGVuZGFyQDkuNi4wQHJjLWNhbGVuZGFyL2VzL3JhbmdlLWNhbGVuZGFyL0NhbGVuZGFyUGFydC5qc1xuLy8gbW9kdWxlIGlkID0gODgzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiA3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5TUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9FQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFlQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9IQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
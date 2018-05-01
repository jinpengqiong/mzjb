'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _antd = require('antd');

var _reactColor = require('react-color');

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FormItem = _antd.Form.Item;
var RangePicker = _antd.DatePicker.RangePicker;

var colorData = {
  "COLOR010": "#63b359",
  "COLOR020": "#2c9f67",
  "COLOR030": "#509fc9",
  "COLOR040": "#5885cf",
  "COLOR050": "#9062c0",
  "COLOR060": "#d09a45",
  "COLOR070": "#e4b138",
  "COLOR080": "#ee903c",
  "COLOR081": "#f08500",
  "COLOR082": "#a9d92d",
  "COLOR090": "#dd6549",
  "COLOR100": "#cc463d",
  "COLOR101": "#cf3e36",
  "COLOR102": "#5E6671"
};

var RegistrationForm = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    (0, _classCallCheck3.default)(this, RegistrationForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegistrationForm.__proto__ || (0, _getPrototypeOf2.default)(RegistrationForm)).call(this, props));

    _this.handleColorChange = function (color, event) {
      _this.setState({
        color: color.hex
      });
    };

    _this.validateTitleName = function (rule, value, callback) {
      var form = _this.props.form;
      if (value && value.length > 9) {
        callback('请输入9个字以内的卡券名!');
      }
      callback();
    };

    _this.validateBrandName = function (rule, value, callback) {
      var form = _this.props.form;
      if (value && value.length > 12) {
        callback('请输入12个字以内的商家名称!');
      }
      callback();
    };

    _this.state = {
      color: ''
    };
    return _this;
  }

  (0, _createClass3.default)(RegistrationForm, [{
    key: 'getObjectValues',

    // get obj values as array
    value: function getObjectValues(obj) {
      var values = [];
      for (var property in obj) {
        values.push(obj[property]);
      }return values;
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          md: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          md: { span: 16 }
        }
      };

      var rangeConfig = {
        rules: [{ type: 'array', required: true, message: '请选择卡券使用时间间隔!' }]
      };
      return _react2.default.createElement(_antd.Form, null, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5361\u5238\u540D'
      }), getFieldDecorator('title', {
        rules: [{
          type: 'string', message: '请输入卡券名!'
        }, {
          required: true, message: '请输入9个字以内的卡券名!'
        },, {
          validator: this.validateTitleName
        }]
      })(_react2.default.createElement(_antd.Input, { placeholder: '9\u4E2A\u5B57\u4EE5\u5185\u7684\u5361\u5238\u540D' }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5546\u5BB6\u540D\u79F0'
      }), getFieldDecorator('brandName', {
        rules: [{
          type: 'string', message: '请输入商家名称!'
        }, {
          required: true, message: '请输入12个字以内的商家名称!'
        }, {
          validator: this.validateBrandName
        }]
      })(_react2.default.createElement(_antd.Input, { placeholder: '12\u4E2A\u5B57\u4EE5\u5185\u7684\u5546\u5BB6\u540D\u79F0' }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5361\u5238\u4F7F\u7528\u8BF4\u660E'
      }), getFieldDecorator('desc', {
        rules: [{
          type: 'string', message: '请输入卡券使用说明!'
        }, {
          required: true, message: '请输入卡券使用说明!'
        }]
      })(_react2.default.createElement(_antd.Input, { placeholder: '\u5361\u5238\u4F7F\u7528\u8BF4\u660E' }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u56FE\u7247\u94FE\u63A5'
      }), getFieldDecorator('logoUrl', {
        rules: [{
          type: 'string', message: '请输入商户logo图片链接!'
        }, {
          required: true, message: '请输入商户logo图片链接!'
        }]
      })(_react2.default.createElement(_antd.Input, { placeholder: '\u5546\u6237logo\u56FE\u7247\u94FE\u63A5' }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5361\u5238\u4F7F\u7528\u63D0\u9192'
      }), getFieldDecorator('notice', {
        rules: [{
          type: 'string', message: '请输入卡券使用提醒!'
        }, {
          required: true, message: '卡券使用提醒!'
        }]
      })(_react2.default.createElement(_antd.Input, { placeholder: '\u5361\u5238\u4F7F\u7528\u63D0\u9192' }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u4F7F\u7528\u65F6\u95F4\u8303\u56F4'
      }), getFieldDecorator('range-time-picker', rangeConfig)(_react2.default.createElement(RangePicker, { showTime: true, format: 'YYYY-MM-DD HH:mm:ss', style: { width: "335px" } }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5361\u5238\u5E93\u5B58'
      }), getFieldDecorator('quantity', {
        rules: [{
          required: true, message: '请指定卡券库存!'
        }]
      })(_react2.default.createElement(_antd.Input, { placeholder: '\u5361\u5238\u5E93\u5B58\u6570\u91CF' }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5361\u5238\u989C\u8272'
      }), getFieldDecorator('color', {
        rules: [{
          required: true, message: '请选择卡券颜色!'
        }]
      })(_react2.default.createElement(_reactColor.TwitterPicker, {
        color: this.state.color,
        onChange: this.handleColorChange,
        colors: this.getObjectValues(colorData)
      }))));
    }
  }]);
  return RegistrationForm;
}(_react2.default.Component)) || _class) || _class);

var WrappedForm = _antd.Form.create()(RegistrationForm);
exports.default = WrappedForm;
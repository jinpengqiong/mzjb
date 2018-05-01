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

var _mobxReact = require('mobx-react');

var _index = require('../FileUploader/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FormItem = _antd.Form.Item;
var RegistrationForm = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    (0, _classCallCheck3.default)(this, RegistrationForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegistrationForm.__proto__ || (0, _getPrototypeOf2.default)(RegistrationForm)).call(this, props));

    _this.state = {
      color: ''
    };
    return _this;
  }

  (0, _createClass3.default)(RegistrationForm, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          md: { span: 5 }
        },
        wrapperCol: {
          xs: { span: 24 },
          md: { span: 19 }
        }
      };

      return _react2.default.createElement(_antd.Form, null, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5546\u54C1\u540D\u79F0'
      }), getFieldDecorator('title', {
        rules: [{
          type: 'string', message: '请输入商品名称!'
        }, {
          required: true, message: '请输入商品名称!'
        }]
      })(_react2.default.createElement(_antd.Input, null))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5546\u54C1\u56FE'
      }), getFieldDecorator('mainImage', {
        rules: [{
          type: 'string', message: '请输入商家名称!'
        }]
      })(_react2.default.createElement(_index2.default, null))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u4EF7\u683C'
      }), getFieldDecorator('price', {
        rules: [{
          type: 'string', message: '请输入价格!'
        }, {
          required: true, message: '请输入价格!'
        }]
      })(_react2.default.createElement(_antd.Input, null))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u7B80\u8981\u63CF\u8FF0'
      }), getFieldDecorator('desc', {
        rules: [{
          type: 'string', message: '请输入简要描述!'
        }, {
          required: true, message: '请输入简要描述!'
        }]
      })(_react2.default.createElement(_antd.Input, null))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u94FE\u63A5\u5730\u5740'
      }), getFieldDecorator('detailUrl', {
        rules: [{
          type: 'string', message: '请输入链接地址!'
        }, {
          required: true, message: '请输入链接地址!'
        }]
      })(_react2.default.createElement(_antd.Input, null))));
    }
  }]);
  return RegistrationForm;
}(_react2.default.Component)) || _class) || _class);

var SelfProdForm = _antd.Form.create()(RegistrationForm);
exports.default = SelfProdForm;
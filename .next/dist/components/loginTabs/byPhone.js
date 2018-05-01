'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _antd = require('antd');

var _index = require('_next@4.2.3@next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _graphqlRequest = require('graphql-request');

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FormItem = _antd.Form.Item;

// const uri = 'http://shop.muzhiyun.cn/api/graphiql';
var querySmsCode = '\n  mutation($phone: String!) {\n    smsCode(phone:$phone){\n      result\n  }\n}';
var submitByPhone = '\nmutation ($phone:String!, $code: String!) {\n  smsLogin(phone:$phone, code: $code){\n    accessToken\n    user  {\n        id\n        updatedAt\n        accountid\n        nickname\n        phone\n        role\n        mzAccountid\n    }\n  }\n}\n';

var NormalLoginForm = function (_React$Component) {
  (0, _inherits3.default)(NormalLoginForm, _React$Component);

  function NormalLoginForm(props) {
    (0, _classCallCheck3.default)(this, NormalLoginForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NormalLoginForm.__proto__ || (0, _getPrototypeOf2.default)(NormalLoginForm)).call(this, props));

    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
          (0, _graphqlRequest.request)(_uri2.default, submitByPhone, { phone: values.phone, code: values.SmsCode }).then(function (res) {
            _antd.message.success('登录成功！');
            console.log('res', res);
            localStorage.setItem('accessToken', res.smsLogin.accessToken);
            localStorage.setItem('accountid', res.smsLogin.user.accountid);
            localStorage.setItem('nickname', res.smsLogin.user.nickname);
            localStorage.setItem('role', res.smsLogin.user.role);
            _index2.default.push('/');
          });
        }
      });
    };

    _this.countDown = function () {
      var count = 59;
      _this.setState({ count: count });
      _this.interval = setInterval(function () {
        count -= 1;
        _this.setState({ count: count });
        if (count === 0) {
          _this.setState({ count: false });
          clearInterval(_this.interval);
        }
      }, 1000);
    };

    _this.getSmsCode = function () {
      var values = _this.props.form.getFieldsValue();
      if (_this.isPoneAvailable(values.phone)) {
        _this.countDown();
        (0, _graphqlRequest.request)(_uri2.default, querySmsCode, { phone: values.phone }).then(function (res) {
          if (res.smsCode.result === "OK") {
            _antd.message.success('验证码发送成功！');
          }
        });
      } else {
        _antd.message.error("请输入正确手机号");
      }
    };

    _this.state = {
      count: false
    };
    return _this;
  }

  (0, _createClass3.default)(NormalLoginForm, [{
    key: 'isPoneAvailable',

    //check the phone format
    value: function isPoneAvailable(str) {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(str)) {
        return false;
      } else {
        return true;
      }
    }
    //set code button graify

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      var count = this.state.count;

      return _react2.default.createElement(_antd.Form, { onSubmit: this.handleSubmit }, _react2.default.createElement(FormItem, null, getFieldDecorator('phone', {
        rules: [{ required: true, message: '请输入手机号!' }]
      })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'mobile', style: { color: 'rgba(0,0,0,.25)' } }), placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7' }))), _react2.default.createElement(FormItem, null, _react2.default.createElement(_antd.Row, { gutter: 16 }, _react2.default.createElement(_antd.Col, { span: 15 }, getFieldDecorator('SmsCode', {
        rules: [{ required: true, message: '请输入验证码!' }]
      })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'lock', style: { color: 'rgba(0,0,0,.25)' } }), placeholder: '\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801' }))), _react2.default.createElement(_antd.Col, { span: 9 }, _react2.default.createElement(_antd.Button, { disabled: count, onClick: this.getSmsCode }, count ? count + ' s' : '获取验证码')))), _react2.default.createElement(FormItem, null, _react2.default.createElement(_antd.Row, null, _react2.default.createElement(_antd.Col, { span: 24 }, _react2.default.createElement(_antd.Button, { type: 'primary', htmlType: 'submit', style: { width: '300px' } }, '\u767B\u5F55')))));
    }
  }]);
  return NormalLoginForm;
}(_react2.default.Component);

var LoginFormWithPhone = _antd.Form.create()(NormalLoginForm);
exports.default = LoginFormWithPhone;
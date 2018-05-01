'use strict';

var _style = require('_styled-jsx@2.2.1@styled-jsx\\style.js');

var _style2 = _interopRequireDefault2(_style);

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

// const uri = 'http://testshop.muzhiyun.cn/api/graphiql';

var opts = {
  // custom fetch options
};

var NormalLoginForm = function (_React$Component) {
  (0, _inherits3.default)(NormalLoginForm, _React$Component);

  function NormalLoginForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, NormalLoginForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NormalLoginForm.__proto__ || (0, _getPrototypeOf2.default)(NormalLoginForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
          var mutation = '\n          mutation ($phone:String!, $password: String!) {\n            login(phone:$phone,password:$password){\n              accessToken\n              user  {\n                  id\n                  updatedAt\n                  accountid\n                  nickname\n                  phone\n                  role\n                  mzAccountid\n              }\n            }\n          }\n          ';
          var variables = {
            phone: values.userName,
            password: values.password
          };
          (0, _graphqlRequest.request)(_uri2.default, mutation, variables).then(function (res) {
            _antd.message.success('登录成功！');
            console.log('res', res);
            localStorage.setItem('accessToken', res.login.accessToken);
            localStorage.setItem('accountid', res.login.user.accountid);
            localStorage.setItem('nickname', res.login.user.nickname);
            localStorage.setItem('role', res.login.user.role);
            _index2.default.push('/');
          });
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(NormalLoginForm, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      return _react2.default.createElement(_antd.Form, { onSubmit: this.handleSubmit, className: 'login-form' }, _react2.default.createElement(FormItem, null, getFieldDecorator('userName', {
        rules: [{ required: true, message: '输入用户名或手机号!' }]
      })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'user', style: { color: 'rgba(0,0,0,.25)' } }), placeholder: '\u8F93\u5165\u7528\u6237\u540D\u6216\u624B\u673A\u53F7' }))), _react2.default.createElement(FormItem, null, getFieldDecorator('password', {
        rules: [{ required: true, message: '输入密码!' }]
      })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'lock', style: { color: 'rgba(0,0,0,.25)' } }), type: 'password', placeholder: '\u8F93\u5165\u5BC6\u7801' }))), _react2.default.createElement(FormItem, null, _react2.default.createElement(_antd.Button, { type: 'primary', htmlType: 'submit', style: { width: '300px' } }, '\u767B\u5F55')), _react2.default.createElement('style', { jsx: true }, '\n            .login-form {\n                max-width: 300px;\n            }\n            .login-form-forgot {\n                float: right;\n            }\n            .login-form-button {\n                width: 100%;\n            }\n        '));
    }
  }]);
  return NormalLoginForm;
}(_react2.default.Component);

var LoginFormWithAccount = _antd.Form.create()(NormalLoginForm);
exports.default = LoginFormWithAccount;
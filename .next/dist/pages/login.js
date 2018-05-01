'use strict';

var _style = require('_styled-jsx@2.2.1@styled-jsx\\style.js');

var _style2 = _interopRequireDefault2(_style);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _byPhone = require('../components/loginTabs/byPhone');

var _byPhone2 = _interopRequireDefault(_byPhone);

var _byAccount = require('../components/loginTabs/byAccount');

var _byAccount2 = _interopRequireDefault(_byAccount);

var _index = require('../styles/index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TabPane = _antd.Tabs.TabPane;
/**
 * 定义Login组件
 */

var Login = function (_React$Component) {
  (0, _inherits3.default)(Login, _React$Component);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      requesting: false // 当前是否正在请求服务端接口
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'container', className: 'jsx-1698233613'
      }, _react2.default.createElement('div', {
        className: 'jsx-1698233613' + ' ' + 'login'
      }, _react2.default.createElement('p', {
        className: 'jsx-1698233613'
      }, '\u62C7\u6307\u805A\u5B9D'), _react2.default.createElement(_antd.Tabs, { defaultActiveKey: '1' }, _react2.default.createElement(TabPane, { tab: _react2.default.createElement('span', {
          className: 'jsx-1698233613'
        }, _react2.default.createElement(_antd.Icon, { type: 'user' }), '\u8D26\u53F7\u767B\u5F55'), key: '1' }, _react2.default.createElement(_byAccount2.default, null)), _react2.default.createElement(TabPane, { tab: _react2.default.createElement('span', {
          className: 'jsx-1698233613'
        }, _react2.default.createElement(_antd.Icon, { type: 'mobile' }), '\u624B\u673A\u767B\u5F55'), key: '2' }, _react2.default.createElement(_byPhone2.default, null)))), _react2.default.createElement('style', { jsx: 'true' }, ' ', '\n          .login {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            margin: -150px 0 0 -150px;\n            width: 300px;\n            height: 300px;\n          }\n          \n          .login p {\n            font-family: HiraginoSansGB-W3;\n            font-size: 40px;\n            color: black;\n            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n            text-align: center;\n            padding-bottom: 40px;\n          }\n        '), _react2.default.createElement('style', { jsx: true, global: 'true' }, _index2.default));
    }
  }]);
  return Login;
}(_react2.default.Component);

exports.default = Login;
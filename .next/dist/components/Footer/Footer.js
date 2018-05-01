'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Footer = _antd.Layout.Footer;

var MyFooter = function (_React$Component) {
  (0, _inherits3.default)(MyFooter, _React$Component);

  function MyFooter() {
    (0, _classCallCheck3.default)(this, MyFooter);
    return (0, _possibleConstructorReturn3.default)(this, (MyFooter.__proto__ || (0, _getPrototypeOf2.default)(MyFooter)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyFooter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Footer, { style: { textAlign: 'center' } }, 'Copyright \xA9 2018 \u82F1\u592B\u7F8E\u8FEA\u79D1\u6280\u80A1\u4EFD\u6709\u9650\u516C\u53F8 All rights reserved.');
    }
  }]);
  return MyFooter;
}(_react2.default.Component);

exports.default = MyFooter;
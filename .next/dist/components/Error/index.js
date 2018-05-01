'use strict';

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

var _jsxFileName = 'C:\\Users\\Administrator\\Desktop\\mzjb\\components\\Error\\index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

require('./index.less');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 显示错误信息
 * 可以当404页来用
 */
var Error = function (_React$PureComponent) {
  (0, _inherits3.default)(Error, _React$PureComponent);

  function Error() {
    (0, _classCallCheck3.default)(this, Error);
    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
  }

  (0, _createClass3.default)(Error, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'not-found', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('div', { style: { fontSize: 32 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'frown-o', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, this.props.errorMsg || '404 Not Found'));
    }
  }]);
  return Error;
}(_react2.default.PureComponent);

exports.default = Error;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEVycm9yXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJFcnJvciIsImZvbnRTaXplIiwicHJvcHMiLCJlcnJvck1zZyIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQTs7OztJQUlNLEE7Ozs7Ozs7Ozs7NkJBRUssQUFDUDs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUUsVUFBZCxBQUFZLEFBQVc7b0JBQXZCO3NCQUFBLEFBQTZCO0FBQTdCO3FEQUFtQyxNQUFOLEFBQVc7b0JBQVg7c0JBRC9CLEFBQ0UsQUFBNkIsQUFDN0I7QUFENkI7MkJBQzdCLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBQUssQUFBSyxNQUFMLEFBQVcsWUFIcEIsQUFDRSxBQUVFLEFBQTRCLEFBR2pDOzs7O0VBVGlCLGdCQUFNLEE7O2tCQWFYLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL216amIifQ==
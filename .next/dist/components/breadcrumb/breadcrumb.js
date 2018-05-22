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

var _dec,
    _class,
    _jsxFileName = '/Users/mac/Desktop/mzjb/muzhijubao_web/components/breadcrumb/breadcrumb.js';

var _antd = require('antd');

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MyBreadcrumb = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(MyBreadcrumb, _React$Component);

  function MyBreadcrumb() {
    (0, _classCallCheck3.default)(this, MyBreadcrumb);
    return (0, _possibleConstructorReturn3.default)(this, (MyBreadcrumb.__proto__ || (0, _getPrototypeOf2.default)(MyBreadcrumb)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyBreadcrumb, [{
    key: 'render',
    value: function render() {
      // console.log('props', this.props)
      return _react2.default.createElement(_antd.Breadcrumb, { style: { margin: '16px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement(_antd.Breadcrumb.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, this.props.store.curPagePath === "" ? '选货' : this.props.store.curPagePath));
    }
  }]);
  return MyBreadcrumb;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyBreadcrumb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmpzIl0sIm5hbWVzIjpbIk15QnJlYWRjcnVtYiIsIm9ic2VydmVyIiwibWFyZ2luIiwicHJvcHMiLCJzdG9yZSIsImN1clBhZ2VQYXRoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0ksQUFHcUIsdUJBRHBCLHVCQUFBLEEsQUFBTyw0QkFBVSxXOzs7Ozs7Ozs7OzZCQUVQLEFBQ1A7QUFDQTs2QkFDSyxvQkFBRCxjQUFZLE9BQU8sRUFBRSxRQUFyQixBQUFtQixBQUFVO29CQUE3QjtzQkFBQSxBQUNNO0FBRE47T0FBQSxrQkFDTyxvQkFBRCxXQUFBLEFBQVk7O29CQUFaO3NCQUFBLEFBQWtCO0FBQWxCO0FBQUEsY0FBa0IsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixnQkFBakIsQUFBaUMsS0FBakMsQUFBb0MsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLE1BRmxGLEFBQ0ksQUFDTSxBQUE4RSxBQUd6Rjs7OztFQVJ1QyxnQkFBTSxBO2tCQUEzQixBIiwiZmlsZSI6ImJyZWFkY3J1bWIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9EZXNrdG9wL216amIvbXV6aGlqdWJhb193ZWIifQ==
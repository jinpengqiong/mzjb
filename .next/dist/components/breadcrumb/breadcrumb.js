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
    _jsxFileName = 'C:\\Users\\Administrator\\Desktop\\muzhijubao_web\\components\\breadcrumb\\breadcrumb.js';

var _antd = require('antd');

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MyBreadcrumb = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(MyBreadcrumb, _React$Component);

  function MyBreadcrumb(props) {
    (0, _classCallCheck3.default)(this, MyBreadcrumb);
    return (0, _possibleConstructorReturn3.default)(this, (MyBreadcrumb.__proto__ || (0, _getPrototypeOf2.default)(MyBreadcrumb)).call(this, props));
  }

  (0, _createClass3.default)(MyBreadcrumb, [{
    key: 'render',
    value: function render() {
      // console.log('props', this.props)
      return _react2.default.createElement(_antd.Breadcrumb, { style: { margin: '16px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_antd.Breadcrumb.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, this.props.store.curPagePath === "" ? '选货' : this.props.store.curPagePath));
    }
  }]);
  return MyBreadcrumb;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyBreadcrumb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJyZWFkY3J1bWJcXGJyZWFkY3J1bWIuanMiXSwibmFtZXMiOlsiTXlCcmVhZGNydW1iIiwib2JzZXJ2ZXIiLCJwcm9wcyIsIm1hcmdpbiIsInN0b3JlIiwiY3VyUGFnZVBhdGgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7SSxBQUdxQix1QkFEcEIsdUJBQUEsQSxBQUFPLDRCQUFVLFc7d0NBRWhCOzt3QkFBQSxBQUFhLE9BQU07d0NBQUE7NklBQUEsQUFDWCxBQUNQOzs7Ozs2QkFDUSxBQUNQO0FBQ0E7NkJBQ0ssb0JBQUQsY0FBWSxPQUFPLEVBQUUsUUFBckIsQUFBbUIsQUFBVTtvQkFBN0I7c0JBQUEsQUFDTTtBQUROO09BQUEsa0JBQ08sb0JBQUQsV0FBQSxBQUFZOztvQkFBWjtzQkFBQSxBQUFrQjtBQUFsQjtBQUFBLGNBQWtCLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsZ0JBQWpCLEFBQWlDLEtBQWpDLEFBQW9DLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUZsRixBQUNJLEFBQ00sQUFBOEUsQUFHekY7Ozs7RUFYdUMsZ0JBQU0sQTtrQkFBM0IsQSIsImZpbGUiOiJicmVhZGNydW1iLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9tdXpoaWp1YmFvX3dlYiJ9
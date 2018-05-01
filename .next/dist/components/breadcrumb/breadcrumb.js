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

var _dec, _class;

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
      return _react2.default.createElement(_antd.Breadcrumb, { style: { margin: '16px' } }, _react2.default.createElement(_antd.Breadcrumb.Item, null, '\u9996\u9875'), _react2.default.createElement(_antd.Breadcrumb.Item, null, this.props.store.curPagePath === "首页" ? '' : this.props.store.curPagePath));
    }
  }]);
  return MyBreadcrumb;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyBreadcrumb;
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
      }, this.props.store.curPagePath === "" ? '我的店铺' : this.props.store.curPagePath));
    }
  }]);
  return MyBreadcrumb;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyBreadcrumb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmpzIl0sIm5hbWVzIjpbIk15QnJlYWRjcnVtYiIsIm9ic2VydmVyIiwicHJvcHMiLCJtYXJnaW4iLCJzdG9yZSIsImN1clBhZ2VQYXRoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0ksQUFHcUIsdUJBRHBCLHVCQUFBLEEsQUFBTyw0QkFBVSxXO3dDQUVoQjs7d0JBQUEsQUFBYSxPQUFNO3dDQUFBOzZJQUFBLEFBQ1gsQUFDUDs7Ozs7NkJBQ1EsQUFDUDtBQUNBOzZCQUNLLG9CQUFELGNBQVksT0FBTyxFQUFFLFFBQXJCLEFBQW1CLEFBQVU7b0JBQTdCO3NCQUFBLEFBQ007QUFETjtPQUFBLGtCQUNPLG9CQUFELFdBQUEsQUFBWTs7b0JBQVo7c0JBQUEsQUFBa0I7QUFBbEI7QUFBQSxjQUFrQixBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLGdCQUFqQixBQUFpQyxLQUFqQyxBQUFvQyxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFGcEYsQUFDSSxBQUNNLEFBQWdGLEFBRzNGOzs7O0VBWHVDLGdCQUFNLEE7a0JBQTNCLEEiLCJmaWxlIjoiYnJlYWRjcnVtYi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjL0Rlc2t0b3AvbXpqYi9tdXpoaWp1YmFvX3dlYiJ9
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
    _jsxFileName = '/Users/mac/Desktop/mzjb/muzhijubao_web/components/MyLayout/MyLayout.js';

var _antd = require('antd');

var _Footer = require('../Footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Sider = require('../Sider/Sider');

var _Sider2 = _interopRequireDefault(_Sider);

var _Header = require('../Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _index = require('_next@4.2.3@next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Header = _antd.Layout.Header,
    Sider = _antd.Layout.Sider,
    Content = _antd.Layout.Content;

var SubMenu = _antd.Menu.SubMenu;
var MyLayout = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(MyLayout, _React$Component);

  function MyLayout(props) {
    (0, _classCallCheck3.default)(this, MyLayout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MyLayout.__proto__ || (0, _getPrototypeOf2.default)(MyLayout)).call(this, props));

    _this.state = {
      localStor: null
    };
    return _this;
  }

  (0, _createClass3.default)(MyLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        localStor: localStorage
      });
      this.props.store.getRoleInfo(localStorage.getItem('role'));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_antd.Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_Sider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement(_antd.Layout, { style: { marginLeft: this.props.store.collapsed ? '100px' : '140px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(Content, { style: { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 320 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, this.props.children), _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })));
    }
  }]);
  return MyLayout;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiU2lkZXIiLCJDb250ZW50IiwiU3ViTWVudSIsIk1lbnUiLCJNeUxheW91dCIsIm9ic2VydmVyIiwicHJvcHMiLCJzdGF0ZSIsImxvY2FsU3RvciIsInNldFN0YXRlIiwibG9jYWxTdG9yYWdlIiwic3RvcmUiLCJnZXRSb2xlSW5mbyIsImdldEl0ZW0iLCJtYXJnaW5MZWZ0IiwiY29sbGFwc2VkIiwibWFyZ2luIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJtaW5IZWlnaHQiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0ksQUFOUSxTQUEyQixNLE9BQTNCLEE7SSxBQUFRLFFBQW1CLE0sT0FBbkIsQTtJLEFBQU8sVUFBWSxNLE9BQVosQTs7QUFLdkIsSUFBTSxVQUFVLFdBQWhCLEFBQXFCO0ksQUFLQSxtQkFEcEIsdUJBQUEsQSxBQUFPLDRCQUFVLFc7b0NBRWhCOztvQkFBQSxBQUFhLE9BQU07d0NBQUE7OzBJQUFBLEFBQ1gsQUFDSjs7VUFBQSxBQUFLO2lCQUZVLEFBRWYsQUFBVyxBQUNHO0FBREgsQUFDUDtXQUVQOzs7Ozt3Q0FFbUIsQUFDbEI7V0FBQSxBQUFLO21CQUFMLEFBQWMsQUFDQSxBQUVkO0FBSGMsQUFDWjtXQUVGLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsWUFBWSxhQUFBLEFBQWEsUUFBMUMsQUFBNkIsQUFBcUIsQUFDbkQ7Ozs7NkJBRVEsQUFDUDs2QkFDSyxvQkFBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxnQ0FDRyxRQUFEOztvQkFBQTtzQkFERixBQUNFLEFBQ0Y7QUFERTtBQUFBLDBCQUNELG9CQUFELFVBQVEsT0FBTyxFQUFHLFlBQVksS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFlBQWpCLEFBQTRCLFVBQTFELEFBQWUsQUFBb0Q7b0JBQW5FO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRyxTQUFEOztvQkFBQTtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNDLGNBQUQsV0FBUyxPQUFPLEVBQUUsUUFBRixBQUFVLGFBQWEsU0FBdkIsQUFBZ0MsSUFBSSxZQUFwQyxBQUFnRCxRQUFRLFdBQXhFLEFBQWdCLEFBQW1FO29CQUFuRjtzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BSFYsQUFFRSxBQUNjLEFBRWQseUNBQUMsU0FBRDs7b0JBQUE7c0JBUk4sQUFDSSxBQUVBLEFBS0UsQUFJUDtBQUpPO0FBQUE7Ozs7RUF4QjRCLGdCQUFNLEE7a0JBQXZCLEEiLCJmaWxlIjoiTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9EZXNrdG9wL216amIvbXV6aGlqdWJhb193ZWIifQ==
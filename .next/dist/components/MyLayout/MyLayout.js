'use strict';

var _style = require('_styled-jsx@2.2.1@styled-jsx/style.js');

var _style2 = _interopRequireDefault2(_style);

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

var _breadcrumb = require('../breadcrumb/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

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

    _this.toggle = function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    };

    _this.handleClick = function (e) {
      // console.log('click ', e.key);
      _this.props.store.getCurPagePath(e.key);
    };

    _this.handleLogout = function () {
      var stor = _this.state.localStor;
      // console.log('stor', stor)        
      stor != null && stor.clear();
      _index2.default.push('/login');
      _this.props.store.getShopID('');
      _this.props.store.getRoleInfo('');
    };

    _this.state = {
      collapsed: false,
      curPagePath: '首页'
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
      var _this2 = this;

      return _react2.default.createElement(_antd.Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(Sider, {
        trigger: null,
        collapsed: this.state.collapsed,
        style: { height: '100%', position: 'fixed' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4145058092' + ' ' + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('h2', { style: { textAlign: 'center', color: 'white' }, className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, this.state.collapsed ? _react2.default.createElement('img', { src: '../../static/LOGO.png', style: { width: 20 }, className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }) : '拇指聚宝')), _react2.default.createElement(_antd.Menu, {
        theme: 'dark',
        mode: 'inline',
        onClick: this.handleClick,
        selectedKeys: [this.props.store.curPagePath === "" ? "选货" : this.props.store.curPagePath], __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_antd.Menu.Item, { key: '\u9009\u8D27', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/');
          _index2.default.push('/');
        }, className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'shop', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, '\u9009\u8D27'))), _react2.default.createElement(_antd.Menu.Item, { key: '\u5546\u54C1', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/products');
          _index2.default.push('/products');
          _this2.props.store.getCurPagePath('店铺');
        }, className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'appstore', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, '\u5546\u54C1'))), _react2.default.createElement(_antd.Menu.Item, { key: '\u7D20\u6750', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/resources');
          _index2.default.push('/resources');
        }, className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'picture', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, '\u7D20\u6750'))), _react2.default.createElement(_antd.Menu.Item, { key: '\u8BA2\u5355', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/order');
          _index2.default.push('/order');
        }, className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'shopping-cart', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, '\u8BA2\u5355'))), _react2.default.createElement(_antd.Menu.Item, { key: '\u8BBE\u7F6E', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/settings');
          _index2.default.push('/settings');
        }, className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'setting', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, '\u8BBE\u7F6E'))), this.props.store.userRole && this.props.store.userRole.indexOf('admin') !== -1 && _react2.default.createElement(_antd.Menu.Item, { key: '\u7528\u6237', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/userList');
          _index2.default.push('/userList');
        }, className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'user', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, '\u7528\u6237'))))), _react2.default.createElement(_antd.Layout, { style: { marginLeft: this.state.collapsed ? '100px' : '200px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement(Header, { style: { background: '#fff', padding: 16, marginLeft: this.state.collapsed ? 15 : 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(_antd.Icon, {
        className: 'trigger',
        type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), _react2.default.createElement(_antd.Menu, {
        mode: 'horizontal',
        style: { lineHeight: '45px', float: 'right' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement(SubMenu, { title: _react2.default.createElement('span', {
          className: 'jsx-4145058092',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, '\u4F60\u597D\uFF0C', this.state.localStor != null && localStorage.getItem('nickname')), __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement(_antd.Menu.Item, { key: '1', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement('span', { onClick: this.handleLogout, style: { display: 'block', width: "130px", textAlign: "center" }, className: 'jsx-4145058092',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'logout', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), '\u9000\u51FA\u767B\u5F55'))))), _react2.default.createElement(_breadcrumb2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), _react2.default.createElement(Content, { style: { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 320 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, this.props.children), _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      })), _react2.default.createElement('style', { jsx: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, '\n          .trigger {\n            font-size: 22px;\n            line-height: 64px;\n            cursor: pointer;\n            transition: color .3s;\n          }bgy \xA0cv\n          .trigger:hover {\n            color: #1890ff;\n          }\n\n          .logo {\n            height: 32px;\n            background: rgba(255,255,255,.2);\n            margin: 16px;\n          }\n        '));
    }
  }]);
  return MyLayout;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiU2lkZXIiLCJDb250ZW50IiwiU3ViTWVudSIsIk1lbnUiLCJNeUxheW91dCIsIm9ic2VydmVyIiwicHJvcHMiLCJ0b2dnbGUiLCJzZXRTdGF0ZSIsImNvbGxhcHNlZCIsInN0YXRlIiwiaGFuZGxlQ2xpY2siLCJlIiwic3RvcmUiLCJnZXRDdXJQYWdlUGF0aCIsImtleSIsImhhbmRsZUxvZ291dCIsInN0b3IiLCJsb2NhbFN0b3IiLCJjbGVhciIsIlJvdXRlciIsInB1c2giLCJnZXRTaG9wSUQiLCJnZXRSb2xlSW5mbyIsImN1clBhZ2VQYXRoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhlaWdodCIsInBvc2l0aW9uIiwidGV4dEFsaWduIiwiY29sb3IiLCJ3aWR0aCIsInByZWZldGNoIiwidXNlclJvbGUiLCJpbmRleE9mIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibGluZUhlaWdodCIsImZsb2F0IiwiZGlzcGxheSIsIm1hcmdpbiIsIm1pbkhlaWdodCIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztJQUxRLEEsU0FBMkIsTSxPQUEzQixBO0ksQUFBUSxRQUFtQixNLE8sQUFBbkI7SSxBQUFPLFVBQVksTSxPLEFBQVo7O0FBSXZCLElBQU0sVUFBVSxXQUFoQixBQUFxQjtJLEFBS0EsbUJBRHBCLHVCLEFBQUEsQUFBTyw0QkFBVSxXO29DQUVoQjs7b0JBQUEsQUFBYSxPQUFNO3dDQUFBOzswSUFBQSxBQUNYOztVQURXLEFBY25CLFNBQVMsWUFBTSxBQUNiO1lBQUEsQUFBSzttQkFDUSxDQUFDLE1BQUEsQUFBSyxNQURuQixBQUFjLEFB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
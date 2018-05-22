'use strict';

var _style = require('_styled-jsx@2.2.1@styled-jsx\\style.js');

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
    _jsxFileName = 'C:\\Users\\Administrator\\Desktop\\mz\\components\\MyLayout\\MyLayout.js';

var _antd = require('antd');

var _Footer = require('../Footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _breadcrumb = require('../breadcrumb/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _index = require('_next@4.2.3@next\\dist\\lib\\router\\index.js');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15TGF5b3V0XFxNeUxheW91dC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJTaWRlciIsIkNvbnRlbnQiLCJTdWJNZW51IiwiTWVudSIsIk15TGF5b3V0Iiwib2JzZXJ2ZXIiLCJwcm9wcyIsInRvZ2dsZSIsInNldFN0YXRlIiwiY29sbGFwc2VkIiwic3RhdGUiLCJoYW5kbGVDbGljayIsImUiLCJzdG9yZSIsImdldEN1clBhZ2VQYXRoIiwia2V5IiwiaGFuZGxlTG9nb3V0Iiwic3RvciIsImxvY2FsU3RvciIsImNsZWFyIiwiUm91dGVyIiwicHVzaCIsImdldFNob3BJRCIsImdldFJvbGVJbmZvIiwiY3VyUGFnZVBhdGgiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIndpZHRoIiwicHJlZmV0Y2giLCJ1c2VyUm9sZSIsImluZGV4T2YiLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJsaW5lSGVpZ2h0IiwiZmxvYXQiLCJkaXNwbGF5IiwibWFyZ2luIiwibWluSGVpZ2h0IiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0lBTFEsQSxTQUEyQixNLE9BQTNCLEE7SSxBQUFRLFFBQW1CLE0sTyxBQUFuQjtJLEFBQU8sVUFBWSxNLE8sQUFBWjs7QUFJdkIsSUFBTSxVQUFVLFdBQWhCLEFBQXFCO0ksQUFLQSxtQkFEcEIsdUIsQUFBQSxBQUFPLDRCQUFVLFc7b0NBRWhCOztvQkFBQSxBQUFhLE9BQU07d0NBQUE7OzBJQUFBLEFBQ1g7O1VBRFcsQUFjbkIsU0FBUyxZQUFNLEFBQ2I7WUFBQSxBQUFLO21CQUNRLENBQUMsTUFBQSxBQUFLLE1BRG5CLEFBQWMs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
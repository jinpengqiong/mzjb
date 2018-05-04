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

var _index3 = require('../../styles/index.less');

var _index4 = _interopRequireDefault(_index3);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Header = _antd.Layout.Header,
    Sider = _antd.Layout.Sider,
    Content = _antd.Layout.Content;

var SubMenu = _antd.Menu.SubMenu;
var MenuItemGroup = _antd.Menu.ItemGroup;
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
      console.log('click ', e.key);
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

      return _react2.default.createElement(_antd.Layout, { style: { minHeight: '100vh' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(Sider, {
        trigger: null,
        collapsed: this.state.collapsed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2414516199' + ' ' + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('h2', { style: { textAlign: 'center', color: 'white' }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, this.state.collapsed ? '聚' : '拇指聚宝')), _react2.default.createElement(_antd.Menu, {
        theme: 'dark',
        mode: 'inline',
        onClick: this.handleClick,
        selectedKeys: [this.props.store.curPagePath === "" ? "我的店铺" : this.props.store.curPagePath], __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_antd.Menu.Item, { key: '\u6211\u7684\u5E97\u94FA', __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/');
          _index2.default.push('/');
        }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'shop', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, '\u6211\u7684\u5E97\u94FA'))), this.props.store.shopID && _react2.default.createElement(_antd.Menu.Item, { key: '\u5E97\u94FA\u5546\u54C1', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/products?id=' + _this2.props.store.shopID);
          _index2.default.push('/products?id=' + _this2.props.store.shopID);
          _this2.props.store.getCurPagePath('店铺商品');
        }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'appstore', __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, '\u5E97\u94FA\u5546\u54C1'))), this.props.store.shopID && _react2.default.createElement(_antd.Menu.Item, { key: '\u6211\u7684\u5361\u5238', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/vouchers?id=' + _this2.props.store.shopID);
          _index2.default.push('/vouchers?id=' + _this2.props.store.shopID);
        }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'gift', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, '\u6211\u7684\u5361\u5238'))), this.props.store.shopID && _react2.default.createElement(_antd.Menu.Item, { key: '\u5E7F\u544A\u7BA1\u7406', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/ad');
          _index2.default.push('/ad');
        }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'video-camera', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, '\u5E7F\u544A\u7BA1\u7406'))), this.props.store.shopID && _react2.default.createElement(_antd.Menu.Item, { key: '\u6211\u7684\u7D20\u6750', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/resources');
          _index2.default.push('/resources');
        }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'picture', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, '\u6211\u7684\u7D20\u6750'))), this.props.store.shopID && _react2.default.createElement(_antd.Menu.Item, { key: '\u8BA2\u5355\u7BA1\u7406', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/order');
          _index2.default.push('/order');
        }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'shopping-cart', __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, '\u8BA2\u5355\u7BA1\u7406'))), this.props.store.userRole && this.props.store.userRole.indexOf('admin') !== -1 && _react2.default.createElement(_antd.Menu.Item, { key: '\u7528\u6237\u5217\u8868', __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/userList');
          _index2.default.push('/userList');
        }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'user', __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, '\u7528\u6237\u5217\u8868'))))), _react2.default.createElement(_antd.Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement(Header, { style: { background: '#fff', padding: 16 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement(_antd.Icon, {
        className: 'trigger',
        type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), _react2.default.createElement(_antd.Menu, {
        mode: 'horizontal',
        style: { lineHeight: '45px', float: 'right' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement(SubMenu, { title: _react2.default.createElement('span', {
          className: 'jsx-2414516199',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, '\u4F60\u597D\uFF0C', this.state.localStor != null && localStorage.getItem('nickname')), __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement(_antd.Menu.Item, { key: '1', __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement('span', { onClick: this.handleLogout, style: { display: 'block', width: "130px", textAlign: "center" }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'logout', __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }), '\u9000\u51FA\u767B\u5F55'))))), _react2.default.createElement(_breadcrumb2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }), _react2.default.createElement(Content, { style: { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 320 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, this.props.children), _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      })), _react2.default.createElement('style', { jsx: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, '\n          .trigger {\n            font-size: 22px;\n            line-height: 64px;\n            cursor: pointer;\n            transition: color .3s;\n          }\n          .trigger:hover {\n            color: #1890ff;\n          }\n\n          .logo {\n            height: 32px;\n            background: rgba(255,255,255,.2);\n            margin: 16px;\n          }\n        '), _react2.default.createElement('style', { jsx: true, global: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _index4.default));
    }
  }]);
  return MyLayout;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiU2lkZXIiLCJDb250ZW50IiwiU3ViTWVudSIsIk1lbnUiLCJNZW51SXRlbUdyb3VwIiwiSXRlbUdyb3VwIiwiTXlMYXlvdXQiLCJvYnNlcnZlciIsInByb3BzIiwidG9nZ2xlIiwic2V0U3RhdGUiLCJjb2xsYXBzZWQiLCJzdGF0ZSIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJzdG9yZSIsImdldEN1clBhZ2VQYXRoIiwiaGFuZGxlTG9nb3V0Iiwic3RvciIsImxvY2FsU3RvciIsImNsZWFyIiwiUm91dGVyIiwicHVzaCIsImdldFNob3BJRCIsImdldFJvbGVJbmZvIiwiY3VyUGFnZVBhdGgiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWluSGVpZ2h0IiwidGV4dEFsaWduIiwiY29sb3IiLCJwcmVmZXRjaCIsInNob3BJRCIsInVzZXJSb2xlIiwiaW5kZXhPZiIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibGluZUhlaWdodCIsImZsb2F0IiwiZGlzcGxheSIsIndpZHRoIiwibWFyZ2luIiwiY2hpbGRyZW4iLCJzdHlsZXNoZWV0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7O0ksQUFQUSxTQUEyQixNLE8sQUFBM0I7SSxBQUFRLFFBQW1CLE0sT0FBbkIsQTtJQUFPLEEsVUFBWSxNLE8sQUFBWjs7QUFLdkIsSUFBTSxVQUFVLFdBQWhCLEFBQXFCO0FBQ3JCLElBQU0sZ0JBQWdCLFdBQXRCLEFBQTJCO0ksQUFLTixtQkFEcEIsdUIsQUFBQSxBQUFPLDRCQUFVLFc7b0NBRWhCOztvQkFBQSxBQUFhLE9BQU07d0NBQUE7OzBJQUFBLEFBQ1g7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dUJBQXJGOztvQkFBQTtzQkFBQSxBQUFnRztBQUFoRzt1Q0FBaUcsTUFBRCxRQUFNLE1BQU4sQUFBVztvQkFBWDtzQkFBaEcsQUFBZ0c7QUFBQTtVQVovSCxBQUNFLEFBTUUsQUFJSSxBQUNFLEFBQXFCLEFBSTdCLCtEQUFDLGFBQUQ7O29CQUFBO3NCQWhCRixBQWdCRSxBQUNBO0FBREE7QUFBQSwwQkFDQyxjQUFELFdBQVMsT0FBTyxFQUFFLFFBQUYsQUFBVSxhQUFhLFNBQXZCLEFBQWdDLElBQUksWUFBcEMsQUFBZ0QsUUFBUSxXQUF4RSxBQUFnQixBQUFtRTtvQkFBbkY7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxNQWxCVixBQWlCRSxBQUNjLEFBRWQseUNBQUMsU0FBRDs7b0JBQUE7c0JBdkhGLEFBbUdBLEFBb0JFLEFBRUY7QUFGRTtBQUFBLDJCQUVGLGNBQUEsV0FBTyxLQUFQO29CQUFBO3NCQUFBO0FBQUE7U0F6SEEsQUF5SEEsQUFpQkEsK1lBQUEsY0FBQSxXQUFPLEtBQVAsTUFBVyxRQUFYO29CQUFBO3NCQUFBLEFBQW9CO0FBQXBCO2lCQTNJSixBQUNJLEFBMElBLEFBR0w7Ozs7RUEvS21DLGdCQUFNLEE7a0JBQXZCLEEiLCJmaWxlIjoiTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9EZXNrdG9wL216amIvbXV6aGlqdWJhb193ZWIifQ==
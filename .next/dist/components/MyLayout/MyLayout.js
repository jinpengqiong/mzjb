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
    _jsxFileName = 'C:\\Users\\Administrator\\Desktop\\muzhijubao_web\\components\\MyLayout\\MyLayout.js';

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
        className: 'jsx-2414516199' + ' ' + 'logo',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('h2', { style: { textAlign: 'center', color: 'white' }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, this.state.collapsed ? _react2.default.createElement('img', { src: '../../static/LOGO.png', style: { width: 20 }, className: 'jsx-2414516199',
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
      }, '\u9009\u8D27'))), _react2.default.createElement(_antd.Menu.Item, { key: '\u5546\u54C1', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/products');
          _index2.default.push('/products');
          _this2.props.store.getCurPagePath('店铺');
        }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'appstore', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-2414516199',
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
        }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'picture', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-2414516199',
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
        }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'shopping-cart', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, '\u8BA2\u5355'))), this.props.store.userRole && this.props.store.userRole.indexOf('admin') !== -1 && _react2.default.createElement(_antd.Menu.Item, { key: '\u7528\u6237\u5217\u8868', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/userList');
          _index2.default.push('/userList');
        }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'user', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), _react2.default.createElement('span', {
        className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, '\u7528\u6237'))))), _react2.default.createElement(_antd.Layout, { style: { marginLeft: this.state.collapsed ? '100px' : '200px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(Header, { style: { background: '#fff', padding: 16, marginLeft: this.state.collapsed ? 15 : 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_antd.Icon, {
        className: 'trigger',
        type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), _react2.default.createElement(_antd.Menu, {
        mode: 'horizontal',
        style: { lineHeight: '45px', float: 'right' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(SubMenu, { title: _react2.default.createElement('span', {
          className: 'jsx-2414516199',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, '\u4F60\u597D\uFF0C', this.state.localStor != null && localStorage.getItem('nickname')), __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement(_antd.Menu.Item, { key: '1', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement('span', { onClick: this.handleLogout, style: { display: 'block', width: "130px", textAlign: "center" }, className: 'jsx-2414516199',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'logout', __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), '\u9000\u51FA\u767B\u5F55'))))), _react2.default.createElement(_breadcrumb2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), _react2.default.createElement(Content, { style: { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 320 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, this.props.children), _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      })), _react2.default.createElement('style', { jsx: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, '\n          .trigger {\n            font-size: 22px;\n            line-height: 64px;\n            cursor: pointer;\n            transition: color .3s;\n          }\n          .trigger:hover {\n            color: #1890ff;\n          }\n\n          .logo {\n            height: 32px;\n            background: rgba(255,255,255,.2);\n            margin: 16px;\n          }\n        '));
    }
  }]);
  return MyLayout;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15TGF5b3V0XFxNeUxheW91dC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJMYXlvdXQiLCJTaWRlciIsIkNvbnRlbnQiLCJTdWJNZW51IiwiTWVudSIsIk15TGF5b3V0Iiwib2JzZXJ2ZXIiLCJwcm9wcyIsInRvZ2dsZSIsInNldFN0YXRlIiwiY29sbGFwc2VkIiwic3RhdGUiLCJoYW5kbGVDbGljayIsImUiLCJzdG9yZSIsImdldEN1clBhZ2VQYXRoIiwia2V5IiwiaGFuZGxlTG9nb3V0Iiwic3RvciIsImxvY2FsU3RvciIsImNsZWFyIiwiUm91dGVyIiwicHVzaCIsImdldFNob3BJRCIsImdldFJvbGVJbmZvIiwiY3VyUGFnZVBhdGgiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIndpZHRoIiwicHJlZmV0Y2giLCJ1c2VyUm9sZSIsImluZGV4T2YiLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJsaW5lSGVpZ2h0IiwiZmxvYXQiLCJkaXNwbGF5IiwibWFyZ2luIiwibWluSGVpZ2h0IiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0lBTFEsQSxTQUEyQixNLE8sQUFBM0I7SSxBQUFRLFFBQW1CLE0sT0FBbkIsQTtJLEFBQU8sVUFBWSxNLE8sQUFBWjs7QUFJdkIsSUFBTSxVQUFVLFdBQWhCLEFBQXFCO0ksQUFLQSxtQkFEcEIsdUJBQUEsQUFBTyxBLDRCQUFVLFc7b0NBRWhCOztvQkFBQSxBQUFhLE9BQU07d0NBQUE7OzBJQUFBLEFBQ1g7O1VBRFcsQUFjbkIsU0FBUyxZQUFNLEFBQ2I7WUFBQSxBQUFLO21CQUNRLENBQUMsTUFBQSxBQUFLLE1BRG5CLEFBQWMs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Qjt5QkFBcUIsY0FBQSxVQUFNLFNBQVMsS0FBZixBQUFvQixjQUFjLE9BQU8sRUFBRSxTQUFGLEFBQVcsU0FBUSxPQUFuQixBQUF5QixTQUFTLFdBQTNFLEFBQXlDLEFBQTRDLHVCQUFyRjs7b0JBQUE7c0JBQUEsQUFBZ0c7QUFBaEc7dUNBQWlHLE1BQUQsUUFBTSxNQUFOLEFBQVc7b0JBQVg7c0JBQWhHLEFBQWdHO0FBQUE7VUFaL0gsQUFDRSxBQU1FLEFBSUksQUFDRSxBQUFxQixBQUk3QiwrREFBQyxhQUFEOztvQkFBQTtzQkFoQkYsQUFnQkUsQUFDQTtBQURBO0FBQUEsMEJBQ0MsY0FBRCxXQUFTLE9BQU8sRUFBRSxRQUFGLEFBQVUsYUFBYSxTQUF2QixBQUFnQyxJQUFJLFlBQXBDLEFBQWdELFFBQVEsV0FBeEUsQUFBZ0IsQUFBbUU7b0JBQW5GO3NCQUFBLEFBQ0c7QUFESDtjQUNHLEFBQUssTUFsQlYsQUFpQkUsQUFDYyxBQUVkLHlDQUFDLFNBQUQ7O29CQUFBO3NCQXJGRixBQWlFQSxBQW9CRSxBQUVGO0FBRkU7QUFBQSwyQkFFRixjQUFBLFdBQU8sS0FBUDtvQkFBQTtzQkFBQTtBQUFBO1NBeEZKLEFBQ0ksQUF1RkEsQUFtQkw7Ozs7RUE1SW1DLGdCQUFNLEE7a0JBQXZCLEEiLCJmaWxlIjoiTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL211emhpanViYW9fd2ViIn0=
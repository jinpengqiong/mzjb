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

var _dec, _class;

var _antd = require('antd');

var _Footer = require('../Footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _breadcrumb = require('../breadcrumb/breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _index = require('_next@4.2.3@next\\dist\\lib\\router\\index.js');

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

      // console.log('state', this.state)
      return _react2.default.createElement(_antd.Layout, { style: { minHeight: '100vh' } }, _react2.default.createElement(Sider, {
        trigger: null,
        collapsed: this.state.collapsed
      }, _react2.default.createElement('div', {
        className: 'jsx-2414516199' + ' ' + 'logo'
      }, _react2.default.createElement('h2', { style: { textAlign: 'center', color: 'white' }, className: 'jsx-2414516199'
      }, this.state.collapsed ? '聚' : '拇指聚宝')), _react2.default.createElement(_antd.Menu, {
        theme: 'dark',
        mode: 'inline',
        onClick: this.handleClick,
        selectedKeys: [this.props.store.curPagePath === "" ? "首页" : this.props.store.curPagePath] }, _react2.default.createElement(_antd.Menu.Item, { key: '\u9996\u9875' }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/');
          _index2.default.push('/');
        }, className: 'jsx-2414516199'
      }, _react2.default.createElement(_antd.Icon, { type: 'home' }), _react2.default.createElement('span', {
        className: 'jsx-2414516199'
      }, '\u9996\u9875'))), _react2.default.createElement(_antd.Menu.Item, { key: '\u6211\u7684\u5E97\u94FA' }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/shops');
          _index2.default.push('/shops');
        }, className: 'jsx-2414516199'
      }, _react2.default.createElement(_antd.Icon, { type: 'shop' }), _react2.default.createElement('span', {
        className: 'jsx-2414516199'
      }, '\u6211\u7684\u5E97\u94FA'))), this.props.store.shopID && _react2.default.createElement(_antd.Menu.Item, { key: '\u5E97\u94FA\u5546\u54C1' }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/products?id=' + _this2.props.store.shopID);
          _index2.default.push('/products?id=' + _this2.props.store.shopID);
        }, className: 'jsx-2414516199'
      }, _react2.default.createElement(_antd.Icon, { type: 'appstore' }), _react2.default.createElement('span', {
        className: 'jsx-2414516199'
      }, '\u5E97\u94FA\u5546\u54C1'))), this.props.store.shopID && _react2.default.createElement(_antd.Menu.Item, { key: '\u6211\u7684\u5361\u5238' }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/vouchers?id=' + _this2.props.store.shopID);
          _index2.default.push('/vouchers?id=' + _this2.props.store.shopID);
        }, className: 'jsx-2414516199'
      }, _react2.default.createElement(_antd.Icon, { type: 'gift' }), _react2.default.createElement('span', {
        className: 'jsx-2414516199'
      }, '\u6211\u7684\u5361\u5238'))), this.props.store.shopID && _react2.default.createElement(_antd.Menu.Item, { key: '\u5E7F\u544A\u7BA1\u7406' }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/ad');
          _index2.default.push('/ad');
        }, className: 'jsx-2414516199'
      }, _react2.default.createElement(_antd.Icon, { type: 'video-camera' }), _react2.default.createElement('span', {
        className: 'jsx-2414516199'
      }, '\u5E7F\u544A\u7BA1\u7406'))), this.props.store.shopID && _react2.default.createElement(_antd.Menu.Item, { key: '\u6211\u7684\u7D20\u6750' }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/resources');
          _index2.default.push('/resources');
        }, className: 'jsx-2414516199'
      }, _react2.default.createElement(_antd.Icon, { type: 'picture' }), _react2.default.createElement('span', {
        className: 'jsx-2414516199'
      }, '\u6211\u7684\u7D20\u6750'))), this.props.store.shopID && _react2.default.createElement(_antd.Menu.Item, { key: '\u8BA2\u5355\u7BA1\u7406' }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/order');
          _index2.default.push('/order');
        }, className: 'jsx-2414516199'
      }, _react2.default.createElement(_antd.Icon, { type: 'shopping-cart' }), _react2.default.createElement('span', {
        className: 'jsx-2414516199'
      }, '\u8BA2\u5355\u7BA1\u7406'))), this.props.store.userRole && this.props.store.userRole.indexOf('admin') !== -1 && _react2.default.createElement(_antd.Menu.Item, { key: '\u7528\u6237\u5217\u8868' }, _react2.default.createElement('div', { onClick: function onClick() {
          _index2.default.prefetch('/userList');
          _index2.default.push('/userList');
        }, className: 'jsx-2414516199'
      }, _react2.default.createElement(_antd.Icon, { type: 'user' }), _react2.default.createElement('span', {
        className: 'jsx-2414516199'
      }, '\u7528\u6237\u5217\u8868'))))), _react2.default.createElement(_antd.Layout, null, _react2.default.createElement(Header, { style: { background: '#fff', padding: 16 } }, _react2.default.createElement(_antd.Icon, {
        className: 'trigger',
        type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
        onClick: this.toggle
      }), _react2.default.createElement(_antd.Menu, {
        mode: 'horizontal',
        style: { lineHeight: '45px', float: 'right' }
      }, _react2.default.createElement(SubMenu, { title: _react2.default.createElement('span', {
          className: 'jsx-2414516199'
        }, '\u4F60\u597D\uFF0C', this.state.localStor != null && localStorage.getItem('nickname')) }, _react2.default.createElement(_antd.Menu.Item, { key: '1' }, _react2.default.createElement('span', { onClick: this.handleLogout, style: { display: 'block', width: "130px", textAlign: "center" }, className: 'jsx-2414516199'
      }, _react2.default.createElement(_antd.Icon, { type: 'logout' }), '\u9000\u51FA\u767B\u5F55'))))), _react2.default.createElement(_breadcrumb2.default, null), _react2.default.createElement(Content, { style: { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 320 } }, this.props.children), _react2.default.createElement(_Footer2.default, null)), _react2.default.createElement('style', { jsx: true }, '\n          .trigger {\n            font-size: 22px;\n            line-height: 64px;\n            cursor: pointer;\n            transition: color .3s;\n          }\n          .trigger:hover {\n            color: #1890ff;\n          }\n\n          .logo {\n            height: 32px;\n            background: rgba(255,255,255,.2);\n            margin: 16px;\n          }\n        '), _react2.default.createElement('style', { jsx: true, global: true }, _index4.default));
    }
  }]);
  return MyLayout;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyLayout;
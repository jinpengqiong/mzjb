'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _MyLayout = require('../components/MyLayout/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _adlist = require('../components/adManagement/adlist');

var _adlist2 = _interopRequireDefault(_adlist);

var _adPlaylists = require('../components/adManagement/adPlaylists');

var _adPlaylists2 = _interopRequireDefault(_adPlaylists);

var _index = require('_next@4.2.3@next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _mobxReact = require('mobx-react');

var _store = require('../store');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TabPane = _antd.Tabs.TabPane;

var Products = function (_React$Component) {
  (0, _inherits3.default)(Products, _React$Component);
  (0, _createClass3.default)(Products, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var isServer = !!req;
      var store = (0, _store.initStore)(isServer);
      return { isServer: isServer };
    }
  }]);

  function Products(props) {
    (0, _classCallCheck3.default)(this, Products);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Products.__proto__ || (0, _getPrototypeOf2.default)(Products)).call(this, props));

    _this.store = (0, _store.initStore)(props.isServer);
    return _this;
  }

  (0, _createClass3.default)(Products, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null) {
        _index2.default.push('/login');
      } else if (this.store.shopID === null) {
        _index2.default.push('/shops');
      }
    }
  }, {
    key: 'callback',
    value: function callback(key) {
      console.log(key);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_mobxReact.Provider, { store: this.store }, _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement(_antd.Tabs, { onChange: this.callback, type: 'card' }, _react2.default.createElement(TabPane, { tab: '\u5E7F\u544A\u5217\u8868', key: '1' }, _react2.default.createElement(_adlist2.default, null)), _react2.default.createElement(TabPane, { tab: '\u5E7F\u544A\u64AD\u5355', key: '2' }, _react2.default.createElement(_adPlaylists2.default, null)))));
    }
  }]);
  return Products;
}(_react2.default.Component);

exports.default = Products;
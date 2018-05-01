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

var _possibleConstructorReturn2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _MyLayout = require('../components/MyLayout/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _mobxReact = require('mobx-react');

var _store = require('../store');

var _index = require('_next@4.2.3@next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MainPage = function (_React$Component) {
  (0, _inherits3.default)(MainPage, _React$Component);
  (0, _createClass3.default)(MainPage, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var isServer = !!req;
      var store = (0, _store.initStore)(isServer);
      return { isServer: isServer };
    }
  }]);

  function MainPage(props) {
    (0, _classCallCheck3.default)(this, MainPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MainPage.__proto__ || (0, _getPrototypeOf2.default)(MainPage)).call(this, props));

    _this.store = (0, _store.initStore)(props.isServer);
    return _this;
  }

  (0, _createClass3.default)(MainPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null) {
        _index2.default.push('/login');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_mobxReact.Provider, { store: this.store }, _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('div', {
        className: 'jsx-2601635149'
      }, _react2.default.createElement('h1', {
        className: 'jsx-2601635149' + ' ' + 'welcome-text'
      }, '\u6B22\u8FCE\u56DE\u5230\u805A\u5B9D\u5546\u57CE\uFF0C\u6709\u4EC0\u4E48\u53EF\u4EE5\u6548\u52B3\u7684\u5417\uFF1F')), _react2.default.createElement('style', { jsx: true }, '\n              .welcome-text {\n                color: purple;\n              }\n            ')));
    }
  }]);
  return MainPage;
}(_react2.default.Component);

exports.default = MainPage;
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

var _MyLayout = require('../components/MyLayout/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _vouchersList = require('../components/vouchersList/vouchersList');

var _vouchersList2 = _interopRequireDefault(_vouchersList);

var _mobxReact = require('mobx-react');

var _store = require('../store');

var _index = require('_next@4.2.3@next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var MyVouchers = function (_React$Component) {
  (0, _inherits3.default)(MyVouchers, _React$Component);
  (0, _createClass3.default)(MyVouchers, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var id = _ref.query.id,
          req = _ref.req;

      var isServer = !!req;
      var store = (0, _store.initStore)(isServer);
      return { shopID: id, isServer: isServer };
    }
  }]);

  function MyVouchers(props) {
    (0, _classCallCheck3.default)(this, MyVouchers);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MyVouchers.__proto__ || (0, _getPrototypeOf2.default)(MyVouchers)).call(this, props));

    _this.store = (0, _store.initStore)(props.isServer);
    return _this;
  }

  (0, _createClass3.default)(MyVouchers, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null) {
        _index2.default.push('/login');
      } else if (this.props.shopID === null) {
        _index2.default.push('/shops');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_mobxReact.Provider, { store: this.store }, _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement(_vouchersList2.default, { shopID: this.props.shopID })));
    }
  }]);
  return MyVouchers;
}(_react2.default.Component);

exports.default = MyVouchers;
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

var _possibleConstructorReturn2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/mac/Desktop/mzjb/muzhijubao_web/pages/shops.js?entry';


var _link = require('_next@4.2.3@next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _MyLayout = require('../components/MyLayout/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _index = require('../components/MyShops/index');

var _index2 = _interopRequireDefault(_index);

var _mobxReact = require('mobx-react');

var _store = require('../store');

var _index3 = require('_next@4.2.3@next/dist/lib/router/index.js');

var _index4 = _interopRequireDefault(_index3);

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
        _index4.default.push('/login');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_mobxReact.Provider, { store: this.store, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_MyLayout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_index2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })));
    }
  }]);
  return MainPage;
}(_react2.default.Component);

exports.default = MainPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Nob3BzLmpzIl0sIm5hbWVzIjpbIk1haW5QYWdlIiwicmVxIiwiaXNTZXJ2ZXIiLCJzdG9yZSIsInByb3BzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlJvdXRlciIsInB1c2giLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0ksQUFDcUI7Ozs7MENBQ2M7VUFBUCxBQUFPLFdBQVAsQUFBTyxBQUMvQjs7VUFBTSxXQUFXLENBQUMsQ0FBbEIsQUFBbUIsQUFDbkI7VUFBTSxRQUFRLHNCQUFkLEFBQWMsQUFBVSxBQUN4QjthQUFPLEVBQUUsVUFBVCxBQUFPLEFBQ1I7QUFDRDs7O29CQUFBLEFBQWEsT0FBTzt3Q0FBQTs7MElBQUEsQUFDWixBQUNOOztVQUFBLEFBQUssUUFBUSxzQkFBVSxNQUZMLEFBRWxCLEFBQWEsQUFBZ0I7V0FDOUI7Ozs7O3dDQUVrQixBQUNqQjtVQUFHLENBQUMsYUFBQSxBQUFhLFFBQWQsQUFBQyxBQUFxQixrQkFBa0IsYUFBQSxBQUFhLFFBQWIsQUFBcUIsbUJBQWhFLEFBQW1GLE1BQU0sQUFDdkY7d0JBQUEsQUFBTyxLQUFQLEFBQVksQUFDYjtBQUNGOzs7OzZCQUVTLEFBQ1I7NkJBQ0cseUJBQUQsWUFBVSxPQUFPLEtBQWpCLEFBQXNCO29CQUF0QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyx5QkFBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsdUNBQ0csUUFBRDs7b0JBQUE7c0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFJUDtBQUpPO0FBQUE7Ozs7RUFyQjRCLGdCQUFNLEE7O2tCQUF2QixBIiwiZmlsZSI6InNob3BzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRGVza3RvcC9tempiL211emhpanViYW9fd2ViIn0=
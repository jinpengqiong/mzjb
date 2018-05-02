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

var _jsxFileName = '/Users/mac/Desktop/mzjb/muzhijubao_web/pages/products.js?entry';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _tableComponent = require('../components/DBTable/tableComponent');

var _tableComponent2 = _interopRequireDefault(_tableComponent);

var _mobxReact = require('mobx-react');

var _store = require('../store');

var _index = require('_next@4.2.3@next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Products = function (_React$Component) {
  (0, _inherits3.default)(Products, _React$Component);
  (0, _createClass3.default)(Products, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var id = _ref.query.id,
          req = _ref.req;

      var isServer = !!req;
      var store = (0, _store.initStore)(isServer);
      return { shopID: id, isServer: isServer };
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
      } else if (this.props.shopID === null) {
        _index2.default.push('/shops');
      } else {
        this.store.getShopID(parseInt(this.props.shopID));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_mobxReact.Provider, { store: this.store, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_MyLayout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_tableComponent2.default, { shopID: this.props.shopID, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })));
    }
  }]);
  return Products;
}(_react2.default.Component);

exports.default = Products;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2R1Y3RzLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RzIiwiaWQiLCJxdWVyeSIsInJlcSIsImlzU2VydmVyIiwic3RvcmUiLCJzaG9wSUQiLCJwcm9wcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwiZ2V0U2hvcElEIiwicGFyc2VJbnQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFHcUIsQTs7OzswQ0FDNkI7VUFBYixBQUFhLFVBQXRCLEFBQXNCLE1BQWIsQUFBYTtVQUFQLEFBQU8sV0FBUCxBQUFPLEFBQzlDOztVQUFNLFdBQVcsQ0FBQyxDQUFsQixBQUFtQixBQUNuQjtVQUFNLFFBQVEsc0JBQWQsQUFBYyxBQUFVLEFBQ3hCO2FBQU8sRUFBRSxRQUFGLEFBQVcsSUFBSSxVQUF0QixBQUFPLEFBQ1I7QUFDRDs7O29CQUFBLEFBQWEsT0FBTzt3Q0FBQTs7MElBQUEsQUFDWixBQUNOOztVQUFBLEFBQUssUUFBUSxzQkFBVSxNQUZMLEFBRWxCLEFBQWEsQUFBZ0I7V0FDOUI7Ozs7O3dDQUdrQixBQUNqQjtVQUFHLENBQUMsYUFBQSxBQUFhLFFBQWQsQUFBQyxBQUFxQixrQkFBa0IsYUFBQSxBQUFhLFFBQWIsQUFBcUIsbUJBQWhFLEFBQW1GLE1BQU0sQUFDdkY7d0JBQUEsQUFBTyxLQUFQLEFBQVksQUFDYjtBQUZELGlCQUVTLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBZCxBQUF5QixNQUFLLEFBQ2xDO3dCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ2I7QUFGSyxPQUFBLE1BRUQsQUFDSDthQUFBLEFBQUssTUFBTCxBQUFXLFVBQVUsU0FBUyxLQUFBLEFBQUssTUFBbkMsQUFBcUIsQUFBb0IsQUFDMUM7QUFDRjs7Ozs2QkFDUyxBQUNSOzZCQUNDLHlCQUFELFlBQVUsT0FBTyxLQUFqQixBQUFzQjtvQkFBdEI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0cseUJBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHVDQUNHLGlCQUFELFdBQVcsUUFBUSxLQUFBLEFBQUssTUFBeEIsQUFBOEI7b0JBQTlCO3NCQUhKLEFBQ0EsQUFDRSxBQUNFLEFBSUw7QUFKSzs7Ozs7RUF6QjhCLGdCQUFNLEE7O2tCQUF2QixBIiwiZmlsZSI6InByb2R1Y3RzLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRGVza3RvcC9tempiL211emhpanViYW9fd2ViIn0=
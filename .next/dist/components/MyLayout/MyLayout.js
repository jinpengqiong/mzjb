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

var _Sider = require('../Sider/Sider');

var _Sider2 = _interopRequireDefault(_Sider);

var _Header = require('../Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _index = require('_next@4.2.3@next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _mobxReact = require('mobx-react');

var _zh_CN = require('antd/lib/locale-provider/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

require('moment/locale/zh-cn');

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

    _this.state = {
      localStor: null
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
      return _react2.default.createElement(_antd.LocaleProvider, { locale: _zh_CN2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_antd.Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_Sider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement(_antd.Layout, { style: { marginLeft: this.props.store.collapsed ? '100px' : '140px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement(Content, { style: { margin: '24px 16px', padding: 24, background: '#fff', minHeight: 320 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, this.props.children), _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }))));
    }
  }]);
  return MyLayout;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiTGF5b3V0IiwiU2lkZXIiLCJDb250ZW50IiwiU3ViTWVudSIsIk1lbnUiLCJNeUxheW91dCIsIm9ic2VydmVyIiwicHJvcHMiLCJzdGF0ZSIsImxvY2FsU3RvciIsInNldFN0YXRlIiwibG9jYWxTdG9yYWdlIiwic3RvcmUiLCJnZXRSb2xlSW5mbyIsImdldEl0ZW0iLCJ6aF9DTiIsIm1hcmdpbkxlZnQiLCJjb2xsYXBzZWQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIm1pbkhlaWdodCIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7OztJQVRRLEEsU0FBMkIsTSxPLEFBQTNCO0ksQUFBUSxRQUFtQixNLE9BQW5CLEE7SSxBQUFPLFVBQVksTSxPQUFaLEE7O0FBS3ZCLElBQU0sVUFBVSxXQUFoQixBQUFxQjtJLEFBT0EsbUJBRHBCLHVCQUFBLEFBQU8sQSw0QkFBVSxXO29DQUVoQjs7b0JBQUEsQUFBYSxPQUFNO3dDQUFBOzswSUFBQSxBQUNYLEFBQ0o7O1VBQUEsQUFBSztpQkFGVSxBQUVmLEFBQVcsQUFDRztBQURILEFBQ1A7V0FFUDs7Ozs7d0NBRW1CLEFBQ2xCO1dBQUEsQUFBSzttQkFBTCxBQUFjLEFBQ0EsQUFFZDtBQUhjLEFBQ1o7V0FFRixBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFlBQVksYUFBQSxBQUFhLFFBQTFDLEFBQTZCLEFBQXFCLEFBQ25EOzs7OzZCQUVRLEFBQ1A7NkJBQ0csb0JBQUQsa0JBQWdCLFFBQVEsUUFBeEI7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csb0JBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHVDQUNHLFFBQUQ7O29CQUFBO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0Msb0JBQUQsVUFBUSxPQUFPLEVBQUcsWUFBWSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsWUFBakIsQUFBNEIsVUFBMUQsQUFBZSxBQUFvRDtvQkFBbkU7c0JBQUEsQUFDRTtBQURGO3VDQUNHLFNBQUQ7O29CQUFBO3NCQURGLEFBQ0UsQUFDRTtBQURGO0FBQUEsMEJBQ0csY0FBRCxXQUFTLE9BQU8sRUFBRSxRQUFGLEFBQVUsYUFBYSxTQUF2QixBQUFnQyxJQUFJLFlBQXBDLEFBQWdELFFBQVEsV0FBeEUsQUFBZ0IsQUFBbUU7b0JBQW5GO3NCQUFBLEFBQ0c7QUFESDtjQUNHLEFBQUssTUFIWixBQUVJLEFBQ2MsQUFFaEIseUNBQUMsU0FBRDs7b0JBQUE7c0JBVFIsQUFDRSxBQUNFLEFBRUUsQUFLRSxBQUtUO0FBTFM7QUFBQTs7OztFQXpCMEIsZ0JBQU0sQTtrQkFBdkIsQSIsImZpbGUiOiJNeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjL0Rlc2t0b3AvbXpqYi9tdXpoaWp1YmFvX3dlYiJ9
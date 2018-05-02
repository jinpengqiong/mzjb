'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
    _jsxFileName = '/Users/mac/Desktop/mzjb/muzhijubao_web/components/DBTable/selfProdForm.js';

var _antd = require('antd');

var _mobxReact = require('mobx-react');

var _index = require('../FileUploader/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FormItem = _antd.Form.Item;
var RegistrationForm = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    (0, _classCallCheck3.default)(this, RegistrationForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegistrationForm.__proto__ || (0, _getPrototypeOf2.default)(RegistrationForm)).call(this, props));

    _this.state = {
      color: ''
    };
    return _this;
  }

  (0, _createClass3.default)(RegistrationForm, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          md: { span: 5 }
        },
        wrapperCol: {
          xs: { span: 24 },
          md: { span: 19 }
        }
      };

      return _react2.default.createElement(_antd.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5546\u54C1\u540D\u79F0',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), getFieldDecorator('title', {
        rules: [{
          type: 'string', message: '请输入商品名称!'
        }, {
          required: true, message: '请输入商品名称!'
        }]
      })(_react2.default.createElement(_antd.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5546\u54C1\u56FE',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), getFieldDecorator('mainImage', {
        rules: [{
          type: 'string', message: '请输入商家名称!'
        }]
      })(_react2.default.createElement(_index2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u4EF7\u683C',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), getFieldDecorator('price', {
        rules: [{
          type: 'string', message: '请输入价格!'
        }, {
          required: true, message: '请输入价格!'
        }]
      })(_react2.default.createElement(_antd.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u7B80\u8981\u63CF\u8FF0',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), getFieldDecorator('desc', {
        rules: [{
          type: 'string', message: '请输入简要描述!'
        }, {
          required: true, message: '请输入简要描述!'
        }]
      })(_react2.default.createElement(_antd.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u94FE\u63A5\u5730\u5740',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), getFieldDecorator('detailUrl', {
        rules: [{
          type: 'string', message: '请输入链接地址!'
        }, {
          required: true, message: '请输入链接地址!'
        }]
      })(_react2.default.createElement(_antd.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }))));
    }
  }]);
  return RegistrationForm;
}(_react2.default.Component)) || _class) || _class);

var SelfProdForm = _antd.Form.create()(RegistrationForm);
exports.default = SelfProdForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvREJUYWJsZS9zZWxmUHJvZEZvcm0uanMiXSwibmFtZXMiOlsiRm9ybUl0ZW0iLCJGb3JtIiwiSXRlbSIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJvYnNlcnZlciIsInByb3BzIiwic3RhdGUiLCJjb2xvciIsImdldEZpZWxkRGVjb3JhdG9yIiwiZm9ybSIsImZvcm1JdGVtTGF5b3V0IiwibGFiZWxDb2wiLCJ4cyIsInNwYW4iLCJtZCIsIndyYXBwZXJDb2wiLCJydWxlcyIsInR5cGUiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlNlbGZQcm9kRm9ybSIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7OztBQUZBLElBQU0sV0FBVyxXQUFqQixBQUFzQjtJQUtoQixBLDJCQURMLHVCQUFBLEFBQU8sQSw0QkFBVSxXOzRDQUVkOzs0QkFBQSxBQUFZLE9BQU87d0NBQUE7OzBKQUFBLEFBQ1QsQUFDTjs7VUFBQSxBQUFLO2FBRlUsQUFFZixBQUFhLEFBQ0o7QUFESSxBQUNYO1dBRUg7Ozs7OzZCQUdJO1VBQUEsQUFDQyxvQkFBc0IsS0FBQSxBQUFLLE1BRDVCLEFBQ2tDLEtBRGxDLEFBQ0MsQUFFUjs7VUFBTTs7Y0FFRSxFQUFFLE1BREUsQUFDSixBQUFRLEFBQ1o7Y0FBSSxFQUFFLE1BSGEsQUFDWCxBQUVKLEFBQVEsQUFFZDtBQUpVLEFBQ1I7O2NBSUksRUFBRSxNQURJLEFBQ04sQUFBUSxBQUNaO2NBQUksRUFBRSxNQVBWLEFBQXVCLEFBS1QsQUFFTixBQUFRLEFBS2hCO0FBUGMsQUFDVjtBQU5tQixBQUNyQjs7NkJBWUMsb0JBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0csY0FBRCxxQ0FBQSxBQUNNO2VBRE4sQUFFUTs7b0JBRlI7c0JBQUEsQUFJRztBQUpIO0FBRUUsNEJBRUMsQUFBa0I7O2dCQUNULEFBQ0EsVUFBVSxTQURYLEFBQUMsQUFDbUI7QUFEbkIsQUFDTixTQURLO29CQUVKLEFBQ1MsTUFBTSxTQUpuQixBQUEyQixBQUNuQixBQUVKLEFBQ3dCO0FBRHhCLEFBQ0Q7QUFKd0IsQUFDMUIsdUNBT0MsTUFBRDs7b0JBQUE7c0JBYk4sQUFDRSxBQUlHLEFBUUMsQUFHSjtBQUhJO0FBQUEsT0FBQSxxQkFHSCxjQUFELHFDQUFBLEFBQ007ZUFETixBQUVROztvQkFGUjtzQkFBQSxBQUlHO0FBSkg7QUFFRSw0QkFFQyxBQUFrQjs7Z0JBQ1QsQUFDQSxVQUFVLFNBRm5CLEFBQStCLEFBQ3ZCLEFBQUMsQUFDbUI7QUFEbkIsQUFDTixTQURLO0FBRHVCLEFBQzlCLHVDQUtDLFFBQUQ7O29CQUFBO3NCQTFCTixBQWdCRSxBQUlHLEFBTUMsQUFHSjtBQUhJO0FBQUEsT0FBQSxxQkFHSCxjQUFELHFDQUFBLEFBQ007ZUFETixBQUVROztvQkFGUjtzQkFBQSxBQUlHO0FBSkg7QUFFRSw0QkFFQyxBQUFrQjs7Z0JBQ1QsQUFDQSxVQUFVLFNBRFgsQUFBQyxBQUNtQjtBQURuQixBQUNOLFNBREs7b0JBRUosQUFDUyxNQUFNLFNBSm5CLEFBQTJCLEFBQ25CLEFBRUosQUFDd0I7QUFEeEIsQUFDRDtBQUp3QixBQUMxQix1Q0FNQyxNQUFEOztvQkFBQTtzQkF4Q04sQUE2QkUsQUFJRyxBQU9DLEFBR0o7QUFISTtBQUFBLE9BQUEscUJBR0gsY0FBRCxxQ0FBQSxBQUNNO2VBRE4sQUFFUTs7b0JBRlI7c0JBQUEsQUFJRztBQUpIO0FBRUUsNEJBRUMsQUFBa0I7O2dCQUNULEFBQ0EsVUFBVSxTQURYLEFBQUMsQUFDbUI7QUFEbkIsQUFDTixTQURLO29CQUVKLEFBQ1MsTUFBTSxTQUpuQixBQUEwQixBQUNsQixBQUVKLEFBQ3dCO0FBRHhCLEFBQ0Q7QUFKdUIsQUFDekIsdUNBTUMsTUFBRDs7b0JBQUE7c0JBdEROLEFBMkNFLEFBSUcsQUFPQyxBQUdKO0FBSEk7QUFBQSxPQUFBLHFCQUdILGNBQUQscUNBQUEsQUFDTTtlQUROLEFBRVE7O29CQUZSO3NCQUFBLEFBSUc7QUFKSDtBQUVFLDRCQUVDLEFBQWtCOztnQkFDVCxBQUNBLFVBQVUsU0FEWCxBQUFDLEFBQ21CO0FBRG5CLEFBQ04sU0FESztvQkFFSixBQUNTLE1BQU0sU0FKbkIsQUFBK0IsQUFDdkIsQUFFSixBQUN3QjtBQUR4QixBQUNEO0FBSjRCLEFBQzlCLHVDQU1DLE1BQUQ7O29CQUFBO3NCQXJFUixBQUNFLEFBeURFLEFBSUcsQUFPQyxBQUtUO0FBTFM7QUFBQSxPQUFBOzs7O0VBN0ZtQixnQkFBTSxBOztBQXFHckMsSUFBTSxlQUFlLFdBQUEsQUFBSyxTQUExQixBQUFxQixBQUFjO2tCQUNuQixBIiwiZmlsZSI6InNlbGZQcm9kRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjL0Rlc2t0b3AvbXpqYi9tdXpoaWp1YmFvX3dlYiJ9
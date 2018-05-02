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
    _jsxFileName = '/Users/mac/Desktop/mzjb/muzhijubao_web/components/DBTable/youzanProdForm.js';

var _antd = require('antd');

var _mobxReact = require('mobx-react');

var _youzanUpload = require('../FileUploader/youzanUpload');

var _youzanUpload2 = _interopRequireDefault(_youzanUpload);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FormItem = _antd.Form.Item;
var RegistrationForm = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    (0, _classCallCheck3.default)(this, RegistrationForm);
    return (0, _possibleConstructorReturn3.default)(this, (RegistrationForm.__proto__ || (0, _getPrototypeOf2.default)(RegistrationForm)).call(this, props));
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
          lineNumber: 28
        }
      }, _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5546\u54C1\u540D\u79F0',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
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
          lineNumber: 41
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u5546\u54C1\u56FE',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), getFieldDecorator('mainImage', {
        rules: [{
          type: 'string', message: '请输入商家名称!'
        }]
      })(_react2.default.createElement(_youzanUpload2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u4EF7\u683C',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
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
          lineNumber: 68
        }
      }))), _react2.default.createElement(FormItem, (0, _extends3.default)({}, formItemLayout, {
        label: '\u7B80\u8981\u63CF\u8FF0',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
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
          lineNumber: 82
        }
      }))));
    }
  }]);
  return RegistrationForm;
}(_react2.default.Component)) || _class) || _class);

var YouzanProdForm = _antd.Form.create()(RegistrationForm);
exports.default = YouzanProdForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvREJUYWJsZS95b3V6YW5Qcm9kRm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkZvcm0iLCJJdGVtIiwiUmVnaXN0cmF0aW9uRm9ybSIsIm9ic2VydmVyIiwicHJvcHMiLCJnZXRGaWVsZERlY29yYXRvciIsImZvcm0iLCJmb3JtSXRlbUxheW91dCIsImxhYmVsQ29sIiwieHMiLCJzcGFuIiwibWQiLCJ3cmFwcGVyQ29sIiwicnVsZXMiLCJ0eXBlIiwibWVzc2FnZSIsInJlcXVpcmVkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJZb3V6YW5Qcm9kRm9ybSIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7OztBQUZBLElBQU0sV0FBVyxXQUFqQixBQUFzQjtJQUtoQixBLDJCQURMLHVCQUFBLEEsQUFBTyw0QkFBVSxXOzRDQUVkOzs0QkFBQSxBQUFZLE9BQU87d0NBQUE7cUpBQUEsQUFDVCxBQUNQOzs7Ozs2QkFFSTtVQUFBLEFBQ0Msb0JBQXNCLEtBQUEsQUFBSyxNQUQ1QixBQUNrQyxLQURsQyxBQUNDLEFBRVI7O1VBQU07O2NBRUUsRUFBRSxNQURFLEFBQ0osQUFBUSxBQUNaO2NBQUksRUFBRSxNQUhhLEFBQ1gsQUFFSixBQUFRLEFBRWQ7QUFKVSxBQUNSOztjQUlJLEVBQUUsTUFESSxBQUNOLEFBQVEsQUFDWjtjQUFJLEVBQUUsTUFQVixBQUF1QixBQUtULEFBRU4sQUFBUSxBQUtoQjtBQVBjLEFBQ1Y7QUFObUIsQUFDckI7OzZCQVlDLG9CQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNHLGNBQUQscUNBQUEsQUFDTTtlQUROLEFBRVE7O29CQUZSO3NCQUFBLEFBSUc7QUFKSDtBQUVFLDRCQUVDLEFBQWtCOztnQkFDVCxBQUNBLFVBQVUsU0FEWCxBQUFDLEFBQ21CO0FBRG5CLEFBQ04sU0FESztvQkFFSixBQUNTLE1BQU0sU0FKbkIsQUFBMkIsQUFDbkIsQUFFSixBQUN3QjtBQUR4QixBQUNEO0FBSndCLEFBQzFCLHVDQU9DLE1BQUQ7O29CQUFBO3NCQWJOLEFBQ0UsQUFJRyxBQVFDLEFBR0o7QUFISTtBQUFBLE9BQUEscUJBR0gsY0FBRCxxQ0FBQSxBQUNNO2VBRE4sQUFFUTs7b0JBRlI7c0JBQUEsQUFJRztBQUpIO0FBRUUsNEJBRUMsQUFBa0I7O2dCQUNULEFBQ0EsVUFBVSxTQUZuQixBQUErQixBQUN2QixBQUFDLEFBQ21CO0FBRG5CLEFBQ04sU0FESztBQUR1QixBQUM5Qix1Q0FLQyxlQUFEOztvQkFBQTtzQkExQk4sQUFnQkUsQUFJRyxBQU1DLEFBR0o7QUFISTtBQUFBLE9BQUEscUJBR0gsY0FBRCxxQ0FBQSxBQUNNO2VBRE4sQUFFUTs7b0JBRlI7c0JBQUEsQUFJRztBQUpIO0FBRUUsNEJBRUMsQUFBa0I7O2dCQUNULEFBQ0EsVUFBVSxTQURYLEFBQUMsQUFDbUI7QUFEbkIsQUFDTixTQURLO29CQUVKLEFBQ1MsTUFBTSxTQUpuQixBQUEyQixBQUNuQixBQUVKLEFBQ3dCO0FBRHhCLEFBQ0Q7QUFKd0IsQUFDMUIsdUNBTUMsTUFBRDs7b0JBQUE7c0JBeENOLEFBNkJFLEFBSUcsQUFPQyxBQUdKO0FBSEk7QUFBQSxPQUFBLHFCQUdILGNBQUQscUNBQUEsQUFDTTtlQUROLEFBRVE7O29CQUZSO3NCQUFBLEFBSUc7QUFKSDtBQUVFLDRCQUVDLEFBQWtCOztnQkFDVCxBQUNBLFVBQVUsU0FEWCxBQUFDLEFBQ21CO0FBRG5CLEFBQ04sU0FESztvQkFFSixBQUNTLE1BQU0sU0FKbkIsQUFBMEIsQUFDbEIsQUFFSixBQUN3QjtBQUR4QixBQUNEO0FBSnVCLEFBQ3pCLHVDQU1DLE1BQUQ7O29CQUFBO3NCQXZEUixBQUNFLEFBMkNFLEFBSUcsQUFPQyxBQUtUO0FBTFM7QUFBQSxPQUFBOzs7O0VBM0VtQixnQkFBTSxBOztBQW1GckMsSUFBTSxpQkFBaUIsV0FBQSxBQUFLLFNBQTVCLEFBQXVCLEFBQWM7a0JBQ3JCLEEiLCJmaWxlIjoieW91emFuUHJvZEZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9EZXNrdG9wL216amIvbXV6aGlqdWJhb193ZWIifQ==
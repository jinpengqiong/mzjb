'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _jsxFileName = 'C:\\Users\\Administrator\\Desktop\\mzjb\\components\\DBTable\\InnerPagination.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 内部分页器组件
 */
var InnerPagination = function (_React$Component) {
  (0, _inherits3.default)(InnerPagination, _React$Component);

  function InnerPagination() {
    (0, _classCallCheck3.default)(this, InnerPagination);
    return (0, _possibleConstructorReturn3.default)(this, (InnerPagination.__proto__ || (0, _getPrototypeOf2.default)(InnerPagination)).apply(this, arguments));
  }

  (0, _createClass3.default)(InnerPagination, [{
    key: 'render',
    value: function render() {
      // 有些状态要传到父组件中去处理
      return _react2.default.createElement('div', { className: 'db-pagination', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_antd.Pagination, {
        showQuickJumper: true,
        selectComponentClass: _antd.Select,
        total: this.props.total
        // showTotal={(total) => `每页${this.props.pageSize}条, 共 ${total} 条`}
        , pageSize: this.props.pageSize, defaultCurrent: 1,
        current: this.props.currentPage,
        onChange: this.props.parentHandlePageChange,
        style: { marginTop: "15px", float: "right"
          // //是否显示“每页显示条目数”,对应 antd Pagination组件的showSizeChanger属性
          // showSizeChanger={this.props.showSizeChanger}
          // //修改“每页显示条目数”时触发,对应 antd Pagination组件的onShowSizeChange属性
          // onShowSizeChange={this.props.parentHandleShowPageChange}
          // pageSizeOptions={this.props.pageSizeOptions}
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }));
    }
  }]);
  return InnerPagination;
}(_react2.default.Component);

exports.default = InnerPagination;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXERCVGFibGVcXElubmVyUGFnaW5hdGlvbi5qcyJdLCJuYW1lcyI6WyJJbm5lclBhZ2luYXRpb24iLCJwcm9wcyIsInRvdGFsIiwicGFnZVNpemUiLCJjdXJyZW50UGFnZSIsInBhcmVudEhhbmRsZVBhZ2VDaGFuZ2UiLCJtYXJnaW5Ub3AiLCJmbG9hdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7SUFHTSxBOzs7Ozs7Ozs7OzZCQUVLLEFBQ1A7QUFDQTs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjtPQUFBO3lCQUNFLEFBRUU7b0NBRkYsQUFHRTtlQUFPLEtBQUEsQUFBSyxNQUFNLEFBQ2xCO0FBSkY7QUFDRSxVQUlBLFVBQVUsS0FBQSxBQUFLLE1BTGpCLEFBS3VCLFVBQVUsZ0JBTGpDLEFBS2lELEFBQy9DO2lCQUFTLEtBQUEsQUFBSyxNQU5oQixBQU1zQixBQUNwQjtrQkFBVSxLQUFBLEFBQUssTUFQakIsQUFPdUIsQUFDckI7aUJBQVMsV0FBRixBQUFhLFFBQVEsT0FBckIsQUFBNEIsQUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJGO0FBUVM7b0JBUlQ7c0JBRkosQUFDRSxBQUNFLEFBaUJMO0FBakJLOzs7OztFQU5zQixnQkFBTSxBOztrQkEyQnJCLEEiLCJmaWxlIjoiSW5uZXJQYWdpbmF0aW9uLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9tempiIn0=
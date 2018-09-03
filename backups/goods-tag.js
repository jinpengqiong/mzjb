'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getConfig;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compatible = require('../compatible');

var _url = require('../url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getConfig(config) {
  return {
    title: '商品分组',
    url: config.tag,
    columns: [{
      title: '分组名称',
      width: '60%',
      bodyRender: function bodyRender(data) {
        return _react2['default'].createElement(
          'span',
          {
            rel: 'noopener noreferrer',
            className: 'rc-choose-dialog-one-line'
          },
          data.title
        );
      }
    }, {
      title: '创建时间',
      name: 'created_time'
    }],
    buildQuery: function buildQuery(data) {
      return {
        page: data.page,
        keyword: data.search
      };
    },
    formatData: function formatData(data) {
      return {
        data: data.data_list,
        pageSize: 8,
        page: (0, _compatible.extractCurrentPageFromHtml)(data.page),
        total: data.total_items
      };
    },

    actions: [{
      type: 'button',
      align: 'left',
      label: '刷新',
      onClick: function onClick(evt, context) {
        context.refresh();
      }
    }, {
      type: 'search',
      align: 'right'
    }]
  };
} // 商品分组
module.exports = exports['default'];
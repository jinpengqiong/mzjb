'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getConfig;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fullfillImage = require('zan-utils/lib/fullfillImage');

var _fullfillImage2 = _interopRequireDefault(_fullfillImage);

var _tag = require('zent/lib/tag');

var _tag2 = _interopRequireDefault(_tag);

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _compatible = require('../compatible');

var _url = require('../url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// 已上架商品
var NOT_SUPPORTTED_GOODS_TYPE = [10, 31, 35];

function getConfig(config) {
  var canSelectRow = function canSelectRow(data) {
    var goodsType = data.goods_type;


    if ((0, _includes2['default'])(NOT_SUPPORTTED_GOODS_TYPE, goodsType)) {
      return false;
    }

    return true;
  };

    return {
        title: '已上架商品',
        needCrossPage: true,
        renderBatchComponents: function renderBatchComponents(data) {
            return _react2['default'].createElement(
                'span',
                null,
                '\u5DF2\u9009\u62E9 ',
                data.length,
                ' \u4E2A\u5546\u54C1'
            );
        },
        url: (0, _url2['default'])('', 'www', config.url),
        columns: [{
            title: '',
            bodyRender: function bodyRender(data) {
                return _react2['default'].createElement('img', {
                    src: (0, _fullfillImage2['default'])(data.image_url, '!50x50.jpg', config.url),
                    alt: '\u5546\u54C1\u56FE',
                    width: '50',
                    height: '50'
                });
            }
        }, {
            title: '标题',
            width: '60%',
            bodyRender: function bodyRender(data) {
                var goodsType = data.goods_type;

        var isFenxiao = +goodsType === 10;

                return _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'a',
                        {
                            href: data.url,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className: 'rc-choose-dialog-one-line'
                        },
                        data.title
                    ),
                    isFenxiao && _react2['default'].createElement(
                    'span',
                    null,
                    ' ',
                    _react2['default'].createElement(
                        _tag2['default'],
                        { color: 'green' },
                        '\u5206\u9500'
                    )
                    ),
                    !canSelectRow(data) ? _react2['default'].createElement(
                        'div',
                        { style: { marginTop: 5, color: '#999' } },
                        '\u8BE5\u5546\u54C1\u6682\u4E0D\u652F\u6301\u5C0F\u7A0B\u5E8F\u4E2D\u552E\u5356'
                    ) : null
                );
            }
        }, {
            title: '创建时间',
            name: 'created_time'
        }],
        canSelectRow: canSelectRow,
        buildQuery: function buildQuery(data) {
            return {
                page: data.page,
                keyword: data.search,
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
}
module.exports = exports['default'];
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _keys = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _dec, _class;

var _antd = require('antd');

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

var _formComponent = require('./formComponent');

var _formComponent2 = _interopRequireDefault(_formComponent);

var _graphqlRequest = require('graphql-request');

var _index = require('_next@4.2.3@next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _mobxReact = require('mobx-react');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Meta = _antd.Card.Meta;

var colorData = {
    "COLOR010": "#63b359",
    "COLOR020": "#2c9f67",
    "COLOR030": "#509fc9",
    "COLOR040": "#5885cf",
    "COLOR050": "#9062c0",
    "COLOR060": "#d09a45",
    "COLOR070": "#e4b138",
    "COLOR080": "#ee903c",
    "COLOR081": "#f08500",
    "COLOR082": "#a9d92d",
    "COLOR090": "#dd6549",
    "COLOR100": "#cc463d",
    "COLOR101": "#cf3e36",
    "COLOR102": "#5E6671"
};
var queryVouchers = '\n    query ($page: Int, $pageSize: Int, $shopId: ID!) {\n        shopWxcards(page:$page,pageSize:$pageSize, shopId: $shopId){\n            pageNumber\n            totalEntries\n            totalPages\n            entries{\n                beginTimestamp\n                brandName\n                cardId\n                color\n                desc\n                endTimestamp\n                id: ID\n                images\n                logoUrl\n                quantity\n                title\n                updatedAt\n                userId\n            }\n        }\n    }\n';

var addVoucher = '\nmutation ($adinfo: WxcardAdinfo, $baseinfo: WxcardBaseinfo!, $shopId: Int!){\n    createWxcard(adinfo:$adinfo, baseinfo:$baseinfo, shopId: $shopId){\n            beginTimestamp\n            brandName\n            color\n            cardId\n            id\n            desc\n            endTimestamp\n            logoUrl\n            notice\n            quantity\n            title\n    }\n  }\n';

var deleteVoucher = '\nmutation ($id:Int!, $shopId: Int!){\n    deleteWxcard(id: $id, shopId: $shopId){\n            beginTimestamp\n            brandName\n            color\n            cardId\n            id\n            desc\n            endTimestamp\n            logoUrl\n            notice\n            quantity\n            title\n    }\n  }\n';
var sendWxcardToLive = '\n      mutation ($id:ID!,$shopId:ID!, $cartTime:Int){\n        sendWxcardToLive(id:$id, shopId:$shopId, cartTime:$cartTime){\n          result\n        }\n      }\n    ';

var MyVoucherList = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(MyVoucherList, _React$Component);

    function MyVoucherList(props) {
        (0, _classCallCheck3.default)(this, MyVoucherList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MyVoucherList.__proto__ || (0, _getPrototypeOf2.default)(MyVoucherList)).call(this, props));

        _this.queryVouchers = function (page) {
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(queryVouchers, { page: page, pageSize: 8, shopId: _this.state.shopID }).then(function (res) {
                console.log('voucher', res);
                _this.setState({
                    data: res.shopWxcards
                });
            });
        };

        _this.createVouchers = function () {
            _this.setState({
                modalVisible: true
            });
        };

        _this.handleSubmit = function (err, values) {
            _this.refs.form.validateFields(function (err, values) {
                if (err) {
                    _antd.message.error(err);
                } else {
                    values.color = _this.findKey(values.color.hex);
                    var rangeTimeValue = values['range-time-picker'];
                    values.beginTimestamp = parseInt(rangeTimeValue[0].format('X'));
                    values.endTimestamp = parseInt(rangeTimeValue[1].format('X'));
                    values.quantity = parseInt(values.quantity);
                    delete values['range-time-picker'];
                    console.log('111', values);
                    var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                        }
                    });
                    client.request(addVoucher, { shopId: _this.props.store.shopID, baseinfo: values }).then(function (res) {
                        if (res.errors) {
                            _antd.message.success('卡券创建出错，请检查卡券名或商家名字数是否超出限制！');
                            _this.hideModal();
                        } else {
                            _antd.message.success('卡券创建成功！');
                            _this.hideModal();
                            _this.queryVouchers();
                        }
                    });
                }
            });
        };

        _this.hideModal = function () {
            _this.setState({
                modalVisible: false
            });
        };

        _this.confirm = function (id) {
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(deleteVoucher, { shopId: _this.state.shopID, id: id }).then(function (res) {
                if (res.errors) {
                    _antd.message.success('删除失败！');
                } else {
                    console.log('res', res);
                    _antd.message.success('删除成功！');
                    _this.queryVouchers(1);
                }
            });
        };

        _this.confirm1 = function (id) {
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(sendWxcardToLive, { shopId: _this.state.shopID, id: id, cartTime: 5000 }).then(function (res) {
                if (res.errors) {
                    _antd.message.success('发送失败！');
                } else {
                    console.log('res', res);
                    _antd.message.success('发送成功！');
                    _this.queryVouchers(1);
                }
            });
        };

        _this.state = {
            shopID: parseInt(props.shopID),
            data: null,
            modalVisible: false
        };
        return _this;
    }

    (0, _createClass3.default)(MyVoucherList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null) {
                _index2.default.push('/login');
            } else if (this.props.store.shopID === null) {
                _index2.default.push('/shops');
            } else {
                this.queryVouchers(1);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(pageNumber) {
            this.queryVouchers(pageNumber);
        }

        //get color value

    }, {
        key: 'findKey',
        value: function findKey(value) {
            var compare = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
                return a === b;
            };

            return (0, _keys2.default)(colorData).find(function (k) {
                return compare(colorData[k], value);
            });
        }

        //send to live room

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var voucherData = this.state.data && this.state.data.entries.map(function (entry) {
                entry.beginTimestamp = _moment2.default.unix(entry.beginTimestamp).format('YYYY-MM-DD HH:mm:ss').toString();
                entry.endTimestamp = _moment2.default.unix(entry.endTimestamp).format('YYYY-MM-DD HH:mm:ss').toString();
                return _react2.default.createElement(_antd.Card, {
                    key: entry.id,
                    hoverable: true,
                    type: 'inner',
                    title: entry.title,
                    style: { backgroundColor: entry.color },
                    extra: _react2.default.createElement('div', null, _react2.default.createElement(_antd.Popconfirm, { title: '\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5361\u5238\u5417?', onConfirm: function onConfirm() {
                            _this2.confirm1(entry.id);
                        }, okText: 'Yes', cancelText: 'No' }, _react2.default.createElement('a', { href: '#' }, '\u53D1\u9001\u5230\u76F4\u64AD\u95F4')), _react2.default.createElement(_antd.Divider, { type: 'vertical' }), _react2.default.createElement(_antd.Popconfirm, { title: '\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5361\u5238\u5417?', onConfirm: function onConfirm() {
                            _this2.confirm(entry.id);
                        }, okText: 'Yes', cancelText: 'No' }, _react2.default.createElement('a', { href: '#' }, '\u5220\u9664'))) }, _react2.default.createElement(_antd.Row, { type: 'flex', justify: 'space-around' }, _react2.default.createElement(_antd.Col, { span: 6 }, _react2.default.createElement('img', { alt: 'example',
                    style: { width: '120px' },
                    src: entry.logoUrl })), _react2.default.createElement(_antd.Col, { span: 7 }, _react2.default.createElement('p', null, '\u5361\u5238ID\uFF1A', entry.cardId), _react2.default.createElement('p', null, '\u5361\u5238\u63CF\u8FF0\uFF1A', entry.desc), _react2.default.createElement('p', null, '\u5361\u5238\u6570\u91CF\uFF1A', entry.quantity)), _react2.default.createElement(_antd.Col, { span: 6 }, _react2.default.createElement('p', null, '\u8D77\u59CB\u65F6\u95F4\uFF1A', entry.beginTimestamp), _react2.default.createElement('p', null, '\u7ED3\u675F\u65F6\u95F4\uFF1A', entry.endTimestamp))));
            });

            return _react2.default.createElement('div', null, _react2.default.createElement(_antd.Affix, { offsetTop: 8, target: function target() {
                    return document.getElementById('main-content-div');
                } }, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.createVouchers }, _react2.default.createElement(_antd.Icon, { type: 'plus-circle-createVoucherso' }), '\u65B0\u589E\u5361\u5238')), _react2.default.createElement(_antd.Modal, { title: '\u521B\u5EFA\u5361\u5238', visible: this.state.modalVisible, onOk: this.handleSubmit, onCancel: this.hideModal, maskClosable: false, width: 550 }, _react2.default.createElement(_formComponent2.default, { ref: 'form', onSubmit: this.handleSubmit })), _react2.default.createElement(_antd.Card, { title: '\u6211\u7684\u5361\u5238', style: { marginTop: 20 } }, this.state.data && this.state.data.length === 0 ? '暂无卡券' : voucherData), this.state.data && this.state.data.totalEntries !== 0 && _react2.default.createElement(_antd.Pagination, {
                defaultCurrent: 1,
                current: this.state.data.pageNumber,
                onChange: this.onChange,
                total: this.state.data ? this.state.data.totalEntries : 1,
                style: { float: "right", marginTop: "10px" } }));
        }
    }]);
    return MyVoucherList;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyVoucherList;
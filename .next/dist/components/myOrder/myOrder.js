'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _graphqlRequest = require('graphql-request');

var _mobxReact = require('mobx-react');

var _index = require('_next@4.2.3@next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid_generator = require('../../utils/uuid_generator.js');

var _uuid_generator2 = _interopRequireDefault(_uuid_generator);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var RadioGroup = _antd.Radio.Group;
var Option = _antd.Select.Option;

var queryOrder = '\n    query ($id: Int!, $page: Int, $pageSize: Int, $startTimestamp: Int, $endTimestamp: Int) {\n        shopTradesList(endTimestamp:$endTimestamp, id:$id, page:$page,pageSize:$pageSize,startTimestamp:$startTimestamp ){\n            totalResults\n            trades{\n                createdAt\n                money\n                orderNo\n                phone\n                state\n                items {\n                    num\n                    price\n                    title\n                }\n            }\n        }\n    }';

var confirmLogistics = '\n    mutation ($isNoExpress: Int!, $outSid: String, $outStype: String, $tid: String!) {\n            confirmSendProduct(isNoExpress: $isNoExpress, outSid: $outSid, outStype: $outStype, tid: $tid ){\n                status\n        }\n    }';

var expressList = '\nquery {\n    expressList{\n        id\n        name\n    }\n}';

var OrderManagement = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(OrderManagement, _React$Component);

    function OrderManagement(props) {
        (0, _classCallCheck3.default)(this, OrderManagement);

        var _this = (0, _possibleConstructorReturn3.default)(this, (OrderManagement.__proto__ || (0, _getPrototypeOf2.default)(OrderManagement)).call(this, props));

        _this.queryOrderData = function (curPage) {
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            var endTime = parseInt((0, _moment2.default)().format('X'));
            var startTime = parseInt((0, _moment2.default)().subtract(1, 'quarters').format('X'));
            // console.log('startTime',startTime)
            client.request(queryOrder, { id: _this.props.store.shopID, page: curPage, pageSize: 10, startTimestamp: startTime, endTimestamp: endTime }).then(function (res) {
                if (res.errors) {
                    _antd.message.error('出错了，请重试！');
                } else {
                    res.shopTradesList.trades.map(function (entry) {
                        entry.key = _uuid_generator2.default.uuid(8, 10);
                        entry.title = entry.items[0].title;
                        entry.price = entry.items[0].price;
                        entry.num = entry.items[0].num;
                        delete entry.items;
                    });
                    _this.setState({
                        data: res.shopTradesList
                    });
                }
            }).catch(function (error) {
                _antd.message.error(error);
            });
        };

        _this.handleOk = function () {
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            if (_this.state.isNoExpress === 0) {
                client.request(confirmLogistics, { isNoExpress: _this.state.isNoExpress, tid: _this.state.orderNo, outSid: _this.state.DeliveryNum, outStype: _this.state.deliveryValue.toString() }).then(function (res) {
                    if (res.errors) {
                        _antd.message.error(res.errors[0].message);
                    } else {
                        _antd.message.success('发货成功！');
                        _this.setState({
                            visible: false
                        });
                    }
                });
            } else {
                client.request(confirmLogistics, { isNoExpress: _this.state.isNoExpress, tid: _this.state.orderNo }).then(function (res) {
                    if (res.errors) {
                        _antd.message.error(res.errors[0].message);
                    } else {
                        _antd.message.success('操作成功！');
                        _this.setState({
                            visible: false
                        });
                    }
                });
            }
        };

        _this.handleCancel = function (e) {
            console.log(e);
            _this.setState({
                visible: false
            });
        };

        _this.onChange = function (e) {
            console.log('radio checked', e.target.value);
            var value = parseInt(e.target.value);
            _this.setState({
                isNoExpress: value
            });
        };

        _this.handleChange = function (value) {
            console.log('selected ' + value);
            _this.setState({
                deliveryValue: value
            });
        };

        _this.handleClick = function (ID) {
            _this.setState({
                orderNo: ID,
                visible: true
            });
        };

        _this.InputDeliveryNum = function (e) {
            console.log('value', e.target.value);
            _this.setState({
                DeliveryNum: e.target.value
            });
        };

        _this.state = {
            data: null,
            columns: [{
                title: '订单号',
                dataIndex: 'orderNo',
                key: 'orderNo'
            }, {
                title: '商品',
                dataIndex: 'title',
                key: 'title'
            }, {
                title: '单价',
                dataIndex: 'price',
                key: 'price'
            }, {
                title: '数量',
                dataIndex: 'num',
                key: 'num'
            }, {
                title: '手机号',
                dataIndex: 'phone',
                key: 'phone'
            }, {
                title: '下单时间',
                dataIndex: 'createdAt',
                key: 'createdAt'
            }, {
                title: '订单状态',
                dataIndex: 'state',
                key: 'state',
                render: function render(text, record) {
                    return _react2.default.createElement('div', null, _react2.default.createElement('p', null, text === 3 ? "待付款" : text === 5 ? "已付款" : text === 6 ? "已发货" : "交易完成"), text === 5 && _react2.default.createElement(_antd.Button, { type: 'primary', onClick: function onClick() {
                            _this.handleClick(record.orderNo);
                        } }, '\u53D1\u8D27'));
                }
            }, {
                title: '订单总额(元)',
                dataIndex: 'money',
                key: 'money'
            }],
            expressList: null,
            visible: false,
            isNoExpress: 0,
            deliveryValue: "",
            orderNo: "",
            DeliveryNum: ""
        };
        return _this;
    }

    (0, _createClass3.default)(OrderManagement, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            if (!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null) {
                _index2.default.push('/login');
            } else if (this.props.store.shopID === null) {
                _index2.default.push('/shops');
            } else {
                this.queryOrderData(1);
                client.request(expressList).then(function (res) {
                    console.log('res', res);
                    _this2.setState({
                        expressList: res.expressList
                    });
                });
            }
        }
    }, {
        key: 'cancel',
        value: function cancel() {}
    }, {
        key: 'onChange',
        value: function onChange(pageNumber) {
            this.queryUserData(pageNumber);
        }
    }, {
        key: 'render',
        value: function render() {
            var _React$createElement;

            //   const Options = this.state.expressList && this.state.expressList.splice(10).map(
            //       (option) => {
            //         return (<Option value={option.id} key={option.id}>{option.name}</Option>)
            //       }
            //   )
            return _react2.default.createElement('div', null, _react2.default.createElement(_antd.Table, { bordered: true, dataSource: this.state.data ? this.state.data.trades : null, columns: this.state.columns, pagination: false }), _react2.default.createElement(_antd.Modal, {
                title: '\u786E\u8BA4\u53D1\u8D27',
                visible: this.state.visible,
                onOk: this.handleOk,
                onCancel: this.handleCancel
            }, _react2.default.createElement('div', null, '\u53D1\u8D27\u65B9\u5F0F\uFF1A', _react2.default.createElement(RadioGroup, { defaultValue: 0, onChange: this.onChange }, _react2.default.createElement(_antd.Radio, { value: 0 }, '\u9700\u8981\u7269\u6D41'), _react2.default.createElement(_antd.Radio, { value: 1 }, '\u65E0\u9700\u7269\u6D41')), _react2.default.createElement('br', null), _react2.default.createElement('div', { style: { marginTop: 15 } }, '\u7269\u6D41\u516C\u53F8\uFF1A', _react2.default.createElement(_antd.Select, (_React$createElement = { defaultValue: 'default', style: { width: 120 } }, (0, _defineProperty3.default)(_React$createElement, 'style', { marginRight: 15 }), (0, _defineProperty3.default)(_React$createElement, 'onChange', this.handleChange), _React$createElement), _react2.default.createElement(Option, { value: 'default', key: '-1' }, '\u8BF7\u9009\u62E9\u7269\u6D41\u516C\u53F8'), _react2.default.createElement(Option, { value: 1 }, '\u7533\u901A\u5FEB\u9012'), _react2.default.createElement(Option, { value: 2 }, '\u5706\u901A\u901F\u9012'), _react2.default.createElement(Option, { value: 3 }, '\u4E2D\u901A\u5FEB\u9012'), _react2.default.createElement(Option, { value: 4 }, '\u97F5\u8FBE\u5FEB\u9012'), _react2.default.createElement(Option, { value: 5 }, '\u5929\u5929\u5FEB\u9012'), _react2.default.createElement(Option, { value: 6 }, '\u767E\u4E16\u5FEB\u9012'), _react2.default.createElement(Option, { value: 7 }, '\u987A\u4E30\u901F\u8FD0'), _react2.default.createElement(Option, { value: 8 }, '\u90AE\u653F\u5FEB\u9012\u5305\u88F9'), _react2.default.createElement(Option, { value: 9 }, 'EMS\u7ECF\u6D4E\u5FEB\u9012'), _react2.default.createElement(Option, { value: 10 }, 'EMS')), '\u8FD0\u5355\u7F16\u53F7\uFF1A', _react2.default.createElement('input', { onChange: this.InputDeliveryNum })))), this.state.data && this.state.data.totalEntries !== 0 && _react2.default.createElement(_antd.Pagination, {
                defaultCurrent: 1,
                onChange: this.onChange,
                total: this.state.data ? this.state.data.totalResults : 1,
                style: { float: "right", marginTop: "10px" } }));
        }
    }]);
    return OrderManagement;
}(_react2.default.Component)) || _class) || _class);
exports.default = OrderManagement;
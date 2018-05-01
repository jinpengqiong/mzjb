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

var _dec, _class;

var _antd = require('antd');

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

var _graphqlRequest = require('graphql-request');

var _mobxReact = require('mobx-react');

var _selfProdForm = require('./selfProdForm');

var _selfProdForm2 = _interopRequireDefault(_selfProdForm);

var _youzanProdForm = require('./youzanProdForm');

var _youzanProdForm2 = _interopRequireDefault(_youzanProdForm);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var TabPane = _antd.Tabs.TabPane;

var queryProducts = '\n      query ($page:Int, $pageSize: Int, $shopId:Int) {\n        shopProducts(page:$page,pageSize:$pageSize,shopId:$shopId){\n          pageSize,\n          pageNumber\n          totalPages\n          totalEntries\n          entries{\n            id\n            title\n            mainImage\n            price\n            desc\n            detailUrl\n          }\n        }\n      }\n    ';

var addProduct = '\nmutation (\n    $baseinfo:ProductBaseinfo!, $shopId: Int!, $type:ProductType!, $youzan:ProductYouzanArgs\n    ) {\n    createProduct(\n        baseinfo:$baseinfo,\n        shopId: $shopId,\n        type:$type,\n        youzan:$youzan\n    ){\n        id\n        title\n        images\n        price\n        desc\n        detailUrl\n        imagesUrls{\n            url\n        }\n    }\n    }\n';

var deleteProduct = '\n      mutation ($id:ID!,$shopId:ID!){\n        deleteProduct(id:$id, shopId:$shopId){\n          desc\n          detailUrl\n          id\n          images\n          price\n          title\n        }\n      }\n    ';

var sendPicadToLive = '\n      mutation ($id:ID!,$shopId:ID!, $cartTime:Int){\n        sendPicadToLive(id:$id, shopId:$shopId, cartTime:$cartTime){\n          result\n        }\n      }\n    ';

var ProdTable = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
    (0, _inherits3.default)(ProdTable, _React$Component);

    function ProdTable(props) {
        (0, _classCallCheck3.default)(this, ProdTable);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ProdTable.__proto__ || (0, _getPrototypeOf2.default)(ProdTable)).call(this, props));

        _this.queryProdData = function (curPage) {
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(queryProducts, { page: curPage, pageSize: 10, shopId: _this.state.shopID }).then(function (res) {
                console.log('res', res);
                _this.props.store.getProductData(res.shopProducts.entries);
                res.shopProducts.entries.map(function (entry) {
                    entry.key = entry.id;
                });
                _this.setState({
                    data: res.shopProducts
                });
            });
        };

        _this.onPageChange = function (pageNumber) {
            _this.queryProdData(pageNumber);
        };

        _this.onClickInsert = function () {
            _this.setState({
                visible: true
            });
        };

        _this.handleOk = function (e) {
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            if (_this.props.store.TabOption == '1') {
                _this.refs.form1.validateFields(function (err, values) {
                    if (err) {
                        _antd.message.error(err);
                    } else {
                        console.log('values', values);
                        values.images = _this.props.store.imgUrlID.join(',');
                        values.price = parseFloat(values.price) * 100;
                        client.request(addProduct, { baseinfo: values, shopId: _this.props.shopID, type: 'LINK' }).then(function (res) {
                            console.log('res', res);
                            _this.refs.form1.resetFields();
                            _this.props.store.resetUrlIDs();
                            res.createProduct.mainImage = res.createProduct.imagesUrls[0].url;
                            res.createProduct.key = res.createProduct.id;
                            delete res.createProduct.imagesUrls;
                            delete res.createProduct.images;
                            _this.queryProdData(1);
                            _this.setState({
                                visible: false
                            });
                            document.getElementById('ossfile').innerHTML = '';
                            _antd.notification.success({
                                message: '新增成功',
                                duration: 3
                            });
                        });
                    }
                });
            } else if (_this.props.store.TabOption == '2') {
                _this.refs.form2.validateFields(function (err, values) {
                    if (err) {
                        _antd.message.error(err);
                    } else {
                        console.log('values', values);
                        values.images = _this.props.store.imgUrlID.join(',');
                        values.price = parseFloat(values.price) * 100;
                        client.request(addProduct, { baseinfo: values, shopId: _this.props.shopID, type: 'YOUZAN', youzan: { imageIds: _this.props.store.imageId, quantity: 1000 } }).then(function (res) {
                            console.log('res', res);
                            if (!res.errors) {
                                _this.refs.form2.resetFields();
                                _this.props.store.resetUrlIDs();
                                res.createProduct.mainImage = res.createProduct.imagesUrls[0].url;
                                res.createProduct.key = res.createProduct.id;
                                delete res.createProduct.imagesUrls;
                                delete res.createProduct.images;
                                _this.queryProdData(1);
                                document.getElementById('ossfile1').innerHTML = '';
                                _this.setState({
                                    visible: false
                                });
                                _antd.notification.success({
                                    message: '新增成功',
                                    duration: 3
                                });
                            }
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

        _this.callback = function (key) {
            console.log(key);
            _this.props.store.getTabOption(key);
        };

        _this.confirm1 = function (id) {
            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            var ID = parseFloat(id);
            client.request(sendPicadToLive, { shopId: _this.state.shopID, id: ID, cartTime: 5000 }).then(function (res) {
                if (res.errors) {
                    _antd.message.success('发送失败！');
                } else {
                    console.log('res', res);
                    _antd.message.success('发送成功！');
                    _this.queryProdData(1);
                }
            });
        };

        _this.state = {
            data: null,
            visible: false,
            shopID: parseInt(props.shopID),
            columns: [{
                dataIndex: 'id',
                title: 'ID',
                dataType: 'int',
                width: 80,
                primary: true
            }, {
                dataIndex: 'title',
                title: '商品名称',
                dataType: 'varchar',
                validator: [{ type: 'string', message: '请输入商品名称', required: true }],
                width: 150
            }, {
                dataIndex: 'mainImage',
                title: '商品图',
                dataType: 'varchar',
                width: 200,
                render: function render(text) {
                    return _react2.default.createElement('img', { src: text, style: { width: 100 } });
                }
            }, {
                dataIndex: 'price',
                title: '价格',
                dataType: 'varchar',
                width: 80,
                validator: [{ type: 'string', pattern: /^\d+(\.\d{1,2})?$/, message: '只能是数字哦。', required: true }],
                render: function render(text) {
                    return '\xA5' + (parseFloat(text) / 100).toFixed(2);
                }
            }, {
                // 文件上传和图片上传其实是很类似的
                dataIndex: 'desc',
                title: '简要描述',
                dataType: 'varchar',
                width: 150,
                validator: [{ type: 'string', message: '请输入简要描述', required: true }],
                render: function render(text) {
                    return '' + text;
                }
            }, {
                dataIndex: 'detailUrl',
                title: '链接',
                dataType: 'varchar',
                width: 200,
                render: function render(text) {
                    return _react2.default.createElement('a', { href: text }, text);
                }
            }, {
                title: '操作',
                key: 'action',
                width: 150,
                render: function render(text, record) {
                    return _react2.default.createElement('span', null, _react2.default.createElement(_antd.Popconfirm, { title: '\u786E\u5B9A\u8981\u53D1\u9001\u5417?', onConfirm: function onConfirm() {
                            _this.confirm1(record.id);
                        }, okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88' }, _react2.default.createElement('a', { href: 'javascript:;' }, '\u53D1\u9001\u76F4\u64AD\u95F4')), _react2.default.createElement(_antd.Divider, { type: 'vertical' }), _react2.default.createElement(_antd.Popconfirm, { title: '\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5546\u54C1\u5417?', onConfirm: function onConfirm() {
                            _this.confirm(record.id);
                        }, okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88' }, _react2.default.createElement('a', { href: '#' }, '\u5220\u9664')));
                }
            }]
        };
        return _this;
    }

    (0, _createClass3.default)(ProdTable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.queryProdData(1);
        }
    }, {
        key: 'confirm',

        //删除
        value: function confirm(id) {
            var _this2 = this;

            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(deleteProduct, { shopId: this.state.shopID, id: id }).then(function (res) {
                if (res.errors) {
                    _antd.message.success('删除失败！');
                } else {
                    console.log('res', res);
                    _antd.message.success('删除成功！');
                    _this2.queryProdData(1);
                }
            });
        }

        //发送直播间

    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var rowSelection = {
                onChange: function onChange(selectedRowKeys, selectedRows) {
                    console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows);
                    _this3.props.store.getselectedRowKeys(selectedRowKeys);
                }
            };
            return _react2.default.createElement('div', null, _react2.default.createElement(_antd.Affix, { offsetTop: 8, target: function target() {
                    return document.getElementById('main-content-div');
                }, style: { marginBottom: "10px" } }, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.onClickInsert }, _react2.default.createElement(_antd.Icon, { type: 'plus-circle-o' }), ' \u65B0\u589E\u5546\u54C1')), _react2.default.createElement(_antd.Modal, {
                title: '\u65B0\u589E',
                visible: this.state.visible,
                onOk: this.handleOk,
                onCancel: this.handleCancel
            }, _react2.default.createElement(_antd.Tabs, { defaultActiveKey: '1', onChange: this.callback }, _react2.default.createElement(TabPane, { tab: '\u5916\u94FE\u5546\u54C1', key: '1' }, _react2.default.createElement(_selfProdForm2.default, { ref: 'form1' })), _react2.default.createElement(TabPane, { tab: '\u81EA\u7531\u5546\u54C1', key: '2' }, _react2.default.createElement(_youzanProdForm2.default, { ref: 'form2' })))), _react2.default.createElement(_antd.Table, { rowSelection: rowSelection, dataSource: this.state.data ? this.state.data.entries : null, columns: this.state.columns, pagination: false }), this.state.data && this.state.data.totalEntries !== 0 && _react2.default.createElement(_antd.Pagination, {
                defaultCurrent: 1,
                onChange: this.onPageChange,
                total: this.state.data ? this.state.data.totalEntries : 1,
                style: { marginLeft: "80%", marginTop: "10px" } }));
        }
    }]);
    return ProdTable;
}(_react2.default.Component)) || _class) || _class);
exports.default = ProdTable;
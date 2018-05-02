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
    _jsxFileName = '/Users/mac/Desktop/mzjb/muzhijubao_web/components/DBTable/tableComponent.js';

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

        _this.onSelectChange = function (selectedRowKeys) {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            _this.props.store.getselectedRowKeys(selectedRowKeys);
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
                    return _react2.default.createElement('img', { src: text, style: { width: 100 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 101
                        }
                    });
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
                    return _react2.default.createElement('a', { href: text, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 125
                        }
                    }, text);
                }
            }, {
                title: '操作',
                key: 'action',
                width: 150,
                render: function render(text, record) {
                    return _react2.default.createElement('span', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 132
                        }
                    }, _react2.default.createElement(_antd.Popconfirm, { title: '\u786E\u5B9A\u8981\u53D1\u9001\u5417?', onConfirm: function onConfirm() {
                            _this.confirm1(record.id);
                        }, okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 133
                        }
                    }, _react2.default.createElement('a', { href: 'javascript:;', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 134
                        }
                    }, '\u53D1\u9001\u76F4\u64AD\u95F4')), _react2.default.createElement(_antd.Divider, { type: 'vertical', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 136
                        }
                    }), _react2.default.createElement(_antd.Popconfirm, { title: '\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u5546\u54C1\u5417?', onConfirm: function onConfirm() {
                            _this.confirm(record.id);
                        }, okText: '\u786E\u8BA4', cancelText: '\u53D6\u6D88', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 137
                        }
                    }, _react2.default.createElement('a', { href: '#', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 138
                        }
                    }, '\u5220\u9664')));
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


        //control select keys

    }, {
        key: 'render',
        value: function render() {
            var rowSelection = {
                selectedRowKeys: this.props.store.selectedRowKeys,
                onChange: this.onSelectChange
            };
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 318
                }
            }, _react2.default.createElement(_antd.Affix, { offsetTop: 8, target: function target() {
                    return document.getElementById('main-content-div');
                }, style: { marginBottom: "10px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 319
                }
            }, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.onClickInsert, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 320
                }
            }, _react2.default.createElement(_antd.Icon, { type: 'plus-circle-o', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 321
                }
            }), ' \u65B0\u589E\u5546\u54C1')), _react2.default.createElement(_antd.Modal, {
                title: '\u65B0\u589E',
                visible: this.state.visible,
                onOk: this.handleOk,
                onCancel: this.handleCancel,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 324
                }
            }, _react2.default.createElement(_antd.Tabs, { defaultActiveKey: '1', onChange: this.callback, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 330
                }
            }, _react2.default.createElement(TabPane, { tab: '\u5916\u94FE\u5546\u54C1', key: '1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 331
                }
            }, _react2.default.createElement(_selfProdForm2.default, { ref: 'form1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 332
                }
            })), _react2.default.createElement(TabPane, { tab: '\u81EA\u7531\u5546\u54C1', key: '2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 334
                }
            }, _react2.default.createElement(_youzanProdForm2.default, { ref: 'form2', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 335
                }
            })))), _react2.default.createElement(_antd.Table, { rowSelection: rowSelection, dataSource: this.state.data ? this.state.data.entries : null, columns: this.state.columns, pagination: false, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 339
                }
            }), this.state.data && this.state.data.totalEntries !== 0 && _react2.default.createElement(_antd.Pagination, {
                defaultCurrent: 1,
                onChange: this.onPageChange,
                total: this.state.data ? this.state.data.totalEntries : 1,
                style: { marginLeft: "80%", marginTop: "10px" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 343
                }
            }));
        }
    }]);
    return ProdTable;
}(_react2.default.Component)) || _class) || _class);
exports.default = ProdTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvREJUYWJsZS90YWJsZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiVGFicyIsInF1ZXJ5UHJvZHVjdHMiLCJhZGRQcm9kdWN0IiwiZGVsZXRlUHJvZHVjdCIsInNlbmRQaWNhZFRvTGl2ZSIsIlByb2RUYWJsZSIsIm9ic2VydmVyIiwicHJvcHMiLCJxdWVyeVByb2REYXRhIiwiY3VyUGFnZSIsImNsaWVudCIsIkdyYXBoUUxDbGllbnQiLCJ1cmkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXF1ZXN0IiwicGFnZSIsInBhZ2VTaXplIiwic2hvcElkIiwic3RhdGUiLCJzaG9wSUQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0b3JlIiwiZ2V0UHJvZHVjdERhdGEiLCJzaG9wUHJvZHVjdHMiLCJlbnRyaWVzIiwibWFwIiwiZW50cnkiLCJrZXkiLCJpZCIsInNldFN0YXRlIiwiZGF0YSIsIm9uUGFnZUNoYW5nZSIsInBhZ2VOdW1iZXIiLCJvbkNsaWNrSW5zZXJ0IiwidmlzaWJsZSIsImhhbmRsZU9rIiwiZSIsIlRhYk9wdGlvbiIsInJlZnMiLCJmb3JtMSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsdWVzIiwibWVzc2FnZSIsImVycm9yIiwiaW1hZ2VzIiwiaW1nVXJsSUQiLCJqb2luIiwicHJpY2UiLCJwYXJzZUZsb2F0IiwiYmFzZWluZm8iLCJ0eXBlIiwicmVzZXRGaWVsZHMiLCJyZXNldFVybElEcyIsImNyZWF0ZVByb2R1Y3QiLCJtYWluSW1hZ2UiLCJpbWFnZXNVcmxzIiwidXJsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIm5vdGlmaWNhdGlvbiIsInN1Y2Nlc3MiLCJkdXJhdGlvbiIsImZvcm0yIiwieW91emFuIiwiaW1hZ2VJZHMiLCJpbWFnZUlkIiwicXVhbnRpdHkiLCJlcnJvcnMiLCJoYW5kbGVDYW5jZWwiLCJjYWxsYmFjayIsImdldFRhYk9wdGlvbiIsImNvbmZpcm0xIiwiSUQiLCJjYXJ0VGltZSIsIm9uU2VsZWN0Q2hhbmdlIiwic2VsZWN0ZWRSb3dLZXlzIiwiZ2V0c2VsZWN0ZWRSb3dLZXlzIiwicGFyc2VJbnQiLCJjb2x1bW5zIiwiZGF0YUluZGV4IiwidGl0bGUiLCJkYXRhVHlwZSIsIndpZHRoIiwicHJpbWFyeSIsInZhbGlkYXRvciIsInJlcXVpcmVkIiwicmVuZGVyIiwidGV4dCIsInBhdHRlcm4iLCJ0b0ZpeGVkIiwicmVjb3JkIiwiY29uZmlybSIsInJvd1NlbGVjdGlvbiIsIm9uQ2hhbmdlIiwibWFyZ2luQm90dG9tIiwidG90YWxFbnRyaWVzIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUNBLElBQU0sVUFBVSxXQUFoQixBQUFxQjs7QUFFckIsSUFBTSxnQkFBTjs7QUFtQkEsSUFBTSxhQUFOOztBQXdCQSxJQUFNLGdCQUFOOztBQWFBLElBQU0sa0JBQU47O0ksQUFTcUIsb0JBRHBCLHVCLEFBQUEsQUFBTyw0QkFBVSxXO3VDQUVoQjs7dUJBQUEsQUFBWSxPQUFPOzRDQUFBOztnSkFBQSxBQUNYOztjQURXLEFBNEVuQixnQkFBZSxVQUFBLEFBQUMsU0FBWSxBQUMxQjtnQkFBTSxhQUFhLGdCQUFKLGNBQWtCLE1BQWxCOzsrQ0FFZ0IsYUFBQSxBQUFhLFFBRjVDLEFBQWUsQUFBdUIsQUFDekIsQUFDa0IsQUFBcUIsQUFHcEQ7QUFKYSxBQUNQO0FBRmdDLEFBQ2xDLGFBRFc7bUJBS2YsQUFBTyxRQUFQLEFBQWUsZUFBZSxFQUFDLE1BQUQsQUFBTSxTQUFTLFVBQWYsQUFBeUIsSUFBSSxRQUFRLE1BQUEsQUFBSyxNQUF4RSxBQUE4QixBQUFnRCxVQUE5RSxBQUF1RixLQUNu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LFFBQU0sTUFBTixBQUFXOzhCQUFYO2dDQURGLEFBQ0U7QUFBQTtnQkFIUixBQUNJLEFBQ0UsQUFJRiwrQ0FBQyxvQkFBRDt1QkFBQSxBQUNNLEFBQ047eUJBQVMsS0FBQSxBQUFLLE1BRmQsQUFFb0IsQUFDcEI7c0JBQU0sS0FITixBQUdXLEFBQ1g7MEJBQVUsS0FKVixBQUllOzs4QkFKZjtnQ0FBQSxBQU1JO0FBTko7QUFDQSwrQkFLSyxvQkFBRCxRQUFNLGtCQUFOLEFBQXVCLEtBQUksVUFBVSxLQUFyQyxBQUEwQzs4QkFBMUM7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsV0FBUyxLQUFULEFBQWEsNEJBQU8sS0FBcEIsQUFBd0I7OEJBQXhCO2dDQUFBLEFBQ0k7QUFESjs2Q0FDSyxlQUFELFdBQWMsS0FBZCxBQUFrQjs4QkFBbEI7Z0NBRlIsQUFDSSxBQUNJLEFBRUo7QUFGSTtpQ0FFSCxjQUFELFdBQVMsS0FBVCxBQUFhLDRCQUFPLEtBQXBCLEFBQXdCOzhCQUF4QjtnQ0FBQSxBQUNJO0FBREo7NkNBQ0ssaUJBQUQsV0FBZ0IsS0FBaEIsQUFBb0I7OEJBQXBCO2dDQWpCaEIsQUFNSSxBQU1JLEFBSUksQUFDSSxBQUlaO0FBSlk7aURBSVgsTUFBRCxTQUFPLGNBQVAsQUFBcUIsY0FBYyxZQUFjLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBTSxLQUFBLEFBQUssTUFBTCxBQUFXLEtBQTVCLEFBQWlDLFVBQWxGLEFBQTRGLE1BQU8sU0FBUyxLQUFBLEFBQUssTUFBakgsQUFBdUgsU0FBUyxZQUFoSSxBQUE0STs4QkFBNUk7Z0NBckJKLEFBcUJJLEFBRUM7QUFGRDtxQkFFQyxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBWCxBQUFnQixpQkFBcEMsQUFBb0QsbUNBRW5ELE1BQUQ7Z0NBQUEsQUFDZ0IsQUFDaEI7MEJBQVUsS0FGVixBQUVlLEFBQ2Y7dUJBQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxPQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBNUIsQUFBaUMsZUFIeEMsQUFHdUQsQUFDdkQ7dUJBQU8sRUFBRSxZQUFGLEFBQWMsT0FBTyxXQUo1QixBQUlPLEFBQWdDOzhCQUp2QztnQ0ExQlIsQUFDSSxBQXlCSSxBQVFUO0FBUlM7QUFDQSxhQURBOzs7O0VBN1EyQixnQkFBTSxBO2tCQUF4QixBIiwiZmlsZSI6InRhYmxlQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRGVza3RvcC9tempiL211emhpanViYW9fd2ViIn0=
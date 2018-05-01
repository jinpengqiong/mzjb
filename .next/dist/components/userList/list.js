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

var _antd = require('antd');

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

var _graphqlRequest = require('graphql-request');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var queryUsers = '\n    query ($page: Int, $pageSize: Int) {\n        allUsers(page:$page,pageSize:$pageSize){\n            pageNumber\n            totalEntries\n            totalPages\n            entries{\n                id\n                nickname\n                phone\n                role\n            }\n        }\n    }\n';
var grantUsers = '\n    mutation ($userId: Int!) {\n        authShopBiz(userId: $userId){\n            id\n            nickname\n            phone\n            role\n        }\n    }\n';

var UserList = function (_React$Component) {
    (0, _inherits3.default)(UserList, _React$Component);

    function UserList(props) {
        (0, _classCallCheck3.default)(this, UserList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (UserList.__proto__ || (0, _getPrototypeOf2.default)(UserList)).call(this, props));

        _this.onChange = function (pageNumber) {
            _this.queryUserData(pageNumber);
        };

        _this.state = {
            data: null,
            columns: [{
                title: 'ID',
                dataIndex: 'id',
                key: 'id'
            }, {
                title: '用户名',
                dataIndex: 'nickname',
                key: 'nickname'
            }, {
                title: '手机号',
                dataIndex: 'phone',
                key: 'phone'
            }, {
                title: '用户权限',
                dataIndex: 'role',
                key: 'role'
            }, {
                title: 'Action',
                key: 'action',
                render: function render(text, record) {
                    return _react2.default.createElement('span', null, _react2.default.createElement(_antd.Popconfirm, { title: '\u786E\u5B9A\u8981\u6388\u6743\u8BE5\u7528\u6237\u5F00\u5E97\u5417?', onConfirm: function onConfirm() {
                            _this.confirm(record.id);
                        }, onCancel: _this.cancel, okText: 'Yes', cancelText: 'No' }, _react2.default.createElement('a', { href: '#' }, '\u6388\u6743\u5F00\u5E97')));
                }
            }]
        };
        return _this;
    }

    (0, _createClass3.default)(UserList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.queryUserData(1);
        }
    }, {
        key: 'queryUserData',
        value: function queryUserData(curPage) {
            var _this2 = this;

            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(queryUsers, { page: curPage, pageSize: 10 }).then(function (res) {
                res.allUsers.entries.map(function (entry) {
                    entry.key = entry.id;
                });
                console.log('res', res);
                _this2.setState({
                    data: res.allUsers
                });
            });
        }
    }, {
        key: 'grantUser',
        value: function grantUser(userId) {
            var _this3 = this;

            var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
            });
            client.request(grantUsers, { userId: userId }).then(function (res) {
                console.log('res', res);
                _antd.message.success('授权成功！');
                _this3.queryUserData(1);
            });
        }
    }, {
        key: 'confirm',
        value: function confirm(id) {
            this.grantUser(parseInt(id));
        }
    }, {
        key: 'cancel',
        value: function cancel() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', null, _react2.default.createElement(_antd.Table, { bordered: true, dataSource: this.state.data ? this.state.data.entries : null, columns: this.state.columns, pagination: false }), this.state.data && this.state.data.totalEntries !== 0 && _react2.default.createElement(_antd.Pagination, {
                defaultCurrent: 1,
                onChange: this.onChange,
                total: this.state.data ? this.state.data.totalEntries : 1,
                style: { float: "right", marginTop: "10px" } }));
        }
    }]);
    return UserList;
}(_react2.default.Component);

exports.default = UserList;
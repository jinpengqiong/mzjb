'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('_babel-runtime@6.26.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('_next@4.2.3@next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _antd = require('antd');

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

var _graphqlRequest = require('graphql-request');

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Meta = _antd.Card.Meta;

var FormItem = _antd.Form.Item;
var confirm = _antd.Modal.confirm;

var RadioGroup = _antd.Radio.Group;

var queryShops = '\n      query ($page:Int, $pageSize: Int) {\n        myShops(page:$page,pageSize:$pageSize){\n          totalEntries\n          totalPages\n          pageNumber\n          pageSize\n          entries{\n            desc\n            id\n            name\n            owner\n          }\n        }\n      }\n      ';

var addShop = '\n      mutation ($desc: String!, $name: String!){\n        createShop(desc:$desc,name:$name){\n          desc\n          id\n          name\n          owner\n        }\n      }\n      ';

var deleteShop = '\n      mutation ($id: Int!){\n        deleteShop(id: $id){\n          desc\n          id\n          name\n          owner\n        }\n      }\n      ';

var addStaff = '\n    mutation ($desc: String, $name: String, $role: StaffRole!, $shopId: Int!, $userId: Int!){\n    addStaff(\n            desc: $desc, name: $name, role: $role, shopId: $shopId, userId: $userId)\n            {\n              desc\n              id\n              name\n              role\n              userId: ID\n            }\n    }\n  ';

var bindableRooms = '\n  query($shopId: Int!) {\n    bindableRooms(shopId:$shopId){\n      bind{\n        desc\n        id\n        name\n        isBind\n      }\n      entries{\n        desc\n        id\n        name\n        isBind\n      }\n    }\n  }\n  ';
var bindRoom = '\n  mutation ($id: Int!, $room: Int!){\n    bindRoom(id:$id, room: $room){\n            room\n            id\n            name\n          }\n  }\n  ';

var MyShopList = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(MyShopList, _React$Component);

  function MyShopList(props) {
    (0, _classCallCheck3.default)(this, MyShopList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MyShopList.__proto__ || (0, _getPrototypeOf2.default)(MyShopList)).call(this, props));

    _this.onChangeShopName = function (e) {
      _this.setState({ newShopName: e.target.value });
    };

    _this.onChangeShopDesc = function (e) {
      // console.log('newShopDesc', e.target.value);
      _this.setState({ newShopDesc: e.target.value });
    };

    _this.addShops = function () {
      _this.setState({
        modalVisible: true
      });
    };

    _this.handleModalOk = function () {
      if (!_this.state.newShopDesc || !_this.state.newShopName) {
        _this.error('店铺名或描述不能为空哦！');
      } else {
        if (_this.state.data.length < 5) {
          var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('accessToken')
            }
          });
          client.request(addShop, { desc: _this.state.newShopDesc, name: _this.state.newShopName }).then(function (res) {
            console.log('abcde', res);
            _this.setState({
              modalVisible: false,
              newShopDesc: '',
              newShopName: ''
            });
            _this.getData();
          });
        } else {
          _this.error('一个账号最多只能创建5个店铺哦！');
          _this.setState({
            modalVisible: false,
            newShopDesc: '',
            newShopName: ''
          });
        }
      }
    };

    _this.showConfirm = function (ID) {
      var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
      var self = _this;
      confirm({
        title: '确定要删除此店铺吗?',
        onOk: function onOk() {
          client.request(deleteShop, { id: ID }).then(function (res) {
            if (!res.errors) {
              console.log('res', res);
              self.getData();
              _antd.message.success('删除店铺成功！');
            } else {
              _antd.message.error('删除店铺失败！');
            }
          });
        },
        onCancel: function onCancel() {}
      });
    };

    _this.hideModal = function () {
      _this.setState({
        modalVisible: false,
        newShopDesc: '',
        newShopName: ''
      });
    };

    _this.error = function (msg) {
      _antd.message.error(msg);
    };

    _this.addStaff = function () {
      var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
    };

    _this.showModal = function (id) {
      var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
      var ID = parseFloat(id);
      _this.setState({
        modalVisible1: true,
        shopID: ID
      });
      client.request(bindableRooms, { shopId: ID }).then(function (res) {
        console.log('res', res);
        _this.props.store.getBindData(res.bindableRooms);
      });
    };

    _this.handleOk1 = function (e) {
      console.log(e);
      var client = new _graphqlRequest.GraphQLClient(_uri2.default, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
      var id = parseInt(_this.state.shopID);
      var room = parseInt(_this.state.RadioValue);
      client.request(bindRoom, { id: id, room: room }).then(function (res) {
        console.log('res', res);
        _antd.message.success("绑定成功！");
        _this.setState({
          modalVisible1: false,
          RadioValue: null
        });
      });
    };

    _this.handleCancel = function (e) {
      console.log(e);
      _this.setState({
        modalVisible1: false
      });
    };

    _this.onRadioChange = function (e) {
      console.log('radio checked', e.target.value);
      _this.setState({
        RadioValue: e.target.value
      });
    };

    _this.state = {
      newShopName: '',
      newShopDesc: '',
      id: null,
      data: [],
      modalVisible: false,
      modalVisible1: false,
      RadioValue: null,
      shopID: null
    };
    return _this;
  }

  (0, _createClass3.default)(MyShopList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!localStorage.getItem('accessToken') || localStorage.getItem('accessToken') === null) {
        _index2.default.push('/login');
      } else {
        this.getData();
      }
    }
  }, {
    key: 'getData',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var variables, client, res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                variables = {
                  page: 1,
                  pageSize: 5
                };
                client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                  headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                  }
                });
                _context.next = 4;
                return client.request(queryShops, variables);

              case 4:
                res = _context.sent;

                console.log('res', res);
                this.setState({
                  data: res.myShops.entries
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref.apply(this, arguments);
      }

      return getData;
    }()
    //set room

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // console.log('state', this.state.data);
      var shopData = this.state.data && this.state.data.map(function (entry) {
        return _react2.default.createElement(_antd.Col, { span: 4, key: entry.id }, _react2.default.createElement(_antd.Card, {
          cover: _react2.default.createElement('img', { alt: 'example', src: 'http://image.mzliaoba.com/pic/mzgg/4758068401/20180323/111.png' }),
          actions: [_react2.default.createElement(_antd.Tooltip, { title: '\u8FDB\u5165\u5E97\u94FA' }, _react2.default.createElement(_antd.Icon, { type: 'shop', onClick: function onClick() {
              _index2.default.push('/products?id=' + entry.id);_this2.props.store.getCurPagePath('店铺商品');
            } })),
          // <Tooltip title="新增店员"><Icon type="user-add" onClick={ this.addStaff}/></Tooltip >,
          _react2.default.createElement(_antd.Tooltip, { title: '\u7ED1\u5B9A\u76F4\u64AD\u95F4' }, _react2.default.createElement(_antd.Icon, { type: 'user-add', onClick: function onClick() {
              _this2.showModal(entry.id);
            } })),
          // <Tooltip title="更新店铺"><Icon type="edit" onClick={() =>{this.updateShopInfo(parseInt(entry.id))}}/></Tooltip >, 
          _react2.default.createElement(_antd.Tooltip, { title: '\u5220\u9664\u5E97\u94FA' }, _react2.default.createElement(_antd.Icon, { type: 'delete', onClick: function onClick() {
              _this2.showConfirm(parseInt(entry.id));
            } }))]
        }, _react2.default.createElement(Meta, { title: entry.name, description: entry.desc })));
      });
      var RoomOptions = this.props.store.bindRoomData && this.props.store.bindRoomData.entries.map(function (room) {
        return _react2.default.createElement(_antd.Radio, { value: room.id, key: room.id }, room.name);
      });
      return _react2.default.createElement('div', null, this.props.store.userRole && this.props.store.userRole.indexOf('shop_biz') !== -1 && _react2.default.createElement(_antd.Affix, { offsetTop: 8, target: function target() {
          return document.getElementById('main-content-div');
        } }, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.addShops }, _react2.default.createElement(_antd.Icon, { type: 'plus-circle-o' }), '\u65B0\u589E\u5E97\u94FA')), _react2.default.createElement(_antd.Modal, { title: '\u65B0\u589E\u5E97\u94FA', visible: this.state.modalVisible, onOk: this.handleModalOk, onCancel: this.hideModal, maskClosable: false, width: 550 }, _react2.default.createElement(_antd.Input, {
        placeholder: '\u8BF7\u8F93\u5165\u5E97\u94FA\u540D',
        prefix: _react2.default.createElement(_antd.Icon, { type: 'shop', style: { color: 'rgba(0,0,0,.25)' } }),
        value: this.state.newShopName,
        onChange: this.onChangeShopName
      }), _react2.default.createElement(_antd.Input, {
        placeholder: '\u8BF7\u8F93\u5165\u5E97\u94FA\u63CF\u8FF0',
        style: { marginTop: '13px' },
        prefix: _react2.default.createElement(_antd.Icon, { type: 'idcard', style: { color: 'rgba(0,0,0,.25)' } }),
        value: this.state.newShopDesc,
        onChange: this.onChangeShopDesc
      })), _react2.default.createElement(_antd.Modal, { title: '\u7ED1\u5B9A\u76F4\u64AD\u95F4', visible: this.state.modalVisible1, onOk: this.handleOk1, onCancel: this.handleCancel, maskClosable: false, width: 550 }, '\u53EF\u7ED1\u5B9A\u76F4\u64AD\u95F4\uFF1A', _react2.default.createElement(RadioGroup, { onChange: this.onRadioChange, value: this.state.RadioValue }, this.props.store.bindRoomData && this.props.store.bindRoomData.entries.length === 0 ? "暂无可绑定直播间" : RoomOptions), _react2.default.createElement('p', null, '\u5DF2\u7ED1\u5B9A\u76F4\u64AD\u95F4\uFF1A', this.props.store.bindRoomData && this.props.store.bindRoomData.bind ? this.props.store.bindRoomData.bind.name : null)), _react2.default.createElement(_antd.Row, { style: { marginTop: 40 }, type: 'flex', justify: 'space-around' }, shopData.length === 0 ? '暂无创建店铺' : shopData));
    }
  }]);
  return MyShopList;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyShopList;
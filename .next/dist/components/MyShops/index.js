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

var _dec,
    _class,
    _jsxFileName = '/Users/mac/Desktop/mzjb/muzhijubao_web/components/MyShops/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('_next@4.2.3@next/dist/lib/router/index.js');

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
var bindRoom = '\n  mutation ($shopId: Int!, $room: Int!){\n    bindRoom(shopId:$shopId, room: $room){\n            room\n            id\n            name\n          }\n  }\n  ';

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
      var shopId = parseInt(_this.state.shopID);
      var room = parseInt(_this.state.RadioValue);
      client.request(bindRoom, { shopId: shopId, room: room }).then(function (res) {
        // console.log('res', res);
        if (res.errors) {
          _antd.message.success("店铺暂无可绑定直播间，绑定失败！");
        } else {
          _antd.message.success("绑定成功！");
          _this.setState({
            modalVisible1: false,
            RadioValue: null
          });
        }
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
        return _react2.default.createElement(_antd.Col, { span: 4, key: entry.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          }
        }, _react2.default.createElement(_antd.Card, {
          cover: _react2.default.createElement('img', { alt: 'example', src: 'http://image.mzliaoba.com/pic/mzgg/4758068401/20180323/111.png', __source: {
              fileName: _jsxFileName,
              lineNumber: 289
            }
          }),
          actions: [_react2.default.createElement(_antd.Tooltip, { title: '\u8FDB\u5165\u5E97\u94FA', __source: {
              fileName: _jsxFileName,
              lineNumber: 291
            }
          }, _react2.default.createElement(_antd.Icon, { type: 'shop', onClick: function onClick() {
              _index2.default.push('/products?id=' + entry.id);_this2.props.store.getCurPagePath('店铺商品');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 291
            }
          })),
          // <Tooltip title="新增店员"><Icon type="user-add" onClick={ this.addStaff}/></Tooltip >,
          _react2.default.createElement(_antd.Tooltip, { title: '\u7ED1\u5B9A\u76F4\u64AD\u95F4', __source: {
              fileName: _jsxFileName,
              lineNumber: 293
            }
          }, _react2.default.createElement(_antd.Icon, { type: 'team', onClick: function onClick() {
              _this2.showModal(entry.id);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 293
            }
          })),
          // <Tooltip title="更新店铺"><Icon type="edit" onClick={() =>{this.updateShopInfo(parseInt(entry.id))}}/></Tooltip >, 
          _react2.default.createElement(_antd.Tooltip, { title: '\u5220\u9664\u5E97\u94FA', __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            }
          }, _react2.default.createElement(_antd.Icon, { type: 'delete', onClick: function onClick() {
              _this2.showConfirm(parseInt(entry.id));
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            }
          }))],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          }
        }, _react2.default.createElement(Meta, { title: entry.name, description: entry.desc, __source: {
            fileName: _jsxFileName,
            lineNumber: 298
          }
        })));
      });
      var RoomOptions = this.props.store.bindRoomData && this.props.store.bindRoomData.entries.map(function (room) {
        return _react2.default.createElement(_antd.Radio, { value: room.id, key: room.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          }
        }, room.name);
      });
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, this.props.store.userRole && this.props.store.userRole.indexOf('shop_biz') !== -1 && _react2.default.createElement(_antd.Affix, { offsetTop: 8, target: function target() {
          return document.getElementById('main-content-div');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.addShops, __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'plus-circle-o', __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }), '\u65B0\u589E\u5E97\u94FA')), _react2.default.createElement(_antd.Modal, { title: '\u65B0\u589E\u5E97\u94FA', visible: this.state.modalVisible, onOk: this.handleModalOk, onCancel: this.hideModal, maskClosable: false, width: 550, __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, _react2.default.createElement(_antd.Input, {
        placeholder: '\u8BF7\u8F93\u5165\u5E97\u94FA\u540D',
        prefix: _react2.default.createElement(_antd.Icon, { type: 'shop', style: { color: 'rgba(0,0,0,.25)' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 325
          }
        }),
        value: this.state.newShopName,
        onChange: this.onChangeShopName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }), _react2.default.createElement(_antd.Input, {
        placeholder: '\u8BF7\u8F93\u5165\u5E97\u94FA\u63CF\u8FF0',
        style: { marginTop: '13px' },
        prefix: _react2.default.createElement(_antd.Icon, { type: 'idcard', style: { color: 'rgba(0,0,0,.25)' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          }
        }),
        value: this.state.newShopDesc,
        onChange: this.onChangeShopDesc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      })), _react2.default.createElement(_antd.Modal, { title: '\u7ED1\u5B9A\u76F4\u64AD\u95F4', visible: this.state.modalVisible1, onOk: this.handleOk1, onCancel: this.handleCancel, maskClosable: false, width: 550, __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }, '\u53EF\u7ED1\u5B9A\u76F4\u64AD\u95F4\uFF1A', _react2.default.createElement(RadioGroup, { onChange: this.onRadioChange, value: this.state.RadioValue, __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, this.props.store.bindRoomData && this.props.store.bindRoomData.entries.length === 0 ? "暂无" : RoomOptions), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      }, '\u5DF2\u7ED1\u5B9A\u76F4\u64AD\u95F4\uFF1A', this.props.store.bindRoomData && this.props.store.bindRoomData.bind ? this.props.store.bindRoomData.bind.name : "暂无")), _react2.default.createElement(_antd.Row, { style: { marginTop: 40 }, type: 'flex', justify: 'space-around', __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, shopData.length === 0 ? '暂无创建店铺' : shopData));
    }
  }]);
  return MyShopList;
}(_react2.default.Component)) || _class) || _class);
exports.default = MyShopList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlTaG9wcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIkZvcm1JdGVtIiwiRm9ybSIsIkl0ZW0iLCJjb25maXJtIiwiTW9kYWwiLCJSYWRpb0dyb3VwIiwiUmFkaW8iLCJHcm91cCIsInF1ZXJ5U2hvcHMiLCJhZGRTaG9wIiwiZGVsZXRlU2hvcCIsImFkZFN0YWZmIiwiYmluZGFibGVSb29tcyIsImJpbmRSb29tIiwiTXlTaG9wTGlzdCIsIm9ic2VydmVyIiwicHJvcHMiLCJvbkNoYW5nZVNob3BOYW1lIiwiZSIsInNldFN0YXRlIiwibmV3U2hvcE5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlU2hvcERlc2MiLCJuZXdTaG9wRGVzYyIsImFkZFNob3BzIiwibW9kYWxWaXNpYmxlIiwiaGFuZGxlTW9kYWxPayIsInN0YXRlIiwiZXJyb3IiLCJkYXRhIiwibGVuZ3RoIiwiY2xpZW50IiwiR3JhcGhRTENsaWVudCIsInVyaSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlcXVlc3QiLCJkZXNjIiwibmFtZSIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGF0YSIsInNob3dDb25maXJtIiwiSUQiLCJzZWxmIiwidGl0bGUiLCJvbk9rIiwiaWQiLCJlcnJvcnMiLCJtZXNzYWdlIiwic3VjY2VzcyIsIm9uQ2FuY2VsIiwiaGlkZU1vZGFsIiwibXNnIiwic2hvd01vZGFsIiwicGFyc2VGbG9hdCIsIm1vZGFsVmlzaWJsZTEiLCJzaG9wSUQiLCJzaG9wSWQiLCJzdG9yZSIsImdldEJpbmREYXRhIiwiaGFuZGxlT2sxIiwicGFyc2VJbnQiLCJyb29tIiwiUmFkaW9WYWx1ZSIsImhhbmRsZUNhbmNlbCIsIm9uUmFkaW9DaGFuZ2UiLCJSb3V0ZXIiLCJwdXNoIiwidmFyaWFibGVzIiwicGFnZSIsInBhZ2VTaXplIiwibXlTaG9wcyIsImVudHJpZXMiLCJzaG9wRGF0YSIsIm1hcCIsImVudHJ5IiwiZ2V0Q3VyUGFnZVBhdGgiLCJSb29tT3B0aW9ucyIsImJpbmRSb29tRGF0YSIsInVzZXJSb2xlIiwiaW5kZXhPZiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb2xvciIsIm1hcmdpblRvcCIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7QUFDQTs7QUFDQTs7Ozs7O0ksQUFMUSxPQUFTLE0sSyxBQUFUOztBQUNSLElBQU0sV0FBVyxXQUFqQixBQUFzQjtBQUN0QixJQUFNLFVBQVUsWUFBaEIsQUFBc0I7O0FBSXRCLElBQU0sYUFBYSxZQUFuQixBQUF5Qjs7QUFFekIsSUFBTSxhQUFOOztBQWlCQSxJQUFNLFVBQU47O0FBV0EsSUFBTSxhQUFOOztBQVdFLElBQU0sV0FBTjs7QUFjQSxJQUFNLGdCQUFOO0FBa0JGLElBQU0sV0FBTjs7SUFXTSxBLHFCQURMLHVCQUFBLEFBQU8sQSw0QkFBVSxXO3NDQUVoQjs7c0JBQUEsQUFBWSxPQUFNO3dDQUFBOzs4SUFBQSxBQUNWOztVQURVLEFBcUJsQixtQkFBbUIsVUFBQSxBQUFDLEdBQU0sQUFDeEI7WUFBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLEVBQUEsQUFBRSxPQUEvQixBQUFjLEFBQXdCLEFBQ3ZDO0FBdkJpQjs7VUFBQSxBQXlCbEIsbUJBQW1CLFVBQUEsQUFBQyxHQUFNLEFBQ3hCO0FBQ0E7WUFBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLEVBQUEsQUFBRSxPQUEvQixBQUFjLEFBQXdCLEFBQ3ZDO0FBNUJpQjs7VUFBQSxBQTZDbEIsV0FBVyxZQUFNLEFBQ2Y7WUFBQSxBQUFLO3NCQUFMLEFBQWMsQUFDRSxBQUVqQjtBQUhlLEFBQ1o7QUEvQ2M7O1VBQUEsQUFtRGxCLGdCQUFlLFlBQU0sQUFDbkI7VUFBSSxDQUFDLE1BQUEsQUFBSyxNQUFOLEFBQVksZUFB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QUpaLEFBSWlCOztvQkFKakI7c0JBREYsQUFDRSxBQU1BO0FBTkE7QUFDRSx3Q0FLRCxNQUFEO3FCQUFBLEFBQ2MsQUFDWjtlQUFPLEVBQUUsV0FGWCxBQUVTLEFBQVksQUFDbkI7OENBQVMsTUFBRCxRQUFNLE1BQU4sQUFBVyxVQUFTLE9BQU8sRUFBRSxPQUE3QixBQUEyQixBQUFTO3NCQUFwQzt3QkFIVixBQUdVLEFBQ1I7QUFEUTtTQUFBO2VBQ0QsS0FBQSxBQUFLLE1BSmQsQUFJb0IsQUFDbEI7a0JBQVUsS0FMWixBQUtpQjs7b0JBTGpCO3NCQWpCSixBQVVFLEFBT0UsQUFRRjtBQVJFO0FBQ0UsMkJBT0gsb0JBQUQsU0FBTyxPQUFQLEFBQWEsa0NBQVEsU0FBUyxLQUFBLEFBQUssTUFBbkMsQUFBeUMsZUFBZSxNQUFNLEtBQTlELEFBQW1FLFdBQVcsVUFBVSxLQUF4RixBQUE2RixjQUFjLGNBQTNHLEFBQXlILE9BQU8sT0FBaEksQUFBdUk7b0JBQXZJO3NCQUFBO0FBQUE7U0FFRSw4REFBQyxjQUFELGNBQVksVUFBVSxLQUF0QixBQUEyQixlQUFlLE9BQU8sS0FBQSxBQUFLLE1BQXRELEFBQTREO29CQUE1RDtzQkFBQSxBQUNJO0FBREo7Y0FDSSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLGdCQUFnQixLQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsYUFBakIsQUFBOEIsUUFBOUIsQUFBc0MsV0FBeEUsQUFBbUYsSUFBbkYsQUFBd0YsT0FIN0YsQUFFRSxBQUNpRyxBQUVqRyw4QkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBWSxtREFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLGdCQUFnQixLQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsYUFBbkQsQUFBZ0UsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsYUFBakIsQUFBOEIsS0FBckcsQUFBMEcsT0E5QnpILEFBeUJFLEFBS0UsQUFBNEgsQUFFOUgsd0JBQUMsb0JBQUQsT0FBSyxPQUFPLEVBQUUsV0FBZCxBQUFZLEFBQWEsTUFBTSxNQUEvQixBQUFvQyxRQUFPLFNBQTNDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNJO0FBREo7a0JBQ0ksQUFBUyxXQUFULEFBQW1CLElBQW5CLEFBQXNCLFdBbEM5QixBQUNFLEFBZ0NFLEFBQ3FDLEFBSTFDOzs7O0VBL1BzQixnQkFBTSxBO2tCQWtRaEIsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWFjL0Rlc2t0b3AvbXpqYi9tdXpoaWp1YmFvX3dlYiJ9
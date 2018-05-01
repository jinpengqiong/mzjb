'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('_babel-runtime@6.26.0@babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
    _jsxFileName = 'C:\\Users\\Administrator\\Desktop\\mzjb\\components\\DBTable\\index.js';
// import ajax from '../../utils/ajax';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _Error = require('../Error');

var _Error2 = _interopRequireDefault(_Error);

var _InnerTable = require('./InnerTable.js');

var _InnerTable2 = _interopRequireDefault(_InnerTable);

var _InnerPagination = require('./InnerPagination.js');

var _InnerPagination2 = _interopRequireDefault(_InnerPagination);

var _TableUtils = require('./TableUtils.js');

var _TableUtils2 = _interopRequireDefault(_TableUtils);

require('./index.less');

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

var _Logger = require('../../utils/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _graphqlRequest = require('graphql-request');

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var queryProducts = '\n      query ($page:Int, $pageSize: Int, $shopId:Int) {\n        shopProducts(page:$page,pageSize:$pageSize,shopId:$shopId){\n          pageSize,\n          pageNumber\n          totalPages\n          totalEntries\n          entries{\n            id\n            title\n            mainImage\n            price\n            desc\n            detailUrl\n          }\n        }\n      }\n    ';

var logger = _Logger2.default.getLogger('DBTable');

/**
 * 操作数据库中的一张表的组件, 又可以分为3个组件: 表单+表格+分页器
 */
var DBTable = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(DBTable, _React$Component);

  // 父组件要保存子组件的状态...非常蛋疼...
  // 破坏了子组件的"封闭"原则
  // 但这是官方推荐的做法: https://facebook.github.io/react/docs/lifting-state-up.html

  // 注意: 向父组件传状态, 通过回调函数的形式
  // 从父组件接收状态, 通过props的形式
  function DBTable(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, DBTable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DBTable.__proto__ || (0, _getPrototypeOf2.default)(DBTable)).call(this, props));

    _this.refresh = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.inited) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return');

            case 2:
              _context.next = 4;
              return _this.select(_this.state.currentPage, _this.state.shopID);

            case 4:
              res = _context.sent;

              _antd.message.success('查询成功');
              // console.log('111',res);
              if (!res.errors) {
                _this.setState({
                  data: res.shopProducts.entries,
                  total: res.shopProducts.totalEntries,
                  tableLoading: false
                });
              } else {
                _this.error(res.message);
              }

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.error = function (errorMsg) {
      // 对于错误信息, 要很明显的提示用户, 这个通知框要用户手动关闭
      _antd.notification.error({
        message: '出错啦!',
        description: '\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458, \u9519\u8BEF\u4FE1\u606F: ' + errorMsg,
        duration: 0
      });
      _this.setState({ tableLoading: false });
    };

    _this.handlePageChange = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(page) {
        var res;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                logger.debug('handlePageChange, page = %d', page);
                _context2.next = 3;
                return _this.select(page, _this.state.shopID);

              case 3:
                res = _context2.sent;

                if (!res.error) {
                  _this.setState({
                    currentPage: page,
                    data: res.shopProducts.entries,
                    total: res.shopProducts.totalEntries,
                    tableLoading: false
                  });
                } else {
                  _this.error(res.message);
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {
      // 本身的状态
      loadingSchema: false, // 是否正在从远程加载schema

      // 表格组件的状态
      data: [], // 表格中显示的数据
      tableLoading: false, // 表格是否是loading状态

      // 分页器的状态
      currentPage: 1, // 当前第几页, 注意页码是从1开始的, 以前总是纠结页码从0还是1开始, 这里统一下, 跟显示给用户的一致
      pageSize: 10, // pageSize默认值50, 这个值一旦初始化就是不可变的

      // shopID: null,
      total: 0, // 总共有多少条数据
      shopID: parseInt(props.shopID)
    };
    return _this;
  }
  // 这里有个很有意思的问题, 就是异步操作的局限性, 你没办法控制callback何时被调用
  // 我本来的写法是这样的:
  // async componentWillMount() {
  //   // tryFetchSchema方法可能是同步也可能是异步, 跟tableConfig.asyncSchema有关
  //   // 如果是同步调用, 会直接返回一个resolved状态的promise
  //   // 如果是异步调用, 会返回一个pending状态的promise
  //   // 注意, 所有async方法, 直接调用的话, 必然会返回promise, 这是语言特性决定的
  //   const res = await this.tryFetchSchema(this.props);
  //   this.updateTableState(res);
  //   if (this.state.loadingSchema) {
  //     this.setState({loadingSchema: false}, this.refresh);
  //   }
  // }
  // 注意其中的tryFetchSchema可能同步也可能异步
  // 我本来期望着如果是同步调用的话, 下面的updateTableState语句会立刻执行, 如果是异步调用, 就等异步操作结束后再执行updateTableState
  // 但实际情况是, 即使是同步调用(直接返回一个resolved状态的promise), 下面的代码也不会立刻执行
  // 这可能和async函数的特性有关, 即使直接return一个常量, 也会被当作异步操作对待
  // async/await语义只保证语句的"执行顺序", 而不保证执行的"间隔"
  // 同理, 各种回调都是不能保证事件发生后"立即"被执行的, 这是js event loop的局限, 也许应该说是"特性"?

  // 于是我只能改成下面这种普通的callback方式, 手动控制何时执行callback, 不能用async/await了
  // 如果是同步操作就立刻执行callback, 否则等异步操作结束再执行callback

  // 另一个有意思的问题就是, 如果将react的生命周期方法做成async的会怎样?
  // 关键要了解async函数的执行逻辑, 尤其是多个async函数嵌套时, 了解代码执行权的交换过程
  // 如果知道async/await的本质就是生成器, 而生成器的本质就是协程, 那就很好理解了


  (0, _createClass3.default)(DBTable, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this3 = this;

      // 处理url参数
      // this.processQueryParams();
      // 组件初始化时尝试获取schema
      this.tryFetchSchema(this.props, function (res) {
        _this3.updateTableState(res);
        // 这个参数用于判断获取schema是同步还是异步
        if (_this3.state.loadingSchema) {
          _this3.setState({
            loadingSchema: false
          }, _this3.refresh);
        }
      });
    }
    //
    /**
     * 刚进入页面时触发一次查询
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // 如果是异步获取schema的话, 后面有callback会调用refresh的, 这里就不用调了
      // if (!this.state.loadingSchema) {
      //   this.refresh();
      // }
      this.select(1, this.state.shopID);
    }

    // 在react router中切换时, 组件不会重新mount, 只有props会变化

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // 普通模式下, 所有的CRUD操作都是通过同一个DBTable组件进行的, 只是传入的tableName不同而已
      // 但是在tab模式下, 为了防止不同tab之间的干扰, 每个tab下都必须是一个"独立"的组件, 换句话说有很多不同DBTable组件的实例
      // 类似单例和多实例的区别
      if (_config2.default.tabMode.enable === true) {
        logger.debug('ignore props update under tabMode');
        return;
      }
      // FIXME: hack, 和App组件中componentWillReceiveProps方法类似
      // const action = this.props.location.action;
      // if (action === 'PUSH') {
      //   return;
      // }
      logger.debug('receive new props and try to render, nextProps = %o', nextProps);
      // 应该只有react router会触发这个方法
      // if (nextProps.routes) {
      //   // 如果表名不变的话, 没必要重新加载schema/refresh, 直接return
      //   const routes = nextProps.routes;
      //   const nextTableName = routes[routes.length - 1].tableName;
      //   if (nextTableName === this.tableName) {
      //     return;
      //   }
    }

    // 在表名切换后要做什么?
    // 1. 根据新的表名重新获取schema
    // 2. 还原初始状态
    // 3. 调用一次refresh(), 重新查询数据

    // 和组件挂载时类似, 同样注意区分同步/异步
    // this.tryFetchSchema(nextProps, (res) => {
    //   this.updateTableState(res);
    //   // 处理url参数
    //   // this.state.queryObj = {};
    //   this.processQueryParams();
    //   this.setState({
    //     data: [],
    //     tableLoading: false,
    //     currentPage: 1,
    //     total: 0,
    //     loadingSchema: false,
    //   }, this.refresh);
    // });

    /**
     * 尝试获取schema, 可能是同步也可能是异步
     * 获取schema成功后, 调用回调
     *
     * @param props
     * @param callback
     * @returns {undefined}
     */

  }, {
    key: 'tryFetchSchema',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props, callback) {
        var tableName, tableConfig, tmp, res;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // console.log('props', props);
                // const routes = props.routes;
                // const shopID = props.params.id;
                // 这个tableName是路由表配置中传过来的
                // 可以用这个方法向组件传值
                tableName = this.props.tableName;

                if (!tableName) {
                  _context3.next = 5;
                  break;
                }

                logger.info('init component DBTable with tableName = %s', tableName);
                _context3.next = 9;
                break;

              case 5:
                logger.error('can not find tableName, check your router config');
                this.inited = false; // 是否成功获取schema
                this.errorMsg = '找不到表名, 请检查路由配置'; // 如果没能成功获取schema, 错误信息是什么?
                return _context3.abrupt('return');

              case 9:
                tableConfig = _TableUtils2.default.getTableConfig(tableName);

                // 这里注意, 区分同步/异步

                tmp = _TableUtils2.default.getCacheSchema(tableName);

                if (tmp) {
                  _context3.next = 20;
                  break;
                }

                if (!(tableConfig.asyncSchema === true)) {
                  _context3.next = 19;
                  break;
                }

                // 如果是异步的, 必须给用户一个loading提示
                this.state.loadingSchema = true;
                _context3.next = 16;
                return _TableUtils2.default.getRemoteSchema(tableName, this.state.shopID, this.state.currentPage);

              case 16:
                tmp = _context3.sent;
                _context3.next = 20;
                break;

              case 19:
                tmp = _TableUtils2.default.getLocalSchema(tableName);

              case 20:
                res = (0, _extends3.default)({}, tmp, { tableName: tableName, tableConfig: tableConfig });

                callback(res);

              case 22:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function tryFetchSchema(_x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return tryFetchSchema;
    }()

    /**
     * fetch schema后, 更新当前组件的状态, 主要是更新一些this.XXX变量
     * 必须和tryFetchSchema方法配合使用
     *
     * @param input
     */

  }, {
    key: 'updateTableState',
    value: function updateTableState(input) {
      // 其实很多这种this.xxx变量也可以做成状态, 看情况了
      // 关键是这些变量变化时, 是否要触发重新render?

      // 这两项是肯定会有的
      this.tableName = input.tableName;
      this.tableConfig = input.tableConfig;

      // if (input.querySchema) {
      //   this.querySchema = input.querySchema;
      // } else {
      //   this.inited = false;
      //   this.errorMsg = `加载${input.tableName}表的querySchema出错, 请检查配置`;
      //   return;
      // }

      if (input.dataSchema) {
        this.dataSchema = input.dataSchema;
      } else {
        this.inited = false;
        this.errorMsg = '\u52A0\u8F7D' + input.tableName + '\u8868\u7684dataSchema\u51FA\u9519, \u8BF7\u68C0\u67E5\u914D\u7F6E';
        return;
      }

      // 如果一切正常, 设置init=true
      this.inited = true;
    }

    /**
     * 按当前的查询条件重新查询一次
     */

    /**
     * 弹出错误信息
     *
     * @param errorMsg
     */

  }, {
    key: 'select',

    /**
     * 向服务端发送select请求
     *
     * @param queryObj 包含了form中所有的查询条件, 再加上page和pageSize, 后端就能拼成完整的sql
     * @param page
     * @param pageSize
     * @returns {Promise}
     */

    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(page, shopID) {
        var variables, hide, client, res, _res;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // 为啥这个方法不用箭头函数, 但也不会有this的问题呢? 我猜测是因为这个方法都是被其他箭头函数调用的, 所以也会自动bind this
                // 同理上面的error函数似乎也不需要是箭头函数
                // const tmpObj = Object.assign({}, queryObj);  // 创建一个新的临时对象, 其实直接修改queryObj也可以
                // tmpObj.page = page;
                // tmpObj.pageSize = pageSize;
                variables = {
                  page: page,
                  pageSize: 10,
                  shopId: shopID
                  // 每次查询时, 要显示一个提示, 同时table组件也要变为loading状态
                };
                hide = _antd.message.loading('正在查询...', 0);
                client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                  headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                  }
                });
                _context4.prev = 3;

                // const CRUD = ajax.CRUD(this.tableName);
                this.setState({ tableLoading: true });
                _context4.next = 7;
                return client.request(queryProducts, variables);

              case 7:
                res = _context4.sent;

                // console.log('res',res)
                // 请求结束后, 提示消失, 但不要急着还原tableLoading的状态, 让上层调用的方法去还原
                hide();
                this.props.store.getProductData(res.shopProducts.entries);
                this.setState({
                  currentPage: page,
                  data: res.shopProducts.entries,
                  total: res.shopProducts.totalEntries,
                  tableLoading: false
                });
                // console.log('res111',res);
                return _context4.abrupt('return', _promise2.default.resolve(res));

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4['catch'](3);
                // 统一的异常处理, 上层方法不用关心
                logger.error('select exception, %o', _context4.t0);
                hide();
                _res = {}; // 手动构造一个res返回

                _res.success = false;
                _res.message = '\u7F51\u7EDC\u8BF7\u6C42\u51FA\u9519: ' + _context4.t0.message;
                return _context4.abrupt('return', _promise2.default.resolve(_res));

              case 22:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 14]]);
      }));

      function select(_x4, _x5) {
        return _ref4.apply(this, arguments);
      }

      return select;
    }()

    /**
     * 切换分页时触发查询
     *
     * @param page
     */

  }, {
    key: 'render',

    /**
     * 切换每页显示数量时触发查询
     *
     * @param page
     */
    // handleShowPageChange = async(page, pageSize) => {
    //   logger.debug('handleShowPageSizeChange, page = %d', page);
    //   const res = await this.select(page, 1);
    //   if (res.success) {
    //     this.setState({
    //       currentPage: page,
    //       data: res.data.shopProducts.entries,
    //       total: res.data.shopProducts.totalPages,
    //       tableLoading: false,
    //     });
    //   } else {
    //     this.error(res.message);
    //   }
    // };

    value: function render() {
      console.log('state', this.state);
      // 一段有些tricky的代码, 某些情况下显示一个特殊的loading
      // 主要是为了用户第一次进入的时候, 交互更友好
      // FIXME: 这段代码非常丑, (!this.inited && !this.errorMsg)这个条件是为了hack一个react-router的问题
      // 如果从首页点击侧边栏进入DBTable组件, 会依次触发componentWillMount和componentWillReceiveProps, 而直接从url进入的话则只会触发componentWillMount
      // 感觉react-router坑好多啊
      if (this.state.loadingSchema && (!this.notFirstRender || !this.inited && !this.errorMsg)) {
        this.notFirstRender = true;
        return _react2.default.createElement(_antd.Spin, { tip: 'loading schema...', spinning: this.state.loadingSchema, delay: 500, __source: {
            fileName: _jsxFileName,
            lineNumber: 388
          }
        }, _react2.default.createElement('div', { style: { height: '150px', width: '100%' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 389
          }
        }));
      }
      this.notFirstRender = true;

      // 如果没能成功加载schema, 显示错误信息
      // 注意从错误信息切换到另一个表时, 也可能出现loading状态
      if (!this.inited) {
        return _react2.default.createElement(_antd.Spin, { tip: 'loading schema...', spinning: this.state.loadingSchema, delay: 500, __source: {
            fileName: _jsxFileName,
            lineNumber: 399
          }
        }, _react2.default.createElement(_Error2.default, { errorMsg: this.errorMsg, __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          }
        }));
      }

      // 1. 之前传props是直接{...this.state}, 感觉会影响效率, 传很多无用的属性
      // 2. 父组件传进去的方法名都是parentHandleXXX
      // 3. InnerForm和InnerPagination都是无状态的, 但InnerTable还是要维护自己的一些状态

      return _react2.default.createElement(_antd.Spin, { spinning: this.state.loadingSchema, delay: 500, __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, _react2.default.createElement(_InnerTable2.default, { data: this.state.data, shopID: this.state.shopID, tableLoading: this.state.tableLoading,
        schema: this.dataSchema, refresh: this.refresh,
        tableConfig: this.tableConfig, tableName: this.tableName, __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        }
      }), _react2.default.createElement(_InnerPagination2.default, { currentPage: this.state.currentPage ? this.state.currentPage : 1, total: this.state.total, pageSize: this.state.pageSize,
        parentHandlePageChange: this.handlePageChange, tableConfig: this.tableConfig, tableName: this.tableName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }));
    }
  }]);
  return DBTable;
}(_react2.default.Component)) || _class) || _class);
exports.default = DBTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXERCVGFibGVcXGluZGV4LmpzIl0sIm5hbWVzIjpbInF1ZXJ5UHJvZHVjdHMiLCJsb2dnZXIiLCJnZXRMb2dnZXIiLCJEQlRhYmxlIiwicHJvcHMiLCJyZWZyZXNoIiwiaW5pdGVkIiwic2VsZWN0Iiwic3RhdGUiLCJjdXJyZW50UGFnZSIsInNob3BJRCIsInJlcyIsInN1Y2Nlc3MiLCJlcnJvcnMiLCJzZXRTdGF0ZSIsImRhdGEiLCJzaG9wUHJvZHVjdHMiLCJlbnRyaWVzIiwidG90YWwiLCJ0b3RhbEVudHJpZXMiLCJ0YWJsZUxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJlcnJvck1zZyIsImRlc2NyaXB0aW9uIiwiZHVyYXRpb24iLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZSIsImRlYnVnIiwibG9hZGluZ1NjaGVtYSIsInBhZ2VTaXplIiwicGFyc2VJbnQiLCJ0cnlGZXRjaFNjaGVtYSIsInVwZGF0ZVRhYmxlU3RhdGUiLCJuZXh0UHJvcHMiLCJ0YWJNb2RlIiwiZW5hYmxlIiwiY2FsbGJhY2siLCJ0YWJsZU5hbWUiLCJpbmZvIiwidGFibGVDb25maWciLCJnZXRUYWJsZUNvbmZpZyIsInRtcCIsImdldENhY2hlU2NoZW1hIiwiYXN5bmNTY2hlbWEiLCJnZXRSZW1vdGVTY2hlbWEiLCJnZXRMb2NhbFNjaGVtYSIsImlucHV0IiwiZGF0YVNjaGVtYSIsInZhcmlhYmxlcyIsInNob3BJZCIsImhpZGUiLCJsb2FkaW5nIiwiY2xpZW50IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVxdWVzdCIsInN0b3JlIiwiZ2V0UHJvZHVjdERhdGEiLCJyZXNvbHZlIiwiY29uc29sZSIsImxvZyIsIm5vdEZpcnN0UmVuZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BOzs7QUFQQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTSxnQkFBTjs7QUFtQkEsSUFBTSxTQUFTLGlCQUFBLEFBQU8sVUFBdEIsQUFBZSxBQUFpQjs7QUFFaEM7OztJQUlNLEEsa0JBREwsdUIsQUFBQSxBQUFPO21DQUdOOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO21CQUFBLEFBQVksT0FBTztpQkFBQTs7d0NBQUE7O3dJQUFBLEFBQ1g7O1VBRFcsQUF3TW5CLG1GQUFVLG1CQUFBO1VBQUE7b0VBQUE7a0JBQUE7MkNBQUE7aUJBQUE7a0JBRUgsTUFGRyxBQUVFLFFBRkY7Z0NBQUE7QUFBQTtBQUFBOztxQ0FBQTs7aUJBQUE7OEJBQUE7cUJBTVUsTUFBQSxBQUFLLE9BQU8sTUFBQSxBQUFLLE1BQWpCLEFBQXVCLGFBQWEsTUFBQSxBQUFLLE1BTm5ELEFBTVUsQUFBK0M7O2lCQUEzRDtBQU5FLDZCQU9SOzs0QkFBQSxBQUFRLFFBQVIsQUFBZ0IsQUFDaEI7QUFDQTtrQkFBSSxDQUFDLElBQUwsQUFBUyxRQUFRLEFBQ2Y7c0JBQUEsQUFBSzt3QkFDRyxJQUFBLEFBQUksYUFERSxBQUNXLEFBQ3ZCO3lCQUFPLElBQUEsQUFBSSxhQUZDLEFBRVksQUFDeEI7Z0NBSEYsQUFBYyxBQUdFLEFBRWpCO0FBTGUsQUFDWjtBQUZKLHFCQU1PLEFBQ0w7c0JBQUEsQUFBSyxNQUFNLElBQVgsQUFBZSxBQUNoQjtBQWpCTzs7aUJBQUE7aUJBQUE7OEJBQUE7O0FBQUE7a0JBQUE7QUF4TVM7O1VBQUEsQUFpT25CLFFBQVEsVUFBQSxBQUFDLFVBQWEsQUFDcEI7QUFDQTt5QkFBQSxBQUFhO2lCQUFNLEFBQ1IsQUFDVDswRkFGaUIsQUFFYSxBQUM5QjtrQkFIRixBQUFtQixBQUdQLEFBRVo7QUFMbUIsQUFDakI7WUFJRixBQUFLLFNBQVMsRUFBQyxjQUFmLEFBQWMsQUFBZSxBQUM5QjtBQXpPa0I7O1VBQUEsQUFxU25CLCtCQXJTbUI7MkZBcVNBLGtCQUFBLEFBQU0sTUFBTjtZQUFBO3dFQUFBO29CQUFBOytDQUFBO21CQUNqQjt1QkFBQSxBQUFPLE1BQVAsQUFBYSwrQkFESSxBQUNqQixBQUE0QztpQ0FEM0I7dUJBRUMsTUFBQSxBQUFLLE9BQUwsQUFBWSxNQUFNLE1BQUEsQUFBSyxNQUZ4QixBQUVDLEFBQTZCOzttQkFBekM7QUFGVyxnQ0FHakI7O29CQUFJLENBQUMsSUFBTCxBQUFTLE9BQU8sQUFDZDt3QkFBQSxBQUFLO2lDQUFTLEFBQ0MsQUFDYjswQkFBTSxJQUFBLEFBQUksYUFGRSxBQUVXLEFBQ3ZCOzJCQUFPLElBQUEsQUFBSSxhQUhDLEFBR1ksQUFDeEI7a0NBSkYsQUFBYyxBQUlFLEFBRWpCO0FBTmUsQUFDWjtBQUZKLHVCQU9PLEFBQ0w7d0JBQUEsQUFBSyxNQUFNLElBQVgsQUFBZSxBQUNoQjtBQVpnQjs7bUJBQUE7bUJBQUE7aUNBQUE7O0FBQUE7cUJBQUE7QUFyU0E7OzJCQUFBO2lDQUFBO0FBQUE7QUFFakI7O1VBQUEsQUFBSztBQUVIO3FCQUZXLEFBRUksT0FBUSxBQUV2Qjs7QUFDQTtZQUxXLEFBS0wsSUFBSyxBQUNYO29CQU5XLEFBTUcsT0FBUSxBQUV0Qjs7QUFDQTttQkFUVyxBQVNFLEdBQUksQUFDakI7Z0JBVlcsQUFVRCxJQUFLLEFBRWY7O0FBQ0E7YUFiVyxBQWFKLEdBQUksQUFDWDtjQUFRLFNBQVMsTUFoQkYsQUFFakIsQUFBYSxBQWNILEFBQWU7QUFkWixBQUNYO1dBZUg7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFDQTs7Ozs7O3lDQUdxQjttQkFDbkI7O0FBQ0E7QUFDQTtBQUNBO1dBQUEsQUFBSyxlQUFlLEtBQXBCLEFBQXlCLE9BQU8sVUFBQSxBQUFDLEtBQVEsQUFDdkM7ZUFBQSxBQUFLLGlCQUFMLEFBQXNCLEFBQ3RCO0FBQ0E7WUFBSSxPQUFBLEFBQUssTUFBVCxBQUFlLGVBQWUsQUFDNUI7aUJBQUEsQUFBSzsyQkFBTCxBQUFjLEFBQ0c7QUFESCxBQUNaLGFBQ0MsT0FGSCxBQUVRLEFBQ1Q7QUFDRjtBQVJELEFBU0Q7QUFDRDtBQUNBOzs7Ozs7O3dDQUdvQixBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO1dBQUEsQUFBSyxPQUFMLEFBQVksR0FBRyxLQUFBLEFBQUssTUFBcEIsQUFBMEIsQUFDM0I7QUFFRDs7Ozs7OzhDLEFBQzBCLFdBQVcsQUFDbkM7QUFDQTtBQUNBO0FBQ0E7VUFBSSxpQkFBQSxBQUFhLFFBQWIsQUFBcUIsV0FBekIsQUFBb0MsTUFBTSxBQUN4QztlQUFBLEFBQU8sTUFBUCxBQUFhLEFBQ2I7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTthQUFBLEFBQU8sTUFBUCxBQUFhLHVEQUFiLEFBQW9FLEFBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQUVEOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUY7Ozs7Ozs7Ozs7Ozs7OzZHLEFBU3FCLE9BQU8sQTs7Ozs7bUJBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTTtBLDRCQUFZLEtBQUEsQUFBSyxNQUFNLEE7O3FCLEFBQ3pCOzs7QUFDRjs7dUJBQUEsQUFBTyxLQUFQLEFBQVksOENBQVosQUFBMEQ7Ozs7bUJBRTFEO3VCQUFBLEFBQU8sTUFBUCxBQUFhLEFBQ2I7cUJBQUEsQUFBSyxTQUFMLEEsQUFBYyxPQUFRLEFBQ3RCO3FCQUFBLEFBQUssV0FBTCxBQUFnQixBLGtCQUFtQjs7O21CQUkvQjtBLDhCQUFjLHFCQUFBLEFBQVcsZSxBQUFYLEFBQTBCLEFBRTlDOztBQUNJOztBLHNCQUFNLHFCQUFBLEFBQVcsZSxBQUFYLEFBQTBCOztvQixBQUMvQjs7Ozs7c0JBQ0MsWUFBQSxBQUFZLGdCLEFBQWdCOzs7QUFDOUI7O0FBQ0E7cUJBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQVgsQUFBMkI7O3VCQUNmLHFCQUFBLEFBQVcsZ0JBQVgsQUFBMkIsV0FBVyxLQUFBLEFBQUssTUFBM0MsQUFBaUQsUUFBUSxLQUFBLEFBQUssTUFBOUQsQSxBQUFvRTs7bUJBQWhGO0E7Ozs7bUJBR0E7c0JBQU0scUJBQUEsQUFBVyxlQUFqQixBQUFNLEFBQTBCOzttQkFJOUI7QSxpREFBVSxBLE9BQUssVyxXQUFXLGEsQUFDaEM7O3lCQUFBLEFBQVM7Ozs7Ozs7Ozs7Ozs7OztBQUdYOzs7Ozs7Ozs7OztxQ0FNaUIsQSxPQUFPLEFBQ3RCO0FBQ0E7QUFFQTs7QUFDQTtXQUFBLEFBQUssWUFBWSxNQUFqQixBQUF1QixBQUN2QjtXQUFBLEFBQUssY0FBYyxNQUFuQixBQUF5QixBQUV6Qjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7VUFBSSxNQUFKLEFBQVUsWUFBWSxBQUNwQjthQUFBLEFBQUssYUFBYSxNQUFsQixBQUF3QixBQUN6QjtBQUZELGFBRU8sQUFDTDthQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7YUFBQSxBQUFLLDRCQUFnQixNQUFyQixBQUEyQixZQUMzQjtBQUNEO0FBRUQ7O0FBQ0E7V0FBQSxBQUFLLFNBQUwsQUFBYyxBQUNmO0FBR0Q7O0FBdUJBOzs7Ozs7Ozs7OztTQWVBOzs7Ozs7Ozs7Ozs7NkdBU2EsQSxNLEFBQU07Ozs7OzttQkFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNNO0E7d0JBQVksQUFFaEI7NEJBRmdCLEFBRU4sQUFDVjswQkFBUSxBQUVWO0FBTGtCLEEsQUFNWjtBQU5ZLEFBQ2hCO0EsdUJBS1csY0FBQSxBQUFRLFFBQVIsQUFBZ0IsV0FBaEIsQSxBQUEyQixBQUNsQztBOzsrQ0FFdUIsYUFBQSxBQUFhLFEsQUFGM0IsQUFBdUIsQUFDM0IsQUFDa0IsQUFBcUI7QUFEdkMsQUFDUDtBQUZrQyxBQUNwQyxpQkFEYTtpQ0FNYjs7QUFDQTtxQkFBQSxBQUFLLFNBQVMsRUFBQyxjQUFmLEFBQWMsQUFBZTs7dUJBQ1gsT0FBQSxBQUFPLFFBQVAsQUFBZSxlQUFmLEFBQThCLEE7O21CQUExQztBLGdDQUNOOztBQUNBO0FBQ0E7QUFDQTtxQkFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLGVBQWUsSUFBQSxBQUFJLGFBQXBDLEFBQWlELEFBQ2pEO3FCQUFBLEFBQUs7K0JBQVMsQUFDQyxBQUNiO3dCQUFNLElBQUEsQUFBSSxhQUZFLEFBRVcsQUFDdkI7eUJBQU8sSUFBQSxBQUFJLGFBSEMsQUFHWSxBQUN4QjtnQ0FKRixBQUFjLEFBSUUsQUFFaEI7QUFOYyxBQUNaOztrREFNSyxrQkFBQSxBQUFRLFEsQUFBUixBQUFnQjs7OztrREFDVDtBQUNkO3VCQUFBLEFBQU8sTUFBUCxBQUFhLGtDQUNiO0FBQ007QSx1QkFBTSxBLElBQUssQUFDakI7O3FCQUFBLEFBQUksVUFBSixBQUFjLEFBQ2Q7cUJBQUEsQUFBSSxxREFBcUIsYUFBekIsQUFBNEI7a0RBQ3JCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixBOzs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7Ozs7Ozs7OztTQW9CQTs7QUFLQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzZCQUVTLEFBQ1A7Y0FBQSxBQUFRLElBQVIsQUFBWSxTQUFTLEtBQXJCLEFBQTBCLEFBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtVQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsa0JBQWtCLENBQUMsS0FBRCxBQUFNLGtCQUFtQixDQUFDLEtBQUQsQUFBTSxVQUFVLENBQUMsS0FBM0UsQUFBSSxBQUE0RSxXQUFZLEFBQzFGO2FBQUEsQUFBSyxpQkFBTCxBQUFzQixBQUN0QjsrQkFDRSxvQkFBQSxRQUFNLEtBQU4sQUFBVSxxQkFBb0IsVUFBVSxLQUFBLEFBQUssTUFBN0MsQUFBbUQsZUFBZSxPQUFsRSxBQUF5RTtzQkFBekU7d0JBQUEsQUFDRTtBQURGO1NBQUEseUNBQ08sT0FBTyxFQUFFLFFBQUYsQUFBVSxTQUFTLE9BQS9CLEFBQVksQUFBMEI7c0JBQXRDO3dCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7O0FBSU47V0FBQSxBQUFLLGlCQUFMLEFBQXNCLEFBRXRCOztBQUNBO0FBQ0E7VUFBSSxDQUFDLEtBQUwsQUFBVSxRQUFRLEFBQ2hCOytCQUNFLG9CQUFBLFFBQU0sS0FBTixBQUFVLHFCQUFvQixVQUFVLEtBQUEsQUFBSyxNQUE3QyxBQUFtRCxlQUFlLE9BQWxFLEFBQXlFO3NCQUF6RTt3QkFBQSxBQUNFO0FBREY7U0FBQSxtREFDUyxVQUFVLEtBQWpCLEFBQXNCO3NCQUF0Qjt3QkFGSixBQUNFLEFBQ0UsQUFHTDtBQUhLOztBQUtOOztBQUNBO0FBQ0E7QUFFQTs7NkJBQ0Usb0JBQUEsUUFBTSxVQUFVLEtBQUEsQUFBSyxNQUFyQixBQUEyQixlQUFlLE9BQTFDLEFBQWlEO29CQUFqRDtzQkFBQSxBQUNFO0FBREY7T0FBQSx3REFDYyxNQUFNLEtBQUEsQUFBSyxNQUF2QixBQUE2QixNQUFNLFFBQVEsS0FBQSxBQUFLLE1BQWhELEFBQXNELFFBQVEsY0FBYyxLQUFBLEFBQUssTUFBakYsQUFBdUYsQUFDM0U7Z0JBQVEsS0FEcEIsQUFDeUIsWUFBWSxTQUFTLEtBRDlDLEFBQ21ELEFBQ3ZDO3FCQUFhLEtBRnpCLEFBRThCLGFBQWEsV0FBVyxLQUZ0RCxBQUUyRDtvQkFGM0Q7c0JBREYsQUFDRSxBQUdBO0FBSEE7cUVBR2lCLGFBQWEsS0FBQSxBQUFLLE1BQUwsQUFBVyxjQUFjLEtBQUEsQUFBSyxNQUE5QixBQUFvQyxjQUFsRSxBQUFnRixHQUFJLE9BQU8sS0FBQSxBQUFLLE1BQWhHLEFBQXNHLE9BQU8sVUFBVSxLQUFBLEFBQUssTUFBNUgsQUFBa0ksQUFDakg7Z0NBQXdCLEtBRHpDLEFBQzhDLGtCQUFrQixhQUFhLEtBRDdFLEFBQ2tGLGFBQWEsV0FBVyxLQUQxRyxBQUMrRzs7b0JBRC9HO3NCQUxKLEFBQ0UsQUFJRSxBQUtMO0FBTEs7Ozs7O0VBcFhjLGdCQUFNLEE7a0JBNlhiLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL216amIifQ==
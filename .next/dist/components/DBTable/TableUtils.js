'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('_babel-runtime@6.26.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _map = require('_babel-runtime@6.26.0@babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

var _Logger = require('../../utils/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _graphqlRequest = require('graphql-request');

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// const uri = 'http://testshop.muzhiyun.cn/api/graphiql';

var queryProducts = '\n      query shopProducts($page:Int, $pageSize: Int, $shop:Int) {\n        shopProducts(page:$page,pageSize:$pageSize,shop:$shop){\n          pageSize,\n          pageNumber\n          totalPages\n          totalEntries\n          entries{\n            desc\n            detailUrl\n            id\n            images\n            price\n            title\n          }\n        }\n      }\n    ';
var logger = _Logger2.default.getLogger('TableUtils');

// 缓存, key是tableName, value是{querySchema, dataSchema}
var tableMap = new _map2.default();
// 缓存, key是tableName, value是tableConfig
var configMap = new _map2.default();

/**
 * 用于解析表schema的工具类
 */
exports.default = {

  // 将getSchema的函数分为3个, 分别用于不同情况
  // 其实就是从远程加载schema时比较特殊, 要显示一个loading提示给用户, 必须是async函数, 其他的就是普通的同步函数

  /**
   * 从缓存中获取schema
   *
   * @param tableName
   * @returns {V}
   */
  getCacheSchema: function getCacheSchema(tableName) {
    return tableMap.get(tableName);
  },

  /**
   * 从本地的js文件中读取schema, 会更新缓存
   *
   * @param tableName
   * @returns {{querySchema: *, dataSchema: *}}
   */
  getLocalSchema: function getLocalSchema(tableName) {
    var ignoreCache = this.shouldIgnoreSchemaCache(tableName);
    var dataSchema = void 0;

    // try {
    //   querySchema = require(`./${tableName}.querySchema.js`);
    //   // 如果是忽略cache, 每次读取的schema都必须是全新的
    //   if (ignoreCache) {
    //     querySchema = querySchema.map(item => Object.assign({}, item));  // Object.assign是浅拷贝, 不过没啥影响
    //   }
    // } catch (e) {
    //   logger.error('load query schema error: %o', e);
    // }

    try {
      dataSchema = require('./' + tableName + '.dataSchema.js');
      if (ignoreCache) {
        dataSchema = dataSchema.map(function (item) {
          return (0, _assign2.default)({}, item);
        });
      }
    } catch (e) {
      logger.error('load data schema error: %o', e);
    }

    // 注意这里会更新缓存
    var toCache = { dataSchema: dataSchema };
    if (!ignoreCache) {
      tableMap.set(tableName, toCache);
    }
    return toCache;
  },

  /**
   * 从远程获取某个表的schema, 如果有本地schema的话会合并
   * 这个方法会更新缓存
   *
   * @param tableName
   * @returns {{querySchema: *, dataSchema: *}}
   */
  getRemoteSchema: function getRemoteSchema(tableName, shopID, currentPage) {
    var _this = this;

    return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var ignoreCache, localSchema, client, querySchema, dataSchema, varables, res, toCache;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ignoreCache = _this.shouldIgnoreSchemaCache(tableName);
              localSchema = _this.getLocalSchema(tableName);
              client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                }
              });
              querySchema = void 0, dataSchema = void 0;
              _context.prev = 4;
              varables = {
                page: currentPage,
                pageSize: 10,
                shop: shopID
              };
              _context.next = 8;
              return client.request(queryProducts, varables, headers);

            case 8:
              res = _context.sent;

              logger.debug('get remote schema for table %s, res = %o', tableName, res);
              if (res.data) {
                querySchema = _this.merge(localSchema.querySchema, res.data.querySchema);
                dataSchema = _this.merge(localSchema.dataSchema, res.data.dataSchema);
              } else {
                logger.error('getRemoteSchema response error: %o', res);
                _this.error('\u8BF7\u6C42asyncSchema\u5931\u8D25: ' + res.message);
              }
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context['catch'](4);

              logger.error('getRemoteSchema network request error: %o', _context.t0);
              _this.error('\u8BF7\u6C42asyncSchema\u65F6\u7F51\u7EDC\u5931\u8D25: ' + _context.t0.message);

            case 17:

              // 更新缓存
              toCache = { querySchema: querySchema, dataSchema: dataSchema };

              if (!ignoreCache) {
                tableMap.set(tableName, toCache);
              }
              return _context.abrupt('return', toCache);

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[4, 13]]);
    }))();
  },

  /**
   * 合并本地的schema和远程的schema, 其实就是合并两个array
   *
   * @param local 本地schema
   * @param remote 远程schema
   * @returns {*}
   */
  merge: function merge(local, remote) {
    // 注意local和remote都可能是undefined
    // 只有二者都不是undefined时, 才需要merge
    if (local && remote) {
      var result = local; // 合并后的结果

      var map = new _map2.default();
      result.forEach(function (item) {
        return map.set(item.key, item);
      });

      // 注意合并的逻辑: 如果远程的key本地也有, 就更新; 否则新增, 新增的列都放在最后
      remote.forEach(function (item) {
        if (map.has(item.key)) {
          // 注意传值vs传引用的区别
          (0, _assign2.default)(map.get(item.key), item);
        } else {
          result.push(item);
        }
      });
      return result;
    } else {
      // 注意这个表达式
      return local || remote;
    }
  },

  /**
   * 弹出一个错误信息提示用户
   *
   * @param errorMsg
   */
  error: function error(errorMsg) {
    _antd.notification.error({
      message: '出错啦!',
      description: '\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458, \u9519\u8BEF\u4FE1\u606F: ' + errorMsg,
      duration: 0
    });
  },

  /**
   * 获取某个表的个性化配置, 会合并默认配置
   *
   * @param tableName
   * @returns {*}
   */
  getTableConfig: function getTableConfig(tableName) {
    if (configMap.has(tableName)) {
      return configMap.get(tableName);
    }

    var tableConfig = void 0;
    try {
      var tmp = require('./' + tableName + '.config.js'); // 个性化配置加载失败也没关系
      tableConfig = (0, _assign2.default)({}, _config2.default.DBTable.default, tmp); // 注意合并默认配置
    } catch (e) {
      logger.warn('can not find config for table %s, use default instead', tableName);
      tableConfig = (0, _assign2.default)({}, _config2.default.DBTable.default);
    }

    configMap.set(tableName, tableConfig);
    return tableConfig;
  },

  /**
   * 某个表是否应该忽略缓存
   *
   * @param tableName
   * @returns {boolean}
   */
  shouldIgnoreSchemaCache: function shouldIgnoreSchemaCache(tableName) {
    var tableConfig = this.getTableConfig(tableName);
    return tableConfig.asyncSchema === true && tableConfig.ignoreSchemaCache === true;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXERCVGFibGVcXFRhYmxlVXRpbHMuanMiXSwibmFtZXMiOlsicXVlcnlQcm9kdWN0cyIsImxvZ2dlciIsImdldExvZ2dlciIsInRhYmxlTWFwIiwiY29uZmlnTWFwIiwiZ2V0Q2FjaGVTY2hlbWEiLCJ0YWJsZU5hbWUiLCJnZXQiLCJnZXRMb2NhbFNjaGVtYSIsImlnbm9yZUNhY2hlIiwic2hvdWxkSWdub3JlU2NoZW1hQ2FjaGUiLCJkYXRhU2NoZW1hIiwicmVxdWlyZSIsIm1hcCIsIml0ZW0iLCJlIiwiZXJyb3IiLCJ0b0NhY2hlIiwic2V0IiwiZ2V0UmVtb3RlU2NoZW1hIiwic2hvcElEIiwiY3VycmVudFBhZ2UiLCJsb2NhbFNjaGVtYSIsImNsaWVudCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInF1ZXJ5U2NoZW1hIiwidmFyYWJsZXMiLCJwYWdlIiwicGFnZVNpemUiLCJzaG9wIiwicmVxdWVzdCIsInJlcyIsImRlYnVnIiwiZGF0YSIsIm1lcmdlIiwibWVzc2FnZSIsImxvY2FsIiwicmVtb3RlIiwicmVzdWx0IiwiZm9yRWFjaCIsImtleSIsImhhcyIsInB1c2giLCJlcnJvck1zZyIsImRlc2NyaXB0aW9uIiwiZHVyYXRpb24iLCJnZXRUYWJsZUNvbmZpZyIsInRhYmxlQ29uZmlnIiwidG1wIiwiREJUYWJsZSIsImRlZmF1bHQiLCJ3YXJuIiwiYXN5bmNTY2hlbWEiLCJpZ25vcmVTY2hlbWFDYWNoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7OztBQUNBOztBQUVBLElBQU0sZ0JBQU47QUFrQkEsSUFBTSxTQUFTLGlCQUFBLEFBQU8sVUFBdEIsQUFBZSxBQUFpQjs7QUFFaEM7QUFDQSxJQUFNLFdBQVcsVUFBakI7QUFDQTtBQUNBLElBQU0sWUFBWSxVQUFsQjs7QUFFQTs7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QUFFdkI7O1VBQU0sTUFBTSxVQUFaLEFBQ0E7YUFBQSxBQUFPLFFBQVEsZ0JBQUE7ZUFBUSxJQUFBLEFBQUksSUFBSSxLQUFSLEFBQWEsS0FBckIsQUFBUSxBQUFrQjtBQUF6QyxBQUVBOztBQUNBO2FBQUEsQUFBTyxRQUFRLGdCQUFRLEFBQ3JCO1lBQUksSUFBQSxBQUFJLElBQUksS0FBWixBQUFJLEFBQWEsTUFBTSxBQUNyQjtBQUNBO2dDQUFjLElBQUEsQUFBSSxJQUFJLEtBQXRCLEFBQWMsQUFBYSxNQUEzQixBQUFpQyxBQUNsQztBQUhELGVBR08sQUFDTDtpQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBQ0Y7QUFQRCxBQVFBO2FBQUEsQUFBTyxBQUNSO0FBaEJELFdBZ0JPLEFBQ0w7QUFDQTthQUFPLFNBQVAsQUFBZ0IsQUFDakI7QUFDRjtBQTlIWSxBQWdJYjs7QUFLQTs7Ozs7QUFySWEsd0JBQUEsQUFxSVAsVUFBVSxBQUNkO3VCQUFBLEFBQWE7ZUFBTSxBQUNSLEFBQ1Q7d0ZBRmlCLEFBRWEsQUFDOUI7Z0JBSEYsQUFBbUIsQUFHUCxBQUViO0FBTG9CLEFBQ2pCO0FBdklTLEFBNkliOztBQU1BOzs7Ozs7QUFuSmEsMENBQUEsQUFtSkUsV0FBVyxBQUN4QjtRQUFJLFVBQUEsQUFBVSxJQUFkLEFBQUksQUFBYyxZQUFZLEFBQzVCO2FBQU8sVUFBQSxBQUFVLElBQWpCLEFBQU8sQUFBYyxBQUN0QjtBQUVEOztRQUFJLG1CQUFKLEFBQ0E7UUFBSSxBQUNGO1VBQU0sTUFBTSxlQUFBLEFBQWEsWUFEdkIsQUFDRixlQUFrRCxBQUNsRDtvQkFBYyxzQkFBQSxBQUFjLElBQUksaUJBQUEsQUFBYSxRQUEvQixBQUF1QyxTQUZuRCxBQUVGLEFBQWMsQUFBZ0QsTUFBTyxBQUN0RTtBQUhELE1BR0UsT0FBQSxBQUFPLEdBQUcsQUFDVjthQUFBLEFBQU8sS0FBUCxBQUFZLHlEQUFaLEFBQXFFLEFBQ3JFO29CQUFjLHNCQUFBLEFBQWMsSUFBSSxpQkFBQSxBQUFhLFFBQTdDLEFBQWMsQUFBdUMsQUFDdEQ7QUFFRDs7Y0FBQSxBQUFVLElBQVYsQUFBYyxXQUFkLEFBQXlCLEFBQ3pCO1dBQUEsQUFBTyxBQUNSO0FBbktZLEFBcUtiOztBQU1BOzs7Ozs7QUEzS2EsNERBQUEsQUEyS1csV0FBVyxBQUNqQztRQUFNLGNBQWMsS0FBQSxBQUFLLGVBQXpCLEFBQW9CLEFBQW9CLEFBQ3hDO1dBQU8sWUFBQSxBQUFZLGdCQUFaLEFBQTRCLFFBQVEsWUFBQSxBQUFZLHNCQUF2RCxBQUE2RSxBQUM5RTtBQTlLWSxBO0FBQUEsQUFFYiIsImZpbGUiOiJUYWJsZVV0aWxzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9tempiIn0=
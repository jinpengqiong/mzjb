'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('_babel-runtime@6.26.0@babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _set = require('_babel-runtime@6.26.0@babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _map = require('_babel-runtime@6.26.0@babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _class, _temp;

var _config = require('../components/DBTable/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 日志工具类 <br/>
 *
 * <p>
 * 工程变大之后, 日志就很重要了, 总不能一直console.log.
 * 本来想看看有没有现成的工具, 找到一个log4js的库, 但只能用在node环境下, 浏览器环境下似乎没什么好用的.
 * 作为一个用惯了slf4j的人, 干脆自己写个吧, 练练手.
 * 目前有以下功能:
 *   <ul>
 *       <li>支持常用的日志级别: debug/info/warn/error, 说实话其他的级别极少用到</li>
 *       <li>支持变量替换: 类似slf4j中的logger.info("a={}",a)这种, 其实console本身已经支持的</li>
 *       <li>根据日志级别设置样式: debug是黑色, info是默认, warn是黄色, error是红色, 看起来清晰很多</li>
 *       <li>定义每个logger的名字: 也算是常规功能了吧</li>
 *   </ul>
 * 我是尽量按着slf4j的习惯来设计的, 目前还比较简单.
 * 不支持pattern/appender之类的, 但对于二手前端来说, 也算够用了.
 *
 * 关于变量替换, 参考: https://developers.google.com/web/tools/chrome-devtools/console/console-write#_8
 * </p>
 */
var Logger = (_temp = _class = function () {
  (0, _createClass3.default)(Logger, null, [{
    key: 'getLogger',

    /*默认的logger*/
    // static defaultLogger = new Logger();  // 注意这一行代码的位置, 必须在所有Map/Set声明完毕之后

    /**
     * 获取一个Logger实例
     *
     * @param name
     * @returns {*}
     */

    // 是否为某些logger单独指定了日志级别?
    value: function getLogger(name) {
      if (name && name !== '') {
        // 缓存
        if (Logger.loggerMap.has(name)) {
          return Logger.loggerMap.get(name);
        }

        var logger = new Logger(name);
        Logger.loggerMap.set(name, logger);
        return logger;
      } else {
        // return Logger.defaultLogger;
      }
    }

    /*暂存所有logger*/

    // 定义一些预设的日志级别
    // 目前只有4种级别

  }]);

  function Logger(name) {
    (0, _classCallCheck3.default)(this, Logger);

    this.name = name; // logger的名字

    // 是否单独设置了这个logger的日志级别?
    if (Logger.debugLoggers.has(name)) {
      this.logLevel = Logger.LOG_LEVEL_DEBUG;
      return;
    }
    if (Logger.infoLoggers.has(name)) {
      this.logLevel = Logger.LOG_LEVEL_INFO;
      return;
    }
    if (Logger.warnLoggers.has(name)) {
      this.logLevel = Logger.LOG_LEVEL_WARN;
      return;
    }
    if (Logger.errorLoggers.has(name)) {
      this.logLevel = Logger.LOG_LEVEL_ERROR;
      return;
    }

    // 如果没有单独设置, 就使用root logger level
    var configLogLevel = _config2.default.log.level;
    if (configLogLevel === 'debug') {
      this.logLevel = Logger.LOG_LEVEL_DEBUG;
    } else if (configLogLevel === 'info') {
      this.logLevel = Logger.LOG_LEVEL_INFO;
    } else if (configLogLevel === 'warn') {
      this.logLevel = Logger.LOG_LEVEL_WARN;
    } else if (configLogLevel === 'error') {
      this.logLevel = Logger.LOG_LEVEL_ERROR;
    } else {
      // 默认都是info级别
      this.error('unsupported logLevel: %s, use INFO instead', configLogLevel);
      this.logLevel = Logger.LOG_LEVEL_INFO;
    }
  }

  /**
   * 设置日志级别, 只有4种级别可选
   *
   * @param newLogLevel 1~4之间的一个数字
   */

  (0, _createClass3.default)(Logger, [{
    key: 'setLogLevel',
    value: function setLogLevel(newLogLevel) {
      if (isNaN(newLogLevel)) {
        this.error('setLogLevel error, not a number: %s', newLogLevel);
      }

      if (newLogLevel < 1 || newLogLevel > 4) {
        this.error('setLogLevel error, input = %s, must between 1 and 4', newLogLevel);
      }

      this.logLevel = newLogLevel;
    }

    /**
     * 打印info日志
     *
     * @param pattern 日志格式, 支持%d/%s等占位符
     * @param args 可变参数, 用于替换pattern中的占位符
     */

  }, {
    key: 'info',
    value: function info(pattern) {
      // 先判断日志级别
      if (this.logLevel > Logger.LOG_LEVEL_INFO) return;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.name) args.unshift(this.name + ': ' + pattern);else args.unshift(pattern);
      console.log.apply(console, args);
    }

    /**
     * 打印error日志
     *
     * @param pattern
     * @param args
     */

  }, {
    key: 'error',
    value: function error(pattern) {
      if (this.logLevel > Logger.LOG_LEVEL_ERROR) return;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      args.unshift('background: red; color: #bada55;');
      if (this.name) args.unshift('%c' + this.name + ': ' + pattern);else args.unshift('%c' + pattern);
      console.error.apply(console, args);
    }

    /**
     * 打印debug日志
     *
     * @param pattern
     * @param args
     */

  }, {
    key: 'debug',
    value: function debug(pattern) {
      if (this.logLevel > Logger.LOG_LEVEL_DEBUG) return;

      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      args.unshift('background: black; color: #bada55;');
      if (this.name) args.unshift('%c' + this.name + ': ' + pattern);else args.unshift('%c' + pattern);
      console.debug.apply(console, args);
    }

    /**
     * 打印warn日志
     *
     * @param pattern
     * @param args
     */

  }, {
    key: 'warn',
    value: function warn(pattern) {
      if (this.logLevel > Logger.LOG_LEVEL_WARN) return;

      for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      args.unshift('background: yellow; color: black;');
      if (this.name) args.unshift('%c' + this.name + ': ' + pattern);else args.unshift('%c' + pattern);
      console.warn.apply(console, args);
    }
  }]);
  return Logger;
}(), _class.LOG_LEVEL_DEBUG = 1, _class.LOG_LEVEL_INFO = 2, _class.LOG_LEVEL_WARN = 3, _class.LOG_LEVEL_ERROR = 4, _class.loggerMap = new _map2.default(), _class.debugLoggers = new _set2.default(), _class.infoLoggers = new _set2.default(), _class.warnLoggers = new _set2.default(), _class.errorLoggers = new _set2.default(), _temp);

// 初始化Logger类中的一些static变量, 类似java中的static代码块

['debug', 'info', 'warn', 'error'].forEach(function (level) {
  if (_config2.default.log[level]) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(_config2.default.log[level]), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var logger = _step.value;

        Logger[level + 'Loggers'].add(logger);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
});

exports.default = Logger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzXFxMb2dnZXIuanMiXSwibmFtZXMiOlsiTG9nZ2VyIiwibmFtZSIsImxvZ2dlck1hcCIsImhhcyIsImdldCIsImxvZ2dlciIsInNldCIsImRlYnVnTG9nZ2VycyIsImxvZ0xldmVsIiwiTE9HX0xFVkVMX0RFQlVHIiwiaW5mb0xvZ2dlcnMiLCJMT0dfTEVWRUxfSU5GTyIsIndhcm5Mb2dnZXJzIiwiTE9HX0xFVkVMX1dBUk4iLCJlcnJvckxvZ2dlcnMiLCJMT0dfTEVWRUxfRVJST1IiLCJjb25maWdMb2dMZXZlbCIsImxvZyIsImxldmVsIiwiZXJyb3IiLCJuZXdMb2dMZXZlbCIsImlzTmFOIiwicGF0dGVybiIsImFyZ3MiLCJ1bnNoaWZ0IiwiY29uc29sZSIsImFwcGx5IiwiZGVidWciLCJ3YXJuIiwiZm9yRWFjaCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJLEFBb0JNOztTQW1CSjs7QUFDQTtBQUVBOztBQVRBOzs7Ozs7Ozs4QkFlaUIsQSxNQUFNLEFBQ3JCO1VBQUksUUFBUSxTQUFaLEFBQXFCLElBQUksQUFDdkI7QUFDQTtZQUFJLE9BQUEsQUFBTyxVQUFQLEFBQWlCLElBQXJCLEFBQUksQUFBcUIsT0FBTyxBQUM5QjtpQkFBTyxPQUFBLEFBQU8sVUFBUCxBQUFpQixJQUF4QixBQUFPLEFBQXFCLEFBQzdCO0FBRUQ7O1lBQU0sU0FBUyxJQUFBLEFBQUksT0FBbkIsQUFBZSxBQUFXLEFBQzFCO2VBQUEsQUFBTyxVQUFQLEFBQWlCLElBQWpCLEFBQXFCLE1BQXJCLEFBQTJCLEFBQzNCO2VBQUEsQUFBTyxBQUNSO0FBVEQsYUFTTyxBQUNMO0FBQ0Q7QUFDRjtBQS9CRDs7QUFSQTs7QUFDQTtBQXdDQTs7OztrQkFBQSxBQUFZO3dDQUNWOztTQUFBLEFBQUssT0FEVyxBQUNoQixBQUFZLEtBREksQ0FDRyxBQUVuQjs7QUFDQTtRQUFJLE9B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
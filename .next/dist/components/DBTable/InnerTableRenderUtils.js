'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTION_KEY = undefined;

var _set = require('_babel-runtime@6.26.0@babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _jsxFileName = 'C:\\Users\\Administrator\\Desktop\\mzjb\\components\\DBTable\\InnerTableRenderUtils.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableUtils = require('./TableUtils.js');

var _TableUtils2 = _interopRequireDefault(_TableUtils);

var _Logger = require('../../utils/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var logger = _Logger2.default.getLogger('InnerTableRenderUtils');

// 自定义操作字段, 在dataSchema中是用一个特殊的key来标识的
var ACTION_KEY = 'singleRecordActions';

/**
 * 表格的render函数有个比较蛋疼的问题, 就是this绑定, 专门写个工具类去处理
 */
var RenderUtils = {

  // 这个utils是有状态的
  // 用一个set保存目前已经处理过哪些表的render, 已经处理过的就不用再处理了
  tableNameSet: new _set2.default(),

  /**
   * 重置状态, InnerTable组件unmount时调用
   * 因为只有组件unmount后才可能需要重新绑定this
   */
  reset: function reset() {
    this.tableNameSet.clear();
  },

  /**
   * 处理表格的schema, 根据情况赋值render函数
   *
   * @param tableSchema 表格的schema
   * @param tableName 表名
   * @param innerTableComponent 对应的InnerTable组件, 换句话说, 要绑定的this对象
   * @returns {*}
   */
  bindRender: function bindRender(tableSchema, tableName, innerTableComponent) {
    var _this = this;

    var onClickImage = innerTableComponent.onClickImage,
        onSingleRecordUpdate = innerTableComponent.onSingleRecordUpdate,
        onSingleRecordDelete = innerTableComponent.onSingleRecordDelete,
        onSingleRecordComponent = innerTableComponent.onSingleRecordComponent,
        fieldMap = innerTableComponent.fieldMap,
        primaryKey = innerTableComponent.primaryKey;
    // 命中缓存

    if (this.tableNameSet.has(tableName)) {
      return tableSchema;
    }

    tableSchema.forEach(function (col) {
      var field = fieldMap.get(col.key);
      if (!field) {
        // 这种情况理论上不会出现
        logger.warn('unknown tableSchema col: %o', col);
        return;
      }

      // 用户自己配置的render最优先
      if (field.render) {
        logger.debug('bind user-defined render for field %o', field);
        col.render = field.render.bind(innerTableComponent); // 绑定this
      }
      // 对于某些showType我会给个默认的render
      else if (field.showType === 'image') {
          logger.debug('bind image render for field %o', field);
          col.render = _this.getImageRender()(onClickImage);
        } else if (field.showType === 'file') {
          logger.debug('bind file render for field %o', field);
          col.render = _this.getFileRender;
        } else if (field.key === ACTION_KEY && field.actions && field.actions.length > 0) {
          logger.debug('bind actions render for field %o', field);
          col.render = _this.getActionRender(field, primaryKey)(onSingleRecordUpdate, onSingleRecordDelete, onSingleRecordComponent);
        }
    });

    var ignoreCache = _TableUtils2.default.shouldIgnoreSchemaCache(tableName);
    if (!ignoreCache) {
      this.tableNameSet.add(tableName);
    }
    return tableSchema;
  },

  /**
   * 针对image字段的render方法
   *
   * @returns {function(): function()}
   */
  getImageRender: function getImageRender() {
    return function (onClickImagePreview) {
      return function (text) {
        if (_utils2.default.isString(text)) {
          return _react2.default.createElement('img', { src: text, alt: '\u56FE\u7247\u52A0\u8F7D\u5931\u8D25', style: { width: '100%' }, onClick: function onClick(e) {
              return onClickImagePreview(text);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          });
        } else if (text instanceof Array) {
          // 如果是多张图片, 只取第一张图片在表格中显示
          return _react2.default.createElement('img', { src: text[0], alt: '\u56FE\u7247\u52A0\u8F7D\u5931\u8D25', style: { width: '100%' }, onClick: function onClick(e) {
              return onClickImagePreview(text);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          });
        }
        return null;
      };
    };
  },

  /**
   * 针对file字段的render方法
   *
   * @param text
   * @returns {*}
   */
  getFileRender: function getFileRender(text) {
    if (_utils2.default.isString(text) && text.length > 0) {
      // 单个文件, 显示为超链接
      return _react2.default.createElement('a', { href: text, target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, text.substr(text.lastIndexOf('/') + 1));
    } else if (text instanceof Array) {
      if (text.length === 0) {
        return null;
      }
      // 多个文件, 显示为一组超链接
      var urlArray = [];
      urlArray.push(_react2.default.createElement('a', { key: 0, href: text[0], target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, text[0].substr(text[0].lastIndexOf('/') + 1)));
      for (var i = 1; i < text.length; i++) {
        urlArray.push(_react2.default.createElement('br', { key: -1 - i, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }));
        urlArray.push(_react2.default.createElement('a', { key: i, href: text[i], target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, text[i].substr(text[i].lastIndexOf('/') + 1)));
      }
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, urlArray);
    }

    return null;
  },

  /**
   * 渲染自定义操作列
   *
   * @param field
   * @param primaryKey
   * @returns {function(): function()}
   */
  getActionRender: function getActionRender(field, primaryKey) {
    // 返回一个高阶函数, 输入是3个函数
    // 1. singleRecordUpdate用于更新单条记录的函数, 参数是(record:记录本身, updateKeys:要更新哪些字段)
    // 2. singleRecordDelete用于删除单条记录, 参数是record
    // 3. singleRecordComponent用于自定义组件实现单条记录的更新, 参数是(record:记录本身, component:要渲染的组件, name:在modal中显示时的标题)

    return function (singleRecordUpdate, singleRecordDelete, singleRecordComponent) {
      return function (text, record) {
        var actions = field.actions;
        var actionArray = [];

        // 最后一个push到array中的元素是否是分割符? 为了排版好看要处理下
        var lastDivider = false;

        var _loop = function _loop(i) {
          var action = actions[i];
          // visible函数用于控制当前行是否显示某个操作
          if (action.visible && !action.visible(record)) {
            return 'continue';
          }

          // 如果没有定义主键, 不允许更新/删除
          if (!primaryKey && (action.type === 'update' || action.type === 'delete')) {
            return 'continue';
          }

          // 换行符, 单纯为了美观
          if (action.type === 'newLine') {
            // 是否要去掉上一个分隔符
            if (lastDivider) {
              actionArray.pop();
            }
            actionArray.push(_react2.default.createElement('br', { key: i, __source: {
                fileName: _jsxFileName,
                lineNumber: 156
              }
            }));
            lastDivider = false;
            return 'continue';
          }

          // 要push到actionArray的元素
          var tmp = void 0;
          switch (action.type) {
            // 更新单条记录, 可以控制更新哪些字段
            case 'update':
              tmp = _react2.default.createElement('a', { href: '#', key: i,
                onClick: function onClick(e) {
                  e.preventDefault();singleRecordUpdate(record, action.keys);
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166
                }
              }, action.name);
              break;
            // 删除单条记录
            case 'delete':
              tmp = _react2.default.createElement('a', { href: '#', key: i,
                onClick: function onClick(e) {
                  e.preventDefault();singleRecordDelete(record);
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 173
                }
              }, action.name);
              break;
            // 自定义组件
            case 'component':
              tmp = _react2.default.createElement('a', { href: '#', key: i,
                onClick: function onClick(e) {
                  e.preventDefault();singleRecordComponent(record, action.component, action.name);
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 180
                }
              }, action.name);
              break;
            default:
              // 如果type不是预定义的几种, 就看用户是否自定义了render函数
              if (action.render) {
                tmp = _react2.default.createElement('span', { key: i, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                  }
                }, action.render(record));
              }
          }

          // 如果还是不行, 那就说明用户定义的action格式有问题, 忽略
          if (!tmp) {
            return 'continue';
          }

          actionArray.push(tmp);
          actionArray.push(_react2.default.createElement('span', { key: -1 - i, className: 'ant-divider', __source: {
              fileName: _jsxFileName,
              lineNumber: 198
            }
          })); // 分隔符
          lastDivider = true;
        };

        for (var i = 0; i < actions.length; i++) {
          var _ret = _loop(i);

          if (_ret === 'continue') continue;
        }
        // 去除最后一个分隔符, 为了美观
        if (lastDivider) {
          actionArray.pop();
        }
        return _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          }
        }, actionArray);
      };
    };
  }
};

exports.default = RenderUtils;
exports.ACTION_KEY = ACTION_KEY;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXERCVGFibGVcXElubmVyVGFibGVSZW5kZXJVdGlscy5qcyJdLCJuYW1lcyI6WyJsb2dnZXIiLCJnZXRMb2dnZXIiLCJBQ1RJT05fS0VZIiwiUmVuZGVyVXRpbHMiLCJ0YWJsZU5hbWVTZXQiLCJyZXNldCIsImNsZWFyIiwiYmluZFJlbmRlciIsInRhYmxlU2NoZW1hIiwidGFibGVOYW1lIiwiaW5uZXJUYWJsZUNvbXBvbmVudCIsIm9uQ2xpY2tJbWFnZSIsIm9uU2luZ2xlUmVjb3JkVXBkYXRlIiwib25TaW5nbGVSZWNvcmREZWxldGUiLCJvblNpbmdsZVJlY29yZENvbXBvbmVudCIsImZpZWxkTWFwIiwicHJpbWFyeUtleSIsImhhcyIsImZvckVhY2giLCJmaWVsZCIsImdldCIsImNvbCIsImtleSIsIndhcm4iLCJyZW5kZXIiLCJkZWJ1ZyIsImJpbmQiLCJzaG93VHlwZSIsImdldEltYWdlUmVuZGVyIiwiZ2V0RmlsZVJlbmRlciIsImFjdGlvbnMiLCJsZW5ndGgiLCJnZXRBY3Rpb25SZW5kZXIiLCJpZ25vcmVDYWNoZSIsInNob3VsZElnbm9yZVNjaGVtYUNhY2hlIiwiYWRkIiwiaXNTdHJpbmciLCJ0ZXh0Iiwid2lkdGgiLCJvbkNsaWNrSW1hZ2VQcmV2aWV3IiwiQXJyYXkiLCJzdWJzdHIiLCJsYXN0SW5kZXhPZiIsInVybEFycmF5IiwicHVzaCIsImkiLCJzaW5nbGVSZWNvcmRVcGRhdGUiLCJzaW5nbGVSZWNvcmREZWxldGUiLCJzaW5nbGVSZWNvcmRDb21wb25lbnQiLCJyZWNvcmQiLCJhY3Rpb25BcnJheSIsImxhc3REaXZpZGVyIiwiYWN0aW9uIiwidmlzaWJsZSIsInR5cGUiLCJwb3AiLCJ0bXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJrZXlzIiwibmFtZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sU0FBUyxp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LEFBQWlCLEdBQUksV0FBckIsQUFBK0I7d0JBQS9COzBCQWxFdUUsQUFrRXhGLEFBQWlCO0FBQUE7V0FBQSxHQTNEakIsQ0EyRG1FLEFBQ25FO3dCQW5Fd0YsQUFtRXhGLEFBQWM7QUE3RGhCOzthQUFLLElBQUksSUFBVCxBQUFhLEdBQUcsSUFBSSxRQUFwQixBQUE0QixRQUE1QixBQUFvQyxLQUFLOzJCQUFoQyxBQUFnQzs7bUNBd0RyQyxBQU1IO0FBQ0Q7QUFDQTtZQUFBLEFBQUksYUFBYSxBQUNmO3NCQUFBLEFBQVksQUFDYjtBQUNEOytCQUFPLGNBQUE7O3NCQUFBO3dCQUFBLEFBQU87QUFBUDtBQUFBLFNBQUEsRUFBUCxBQUFPLEFBQ1I7QUExRU07QUFBUCxBQTJFRDtBQWpNSCxBQUFvQjtBQUFBLEFBRWxCOztrQkFtTWEsQTtRQUNQLEEsYUFBQSxBIiwiZmlsZSI6IklubmVyVGFibGVSZW5kZXJVdGlscy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvbXpqYiJ9
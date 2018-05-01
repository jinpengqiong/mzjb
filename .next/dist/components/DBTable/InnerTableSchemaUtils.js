'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = require('_babel-runtime@6.26.0@babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = require('_babel-runtime@6.26.0@babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _jsxFileName = 'C:\\Users\\Administrator\\Desktop\\mzjb\\components\\DBTable\\InnerTableSchemaUtils.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _TableUtils = require('./TableUtils.js');

var _TableUtils2 = _interopRequireDefault(_TableUtils);

var _FileUploader = require('../FileUploader');

var _FileUploader2 = _interopRequireDefault(_FileUploader);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Logger = require('../../utils/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _InnerTableRenderUtils = require('./InnerTableRenderUtils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var FormItem = _antd.Form.Item;
var RadioGroup = _antd.Radio.Group;
var CheckboxGroup = _antd.Checkbox.Group;
var Option = _antd.Select.Option;

var logger = _Logger2.default.getLogger('InnerTableSchemaUtils');

// 跟InnerForm类似, InnerTable也将parse schema的过程独立出来
// FIXME: 这种缓存也许用weak map更合适
var tableSchemaMap = new _map2.default(); // key是tableName, value是表格的schema, 还有一些额外信息
var formSchemaMap = new _map2.default(); // key是tableName, value是表单的schema callback
var formMap = new _map2.default(); // key是tableName, value是对应的react组件

/**
 * 跟InnerFormSchemaUtils非常类似, 但不用考虑布局相关的东西了
 */
var SchemaUtils = {

  /**
   * 解析表格的schema
   *
   * @param tableName
   * @param schema
   * @returns {*}
   */
  getTableSchema: function getTableSchema(tableName, schema) {
    var _this = this;

    // 做一层缓存
    // 怎么感觉我在到处做缓存啊...工程化风格明显
    if (tableSchemaMap.has(tableName)) {
      return tableSchemaMap.get(tableName);
    }

    var toCache = {};
    var newCols = [];
    var fieldMap = new _map2.default();
    schema.forEach(function (field) {
      // 在表格中显示的时候, 要将radio/checkbox之类的转换为文字
      // 比如schema中配置的是{key:1, value:haha}, 后端返回的值是1, 但前端展示时要换成haha
      if (field.options) {
        // 这样$$的前缀表示是内部的临时变量, 我觉得这种挺蛋疼的, 但没啥好办法...
        field.$$optionMap = _this.transformOptionMap(field.options, field.showType);
      }

      // 有点类似索引
      fieldMap.set(field.key, field);
      // 当前列是否是主键?
      if (field.primary) {
        toCache.primaryKey = field.key;
      }

      // 不需要在表格中展示
      if (field.showInTable === false) {
        return;
      }
      var col = {};
      col.key = field.key;
      col.dataIndex = field.key;
      col.title = field.title;
      col.width = field.width;
      col.sorter = field.sorter;
      // 我本来想在解析schema的时候配置一下render然后加到缓存里
      // 但如果render中使用了this指针就会有问题
      // 比如用户先使用DBTable组件, 这时会解析schema并缓存, 然后用户通过侧边栏切换到其他组件, DBTable组件unmount
      // 这时render函数中的this, 就指向这个被unmount的组件了, 就算再重新切回DBTable, 也是重新mount的一个新的组件了
      // 换句话说, render函数不能缓存, 必须每次解析schema后重新设置render
      // js的this是一个很迷的问题...参考:http://bonsaiden.github.io/JavaScript-Garden/zh/#function.this

      //if (field.render) {
      //  col.render = field.render;
      //}
      newCols.push(col);
    });

    toCache.tableSchema = newCols;
    toCache.fieldMap = fieldMap;

    var ignoreCache = _TableUtils2.default.shouldIgnoreSchemaCache(tableName);
    if (!ignoreCache) {
      tableSchemaMap.set(tableName, toCache);
    }

    return toCache;
  },

  /**
   * 和getTableSchema配合的一个方法, 用于解析optionMap
   *
   * @param options
   * @param showType
   * @returns {{}}
   */
  transformOptionMap: function transformOptionMap(options, showType) {
    var optionMap = {};

    // 对于级联选择要特殊处理下
    if (showType === 'cascader') {
      var browseOption = function browseOption(item) {
        // dfs
        optionMap[item.value] = item.label;
        if (item.children) {
          item.children.forEach(browseOption);
        }
      };
      options.forEach(browseOption);
    } else {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(options), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var option = _step.value;

          optionMap[option.key] = option.value;
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

    return optionMap;
  },

  /**
   * 获取某个表单对应的react组件
   *
   * @param tableName
   * @param schema
   * @returns {*}
   */
  getForm: function getForm(tableName, schema) {
    // console.log('schema', schema);
    var ignoreCache = _TableUtils2.default.shouldIgnoreSchemaCache(tableName);

    if (formMap.has(tableName)) {
      return formMap.get(tableName);
    } else {
      var newForm = this.createForm(tableName, schema);
      if (!ignoreCache) {
        formMap.set(tableName, newForm);
      }
      return newForm;
    }
  },

  /**
   * 动态生成表单
   *
   * @param tableName
   * @param schema
   * @returns {*}
   */
  createForm: function createForm(tableName, schema) {
    var ignoreCache = _TableUtils2.default.shouldIgnoreSchemaCache(tableName);
    var that = this;
    var createReactClass = require('create-react-class');
    var tmpComponent = createReactClass({
      displayName: 'tmpComponent',
      componentWillMount: function componentWillMount() {
        if (formSchemaMap.has(tableName)) {
          this.schemaCallback = formSchemaMap.get(tableName);
          return;
        }
        var schemaCallback = that.parseFormSchema(schema);
        if (!ignoreCache) {
          formSchemaMap.set(tableName, schemaCallback);
        }
        this.schemaCallback = schemaCallback;
      },

      // 表单挂载后, 给表单一个初始值
      componentDidMount: function componentDidMount() {
        if (this.props.initData) {
          this.props.form.setFieldsValue(this.props.initData);
        }
      },
      render: function render() {
        return this.schemaCallback(this.props.form.getFieldDecorator, this.props.forUpdate, this.props.keysToUpdate);
      }
    });
    return _antd.Form.create()(tmpComponent);
  },

  /**
   * 这是最主要的方法
   *
   * @param schema
   * @returns {function()}
   */
  parseFormSchema: function parseFormSchema(schema) {
    var _this2 = this;

    this.parseValidator(schema);

    var rows = [];
    schema.forEach(function (field) {
      // 有一些列不需要在表单中展示
      if (field.showInForm === false) return;
      if (field.key === _InnerTableRenderUtils.ACTION_KEY) return;
      rows.push(_this2.transFormField(field));
    });

    // 返回的schemaCallback有3个参数
    // 1. getFieldDecorator, 表单组件对应的getFieldDecorator函数
    // 2. forUpdate, 当前表单是用于insert还是update, 影响到校验规则
    // 3. keysToUpdate, 允许更新哪些字段, 影响到modal中显示哪些字段, 仅当forUpdate=true时生效
    return function (getFieldDecorator, forUpdate, keysToUpdate) {
      var formRows = []; // 最终的表单中的一行
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(rows), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var row = _step2.value;

          formRows.push(row(getFieldDecorator, forUpdate, keysToUpdate));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return _react2.default.createElement(_antd.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      }, formRows);
    };
  },

  /**
   * 有点蛋疼的一件事, dataSchema定义的表单, 要同时用于insert和update, 但二者需要的校验规则是不同的
   * 比如insert时某个字段是必填的, 但update时是不需要填的
   *
   * @param schema
   */
  parseValidator: function parseValidator(schema) {
    schema.forEach(function (field) {
      if (!field.validator) return;

      var newRules = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = (0, _getIterator3.default)(field.validator), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var rule = _step3.value;

          newRules.push((0, _assign2.default)({}, rule, { required: false })); // update时没有字段是必填的
        }
        // 这种$$开头的变量都被我用作内部变量
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      field.$$updateValidator = newRules;
    });
  },
  colWrapper: function colWrapper(formItem, field) {
    return function (getFieldDecorator, forUpdate, keysToUpdate) {
      // 表单用于更新时, 可以只显示部分字段
      if (forUpdate === true && keysToUpdate && !keysToUpdate.has(field.key)) {
        return null;
      }

      return _react2.default.createElement(FormItem, { key: field.key, label: field.title, labelCol: { span: 4 }, wrapperCol: { span: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, formItem(getFieldDecorator, forUpdate));
    };
  },
  transFormField: function transFormField(field) {
    // 对于主键, 直接返回一个不可编辑的textarea, 因为主键一般是数据库自增的
    // 如果有特殊情况需要自己指定主键, 再说吧
    if (field.primary === true) {
      logger.debug('key %o is primary, transform to text area', field);
      return this.colWrapper(function (getFieldDecorator, forUpdate) {
        return getFieldDecorator(field.key)(_react2.default.createElement(_antd.Input, { type: 'textarea', disabled: true, size: 'default', __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }));
      }, field);
    }

    switch (field.showType) {
      case 'select':
        return this.transformSelect(field);
      case 'radio':
        return this.transformRadio(field);
      case 'checkbox':
        return this.transformCheckbox(field);
      case 'multiSelect':
        return this.transformMultiSelect(field);
      case 'textarea':
        return this.transformTextArea(field);
      case 'image':
        return this.transformImage(field);
      case 'file':
        return this.transformFile(field);
      case 'cascader':
        return this.transformCascader(field);
      default:
        return this.transformNormal(field);
    }
  },

  /**
   * 将schema中的一列转换为下拉框
   *
   * @param field
   */
  transformSelect: function transformSelect(field) {
    logger.debug('transform field %o to Select component', field);
    var options = [];
    field.options.forEach(function (option) {
      options.push(_react2.default.createElement(Option, { key: option.key, value: option.key, __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, option.value));
    });

    return this.colWrapper(function (getFieldDecorator, forUpdate) {
      return getFieldDecorator(field.key, {
        initialValue: forUpdate ? undefined : field.defaultValue,
        rules: forUpdate ? field.$$updateValidator : field.validator
      })(_react2.default.createElement(_antd.Select, { placeholder: field.placeholder || '请选择', size: 'default', disabled: field.disabled, __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, options));
    }, field);
  },

  /**
   * 将schema中的一列转换为单选框
   *
   * @param field
   */
  transformRadio: function transformRadio(field) {
    logger.debug('transform field %o to Radio component', field);
    var options = [];
    field.options.forEach(function (option) {
      options.push(_react2.default.createElement(_antd.Radio, { key: option.key, value: option.key, __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, option.value));
    });

    return this.colWrapper(function (getFieldDecorator, forUpdate) {
      return getFieldDecorator(field.key, {
        initialValue: forUpdate ? undefined : field.defaultValue,
        rules: forUpdate ? field.$$updateValidator : field.validator
      })(_react2.default.createElement(RadioGroup, { disabled: field.disabled, __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, options));
    }, field);
  },

  /**
   * 将schema中的一列转换为checkbox
   *
   * @param field
   */
  transformCheckbox: function transformCheckbox(field) {
    logger.debug('transform field %o to Checkbox component', field);
    var options = [];
    field.options.forEach(function (option) {
      options.push({ label: option.value, value: option.key });
    });

    return this.colWrapper(function (getFieldDecorator, forUpdate) {
      return getFieldDecorator(field.key, {
        initialValue: forUpdate ? undefined : field.defaultValue,
        rules: forUpdate ? field.$$updateValidator : field.validator
      })(_react2.default.createElement(CheckboxGroup, { options: options, disabled: field.disabled, __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }));
    }, field);
  },

  /**
   * 转换为下拉多选框
   *
   * @param field
   * @returns {XML}
   */
  transformMultiSelect: function transformMultiSelect(field) {
    logger.debug('transform field %o to MultipleSelect component', field);
    var options = [];
    field.options.forEach(function (option) {
      options.push(_react2.default.createElement(Option, { key: option.key, value: option.key, __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, option.value));
    });

    return this.colWrapper(function (getFieldDecorator, forUpdate) {
      return getFieldDecorator(field.key, {
        initialValue: forUpdate ? undefined : field.defaultValue,
        rules: forUpdate ? field.$$updateValidator : field.validator
      })(_react2.default.createElement(_antd.Select, { multiple: true, placeholder: field.placeholder || '请选择', size: 'default', disabled: field.disabled, __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, options));
    }, field);
  },

  /**
   * 转换为textarea
   *
   * @param field
   * @returns {XML}
   */
  transformTextArea: function transformTextArea(field) {
    logger.debug('transform field %o to textarea component', field);
    return this.colWrapper(function (getFieldDecorator, forUpdate) {
      return getFieldDecorator(field.key, {
        initialValue: forUpdate ? undefined : field.defaultValue,
        rules: forUpdate ? field.$$updateValidator : field.validator
      })(_react2.default.createElement(_antd.Input, { type: 'textarea', placeholder: field.placeholder || '请输入',
        disabled: field.disabled, size: 'default', __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }));
    }, field);
  },

  /**
   * 转换为图片上传组件
   *
   * @param field
   * @returns {XML}
   */
  transformImage: function transformImage(field) {
    logger.debug('transform field %o to image component', field);
    return this.colWrapper(function (getFieldDecorator, forUpdate) {
      return getFieldDecorator(field.key, {
        initialValue: forUpdate ? undefined : field.defaultValue,
        rules: forUpdate ? field.$$updateValidator : field.validator
      })(_react2.default.createElement(_FileUploader2.default, { max: field.max, url: field.url, sizeLimit: field.sizeLimit, accept: field.accept,
        placeholder: field.placeholder, type: 'image', __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }));
    }, field);
  },

  /**
   * 转换为文件上传组件
   *
   * @param field
   * @returns {XML}
   */
  transformFile: function transformFile(field) {
    logger.debug('transform field %o to file component', field);
    return this.colWrapper(function (getFieldDecorator, forUpdate) {
      return getFieldDecorator(field.key, {
        initialValue: forUpdate ? undefined : field.defaultValue,
        rules: forUpdate ? field.$$updateValidator : field.validator
      })(_react2.default.createElement(_FileUploader2.default, { max: field.max, url: field.url, sizeLimit: field.sizeLimit, accept: field.accept,
        placeholder: field.placeholder, __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }));
    }, field);
  },

  /**
   * 转换为级联选择
   *
   * @param field
   * @returns {XML}
   */
  transformCascader: function transformCascader(field) {
    logger.debug('transform field %o to Cascader component', field);
    return this.colWrapper(function (getFieldDecorator, forUpdate) {
      return getFieldDecorator(field.key, {
        initialValue: forUpdate ? undefined : field.defaultValue,
        rules: forUpdate ? field.$$updateValidator : field.validator
      })(_react2.default.createElement(_antd.Cascader, { options: field.options, expandTrigger: 'hover', placeholder: field.placeholder || '请选择', size: 'default',
        disabled: field.disabled, __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }));
    }, field);
  },

  /**
   * 将schema中的一列转换为普通输入框
   *
   * @param field
   * @returns {XML}
   */
  transformNormal: function transformNormal(field) {
    switch (field.dataType) {
      case 'int':
        logger.debug('transform field %o to integer input component', field);
        return this.colWrapper(function (getFieldDecorator, forUpdate) {
          return getFieldDecorator(field.key, {
            initialValue: forUpdate ? undefined : field.defaultValue,
            rules: forUpdate ? field.$$updateValidator : field.validator
          })(_react2.default.createElement(_antd.InputNumber, { size: 'default', max: field.max, min: field.min, placeholder: field.placeholder,
            disabled: field.disabled, __source: {
              fileName: _jsxFileName,
              lineNumber: 457
            }
          }));
        }, field);
      case 'float':
        logger.debug('transform field %o to float input component', field);
        return this.colWrapper(function (getFieldDecorator, forUpdate) {
          return getFieldDecorator(field.key, {
            initialValue: forUpdate ? undefined : field.defaultValue,
            rules: forUpdate ? field.$$updateValidator : field.validator
          })(_react2.default.createElement(_antd.InputNumber, { step: 0.01, size: 'default', max: field.max, min: field.min, placeholder: field.placeholder,
            disabled: field.disabled, __source: {
              fileName: _jsxFileName,
              lineNumber: 466
            }
          }));
        }, field);
      case 'datetime':
        logger.debug('transform field %o to datetime input component', field);
        return this.colWrapper(function (getFieldDecorator, forUpdate) {
          return getFieldDecorator(field.key, {
            initialValue: forUpdate ? undefined : field.defaultValue ? (0, _moment2.default)(field.defaultValue) : null, // 这个表达式是真的有点蛋疼
            rules: forUpdate ? field.$$updateValidator : field.validator
          })(_react2.default.createElement(_antd.DatePicker, { showTime: true, format: 'YYYY-MM-DD HH:mm:ss', placeholder: field.placeholder || '请选择日期',
            disabled: field.disabled, __source: {
              fileName: _jsxFileName,
              lineNumber: 475
            }
          }));
        }, field);
      default:
        // 默认就是普通的输入框
        logger.debug('transform field %o to varchar input component', field);
        return this.colWrapper(function (getFieldDecorator, forUpdate) {
          return getFieldDecorator(field.key, {
            initialValue: forUpdate ? undefined : field.defaultValue,
            rules: forUpdate ? field.$$updateValidator : field.validator
          })(_react2.default.createElement(_antd.Input, { placeholder: field.placeholder, size: 'default', addonBefore: field.addonBefore,
            addonAfter: field.addonAfter, disabled: field.disabled, __source: {
              fileName: _jsxFileName,
              lineNumber: 484
            }
          }));
        }, field);
    }
  }
};

exports.default = SchemaUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXERCVGFibGVcXElubmVyVGFibGVTY2hlbWFVdGlscy5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkl0ZW0iLCJSYWRpb0dyb3VwIiwiR3JvdXAiLCJDaGVja2JveEdyb3VwIiwiT3B0aW9uIiwibG9nZ2VyIiwiZ2V0TG9nZ2VyIiwidGFibGVTY2hlbWFNYXAiLCJmb3JtU2NoZW1hTWFwIiwiZm9ybU1hcCIsIlNjaGVtYVV0aWxzIiwiZ2V0VGFibGVTY2hlbWEiLCJ0YWJsZU5hbWUiLCJzY2hlbWEiLCJoYXMiLCJnZXQiLCJ0b0NhY2hlIiwibmV3Q29scyIsImZpZWxkTWFwIiwiZm9yRWFjaCIsImZpZWxkIiwib3B0aW9ucyIsIiQkb3B0aW9uTWFwIiwidHJhbnNmb3JtT3B0aW9uTWFwIiwic2hvd1R5cGUiLCJzZXQiLCJrZXkiLCJwcmltYXJ5IiwicHJpbWFyeUtleSIsInNob3dJblRhYmxlIiwiY29sIiwiZGF0YUluZGV4IiwidGl0bGUiLCJ3aWR0aCIsInNvcnRlciIsInB1c2giLCJ0YWJsZVNjaGVtYSIsImlnbm9yZUNhY2hlIiwic2hvdWxkSWdub3JlU2NoZW1hQ2FjaGUiLCJvcHRpb25NYXAiLCJicm93c2VPcHRpb24iLCJpdGVtIiwidmFsdWUiLCJsYWJlbCIsImNoaWxkcmVuIiwib3B0aW9uIiwiZ2V0Rm9ybSIsIm5ld0Zvcm0iLCJjcmVhdGVGb3JtIiwidGhhdCIsImNyZWF0ZVJlYWN0Q2xhc3MiLCJyZXF1aXJlIiwidG1wQ29tcG9uZW50IiwiY29tcG9uZW50V2lsbE1vdW50Iiwic2NoZW1hQ2FsbGJhY2siLCJwYXJzZUZvcm1TY2hlbWEiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwiaW5pdERhdGEiLCJmb3JtIiwic2V0RmllbGRzVmFsdWUiLCJyZW5kZXIiLCJnZXRGaWVsZERlY29yYXRvciIsImZvclVwZGF0ZSIsImtleXNUb1VwZGF0ZSIsImNyZWF0ZSIsInBhcnNlVmFsaWRhdG9yIiwicm93cyIsInNob3dJbkZvcm0iLCJ0cmFuc0Zvcm1GaWVsZCIsImZvcm1Sb3dzIiwicm93IiwidmFsaWRhdG9yIiwibmV3UnVsZXMiLCJydWxlIiwicmVxdWlyZWQiLCIkJHVwZGF0ZVZhbGlkYXRvciIsImNvbFdyYXBwZXIiLCJmb3JtSXRlbSIsInNwYW4iLCJkZWJ1ZyIsInRyYW5zZm9ybVNlbGVjdCIsInRyYW5zZm9ybVJhZGlvIiwidHJhbnNmb3JtQ2hlY2tib3giLCJ0cmFuc2Zvcm1NdWx0aVNlbGVjdCIsInRyYW5zZm9ybVRleHRBcmVhIiwidHJhbnNmb3JtSW1hZ2UiLCJ0cmFuc2Zvcm1GaWxlIiwidHJhbnNmb3JtQ2FzY2FkZXIiLCJ0cmFuc2Zvcm1Ob3JtYWwiLCJpbml0aWFsVmFsdWUiLCJ1bmRlZmluZWQiLCJkZWZhdWx0VmFsdWUiLCJydWxlcyIsInBsYWNlaG9sZGVyIiwiZGlzYWJsZWQiLCJtYXgiLCJ1cmwiLCJzaXplTGltaXQiLCJhY2NlcHQiLCJkYXRhVHlwZSIsIm1pbiIsImFkZG9uQmVmb3JlIiwiYWRkb25BZnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQVVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sV0FBVyxXQUFqQixBQUFzQjtBQUN0QixJQUFNLGFBQWEsWUFBbkIsQUFBeUI7QUFDekIsSUFBTSxnQkFBZ0IsZUFBdEIsQUFBK0I7QUFDL0IsSUFBTSxTQUFTLGFBQWYsQUFBc0I7O0FBRXRCLElBQU0sU0FBUyxpQkFBQSxBQUFPLFVBQXRCLEFBQWUsQUFBaUI7O0FBRWhDO0FBQ0E7QUFDQSxJQUFNLGlCQUFpQixVLEFBQXZCLFdBQW1DO0FBQ25DLElBQU0sZ0JBQWdCLFVBQXRCLEEsV0FBa0M7QUFDbEMsSUFBTSxVQUFVLFVBQWhCLEEsV0FBNEI7O0FBRTVCOzs7QUFHQSxJQUFNOztBQVNKOzs7Ozs7O0FBVGtCLDBDQUFBLEFBU0gsV0FURyxBQVNRLFFBQVE7Z0JBQ2hDOztBQUNBO0FBQ0E7UUFBSSxl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
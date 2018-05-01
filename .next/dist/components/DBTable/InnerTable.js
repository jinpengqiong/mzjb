'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('_babel-runtime@6.26.0@babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _set = require('_babel-runtime@6.26.0@babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _assign = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getIterator2 = require('_babel-runtime@6.26.0@babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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
    _jsxFileName = 'C:\\Users\\Administrator\\Desktop\\mzjb\\components\\DBTable\\InnerTable.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _Logger = require('../../utils/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _utils = require('../../utils');

var _utils2 = _interopRequireDefault(_utils);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _InnerTableSchemaUtils = require('./InnerTableSchemaUtils');

var _InnerTableSchemaUtils2 = _interopRequireDefault(_InnerTableSchemaUtils);

var _InnerTableRenderUtils = require('./InnerTableRenderUtils');

var _InnerTableRenderUtils2 = _interopRequireDefault(_InnerTableRenderUtils);

var _graphqlRequest = require('graphql-request');

var _uri = require('../../utils/uri');

var _uri2 = _interopRequireDefault(_uri);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var logger = _Logger2.default.getLogger('InnerTable');

/**
 * 内部表格组件
 */
var InnerTable = (_dec = (0, _mobxReact.inject)('store'), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(InnerTable, _React$Component);

  function InnerTable(props) {
    (0, _classCallCheck3.default)(this, InnerTable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InnerTable.__proto__ || (0, _getPrototypeOf2.default)(InnerTable)).call(this, props));

    _this.onClickInsert = function (e) {
      e.preventDefault();
      // this.setFormData({});  // insert时弹出的表单应该是空的
      _this.setState({
        modalVisible: true,
        modalTitle: '新增',
        modalInsert: true
      }, function () {
        return _this.setFormData({});
      });
    };

    _this.onClickUpdate = function (e) {
      e.preventDefault();

      // 重置下keysToUpdate, 因为点击表格上方的更新按钮时, 默认是所有字段都可以更新
      _this.singleRecordKey = undefined;
      _this.keysToUpdate = undefined;

      // 要显示在表单中的值
      var newData = {};
      var multiSelected = _this.state.selectedRowKeys.length > 1; // 是否选择了多项
      // 如果只选择了一项, 就把原来的值填到表单里
      // 否则就只把要更新的主键填到表单里
      if (!multiSelected) {
        logger.debug('update single record, and fill original values');
        var selectedKey = _this.state.selectedRowKeys[0];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)(_this.state.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var record = _step.value;
            // 找到被选择的那条记录
            if (record.key === selectedKey) {
              (0, _assign2.default)(newData, _this.transformTableDataToForm(record));
              break;
            }
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
      } else {
        newData[_this.primaryKey] = _this.state.selectedRowKeys.join(', ');
        logger.debug('update multiple records, keys = %s', newData[_this.primaryKey]);
      }

      //this.setFormData(newData);

      // 理论上来说应该先设置好表单的值(setFieldsValue)再显示modal
      // 美中不足的是表单的值变化需要一个时间, 显示modal的过程中可能被用户看到"旧值变新值"的过程, 在FileUploader组件上传图片时这个现象很明显
      // 跟组件的实现方式有关, 可能是css动画的问题, 也可能是setState异步的问题, 似乎暂时无解...

      if (multiSelected) {
        _this.setState({ modalVisible: true, modalTitle: '批量更新', modalInsert: false }, function () {
          return _this.setFormData(newData);
        });
      } else {
        _this.setState({ modalVisible: true, modalTitle: '更新', modalInsert: false }, function () {
          return _this.setFormData(newData);
        });
      }
    };

    _this.onClickDelete = function (e) {
      e.preventDefault();
      _antd.Modal.confirm({
        title: '确认删除',
        content: '\u5F53\u524D\u9009\u4E2D\u7684ID\u4E3A: ' + _this.state.selectedRowKeys.join(', '),
        // 这里注意要用箭头函数, 否则this不生效
        onOk: function onOk() {
          _this.handleDelete();
        }
      });
    };

    _this.onTableSelectChange = function (selectedRowKeys) {
      // console.log('selectedRowKeys', selectedRowKeys)
      _this.props.store.getselectedRowKeys(selectedRowKeys);
      _this.setState({ selectedRowKeys: selectedRowKeys });
    };

    _this.hideModal = function () {
      _this.setState({ modalVisible: false });
    };

    _this.handleModalOk = function () {
      // 提交表单之前, 要先校验下数据
      var validated = true;
      _this.formComponent.props.form.validateFieldsAndScroll(function (err, values) {
        return validated = err ? false : validated;
      }); // 不知道有没有更好的办法
      if (!validated) {
        logger.debug('validate form error');
        return;
      }

      // 1. 将表单中的undefined去掉
      // 2. 转换日期格式
      var newObj = {};

      var oldObj = _this.formComponent.props.form.getFieldsValue(); // 这里的formComponent必定不是undefined
      // console.log('oldObj', oldObj);
      for (var key in oldObj) {
        if (oldObj[key] === undefined || oldObj[key] === null) {
          continue;
        }

        // 跟InnerForm中的filterQueryObj方法很相似
        if (key === _this.primaryKey && typeof oldObj[key] === 'string') {} else if (oldObj[key] instanceof Date) {
          newObj[key] = oldObj[key].format('yyyy-MM-dd HH:mm:ss');
        } else if (_moment2.default.isMoment(oldObj[key])) {
          // 处理moment对象
          newObj[key] = oldObj[key].format('YYYY-MM-DD HH:mm:ss');
        } else {
          newObj[key] = oldObj[key];
        }
      }

      // 至此表单中的数据格式转换完毕
      _this.hideModal();
      logger.debug('click modal OK and the form obj = %o', newObj);

      // 将转换后的数据传给后端
      if (_this.state.modalInsert) {
        _this.handleInsert(newObj);
      } else {
        // 这个modal可能是用于表格上方的"修改"按钮, 也可能用于单条记录的更新
        // 这里要判断一下
        if (_this.singleRecordKey) {
          var keys = [];
          keys.push(_this.singleRecordKey);
          _this.handleUpdate(newObj, keys);
        } else {
          _this.handleUpdate(newObj);
        }
      }
    };

    _this.onClickImage = function (text) {
      var newImageArray = [];
      if (_utils2.default.isString(text) && text.length > 0) {
        newImageArray.push({ url: text, alt: '图片加载失败' });
      } else if (text instanceof Array) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(text), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var tmp = _step2.value;

            newImageArray.push({ url: tmp, alt: '图片加载失败' });
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
      }
      // 如果没有图片, 点击就不要显示modal
      if (newImageArray.length > 0) {
        _this.setState({ previewVisible: true, previewImages: newImageArray });
      }
    };

    _this.cancelPreview = function () {
      _this.setState({ previewVisible: false });
    };

    _this.onSingleRecordUpdate = function (record, keysToUpdate) {
      // 传进来的record是表格中显示的一条数据, 要转换下才能填到表单中
      // 比如checkbox在表格中显示的是逗号分隔字符串, 但在表单中还是要还原为key数组的
      var transformedRecord = _this.transformTableDataToForm(record);
      _this.singleRecordKey = record[_this.primaryKey]; // 要更新哪条记录
      if (keysToUpdate) {
        _this.keysToUpdate = new _set2.default(keysToUpdate);
      } else {
        _this.keysToUpdate = undefined;
      }

      //this.setFormData(transformedRecord);
      // 这里又有一个hack
      // 我本来是先setFormData再setState的, 但表单的显示总是有点问题, setFieldsValue设置表单的值有时不生效
      // 只要keysToUpdate改变, 表单的值的显示就会有问题
      // 换句话说, 一旦表单的schema变化, setFieldsValue就有问题

      // 猜测是setFieldsValue(data)方法的实现比较特殊, 它不会收集data中的所有值, 而是只会收集当前schema中有用的值, 姑且叫做collectKeys
      // 比如传入的data是{a:1, b:2, c:3}, 而render方法中有用的key是a和b, 调用setFieldsValue时就会忽略c的值
      // 每次render的时候才会更新collectKeys, 应该是通过getFieldDecorator方法收集的

      // 我碰到的问题, 如果先setFormData, 表单组件只会按当前的schema去收集值
      // 而setState时会触发表单组件的render方法, 这个表单的schema其实是根据keysToUpdate动态生成的, 很可能collectKeys跟之前完全不一样
      // 所以渲染出来的表单, 没有把值填进去, 虽然我setFieldsValue时传入了完整的一行记录...
      // 唉antd的黑盒太难琢磨, 源码还是typescript的, 有点看不懂...

      _this.setState({
        modalVisible: true,
        modalTitle: '更新',
        modalInsert: false
      }, function () {
        return _this.setFormData(transformedRecord);
      }); // 这种方法可以保证在表单组件render后才setFieldsValue, 就会按新的schema去收集值了
    };

    _this.onSingleRecordDelete = function (record) {
      var selectedKey = record[_this.primaryKey];
      _antd.Modal.confirm({
        title: '确认删除',
        content: '\u5F53\u524D\u88AB\u9009\u4E2D\u7684\u884C: ' + selectedKey,
        onOk: function onOk() {
          var keys = [];
          keys.push(selectedKey);
          _this.handleDelete(keys, _this.props.shopID);
        }
      });
    };

    _this.onSingleRecordComponent = function (record, component, name) {
      // 暂存对应的信息, 后面会用到
      _this.updateComponent = component; // react组件对应的class, 其实就是个函数
      _this.updateComponentRecord = record;
      _this.updateComponentModalTitle = name;
      _this.setState({ componentModalVisible: true });
    };

    _this.handleComponentModalCancel = function () {
      _this.setState({ componentModalVisible: false });
    };

    _this.handleComponentModalOk = function () {
      // 首先关闭modal
      _this.setState({ componentModalVisible: false });
      // 自定义的组件正常挂载后, 会以ref的形式暂存
      if (!_this.updateComponentMounted) {
        // 正常情况下不会出现这种情况
        logger.error('user-defined component does not mount');
        return;
      }
      // 用户是否定义了getFieldsValue函数
      if (!_this.updateComponentMounted.getFieldsValue) {
        logger.debug('user does not define getFieldsValue function');
        return;
      }
      // 获取用户自定义组件的返回值
      var data = _this.updateComponentMounted.getFieldsValue();
      logger.debug('user-defined component getFieldsValue = %o', data);
      // 如果组件返回false/undefined, 就什么都不做
      if (!data) {
        return;
      }
      // 否则更新对应的记录
      var keys = [];
      keys.push(_this.updateComponentRecord[_this.primaryKey]);
      _this.handleUpdate(data, keys);

      // TODO: 其实用户自定义组件不只可以用于更新, 还可以做很多事, e.g. 如果定义了xxx方法就直接跳转某个url之类的
      // 本质上来讲是和用户约定好的一套协议
    };

    _this.state = {
      modalVisible: false, // modal是否可见
      modalTitle: '新增', // modal标题
      modalInsert: true, // 当前modal是用来insert还是update

      selectedRowKeys: [], // 当前有哪些行被选中, 这里只保存key
      // FIXME: 这里可能会有点问题, 父组件中有一个data, 这里又有一个data, 都表示的是表格中的数据, 两边状态不一致, 可能有潜在的bug
      data: [], // 表格中显示的数据

      // 图片预览相关状态
      previewVisible: false, // 是否显示图片预览modal
      previewImages: [], // 要预览的图片

      // 用户自定义组件modal, 一般用于实现单条记录的更新
      componentModalVisible: false
    };
    return _this;
  }
  // 对于InnerTable组件而言, 既有表格又有表单
  // 虽然传进来的是dataSchema, 但要parse两次, 分别变成表格和表单的schema


  /**
   * 组件初次挂载时parse schema
   */

  (0, _createClass3.default)(InnerTable, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.parseTableSchema(this.props);
      this.parseTableData(this.props);
    }

    /**
     * InnerTable组件的re-render有两种情况: 自身状态变化导致的render vs 父组件导致的render
     * 正常情况下, 只有父组件导致的render才会触发这个方法, InnerTable自身的变化应该不会触发
     *
     * 父组件触发这个方法也有两种情况:
     * 1. 只有data变化, 比如改变了查询条件/分页等等
     * 2. schema和data都变化了, 比如在react router中切换了菜单项
     *
     * @param nextProps
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // console.log('nextProps1', nextProps);
      logger.debug('receive new props and try to render, nextProps=%o', nextProps);
      // 之前因为antd的Form组件搞了一些黑盒操作, 表单每输入一次都会触发这个方法, 现在表单独立成一个组件了, 应该好了

      // // 只有表名变化时才需要重新parse schema
      // if (this.props.tableName !== nextProps.tableName) {
      //   logger.debug('tableName changed and try to refresh schema');
      //   this.parseTableSchema(nextProps);
      //   this.formComponent = undefined;  // 这个别忘了, 如果schema变了, 表单当然也要变
      // }

      // 这里要还原初始状态, 理论上来讲, InnerTable所有自己的状态都应该还原, 但其实也是看情况的
      // 比如这里的this.state.data就不用还原, 因为下面的parseTableData方法会更新this.state.data
      // 哪些状态做成this.xxx, 哪些做成this.state.xxx, 还是有点迷惑的, 如果全都塞到state里是不是不太好
      this.state.modalVisible = false;
      this.state.modalTitle = '新增';
      this.state.modalInsert = true;
      this.state.selectedRowKeys = [];

      // 是否要刷新表格中显示的数据? 这个逻辑还有点绕
      // 1. 如果schema变化了, 必须刷新数据
      // 2. 如果schema没变, 但表格要进入loading状态, 就不要刷新数据, 这样用户体验更好
      if (this.props.tableName !== nextProps.tableName || !nextProps.tableLoading) {
        this.parseTableData(nextProps);
      }
    }

    /**
     * 当前组件unmount时清除render函数缓存
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      logger.debug('InnerTable component unmount and reset RenderUtils');
      _InnerTableRenderUtils2.default.reset();
    }

    /*下面是一些数据处理相关的方法*/

    /**
     * 解析表格的schema
     */

  }, {
    key: 'parseTableSchema',
    value: function parseTableSchema(props) {
      var tableName = props.tableName,
          schema = props.schema;

      var parseResult = _InnerTableSchemaUtils2.default.getTableSchema(tableName, schema);

      this.primaryKey = parseResult.primaryKey;
      // fieldMap是对原始的dataSchema做了一些处理, 方便查询用的
      this.fieldMap = parseResult.fieldMap;
      // tableSchema是转换后的Table组件可用的schema
      // 对于tableSchema, 即使命中了缓存, 也要重新设置下render函数
      this.tableSchema = _InnerTableRenderUtils2.default.bindRender(parseResult.tableSchema, tableName, this);
    }

    // /**
    //  * 解析表格要显示的数据
    //  * 后端返回的数据不能直接在table中显示
    //  */

  }, {
    key: 'parseTableData',
    value: function parseTableData(props) {
      var _this2 = this;

      // 每行数据都必须有个key属性, 如果指定了主键, 就以主键为key
      // 否则直接用个自增数字做key
      var newData = [];
      var i = 0;
      if (props.data) {
        props.data.forEach(function (obj) {
          var newObj = (0, _assign2.default)({}, obj);
          // const newObj = this.transformRawDataToTable(obj);
          if (_this2.primaryKey) {
            newObj.key = obj[_this2.primaryKey];
          } else {
            newObj.key = i;
            i++;
          }
          newData.push(newObj);
        });
        this.state.data = newData;
      };

      // 在这里, 下面两种写法是等效的, 因为parseTableData方法只会被componentWillReceiveProps调用, 而componentWillReceiveProps的下一步就是判断是否re-render
      // 但要注意, 不是任何情况下都等效
      //this.setState({data: newData});
      // console.log('newData',newData)
      // this.state.data = newData;
    }

    // /**
    //  * 将后端返回的一条数据转换为前端表格中能显示的一条数据
    //  * 后端返回的往往是数字(比如0表示屏蔽, 1表示正常)
    //  * 而表格中要显示对应的汉字, 跟dataSchema中的配置对应
    //  */

  }, {
    key: 'transformRawDataToTable',
    value: function transformRawDataToTable(obj) {
      var newObj = {};
      // 这段代码真是好蛋疼...
      for (var key in obj) {
        if (this.fieldMap.get(key)) {
          var optionMap = this.fieldMap.get(key).$$optionMap;
          if (obj[key] instanceof Array) {
            var newArray = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = (0, _getIterator3.default)(obj[key]), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var optionKey = _step3.value;

                newArray.push(optionMap[optionKey]);
              }
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

            newObj[key] = newArray.join(',');
          } else {
            newObj[key] = optionMap[obj[key]];
          }
        } else {
          newObj[key] = obj[key];
        }
      }
      newObj.$$rawData = obj; // 原始数据还是要保存下的, 后面update会用到
      return newObj;
    }

    /**
     * 将后端返回的一条数据转换为表单中能显示的数据
     * 主要是处理日期字段, 必须是moment对象
     */

  }, {
    key: 'transformRawDataToForm',
    value: function transformRawDataToForm(obj) {
      var newObj = {};

      for (var key in obj) {
        // rawData中可能有些undefined或null的字段, 过滤掉
        if (!obj[key]) continue;

        if (this.fieldMap.get(key).dataType === 'datetime') {
          // 判断是否是日期类型的字段
          newObj[key] = (0, _moment2.default)(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }

      return newObj;
    }

    /**
     * 将表格中的一条数据转换为表单中能显示的数据
     */

  }, {
    key: 'transformTableDataToForm',
    value: function transformTableDataToForm(obj) {
      return this.transformRawDataToForm(obj.$$rawData);
    }

    /**
     * 设置表单要显示的数据
     */

  }, {
    key: 'setFormData',
    value: function setFormData(data) {
      // 注意这里, 由于antd modal的特殊性, this.formComponent可能是undefined, 要判断一下
      if (this.formComponent) {
        this.formComponent.props.form.resetFields();
        if (data) {
          this.formComponent.props.form.setFieldsValue(data);
        }
      } else {
        this.formInitData = data;
      }
    }

    /*下面是一些事件处理的方法*/

    /**
     * 点击新增按钮, 弹出一个内嵌表单的modal
     *
     * @param e
     */

    /**
     * 点击更新按钮, 弹出一个内嵌表单的modal
     * 注意区分单条更新和批量更新
     *
     * @param e
     */

    /**
     * 点击删除按钮, 弹出一个确认对话框
     * 注意区分单条删除和批量删除
     *
     * @param e
     */

    /**
     * 处理表格的选择事件
     *
     * @param selectedRowKeys
     */

    /**
     * 隐藏modal
     */

    /**
     * 点击modal中确认按钮的回调, 清洗数据并准备传给后端
     */

    /**
     * 点击图片时显示幻灯片
     *
     * @param text
     */

    /**
     * 隐藏图片预览
     */

    /**
     * 针对单条记录的更新
     *
     * @param record 要更新的记录
     * @param keysToUpdate 允许更新哪些字段(弹出的modal中显示哪些字段)
     */

    /**
     * 针对单条记录的删除
     *
     * @param record
     */

    /**
     * 自定义组件实现对单条记录的更新
     * 可以满足一些定制化的需求, 优化用户体验
     *
     * @param record 要更新的记录
     * @param component 要渲染的组件, 会将对应的组件渲染到modal中
     * @param name 显示modal时的标题
     */

    /**
     * 隐藏自定义组件modal
     */

    /**
     * 自定义组件modal点击确认时的回调
     */

  }, {
    key: 'error',

    /*下面开始才是真正的数据库操作*/

    value: function error(errorMsg) {
      // 对于错误信息, 要很明显的提示用户, 这个通知框要用户手动关闭
      _antd.message.error('出错啦,请填写所有表单项目再提交！');
      console.log(errorMsg);
    }

    /**
     * 真正去新增数据
     */

  }, {
    key: 'handleInsert',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(obj) {
        var addProduct, hide, client, res, newData, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, record;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                obj.images = this.props.store.imgUrlID.join(',');
                obj.price = parseFloat((obj.price * 100).toFixed(2));
                // console.log('add_obj',obj);
                addProduct = '\n      mutation (\n        $baseinfo:ProductBaseinfo!, $shopId: Int!, $type:ProductType!, $youzan:ProductYouzanArgs\n        ) {\n        createProduct(\n              baseinfo:$baseinfo,\n              shopId: $shopId,\n              type:$type,\n              youzan:$youzan\n          ){\n              id\n              title\n              images\n              price\n              desc\n              detailUrl\n              imagesUrls{\n                url\n              }\n          }\n        }\n      ';
                hide = _antd.message.loading('正在新增...', 0);
                client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                  headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                  }
                });
                _context.prev = 5;

                if (!this.props.store.imageId) {
                  _context.next = 13;
                  break;
                }

                delete obj.detailUrl;
                _context.next = 10;
                return client.request(addProduct, { baseinfo: obj, shopId: this.props.shopID, type: 'YOUZAN', youzan: { imageIds: this.props.store.imageId, quantity: 1000 } });

              case 10:
                res = _context.sent;
                _context.next = 16;
                break;

              case 13:
                _context.next = 15;
                return client.request(addProduct, { baseinfo: obj, shopId: this.props.shopID, type: 'LINK' });

              case 15:
                res = _context.sent;

              case 16:
                hide();

                if (res.errors) {
                  _context.next = 50;
                  break;
                }

                console.log('product', res);
                _antd.notification.success({
                  message: '新增成功',
                  // description: this.primaryKey ? `新增数据行 主键=${res.data[this.primaryKey]}` : '',
                  duration: 3
                });
                this.props.store.resetUrlIDs();
                res.createProduct.mainImage = res.createProduct.imagesUrls[0].url;
                delete res.createProduct.imagesUrls;
                delete res.createProduct.images;
                console.log('111', res);
                // 数据变化后, 刷新下表格, 我之前是变化后刷新整个页面的, 想想还是只刷新表格比较好
                // 新增的数据放到第一行
                newData = [];
                // const transformedData = this.transformRawDataToTable(res.data);
                // 表格中的每条记录都必须有个唯一的key, 否则会有warn, 如果有主键就用主键, 否则只能随便给个
                // 如果key有重复的, 会有warn, 显示也会有问题, 所以后端接口要注意下, 如果DB主键都能重复, 也只能呵呵了...

                if (this.primaryKey) {
                  res.createProduct.key = res.createProduct[this.primaryKey];
                } else {
                  res.createProduct.key = Math.floor(Math.random() * 100); // MAGIC NUMBER
                }
                newData.push(res.createProduct);

                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                _context.prev = 31;
                for (_iterator4 = (0, _getIterator3.default)(this.state.data); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  record = _step4.value;

                  newData.push(record);
                }

                _context.next = 39;
                break;

              case 35:
                _context.prev = 35;
                _context.t0 = _context['catch'](31);
                _didIteratorError4 = true;
                _iteratorError4 = _context.t0;

              case 39:
                _context.prev = 39;
                _context.prev = 40;

                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }

              case 42:
                _context.prev = 42;

                if (!_didIteratorError4) {
                  _context.next = 45;
                  break;
                }

                throw _iteratorError4;

              case 45:
                return _context.finish(42);

              case 46:
                return _context.finish(39);

              case 47:
                this.setState({ selectedRowKeys: [], data: newData });
                _context.next = 51;
                break;

              case 50:
                this.error(res.message);

              case 51:
                _context.next = 58;
                break;

              case 53:
                _context.prev = 53;
                _context.t1 = _context['catch'](5);

                logger.error('insert exception, %o', _context.t1);
                hide();
                this.error('\u7F51\u7EDC\u8BF7\u6C42\u51FA\u9519: ' + _context.t1.message);

              case 58:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 53], [31, 35, 39, 47], [40,, 42, 46]]);
      }));

      function handleInsert(_x) {
        return _ref.apply(this, arguments);
      }

      return handleInsert;
    }()

    /**
     * 真正去更新数据
     */

  }, {
    key: 'handleUpdate',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(obj) {
        var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.selectedRowKeys;

        var CRUD, hide, res, transformedData, newData, keySet, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, record, newRecord;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                CRUD = ajax.CRUD(this.props.tableName);
                hide = _antd.message.loading('正在更新...', 0);
                _context2.prev = 2;
                _context2.next = 5;
                return CRUD.update(keys, obj);

              case 5:
                res = _context2.sent;

                hide();

                if (!res.success) {
                  _context2.next = 34;
                  break;
                }

                _antd.notification.success({
                  message: '更新成功',
                  description: '\u66F4\u65B0' + res.data + '\u6761\u6570\u636E',
                  duration: 3
                });

                // 数据变化后, 刷新下表格
                transformedData = this.transformRawDataToTable(obj);
                newData = [];
                keySet = new _set2.default(keys); // array转set

                _iteratorNormalCompletion5 = true;
                _didIteratorError5 = false;
                _iteratorError5 = undefined;
                _context2.prev = 15;
                for (_iterator5 = (0, _getIterator3.default)(this.state.data); !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  record = _step5.value;

                  if (keySet.has(record.key)) {
                    // 是否是被更新的记录
                    newRecord = (0, _assign2.default)({}, record, transformedData); // 这个应该是浅拷贝

                    newRecord.$$rawData = (0, _assign2.default)({}, record.$$rawData, transformedData.$$rawData);
                    logger.debug('newRecord = %o', newRecord);
                    newData.push(newRecord);
                  } else {
                    newData.push(record);
                  }
                }
                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2['catch'](15);
                _didIteratorError5 = true;
                _iteratorError5 = _context2.t0;

              case 23:
                _context2.prev = 23;
                _context2.prev = 24;

                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                  _iterator5.return();
                }

              case 26:
                _context2.prev = 26;

                if (!_didIteratorError5) {
                  _context2.next = 29;
                  break;
                }

                throw _iteratorError5;

              case 29:
                return _context2.finish(26);

              case 30:
                return _context2.finish(23);

              case 31:
                this.setState({ selectedRowKeys: [], data: newData });
                _context2.next = 35;
                break;

              case 34:
                this.error(res.message);

              case 35:
                _context2.next = 42;
                break;

              case 37:
                _context2.prev = 37;
                _context2.t1 = _context2['catch'](2);

                logger.error('update exception, %o', _context2.t1);
                hide();
                this.error('\u7F51\u7EDC\u8BF7\u6C42\u51FA\u9519: ' + _context2.t1.message);

              case 42:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 37], [15, 19, 23, 31], [24,, 26, 30]]);
      }));

      function handleUpdate(_x2) {
        return _ref2.apply(this, arguments);
      }

      return handleUpdate;
    }()

    /**
     * 真正去删除数据
     */

  }, {
    key: 'handleDelete',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.selectedRowKeys;
        var shopID = arguments[1];

        var ID, deleteProduct, variables, hide, client, res, newData, keySet, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, record;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                ID = parseInt(keys);

                console.log('ID', ID);
                deleteProduct = '\n      mutation ($id:ID!,$shopId:ID!){\n        deleteProduct(id:$id, shopId:$shopId){\n          desc\n          detailUrl\n          id\n          images\n          price\n          title\n        }\n      }\n    ';
                variables = {
                  id: ID,
                  shopId: this.props.shopID
                };
                hide = _antd.message.loading('正在删除...', 0);
                client = new _graphqlRequest.GraphQLClient(_uri2.default, {
                  headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken')
                  }
                });
                _context3.prev = 6;
                _context3.next = 9;
                return client.request(deleteProduct, variables);

              case 9:
                res = _context3.sent;

                hide();

                if (res.error) {
                  _context3.next = 37;
                  break;
                }

                _antd.notification.success({
                  message: '删除成功',
                  // description: `删除${res.data}条数据`,
                  duration: 3
                });

                // 数据变化后, 刷新下表格
                newData = [];
                keySet = new _set2.default(keys); // array转set

                _iteratorNormalCompletion6 = true;
                _didIteratorError6 = false;
                _iteratorError6 = undefined;
                _context3.prev = 18;
                for (_iterator6 = (0, _getIterator3.default)(this.state.data); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                  record = _step6.value;

                  if (!keySet.has(record.key)) {
                    // 是否是被删除的记录
                    newData.push(record);
                  }
                }
                _context3.next = 26;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t0 = _context3['catch'](18);
                _didIteratorError6 = true;
                _iteratorError6 = _context3.t0;

              case 26:
                _context3.prev = 26;
                _context3.prev = 27;

                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                  _iterator6.return();
                }

              case 29:
                _context3.prev = 29;

                if (!_didIteratorError6) {
                  _context3.next = 32;
                  break;
                }

                throw _iteratorError6;

              case 32:
                return _context3.finish(29);

              case 33:
                return _context3.finish(26);

              case 34:
                this.setState({ selectedRowKeys: [], data: newData });
                _context3.next = 38;
                break;

              case 37:
                this.error(res.message);

              case 38:
                _context3.next = 45;
                break;

              case 40:
                _context3.prev = 40;
                _context3.t1 = _context3['catch'](6);

                logger.error('delete exception, %o', _context3.t1);
                hide();
                this.error('\u7F51\u7EDC\u8BF7\u6C42\u51FA\u9519: ' + _context3.t1.message);

              case 45:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 40], [18, 22, 26, 34], [27,, 29, 33]]);
      }));

      function handleDelete() {
        return _ref3.apply(this, arguments);
      }

      return handleDelete;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          tableName = _props.tableName,
          schema = _props.schema,
          tableLoading = _props.tableLoading,
          tableConfig = _props.tableConfig;
      // console.log('schema',schema);

      // 根据当前的tableName, 获取对应的表单组件

      var FormComponent = _InnerTableSchemaUtils2.default.getForm(tableName, schema.slice(0, 6));

      var rowSelection = {
        selectedRowKeys: this.state.selectedRowKeys,
        onChange: this.onTableSelectChange
      };

      var hasSelected = this.state.selectedRowKeys.length > 0; // 是否选择
      // const multiSelected = this.state.selectedRowKeys.length > 1;  // 是否选择了多项

      var UpdateComponent = this.updateComponent;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733
        }
      }, _react2.default.createElement('div', { className: 'db-table-button', __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        }
      }, _react2.default.createElement(_antd.Affix, { offsetTop: 8, target: function target() {
          return document.getElementById('main-content-div');
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 735
        }
      }, _react2.default.createElement(_antd.Button.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 736
        }
      }, tableConfig.showInsert && _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.onClickInsert, __source: {
          fileName: _jsxFileName,
          lineNumber: 738
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'plus-circle-o', __source: {
          fileName: _jsxFileName,
          lineNumber: 739
        }
      }), ' \u65B0\u589E'), tableConfig.showDelete && _react2.default.createElement(_antd.Button, { type: 'primary', disabled: !hasSelected || !this.primaryKey, onClick: this.onClickDelete, __source: {
          fileName: _jsxFileName,
          lineNumber: 747
        }
      }, _react2.default.createElement(_antd.Icon, { type: 'delete', __source: {
          fileName: _jsxFileName,
          lineNumber: 748
        }
      }), ' \u5220\u9664'))), _react2.default.createElement(_antd.Modal, { title: this.state.modalTitle, visible: this.state.modalVisible, onOk: this.handleModalOk,
        onCancel: this.hideModal, maskClosable: false, width: 550, __source: {
          fileName: _jsxFileName,
          lineNumber: 753
        }
      }, _react2.default.createElement(FormComponent, { wrappedComponentRef: function wrappedComponentRef(input) {
          _this3.formComponent = input;
        }, initData: this.formInitData, forUpdate: !this.state.modalInsert, keysToUpdate: this.keysToUpdate, __source: {
          fileName: _jsxFileName,
          lineNumber: 755
        }
      }))), _react2.default.createElement(_antd.Modal, { title: this.updateComponentModalTitle, visible: this.state.componentModalVisible,
        onCancel: this.handleComponentModalCancel,
        onOk: this.handleComponentModalOk, maskClosable: false, __source: {
          fileName: _jsxFileName,
          lineNumber: 759
        }
      }), _react2.default.createElement(_antd.Table, { rowSelection: rowSelection, columns: this.tableSchema, dataSource: this.state.data, pagination: false,
        loading: tableLoading, style: { marginTop: "15px" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 767
        }
      }));
    }
  }]);
  return InnerTable;
}(_react2.default.Component)) || _class) || _class);
exports.default = InnerTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXERCVGFibGVcXElubmVyVGFibGUuanMiXSwibmFtZXMiOlsibG9nZ2VyIiwiZ2V0TG9nZ2VyIiwiSW5uZXJUYWJsZSIsInByb3BzIiwib25DbGlja0luc2VydCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwibW9kYWxWaXNpYmxlIiwibW9kYWxUaXRsZSIsIm1vZGFsSW5zZXJ0Iiwic2V0Rm9ybURhdGEiLCJvbkNsaWNrVXBkYXRlIiwic2luZ2xlUmVjb3JkS2V5IiwidW5kZWZpbmVkIiwia2V5c1RvVXBkYXRlIiwibmV3RGF0YSIsIm11bHRpU2VsZWN0ZWQiLCJzdGF0ZSIsInNlbGVjdGVkUm93S2V5cyIsImxlbmd0aCIsImRlYnVnIiwic2VsZWN0ZWRLZXkiLCJkYXRhIiwicmVjb3JkIiwia2V5IiwidHJhbnNmb3JtVGFibGVEYXRhVG9Gb3JtIiwicHJpbWFyeUtleSIsImpvaW4iLCJvbkNsaWNrRGVsZXRlIiwiY29uZmlybSIsInRpdGxlIiwiY29udGVudCIsIm9uT2siLCJoYW5kbGVEZWxldGUiLCJvblRhYmxlU2VsZWN0Q2hhbmdlIiwic3RvcmUiLCJnZXRzZWxlY3RlZFJvd0tleXMiLCJoaWRlTW9kYWwiLCJoYW5kbGVNb2RhbE9rIiwidmFsaWRhdGVkIiwiZm9ybUNvbXBvbmVudCIsImZvcm0iLCJ2YWxpZGF0ZUZpZWxkc0FuZFNjcm9sbCIsImVyciIsInZhbHVlcyIsIm5ld09iaiIsIm9sZE9iaiIsImdldEZpZWxkc1ZhbHVlIiwiRGF0ZSIsImZvcm1hdCIsImlzTW9tZW50IiwiaGFuZGxlSW5zZXJ0Iiwia2V5cyIsInB1c2giLCJoYW5kbGVVcGRhdGUiLCJvbkNsaWNrSW1hZ2UiLCJ0ZXh0IiwibmV3SW1hZ2VBcnJheSIsImlzU3RyaW5nIiwidXJsIiwiYWx0IiwiQXJyYXkiLCJ0bXAiLCJwcmV2aWV3VmlzaWJsZSIsInByZXZpZXdJbWFnZXMiLCJjYW5jZWxQcmV2aWV3Iiwib25TaW5nbGVSZWNvcmRVcGRhdGUiLCJ0cmFuc2Zvcm1lZFJlY29yZCIsIm9uU2luZ2xlUmVjb3JkRGVsZXRlIiwic2hvcElEIiwib25TaW5nbGVSZWNvcmRDb21wb25lbnQiLCJjb21wb25lbnQiLCJuYW1lIiwidXBkYXRlQ29tcG9uZW50IiwidXBkYXRlQ29tcG9uZW50UmVjb3JkIiwidXBkYXRlQ29tcG9uZW50TW9kYWxUaXRsZSIsImNvbXBvbmVudE1vZGFsVmlzaWJsZSIsImhhbmRsZUNvbXBvbmVudE1vZGFsQ2FuY2VsIiwiaGFuZGxlQ29tcG9uZW50TW9kYWxPayIsInVwZGF0ZUNvbXBvbmVudE1vdW50ZWQiLCJlcnJvciIsInBhcnNlVGFibGVTY2hlbWEiLCJwYXJzZVRhYmxlRGF0YSIsIm5leHRQcm9wcyIsInRhYmxlTmFtZSIsInRhYmxlTG9hZGluZyIsInJlc2V0Iiwic2NoZW1hIiwicGFyc2VSZXN1bHQiLCJnZXRUYWJsZVNjaGVtYSIsImZpZWxkTWFwIiwidGFibGVTY2hlbWEiLCJiaW5kUmVuZGVyIiwiaSIsImZvckVhY2giLCJvYmoiLCJnZXQiLCJvcHRpb25NYXAiLCIkJG9wdGlvbk1hcCIsIm5ld0FycmF5Iiwib3B0aW9uS2V5IiwiJCRyYXdEYXRhIiwiZGF0YVR5cGUiLCJ0cmFuc2Zvcm1SYXdEYXRhVG9Gb3JtIiwicmVzZXRGaWVsZHMiLCJzZXRGaWVsZHNWYWx1ZSIsImZvcm1Jbml0RGF0YSIsImVycm9yTXNnIiwiY29uc29sZSIsImxvZyIsImltYWdlcyIsImltZ1VybElEIiwicHJpY2UiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImFkZFByb2R1Y3QiLCJoaWRlIiwibG9hZGluZyIsImNsaWVudCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImltYWdlSWQiLCJkZXRhaWxVcmwiLCJyZXF1ZXN0IiwiYmFzZWluZm8iLCJzaG9wSWQiLCJ0eXBlIiwieW91emFuIiwiaW1hZ2VJZHMiLCJxdWFudGl0eSIsInJlcyIsImVycm9ycyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZHVyYXRpb24iLCJyZXNldFVybElEcyIsImNyZWF0ZVByb2R1Y3QiLCJtYWluSW1hZ2UiLCJpbWFnZXNVcmxzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiQ1JVRCIsImFqYXgiLCJ1cGRhdGUiLCJkZXNjcmlwdGlvbiIsInRyYW5zZm9ybWVkRGF0YSIsInRyYW5zZm9ybVJhd0RhdGFUb1RhYmxlIiwia2V5U2V0IiwiaGFzIiwibmV3UmVjb3JkIiwiSUQiLCJwYXJzZUludCIsImRlbGV0ZVByb2R1Y3QiLCJ2YXJpYWJsZXMiLCJpZCIsInRhYmxlQ29uZmlnIiwiRm9ybUNvbXBvbmVudCIsImdldEZvcm0iLCJzbGljZSIsInJvd1NlbGVjdGlvbiIsIm9uQ2hhbmdlIiwiaGFzU2VsZWN0ZWQiLCJVcGRhdGVDb21wb25lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2hvd0luc2VydCIsInNob3dEZWxldGUiLCJpbnB1dCIsIm1hcmdpblRvcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQVNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLFNBQVMsaUJBQUEsQUFBTyxVQUF0QixBQUFlLEFBQWlCOztBQUdoQzs7O0ksQUFJTSxxQkFETCx1QixBQUFBLEFBQU87c0NBRU47O3NCQUFBLEFBQVksT0FBTTt3Q0FBQTs7OElBQUEsQUFDVjs7VUFEVSxBQWlObEIsZ0JBQWdCLFVBQUEsQUFBQyxHQUFNLEFBQ3JCO1FBQUEsQUFBRSxBQUNGO0FBQ0E7WUFBQSxBQUFLO3NCQUFTLEFBQ0UsQUFDZDtvQkFGWSxBQUVBLEFBQ1o7cUJBSEYsQUFBYyxBQUdDO0FBSEQsQUFDWixTQUdDLFlBQUE7ZUFBTSxNQUFBLEFBQUssWUFBWCxBQUFNLEFBQWlCO0FBSjFCLEFBS0Q7QUF6TmlCOztVQUFBLEFB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QSxTQUFPLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLFlBQVksU0FBUyxLQUFBLEFBQUssTUFBbkQsQUFBeUQsY0FBYyxNQUFNLEtBQTdFLEFBQWtGLEFBQzNFO2tCQUFVLEtBRGpCLEFBQ3NCLFdBQVcsY0FEakMsQUFDK0MsT0FBTyxPQUR0RCxBQUM2RDtvQkFEN0Q7c0JBQUEsQUFFRTtBQUZGO3VDQUVFLEFBQUMsaUJBQWMscUJBQXNCLDZCQUFBLEFBQUMsT0FBVSxBQUFFO2lCQUFBLEFBQUssZ0JBQUwsQUFBcUIsQUFBUTtBQUEvRSxXQUFpRixVQUFVLEtBQTNGLEFBQWdHLGNBQWMsV0FBVyxDQUFDLEtBQUEsQUFBSyxNQUEvSCxBQUFxSSxhQUFhLGNBQWMsS0FBaEssQUFBcUs7b0JBQXJLO3NCQXRCTixBQUNFLEFBbUJFLEFBRUUsQUFJSjtBQUpJO3lEQUlHLE9BQU8sS0FBZCxBQUFtQiwyQkFBMkIsU0FBUyxLQUFBLEFBQUssTUFBNUQsQUFBa0UsQUFDM0Q7a0JBQVUsS0FEakIsQUFDc0IsQUFDZjtjQUFNLEtBRmIsQUFFa0Isd0JBQXdCLGNBRjFDLEFBRXdEO29CQUZ4RDtzQkExQkYsQUEwQkUsQUFRQTtBQVJBO3VEQVFPLGNBQVAsQUFBcUIsY0FBYyxTQUFTLEtBQTVDLEFBQWlELGFBQWEsWUFBWSxLQUFBLEFBQUssTUFBL0UsQUFBcUYsTUFBTyxZQUE1RixBQUF3RyxBQUNqRztpQkFEUCxBQUNnQixjQUFjLE9BQU8sRUFBRSxXQUR2QyxBQUNxQyxBQUFhO29CQURsRDtzQkFuQ0osQUFDRSxBQWtDRSxBQUlMO0FBSks7Ozs7O0VBcHVCaUIsZ0JBQU0sQTtrQkE0dUJoQixBIiwiZmlsZSI6IklubmVyVGFibGUuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL216amIifQ==
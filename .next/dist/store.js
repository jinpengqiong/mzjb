'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35;

exports.initStore = initStore;

var _mobx = require('mobx');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  (0, _defineProperty2.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var store = null;

var Store = (_class = function Store(isServer) {
  (0, _classCallCheck3.default)(this, Store);

  _initDefineProp(this, 'imgUrlID', _descriptor, this);

  _initDefineProp(this, 'shopID', _descriptor2, this);

  _initDefineProp(this, 'userRole', _descriptor3, this);

  _initDefineProp(this, 'imageId', _descriptor4, this);

  _initDefineProp(this, 'curPagePath', _descriptor5, this);

  _initDefineProp(this, 'VideoID', _descriptor6, this);

  _initDefineProp(this, 'ProductData', _descriptor7, this);

  _initDefineProp(this, 'selectedRowKeys', _descriptor8, this);

  _initDefineProp(this, 'title', _descriptor9, this);

  _initDefineProp(this, 'images', _descriptor10, this);

  _initDefineProp(this, 'detailUrl', _descriptor11, this);

  _initDefineProp(this, 'position', _descriptor12, this);

  _initDefineProp(this, 'backgroundColor', _descriptor13, this);

  _initDefineProp(this, 'weight', _descriptor14, this);

  _initDefineProp(this, 'ADMediaID', _descriptor15, this);

  _initDefineProp(this, 'TabOption', _descriptor16, this);

  _initDefineProp(this, 'bindRoomData', _descriptor17, this);

  _initDefineProp(this, 'isChecked', _descriptor18, this);

  _initDefineProp(this, 'getUrlIDs', _descriptor19, this);

  _initDefineProp(this, 'resetUrlIDs', _descriptor20, this);

  _initDefineProp(this, 'getShopID', _descriptor21, this);

  _initDefineProp(this, 'getRoleInfo', _descriptor22, this);

  _initDefineProp(this, 'getimageId', _descriptor23, this);

  _initDefineProp(this, 'getCurPagePath', _descriptor24, this);

  _initDefineProp(this, 'getVideoID', _descriptor25, this);

  _initDefineProp(this, 'getProductData', _descriptor26, this);

  _initDefineProp(this, 'getselectedRowKeys', _descriptor27, this);

  _initDefineProp(this, 'getStrucInfo', _descriptor28, this);

  _initDefineProp(this, 'getWeight', _descriptor29, this);

  _initDefineProp(this, 'getPosition', _descriptor30, this);

  _initDefineProp(this, 'getColor', _descriptor31, this);

  _initDefineProp(this, 'getTabOption', _descriptor32, this);

  _initDefineProp(this, 'getADMediaID', _descriptor33, this);

  _initDefineProp(this, 'getBindData', _descriptor34, this);

  _initDefineProp(this, 'setChecked', _descriptor35, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'imgUrlID', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'shopID', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'userRole', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'imageId', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'curPagePath', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'VideoID', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'ProductData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'selectedRowKeys', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'title', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'images', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'detailUrl', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'position', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'backgroundColor', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'weight', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'ADMediaID', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'TabOption', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "1";
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'bindRoomData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'isChecked', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'getUrlIDs', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (ID) {
      _this.imgUrlID.push(ID);
    };
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'resetUrlIDs', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.imgUrlID = [];
    };
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'getShopID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (ID) {
      _this3.shopID = ID;
    };
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, 'getRoleInfo', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (info) {
      _this4.userRole = info;
    };
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, 'getimageId', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (ID) {
      _this5.imageId = ID;
    };
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, 'getCurPagePath', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (path) {
      _this6.curPagePath = path;
    };
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, 'getVideoID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function (ID) {
      _this7.VideoID = ID;
    };
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, 'getProductData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function (data) {
      _this8.ProductData = data;
    };
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, 'getselectedRowKeys', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this9 = this;

    return function (key) {
      _this9.selectedRowKeys = key;
    };
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, 'getStrucInfo', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this10 = this;

    return function (title, images, detailUrl) {
      _this10.title = title;
      _this10.images = images;
      _this10.detailUrl = detailUrl;
    };
  }
}), _descriptor29 = _applyDecoratedDescriptor(_class.prototype, 'getWeight', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this11 = this;

    return function (data) {
      _this11.weight = data;
    };
  }
}), _descriptor30 = _applyDecoratedDescriptor(_class.prototype, 'getPosition', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this12 = this;

    return function (data) {
      _this12.position = data;
    };
  }
}), _descriptor31 = _applyDecoratedDescriptor(_class.prototype, 'getColor', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this13 = this;

    return function (data) {
      _this13.backgroundColor = data;
    };
  }
}), _descriptor32 = _applyDecoratedDescriptor(_class.prototype, 'getTabOption', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this14 = this;

    return function (option) {
      _this14.TabOption = option;
    };
  }
}), _descriptor33 = _applyDecoratedDescriptor(_class.prototype, 'getADMediaID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this15 = this;

    return function (data) {
      _this15.ADMediaID = data;
    };
  }
}), _descriptor34 = _applyDecoratedDescriptor(_class.prototype, 'getBindData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this16 = this;

    return function (data) {
      _this16.bindRoomData = data;
    };
  }
}), _descriptor35 = _applyDecoratedDescriptor(_class.prototype, 'setChecked', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this17 = this;

    return function () {
      _this17.isChecked = false;
    };
  }
})), _class);
function initStore(isServer) {
  if (isServer) {
    return new Store(isServer);
  } else {
    if (store === null) {
      store = new Store(isServer);
    }
    return store;
  }
}
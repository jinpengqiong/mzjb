'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;

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

var Store = (_class =
// replyBody saved here

//product tab will shown
function Store(isServer) {
  (0, _classCallCheck3.default)(this, Store);

  _initDefineProp(this, 'shopID', _descriptor, this);

  _initDefineProp(this, 'userRole', _descriptor2, this);

  _initDefineProp(this, 'curPagePath', _descriptor3, this);

  _initDefineProp(this, 'ProductData', _descriptor4, this);

  _initDefineProp(this, 'TabOption', _descriptor5, this);

  _initDefineProp(this, 'bindRoomData', _descriptor6, this);

  _initDefineProp(this, 'mainImage', _descriptor7, this);

  _initDefineProp(this, 'isShown', _descriptor8, this);

  _initDefineProp(this, 'activeKey', _descriptor9, this);

  _initDefineProp(this, 'ProdDetailData', _descriptor10, this);

  _initDefineProp(this, 'replyBody', _descriptor11, this);

  _initDefineProp(this, 'collapsed', _descriptor12, this);

  _initDefineProp(this, 'getShopID', _descriptor13, this);

  _initDefineProp(this, 'getRoleInfo', _descriptor14, this);

  _initDefineProp(this, 'getCurPagePath', _descriptor15, this);

  _initDefineProp(this, 'getProductData', _descriptor16, this);

  _initDefineProp(this, 'getTabOption', _descriptor17, this);

  _initDefineProp(this, 'getADMediaID', _descriptor18, this);

  _initDefineProp(this, 'getBindData', _descriptor19, this);

  _initDefineProp(this, 'getMainImage', _descriptor20, this);

  _initDefineProp(this, 'changeShown', _descriptor21, this);

  _initDefineProp(this, 'changeKey', _descriptor22, this);

  _initDefineProp(this, 'getProdDetailData', _descriptor23, this);

  _initDefineProp(this, 'changeIsExisted', _descriptor24, this);

  _initDefineProp(this, 'addReplyBody', _descriptor25, this);

  _initDefineProp(this, 'clearReplyBody', _descriptor26, this);

  _initDefineProp(this, 'changeCollapse', _descriptor27, this);
}
// sidebar isCollapse

//Youxuan Product detail data

// wethear show the product detail
, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'shopID', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'userRole', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'curPagePath', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'ProductData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'TabOption', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "1";
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'bindRoomData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'mainImage', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'isShown', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'activeKey', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '1';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'ProdDetailData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'replyBody', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'collapsed', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'getShopID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (ID) {
      _this.shopID = ID;
    };
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'getRoleInfo', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (info) {
      _this2.userRole = info;
    };
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'getCurPagePath', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (path) {
      _this3.curPagePath = path;
    };
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'getProductData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (data) {
      _this4.ProductData = data;
    };
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'getTabOption', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (option) {
      _this5.TabOption = option;
    };
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'getADMediaID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (data) {
      _this6.ADMediaID = data;
    };
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'getBindData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function (data) {
      _this7.bindRoomData = data;
    };
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'getMainImage', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function (data) {
      _this8.mainImage = data;
    };
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'changeShown', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this9 = this;

    return function () {
      _this9.isShown = true;
    };
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, 'changeKey', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this10 = this;

    return function (keyID) {
      _this10.activeKey = keyID;
    };
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, 'getProdDetailData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this11 = this;

    return function (data) {
      _this11.ProdDetailData = data;
    };
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, 'changeIsExisted', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this12 = this;

    return function () {
      _this12.ProdDetailData.alreadyExist = true;
    };
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, 'addReplyBody', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this13 = this;

    return function (data) {
      _this13.replyBody.push(data);
    };
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, 'clearReplyBody', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this14 = this;

    return function () {
      _this14.replyBody = [];
    };
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, 'changeCollapse', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this15 = this;

    return function () {
      _this15.collapsed = !_this15.collapsed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImluaXRTdG9yZSIsInN0b3JlIiwiU3RvcmUiLCJpc1NlcnZlciIsIm9ic2VydmFibGUiLCJhY3Rpb24iLCJJRCIsInNob3BJRCIsImluZm8iLCJ1c2VyUm9sZSIsInBhdGgiLCJjdXJQYWdlUGF0aCIsImRhdGEiLCJQcm9kdWN0RGF0YSIsIm9wdGlvbiIsIlRhYk9wdGlvbiIsIkFETWVkaWFJRCIsImJpbmRSb29tRGF0YSIsIm1haW5JbWFnZSIsImlzU2hvd24iLCJrZXlJRCIsImFjdGl2ZUtleSIsIlByb2REZXRhaWxEYXRhIiwiYWxyZWFkeUV4aXN0IiwicmVwbHlCb2R5IiwicHVzaCIsImNvbGxhcHNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztRQXlGZ0IsQSxZQUFBLEE7O0FBekZoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQUksUUFBUSxBQUFaOztJQUVNLEE7QUFjSjs7QUFKQTtBQVVBLGVBQWEsQUFBYixVQUF1QjtzQ0FBQTs7K0NBQUE7O2tEQUFBOztxREFBQTs7cURBQUE7O21EQUFBOztzREFBQTs7bURBQUE7O2lEQUFBOzttREFBQTs7eURBQUE7O29EQUFBOztvREFBQTs7b0RBQUE7O3NEQUFBOzt5REFBQTs7eURBQUE7O3VEQUFBOzt1REFBQTs7c0RBQUE7O3VEQUFBOztzREFBQTs7b0RBQUE7OzREQUFBOzswREFBQTs7dURBQUE7O3lEQUFBOzt5REFDdEI7O0FBTEQ7O0FBSkE7O0FBSkE7d0VBUEMsTTs7O1dBQW9CLEE7OzRFQUNwQixNOzs7V0FBc0IsQTs7K0VBQ3RCLE07OztXQUF5QixBOzsrRUFDekIsTTs7O1dBQXlCLEE7OzZFQUN6QixNOzs7V0FBdUIsQTs7Z0ZBQ3ZCLE07OztXQUEwQixBOzs2RUFDMUIsTTs7O1dBQXVCLEE7OzJFQUV2QixNOzs7V0FBcUIsQTs7NkVBRXJCLE07OztXQUF1QixBOzttRkFFdkIsTTs7O1dBQTRCLEE7OzhFQUU1QixNOzs7V0FBdUIsQTs7OEVBRXZCLE07OztXQUF1QixBOzs4RUFNdkIsTTs7Ozs7V0FBbUIsVUFBQyxBQUFELElBQVEsQUFDMUI7WUFBSyxBQUFMLFNBQWMsQUFBZCxBQUNEO0E7O2dGQUVBLE07Ozs7O1dBQXFCLFVBQUMsQUFBRCxNQUFVLEFBQzlCO2FBQUssQUFBTCxXQUFnQixBQUFoQixBQUNEO0E7O21GQUVBLE07Ozs7O1dBQXdCLFVBQUMsQUFBRCxNQUFVLEFBQ2pDO2FBQUssQUFBTCxjQUFtQixBQUFuQixBQUNEO0E7O21GQUVBLE07Ozs7O1dBQXdCLFVBQUMsQUFBRCxNQUFVLEFBQ2pDO2FBQUssQUFBTCxjQUFtQixBQUFuQixBQUNEO0E7O2lGQUVBLE07Ozs7O1dBQXNCLFVBQUMsQUFBRCxRQUFZLEFBQ2pDO2FBQUssQUFBTCxZQUFpQixBQUFqQixBQUNEO0E7O2lGQUVBLE07Ozs7O1dBQXNCLFVBQUMsQUFBRCxNQUFVLEFBQy9CO2FBQUssQUFBTCxZQUFpQixBQUFqQixBQUNEO0E7O2dGQUVBLE07Ozs7O1dBQXFCLFVBQUMsQUFBRCxNQUFVLEFBQzlCO2FBQUssQUFBTCxlQUFvQixBQUFwQixBQUNEO0E7O2lGQUVBLE07Ozs7O1dBQXNCLFVBQUMsQUFBRCxNQUFVLEFBQzdCO2FBQUssQUFBTCxZQUFpQixBQUFqQixBQUNIO0E7O2dGQUVBLE07Ozs7O1dBQXFCLFlBQU0sQUFDMUI7YUFBSyxBQUFMLFVBQWUsQUFBZixBQUNEO0E7OzhFQUVBLE07Ozs7O1dBQW1CLFVBQUMsQUFBRCxPQUFXLEFBQzdCO2NBQUssQUFBTCxZQUFpQixBQUFqQixBQUNEO0E7O3NGQUVBLE07Ozs7O1dBQTJCLFVBQUMsQUFBRCxNQUFVLEFBQ2xDO2NBQUssQUFBTCxpQkFBc0IsQUFBdEIsQUFDSDtBOztvRkFFQSxNOzs7OztXQUF5QixZQUFNLEFBQzVCO2NBQUssQUFBTCxlQUFvQixBQUFwQixlQUFtQyxBQUFuQyxBQUNIO0E7O2lGQUVBLE07Ozs7O1dBQXNCLFVBQUMsQUFBRCxNQUFVLEFBQy9CO2NBQUssQUFBTCxVQUFlLEFBQWYsS0FBb0IsQUFBcEIsQUFDRDtBOzttRkFFQSxNOzs7OztXQUF3QixZQUFNLEFBQzdCO2NBQUssQUFBTCxZQUFlLEFBQWYsQUFDRDtBOzttRkFFQSxNOzs7OztXQUF3QixZQUFNLEFBQzNCO2NBQUssQUFBTCxZQUFpQixDQUFDLFFBQUssQUFBdkIsQUFDSDtBOzs7QUFJSSxTQUFTLEFBQVQsVUFBb0IsQUFBcEIsVUFBOEIsQUFDbkM7TUFBSSxBQUFKLFVBQWMsQUFDWjtXQUFPLElBQUksQUFBSixNQUFVLEFBQVYsQUFBUCxBQUNEO0FBRkQsU0FFTyxBQUNMO1FBQUksVUFBVSxBQUFkLE1BQW9CLEFBQ2xCO2NBQVEsSUFBSSxBQUFKLE1BQVUsQUFBVixBQUFSLEFBQ0Q7QUFDRDtXQUFPLEFBQVAsQUFDRDtBQUNGIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRGVza3RvcC9tempiL211emhpanViYW9fd2ViIn0=
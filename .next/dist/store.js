'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29;

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

  _initDefineProp(this, 'imageId', _descriptor3, this);

  _initDefineProp(this, 'curPagePath', _descriptor4, this);

  _initDefineProp(this, 'ProductData', _descriptor5, this);

  _initDefineProp(this, 'TabOption', _descriptor6, this);

  _initDefineProp(this, 'bindRoomData', _descriptor7, this);

  _initDefineProp(this, 'mainImage', _descriptor8, this);

  _initDefineProp(this, 'isShown', _descriptor9, this);

  _initDefineProp(this, 'activeKey', _descriptor10, this);

  _initDefineProp(this, 'ProdDetailData', _descriptor11, this);

  _initDefineProp(this, 'replyBody', _descriptor12, this);

  _initDefineProp(this, 'collapsed', _descriptor13, this);

  _initDefineProp(this, 'getShopID', _descriptor14, this);

  _initDefineProp(this, 'getimageId', _descriptor15, this);

  _initDefineProp(this, 'getRoleInfo', _descriptor16, this);

  _initDefineProp(this, 'getCurPagePath', _descriptor17, this);

  _initDefineProp(this, 'getProductData', _descriptor18, this);

  _initDefineProp(this, 'getTabOption', _descriptor19, this);

  _initDefineProp(this, 'getADMediaID', _descriptor20, this);

  _initDefineProp(this, 'getBindData', _descriptor21, this);

  _initDefineProp(this, 'getMainImage', _descriptor22, this);

  _initDefineProp(this, 'changeShown', _descriptor23, this);

  _initDefineProp(this, 'changeKey', _descriptor24, this);

  _initDefineProp(this, 'getProdDetailData', _descriptor25, this);

  _initDefineProp(this, 'changeIsExisted', _descriptor26, this);

  _initDefineProp(this, 'addReplyBody', _descriptor27, this);

  _initDefineProp(this, 'clearReplyBody', _descriptor28, this);

  _initDefineProp(this, 'changeCollapse', _descriptor29, this);
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
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'imageId', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'curPagePath', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'ProductData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'TabOption', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return "1";
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'bindRoomData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'mainImage', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'isShown', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'activeKey', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '1';
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, 'ProdDetailData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, 'replyBody', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'collapsed', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'getShopID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (ID) {
      _this.shopID = ID;
    };
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, 'getimageId', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function (ID) {
      _this2.imageId = ID;
    };
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, 'getRoleInfo', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (info) {
      _this3.userRole = info;
    };
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, 'getCurPagePath', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (path) {
      _this4.curPagePath = path;
    };
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'getProductData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (data) {
      _this5.ProductData = data;
    };
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'getTabOption', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (option) {
      _this6.TabOption = option;
    };
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'getADMediaID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function (data) {
      _this7.ADMediaID = data;
    };
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'getBindData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function (data) {
      _this8.bindRoomData = data;
    };
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, 'getMainImage', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this9 = this;

    return function (data) {
      _this9.mainImage = data;
    };
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, 'changeShown', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this10 = this;

    return function () {
      _this10.isShown = true;
    };
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, 'changeKey', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this11 = this;

    return function (keyID) {
      _this11.activeKey = keyID;
    };
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, 'getProdDetailData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this12 = this;

    return function (data) {
      _this12.ProdDetailData = data;
    };
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, 'changeIsExisted', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this13 = this;

    return function () {
      _this13.ProdDetailData.alreadyExist = true;
    };
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, 'addReplyBody', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this14 = this;

    return function (data) {
      _this14.replyBody.push(data);
    };
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, 'clearReplyBody', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this15 = this;

    return function () {
      _this15.replyBody = [];
    };
  }
}), _descriptor29 = _applyDecoratedDescriptor(_class.prototype, 'changeCollapse', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this16 = this;

    return function () {
      _this16.collapsed = !_this16.collapsed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImluaXRTdG9yZSIsInN0b3JlIiwiU3RvcmUiLCJpc1NlcnZlciIsIm9ic2VydmFibGUiLCJhY3Rpb24iLCJJRCIsInNob3BJRCIsImltYWdlSWQiLCJpbmZvIiwidXNlclJvbGUiLCJwYXRoIiwiY3VyUGFnZVBhdGgiLCJkYXRhIiwiUHJvZHVjdERhdGEiLCJvcHRpb24iLCJUYWJPcHRpb24iLCJBRE1lZGlhSUQiLCJiaW5kUm9vbURhdGEiLCJtYWluSW1hZ2UiLCJpc1Nob3duIiwia2V5SUQiLCJhY3RpdmVLZXkiLCJQcm9kRGV0YWlsRGF0YSIsImFscmVhZHlFeGlzdCIsInJlcGx5Qm9keSIsInB1c2giLCJjb2xsYXBzZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7UUE4RmdCLEEsWUFBQSxBOztBQTlGaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFFBQVEsQUFBWjs7SUFFTSxBO0FBZUo7O0FBSkE7QUFVQSxlQUFhLEFBQWIsVUFBdUI7c0NBQUE7OytDQUFBOztrREFBQTs7aURBQUE7O3FEQUFBOztxREFBQTs7bURBQUE7O3NEQUFBOzttREFBQTs7aURBQUE7O29EQUFBOzt5REFBQTs7b0RBQUE7O29EQUFBOztvREFBQTs7cURBQUE7O3NEQUFBOzt5REFBQTs7eURBQUE7O3VEQUFBOzt1REFBQTs7c0RBQUE7O3VEQUFBOztzREFBQTs7b0RBQUE7OzREQUFBOzswREFBQTs7dURBQUE7O3lEQUFBOzt5REFDdEI7O0FBTEQ7O0FBSkE7O0FBSkE7d0VBUkMsTTs7O1dBQW9CLEE7OzRFQUNwQixNOzs7V0FBc0IsQTs7MkVBQ3RCLE07OztXQUFxQixBOzsrRUFDckIsTTs7O1dBQXlCLEE7OytFQUN6QixNOzs7V0FBeUIsQTs7NkVBQ3pCLE07OztXQUF1QixBOztnRkFDdkIsTTs7O1dBQTBCLEE7OzZFQUMxQixNOzs7V0FBdUIsQTs7MkVBRXZCLE07OztXQUFxQixBOzs4RUFFckIsTTs7O1dBQXVCLEE7O21GQUV2QixNOzs7V0FBNEIsQTs7OEVBRTVCLE07OztXQUF1QixBOzs4RUFFdkIsTTs7O1dBQXVCLEE7OzhFQU12QixNOzs7OztXQUFtQixVQUFDLEFBQUQsSUFBUSxBQUMxQjtZQUFLLEFBQUwsU0FBYyxBQUFkLEFBQ0Q7QTs7K0VBRUEsTTs7Ozs7V0FBb0IsVUFBQyxBQUFELElBQVEsQUFDekI7YUFBSyxBQUFMLFVBQWUsQUFBZixBQUNIO0E7O2dGQUVBLE07Ozs7O1dBQXFCLFVBQUMsQUFBRCxNQUFVLEFBQzlCO2FBQUssQUFBTCxXQUFnQixBQUFoQixBQUNEO0E7O21GQUVBLE07Ozs7O1dBQXdCLFVBQUMsQUFBRCxNQUFVLEFBQ2pDO2FBQUssQUFBTCxjQUFtQixBQUFuQixBQUNEO0E7O21GQUVBLE07Ozs7O1dBQXdCLFVBQUMsQUFBRCxNQUFVLEFBQ2pDO2FBQUssQUFBTCxjQUFtQixBQUFuQixBQUNEO0E7O2lGQUVBLE07Ozs7O1dBQXNCLFVBQUMsQUFBRCxRQUFZLEFBQ2pDO2FBQUssQUFBTCxZQUFpQixBQUFqQixBQUNEO0E7O2lGQUVBLE07Ozs7O1dBQXNCLFVBQUMsQUFBRCxNQUFVLEFBQy9CO2FBQUssQUFBTCxZQUFpQixBQUFqQixBQUNEO0E7O2dGQUVBLE07Ozs7O1dBQXFCLFVBQUMsQUFBRCxNQUFVLEFBQzlCO2FBQUssQUFBTCxlQUFvQixBQUFwQixBQUNEO0E7O2lGQUVBLE07Ozs7O1dBQXNCLFVBQUMsQUFBRCxNQUFVLEFBQzdCO2FBQUssQUFBTCxZQUFpQixBQUFqQixBQUNIO0E7O2dGQUVBLE07Ozs7O1dBQXFCLFlBQU0sQUFDMUI7Y0FBSyxBQUFMLFVBQWUsQUFBZixBQUNEO0E7OzhFQUVBLE07Ozs7O1dBQW1CLFVBQUMsQUFBRCxPQUFXLEFBQzdCO2NBQUssQUFBTCxZQUFpQixBQUFqQixBQUNEO0E7O3NGQUVBLE07Ozs7O1dBQTJCLFVBQUMsQUFBRCxNQUFVLEFBQ2xDO2NBQUssQUFBTCxpQkFBc0IsQUFBdEIsQUFDSDtBOztvRkFFQSxNOzs7OztXQUF5QixZQUFNLEFBQzVCO2NBQUssQUFBTCxlQUFvQixBQUFwQixlQUFtQyxBQUFuQyxBQUNIO0E7O2lGQUVBLE07Ozs7O1dBQXNCLFVBQUMsQUFBRCxNQUFVLEFBQy9CO2NBQUssQUFBTCxVQUFlLEFBQWYsS0FBb0IsQUFBcEIsQUFDRDtBOzttRkFFQSxNOzs7OztXQUF3QixZQUFNLEFBQzdCO2NBQUssQUFBTCxZQUFlLEFBQWYsQUFDRDtBOzttRkFFQSxNOzs7OztXQUF3QixZQUFNLEFBQzNCO2NBQUssQUFBTCxZQUFpQixDQUFDLFFBQUssQUFBdkIsQUFDSDtBOzs7QUFJSSxTQUFTLEFBQVQsVUFBb0IsQUFBcEIsVUFBOEIsQUFDbkM7TUFBSSxBQUFKLFVBQWMsQUFDWjtXQUFPLElBQUksQUFBSixNQUFVLEFBQVYsQUFBUCxBQUNEO0FBRkQsU0FFTyxBQUNMO1FBQUksVUFBVSxBQUFkLE1BQW9CLEFBQ2xCO2NBQVEsSUFBSSxBQUFKLE1BQVUsQUFBVixBQUFSLEFBQ0Q7QUFDRDtXQUFPLEFBQVAsQUFDRDtBQUNGIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRGVza3RvcC9tempiL211emhpanViYW9fd2ViIn0=
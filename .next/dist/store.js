'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('_babel-runtime@6.26.0@babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = require('_babel-runtime@6.26.0@babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46;

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
//product tab will shown
function Store(isServer, curPagePath) {
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

  _initDefineProp(this, 'checkedValues', _descriptor18, this);

  _initDefineProp(this, 'checkedValues1', _descriptor19, this);

  _initDefineProp(this, 'mainImage', _descriptor20, this);

  _initDefineProp(this, 'isShown', _descriptor21, this);

  _initDefineProp(this, 'activeKey', _descriptor22, this);

  _initDefineProp(this, 'ProdDetailData', _descriptor23, this);

  _initDefineProp(this, 'getUrlIDs', _descriptor24, this);

  _initDefineProp(this, 'resetUrlIDs', _descriptor25, this);

  _initDefineProp(this, 'getShopID', _descriptor26, this);

  _initDefineProp(this, 'getRoleInfo', _descriptor27, this);

  _initDefineProp(this, 'getimageId', _descriptor28, this);

  _initDefineProp(this, 'getCurPagePath', _descriptor29, this);

  _initDefineProp(this, 'getVideoID', _descriptor30, this);

  _initDefineProp(this, 'getProductData', _descriptor31, this);

  _initDefineProp(this, 'getselectedRowKeys', _descriptor32, this);

  _initDefineProp(this, 'getStrucInfo', _descriptor33, this);

  _initDefineProp(this, 'getWeight', _descriptor34, this);

  _initDefineProp(this, 'getPosition', _descriptor35, this);

  _initDefineProp(this, 'getColor', _descriptor36, this);

  _initDefineProp(this, 'getTabOption', _descriptor37, this);

  _initDefineProp(this, 'getADMediaID', _descriptor38, this);

  _initDefineProp(this, 'getBindData', _descriptor39, this);

  _initDefineProp(this, 'setChecked', _descriptor40, this);

  _initDefineProp(this, 'setChecked1', _descriptor41, this);

  _initDefineProp(this, 'getMainImage', _descriptor42, this);

  _initDefineProp(this, 'changeShown', _descriptor43, this);

  _initDefineProp(this, 'changeKey', _descriptor44, this);

  _initDefineProp(this, 'getProdDetailData', _descriptor45, this);

  _initDefineProp(this, 'changeIsExisted', _descriptor46, this);

  this.curPagePath = curPagePath;
}
//Youxuan Product detail data

// wethear show the product detail
, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'imgUrlID', [_mobx.observable], {
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
    return null;
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
    return null;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, 'backgroundColor', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, 'weight', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
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
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, 'checkedValues', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, 'checkedValues1', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, 'mainImage', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, 'isShown', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, 'activeKey', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '1';
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, 'ProdDetailData', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class.prototype, 'getUrlIDs', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function (ID) {
      _this.imgUrlID.push(ID);
    };
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class.prototype, 'resetUrlIDs', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.imgUrlID = [];
    };
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class.prototype, 'getShopID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (ID) {
      _this3.shopID = ID;
    };
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class.prototype, 'getRoleInfo', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function (info) {
      _this4.userRole = info;
    };
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class.prototype, 'getimageId', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return function (ID) {
      _this5.imageId = ID;
    };
  }
}), _descriptor29 = _applyDecoratedDescriptor(_class.prototype, 'getCurPagePath', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return function (path) {
      _this6.curPagePath = path;
    };
  }
}), _descriptor30 = _applyDecoratedDescriptor(_class.prototype, 'getVideoID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return function (ID) {
      _this7.VideoID = ID;
    };
  }
}), _descriptor31 = _applyDecoratedDescriptor(_class.prototype, 'getProductData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this8 = this;

    return function (data) {
      _this8.ProductData = data;
    };
  }
}), _descriptor32 = _applyDecoratedDescriptor(_class.prototype, 'getselectedRowKeys', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this9 = this;

    return function (key) {
      _this9.selectedRowKeys = key;
    };
  }
}), _descriptor33 = _applyDecoratedDescriptor(_class.prototype, 'getStrucInfo', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this10 = this;

    return function (title, images, detailUrl) {
      _this10.title = title;
      _this10.images = images;
      _this10.detailUrl = detailUrl;
    };
  }
}), _descriptor34 = _applyDecoratedDescriptor(_class.prototype, 'getWeight', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this11 = this;

    return function (data) {
      _this11.weight = data;
    };
  }
}), _descriptor35 = _applyDecoratedDescriptor(_class.prototype, 'getPosition', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this12 = this;

    return function (data) {
      _this12.position = data;
    };
  }
}), _descriptor36 = _applyDecoratedDescriptor(_class.prototype, 'getColor', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this13 = this;

    return function (data) {
      _this13.backgroundColor = data;
    };
  }
}), _descriptor37 = _applyDecoratedDescriptor(_class.prototype, 'getTabOption', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this14 = this;

    return function (option) {
      _this14.TabOption = option;
    };
  }
}), _descriptor38 = _applyDecoratedDescriptor(_class.prototype, 'getADMediaID', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this15 = this;

    return function (data) {
      _this15.ADMediaID = data;
    };
  }
}), _descriptor39 = _applyDecoratedDescriptor(_class.prototype, 'getBindData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this16 = this;

    return function (data) {
      _this16.bindRoomData = data;
    };
  }
}), _descriptor40 = _applyDecoratedDescriptor(_class.prototype, 'setChecked', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this17 = this;

    return function (data) {
      _this17.checkedValues = data;
    };
  }
}), _descriptor41 = _applyDecoratedDescriptor(_class.prototype, 'setChecked1', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this18 = this;

    return function (data) {
      _this18.checkedValues1 = data;
    };
  }
}), _descriptor42 = _applyDecoratedDescriptor(_class.prototype, 'getMainImage', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this19 = this;

    return function (data) {
      _this19.mainImage = data;
    };
  }
}), _descriptor43 = _applyDecoratedDescriptor(_class.prototype, 'changeShown', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this20 = this;

    return function () {
      _this20.isShown = true;
    };
  }
}), _descriptor44 = _applyDecoratedDescriptor(_class.prototype, 'changeKey', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this21 = this;

    return function (keyID) {
      _this21.activeKey = keyID;
    };
  }
}), _descriptor45 = _applyDecoratedDescriptor(_class.prototype, 'getProdDetailData', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this22 = this;

    return function (data) {
      _this22.ProdDetailData = data;
    };
  }
}), _descriptor46 = _applyDecoratedDescriptor(_class.prototype, 'changeIsExisted', [_mobx.action], {
  enumerable: true,
  initializer: function initializer() {
    var _this23 = this;

    return function () {
      _this23.ProdDetailData.alreadyExist = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImluaXRTdG9yZSIsInN0b3JlIiwiU3RvcmUiLCJpc1NlcnZlciIsImN1clBhZ2VQYXRoIiwib2JzZXJ2YWJsZSIsImFjdGlvbiIsIklEIiwiaW1nVXJsSUQiLCJwdXNoIiwic2hvcElEIiwiaW5mbyIsInVzZXJSb2xlIiwiaW1hZ2VJZCIsInBhdGgiLCJWaWRlb0lEIiwiZGF0YSIsIlByb2R1Y3REYXRhIiwia2V5Iiwic2VsZWN0ZWRSb3dLZXlzIiwidGl0bGUiLCJpbWFnZXMiLCJkZXRhaWxVcmwiLCJ3ZWlnaHQiLCJwb3NpdGlvbiIsImJhY2tncm91bmRDb2xvciIsIm9wdGlvbiIsIlRhYk9wdGlvbiIsIkFETWVkaWFJRCIsImJpbmRSb29tRGF0YSIsImNoZWNrZWRWYWx1ZXMiLCJjaGVja2VkVmFsdWVzMSIsIm1haW5JbWFnZSIsImlzU2hvd24iLCJrZXlJRCIsImFjdGl2ZUtleSIsIlByb2REZXRhaWxEYXRhIiwiYWxyZWFkeUV4aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1FBb0lnQixBLFlBQUEsQTs7QUFwSWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxRQUFRLEFBQVo7O0lBRU0sQTtBQXVCSjtBQUtBLGVBQWEsQUFBYixVQUFzQixBQUF0QixhQUFtQztzQ0FBQTs7aURBQUE7O2dEQUFBOztrREFBQTs7aURBQUE7O3FEQUFBOztpREFBQTs7cURBQUE7O3lEQUFBOzsrQ0FBQTs7aURBQUE7O29EQUFBOzttREFBQTs7MERBQUE7O2lEQUFBOztvREFBQTs7b0RBQUE7O3VEQUFBOzt3REFBQTs7eURBQUE7O29EQUFBOztrREFBQTs7b0RBQUE7O3lEQUFBOztvREFBQTs7c0RBQUE7O29EQUFBOztzREFBQTs7cURBQUE7O3lEQUFBOztxREFBQTs7eURBQUE7OzZEQUFBOzt1REFBQTs7b0RBQUE7O3NEQUFBOzttREFBQTs7dURBQUE7O3VE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O2dGQUVBLE07Ozs7O1dBQXFCLFVBQUMsQUFBRCxNQUFVLEFBQzlCO2NBQUssQUFBTCxpQkFBc0IsQUFBdEIsQUFDRDtBOztpRkFFQSxNOzs7OztXQUFzQixVQUFDLEFBQUQsTUFBVSxBQUM3QjtjQUFLLEFBQUwsWUFBaUIsQUFBakIsQUFDSDtBOztnRkFFQSxNOzs7OztXQUFxQixZQUFNLEFBQzFCO2NBQUssQUFBTCxVQUFlLEFBQWYsQUFDRDtBOzs4RUFFQSxNOzs7OztXQUFtQixVQUFDLEFBQUQsT0FBVyxBQUM3QjtjQUFLLEFBQUwsWUFBaUIsQUFBakIsQUFDRDtBOztzRkFFQSxNOzs7OztXQUEyQixVQUFDLEFBQUQsTUFBVSxBQUNsQztjQUFLLEFBQUwsaUJBQXNCLEFBQXRCLEFBQ0g7QTs7b0ZBRUEsTTs7Ozs7V0FBeUIsWUFBTSxBQUM1QjtjQUFLLEFBQUwsZUFBb0IsQUFBcEIsZUFBbUMsQUFBbkMsQUFDSDtBOzs7QUFJSSxTQUFTLEFBQVQsVUFBb0IsQUFBcEIsVUFBOEIsQUFDbkM7TUFBSSxBQUFKLFVBQWMsQUFDWjtXQUFPLElBQUksQUFBSixNQUFVLEFBQVYsQUFBUCxBQUNEO0FBRkQsU0FFTyxBQUNMO1FBQUksVUFBVSxBQUFkLE1BQW9CLEFBQ2xCO2NBQVEsSUFBSSxBQUFKLE1BQVUsQUFBVixBQUFSLEFBQ0Q7QUFDRDtXQUFPLEFBQVAsQUFDRDtBQUNGIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9tdXpoaWp1YmFvX3dlYiJ9
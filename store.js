import { action, observable } from 'mobx'

let store = null

class Store {
  @observable shopID = null;
  @observable userRole = '';
  @observable curPagePath = '';
  @observable ProductData = [];
  @observable TabOption = "1";
  @observable bindRoomData = null;
  @observable mainImage = null;
  // wethear show the product detail
  @observable isShown = false;
  //product tab will shown
  @observable activeKey = '1';
  //Youxuan Product detail data
  @observable ProdDetailData = null;

  constructor (isServer) {
  }

  @action getShopID = (ID) => {
    this.shopID = ID;
  }

  @action getRoleInfo = (info) => {
    this.userRole = info;
  }
  
  @action getCurPagePath = (path) => {
    this.curPagePath = path;
  }

  @action getProductData = (data) => {
    this.ProductData = data;
  }

  @action getTabOption = (option) => {
    this.TabOption = option;
  }

  @action getADMediaID = (data) => {
    this.ADMediaID = data;
  }

  @action getBindData = (data) => {
    this.bindRoomData = data;
  }

  @action getMainImage = (data) => {
      this.mainImage = data;
  }

  @action changeShown = () => {
    this.isShown = true;
  }

  @action changeKey = (keyID) => {
    this.activeKey = keyID;
  }

  @action getProdDetailData = (data) => {
      this.ProdDetailData = data;
  }

  @action changeIsExisted = () => {
      this.ProdDetailData.alreadyExist = true;
  }

}

export function initStore (isServer) {
  if (isServer) {
    return new Store(isServer)
  } else {
    if (store === null) {
      store = new Store(isServer)
    }
    return store
  }
}

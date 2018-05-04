import { action, observable } from 'mobx'

let store = null

class Store {
  @observable imgUrlID = [];
  @observable shopID = null;
  @observable userRole = '';
  @observable imageId = '';
  @observable curPagePath = '';
  @observable VideoID = '';
  @observable ProductData = [];
  @observable selectedRowKeys = null;
  @observable title = '';
  @observable images = '';
  @observable detailUrl = '';
  @observable position = null;
  @observable backgroundColor = null;
  @observable weight = null;
  @observable ADMediaID = null;
  @observable TabOption = "1";
  @observable bindRoomData = null;
  @observable checkedValues = '';
  @observable checkedValues1 = '';
  @observable mainImage = null;

  constructor (isServer) {
  }

  @action getUrlIDs = (ID) => {
    this.imgUrlID.push(ID);
  }

  @action resetUrlIDs = () => {
    this.imgUrlID=[];
  }

  @action getShopID = (ID) => {
    this.shopID = ID;
  }

  @action getRoleInfo = (info) => {
    this.userRole = info;
  }

  @action getimageId = (ID) => {
    this.imageId = ID;
  }
  
  @action getCurPagePath = (path) => {
    this.curPagePath = path;
  }

  @action getVideoID = (ID) => {
    this.VideoID = ID;
  }

  @action getProductData = (data) => {
    this.ProductData = data;
  }

  @action getselectedRowKeys = (key) => {
    this.selectedRowKeys = key;
  }

  @action getStrucInfo = (title, images, detailUrl) => {
    this.title = title;
    this.images = images;
    this.detailUrl = detailUrl;
  }

  @action getWeight = (data) => {
    this.weight = data;
  }

  @action getPosition = (data) => {
    this.position = data;
  }

  @action getColor = (data) => {
    this.backgroundColor = data;
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

  @action setChecked = (data) => {
    this.checkedValues = data;
  }

  @action setChecked1 = (data) => {
    this.checkedValues1 = data;
  }

  @action getMainImage = (data) => {
      this.mainImage = data;
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

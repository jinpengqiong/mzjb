import { action, observable } from 'mobx'

let store = null

class Store {
  @observable shopID = null;
  @observable userRole = '';
  @observable imageId = '';
  @observable curPagePath = '';
  @observable ProductData = [];
  @observable TabOption = "1";
  @observable bindRoomData = null;
  @observable mainImage = null;
  //product tab will shown
  @observable chooseProdKey = '0';
  //Youxuan Product detail data
  @observable ProdDetailData = null;
  // replyBody saved here
  @observable replyBody = [];
  // sidebar isCollapse
  @observable collapsed = false;
  //product update fields
  @observable productFieldsData = null;
  //prod type for prod update
  @observable prodType = null;
  //activeKey for prod
  @observable activeKey = '商品管理';
  //rich text content
  @observable richTextContent = null;
  //moduleSetting isShown
  @observable isShown = false;
  //moduleValue
  @observable moduleValue = null;
  //moduleSubmitType
  @observable moduleType = null;
  //swtich the prod detail tab display
  @observable isTabOpen = false;
  //prod categories
  @observable categories = null;
  @observable tagListData = null;

  constructor (isServer) {
  }

  @action getShopID = (ID) => {
    this.shopID = ID;
  }

  @action getimageId = (ID) => {
      this.imageId = ID;
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

  @action changeKey = (keyID) => {
    this.chooseProdKey = keyID;
  }

  @action getProdDetailData = (data) => {
      this.ProdDetailData = data;
  }

  @action changeIsExisted = () => {
      this.ProdDetailData.alreadyExist = true;
  }

  @action addReplyBody = (data) => {
    this.replyBody.push(data);
  }

  @action clearReplyBody = () => {
    this.replyBody=[];
  }

  @action changeCollapse = () => {
      this.collapsed = !this.collapsed;
  }

  @action getProductFieldsData = (data) => {
      this.productFieldsData = data;
  }

  @action getProdType = (data) => {
      this.prodType = data;
  }

  @action changeActiveKey = (data) => {
      this.activeKey = data;
  }

  @action getRichTextContent = (data) => {
      this.richTextContent = data;
  }

  @action changeSettingDisplay = () => {
      this.isShown = !this.isShown;
  }

  @action getModuleValue = (data) => {
      this.moduleValue = data;
  }

  @action getModuleType = (data) => {
      this.moduleType = data;
  }

  @action switchTabShown = (bool) => {
      this.isTabOpen = bool;
  }

  @action getCategories = (data) => {
        this.categories = data
  }

  @action getTagListData = (data) => {
          this.tagListData = data
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

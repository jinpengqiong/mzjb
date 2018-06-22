import { Design } from 'zent';
import { Button, Popconfirm, message } from 'antd'
import configConf from 'zent/lib/design/components/config';
import ConfigEditor from 'zent/lib/design/components/config/ConfigEditor';
import whitespaceConf from 'zan-design/lib/components/whitespace';
import lineConf from 'zan-design/lib/components/line';
import imageAdConf from '../image-ad';
import goodsConf from 'zan-design/lib/components/goods';
import Request from '../../utils/graphql_request';
import noticeConf from 'zan-design/lib/components/notice';
import titleConf from 'zan-design/lib/components/title';

import 'zan-design/css/title/index.css';
import 'zent/css/index.css';
import 'zent/css/design-config.css';
import 'zent/css/design-image-ad.css';
import 'zan-design/css/index.css';
import 'zan-design/css/whitespace/index.css';
import 'zan-design/css/line/index.css';
import 'zan-design/css/image-ad/index.css';
import 'zan-design/css/link/index.css';
import 'zan-design/css/goods/index.css';
import 'zan-design/css/notice/index.css';
import { inject, observer } from 'mobx-react'

const createShoppage = `
    mutation ($shopId:ID!, $detail: String!, $name: String!) {
        createShoppage(shopId:$shopId, name:$name, detail:$detail){
          id
          name
          detail
          insertedAt
        }
      }
`;

const updateShoppage = `
    mutation ($shopId:ID!, $id:ID!,$detail: String, $name: String!) {
        updateShoppage(shopId:$shopId, id:$id, name:$name, detail:$detail){
          id
          name
          detail
          insertedAt
        }
      }
`;

const _global = {
    url: {
        demo: `http://testshop.muzhiyun.cn/rest/shop_products_yz?shop_id=${localStorage.getItem('shopID')}`,
        www: `http://testshop.muzhiyun.cn/rest/shop_products_yz?shop_id=${localStorage.getItem('shopID')}`,
    },
    kdt_id: 1,
    user_id: '9066245',
    run_mode: 'online',
    debug: false,
    online_debug: false,
    isNewUI: true,
    isSuperStore: false,
    sourceType: 0,
    isWishOpen: 1,
    lock_create_showcase: false,
    paidcontent_auth: true
}

@inject('store') @observer
export default class ProdModuleSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [
                {
                    type: configConf.type,
                    ...ConfigEditor.getInitialValue()
                }
            ],
            settings: {
                // previewBackground: 'red'
            },
            tagData:null
        };
    }
    componentDidMount(){

    }

    onChange = newValue => {
        // console.log('aaa', newValue)
        this.props.store.getModuleValue( JSON.stringify(newValue) );
    };

    onSettingsChange = newSettings => {
        this.setState({
            settings: newSettings
        });
    };

    exit = () => {
        this.props.store.changeSettingDisplay();
        this.props.refeshTable();
        this.props.store.getModuleType(null);
        this.props.store.getModuleValue( null );
    }

    render() {
        const LINK_MENU_CONFIG = ['GoodsAndTag', 'HomePage', 'Link'];

        const globalConfig = Object.assign({}, _global, {
            url: {
                www: `${_global.url.demo}`,
            }
        });

        const groupedComponents = [
            Object.assign({}, configConf, {
                // 是否可以拖拽
                dragable: false,

                // 是否出现在底部的添加组件区域
                appendable: false,

                // 是否可以编辑，UMP里面有些地方config是不能编辑的
                // editable: true,

                configurable: false,

                highlightWhenSelect: false
            }),

            Design.group('基础组件'),
            Object.assign({}, imageAdConf, {
                editorProps: {
                    linkMenuItems: LINK_MENU_CONFIG
                }
            }),
            goodsConf,
            Object.assign({}, titleConf, {
                editorProps: {
                    linkMenuItems: LINK_MENU_CONFIG
                }
            }),

            Design.group('其他'),
            Object.assign({ limit: 1 }, whitespaceConf),
            Object.assign({ limit: 2 }, lineConf),
            noticeConf
        ];
        // console.log('2222', this.props.store.moduleValue)
        return (
            <div>
                <h1 style={{ marginBottom:"10px"}}>{ this.props.store.moduleType}</h1>
                <Design
                    ref={this.saveDesign}
                    confirmUnsavedLeave={false}
                    components={groupedComponents}
                    value={ this.props.store.moduleValue? JSON.parse(this.props.store.moduleValue) :this.state.value}
                    onChange={this.onChange}
                    settings={this.state.settings}
                    onSettingsChange={this.onSettingsChange}
                    scrollTopOffset={-270}
                    globalConfig={globalConfig}
                />
                <div style={{ marginTop:'10px', textAlign:'center'}}>
                    <Button type="primary" onClick={this.submit} style={{ marginRight:"10px"}}>
                        上架
                    </Button>
                    <Popconfirm title="确定要放弃提交吗?" onConfirm={this.exit} >
                        <Button type="primary" >
                            退出编辑
                        </Button>
                    </Popconfirm>

                </div>
            </div>
        );
    }

    saveDesign = instance => {
        this.design = instance && instance.getDecoratedComponentInstance();
    };

    triggerDesignValidation () {
        return this.design.validate();
    }

    submit = () => {
        const data = Design.stripUUID(JSON.parse(this.props.store.moduleValue));
        if(this.props.store.moduleType ==='新建模版'){
            this.triggerDesignValidation()
                .then(() => {
                    // console.log('111',data);
                    Request.GraphQlRequest(createShoppage,
                        {
                            shopId:parseInt(localStorage.getItem('shopID')),
                            name:data[0].title,
                            detail: this.props.store.moduleValue
                        }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                        (res) => {
                            // console.log('createShoppage', res)
                            // submit this.state.value to server
                            this.props.store.changeSettingDisplay();
                            this.props.refeshTable();
                            this.props.store.getModuleType(null);
                            message.success('新建成功');

                        }
                    )
                })
                .catch(validations => {
                    console.log(validations);
                });
        }else if(this.props.store.moduleType ==='编辑模版'){
            this.triggerDesignValidation()
                .then(() => {
                    Request.GraphQlRequest(updateShoppage,
                        {
                            shopId:parseInt(localStorage.getItem('shopID')),
                            name:data[0].title,
                            id:this.props.ID,
                            detail: this.props.store.moduleValue
                        }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                        (res) => {
                            // console.log('createShoppage', res)
                            // submit this.state.value to server
                            this.props.store.changeSettingDisplay();
                            this.props.refeshTable();
                            this.props.store.getModuleType(null);
                            this.props.store.getModuleValue(null)
                            message.success('更新成功');
                        }
                    )
                })
                .catch(validations => {
                    console.log(validations);
                });
        }

    };
}

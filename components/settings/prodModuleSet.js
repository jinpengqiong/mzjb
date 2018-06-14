import { Design, Button, Layout, Notify } from 'zent';
import configConf from 'zent/lib/design/components/config';
import ConfigEditor from 'zent/lib/design/components/config/ConfigEditor';
import whitespaceConf from 'zan-design/lib/components/whitespace';
import lineConf from 'zan-design/lib/components/line';
import imageAdConf from '../image-ad';
import goodsConf from 'zan-design/lib/components/goods';
import Request from '../../utils/graphql_request';

import 'zent/css/index.css';
import 'zent/css/design-config.css';
import 'zent/css/design-image-ad.css';
import 'zan-design/css/index.css';
import 'zan-design/css/whitespace/index.css';
import 'zan-design/css/store/index.css';
import 'zan-design/css/line/index.css';
import 'zan-design/css/image-ad/index.css';
import 'zan-design/css/link/index.css';
import 'zan-design/css/goods/index.css';
import 'zan-design/css/title/index.css';
import { inject, observer } from 'mobx-react'

const createShoppage = `
    mutation ($shopId:ID!, $detail: [PageSection], $name: String!) {
        createShoppage(shopId:$shopId, name:$name, detail:$detail){
          id
          name
          detail
          insertedAt
        }
      }
`;
const { Row, Col } = Layout;

const _global = {
    url: {
        demo: 'https://www.youzanyun.com/zanui/demo/zent',
        www: '//www.youzan.com',
        imgcdn: '//img.yzcdn.cn',
        byzcdn: '//b.yzcdn.cn'
    },
    kdt_id: 1,
    user_id: '9066245',
    run_mode: 'online',
    debug: false,
    online_debug: false,
    js: {
        js_compress: true,
        css_compress: true,
        use_js_cdn: true,
        use_css_cdn: true,
        message_report: true,
        checkbrowser: true,
        hide_wx_nav: true,
        qn_public: 'kdt_img',
        qn_private: 'kdt-private'
    },
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
        console.log('newValue', newValue)
        this.setState({
            value: newValue
        });
    };

    onSettingsChange = newSettings => {
        console.log('setting', newSettings)
        this.setState({
            settings: newSettings
        });
    };

    render() {
        const LINK_MENU_CONFIG = ['GoodsAndTag', 'HomePage', 'Link'];

        const UPLOAD_CONFIG = {
            mediaListUrl: `${_global.url
                .demo}/api/shop/paper/upload/media/medialist.json`,
            categoryListUrl: `${_global.url
                .demo}/api/shop/paper/upload/category/categorylist.json`,
            fetchUrl: `${_global.url.demo}/api/shop/paper/upload/dock/fetch.json`,
            tokenUrl: localStorage.getItem('accessToken'),
            uploadUrl: `${_global.url.demo}/api/shop/paper/upload/upload.json`
        };

        const globalConfig = Object.assign({}, _global, {
            url: {
                www: `${_global.url.demo}/api/shop/paper`,
                imgcdn: _global.url.imgcdn
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
                    uploadConfig: UPLOAD_CONFIG,
                    linkMenuItems: LINK_MENU_CONFIG
                }
            }),
            // goodsConf,
            Design.group('其他'),
            Object.assign({ limit: 1 }, whitespaceConf),
            Object.assign({ limit: 2 }, lineConf)
        ];
        console.log('value', this.state.value )
        return (
            <div>
                <Design
                    ref={this.saveDesign}
                    confirmUnsavedLeave={false}
                    components={groupedComponents}
                    value={this.state.value}
                    onChange={this.onChange}
                    settings={this.state.settings}
                    onSettingsChange={this.onSettingsChange}
                    scrollTopOffset={-270}
                    globalConfig={globalConfig}
                />
                <div style={{ marginTop:'10px', textAlign:'center'}}>
                    <Button type="primary" onClick={this.submit}>
                        上架
                    </Button>
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
        this.triggerDesignValidation()
            .then(() => {
                const data = Design.stripUUID(this.state.value);
                console.log('111',data);
                Request.GraphQlRequest(createShoppage,
                    {
                        shopId:parseInt(localStorage.getItem('shopID')),
                        name:data[0].title,
                        detail: JSON.stringify(data)
                    }, `Bearer ${localStorage.getItem('accessToken')}`).then(
                    (res) => {
                        console.log('createShoppage', res)
                        // submit this.state.value to server
                        this.design.markAsSaved();
                        this.props.store.changeSettingDisplay();
                        Notify.success('提交成功');
                    }
                )
            })
            .catch(validations => {
                console.log(validations);
            });
    };
}

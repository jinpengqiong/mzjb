import { Design, Button, Layout, Notify } from 'zent';
import configConf from 'zent/lib/design/components/config';
import ConfigEditor from 'zent/lib/design/components/config/ConfigEditor';

import whitespaceConf from 'zan-design/lib/components/whitespace';
// import noticeConf from 'zan-design/lib/components/notice';
// import storeConf from 'zan-design/lib/components/store';
import lineConf from 'zan-design/lib/components/line';
import imageAdConf from 'zan-design/lib/components/image-ad';
import goodsConf from 'zan-design/lib/components/goods';
// import linkConf from 'zan-design/lib/components/link';
// import goodsListConf from 'zan-design/lib/components/goods-list';
// import tagListConf from 'zan-design/lib/components/tag-list';
// import titleConf from 'zan-design/lib/components/title';
// import showcaseConf from 'zan-design/lib/components/showcase';
// import textNavConf from 'zan-design/lib/components/text-nav';
// import cubeConf from 'zan-design/lib/components/cube';
// import navConf from 'zan-design/lib/components/nav';
// import richtextConf from 'zan-design/lib/components/richtext';

import 'zent/css/index.css';
import 'zent/css/design-config.css';
import 'zan-design/css/index.css';
import 'zan-design/css/whitespace/index.css';
import 'zan-design/css/notice/index.css';
import 'zan-design/css/store/index.css';
import 'zan-design/css/line/index.css';
import 'zan-design/css/image-ad/index.css';
import 'zan-design/css/link/index.css';
import 'zan-design/css/goods/index.css';
import 'zan-design/css/richtext/index.css';
import 'zan-design/css/title/index.css';
// import 'zan-design/css/goods-list/index.css';
// import 'zan-design/css/tag-list/index.css';
// import 'zan-design/css/text-nav/index.css';
// import 'zan-design/css/showcase/index.css';
// import 'zan-design/css/cube/index.css';
// import 'zan-design/css/nav/index.css';

const { Row, Col } = Layout;

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
    imageAdConf,
    goodsConf,

    Design.group('其他'),
    Object.assign({ limit: 1 }, whitespaceConf),
    Object.assign({ limit: 2 }, lineConf)
];

const globalConfig = assign({}, _global, {
    url: {
        www: 'http://imagemediatest.muzhiyun.cn/',
    }
});

export default class ProdMouduleSet extends React.Component {
    state = {
        value: [
            {
                type: configConf.type,
                ...ConfigEditor.getInitialValue()
            }
        ],
        settings: {
            // previewBackground: 'red'
        }
    };

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
                    globalConfig={window._global}
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

    triggerDesignValidation() {
        return this.design.validate();
    }

    submit = () => {
        this.triggerDesignValidation()
            .then(() => {
                const data = Design.stripUUID(this.state.value);
                console.log('111',data);
                // submit this.state.value to server
                this.design.markAsSaved();
                Notify.success('提交成功');
            })
            .catch(validations => {
                console.log(validations);
            });
    };
}

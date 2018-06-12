import { Button, Table } from'antd';
import { inject, observer } from 'mobx-react'
import dynamic from 'next/dynamic'
const ProdModuleSet = dynamic(import('./prodModuleSet'))

@inject('store') @observer
export default class ProdModule extends React.Component {
    constructor(props){
        super(props);
    }

    handleMouduleSet = () => {
        this.props.store.changeSettingDisplay();
    }

    render() {
        // console.log('props', this.props)
        return (
            <div>
                {
                    this.props.store.isShown?
                        <ProdModuleSet />
                        :
                        <div>
                            <Button type='primary' onClick={this.handleMouduleSet}>新建微页面</Button>
                        </div>
                }
            </div>
        );
    }
}

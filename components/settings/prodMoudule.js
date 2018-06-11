import { Button, Table } from'antd';
import { inject, observer } from 'mobx-react'
import ProdMouduleSet from './prodMouduleSet'

@inject('store') @observer
export default class ProdMoudule extends React.Component {
    constructor(props){
        super(props);
    }

    handleMouduleSet = () => {
        this.props.store.changeSettingDisplay();
    }

    render() {
        return (
            <div>
                {
                    this.props.store.isShown?
                        <ProdMouduleSet />
                        :
                        <div>
                            <Button type='primary' onClick={this.handleMouduleSet}>新建微页面</Button>
                        </div>
                }
            </div>
        );
    }
}

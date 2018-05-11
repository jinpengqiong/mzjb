import { Breadcrumb } from 'antd';
import { inject, observer } from 'mobx-react'

@inject('store') @observer
export default class MyBreadcrumb extends React.Component {
  constructor (props){
    super(props);
  }
  render() {
    // console.log('props', this.props)
    return (
        <Breadcrumb style={{ margin: '16px' }}>
              <Breadcrumb.Item>{this.props.store.curPagePath === ""?'选货专区' : this.props.store.curPagePath}</Breadcrumb.Item>
        </Breadcrumb> 
    );
  }
}
import { Layout } from 'antd';
const { Footer } = Layout;

export default class MyFooter extends React.Component {
  render() {
    return (
        <Footer style={{ textAlign: 'center' , height: '69px' }} >
          Copyright © 2018 英夫美迪科技股份有限公司 | All rights reserved.
        </Footer>  
    );
  }
}



import { Row, Col, Alert } from 'antd';
import  QRCode from 'qrcode.react';



export default class EmbeddedAndSharing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url:''
        }
    }

    componentDidMount(){
        this.setState({
            url:`http://wxshop.muzhiyun.cn/auth.html?state=${localStorage.getItem('shopID')}`
        })
    }



    render() {
        return (
            <div >
                <h3>微信链接地址</h3>
                <div style={{ height:"300px", background:"#f0f2f5"}}>
                    <Row>
                        <Col span={10}>
                            <div>
                                <QRCode size={180} value={ this.state.url && this.state.url } style={{ marginTop:"50px", marginLeft:"90px" }}/>
                            </div>
                        </Col>
                        <Col span={12} >
                            <div >
                                <Alert message="此地址可用作 Tab页 或子菜单的形式放在官方微信公众号中" type="info" style={{ width:"90%", marginTop:"130px"}}/>
                                <h4>{ this.state.url && this.state.url }</h4>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

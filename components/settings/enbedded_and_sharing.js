import { Row, Col, Alert } from 'antd';
import  QRCode from 'qrcode.react';
import Request from '../../utils/graphql_request';



export default class EmbeddedAndSharing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
    }



    render() {
    const url = `http://wxshop.muzhiyun.cn/auth.html?state=${localStorage.getItem('shopID')}`
        return (
            <div >
                <h2>微信链接地址</h2>
                <div style={{ height:"300px", background:"#f0f2f5"}}>
                    <Row>
                        <Col span={10}>
                            <div>
                                <QRCode size={180} value={ url } style={{ marginTop:"50px", marginLeft:"90px" }}/>
                            </div>
                        </Col>
                        <Col span={12} >
                            <div >
                                <Alert message="此地址可用作 Tab页 或子菜单的形式放在官方微信公众号中" type="info" style={{ width:"90%", marginTop:"130px"}}/>
                                <h4>{ url }</h4>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

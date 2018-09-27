import { Card, Affix, Button,message, Modal, Radio, Popconfirm, Icon } from 'antd';
import Request from '../../utils/graphql_request';
const RadioGroup = Radio.Group;
import isEmpty from 'lodash/isEmpty';

const ownedRooms = `
    query ($shopId: ID!) {
        ownedRooms(shopId:$shopId){
            desc
            id
            name
        }
    }
`;

const listShoproom = `
    query ($shopId: Int!) {
        listShoproom(shopId:$shopId){
            roomId
            roomName
            id
        }
    }
`;

const addShoproom = `
    mutation ($shopId: Int!,$roomId:Int!) {
        addShoproom(shopId:$shopId, roomId:$roomId){
            id
            roomId
        }
    }
`;

const delShoproom = `
    mutation ($shopId: Int!,$id:ID!) {
        delShoproom(shopId:$shopId, id:$id){
            id
            roomId
        }
    }
`;

export default class BindLiveRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ownedRoom:null,
            visible:false,
            listShopRoom:null,
            radioValue:null
        }
    }

    componentDidMount(){
        this.queryLiveRooms()
    }

    queryLiveRooms(){
        Request.GraphQlRequest(listShoproom, {shopId:parseInt(localStorage.getItem('shopID'))}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('listShoproom', res)
                this.setState({
                    listShopRoom:res.listShoproom
                })
            }
        ).catch(err => Request.token_auth(err))
    }

    //open modal click
    openModal = () => {
        this.setState({
            visible:true
        })
        Request.GraphQlRequest(ownedRooms, {shopId:localStorage.getItem('shopID') }, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('ownedRooms', res.ownedRooms)
                this.setState({
                    ownedRoom:res.ownedRooms
                })
            }
        ).catch(err => Request.token_auth(err))
    }
    //radio select change
    onChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            radioValue: e.target.value
        })
    }

    //cancel modal display
    handleCancel = () => {
        this.setState({
            visible:false,
            radioValue:null,
        })
    }

    //handle modal OK
    handleOk = () => {
        Request.GraphQlRequest(addShoproom, {shopId:parseInt(localStorage.getItem('shopID')), roomId:parseInt(this.state.radioValue)}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                message.success('绑定成功！');
                this.setState({
                    visible:false,
                    radioValue:null
                });
                this.queryLiveRooms();
                // console.log('res', res)
            }
        ).catch(() =>{message.info('此直播间已绑定, 请选择其他直播间。'); Request.token_auth(err)})
    }

    //delete room
    deleteRoom = (ID) => {
        Request.GraphQlRequest(delShoproom, {shopId:parseInt(localStorage.getItem('shopID')), id:ID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                message.success('取消绑定成功！')
                this.queryLiveRooms()
            }
        ).catch(err => Request.token_auth(err))
    }

    render() {
        const LiveRooms = this.state.listShopRoom && this.state.listShopRoom.map(
            (room) => {
                return (
                    <Card title={room.roomName}
                          hoverable
                          key={room.id}
                          extra={
                                localStorage.getItem('OriginalID') === localStorage.getItem('shopID')
                                  &&
                                <Popconfirm title="确定要取消绑定吗?"
                                    onConfirm={()=> {this.deleteRoom(room.id)}} okText="确定" cancelText="取消">
                                    <a href="#">取消绑定</a>
                                </Popconfirm>
                                }
                          style={{ width: 300 , marginRight:"10px", marginBottom:"10px"}}>
                        <p>房间ID：{room.roomId}</p>
                        <p>简要描述：{room.desc}</p>
                    </Card>
                )
            }
        )
        const bindableRooms = this.state.ownedRoom && this.state.ownedRoom.map(
            (room) => {
                    return (
                        <Radio value={room.id} key={room.id}>{room.name}</Radio>
                    )
            }
        )
        return (
            <div>
              {
                localStorage.getItem('OriginalID') === localStorage.getItem('shopID')
                &&
                <Affix>
                  <Button type="primary" onClick={this.openModal} ><Icon type="plus-circle-o"/>新增绑定</Button>
                </Affix>
              }
              <br/>
                <Modal
                    title="新增绑定"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <h4>直播间列表：</h4>
                    <RadioGroup onChange={this.onChange} value={this.state.radioValue}>
                        {
                            isEmpty(this.state.ownedRoom) ?
                            '暂无'
                                :
                            bindableRooms
                        }
                    </RadioGroup>
                </Modal>
              <h3 style={{ marginTop:'10px'}}>已绑定的直播间：</h3>
                <div style={{ background: '#ECECEC', padding: '30px', marginTop: "10px",display:"flex", justifyContent:'flex-start', flexWrap:'wrap'}}>
                    {
                      isEmpty(this.state.listShopRoom)  ?
                            '暂无'
                            :
                        LiveRooms
                    }
                </div>
            </div>
        )
    }
}

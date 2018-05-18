import { Card, Affix, Button,message, Modal, Radio, Popconfirm } from 'antd';
import Request from '../../utils/graphql_request';
const RadioGroup = Radio.Group;

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

export default class AutoReply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }


    render() {
        return (
            <div>

            </div>
        )
    }
}

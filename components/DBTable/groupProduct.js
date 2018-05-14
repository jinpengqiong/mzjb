import { Table, Input, Popconfirm, Pagination, message } from 'antd';
import Request from '../../utils/graphql_request';

const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '用户名',
            dataIndex: 'nickname',
            key: 'nickname',
        },
        {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '用户权限',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
            <span>
            <Popconfirm title="确定要授权该用户开店吗?" onConfirm={() =>{this.confirm(record.id)}} onCancel={this.cancel} okText="Yes" cancelText="No">
            <a href="#">授权开店</a>
            </Popconfirm>
            </span>
            ),
        }
    ];


export default class GroupProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:null
        }
    }
    componentDidMount(){

    }

    // queryUserData(curPage){
    //     Request.GraphQlRequest(queryUsers, {page:curPage, pageSize: 10 }, `Bearer ${localStorage.getItem('accessToken')}`).then(
    //         (res) => {
    //             res.allUsers.entries.map(
    //                 (entry) =>{
    //                     entry.key = entry.id
    //                 }
    //             )
    //             // console.log('res', res)
    //             this.setState({
    //                 data: res.allUsers
    //             })
    //         }
    //     )
    // }
    //
    // grantUser( userId){
    //     Request.GraphQlRequest(grantUsers, {userId}, `Bearer ${localStorage.getItem('accessToken')}`).then(
    //         (res) => {
    //             message.success('授权成功！');
    //             this.queryUserData(1);
    //         }
    //     )
    // }
    //
    // confirm(id) {
    //     this.grantUser(parseInt(id));
    // }
    //
    //
    // onChange = (pageNumber) => {
    //     this.queryUserData(pageNumber);
    // }

    render() {
        return (
            <div>
                <Table bordered dataSource={this.state.data? this.state.data.entries : null } columns={this.state.columns} pagination={false}/>
                {/*{*/}
                    {/*(this.state.data && this.state.data.totalEntries !==0)*/}
                    {/*&&*/}
                    {/*<Pagination*/}
                        {/*defaultCurrent={1}*/}
                        {/*onChange={this.onChange}*/}
                        {/*total={this.state.data? this.state.data.totalEntries : 1}*/}
                        {/*style={{ float: "right", marginTop: "10px"}}/>*/}
                {/*}*/}
            </div>
        )
    }
}
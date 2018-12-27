import { Table, Popconfirm, Pagination, message, Input, Button, Icon } from 'antd';
import Request from '../../utils/graphql_request';
const Search = Input.Search;

const queryUsers = `
    query ($page: Int, $pageSize: Int) {
        allUsers(page:$page,pageSize:$pageSize){
            pageNumber
            totalEntries
            totalPages
            entries{
                id
                nickname
                phone
                role
            }
        }
    }
`;

const findOneUser = `
    query ($type: SearchUserType!, $value: String!) {
        findOneUser(type:$type,value:$value){
            id
            nickname
            phone
            role
        }
    }
`;
const grantUsers = `
    mutation ($userId: Int!) {
        authShopBiz(userId: $userId){
            id
            nickname
            phone
            role
        }
    }
`;

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        data:null,
        phoneNumber:'',
        columns : [
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
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                  {
                    (!record.role || (record.role && record.role.indexOf('shop_biz') === -1))?
                        <Popconfirm title="确定要授权该用户开店吗?" onConfirm={() =>{this.confirm(record.id)}} onCancel={this.cancel} okText="Yes" cancelText="No">
                          <a href="#">授权开店</a>
                        </Popconfirm>
                        :
                        '已授权'
                  }
                </span>
            ),
          }]
    }
  }

  componentDidMount(){
    this.queryUserData(1)
  }

  queryUserData = curPage => {
      Request.GraphQlRequest(queryUsers, {page:curPage, pageSize: 10 }, `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
            res.allUsers.entries.map(
                (entry) =>{
                    entry.key = entry.id
                }
            )
            console.log('res', res)
            this.setState({
                data: res.allUsers,
                phoneNumber:''
            })
        }
      ).catch(err => Request.token_auth(err))
  }

  grantUser = userId => {
      Request.GraphQlRequest(grantUsers, {userId}, `Bearer ${localStorage.getItem('accessToken')}`).then(
        (res) => {
            message.success('授权成功！');
            this.queryUserData(1);
        }
      ).catch(err => Request.token_auth(err))
  }

  confirm = id => {
      // console.log(id)
    this.grantUser(parseInt(id));
  }


  onChange = pageNumber => {
    this.queryUserData(pageNumber);
  }

  refresh = () => {
    this.queryUserData(1);
  }

  handleSearchChange = e => {
    console.log('e', e.target.value)
    this.setState({
      phoneNumber:e.target.value
    })
  }

  findOneUser = value => {
    Request.GraphQlRequest(findOneUser,
        {
          value,
          type: 'USER_PHONE'
        },
        `Bearer ${localStorage.getItem('accessToken')}`).then(
        res => {
          console.log('findOneUser', res)
          let obj = Object.assign({},res.findOneUser)
          res.entries= []
          res.entries.push(obj)
          res.totalEntries =1
          this.setState({
            data: res
          })
        }
    ).catch( err => {
      message.info('查无此人')
      this.queryUserData(1);
      Request.token_auth(err)
    } )
  }

  searchUser = value => {
    this.findOneUser(value)
  }

  render() {
    return (
        <div>
          <div style={{ textAlign:"right", marginBottom:"10px"}}>
            <Search
                placeholder="手机号查询"
                onSearch={value => this.searchUser(value)}
                style={{ width: 200 }}
                value={this.state.phoneNumber}
                onChange={this.handleSearchChange}
            />
            {' '}
            <Button type="primary" onClick={this.refresh} style={{ marginRight:"5px"}}><Icon type="reload" theme="outlined" />刷新</Button>
          </div>
            <Table bordered dataSource={this.state.data? this.state.data.entries : null } columns={this.state.columns} pagination={false}/>
            {
            (this.state.data && this.state.data.totalEntries !==0)
            &&
            <Pagination 
            defaultCurrent={1}
            current={this.state.data.pageNumber}
            onChange={this.onChange}
            total={ this.state.data.totalEntries }
            style={{ float: "right", marginTop: "10px"}}/>
            }
        </div>
    )
  }
}

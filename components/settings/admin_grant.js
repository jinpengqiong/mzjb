import { Row, Col, Tag, Icon, Popover, Input, Radio, Spin, message, Button } from 'antd';
import Request from '../../utils/graphql_request';
const RadioGroup = Radio.Group;
import isEmpty from 'lodash/isEmpty';

const getShop = `
    query ($id: ID!) {
        getShop(id:$id){
           staffs{
                desc
                id
                name
                role
                userId
                user{
                    phone
                }
           }
        }
    }
`;

const findOneUser = `
    query ($type: SearchUserType!, $value: String!) {
        findOneUser(type:$type, value:$value){
            nickname
            id
            phone
        }
    }
`;

const addStaff = `
    mutation ($shopId: Int!,$userId:Int!, $role: StaffRole!) {
        addStaff(shopId:$shopId, userId:$userId, role:$role){
            userId
        }
    }
`;

const delStaff = `
    mutation ($shopId: Int!,$id:ID!) {
        delStaff(shopId:$shopId, id:$id){
            id
        }
    }
`;

export default class GrantAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RadioValue:'USER_PHONE',
            InputValue:'',
            loading:false,
            userData:null,
            staffsData:null,
            isClosable:false
        }
    }

    componentDidMount(){
        this.queryStaffs();
    }

    queryStaffs = () => {
        Request.GraphQlRequest(getShop, {id:localStorage.getItem('shopID')}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('getShop', res)
                this.setState({
                    staffsData: res.getShop,
                });
            }
        )
    }

    //radio change
    onRadioChange = (e) => {
        // console.log('radio checked', e.target.value);
        this.setState({
            RadioValue: e.target.value,
        });
    }

    //searchStaff
    searchStaff = () => {
        if(this.state.InputValue ===''){
            message.info('请先输入搜索内容！')
        }else{
            this.setState({
                loading: true,
            });
            Request.GraphQlRequest(findOneUser, {type:this.state.RadioValue, value:this.state.InputValue}, `Bearer ${localStorage.getItem('accessToken')}`).then(
                (res) => {
                    // console.log('findOneUser', res)
                    this.setState({
                        userData:res.findOneUser,
                        loading: false
                    });
                }
            ).catch(
                () => {
                    message.info('此查询未找到！')
                    this.setState({
                        loading: false
                    });
                }
            )
        }
    }

    //get input value
    InputChange = (e) => {
        // console.log('111',e.target.value)
        this.setState({
            InputValue:e.target.value
        })
    }

    //add Staff
    addStaff = (ID) => {
        Request.GraphQlRequest(addStaff, {shopId: parseInt(localStorage.getItem('shopID')),userId:parseInt(ID), role:'SUPER_ADMIN'}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('addStaff', res)
                this.setState({
                    staffData: res.addStaff,
                    userData:null,
                    InputValue:''
                })
                this.queryStaffs();
                message.success('添加成功！')
            }
        )
    }

    // delete staff
    lunchDelete = () => {
        this.setState({
            isClosable:!this.state.isClosable
        })
    }

    deleteAdmin = ID => {
        Request.GraphQlRequest(delStaff, {shopId: parseInt(localStorage.getItem('shopID')),id:ID}, `Bearer ${localStorage.getItem('accessToken')}`).then(
            (res) => {
                // console.log('addStaff', res)
                this.setState({
                    isClosable:false
                })
                this.queryStaffs();
                message.success('删除成功！')
            }
        )
    }

    render() {
        const text = <span><Icon type="user-add" /> 搜索用户</span>;
        const content = (
            <div>
                <div style={{ marginBottom:"10px"}}>
                    <Input style={{ width:"150px", marginRight:"10px"}} onChange={this.InputChange} value={this.state.InputValue}/>
                    <Button type="primary" shape="circle" icon="search" onClick={this.searchStaff}/>
                </div>
                <div>
                    <RadioGroup onChange={this.onRadioChange} value={this.state.RadioValue}>
                        <Radio value='USER_PHONE'>手机号</Radio>
                        <Radio value='USER_ACCOUNTID'>账号id</Radio>
                    </RadioGroup>
                </div>
                <Spin spinning={this.state.loading}>
                    <div>
                        {
                            this.state.userData?
                                <div style={{ marginTop:"20px"}}>
                                    <Tag color="#2db7f5">{this.state.userData.phone}</Tag>
                                    <Button  type="primary" onClick={ () => { this.addStaff(this.state.userData.id) } }>添加</Button>
                                </div>
                                :
                                null
                        }
                    </div>
                </Spin>
            </div>
        );
        const staffInfo = this.state.staffsData && this.state.staffsData.staffs.map(
            (staff) => {
                return <Tag style={{ marginTop:'15px' }} color="#2db7f5" key={staff.userId} closable={ this.state.isClosable } onClose={ () => { this.deleteAdmin(staff.id)}}>{staff.user.phone}</Tag>
            }
        )

        return (
            <div>
                <Row>
                    <Col span={8} offset={2}>
                        <h3>
                            <Icon type="user" />创建者
                        </h3>
                        <Tag color="#2db7f5" style={{ marginTop:'15px' }}>{localStorage.getItem('phone')}</Tag>
                    </Col>
                    <Col span={14}>
                        <h3>
                            <Icon type="usergroup-add" />管理员
                        </h3>
                        <div>
                            { staffInfo }
                          {
                              localStorage.getItem('OriginalID') === localStorage.getItem('shopID')
                              &&
                              <Popover placement="rightTop" title={text} content={content} trigger="click">
                                  <Tag
                                      style={{ background: '#fff', borderStyle: 'dashed', marginTop:'15px' }}
                                      color="orange"
                                  >
                                      <Icon type="plus" /> 添加
                                  </Tag>
                              </Popover>
                          }

                        {
                          (this.state.staffsData && !isEmpty(this.state.staffsData.staffs) && localStorage.getItem('OriginalID') === localStorage.getItem('shopID'))
                            &&
                            <Tag
                                style={{ background: '#fff', borderStyle: 'dashed', marginTop:'15px' }}
                                color="orange"
                                onClick={ this.lunchDelete}
                            >
                                <Icon type="minus" /> { this.state.isClosable? '取消删除':'删除'}
                            </Tag>
                        }
                        </div>
                    </Col>
                </Row>
            </div>

        )
    }
}

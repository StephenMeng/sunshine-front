import React, {Component} from 'react'
import Table from "antd/es/table/Table";
import Divider from "antd/es/divider/index";
import Icon from "antd/es/icon/index";
import Button from "antd/es/button/button";
import Modal from "antd/es/modal/Modal";
import SimpleForm from "../simple/SimpleForm";
import List from "antd/es/list/index";
import Avatar from "antd/es/avatar/index";
const columns = [{
  title: 'userName',
  dataIndex: 'userName',
  key: 'userName',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'userNo',
  dataIndex: 'userNo',
  key: 'userNo',
}, {
  title: 'title',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;" >Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <Divider type="vertical" />
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
class UserShow extends Component {

  componentDidMount(){
    this.props.onComponentDidMount();
  }
  addUsers(){
    console.log("add User")
    this.props.closeAddView();
  }
  render() {
    const { users,handleChangePage,openAddView,closeAddView,users_add_modal} = this.props;
    const page={
      onChange:handleChangePage,
      defaultCurrent:1,
      total:50
    }
    console.log(users);
    return (
      <div style={{float:"right"}}>
        <Button type="primary" onClick={openAddView}>新增人员</Button>
        {/*<List*/}
          {/*itemLayout="vertical"*/}
          {/*size="large"*/}
          {/*pagination={{*/}
            {/*onChange: handleChangePage,*/}
            {/*pageSize: 3,*/}
          {/*}}*/}
          {/*dataSource={users}*/}
          {/*footer={<div><b>ant design</b> footer part</div>}*/}
          {/*renderItem={item => (*/}
            {/*<List.Item*/}
              {/*key={item.userNo}*/}
              {/*actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}*/}
              {/*extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}*/}
            {/*>*/}
              {/*<List.Item.Meta*/}
                {/*avatar={<Avatar src={item.avatar} />}*/}
                {/*title={<a href={item.href}>{item.userName}</a>}*/}
                {/*description={item.userNo}*/}
              {/*/>*/}
              {/*{item.title}*/}
            {/*</List.Item>*/}
          {/*)}*/}
        {/*/>*/}
        <Table columns={columns} dataSource={
          users} pagination={page} />
        <Modal
          title="Basic Modal"
          visible={users_add_modal}
          onOk={this.addUsers}
          onCancel={closeAddView}
          onSubmit={this.addUsers}
        >
          <div id="page-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="white-box">
                    <SimpleForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
export default UserShow;

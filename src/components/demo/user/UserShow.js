import React, {Component} from 'react'
import Table from "antd/es/table/Table";
import Divider from "antd/es/divider/index";
import Icon from "antd/es/icon/index";
import Button from "antd/es/button/button";
import Modal from "antd/es/modal/Modal";
import SimpleForm from "../simple/SimpleForm";

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
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <Divider type="vertical" />
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];
class UserShow extends Component {
  componentDidMount(){
    this.props.onComponentDidMount();
  }
  render() {
    const { users,handleChangePage,openAddView,users_add_modal} = this.props;
    const page={
      onChange:handleChangePage,
      defaultCurrent:1,
      total:50
    }
    console.log(users)
    return (
      <div style={{float:"right"}}>
        <Button type="primary" onClick={openAddView}>新增人员</Button>

        <Table columns={columns} dataSource={
          users} pagination={page} />
        {/*<Modal*/}
          {/*title="Basic Modal"*/}
          {/*visible={users_add_modal}*/}
          {/*onOk={openAddView(false)}*/}
          {/*onCancel={openAddView(false)}*/}
        {/*>*/}
          {/*<div id="page-wrapper">*/}
            {/*<div className="container-fluid">*/}
              {/*<div className="row">*/}
                {/*<div className="col-md-6 col-lg-6 col-sm-12">*/}
                  {/*<div className="white-box">*/}
                    {/*<h3>Simple Form</h3>*/}
                    {/*<SimpleForm ></SimpleForm>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</Modal>*/}
      </div>
    )
  }
}
export default UserShow;

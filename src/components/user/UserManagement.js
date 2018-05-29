import React, {Component} from 'react';
import UserHeader from "./UserHeader";
import UserItemPanel from "./UserItemPanel";
import UserFooter from "./UserFooter";
import UserDetail from "./UserDetail";
import MyEditor from "../common/MyEditor";

class UserManagement extends Component {
    render(){
        const{users,handleDelete,handleQuery}=this.props
        console.log("users")
        console.log(users)
        return(
            <div>
                <MyEditor
                />
                <UserHeader searchStaff={handleQuery}/>
                <UserItemPanel users={users} deleteStaff={handleDelete}/>
                <UserFooter/>
                <UserDetail/>
            </div>
        );
    }

}
export default UserManagement;

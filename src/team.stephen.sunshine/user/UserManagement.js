import React, {Component} from 'react';
import UserHeader from "../component/UserHeader";
import UserItemPanel from "../component/UserItemPanel";
import UserFooter from "../component/UserFooter";
import UserDetail from "../component/UserDetail";

class UserManagement extends Component {
    render(){
        const{users,handleDelete,handleQuery}=this.props
        console.log("users")
        console.log(users)
        return(
            <div>
                <UserHeader searchStaff={handleQuery}/>
                <UserItemPanel users={users} deleteStaff={handleDelete}/>
                <UserFooter/>
                <UserDetail/>
            </div>
        );
    }

}
export default UserManagement;

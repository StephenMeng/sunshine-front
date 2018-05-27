import React, {Component} from 'react';
import UserHeader from "./UserHeader";
import UserItemPanel from "./UserItemPanel";
import UserFooter from "./UserFooter";
import UserDetail from "./UserDetail";
import User from "./cls/User";


class UserManagement extends Component {
    constructor(){
        super();
        this.state={
            user:new User,
        }
    }
    deleteStaff(userNo){
        this.setState({
            user:this.state.user.deleteStaff(userNo)
        })
    }
    searchStaff(word) {
        this.setState({
            user: this.state.user.searchStaff(word)
        });
    }
    render(){
        console.log(this.state.user)
        return(
            <div>
                <UserHeader searchStaff={this.searchStaff.bind(this)}/>
                <UserItemPanel users={this.state.user.staff} deleteStaff={this.deleteStaff.bind(this)}/>
                <UserFooter/>
                <UserDetail/>
            </div>
        );
    }

}

export default UserManagement;

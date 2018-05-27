import React, {Component} from 'react';
import UserItem from "./UserItem";

class UserItemPanel extends Component {
    deleteUser(userNo){
        this.props.deleteStaff(userNo);
    }
    render(){
        let items=[];
        if(this.props.users.length==0){
            items.push(<tr><th colSpan="5">暂无用户</th></tr>);
        }else {
            console.log(this.props.users)
            this.props.users.forEach(user=>{
                items.push(<UserItem key={user.id} user={user} deleteUser={this.deleteUser.bind(this)}/>)
            })
        }
        return(
            <div>
                   <table>
                       <thead>
                       <th >学号</th>
                       <th >姓名</th>
                       <th >职称</th>
                       </thead>
                       <tbody>
                       {items}
                       </tbody>
                   </table>
            </div>
        );
    }

}

export default UserItemPanel;

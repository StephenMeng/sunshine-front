import React, {Component} from 'react';
import UserItem from "./UserItem";

class UserItemPanel extends Component {
    render(){
        var items=[];
        const{users,deleteStaff}=this.props;
        if(!users){
            items.push(<tr key="0   "><th colSpan="5">暂无用户</th></tr>);
        }else {
            console.log(users)
           users.forEach(user=>{
                items.push(<UserItem key={user.userNo} user={user} deleteUser={deleteStaff}/>)
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

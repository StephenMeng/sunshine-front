import React, {Component} from 'react';

class UserItem extends Component {
    deleteUser(userNo,e){
        this.props.deleteUser(userNo);
    }
    render(){
        const {user,handelDelte}=this.props;
        console.log(user)
        return(
            <div>
                    <tr style={{"cursor":"pointer"}}>
                        <td>{user.userNo}</td>
                        <td>{user.userName}                        </td>
                        <td>{user.userTitle}</td>
                        <td ><a onClick={this.deleteUser.bind(this,user.userNo)}>删除</a>
                            <a >详情</a>
                        </td>
                    </tr>
            </div>
        );
    }

}

export default UserItem;

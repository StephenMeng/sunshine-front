import React, {Component} from 'react';

class UserItem extends Component {
    deleteUser(userNo,e){
        this.props.deleteUser(userNo);
    }
    render(){
        const {user,handelDelte}=this.props;
        return(
            <div>
                    <tr style={{"cursor":"pointer"}}>
                        <td>{user.info.userNo}</td>
                        <td>{user.info.userName}                        </td>
                        <td>{user.info.userTitle}</td>
                        <td ><a onClick={this.deleteUser.bind(this,user.info.userNo)}>删除</a>
                            <a >详情</a>
                        </td>
                    </tr>
            </div>
        );
    }

}

export default UserItem;

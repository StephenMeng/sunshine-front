import React, {Component} from 'react';

class UserItem extends Component {
    handleDelete(userNo,event){
        console.log(userNo)
        this.props.deleteUser(userNo)
    }
    render(){
        return(
            <div>
                    <tr style={{"cursor":"pointer"}}>
                        <td>{this.props.user.info.userNo}</td>
                        <td>{this.props.user.info.userName}                        </td>
                        <td>{this.props.user.info.userTitle}</td>
                        <td ><a onClick={this.handleDelete.bind(this,this.props.user.info.userNo)}>删除</a>
                            <a >详情</a>
                        </td>
                    </tr>
            </div>
        );
    }

}

export default UserItem;

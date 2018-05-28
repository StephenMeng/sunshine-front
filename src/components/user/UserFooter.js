import React, {Component} from 'react';

class UserFooter extends Component {
    render(){
        return(
            <div>
                <h4>人员新增</h4>
                <hr/>
                <form ref="addUser" >
                    <div>
                        <label for="addUserName" style={{'display':'block'}}>姓名</label>
                        <input id="addUserName" ref="addName" type="text" placeholder="填写姓名"></input>
                    </div>
                    <div>
                        <label htmlFor="addUserNo" style={{'display': 'block'}}>学号</label>
                        <input id="addUserNo" ref="addNo" type="text" placeholder="填写学号"></input>
                    </div>
                    <p ref="tips" >提交成功</p>
                    <p ref='tipsUnDone' >请录入完整的人员信息</p>
                    <p ref='tipsUnAge' >请录入正确的年龄</p>
                    <div>
                        <button>提交</button>
                    </div>
                </form>

            </div>
        );
    }

}

export default UserFooter;

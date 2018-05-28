import React, {Component} from 'react';
import * as ReactDOM from "react-dom";
class UserHeader extends Component {
    handlerSearch(){
        let bar = ReactDOM.findDOMNode(this.refs.searchBar);
        let value = bar.value;
        this.props.searchStaff(value);
    }
    render(){
        return(
            <div>
                <h3 style={{'text-align':'center'}}>人员管理系统</h3>
                <table >
                    <tr>
                        <td><input type="text" ref="searchBar"  onChange={this.handlerSearch.bind(this)} placeholder="search..."/></td>
                        <td>
                            <label for="idSelect">人员筛选</label>
                            <select id="idSelect">
                                <option value="0">老师</option>
                                <option value="1">学生</option>
                            </select>
                        </td>
                        <td>
                            <label htmlFor="orderSelect">排序方式</label>
                            <select id="orderSelect">
                                <option value="0">学号</option>
                                <option value="1">姓名</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

}

export default UserHeader;

import React from 'react';
import {connect} from 'react-redux'
import UserManagement from "../user/UserManagement";
import User from "../user/cls/User";
import MyFetch from "../utils/MyFetch"

const DELETE=userNo=>({type:"deleteUser",users:deleteUser(userNo)})
const QUERY=word=>({type:"queryUser",users:queryUser(word)})

export const queryUser=(word)=>{
    let a=[];
    MyFetch.get("admin/user/list?pageNum=1&pageSize=5",function (value) {
        console.log(value.data.list)
        a=value.data.list;
    });
    return a;
}
export const deleteUser=(word)=>{
    console.log("delete ")
    return User.rawData.filter(item=>{
            return item.info.userNo!=word
        });
}


const mapStateToProps = state => ({
    users: state.users //这个是reducers定义的
})

const mapDispatchToProps = dispatch => ({
    handleDelete:(userNo)=>{
        dispatch(DELETE(userNo))
    },
    handleQuery:(word)=>{
        dispatch(QUERY(word))
    },

})
const UserManagementContainer=connect(mapStateToProps,mapDispatchToProps)(UserManagement);
export default UserManagementContainer;

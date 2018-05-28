import React from 'react';
import {connect} from 'react-redux'
import UserManagement from "../user/UserManagement";
import User from "../user/cls/User";
import MyFetch from "../utils/MyFetch"

const DELETE=userNo=>({type:"deleteUser",users:deleteUser(userNo)})
const QUERY=word=>({type:"queryUser",users:queryUser(word)})

export const queryUser=(word)=>{
    console.log(MyFetch.get("v2/book/search?q=python"));
    console.log(word)
    return  User.rawData.filter(item => {
            return item.info.userName.includes(word)
    });
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
        console.log("query")
        dispatch(QUERY(word))
    },
})
const UserManagementContainer=connect(mapStateToProps,mapDispatchToProps)(UserManagement);
export default UserManagementContainer;

import React from 'react';
import {connect} from 'react-redux'
import UserManagement from "../../components/user/UserManagement";
import MyFetch from "../../utils/MyFetch";

const DELETE=userNo=>({type:"deleteUser",users:deleteUser(userNo)})
const QUERY=data=>({type:"queryUser",users:data})
export const deleteUser=(word)=>{
    console.log("delete ")
};


const mapStateToProps = state => ({
    users: state.users //这个是reducers定义的
})

const mapDispatchToProps = dispatch => ({
    handleDelete:(userNo)=>{
        dispatch(DELETE(userNo))
    },
    handleQuery:(word)=>{
        let params={
            pageNum:1,
            pageSize:5
        }
        MyFetch.get("admin/user/list",params).then(value=>{
            console.log(value.data.list);
            dispatch(QUERY(value.data.list))
        });
    },

})
const UserManagementContainer=connect(mapStateToProps,mapDispatchToProps)(UserManagement);
export default UserManagementContainer;

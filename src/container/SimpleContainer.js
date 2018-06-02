import React, {Component} from 'react';
import Simple from "../components/demo/simple/view";
import {connect} from 'react-redux'
import MyFetch from "../utils/MyFetch";

const mapStateToProps = state => ({
  user: state.user //这个是reducers定义的
})

const mapDispatchToProps = dispatch => ({
  handleOnSubmit : (value) => {
    if(value.userNo !== undefined){
      console.log("userNo");
      console.log(value.userNo);
    }
    console.log("Simple onSubmit: "+JSON.stringify(value));
    MyFetch.post("admin/user/add",value).then(function (res) {
      console.log(res)
    })
  }
})
const SimpleContainer=connect(mapStateToProps,mapDispatchToProps)(Simple);
export default SimpleContainer;

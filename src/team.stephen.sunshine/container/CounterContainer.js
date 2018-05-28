import React, {Component} from 'react';
import TabPane from "./TabPane";
import Counter from "../component/Counter";
import connect from "react-redux/es/connect/connect";

const INCREASE={type:"increase"}

function  routerRouter(state={count:0},action){
    const count=state.count;
    switch (action.type){
        case "increase":
            return{count:count+1};
        default:
            return state;
    }

}

const store=createStore(routerCounter);

function mapStateToProps(state) {
    return{
        value:state.count
    }
}
function mapDispachToProps(dispach) {
    return{
        handleClick:()=>dispach(INCREASE)
    }
}

const Container =connect(mapStateToProps,mapDispachToProps)(Counter);
export default Container;

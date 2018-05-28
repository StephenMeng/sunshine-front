import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import UserManagement from "./team.stephen.sunshine/user/UserManagement";
import Counter from "./team.stephen.sunshine/component/Counter";
import connect from "react-redux/es/connect/connect";
import createStore from "redux/src/createStore";
import Provider from "react-redux/src/components/Provider";


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

const store=createStore(routerRouter);

function mapStateToProps(state) {
    return{
        value:state.count
    }
}
function mapDispachToProps(dispach) {
    return{
        onIncreaseClick:()=>dispach(INCREASE)
    }
}

const Container =connect(mapStateToProps,mapDispachToProps)(Counter);

const About = () => (
    <div>
        <Container/>
    </div>
)

const Home = () => (
    <div>
    <UserManagement/>
    </div>
)

const Message = ({ match }) => (
    <div>
        <h3>new messages</h3>
    </div>
)

const Inbox = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <Route path={`${match.url}/messages/:id`} component={Message}/>

    </div>
)
ReactDOM.render(
    <Provider store={store}>
        (<HashRouter>
            <App>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About}                    >
                </Route>
                <Route path="/inbox" component={Inbox} />
            </App>
        </HashRouter>)
    </Provider>,
        document.getElementById('root')
)
registerServiceWorker();

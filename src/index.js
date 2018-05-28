import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from "redux/src/createStore";
import Provider from "react-redux/src/components/Provider";


const INCREASE={type:"increase"}

function  routerRouter(state={users:[]},action){
    switch (action.type){
        case "queryUser":
            return{users:action.users};
        case "deleteUser":
            return  {users:action.users}
        default:
            return state;
    }

}

const store=createStore(routerRouter);

// const About = () => (
//     <div>
//         <Container/>
//     </div>
// )
//
// const Home = () => (
//     <div>
//     <UserManagement/>
//     </div>
// )
//
// const Message = ({ match }) => (
//     <div>
//         <h3>new messages</h3>
//     </div>
// )
//
// const Inbox = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <Route path={`${match.url}/messages/:id`} component={Message}/>
//
//     </div>
// )
ReactDOM.render(
    <Provider store={store}>
        {/*<HashRouter/>*/}
        <App/>
        {/*<HashRouter/>*/}
        {/*(<HashRouter>*/}
            {/*<App>*/}
                {/*<Route exact path="/" component={Home} />*/}
                {/*<Route path="/about" component={About}                    >*/}
                {/*</Route>*/}
                {/*<Route path="/inbox" component={Inbox} />*/}
            {/*</App>*/}
        {/*</HashRouter>)*/}
    </Provider>,
        document.getElementById('root')
)
registerServiceWorker();

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./team.stephen.sunshine/test/Home";
import UserHeader from "./team.stephen.sunshine/user/UserHeader";
import UserManagement from "./team.stephen.sunshine/user/UserManagement";
import {
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
              <h1>App</h1>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/inbox">Inbox</Link></li>
              </ul>
              {this.props.children}

          </div>
          );
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
            {/*<UserManagement/>*/}
        {/*</p>*/}
      </div>
    );
  }
}
export default App;

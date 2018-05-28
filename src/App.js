import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserManagementContainer from "./team.stephen.sunshine/container/UserManagementContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<div>*/}
              {/*<h1>App</h1>*/}
              {/*<ul>*/}
                  {/*<li><Link to="/">Home</Link></li>*/}
                  {/*<li><Link to="/about">About</Link></li>*/}
                  {/*<li><Link to="/inbox">Inbox</Link></li>*/}
              {/*</ul>*/}
              {/*{this.props.children}*/}

          {/*</div>*/}
          {/*);*/}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <UserManagementContainer />
        </p>
      </div>
    );
  }
}
export default App;

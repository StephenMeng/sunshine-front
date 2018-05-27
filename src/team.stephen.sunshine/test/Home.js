import React, {Component} from 'react';
import Column from "./Column";
import Tab from "./Tab";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeUri:"blog",
            activeColumn:"blog",

    }
    }
    handleChange(uri){
        this.setState({
            activeUri:uri,
        })
        console.log(this.state.activeUri)
    }
    render() {
        return (
            <div>
                <Tab call={(uri)=>{this.handleChange(uri)}}/>
                <br/>
                <Column uri={this.state.activeUri}/>
                <p> zzzzzzzzzzzzzzzzzzzzzzzzzzzz正文</p>
            </div>
        );
    }
}

export default Home;

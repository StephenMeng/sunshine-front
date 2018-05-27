import React, {Component} from 'react';

class ColumnPane extends Component {
    constructor(props){
        super(props);
        this.state={
            text:"空",
        }
    }
    render() {
        return (
            <div >
                <li>{this.props.text}</li>
            </div>
        );
    }

}

export default ColumnPane;

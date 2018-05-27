import React, {Component} from 'react';


class TabPane extends Component {

    constructor(props){
        super(props);

    }
    clickFunction(i){
        console.log("pane click"+i)
        this.props.onClick();
    }
    render() {
        return (
            <div>
                {this.props.data.channelNameCn==this.props.activeUri?console.log("ok"):console.log("not")}
                <p style={{display:"inline", fontSize:"40"}   } onClick={()=>this.clickFunction(this.props.data)}>{this.props.data.channelNameCn}  </p>
            </div>
        );
    }
}

export default TabPane;

import React, {Component} from 'react';
import TabPane from "./TabPane";

class Tab extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        let dataList = [];
        this.state = {
            activeUri: "home",
            preActiveUri:"home",
            dataList: dataList
        }
        var url = "http://192.168.1.103:8080/front/channel?pageNum=1&pageSize=10";
        fetch(url).then((res) => {
            if (res.ok) {
                res.json().then((res) => {
                    this.setState({
                        num: res["code"],
                        dataList: res.data.list,
                    });
                })
            }
        }).catch((res) => {
            console.log(res.status);
        });
    }

    handleClick(activeUri) {
        this.setState({
            preActiveUri:this.state.activeUri,
            activeColumn:activeUri
        })
        this.props.call(activeUri);
        console.log("click")
    }

    render() {
        return (
            <div>
                {
                    this.state.dataList.map((child) => {
                        return  <TabPane data={child} uri={child.channelUri} activeUri={this.state.activeUri} onClick={(uri)=>this.handleClick(uri)}/>
                    })
                }
            </div>
        );
    }
}

export default Tab;

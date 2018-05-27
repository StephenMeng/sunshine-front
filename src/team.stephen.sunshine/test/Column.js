import React, { Component } from 'react';

class Column extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            columns:[],
        }
        var url="http://192.168.1.103:8080/front/column?channel="+props.uri+"&pageNum=1&pageSize=2\n";
        fetch(url).then((res)=>{
            if(res.ok){
                res.json().then((res)=>{
                    this.setState({
                        columns:res.data.list,
                    });
                    // console.log(data);
                })
            }
        }).catch((res)=>{
            console.log(res.status);
        });
    }
    handleClick(uri){
    }
    componentDidMount() {
        var url="http://192.168.1.103:8080/front/column?channel="+this.props.uri+"&pageNum=1&pageSize=2\n";
        fetch(url).then((res)=>{
            if(res.ok){
                res.json().then((res)=>{
                    this.setState({
                        columns:res.data.list,
                    });
                    // console.log(data);
                })
            }
        }).catch((res)=>{
            console.log(res.status);
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.columns.map((child) => {
                        return <li>{child.columnNameCn}</li>
                    })
                }
                })
            </div>
        );
    }
}

export default Column;

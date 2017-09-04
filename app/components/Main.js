import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Child from "./Child"; // import child here

export default class Main extends Component {
    constructor(props){
        super(props)

        this.state={
            test1: "test1",
            test2: "test2"
        }

        // function().bind(this);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron">
                            <h1 className="text-center">Test jumbotron</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Route path="/" render={()=><Child test1={this.state.test1} test2={this.state.test2}/>}/>
                </div>
            </div>
        )
    }

}



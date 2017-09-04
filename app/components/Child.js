import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

export default class Child extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="col-md-12">
                <h2 className="text-center">{this.props.test1}</h2>
                <h3 className="text-center">{this.props.test2}</h3>
            </div>
        )
    }
}
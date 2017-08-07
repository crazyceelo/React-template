import { React } from "react";
import Router from "react-router";
import { HashRouter as Router, Route } from "react-router-dom";
import Child from "./Child"; // import child here

export default class Main extends Component {
    constructor(props){
        super(props)

        this.state={
            test: "test",
            test2: "test2"
        }

        // function().bind(this);
    }

    // React life cycles if needed

    // functions

    // render page
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
            </div>
        )
    }

}



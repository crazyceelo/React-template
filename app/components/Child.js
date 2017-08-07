import { React } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

export default class Child extends Component {
    render(){
        return(
            <div className="col-md-12">
                <h2 className="text-center">{this.props.data.test1}</h2>
                <h4 className="text-center">{this.props.data.test2}</h4>
            </div>
        )
    }
}
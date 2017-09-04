import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Main from "../components/Main";

// not sure if you need these. try without. 
// var hashHistory = router.hashHistory; 
// var IndexRoute = router.IndexRoute;

export default (
    <Router>
        <Route path="/" component={Main}></Route>
    </Router>
)
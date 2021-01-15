import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import {} from "./pages";
import HeaderComponent from "component/HeaderComponent/HeaderComponent";
import MainComponent from "component/MainComponent/MainComponent";

const PageRouter = (props) => {
    return (
        <Router>
            <Switch>
                <HeaderComponent />
            </Switch>
            <section className="article">
                <Switch>
                    <Route exact path="/" component={MainComponent} />
                </Switch>
            </section>
            <section className="footer">
                <Switch></Switch>
            </section>
        </Router>
    );
};

export default PageRouter;

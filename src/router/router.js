import React from "react";

import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";

import Home from "../containers/Home/Home"
import CnpjQuery from "../containers/CnpjQuery/CnpjQuery"
import EnterpriseDetail from "../containers/CnpjQuery/EnterpriseDetail"
import NotFound from "../containers/NotFound/NotFound"

const Router = (routes) => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cpnj-query" component={CnpjQuery} />
            <Route exact path="/detail" component={EnterpriseDetail} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router
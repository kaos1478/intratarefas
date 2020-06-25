import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import NewCall from "./pages/NewCall";
import Graphics from "./pages/Graphics";
import CallList from "./pages/CallList";

const Routes: React.FC= () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/newcall" component={NewCall} />
            <Route path="/calllist" component={CallList} />
            <Route path="/graphics" component={Graphics} />
        </Switch>
    )
}

export default Routes;
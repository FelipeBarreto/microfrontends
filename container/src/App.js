import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Redirect from="*" to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

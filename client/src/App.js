import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import addLink from "./Components/addLink";
import Error404 from "./Components/Error404";

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/add-link' component={addLink} />
        <Route exact path='' component={Error404} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;

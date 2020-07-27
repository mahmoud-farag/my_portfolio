import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import MySkills from "./components/MySkills/MySkills";
import ContactMe from "./components/ContactMe/ContactMe";

import MyWork from "./components/MyWork/MyWork";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/MySkills" component={MySkills} />
          <Route path="/ContactMe" component={ContactMe} />
          <Route path="/MyWork" component={MyWork} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      ;
    </React.Fragment>
  );
};

export default App;

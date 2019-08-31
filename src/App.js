import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

import "bulma/css/bulma.css";
import "./App.css";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, {Component} from "react";
import "bulma/css/bulma.css";
import "./App.css";
import {Title} from "./components/Title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Search movies</Title>
      </div>
    );
  }
}

export default App;

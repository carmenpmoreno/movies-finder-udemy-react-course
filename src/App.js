import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";

import Home from './pages/Home';
import Detail from './pages/Detail';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  
  render() {
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if (hasId) {
      return <Detail id={url.searchParams.get('id')} />
    }

    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;

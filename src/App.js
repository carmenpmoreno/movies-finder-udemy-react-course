import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import MoviesList from './components/MoviesList';

class App extends Component {
  state = { data: [] };

  _handleData = data => {
    this.setState({ data });
  };

  render() {
    return (
      <div className="App">
        <Title>Search movies</Title>
        <div className="search-form__wrapper">
          <SearchForm handleData={this._handleData} />
        </div>
        {this.state.data.length === 0 ? <p>Sin resultados</p> : <MoviesList movies={this.state.data}/>}
      </div>
    );
  }
}

export default App;

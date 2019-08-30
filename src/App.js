import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import MoviesList from "./components/MoviesList";

class App extends Component {
  state = { usedSearch: false, data: [] };

  _handleData = data => {
    this.setState({ data: data, usedSearch: true });
  };
  _renderResults = () => {
    return this.state.data.length === 0 ? (
      <small>Lo sentimos, la búsqueda no ha tenido resultados</small>
    ) : (
      <MoviesList movies={this.state.data} />
    );
  };

  render() {
    return (
      <div className="App">
        <Title>Buscardor de Películas y series</Title>
        <div className="search-form__wrapper">
          <SearchForm handleData={this._handleData} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>
            Usa el buscador para encontrar tu película o serie favorita
          </small>
        )}
      </div>
    );
  }
}

export default App;

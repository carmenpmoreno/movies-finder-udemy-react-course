import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Title from './components/Title';
import SearchForm from './components/SearchForm';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Title>Search movies</Title>
        <div className="search-form__wrapper">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default App;

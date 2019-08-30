import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Title from './components/Title';
import SearchForm from './components/SearchForm';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  state = {data: []};

  _handleData = (data) => {
    this.setState({data})
  }

  _renderData = () => {
    const {data} = this.state;
    return data.map(movie => {
      return <li key={movie.imdbID}>{movie.Title}</li>
    })
  }

  render() {
    return (
      <div className="App">
        <Title>Search movies</Title>
        <div className="search-form__wrapper">
          <SearchForm handleData={this._handleData}/>
        </div>
        {this.state.data.length === 0
        ? <p>Sin resultados</p>
        : <ul>{this._renderData()}</ul>
        }
      </div>
    );
  }
}

export default App;

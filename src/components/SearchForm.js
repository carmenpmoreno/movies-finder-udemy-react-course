import React, { Component } from "react";
import './SearchForm.css';

const API_KEY = "d2792a7a";

// eslint-disable-next-line react/prefer-stateless-function
class SearchForm extends Component {
  state = {
    inputMovie: ""
  };

  _handleChange = event => {
    const { value } = event.target;
    this.setState({ inputMovie: value });
  };
  _handleSubmit = event => {
    const { inputMovie } = this.state;

    event.preventDefault();
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(resp => resp.json())
      .then(data => {
        const { Search = [], totalResults = "0" } = data;
        console.log({ data, Search, totalResults });
        this.props.handleData(Search);
      });
  };

  render() {
    return (
      <form className="search-form" onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Movie to search"
            />
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;

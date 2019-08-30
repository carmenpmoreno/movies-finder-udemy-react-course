import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class SearchForm extends Component {
  state = {
    inputMovie: ""
  };

  _handleChange = (event) => {
    const { value } = event.target;
    this.setState({ inputMovie: value });
  };
  _handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.inputMovie);
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit} >
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

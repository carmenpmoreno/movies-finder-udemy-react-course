import React, { Component } from "react";
import Proptypes from "prop-types";
import Movie from "./Movie";
import './MoviesList.css';

// eslint-disable-next-line react/prefer-stateless-function
class MoviesList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movies-list">
        {movies.map(movie => {
          return (
            <div key={movie.imdbID} className="movies-list__item">
              <Movie
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

Movie.proptypes = {
  movies: Proptypes.array
};

export default MoviesList;

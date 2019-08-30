import React, { Component } from 'react';
import Proptypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Movie extends Component {
  render() {
    const { poster, title, year} = this.props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img
              src={poster}
              alt={title}
             />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  title: Proptypes.string,
  year: Proptypes.string,
  poster: Proptypes.string,
};

export default Movie;

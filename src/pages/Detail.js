import React, { Component } from "react";
import Proptypes from "prop-types";

const API_KEY = "d2792a7a";

// eslint-disable-next-line react/prefer-stateless-function
class Detail extends Component {
  state = { movie: {} };

  componentDidMount() {
    const { id } = this.props;
    this.fetchMovie({ id });
  }

  fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(resp => resp.json())
      .then(movie => {
        console.log("movie info", movie);
        this.setState({ movie });
      });
  }
  goBack() {
    window.history.back();
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <>
        <button onClick={this.goBack}></button>
        <h1>{Title}</h1>
        <img src={Poster}></img>
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </>
    );
  }
}

Detail.propTypes = {
  id: Proptypes.string
};

export default Detail;

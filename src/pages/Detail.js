import React, { Component } from "react";
import Proptypes from "prop-types";
import ButtonBackToHome from '../components/ButtonBackToHome';

const API_KEY = "d2792a7a";

// eslint-disable-next-line react/prefer-stateless-function
class Detail extends Component {

  static propTypes = {
    match: Proptypes.shape({
      params: Proptypes.objectOf(Proptypes.string)
    })
  }

  state = { movie: {} };

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    this._fetchMovie({ id });
  }

  _fetchMovie({ id }) {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(resp => resp.json())
      .then(movie => {
        console.log("movie info", movie);
        this.setState({ movie });
      });
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <>
        <ButtonBackToHome />
        <h1>{Title}</h1>
        <img src={Poster} alt={Title}></img>
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </>
    );
  }
}

export default Detail;

import React, { Component } from "react";
import movieData from "../movieData/movieData";
import "./App.css";
import Movies from "../Movies/Movies";
import Individual from "../Individual/Individual";
import { fetchMovies, fetchIndividual } from "../apiCalls";

let moviesList;
let movieIndiv;

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      individual: "",
      error: "",
    };
  }

  componentDidMount() {
    fetchMovies()
      .catch((error) => {
        console.error(error.message);
        this.setState({ error: error.message });
      })
      .then((data) => {
        moviesList = data.movies;
      })
      .then(() => {
        this.setState({ movies: moviesList });
      });
  }

  selectPoster = (id) => {
    fetchIndividual(id)
      .catch((error) => {
        console.error(error.message);
        this.setState({ error: error.message });
      })
      .then((data) => {
        movieIndiv = data;
      })
      .then(() => {
        this.setState({ individual: movieIndiv.movie });
      });
  };

  goHome = () => {
    this.setState({ individual: "" });
  };

  render() {
    return (
      <main>
        <div>{this.state.error}</div>
        {this.state.individual ? (
          <Individual
            individualInfo={this.state.individual}
            goHome={this.goHome}
          />
        ) : (
          <>
            <h1>Rancid Tomatillos</h1>
            <Movies
              movieData={this.state.movies}
              selectPoster={this.selectPoster}
            />
          </>
        )}
      </main>
    );
  }
}

export default App;

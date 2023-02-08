import React, { Component } from "react";
import "./App.css";
import Movies from "../Movies/Movies";
import Individual from "../Individual/Individual";
import { fetchMovies } from "../apiCalls";
import { Route } from 'react-router-dom';

let moviesList;

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
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

  render() {
    return(
      <main>
        <div>{this.state.error}</div>
        <Route exact path="/RacidTomatillos/" render={() => <Movies movieData={this.state.movies} />}/>
        <Route 
        exact path="/RacidTomatillos/:id" 
        render={({match}) => {
          return <Individual id={match.params.id}/>}}
          />
      </main>
    )
  }
}

export default App;

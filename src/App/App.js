import React, { Component } from "react";
import movieData from "../movieData/movieData";
import "./App.css";
import Movies from "../Movies/Movies";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
    };
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <Movies movieData={this.state.movies} />
      </main>
    );
  }
}

export default App;

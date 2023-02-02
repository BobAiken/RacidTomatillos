import React, { Component } from "react";
import movieData from "../movieData/movieData";
import "./App.css";
import Movies from "../Movies/Movies";
import Individual from "../Individual/Individual";
const movieIndiv = {"movie": {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }}


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      individual: ""
    };
  }
// WE want to make poster once clicked we see all their remain info 
// once clicked a specific poster it unrednders all remaaining poster and rerenders 
//the clicked one shows all info
// first step is being able to click one 
// second unrender others
// third rerender selected

// when we grab id we use a fetch call to grap specific info and display it. 
//need to onclick 

selectPoster = (id) => {
  console.log(id)
  {this.state.individual ?  this.setState({individual: ""}):  this.setState({individual: movieIndiv.movie})}

}

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        
        {this.state.individual ? <Individual individualInfo={this.state.individual} selectPoster={this.selectPoster}/> :  <Movies movieData={this.state.movies} selectPoster={this.selectPoster}/>}

      </main>
    );
  }
}

export default App;

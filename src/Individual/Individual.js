import React, { Component } from "react";
import "./Individual.css";
import { fetchIndividual } from "../apiCalls";
import { render } from "@testing-library/react";
import { Link } from 'react-router-dom'

let movieIndiv;

  class Individual extends Component {
    
    constructor() {
      super();
      this.state = {
        individual: "",
        error: "",
      };
    }
    
    componentDidMount() {
      fetchIndividual(this.props.id)
      .catch((error) => {
        console.error(error.message);
        this.setState({ error: error.message });
      })
      .then((data) => {
        movieIndiv = data;
      })
      .then(() => {
        this.setState({ individual: movieIndiv.movie });
      })
    }

    render () {
      return(
        <>
        {this.state.individual ? ( <div
          className="backdrop"
          style={{ backgroundImage: `url(${this.state.individual.backdrop_path})` }}
        >
          <div className="information">
            <h3>{this.state.individual.title}</h3>
            <p>{this.state.individual.tagline}</p>
            <p>{this.state.individual.overview}</p>
            <p>Release Date: {this.state.individual.release_date}</p>
            <p>Average Rating: {this.state.individual.average_rating}/10</p>
            <p>Genres: {this.state.individual.genres.join(", ")}</p>
            <p>
              Budget:{" "}
              {this.state.individual.budget.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p>
              Revenue:{" "}
              {this.state.individual.revenue.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p>Runtime: {this.state.individual.runtime} minutes</p>
            <Link to="/">
            <button >GO BACK HOME</button>
            </Link>
          </div>
        </div>) : (<p>Loading...</p>)} 
        </>
      )
    }

}

export default Individual;

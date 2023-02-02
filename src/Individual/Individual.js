import React from "react";
import "./Individual.css";


const Individual = ({title, poster_path, backdrop_path, release_date, overview, average_rating, genres, budget, revenew, runtime, tagline}) => {
    // console.log('titlee', individualInfo)
    return (
        <div>Hello
            <p>{title}</p>
            <img src={poster_path}></img>
            <img src={backdrop_path}></img>
            <p>{release_date}</p>
            <p>{overview}</p>
            <p>{average_rating}</p>
            <p>{genres}</p>
            <p>{budget}</p>
            <p>{revenew}</p>
            <p>{runtime}</p>
            <p>{tagline}</p>
        </div>
    )
}


export default Individual;
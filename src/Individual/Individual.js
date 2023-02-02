import React from "react";
import "./Individual.css";


const Individual = ({individualInfo, selectPoster, id}) => {
    // console.log('titlee', individualInfo.individualInfo.title)
    return (
        <div>Hello
            <p>{individualInfo.title}</p>
            <img src={individualInfo.poster_path}></img>
            <img src={individualInfo.backdrop_path}></img>
            <p>{individualInfo.release_date}</p>
            <p>{individualInfo.overview}</p>
            <p>{individualInfo.average_rating}</p>
            <p>{individualInfo.genres}</p>
            <p>{individualInfo.budget}</p>
            <p>{individualInfo.revenew}</p>
            <p>{individualInfo.runtime}</p>
            <p>{individualInfo.tagline}</p>
            <button onClick = {() => selectPoster(id)}>GO BACK HOME</button>
        </div>
    )
}


export default Individual;
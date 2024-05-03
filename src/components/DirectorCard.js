import React from "react";

function DirectorCard({name, hisMovies}){
    const displayHisMovies = hisMovies.map((hisMovie, index)=>{
        return <li key={index}>{hisMovie}</li>
    })
    return(
        <article>
            <h2>{name}</h2>
            <ul>{displayHisMovies}</ul>
        </article>
    );
}

export default DirectorCard;
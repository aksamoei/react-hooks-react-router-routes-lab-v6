import React from "react";

function ActorCard({name, theirMovies}){
    const displayActorMovie = theirMovies.map((actorMovie, index)=>{
        return <li key={index}>{actorMovie}</li>
    })
    return(
        <article>
            <h2>{name}</h2>
            <ul>{displayActorMovie}</ul>
        </article>
    );
}

export default ActorCard;
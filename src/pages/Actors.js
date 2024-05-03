import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ActorCard from "../components/ActorCard";

function Actors() {
  const [actor, setActor] = useState([])

useEffect(()=>{
  fetch("http://localhost:4000/actors")
  .then((response)=>response.json())
  .then((actorData)=>setActor(actorData))
}, [])

const displayActors = actor.map((movieActor)=>{
  return <ActorCard name={movieActor.name} theirMovies={movieActor.movies} key={movieActor.id}/>
})

  return (
    <>
      <header>
        {/* What component should go here? */} <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {displayActors}
      </main>
    </>
  );
};

export default Actors;

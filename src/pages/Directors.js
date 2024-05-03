import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import DirectorCard from "../components/DirectorCard";

function Directors() {
  const [director, setDirector] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then((re)=>re.json())
    .then((directorData)=>setDirector(directorData))
  }, [])

  const displayDirectors = director.map((movieDirector)=>{
    return <DirectorCard key={movieDirector.id} name={movieDirector.name} hisMovies={movieDirector.movies}/>
  })
  
  return (
    <>
      <header>
        {/* What component should go here? */}<NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {displayDirectors}
      </main>
    </>
  );
};

export default Directors;

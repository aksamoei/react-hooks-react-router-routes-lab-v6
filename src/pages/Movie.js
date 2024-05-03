import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movieDetails, setMovieDetails] = useState({})
  const params = useParams()
  const movieId = params.id
  //console.log(params)
  useEffect(()=>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then((re)=>re.json())
    .then((movieData)=>setMovieDetails(movieData))
  }, [movieId])
  return (
    <>
      <header>
        {/* What component should go here? */}<NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.time}</p>
      </main>
    </>
  );
};

export default Movie;

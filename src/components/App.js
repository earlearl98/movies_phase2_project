import MovieFav from "./MovieFav";
import MovieList from "./MovieList";
import { useState } from "react";
export default function App() {
  const [movieFav,setMovieFav] = useState([])


  return (
    <div>
      <MovieFav movieFav={movieFav} setMovieFav={setMovieFav} />
      <MovieList movieFav={movieFav} setMovieFav={setMovieFav}/> 


    </div>
  )
}


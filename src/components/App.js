import MovieFav from "../pages/MovieFav"
import MovieList from "../pages/MovieList"
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
export default function App() {
  const [movieFav,setMovieFav] = useState([])


  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <MovieFav movieFav={movieFav} setMovieFav={setMovieFav} />
      <MovieList movieFav={movieFav} setMovieFav={setMovieFav}/> 


    </div>
  )
}


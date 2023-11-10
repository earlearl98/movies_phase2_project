import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "../layout/Layout";
import UpdateMovies from "../pages/UpdateMovies";
import Home from "../pages/Home";
import Specific from "../pages/Specific";
import AddMovies from "../pages/AddMovies";
import About from "../pages/About";

export default function App() {
  const [movieFav,setMovieFav] = useState([])


  return (
    <div className="">
      <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />} >

          <Route index element={<Home />}/>

        <Route path="updatemovies" element={<UpdateMovies />} />

          <Route path="about" element={<About />} />

          
          <Route path="addmovies" element={<AddMovies />} />

          <Route path='movies/:id' element={<Specific />} />


      </Route>

      
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

{/* <MovieFav movieFav={movieFav} setMovieFav={setMovieFav} />
      <MovieList movieFav={movieFav} setMovieFav={setMovieFav}/> */}
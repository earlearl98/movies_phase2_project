
import Movie from './Movie';
import React, { useState, useEffect } from 'react';

export default function MovieList({movieFav,setMovieFav}) {
  const [movies, setMovies] = useState([]);

  const [isLoading,setIsLoading ] = useState(true)
  // Fetch movies data from API and store it in the state variable "movies"
  function handleOnClick(bt){
    if (movieFav.filter(el=>el.id===bt.id).length === 0){
      setMovieFav([...movieFav,bt])
    }
  }

  function removeMovie(id) {
    setMovies(movies.filter(movie=>movie.id !== id))
    fetch(`https://movies-app-4lwq.onrender.com/movies/${id}`,{ 
      method: "DELETE",
      headers:{ 
        "Content-Type": "application/json"
      }
    })
    
  }

  useEffect(() => { 
    setIsLoading(true)
    fetch('https://movies-app-4lwq.onrender.com/movies')
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
      setMovies(data);
      
      setIsLoading(false)
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty dependency array ensures the effect runs once after the initial render

  const newArray=[]

  if (isLoading){
    return <h1>
      loading...</h1>
  }
  return (
    <div>
      <h1>MovieList</h1>

      <div className='movie-container '>
        {movies.map(movie=> {
          const {id,title,overview}= movie 
          

          console.log(newArray);
          return (
            <div>
              <div onClick={()=>handleOnClick(movie)} >
              <Movie key={movie.id} movie={movie}
              movieFav={movieFav} setMovieFav={setMovieFav}/>
              </div>

              <button className='btn btn-danger 'onClick={()=>removeMovie(movie.id)}>DELETE</button>
            </div>
        )
          })}
      <div/>  
      </div>
  </div>
  );
        }

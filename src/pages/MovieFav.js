import React from 'react'
import Movie from './Movie'

export default function MovieFav({movieFav,setMovieFav}) {

  function handleClick(bt){ 
    if(movieFav.length > 0){ 

      setMovieFav(movieFav.filter(movie=>movie.id !== bt.id))
    }
  }
  return (
    <div>
      <h1>MovieFav</h1>
      <div >
      {movieFav.map(movie=> {
          return (
            <div onClick={()=>handleClick(movie)}>
         
            <Movie key={movie.id} movie={movie}/>
            </div>
          
          )
        })}
      </div>


      
      
      
      
      </div>
  )
}


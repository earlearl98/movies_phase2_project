import React from 'react'

export default function Movie({movie}) {

  return (
    <div key={movie.title}>

      <div>
        <img src={movie.poster_path} alt={`${movie.title} poster`} className='w-100'/>
      </div>

      <div >
               <h2>{movie.title}<small > <br/>Date of release:  {movie.release_date}</small></h2>
               <p >{movie.overview}</p>
               
            </div>
            
            <hr />
      


    </div>
  )
}

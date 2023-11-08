import React from 'react'

export default function Movie({movie}) {

  return (
    <div key={movie.title}>

      <div>
        <img src={movie.poster_url} alt={`${movie.title} poster`} className='img-fluid'/>
      </div>

      <div >
               <h2>{movie.title}</h2>
               <p >{movie.overview}</p>
               
            </div>
            
            <hr />

    </div>
  )
}

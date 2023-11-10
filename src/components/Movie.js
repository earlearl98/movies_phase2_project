import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Movie.css';


export default function Movie({movie}) {

  return (
    <div key={movie.title} className="border border-dark-subtle movie-card rounded ">

      <div className='movie-image '>
        <img src={movie.poster_url} alt={`${movie.title} poster`} className='img-fluid image'/>
      </div>

      <div >
        <Link to={`/movies/${movie.id}`}>
               <div className='col-20 text-truncate d-flex mx-3'>
                
                <h6>{movie.title}</h6>
                
                </div>
              
               </Link>

               <div className=' row'>

               <p className='overview col-22 text-truncate p-4'>{movie.overview}</p>

               </div>
            </div>
            
            

    </div>
  )
}







import React from 'react'
import Movie from '../components/Movie'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import UpdateM from '../components/UpdateM'
export default function Specific() {


  const [moviex, setMoviex] = useState([]);

   const {id} = useParams()

   useEffect(() => {
    
    fetch(`https://movies-app-4lwq.onrender.com/movies/${id}`)
    .then(response => response.json()) // Parse the JSON response
    .then(response => {
      setMoviex(response);
      
    
      
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []); 


  
  return (
    <div className='container row '>

      <div className='col-md-6 image-fluid'>
      <img src={moviex.poster_url} alt='loading...' />
        </div>

      <div className='col-md-6'> 
      
        <h1 className='bg-success'>{moviex.title}</h1>
        <p> {moviex.overview}</p>
        <UpdateM moviex={moviex}/>
    </div>


      </div>

  )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import UpdateM from '../components/UpdateM'
import '../styles/Movie.css';
export default function Specific() {


  const [moviex, setMoviex] = useState([]);

   const {id} = useParams()

   useEffect(() => {
    
    fetch(`https://movies-app-4lwq.onrender.com/movies/${id}`)
    .then(response => response.json()) 
    .then(response => {

      
      setMoviex(response);
      
    
      
    })
    .catch(error => console.error('Error fetching data:', error));
  }, [id]); 


  
  return (
    <div  >


    <div className='container mt-2  '>
      <div >
      <div >

      <img className='col-md-2 img-fluid  imagex' src={moviex.poster_url} alt='loading...' />

        </div>

      <div className='col-md-6 '> 
      
        <h1 >{moviex.title}</h1>
        <p> {moviex.overview}</p>

       </div>

        <div className='change'>
          
          <hr/>
        
        </div>


    
        <div >
        <UpdateM moviex={moviex}/>
       </div>
    </div>
    </div>
      </div>

  )
}

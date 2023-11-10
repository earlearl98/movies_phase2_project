import React from 'react'
import { Link } from 'react-router-dom'


export default function Movie({movie}) {

  return (
    <div key={movie.title}>

      <div>
        <img src={movie.poster_url} alt={`${movie.title} poster`} className='img-fluid'/>
      </div>

      <div >
        <Link to={`/movies/${movie.id}`}>
               <h2>{movie.title}</h2>
               

               </Link>

               <p className=''>{movie.overview}</p>
               
            </div>
            
            <hr />

    </div>
  )
}
















// import React from 'react'

// export default function Movie({movie , onChange, setOnchange}) {

//   function deleteMovie(){
//     fetch(`https://movies-app-4lwq.onrender.com/movies/${movie.id}`,
//      {method:'DELETE'
//     })
//     .then((res)=> res.json())
//     .then((res)=>{
//       // console.log(res); 
//       setOnchange(!onChange)
//     })
//   }



//   return (
//     <div key={movie.title}>

//       <div>
//         <img src={movie.poster_url} alt={`${movie.title} poster`} className='img-fluid'/>
//       </div>

//       <div className="card p-2" >
//         <link to={`/movies/${movie.id}`}>
//                <h6>{movie.title}</h6>
//                </link>
//                <button onClick={()=>deleteMovie()} type='button' class="btn btn-danger">DELETE</button>

//                <p >{movie.overview}</p>
               
//             </div>
            
//             <hr />

//     </div>
//   )
// }



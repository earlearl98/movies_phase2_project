import Movie from './Movie';
import React, { useState, useEffect } from 'react';
import '../styles/MovieList.css';
import Swal from "sweetalert2"
import '../styles/Movie.css';


export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading ] = useState(true)
  
 function removeMovie(id) {

  
    
    fetch(`https://movies-app-4lwq.onrender.com/movies/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Movie deleted successfully!",
        showConfirmButton: false,
        timer: 1500
      });
      
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
    <div className=''>
      <h1>MovieList</h1>

    
      <div className='movie-container d-flex gap-3'>
        {movies.map(movie=> {
          const {id,title,overview}= movie
      
          console.log(newArray);
          return (
            <div className=''>
            
              <div >
              <Movie key={movie.id} movie={movie} moviesId={movie.id}/>
              </div>

              
              <div className=''>
              <button className='btn btn-danger delete ' type='button' onClick={()=>removeMovie(movie.id)}>DELETE</button>
              </div>


            </div>
        )
          })}
      <div/> 
   
      </div>
  </div>
  );
        }























































// import Movie from './Movie';
// import React, { useState, useEffect } from 'react';

// export default function MovieList() {

//   const [movies, setMovies] = useState([]);
//   const [isLoading,setIsLoading ] = useState(true)
//   const [onChange, setOnchange] =useState(false)

//   // Fetch movies data from API and store it in the state variable "movies"

//   // function handleOnClick(bt){
//   //   if (movieFav.filter(el=>el.id===bt.id).length === 0){
//   //     setMovieFav([...movieFav,bt])
//   //   }
//   // }

//   // function removeMovie(id) {
//   //   setMovies(movies.filter(movie=>movie.id !== id))
//   //   fetch(`https://movies-app-4lwq.onrender.com/movies/${id}`,{ 
//   //     method: "DELETE",
//   //     headers:{ 
//   //       "Content-Type": "application/json"
//   //     }
//   //   })
    
//   // }

//   useEffect(() => { 
//     setIsLoading(true)
//     fetch('https://movies-app-4lwq.onrender.com/movies')
//     .then((response) => response.json()) // Parse the JSON response
//     .then(data => {
//       setMovies(data);
      
//       setIsLoading(false)
//     })
//     .catch(error => console.error('Error fetching data:', error));
//   }, [onChange]); // The empty dependency array ensures the effect runs once after the initial render

//   // const newArray=[]

//   if (isLoading){
//     return <h1>
//       loading...</h1>
//   }
//   return (
//     <div className='container row mx-auto p-2'>
      
//       <h1>MovieList</h1>

//       <div className='movie-container col-md-3'>

//       {
//         movies.length<1 && <p className='alert alert warning'>No movies to display</p>
//       }

//         {
//         movies && movies.map((movie)=> {
//           <Movie  key={movie.id} movie={movie}
//                 onChange={onChange} setOnchange={setOnchange} /> 
//         })
//       }
              
      
//       </div>  
      
//   </div>
//   );
//         }



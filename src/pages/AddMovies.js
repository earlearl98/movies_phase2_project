import React, {useState} from 'react'
import Swal from "sweetalert2"
export default function AddMovies() {

  const[title,setTitle] = useState()
  const[overview, setOverview] = useState()
  const[posterurl, setPosterurl] = useState()

function movieSubmit(e){
  e.preventDefault();
    
  fetch('https://movies-app-4lwq.onrender.com/movies',{
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title : title,
        overview : overview,
        poster_path : posterurl,
  })
  })
    .then(res => res.json()) 
    .then(res => {
      
      console.log("success")

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Movie uploaded successfully!",
        showConfirmButton: false,
        timer: 1500
      });
    
     
    })
    .catch((error)=>{
      Swal.fire({
        icon: "error",
        title: "COULDN'T UPDATE",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    })
      
    setTitle("")
    setOverview("")
    setPosterurl("")
    
  };

  return (

    <div>


    <div className='container row  '>


      <div className='col-md-6'>

        <h1>Add Movies</h1>

      </div>

      <div className='col-md-6'>
        <form onSubmit={movieSubmit}>

            <div className="mb-3">
              <label  className="form-label">Title</label>
              <input type="text" value={title} onChange={e=>setTitle(e.target.value)} className="form-control" required />
              
            </div>

            <div className="mb-3">
              <label className="form-label">OVERVIEW</label>
              <input type="text" value={overview} onChange={e=>setOverview(e.target.value)}  className="form-control" required/>
            </div>

            <div className="mb-3">
              <label className="form-label">Movie_URL</label>
              <input type="url" value={posterurl} onChange={e=>setPosterurl(e.target.value)}  className="form-control" required />
            </div>



            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        
      </div>
     

     
   </div>
   
   </div>
  )
}


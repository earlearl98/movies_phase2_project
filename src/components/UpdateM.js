import React, {useState} from 'react'
import Swal from "sweetalert2"
export default function UpdateM({moviex}) {

  const[title,setTitle] = useState()
  const[overview, setOverview] = useState()
  const[posterurl, setPosterurl] = useState()

function movieSubmit(e){
  e.preventDefault();
    
  fetch(`https://movies-app-4lwq.onrender.com/movies/${moviex.id}`,{
    method: "PATCH",
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
      
      console.log("data",moviex)

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Movie UPDATED successfully!",
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
      
    
    
  };

  return (
    <div className='container mt-5'>

      <h4>CHANGE</h4>


      <div >
        <form onSubmit={movieSubmit}>

            <div className="mb-3">
              <label  className="form-label">Title</label>
              <input type="text" value={title || moviex.title} onChange={e=>setTitle(e.target.value)} className="form-control" required />
              
            </div>

            <div className="mb-3">
              <label className="form-label">OVERVIEW</label>
              <input type="text" value={overview || moviex.overview} onChange={e=>setOverview(e.target.value)}  className="form-control" required/>
            </div>

            <div className="mb-3">
              <label className="form-label">Movie_URL</label>
              <input type="url" value={posterurl || moviex.poster_url } onChange={e=>setPosterurl(e.target.value)}  className="form-control" required />
            </div>



            <button type="submit" class="btn btn-primary">CHANGE</button>
            </form>

        
      </div>
     

     
   </div>
  )
}


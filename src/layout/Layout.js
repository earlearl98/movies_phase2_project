import Navbar from "./Navbar"
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from "./Sidebar"
import '../styles/Layout.css';

export default function Layout() {
  return (

    <div className="bg-dark">
      <Navbar />

      <Sidebar/>

     
      <div className='main-container mid-height 200vh bg-dark text-white'>
      <Outlet />

      </div> 
      


      <Footer />
    </div>
  
    
  )
}


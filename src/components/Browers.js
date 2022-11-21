import React from "react"
import Navbar from './Navbar'
import Projectspage from "../pages/Projectspage";
import Homepage from "../pages/Homepage.js";
import Contactpage from "../pages/Contactpage";
import Newspage from "../pages/Newspage";
import Gallerypage from "../pages/Gallerypage";
import {  
    BrowserRouter as Router,  
    Routes,  
    Route,  
}   from 'react-router-dom'; 

const Browers = () =>{


    return(
        <>
        <Router>
        <Navbar/>

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route path="/projects" element={<Projectspage/>} />
            <Route path="/news" element={<Newspage/>} />
            <Route path="/gallery" element={<Gallerypage/>}/>
            <Route path="/contact" element={<Contactpage/>} />

          </Routes>
        </div>
      </Router>
        </>
    ) 
}
export default Browers
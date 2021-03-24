import React from "react";
import linkedIn from "../linkedin.jpg";
//React FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar(){
    
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
              {/* <a className="navbar-brand" href="#">Conor Murnane</a> */}
              {/* <img src = {linkedIn} alt = "Conor Photo" className = "logo"/> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                {/* creates menu hamburger */}
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto ">
                  <li className="nav-item active">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About Me</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#">Experience</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                 </ul>
                
              </div>
            </div>
          </nav>
       
        )
}
export default NavBar;
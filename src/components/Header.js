import React from "react"
import Typed from "react-typed"
import {SocialIcon} from 'react-social-icons'
import {Link} from "react-scroll"

function Header(){
return(
  <div id = "home" className = "header-wrapper">
      <div className = "main-info">
           <h1>Conor Murnane</h1>
          {/* <h2>Software Engineer </h2> */}
          <Typed 
            className = "typed-text"
            strings = {["Software Engineer", "Javascript", "React", "Redux", "Ruby on Rails", "HTML", "CSS", "PostgreSQL", "SQLite", "Git", "Heroku", "Netlify" ]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
          <Link smooth = {true} to="contact" className= "btn-main-info" href="#">Contact Me</Link>

      </div>
  </div>
)
}

export default Header;
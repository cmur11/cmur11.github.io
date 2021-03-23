import React from "react"
import Typed from "react-typed"

function Header(){
return(
  <div className = "header-wrapper">
      <div className = "main-info">
          <h1>Software Engineer </h1>
          <Typed 
            className = "typed-text"
            strings = {["Welcome!", "My name is Conor Murnane and I am a software engineer", "Please check out my page!" ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <a href = "#" className= "btn-main-info">Contact Me</a>
      </div>
  </div>
)
}

export default Header;
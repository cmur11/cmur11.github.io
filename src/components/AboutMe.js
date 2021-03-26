import React from "react";
import Me from "../github.jpg"
function AboutMe(){
    return(
        <div id = "about" className= "container py-5">
            <div className = "row">
                <div className= "col-lg-6 col-xm-12">
                    {/* mb-5 and other vlaues bootstrap values */}
                    <div className = "photo-wrap mb-5">
                        <img className = "profile-img" src = {Me} alt = "author" />
                    </div>
                </div>
                <div className= "col-lg-6 col-xm-12">
                    <h1 className= "about-heading">About Me</h1>
                    <p>
                        I am a full stack web developer with experience in Javascript, React, and Ruby on Rails. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>

            </div>

        </div>

    )
}
export default AboutMe;
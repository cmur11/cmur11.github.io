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
                    Full stack web developer with a passion for building projects that are used routinely. 
                    Experienced building applications in Ruby, Rails, JavaScript, and React. 
                    Former project manager and finance professional who’s eager to enhance a company’s user experience. 
                    </p>
                </div>

            </div>

        </div>

    )
}
export default AboutMe;
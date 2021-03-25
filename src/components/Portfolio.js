import React from "react"
import TenantTruths from "../projectImages/TenantTruths.png"
import Breathe from "../projectImages/Breathe.png"
import Clothzilla from "../projectImages/Clothzilla.png"
// FONT AWESOME
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons"
// REACT POP UP BOX
import {PopupboxManager,PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

function Portfolio(){

// Tenant Truths
const openPopupboxTenantTruths = () => {
    const content = (

        <>
        <img className = "portfolio-image-popupbox" src = {TenantTruths} alt = "Tenant Truths Application" />
        <p className = "popup-desc">
        A react/rails application inspired by StreetEasy and Yelp, this application allows users to review, 
        rate, and upload photos of apartment listings to ensure prospective tenants have transparency into apartments
        </p>
        <b className = "link-desc">Netlify:</b><a className = "hyper-link" onClick = {() => window.open("https://tenanttruths.netlify.app/")}>https://tenanttruths.netlify.app/</a><br></br>
        <b className = "link-desc">GitHub: Frontend</b> <a className = "hyper-link" onClick = {() => window.open("https://github.com/cmur11/apartmentreviewfrontend")} >https://github.com/cmur11/apartmentreviewfrontend</a><br></br>
        <b className = "link-desc">GitHub: Backend</b> <a className = "hyper-link"onClick = {() => window.open("https://github.com/cmur11/apartmentreview_backend")}>https://github.com/cmur11/apartmentreview_backend</a>
        </>

    )
    PopupboxManager.open({content})
}


    const popupboxConfigTenantTruths = {
        titleBar: {
            enable: false,
            text: "Tenant Truths"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    // Clothzilla
const openPopupboxClothzilla = () => {
    const content = (

        <>
        <img className = "portfolio-image-popupbox" src = {Clothzilla} alt = "Clothzilla Application" />
        <p className = "popup-desc">
        A clothing retail application built on Ruby on Rails and React
        </p>
        {/* <b>Netlify:</b><a className = "hyper-link" onClick = {() => window.open("https://tenanttruths.netlify.app/")}>https://tenanttruths.netlify.app/</a> */}
        <b className = "link-desc">GitHub: Frontend</b> <a className = "hyper-link" onClick = {() => window.open("https://github.com/cmur11/ecom-app-frontend")}>https://github.com/cmur11/ecom-app-frontend</a><br></br>
        <b className = "link-desc">GitHub: Backend</b> <a className = "hyper-link"onClick = {() => window.open("https://github.com/cmur11/ecom_app_backend_api")}>https://github.com/cmur11/ecom_app_backend_api</a>
        </>

    )
    PopupboxManager.open({content})
}


    const popupboxConfigClothzilla = {
        titleBar: {
            enable: false,
            text: "Clothzilla"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


       // Breathe
const openPopupboxBreathe = () => {
    const content = (

        <>
        <img className = "portfolio-image-popupbox" src = {Breathe} alt = "Breathe Application" />
        <p className = "popup-desc">
        A single page meditation application created with Ruby on Rails and vanilla JavaScript that allows users to browse and listen to meditation audios by category
        </p>
        {/* <b>Netlify:</b><a className = "hyper-link" onClick = {() => window.open("https://tenanttruths.netlify.app/")}>https://tenanttruths.netlify.app/</a> */}
        <b className = "link-desc">GitHub: Frontend</b> <a className = "hyper-link" onClick = {() => window.open("https://github.com/cmur11/breathe_frontend" )}>https://github.com/cmur11/breathe_frontend</a><br></br>
        <b className = "link-desc">GitHub: Backend</b> <a className = "hyper-link"onClick = {() => window.open("https://github.com/cmur11/breathe_backend/tree/master")}>https://github.com/cmur11/breathe_backend/tree/master</a>
        </>

    )
    PopupboxManager.open({content})
}


    const popupboxConfigBreathe = {
        titleBar: {
            enable: true,
            // text: "Breathe"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return(
        <div id = "portfolio" className = "portfolio-wrapper"> 
            <div className ="container">
                <h1 className= "text-uppercase text-center py-5">Portfolio</h1>
                    <div className= "image-box-wrapper row justify-content-center">
                        <div className = "portfolio-image-box" onClick = {openPopupboxTenantTruths}>
                            <img className= "portfolio-image" src={TenantTruths} alt= "Tenant Truths Project"/>
                            <div className = "overflow"></div>
                            <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                        </div>
              
                            {/* second project */}
                        <div className = "portfolio-image-box" onClick = {openPopupboxClothzilla}>
                            <img className= "portfolio-image" src={Clothzilla} alt= "Clothzilla Project"/>
                            <div className = "overflow"></div>
                            <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                         </div>
                         {/* third project */}

                        <div className = "portfolio-image-box" onClick = {openPopupboxBreathe}>
                            <img className= "portfolio-image" src={Breathe} alt= "Breathe Project"/>
                            <div className = "overflow"></div>
                            <FontAwesomeIcon className= "portfolio-icon" icon={faSearchPlus} />
                        </div>

                   </div>
            </div>
            <PopupboxContainer {...popupboxConfigTenantTruths} />
            <PopupboxContainer {...popupboxConfigClothzilla} />
            <PopupboxContainer {...popupboxConfigBreathe} />
        </div>
    )
}
export default Portfolio;
import React, {useState} from "react";
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form"

function Contact(){
    const [successMessage, setSuccessMessage] = useState("")
    const {register, handleSubmit, errors} = useForm();

    const serviceID = "service_ftsw45h"
    const templateID = "template_j2bxemw"
    const userID = "user_VABjA8amoJhtsqZIJk1qH"


    function onSubmit (data,r) {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone:data.phone,
                email:data.email,
                subject: data.subject,
                message: data.message
            },
            userID
        )
        r.target.reset()
    }


    function sendEmail(serviceID,templateID , variables, userID) {
       
    
        emailjs.send(serviceID,templateID , variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully!");
          }).catch(err => console.error(`Something when wrong ${err}`));
      
      }

    return(
        <div id = "contact" className= "contact">
            <div className = "text-center">
                <h1> Contact Me</h1>
                <p>Please provide your details below</p>
                <span className = "success-message">{successMessage}</span>
            </div>
            <div className = "container">
                    <form onSubmit = {handleSubmit(onSubmit)}>
                        <div className= "row">
                            <div className = "col-md-6 col xs-12">
                                {/* Name Input */}
                                <div className = "text-center">
                                <input 
                                    type = "text"
                                    className = "form-control"
                                    placeholder = "Name"
                                    name = "name"
                                    ref = {
                                        register({
                                            required: "Please enter your name",
                                            maxLength: {
                                                value: 25,
                                                message: "Please enter a name with fewer than 25 characters"
                                            }
                                        })
                                    }
                                    />
                                <div className = "line"></div>
                                    </div>
                                    <span className = "error-messages">
                                        {errors.name && errors.name.message}
                                    </span>
                                <div className = "text-center">

                                {/* Email Input */}
                                <input 
                                    type = "email"
                                    className = "form-control"
                                    placeholder = "Email"
                                    name = "email"
                                    ref = {
                                        register({
                                            required: "Please add your email",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email"
                                            }
                                        })
                                    }
                                    />
                                <div className = "line"></div>
                                    </div>
                                    <span className = "error-messages">
                                        {errors.email && errors.email.message}
                                    </span>
                                {/* Phone Input */}
                                <div className = "text-center">
                                    <input 
                                        type = "text"
                                        className = "form-control"
                                        placeholder = "Phone Number"
                                        name = "phone"
                                    />
                                    <div className = "line"></div>
                                </div>
                                {/* Subject Input */}
                                <div className = "text-center">

                                    <input 
                                        type = "text"
                                        className = "form-control"
                                        placeholder = "Subject"
                                        name = "subject"
                                        ref = {
                                            register({
                                                required: "Please provide a subject"
                                              
                                            })
                                        }
                                    />
                                <div className = "line"></div>
                            </div>
                            <span className = "error-messages">
                                        {errors.subject && errors.subject.message}
                                    </span>
                        </div>
                            {/* Subject Input */}
                            <div className = "col-md-6 col-xs-12">
                            <div className = "text-center">

                                    <textarea 
                                        type = "text"
                                        className = "form-control"
                                        placeholder = "Message"
                                        name = "message" 
                                        ref = {
                                            register({
                                                required: "Please provide what this is in regards to"
                                            })
                                        }>
                                    </textarea>
                                <div className = "line"></div>
                            </div>
                            <span className = "error-messages">
                                        {errors.message && errors.message.message}
                                    </span>
                                <button className = "btn btn-primary" type = "submit">Contact me</button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Contact;
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './Contactform.css'

const Contactform = () =>{
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
        
      emailjs.sendForm('service_p2xnwsn', 'template_byo25a4', form.current, 'Jg9HfR2hmqP9X4UKK')
        .then((result) => {
            console.log(result.text);
            alert('Thanks we will get back to you')
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return(
        <form className="form-container" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" id="user_name" name="user_name" placeholder="Your name" />
        <label>Email</label>
        <input type="email" id="user_email" name="user_email" />
        <label>Message</label>
        <textarea id="message" name="message" />
        <button type="submit" >Submit</button>
      </form>
        
    )
}

export default Contactform;
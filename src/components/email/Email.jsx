import React, { useRef } from 'react';

export default function Email() {

    const form = useRef(); 
    const sendEmail = (e) => { 
        e.preventDefault(); 
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, 
            form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => { alert('message sent successfully...'); 
            console.log(result.text);
         }, 
         (error) => { console.log(error.text); });
         };
          
    return (
        <div>
            <h2>Contact Form</h2>
            <form className='cf'  ref={form} onSubmit={sendEmail}>
                <div className='half left cf'>
                    <input type='text' placeholder='Name' name='user_name' />
                    <input type='email' placeholder='Email address' name='user_email' />
                </div>
                <div className='half right cf'>
                    <textarea name='message' type='text' placeholder='Message'></textarea>
                </div>
                <input type='submit' value='Submit' id='input-submit' />
            </form>
        </div>);

}
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

export default function Email() {
   
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_11i6ecf', 'template_11i6ecf', form.current, 'e7n4vc_R24IMqBV8Y'
           )
            .then((result) => {
                alert('message sent successfully...');
                form.current.reset();
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
    };

    return (
        <div className= "contactForm">
            <h2>Contact Form</h2>
            <form className='cf' ref={form} onSubmit={sendEmail}>
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
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ujzye8j', 'template_2m8tpyt', form.current, 'eg1y4YWHkWCZ6Rcfv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };

    return (
        <>
            <Nav />
            <section>
                <h2>Contact</h2>
                <h1>Email with news, feedback, questions, tell a joke</h1>

                <div className='contact'>
                    <form ref={ form } onSubmit={ sendEmail }>
                        <input type="text" name='name' placeholder='Full Name' required />
                        <input type="email" name="email" placeholder='Email' required />
                        <textarea name='message' rows='8' placeholder='Message' required></textarea>
                        <button type='submit' className='btn'>Send Message</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;
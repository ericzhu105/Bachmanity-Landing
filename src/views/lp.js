import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './lp.css'
import { Navbar } from './Components/Navbar'
import GetUpdates from './Components/GetUpdates'
import { Footer } from './Components/Footer'
import { useState } from 'react'

const LP = (props) => {

    AOS.init({ duration: 500, once: true })

    const [submitted, setSubmitted] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        // check if request was successful
        if (e.target[0].value != '') {
            setSubmitted(true);
            console.log('success');
        }
    }

    return (
        <div className="lp-container">
            <Helmet>
                <title>LP - Bachmanity Capital</title>
                <meta property="og:title" content="LP - Bachmanity Capital" />
            </Helmet>
            <Navbar />
            <div className="lp-container01" data-aos="fade-in">
                <h1 className="lp-text07">Become An LP</h1>
                <span>
                    Join our network of investors today!
                </span>
            </div>
            <div className="lp-box" data-aos="fade-in">
            {!submitted && <form onSubmit={submit} action="https://getform.io/f/73bdb946-e45e-40f4-9af7-9815556cba9d" method="POST">
                <input type="text" name="name" placeholder="Name" className="lp-input" />
                <input type="email" name="email" placeholder="Email" className="lp-input" />
                <input type="text" name="job" placeholder="Occupation" className="lp-input" />
                <button type="submit" className="lp-button">Submit</button>
                </form>}
                {submitted && (
                        <span style={{fontSize: "1.25rem", color:"white", borderTop: "1px solid white",  borderBottom: "1px solid white",padding: "10px"}}>Thanks for reaching out. Expect an email from us soon!</span>
                    )}
            </div>
            <GetUpdates />
            <Footer />
        </div>
    )
}

export default LP
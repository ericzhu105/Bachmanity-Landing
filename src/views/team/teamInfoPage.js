import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './teamInfoPage.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import GetUpdates from '../Components/GetUpdates'

const TeamInfoPage = ({name, title, bio, image, twitter, linkedin}) => {
    AOS.init({duration: 1000, once: true})

  return (
    <div className="container">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Bachmanity Capital is a $20M fund to empower passionate entrepreneurs to “make the world a better place”" />
        <title>Bachmanity Capital</title>
        <meta property="og:title" content="BachmanityCapital" />
      </Helmet>
      <Navbar />
      <div className="info-container" data-aos="fade-up">
        <div className='info-titles'>
          <div className='info-titles01' data-aos="fade-up">
            <span className="info-text01">{ name }</span>
            <span className='hidden-text-info'>{ title }</span>
            <div className="socials" data-aos="fade-up">
              <a href={ twitter }><img src={"/twitter.svg"} className="twitter" alt="twitter" /></a>
              <a href= { linkedin }><img src={"/link.svg"} className="link" alt="link" /></a>
            </div>
          </div>
          <img src={`/${ image }`} className="info-pic" />
        </div>
        <div className="info-titles" data-aos="fade-up">
          <span className="info-texts01">{ title }</span>
          <span className="info-texts02">{ bio }</span>
        </div>
      </div>
      <GetUpdates />
      <Footer />
    </div>
  )
}

export default TeamInfoPage
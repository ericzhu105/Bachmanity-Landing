import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './team.css'
import { Navbar } from './Components/Navbar'
import GetUpdates from './Components/GetUpdates'
import { Footer } from './Components/Footer'
import { useState, useEffect } from 'react';

const Team = (props) => {

  AOS.init({ duration: 500, once: true, easing: 'ease-in-out', startEvent: 'load', disableMutationObserver: false });
  AOS.refresh(true);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // List of image URLs
    const imageUrls = [
      '/elam.png',
      '/eric.png',
      '/chuck.png',
      '/kris.png',
      '/gleb.png',
      '/patrick.png',
      '/joel.png',
      '/alex.png',
      '/brandon.png',
      '/ian.png',
      '/conor.png',
      "/tim.jpg",
      "/kristinw.jpeg",
      "maria.jpeg"
    ];

    const images = [];
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages++;
      if (loadedImages === imageUrls.length) {
        setImagesLoaded(true);
      }
    };

    // Preload images
    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = handleImageLoad;
      images.push(img);
    });

    // Clean up
    return () => {
      images.forEach((img) => img.removeEventListener('load', handleImageLoad));
    };
  }, []);

  return (
    <div className="team-container">
      <Helmet>
        <title>Team - Bachmanity Capital</title>
        <meta property="og:title" content="Team - BachmanityCapital" />
      </Helmet>
      <Navbar />
      <div className="team-container01" data-aos="fade-in">
        <h1 className="team-text07">Our Partners</h1>
        <span className="team-text08">
          Founded by Two Gen Z Operators, Technical Founders, and Angel
          Investors
        </span>
      </div>

      <div className='holder'>
        <div className="team-separator"></div>
        <div className="team" data-aos="move">
          <TeamMember name="Christian Elam" title="Founding General Partner" image="headshots/elam.png" link="/investors/Christian-Elam" data-aos-anchor=".team3" />
          <TeamMember name="Eric Zhu" title="General Partner" image="headshots/eric.png" link="/investors/eric-zhu" />
          <TeamMember name="Gleb Chuvpilo" title="Investment & Strategy Advisor" image="headshots/gleb.png" link="/investors/Gleb-Chuvpilo" fontSize0={"15px"} />
          <TeamMember name="Tim Chrisman" title="Space & Defense Advisor" image="headshots/tim.jpg" link="/investors/Tim-Chrisman" fontSize={'1.3rem'} />
        </div>
        <div className="team team3" data-aos="move">
          <TeamMember name="Ellen McCarthy" title="National Security Advisor" image="headshots/ellen.png" link="/investors/Ellen-McCarthy" />
          <TeamMember name="Danny Ludeman" title="Investment Advisor" image="headshots/danny.jpg" link="/investors/Danny-Ludeman" />
          <TeamMember name="Dr. Christyl Johnson" title="Space Advisor" image="headshots/christyl.jpg" link="/investors/Christyl-Johnson" />
          <TeamMember name="Alex Cornell du Houx" title="Defense & Energy Advisor" image="headshots/alex.png" link="/investors/Alex-Cornell" fontSize={'1.3rem'} />
        </div>
        <div className="team team4" data-aos="move">
          <TeamMember name="Kristin Wood" title="National Security Advisor" image="headshots/kristinw.png" link="/investors/Kristin-Wood" />
          <TeamMember name="Patrick Morselli" title="Growth & Operations Advisor" image="headshots/patrick.png" link="/investors/Patrick-Morselli" />
          <TeamMember name="Jody Weiss" title="Strategy & Impact Advisor" image="headshots/jody.jpg" link="/investors/Jody-Weiss" />
          <TeamMember name="Dr. Joel Palathinkal" title="Strategy Advisor" image="headshots/joel.png" link="/investors/Joel-Palathinkal" />
        </div>
        <div className="team team5" data-aos="move">
          <TeamMember name="Maria Leister, JD" title="Bioethics/Genomics Advisor" image="headshots/maria.png" link="/investors/Maria-Leister" />
        </div>
      </div>
      <GetUpdates />
      <Footer />
    </div>
  )
}

const TeamMember = ({ name, title, image, link, fontSize, fontSize0 }) => {
  fontSize = fontSize || '1.5rem'
  fontSize0 = fontSize0 || '16px'
  return (
    <div className="team-info-container">
      <a href={link}><img src={`/${image}`} className='team-image' alt="image" /></a>
      <div className='team-member-info'>
        <div className='team-member-name'>
          <span className="team-name" style={{ fontSize: fontSize }}>{name}</span>
          <span className="team-title" style={{ fontSize: fontSize0 }}>{title}</span>
        </div>
        <a href={link}>
          <div className='team-arrow-container'>
            <svg className="team-arrow" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.41663 16.4295L15.5833 7.26288M15.5833 7.26288H6.41663M15.5833 7.26288V16.4295" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}


export default Team
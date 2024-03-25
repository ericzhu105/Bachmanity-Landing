import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './portfolio.css'
import { Navbar } from './Components/Navbar'
import GetUpdates from './Components/GetUpdates'
import { Footer } from './Components/Footer'

const companies = [
  { name: 'Housr', href: 'https://www.housrapp.co.uk/', image: '/companies/housr.svg' },
  {name: 'Interlune', href: 'https://www.interlune.space/', image: '/companies/interlune.svg'},
  {name: 'Aviato', href:"https://www.aviato.co/", image: '/companies/aviato.svg'},
  {name: 'Inversion', href:"https://www.inversion.co/", image: '/companies/inversion.svg'},
  { name: 'Promly', href: 'https://www.promly.org/', image: '/companies/promly.svg' },
  { name: 'Pipe', href: 'https://pipe.com/', image: '/companies/pipe.svg' },
  { name: 'Radian Aerospace', href: 'https://www.radianaerospace.com/', image: '/companies/radian.svg' },
  { name: 'JuneShine', href: 'https://juneshine.com/', image: '/companies/june.svg', className: 'june' },
  { name: 'Rentberry', href: 'https://rentberry.com/', image: '/companies/rentberry.svg' },
];

const Portfolio = (props) => {

  AOS.init({ duration: 500, once: true, easing: 'ease-in-out', startEvent: 'load', disableMutationObserver: false });
  AOS.refresh(true);

  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Portfolio - Bachmanity Capital</title>
        <meta property="og:title" content="Portfolio - Bachmanity Capital" />
      </Helmet>
      <Navbar />
     
      <div className="portfolio-container01" data-aos="fade-in">
        <h1 className="portfolio-text07">Portfolio</h1>
        <span className="portfolio-text08">
          Some companies we&apos;ve backed
        </span>

      </div>
      
      {/* <div className="grid-container" data-aos="fade-in">
        <div className="grid-item"><a href='https://www.promly.org/' target="_blank"><img src={"/companies/promly.svg"} alt="image"/></a></div>
        <div className="grid-item"><a href='https://pipe.com/' target='_blank'><img src={"/companies/pipe.svg"} alt="image"/></a></div>
        <div className="grid-item"><a href='https://www.housrapp.co.uk/' target='_blank'><img src={"/companies/housr.svg"} alt="image"/></a></div>
        <div className="grid-item"><a href='https://www.radianaerospace.com/' target='_blank'><img src={"/companies/radian.svg"} alt="image"/></a></div>
        <div className="grid-item"><a href='https://juneshine.com/' target='_blank'><img className="june" src={"/companies/june.svg"} alt="image"/></a></div>
        <div className="grid-item"><a href='https://rentberry.com/' target='_blank'><img src={"/companies/rentberry.svg"} alt="image"/></a></div>
      </div> */}

      {/* create a new grid-container that traveres the area instead of manually showing each grid */}
      <div className="grid-container" data-aos="fade-in">
        {companies.map((company) => (
          <div className="grid-item" key={company.name}>
            <a href={company.href || '#'} target="_blank">
              <img src={company.image} alt={company.name} className={company.className} /> 
            </a>
          </div>
        ))}
      </div>

      <GetUpdates />
      <Footer />
    </div>
  )
}

export default Portfolio

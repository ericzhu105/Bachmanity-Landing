import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Portfolio - Bachmanity Capital</title>
        <meta property="og:title" content="Portfolio - Bachmanity Capital" />
      </Helmet>
      <header className="navbar-interactive">
        <span className="nav-text"><a href='/'>BACHMANITY CAPITAL</a></span>
        <div className="desktop-menu">
          <nav className="nav-links">
            <Link to="/" className="navlink textUnderline">
              Home
            </Link>
            <Link to="/team" className="navlink1 textUnderline">
              Team
            </Link>
            <Link to="/portfolio" className="navlink2">
              Portfolio
            </Link>
            <span className="portfolio-text01 textUnderline">Pitch Us</span>
          </nav>
        </div>
      </header>
      <div className="portfolio-container01">
        <h1 className="portfolio-text07">Portfolio</h1>
        <span className="portfolio-text08">
          Some companies we&apos;ve backed
        </span>
      </div>
      <div className="grid-container">
        <div className="grid-item"><a href='https://www.promly.org/' target="_blank"><img src={"/promly.svg"} alt="image"/></a></div>
        <div className="grid-item"><a href='https://pipe.com/' target='_blank'><img src={"/pipe.svg"} alt="image"/></a></div>
        <div className="grid-item"><a href='https://www.housrapp.co.uk/' target='_blank'><img src={"/housr.svg"} alt="image"/></a></div>
        <div className="grid-item"><a href='https://www.radianaerospace.com/' target='_blank'><img src={"/radian.svg"} alt="image"/></a></div>
        <div className="grid-item"><a href='https://juneshine.com/' target='_blank'><img src={"/june.svg"} alt="image"/></a></div>
        <div className="grid-item"><a href='https://rentberry.com/' target='_blank'><img src={"/rentberry.svg"} alt="image"/></a></div>
      </div>
      <div className="portfolio-get-updates">
        <div className="portfolio-container06">
          <span className="portfolio-text09">Get Updates</span>
          <span className="portfolio-text10">
            <span>
              We occasionally send updates about our portfolio companies,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              where we are, and what we&apos;re up to. Join our list below. You
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>can expect an email about once every quarter!</span>
          </span>
        </div>
        <div className='get-input'>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email Address"
          className="portfolio-textinput input"
        />
        <button className="subscribe">Subscribe</button>
        </div>
      </div>
      <footer className="portfolio-footer">
        <div className="portfolio-container07">
          <div className="portfolio-logo1">
            <span className="portfolio-text16">BACHMANITY CAPITAL</span>
            <span className="portfolio-text17">
              <br></br>
              <span>
                A $20M fund to empower passionate
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>entrepreneurs to “make the world a better</span>
              <br></br>
              <span> place&quot;</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
          <div className="portfolio-links-container">
            <div className="portfolio-container08">
              <div className="portfolio-product-container">
                <span className="portfolio-text26"><a href='/'>Home</a></span>
                <span className="portfolio-text27">About</span>
                <span className="portfolio-text28">Careers</span>
              </div>
              <div className="portfolio-company-container">
                <span className="portfolio-text29"><a href='/portfolio'>Portfolio</a></span>
                <span className="portfolio-text30"><a href='/team'>Team</a></span>
                <span className="portfolio-text31">Contact</span>
              </div>
            </div>
            <div className="portfolio-company-container1">
              <span className="portfolio-text32">Terms of Service</span>
              <span className="portfolio-text33">
                <span>Conduct</span>
                <br></br>
              </span>
              <span className="portfolio-text36">Disclosures</span>
            </div>
          </div>
        </div>
        <div className="portfolio-separator"></div>
        <div className='page-end'>
          <div>
        <span className="portfolio-text37">
          Copyright © 2023 Bachmanity Capital LLC. All rights reserved
        </span>
        </div>
        <div className="portfolio-container09">
          <a href='https://twitter.com/BachmanityFund'><img src={"/twitter.svg"} className="portfolio-twitter" alt="twitter" /></a>
          <a href='https://www.linkedin.com/company/bachmanity-capital/'><img src={"/link.svg"} className="portfolio-link" alt="link" /></a>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio

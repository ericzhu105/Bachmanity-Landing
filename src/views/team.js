import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './team.css'

function showImage(e){
}

function hideImage(e){
}

const Team = (props) => {
  return (
    <div className="team-container">
      <Helmet>
        <title>Team - Bachmanity Capital</title>
        <meta property="og:title" content="Team - BachmanityCapital" />
      </Helmet>
      <header className="navbar-interactive">
        <span className="nav-text"><a href='/'>BACHMANITY CAPITAL</a></span>
        <div className="desktop-menu">
          <nav className="nav-links">
            <Link to="/" className="navlink textUnderline">
              Home
            </Link>
            <Link to="/team" className="navlink1">
              Team
            </Link>
            <Link to="/portfolio" className="navlink2 textUnderline">
              Portfolio
            </Link>
            <span className="team-text01 textUnderline">Pitch Us</span>
          </nav>
        </div>
      </header>
      <div className="team-container01">
        <h1 className="team-text07">Our Partners</h1>
        <span className="team-text08">
          Founded by Two Gen Z Operators, Technical Founders, and Angel
          Investors
        </span>
      </div>
      <div className="team">
        <div className="team-separator"></div>
        <div className="team-elam" id="team-elam" onMouseOver={showImage} onMouseOut={hideImage}>
          <div className="team-container03">
            <span className="elam-text01">Christian Elam</span>
          </div>
          <img src={"/elam.png"} alt="image" id="elam-image" className='elam-image'/>
          <span className="elam-text02">FOUNDING GENERAL PARTNER</span>
          <button className="elam-arrow">⟶</button>
        </div>
        <div className="team-separator"></div>
        <div className="team-eric">
          <div className="team-container05">
            <span className="eric-text01">Eric Zhu</span>
          </div>
          <img src={"/eric.png"} alt="image" id="eric-image" className='eric-image'/>
          <span className="eric-text02">GENERAL PARTNER</span>
          <button className="eric-arrow">⟶</button>
        </div>
        <div className="team-separator"></div>
        <div className="team-chuck">
          <div className="team-container07">
            <span className="chuck-text01">Chuck Figueroa</span>
          </div>
          <img src={"/chuck.png"} alt="image" id="chuck-image" className='chuck-image'/>
          <span className="chuck-text02">PARTNER</span>
          <button className="chuck-arrow">⟶</button>
        </div>
        <div className="team-separator"></div>
        <div className="team-kris">
          <div className="team-container09">
            <span className="kris-text01">Kristin Stueben</span>
          </div>
          <img src={"/kris.png"} alt="image" id="kris-image" className='kris-image'/>
          <span className="kris-text02">PARTNER</span>
          <button className="kris-arrow">⟶</button>
        </div>
      </div>
      <div className="team-get-updates">
        <div className="team-container10">
          <span className="team-text17">Get Updates</span>
          <span className="team-text18">
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
          className="team-textinput input"
        />
        <button className="subscribe">Subscribe</button>
        </div>
      </div>
      <footer className="team-footer">
        <div className="team-container11">
          <div className="team-logo1">
            <span className="team-text24">BACHMANITY CAPITAL</span>
            <span className="team-text25">
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
          <div className="team-links-container">
            <div className="team-container12">
              <div className="team-product-container">
                <span className="team-text34"><a href='/'>Home</a></span>
                <span className="team-text35">About</span>
                <span className="team-text36">Careers</span>
              </div>
              <div className="team-company-container">
                <span className="team-text37"><a href='/portfolio'>Portfolio</a></span>
                <span className="team-text38"><a href='/team'>Team</a></span>
                <span className="team-text39">Contact</span>
              </div>
            </div>
            <div className="team-company-container1">
              <span className="team-text40">Terms of Service</span>
              <span className="team-text41">
                <span>Conduct</span>
                <br></br>
              </span>
              <span className="team-text44">Disclosures</span>
            </div>
          </div>
        </div>
        <div className="team-separator"></div>
        <div className='page-end'>
          <div>
        <span className="text-text45">
          Copyright © 2023 Bachmanity Capital LLC. All rights reserved
        </span>
        </div>
        <div className="team-container13">
          <a href='https://twitter.com/BachmanityFund'><img src={"/twitter.svg"} className="team-twitter" alt="twitter" /></a>
          <a href='https://www.linkedin.com/company/bachmanity-capital/'><img src={"/link.svg"} className="team-link" alt="link" /></a>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default Team

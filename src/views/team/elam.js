import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './elam.css'

const Elam = (props) => {

  const showBurger = () => {
    document.querySelector('.mobile-menu').style.display = 'flex'
  }

  const hideBurger = () => {
    document.querySelector('.mobile-menu').style.display = 'none'
  }

  return (
    <div className="container">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Bachmanity Capital is a $20M fund to empower passionate entrepreneurs to “make the world a better place”" />
        <title>Bachmanity Capital</title>
        <meta property="og:title" content="BachmanityCapital" />
      </Helmet>
      <header className="navbar-interactive">
        <span className="nav-text"><a href='/'><img src="/logo.svg"></img></a></span>
        <div className="desktop-menu">
          <nav className="nav-links">
            <Link to="/" className="navlink">
              Home
            </Link>
            <Link to="/team" className="navlink1 textUnderline">
              Team
            </Link>
            <Link to="/portfolio" className="navlink2 textUnderline">
              Portfolio
            </Link>
            <span className="text01 textUnderline">Pitch Us</span>
          </nav>
        </div>
        <div className="mobile-burger-menu">
          <svg viewBox="0 0 1024 1024" className="mobile-icon" onClick={showBurger}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
          {/* <input viewBox="0 0 1024 1024" type="image" src="/menu.svg" className="mobile-burger-menu" onClick={showBurger}></input> */}
        </div>
        <div className="mobile-menu">
          <div className="mobile-nav">
            <div className="mobile-top">
              <div className="mobile-close-menu">
                <svg viewBox="0 0 1024 1024" className="mobile-icon02" onClick={hideBurger}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="mobile-links1">
              <Link to="/" className="mobile-text02">Home</Link>
              <Link to="/team" className="mobile-text03">Team</Link>
              <Link to="/portfolio" className="mobile-text04">Portoflio</Link>
              <span className="mobile-text05">Pitch Us</span>
            </nav>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="mobile-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="mobile-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="mobile-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="elam-container">
        <div className='elam-titles'>
          <div className='elam-titles01'>
            <span className="elam-text01">Christian Elam</span>
            <span className='hidden-text-elam'>Founding General Partner</span>
            <div className="socials">
              <a href='https://twitter.com/ChristianElam6'><img src={"/twitter.svg"} className="home-twitter" alt="twitter" /></a>
              <a href='https://www.linkedin.com/in/christian-elam-4b0a471a8/'><img src={"/link.svg"} className="home-link" alt="link" /></a>
            </div>
          </div>
          <img src={"/elam-large.png"} className="elam-pic" />
        </div>
        <div className="elam-titles">
          <span className="elam-texts01">Founding General Partner</span>
          <span className="elam-texts02">Christian is a 20 year old serial entrepreneur and investor. He is the youngest ever alumni from the COBE program at UC Berkeley-Haas School of Business, and graduated this summer from Cornell for business strategy. He was a self taught programmer and started launching apps on the App Store at 14, one of which reached the Top Charts within eight hours. Christian decided to cofound a couple himself in the social & e-commerce space. His curiosity for investing led Christian to teach himself to become a successful day trader in high school, as well as an angel investor and VC at Sutton Capital and investor with Gaingels. Christian has advised many startups and accelerators across various industries. On a personal note, Christian is very active in the mental health space and leading several congressional efforts for mental health and youth entrepreneurship. </span>
        </div>
      </div>
      <div className="get-updates">
        <div className="get-updates-container">
          <span className="sub-text">Get Updates</span>
          <span className="sub-text01">
          We occasionally send updates about our portfolio companies, where we are, and what we're up to. Join our list below. You can expect an email about once every quarter!
          </span>
        </div>
        <div className='get-input'>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            className="textinput input"
          />
          <button className="subscribe">Subscribe</button>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <span className="footer-text"><img src="/logo.svg"></img></span>
            <span className="footer-text71">
              <br />
              <span>
                A $20M fund to empower passionate
                <span dangerouslySetInnerHTML={{ __html: ' ' }} />
              </span>
              <br />
              <span>entrepreneurs to “make the world a better</span>
              <br />
              <span> place&quot;</span>
              <span dangerouslySetInnerHTML={{ __html: ' ' }} />
              <span dangerouslySetInnerHTML={{ __html: ' ' }} />
            </span>
          </div>
            <div className="footer-container35">
              <div className="footer-company-container">
                <span className="footer-text80">
                  <a href="/">Home</a>
                </span>
                <span className="footer-text81">About</span>
                <span className="footer-text82">Careers</span>
              </div>
              <div className="footer-company-container">
                <span className="footer-text83">
                  <a href="/portfolio">Portfolio</a>
                </span>
                <span className="footer-text84">
                  <a href="/team">Team</a>
                </span>
                <span className="footer-text85">Contact</span>
              </div>
              <div className="footer-company-container" style={{marginRight: 0}}>
              <span className="footer-text86">Terms of Service</span>
              <span className="footer-text87">
                <span>Conduct</span>
                <br />
              </span>
              <span className="footer-text90">Disclosures</span>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <div className="page-end">
          <div>
            <span className="footer-text91">
              Copyright © 2023 Bachmanity Capital LLC. All rights reserved
            </span>
          </div>
          <div className="footer-container36">
            <a href="https://twitter.com/BachmanityFund">
              <img src={"/twitter.svg"} className="footer-twitter" alt="twitter" />
            </a>
            <a href="https://www.linkedin.com/company/bachmanity-capital/">
              <img src={"/link.svg"} className="footer-link" alt="link" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Elam

import React from 'react'
import { Link } from 'react-router-dom'

import { Fade } from "react-awesome-reveal";

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {

  const showBurger = () => {
    document.querySelector('.mobile-menu').style.display = 'flex'
  }

  const hideBurger = () => {
    document.querySelector('.mobile-menu').style.display = 'none'
  }

  return (
    <div className="home-container">
      <Helmet>
        <title>Bachmanity Capital</title>
        <meta property="og:title" content="BachmanityCapital" />
      </Helmet>
      <header className="navbar-interactive" id="navbar-interactive">
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
            <span className="home-text01 textUnderline">Pitch Us</span>
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
      <div className="home-banner">
        <h1 className="home-text07">
            Empowering entrepreneurs to<br></br>
            
            build technology that transforms<br></br>
    
          industries<br></br>
        </h1>
        <span className="home-text13">
          <span>
            An early stage fund created by Gen Z operators &amp; seasoned
            veterans to support innovation, and to empower the next generations
            of entrepreneurs advancing humanity.
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
        <div className="home-btn-group">
          <button className="home-button button">Get In Touch 🡭</button>
          <Link to="/portfolio"><button className="home-button1 button">Investment Portfolio 🡭</button></Link>
        </div>
      </div>
      <img
        alt="image"
        src="/banner.svg"
        className="home-image"
      />
      <div className="home-who-we-are">
        <div className="home-container01">
          <span className="home-text16">
            <span>Who We Are</span>
            <br></br>
            <br></br>
          </span>
          <div className="home-text17">Bachmanity Capital is a Seed &amp; Series A focused generalist fund
            focusing on exciting opportunities with established brands that have
            a proven track record of pushing the limits of innovation and
            achieving success. We leverage our massive A-list network of other
            distinguished investors, esteemed universities, celebrities/pro-athletes, influential members of Congress. By
            fostering a thriving celebrities/pro-athletes, influential members of Congress. By
            fostering a thriving</div> 
          <button className="home-button2 button">More About Us 🡭</button>
        </div>
        <span className="home-text20">
          <span>
            Bachmanity Capital is a Seed &amp; Series A focused generalist fund
            focusing on<br></br>exciting opportunities with established brands that have
            a proven track<br></br>record of pushing the limits of innovation and
            achieving success. We leverage<br></br>our massive A-list network of other
            distinguished investors, esteemed<br></br>universities,<br></br>
          </span>
          <span>
            celebrities/pro-athletes, influential members of Congress. By
            fostering a thriving<br></br>
          </span>
          <span>
            ecosystem that transcends generations, we endeavor to bridge the gap
            in<br></br>the venture world, while creating entrepreneurial opportunities
            for the youth in underrepresented communities.
          </span>
        </span>
      </div>
      <div className="home-investment-criteria">
        <span className="home-text24">Investment Criteria</span>
        <div className="home-container02">
          <div className="separator" style={{ marginBottom: 16 }}></div>
          <div className="industry-container">
            {/* <div className="home-container04"> */}
            <div className="home-container05">
              <span className="home-text25">01</span>
              <span className="home-text26">Industry Focus</span>
            </div>
            <span className="arrow">↓</span>
            {/* </div> */}
          </div>
          <div className="industry-text">
            <span className="home-text33">
              We’re a generalist fund with past experience investing in Deep Tech, Space, B2B, Fintech, Consumer, AI, Prop Tech, Mental Health, and Entertainment
            </span>
          </div>
          <div className="separator" style={{ marginTop: 16, marginBottom: 16 }}></div>
          <div className="stage-container">
            {/* <div className="home-container07"> */}
            <div className="home-container08">
              <span className="home-text28">02</span>
              <span className="home-text29">Stage</span>
            </div>
            <span className="arrow">↓</span>
            {/* </div> */}
          </div>
          <div className="stage-text">
            <span className="home-text33">
              Our focus is Seed & Series A companies that have shown promising growth and traction in the market. We are also allocation 25% to later stage companies that have a proven track record of pushing the limits of innovation and achieving success
            </span>
          </div>
          <div className="separator" style={{ marginTop: 16, marginBottom: 16 }}></div>
          <div className="team-exp-container">
            {/* <div className="inv-criteria-container"> */}
            <div className="home-container11">
              <span className="home-text31">03</span>
              <span className="home-text32">Team Experience</span>
            </div>
            <span className="arrow">↓</span>
            {/* </div> */}
          </div>
          <div className="team-exp-text" style={{ marginBottom: 60 }}>
            <span className="home-text33">
              Founding team must be comprised of ambitious operators with
              first hand experience building and scaling in their industry.
              We look for people who are passionate, highly-motivated, and
              proven to execute on their goals. Founder-investor fit is
              important to us -- we believe in establishing close
              relationships with our founders, and growing with them.
            </span>
          </div>
        </div>
      </div>
      <div className="home-our-investments">
        <span className="home-text35">Our Investments</span>
        <span className="home-text36">
          <span>
            We invest in entrepreneurs who facilitate product-led growth, who
            have specific
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>insights and passions that equip them to solve problems.</span>
        </span>
        <div className="home-container15">
          <div className="invest-separator"></div>
            <div className="home-container17">
                <span className="home-text40">Fund Size</span>
              <span className="home-text41">$20M</span>
            </div>
          <div className="invest-separator"></div>
            <div className="home-container20">
                <span className="home-text42">Companies</span>
              <span className="home-text43">06</span>
            </div>
          <div className="invest-separator"></div>
            <div className="home-container23">
                <span className="home-text44">Average Check Size</span>
              <span className="home-text45">$250K</span>
            </div>
        </div>
      </div>
      <div className="home-how-we-add-value">
        <div className="home-container25">
          <div className="home-container26">
            <span className="home-text46">
                How We Add
                Value™
            </span>
          </div>
          <span className="home-text50">
            Our backgrounds as developers, operators, and founders fuel our
            obsession with adding real value. We empower ambitious people via
            capital.
          </span>
        </div>
        <div className="separator how-we-add-val"></div>
        <div className="home-container27">
          <div className="home-container28">
            <span className="home-text51">
              Background<sup>01</sup>
            </span>
          </div>
          <span className="home-text54">
            We love founders. As developers, operators, and founders ourselves,
            we&apos;re empathetic to founder&apos;s needs, and appreciative of
            their visions. As young builders, we&apos;re active in communities
            producing the highest growth startups, granting us early access to
            key insights, great deals, and a massive competitive edge.
          </span>
        </div>
        <div className="separator"></div>
        <div className="home-container29">
          <div className="home-container30">
            <span className="home-text55">
              Network<sup>02</sup>
            </span>
          </div>
          <span className="home-text58">
            We have access to a massive network of founders, operators, VCs,
            accelerators, UHNWIs, policymakers, colleges, athletes, influencers
            top executives at big tech, unicorns, and Fortune 500 companies. Our
            network is a key resource we use to add value to our portfolio
            companies, get access to deal flow, co-investment opportunities, and
            subject matter expertise.
          </span>
        </div>
        <div className="separator"></div>
        <div className="home-container31">
          <div className="home-container32">
            <span className="home-text59">
              Ecosystem<sup>03</sup>
            </span>
          </div>
          <span className="home-text62">
            Our passion for community building inspired us to build an ecosystem
            within our fund--for resources founders can use. We support each
            other, tap in to all of our combined networks, like LPs and
            advisors, and act as one unit. We&apos;re excited about startups who
            are building their own ecosystems, and we want to be the first
            involved. We&apos;re fanatic about creating synergies across
            ecosystems.
          </span>
        </div>
      </div>
      <div className="get-updates">
        <div className="get-updates-container">
          <span className="sub-text">Get Updates</span>
          <span className="sub-text01">
              We occasionally send updates about our portfolio companies,
              where we are, and what we&apos;re up to. Join our list below. You
              can expect an email about once every quarter!
          </span>
        </div>
        <div className='get-input'>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address"
            className="home-textinput input"
          />
          <button className="subscribe">Subscribe</button>
          {/* <div className="input-line"></div> */}
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-container34">
          <div className="home-logo1">
            <span className="home-text70"><img src="/logo.svg"></img></span>
            <span className="home-text71">
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
          <div className="home-container35">
            <div className="home-company-container">
              <span className="home-text80"><a href='/'>Home</a></span>
              <span className="home-text81">About</span>
              <span className="home-text82">Careers</span>
            </div>
            <div className="home-company-container">
              <span className="home-text83"><a href='/portfolio'>Portfolio</a></span>
              <span className="home-text84"><a href='/team'>Team</a></span>
              <span className="home-text85">Contact</span>
            </div>
            <div className="home-company-container" style={{ marginRight: 0 }}>
              <span className="home-text86">Terms of Service</span>
              <span className="home-text87">
                <span>Conduct</span>
                <br></br>
              </span>
              <span className="home-text90">Disclosures</span>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <div className='page-end'>
          <div>
            <span className="home-text91">
              Copyright © 2023 Bachmanity Capital LLC. All rights reserved
            </span>
          </div>
          <div className="home-container36">
            <a href='https://twitter.com/BachmanityFund'><img src={"/twitter.svg"} className="home-twitter" alt="twitter" /></a>
            <a href='https://www.linkedin.com/company/bachmanity-capital/'><img src={"/link.svg"} className="home-link" alt="link" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

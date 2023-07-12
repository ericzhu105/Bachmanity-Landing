import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bachmanity Capital</title>
        <meta property="og:title" content="BachmanityCapital" />
      </Helmet>
      <header className="navbar-interactive">
        <span className="nav-text"><a href='/'>BACHMANITY CAPITAL</a></span>
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
      </header>
      <div className="home-banner">
        <h1 className="home-text07">
          <span>
            Empowering entrepreneurs to
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            build technology that transforms
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>industries</span>
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
          <button className="home-button button">Get In Touch</button>
          <button className="home-button1 button">Investment Portfolio</button>
        </div>
      </div>
      <img
        alt="image"
        src="/37f83bbb35c8f6cd80131b7cf733f403-1500w.png"
        className="home-image"
      />
      <div className="home-who-we-are">
        <div className="home-container01">
          <span className="home-text16">
            <span>Who We Are</span>
            <br></br>
            <br></br>
          </span>
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
          <div className="separator" style={{marginBottom: 16}}></div>
          <div className="industry-container">
            {/* <div className="home-container04"> */}
              <div className="home-container05">
                <span className="home-text25">01</span>
                <span className="home-text26">Industry Focus</span>
              </div>
              <span className="arrow">↓</span>
            {/* </div> */}
          </div>
          <div className="separator" style={{marginTop: 16, marginBottom: 16}}></div>
          <div className="stage-container">
            {/* <div className="home-container07"> */}
              <div className="home-container08">
                <span className="home-text28">02</span>
                <span className="home-text29">Stage</span>
              </div>
              <span className="arrow">↓</span>
            {/* </div> */}
          </div>
          <div className="separator" style={{marginTop: 16, marginBottom: 16}}></div>
          <div className="team-exp-container">
            {/* <div className="inv-criteria-container"> */}
              <div className="home-container11">
                <span className="home-text31">03</span>
                <span className="home-text32">Team Experience</span>
              </div>
              <span className="arrow">↓</span>
            {/* </div> */}
          </div>
          <div className="team-exp-text" style={{marginRight: 60}}>
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
          <div className="home-container16">
            <div className="home-container17">
              <div className="home-container18">
                <span className="home-text40">Fund Size</span>
              </div>
              <span className="home-text41">$20M</span>
            </div>
          </div>
          <div className="invest-separator"></div>
          <div className="home-container19">
            <div className="home-container20">
              <div className="home-container21">
                <span className="home-text42">Companies</span>
              </div>
              <span className="home-text43">06</span>
            </div>
          </div>
          <div className="invest-separator"></div>
          <div className="home-container22">
            <div className="home-container23">
              <div className="home-container24">
                <span className="home-text44">Average Check Size</span>
              </div>
              <span className="home-text45">$250K</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-how-we-add-value">
        <div className="home-container25">
          <div className="home-container26">
            <span className="home-text46">
              <span>
                How We Add
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Value™</span>
            </span>
          </div>
          <span className="home-text50">
            Our backgrounds as developers, operators, and founders fuel our
            obsession with adding real value. We empower ambitious people via
            capital.
          </span>
        </div>
        <div className="separator"></div>
        <div className="home-container27">
          <div className="home-container28">
            <span className="home-text51">
              <span>Background<sup>01</sup></span>
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
              <span>Network<sup>02</sup></span>
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
              <span>Ecosystem<sup>03</sup></span>
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
      <div className="home-get-updates">
        <div className="home-container33">
          <span className="home-text63">Get Updates</span>
          <span className="home-text64">
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
          className="home-textinput input"
        />
        <button className="subscribe">Subscribe</button>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-container34">
          <div className="home-logo1">
            <span className="home-text70">BACHMANITY CAPITAL</span>
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
          <div className="home-links-container">
            <div className="home-container35">
              <div className="home-product-container">
                <span className="home-text80"><a href='/'>Home</a></span>
                <span className="home-text81">About</span>
                <span className="home-text82">Careers</span>
              </div>
              <div className="home-company-container">
                <span className="home-text83"><a href='/portfolio'>Portfolio</a></span>
                <span className="home-text84"><a href='/team'>Team</a></span>
                <span className="home-text85">Contact</span>
              </div>
            </div>
            <div className="home-company-container1">
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

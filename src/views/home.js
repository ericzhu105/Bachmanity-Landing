import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import { Navbar } from './Components/Navbar';
import GetUpdates from './Components/GetUpdates';
import { Footer } from './Components/Footer';

const Home = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   window.onload = () => {
  //     setIsLoaded(true);
  //     AOS.init({ duration: 750, once: true, easing: 'ease-in-out' });
  //   };
  // }, []);

  const toggleElement = (selector, show) => {
    const element = document.querySelector(selector);
    if (element) {
      // element.style.display = show ? 'flex' : 'none';
      element.style.opacity = show ? 1 : 0;
      element.style.maxHeight = show ? '100%' : '0';
    }
  };

  const toggleArrow = (selector, rotate) => {
    const arrow = document.querySelector(selector);
    if (arrow) {
      arrow.style.transform = `rotate(${rotate}deg)`;
    }
  };

  const openInfo = (type) => {
    let activeType = null;
    const infoElements = {
      industry: ['.industry-text', '.industry-arrow'],
      stage: ['.stage-text', '.stage-arrow'],
      team: ['.team-exp-text', '.team-arrow']
    };

    const resetAllElements = () => {
      Object.values(infoElements).forEach(([textSelector, arrowSelector]) => {
        toggleElement(textSelector, false);
        toggleArrow(arrowSelector, 0);
      });
      activeType = null;
    };

    return () => {
      if (activeType === type) {
        resetAllElements();
      } else {
        resetAllElements();
        const [textSelector, arrowSelector] = infoElements[type];
        toggleElement(textSelector, true);
        toggleArrow(arrowSelector, 180);
        activeType = type;
      }
    };
  };

  AOS.init({ duration: 750, once: true, easing: 'ease-in-out' });

  return (
    // <div className={`home-container ${isLoaded ? 'loaded' : ''}`}>
    <div className={'home-container'}>
      <Helmet>
        <title>Bachmanity Capital</title>
        <meta property="og:title" content="BachmanityCapital" />
      </Helmet>
      <Navbar />
      <div className="home-banner">
        <h1 className="home-text07" data-aos="move">
          Empowering entrepreneurs to<br></br>

          build technology that transforms<br></br>

          industries<br></br>
        </h1>
        <span data-aos="move" className="home-text13">
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
        <div data-aos="move" className="home-btn-group">
          <a href='mailto:christian@bachmanitycap.com?subject=Bachmanity%20Capital!'><button className="home-button button">Get In Touch <svg className="wide-arrow" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 23" fill="none"> <path d="M6.41675 16.0834L15.5834 6.91675M15.5834 6.91675H6.41675M15.5834 6.91675V16.0834" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg></button></a>
          <Link to="/portfolio"><button className="home-button1 button">Investment Portfolio <svg className="wide-arrow" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 23" fill="none"> <path d="M6.41675 16.0834L15.5834 6.91675M15.5834 6.91675H6.41675M15.5834 6.91675V16.0834" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg></button></Link>
        </div>
      </div>
      <div style={{ width: "100%", height: "100%" }}><img
        alt="image"
        src="/banner.svg"
        className="home-image"
      /></div>
      <div className="home-who-we-are">
        <div className="home-container01">
          <span className="home-text16" data-aos="move" data-aos-anchor=".home-investment-criteria">
            <span>Who We Are</span>
            <br></br>
            <br></br>
          </span>
          <div className="home-text17" data-aos="move" data-aos-anchor=".home-investment-criteria">Bachmanity Capital is a Seed &amp; Series A focused generalist fund
            focusing on exciting opportunities with established brands that have
            a proven track record of pushing the limits of innovation and
            achieving success. We leverage our massive A-list network of other
            distinguished investors, esteemed universities, celebrities/pro-athletes, and influential members of Congress. By
            fostering a thriving celebrities/pro-athletes, and influential members of Congress. By
            fostering a thriving</div>
          <Link to="/team"><button data-aos="move" data-aos-anchor=".home-investment-criteria" className="home-button2 button">More About Us <svg className="wide-arrow" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 23" fill="none"> <path d="M6.41675 16.0834L15.5834 6.91675M15.5834 6.91675H6.41675M15.5834 6.91675V16.0834" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg></button></Link>
        </div>
        <span data-aos="move" className="home-text20" data-aos-anchor=".home-investment-criteria">
          <span>
            Bachmanity Capital is a Seed &amp; Series A focused generalist fund
            focusing on<br></br>exciting opportunities with established brands that have
            a proven track<br></br>record of pushing the limits of innovation and
            achieving success. We leverage<br></br>our massive A-list network of other
            distinguished investors, esteemed<br></br>universities,<br></br>
          </span>
          <span>
            celebrities/pro-athletes, and influential members of Congress. By
            fostering a thriving<br></br>
          </span>
          <span>
            <br></br>ecosystem that transcends generations, we endeavor to bridge the gap
            in<br></br>the venture world while creating entrepreneurial opportunities
            for the youth in underrepresented communities.
          </span>
        </span>
      </div>
      <div className="home-investment-criteria">
        <span className="home-text24" data-aos="fade-left">Investment Criteria</span>
        <div className="home-container02">
          <div className="separator" data-aos="fade-in-right" style={{ marginBottom: 16 }}></div>
          <div className="industry-container" data-aos-delay="200" data-aos="zoom-in" onClick={openInfo("industry")} data-aos-anchor=".home-how-we-add-value">
            {/* <div className="home-container04"> */}
            <div className="home-container05">
              <span className="home-text25">01</span>
              <span className="home-text26">Industry Focus</span>
            </div>
            <span className="arrow industry-arrow">↓</span>
            {/* </div> */}
          </div>
          <div className="industry-text">
            <span className="home-text33">
              We’re a generalist fund with past experience investing in Deep Tech, Space, B2B, Fintech, Consumer, AI, Prop Tech, Mental Health, and Entertainment
            </span>
          </div>
          <div className="separator" data-aos="fade-left" style={{ marginTop: 16, marginBottom: 16 }}></div>
          <div className="stage-container" data-aos-delay="300" data-aos="zoom-in" onClick={openInfo("stage")} data-aos-anchor=".home-how-we-add-value">
            {/* <div className="home-container07"> */}
            <div className="home-container08">
              <span className="home-text28">02</span>
              <span className="home-text29">Stage</span>
            </div>
            <span className="arrow stage-arrow">↓</span>
            {/* </div> */}
          </div>
          <div className="stage-text">
            <span className="home-text33">
              Our focus is Seed & Series A companies that have shown promising growth and traction in the market. We are also allocating 25% to later stage companies that have a proven track record of pushing the limits of innovation and achieving success
            </span>
          </div>
          <div className="separator" data-aos="fade-left" style={{ marginTop: 16, marginBottom: 16 }}></div>
          <div className="team-exp-container" data-aos-delay="400" data-aos="zoom-in" onClick={openInfo("team")} data-aos-anchor=".home-how-we-add-value">
            {/* <div className="inv-criteria-container"> */}
            <div className="home-container11">
              <span className="home-text31">03</span>
              <span className="home-text32">Team Experience</span>
            </div>
            <span className="arrow team-arrow">↓</span>
            {/* </div> */}
          </div>
          <div className="team-exp-text">
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
      {/* <div className="home-our-investments">
        <div className="home-container15">
          <span className="home-text35" data-aos-duration="2000" data-aos="fade-right">Our Investments</span>
          <span className="home-text36" data-aos-duration="2000" data-aos="fade-right">
            We invest in entrepreneurs who facilitate product-led growth, who
            have specific insights and passions that equip them to solve problems.
          </span>
          <div className="invest-separator" data-aos="fade-left"></div>
          <div className="home-container17" data-aos="zoom-in" data-aos-anchor=".home-how-we-add-value" data-aos-delay="200">
            <span className="home-text40">Fund Size</span>
            <span className="home-text41">$20M</span>
          </div>
          <div className="invest-separator" data-aos="fade-left"></div>
          <div className="home-container20" data-aos="zoom-in" data-aos-anchor=".home-how-we-add-value" data-aos-delay="300">
            <span className="home-text42">Companies</span>
            <span className="home-text43">06</span>
          </div>
          <div className="invest-separator" data-aos="fade-left"></div>
          <div className="home-container23" data-aos="zoom-in" data-aos-anchor=".home-how-we-add-value" data-aos-delay="400">
            <span className="home-text44">Average Check Size</span>
            <span className="home-text45">$250K</span>
          </div>
        </div>
      </div> */}
      <div className="home-how-we-add-value">
        <div className='home-container15'>
          <div className="home-container25" data-aos="zoom-in">
            <div className="home-container26">
              <span className="home-text46">
                How We Add
                Value™
              </span>
            </div>
            <span className="home-text50" >
              Our backgrounds as developers, operators, and founders fuel our
              obsession with adding real value. We empower ambitious people via
              capital (human & physical).
            </span>
          </div>
          <div className="separator how-we-add-val" data-aos="fade-left"></div>
          <div className="home-container27" data-aos="zoom-in" data-aos-delay="800">
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
          <div className="separator" data-aos="fade-left"></div>
          <div className="home-container29" data-aos="zoom-in" data-aos-delay="1600">
            <div className="home-container30">
              <span className="home-text55">
                Network<sup>02</sup>
              </span>
            </div>
            <span className="home-text58">
              We have access to a massive network of founders, operators, VCs,
              accelerators, UHNWIs, policymakers, colleges, athletes, influencers,
              and high performing executives. Our
              network is a key resource we use to add value to our portfolio
              companies, get access to deal flow, co-investment opportunities, and
              subject matter expertise.
            </span>
          </div>
          <div className="separator" data-aos="fade-left"></div>
          <div className="home-container31" data-aos="zoom-in" data-aos-delay="2000">
            <div className="home-container32">
              <span className="home-text59">
                Ecosystem<sup>03</sup>
              </span>
            </div>
            <span className="home-text62" >
              Our passion for community building inspired us to build an ecosystem
              within our fund for resources founders can use. We all support each
              other by tapping into all of our combined networks, including our LPs, advisors,
              and allowing our portfolio companies to share their resources/networks
              amongst each other. We all grow together.
            </span>
          </div>
        </div>
      </div>
      <GetUpdates />
      <Footer />
    </div>
  )
}

export default Home

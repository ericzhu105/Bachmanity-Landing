import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './team.css'
import { Navbar } from './Components/Navbar'
import GetUpdates from './Components/GetUpdates'
import { Footer } from './Components/Footer'

const Team = (props) => {

  AOS.init({ duration: 500, once: true })

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
          {/* <a href="/investors/Christian-Elam">
        <div className="team-elam" id="team-elam" href="/investors/Christian-Elam">
          <div className="team-container03">
            <span className="elam-text01">Christian Elam</span>
            <span className="elam-hide">FOUNDING GENERAL PARTNER</span>
          </div>
            <img src={"/elam.png"}  className='elam-image' alt="image" id="elam-image"/>
          <span className="elam-text02">FOUNDING GENERAL PARTNER</span>
            <img className='elam-arrow' src={"/arrow-right.svg"}></img>
        </div>
        </a>
        <div className="team-separator"></div>
        <a href="/investors/eric-zhu">
          <div className="team-eric">
          <div className="team-container05">
            <span className="eric-text01">Eric Zhu</span>
            <span className="eric-hide">GENERAL PARTNER</span>
          </div>
              <img src={"/eric.png"} alt="image" id="eric-image" className='eric-image'/>
          <span className="eric-text02">GENERAL PARTNER</span>
          <img src={"/arrow-right.svg"} className='eric-arrow'></img>
        </div>
        </a>
        <div className="team-separator"></div>
        <a href="/investors/chuck-Figueroa">
        <div className="team-chuck">
          <div className="team-container07">
            <span className="chuck-text01">Chuck Figueroa</span>
            <span className="chuck-hide">PARTNER</span>
          </div>
            <img src={"/chuck.png"} className='chuck-image' alt="image" id="chuck-image"/>
          <span className="chuck-text02">PARTNER</span>
            <img src={"/arrow-right.svg"} className="chuck-arrow"></img>
        </div>
        </a>
        <div className="team-separator"></div>
        <a href="/investors/Kristin-Stueben">
        <div className="team-kris">
          <div className="team-container09">
            <span className="kris-text01">Kristin Stueben</span>
            <span className="kris-hide">PARTNER</span>
          </div>
            <img src={"/kris.png"}  className='kris-image' alt="image" id="kris-image" />
          <span className="kris-text02">PARTNER</span>
            <img src={"/arrow-right.svg"} className="kris-arrow"></img>
        </div>
        </a> */}
          {/* <div className="team-info-container">
          <img src={"/elam.svg"} className='team-image' alt="image" />
          <div className='team-member-info'>
            <div className='team-member-name'>
              <span className="team-name">Christian Elam</span>
              <span className="team-title">Founding General Partner</span>
            </div>
            <div className='team-arrow-container'>
              <svg className="team-arrow" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.41663 16.4295L15.5833 7.26288M15.5833 7.26288H6.41663M15.5833 7.26288V16.4295" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div> */}
          <TeamMember name="Christian Elam" title="Founding General Partner" image="headshots/elam.svg" link="/investors/Christian-Elam" data-aos-anchor=".team3"/>
          <TeamMember name="Eric Zhu" title="General Partner" image="headshots/eric.svg" link="/investors/eric-zhu" />
          <TeamMember name="Chuck Figueroa" title="Partner" image="headshots/chuck.svg" link="/investors/chuck-Figueroa" />
          <TeamMember name="Kristin Stueben" title="Partner" image="headshots/kris.svg" link="/investors/Kristin-Stueben" />
        </div>
        <div className="team team3" data-aos="move"  data-aos-anchor=".team4">
          <TeamMember name="Gleb Chuvpilo" title="Advisor" image="headshots/gleb.svg" link="/investors/Gleb-Chuvpilo" />
          <TeamMember name="Patrick Morselli" title="Advisor" image="headshots/patrick.svg" link="/investors/Patrick-Morselli" />
          <TeamMember name="Dr. Joel Palathinkal" title="Advisor" image="headshots/joel.svg" link="/investors/Joel-Palathinkal" />
          <TeamMember name="Alex Cornell du Houx" title="Advisor" image="headshots/alex.svg" link="/investors/Alex-Cornell" fontSize={'1.3rem'}/>
        </div>
        <div className="team team4" data-aos="move">
          <TeamMember name="Brandon Maier" title='Advisor' image="headshots/brandon.svg" link="/investors/Brandon-Maier" />
          <TeamMember name="Ian Arden" title='Advisor' image="headshots/ian.svg" link="/investors/Ian-Arden" />
          <TeamMember name="Conor Patton" title='Advisor' image="headshots/conor.svg" link="/investors/Conor-Patton" />
        </div>
      </div>
      <GetUpdates />
      <Footer />
    </div>
  )
}

const TeamMember = ({ name, title, image, link, fontSize }) => {
  fontSize = fontSize || '1.5rem'
  return (
    <div className="team-info-container">
      <img src={`/${image}`} className='team-image' alt="image" />
      <div className='team-member-info'>
        <div className='team-member-name'>
          <span className="team-name" style={{fontSize: fontSize}}>{name}</span>
          <span className="team-title">{title}</span>
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

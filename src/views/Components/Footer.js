import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
        <div className="footer-container34">
          <div className="footer-logo1">
            <span className="footer-text70"><img src="/logo.svg"></img></span>
            <span className="footer-text71">
              <br></br>
              <span>
                A fund to empower passionate
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
          <div className="footer-container35">
            <div className="footer-company-container">
              <span className="footer-text"><a href='/'>Home</a></span>
              <span className="footer-text"><a href='mailto:christian@bachmanitycap.com?subject=Bachmanity%20Capital!'>Careers</a></span>
            </div>
            <div className="footer-company-container">
              <span className="footer-text"><a href='/portfolio'>Portfolio</a></span>
              <span className="footer-text"><a href='/team'>Team</a></span>
              <span className="footer-text"><a href='mailto:christian@bachmanitycap.com?subject=Bachmanity%20Capital!'>Contact</a></span>
            </div>
            <div className="footer-company-container" style={{ marginRight: 0 }}>
              <span className="footer-text"><a href='https://www.morrisoncohen.com/'>Terms of Service</a></span>
              <span className="footer-text"><a href='https://www.morrisoncohen.com/'>Disclosures</a></span>
            </div>
          </div>
        </div>
        <div className="footer-separator"></div>
        <div className='page-end'>
          <div>
            <span className="footer-text91">
              Copyright © 2023 Bachmanity Capital LLC. All rights reserved
            </span>
          </div>
          <div className="footer-container36">
            <a href='https://twitter.com/BachmanityFund'><img src={"/twitter.svg"} className="footer-twitter" alt="twitter" /></a>
            <a href='https://www.linkedin.com/company/bachmanity-capital/'><img src={"/link.svg"} className="footer-link" alt="link" /></a>
          </div>
        </div>
      </footer>
        )
    }
}
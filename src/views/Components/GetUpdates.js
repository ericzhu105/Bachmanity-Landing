import React, { Component } from 'react';

export class GetUpdates extends Component {
  render() {
    return (
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
    )
  }
}
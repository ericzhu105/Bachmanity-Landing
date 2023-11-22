import React, { Component } from 'react';
import { useState } from 'react';

const GetUpdates = () => {
  
    const [submitted, setSubmitted] = useState(false);
    const submit = (e) => {
      e.preventDefault();
      // make the form submission here
      // action="https://getform.io/f/73bdb946-e45e-40f4-9af7-9815556cba9d" method="POST"

      fetch('https://getform.io/f/73bdb946-e45e-40f4-9af7-9815556cba9d', {
        method: 'POST',
        body: new FormData(e.target)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
      

      if (e.target[0].value != '') {
        setSubmitted(true);
        console.log('success');
      }
    };
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
        {!submitted && <form onSubmit={submit}>
        <div className='get-input'>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="home-textinput input"
          />
              {/* <!-- add hidden Honeypot input to prevent spams --> */}
    <input type="hidden" name="_gotcha" style={{display: "none !important"}}/>
          <button type="submit" className="subscribe">Subscribe</button>
          {/* <div className="input-line"></div> */}
        </div>
        </form>}
        {submitted && (
          <div className="get-input" style={{fontSize: "1.25rem", color:"white", borderTop: "1px solid #646F7B", padding: "10px"}}>
            <span className="sub-text02">Thanks for subscribing to our newsletter</span>
          </div>
        )}
      </div>
    )
}

export default GetUpdates
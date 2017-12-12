import React, { Component } from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
  render () {
    return (
      <div className="footerContainer">
        <div className="copyright">
            <p> Copyright © 2017 B.Wood Performance Consulting | Made by Alexis Finney  </p>
        </div>
          
        <div className="socialButtons">
        <h4>Follow Billy</h4>
          <SocialIcon url="https://www.facebook.com/billy.woodmansee" />
          <SocialIcon url="https://www.instagram.com/coach_billywood/" />
          <SocialIcon url="https://twitter.com/billywood09" />
        </div>
      </div>
    )
  }
}

export default Footer
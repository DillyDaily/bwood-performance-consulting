import React, { Component } from 'react';
import '../App.css';

class AboutMe extends Component {
    render() {
      return (
    <div className="AboutMeContainer">
        <div className="tagLine"> 
            <p>There is no magic pill. Results take hard work & dedication.</p>
            <button className="AboutButton">Train With Billy</button>
        </div>
        <div className="billyInfo">
            <p> Billy is certified by the National Academy of Sports Medicine. He has substantial expertise in developing and administering results oriented training programs for clients at all skill levels. </p>
            <button className="AboutButton">Learn More</button>
        </div>
    </div>
  )
 }
}

export default AboutMe
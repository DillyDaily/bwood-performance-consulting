import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class AboutMe extends Component {
    render() {
      return (
    <div className="AboutMeContainer">
        <div className="tagLine"> 
            <p>There is no magic pill. Results take hard work & dedication.</p>
            <Button size="lg" tag={Link} to="/services/">Train With Billy</Button>
        </div>
        <div className="billyInfo">
            <p> Billy is certified by the National Academy of Sports Medicine. He has substantial expertise in developing and administering results oriented training programs for clients at all skill levels. </p>
            <Button size="lg" tag={Link} to="/services/">Learn More</Button>
        </div>
    </div>
  )
 }
}

export default AboutMe
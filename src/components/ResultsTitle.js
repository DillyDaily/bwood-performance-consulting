import React from 'react';
import '../App.css';
import TopNav from './TopNav';
import Footer from './Footer';
import image from "../assets/results2.png";

const ResultsTitle = (props) => {
  return (
    <div className="cloud">
      <div className="resultsImg">
        <img src={image} alt="image"/>      
      </div>
    </div>
  )
}

export default ResultsTitle
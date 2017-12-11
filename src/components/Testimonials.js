import React, { Component } from 'react';
import TopNav from './TopNav';
import Title from './Title';
import Footer from './Footer';

class Testimonials extends Component {
  render () {
    return (
      <div> 
        <TopNav />
        <h1>TESTIMONIALS </h1>
           <Title />
           <Footer />
        </div>
    )
  }
}

export default Testimonials
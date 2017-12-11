import React, { Component } from 'react';
import TopNav from './TopNav';
import Title from './Title';
import Footer from './Footer';

class Contact extends Component {
  render () {
    return (
      <div> 
      <TopNav />
      <h1>CONTACT </h1>
         <Title />
         <Footer />
      </div>
    )
  }
}

export default Contact
import React, { Component } from 'react'
import '../App.css';
import TopNav from './TopNav';
import Video from './Video';
import Title from './Title';
import AboutMe from './AboutMe';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
          <div className="App"> 
           <TopNav />
           <Title />
           <Video />
           <AboutMe />
           <Footer />
          </div>
        );
      }
    }

export default Home
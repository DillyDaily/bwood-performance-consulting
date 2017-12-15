import React, { Component } from 'react'
import TopNav from './TopNav';
import Title from './Title';
import ResultsTitle from './ResultsTitle';
import Footer from './Footer';
import { Parallax } from 'react-parallax';

const image1 = "https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/25352314_10107032896146642_2304875485851622387_o.jpg?oh=8ef5a2d7664b5a6e7d46dda3f38089ba&oe=5AC90AA5";
class Services extends Component {

  render () {
    return (
      <div>
        <TopNav />
        <ResultsTitle/>
        <Parallax bgImage={image1}
        strength={500}>
        <div style={{height: 500}}>
        <div className="choosePlan">
          <h1>Choose A Program That's Right For You</h1>
        </div>
        </div>
      </Parallax>
          <div className="ServicesContainer">
            <div className="PersonalTrain"> 
            <h2><strong>Personal Training</strong></h2>
              <p>This package is for Individuals that are truly commited to change.  I require a deep level of commitment from all of my clients to make sure they are fully enrolled and commited to changing their lifestyle.  It is only here that we will get true lasting results.</p>
             
            </div>
            <div className="OnlineTrain">
              <h2><strong>Online Training</strong></h2>
                <p> A good majority of people have gym "box" memberships, and get no use out of them.  What if you had a cheap way to get a 4-week training program custom to your goals emailed to you every month?  Well now you do!  Let Billy maximize your results at the gym of your choice, and on your time without the heavy cost of personal training.    </p>
                
            </div>
          </div>
        <div className="redTrack"></div>
        <Footer />
      </div>
    )
  }
}

export default Services
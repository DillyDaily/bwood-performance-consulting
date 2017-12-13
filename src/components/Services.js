import React, { Component } from 'react'
import TopNav from './TopNav';
import Title from './Title';
import Footer from './Footer';
import { Parallax } from 'react-parallax';

const image1 = "https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/25182272_10107026660637652_1738643537894865125_o.jpg?oh=a174fc74e279911febff8dd93db54ac5&oe=5AD4E58C";
class Services extends Component {

  render () {
    return (
      <div>
        <TopNav />
        <Title />
        <Parallax bgImage={image1}
        strength={500}>
        <div style={{height: 500}}>
          <div className="ServicesContainer">
          <div className="PersonalTrain"> 
           <h2>Personal Training</h2>
             <p>This package is for Individuals that are truly commited to change.  I require a deep level of commitment from all of my clients to make sure they are fully enrolled and commited to changing their lifestyle.  It is only here that we will get true lasting results.</p>
             <button className="AboutButton">Train With Billy</button>
           </div>
           <div className="OnlineTrain">
             <h2>Online Training Design</h2>
               <p> A good majority of people have gym "box" memberships, and get no use out of them.  What if you had a cheap way to get a 4-week training program custom to your goals emailed to you every month?  Well now you do!  Let Billy maximize your results at the gym of your choice, and on your time without the heavy cost of personal training.    </p>
               <button className="AboutButton">Learn More</button>
           </div>
            </div>
        </div>
      </Parallax>
        <div>
        
        </div>
        <Title />
        <TopNav />
        <Footer />
      </div>
    )
  }
}

export default Services
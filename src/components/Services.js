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
          <div>
            <h1>Personal Training</h1>
            </div>
        </div>
      </Parallax>
        <Title />
        <TopNav />
        <Footer />
        <Title />
        <TopNav />
        <Footer />
      </div>
    )
  }
}

export default Services
{/* <div>
<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px;" href="https://unsplash.com/@scottwebb?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Scott Webb"><span style="display:inline-block;padding:2px 3px;"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white;" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px;">Scott Webb</span></a>
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
</div> */}
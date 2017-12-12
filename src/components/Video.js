import React, { Component } from 'react';
import '../App.css';

class Video extends Component {
  render () {
    let videoSrc = "https://www.youtube.com/embed/Ur79MoWkYqg?rel=0" + 
    this.props.video + "?autoplay=0" + 
    this.props.autoplay + "&rel=0" + 
    this.props.rel + "&modestbranding=0" +
    this.props.modest;

    // <iframe width="420" height="315"
    // src="https://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1">
    // </iframe>

    return (
      <div className="newContainer">
        <div className="video">
            <iframe className="player" type="text/html" width="100%" height="100%"
                src={videoSrc}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                />
        </div>
      </div>
    )
  }
}

export default Video
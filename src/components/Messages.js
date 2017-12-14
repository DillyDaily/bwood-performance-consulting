import React, { Component } from 'react';
import { connect } from 'react-redux';
import OneMessage from './OneMessage';
import TopNav from '../components/TopNav';
import Title from '../components/Title';
import Footer from '../components/Footer';

class Messages extends Component {
  render () {
    let theMessages = this.props.messages.map(message => <OneMessage key={message.id} message={message} />)
    return (
      <div> 
         <TopNav />
         <Title />
         {theMessages}
         <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect (mapStateToProps)(Messages)
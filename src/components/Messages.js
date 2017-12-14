import React, { Component } from 'react';
import { connect } from 'react-redux';
import OneMessage from './OneMessage';
import AdminTopNav from '../components/AdminTopNav';
import Title from '../components/Title';
import Footer from '../components/Footer';

class Messages extends Component {
  render () {
    let theMessages = this.props.messages.map(message => <OneMessage key={message.id} message={message} />)
    return (
      <div> 
         <AdminTopNav />
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
import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../actions/messages.actions';
import TopNav from './TopNav';
import Title from './Title';
import Footer from './Footer';
import { Field, reduxForm } from 'redux-form';

class Contact extends Component {
  state = {
    first_name: '',
    last_name: '',
    message_content: '',
    email: ''
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMessage(this.state)
    this.props.history.push('/')
  }
  
  render () {
    console.log('props from ADD MESSAGE: ', this.props)
    return (
      <div>
      <TopNav />      
      <Title />
      <Container style={{marginTop: 30, marginBottom: 30}}>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="first_name">First Name: </Label>
          <Input
            type="text"
            id="first_name"
            value={this.state.first_name}
            onChange={(e) => this.setState({first_name: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name: </Label>
          <Input
            type="text"
            id="last_name"
            value={this.state.last_name}
            onChange={(e) => this.setState({last_name: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label for="message_content">Message: </Label>
          <Input
            type="textarea"
            id="message_content"
            value={this.state.message_content}
            onChange={(e) => this.setState({message_content: e.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">email: </Label>
          <Input
            type="email"
            id="email"
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}
          />
        </FormGroup>
        <Button color="primary" type="submit">Submit</Button>
      </Form>
    </Container>
    <Footer />
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: bindActionCreators(addMessage, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Contact);
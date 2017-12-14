import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { editPost } from '../../actions/posts.actions';
import TopNav from './TopNav';
import Title from './Title';
import Footer from './Footer';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class Admin extends Component {
  render () {
    return (
      <div>
          <TopNav />
          <div className="loginContainer">
          <div className="loginPic"></div>
          <div className="youPic"></div>
          </div>
          <div className="formContainer">
            <Form>
            <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail" placeholder="email address" />
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="examplePassword" sm={2}>Password</Label>
            <Col sm={10}>
                <Input type="password" name="password" id="examplePassword" placeholder="password" />
            </Col>
            </FormGroup>
            <Button size="lg" tag={Link} to={`/admin/blog`}color="primary" type="submit">Submit</Button>
            </Form>
          </div>
          <Footer />

      </div>
    )
  }
}

export default Admin
import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Collapse } from 'reactstrap';
import TopNav from './TopNav';
import Title from './Title';
import Footer from './Footer';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }  

  render () {
    return (
      <div>
          <TopNav />
          <div className="loginContainer">
          <div className="loginPic"></div>
          <div className="youPic">
          <div className="yn">
              <Button onClick={this.toggle} className="yes">YES</Button>
              <Button size="lg" tag={Link} to={`/`} className="yes">NO</Button>
          </div>
          </div>
          </div>
          <div className="adminContainer">
          <Collapse isOpen={this.state.collapse}>
          <div className="formContainer">
            <Form>
                <FormGroup>
                    <h1>Log in</h1>
                    {/* <Input plaintext>Some plain text/ static value</Input> */}
                </FormGroup>
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
            </Collapse>
          </div>
          <Footer />

      </div>
    )
  }
}

export default Admin
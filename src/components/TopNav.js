import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css';
import logo from '../assets/logo.png';

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({ 
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar className="navBarContainer" color="" dark expand="md">
          <div className="logo"> 
            <NavbarBrand href="/"><img src={logo} alt="logo" /></NavbarBrand>
          </div>
          <div className="newNav">

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto pageLinks" navbar>
              <NavItem>
                <NavLink href="/services/">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/testimonials/">Testimonials</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog/">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          
          </div>
        </Navbar>
    );
  }
}

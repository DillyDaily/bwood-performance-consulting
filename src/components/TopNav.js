import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

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
            <NavbarBrand> <Link to="/"><img src={logo} alt="logo" /></Link></NavbarBrand>
          </div>
          <div className="newNav">

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto pageLinks" navbar>
              <NavItem>
                <NavLink> <Link to="/services/">Services </Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink> <Link to="/testimonials/">Testimonials </Link> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink> <Link to="/blog/">Blog </Link> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink> <Link to="/contact/">Contact </Link> </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          
          </div>
        </Navbar>
    );
  }
}

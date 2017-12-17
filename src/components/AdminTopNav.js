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
            <NavbarBrand tag={Link} to="/admin/blog"><img src={logo} alt="logo"/></NavbarBrand>
          </div>
          <div className="newNav">

          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto pageLinks" navbar>
              <NavItem>
                <NavLink tag={Link} to="/admin/blog/new/">Add Post</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/admin/blog">Manage Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/admin/messages">Messages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/admin">Log Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          
          </div>
        </Navbar>
    );
  }
}

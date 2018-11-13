import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar className="header-color" light expand>
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand style={{ color: '#fff', fontSize: '2rem' }} href="/">Cyper Task  <hr></hr> <h3>CRUD Operations for TODOs <br></br> By React - Graphql - mongoDb</h3></NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{ color: 'black', fontSize: '3rem' , marginTop: '70px' }} href="/add-todo">Add Todos</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
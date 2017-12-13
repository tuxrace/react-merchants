import React from 'react'
import {Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import Icon from './Icon'

const navbarInstance = () => (
  <Navbar inverse collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#"><Icon /> Merchants App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {/* <NavItem eventKey={1} href="#"><div><Link to="/add">Add</Link></div></NavItem>         */}
      </Nav>
      <Nav pullRight>        
        <NavItem eventKey={2} href="#">About</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default navbarInstance
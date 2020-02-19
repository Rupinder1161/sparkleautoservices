import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Link from 'react-bootstrap/NavLink'
import { NavLink } from 'react-router-dom';

const style = {
    navbar:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center'
    }

}


export class Navbar1 extends Component {
    render() {
        return (
             <Container fluid  >
               <nav className="navbar navbar-dark bg-dark navbar-expand-lg icon">
        <NavLink to="/" className="navbar-brand">PoriruaComplaintTracker</NavLink>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <NavLink to="/" className="nav-link">Complaints</NavLink>
          </li>
          <li className="navbar-item">
          <NavLink to="/create" className="nav-link">Create Complaints</NavLink>
          </li>
          <li className="navbar-item">
          <NavLink to="/user" className="nav-link">Create Kit</NavLink>
          </li>
          <li className="navbar-item">
          <NavLink to="/approoved" className="nav-link border-aqua">Approoved Complaints</NavLink>
          </li>
        </ul>
        </div>
        {/* <h6 className="">Shosha</h6> */}
      </nav>
            
 {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={style.navbar}>
  <Navbar.Brand href="#home">SparkleAutoServices</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Services</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}
                </Container>
           
        )
    }
}

export default Navbar1

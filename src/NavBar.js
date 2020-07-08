import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import './App.css';
import Resume from './assets/resume.pdf'

function NavBar(){
    return(
        <Navbar fixed="top" variant="dark" expand="lg" style={{position:"fixed"}}>
            <Navbar.Toggle aria-controls="basic-Navbar-nav" />
            <Navbar.Collapse id="basic-Navbar-nav">
                <Nav>
                    <Nav.Link href="#home" variant="dark" >Home</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="#about" >About</Nav.Link>
                    <Nav.Link href={Resume} >Resume</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar
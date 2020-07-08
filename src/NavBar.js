import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import './App.css';

function NavBar(){
    return(
        <Navbar fixed="top" variant="dark" expand="lg" style={{position:"fixed"}}>
            <Navbar.Toggle aria-controls="basic-Navbar-nav" />
            <Navbar.Collapse id="basic-Navbar-nav">
                <Nav className="justify-content-center">
                    <Nav.Link href="#home" >Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="../resume.pdf">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar
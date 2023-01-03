import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
 
  } from "react-bootstrap";


function nav() {
    return (
        <div className="navBar">
            <nav>
            <ul>
             
            <Navbar.Brand as={Link} to="/" className="navBrand">
                  Ditto
                </Navbar.Brand>
                
                <li>
                <Nav.Link as={Link} to="/" className="navhover">
                  Home
                </Nav.Link>
                </li>
                <li>
                <Nav.Link as={Link} to="/ladder" className="navhover">
                  Ladder
                </Nav.Link>
                </li>
                <li>
                <Nav.Link as={Link} to="/" className="navhover">
                  Live Tracker
                </Nav.Link>
                </li>
                <li>
                <Nav.Link as={Link} to="/" className="navhover">
                  Charts
                </Nav.Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default nav
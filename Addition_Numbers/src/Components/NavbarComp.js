import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Contact from './News';
import Addition from './Addition';
import Entertainment from './Entertaiment';
import Sports from './Sports';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        {/* <Navbar.Brand href="#">Praneeth Reddy Nakka</Navbar.Brand> */}
                        <Nav.Link as={Link}   to="/home"><strong>Praneeth Reddy Nakka</strong></Nav.Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/addition">Addition</Nav.Link>
                                <Nav.Link  href ="https://praneeth-reddy-serch-movies.netlify.app/">Movies Api</Nav.Link>
                                <Nav.Link as={Link} to="/news">News</Nav.Link>
                                <Nav.Link as={Link} to="/entertaiment">Entertaiment</Nav.Link>
                                <Nav.Link as={Link} to="/sports"> Sports</Nav.Link>

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>

                        <Route path="/addition">
                            <Addition />
                        </Route>
                        <Route path="/entertaiment">
                            < Entertainment />
                        </Route>

                        <Route path="/sports">
                            < Sports />
                        </Route>

                        <Route path="/news">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                       
                    </Switch>
                </div>
            </Router>
        )
    }
}

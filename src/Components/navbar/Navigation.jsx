import React from 'react';
import CartWidget from '../CartWidget/cartWidget';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import Categorias from '../../mock/genero';


function Navigation() {
    return (
        <>
            <Navbar className="mb-3 nav-justified justify-content-center" style={{ background: "#A3F5D1"}}>

                <Navbar.Brand as={NavLink} to="/">
                    {" "}
                    <h1 className="navbar-text" style={{marginLeft: 10}}>GamerCe</h1>
                </Navbar.Brand>

                <Nav>
                    <NavDropdown title="Categorias" id="nav-dropdown">
                        <Categorias/>
                    </NavDropdown>
                </Nav>

                <Link className="ml-sm-4" to={"/cart"}>
                    {" "}
                    <CartWidget/>{" "}
                </Link>
            </Navbar>
        </>

    );
};

export default Navigation;

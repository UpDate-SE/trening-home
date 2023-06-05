import { useState } from "react";
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

import { TrenningLogoSm } from "../assets";

import "bootstrap/dist/css/bootstrap.css";
import "styles/NavbarHome.css";

const NavbarHome = ():JSX.Element => {
    const [collapseOpen, setCollapseOpen] = useState<boolean>(false);
    const toggleCollapse = () => setCollapseOpen(!collapseOpen);

    return (
        <Navbar 
            container='fluid'
            expand='md'
            fixed='top'
            id='navbar-home'
            className='user-select-none border-bottom border-2 border-danger'
        >
            <NavbarBrand href='#inicio'>
                <img
                    src={TrenningLogoSm}
                    className='img-fluid brand-logo'
                    alt='decorative, logo of the company'
                    draggable='false'
                />
            </NavbarBrand>
            <NavbarToggler onClick={toggleCollapse} className='ms-auto' />
            <Collapse navbar isOpen={collapseOpen}>
                <Nav navbar className='ms-auto'>
                    <NavItem>
                        <NavLink href='#nosotros'>
                            Nosotros
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#cursos'>
                            Cursos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#app'>
                            App
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#contacto'>
                            Contacto
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )   
}

export default NavbarHome;
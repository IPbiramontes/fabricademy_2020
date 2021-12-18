import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
  } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    HOME
                </NavLink>
                <Bars />
                <NavMenu>
                <NavLink to="/assignments" activeStyle> 
                    ASSIGNMENTS
                </NavLink>
                <NavLink to="/final" activeStyle> 
                    FINAL PROJECT
                </NavLink>
                <NavLink to="/about" activeStyle> 
                    ABOUT
                </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar

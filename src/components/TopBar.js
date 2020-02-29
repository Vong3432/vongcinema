import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    Input,
    Button
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'

const TopBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="md">
                <Container>
                    <NavbarBrand onClick={e => window.location.href="/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.svg"} alt="logo" /></NavbarBrand>
                    <img className="menu" onClick={e => toggle()} src={process.env.PUBLIC_URL + "/assets/images/Menu.svg"} alt="menu"/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to='/'>home</NavLink>
                            </NavItem>             
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to='/movie?page=1'>movie</NavLink>
                            </NavItem>             
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to='/news'>news</NavLink>
                            </NavItem>                          
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to='/contact'>contact</NavLink>
                            </NavItem>               
                        </Nav>                        
                        <Input className="ml-sm-auto mr-2" type="text" placeholder="Search keywords..." />
                        {/* <Button className="primaryBtn--outline mt-2 mt-sm-0">Login</Button>                         */}
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopBar

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
                    <NavbarBrand href={process.env.PUBLIC_URL + '/'}><img src={process.env.PUBLIC_URL + "/assets/images/logo.svg"} alt="logo" /></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to={process.env.PUBLIC_URL + '/'}>home</NavLink>
                            </NavItem>             
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to={process.env.PUBLIC_URL + '/movie'}>movie</NavLink>
                            </NavItem>             
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to={process.env.PUBLIC_URL + '/news'}>news</NavLink>
                            </NavItem>                          
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to={process.env.PUBLIC_URL + '/contact'}>contact</NavLink>
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

import React from 'react';
import { Navbar, Nav } from 'reactstrap';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
    return (
        <Navbar color="light" light expand="md">
            <Nav className="ml-auto" navbar>
                <UserMenu />
            </Nav>

            <Logo />
        </Navbar>
    );
}

export default Header;

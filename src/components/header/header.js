import React from 'react';
import { Navbar, NavbarBrand, Row, Col } from 'reactstrap';
import './header.css';

// header component
const Header = (props) => (
    <Navbar color="dark" dark>
        <NavbarBrand>
            <Row className="header-title">
                {/* github icon */}
                <Col><i className="fa fa-github fa-2x"></i></Col>
                {/* title */}
                <Col>{props.title}</Col>
            </Row>
        </NavbarBrand>
    </Navbar>
)
export default Header;
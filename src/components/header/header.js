import React from 'react';
import { Navbar, NavbarBrand, Row, Col } from 'reactstrap';

// header component
const Header = (props) => (
    <Navbar color="dark" dark>
        <NavbarBrand href="/">
            <Row>
                {/* github icon */}
                <Col><i className="fa fa-github fa-2x"></i></Col>
                {/* title */}
                <Col>{props.title}</Col>
            </Row>
        </NavbarBrand>
    </Navbar>
)
export default Header;
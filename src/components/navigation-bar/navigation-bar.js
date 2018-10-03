import React from 'react';
import { Navbar, NavbarBrand, Row, Col } from 'reactstrap';

const NavigationBar = () => (
    <Navbar color="dark" dark>
        <NavbarBrand href="/">
            <Row>
                {/* github icon */}
                <Col><i className="fa fa-github fa-2x"></i></Col>
                {/* title */}
                <Col>Github repositories</Col>
            </Row>
        </NavbarBrand>
    </Navbar>
)
export default NavigationBar;
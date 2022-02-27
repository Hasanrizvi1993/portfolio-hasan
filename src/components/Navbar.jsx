import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar } from 'react-bootstrap';

const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
		<Navbar.Brand href="#about">About</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
			<Nav>
				<Nav.Link href="#contact">Contact</Nav.Link>
				<Nav.Link eventKey={2} href="#projects">
					Projects
				</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	);
};

export default Navigation;

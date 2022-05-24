import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {user?.email ? (
              <>
                <Button variant="warning" onClick={logout}>
                  Logout
                </Button>
                <Link to="/dashboard">
                  <Button variant="warning" className="mx-2">
                    Dashboard
                  </Button>
                </Link>
              </>
            ) : (
              <Link to="/">
                <Button variant="warning">Login</Button>
              </Link>
            )}
            <Nav.Link eventKey={2} href="#memes">
              {user?.email}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
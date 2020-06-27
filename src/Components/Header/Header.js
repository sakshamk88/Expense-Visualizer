import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { Link } from "react-router-dom";

const header = (props) => {
  return (
    <Navbar expand="md" bg={"light"} className="sticky-top">
      <Container>
        <Navbar.Brand>Analytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-control" />
        <NavbarCollapse id="basic-control">
          <Nav>
            <Nav.Link>
              <Link to="/" className="text-dark">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/about" className="text-dark">
                About
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/contact" className="text-dark">
                Contact
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/dashboard" className="text-dark">
                Other
              </Link>
            </Nav.Link>

            {/* <Nav.Link>
              <Button variant={"outline-dark"}>Theme</Button>
            </Nav.Link> */}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default header;

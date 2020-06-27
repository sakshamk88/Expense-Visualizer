import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const header = (props) => {
  return (
    <Navbar expand="md" bg={"light"} className="sticky-top">
      <Container>
        <Navbar.Brand>Analytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-control" />
        <NavbarCollapse id="basic-control">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>Other</Nav.Link>
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

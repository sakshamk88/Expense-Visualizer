import React from "react";
import "./Sidebar.css";
import { Navbar, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const sidebar = () => {
  return (
    <Navbar expand="md" className={"sidebar"}>
      <Navbar.Toggle aria-controls="basic-control" />
      <NavbarCollapse id="basic-control">
        <Nav defaultActiveKey="/home" className="flex-column mt-5">
          <Nav.Link href="/home">Visualize</Nav.Link>
          <Nav.Link eventKey="link-1">Transactions</Nav.Link>
          <Nav.Link eventKey="link-2">Profile</Nav.Link>
          <Nav.Link eventKey="link-3">Logout</Nav.Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};

export default sidebar;

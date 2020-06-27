import React from "react";
import "./Sidebar.css";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    // <Nav defaultActiveKey="home" className="flex-column mt-5">
    //   <Nav.Link id="home">Visualize</Nav.Link>

    //   <Nav.Link eventKey="link-1">Transactions</Nav.Link>

    //   <Nav.Link eventKey="link-2">Profile</Nav.Link>

    //   <Nav.Link eventKey="link-3">Logout</Nav.Link>
    <Nav defaultActiveKey="home" className="flex-column mt-5">
      <Nav.Link id="home">
        <Link to="/dashboard" className="text-light">
          Visualize
        </Link>
      </Nav.Link>

      <Nav.Link eventKey="link-1">
        <Link to="/dashboard/transactions" className="text-light">
          Transactions
        </Link>
      </Nav.Link>

      <Nav.Link eventKey="link-2">
        <Link to="/dashboard/profile" className="text-light">
          Profile
        </Link>
      </Nav.Link>

      <Nav.Link eventKey="link-3" className="text-light">
        Logout
      </Nav.Link>
    </Nav>
    // </Nav>
  );
};

export default sidebar;

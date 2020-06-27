import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";

import Footer from "./Footer/Footer";
import { Row, Col } from "react-bootstrap";
import "./Layout.css";
import "./Sidebar/Sidebar.css";

const layout = (props) => {
  return (
    <div>
      <Header />
      <div className="container-fluid ">
        <Row>
          <Col md={2} className="border sidebar" bg={"dark"}>
            <Sidebar />
          </Col>
          <Col md={10} className="text-center border">
            <Dashboard />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default layout;

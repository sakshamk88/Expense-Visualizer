import React from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Visualise from "../Visualize/Visualize";
import Profile from "../Profile/Profile";
import "./Dashboard.css";
import "../Sidebar/Sidebar.css";

const dashboard = () => {
  return (
    <Router>
      <div className="container-fluid ">
        <Row>
          <Col md={2} className="border sidebar" bg={"dark"}>
            <Sidebar />
          </Col>
          <Col md={10} className="text-center border">
            <Switch>
              <Route path="/dashboard" exact component={Visualise} />
              <Route path="/dashboard/:profile" exact component={Profile} />
            </Switch>
          </Col>
        </Row>
      </div>
    </Router>
  );
};

export default dashboard;

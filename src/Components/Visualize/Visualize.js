import React from "react";
import LineChart from "../Charts/LineChart";
import RadarChart from "../Charts/Radar";
import { Container, Row, Col } from "react-bootstrap";

const visualise = () => {
  return (
    <Container>
      <Row className="border my-4">
        <Col md={12}>
          <div id="area-chart" className="mt-1">
            <LineChart />
          </div>
        </Col>
      </Row>
      <Row className="mb-1">
        <Col md={6} className="border">
          <div id="radar m-1">
            <RadarChart />
          </div>
        </Col>
        <Col md={6} className="border p-5 ">
          <div>Chart-3</div>
        </Col>
      </Row>
    </Container>
  );
};

export default visualise;

import React from "react";
import { Col, Row } from "react-bootstrap";

import { SiProteus } from "simple-icons";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiProteus></SiProteus>
      </Col>
      <Col xs={4} md={2} className="tech-icons">

      </Col>
      <Col xs={4} md={2} className="tech-icons">

      </Col>
      <Col xs={4} md={2} className="tech-icons">

      </Col>
      <Col xs={4} md={2} className="tech-icons">
      </Col>
    </Row>
  );
}

export default Toolstack;

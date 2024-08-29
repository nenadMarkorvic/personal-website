import React from "react";
import { Col, Row } from "react-bootstrap";

import proteus from '../../Assets/icons/proteus-color.svg'

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img height="80" width="80" src={proteus} />
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

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { SiKicad, SiAltiumdesigner, SiEagle, SiFusionauth } from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKicad />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiProteus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAltiumdesigner />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEagle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFusionauth />
      </Col>
    </Row>
  );
}

export default Toolstack;

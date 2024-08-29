import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { SiKicad, SiAltiumdesigner, SiEagle } from "simple-icons";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKicad />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={proteusIcon} style={{ color: "white" }}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAltiumdesigner />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEagle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      </Col>
    </Row>
  );
}

export default Toolstack;

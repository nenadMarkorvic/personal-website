import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { SiKicad, SiAltiumdesigner, SiEagle } from "react-icons/si";
import proteusIcon from '../../Assets/proteus.svg';
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiKicad />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={proteusIcon}></img>
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

import React from "react";
import { Col, Row } from "react-bootstrap";

import proteus from '../../Assets/icons/proteus-color.svg'
import kicad from "../../Assets/icons/kicad-color.svg";
import altium from "../../Assets/icons/altiumdesigner-color.svg";
import arduino from "../../Assets/icons/arduino-color.svg";
import autodesk from "../../Assets/icons/autodesk-color.svg";
import ltspice from "../../Assets/icons/ltspice-color.svg";
import multisim from "../../Assets/icons/multisim-color.svg";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img height="100" width="100" src={proteus} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img height="100" width="100" src={kicad} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img height="100" width="100" src={altium} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img height="100" width="100" src={arduino} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img height="100" width="100" src={autodesk} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img height="100" width="100" src={ltspice} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img height="100" width="100" src={multisim} />
      </Col>
    </Row>
  );
}

export default Toolstack;

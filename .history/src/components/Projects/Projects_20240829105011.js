import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import project1 from '../../Assets/Projects/1.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Multifunctional IOT Controller Board with ESP32 DevKit"
              description="The purpose of the project was designing such a PCB which will be compatible with 36W power Consumption and also controlling different peripherals like limit switches, motors, sensors etc through ESP32 Wroom32 DevKitC."
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

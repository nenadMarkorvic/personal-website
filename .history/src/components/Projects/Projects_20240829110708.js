import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import project1 from '../../Assets/Projects/1.png';
import project2 from '../../Assets/Projects/2.png';
import project3 from '../../Assets/Projects/3.png';
import project4 from '../../Assets/Projects/4.png';

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
              ghLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Gigabit Ethernet Switch"
              description="This board is designed on KiCAD for Multifunctional Purpose."
              ghLink=""
            />
          </Col><Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Pluggable Brain V1.0"
              description="Certainly! Here's a more detailed version:
This presentation highlights the breadth of my expertise in the field. It showcases the diverse skills and knowledge I have developed through years of hands-on experience and advanced study. By diving into various aspects of my work, I aim to demonstrate the depth of my understanding and the value I can bring to any project. This overview is just a glimpse of the capabilities I can offer."
              ghLink=""
            />
          </Col><Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="(Industrial PCB Design) Solid State Relay (SSR) Controller"
              description="
This PCB is engineered specifically for industrial applications, offering robust control over both Solid State Relays and Mechanical Relays. It is designed to handle high-current loads, ensuring reliable operation in demanding environments. The dual relay control capability enhances its versatility, allowing seamless integration into various industrial systems. With its high current-handling capacity, this PCB is well-suited for applications requiring both precision and durability."
              ghLink=""
            />
          </Col><Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Multifunctional IOT Controller Board with ESP32 DevKit"
              description="The purpose of the project was designing such a PCB which will be compatible with 36W power Consumption and also controlling different peripherals like limit switches, motors, sensors etc through ESP32 Wroom32 DevKitC."
              ghLink=""
            />
          </Col><Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Multifunctional IOT Controller Board with ESP32 DevKit"
              description="The purpose of the project was designing such a PCB which will be compatible with 36W power Consumption and also controlling different peripherals like limit switches, motors, sensors etc through ESP32 Wroom32 DevKitC."
              ghLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

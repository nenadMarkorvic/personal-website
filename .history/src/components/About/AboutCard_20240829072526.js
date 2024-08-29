import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Dedicated electronic hardware and firmware engineer with 7 years of
            experience in electronic product development.
            <br></br>
            Proficient in high-speed PCB design, power supply circuits, and firmware for embedded systems,
            along with RF design for WiFi and Bluetooth applications.
            <br></br>
            Passionate about driving innovation and enhancing product performance.
          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar_small.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Thank you for your visiting to my profile.
              <br />
              I am an electronic hardware and firmware engineer with rich experience in electronic products development.
              <br /><br />
              My main skills are as follows:
              <br />
              ✔ Electronic Circuit & PCB design, manufacturing and testing support.
              <br />
              ⚡Switching power supply circuits and PCB design: DC-DC, AC-DC and DC-AC converters.
              <br />
              ⚡LED lighting driver circuits and PCB design.
              <br />
              ⚡High speed and multi-layers PCB design for embedded system application.
              <br />
              ✔ Firmware development for embedded systems
              <br />
              ⚡STM32, dsPIC, ESP32, ESP8266, nRF52xx...
              <br />
              ⚡Wire communication Interface such as UART, SPI, Ethernet, USB, CAN, MODBUS...
              <br />
              ⚡Wireless communication interface such as WiFi, Bluetooth, ZigBee...
              <br />
              ✔ Radio frequency simulation and design
              <br />
              ⚡RF Matching and PCB Antenna design for Wifi, Bluetooth, RFID, and UWB.
              <br />
              ⚡RF Filters and Divider design
              <br />
              ⚡RF Transceiver and Power Amplifier design
              <br />

              I always do my best to deliver the qualified result at reasonable price and on time.
              {/* <br />
              <br />
              Proficient in high-speed
              <i>
                <b className="purple"> </b>
              </i>
              along with RF design for <i>
                <b className="purple">WiFi </b>
              </i> and  <i>
                <b className="purple">Bluetooth </b>
              </i> applications.
              <br />
              <br />
              Passionate about driving innovation and enhancing product performance. */}



            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ borderRadius: "50%" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

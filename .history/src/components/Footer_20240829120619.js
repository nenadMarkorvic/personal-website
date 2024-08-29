import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Nennad Markovic</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NM</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/nenadMarkorvic"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nenad-markovic-089a962b4/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.freelancer.com/u/nenad10"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <SiFreelancer></SiFreelancer>
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiUpwork></SiUpwork>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.fiverr.com/nenadmarkovi505?up_rollout=true"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiFiverr></SiFiverr>
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiWhatsapp></SiWhatsapp>
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiTelegram></SiTelegram>
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiSkype></SiSkype>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

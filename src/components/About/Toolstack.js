import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiEclipse, DiUbuntu, DiWindows } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAdobe,
  SiAngularjs,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px",textAlign:'left' }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <h3> Programming Languages & Frameworks</h3>
      <hr />
      <Col xs={4} md={2} className="tech-icons">
      <span>VSCode</span>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>Postman</span>
        <SiPostman />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
      <span>Eclipse</span>
        <DiEclipse />
      </Col>

      <h3> Operating Systems</h3>
      <hr />
      <Col xs={4} md={2} className="tech-icons">
      <span>Windows</span>
        <DiWindows />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <span>Ubuntu</span>
        <DiUbuntu />
      </Col>
      
    </Row>
  );
}

export default Toolstack;

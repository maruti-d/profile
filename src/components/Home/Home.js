import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/marutid-d.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1  className="heading">
               Hello I'M
              </h1>

              
               
                <h1 className="intro-name"> Maruti Davari</h1>
              

              <div style={{ textAlign: "left" }}>
              <p className="intro-profession">Java Full Stack Developer</p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;

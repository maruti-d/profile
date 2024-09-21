import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="mb-0">
          <h2 className="header2" style={{textAlign:'left'}}>Hi There! I'm Maruti Davari</h2>
          <p style={{ textAlign: "justify",fontSize:"18px",color:'rgb(169, 173, 184)'}}>
          I am a passionate Full Stack Developer with 5 years of experience in building dynamic web applications and providing production and app support. Skilled in Java, Spring Boot, React.js, Node.js, and a range of cloud technologies like AWS, I enjoy solving complex problems and bringing innovative ideas to life. My experience spans across frontend and backend development, cloud deployment, and integrating AI models. Along with hands-on technical expertise, I have a proven track record of supporting mission-critical projects, researching new technologies, and delivering results under tight deadlines.
          </p>

          <p style={{ textAlign: "justify",fontSize:"18px",color:'rgb(169, 173, 184)'}}>
          My journey includes working on a diverse range of projects, from custom Shopify apps to AI-powered solutions. I thrive in fast-paced environments where I can collaborate with teams and contribute to impactful products. As a continuous learner, I am always exploring new tools and frameworks, with a recent focus on cloud computing, AI, and DevOps.
          </p>
          
          
          <p style={{ textAlign: "justify",fontSize:"18px",color:'rgb(169, 173, 184)'}}>
          I am a passionate Full Stack Developer with 5 years of experience in building dynamic web applications and providing production and app support. Skilled in Java, Spring Boot, React.js, Node.js, and a range of cloud technologies like AWS, I enjoy solving complex problems and bringing innovative ideas to life. My experience spans across frontend and backend development, cloud deployment, and integrating AI models. Along with hands-on technical expertise, I have a proven track record of supporting mission-critical projects, researching new technologies, and delivering results under tight deadlines.
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

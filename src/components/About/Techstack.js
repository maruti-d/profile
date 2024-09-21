import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiAws,
  DiGoogleAnalytics,
} from "react-icons/di";
import {BiLogoJava} from "react-icons/bi"
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiJava,
  SiAmazonaws,
  SiDocker,
  SiPodman,
  SiSpringboot,
  SiReact,
  SiGooglecloud,
  SiGoogleanalytics,
  SiLinux,
  SiPython,
  SiShopify,
  SiSpringsecurity
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px",textAlign:'left' }}>
      <h2 className="header2" style={{marginBottom:'2rem'}}>All the skills that I have in the field of work are mentioned below.</h2>
<h3> Programming Languages & Frameworks</h3>
<hr/>
      <Col xs={4} md={2} className="tech-icons">
      <span>JAVA</span>
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>REACT JS</span>
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>NODE JS</span>
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <span>SPRIMG BOOT</span>
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>SPRIMG Security</span>
        <SiSpringsecurity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>GIT</span>
        <SiGit />
      </Col>
      
      
      {/* <Col xs={4} md={2} className="tech-icons">
      <span>LINUX</span>
        <SiLinux />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
      <span>PYTHON</span>
        <SiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <span>Shopify App Dev</span>
        <SiShopify />
      </Col>

<h3>Databases</h3>
<hr/>
      <Col xs={4} md={2} className="tech-icons">
      <span>MySQL</span>
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <span>PostgreSQL</span>
        <SiPostgresql />
      </Col>


<h3> Cloud & DevOps</h3>
<hr/>
      <Col xs={4} md={2} className="tech-icons">
      <span>DOCKER</span>
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>PODMAN</span>
        <SiPodman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>AWS</span>
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>GA4</span>
        <SiGoogleanalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>GCP</span>
        <SiGooglecloud />
      </Col>

      <h3> Authentication/Authorization</h3>
      <hr/>
      <Col xs={4} md={2} className="tech-icons">
      <span>eMudhra SSO</span>
       
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>eMudhra Digital Signature</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>oAuth2.0</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span>JWT</span>
      </Col>
      
    </Row>
  );
}

export default Techstack;

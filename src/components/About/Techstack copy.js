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
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h2 className="header2">All the skills that I have in that field of work are mentioned.</h2>

      <div class="container mt-5" style={{textAlign:'left'}}>
    <div class="row">
        <div class="col-12">
            <div class="mb-4">
                <span class="skill-title">Java</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width:"95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
                </div>
            </div>

            <div class="mb-4">
                <span class="skill-title">Spring Boot</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width:"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>
            </div>

            <div class="mb-4">
                <span class="skill-title">Adobe XD</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width:"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>
            </div>

            <div class="mb-4">
                <span class="skill-title">UX Design</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width:"85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                </div>
            </div>

            <div class="mb-4">
                <span class="skill-title">HTML</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width:"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
            </div>

            <div class="mb-4">
                <span class="skill-title">Digital Marketing</span>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width:"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>
            </div>
        </div>
    </div>
</div>

    </Row>
  );
}

export default Techstack;

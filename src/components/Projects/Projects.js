import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gif1 from "../../Assets/Projects/gif1.gif";
import gif2 from "../../Assets/Projects/gif2.gif";
import gif3 from "../../Assets/Projects/gif3.gif";
import Campaign from "../../Assets/Projects/Campaign.png";
import B2B from "../../Assets/Projects/B2B.png";
import Scape from "../../Assets/Projects/Scape.png";

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
              imgPath={B2B}
              isBlog={false}
              title="The Launchpad B2B Website"
              description="I built Launchpad to simplify enterprise commerce by replacing outdated workflows with a high-performance B2B interface. The platform centers on a custom-built ''Get a Quote'' system that streamlines complex inquiries into a fast, professional experience for high-volume transactions."
              ghLink="#"
              demoLink="https://www.thelaunchpadteam.com/"
              showBody={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Scape}
              isBlog={false}
              title="Scape DBM"
              description="Scape DBM crafts transformative landscapes through innovative architecture. The platform streamlines development from gardens to sports courts via a seamless inquiry interface. Blending sustainability with craftsmanship, it delivers high-performance outdoor spaces that set new regional standards."
              ghLink="#"
              demoLink="https://scapedbm.com/"
              showBody={true}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Campaign}
              isBlog={false}
              title="Campaign Worksheet"
              description="The Campaign Worksheet is a streamlined digital tool designed to organize essential project data. It simplifies the planning process by providing a clean, structured interface to capture campaign criteria, key decision-makers, and core company information in one centralized location."
              ghLink="#"
              demoLink="https://campaign.thelaunchpadteam.com/"      
              showBody={true}
        
            />
          </Col>

        <h1 className="project-heading">
          My Multimedia <strong className="purple">Designs</strong>
        </h1>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gif1}
              isBlog={false}
              // title="Plant AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gif2}
              isBlog={false}
              // title="Ai For Social Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gif3}
              isBlog={false}
              // title="Face Recognition and Emotion Detection"
          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

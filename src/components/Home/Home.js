import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Hero.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  useEffect(() => {
    // Inject glowing animation CSS once
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes glow {
        0% {
          box-shadow: 0 0 10px rgba(186, 11, 255, 0.4), 0 0 20px rgba(186, 11, 255, 0.3), 0 0 30px rgba(186, 11, 255, 0.2);
        }
        50% {
          box-shadow: 0 0 20px rgba(186, 11, 255, 0.7), 0 0 30px rgba(186, 11, 255, 0.6), 0 0 40px rgba(186, 11, 255, 0.5);
        }
        100% {
          box-shadow: 0 0 10px rgba(186, 11, 255, 0.4), 0 0 20px rgba(186, 11, 255, 0.3), 0 0 30px rgba(186, 11, 255, 0.2);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style); // Cleanup
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> YOUSEF TAYUAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{
                    maxHeight: "450px",
                    border: "4px solid rgb(122, 20, 255)",
                    borderRadius: "16px",
                    padding: "8px",
                    backgroundColor: "#fff",
                    animation: "glow 2s infinite ease-in-out",
                  }}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

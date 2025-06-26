
import React from "react";
import "../public/styles/TechAI.css";

const techIcons = [
  [
    "/assets/tensorflow-tech.svg",
    "/assets/integration-two.svg",
    "/assets/integration-three.svg",
    "/assets/integration.svg",
    "/assets/falcon-four.svg",
  ],
  [
    "/assets/integration-five.svg",
    "/assets/integration-six.svg",
    "/assets/integration-seven.svg",
    "/assets/elastic-stack.svg",
    "/assets/integration-eight.svg",
    "/assets/integration-spark.svg"
  ],
  ["/assets//oracle-tech.svg", "/assets/jupyter-tech.svg","/assets/kubernetes-tech.svg", "/assets/path-nine.svg","/assets/aws-tech.svg","/assets/integration-clude.svg", "/assets/integration-kubernate.svg"]
];


const TechStack = () => {

  return (
    <div className="tech-stack-section5">
      {/* <video autoPlay loop muted className="background-video5">
        <source src="/assets/background.mp4" type="video/mp4" />
      </video> */}
      <div className="video-container5">
        <video autoPlay loop muted className="background-video5">
          <source src="/assets/tech.mp4" type="video/mp4" />
        </video>
        <img src="/assets/Tech-stack-layer.svg" alt="Overlay" className="video-overlay" />
      </div>
      <div className="tech-stack-content5">
        <h1 className="tech-use">
          Tech Stack We Use to Deliver <br /> Top-Notch <span className="ai">AI</span> <span className="services">Services</span>
        </h1>
        <div>
          <img src="/assets/Group 5296.svg" alt="Tech Icon" width="80px" height="80px" />
        </div>
        <div className="tech-icons-container">
          {techIcons.map((row, rowIndex) => (
            <div key={rowIndex} className="tech-icons-row">
              {row.map((icon, index) => (
                <div key={index} className="tech-icon">
                  <img src={icon} alt="Tech Icon" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

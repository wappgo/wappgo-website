"use client";

import { useState } from "react";
import "../styles/CyberFeature.css"
const CyberFeature = () => {
  const [showBorder, SetShowBorder] = useState(1);

  return (
    <main className="cyber-feature-container">
      <div className="row">
        <h4 className="col-xl-12">Protecting You</h4>
      </div>
      <div className="row">
        <div className="col-xl-1"></div>
        <h2 className="col-xl-10">
          Turn visionary concepts into tangible products ready for use.
        </h2>
        <div className="col-xl-1"></div>
      </div>
      <div className="row">
        <p className="col-xl-12">
          Empower your organization with Wappgo Security, a solution designed to
          secure data everywhere, on any device. Gain unparalleled clarity,
          visibility, and control over your most critical asset, ensuring
          comprehensive protection and peace of mind.
        </p>
      </div>

      <article className="row security-items-wrapper">
        <div className="col-lg-3 col-md-6 security-items-container">
          <h4
            onClick={() => SetShowBorder(1)}
            className={
              showBorder === 1 ? "security-item-clicked" : "security-item"
            }
          >
            Security Testing & Assesment
          </h4>
        </div>
        <div className="col-lg-3 col-md-6 security-items-container">
          <h4
            onClick={() => SetShowBorder(2)}
            className={
              showBorder === 2 ? "security-item-clicked" : "security-item"
            }
          >
            Operational Security
          </h4>
        </div>
        <div className="col-lg-3 col-md-6 security-items-container">
          <h4
            onClick={() => SetShowBorder(3)}
            className={
              showBorder === 3 ? "security-item-clicked" : "security-item"
            }
          >
            Data & Cloud Security
          </h4>
        </div>

        <div className="col-lg-3 col-md-6 security-items-container">
          <h4
            onClick={() => SetShowBorder(4)}
            className={
              showBorder === 4 ? "security-item-clicked" : "security-item"
            }
          >
            Blockchain Security
          </h4>
        </div>
      </article>
      <section className="row security-details-container">
        <div className="col-lg-3">
          <article className="security-feature">
            <h3>Security Testing & Assessment</h3>
            <p>
              Conducting a thorough examination of a company's systems,
              networks, and applications to identify vulnerabilities, assess
              potential risks, and evaluate the effectiveness of established
              security measures.
            </p>
          </article>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-md-6 security-feature-details">
              <div>
                <div className="details-logo-heading">
                  <img src="/assets/cyber-penteration-icon.svg" />
                  <span>Penetration Test</span>
                </div>
                <p>
                  Testing and discovering vulnerabilities in your applications,
                  simulating the approach of hackers.
                </p>
              </div>
            </div>
            <div className="col-md-6 security-feature-details">
              <div>
                <div className="details-logo-heading">
                  <img src="/assets/cyber-assesment-icon.svg" />
                  <span>Vulnerability Assessment</span>
                </div>
                <p>
                  Streamlining the automation of vulnerability identification,
                  categorization, and prioritization within your applications
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 security-feature-details">
              <div>
                <div className="details-logo-heading">
                  <img src="/assets/cyber-network-audit.svg" />
                  <span>Internal Network Audit</span>
                </div>
                <p>
                  Evaluating the system stability and scalability under extreme
                  loads or conditions.
                </p>
              </div>
            </div>
            <div className="col-md-6 security-feature-details">
              <div>
                <div className="details-logo-heading">
                  <img src="/assets/cyber-performance-icon.svg" />
                  <span>Performance Test</span>
                </div>
                <p>
                  Evaluating the system stability and scalability under extreme
                  loads or conditions.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 security-feature-details">
              <div>
                <div className="details-logo-heading">
                  <img src="/assets/cyber-cloud-audit-icon.svg" />
                  <span>Cloud Security Audit</span>
                </div>
                <p>
                  Streamlining the automation of vulnerability identification,
                  categorization, and prioritization within your applications
                </p>
              </div>
            </div>
            <div className="col-md-6 security-feature-details">
              <div>
                <div className="details-logo-heading">
                  <img src="/assets/cyber-bug-icon.svg" />
                  <span>Managed Bug Bounty</span>
                </div>
                <p>
                  Engaging with a global community of ethical hackers to
                  promptly and proficiently identify vulnerabilities in your
                  products for enhanced detection.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <article className="security-feature-details">
        </article> */}
      </section>
    </main>
  );
};

export default CyberFeature;

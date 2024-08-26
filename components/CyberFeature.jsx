"use client";

import { useEffect, useState } from "react";
import "../public/styles/CyberFeature.css"
const CyberFeature = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < 4) {
      var timeoutId = setTimeout(() => {
        setCount(count + 1)
      }, 2000);
    }
    if(count==4){
      var timeoutId2 = setTimeout(() => {
        setCount(1)
      }, 2000);
    }
    
    return () => clearTimeout(timeoutId,timeoutId2)
  }, [count])

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
            onClick={() => setCount(1)}
            className={
              1 == `${count}` ? "security-item-clicked" : "security-item"
            }
          >
            Security Testing & Assesment
          </h4>
        </div>
        <div className="col-lg-3 col-md-6 security-items-container">
          <h4
            onClick={() => setCount(2)}
            className={
              2 == `${count}` ? "security-item-clicked" : "security-item"
            }
          >
            Operational Security
          </h4>
        </div>
        <div className="col-lg-3 col-md-6 security-items-container">
          <h4
            onClick={() => setCount(3)}
            className={
              3 == `${count}` ? "security-item-clicked" : "security-item"
            }
          >
            Data & Cloud Security
          </h4>
        </div>

        <div className="col-lg-3 col-md-6 security-items-container">
          <h4
            onClick={() => setCount(4)}
            className={
              4 == `${count}` ? "security-item-clicked" : "security-item"
            }
          >
            Blockchain Security
          </h4>
        </div>
      </article>

      {`${count}` == 1 ?
        <section className="row security-details-container">
          <div className="col-lg-3">
            <article className="security-feature">
              <h3>Security Testing & Assessment111</h3>
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
        </section>
        : `${count}` == 2 ?
          <section className="row security-details-container">
            <div className="col-lg-3">
              <article className="security-feature">
                <h3>Security Testing & Assessment2222</h3>
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
          </section>
          : `${count}` == 3 ?
            <section className="row security-details-container">
              <div className="col-lg-3">
                <article className="security-feature">
                  <h3>Security Testing & Assessment333</h3>
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
            </section>
            : `${count}` == 4 ?
              <section className="row security-details-container">
                <div className="col-lg-3">
                  <article className="security-feature">
                    <h3>Security Testing & Assessment444</h3>
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
              </section> : ""
      }
    </main>
  );
};

export default CyberFeature;

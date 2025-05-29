import React from 'react';
import "../public/styles/RealDevops.css";
const DevOpsResults = () => {
  return (
    <section className="devops-section">
      <h6>Real DevOps, Real Results</h6>
      <div className="devops-container">
        <div>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>80%</h3>
            <p>Faster deployments</p>
          </div>
          <div className="stat-card">
            <h3>99.99%</h3>
            <p>Uptime for production</p>
          </div>
          <div className="stat-card">
            <h3>60%</h3>
            <p>Reduction in ops task</p>
          </div>
          <div className="stat-card">
            <h3>90%</h3>
            <p>Smoother onboarding</p>
          </div>
        </div>
        </div>
        <div className="devops-content">
        
          <p>
            <strong>We</strong> don’t just talk automation — we live it. At Wappgo, our DevOps approach is built on one mission: make your engineering team unstoppable.
          </p>
          <p>
            That means faster deploys, bulletproof infrastructure, and zero last-minute chaos. Whether you’re scaling a startup or fine-tuning enterprise workflows, we plug in, clean up, and level up your entire pipeline.
          </p>
          <p>No fluff — just systems that work harder so your team doesn’t have to.</p>
          <button className="consult-btn3">
            Contact Us Now ⚡
          </button>
        </div>
      </div>
    </section>
  );
};

export default DevOpsResults;

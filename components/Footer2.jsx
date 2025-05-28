import React from "react";
import "../public/styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container5">
      <video autoPlay loop muted className="footer-video5">
        <source src='/assets/ai-videos.mp4' type="video/mp4" />
      </video>
      <div className="footer-overlay5">
        <div className="footer-content5">
          <div className="footer-left5">
            <div className="footer-logo5"><img src="/assets/logo.svg"/></div>
            <p className="footer-address5">
            305 CORPORATE HOUSE 169 R.N.T MARG,
            INDORE 452001 , MADHYA PRADESH
            </p>
            <p>
              +0731-4240330 &nbsp;&nbsp; info@wappoo.com
            </p>
          </div>

          <div className="footer-right5">
            <div className="footer-links5">
              <div>
                <h4>Company</h4>
                <p>About us</p>
                <p>Contact us</p>
                <p>Features</p>
              </div>
              <div>
                <h4>Services</h4>
                <p>Managed IT Services</p>
                <p>Cyber Security</p>
                <p>IT Compliance</p>
                <p>Network Connectivity</p>
                <p>Cloud Services</p>
              </div>
              <div>
                <h4>Development</h4>
                <p>Website Development</p>
                <p>App Development</p>
                <p>Desktop Application</p>
                <p>AI / ML</p>
                <p>Chat Bots</p>
              </div>
              <div>
                <h4>Other Services</h4>
                <p>UI/UX Design</p>
                <p>Graphics Design</p>
                <p>Video Editing</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom5">
          <p className="footer-copyright5">
            Copyright © 2025 Wappoo IT Services Pvt. Ltd. All rights reserved
          </p>
          <div className="footer-bottom-links5">
            <p>Blogs</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
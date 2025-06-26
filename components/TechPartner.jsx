import React from 'react';
import Image from 'next/image';

const IndiaMapSection = () => {
  return (
    <div className="section-wrapper ">
      {/* India Map with Indore Marker */}
      <div className="map-wrapper">
        <Image
          src="/assets/about.svg"
          alt="India Map"
          className="india-map"
          width={527} // Set the desired width
          height={388} // Set the desired height
        />
      </div>

      {/* Content Section */}
      <div className="content-wrapper">
        {/* Left Section */}
        <div className="left-section">
          <h2 className="section-heading">
            Your Search for a Tech Partner <span className="highlight">ENDS HERE</span>
          </h2>
          <p className="section-description">
            You're not here for just another IT service provider. You're here because
            you need cutting-edge solutions crafted by a team that understands your
            vision. That's Wappgo.
          </p>
          <p className="section-subtext">
            At Wappgo, we don’t just build software - we create digital experiences that
            empower businesses to succeed in a fast-evolving world.
          </p>
        </div>
        <div className="right-section">
          <h3 className="work">We are from Indore, INDIA but our work is <br/> global</h3>

          <div className="info-list">
            <p>
              <img src="/assets/light-bulb.svg" alt="Tech Icon" className="info-icon" />
              Innovate with Next-Gen Tech
            </p>
            <p>
              <img src="/assets/thunder.svg" alt="Scale Icon" className="info-icon" />
              Scale with Future-Ready Solutions
            </p>
            <p>
              <img src="/assets/graph.svg" alt="Growth Icon" className="info-icon" />
              Accelerate Your Business Growth
            </p>
          </div>

          <button className="cta-button">
            Let's build the future, together. ⚡
          </button>
        </div>

      </div>
    </div>
  );
};

export default IndiaMapSection;

import React from 'react';
import "../public/styles/IndustriesServices.css";

const IndustriesServices = () => {
  return (
    <section className="ecom-services-section">
      <div className="ecom-services-container">

        <div className="ecom-heading">
          <h2>Our eCommerce <br />Development Services</h2>
        </div>

        <div className="ecom-services-left">
          <ul className="service-list2">
            <li><span>Custom eCommerce Development</span> <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span></li>
            <li><span>Multi-Vendor Marketplace</span> <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span></li>
            <li><span>Mobile eCommerce Solutions</span> <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span></li>
            <li><span>AI-Powered Personalization</span> <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span></li>
            <li><span>Advanced Inventory & Order Management</span> <span className="arrows3"><img src="/assets/arrow.png" alt="Arrow" /></span></li>
          </ul>
        </div>

        <div className="ecom-services-right">
          <img src="/assets/commerce.svg" alt="ecommerce-icons" className="ecom-icon" />
          <p>
            We design and develop tailor-made eCommerce platforms that align perfectly with your business goals.
            Whether you need a B2B, B2C, or D2C solution, we ensure your platform is visually stunning, highly functional,
            and conversion-driven. From seamless navigation to interactive UI/UX, we craft an experience that keeps customers coming back.
          </p>
        </div>

        <video className="corner-video" autoPlay loop muted playsInline>
          <source src="/assets/offer-videos.mp4" type="video/mp4" />
        </video>
        
      </div>
    </section>
  );
};

export default IndustriesServices;



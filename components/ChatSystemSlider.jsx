"use client";
import React from "react";
import Slider from "react-slick";
import '../public/styles/IndustriesSlider.css';

// const industries = [
//   { title: "eCommerce", image: "/assets/fashion.svg" },
//   { title: "Luxury & Jewellery", image: "/assets/fashion.svg" },
//   { title: "Fashion & Apparel", image: "/assets/fashion.svg" },
//   { title: "Electronics & Gadgets", image: "/assets/fashion.svg"},
//   { title: "Grocery & FMCG", image: "/assets/fashion.svg" }
// ];
const industries = [
  { 
    title: "Customer Support & CRM", 
    image: "/assets/customer.svg",
    description: "Live chat, support automation, ticket management."
  },
  { 
    title: "Real Estate & Services", 
    image: "/assets/realestate.svg",
    description: "Instant lead response, in-app messaging, agent-client chat."
  },
  { 
    title: "Healthcare & Teleconsultation", 
    image: "/assets/health.svg",
    description: "Secure patient messaging, file sharing, HIPAA-compliant chat."
  },
  { 
    title: "E-Learning & EdTech", 
    image: "/assets/learning.svg",
    description: "Interactive class group chats, instructor messaging, file sharing."
  },
  { 
    title: "Corporate & Internal Teams", 
    image: "/assets/corporate.svg",
    description: "Team collaboration, task communication, broadcast messages."
  }
];
const settings = {
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1000,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1630,
      settings: {
        slidesToShow: 3,
        centerPadding: "200px"
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        centerPadding: "120px"
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        centerPadding: "100px"
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerPadding: "80px"
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "60px"
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: "0",
        arrows: false
      }
    }
  ]
};

const IndustriesSlider = () => {
  return (
    <>
      <section className="industry-banner">
        <div className="industry-banner-text">
          <h1>
            Chat Systems to Enhance <br />
            Interaction Across Every <br />
            Industries
          </h1>
        </div>
        <div className="industry-banner-content">
          <p>
          Every business has unique communication needs. At Wappgo, we design chat systems tailored to industry demands to streamline workflows, boost support efficiency, and increase customer satisfaction.
          </p>
          <button className="industry-banner-button">
            Get Consultation ⚡
          </button>
        </div>
      </section>
      {/* <div className="industry-slider-container">
        <Slider {...settings} className="industry-slider">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <div
                className="industry-card-inner"
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div> */}
       <div className="industry-slider-container">
        <Slider {...settings} className="industry-slider">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <div
                className="industry-card-inner"
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="industry-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default IndustriesSlider;
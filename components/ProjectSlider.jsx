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
    title: "Tech Teams & Startups", 
    image: "/assets/techteam.svg",
    description: "Sprint planning, code collaboration, dev-ready integration layers."
  },
  { 
    title: "Architecture & Construction", 
    image: "/assets/architect.svg",
    description: "On-site updates, contractor coordination, milestone monitoring."
  },
  { 
    title: "Enterprise Ops & Admin", 
    image: "/assets/enterprise.svg",
    description: "Department-level visibility, OKR tracking, centralized reporting."
  },
  { 
    title: "Education & Research", 
    image: "/assets/research2.svg",
    description: "Cross-team collaboration, timeline planning, document versioning."
  },
  { 
    title: "Design & Creative Studios", 
    image: "/assets/Design.svg",
    description: "Feedback cycles, revision tracking, client portals."
  }
];
const settings = {
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
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

const ProjectSlider = () => {
  return (
    <>
      <section className="industry-banner">
        <div className="industry-banner-text">
          <h1>
            Project Platforms <br />
            Built for the way you work
          </h1>
        </div>
        <div className="industry-banner-content">
          <p>
          Every team operates differently, and so should your project tools. We craft scalable platforms tailored to your workflows, your industry, and your speed.
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

export default ProjectSlider;
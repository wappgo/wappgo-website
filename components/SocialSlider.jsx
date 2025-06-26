"use client";
import React from "react";
import Slider from "react-slick";
import '../public/styles/IndustriesSlider.css';


const industries = [
  { 
    title: "Short-Video & Live Streaming", 
    image: "/assets/short.svg",
    description: "Ultra-low latency delivery, smart encoding, and CDN support to keep your content viral-ready, always"
  },
  { 
    title: "Creator Monetization Hubs", 
    image: "/assets/creator.svg",
    description: "Branded deals, subscription models, payout management, and campaign tracking—all in one seamless system."
  },
  { 
    title: "Fan Communities & Follower Networks", 
    image: "/assets/Fan.svg",
    description: "Dynamic profiles, follow systems, and personalized feeds designed to drive deep audience connection."
  },
  { 
    title: "Social Shopping & Affiliate Commerce", 
    image: "/assets/SocialShoppins.svg",
    description: "Integrated shopping flows, influencer-linked sales tracking, and real-time affiliate performance dashboards."
  },
  { 
    title: "Niche Networks & Micro-Communities", 
    image: "/assets/micro.svg",
    description: "Custom forums, tag-based discovery, real-time chats, and advanced moderation tools for curated interactions."
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
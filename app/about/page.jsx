
"use client";
import React from 'react'
import AboutHero from "../../components/AboutHero";
import Footer from "../../components/Footer";
import Grow from "../../components/Grow";
import Vision from "@/components/Vision";
import FaqSection from "@/components/FaqSection";
import Navbar from "../../components/Navbar";
import Testimonial from "../../components/Testimonial";
import SpecialPage from "@/components/SpecialPage";
import WappgoMeans from "../../components/Wappgo-Means";
import TechPartner from "../../components/TechPartner";

const About = () => {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <div>
        <h6 className='comman-title text-center'>Trusted Customers and Partners</h6>
        <div className="brands overflow-hidden bg-white mt-4">
          <div className="d-flex marquee-track">
            {[
              "/assets/army.svg",
              "/assets/been-icon.svg",
              "/assets/fair-concects.svg",
              "/assets/medi-caps.svg",
              "/assets/mp-dc.svg",
              "/assets/joonify.svg",
              "/assets/nict.svg",
              "/assets/policy.svg",
              "/assets/gis-logo-mp.svg",
              "/assets/legal.svg",
            ].map((src, idx) => (
              <div key={idx} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '150px' }}>
                <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '60px' }} />
              </div>
            ))}
            {/* Duplicate set for infinite effect */}
            {[
              "/assets/army.svg",
              "/assets/science-tech.svg",
              "/assets/singpure.svg",
              "/assets/medi-caps.svg",
              "/assets/mp-dc.svg",
              "/assets/joonify.svg",
              "/assets/nict.svg",
              "/assets/policy.svg",
              "/assets/gis-logo-mp.svg",
              "/assets/legal.svg",
            ].map((src, idx) => (
              <div key={`dup-${idx}`} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '150px' }}>
                <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '60px' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="brands overflow-hidden bg-white">
        <div className="d-flex marquee-track-left">
          {[
            "/assets/army.svg",
            "/assets/science-tech.svg",
            "/assets/singpure.svg",
            "/assets/medi-caps.svg",
            "/assets/mp-dc.svg",
            "/assets/joonify.svg",
            "/assets/nict.svg",
            "/assets/policy.svg",
            "/assets/gis-logo-mp.svg",
            "/assets/legal.svg",
          ].map((src, idx) => (
            <div key={idx} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '195px' }}>
              <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '80px' }} />
            </div>
          ))}
          {/* Duplicate set for infinite effect */}
          {[
            "/assets/army.svg",
            "/assets/science-tech.svg",
            "/assets/singpure.svg",
            "/assets/medi-caps.svg",
            "/assets/mp-dc.svg",
            "/assets/joonify.svg",
            "/assets/nict.svg",
            "/assets/policy.svg",
            "/assets/gis-logo-mp.svg",
            "/assets/legal.svg",
          ].map((src, idx) => (
            <div key={`dup-${idx}`} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '195px' }}>
              <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '80px' }} />
            </div>
          ))}
        </div>
      </div>
      <TechPartner />
      <WappgoMeans />
      <SpecialPage />
      <Vision />
      <Testimonial />
      <FaqSection />
      <Grow />
      <Footer />
    </main>
  );
};

export default About;

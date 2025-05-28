
"use client";
import React, { useState, useEffect } from 'react'
import AboutGlobe from "../../components/AboutGlobe";
import AboutHero from "../../components/AboutHero";
import AnimateText from "../../components/AnimateText";
import Announcement from "../../components/Announcement";
import ContactComp from "../../components/Contact-Comp";
import Footer from "../../components/Footer";
import Grow from "../../components/Grow";
import Vision from "@/components/Vision";
import Milestone from "../../components/Milestone";
import FaqSection from "@/components/FaqSection";
import Navbar from "../../components/Navbar";
import Loader from "@/components/Loader";
import Question from "../../components/Question";
import Partners from "../../components/Partners";
import Testimonial from "../../components/Testimonial";
import SpecialPage from "@/components/SpecialPage";
import WappgoMeans from "../../components/Wappgo-Means";
import TechPartner from "../../components/TechPartner";

const About = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time (e.g., API or assets)
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); 

  //   return () => clearTimeout(timer); // Cleanup
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <main>
      {/* <Announcement /> */}
      <Navbar />
      <AboutHero />
      <div>
        <h6 className='comman-title text-center'>Trusted Customers and Partners</h6>
        <div className="brands overflow-hidden bg-white mt-4">
          <div className="d-flex marquee-track">
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
      {/* <main className=" animate-text-container">
          <div className="marque">
            <p>
              Quickly conducting exploration, thorough research, and rigorous
              validation processes to ensure efficient and reliable outcomes in our
              projects.
            </p>
          </div>
          <div className="marque">
            <p>
              Quickly conducting exploration, thorough research, and rigorous
              validation processes to ensure efficient and reliable outcomes in our
              projects.
            </p>
          </div>
          <div className="marque">
            <p>
              Quickly conducting exploration, thorough research, and rigorous
              validation processes to ensure efficient and reliable outcomes in our
              projects.
            </p>
          </div>
        </main> */}
      {/* <AnimateText /> */}
      {/* <Partners /> */}
      <TechPartner />

      {/* <ContactComp /> */}
      <WappgoMeans />
      <SpecialPage />
      {/* <AnimateText /> */}
      <Vision />
      <Testimonial />
      <FaqSection />
      {/* <Question /> */}
      {/* <Milestone /> */}
      {/* <AboutGlobe />  */}
      <Grow />
      <Footer />
    </main>
  );
};

export default About;

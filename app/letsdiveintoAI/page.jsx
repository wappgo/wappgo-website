"use client"
import { useState } from "react";
import Announcement from "@/components/Announcement";
import Blogs from "@/components/Blogs";

import GlobeImage from "@/components/GlobeImage";
import Grow from "@/components/Grow";
import Hero from "@/components/Hero";
import NavbarAI from "@/components/NavbarAI";
import Partners from "@/components/Partners";
import Services from "@/components/Service";
import Transform from "@/components/Transform";
import CoreTechnologies from "@/components/Coretechnologies";
import Testimonial from "@/components/Testimonial";
import Testing, { Slider } from "@/components/Testing";
import Vision from "@/components/Vision";
import WhyChooseAI from "@/components/WhyChooseAI";
import Image from "next/image";
import AIhero from "@/components/AIhero";
import AIservices from "@/components/AIservices";
import TechAI from "@/components/TechAI";
import Footer2 from "@/components/Footer2";
import Loader from "@/components/Loader";
import OfferServices from "@/components/OfferServices";
import AIdevServices from "@/components/AIdevServices";
import FaqSection2 from "@/components/FaqSection2";
import { useEffect } from "react";

export default function Home() {
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
      <NavbarAI />
      <AIhero />
      <div className="scroll-partner-conteiner"
      >
        <h6 className='comman-title ai-partner-text text-center text-white'>
          Our Esteemed{' '}
          <span className="ai-powered">
            <span className="text-reveal ai-gradient ai-partner-text">Partners</span>{' '}
            <span className="text-reveal powered-gradient">& Customers</span>
          </span>
        </h6>
        <div className="brands overflow-hidden mt-5">
          <div className="marqeedivcontent marquee-track">
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
                <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '80px',borderRadius:"8px" }} />
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
         <div className="brands overflow-hidden  mt-4">
          <div className="marqeedivcontent marquee-track-left-ai">
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
                <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '80px',borderRadius:"8px" }} />
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
      </div>
      <Transform />
      <CoreTechnologies />
      <AIservices />
      <WhyChooseAI />
      {/* <OfferServices /> */}
      <AIdevServices />
      <TechAI />
      <FaqSection2 />
      <Footer2 />

    </main>
  );
}

"use client"

import NavbarAI from "@/components/NavbarAI";
import Transform from "@/components/Transform";
import CoreTechnologies from "@/components/Coretechnologies";
import WhyChooseAI from "@/components/WhyChooseAI";
import AIhero from "@/components/AIhero";
import AIservices from "@/components/AIservices";
import TechAI from "@/components/TechAI";
import Footer2 from "@/components/Footer2";
import AIdevServices from "@/components/AIdevServices";
import FaqSection2 from "@/components/FaqSection2";


export default function Home() {

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
              "/assets/been-logo.svg",
              "/assets/fair-concects.svg",
              "/assets/Netlink-logo.svg",
              "/assets/qutar-airways.svg",
              "/assets/agrawal-group-logo.svg",
              "/assets/jc-benchar.svg",
              "/assets/laxman-con-logo.svg",
              "/assets/isa-logo.svg",
              "/assets/vaishnav-college.svg",
            ].map((src, idx) => (
              <div key={idx} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '195px' }}>
                <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '80px', borderRadius: "8px" }} />
              </div>
            ))}
            {[
              "/assets/been-logo.svg",
              "/assets/fair-concects.svg",
              "/assets/Netlink-logo.svg",
              "/assets/qutar-airways.svg",
              "/assets/agrawal-group-logo.svg",
              "/assets/jc-benchar.svg",
              "/assets/laxman-con-logo.svg",
              "/assets/isa-logo.svg",
              "/assets/vaishnav-college.svg",
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
                <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '80px', borderRadius: "8px" }} />
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
      <AIdevServices />
      <TechAI />
      <FaqSection2 />
      <Footer2 />

    </main>
  );
}

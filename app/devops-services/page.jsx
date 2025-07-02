"use client"

import Grow from "@/components/Grow";
import NavbarAI from "@/components/NavbarAI";
import Partners from "@/components/Partners";
import DevopsExpertise from "@/components/DevopsExpertise";
import RealDevops from "@/components/RealDevops";
import CaseStudies from "@/components/CaseStudies";
import DevopsRelated from "@/components/DevopsRelated";
import DevopsService from "@/components/DevopsService";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import OtherRelatedSevices from "@/components/OtherRelatedSevices";

export default function Home() {
  return (
    <main>

      <NavbarAI />
      <DevopsService />
      <Partners />
      <DevopsExpertise />
      <DevopsRelated />
      <CaseStudies />
      <RealDevops />
      {/* <div className="overlap-container">
        <div className="card-layer card-layer--first"
          style={{
            boxShadow: "none",
            paddingBottom: "20px"
          }}
        >
          <h2 className="section-title">Other Related Services</h2>
          <p className="section-subtitle">
            We don’t believe in tech snobbery.<br />
            We use what works best for you and your project.
          </p>
          <div className="services-grid">
            <div className="service-card pink"
              style={{
                boxShadow: "none"
              }}
            >
              <div className="icon"><img src="/assets/code1.svg" /></div>
              <h3 className="user">User Interface & User Experience</h3>
              <a href="#">Explore now ↗</a>
            </div>
            <div className="service-card mint"
              style={{
                boxShadow: "none"
              }}
            >
              <div className="icon"><img src="/assets/user-interface.svg" /></div>
              <h3 className="user">Mobile App Development</h3>
              <a href="#">Explore now ↗</a>
            </div>
            <div className="service-card peach"
              style={{
                boxShadow: "none"
              }}
            >
              <div className="icon"><img src="/assets/chatbot.svg" /></div>
              <h3 className="user">AI & ChatBot Development</h3>
              <a href="#">Explore now ↗</a>
            </div>
            <div className="service-card blue"
              style={{
                boxShadow: "none"
              }}
            >
              <div className="icon"><img src="/assets/infinity.svg" /></div>
              <h3 className="user">DevOps & Infra Development</h3>
              <a href="#">Explore now ↗</a>
            </div>
          </div>
        </div>
      </div> */}
      <OtherRelatedSevices />
      <FaqSection />
      <Grow />
      <Footer />

    </main>
  );
}

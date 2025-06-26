"use client"

import Grow from "@/components/Grow";
import NavbarAI from "@/components/NavbarAI";
import Partners from "@/components/Partners";
import WebExpertise from "@/components/WebExpertise";
import ScaleDesign from "@/components/ScaleDesign";
import CaseStudies from "@/components/CaseStudies";
import Servicespage from "@/components/Servicespage";
import RelatedServices from "@/components/RelatedServices";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main>

      <NavbarAI />
      <Servicespage />
      <Partners />
      <WebExpertise title={"Our Web Development"} nexttitle={"Expertise"} />
      <CaseStudies />
      <RelatedServices />
      <ScaleDesign />
      <FaqSection />
       <Grow />
      <Footer />

    </main>
  );
}

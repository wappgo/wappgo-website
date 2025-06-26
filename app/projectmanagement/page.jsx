import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SpecialPage from "@/components/SpecialPage";
import Testimonial from "@/components/Testimonial";
import CaseStudies from "@/components/CaseStudies";
import FaqSection from "@/components/FaqSection";
import Projecthero from "@/components/Projecthero";
import ProjectSlider from "@/components/ProjectSlider";
import ProjectServices from "@/components/ProjectServices"
const page = () => {
  return (
    <div>
      <Navbar />
      <Projecthero />
      <ProjectServices />
      <ProjectSlider />
      <SpecialPage />
      <Testimonial />
      <CaseStudies />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default page;
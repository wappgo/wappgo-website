import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ErpHero from "../../components/ErpHero";
import ErpServices from "../../components/ErpServices";
import SpecialPage from "@/components/SpecialPage";
import ErpSlider from "@/components/ErpSlider";
import Testimonial from "@/components/Testimonial";
import CaseStudies from "@/components/CaseStudies";
import FaqSection from "@/components/FaqSection";
const page = () => {
  return (
    <div>
      <Navbar />
      <ErpHero />
      <ErpServices />
      <SpecialPage />
      <ErpSlider />
      <Testimonial />
      <CaseStudies />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default page
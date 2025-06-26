import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SpecialPage from "@/components/SpecialPage";
import Testimonial from "@/components/Testimonial";
import CaseStudies from "@/components/CaseStudies";
import FaqSection from "@/components/FaqSection";
import Socialhero from "@/components/Socialhero";
import SocialServices from "@/components/SocialServices";
import SocialSlider from "@/components/SocialSlider";
const page = () => {
  return (
    <div>
      <Navbar />
      <Socialhero />
      <SocialServices />
      <SocialSlider />
      <SpecialPage />
      <Testimonial />
      <CaseStudies />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default page;
import React from 'react'
import CaseStudyPage from '../../components/CaseStudyPage';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Industrieshero from "../../components/Industrieshero";
import IndustriesServices from "../../components/IndustriesServices";
import SpecialPage from "@/components/SpecialPage";
import IndustriesSlider from "@/components/IndustriesSlider";
import Testimonial from "@/components/Testimonial";
import CaseStudies from "@/components/CaseStudies";
import FaqSection from "@/components/FaqSection";
const page = () => {
  return (
    <div>
        <Navbar/>
 <Industrieshero/>
 <IndustriesServices/>
 <SpecialPage />
 <IndustriesSlider/>
 <Testimonial />
 <CaseStudies />
 <FaqSection/>
      <Footer />
    </div>
  )
}

export default page

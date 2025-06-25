import React from 'react'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SpecialPage from "@/components/SpecialPage";
import Testimonial from "@/components/Testimonial";
import CaseStudies from "@/components/CaseStudies";
import FaqSection from "@/components/FaqSection";
import Chatsystem from "@/components/Chatsystem";
import ChatSystemServices from "@/components/ChatSystemServices";
import ChatSystemSlider from "@/components/ChatSystemSlider";
const page = () => {
  return (
    <div>
      <Navbar />
      <Chatsystem />
      <ChatSystemServices />
      <ChatSystemSlider />
      <SpecialPage />
      <Testimonial />
      <CaseStudies />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default page;
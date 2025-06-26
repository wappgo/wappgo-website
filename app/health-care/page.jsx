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
import HealthCare from '@/components/HealthCare';
const page = () => {
    return (
        <div>
            <Navbar />
            <HealthCare />
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
"use client";

import Footer from "@/components/Footer";
import Grow from "@/components/Grow";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Services from "@/components/Service";
import Testimonial from "@/components/Testimonial";
import Vision from "@/components/Vision";
import OfferServices from "@/components/OfferServices";
import SpecialPage from "@/components/SpecialPage";
import FaqSection from "@/components/FaqSection";
import CaseStudies from "@/components/CaseStudies";
import AnimateText from "@/components/AnimateText";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Partners />
      <CaseStudies />
      <OfferServices />
      <AnimateText />
      <Vision />
      <SpecialPage />
      <Testimonial />
      <FaqSection />
      <Services />
      <Grow />
      <Footer />
    </main>
  );
}

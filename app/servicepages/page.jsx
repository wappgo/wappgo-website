"use client"

import Announcement from "@/components/Announcement";
import Blogs from "@/components/Blogs";
import Loader from "@/components/Loader";
import GlobeImage from "@/components/GlobeImage";
import Grow from "@/components/Grow";
import Hero from "@/components/Hero";
import NavbarAI from "@/components/NavbarAI";
import Partners from "@/components/Partners";
import Services from "@/components/Service";
import Transform from "@/components/Transform";
import WebExpertise from "@/components/WebExpertise";
import Testimonial from "@/components/Testimonial";
import Testing, { Slider } from "@/components/Testing";
import Vision from "@/components/Vision";
import ScaleDesign from "@/components/ScaleDesign";
import Image from "next/image";
import CaseStudies from "@/components/CaseStudies";
import Servicespage from "@/components/Servicespage";
import RelatedServices from "@/components/RelatedServices";
import Footer2 from "@/components/Footer2";
import { useEffect, useState } from "react";
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
      {/* <Services /> */}
       <Grow />
      <Footer />

    </main>
  );
}

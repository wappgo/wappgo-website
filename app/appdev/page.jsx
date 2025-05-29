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
import AppExpertise from "@/components/AppExpertise";
import Testimonial from "@/components/Testimonial";
import Testing, { Slider } from "@/components/Testing";
import Vision from "@/components/Vision";
import ScaleDesign from "@/components/ScaleDesign";
import Image from "next/image";
import CaseStudies from "@/components/CaseStudies";
import AppDev from "@/components/AppDev";

import AppServices from "@/components/AppServices";
import WhyBrands  from "@/components/WhyBrands";
import Footer2 from  "@/components/Footer2";
import { useEffect,useState } from "react";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time (e.g., API or assets)
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); 

  //   return () => clearTimeout(timer); // Cleanup
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <main>
    
      <NavbarAI />
     <AppDev/>
     <Partners />
     <AppExpertise/>
     <AppServices/>
     <WhyBrands/>
     <CaseStudies />
     <Footer2/>

    </main>
  );
}

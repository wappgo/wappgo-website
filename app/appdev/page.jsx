"use client"
import NavbarAI from "@/components/NavbarAI";
import Partners from "@/components/Partners";
import AppExpertise from "@/components/AppExpertise";
import CaseStudies from "@/components/CaseStudies";
import AppDev from "@/components/AppDev";
import AppServices from "@/components/AppServices";
import WhyBrands  from "@/components/WhyBrands";
import Footer2 from  "@/components/Footer2";


export default function Home() {
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

// import Announcement from '@/components/Announcement'
// import Blogs from '@/components/Blogs'
// import CyberFeature from '@/components/CyberFeature'
// import Footer from '@/components/Footer'
// import Grow from '@/components/Grow'
// import Hero from '@/components/Hero'
// import Navbar from '@/components/Navbar'
// import Partners from '@/components/Partners'
// import Security from '@/components/Security'
// import { AboutComponent } from '@/components/Service'
// import Testimonial from '@/components/Testimonial'


// const CyberSecurity = () => {

//   const ancmentStyle = {
//     backgroundColor: "#121417",
//     color: "white",
//     borderBottom: "1px solid white",
//   };
//   const NavStyle = {
//     backgroundColor: "#121417",
//     color: "white",
//     border: "1px solid #121417",


//   };
//   const HeroStyle = {
//     backgroundColor: "#121417",
//     textColor: "white",
//     subHeadingColor: "rgb(213 214 214)",
//     masterText: "#1925FF",
//     orColor: "#9D9EB6",
//     iconsBg: "rgba(255, 255, 255, 0.07)",
//     border: "1px solid rgba(230, 231, 233, 0.05)"
//   };

//   const HeroTexts = {
//     heading: "Battling Cyber Threats: Vigilance in the Digital Frontier's",
//     desc: "Trusted by startups, enterprises, and government, Wappgo empowers with robust vulnerability discovery, fortified systems, and business safeguarding.",
//     btnText: "Let’s Get Fortified",
//   };
//   return (
//     <main>
//         <Announcement ancmentStyle={ancmentStyle}/>
//         <Navbar NavStyle={NavStyle} />
//         <Hero HeroStyle={HeroStyle} HeroTexts={HeroTexts}/>
//         <Partners/>
//         <CyberFeature/>
//         <Security/>
//         <AboutComponent/>
//         <Testimonial/>
//         <Blogs/>
//         <Grow/>
//         <Footer/>
//     </main>
//   )
// }

// export default CyberSecurity

// "use client"

// import Announcement from "@/components/Announcement";
// import Blogs from "@/components/Blogs";
// import Footer from "@/components/Footer";
// import GlobeImage from "@/components/GlobeImage";
// import Grow from "@/components/Grow";
// import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
// import Partners from "@/components/Partners";
// import Services from "@/components/Service";
// import Testimonial from "@/components/Testimonial";
// import Vision from "@/components/Vision";
// import OfferServices from "@/components/OfferServices";
// import SpecialPage from "@/components/SpecialPage";
// import FaqSection from "@/components/FaqSection";
// import CaseStudies from "@/components/CaseStudies";
// import AnimateText from "@/components/AnimateText";
// import NewOffer from "@/components/NewOffer";
// export default function Home() {

//   return (
//     <main className="position-relative">
//       <Navbar />
//       <Hero />
//       <Partners />
//       <CaseStudies />
//       {/* <GlobeImage /> */}
//       <OfferServices />
//       {/* <NewOffer /> */}
//       <AnimateText />
//       <Vision />
//       <SpecialPage />
//       <Testimonial />
//       <FaqSection/>
//       <Services />
//       {/* <Blogs /> */}
//       <Grow />
//       <Footer />
//     </main>
//   );
// }
"use client";

import { useState, useEffect,useRef } from "react";
import Loader from "@/components/Loader";

import Announcement from "@/components/Announcement";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import GlobeImage from "@/components/GlobeImage";
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
import NewOffer from "@/components/NewOffer";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3500); 

  //   return () => clearTimeout(timer); // Cleanup
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }
  
  return (
    <main className="position-relative">
      <Navbar />
      <Hero />
      <Partners />
      <CaseStudies />
      {/* <GlobeImage /> */}
      <OfferServices />
      {/* <NewOffer /> */}
      <AnimateText />
      <Vision />
      <SpecialPage />
      <Testimonial />
      <FaqSection />
      <Services />
      {/* <Blogs /> */}
      <Grow />
      <Footer />
    </main>
  );
}

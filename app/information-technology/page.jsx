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
import Testing, { Slider } from "@/components/Testing";
import Vision from "@/components/Vision";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <Announcement />
      <Navbar />
      <Hero />
      <Partners />
      <GlobeImage />
      <Vision />
      <Services />
      <Testimonial />
      <Blogs />
      <Grow />
      <Footer />    
    </main>
  );
}

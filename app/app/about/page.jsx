import AboutGlobe from "@/components/AboutGlobe";
import AboutHero from "@/components/AboutHero";
import AnimateText from "@/components/AnimateText";
import Announcement from "@/components/Announcement";
import ContactComp from "@/components/Contact-Comp";
import Footer from "@/components/Footer";
import Grow from "@/components/Grow";
import Milestone from "@/components/Milestone";
import Navbar from "@/components/Navbar";
import Question from "@/components/Question";
import Testimonial from "@/components/Testimonial";
import WappgoMeans from "@/components/Wappgo-Means";

const About = () => {
  return (
    <main>
      <Announcement />
      <Navbar/>
      <AboutHero />
      <AnimateText />
      <ContactComp />
      <WappgoMeans />
      <Testimonial />
      <Question />
      <Milestone />
     <AboutGlobe /> 
      <Grow />
      <Footer />
    </main>
  );
};

export default About;

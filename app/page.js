import Announcement from '@/components/Announcement'
import Blogs from '@/components/Blogs'
import CyberFeature from '@/components/CyberFeature'
import Footer from '@/components/Footer'
import Grow from '@/components/Grow'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Partners from '@/components/Partners'
import Security from '@/components/Security'
import { AboutComponent } from '@/components/Service'
import Testimonial from '@/components/Testimonial'


const CyberSecurity = () => {

  const ancmentStyle = {
    backgroundColor: "#121417",
    color: "white",
    borderBottom: "1px solid white",
  };
  const NavStyle = {
    backgroundColor: "#121417",
    color: "white",
    border: "1px solid #121417"
  };
  const HeroStyle = {
    backgroundColor: "#121417",
    textColor: "white",
    subHeadingColor: "rgba(255, 255, 255, 0.30)",
    masterText: "#1925FF",
    orColor: "#9D9EB6",
    iconsBg: "rgba(255, 255, 255, 0.07)",
    border: "1px solid rgba(230, 231, 233, 0.05)"
  };
  const HeroTexts = {
    heading: "Battling Cyber Threats: Vigilance in the Digital Frontier's",
    desc: "Trusted by startups, enterprises, and government, Wappgo empowers with robust vulnerability discovery, fortified systems, and business safeguarding.",
    btnText: "Let’s Get Fortified",
  };
  return (
    <main>
        <Announcement ancmentStyle={ancmentStyle}/>
        <Navbar NavStyle={NavStyle} />
        <Hero HeroStyle={HeroStyle} HeroTexts={HeroTexts}/>
        <Partners/>
        <CyberFeature/>
        <Security/>
        <AboutComponent/>
        <Testimonial/>
        <Blogs/>
        <Grow/>
        <Footer/>
    </main>
  )
}

export default CyberSecurity
import AnimateText from '@/components/AnimateText'
import Announcement from '@/components/Announcement'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import InnovationHero from '@/components/Innovation-Hero'
import InnovationService from '@/components/Innovation-Service'


const SRE = () => {
  return (
    <main>
        <Announcement/>
        <Navbar/>
        <InnovationHero/>
        <AnimateText/>
        <InnovationService/>
        <Footer/>
    </main>
  )
}

export default SRE;
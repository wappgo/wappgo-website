import AnimateText from '@/components/AnimateText'
import Announcement from '@/components/Announcement'
import Footer from '@/components/Footer'
import InnovationHero from '@/components/Innovation-Hero'
import InnovationService from '@/components/Innovation-Service'
import Navbar from '@/components/Navbar'

const Automation = () => {
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

export default Automation;
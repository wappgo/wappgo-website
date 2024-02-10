import AnimateText from '@/components/AnimateText'
import Announcement from '@/components/Announcement'
import ContactForm from '@/components/Contact-Form'
import ContactHero from '@/components/Contact-Hero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <main>
        <Announcement/>
        <Navbar/>
        <ContactHero/>
        <AnimateText/>
        <ContactForm/>
        <Footer/>
    </main>
  )
}

export default Contact
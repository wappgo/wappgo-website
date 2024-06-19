import Announcement from '@/components/Announcement'
import GetConsultation from '../../components/GetConsultation'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
const Consultation = () => {
    return (
        <main>
            <Announcement />
            <Navbar />
            <GetConsultation/>
            <Footer />

        </main>
    )
}

export default Consultation
"use client"

import NavbarAI from "@/components/NavbarAI";
import Partners from "@/components/Partners";
import WebExpertise from "@/components/WebExpertise";
import ScaleDesign from "@/components/ScaleDesign";
import CaseStudies from "@/components/CaseStudies";
import RelatedServices from "@/components/RelatedServices";
import Footer2 from "@/components/Footer2";
import UserIntefaceServices from "@/components/UserInterfaceServices";
import ProductDesign from "@/components/ProductDesign";
import FaqSection from "@/components/FaqSection";
import Services from "@/components/Service";
import Footer from "@/components/Footer";



function page() {
    return (
        <div>
            <main>
                <NavbarAI />
                <UserIntefaceServices />
                <Partners />
                <WebExpertise title={"Our Expertise in"} nexttitle={"UI/ UX Services"} />
                <CaseStudies />
                <ProductDesign />
                <RelatedServices />
                <FaqSection />
                <Services />
                {/* <ScaleDesign />
               
                <Footer2 /> */}
                <Footer />
            </main>
        </div>
    )
}

export default page

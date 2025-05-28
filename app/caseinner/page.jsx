import React from 'react'
import InnerPage from '../../components/InnerPage';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const page = () => {
  return (
    <div>
        <Navbar/>
      <InnerPage/>
      <Footer />
    </div>
  )
}

export default page


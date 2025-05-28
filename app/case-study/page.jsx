
"use client";
import React,{useState,useEffect} from 'react'
import CaseStudyPage from '../../components/CaseStudyPage';
import Loader from '@/components/Loader';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const page = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time (e.g., API or assets)
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); 

  //   return () => clearTimeout(timer); // Cleanup
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <div>
        <Navbar/>
      <CaseStudyPage/>
      <Footer />
    </div>
  )
}

export default page

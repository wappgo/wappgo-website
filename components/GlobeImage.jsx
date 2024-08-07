"use client"
import gsap from "gsap";
import { useEffect, useState,useRef } from "react";
const GlobeImage = () => {
  const [text, setText] = useState('BUSINESS');
  const element = useRef(null);
  const handleText = () => {

    const tl = new gsap.timeline();

    tl.from(element.current, {
      duration: 1,
      call: () => {
        setText('STARTUP');
      }
    })
      .from(element.current, {
        duration: 1,
        call: () => {
          setText('EVERYTHING');
        }
      })
      .from(element.current, {
        duration: 1,
        call: () => {
          setText('BUSINESS');
        }
      })
  };
  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleText()
    }, 1000)
    return () => clearTimeout(timeOut)
  }, [text])


  return (
    <div className="mb-5">
      <div className="row">
        <div className="col-1"><hr className="cardsectionhr1" /></div>
        <div className="col-10">
          <h2 className="cardsectionhrheading">We offer & work on more than an IT service</h2>
        </div>
        <div className="col-1">
          <hr className="cardsectionhr2" />
        </div>
        {/* <img className="col" src="/assets/globe-section-image.svg" /> */}
        {/* <video  style={{width:"100%", height:"100%"}} src="/vedios\172170-846731303_small.mp4" autoPlay loop muted/> */}
      </div>
      <h2 className="letshandleheading">Let us Handle IT For Your</h2>
      {/* <h3 className={count==2 || count==3 ? "d-none" : "text-animate"}>BUSINESS</h3>
      <h3 className={count==1 || count==3 ? "d-none" : "text-animate1 text-animate1"}>STARTUP</h3>
      <h3 className={count==1 || count==2 ? "d-none" : "text-animate2 text-animate2"}>EVERYTHING</h3> */}
      <div ref={element}>
       <h3 className="text-animate">{text}</h3>
      </div>
    </div>
  );
};

export default GlobeImage;

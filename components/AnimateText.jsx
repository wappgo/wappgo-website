"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const AnimateText = () => {
  useGSAP(() => {
    gsap.to(".marque", {
      transform: 'translateX(-200%)',
      duration: 50,
      delay:1,
      repeat: -1,
      ease: "none"
    })
    })
  return (
    <main className=" animate-text-container">
      <div className="marque">
        <p>
          Quickly conducting exploration, thorough research, and rigorous
          validation processes to ensure efficient and reliable outcomes in our
          projects.
        </p>
      </div>
      <div className="marque">
        <p>
          Quickly conducting exploration, thorough research, and rigorous
          validation processes to ensure efficient and reliable outcomes in our
          projects.
        </p>
      </div>
      <div className="marque">
        <p>
          Quickly conducting exploration, thorough research, and rigorous
          validation processes to ensure efficient and reliable outcomes in our
          projects.
        </p>
      </div>



    </main>
  );
};

export default AnimateText;

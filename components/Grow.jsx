"use client";
import Image from "next/image";
import "../styles/Grow.css";
import { useEffect, useState } from "react";
const Grow = () => {
  const [br, setBr] = useState(false);
  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 320) {
      setBr(true);
    } else {
      setBr(false);
    }
  }, [innerWidth]);
  return (
    <main className="row grow-container">
      <div className="col-xl-9 grow-texts">
        <h1>Grow your business with us</h1>

        <p>
          Our experts are ready to guide you through your next big move.{" "}
          {br ? <br></br> : ""} Let us know how we can help.
        </p>
      </div>
      <div className="col-xl-3 col-sm-12 grow-btn">
        <button className="grow-touch-btn">
          Get In Touch <img src="/assets/call-icon.svg" />
        </button>
      </div>
    </main>
  );
};

export default Grow;

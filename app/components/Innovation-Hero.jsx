import { ButtonMedia } from "./Hero";
import Image from "next/image";
const InnovationHero = () => {
  return (
    <main className="innovation-hero-container">
      <div className="row">  
      <div className="col-lg-8 website-hero-texts">
        <h4>
          Innovation <span>Website Development</span>
        </h4>
        <h2>
          Tech and Design for Web Dev, Crafting digital{" "}
          <span> MASTERPIECE.</span>
        </h2>
        <ButtonMedia/>
      </div>
      <div className="col-lg-4 innovation-hero-img">
        <img  src="/assets/innovation-hero-img.png" />
      </div>
      </div>
    </main>
  );
};

export default InnovationHero;

import Image from "next/image";
const AboutHero = () => {
  return (
    // <main className="about-hero-container">
    //   <article>
    //     <h4>About Us</h4>
    //     <h2>
    //       Beyond Management, Embracing Our <span>Authentic</span> Work Culture.
    //     </h2>
    //     <p>
    //       By applying innovative approaches, we collaborate with corporations
    //       and stakeholders to transform and enhance their experiences.
    //     </p>
    //   </article>

    //   <div>
    //     <img src="/assets/about-hero-img.png" />
    //   </div>
    // </main>
    <div className="row about-hero-container">
      <article className="col-lg-8">
        <h4 className="about-title">About Us</h4>
        <h2 className="about-heading">
          Beyond Management, Embracing Our <span>Authentic</span> Work Culture.
        </h2>
        <div className="row">
          <p className="about-text col-lg-9">
            By applying innovative approaches, we collaborate with corporations
            and stakeholders to transform and enhance their experiences.
          </p>
        </div>
      </article>
      <div
        className="col-lg-4"
      >
        <img
          className="img-fluid about-hero-img"
          src="/assets/about-hero-img-up.png"
        />
      </div>
    </div>
  );
};

export default AboutHero;

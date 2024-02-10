import { Button } from "./Service";
import Image from "next/image";
const ContactComp = () => {
  return (
    <>
      {/* <main className="about-contact-container">
        <article>
          <h4>Enhanced Security</h4>
          <h2>
            Innovation and Shared <span>Knowledge Shine</span> .
          </h2>
          <p>
            Wappgo, with five yeards of experience, is a trusted provider of IT
            services, consulting, and business solutions. We firmly believe in the
            power of innovation and shared knowledge to drive a purposeful and
            transformative future.
          </p>
          <Button text={"Contact Us"} />
        </article>
        <div>
          <img src="/assets/about-contact-img.png" />
        </div>
      </main> */}
      <div className="row about-contact-container">
        <article className="col-lg-6">
          <h4>Enhanced Security</h4>
          <h2>
            Innovation and Shared{" "}
            <span className="about-contact-span">Knowledge Shine</span> .
          </h2>
          <p>
            Wappgo, with five yeards of experience, is a trusted provider of IT
            services, consulting, and business solutions. We firmly believe in
            the power of innovation and shared knowledge to drive a purposeful
            and transformative future.
          </p>
          <div className="contact-btn">
            <Button text={"Contact Us"} />
          </div>
        </article>
        <div className="col-lg-6 about-contact-img">
          <img className="img-fluid" src="/assets/about-contact-img.png" />
        </div>
      </div>
    </>
  );
};

export default ContactComp;

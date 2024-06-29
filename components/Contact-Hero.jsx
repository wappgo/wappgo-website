import ContactForm from "./Contact-Form";

const ContactHero = () => {
  return (

    <div className="row">
      <div className="col-lg-6">

        <div className="contact-hero-container">


          <div className="website-hero-texts">
            <h4>Contact Us</h4>
            <h2 className="herosubheadingtext">
              We Would Love to Hear From
              <span> You !</span>
            </h2>
            <p className="contactparatext">
              Please provide your contact details, and our Team’s person will get
              back to you promptly.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="col-lg-1">

      </div> */}
      <div className="col-lg-6">
        <div className="contactheroimg">
          {/* <img className="img-fluid" src="/assets/innovation-hero-img.png" /> */}
          <ContactForm/>
        </div>

      </div>
    </div>

  );
};

export default ContactHero;

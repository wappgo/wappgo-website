import Image from "next/image";
import "../styles/service.css";
const Services = () => {
  return (
    <>
      <section className="service-container">
        <article className="service-items-wrapper">
          <h4>Our Services</h4>
          <h1>Turn visionary concepts into tangible products ready for use.</h1>
          <p>
            Whether you need a full IT team or specialized consultation, Wappgo
            can help.
          </p>
          <div className="row">
            <div className="col-xxl-5">
              <div className="service-item">
                <h2>
                  <span>01</span>
                  Managed IT Services
                </h2>
                <img src="/assets/arrow-down.svg" />
              </div>
              <div className="service-item">
                <h2>
                  <span>02</span>
                  Cyber Security
                </h2>
                <img src="/assets/arrow-down.svg" />
              </div>
              <div className="service-item">
                <h2>
                  <span>03</span>
                  Marketing Solutions
                </h2>
                <img src="/assets/arrow-down.svg" />
              </div>
            </div>
            <div className="col-xxl-2"></div>
            <div className="col-xxl-5">
              <div className="service-item">
                <h2>
                  <span>04</span>
                  Legal Services
                </h2>
                <img src="/assets/arrow-down.svg" />
              </div>
              <div className="service-item">
                <h2>
                  <span>05</span>
                  UI/UX Design Services
                </h2>
                <img src="/assets/arrow-down.svg" />
              </div>
              <div className="service-item">
                <h2>
                  <span>06</span>
                  Content Solutions
                </h2>
                <img src="/assets/arrow-down.svg" />
              </div>
            </div>
          </div>
        </article>
      </section>
      <AboutComponent />
    </>
  );
};

export default Services;

export const AboutComponent = () => {
  return (
    <section className="about-container">
      <div className="row">
        <div className="col-xl-6">
          <img src="/assets/abtImg.svg" height="100%" width="100%" />
        </div>
        <div className="col-xl-1"></div>
        <div className="col-xl-5">
          <div className="pt-3 pl-3">
            <div className="about-texts">
              <p>
                For over 05 years, we’ve provided vital IT support for our
                clients
              </p>
              <div className="btn-container">
              <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Button = ({ text, btnStyle }) => {
  return (
    <button style={btnStyle} className="common-btn">
      {text ? text : "Know About Us"}{" "}
      <img src={btnStyle ? "/assets/form-loader.svg" : "/assets/loader.svg"} />
    </button>
  );
};

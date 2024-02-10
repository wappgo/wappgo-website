import Image from "next/image";
import "../styles/Hero.css";
const Hero = ({ HeroStyle, HeroTexts }) => {
  return (
    <main
      style={{
        backgroundColor: HeroStyle && HeroStyle.backgroundColor,
        backgroundImage: HeroStyle && "none",
      }}
      className="row hero-container"
    >
      <article className="row hero-items-wrapper">
        <div className="col-lg-12 hero-items">
          <div className="row">
            <div className="col-lg-9">
              {HeroTexts ? (
                <h1
                  className="hero-heading"
                  style={{ color: HeroStyle && HeroStyle.textColor }}
                >
                  {HeroTexts.heading}
                  <span className="cyber-masterpiece"> Masterpiece</span>
                </h1>
              ) : (
                <h1 className="hero-heading">
                  Technology and design serve as our means to create
                  <span className="masterpiece"> MASTERPIECE</span>{" "}
                  <span> .</span>
                </h1>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-9">
              <p
                className="desc"
                style={{ color: HeroStyle && HeroStyle.subHeadingColor }}
              >
                {HeroTexts
                  ? HeroTexts.desc
                  : "By applying innovative approaches, we collaborate with corporations and stakeholders to transform and enhance their experience"}
              </p>
            </div>
          </div>
          <ButtonMedia HeroStyle={HeroStyle} HeroTexts={HeroTexts} />
        </div>
        <div className="round-text-container">
          {HeroTexts ? "" : <HeroLogo />}
        </div>
        {HeroStyle && (
          <div className="cyber-image-container">
            <img className="img-fluid" src="/assets/cyber-hero-img.png" />
          </div>
        )}
      </article>
    </main>
  );
};

export default Hero;

export const HeroLogo = () => {
  return (
    <div className="hero-logo">
      <div className="inner-square">
        <img className="spin" src="/assets/rotate-text-home.svg" />
        <img src="/assets/send.svg" />
      </div>
    </div>
  );
};
export const CyberHeroLogo = () => {
  return (
    <div className="cyber-hero-logo">
      <img className="cyber-spin" src="/assets/cyber-rotate-text.svg" />
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.13)",
          border: "1px solid rgba(230, 231, 233, 0.07)",
        }}
        className="inner-square"
      >
        <img src="/assets/send.svg" />
      </div>
    </div>
  );
};

export const ButtonMedia = ({ HeroStyle, HeroTexts }) => {
  return (
    <div className="btn-icon-container">
      <button className="start-btn">
        {HeroTexts ? HeroTexts.btnText : "Let's Get Started"}
        <img src="/assets/btn-icon.svg" />
      </button>
      <div className="or" style={{ color: HeroStyle && HeroStyle.orColor }}>
        or
      </div>
      <div className="media-container">
        <button
          style={{
            backgroundColor: HeroStyle && HeroStyle.iconsBg,
            border: HeroStyle && HeroStyle.border,
          }}
          className="icon-container"
        >
          <img src="/assets/wp.svg" />
        </button>
        <button
          style={{
            backgroundColor: HeroStyle && HeroStyle.iconsBg,
            border: HeroStyle && HeroStyle.border,
          }}
          className="icon-container"
        >
          <img
            src={HeroStyle ? "/assets/cyber-mail-icon.svg" : "/assets/mail.svg"}
          />
        </button>
        <button
          style={{
            backgroundColor: HeroStyle && HeroStyle.iconsBg,
            border: HeroStyle && HeroStyle.border,
          }}
          className="icon-container"
        >
          <img
            src={HeroStyle ? "/assets/cyber-call-icon.svg" : "/assets/call.svg"}
          />
        </button>
      </div>
      {HeroTexts && <CyberHeroLogo />}
    </div>
  );
};

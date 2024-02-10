import Image from "next/image";
import "../styles/Vision.css";
const Vision = () => {
  return (
    <div className="vision-container">
      <div className="row vision">
        <div className="col-xl-5">
          <h6 className="sub-head">Our Vision</h6>
          <p className="sub-desc">
            Turn visionary concepts into tangible products ready for use.
          </p>
        </div>
        <div className="col-xl-2"></div>
        <div className="col-xl-5 second">
          <p 
          className="sec-head">
          We have assisted a wide range of clients, from small,
            emerging startups to large enterprise organizations, in
            developing products by simplicity and user-friendliness.
          </p>
          <div className="feature">
            <h4>Innovation</h4>
            <img src="/assets/arrow-down-right.svg" />
          </div>
          <div className="feature">
            <h4>Design</h4>
            <img src="/assets/arrow-down-right.svg" />
          </div>
          <div className="feature">
            <h4>Operations</h4>
            <img src="/assets/arrow-down-right.svg" />
          </div>
          <div className="feature">
            <h4>Maintenance</h4>
            <img src="/assets/arrow-down-right.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;

import Image from "next/image";
const GlobeImage = () => {
  return (
    <div className="row globe-img-container">
      <img className="col" src="/assets/globe-section-image.svg" />
      {/* <video  style={{width:"100%", height:"100%"}} src="/vedios\172170-846731303_small.mp4" autoPlay loop muted/> */}
    </div>
  );
};

export default GlobeImage;

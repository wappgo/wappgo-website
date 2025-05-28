"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
const Partners = () => {
  return (
    <main className="partners-container">
      <h6 className='comman-title text-center'>Trusted Customers and Partners</h6>
      {/* <div className="brands">
        <Swiper
          className="brand-name-container"
          modules={[Autoplay]}
          loop={true}
          freeMode={true}
          slidesPerView="auto"
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loopedSlides={10} 
          grabCursor={false}
          allowTouchMove={false}
          breakpoints={{
            320: {
              slidesPerView: 2
            },
            375: {
              slidesPerView: 2
            },
            425: {
              slidesPerView: 2
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 7,
            },
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="d-flex justify-content-center">
              <img src="/assets/army.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center">
              <img src="/assets/science-tech.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center">
              <img src="/assets/singpure.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center">
              <img src="/assets/medi-caps.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center">
              <img src="/assets/mp-dc.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center">
              <img src="/assets/joonify.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center">
              <img src="/assets/nict.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center">
              <img src="/assets/policy.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center">
              <img src="/assets/gis-logo-mp.svg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="d-flex justify-content-center">
              <img src="/assets/legal.svg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}

      <div className="brands overflow-hidden bg-white mt-4">
        <div className="d-flex marquee-track">
          {[
            "/assets/army.svg",
            "/assets/science-tech.svg",
            "/assets/singpure.svg",
            "/assets/medi-caps.svg",
            "/assets/mp-dc.svg",
            "/assets/joonify.svg",
            "/assets/nict.svg",
            "/assets/policy.svg",
            "/assets/gis-logo-mp.svg",
            "/assets/legal.svg",
          ].map((src, idx) => (
            <div key={idx} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '150px' }}>
              <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '60px' }} />
            </div>
          ))}
          {/* Duplicate set for infinite effect */}
          {[
            "/assets/army.svg",
            "/assets/science-tech.svg",
            "/assets/singpure.svg",
            "/assets/medi-caps.svg",
            "/assets/mp-dc.svg",
            "/assets/joonify.svg",
            "/assets/nict.svg",
            "/assets/policy.svg",
            "/assets/gis-logo-mp.svg",
            "/assets/legal.svg",
          ].map((src, idx) => (
            <div key={`dup-${idx}`} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '150px' }}>
              <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '60px' }} />
            </div>
          ))}
        </div>
      </div>
      <div className="brands overflow-hidden bg-white">
        <div className="d-flex marquee-track-left">
          {[
            "/assets/army.svg",
            "/assets/science-tech.svg",
            "/assets/singpure.svg",
            "/assets/medi-caps.svg",
            "/assets/mp-dc.svg",
            "/assets/joonify.svg",
            "/assets/nict.svg",
            "/assets/policy.svg",
            "/assets/gis-logo-mp.svg",
            "/assets/legal.svg",
          ].map((src, idx) => (
            <div key={idx} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '195px' }}>
              <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '80px' }} />
            </div>
          ))}
          {/* Duplicate set for infinite effect */}
          {[
            "/assets/army.svg",
            "/assets/science-tech.svg",
            "/assets/singpure.svg",
            "/assets/medi-caps.svg",
            "/assets/mp-dc.svg",
            "/assets/joonify.svg",
            "/assets/nict.svg",
            "/assets/policy.svg",
            "/assets/gis-logo-mp.svg",
            "/assets/legal.svg",
          ].map((src, idx) => (
            <div key={`dup-${idx}`} className="d-flex justify-content-center align-items-center mx-4" style={{ minWidth: '195px' }}>
              <img src={src} alt={`brand-${idx}`} className="img-fluid" style={{ maxHeight: '80px' }} />
            </div>
          ))}
        </div>
      </div>

    </main>
  );
};

export default Partners;

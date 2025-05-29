"use client";
// import React from "react";
// import Slider from "react-slick";
// import "../public/styles/IndustriesSlider.css";

// const categories = [
//   {
//     title: "eCommerce",
//     desc: "B2B, wholesale pricing, and purchasing solutions.",
//     img: "/assets/cat1.jpg",
//   },
//   {
//     title: "Luxury & Jewellery",
//     desc: "Premium luxury jewellery with AR and try-on features.",
//     img: "/assets/cat2.jpg",
//   },
//   {
//     title: "Fashion & Apparel",
//     desc: "Trendy, fast-loading stores with seamless browsing and checkout.",
//     img: "/assets/cat3.jpg",
//   },
//   {
//     title: "Electronics & Gadgets",
//     desc: "High-performance platforms with custom filters and specs.",
//     img: "/assets/cat4.jpg",
//   },
//   {
//     title: "Grocery & FMCG",
//     desc: "Scheduled delivery, subscription, and multi-vendor setup.",
//     img: "/assets/cat5.jpg",
//   },
// ];

// const CategorySlider = () => {
//     const settings = {
//         infinite: true,
//         centerMode: true,
//         centerPadding: "100px", // Peek effect on left and right
//         slidesToShow: 3, // Center + 2 half visible
//         speed: 500,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 1,
//               centerPadding: "60px",
//               centerMode: true
//             }
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 1,
//               centerPadding: "40px",
//               centerMode: true
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               centerPadding: "0px",
//               centerMode: false
//             }
//           }
//         ]
//       };

//   return (
//     <div className="category-slider-container">
//       <Slider {...settings}>
//         {categories.map((cat, index) => (
//           <div className="category-card-wrapper" key={index}>
//             <div
//               className="category-card"
//               style={{ backgroundImage: `url(${cat.img})` }}
//             >
//               <div className="category-content">
//                 <h4>{cat.title}</h4>
//                 <p>{cat.desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default CategorySlider;
// import React from "react";
// import Slider from "react-slick";
// import '../public/styles/IndustriesSlider.css';

// const industries = [
//   { title: "eCommerce", image: "/assets/fashion.svg" },
//   { title: "Luxury & Jewellery", image: "/assets/fashion.svg" },
//   { title: "Fashion & Apparel", image:"/assets/fashion.svg" },
//   { title: "Electronics & Gadgets", image: "/assets/fashion.svg"},
//   { title: "Grocery & FMCG", image: "/assets/fashion.svg" }
// ];

// const settings = {
//   infinite: true,
//   centerMode: true,
//   centerPadding: "200px",
//   slidesToShow: 3,
//   speed: 500,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         centerPadding: "60px",
//         centerMode: true
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         centerPadding: "40px",
//         centerMode: true
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         centerPadding: "0px",
//         centerMode: false
//       }
//     }
//   ]
// };


// const IndustriesSlider = () => {
//   return (
//     <>
//     <section className="industry-banner">
//       <div className="industry-banner-text">
//         <h1>
//           eCommerce Solutions to <br />
//           Drive Growth Across Every <br />
//           Sector
//         </h1>
//       </div>
//       <div className="industry-banner-content">
//         <p>
//           Every industry has unique needs, and at Wappgg, we craft custom
//           eCommerce solutions designed to maximize efficiency, enhance user
//           experience, and boost sales.
//         </p>
//         <button className="industry-banner-button">
//           Get Consultation ⚡
//         </button>
//       </div>
//     </section>
//     <div className="industry-slider-container">
//       <Slider {...settings} className="industry-slider">
//         {industries.map((item, index) => (
//           <div className="industry-card" key={index}>
//             <div
//               className="industry-card-inner"
//               style={{ backgroundImage: `url(${item.image})` }}
//             ></div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//     </>
//   );
// };

// export default IndustriesSlider;
import React from "react";
import Slider from "react-slick";
import '../public/styles/IndustriesSlider.css';

// const industries = [
//   { title: "eCommerce", image: "/assets/fashion.svg" },
//   { title: "Luxury & Jewellery", image: "/assets/fashion.svg" },
//   { title: "Fashion & Apparel", image: "/assets/fashion.svg" },
//   { title: "Electronics & Gadgets", image: "/assets/fashion.svg"},
//   { title: "Grocery & FMCG", image: "/assets/fashion.svg" }
// ];
const industries = [
  { 
    title: "Fashion & Apparel", 
    image: "/assets/framefashion.svg",
    description: "Trendy, fast-loading stores with seamless browsing and checkout."
  },
  { 
    title: "Luxury & Jewellery", 
    image: "/assets/luxury.svg",
    description: "Premium Luxury and Jewellery UI/UX with AR/VR try-on features."
  },
  { 
    title: "Electronics & Gadgets", 
    image: "/assets/frame.svg",
    description: "High-performance platforms with custom filters and specifications."
  },
  { 
    title: "Grocery & FMC", 
    image: "/assets/grocery.svg",
    description: "Hyperlocal delivery, subscription models, and multi-vendor setups."
  },
  { 
    title: "B2B eCommerce", 
    image: "/assets/eComm.svg",
    description: "Bulk ordering, wholesale pricing, and corporate purchasing solutions."
  }
];
const settings = {
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1630,
      settings: {
        slidesToShow: 3,
        centerPadding: "200px"
      }
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        centerPadding: "120px"
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        centerPadding: "100px"
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerPadding: "80px"
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "60px"
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: "0",
        arrows: false
      }
    }
  ]
};

const IndustriesSlider = () => {
  return (
    <>
      <section className="industry-banner">
        <div className="industry-banner-text">
          <h1>
            eCommerce Solutions to <br />
            Drive Growth Across Every <br />
            Sector
          </h1>
        </div>
        <div className="industry-banner-content">
          <p>
            Every industry has unique needs, and at Wappgg, we craft custom
            eCommerce solutions designed to maximize efficiency, enhance user
            experience, and boost sales.
          </p>
          <button className="industry-banner-button">
            Get Consultation ⚡
          </button>
        </div>
      </section>
      {/* <div className="industry-slider-container">
        <Slider {...settings} className="industry-slider">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <div
                className="industry-card-inner"
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div> */}
       <div className="industry-slider-container">
        <Slider {...settings} className="industry-slider">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <div
                className="industry-card-inner"
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="industry-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default IndustriesSlider;
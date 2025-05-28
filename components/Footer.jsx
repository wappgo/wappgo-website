"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Footer = () => {

  const router = useRouter();
  return (
    <main className="footer-container">
      <article className="logo-address-container">
        <div className="row">
          <div className="col-xxl-6 col-xl-12 mt-5">
            <div className="footer-logo">
              <img src="/assets/footer-logo.svg" />
              <div>
                <img src="/assets/footer-logo-text.svg"/>
                <span>We Create Masterpiece</span>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-12 mt-5">
            <div className="footer-address">
              <h4>Contact Us At</h4>
              <span className="address">
                403, The View Tower, Yashwant Niwas Road , Indore MP 452001
              </span>
              <div className="row mt-2">
                <div className="col-lg-4">
                  <p className="text-white phone-icon">
                    <img src="/assets/phone.svg" />
                    +0731-4240330
                  </p>
                </div>
                <div className="col-lg-4">
                  <p className="text-white phone-icon">
                    <img src="/assets/phone.svg" />
                    (+91) 70005-81635
                  </p>
                </div>
                <div className="col-lg-4">
                  <p className="text-white phone-icon">
                    <img src="/assets/email.svg" />
                    info@wappgo.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="row my-5">
        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-12 mt-3">
          <ul className="feature-list">
            <li>Company</li>
            <li className='footer-items-route' onClick={() => router.push("/about")} >About us</li>
            <li className='footer-items-route' onClick={() => router.push("/contact")}>Contact us</li>
            <li className='footer-items-route'>Features</li>
            <li className='footer-items-route' onClick={() => router.push("/Consultation")}>Get-Consultation</li>

          </ul>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mt-3">
          <ul className="feature-list">
            <li>Services</li>
            <li className='footer-items-route'>Managed IT Services</li>
            <li className='footer-items-route'>Cyber Security</li>
            <li className='footer-items-route'>IT Compliance</li>
            <li className='footer-items-route'>Network Connectivity</li>
            <li className='footer-items-route'>Cloud Services</li>
          </ul>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mt-3">
          <ul className="feature-list">
            <li>Developement</li>
            <li className='footer-items-route'>Website Development</li>
            <li className='footer-items-route'>App Development</li>
            <li className='footer-items-route'>Desktop Application</li>
            <li className='footer-items-route'>AI / ML</li>
            <li className='footer-items-route'>Chat Bots</li>
          </ul>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-12 mt-3">
          <ul className="feature-list">
            <li>Other Services</li>
            <li className='footer-items-route'>UI/UX Design</li>
            <li className='footer-items-route'>Graphics Design</li>
            <li className='footer-items-route'>Video Editing</li>
          </ul>
        </div>
        <div className="col-xl-2 col-lg-12 col-md-3 col-sm-6 col-12 mt-3">
          <ul className="feature-list">
            <li>More Info</li>
            <li className='footer-items-route'>Blogs</li>
            <li className='footer-items-route' onClick={() => router.push("/terms-condition")}  >Terms & Conditions</li>
            <li className='footer-items-route' onClick={() => router.push('/privacy-policy')} >Privacy Policy</li>
            <li className='footer-items-route' onClick={() => router.push('/cookies-policy')} >Cookie Policy</li>
          </ul>
        </div>
      </div>
      <article className="media-icons">
        {/* <img src="/assets/linkedin.svg" /> */}
        <img src="/assets/discord.svg" />
        <img src="/assets/twitter.svg" />
        <img src="/assets/youtube.svg" />
        <img src="/assets/fb.svg" />
      </article>
      <p className="copyright">
        Copyright © 2025 Wappgo IT Services Pvt. Ltd. All rights reserved
      </p>
    </main>
  );
};

export default Footer;

// import React from "react";
// import "../public/styles/Footer.css";
// // import Video from '../assets/ai-videos.mp4';
// const Footer = () => {
//   return (
//     <div className="footer-container5">
//       <video autoPlay loop muted className="footer-video5">
//         <source src='/assets/ai-videos.mp4'  type="video/mp4" />
//       </video>
//       <div className="footer-overlay5">
//         <div className="footer-content5">
//           <div className="footer-left5">
//             <img src="/logo.png" alt="Logo" className="footer-logo" />
//             <p className="footer-address5">
//               <img src="/india-flag.png" alt="India" className="flag5" />
//               305 CORPORATE HOUSE 169 R.N.T MARG, INDORE 452001, MADHYA PRADESH
//             </p>
//             <p>
//               📞 +0731-4240330 &nbsp;&nbsp; ✉️ info@wappgo.com
//             </p>
//             <div className="footer-social-icons5">
//               <i className="fab fa-linkedin"></i>
//               <i className="fab fa-discord"></i>
//               <i className="fab fa-twitter"></i>
//               <i className="fab fa-youtube"></i>
//               <i className="fab fa-facebook"></i>
//             </div>
//           </div>

//           <div className="footer-right5">
//             <div className="footer-links5">
//               <div>
//                 <h4>Company</h4>
//                 <p>About us</p>
//                 <p>Contact us</p>
//                 <p>Features</p>
//               </div>
//               <div>
//                 <h4>Services</h4>
//                 <p>Managed IT Services</p>
//                 <p>Cyber Security</p>
//                 <p>IT Compliance</p>
//                 <p>Network Connectivity</p>
//                 <p>Cloud Services</p>
//               </div>
//               <div>
//                 <h4>Development</h4>
//                 <p>Website Development</p>
//                 <p>App Development</p>
//                 <p>Desktop Application</p>
//                 <p>AI / ML</p>
//                 <p>Chat Bots</p>
//               </div>
//               <div>
//                 <h4>Other Services</h4>
//                 <p>UI/UX Design</p>
//                 <p>Graphics Design</p>
//                 <p>Video Editing</p>
//               </div>
//             </div>
//             <div className="footer-bottom-links5">
//               <p>Blogs</p>
//               <p>Terms & Conditions</p>
//               <p>Privacy Policy</p>
//               <p>Cookie Policy</p>
//             </div>
//           </div>
//         </div>
//         <p className="footer-copyright5">© 2025 Wappgo IT Services Pvt. Ltd. All rights reserved</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import React from "react";
// import "../public/styles/Footer.css";

// const Footer = () => {
//   return (
//     <div className="footer-container5">
//       <video autoPlay loop muted className="footer-video5">
//         <source src='/assets/ai-videos.mp4' type="video/mp4" />
//       </video>
//       <div className="footer-overlay5">
//         <div className="footer-content5">
//           <div className="footer-left5">
//             <div className="footer-logo5"><img src="/assets/logo.svg"/></div>
//             <p className="footer-address5">
//             305 CORPORATE HOUSE 169 R.N.T MARG,
//             INDORE 452001 , MADHYA PRADESH
//             </p>
//             <p>
//               +0731-4240330 &nbsp;&nbsp; info@wappoo.com
//             </p>
//           </div>

//           <div className="footer-right5">
//             <div className="footer-links5">
//               <div>
//                 <h4>Company</h4>
//                 <p>About us</p>
//                 <p>Contact us</p>
//                 <p>Features</p>
//               </div>
//               <div>
//                 <h4>Services</h4>
//                 <p>Managed IT Services</p>
//                 <p>Cyber Security</p>
//                 <p>IT Compliance</p>
//                 <p>Network Connectivity</p>
//                 <p>Cloud Services</p>
//               </div>
//               <div>
//                 <h4>Development</h4>
//                 <p>Website Development</p>
//                 <p>App Development</p>
//                 <p>Desktop Application</p>
//                 <p>AI / ML</p>
//                 <p>Chat Bots</p>
//               </div>
//               <div>
//                 <h4>Other Services</h4>
//                 <p>UI/UX Design</p>
//                 <p>Graphics Design</p>
//                 <p>Video Editing</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="footer-bottom5">
//           <p className="footer-copyright5">
//             Copyright © 2023 Wappoo IT Services Pvt. Ltd. All rights reserved
//           </p>
//           <div className="footer-bottom-links5">
//             <p>Blogs</p>
//             <p>Terms & Conditions</p>
//             <p>Privacy Policy</p>
//             <p>Cookie Policy</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
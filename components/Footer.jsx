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
                <div className="col-lg-5">
                  <p className="text-white phone-icon">
                    <img src="/assets/phone.svg" />
                    (+91) 70005-81635
                  </p>
                </div>
                <div className="col-lg-3">
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
          </ul>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mt-3">
          <ul className="feature-list">
            <li>Services</li>
            <li>Managed IT Services</li>
            <li>Cyber Security</li>
            <li>IT Compliance</li>
            <li>Network Connectivity</li>
            <li>Cloud Services</li>
          </ul>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 mt-3">
          <ul className="feature-list">
            <li>Developement</li>
            <li>Website Development</li>
            <li>App Development</li>
            <li>Desktop Application</li>
            <li>AI / ML</li>
            <li>Chat Bots</li>
          </ul>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-12 mt-3">
          <ul className="feature-list">
            <li>Other Services</li>
            <li>UI/UX Design</li>
            <li>Graphics Design</li>
            <li>Video Editing</li>
          </ul>
        </div>
        <div className="col-xl-2 col-lg-12 col-md-3 col-sm-6 col-12 mt-3">
          <ul className="feature-list">
            <li>More Info</li>
            <li>Blogs</li>
            <li className='footer-items-route' onClick={() => router.push("/terms-condition")}  >Terms & Conditions</li>
            <li className='footer-items-route' onClick={() => router.push('/privacy-policy')} >Privacy Policy</li>
            <li className='footer-items-route' onClick={() => router.push('/cookies-policy')} >Cookie Policy</li>
          </ul>
        </div>
      </div>
      <article className="media-icons">
        <img src="/assets/linkedin.svg" />
        <img src="/assets/discord.svg" />
        <img src="/assets/twitter.svg" />
        <img src="/assets/youtube.svg" />
        <img src="/assets/fb.svg" />
      </article>
      <p className="copyright">
        Copyright © 2023 Wappgo IT Services Pvt. Ltd. All rights reserved
      </p>
    </main>
  );
};

export default Footer;

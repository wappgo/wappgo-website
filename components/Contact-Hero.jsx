

import React from 'react';
import Image from 'next/image';

const GetInTouch = () => {
  return (

    <div className="get-in-touch-container ">
      {/* Centered Heading and Description */}
      <div className="heading-section">
        <h2>
          Have a project in <br /> mind?
          <span> Drop me a line.</span>
        </h2>
        <p>
          Got a project? Drop me a line if you want to work together on
          something exciting. Or <br /> do you need our help? Feel free to contact us.
        </p>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='get-in-touch2 '>
          <div className="row">
            <div className="col-lg-5">
              <div className='contact-info contact-bg'>
                <div className="">
                  <div className="contact-details">
                    <h3>Get in touch</h3>

                    {/* Email */}
                    <div className="contact-item">
                      <div className="icon-wrapper">
                        <img src="/assets/envelope.svg" alt="Email" className="icon" />
                      </div>
                      <div>
                        <p className="contact-heading">Email us</p>
                        <a href="mailto:info@wappgo.com">info@wappgo.com</a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="contact-item">
                      <div className="icon-wrapper">
                        <img src="/assets/phone-call.svg" alt="Email" className="icon" />
                      </div>
                      <div>
                        <p className="contact-heading">Phone number</p>
                        <a href="tel:+917000581635">(+91) 70005-81635</a>
                      </div>
                    </div>

                    {/* Address */}
                    {/* <div className="contact-item">
                      <div className="icon-wrapper">
                        <img src="/assets/map-pin-line.svg" alt="Location" className="icon" />
                      </div>
                      <div>
                        <p className="contact-heading">Address</p>
                        <p>
                          403, The View Tower,<br /> Yashwant Niwas Road,<br /> Indore MP 452001
                        </p>
                      </div>
                    </div> */}


                    <div className="social-section">
                      <p>- Connect with us:</p>
                      <div className="social-icons">

                        <a
                          href="https://www.facebook.com/share/1HfgkXq5Hn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                        >
                          <div className='socialdiv'>
                            <img src="/assets/facebook-contact.svg" alt='facebook' />
                          </div>
                        </a>


                        <a
                          href="https://www.linkedin.com/company/wappgo/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <div className='socialdiv'>
                            <img src="/assets/linkedin-contact.svg" alt='linkedin' />
                          </div>
                        </a>

                        {/* <a href="#" aria-label="LinkedIn">
                          <div className='socialdiv'>
                            <img src="/assets/x-contact.svg" alt='x' />
                          </div>
                        </a> */}


                        <a href="https://www.instagram.com/wappgo/?igsh=Y3M2ZWR4NWNxNWFq"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram">
                          <div className='socialdiv'>
                            <img src="/assets/instagram-contact.svg" alt='x' />
                          </div>
                        </a>
                        {/* <a href="#" aria-label="Instagram">
                          <div className='socialdiv'>
                            <img src="/assets/driven-contact.svg" alt='x' />
                          </div>
                        </a> */}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className='contact-form'>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group me-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Full name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter email address" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subjects</label>
                    <input type="text" id="subject" placeholder="Write subject here" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" placeholder="Brand/Company/Product Name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Tell us about your project" required></textarea>
                  </div>
                  <button type="submit">
                    Send Message ⚡
                  </button>
                </form>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

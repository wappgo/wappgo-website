"use client";
import { Button } from "./Service";
import { useForm } from "react-hook-form";
import "../public/styles/bg.css"

const ContactForm = () => {
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;

  const { errors, isSubmitSuccessful, isSubmitted } = formState;
  const btnStyle = {
    background: "#1925FF",
    color: "white",
  };
  return (
    <main className="contact-form-container">
      <h4>Let’s Get In Touch</h4>
      <h2>Expand Your Business With Us</h2>
      <div className="row">
        <div className="">
          <div className="row">
            <div className="col-lg-12 col-md-8 col-sm-11 mt-3">
              <label htmlFor="name" className="contact-form-label">
                Name
              </label>
              <input
                id="name"
                placeholder="Enter Your Name"
                className="form-control message-box"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-8 col-sm-11 mt-3">
              <label htmlFor="email" className="contact-form-label">
                Business Email
              </label>
              <input
                id="email"
                placeholder="Enter Your Email"
                className="form-control message-box"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-8 col-sm-11 mt-3">
              <label htmlFor="phone" className="contact-form-label">
                Phone Number
              </label>
              <input
                id="phone"
                placeholder="Enter Your Phone Number"
                className="form-control message-box"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-8 col-sm-11 mt-3">
            <label htmlFor="message" className="message-label">
              Tell Us More About Your Project Needs
            </label>
            <textarea
              id="message"
              className=" form-control message-box"
              placeholder="Enter Your Message"
            ></textarea>
          </div>
        </div>
        </div>

      </div>
      <div>
        <Button text={"Get Started"} className="common-btn" />
        <p className="form-note">
          <span>Note :</span> Our Team will reach out to you shortly !
        </p>
      </div>
    </main>
  );
};

export default ContactForm;

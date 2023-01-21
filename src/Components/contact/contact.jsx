import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Linkedin from "../../img/linkedin.png";
import Address from "../../img/address.png";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const form = document.getElementById("my_form");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    alert(name + "has successfully sent an email!");

    emailjs
      .sendForm(
        "service_jclm1rl",
        "template_mxb0gvl",
        formRef.current,
        "QorUSfyGMetQIKlrc"
      ) // You need to pay using emailjs to actually send the email
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.reset();
    setName();
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss the opportunity</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              Number
            </div>

            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              email
            </div>

            <div className="c-info-item">
              <img src={Linkedin} alt="" className="c-icon" />
              linkedin
            </div>

            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Location
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            Please fill out the form. I will get back to you as soon as
            possible.
          </p>

          <form ref={formRef} onSubmit={sendEmail} id="my_form" action="">
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              value={name}
              onChange={handleChange}
            />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

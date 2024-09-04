import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="aboutsec1">
          <h1 className="sitename">About </h1>
          <p className="text-line">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <p className="about-slogan">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="homepage-btns" type="submit">
            Get Started
          </button>
        </div>
        <div className="contact">
          <div className="contactsec1">
            <h3>Contact Us</h3>
            <div className="inputsec">
              <input type="text" placeholder="Name"></input>
            </div>
            <div className="inputsec">
              <select name="service" id="services">
                <option value=" ">Select Services</option>
                <option value="service1">Service1</option>
                <option value="service1">Service1</option>
                <option value="service1">Service1</option>
                <option value="service1">Service1</option>

              </select>
            </div>
            <div className="inputsec phonesec">
            <div class="custom-select-wrapper">
              <select id="area-code" name="area-code">
                <option value="+1">USA</option>
                <option value="+44">UK</option>
                <option value="+91">India</option>
                <option value="+61">Australia</option>
                <option value="+81">Japan</option>
              </select>
              </div>
              <input type="text" placeholder="Phone number"></input>
            </div>
            <div className="inputsec">
              <input type="text" placeholder="Email Address"></input>
            </div>
            <div className="inputsec message">
              <textarea type="text" placeholder="Message"></textarea>
            </div>
            <div className="inputsec">
              <button>Submit Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

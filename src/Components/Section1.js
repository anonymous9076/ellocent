import React from "react";
import "./Section1.css";

function Section1() {
  return (
    <>
      <div className="section1">
        <div className="home-sec1">
          <h1 className="sitename">
            Empowering Clinics to Scale New Heights in <span>Healthcare.</span>
          </h1>
          <p className="slogan">
            Discover a seamless, efficient, and user friendly platform designed
            to enhance clinic operations, empower doctors, and provide patients
            with the best care possible. Join us in transforming the future of
            healthcare today.
          </p>
            <button className="homepage-btns" type="submit">
              Get Started
            </button>
       
        </div>
        <div className="home-img">
            <img id="bg-design" src="/Images/Group 1000011263.png" alt="..."></img>
          <img src="/Images/Group 1000011262.png" alt="..."></img>
          <img id="dr-tag" src="/Images/Dr. Jenny Wilson.png" alt="..."></img>
        </div>
      </div>
    </>
  );
}

export default Section1;

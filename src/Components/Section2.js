import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <>
      <div className="section2">
        <div className="overview-sec1">
          <div className="overview-bg-img">
            <div className="collage">
                <div className="col1">
                <div></div>
                <img className="img1" src="/Images/Manage.png" alt="..."></img>
                </div>
                <div className="col2">
                <img className="img3" src="Images/Daily Expenses.png" alt="..."></img>
                <img className="img2" src="/Images/Group 1000011231.png" alt="..."></img>
                </div>
            </div>
          </div>
        </div>
        <div className="overview-sec2">
          <h1 className="overview">Overview</h1>
          <p className="slogan">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="overview-btns" type="submit">
            Learn more about us
          </button>
        </div>
      </div>
    </>
  );
}

export default Section2;

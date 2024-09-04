import React from 'react'
import './Footer.css'

function Footer() {
  return (
   <>
    <div className="footer ">
      <div className="row">
        <div className="col-lg-5 left-para">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias.
          </p>
          <ul className='social-icons'>
            <li>
                <img src='/Images/linkedin.png' alt='...'></img>
            </li>
            <li>
                <img src='/Images/instagram.png' alt='...'></img>
            </li>
            <li>
                <img src='/Images/facebook.png' alt='...'></img>
            </li>
            <li>
                <img src='/Images/linkedin.png' alt='...'></img>
            </li>

          </ul>
        </div>

        <div className=" yo col-lg-2 col-md-4 ">
          <h5 className="text">Support</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
          </ul>
        </div>

        <div className=" yo col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className="text mb-0">Services</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
          </ul>
        </div>

        <div className=" yo col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className="text mb-0">Legal</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
            <li>
              <a href="#!" className="text-body">Lorem Ipsum </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-end bottom " >
      Webapp 2024 © All Rights Reserved
    </div>
  

   </>
  )
}

export default Footer
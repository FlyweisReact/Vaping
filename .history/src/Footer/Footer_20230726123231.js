/** @format */

import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-out-container">
        <div className="footer">
          <div className="footer-container">
            <div className="footer-col">
              <h2>CONTACT US</h2>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <span>info@flyweis.technology</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span>
                    {" "}
                    A-66, Sector 63 Rd, A Block, Noida, Uttar Pradesh 201301{" "}
                  </span>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="img-cont">
                {/* <img
                  src="https://demo.bestprestashoptheme.com/vaping/img/cms/logo-footer.png"
                  alt=""
                /> */}
                <h2 className="logo">
                  {" "}
                  Krish <br />
                  WholeSeller
                </h2>
              </div>

              <div className="icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>

            <div className="footer-col">
              <h2>newsletter</h2>

              <div className="block_newsletter">
                <input type="text" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="copy-right">
          <img
            src="https://demo.bestprestashoptheme.com/vaping/img/cms/payment.png"
            alt=""
          />
          <span>Copyright © 2022 Vinovathemes. All rights reserved.</span>
        </div>
      </div>
    </>
  );
};

export default Footer;

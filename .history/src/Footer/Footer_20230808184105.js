/** @format */

import React, { useState, useEffect } from "react";
import { ContactDetail, subscription } from "../Repository/User/ContactDetail";

const Footer = () => {
  const [contactDetail, setContactDetail] = useState({});
  const [email, setEmail] = useState("");
  const type = "SUBSCRIBE";

  const payload = { email, type };

  const getContact = async () => {
    try {
      const res = await ContactDetail();
      setContactDetail(res);
    } catch {}
  };

  useEffect(() => {
    getContact();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    subscription(payload);
    setEmail("");
  };

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
                  <span> {contactDetail?.infoEmail} </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <span>{contactDetail?.contactAddress}</span>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="img-cont">
                <h2 className="logo">
                  {" "}
                  Krish <br />
                  WholeSeller
                </h2>
              </div>

              <div className="icons">
                <a href={`https://${contactDetail?.fb}`} target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href={`https://${contactDetail?.twitter}`} target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href={`https://${contactDetail?.pinterest}`} target="_blank">
                  <i className="fa-brands fa-pinterest"></i>
                </a>
                <a href={`https://${contactDetail?.youtube}`} target="_blank">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href={`https://${contactDetail?.instagram}`} target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h2>newsletter</h2>

              <div className="block_newsletter">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit">Subscribe</button>
                </form>
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

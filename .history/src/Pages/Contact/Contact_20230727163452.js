/** @format */

import React, { useState, useEffect } from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";
import {
  ContactDetail,
  createQuery,
} from "../../Repository/User/ContactDetail";

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [contactDetail, setContactDetail] = useState({});
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [query, setQuery] = useState(null);

  payload = { name, email, mobile, query };

  const handleSubmit = (e) => {
    e.preventDefault()
    createQuery(payload);
  };
  const getContact = async () => {
    try {
      const res = await ContactDetail();
      setContactDetail(res);
    } catch {}
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div className="contact-us">
      <Navbar />
      <Breadcrumb title={"Contact"} />
      <iframe
        src={contactDetail?.map}
        height="450"
        style={{ border: 0, width: "100%" }}
        allowfullscreen=""
        loading="lazy"
        title="GetInTouch"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container-width">
        <div className="contact-form">
          <div className="left-container">
            <div className="form-cont">
              <h2>Get In Touch</h2>

              <div className="input-group">
                <div className="form-group">
                  <label>Name</label>
                  <br />
                  <span>
                    <input type="text" name="Name" placeholder="Name" />
                  </span>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <br />
                  <span>
                    <input
                      type="text"
                      name="Email"
                      placeholder="Email Address"
                    />
                  </span>
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <br />
                  <input type="text" name="Phone" placeholder="Phone Number" />
                </div>
              </div>

              <div className="single-input">
                <label>Your message</label>
                <textarea
                  placeholder="Comment or Message *"
                  col={40}
                  row={10}
                ></textarea>
              </div>

              <button>Send Message</button>
            </div>
          </div>
          <div className="right-container">
            <div className="Content">
              {" "}
              <h3>Address</h3>
              <div className="content-container">{contactDetail?.address}</div>
              <h3>Phone</h3>
              <div className="content-container"> {contactDetail?.phone} </div>
              <h3>Email</h3>
              <div className="content-container">
                {" "}
                {contactDetail?.supportEmail}{" "}
              </div>
              <h3>Opening Time</h3>
              <div className="content-container">
                {contactDetail?.openingTime}
              </div>
              <h3>Follow Us On</h3>
              <div className="social-links">
                <ul>
                  <li>
                    <a
                      href={`https://${contactDetail?.twitter}`}
                      target="_blank"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://${contactDetail?.instagram}`}
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://${contactDetail?.dribbble}`}
                      target="_blank"
                    >
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href={`https://${contactDetail?.fb}`} target="_blank">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

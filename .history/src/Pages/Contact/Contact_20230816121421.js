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

  const payload = { name, email, mobile, query };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  console.log(contactDetail?.map);

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.564465184463!2d77.37834267619705!3d28.612839984973466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5abc9471d59%3A0x5c647411835dccdc!2sFlyweis%20Group!5e0!3m2!1sen!2sin!4v1692168251672!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


  return (
    <div className="contact-us">
      <Navbar />
      <Breadcrumb title={"Contact"} />
      {contactDetail?.map ? (
        <iframe
          src={contactDetail?.map}
          height="450"
          style={{ border: 0, width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          title="GetInTouch"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        ""
      )}

      <div className="container-width">
        <div className="contact-form">
          <div className="left-container">
            <div className="form-cont">
              <h2>Get In Touch</h2>

              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <div className="form-group">
                    <label>Name</label>
                    <br />
                    <span>
                      <input
                        type="text"
                        name="Name"
                        placeholder="Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </span>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <br />
                    <span>
                      <input
                        type="email"
                        name="Email"
                        placeholder="Email Address"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </span>
                  </div>

                  <div className="form-group">
                    <label>Phone</label>
                    <br />
                    <input
                      type="tel"
                      pattern="[0-9]{12}"
                      onChange={(e) => setMobile(e.target.value)}
                      name="mobile"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div className="single-input">
                  <label>Your message</label>
                  <textarea
                    placeholder="Comment or Message *"
                    col={40}
                    row={10}
                    onChange={(e) => setQuery(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit">Send Message</button>
              </form>
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

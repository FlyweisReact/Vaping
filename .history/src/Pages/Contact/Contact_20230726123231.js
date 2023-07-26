/** @format */

import React from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-us">
      <Navbar />
      <Breadcrumb title={"Contact"} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5644672755125!2d77.37604668781074!3d28.612839922268652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5abc9471d59%3A0x5c647411835dccdc!2sFlyweis%20Group!5e0!3m2!1sen!2sin!4v1689936123403!5m2!1sen!2sin"
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
              <div className="content-container">
                14 LE Gounlburn St, Sydney 1198NSA.
              </div>
              <h3>Phone</h3>
              <div className="content-container">(+089) 19918989</div>
              <h3>Email</h3>
              <div className="content-container">support@domain.com</div>
              <h3>Opening Time</h3>
              <div className="content-container">
                8:00Am – 10:00Pm, Sunday Close
              </div>
              <h3>Follow Us On</h3>
              <div className="social-links">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
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

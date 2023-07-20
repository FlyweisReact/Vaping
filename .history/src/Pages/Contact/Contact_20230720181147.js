/** @format */

import React from "react";
import Breadcrumb from "../../Component/Breadcrumb";
import Navbar from "../../Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumb title={"Contact"} />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5070472463995!2d77.18552060477374!3d28.52447542551125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e0667819b4f%3A0x834995f160759db8!2sQutub%20Minar!5e0!3m2!1sen!2sin!4v1689856842238!5m2!1sen!2sin"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;

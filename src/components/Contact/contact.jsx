// import React from "react";
import "./contact.css";

const contact = () => {
  return (
    <div className="contact-us-container">
      <h2 className="contact-us-title">Contact us</h2>
      <div className="contact-us-cards">
        {/* Contact Form Card */}
        <div className="contact-card">
          <form className="contact-form">
            <label>First Name:</label>
            <input type="text" placeholder="Enter First Name" />

            <label>Last Name:</label>
            <input type="text" placeholder="Enter Last Name" />

            <label>Contact Number:</label>
            <input type="tel" placeholder="Contact Number" />

            <label>Email Address:</label>
            <input type="email" placeholder="Enter Email Id" />

            <label>Message:</label>
            <textarea placeholder="Enter Message"></textarea>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>

        {/* Office Info Card */}
        <div className="info-card">
          <h3>Address</h3>
          <h4>Head Office :</h4>
          <p>
            📍 TR-229, Ground Floor, AltF Success Tower B, Golf Course Extn
            Road, Sector-65, Gurugram, Haryana-122005, India
          </p>
          <h4>Other Offices :</h4>
          <p>📍 Pune, Maharashtra-411028, India</p>
          <p>📍 Georgia, USA 30003, USA</p>

          <button className="email-button">Email Id</button>
          <p>✉️ info@techxotica.com</p>
        </div>
      </div>
    </div>
  );
};

export default contact;

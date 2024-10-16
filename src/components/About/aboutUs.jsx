// import React from "react";
import "./aboutUs.css";

const aboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Main Title */}
      <h1 className="about-title">About Us</h1>

      {/* Who We Are Section */}
      <div className="who-we-are-section">
        <h2 className="section-title">WHO WE ARE</h2>
        <p className="section-content">
          We are a Business consulting, information technology, and outsourcing
          services company, with a venture of a number of highly experienced and
          dedicated professionals that have come together to provide highly
          reliable, highly scalable and high performance analytics and software
          solutions. At Techxotica, we work hard to achieve quality-based
          products and services. We serve customers all over the world and are
          thrilled to be a part of the wing of the financial industry. One thing
          we all share is a belief that software should empower people, and not
          get in their way. We Offer World-Class Infrastructure Processes to our
          clients.
        </p>
      </div>

      {/* Our Vision Section */}
      <div className="vision-section">
        <h2 className="section-title">OUR VISION</h2>
        <p className="section-content">
          To build high quality financial technology development solutions.
          Creating an exciting and a challenging work environment that
          encourages innovation and rewards performers. Constantly working
          towards enhancing shareholder value, our goals towards our vision, and
          our values guides and enhances the work that we do everyday.
        </p>
      </div>
    </div>
  );
};

export default aboutUs;

// import React from 'react';
// import './What.css'; // Assuming the CSS is in a separate file

const WhatWeOffer = () => {
  return (
    <div className="what-container">
      <h2>What We Offer</h2>
      <div className="what-grid">
        {/* First row of cards with hover effects */}
        <div className="what-card hover-card">
          <h3>ANALYTICS</h3>
          <p>To provide services covering the whole spectrum of Analytics work done in an organization.</p>
          <button className="explore-btn">Explore More</button>
        </div>
        <div className="what-card hover-card">
          <h3>CLOUD COMPUTING</h3>
          <p>Take advantage of our expertise in cloud development to get a micro services powered cloud application.</p>
          <button className="explore-btn">Explore More</button>
        </div>
        <div className="what-card hover-card">
          <h3>BIG DATA / DATA MANAGEMENT</h3>
          <p>To ensure a high level of data quality and accessibility for business intelligence and big data analytics applications.</p>
          <button className="explore-btn">Explore More</button>
        </div>
        <div className="what-card hover-card">
          <h3>SOFTWARE DEVELOPMENT</h3>
          <p>We offer Innovative & Competitive services for Custom Software & Application Development.</p>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>

      {/* Second section for Case Studies without hover effects */}
      <div className="case-studies-section">
        <h3>CASE STUDIES</h3>
        <p>
          Techxotica has helped multi-billion dollar investment management service providers, Bond Analysis, Global banks, Hedge funds, 
          Cutting-edge technology solutions to solve the complex problems across business functions.
        </p>
        <div className="case-studies-grid">
          <button className="case-study-btn">Financial Case Studies</button>
          <button className="case-study-btn">HealthCare Case Studies</button>
          <button className="case-study-btn">Travel Case Studies</button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

// import React from "react";
import "./case.css";

const CaseStudy = () => {
  return (
    <div className="case-study-container">
      <h1 className="case-study-title">Travel Case Study</h1>

      {/* Outer Rectangle for Cards */}
      <div className="card-container">
        {/* Problem Card */}
        <div className="card">
          <h3 className="card-title">Problem</h3>
          <p className="card-content">
            Booking the best and affordable Property for the vacation was a
            problem for people and handling the large number of booking requests
            was a real challenge for property managers. The client needed a
            solution to address the issues of both property managers and people.
          </p>
        </div>

        {/* Approach Card */}
        <div className="card">
          <h3 className="card-title">Approach</h3>
          <ul className="card-content">
            <li>
              A system was developed to register/onboard the property managers
              and list their properties.
            </li>
            <li>
              A unique email address is provided to the property managers. We
              have configured the email details in the database.
            </li>
            <li>
              A user booking the property for vacation enters the request on the
              property manager’s website.
            </li>
            <li>
              User-entered data is sent via a forwarded email to the property
              manager as per the format.
            </li>
            <li>
              The system parses the email and stores it in a centralized system.
            </li>
            <li>
              A centralized database with all the property data updates
              regularly from the property reservation management system
              (ESCAPIA, ISLink, RMS, RNS) through a web API call.
            </li>
            <li>
              We process the parsed information using the centralized database
              to calculate rent/cost, availability, etc.
            </li>
            <li>
              If no property is available as per the request, we look for the
              nearest available property based on user requirements.
            </li>
            <li>
              We use SendGrid web API to send mass emails with all the requested
              information (property quotes).
            </li>
          </ul>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <h2 className="benefits-title">Benefits</h2>
        <ul className="benefits-list">
          <li>Reduced Manual Work</li>
          <li>Easy access to required property details</li>
        </ul>
      </div>
    </div>
  );
};

export default CaseStudy;

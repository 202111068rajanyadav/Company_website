// import React from 'react';
// import './Why.css'; // Ensure you have linked the updated CSS file

const Why = () => {
  return (
    <div className="why-container">
      <h2>Why Supes ?</h2>
      <div className="why-grid">
        <div className="why-card">
          <img src="https://www.techxotica.com/assets/services-icon/ws.png" alt="Cost Effective Solutions" className="why-icon" />
          <h3>Cost Effective Solutions</h3>
          <p>
            We work as technology partners and stress on repeat business. We try to automate most of the
            processes and remove unwanted processes which would add to the overall cost, thus keeping the cost minimal.
          </p>
        </div>
        <div className="why-card">
          <img src="https://www.techxotica.com/assets/services-icon/ws.png" alt="Technical Expertise" className="why-icon" />
          <h3>Technical Expertise</h3>
          <p>
            We have a strong technical team, and our employees are trained to work in groups of small units
            and roll out projects in a smooth, efficient and timely manner.
          </p>
        </div>
        <div className="why-card">
          <img src="https://www.techxotica.com/assets/services-icon/ws.png" alt="Diversified Portfolio" className="why-icon" />
          <h3>Diversified Portfolio</h3>
          <p>
            We are sure that something similar to the kind of project you require is already available in our
            project library. Technology Partner for sustaining and growing its business.
          </p>
        </div>
        <div className="why-card">
          <img src="https://www.techxotica.com/assets/services-icon/ws.png" alt="24/7 Technical Support" className="why-icon" />
          <h3>24/7 Technical Support</h3>
          <p>
            Our executives are trained to provide solutions to basic problems, so that you get the support instantly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;

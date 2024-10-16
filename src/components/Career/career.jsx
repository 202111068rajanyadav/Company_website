// import React from 'react'
// import HeroSection from "../Home/HeroSection"

import './career.css';

const career = () => {
  return (
    <div className="career-container">
      <div className="career-header">
        {/* <HeroSection />  */}
        <h1>JOIN OUR TEAM</h1>
        <h3>WE ARE ALWAYS LOOKING FOR GREAT TALENT</h3>
        <p>
          Our people are recognised for their professionalism, commitment and
          dedication, which in turn boosts their morale, enhances productivity
          and creates global leaders. Our aim is to search for self-motivated
          people who can join hands with us in our ambitious endeavours. Apart
          from work, we offer a vibrant social culture at workplace and look for
          opportunities to celebrate our achievements as well as the rich
          backgrounds and cultures of our team members.
        </p>
        <button className="join-us-button">Join Us</button>
      </div>

      <div className="career-cards">
        <div className="career-card">
          <img src="/img.jpg" alt="Creativity & Autonomy" />
          <h3>Creativity & Autonomy</h3>
          <p>An individuals creativity is the basis for value creation.</p>
        </div>
        <div className="career-card">
          <img src="/img.jpg" alt="Equal Opportunities" />
          <h3>Equal Opportunities</h3>
          <p>Equal opportunities build trust among people.</p>
        </div>
        <div className="career-card">
          <img src="/img.jpg" alt="Learning & Growth" />
          <h3>Learning & Growth</h3>
          <p>
            TAPL offers diverse training programs to its employees based on
            their position.
          </p>
        </div>
        <div className="career-card">
          <img src="/img.jpg" alt="Long-term Perspective" />
          <h3>Long-term Perspective</h3>
          <p>
            Maintaining a long-term perspective is the foundation for TAPL HR
            policies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default career;

// import React from "react";
// import "./About.css"; // Ensure you have your CSS styles
import AboutFlex2 from "./AbouFlex2";
import AboutFlex from "./AboutFlex";
import businessIcon from "/bc.png"; // Replace with actual icons
import servicesIcon from "/ss.png";
import growthIcon from "/rg.png";
import differentIcon from "/wd.png";
import AboutHeader from "./AboutHeader";

const AboutData = [
  {
    index:0,
   title: "Business Consulting",
    desc: "Techxotica is a business consulting, information technology and outsourcing services company, a venture of a number of highly experienced and dedicated professionals that have come together to provide highly reliable , highly scalable and high performance analytics and software solutions. We Offer a Broad Portfolio of Information Technology Solutions and Business Processes to Our Clients All over the World. Our Core Portfolio Comprises of Application Development, Business Process Consulting Services, as Well as Professional Staffing Services in Information technology.",
    icon: businessIcon,
  },
  {
    index:1,
    title:"Services and Solutions",
    desc:"We provide the very best services and solutions to our clients. We have expertise to help firm's develop systems to improve processes, streamline operations, manage risks, and lower costs. We work behind the scenes to help our Clients Achieve their Business Goals by delivering services that Simplify and Streamline (IT) Information Technology environment for operational excellence.",
    icon: servicesIcon,
  },
  {
    index:2,
    title:"Recognition and Growth",
    desc:"A reward is a gift, a token of appreciation or more importantly, a message that lets the receivers know that they are valued. Our recognition and growth is accelerated through empowered teams, who take decisions in the best interest of the client. There is absolutely no one in the world who doesn’t like being rewarded and recognized for the hard work they do and the same holds true for employees at workplace as well. Employee recognition is the acknowledgment of an employee’s efforts, hard work and behavior at the workplace that have contributed to the organization’s success and objectives in some way.",
    icon: growthIcon,
  },
  {
    index:3,
    title:"Works Differently",
    desc:"This is where Techxotica works differently to other companies. We give clients more robust, reliable, performance, scalable and secure solutions across the entire software solution lifecycle. Our consultants incorporate innovative and efficient ways in order to improve Client’s Business processes and Requirements of IT solutions. Our Engineers enable Organizations to bring about Cost and Operational Efficiencies with Streamlined and Modernized Application Portfolios. Be a Part",
    icon: differentIcon,
  },
];

const About = () => {
  return (
    <>
    <AboutHeader></AboutHeader>
    <div className="about-container">
      <div className="content-container">
        <AboutFlex data={AboutData}></AboutFlex>
        <AboutFlex2 data={AboutData}></AboutFlex2>

      </div>
    </div>
    </>
  );
};

export default About;

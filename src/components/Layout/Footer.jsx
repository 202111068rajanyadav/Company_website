import "./Footer.css";

const Footers = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about-us">
            <h2>About Us</h2>
            <p>
              Supes Technology is a business consulting, information technology,
              and outsourcing services company, a venture of a number of highly
              experienced and dedicated professionals that have come together to
              provide highly reliable, highly scalable, and high-performance
              analytics and software solutions.
            </p>
          </div>
          <div className="footer-section quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-section services">
            <h2>Services</h2>
            <ul>
              <li>
                <a href="#">Software Development</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
              <li>
                <a href="#">Cloud Computation</a>
              </li>
              <li>
                <a href="#">Big Data</a>
              </li>
              <li>
                <a href="#">Data Management</a>
              </li>
              <li>
                <a href="#">Mobile Application</a>
              </li>
            </ul>
          </div>
          <div className="footer-section insights">
            <h2>Insights</h2>
            <ul>
              <li>
                <a href="#">Financial Case Studies</a>
              </li>
              <li>
                <a href="#">Domain Expertise</a>
              </li>
              <li>
                <a href="#">Market Data and Tools</a>
              </li>
              <li>
                <a href="#">HealthCare</a>
              </li>
              <li>
                <a href="#">Data Privacy</a>
              </li>
            </ul>
          </div>
          <div className="footer-section address">
            <h2>Address</h2>
            <p>
              📍 TR-229, Ground Floor, AltF Success Tower B, Golf Course Extn
              Road, Sector-65, Gurugram, Haryana-122005, India
            </p>
            <p>
              ✉️{" "}
              <a href="mailto:info@techxotica.com">info@supestechnology.com</a>
            </p>
          </div>
        </div>
      </footer>
      <div className="w-full h-10 bg-slate-700 flex items-center justify-between p-2">
        <div className="flex-grow text-center text-blue-200">
          Copyright © Techxotica Analytics Pvt. Ltd. 2019 - 2024 Top
        </div>
        <a
          href="/employee-login" // Replace with the actual link
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition absolute right-20"
        >
          Employee Login
        </a>
      </div>
    </>
  );
};

export default Footers;

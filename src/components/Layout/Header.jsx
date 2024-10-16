import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import QuoteForm from "./form"; // Import the QuoteForm modal

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/aboutUs" },
    { name: "Services", link: "/services" },
    { name: "Insights", link: "/insights" },
    { name: "Case Studies", link: "/case-studies" },
    { name: "Career", link: "/career" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  // const dropdowns = [
  //   { "About": ["About US ", "SW DEVELOPMENT METHODS"] },
  //   {
  //     "Services": [
  //       "sw development",
  //       "Analytics",
  //       "Cloud Computation",
  //       "Big dadta",
  //       "Mobile dev",
  //     ],
  //   },
  //   { "Case Studies": ["Finance", "healthcare", "travel"] },
  // ];
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <div className="company-name">
            <Link to="/">
              <img src="/logo-b.png" alt="image" width={300} height={40} />
            </Link>
          </div>
        </div>

        {/* Navigation menu with Links */}
        <nav className="nav-menu">
          <ul>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.link}
                  className="hover:text-yellow-500 transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Get a Quote Button */}
        <div className="quote-button-container">
          <button className="quote-button" onClick={toggleModal}>
            Get a Quote
          </button>
        </div>
      </div>

      {/* Render the QuoteForm modal */}
      <QuoteForm show={isModalOpen} onClose={toggleModal} />
    </header>
  );
};

export default Header;

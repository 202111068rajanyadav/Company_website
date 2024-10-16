import  { useState, useEffect } from 'react';
// import './Hero.css';

function HeroSection() {


  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    {
      url: 'https://www.techxotica.com/assets/main1.png',
      text: 'GLOBAL LEADER IN NEXT-GENERATION FINANCIAL SERVICES AND CONSULTING'
    },
    {
      url: 'https://www.techxotica.com/assets/main6.jpg',
      text: 'INTEGRATING BUSINESS WITH TECHNOLOGY'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-section">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero ${index === activeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className="hero-text">
            <h1>{image.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroSection;



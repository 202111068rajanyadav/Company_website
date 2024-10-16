// import React from 'react';
// import './Map.css'; // Assuming the CSS is in a separate file

const Map = () => {
  return (
    <div className="map-container">
      <h2>Our Global Presence</h2>
      <div className="map-image-wrapper">
        <img
          src="https://www.techxotica.com/assets/img/map.png" 
          alt="World Map"
          className="world-map"
        />
        {/* Add location markers */}
        <div className="location" style={{ top: '30%', left: '20%' }}>
          <div className="marker"></div>
          <span>North America</span>
        </div>
        <div className="location" style={{ top: '45%', left: '50%' }}>
          <div className="marker"></div>
          <span>Europe</span>
        </div>
        <div className="location" style={{ top: '60%', left: '55%' }}>
          <div className="marker"></div>
          <span>India</span>
        </div>
        <div className="location" style={{ top: '65%', left: '70%' }}>
          <div className="marker"></div>
          <span>Singapore</span>
        </div>
        <div className="location" style={{ top: '75%', left: '85%' }}>
          <div className="marker"></div>
          <span>Australia</span>
        </div>
      </div>
    </div>
  );
};

export default Map;

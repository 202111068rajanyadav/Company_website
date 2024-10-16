// import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./form.css"; // Import the CSS for the modal and form styling

const Form = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content card">
        {" "}
        {/* Add card class */}
        <h2>Get a Quote Form</h2>
        {/* <button className="close-button" onClick={onClose}>
          ×
        </button> */}
        <form className="quote-form" style={{ color: "black" }}>
          <label>First Name:</label>
          <input type="text" placeholder="Enter First Name" required />

          <label>Last Name:</label>
          <input type="text" placeholder="Enter Last Name" required />

          <label>Email-id:</label>
          <input type="email" placeholder="Enter Email-id" required />

          <label>Company:</label>
          <input type="text" placeholder="Enter Company Name" />

          <label>Contact Number:</label>
          <input type="tel" placeholder="Enter Contact Number" required />

          <label>Service:</label>
          <select style={{ color: "black" }}>
            <option style={{ color: "black" }}>Software Development</option>
            <option style={{ color: "black" }}>Web Development</option>
            <option style={{ color: "black" }}>Mobile Development</option>
            <option style={{ color: "black" }}>Cloud Solutions</option>
          </select>

          <label style={{ color: "black" }}>Description:</label>
          <textarea placeholder="Enter Description" rows="4"></textarea>

          <label>Upload File:</label>
          <input type="file" />

          <div className="form-buttons">
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button
              type="button"
              className="close-button blue"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Define PropTypes for validation
Form.propTypes = {
  show: PropTypes.bool.isRequired, // show should be a boolean
  onClose: PropTypes.func.isRequired, // onClose should be a function
};

export default Form;

import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="container">
      <div className="content">
        <h1>Your Personal Job Finder</h1>
        <h2>Create an account</h2>
        <p>Your personal job finder is here</p>
        <div className="form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Mobile" />
          <input type="password" placeholder="Password" />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">By creating an account, I agree to our terms of use and privacy policy</label>
          </div>
          <button className="create-account">Create Account</button>
        </div>
        <p>Already have an account? <a href="#">Sign In</a></p>
      </div>
      <div className="image">
        <img src="your-image-source.jpg" alt="Job Finder" />
      </div>
    </div>
  );
}

export default Register;
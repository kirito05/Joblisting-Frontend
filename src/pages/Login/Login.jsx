//import React from 'react'
import loginImage from "../../assets/images/loginPageImage.png";
import "./login.css";

function Login() {

  return (
    <div className="loginPage_container">
      <div className="loginPage_form">
        <div>
          <p id="title_1">
            Already have an account?
            <span id="subtitle">Your personal job finder is here</span>
          </p>
        </div>
        <div className="login_form">
          <div className="form">
            <input
              type="text"
              placeholder="Email Address"
              className="input_field1"
            />
            <input
              type="password"
              placeholder="Password"
              className="input_field2"
            />
          </div>
          <div>
            <button type="submit" className="submit_button">
              Login 
            </button>
            <span  className="instruction_1"> Don’t have an account? <a href="Register">Register Now</a> </span>
          </div>
        </div>
      </div>
      <div className="loginPage_img">
        <img src={loginImage} alt="Image-1" className="image-1" />
      </div>
    </div>
  );
}

export default Login;




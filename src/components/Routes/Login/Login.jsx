import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/logo1.png";
import { LiaTimesSolid } from "react-icons/lia";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    // try {
    //   await axios
    //     .post("http://localhost:8000/", {
    //       email,
    //       password,
    //     })
    //     .then((res) => {
    //       if ((res.data = "exist")) {
    //         history("/", { state: { id: email } });
    //       } else if ((res.data = "notexist")) {
    //         alert("User have not sign up");
    //       }
    //     })
    //     .catch((e) => {
    //       alert(
    //         "User does not exist. Kindly check the details you have provided"
    //       );
    //       console.log(e);
    //     });
    // } catch (e) {
    //   console.log(e);
    // }
  }

  return (
    <div className="login-container">
      <form action="POST">
        <Link to="/">
          <LiaTimesSolid className="close-button" />
          <img src={logo} />
        </Link>
        <h1>Welcome to Geno Safaris</h1>
        <input
          className="input"
          type="email"
          onChange={(e) => {
            setEmail;
          }}
          placeholder="Email"
          name=""
          id="email"
        />
        <input
          className="input"
          type="password"
          onChange={(e) => {
            setPassword;
          }}
          placeholder="Password"
          name=""
          id="password"
        />
        <a href="/" id="text" className="link">
          Forgot your password?
        </a>
        <input type="submit" className="button" onClick={submit} />

        <p>OR</p>
        <button className="button google">
          {" "}
          <FcGoogle className="icon" /> Continue with Google
        </button>
        <p>
          By continuing, you agree to Geno Safaris'{" "}
          <a href="/" target="_blank" className="link">
            Terms of Service
          </a>{" "}
          and acknowledge you've read our{" "}
          <a href="/" target="_blank" className="link">
            Privacy Policy
          </a>
        </p>

        <p>Do not have an account?</p>
        <Link className="link" to="/signup">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;

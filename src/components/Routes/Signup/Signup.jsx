import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/logo1.png";
import { LiaTimesSolid } from "react-icons/lia";
import "./Signup.css";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  async function submit(e) {
    e.preventDefault();

    // try {
    //   await axios
    //     .post("http://localhost:8000/", {
    //       email,
    //       fullname,
    //       password,
    //     })
    //     .then((res) => {
    //       if ((res.data = "exist")) {
    //         alert("User already exists");
    //       } else if ((res.data = "notexist")) {
    //         history("/", { state: { id: email } });
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
          type="email"
          className="input"
          onChange={(e) => {
            setEmail;
          }}
          placeholder="Email"
          name=""
          id="email"
        />
        <input
          type="text"
          className="input"
          onChange={(e) => {
            setFullname;
          }}
          placeholder="Full Name"
          name=""
          id="fullname"
        />
        <input
          type="password"
          className="input"
          onChange={(e) => {
            setPassword;
          }}
          placeholder="Create a password"
          name=""
          id="password"
        />
        <input
          type="password"
          className="input"
          onChange={(e) => {
            setPassword;
          }}
          placeholder="Confirm password"
          name=""
        />
        <input type="submit" className="button" onClick={submit} />

        <p>OR</p>

        <button className="button google">
          <FcGoogle className="icon" />
          Continue with Google
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

        <p>Already have an account?</p>
        <Link to="/login" className="link">
          Log in
        </Link>
      </form>
    </div>
  );
};

export default Signup;

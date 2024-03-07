import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <a href="/" className="footer-logo">
            <h1>GENO SAFARIS</h1>
          </a>
          <p>Choose your favorite destination.</p>
        </div>
        <div className="socials-icon">
          <a href="https://www.facebook.com/genosafaris.co.ke" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/geno_safaris/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@geno_safaris" target="_blank">
            <FaTiktok />
          </a>
          <a href="https://www.twitter.com/@geno_safaris" target="_blank">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Developed by</h4>
          <a href="https://brianoluoko.netlify.app" target="_blank">
            Brian Otieno
          </a>
          <a href="https://github.com/oluoko" target="_blank">
            Github
          </a>
          <a href="https://twitter.com/oluoko_" target="_blank">
            Twitter
          </a>
          <a href="mailto:brianotieno586@gmail.com" target="_blank">
            Email
          </a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/" target="_blank">
            Github
          </a>
          <a href="/" target="_blank">
            Issues
          </a>
          <a href="/" target="_blank">
            Project
          </a>
          <a href="/" target="_blank">
            Twitter
          </a>
        </div>
        <div>
          <h4>Help</h4>
          <a>
            <FaPhone />
            +254 7 04 240 133
          </a>
          <a href="/" target="_blank">
            Support
          </a>
          <a href="/" target="_blank">
            Troubleshooting
          </a>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/" target="_blank">
            Terms of Service
          </a>
          <a href="/" target="_blank">
            Privacy Policy
          </a>
          <a href="/" target="_blank">
            License
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

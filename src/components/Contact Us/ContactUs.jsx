import "./ContactUs.css";

import React from "react";

const ContactUs = () => {
  return (
    <div className="form-container">
      <h1>Send us a message.</h1>
      <form action="">
        <input className="input" placeholder="Name" type="text" />
        <input className="input" placeholder="Email" type="text" />
        <input className="input" placeholder="Subject" type="text" />
        <textarea placeholder="Message" rows="5"></textarea>
        <button className="button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;

import React from "react";
import "./Tours.css";
import pic from "../../../assets/images/Vans/Van4.jpg";
import {
  FaRegCalendarDays,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

const Tours = () => {
  return (
    <div className="tours">
      <div className="tour">
        <div className="image">
          <img src={pic} alt="tour image" />
        </div>
        <div className="tour-summary">
          <FaRegCalendarDays className="icon" /> 7 days{" "}
          <IoPerson className="icon" /> 2
        </div>
        <div className="tour-info">
          <div className="tour-location">
            <h2>Queens, New York</h2>
            <p>
              {" "}
              <FaLocationDot /> Port Hacourt, New Haven
            </p>
          </div>
          <div className="tour-time">
            <div>
              <p>From:</p>
              <span>$299.00</span>
            </div>
            <Link to="/tour/id" className="link">
              {" "}
              More <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;

import React from "react";
import "./Booking.css";
import { FaRegCalendarDays, FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Booking = () => {
  return (
    <div className="booking-container">
      <div className="box">
        <FaLocationDot className="icon" />
        <div>
          <h2>Destination</h2>
          <input type="text" placeholder="City or Country" />
        </div>
      </div>
      <div className="box">
        <FaRegCalendarDays className="icon" />
        <div>
          <h2>Date</h2>
          <input
            type="date"
            placeholder="Departure Date"
            onfocus="this.type='date'"
            onblur="this.type='text'"
          />
        </div>
      </div>
      <div className="box">
        <IoPerson className="icon" />
        <div>
          <h2>Guests</h2>
          <input type="number" placeholder="0" />
        </div>
      </div>
      <div className="box search">
        <FaSearch className="icon" />
        <h2>Search</h2>
      </div>
    </div>
  );
};

export default Booking;

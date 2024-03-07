import React from "react";
import "./TourOverview.css";
import { Link } from "react-router-dom";

const TourOverview = () => {
  return (
    <div className="overview-container">
      <div className="section left">
        <div>
          <h1>Overview</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quasi quidem possimus fugiat nulla odio repellat
            impedit necessitatibus laborum quia.
          </p>
          <h2>Included/Excluded</h2>
          <div>
            <ul>
              <li>Assistance on Arrival & Departure at Port</li>
              <li>Meals as per Hotel Plan</li>
              <li>
                Air conditioned accomodation on double sharing basis at all
                places
              </li>
            </ul>
            <ul>
              <li>Any kind of Personal Expenses</li>
              <li>Domestic $ International airfare</li>
              <li>5% Goods $ Services Tax</li>
            </ul>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="section right">
        <h2>Book This Tour</h2>
        <div>
          <h2>From:</h2>
          <input className="input" type="date" />
        </div>
        <div>
          <h2>Time: </h2>
          <input className="input" type="text" placeholder="10:00" />
        </div>
        <ul>
          <h2>Tickets:</h2>
          <li>
            <h3>Adult $299</h3>
            <input className="input" type="text" />
          </li>
          <li>
            <h3>Teen $239</h3>
            <input className="input" type="text" />
          </li>
          <li>
            <h3>Children $199</h3>
            <input className="input" type="text" />
          </li>
        </ul>
        <div>
          <h2>Select meeting point:</h2>
          <input className="input" type="text" name="" id="" />
        </div>
        <p>
          <span>Total: </span>
          <span>$598</span>
        </p>
        <Link className="button" to="/checkout/id">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default TourOverview;

import React from "react";
import "./Tour.css";
import Page from "../../Page/Page";
import PcTourImage from "../../../../assets/images/buses.jpg";
import PhoneTourImage from "../../../../assets/images/Vans/Van3.jpg";
import TourOverview from "../../../components/Tour Overview/TourOverview";

const Tour = () => {
  const getImageUrl = () => {
    // Get the window width
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Define image URLs for different browsers and widths
    let imageUrl;
    if (windowWidth > 830) {
      imageUrl = PcTourImage;
    } else {
      imageUrl = PhoneTourImage;
    }

    return imageUrl;
  };
  return (
    <div className="tour-container">
      <Page
        cName="page-sixty"
        pageImage={getImageUrl()}
        title={`Port Hacourt, New Haven`}
        text="Queens, New York"
        btnClass="hide"
      />
      <ul className="tour-info">
        <li>
          <h2>Price</h2>
          <p>
            From: <span>$299.00</span>
          </p>
        </li>
        <li>
          <div>
            <h2> Duration</h2>
            <p>7 days</p>
          </div>
        </li>
        <li>
          <div>
            <h2> Max People</h2>
            <p>2</p>
          </div>
        </li>
        <li>
          <div>
            <h2>Min Age</h2>
            <p>+5</p>
          </div>
        </li>
        <li>
          <div>
            <h2> Tour Type</h2>
            <p>Island</p>
          </div>
        </li>
      </ul>
      <TourOverview />
    </div>
  );
};

export default Tour;

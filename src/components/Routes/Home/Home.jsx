import React from "react";
import Page from "../../Page/Page";
import PcHomeImage from "../../../../assets/images/bg/pc home bg.jpg";
import PhoneHomeImage from "../../../../assets/images/bg/phone home bg.jpg";
import Destination from "../../Destination/Destination";
import RecentTrips from "../../RecentTrips/RecentTrips";
import Booking from "../../Booking/Booking";
import Footer from "../../Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Tours from "../../Tours/Tours";

const Home = () => {
  const location = useLocation();
  const insertName = "[Insert Name]";
  const getImageUrl = () => {
    // Get the window width
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Define image URLs for different browsers and widths
    let imageUrl;
    if (windowWidth > 830) {
      imageUrl = PcHomeImage;
    } else {
      imageUrl = PhoneHomeImage;
    }

    return imageUrl;
  };
  return (
    <>
      <div className="home-container">
        <Page
          cName="page-mid"
          pageImage={getImageUrl()}
          title="Pinnacle Experience"
          text={`Hello there, ${insertName}, welcome. Discover the most engaging and beautiul places in East Africa while enjoying
          the luxury offered by our experienced staff.`}
          buttonText="Explore Now"
          url="/"
          btnClass="show button"
        />
        <Booking />
        <Tours />
        <Destination />
        <RecentTrips />
        <Footer />
      </div>
    </>
  );
};

export default Home;

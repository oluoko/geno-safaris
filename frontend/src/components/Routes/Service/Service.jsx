import React from "react";
import PhoneServiceImage from "../../../../assets/images/bg/phone service bg.jpeg";
import PcServiceImage from "../../../../assets/images/bg/pc service bg.jpeg";
import Page from "../../Page/Page";
import RecentTrips from "../../RecentTrips/RecentTrips";
import Footer from "../../Footer/Footer";

const Service = () => {
  const getImageUrl = () => {
    // Get the window width
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Define image URLs for different browsers and widths
    let imageUrl;
    if (windowWidth > 830) {
      imageUrl = PcServiceImage;
    } else {
      imageUrl = PhoneServiceImage;
    }

    return imageUrl;
  };
  return (
    <>
      <Page cName="page" pageImage={getImageUrl()} text="Service" />
      <RecentTrips />
      <Footer />
    </>
  );
};

export default Service;

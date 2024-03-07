import React from "react";
import Page from "../../../components/Page/Page";
import PhoneAboutImage from "../../../../assets/images/bg/phone about bg.jpeg";
import PcAboutImage from "../../../../assets/images/bg/pc about bg1.jpeg";
import Footer from "../../Footer/Footer";
import AboutUs from "../../About Us/AboutUs";

const About = () => {
  const getImageUrl = () => {
    // Get the window width
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Define image URLs for different browsers and widths
    let imageUrl;
    if (windowWidth > 830) {
      imageUrl = PcAboutImage;
    } else {
      imageUrl = PhoneAboutImage;
    }

    return imageUrl;
  };
  return (
    <>
      <Page cName="page" pageImage={getImageUrl()} text="About Us" />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;

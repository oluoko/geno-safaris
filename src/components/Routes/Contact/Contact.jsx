import React from "react";
import PhoneContactImage from "../../../../assets/images/bg/phone contact bg.jpg";
import PcContactImage from "../../../../assets/images/bg/pc contact bg2.jpeg";
import Page from "../../Page/Page";
import Footer from "../../Footer/Footer";
import ContactUs from "../../Contact Us/ContactUs";

const Contact = () => {
  const getImageUrl = () => {
    // Get the window width
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Define image URLs for different browsers and widths
    let imageUrl;
    if (windowWidth > 830) {
      imageUrl = PcContactImage;
    } else {
      imageUrl = PhoneContactImage;
    }

    return imageUrl;
  };
  return (
    <>
      <Page cName="page" pageImage={getImageUrl()} text="Contact" />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;

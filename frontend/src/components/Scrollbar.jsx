// Scrollbar.js

import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-scrollbars-custom";

const Scrollbar = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is preferred by the user (you can use localStorage, etc.)
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkMode(prefersDarkMode);
  }, []);

  const scrollbarStyles = {
    width: "12px", // Width of the scrollbar
    backgroundColor: isDarkMode ? "#333" : "#f1f1f1", // Background color of the scrollbar
  };

  const thumbStyles = {
    backgroundColor: isDarkMode ? "#888" : "#888", // Color of the thumb
    borderRadius: "6px", // Rounded corners of the thumb
  };

  return (
    <Scrollbars
      style={scrollbarStyles}
      thumbYProps={{ style: thumbStyles }}
      thumbXProps={{ style: thumbStyles }}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;

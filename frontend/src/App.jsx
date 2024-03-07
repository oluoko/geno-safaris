import React, { useState } from "react";
import useLocalStorage from "use-local-storage";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Routes/Home/Home.jsx";
import About from "./components/Routes/About/About.jsx";
import Service from "./components/Routes/Service/Service.jsx";
import Contact from "./components/Routes/Contact/Contact.jsx";
import Login from "./components/Routes/Login/Login.jsx";
import Signup from "./components/Routes/Signup/Signup.jsx";
import Tour from "./components/Routes/Tour/Tour.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tour/id" element={<Tour />} />
        <Route path="/checkout/id" element={<Checkout />} />
      </Routes>
      <Navbar isdark={isDark} setisdark={setIsDark} />
    </div>
  );
};

export default App;

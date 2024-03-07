import { useState, useEffect } from "react";

import "./Navbar.css";
import { LiaTimesSolid } from "react-icons/lia";
import { IoMenu, IoPerson } from "react-icons/io5";
import { Toggle } from "../Toggle/Toggle";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

export const Navbar = ({ isdark, setisdark }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className={`navbar menuItems ${menuOpen && menuOpen}`}>
        <a href="/" className="logo">
          <h1>GENO SAFARIS</h1>
        </a>

        <div
          className="menuBtnDiv"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {menuOpen ? (
            <LiaTimesSolid className="menuBtn closeBtn" />
          ) : (
            <IoMenu className="menuBtn openBtn" />
          )}
        </div>

        <ul
          className={menuOpen ? "menu menuOpen" : "menu"}
          onClick={() => setMenuOpen(false)}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={`${item.url}`} className={`${item.className}`}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link
            to="/signup"
            className="navbar-btn"
            // onClick={(e) => {
            //   e.stopPropagation(); // prevent event propagation
            //   // Handle button click logic here
            // }}
          >
            Sign Up
          </Link>
          <Toggle
            isChecked={isdark}
            handleChange={() => setisdark(!isdark)}
            className="navbar-btn toggle"
          />
        </ul>
      </nav>
    </>
  );
};

import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";

const Page = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.pageImage} alt="Page Image" />

        <div className="page-text">
          <h3>{props.title}</h3>
          <h1>{props.text}</h1>
          <Link to={props.url} className={props.btnClass}>
            {props.buttonText}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;

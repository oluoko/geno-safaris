import { Component } from "react";
import React from "react";
import "./Destination.css";
import Voxy1 from "../../../assets/images/Voxy(s)/Voxy(s)1.jpg";
import Van1 from "../../../assets/images/Vans/Van4.jpg";
import Van3 from "../../../assets/images/Vans/Van3.jpg";
import Voxy3 from "../../../assets/images/Voxy(s)/Voxy(s)3.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image-container">
          <img src={this.props.img1} alt="Van 4" />
          <img src={this.props.img2} alt="Voxy 1" />
        </div>
      </div>
    );
  }
}

export default DestinationData;

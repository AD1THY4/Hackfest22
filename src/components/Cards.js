import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

import "reactjs-popup/dist/index.css";

function Cards() {
  return (
    <div className="cards">
      <h1>PROBLEM STATEMENTS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem text=" Pattern recognition" />

            <CardItem text="Application development" />
            <CardItem text="Traffic System" />
            <CardItem text="Face detection" />
          </ul>
          <ul className="cards__items">
            <CardItem text="Web Development" />
            <CardItem text="Health in Rural Areas" />
            <CardItem text="M.L. in Food Waste Management" />
            <CardItem text="Event Management App" />
          </ul>
          <ul className="cards__items">
            <CardItem text="Income Tax Calculation portal" />
            <CardItem text="Gate pass System using QR code" />
            <CardItem text="Ai based attendance App" />
            <CardItem text="Hostel Management System" />
          </ul>
          <ul className="cards__items">
            <CardItem text="First Come First Serve based choice based choosing subject" />
            <CardItem
              text="Plumber , Electrical online booking System
"
            />
            <CardItem
              text="AR based app for material explanation in 3D view
"
            />
            <CardItem text="Digital app for coin" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

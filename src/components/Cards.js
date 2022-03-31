import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
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
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
          </ul>
          <ul className="cards__items">
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
          </ul>
          <ul className="cards__items">
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
            <CardItem text="Ride through the Sahara Desert on a guided camel tour" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

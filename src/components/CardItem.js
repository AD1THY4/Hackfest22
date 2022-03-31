import React from "react";
import { Link } from "react-router-dom";
import Modalpop from "./popups/mp1";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure
            className="cards__item__pic-wrap"
            data-category={props.label}
          ></figure>
          <div className="cards__item__info">
            <center>
              <h5 className="cards__item__text">{props.text}</h5>
            </center>
          </div>
          <Modalpop />
        </Link>
      </li>
    </>
  );
}

export default CardItem;

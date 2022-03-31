import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Main.css";
import bg from "./pages/POSTER.png";

function Main() {
  return (
    <div className="poster">
      <div className="hero-container">
        <img id="preview" src={bg} width="100%" height="90%"></img>

        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            SIGN UP HERE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Main;

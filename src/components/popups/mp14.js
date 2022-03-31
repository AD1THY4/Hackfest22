import React from "react";
import Popup from "reactjs-popup";
import "./modal.css";

const Modalpop14 = () => (
  <center>
    <Popup
      trigger={
        <button className="button">
          {" "}
          AR based app for material explanation in 3D view{" "}
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">
            {" "}
            Plumber , Electrical online booking System{" "}
          </div>
          <div className="content"> </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  </center>
);
export default Modalpop14;

import React from "react";
import Popup from "reactjs-popup";
import "./modal.css";

const Modalpop15 = () => (
  <center>
    <Popup
      trigger={<button className="button"> Problem Statement </button>}
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
            AR based app for material explanation in 3D view{" "}
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
export default Modalpop15;

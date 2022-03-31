import React from "react";
import Popup from "reactjs-popup";
import "./modal.css";

const Modalpop = () => (
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
          <div className="header"> Pattern recognition </div>
          <div className="content">
            {" "}
            Thermal cameras exist to track warm blooded species. However, in
            ocean most of the species are cold blooded. There exist a threat to
            the people who swim in sea, near the coast, getting attacked by
            sharks and saltwater crocodiles. Develop pattern recognition
            technique to identify the marine species using high resolution
            camera and alert the swimmers when such sea animals approach the
            coast. Develop pattern recognition technique to identify the marine
            species using high resolution camera and alert the swimmers when
            such sea animals approach the coast. To identify Pattern recognition
            algorithm to identify marine animals.
          </div>
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
export default Modalpop;

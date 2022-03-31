import React from "react";
import Popup from "reactjs-popup";
import "./modal.css";

const Modalpop6 = () => (
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
          <div className="header"> Health in Rural Areas </div>
          <div className="content">
            {" "}
            In the last two decades, there has been rapid migration of the young
            population from the remote villages in hilly areas to medium and
            large cities. Consequently, majority of the population in these
            villages comprises women and old people. Some of these villages are
            yet to be connected by road and thus do not have even basic health
            support system.
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
export default Modalpop6;

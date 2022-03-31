import React from "react";
import Popup from "reactjs-popup";
import "./modal.css";

const Modalpop5 = () => (
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
          <div className="header"> Web Development </div>
          <div className="content">
            {" "}
            IWAI has developed a web-based Portal in-house (by PwC, Project
            Management Consultant engaged by IWAI) to compile, monitor and
            analyse cargo traffic on National Waterways directly uploaded by
            IWAI Regional Directorates, Maharashtra Maritime Board, Gujarat
            Maritime Board and MormugaoPort Trust for the National Waterways
            under their jurisdiction. The Portal provides information on its
            dashboard on year-wise traffic for all National Waterway, various OD
            pairs, shippers, commodities, jetty-wise, cargo type wise, etc
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
export default Modalpop5;

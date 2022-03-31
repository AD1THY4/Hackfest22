import React from "react";
import Popup from "reactjs-popup";
import "./modal.css";

const Modalpop4 = () => (
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
          <div className="header"> Face detection </div>
          <div className="content">
            {" "}
            Description: Build a face detection-based solution which can
            identify the temperature of the people entering a building in
            groups, where individual body temp. check is not possible using CCTV
            feeds. • Build a face detection-based solution which can identify
            student/employee and cross check with database repository, using
            CCTV feeds. The solution should include the following features: •
            Identify student/employee whose faces may be partially visible due
            to the varying angles at which CCTV cameras are typically placed •
            Handle people of different age, skin colour, gender and facial
            structure • Identify suspects with over 90% accuracy based on
            photographs of suspects provided as input • Throw an alert in real
            time as soon as ananyone in the crowd has a body temperature beyond
            the normal temperature, is detected. The video and associated
            timestamps should also be highlighted. • The system should also send
            alert of the student/employee who have not wear mask, to the Deptt.
            Head/organisation head, along with the individual, as a caution. •
            The attendance of the individual will also be registered through the
            CCTV feed and the data passed on to the Payroll system, for salary
            calculation and leave management applications. • Search for multiple
            individuals within multiple CCTV feeds concurrently
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
export default Modalpop4;

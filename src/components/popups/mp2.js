import React from "react";
import Popup from "reactjs-popup";
import "./modal.css";

const Modalpop1 = () => (
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
          <div className="header"> Application development </div>
          <div className="content">
            {" "}
            Background: Department of Empowerment of Persons with Disabilities
            (DEPwD) under Ministry of Social Justice and Empowerment, Govt. Of
            India has already initiated a 24*7 Mental health Rehabilitation
            Helpline (KIRAN) for addressing the mental health issues within the
            population. It is now needed that an app (KIRAN app) is formulated
            to improve the accessibility of this services specially to
            adolescents across the country. Not only will this help in self
            registration but also in providing services to clients from the
            comfort of their home even if they are not ready to talk about
            it.Summary: screening the possible mental health issues in
            adolescents and PwDs. Objective: a) It will allow self registration/
            screening of possible mental health issues b) Initiate a secured
            chat in their own language with professional at any convenient time
            c) Provide real time database, location, statistics and follow-up
            services & utilization of local resources. d) Provide an option for
            call back at a convenient time slot chosen by the applicant
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
export default Modalpop1;

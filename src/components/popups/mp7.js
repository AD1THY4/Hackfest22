import React from "react";
import Popup from "reactjs-popup";
import "./modal.css";

const Modalpop7 = () => (
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
          <div className="header"> M.L. in Food Waste Management </div>
          <div className="content">
            {" "}
            The principles of the circular economy on the farming system ensure
            that important nutrients are returned to the soil through anaerobic
            processes or composting, which softens the exploitation of land and
            natural ecosystems. In this way, as “waste” is returned to the soil,
            besides having fewer residues to deal with, the soil gets healthier
            and more resilient, allowing a greater balance in the ecosystems
            that surround it. As well, since soil degradation costs an estimated
            US$40 billion annually worldwide, and has hidden costs such as the
            increase of fertilizer use, loss of biodiversity and loss of unique
            landscapes – a circular economy could prove to be really useful for
            both the soils and the economy. A circular economy model in food
            systems has the potential to decrease 80% of the use of artificial
            fertilizer and therefore contributing to the natural balance of
            soils, according to a study.Most of the waste food that is being
            generated is dumped in landfills. This was we are losing the
            opportunity to use the food waste in more better things such as
            creating organic fertilizers or biogas. Hence tracking this food
            waste can help in bringing out more productivity to the waste that
            is being generated.Tracking food waste can help divert it from
            entering the landfill towards more productive usage. We need you to
            use modern generation M.L based techniques to track out the amount
            of food waste and categories them on how and which sectors we can
            use that waste for more productive areas.
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
export default Modalpop7;

import React from "react";
import Popup from "reactjs-popup";
import "./modal.css";

const Modalpop3 = () => (
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
          <div className="header"> Traffic System </div>
          <div className="content">
            {" "}
            Background: Navigating an intersection with traffic lights is a
            challenging but safety critical task for a self-driving car. Using
            perception to identify traffic light positions and states despite
            lighting conditions and occlusions is an interesting problem that a
            3D simulation environment can safely and effectively provide a
            solution for. Automated Driving Toolbox™ provides a 3D simulation
            environment powered by Unreal Engine® from Epic Games® that can be
            used to visualize traffic lights and the motion of a vehicle in a 3D
            scene. Description: Use MATLAB® and Simulink® to load a pre-built
            Unreal scene, detect and identify the state of the traffic light
            nearest to the ego-vehicle, design a Stateflow® model to control
            traffic lights in the scene, and control the reaction of the
            ego-vehicle in accordance with the traffic lights and surrounding
            vehicles. The position and color state of the traffic light at an
            intersection can be obtained by using a combination of sensors and
            perception algorithms. Perception can be used to identify
            surrounding vehicles which can also be used to inform decisions.
            Identify distance between the traffic light nearest to the
            ego-vehicle and the ego-vehicle in a pre-built Unreal scene
            intersection. Identify the color of the traffic light using camera
            output and perception. Control the change of state of the traffic
            light using Stateflow. The ego-vehicle should react to the traffic
            light information. Build your own scenes with the following
            suggested requirements and perform a quantitative analysis of your
            algorithm:
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
export default Modalpop3;

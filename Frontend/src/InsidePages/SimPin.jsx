import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SimPin() {
  const navigate = useNavigate();

  const [isSimPinOn, setSimPinOn] = useState(false);
  const toggleSimPin = () => {
    setSimPinOn(!isSimPinOn);

    sendsimToServer(!isSimPinOn);
 
  };

  const sendsimToServer = async (data) => {
    fetch("http://localhost:8000/sim/sim", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isSimPinOn: data }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data sent to the server:", data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };


  useEffect(() => {
    
    fetch("http://localhost:8000/sim/sim", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setSimPinOn(data.isSimPinOn);
      })
      .catch((error) => {
        console.error("Error fetching Network Selection On :", error);
      });
  }, []);

























  return (
    <div>
      <div className="top" style={{ gap: "15px" }}>
        <div id="button" onClick={() => navigate(-1)}>
          {" "}
          ＜ Back{" "}
        </div>
        <div style={{ color: "white", gap: "30px ", marginTop: "5px" }}>
          {" "}
          SIM PIN{" "}
        </div>
      </div>

      <div id="Blocks" style={{ height: "80px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            SIM PIN
          </span>

          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleSimPin}
                checked={isSimPinOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>

        <hr id="Horizontal_Line_General" style={{ marginTop: "10px" }} />

        <span className="paragraph"> Change PIN </span>
      </div>
    </div>
  );
}

export default SimPin;

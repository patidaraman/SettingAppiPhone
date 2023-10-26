import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NetworkSelection() {
  const navigate = useNavigate();

  const [isNetworkSelectionOn, setNetworkSelectionOn] = useState(false);
  const toggleNetworkSelection = () => {
    setNetworkSelectionOn(!isNetworkSelectionOn);
    sendnetworkToServer(!isNetworkSelectionOn);
 
  };

  const sendnetworkToServer = async (data) => {
    fetch("http://localhost:8000/network/network", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isNetworkSelectionOn: data }),
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
    
    fetch("http://localhost:8000/network/network", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setNetworkSelectionOn(data.isNetworkSelectionOn);
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
        <div style={{ color: "white", gap: "10px" }}>Network Selection </div>
      </div>

      <div id="Blocks" style={{ height: "40px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            {" "}
            Automatic{" "}
          </span>

          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleNetworkSelection}
                checked={isNetworkSelectionOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NetworkSelection;

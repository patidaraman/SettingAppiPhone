import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CallingWifi() {
  const navigate = useNavigate();

  const [isCallingWiFiOn, setCallingWiFiOn] = useState(false);
  const toggleCallingWiFi= () => {
    setCallingWiFiOn(!isCallingWiFiOn);
    sendcallingToServer(!isCallingWiFiOn);
  };


  const sendcallingToServer = async (data) => {
    fetch("http://localhost:8000/calling/calling", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCallingWiFiOn: data }),
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
    
    fetch("http://localhost:8000/calling/calling", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setCallingWiFiOn(data.isCallingWiFiOn);
      })
      .catch((error) => {
        console.error("Error fetching Calling WiFi On :", error);
      });
  }, []);




















  return (
    <div>
      <div className="top" style={{ gap: "18px" }}>
        <div
          style={{ fontSize: "15px" }}
          id="button"
          onClick={() => navigate(-1)}
        >
          {" "}
          ＜ Mobile Data{" "}
        </div>
        <div style={{ color: "white", gap: "10px" }}>WiFi Calling</div>
      </div>

      <div id="Blocks" style={{ height: "40px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            Wi-Fi Call on iPhone
          </span>

          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleCallingWiFi}
                checked={isCallingWiFiOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      </div>

      <div style={{ marginTop: "5px" }}>
        <span style={{ display: "flex", flexDirection: "column" }}>
          <span className="Gray_In_Button">
            Make and receive calls over Wi-Fi with your idea
            <br />
            account. Idea does not support emergency calling <br />
            over Wi-FI.
            <a
              href="https://www.apple.com/legal/privacy/data/en/wi-fi-calling/#:~:text=If%20you%20do%20not%20want%20to%20share%20the%20city%20you,turn%20off%20Wi%2DFi%20Calling."
              style={{ textDecoration: "none", color: "#007FFF" }}
            >
              About Wi-Fi Calling & Privacy...
            </a>
          </span>
        </span>
      </div>
    </div>
  );
}

export default CallingWifi;

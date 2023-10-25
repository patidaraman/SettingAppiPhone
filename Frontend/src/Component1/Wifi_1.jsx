import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import L from "../images/L.jpg";
import WI from "../images/WI.png";
import A from "../images/A.png";

function Wifi_1() {

  const navigate = useNavigate();

  

  const [isWiFiOn, setWiFiOn] = useState(false);
  const toggleWiFi = () => {
    setWiFiOn(!isWiFiOn);
    sendDataToServer(!isWiFiOn);
  };

  const sendDataToServer = async (data) => {
    fetch("http://localhost:8000/wifi", {
          method: "POST",
          headers: {
                     "Content-Type": "application/json",
                   },
          body: JSON.stringify( { isWiFiOn:data}),
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
  // Fetch the WiFi setting from the server when the component mounts
  fetch("http://localhost:8000/wifi", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // Set the initial state based on the response
      setWiFiOn(data.isWiFiOn);
    })
    .catch((error) => {
      console.error("Error fetching Wi-Fi:", error);
    });
}, []);





  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "60px" }}>
        <div id="button" onClick={() => navigate(-1)}>
          {" "}
          ＜ Settings{" "}
        </div>
        <span>Wi-Fi</span>
      </div>

      <br />
      <br />

      <div id="Blocks" className="b1">
        <div className="Screen_View_Row">
          <span
            style={{ fontSize: "17px", marginTop: "10px", marginLeft: "35px" }}
          >
            Wi-Fi
          </span>
          <label
            style={{ marginRight: "15px", marginTop: "10px" }}
            className="switch"
          >
            <input type="checkbox" onChange={toggleWiFi} checked={isWiFiOn} />
            <span className="slider round"></span>
          </label>
        </div>

        <div>
        <hr id="Horizontal_Line_General"  style={{marginTop:"14px"}}></hr>
        </div>

       

        <div className="Screen_View_Row">
          <div style={{ marginLeft: "10px" }} onClick={() => navigate("")}>
            ✓ Airtel_8965992254_5G
          </div>

          <div style={{ marginRight: "12px", display: "flex", gap: "8px" }}>
            <img
              src={L}
              width={20}
              height={20}
              loading="lazy"
              alt="sound Icon"
            />
            <img
              src={WI}
              width={20}
              height={20}
              loading="lazy"
              alt="sound Icon"
            />
            <img
              style={{ marginTop: "-5px" }}
              src={A}
              width={32}
              height={32}
              loading="lazy"
              alt="sound Icon"
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      <span className="Gray_In_Button">NETWORKS</span>

      <div id="Blocks" className="b1">
        <div className="Screen_View_Row">
          <span
            style={{ fontSize: "17px", marginTop: "10px", marginLeft: "35px" }}
            onClick={() => navigate("")}
          >
            Chotu's iPhone{" "}
          </span>

          <div style={{ marginRight: "12px", display: "flex", gap: "8px" }}>
            <img
              style={{ marginTop: "5px" }}
              src={L}
              width={20}
              height={20}
              loading="lazy"
              alt="sound Icon"
            />
            <img
              style={{ marginTop: "5px" }}
              src={WI}
              width={20}
              height={20}
              loading="lazy"
              alt="sound Icon"
            />
            <img
              style={{ marginTop: "" }}
              src={A}
              width={32}
              height={32}
              loading="lazy"
              alt="sound Icon"
            />
          </div>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div style={{ marginLeft: "35px" }} onClick={() => navigate("")}>
            8965992254
          </div>

          <div style={{ marginRight: "12px", display: "flex", gap: "8px" }}>
            <img
              src={L}
              width={20}
              height={20}
              loading="lazy"
              alt="sound Icon"
            />
            <img
              src={WI}
              width={20}
              height={20}
              loading="lazy"
              alt="sound Icon"
            />
            <img
              style={{ marginTop: "-5px" }}
              src={A}
              width={32}
              height={32}
              loading="lazy"
              alt="sound Icon"
            />
          </div>
        </div>
      </div>

      <br />

      <div id="Blocks" className="C3">
        <div className="Screen_View_Row">
          <div
            className="Button_Click"
            style={{ marginTop: "10px" }}
            onClick={() => navigate("/WifiAskother")}
          >
            Ask to Join Networks{" "}
          </div>
          <div
            style={{ marginRight: "10px", marginTop: "10px", color: "gray" }}
            onClick={() => navigate("/WifiAskother")}
          >
            {" "}
            Notify
          </div>
          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            {">"}
          </span>
        </div>
      </div>

      <span className="paragraph">
        {" "}
        Known networks will be joined automatically. If no <br />
        known network are available , you will be notified
        <br />
        of available networks
      </span>

      <br />

      <div id="Blocks" className="C3">
        <div className="Screen_View_Row">
          <div
            className="Button_Click"
            style={{ marginTop: "10px" }}
            onClick={() => navigate("/WifiAutojoin")}
          >
            {" "}
            Auto-Join Hotspot{" "}
          </div>

          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            {">"}
          </span>
        </div>
      </div>

      <span className="paragraph">
        Allow this device to automatically discover nearby <br /> personal
        hotspot when no Wi-Fi network is known network are available , you will
        be notified
        <br />
        available{" "}
      </span>
    </div>
  );
}

export default Wifi_1;

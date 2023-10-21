import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import HotspotWifiBackground from "../images/HotspotWifiBackground.png";
import HotspotBluetoothBackground from "../images/HotspotBluetoothBackground.png";
import HotspotConnectionBackground from "../images/HotspotConnectionBackground.png";

function Hotspot_1() {
  const navigate = useNavigate();

  // Hotepot on off Toggle button

  const [isHotspotOn, setHotspotOn] = useState(false);
  const toggleHotspot = () => {
    setHotspotOn(!isHotspotOn);
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <div id="button" onClick={() => navigate(-1)}>
          {" "}
          ＜ Settings{" "}
        </div>
        <div style={{ color: "white", fontSize: "18px", marginTop: "5px" }}>
          Personal Hotspot
        </div>
      </div>

      <div className="paragraph">
        <span>
          Personal Hotspot on your iPhone can provide internet access to other
          devices signed in to your iCloud account without requiring you to
          enter the password.
        </span>
      </div>

      <div id="Blocks" style={{ height: "80px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            Allow Others to Join
          </span>

          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleHotspot}
                checked={isHotspotOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>

        <hr id="Horizontal_Line_General" style={{ marginTop: "10px" }} />

        <div
          className="Screen_View_Row"
          onClick={() => navigate("/Wifi_Password")}
        >
          <span className="Button_Click"> Wi-Fi Password </span>
          <div style={{ marginRight: "10px" }}> 1234567</div>
          <span className="Arrow_Icon"> {">"}</span>
        </div>
      </div>
      <br />
      <div className="paragraph">
        <span>
          Allow other users or devices not signed in to iCloud to look for your
          shared network "iPhone" when you are in Personal Hotspot settings or
          when you turn it on in Control Center.
        </span>
      </div>

      <br />
      <br />
      <div>
        <div style={{ height: "30px", width: "30px" }}></div>

        <span
          style={{
            color: "gray",
            fontSize: "13px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src={HotspotWifiBackground}
            alt="Wifi Icon"
            height={"45"}
            width={"55px"}
          ></img>
          To CONNECT USING WI_FI <br />
          1. Choose "iPhone" from the Wi-Fi settings
          <br /> on your computer or other device. <br />
          2. Enter the password when prompted.
        </span>
        <br />
        <br />
        <span
          style={{
            color: "gray",
            fontSize: "13px",
            display: "flex",
            justifyContent: "space-evenly",
            marginRight: "20px",
          }}
        >
          <img
            src={HotspotBluetoothBackground}
            alt="Bluetooth Icon"
            height={"35"}
            width={"35px"}
          ></img>
          To CONNECT USING BLUETOOTH <br />
          1. Pair iPhone with your computer.
          <br />
          2. On iPhone, tap Pair or enter code
          <br /> displayed on your computer.
          <br />
          3. Connect to iPhone from computer.
        </span>

        <br />
        <br />
        <span
          style={{
            color: "gray",
            fontSize: "12px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src={HotspotConnectionBackground}
            alt="Connection Icon"
            height={"60"}
            width={"50px"}
          ></img>
          TO CONNECT USING USB
          <br />
          1. Plug iPhone into your computer.
          <br />
          2. Choose iPhone from the list of network <br />
          services in your settings.
        </span>
      </div>
    </div>
  );
}

export default Hotspot_1;

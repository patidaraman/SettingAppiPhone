
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HotspotWifiBackground from "../images/HotspotWifiBackground.png";
import HotspotBluetoothBackground from "../images/HotspotBluetoothBackground.png";
import HotspotConnectionBackground from "../images/HotspotConnectionBackground.png";

function Hotspot_1() {
  const navigate = useNavigate();
  const [isHotspotOn, setHotspotOn] = useState(false);
  const [retrievedPassword, setRetrievedPassword] = useState("");

  useEffect(() => {
    // Fetch the saved password from your server when the component mounts
    fetch('http://localhost:8000/password/Password')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.password) {
          setRetrievedPassword(data.password);
        }
      })
      .catch((error) => {
        console.error('Error fetching password:', error);
      });

    // Fetch the hotspot state from your server to set the initial state
    fetch('http://localhost:8000/hotspot')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.isHotspotOn !== undefined) {
          setHotspotOn(data.isHotspotOn);
        }
      })
      .catch((error) => {
        console.error('Error fetching hotspot state:', error);
      });
  }, []);

  const toggleHotspot = () => {
    const newHotspotState = !isHotspotOn;

    // Send a request to the server to update the hotspot state
    fetch("http://localhost:8000/hotspot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isHotspotOn: newHotspotState }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Hotspot state updated:", data);
        setHotspotOn(newHotspotState); // Update the state in the frontend only after a successful response
      })
      .catch((error) => {
        console.error("Error updating hotspot state:", error);
      });
  };










  return (
    <div>
      <div className="GHS">
        <div id="button" onClick={() => navigate(-1)}>
          {" "}
          ＜ Settings
        </div>
        <div className="PH"> Personal Hotspot</div>
      </div>
      <br />

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
            {" "}
            Allow Others to Join{" "}
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
          <div style={{ marginRight: "10px", color:"gray" }}> {retrievedPassword} </div>
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
          <div style={{marginTop:"15px"}}>
          <img
            src={HotspotBluetoothBackground}
            alt="Bluetooth Icon"
            height={"35"}
            width={"35px"}
          ></img>
          </div>
         
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

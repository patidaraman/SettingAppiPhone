import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CallsDevices() {
  const navigate = useNavigate();

  const [isAllowCallsonOtherDevicesOn, setAllowCallsonOtherDevicesOn] = useState(false);
  const toggleAllowCallsonOtherDevices = () => {
    setAllowCallsonOtherDevicesOn(!isAllowCallsonOtherDevicesOn);
    sendotherDToServer(!isAllowCallsonOtherDevicesOn);
  };

  const sendotherDToServer = async (data) => {
    fetch("http://localhost:8000/other/other", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isAllowCallsonOtherDevicesOn: data }),
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
    
    fetch("http://localhost:8000/other/other", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setAllowCallsonOtherDevicesOn(data.isAllowCallsonOtherDevicesOn);
      })
      .catch((error) => {
        console.error("Error fetching Limit IP Adderss Tracking On :", error);
      });
  }, []);




















  const [isAllowCallsOnMacBookOn, setAllowCallsOnMacBookOn] = useState(false);
  const toggleAllowCallsOnMacBook = () => {
    setAllowCallsOnMacBookOn(!isAllowCallsOnMacBookOn);
    sendMacToServer(!isAllowCallsOnMacBookOn);
  };

  const sendMacToServer = async (data) => {
    fetch("http://localhost:8000/mac/mac", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isAllowCallsOnMacBookOn: data }),
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
    
    fetch("http://localhost:8000/mac/mac", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setAllowCallsOnMacBookOn(data.isAllowCallsOnMacBookOn);
      })
      .catch((error) => {
        console.error("Error fetching Allow Calls On MacBook On :", error);
      });
  }, []);

















  return (
    <div>
      <div className="top" style={{ gap: "15px" }}>
        <div id="button" onClick={() => navigate(-1)}>
          {" "}
          ＜ Back{" "}
        </div>
        <div style={{ color: "white", gap: "10px" }}>
          Calls on Other Devices
        </div>
      </div>

      <div id="Blocks" style={{ height: "40px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            Allow Calls
          </span>

          <span  className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleAllowCallsonOtherDevices}
                checked={isAllowCallsonOtherDevicesOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      </div>

      <span className="paragraph">
        Use your iPhone mobile account to make and receive <br /> calls on
        devices signed in to your iCloud account when
        <br /> they are nearby and on Wi-Fi.
      </span>
      <br />

      <span className="paragraph">ALLOW CALLS ON</span>

      <div id="Blocks" style={{ height: "40px", marginTop: "5px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            Aman's Macbook Air
          </span>

          <span className="Toggle_Place">
            <label className="switch">
              <input type="checkbox" onChange={toggleAllowCallsOnMacBook} checked={isAllowCallsOnMacBookOn} />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CallsDevices;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MobiledataOption() {
  const navigate = useNavigate();

  const [isDataRoamingOn, setDataRoamingOn] = useState(false);
  const toggleDataRoaming= () => {
    setDataRoamingOn(!isDataRoamingOn);
    sendDataToServer(!isDataRoamingOn);
  };

  const sendDataToServer = async (data) => {
    fetch("http://localhost:8000/dataroaming/dataroaming", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDataRoamingOn: data }),
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
    // Fetch the Scheduled setting from the server when the component mounts
    fetch("http://localhost:8000/dataroaming/dataroaming", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setDataRoamingOn(data.isDataRoamingOn);
      })
      .catch((error) => {
        console.error("Error fetching Airplane Mode:", error);
      });
  }, []);









  const [isLowDataModeOn, setLowDataModeOn] = useState(false);
  const toggleLowDataMode = () => {
    setLowDataModeOn(!isLowDataModeOn);
    sendlowDataToServer(!isLowDataModeOn);
  };



  const sendlowDataToServer = async (data) => {
    fetch("http://localhost:8000/lowdata/lowdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isLowDataModeOn: data }),
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
    // Fetch the Low Data Mode On setting from the server when the component mounts
    fetch("http://localhost:8000/lowdata/lowdata", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setLowDataModeOn(data.isLowDataModeOn);
      })
      .catch((error) => {
        console.error("Error fetching Low Data Mode On :", error);
      });
  }, []);





  const [isLimitIPAddressTrackingOn, setLimitIPAddressTrackingOn] = useState(false);
  const toggleLimitIPAddressTracking = () => {
    setLimitIPAddressTrackingOn(!isLimitIPAddressTrackingOn);
    sendIPToServer(!isLimitIPAddressTrackingOn);
  };

 const sendIPToServer = async (data) => {
    fetch("http://localhost:8000/IP/IP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isLimitIPAddressTrackingOn: data }),
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
    
    fetch("http://localhost:8000/IP/IP", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setLimitIPAddressTrackingOn(data.isLimitIPAddressTrackingOn);
      })
      .catch((error) => {
        console.error("Error fetching Limit IP Adderss Tracking On :", error);
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
          Mobile Data Option{" "}
        </div>
      </div>

      <div id="Blocks" style={{ height: "80px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            {" "}
            Data Roming{" "}
          </span>
          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleDataRoaming}
                checked={isDataRoamingOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>

        <hr id="Horizontal_Line_General" style={{ marginTop: "10px" }} />

        <div className="Screen_View_Row" onClick={() => navigate("/VoicsData")}>
          <span className="Button_Click"> Voice & Data </span>
          <div style={{ marginRight: "10px" }}> 4G</div>
          <span className="Arrow_Icon"> {">"}</span>
        </div>
      </div>

      <br />
      <br />

      <div id="Blocks" style={{ height: "40px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            {" "}
            Low Data Mode{" "}
          </span>
          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleLowDataMode}
                checked={isLowDataModeOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      </div>

      <span className="paragraph">
        Low Data Mode helps reduce mobile data usage. When <br /> Low Data Mode
        is turned on , automatic updates and <br />
        background tasks, such as Photos syncing, are
        <br /> paused.
      </span>

      <br />

      <div id="Blocks" style={{ height: "40px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            {" "}
            Limit Tracking{" "}
          </span>
          <span className="Toggle_Place">
            <label className="switch">
              <input type="checkbox" onChange={toggleLimitIPAddressTracking} checked={isLimitIPAddressTrackingOn} />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      </div>
      <span className="paragraph">
        Limit IP adddress tracking by hiding your IP address <br /> from known
        trackers in Mail and Safari
      </span>
    </div>
  );
}

export default MobiledataOption;

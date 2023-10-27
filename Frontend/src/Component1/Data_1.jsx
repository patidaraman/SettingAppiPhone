import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Data_1() {
  const navigate = useNavigate();

  const [isMobileDataOn, setMobileDataOn] = useState(false);
  const togglMobileData = () => {
    setMobileDataOn(!isMobileDataOn);
    sendDataToServer(!isMobileDataOn);
  };

  

  const sendDataToServer = async (data) => {
    fetch("http://localhost:8000/mobiledata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( { isMobileDataOn:data}),
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
    // Fetch the Airplane Mode setting from the server when the component mounts
    fetch("http://localhost:8000/mobiledata", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setMobileDataOn(data.isMobileDataOn);
      })
      .catch((error) => {
        console.error("Error fetching Mobile Data :", error);
      });
  }, []);





  return (
    <div>
      <div className="top">
        <div
          style={{ fontSize: "19px" }}
          id="button"
          onClick={() => navigate(-1)}
        >
          {" "}
          ＜ Setting{" "}
        </div>
        <div style={{ color: "white", fontSize: "17px", marginLeft: "4px" }}>
          Mobile Data
        </div>
      </div>

      <br />

      <div id="Blocks" style={{ height: "120px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            {" "}
            Mobile Data{" "}
          </span>

          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={togglMobileData}
                checked={isMobileDataOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>

        <hr id="Horizontal_Line_General" style={{ marginTop: "10px" }} />

        <div
          className="Screen_View_Row"
          onClick={() => navigate("/MobiledataOption")}
        >
          <span
            className="Button_Click"
            onClick={() => navigate("/MobiledataOption")}
          >
            {" "}
            Mobile Data Option{" "}
          </span>
          <div style={{ marginRight: "10px" }}> Roming </div>
          <span className="Arrow_Icon"> {">"}</span>
        </div>

        <hr id="Horizontal_Line_General" style={{ marginTop: "10px" }} />

        <div className="Screen_View_Row" onClick={() => navigate("/Hotspot_1")}>
          <span className="Button_Click"> Personal Hotspot </span>
          <div style={{ marginRight: "10px" }}> On </div>
          <span className="Arrow_Icon"> {">"}</span>
        </div>
      </div>

      <span className="paragraph">
        Turn off mobile data to restrict all data to Wi-Fi, <br /> including
        email, web browsing and push notifications.
      </span>
      <br />
      <span className="paragraph">IDEA</span>

      <div id="Blocks" style={{ marginTop: "5px", height: "230px" }}>
        <div className="Screen_View_Row">
          <div
            className="Button_Click"
            style={{ marginTop: "12px" }}
            onClick={() => navigate("/NetworkSelection")}
          >
            Network Selection{" "}
          </div>
          <div
            className=" ThreeInRow"
            onClick={() => navigate("/NetworkSelection")}
          >
            {" "}
            Vi
          </div>
          <span className=" ThreeInRow">{">"}</span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div
          className="Screen_View_Row"
          onClick={() => navigate("/CallingWifi")}
        >
          <span className="Button_Click"> Wi-Fi Calling </span>
          <div
            style={{ marginRight: "10px" }}
            onClick={() => navigate("/CallingWifi")}
          >
            {" "}
            Off{" "}
          </div>
          <span className="Arrow_Icon"> {">"}</span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div
          className="Screen_View_Row"
          onClick={() => navigate("/CallsDevices")}
        >
          <span className="Button_Click"> Calls on other Devices </span>
          <div
            style={{ marginRight: "10px" }}
            onClick={() => navigate("/CallsDevices")}
          >
            {" "}
            Nearby{" "}
          </div>
          <span className="Arrow_Icon"> {">"}</span>
        </div>

        <hr id="Horizontal_Line_General" />

        <span>
          {" "}
          <a
            href="https://www.myvi.in/"
            style={{
              textDecoration: "none",
              color: "#007FFF",
              fontSize: "15px",
              marginLeft: "18px",
            }}
          >
            {" "}
            Network Provider Services{" "}
          </a>
        </span>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row" onClick={() => navigate("/SimPin")}>
          <span className="Button_Click" onClick={() => navigate("/SimPin")}>
            {" "}
            SIM PIN{" "}
          </span>
          <span className="Arrow_Icon"> {">"}</span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div
          className="Screen_View_Row"
          onClick={() => navigate("/SimApplication")}
        >
          <span
            className="Button_Click"
            onClick={() => navigate("/SimApplication")}
          >
            {" "}
            SIM Applications{" "}
          </span>
          <span className="Arrow_Icon"> {">"}</span>
        </div>
      </div>
    </div>
  );
}

export default Data_1;

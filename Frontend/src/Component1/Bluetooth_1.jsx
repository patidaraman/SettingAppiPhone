import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Bluetooth_1() {
  const navigate = useNavigate();

  const [isBluetoothOn, setBluetoothOn] = useState(false);
  const toggleBluetooth = () => {
    setBluetoothOn(!isBluetoothOn);
    sendDataToServer(!isBluetoothOn);
  };

  const sendDataToServer = async (data) => {
    fetch("http://localhost:8000/bluetooth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isBluetoothOn: data }),
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
    fetch("http://localhost:8000/bluetooth", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setBluetoothOn(data.isBluetoothOn);
      })
      .catch((error) => {
        console.error("Error fetching Airplane Mode:", error);
      });
  }, []);


  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div id="button" onClick={() => navigate(-1)}>
          {" "}
          ＜ Settings{" "}
        </div>
        <div style={{ color: "white", fontSize: "20px", marginLeft: "30px" }}>
          Bluetooth
        </div>
      </div>

      {/* 
  <div id="Blocks" >
       <div>
             <span>Bluetooth </span>
             <span style={{marginTop:"5px",marginRight:""}}>
                     <label className="switch">
                     <input type="checkbox" onChange={toggleBluetooth} checked={isBluetoothOn} />
                     <span className="slider round"></span>
                     </label>
              </span>

    </div>
   

  </div> */}

      <div id="Blocks" style={{ height: "40px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            Bluetooth
          </span>

          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleBluetooth}
                checked={isBluetoothOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      </div>

      <span className="Gray_In_Button">Now discoverable as " Aman iPhone"</span>

      <br />
      <br />
      <span className="Gray_In_Button">MY DEVICES</span>

      <div>
        <div id="Blocks" className="b2">
          <div className="Screen_View_Row">
            <div
              className="Button_Click"
              style={{ marginTop: "10px" }}
              onClick={() => navigate("")}
            >
              Aman's Airpods{" "}
            </div>
            <span className="Arrow_Icon" style={{ marginTop: "10px" }}>
              Connected{" "}
            </span>
          </div>
          <hr id="Horizontal_Line_General" />

          <div className="Screen_View_Row">
            <div className="Button_Click" onClick={() => navigate("")}>
              OnePlus Bullets...{" "}
            </div>
            <span className="Arrow_Icon">Not_Connected </span>
          </div>
          <hr id="Horizontal_Line_General" />

          <div className="Screen_View_Row">
            <div className="Button_Click" onClick={() => navigate("")}>
              {" "}
              Aman's Macbook Air{" "}
            </div>
            <span className="Arrow_Icon">Not_Connected</span>
          </div>
          <hr id="Horizontal_Line_General" />

          <div className="Screen_View_Row">
            <div className="Button_Click" onClick={() => navigate("")}>
              Apple TV{" "}
            </div>
            <span className="Arrow_Icon">Not_Connected</span>
          </div>
        </div>
      </div>

      <br />

      <span className="Gray_In_Button">OTHER DEVICES ⊙</span>

      <div id="Blocks" className="b1">
        <div className="Screen_View_Row">
          <div
            className="Button_Click"
            style={{ marginTop: "10px" }}
            onClick={() => navigate("")}
          >
            Aman's Airpods{" "}
          </div>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click" onClick={() => navigate("")}>
            OnePlus Bullets...{" "}
          </div>
        </div>
      </div>
      <br></br>

      <div className="Screen_View_Row">
        <span className="paragraph">
          To pair an Apple Watch with your iPhone , go to the
          <br />
          <a
            href=" https://support.apple.com/en-in/HT204784"
            style={{ textDecoration: "none", color: "#007FFF" }}
          >
            Apple Watch app.
          </a>
        </span>
      </div>
    </div>
  );
}

export default Bluetooth_1;

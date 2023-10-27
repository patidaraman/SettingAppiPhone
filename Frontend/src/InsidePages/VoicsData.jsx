import React, { useEffect, useState } from "react";
import { navigate, useNavigate } from "react-router-dom";

// CSS code 604

function VoicsData() {
  const navigate = useNavigate();

  const [isVoLTEOn, setVoLTEOn] = useState(false);
  const toggleVoLTE = () => {
    setVoLTEOn(!isVoLTEOn);
    sendvolteToServer(!isVoLTEOn)
  };

  const sendvolteToServer = async (data) => {
    fetch("http://localhost:8000/volte/volte", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isVoLTEOn: data }),
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
    
    fetch("http://localhost:8000/volte/volte", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setVoLTEOn(data.isVoLTEOn);
      })
      .catch((error) => {
        console.error("Error fetching VoLTE On :", error);
      });
  }, []);








  const options = ["4G", "3G"];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
    sendSelectednetworkToServer(option);
  };

  const sendSelectednetworkToServer = (selectedNetwork) => {
    fetch("http://localhost:8000/networkv/networkv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedNetwork }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Selected selected Network sent to the server:", data);
        setSelectedOption(selectedNetwork); // Update the local state
      })
      .catch((error) => {
        console.error("Error sending data to the server:", error);
      });











    }






  return (
    <div>
      <div className="top">
        <div id="button" onClick={() => navigate(-1)}>
          {" "}
          ＜ Back{" "}
        </div>
        <div style={{ color: "white", fontSize: "20px" }}>Voice & Data</div>
      </div>

      <br />

      <div
        id="blocks"
        style={{ height: "73px", background: "#2a2929f8", borderRadius: "8px" }}
      >
        <div className="option-list">
          <ul>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={selectedOption === option ? "selected" : ""}
              >
                {option}
                {selectedOption === option && (
                  <span className="checkmark">✓</span>
                )}
              </li>
            ))}
          </ul>
          <div className="horizontal-lines">
            {options.map(
              (option, index) =>
                index !== options.length - 1 && (
                  <div key={index} className="line" />
                )
            )}
          </div>
        </div>
      </div>

      <span className="paragraph">Using 4G loads data faster</span>

      <br />

      <div id="Blocks" style={{ height: "40px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            VoLTE
          </span>
          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleVoLTE}
                checked={isVoLTEOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      </div>

      <span className="paragraph"> Using VoLTE can improve voice Quality</span>
    </div>
  );
}

export default VoicsData;

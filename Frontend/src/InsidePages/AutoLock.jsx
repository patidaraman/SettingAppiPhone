import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AutoLock() {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("30 Second");

  const handleTimeChange = (event) => {
    const newSelectedTime = event.target.value;
    setSelectedTime(newSelectedTime);

    // Send the selected time to the backend
    sendSelectedTimeToServer(newSelectedTime);
  };

  const sendSelectedTimeToServer = (newSelectedTime) => {
    fetch("http://localhost:8000/autolock/autolock", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ selectedTime: newSelectedTime }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data sent to the server:", data);
      })
      .catch((error) => {
        console.error("Error sending data to the server:", error);
      });
  };

  return (
    <div>
      <div className="top">
        <div id="button" onClick={() => navigate(-1)}>
          {" "}
          ＜ Settings{" "}
        </div>
        <div style={{ color: "white" }}>Auto-Lock</div>
      </div>

      <div></div>

      <div>
        <form action="#">
          <select
            name="time"
            id="lang"
            value={selectedTime}
            onChange={handleTimeChange}
          >
            <option value="30 Second">30 Second</option>
            <option value="1 Minute">1 Minute</option>
            <option value="2 Minute">2 Minute</option>
            <option value="3 Minute">3 Minute</option>
            <option value="4 Minute">4 Minute</option>
            <option value="5 Minute">5 Minute</option>
            <option value="Never">Never</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default AutoLock;

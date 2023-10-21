import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NetworkSelection() {
  const navigate = useNavigate();

  const [isNetworkSelectionOn, setNetworkSelectionOn] = useState(false);
  const toggleNetworkSelection = () => {
    setNetworkSelectionOn(!isNetworkSelectionOn);
  };
  return (
    <div>
      <div className="top" style={{ gap: "15px" }}>
        <div id="button" onClick={() => navigate(-1)}>
          {" "}
          ＜ Back{" "}
        </div>
        <div style={{ color: "white", gap: "10px" }}>Network Selection </div>
      </div>

      <div id="Blocks" style={{ height: "40px", marginTop: "25px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            {" "}
            Automatic{" "}
          </span>

          <span className="Toggle_Place">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleNetworkSelection}
                checked={isNetworkSelectionOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NetworkSelection;

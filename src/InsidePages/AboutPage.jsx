import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AboutPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="top">
        <div
          style={{ fontSize: "19px" }}
          id="button"
          onClick={() => navigate(-1)}
        >
          {" "}
          ＜ General{" "}
        </div>
        <div
          className="About_Arrow"
          style={{ color: "white", fontSize: "20px" }}
        >
          About
        </div>
      </div>
      <br />
      <br />

      <div id="Blocks" className="C1">
        <div className="Screen_View_Row">
          <div className="Button_Click" style={{ marginTop: "10px" }}>
            Name{" "}
          </div>
          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            iPhone
          </span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click">Software Version </div>
          <span className="About_Arrow">15.7.9</span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click">Model Name </div>
          <span className="About_Arrow">iPhone7 </span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click">Model Number </div>
          <span className="About_Arrow">MN8Y2HN/A</span>
        </div>

        <hr id="Horizontal_Line_General" />
        <div className="Screen_View_Row">
          <div className="Button_Click">Serial Number </div>
          <span className="About_Arrow">F17SX1A6HG&G</span>
        </div>
      </div>

      <br />
      <br />

      <div id="Blocks" className="C2">
        <div className="Screen_View_Row">
          <div
            className="Button_Click"
            style={{ marginTop: "10px" }}
            onClick={() => navigate("/Coveragepage")}
          >
            Coverage Expired{" "}
          </div>
          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            {">"}
          </span>
        </div>
      </div>

      <br />
      <span className="Gray_In_Button">PARTS AND SERVICE HISTORY</span>

      <div id="Blocks" className="C3">
        <div className="Screen_View_Row">
          <div
            className="Button_Click"
            style={{ marginTop: "10px" }}
            onClick={() => navigate("/Batterypage")}
          >
            Battery{" "}
          </div>
          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            {">"}
          </span>
        </div>
      </div>

      <span style={{ display: "flex", flexDirection: "column" }}>
        <span className="Gray_In_Button">
          Parts and service history is collected by Apple and <br />
          shows information on the status and repair details <br />
          for your iPhone.
          <a
            href="https://support.apple.com/en-in/HT212878?cid=iOS_SettingsUI_iphone_article_HT212878"
            style={{ textDecoration: "none", color: "#007FFF" }}
          >
            Learn more...
          </a>
        </span>
      </span>

      <br />

      <div id="Blocks" className="C4">
        <div className="Screen_View_Row">
          <div className="Button_Click" style={{ marginTop: "5px" }}>
            Network{" "}
          </div>
          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            Vi_India
          </span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click">Songs </div>
          <span className="About_Arrow">0</span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click">Videos </div>
          <span className="About_Arrow">63 </span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click"> Photos </div>
          <span className="About_Arrow">592</span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click">Applications </div>
          <span className="About_Arrow">34</span>
        </div>
        <hr id="Horizontal_Line_General" />
        <div className="Screen_View_Row">
          <div className="Button_Click">Capacity </div>
          <span className="About_Arrow">32GB</span>
        </div>
        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click">Available </div>
          <span className="About_Arrow">1.61GB</span>
        </div>
      </div>

      <br />

      <div id="Blocks" className="C5">
        <div className="Screen_View_Row">
          <div className="Button_Click" style={{ marginTop: "5px" }}>
            Network Provider{" "}
          </div>
          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            Idea50.0
          </span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click"> Wi-Fi Address </div>
          <span className="About_Arrow">40:4D:7F:B3:E6:45</span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click">Bluetooth </div>
          <span className="About_Arrow">40:4D:7F:B3:E6:46</span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <div className="Button_Click">IMEI </div>
          <span className="About_Arrow">353778087754524</span>
        </div>

        <hr id="Horizontal_Line_General" />
        <div className="Screen_View_Row">
          <div className="Button_Click">ICCID</div>
          <span className="About_Arrow">89910275115008463588</span>
        </div>
        <hr id="Horizontal_Line_General" />
        <div className="Screen_View_Row">
          <div className="Button_Click">Modern Firmware</div>
          <span className="About_Arrow">6.03.01</span>
        </div>
        <hr id="Horizontal_Line_General" />
        <div className="Screen_View_Row">
          <div className="Button_Click">SEID</div>
          <span className="About_Arrow">00023456040568757</span>
        </div>

        <hr id="Horizontal_Line_General" />
        <div className="Screen_View_Row">
          <div className="Button_Click">Network Provider Lock </div>
          <span className="About_Arrow">No_SIM_restricti...</span>
        </div>
      </div>

      <br />

      <div id="Blocks" className="C6">
        <div className="Screen_View_Row">
          <div
            className="Button_Click"
            style={{ marginTop: "10px" }}
            onClick={() => navigate("/Certificatepage")}
          >
            Certificate Trust Settings{" "}
          </div>
          <span className="About_Arrow" style={{ marginTop: "10px" }}>
            {">"}
          </span>
        </div>
      </div>
      <br />
    </div>
  );
}

export default AboutPage;

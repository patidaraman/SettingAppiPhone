import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Wifi_Password() {
  const navigate = useNavigate();

  const [Password, setPassword] = useState({});
  const handlePassword = (e) => {
    console.log(e.target.value, e.target.name);
    setPassword({ ...Password, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/password", {
      method: "POST",
      body: JSON.stringify(Password),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    navigate('/Hotspot_1');
  };





  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="top">
          <div id="button" onClick={() => navigate(-1)}>
            Cancel
          </div>
          <div className="WiFiPasswordW">Wi-Fi Password </div>
          <button className="onDone" onClick={() => navigate(-1)}>
            {" "}
            Done
          </button>
        </div>
        <br /> <br />
        <div id="Blocks" style={{ height: "45px" }} className="Screen_View_Row">
          <span className="passwordWritten">Password:</span>
          <input
            onChange={handlePassword}
            name="password"
            type="text"
            placeholder="Set Password"
          ></input>
          <span className="cross">╳</span>
          {/* <p>{JSON.stringify(password)}</p> to check password enter in password input coming or not  */}
        </div>
      </form>

      <div>
        <span className="paragraph">
          {" "}
          Other users will join your shared Wi-Fi network
          <br /> using this password.
        </span>
        <br />
        <span className="paragraph">
          {" "}
          The password must contain at least 8 Characters. <br /> Changing the
          password will disconnect any <br />
          currently connected users.
        </span>
      </div>
    </div>
  );
}

export default Wifi_Password;

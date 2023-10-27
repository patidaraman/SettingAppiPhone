import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Sound_1() {
  const navigate = useNavigate();

  // 1. vibrate on ring slider
  const [isVibrateRingOn, setVibrateRingOn] = useState(false);
  const toggleVibrateRing = () => {
    setVibrateRingOn(!isVibrateRingOn);
    sendVibrateToServer(!isVibrateRingOn);
  };


  const sendVibrateToServer = async (data) => {
    fetch("http://localhost:8000/vibratering/vibratering", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isVibrateRingOn: data }),
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
    fetch("http://localhost:8000/vibratering/vibratering", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setVibrateRingOn(data.isVibrateRingOn);
      })
      .catch((error) => {
        console.error("Error fetching Vibrate on Ring:", error);
      });
  }, []);







  // 2. vibrate on silent slider
  const [isVibrateSilentOn, setVibrateSilentOn] = useState(false);
  const toggleVibrateSilent = () => {
    setVibrateSilentOn(!isVibrateSilentOn);
    sendSilentToServer(!isVibrateSilentOn);
  };



  const sendSilentToServer = async (data) => {
    fetch("http://localhost:8000/vibratesilent/vibratesilent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isVibrateSilentOn: data }),
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
    fetch("http://localhost:8000/vibratesilent/vibratesilent", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setVibrateSilentOn(data.isVibrateSilentOn);
      })
      .catch((error) => {
        console.error("Error fetching Vibrate on Silent:", error);
      });
  }, []);






  // 3. slider for sound
  const [sliderValue, setSliderValue] = useState(50);
   
  const handleSliderChange = (event) => {
    const newSoundValue = event.target.value;
    sendSoundValueToServer( newSoundValue);
    setSliderValue( newSoundValue);
   
  };


  const sendSoundValueToServer = (newSoundValue) => {
    fetch("http://localhost:8000/sound/sound", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sliderValue: newSoundValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data sent to the server:", data);
         setSliderValue(data.Level);
      })
      .catch((error) => {
        console.error("Error sending data to the server:", error);
      });
  };


  useEffect(() => {
    // Fetch the brightness level from the server when the component mounts
    fetch("http://localhost:8000/sound/sound", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setSliderValue(data.SoundLevel);
      })
      .catch((error) => {
        console.error("Error fetching  sound value :", error);
      });
  }, []);


































  // 4. change with button slider
  const [isChangeWithButtonOn, setChangeWithButtonOn] = useState(false);
  const toggleChangeWithButton = () => {
    setChangeWithButtonOn(!isChangeWithButtonOn);
    sendbuttonToServer(!isChangeWithButtonOn);
  };


  const sendbuttonToServer = async (data) => {
    fetch("http://localhost:8000/changebutton/changebutton", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isChangeWithButtonOn: data }),
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
    fetch("http://localhost:8000/changebutton/changebutton", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setChangeWithButtonOn(data.isChangeWithButtonOn);
      })
      .catch((error) => {
        console.error("Error fetching Vibrate on Silent:", error);
      });
  }, []);




  // 5. keyboard clicks slider
  const [isKeyboardClicksOn, setKeyboardClicksOn] = useState(false);
  const toggleKeyboardClicks = () => {
    setKeyboardClicksOn(!isKeyboardClicksOn);
    sendKeyboardToServer(!isKeyboardClicksOn);
  };



  const sendKeyboardToServer = async (data) => {
    fetch("http://localhost:8000/keyboard/keyboard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isKeyboardClicksOn: data }),
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
    // Fetch the Keyboard Clicks setting from the server when the component mounts
    fetch("http://localhost:8000/keyboard/keyboard", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setKeyboardClicksOn(data.isKeyboardClicksOn);
      })
      .catch((error) => {
        console.error("Error fetching Keyboard Clicks:", error);
      });
  }, []);







  // 6. lock sound slider
  const [isLockSoundOn, setLockSoundOn] = useState(false);
  const toggleLockSound = () => {
    setLockSoundOn(!isLockSoundOn);
    sendlocksoundToServer(!isLockSoundOn);
  };



  const sendlocksoundToServer = async (data) => {
    fetch("http://localhost:8000/locksound/locksound", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isLockSoundOn: data }),
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
    // Fetch the Lock Sound On setting from the server when the component mounts
    fetch("http://localhost:8000/locksound/locksound", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setLockSoundOn(data.isLockSoundOn);
      })
      .catch((error) => {
        console.error("Error fetching Keyboard Clicks:", error);
      });
  }, []);






  // 7. System hapticsslider
  const [isSystemHapticsOn, setSystemHapticsOn] = useState(false);
  const toggleSystemHaptics = () => {
    setSystemHapticsOn(!isSystemHapticsOn);
    sendsystemToServer(!isSystemHapticsOn);
  };

  const sendsystemToServer = async (data) => {
    fetch("http://localhost:8000/system/system", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isSystemHapticsOn: data }),
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
    // Fetch the Lock Sound On setting from the server when the component mounts
    fetch("http://localhost:8000/system/system", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Set the initial state based on the response
        setSystemHapticsOn(data.isSystemHapticsOn);
      })
      .catch((error) => {
        console.error("Error fetching Keyboard Clicks:", error);
      });
  }, []);














  const [selectedRingtone, setSelectedRingtone] = useState(null);

useEffect(() => {
  // Fetch the selected ringtone from the server when the component mounts
  fetch("http://localhost:8000/ringtone/ringtone")
    .then((response) => response.json())
    .then((data) => {
      setSelectedRingtone(data.selectedRingtone);
    })
    .catch((error) => {
      console.error("Error fetching selected texttone:", error);
    });
}, []);



const [selectedTexttone, setSelectedTexttone] = useState(null);

useEffect(() => {
  // Fetch the selected texttone alert  from the server when the component mounts
  fetch("http://localhost:8000/texttone/texttone")
    .then((response) => response.json())
    .then((data) => {
      setSelectedTexttone(data.selectedTexttone);
    })
    .catch((error) => {
      console.error("Error fetching selected texttone:", error);
    });
}, []);






const [selectedNewVoicemail, setSelectedNewVoicemail] = useState(null);

useEffect(() => {
  // Fetch the selected voicemail alert  from the server when the component mounts
  fetch("http://localhost:8000/voicemail/voicemail")
    .then((response) => response.json())
    .then((data) => {
      setSelectedNewVoicemail(data.selectedNewVoicemail);
    })
    .catch((error) => {
      console.error("Error fetching  New Voice mail:", error);
    });
}, []);





const [selectedCalendarAlerts, setSelectedCalendarAlerts] = useState(null);

useEffect(() => {
  // Fetch the selected calender alert  from the server when the component mounts
  fetch("http://localhost:8000/calendar/calendar")
    .then((response) => response.json())
    .then((data) => {
      setSelectedCalendarAlerts(data.selectedCalendarAlerts);
    })
    .catch((error) => {
      console.error("Error fetching  selected Calendar Alerts:", error);
    });
}, []);








const [selectedReminderAlerts, setSelectedReminderAlerts] = useState(null);

useEffect(() => {
  // Fetch the selected reminder alerts  from the server when the component mounts
  fetch("http://localhost:8000/reminder/reminder")
    .then((response) => response.json())
    .then((data) => {
      setSelectedReminderAlerts(data.selectedReminderAlerts);
    })
    .catch((error) => {
      console.error("Error fetching  selected Calendar Alerts:", error);
    });
}, []);












const [selectedAirdropAlerts, setSelectedAirdropAlerts] = useState(null);

useEffect(() => {
  // Fetch the selected Airdrop Alerts from the server when the component mounts
  fetch("http://localhost:8000/airdrop/airdrop")
    .then((response) => response.json())
    .then((data) => {
      setSelectedAirdropAlerts(data.selectedAirdropAlerts);
    })
    .catch((error) => {
      console.error("Error fetching  selected Airdrop Alerts:", error);
    });
}, []);







  return (
    <div>
      {/* Sound Page Heading  */}

      <div className="GHS">
        <div id="button" onClick={() => navigate(-1)}>
          {" "}
          ＜ Settings{" "}
        </div>
        <div style={{ fontSize: "18px", marginTop: "5px" , marginLeft:"5px" }}>
          Sound & Haptics
        </div>
      </div>

      <span
        style={{
          color: "gray",
          fontSize: "12px",
          marginLeft: "15px",
          marginTop: "20px",
        }}
      >
        VIBRATAE
      </span>

      {/* Block 1 Vibrate on ring and silent */}

      <div id="Blocks" style={{ height: "83px", marginTop: "5px" }}>
        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "10px" }}>
            {" "}
            Vibrate on Ring
          </span>
          <span style={{ marginTop: "5px", marginRight: "10px" }}>
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleVibrateRing}
                checked={isVibrateRingOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <span className="Button_Click" style={{ marginTop: "5px" }}>
            {" "}
            Vibrate on Silent{" "}
          </span>
          <span style={{ marginRight: "10px" }}>
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleVibrateSilent}
                checked={isVibrateSilentOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>
      </div>

      <br />

      <span style={{ color: "gray", fontSize: "12px", marginLeft: "15px" }}>
        HEADPHONE AUDIO
      </span>

      {/* Block 2 Headphone saftey  */}

      <div id="Blocks" style={{ height: "40px", marginTop: "5px" }}>
        <div className="Screen_View_Row">
          <span
            className="Button_Click"
            onClick={() => navigate("/HeadphoneSafety")}
            style={{ marginTop: "10px" }}
          >
            {" "}
            HeadPhone Seafty
          </span>
          <span className="Arrow_Icon" style={{ marginTop: "10px" }}>
            {">"}
          </span>
        </div>
      </div>

      <br />

      <span style={{ color: "gray", fontSize: "12px", marginLeft: "15px" }}>
        RINGER AND ALEARTS
      </span>

      <div id="Blocks" style={{ height: "83px", marginTop: "5px" }}>
        <div className="Screen_View_Row">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <span
              className="Button_Click"
              onClick={() => navigate("")}
              style={{ marginTop: "10px", marginRight: "-310px" }}
            >
              🔕
            </span>

            <div className="Sound-slider">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={handleSliderChange}
                className="sound"
              />
            </div>
            <span
              style={{
                marginTop: "8px",
                marginRight: "12px",
                marginLeft: "110px",
              }}
            >
              🔊
            </span>
          </div>
        </div>

        <hr id="Horizontal_Line_General" />

        <div className="Screen_View_Row">
          <span className="Button_Click">Change with Buttons</span>

          <span style={{ marginRight: "10px", marginBottom: "8px" }}>
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleChangeWithButton}
                checked={isChangeWithButtonOn}
              />
              <span className="slider round"></span>
            </label>
          </span>
        </div>

        <span className="Screen_View_Row" style={{ marginTop: "5px" }}>
          <span className="paragraph">
            The volume of the ringer and alerts will not be
            <br /> affected by the volume buttons
          </span>
        </span>

        <br />

        <div style={{ marginBottom: "5px" }}>
          <span className="paragraph">SOUND AND VIBRATION PATTERNS</span>
        </div>

        <div id="Blocks" style={{ height: "240px" }}>
          <div className="Screen_View_Row">
            <div className="Button_Click" onClick={() => navigate("/Ringtone")} style={{marginTop:"5px"}}>
              Ringtone
            </div>
            <div
              style={{ marginRight: "10px", marginTop: "5px", color: "gray" }}
              onClick={() => navigate("/Ringtone")}
            >
              {" "}
              {selectedRingtone !== null ? (
                                     <div> {selectedRingtone}</div>) : (
                                     <div>No ringtone selected</div>
                                    )}
                                  
            </div>
            <span className="Arrow_Icon" style={{ marginTop: "5px" }}>
              {">"}
            </span>
          </div>

          <hr id="Horizontal_Line_General" />

          <div className="Screen_View_Row">
            <div className="Button_Click" onClick={() => navigate("/TextTone")}>
              Text Tone
            </div>
            <div
              style={{ marginRight: "10px", marginTop: "5px", color: "gray" }}
              onClick={() => navigate("/TextTone")}
            >
               {selectedTexttone !== null ? (
                                     <div> {selectedTexttone}</div>) : (
                                     <div>No ringtone selected</div>
                                    )}
            </div>
            <span className="Arrow_Icon" style={{ marginTop: "5px" }}>
              {">"}
            </span>
          </div>
          <hr id="Horizontal_Line_General" />

          <div className="Screen_View_Row">
            <div
              className="Button_Click"
              onClick={() => navigate("/NewVoicemail")}
            >
              New Voicemail
            </div>
            <div
              style={{ marginRight: "10px", marginTop: "5px", color: "gray" }}
              onClick={() => navigate("/NewVoicemail")}
            >
              {" "}
              {selectedNewVoicemail !== null ? (
                                     <div> {selectedNewVoicemail}</div>) : (
                                     <div>No ringtone selected</div>
                                    )}
            </div>
            <span className="Arrow_Icon" style={{ marginTop: "5px" }}>
              {">"}
            </span>
          </div>

          <hr id="Horizontal_Line_General" />

          <div className="Screen_View_Row">
            <div
              className="Button_Click"
              onClick={() => navigate("/CalenderAlerts")}
            >
              Calendar Alerts
            </div>
            <div
              style={{ marginRight: "10px", marginTop: "5px", color: "gray" }}
              onClick={() => navigate("/CalenderAlerts")}
            >
              {" "}
               {selectedCalendarAlerts !== null ? (
                                     <div> {selectedCalendarAlerts}</div>) : (
                                     <div>No ringtone selected</div>
                                    )}
             
            </div>
            <span className="Arrow_Icon" style={{ marginTop: "5px" }}>
              {">"}
            </span>
          </div>

          <hr id="Horizontal_Line_General" />

          <div className="Screen_View_Row">
            <div
              className="Button_Click"
              onClick={() => navigate("/ReminderAlerts")}
            >
              Reminder Alrets
            </div>
            <div
              style={{ marginRight: "10px", marginTop: "5px", color: "gray" }}
              onClick={() => navigate("/ReminderAlerts")}
            >
              {" "}
              {selectedReminderAlerts !== null ? (
                                     <div> {selectedReminderAlerts}</div>) : (
                                     <div>No ringtone selected</div>
                                    )}
            </div>
            <span className="Arrow_Icon" style={{ marginTop: "5px" }}>
              {">"}
            </span>
          </div>

          <hr id="Horizontal_Line_General" />

          <div className="Screen_View_Row">
            <div className="Button_Click" onClick={() => navigate("/AirDrop")}>
              Airdrop
            </div>
            <div
              style={{ marginRight: "10px", marginTop: "5px", color: "gray" }}
              onClick={() => navigate("/AirDrop")}
            >
              {" "}
              {selectedAirdropAlerts !== null ? (
                                     <div> {selectedAirdropAlerts}</div>) : (
                                     <div>No ringtone selected</div>
                                    )}
            </div>
            <span className="Arrow_Icon" style={{ marginTop: "5px" }}>
              {">"}
            </span>
          </div>
        </div>

        <br />

        <div id="Blocks" style={{ height: "83px", marginTop: "5px" }}>
          <div className="Screen_View_Row">
            <span className="Button_Click" style={{ marginTop: "10px" }}>
              KeyBoard Clicks
            </span>

            <span style={{ marginTop: "5px", marginRight: "10px" }}>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={toggleKeyboardClicks}
                  checked={isKeyboardClicksOn}
                />
                <span className="slider round"></span>
              </label>
            </span>
          </div>

          <hr id="Horizontal_Line_General" />

          <div className="Screen_View_Row">
            <span className="Button_Click" style={{ marginTop: "5px" }}>
              Lock Sound
            </span>

            <span style={{ marginRight: "10px" }}>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={toggleLockSound}
                  checked={isLockSoundOn}
                />
                <span className="slider round"></span>
              </label>
            </span>
          </div>
        </div>

        <br />

        <div id="Blocks" style={{ height: "45px", marginTop: "5px" }}>
          <div className="Screen_View_Row">
            <span className="Button_Click" style={{ marginTop: "10px" }}>
              System Haptics
            </span>

            <span style={{ marginTop: "5px", marginRight: "10px" }}>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={toggleSystemHaptics}
                  checked={isSystemHapticsOn}
                />
                <span className="slider round"></span>
              </label>
            </span>
          </div>
        </div>
        <span className="paragraph">
          Play haptics for system controls and interactions.
        </span>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Sound_1;

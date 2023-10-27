import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SearchBar() {


  const navigate = useNavigate();


  const list=[
    {name:'About ' , link:'/AboutPage'},
    {name:'AirDrop ' , link:'/AirDrop'},
    { name:'Apple ID Suggestions' , link: "/Backed_page" },
    {name:'Auto-Lock' ,link:'/AutoLock'},
    {name:'Battery' , link:'/Batterypage'},
    { name:'Bluetooth',link:"/Bluetooth_1" },
    {name:'Calendar Alerts' , link:'/CalenderAlerts'},
    { name:'Calls on Other Devices' , link: "/CallsDevices" },
    {name:'Certificate Trust Setting' , link:'/Certificatepage'},
    {name:'Coverage Expired ' , link:'/Coveragepage'},
    { name:'Display & Brightness',link:"/Display_1" },
    {name:'Display Zoom' ,link:'/View_Display'},
    {name:'Do Not Disturb' , link:'/DND'},
    {name:'Focus' ,link:'/Focus_1'},
    { name:'General',link:"/General_1" },
    {name:'Headphone Safety ' , link:'/HeadphoneSafety'},
    { name:'Mobile Data',link:"/Data_1" },
    {name:'Mobile Data Option ' ,link:'/MobiledataOption'},
    { name:'Network Selection' , link: "/NetworkSelection" },
    {name:'New Voicemail' , link:'/NewvoiceMail'},
    {name:'Night Shift' , link: "/NightShift"},
    {name:'Notification' ,link:'/Notification_1'},
    { name:'Personal Hotspot',link:"/Hotspot_1" },
    { name:'Profile',link:"/Profile_1" },
    {name:'Reminder Alerts' , link:'/ReminderAlerts'},
    {name:'Ringtone' , link:'/Ringtone'},
    { name:'SIM Applications' , link: "/SimApplication" },
    { name:'SIM PIN' , link: "/SimPin" },
    {name:'Software Update ' , link:'/SoftwarePage'},
    { name:'Sound & Haptics ',link:"/Sound_1" },
    {name:'Text Size' ,link:'/TextSize'},
    {name:'Text Tone' , link:'/Texttone'},
    {name:'View' ,link:'/View_Display'},
    { name:'Voice & Data' , link: "/VoicsData" },
    { name:'Wi-Fi' , link: "/Wifi_1" },
    {name:'Wi-Fi Password' ,link:'/Wifi_Password'},
    



  

   
   ];


   const [filterlist,setFilterlist]=useState(list);
const [searchText, setSearchText] = useState('');

const handleSearch = (event) => {
  const input = event.target.value.toLowerCase();
  setSearchText(input);

  if (input === '') {
    setFilterlist(list);
  } else {
    const filteredValues = list.filter((item) =>
      item.name.toLowerCase().includes(input)
    );
    setFilterlist(filteredValues);
  }
};


  return  (
    <div id='main3'>
<div className="search-bar">
                     <input
                       type="text"
                       placeholder=" 🔍 Search"
                       value={searchText}
                       onChange={handleSearch}
                    />
                 </div>




                 {searchText && (
        <div className='searchBarList' >
          {filterlist.map((item, index) => (
            <div key={index} className='searchFilteredElement'>
              <div onClick={()=>{navigate(`${item.link}`)}}>{item.name}</div>
            </div>
          ))}
        </div>
      )}


    </div>
  )
}

export default SearchBar;
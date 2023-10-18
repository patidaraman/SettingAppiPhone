
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Setting from './Setting';
import Profile_1 from './Component1/Profile_1';
import Wifi_1 from './Component1/Wifi_1';
import Bluetooth_1 from './Component1/Bluetooth_1';
import Data_1 from './Component1/Data_1';
import Hotspot_1 from './Component1/Hotspot_1';
import Notification_1 from './Component1/Notification_1';
import Sound_1 from './Component1/Sound_1';
import Focus_1 from './Component1/Focus_1';
import General_1 from './Component1/General_1';
import Display_1 from './Component1/Display_1';
import AboutPage from './InsidePages/AboutPage';
import SoftwarePage from './InsidePages/SoftwarePage';
import Certificatepage from './InsidePages/Certificatepage';
import Batterypage from './InsidePages/Batterypage';
import Coveragepage from './InsidePages/Coveragepage';
import Backed_Page from './InsidePages/Backed_Page';
import Wifi_Password from './InsidePages/Wifi_Password';
import HeadphoneSafety from './InsidePages/HeadphoneSafety';










function App() {
  return (
    <>
    
    <Routes>
    
    <Route path="/" Component={Setting}> </Route>
    <Route path="/Profile_1" Component={Profile_1}> </Route>
    <Route path="/Wifi_1" Component={Wifi_1}></Route>
    <Route path='/Bluetooth_1' Component={Bluetooth_1}></Route>
    <Route path='/Data_1' Component={Data_1}></Route>
    <Route path='/Hotspot_1' Component={Hotspot_1}></Route>
    <Route path='/Notification_1' Component={Notification_1}></Route>
    <Route path='/Sound_1' Component={Sound_1}></Route>
    <Route path='/Focus_1' Component={Focus_1}></Route>
    <Route path='/General_1' Component={General_1}></Route>
    <Route path='/Display_1' Component={Display_1}></Route>
    <Route path='/AboutPage' Component={AboutPage}></Route>
    <Route path='/SoftwarePage' Component={SoftwarePage}></Route>
    <Route path='/Certificatepage' Component={Certificatepage}></Route>
    <Route path='/Batterypage' Component={Batterypage}></Route>
    <Route path='/Coveragepage' Component={Coveragepage}></Route>
    <Route path='/Backed_page' Component={Backed_Page}></Route>
    <Route path='/Wifi_Password' Component={Wifi_Password}></Route>
    <Route path='/HeadphoneSafety' Component={HeadphoneSafety}></Route>
    

    
    


    
    

    </Routes>
    
    
    </>
  );
}

export default App;

import React from 'react'

import TimerIcon from '@mui/icons-material/Timer';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import HealthAndSafetySharpIcon from '@mui/icons-material/HealthAndSafetySharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import weight from '../assets/wieght.svg'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DelHeader1 from './DelHeader1';
import DelHeader3 from './DelHeader3';
import DelHeder2 from './DelHeder2';
import './Delevery.css'
import DeleveryTab1 from './DeleveryTab1';
import DeleveryTab2 from './DeleveryTab2';
import DeleveryTab3 from './DeleveryTab3';
import Footer from './Footer';


const Delevery = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
<div>
        <div className="delivery-container">
<div sx={{ width: '100%', typography: 'body1' ,margin:'100px' }}>
      <TabContext value={value}>
        <div className="delivery-tab" sx={{ borderBottom: 1, borderColor: 'divider',margin:'100px' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={
              <DelHeader1/>
            } value="1" >

              dsfdffd
            </Tab>
            <Tab label={
              <DelHeder2/>
            }  value="2" />
            <Tab label={
              <DelHeader3/>
            }  value="3" />
          </TabList>
        </div>
        <TabPanel value="1"> <DeleveryTab1/> </TabPanel>
        <TabPanel value="2"> <DeleveryTab2/> </TabPanel>
        <TabPanel value="3"> <DeleveryTab3/> </TabPanel>
      </TabContext>
    </div>
           
        </div>
        <Footer/>
        </div>
    )
}

export default Delevery
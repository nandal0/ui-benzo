import React from 'react'
import TimerIcon from '@mui/icons-material/Timer';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import HealthAndSafetySharpIcon from '@mui/icons-material/HealthAndSafetySharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const DelHeader3 = () => {
  return (
    <div>
                 <div className="container">
                     
                <div className="col">
                    <EventNoteIcon />
                    <h3>4-Hour Ibterval</h3>
                    <p className="cel">Choose an interval in the future and our best couriers will deliver exactly at the specifies period</p>
                    <h3>from ₹ -</h3>
                    <hr />

                    {/* <i className="fa-solid fa-person-running"></i> */}
                    <DirectionsRunIcon color="primary" />
                    <DirectionsBikeIcon color="primary" />
                    {/* <i className="fa-solid fa-person-biking"></i> */}
                    <p className="cel">Delivery by 2-wheelers or public transport</p>
                    {/* <i className="fa-solid fa-weight-hanging"></i> */}
                    <weight />
                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.205 8.51C4.72 7.402 4.5 6.258 4.5 5.572c0-1.657 2.015-3 4.5-3s4.5 1.343 4.5 3c0 .686-.22 1.83-.705 2.938a4.5 4.5 0 11-7.59 0zm6.66-1.05c.267-.765.385-1.481.385-1.888 0-.28-.17-.687-.761-1.081-.583-.388-1.459-.669-2.489-.669-1.03 0-1.906.28-2.489.669-.59.394-.761.8-.761 1.081 0 .407.118 1.123.385 1.887A4.482 4.482 0 019 6.43c1.089 0 2.087.387 2.865 1.03z" fill="#969493" /></svg>                                <p className="cel">up to 20kg</p>
                    {/* <i className="fa-solid fa-chalkboard-user"></i> */}
                    {/* <i className="fa-solid fa-chalkboard-user"></i> */}
                    {/* <i className="fa-solid fa-chalkboard-user"></i> */}
                    <HealthAndSafetySharpIcon />
                    <HealthAndSafetySharpIcon />
                    <HealthAndSafetySharpIcon />
                    <p className="cel">You can choose insurance amount</p>
                    {/* <i className="fa-solid fa-user"></i> */}
                    <PersonSharpIcon />
                    <p className="cel">Our best Couriers</p>
                    {/* <i className="fa-solid fa-truck-ramp-box"></i> */}
                    <ShoppingBagIcon />
                    <p className="cel">All the delivers are created as separate orders</p>

                </div>
                 </div>

    </div>
  )
}

export default DelHeader3
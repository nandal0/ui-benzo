import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Container1 = () => {
  return (
    <div className="containerr1">
      <div className="data">
        <h3>Business delivery <br />
          you can trust</h3>
        <p>Fast intracity courier delivery service. We make delivery for <br /> businesses easier</p>
        <div className="price">
          <div className="location-input">
            <div className="inputed">
              <LocationOnOutlinedIcon />
              <input type="text" placeholder="pick up" />
            </div>
            <div className="inputed">
              <LocationOnOutlinedIcon />
              <input type="text" placeholder="drop off" />
            </div>
            <button>Continue the price</button>
            <p>Urgent delivery at no extra cost or commission
            </p>
          </div>
        </div>
      </div>
      <img src="https://borzodelivery.com/img/global/index/boxes.png" alt="" />
    </div>
  )
}

export default Container1
import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './NavBar.css'
import OrderDelevery from './OrderDelevery'
// import * as React from 'react';
import {Link} from 'react-router-dom'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const Navbar = () => {
   const [sigin,setSignin]=React.useState(true);

   let heidht="600px"
   if(!sigin){
      heidht="800px"
   }
   
const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   
   width: '500px',
   height: heidht,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   
   const [forgot,setForgot]=React.useState(true);
   const handleSignin=()=> setSignin(!sigin);
   const handleForget = () => setForgot(!forgot);
   
   return (
      <div className="navbar">
         <div className="logo">
            <img src="https://borzodelivery.com/img/global/logo.svg" alt="" />
            <div className="location">
               {/* <i className="bi bi-geo-alt"></i> */}
               <div className="location-icon">
                  <LocationOnOutlinedIcon />
               </div>
               <h4>Mumbai</h4>
            </div>

         </div>
         <div className="login">
            <p>Chat Bot</p>
            <Link to='/in-order'>
            <button>
              <OrderDelevery/>
            </button>
            </Link>
            
            <button onClick={handleOpen}>
               Login/Signup                </button>
         </div>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >
            <Fade in={open}>
               <Box sx={style}>

                  {sigin?<div class="wrapper">
                   
                        { forgot?
                     <div className="form-container">
                        <div className="slide-controls">
                           <input type="radio" name="slide" id="login" checked />
                           <input type="radio" name="slide" id="signup" />
                           <label for="login" class="slide logiin">For individual</label>
                           <label for="signup" class="slide signup">For business</label>
                           <div class="slider-tab"></div>
                        </div>
                         <div className="form-inner">
                           <form action="#" className="logiin">
                              <div class="field">
                                 <input type="text" placeholder="Phone" required />
                              </div>
                              <div className="field">
                                 <input type="password" placeholder="Password" required />
                              </div>
                              <div onClick={handleForget} className="pass-link">
                                 <a href="#">Forgot password?</a>
                              </div>
                              <div className="field btn">
                                 <div className="btn-layer"></div>
                                 <input type="submit" value="Login" />
                              </div>
                              <div className=" login">
                                 <button>Login In</button>
                              </div>

                              <button onClick={handleSignin} className="logiinn">Sign UP</button>

                          

                           </form>

                        </div>
                        
                     </div>:
                        <div className="form-inneer">
                            {/* <div className="getcode"> */}
                            <p>Password Required</p>

                            <form action="#" className="logiin">


                           <div className="field">
                                 <input className="form-controll" type="text" placeholder="Phone" required />
                                 <button className="get-code">Get Code</button>
                              </div>
                           <div className="field">
                                 <input className="form-controll" type="text" disabled placeholder="Phone" required />
                              </div>
                          

                            </form>
                            <div onClick={handleForget} className="old-password">
                               <p>I rember old password</p>
                            </div>
                           {/* </div> */}
                        </div>
                        }
                  </div>:<div class="wrapper">
                   
                   { forgot?
                <div className="form-container">
                   <div className="slide-controls">
                      <input type="radio" name="slide" id="login" checked />
                      <input type="radio" name="slide" id="signup" />
                      <label for="login" class="slide logiin">For individual</label>
                      <label for="signup" class="slide signup">For business</label>
                      <div class="slider-tab"></div>
                   </div>
                    <div className="form-inner">
                      <form action="#" className="logiin">
                         <div class="field">
                            <input type="text" placeholder="Phone" required />
                         </div>
                         <div className="field">
                            <input type="password" placeholder="Password" required />
                         </div>
                         
                      <div className="field">
                            <input className="form-controll" type="text" placeholder="Phone" required />
                            <button className="get-code">Get Code</button>
                         </div>
                      <div className="field">
                            <input className="form-controll" type="text" disabled placeholder="Phone" required />
                         </div>
                         <div onClick={handleForget} className="pass-link">
                            <a href="#">Forgot password?</a>
                         </div>
                         <div className="field btn">
                            <div className="btn-layer"></div>
                            <input type="submit" value="Login" />
                         </div>
                         <div className=" login">
                            <button>Login In</button>
                         </div>

                         <button onClick={handleSignin} className="logiinn">Sign UP</button>

                     

                      </form>

                   </div>
                   
                </div>:
                   <div className="form-inneer">
                       {/* <div className="getcode"> */}
                       <p>Password Required</p>

                       <form action="#" className="logiin">


                      <div className="field">
                            <input className="form-controll" type="text" placeholder="Phone" required />
                            <button className="get-code">Get Code</button>
                         </div>
                      <div className="field">
                            <input className="form-controll" type="text" disabled placeholder="Phone" required />
                         </div>
                     

                       </form>
                       <div onClick={handleForget} className="old-password">
                          <p>I rember old password</p>
                       </div>
                      {/* </div> */}
                   </div>
                   }
             </div>}
               </Box>
            </Fade>
         </Modal>

      </div>
   )
}

export default Navbar
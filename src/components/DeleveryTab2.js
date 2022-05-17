import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
const DeleveryTab2 = () => {
    return (
        <div>
            <div class="container1">
                <div class="formstyle">
                    <div class="orderweights">
                        <p class="para">
                            Weight
                        </p>
                    </div>
                    <div class="Tabselect">
                        <div class="Tabselect_Group Tabselect_Multiline">
                            <div class="Tabselect_TabText1">
                                <p class="para1">Up to 1 kg</p>
                            </div>
                            <div class="Tabselect_TabText1">
                                <p class="para1">Up to 5 kg</p>
                            </div>
                            <div class="Tabselect_TabText1">
                                <p class="para1">Up to 10 kg</p>
                            </div>
                            <div class="Tabselect_TabText1">
                                <p class="para1">Up to 15 kg</p>
                            </div>
                            <div class="Tabselect_TabText1">
                                <p class="para1">Up to 20 kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="FormStyles_Points">
                <div class="OrderPoints">
                    <div class="OrderPoints_Point">
                        <div class="OrderPoints_Decoration">
                            <div class="OrderPoints_Number" data-point-number="1"></div>
                            <div class="OrderPoints_Caption">From</div>
                            <div class="OrderPoints_Line"></div>
                        </div>
                        <div class="OrderPoints_OrderPoint" data-portal-key="portal">
                            <div>
                                <div class="OrderPoint_Item">
                                    <div>
                                        <div class="IncityPoint_Row">
                                            <div class="order-label">Pick up Address</div>
                                            <div class="SuggestionList_Root">
                                                <div class="OrderInputError_Root">
                                                    <div class="OrderInputError_Input">
                                                        <div class="OrderPointAddress_Root">
                                                            <div class="OrderPointAddress_Input">
                                                                <input class="OrderInput_Roott" placeholder="Street name &amp; Locality Name" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="SuggestionList_List_2">
                                                    <div class="SelectableListView_List"> </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="IncityPointSecondRow">
                                            <div class="IncityPointSecondRow_ApartmentPhone">
                                                <div class="IncityPointSecondRow">
                                                    <div class="order-label">10-digit mobile</div>
                                                    <div class="IncityPointSecondRow_PhoneWrapper">
                                                        <div class="OrderComponentWithError_Root">
                                                            <div class="OrderComponentWithError_Input">
                                                                <div class="OrderPointPhone_Root">
                                                                    <span class="OrderPointPhone_Prefix">+91</span>
                                                                    <div class="OrderPointPhone_InputCont">
                                                                        <input placeholder="хххххххххх" type="tel" class="unique-order-form__point-phone-0" value="__ ________" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="OrderPointCourierTimee">

                                                <p class="para3">
                                                    <span>Depart</span>
                                                </p>
                                                <div className="details-depart">
                                                    <Stack className="details-depart" component="form" noValidate spacing={3}>
                                                        <TextField
                                                            id="date"
                                                            label=""
                                                            type="date"
                                                            defaultValue="2017-05-24"
                                                            sx={{ width: 135, height: "40px" }}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </Stack>
                                                    <span>from</span>
                                                    <Stack className="details-depart" component="form" noValidate spacing={3}>
                                                        <TextField
                                                            id="time"
                                                            label=""
                                                            type="time"
                                                            defaultValue="07:30"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            inputProps={{
                                                                step: 300, // 5 min
                                                            }}
                                                            sx={{ width: 105 }}
                                                        />
                                                    </Stack>
                                                    <span>to</span>
                                                    <Stack className="details-depart" component="form" noValidate spacing={3}>
                                                        <TextField className="details-time"
                                                            id="time"
                                                            label=""
                                                            type="time"
                                                            defaultValue="07:30"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            inputProps={{
                                                                step: 300, // 5 min
                                                            }}
                                                            sx={{ width: 105 }}
                                                        />
                                                    </Stack>


                                                </div>
                                            </div>
                                        </div>
                                        <div class="IncityPoint_Row">
                                            <textarea class="OrderTextarea_Root_3bG6h unique-order-form__point-note-0"
                                                placeholder="flat number, floor, building name, street name, landmarks, dimensions, package, fragile, contact name, etc.">

                                            </textarea>
                                        </div>
                                        <div class="IncityPoint_Row">
                                            <div class="OrderAccordion_Root">

                                                <div className='accordian1'>

                                                    <Accordion>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography> <span class="OrderAccordion_Label ">Additional Services (Cash on Delivery, Buy from Store)</span></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <div class="OrderAccordion_Content">
                                                                    <div>
                                                                        <div class="IncityPointEcommerce_Row">
                                                                            <div class="IncityPointEcommerce_ContactPerson">
                                                                                <div class="OrderComponentWithError_Root">
                                                                                    <div class="OrderComponentWithError_Input">
                                                                                        <input class="OrderInput_Root" placeholder="Contact person" value="" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="IncityPointEcommerce_OrderId">
                                                                                <div class="OrderComponentWithError_Root">
                                                                                    <div class="OrderComponentWithError_Input">
                                                                                        <input class="OrderInput_Root" placeholder="Your order number" value="" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="IncityPointEcommerce_Actions">
                                                                                <div class="OrderComponentWithError_Root">
                                                                                    <div class="OrderComponentWithError_Inputt">
                                                                                        <div class="OrderSelect_Root">
                                                                                            <div class="OrderSelect_Label ">
                                                                                                <span class="OrderSelect_text">Not required</span>
                                                                                                <span class="OrderSelect_stick"></span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="OrderPoints_Point">
                        <div class="OrderPoints_Decoration">
                            <div class="OrderPoints_Number" data-point-number="2">

                            </div>
                            <div class="OrderPoints_Caption">To</div>
                            <div class="OrderPoints_Line">

                            </div>
                        </div>





                    </div>
                </div>

                <div class="OrderPoints">
                    <div class="OrderPoints_Point">
                        <div class="OrderPoints_Decoration">
                            <div class="OrderPoints_Number" data-point-number="1"></div>
                            {/* <div class="OrderPoints_Caption">From</div> */}
                            <div class="OrderPoints_Line"></div>
                        </div>
                        <div class="OrderPoints_OrderPoint" data-portal-key="portal">
                            <div>
                                <div class="OrderPoint_Item">
                                    <div>
                                        <div class="IncityPoint_Row">
                                            <div class="order-label">Delivery  Address</div>
                                            <div class="SuggestionList_Root">
                                                <div class="OrderInputError_Root">
                                                    <div class="OrderInputError_Input">
                                                        <div class="OrderPointAddress_Root">
                                                            <div class="OrderPointAddress_Input">
                                                                <input class="OrderInput_Roott" placeholder="96 , Fraser Road" value="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="SuggestionList_List_2">
                                                    <div class="SelectableListView_List"> </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="IncityPointSecondRow">
                                            <div class="IncityPointSecondRow_ApartmentPhone">
                                                <div class="IncityPointSecondRow">
                                                    <div class="order-label">10-digit mobile</div>
                                                    <div class="IncityPointSecondRow_PhoneWrapper">
                                                        <div class="OrderComponentWithError_Root">
                                                            <div class="OrderComponentWithError_Input">
                                                                <div class="OrderPointPhone_Root">
                                                                    <span class="OrderPointPhone_Prefix">+91</span>
                                                                    <div class="OrderPointPhone_InputCont">
                                                                        <input placeholder="хххххххххх" type="tel" class="unique-order-form__point-phone-0" value="__ ________" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="OrderPointCourierTimeee">

<p class="para3">
    <span>Depart</span>
</p>
<div className="details-depart">
    <Stack className="details-depart" component="form" noValidate spacing={3}>
        <TextField
            id="date"
            label=""
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 135, height: "40px" }}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </Stack>
    <span>from</span>
    <Stack className="details-depart" component="form" noValidate spacing={3}>
        <TextField
            id="time"
            label=""
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{
                step: 300, // 5 min
            }}
            sx={{ width: 105 }}
        />
    </Stack>
    <span>to</span>
    <Stack className="details-depart" component="form" noValidate spacing={3}>
        <TextField className="details-time"
            id="time"
            label=""
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{
                step: 300, // 5 min
            }}
            sx={{ width: 105 }}
        />
    </Stack>


</div>
</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="OrderPointCourierTime">
                                                <div class="OrderPointCourierTime_Icon">
                                                    <svg width="24" height="24" fill="hsl(223,100%,50%)" xmlns="http://www.w3.org/2000/svg">
                                                        {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M19.875 5.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-7.02 1.18a1.125 1.125 0 00-.97.132L9.128 8.384a1.125 1.125 0 101.242 1.877l2.3-1.523 1.066.35-2.034 3.151c-.02.032-.04.065-.057.098l-1.273 2.492-2.624-.596a1.125 1.125 0 00-.498 2.194l3.477.79a1.125 1.125 0 001.251-.585l1.049-2.053.685.54-1.108 4.395a1.125 1.125 0 002.131.722l1.364-5.148c.153-.452.005-.95-.37-1.245l-1.581-1.244 1.509-2.337.793 1.225c.208.32.563.513.944.513h2.48a1.125 1.125 0 000-2.25h-1.868l-1.125-1.737a1.125 1.125 0 00-.594-.457L12.855 6.43zM5.25 10.876a1.125 1.125 0 100 2.25h1.687a1.125 1.125 0 100-2.25H5.25zM3 8.625C3 8.004 3.504 7.5 4.125 7.5h1.687a1.125 1.125 0 110 2.25H4.125A1.125 1.125 0 013 8.625zm3.375-4.5a1.125 1.125 0 100 2.25h1.687a1.125 1.125 0 100-2.25H6.375z"></path> */}
                                                    </svg>
                                                </div>
                                                <p class="para3">
                                                    {/* <span>Input address to see when courier will arrive.</span> */}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="IncityPoint_Row">
                                            <textarea class="OrderTextarea_Root_3bG6h unique-order-form__point-note-0"
                                                placeholder="flat number, floor, building name, street name, landmarks, dimensions, package, fragile, contact name, etc.">

                                            </textarea>
                                        </div>
                                        <div class="IncityPoint_Row">
                                            <div class="OrderAccordion_Root">

                                                <div className='accordian1'>

                                                    <Accordion>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography> <span class="OrderAccordion_Label ">Additional Services (Cash on Delivery, Buy from Store)</span></Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                <div class="OrderAccordion_Content">
                                                                    <div>
                                                                        <div class="IncityPointEcommerce_Row">
                                                                            <div class="IncityPointEcommerce_ContactPerson">
                                                                                <div class="OrderComponentWithError_Root">
                                                                                    <div class="OrderComponentWithError_Input">
                                                                                        <input class="OrderInput_Root" placeholder="Contact person" value="" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="IncityPointEcommerce_OrderId">
                                                                                <div class="OrderComponentWithError_Root">
                                                                                    <div class="OrderComponentWithError_Input">
                                                                                        <input class="OrderInput_Root" placeholder="Your order number" value="" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="IncityPointEcommerce_Actions">
                                                                                <div class="OrderComponentWithError_Root">
                                                                                    <div class="OrderComponentWithError_Inputt">
                                                                                        <div class="OrderSelect_Root">
                                                                                            <div class="OrderSelect_Label ">
                                                                                                <span class="OrderSelect_text">Not required</span>
                                                                                                <span class="OrderSelect_stick"></span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="OrderPoints_Point">
                        <div class="OrderPoints_Decoration">
                            <div class="OrderPoints_Number" data-point-number="2">

                            </div>
                            {/* <div class="OrderPoints_Caption">To</div> */}
                            <div class="OrderPoints_Line">

                            </div>
                        </div>





                    </div>
                    <div className="add-more">
                        <span>+</span>
                        <p>Add delivery addresses</p>
                    </div>
                </div>

            </div>
            <div className="sending-input">
                <div className="sending-input-details">
                    <div className="sending-input-text">
                        <input type="text" placeholder="What are you sending? (Note:We delivery cakes up to 1kg " />
                    </div>
                    <div className="sending-input-data">
                        <span>
                            Documents
                        </span>
                        <span>
                            Food
                        </span>
                        <span>
                            Cloths
                        </span>
                        <span>
                            Grociers
                        </span>
                        <span>
                            Flowers
                        </span>
                        <span>
                            Cake
                        </span>
                        <span>
                            Parcel
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleveryTab2
import React from 'react';
import LayoutRoot from "../component/booking/LayoutRoot";
import MedicalBooking from "../component/booking/MedicalBooking";

export default function BookingPage(){
    return(
        <>
           <LayoutRoot>
               <MedicalBooking/>
           </LayoutRoot>
        </>
    );
}
import React from 'react';
import LayoutRoot from "../component/booking/LayoutRoot";
import MedicalBooking from "../component/booking/MedicalBooking";
import MedicalInfo from "../component/booking/MedicalInfo";

export default function BookingPage(){
    return(
        <>
            <LayoutRoot>
                <div className="flex flex-col md:flex-row gap-4 p-4">
                    {/* Phần MedicalBooking (chiếm 70%) */}
                    <div className="md:w-7/10 w-full bg-gray-100 p-4 rounded-lg ">
                        <MedicalBooking/>
                    </div>

                    {/* Phần MedicalInfo (chiếm 30%) */}
                    <div className="md:w-3/10 w-full bg-gray-100 p-4 rounded-lg ">
                        <MedicalInfo/>
                    </div>
                </div>
            </LayoutRoot>
        </>
    );
}
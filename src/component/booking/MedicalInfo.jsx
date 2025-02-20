import React from 'react';
import imageBooking from '../../assets/images/image-booking.png'
export default function MedicalInfo(){
    return(
        <>
            <div className="mt-10">
                <img src={imageBooking}
                     alt="Ảnh khách hàng"
                     className="w-[1200px] h-[330px] object-cover rounded-lg shadow-lg"/>
            </div>
        </>
    );
}

import React from 'react';
import BsGiaDinh from '../../assets/images/bs_giadinh.webp';

const specialties = [
    {
        title: "Bác sĩ gia đình",
        icon: BsGiaDinh,
        ref: ""
    },
    {
        title: "Tiêu hóa gan mật",
        icon: BsGiaDinh,
        ref: ""
    },
    {
        title: "Nội tổng quát",
        icon: BsGiaDinh,
        ref: ""
    },
    {
        title: "Nội tiết",
        icon: BsGiaDinh,
        ref: ""
    },
    {
        title: "Da liễu",
        icon: BsGiaDinh,
        ref: ""
    },
    {
        title: "Nội tim mạch",
        icon: BsGiaDinh,
        ref: ""
    },
    {
        title: "Nội thần kinh",
        icon: BsGiaDinh,
        ref: ""
    },
    {
        title: "Nội cơ xương khớp",
        icon: BsGiaDinh,
        ref: ""
    },
    {
        title: "Tai mũi họng",
        icon: BsGiaDinh,
        ref: ""
    },
    {
        title: "Mắt",
        icon: BsGiaDinh,
        ref: ""
    },
];

export const Specialties = () => {
    return (
        <div className="py-6 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-lg font-bold mb-8 uppercase text-center sm:text-left">
                    Chuyên khoa
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6">
                    {specialties.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-2 cursor-pointer group transition-all duration-300 hover:bg-blue-50 rounded-lg"
                        >
                            <div className="w-20 h-20 mb-3 overflow-hidden rounded-lg">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <span className="text-sm text-center text-gray-700 group-hover:text-blue-600 line-clamp-2">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Specialties;
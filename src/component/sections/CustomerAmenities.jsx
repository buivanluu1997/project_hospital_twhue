import { useState } from "react";
import {
    CalendarDaysIcon,
    MagnifyingGlassIcon,
    ClipboardDocumentListIcon,
    ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/20/solid";

const services = [
    {
        icon: <CalendarDaysIcon className="w-10 h-10 text-blue-600" />,
        title: "Đặt lịch khám lấy mẫu tại nhà",
        description: "Bệnh nhân sử dụng tiện ích này để đặt lịch lấy mẫu tại nhà hoặc đặt lịch khám chữa bệnh tại cơ sở của BỆNH VIỆN TRUNG ƯƠNG.",
        linkText: "Đặt lịch",
        href: "#",
        image: "/images/dat-lich.png",
    },
    {
        icon: <MagnifyingGlassIcon className="w-10 h-10 text-blue-600" />,
        title: "Tra cứu kết quả",
        description: "Bệnh nhân sử dụng tiện ích này để tra cứu kết quả sau khi sử dụng dịch vụ y tế tại cơ sở BỆNH VIỆN TRUNG ƯƠNG.",
        linkText: "Tra cứu",
        href: "#",
        image: "/images/tra-cuu.png",
    },
    {
        icon: <ClipboardDocumentListIcon className="w-10 h-10 text-blue-600" />,
        title: "Bảng giá dịch vụ",
        description: "Bệnh nhân sử dụng tiện ích này để xem bảng giá dịch vụ tại BỆNH VIỆN TRUNG ƯƠNG HUẾ.",
        linkText: "Xem bảng giá",
        href: "#",
        image: "/images/bang-gia.png",
    },
    {
        icon: <ChatBubbleBottomCenterTextIcon className="w-10 h-10 text-blue-600" />,
        title: "Hỏi đáp với bác sĩ",
        description: "Bệnh nhân có thể đặt câu hỏi và nhận hướng dẫn, giải đáp thắc mắc từ chuyên gia y tế.",
        linkText: "Đặt câu hỏi",
        href: "#",
        image: "/images/hoi-dap.png",
    },
];

export const CustomerAmenities = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    return (
        <div>
            <h2 className="text-lg p-4 sm:p-6 uppercase text-center sm:text-left">Tiện ích cho khách hàng</h2>
            <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 bg-gray-100 rounded-xl shadow-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center relative hover:scale-105 transition-transform duration-300"
                            onMouseEnter={() => setHoveredImage(service.image)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <div className="mb-4">{service.icon}</div>
                            <span className="text-base font-semibold text-gray-800 mb-2">{service.title}</span>
                            <p className="text-sm text-gray-600 mb-12">{service.description}</p>
                            <div className="absolute bottom-4 right-4">
                                <a
                                    href={service.href}
                                    className="text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition"
                                >
                                    {service.linkText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:w-1/2 flex items-center justify-center order-last lg:order-none">
                    {hoveredImage ? (
                        <img
                            src={hoveredImage}
                            alt="Service Preview"
                            className="w-40 h-40 sm:w-80 sm:h-80 object-cover rounded-lg shadow-lg transition-opacity duration-300"
                        />
                    ) : (
                        <div className="w-40 h-40 sm:w-80 sm:h-80 flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg text-sm">
                            Hover vào thẻ để xem ảnh
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

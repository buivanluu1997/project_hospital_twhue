const newsItems = [
    {
        id: 1,
        title: "Medpro hợp tác với Nhà Thuốc An Khang mang đến tiện ích cho người dân",
        date: "05/02/2024",
        author: "Linh Nhi",
        image: "/path-to-image1.jpg",
        description: "Medpro và Nhà thuốc An Khang bắt tay mang đến tiện ích y tế để giúp bạn đặt khám nhanh, mua thuốc online và tư vấn với được sĩ trực tuyến. Tìm hiểu ngay!"
    },
    {
        id: 2,
        title: "Top 5 bác sĩ phụ khoa tư vấn online giỏi, đáng tin cậy",
        date: "16/02/2024",
        author: "Tú Nguyễn",
        image: "/path-to-image2.jpg"
    },
    {
        id: 3,
        title: "Top 3 bệnh viện khám nội tiết tố nữ bạn cần biết",
        date: "16/02/2024",
        author: "Tú Nguyễn",
        image: "/path-to-image3.jpg"
    },
    {
        id: 4,
        title: "Bệnh viêm hô hấp ở trẻ em: dấu hiệu và nguyên nhân",
        date: "20/10/2024",
        author: "Thanh Ngân",
        image: "/path-to-image4.jpg"
    },
    {
        id: 5,
        title: "Bướu máu ở trẻ sơ sinh: từ nguyên nhân cho đến cách điều trị",
        date: "29/10/2024",
        author: "Linh Nhi",
        image: "/path-to-image5.jpg"
    }
];

export const News = () => {
    return (
        <div className="py-8 px-4 md:px-6 max-w-7xl mx-auto bg-[rgb(232, 244, 253)]">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-bold uppercase text-gray-800">
                    Tin tức y tế
                </h2>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
                    Xem tất cả →
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="md:col-span-2 lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full text-base">
                        <img
                            src={newsItems[0].image}
                            alt={newsItems[0].title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors text-base">
                                {newsItems[0].title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                {newsItems[0].description}
                            </p>
                            <div className="flex items-center text-gray-500 text-xs">
                                <span>{newsItems[0].date}</span>
                                <span className="mx-2">•</span>
                                <span>{newsItems[0].author}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {newsItems.slice(1).map((item) => (
                    <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h6 className="font-medium text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors text-base">
                                {item.title}
                            </h6>
                            <div className="flex items-center text-gray-500 text-xs">
                                <span>{item.date}</span>
                                <span className="mx-2">•</span>
                                <span>{item.author}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
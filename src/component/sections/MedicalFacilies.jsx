import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const items = [
    { title: "Bệnh Viện Trung Ương Cs1", logoUrl: "https://marketingai.mediacdn.vn/thumb_w/480//wp-content/uploads/2018/06/Sb-min-2-370x370.jpg" },
    { title: "Bệnh Viện Trung Ương Cs2", logoUrl: "https://marketingai.mediacdn.vn/thumb_w/480//wp-content/uploads/2018/06/Sb-min-2-370x370.jpg" },
    { title: "Bệnh Viện Trung Ương Cs3", logoUrl: "https://marketingai.mediacdn.vn/thumb_w/480//wp-content/uploads/2018/06/Sb-min-2-370x370.jpg" },
    { title: "Bệnh Viện Trung Ương Quốc Tế Cs1", logoUrl: "https://marketingai.mediacdn.vn/thumb_w/480//wp-content/uploads/2018/06/Sb-min-2-370x370.jpg" },
    { title: "Bệnh Viện Trung Ương Quốc Tế Cs2", logoUrl: "/images/logo2.png" },
];

export const MedicalFacilities = () => {
    return (
        <div className="py-8 px-4">
            <div className="flex justify-center mb-6">
                <h2 className="text-base uppercase font-bold text-gray-800 tracking-wide">
                    Cơ sở khám bệnh
                </h2>
            </div>

            <Swiper
                slidesPerView={1}
                breakpoints={{
                    480: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !bg-gray-300',
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-500'
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="pb-10"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center h-52 px-2">
                            <div className="w-40 h-40 flex flex-col items-center justify-center">
                                {item.logoUrl ? (
                                    <div className="w-24 h-24 mb-3 overflow-hidden">
                                        <img
                                            src={item.logoUrl}
                                            alt={item.title}
                                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-24 h-24 mb-3 flex items-center justify-center bg-gray-100 rounded-lg">
                                        <span className="text-gray-400 text-sm font-medium">Logo</span>
                                    </div>
                                )}
                                <span className="text-sm font-medium text-gray-700 text-center line-clamp-2 hover:text-blue-600 transition-colors duration-200">
                                    {item.title}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

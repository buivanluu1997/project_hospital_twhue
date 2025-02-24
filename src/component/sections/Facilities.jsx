import React from 'react';
import VatTu01 from '../../assets/images/thu-tuong-hue.webp';
import VatTu02 from '../../assets/images/xa_tri.jpg';
import VatTu03 from '../../assets/images/image011(8).png';

export const Facilities = () => {
    return (
        <div className="py-8 px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-lg font-bold uppercase text-center sm:text-left mb-6">
                Cơ sở vật chất
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
                <div className="lg:w-1/2">
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p className="text-base">
                            Bệnh viện Trung ương Huế dẫn đầu cả nước về số lượng và chất lượng dịch vụ kỹ thuật trong khám chữa bệnh,
                            với hơn 3.000 kỹ thuật và hàng chục kỹ thuật mới được cập nhật mỗi năm. Là bệnh viện đa khoa hạng đặc biệt,
                            bệnh viện sở hữu hơn 2.000 thiết bị y tế, 33 phòng mổ và thực hiện hơn 35.000 ca phẫu thuật hàng năm.
                        </p>
                        <p className="text-base">
                            Bệnh viện Trung ương Huế đầu tư trang thiết bị dựa trên nhu cầu thực tế và định hướng dài hạn,
                            có sự tư vấn từ chuyên gia. Máy móc được đưa vào sử dụng ngay sau khi tiếp nhận, luôn trong tình trạng
                            hoạt động tốt với đội ngũ quản lý chuyên trách. Bệnh viện thường xuyên bảo dưỡng, kiểm định thiết bị
                            xét nghiệm để đảm bảo độ chính xác và an toàn cao.
                        </p>
                    </div>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Xem chi tiết</button>
                </div>

                <div className="lg:w-1/2">
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="relative h-full">
                            <img
                                src={VatTu01}
                                alt="Cơ sở vật chất bệnh viện"
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="grid grid-rows-2 gap-4">
                            <div className="relative">
                                <img
                                    src={VatTu02}
                                    alt="Thiết bị y tế"
                                    className="w-full h-full object-cover rounded-lg shadow-md"
                                />
                            </div>
                            <div className="relative">
                                <img
                                    src={VatTu03}
                                    alt="Trang thiết bị hiện đại"
                                    className="w-full h-full object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;
import React from 'react';
import styles from './ExaminationService.module.css';
import {GoiCoBan, AnhBiaGoiKham} from "../../helpers/Image"

const service = [
    {
        title: "Gói Cơ Bản",
        image: GoiCoBan,
        price: 1476000,
        text: "Các xét nghiệm, thăm dò các chức năng cơ bản dành cho mọi đối tượng. Được nhân viên y tế hỗ trợ trong suốt quá trình khám.",
        ref: ""
    },
    {
        title: "Gói Nâng Cao",
        image: GoiCoBan,
        price: 2516000,
        text: "Các xét nghiệm, thăm dò chức năng chuyên sâu kết hợp tầm soát ung thư. Được nhân viên y tế hỗ trợ trong suốt quá trình khám.",
        ref: ""
    },
    {
        title: "Gói Ưu Việt",
        image: GoiCoBan,
        price: 3547000,
        text: "Các xét nghiệm, thăm dò các chức năng chuyên sâu kết hợp tầm soát ung thư. Hỗ trợ lấy máu trước tại nhà. Được nhân viên y tế hỗ trợ trong suốt quá trình khám.",
        ref: ""
    },
    {
        title: "Gói Cao Cấp (VIP)",
        image: GoiCoBan,
        price: 9123000,
        text: "Tầm soát sức khoẻ toàn diện với các chuyên gia đầu ngành, trang thiết bị tiên tiến bật nhất và trải nghiệm nhiều ưu đãi dịch vụ hỗ trợ chuyên nghiệp. Được nhân viên y tế hướng dẫn trong suốt quá trình khám",
        ref: ""
    },
    {
        title: "Gói Tri Ân Cùng Bố Mẹ",
        image: GoiCoBan,
        price: 3267000,
        text: "Dành cho người 60 tuổi trở lên. Hỗ trợ lấy máu tại nhà. Được nhân viên y tế hỗ trợ trong suốt quá trình khám.",
        ref: ""
    },
    {
        title: "Gói Đồng Hành Cùng Con",
        image: GoiCoBan,
        price: 1510000,
        text: "Dành cho trẻ em từ 6 đến 15 tuổi. Được nhân viên y tế hỗ trợ trong suốt quá trình khám.",
        ref: ""
    },
    {
        title: "Gói Doanh Nghiệp",
        image: GoiCoBan,
        price: 1037000,
        text: "Dành cho các cơ quan, doanh nghiệp và tổ chức.",
        ref: ""
    }
];

export function ExaminationService() {
    return(
        <div className="container">
            <div className={styles.nav}>
                <img className={styles.img} src={AnhBiaGoiKham} alt="Gói Khám Sức Khoẻ Tổng Quát" />
                <h1 className={styles.h2}>GÓI KHÁM SỨC KHOẺ TỔNG QUÁT TẠI BỆNH VIỆN QUỐC TẾ TW HUẾ</h1>
            </div>
            {/* Danh sách dịch vụ */}
            <div className="row">
                {service?.map((item, index) => (
                    <div key={index} className="col-md-4">
                        <div className={`${styles.card} position-relative`}>
                            {/* Hình ảnh */}
                            <img src={item.image} className="card-img-top" alt={item.title} />

                                <div className="card-body">
                                    <p className={styles.price}>{item.price.toLocaleString("vi-VN")} ₫</p>
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-text">{item.text}</p>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ExaminationService;
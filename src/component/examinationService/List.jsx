import React from 'react';
import styles from './list.module.css';
import {GoiCoBan, GoiNangCao, GoiUuViet, GoiVip, GoiTriAnBoMe, GoiDongHanhCungCon, GoiDoanhNghiep} from "../../helpers/Image"
import Navbar from "./Navbar";

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
        image: GoiNangCao,
        price: 2516000,
        text: "Các xét nghiệm, thăm dò chức năng chuyên sâu kết hợp tầm soát ung thư. Được nhân viên y tế hỗ trợ trong suốt quá trình khám.",
        ref: ""
    },
    {
        title: "Gói Ưu Việt",
        image: GoiUuViet,
        price: 3547000,
        text: "Các xét nghiệm, thăm dò các chức năng chuyên sâu kết hợp tầm soát ung thư. Hỗ trợ lấy máu trước tại nhà. Được nhân viên y tế hỗ trợ trong suốt quá trình khám.",
        ref: ""
    },
    {
        title: "Gói Cao Cấp (VIP)",
        image: GoiVip,
        price: 9123000,
        text: "Tầm soát sức khoẻ toàn diện với các chuyên gia đầu ngành, trang thiết bị tiên tiến bật nhất và trải nghiệm nhiều ưu đãi dịch vụ hỗ trợ chuyên nghiệp. Được nhân viên y tế hướng dẫn trong suốt quá trình khám",
        ref: ""
    },
    {
        title: "Gói Tri Ân Cùng Bố Mẹ",
        image: GoiTriAnBoMe,
        price: 3267000,
        text: "Dành cho người 60 tuổi trở lên. Hỗ trợ lấy máu tại nhà. Được nhân viên y tế hỗ trợ trong suốt quá trình khám.",
        ref: ""
    },
    {
        title: "Gói Đồng Hành Cùng Con",
        image: GoiDongHanhCungCon,
        price: 1510000,
        text: "Dành cho trẻ em từ 6 đến 15 tuổi. Được nhân viên y tế hỗ trợ trong suốt quá trình khám.",
        ref: ""
    },
    {
        title: "Gói Doanh Nghiệp",
        image: GoiDoanhNghiep,
        price: 1037000,
        text: "Dành cho các cơ quan, doanh nghiệp và tổ chức.",
        ref: ""
    }
];

export function List() {
    return(
        <>
            <div className="h-[65px]"></div>
            <div className="container">
                <Navbar/>
                <hr/>
                {/* Danh sách dịch vụ */}
                <div className="row" style={{marginTop: "20px"}}>
                    {service?.map((item, index) => (
                        <div key={index} className="col-md-4">
                            <div className={`${styles.card} position-relative`}>
                                {/* Hình ảnh */}
                                <img src={item.image} className={`${styles.cardImg} card-img-top`} alt={item.title}/>

                                <div className={styles.cardBody}>
                                    <p className={styles.price}>{item.price.toLocaleString("vi-VN")} ₫</p>
                                    <div className={styles.row}>
                                        <h4 className={styles.cardTitle}>{item.title}</h4>
                                        <a href="#" className={`${styles.btnDetail} btn btn-primary`}>Xem chi tiết</a>
                                    </div>
                                    <p className={styles.cardText}>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default List;
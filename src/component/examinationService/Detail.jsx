import React from 'react';
import Navbar from "./Navbar";
import styles from "./detail.module.css";
import {GoiCoBan} from "../../helpers/Image";

const item = {
    title: "Gói Cơ Bản",
    image: GoiCoBan,
    price: 1476000,
    text: "Các xét nghiệm, thăm dò các chức năng cơ bản dành cho mọi đối tượng. Được nhân viên y tế hỗ trợ trong suốt quá trình khám.",
    ref: ""
};

export function Detail(){

    return(
        <>
            <div className="h-[65px]"></div>
            <div className="container">
                <Navbar/>
                <hr/>

                <div className={`${styles.card} position-relative`}>
                    {/* Hình ảnh */}
                    <img src={item.image} className={`${styles.cardImg} card-img-top`} alt={item.title}/>

                    <div className={styles.cardBody}>
                        <p className={styles.price}>{item.price.toLocaleString("vi-VN")} ₫</p>
                        <div className={styles.row}>
                            <h4 className={styles.cardTitle}>{item.title}</h4>
                            <a href="#" className={`${styles.btnBooking} btn btn-primary`}>Đặt lịch ngay</a>
                        </div>
                        <p className={styles.cardText}>{item.text}</p>
                    </div>
                </div>

                <div className={styles.information}>
                    <h3>Thông tin gói khám</h3>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th rowSpan="2">Stt</th>
                            <th rowSpan="2">Nội dung</th>
                            <th colSpan="2">Đơn giá</th>
                            <th rowSpan="2">Giải thích</th>
                        </tr>
                        <tr>
                            <th>Nam</th>
                            <th>Nữ</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={styles.center}>1</td>
                            <td>Khám nội tổng quát</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>
                                Khám thể lực: chiều cao, cân nặng, mạch, huyết áp, nhịp thở, BMI;<br/>
                                Khám tim mạch, hô hấp, tiêu hóa, gan mật, thần kinh, vận động..., đo mạch;
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="5" className={styles.bold}>XÉT NGHIỆM MÁU VÀ NƯỚC TIỂU</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>2</td>
                            <td>10 thông số nước tiểu</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>Phát hiện bệnh lý thận, tiểu đường</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>3</td>
                            <td>Công thức máu</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>Xác định thiếu máu, nhiễm trùng</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>4</td>
                            <td>Glucose (đường huyết đói)</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>Phát hiện bệnh tiểu đường</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>5</td>
                            <td>SGOT, SGPT</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>Xét nghiệm chức năng gan</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>6</td>
                            <td>GGT</td>
                            <td className={styles.center}>✔</td>
                            <td></td>
                            <td>Xét nghiệm bệnh gan do rượu</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>7</td>
                            <td>Ure, creatinine</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>Đánh giá chức năng thận</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>8</td>
                            <td>Lipid (cholesterol, triglycerid, HDL-C, LDL-C)</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>Đánh giá rối loạn mỡ trong máu</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>9</td>
                            <td>Acid Uric</td>
                            <td className={styles.center}>✔</td>
                            <td></td>
                            <td>Tầm soát nguy cơ bệnh Gout</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>10</td>
                            <td>HBsAg miễn dịch tự động</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>Phát hiện nguy cơ nhiễm virus viêm gan siêu vi B</td>
                        </tr>
                        <tr>
                            <td colSpan="5" className={styles.bold}>CHẨN ĐOÁN HÌNH ẢNH - THĂM DÒ CHỨC NĂNG</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>11</td>
                            <td>X-Quang Tim phổi</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>Tầm soát bệnh lý về phổi (lao, viêm phổi...)</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>12</td>
                            <td>Điện tim</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>Phát hiện bệnh tim mạch</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>13</td>
                            <td>Siêu âm bụng tổng quát</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>Phát hiện bệnh lý gan, mật, tụy, thận</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>14</td>
                            <td>Siêu âm tim</td>
                            <td className={styles.center}>✔</td>
                            <td></td>
                            <td>Tầm soát, kiểm tra các bệnh về tim</td>
                        </tr>
                        <tr>
                            <td colSpan="5" className={styles.bold}>KHÁM PHỤ KHOA</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>15</td>
                            <td>Khám phụ khoa</td>
                            <td></td>
                            <td className={styles.center}>✔</td>
                            <td>Khám tầm soát viêm nhiễm phụ khoa</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>16</td>
                            <td>Xét nghiệm tế bào âm đạo</td>
                            <td></td>
                            <td className={styles.center}>✔</td>
                            <td>Xét nghiệm phát hiện sớm ung thư cổ tử cung</td>
                        </tr>
                        <tr>
                            <td className={styles.center}>17</td>
                            <td>Siêu âm tử cung, phần phụ</td>
                            <td className={styles.center}>✔</td>
                            <td className={styles.center}>✔</td>
                            <td>Kiểm tra tử cung, buồng trứng</td>
                        </tr>
                        <tr>
                        <td colSpan="2" className={styles.total}>Tổng cộng</td>
                            <td className={styles.bold}>1.476.000₫</td>
                            <td className={styles.bold}>1.477.000₫</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Detail;
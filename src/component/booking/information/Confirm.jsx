import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../information/Confirm.module.css";

export function RegistrationConfirmation() {
    return (
        <div className="container">
            <div style={{height: "90px"}}></div>
            <div className="card shadow-sm" style={{marginBottom: "14px"}}>
                <div className={`${styles.divH2} card-header`}>
                    <h2 className={`${styles.h2} cfw-bold`}>
                        Thông Tin Đặt Lịch Khám
                    </h2>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                <strong className="label">Họ và tên:</strong>
                                <span className="value"> Nguyễn Văn Trung</span>
                            </p>
                            <p>
                                <strong className="label">Ngày sinh:</strong>
                                <span className="value"> 01/10/1995</span>
                            </p>
                            <p><strong className="label">Quốc tịch:</strong>
                                <span className="value"> Việt Nam</span>
                            </p>
                            <p>
                                <strong className="label">Ngày cấp CCCD:</strong>
                                <span className="value"> 02/21/2020</span>
                            </p>
                            <p>
                                <strong className="label">Họ và tên người thân:</strong>
                                <span className="value"> Nguyễn Văn Bình</span>
                            </p>
                            <p>
                                <strong className="label">Số điện thoại:</strong>
                                <span className="value"> 0874445556</span>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong className="label">Giới tính:</strong>
                                <span className="value"> Nam</span>
                            </p>
                            <p>
                                <strong className="label">Số CCCD:</strong>
                                <span className="value"> 1254784512</span>
                            </p>
                            <p>
                                <strong className="label">Dân tộc:</strong>
                                <span className="value"> Kinh</span>
                            </p>
                            <p>
                                <strong className="label">Ngày hết hạn CCCD:</strong>
                                <span className="value"> 02/05/2035</span>
                            </p>
                            <p>
                                <strong className="label">Địa chỉ thường trú:</strong>
                                <span className="value"> Phước Vĩnh - Thuận Hoá - TP Huế</span>
                            </p>
                            <p>
                                <strong className="label">Nghề nghiệp:</strong>
                                <span className="value"> Giáo viên</span>
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <p>
                                <strong className="label">Tỉnh/Thành phố:</strong>
                                <span className="value"> Huế</span>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p>
                                <strong className="label">Quận/Huyện:</strong>
                                <span className="value"> Thuận Hoá</span>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p>
                                <strong className="label">Phường/Xã:</strong>
                                <span className="value"> Phước Vĩnh</span>
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                <strong className="label">Chuyên khoa:</strong>
                                <span className="value"> Tim mạch</span>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong className="label">Phương thức thanh toán:</strong>
                                <span className="value"> Thanh toán tại quầy</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-secondary px-4 mx-2">Quay lại</button>
                    <button className="btn btn-success px-4 mx-2">Đăng kí</button>
                </div>

            </div>
        </div>
    );
}

export default RegistrationConfirmation();

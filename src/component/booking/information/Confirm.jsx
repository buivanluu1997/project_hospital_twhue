import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function RegistrationConfirmation() {
    return (
        <div className="container">
            <div style={{height: "90px"}}></div>
            <div className="card shadow-sm" style={{marginBottom: "14px"}}>
                <div className="card-header bg-primary text-white text-center">
                    <h2 className="fw-bold">
                        Xác Nhận Thông Tin
                    </h2>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Họ và tên:</strong> Nguyễn Văn Trung</p>
                            <p><strong>Ngày sinh:</strong> 01/10/1995</p>
                            <p><strong>Quốc tịch:</strong> Việt Nam</p>
                            <p><strong>Ngày cấp CCCD:</strong> 02/21/2020</p>
                            <p><strong>Họ và tên người thân:</strong> Nguyễn Văn Bình</p>
                            <p><strong>Số điện thoại:</strong> 0874445556</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Giới tính:</strong> Nam</p>
                            <p><strong>Số CCCD:</strong> 1254784512</p>
                            <p><strong>Dân tộc:</strong> Kinh</p>
                            <p><strong>Ngày hết hạn CCCD:</strong> 02/05/2035</p>
                            <p><strong>Địa chỉ thường trú:</strong> Phước Vĩnh - Thuận Hoá - TP Huế</p>
                            <p><strong>Nghề nghiệp:</strong> Giáo viên</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <p><strong>Tỉnh/Thành phố:</strong> Huế</p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>Quận/Huyện:</strong> Thuận Hoá</p>
                        </div>
                        <div className="col-md-4">
                            <p><strong>Phường/Xã:</strong> Phước Vĩnh</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Chuyên khoa:</strong> Tim mạch</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Phương thức thanh toán:</strong> Thanh toán tại quầy</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-success px-4 mx-2">Đăng kí</button>
                    <button className="btn btn-secondary px-4 mx-2">Quay lại</button>
                </div>

            </div>
        </div>
    );
}

export default RegistrationConfirmation();

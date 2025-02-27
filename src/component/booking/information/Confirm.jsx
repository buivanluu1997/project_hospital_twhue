import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../information/Confirm.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import {findByNationalityCode, getNationality} from "../../../service/nationality";
import {findByEthnicCode} from "../../../service/ethnic";
import {findByProfessionCode} from "../../../service/profession";
import {findByClinicCode} from "../../../service/clinic";
import {findByProvinceCode} from "../../../service/province";
import {findByDistrictCode} from "../../../service/district";
import {findByWardCode} from "../../../service/ward";
import {addRegisterMedical} from "../../../service/registerMedical";

export function RegistrationConfirmation() {
    const [nationality, setNationality] = useState("");
    const [ethnic, setEthnic] = useState("");
    const [profession, setProfession] = useState("");
    const [clinic, setClinic] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const registerMedical = location.state?.registerMedical;

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (!registerMedical?.nationalityCode) return;
        const fetchData = async () => {
            const nationality = await findByNationalityCode(registerMedical.nationalityCode);
            setNationality(nationality);
        }
        fetchData();
    },[registerMedical.nationalityCode])

    useEffect(() => {
        if (!registerMedical?.ethnicCode) return;
        const fetchData = async () => {
            const ethnic = await findByEthnicCode(registerMedical.ethnicCode);
            setEthnic(ethnic);
        }
        fetchData();
    },[registerMedical.ethnicCode])

    useEffect(() => {
        if (!registerMedical?.professionCode) return;
        const fetchData = async () => {
            const profession = await findByProfessionCode(registerMedical.professionCode);
            setProfession(profession);
        }
        fetchData();
    },[registerMedical.professionCode])

    useEffect(() => {
        if (!registerMedical?.clinicCode) return;
        const fetchData = async () => {
            const clinic = await findByClinicCode(registerMedical.clinicCode);
            setClinic(clinic);
        }
        fetchData()
    },[registerMedical.clinicCode])

    useEffect(() => {
        if (!registerMedical?.provinceCode) return;
        const fetchData = async () => {
            const province = await findByProvinceCode(registerMedical.provinceCode)
            setProvince(province);
        }
        fetchData();
    },[registerMedical.provinceCode])

    useEffect(() => {
        if (!registerMedical?.districtCode) return;
        const fetchData = async () => {
            const district = await findByDistrictCode(registerMedical.districtCode);
            setDistrict(district);
        }
        fetchData();
    },[registerMedical.districtCode])

    useEffect(() => {
        if (!registerMedical?.wardCode) return;
        const fetchData = async () => {
            const ward = await findByWardCode(registerMedical.wardCode);
            setWard(ward);
        }
        fetchData();
    },[registerMedical.wardCode])

    const handleRegister = async () => {
        console.log("==========agi========")
        console.log(registerMedical)

        await addRegisterMedical(registerMedical);

        console.log("Đăng kí thành công")
    }


    if (!registerMedical) {
        return <p>Không có dữ liệu để xác nhận.</p>;
    }

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
                                <span className="value"> {registerMedical.fullName}</span>
                            </p>
                            <p>
                                <strong className="label">Ngày sinh:</strong>
                                <span className="value"> {new Date(registerMedical.dayOfBirth).toLocaleDateString("vi-VN")}</span>
                            </p>
                            <p><strong className="label">Quốc tịch:</strong>
                                <span className="value"> {nationality?.name || "Không xác định"}</span>
                            </p>
                            <p>
                                <strong className="label">Ngày cấp CCCD:</strong>
                                <span className="value"> {new Date(registerMedical.provDate).toLocaleDateString("vi-VN")}</span>
                            </p>
                            <p>
                                <strong className="label">Họ và tên người thân:</strong>
                                <span className="value"> {registerMedical.parentName}</span>
                            </p>
                            <p>
                                <strong className="label">Số điện thoại:</strong>
                                <span className="value"> {registerMedical.phone}</span>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong className="label">Giới tính:</strong>
                                <span className="value"> {registerMedical.gender}</span>
                            </p>
                            <p>
                                <strong className="label">Số CCCD:</strong>
                                <span className="value"> {registerMedical.identityNum}</span>
                            </p>
                            <p>
                                <strong className="label">Dân tộc:</strong>
                                <span className="value"> {ethnic?.name || "Không xác định"}</span>
                            </p>
                            <p>
                                <strong className="label">Ngày hết hạn CCCD:</strong>
                                <span className="value"> {new Date(registerMedical.outOfDate).toLocaleDateString("vi-VN")}</span>
                            </p>
                            <p>
                                <strong className="label">Địa chỉ thường trú:</strong>
                                <span className="value"> {registerMedical.regLocation}</span>
                            </p>
                            <p>
                                <strong className="label">Nghề nghiệp:</strong>
                                <span className="value"> {profession?.name || "Không xác định"}</span>
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <p>
                                <strong className="label">Tỉnh/Thành phố:</strong>
                                <span className="value"> {province?.name || "Không xác định"}</span>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p>
                                <strong className="label">Quận/Huyện:</strong>
                                <span className="value"> {district?.name || "Không xác định"}</span>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p>
                                <strong className="label">Phường/Xã:</strong>
                                <span className="value"> {ward?.name || "Không xác định"}</span>
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                <strong className="label">Chuyên khoa:</strong>
                                <span className="value"> {clinic?.name || "Không xác định"}</span>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong className="label">Phương thức thanh toán:</strong>
                                <span className="value"> {registerMedical.paymentMethod === 1 ? "Thanh toán tại quầy" : "Thanh toán ngay bằng QRCode"}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-secondary px-4 mx-2"
                            onClick={handleGoBack}>
                        Quay lại
                    </button>
                    <button className="btn btn-success px-4 mx-2"
                            onClick={handleRegister}>
                        Đăng kí
                    </button>
                </div>

            </div>
        </div>
    );
}

export default RegistrationConfirmation;

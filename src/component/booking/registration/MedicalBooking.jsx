import React, {useEffect} from "react";
import { useState } from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import styles from './MedicalBooking.module.css'
import {getNationality} from "../../../service/nationality";
import {getEthnic} from "../../../service/ethnic";
import {getProfession} from "../../../service/profession";
import {getClinic} from "../../../service/clinic";
import {getProvince} from "../../../service/province";
import {useLocation, useNavigate} from "react-router-dom";
import {getWard} from "../../../service/ward";
import {getDistrict} from "../../../service/district";

export function MedicalBooking() {
    const [captchaValue, setCaptchaValue] = useState(null);
    const [nationalityList, setNationalityList] = useState([]);
    const [ethnicList, setEthnicList] = useState([]);
    const [professionList, setProfessionList] = useState([]);
    const [clinicList, setClinicList] = useState([]);
    const [provinceList, setProvinceList] = useState([]);
    const [districtList, setDistrictList] = useState([]);
    const [wardList, setWardList] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const savedState = location.state;

    const value = {
        "fullName": "",
        "identityNum": "",
        "dayOfBirth": "",
        "gender": "",
        "nationalityCode": "",
        "ethnicCode": "",
        "provDate": "",
        "outOfDate": "",
        "parentName": "",
        "clinicFeeCode": "TK01",
        "ObjectCode": "00002",
        "regLocation": "",
        "phone": "",
        "professionCode": "",
        "clinicCode": "",
        "provinceCode": "",
        "districtCode": "",
        "wardCode": "",
        "paymentMethod": "",
    }
    const initialValues = savedState ? savedState : value;

    useEffect(() => {
        const fetchData = async () => {
            const list = await getNationality();
            console.log(list)
            setNationalityList(list);
        }
        fetchData();
    },[])

    useEffect(() => {
        const fetchData = async () => {
            const list = await getEthnic();
            setEthnicList(list)
        }
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const list = await getProfession();
            setProfessionList(list)
        }
        fetchData();
    },[]);
    useEffect(() => {
        const fetchData = async () => {
            const list = await getClinic();
            setClinicList(list)
        }
        fetchData();
    },[]);
    useEffect(() => {
        const fetchData = async () => {
            const list = await getProvince();
            setProvinceList(list)
        }
        fetchData();
    },[]);

    useEffect(() => {
        const fetchData = async () => {
            if (!selectedProvince) return;
            const list = await getDistrict(selectedProvince);
            setDistrictList(list)
        }
        fetchData();
    },[selectedProvince]);

    useEffect(() => {
        const fetchData = async () => {
            if (!selectedDistrict) return;
            const list = await getWard(selectedDistrict);
            setWardList(list)
        }
        fetchData();
    },[selectedDistrict]);



    const validationSchema = Yup.object({
        fullName: Yup.string().required("Vui lòng nhập họ và tên"),
        identityNum: Yup.string().required("Vui lòng nhập số CCCD"),
        dayOfBirth: Yup.date().required("Vui lòng chọn ngày sinh"),
        gender: Yup.string().required("Vui lòng chọn giới tính"),
        nationalityCode: Yup.string().required("Vui lòng chọn quốc tịch"),
        ethnicCode: Yup.string().required("Vui lòng chọn dân tộc"),
        provDate: Yup.date().required("Vui lòng chọn ngày cấp CCCD"),
        outOfDate: Yup.date().required("Vui lòng chọn ngày hết hạn CCCD"),
        parentName: Yup.string()
            .matches(/^[\p{L} ]+$/u, "Tên không được chứa số hoặc ký tự đặc biệt")
            .min(2, "Tên quá ngắn")
            .max(50, "Tên quá dài")
            .required("Vui lòng nhập họ và tên người thân"),
        regLocation: Yup.string().required("Vui lòng nhập địa chỉ thường trú"),
        phone: Yup.string().required("Vui lòng nhập số điện thoại"),
        professionCode: Yup.string().required("Vui lòng chọn nghề nghiệp"),
        clinicCode: Yup.string().required("Vui lòng nhập chuyên khoa"),
      /*  provinceCode: Yup.string().required("Vui lòng chọn Tỉnh/Thành phố"),
        districtCode: Yup.string().required("Vui lòng chọn Quận/Huyện"),
        wardCode: Yup.string().required("Vui lòng chọn Phường/Xã"),*/
        paymentMethod: Yup.string().required("Vui lòng chọn phương thức thanh toán")
    })

    const handleSubmit = (values) => {
        if (!captchaValue) {
            alert("Vui lòng xác nhận bạn không phải là robot!");
            return;
        }
        console.log("Dữ liệu hợp lệ:", values);
        const registerMedical = {
            ...values,
            provinceCode: selectedProvince,
            districtCode: selectedDistrict,
            paymentMethod: parseInt(values.paymentMethod)
        }

        navigate("/confirm", { state: { registerMedical } });
    }

    return (
        <>
            <div className="h-[60px]"></div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>

                <Form className="container">

                    <div className="card-header text-center">
                        <h2 className={styles.textCenter}>Đặt Lịch Khám Tại Bệnh Viện Quốc tế Trung Ương Huế</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Họ và tên <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field type="text" name="fullName" className="form-control" placeholder="Nhập họ và tên"
                                   autoComplete="off"/>
                            <small className="text-danger">
                                <ErrorMessage name="fullName" component="div"/>
                            </small>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Giới tính <sup
                                className={styles.textDanger}>*</sup></label>
                            <div style={{display: "flex", gap: "20px"}}>
                                <label className={styles.radioLabel}>
                                    <Field type="radio" name="gender" value="Nam" className={styles.radioInput}/> Nam
                                </label>
                                <label className={styles.radioLabel}>
                                    <Field type="radio" name="gender" value="Nữ" className={styles.radioInput}/> Nữ
                                </label>
                            </div>
                            <small><ErrorMessage name="gender" className="text-danger" component="div"/></small>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Ngày sinh <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field type="date" name="dayOfBirth" className="form-control" autoComplete="off"/>
                            <small><ErrorMessage name="dayOfBirth" className="text-danger" component="div"/></small>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Số căn cước công dân <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field type="text" name="identityNum" className="form-control" placeholder="Nhập số CCCD"
                                   autoComplete="off"/>
                            <small><ErrorMessage name="identityNum" className="text-danger" component="div"/></small>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Quốc tịch <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field as="select" name="nationalityCode" className="form-select">
                                <option value="">-----Chọn-----</option>
                                {
                                    nationalityList?.map(nationality => (
                                        <option key={nationality.nationalityCode}
                                                value={nationality.nationalityCode}>{nationality.name}</option>
                                    ))
                                }
                            </Field>
                            <small><ErrorMessage name="nationalityCode" component="div"
                                                 className="text-danger"/></small>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Dân tộc <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field as="select" name="ethnicCode" className="form-select">
                                <option value="">-----Chọn-----</option>
                                {
                                    ethnicList?.map(ethnic => (
                                        <option key={ethnic.ethnicCode} value={ethnic.ethnicCode}>{ethnic.name}</option>
                                    ))
                                }
                            </Field>
                            <small><ErrorMessage name="ethnicCode" component="div" className="text-danger"/></small>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Ngày cấp CCCD <sup className={styles.textDanger}>*</sup></label>
                            <Field type="date" name="provDate" className="form-control"/>
                            <small><ErrorMessage name="provDate" component="div" className="text-danger"/></small>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Ngày hết hạn CCCD <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field type="date" name="outOfDate" className="form-control"/>
                            <small><ErrorMessage name="outOfDate" component="div" className="text-danger"/></small>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Họ và tên người thân <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field type="text" name="parentName" className="form-control"
                                   placeholder="Nhập họ và tên người thân"/>
                            <small><ErrorMessage name="parentName" component="div" className="text-danger"/></small>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Địa chỉ thường trú <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field as="textarea" name="regLocation" className="form-control"
                                   placeholder="Nhập địa chỉ thường trú" rows="2"/>
                            <small><ErrorMessage name="regLocation" component="div" className="text-danger"/></small>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Số điện thoại <sup className={styles.textDanger}>*</sup></label>
                            <Field type="text" name="phone" className="form-control" placeholder="Nhập số điện thoại"/>
                            <small><ErrorMessage name="phone" component="div" className="text-danger"/></small>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Nghề nghiệp <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field as="select" name="professionCode" className="form-select">
                                <option value="">-----Chọn-----</option>
                                {
                                    professionList?.map(profession => (
                                        <option key={profession.professionCode}
                                                value={profession.professionCode}>{profession.name}</option>
                                    ))
                                }
                            </Field>
                            <small><ErrorMessage name="professionCode" component="div" className="text-danger"/></small>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label className={styles.formLabel}>Tỉnh/Thành phố <sup
                                className={styles.textDanger}>*</sup></label>

                            <Field as="select" name="provinceCode" className="form-select"
                                   value={selectedProvince}
                                   onChange={(e) => {
                                       const selectedValue = e.target.value;
                                       setSelectedProvince(selectedValue);
                                       setSelectedDistrict("");
                                       setWardList([]);
                                   }}>
                                <option value="">Chọn tỉnh/thành phố</option>
                                {provinceList?.map((province) => (
                                    <option key={province.provinceCode} value={province.provinceCode}
                                            onClick={() => {
                                                setSelectedProvince(province.provinceCode);
                                            }}>
                                        {province.name}
                                    </option>
                                ))}
                            </Field>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className={styles.formLabel}>Quận/Huyện <sup
                                className={styles.textDanger}>*</sup></label>

                            <Field as="select" name="districtCode" className="form-select"
                                   value={selectedDistrict}
                                   onChange={(e) => {
                                       setSelectedDistrict(e.target.value);
                                   }}
                                disabled={!selectedProvince}>
                                <option value="">-----Chọn-----</option>
                                {
                                    districtList?.map((district) => (
                                        <option key={district.districtCode}
                                                value={district.districtCode}
                                                onClick={() => {
                                                    setSelectedDistrict(district.districtCode);
                                                }}>
                                            {district.name}
                                        </option>
                                    ))

                                }
                            </Field>
                            <small><ErrorMessage name="districtCode" component="div" className="text-danger"/></small>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className={styles.formLabel}>Phường/Xã <sup
                                className={styles.textDanger}>*</sup></label>


                            <Field as="select" name="wardCode" className="form-select" disabled={!selectedDistrict}>
                                <option value="">-----Chọn-----</option>
                                {
                                    wardList?.map((ward) => (
                                        <option key={ward.wardCode} value={ward.wardCode}>{ward.name}</option>
                                    ))
                                }
                            </Field>
                            <small><ErrorMessage name="wardCode" component="div" className="text-danger"/></small>
                        </div>
                    </div>


                    <hr/>
                    <div className="mb-3">
                        <label className={styles.formLabel}>Chuyên khoa <sup
                            className={styles.textDanger}>*</sup></label>
                        <Field as="select" name="clinicCode" className="form-select">
                            <option value="">-----Chọn-----</option>
                            {clinicList?.map((clinic) => (
                                <option key={clinic.clinicCode} value={clinic.clinicCode}>{clinic.name}</option>
                            ))}
                        </Field>
                        <small><ErrorMessage name="clinicCode" component="div" className="text-danger"/></small>
                    </div>

                    {/* Trường ẩn */}
                    <Field type="hidden" name="clinicFeeCode" value="TK01"/>
                    <Field type="hidden" name="objectCode" value="00002"/>


                    <div className="mb-3">
                        <label className={styles.formLabel}>
                            Phương thức thanh toán <sup className={styles.textDanger}>*</sup>
                        </label>
                        <Field as="select" name="paymentMethod" className="form-select">
                            <option value="">-----Chọn-----</option>
                            <option value="1">Thanh toán tại quầy</option>
                            <option value="2">Thanh toán ngay bằng QRCode</option>
                        </Field>
                        <small><ErrorMessage name="paymentMethod" component="div" className="text-danger"/></small>
                    </div>

                    {/* Google reCAPTCHA */}
                    <div className="mb-3 d-flex justify-content-center">
                        <ReCAPTCHA
                            sitekey="6LdCy90qAAAAAG0gvTUFm5KkiYWwyTvP-9iJgZNV" /*"YOUR_SITE_KEY"*/
                            onChange={(value) => setCaptchaValue(value)}
                            className="shadow-sm"
                        />
                    </div>

                    <div className="text-center mt-3">
                        <button type="submit" className={`${styles.btnButton} btn btn-primary`}>Tiếp theo</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default MedicalBooking;
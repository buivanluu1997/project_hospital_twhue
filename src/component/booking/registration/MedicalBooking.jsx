import React, {useEffect} from "react";
import { useState } from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import styles from './MedicalBooking.module.css'
import {getCategories} from "../../../service/Categories";

export function MedicalBooking() {
    const [captchaValue, setCaptchaValue] = useState(null);
    const [categories, setCategories] = useState([]);

    /*useEffect(() => {
        const fetchData = async () => {
            const list = await getCategories();
            console.log("================list===========");
            console.log(list.data)
            setCategories(list.data);
        }
        fetchData();
    },[])*/

    const initialValues = {
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


    const validationSchema = Yup.object({
        fullName: Yup.string().required("Họ và tên không được để trống"),
        identityNum: Yup.string().required("Số CCCD không được để trống"),
        dayOfBirth: Yup.date().required("Ngày sinh không được để trống"),
        gender: Yup.string().required("Giới tính không được để trống"),
        nationalityCode: Yup.string().required("Quốc tịch không được để trống"),
        ethnicCode: Yup.string().required("Dân tộc không được để trống"),
        provDate: Yup.date().required("Ngày cấp CCCD không được để trống"),
        outOfDate: Yup.date().required("Ngày hết hạn CCCD không được để trống"),
        parentName: Yup.string()
            .matches(/^[\p{L} ]+$/u, "Tên không được chứa số hoặc ký tự đặc biệt")
            .min(2, "Tên quá ngắn")
            .max(50, "Tên quá dài")
            .required("Họ và tên người thân không được để trống"),
        regLocation: Yup.string().required("Địa chỉ thường trú không được để trống"),
        phone: Yup.string()
            .matches(/^[0-9]+$/, "Số điện thoại chỉ được chứa số")
            .required("Số điện thoại không được để trống"),
        professionCode: Yup.string().required("Nghề nghiệp không được để trống"),
        clinicCode: Yup.string().required("Chuyên khoa không được để trống"),
        provinceCode: Yup.string().required("Tỉnh/Thành phố không được để trống"),
        districtCode: Yup.string().required("Quận/Huyện không được để trống"),
        wardCode: Yup.string().required("Phường/Xã không được để trống"),
        paymentMethod: Yup.string().required("Phương thức thanh toán không được để trống")
    })

    const handleSubmit = (values) => {
        if (!captchaValue) {
            alert("Vui lòng xác nhận bạn không phải là robot!");
            return;
        }
        console.log("Dữ liệu hợp lệ:", values);
    }

    return (
        <>
            <div className="h-[60px]"></div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>

                <Form className="container">

                    <div className="card-header text-center">
                        <h2 className={styles.textCenter}>Đặt Lịch Thăm Khám Tại Bệnh Viện Quốc tế Trung Ương Huế</h2>
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
                                <option value="Việt Nam">Việt Nam</option>
                                <option value="Lào">Lào</option>
                            </Field>
                            <small><ErrorMessage name="nationalityCode" component="div"
                                                 className="text-danger"/></small>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className={styles.formLabel}>Dân tộc <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field as="select" name="ethnicCode" className="form-select">
                                <option value="">-----Chọn-----</option>
                                <option value="Kinh">Kinh</option>
                                <option value="Tày">Tày</option>
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
                                <option value="Công an">Công an</option>
                                <option value="Giáo viên">Giáo viên</option>
                            </Field>
                            <small><ErrorMessage name="professionCode" component="div" className="text-danger"/></small>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label className={styles.formLabel}>Tỉnh/Thành phố <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field as="select" name="provinceCode" className="form-select">
                                <option value="">-----Chọn-----</option>
                                <option value="Huế">Huế</option>
                                <option value="Đà Nẵng">Đà Nẵng</option>
                            </Field>
                            <small><ErrorMessage name="provinceCode" component="div" className="text-danger"/></small>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className={styles.formLabel}>Quận/Huyện <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field as="select" name="districtCode" className="form-select">
                                <option value="">-----Chọn-----</option>
                                <option value="Phú Xuân">Phú Xuân</option>
                                <option value="Thuận Hoá">Thuận Hoá</option>
                            </Field>
                            <small><ErrorMessage name="districtCode" component="div" className="text-danger"/></small>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className={styles.formLabel}>Phường/Xã <sup
                                className={styles.textDanger}>*</sup></label>
                            <Field as="select" name="wardCode" className="form-select">
                                <option value="">-----Chọn-----</option>
                                <option value="An Đông">An Đông</option>
                                <option value="An Tây">An Tây</option>
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
                            <option value="Ung bướu">Ung bướu</option>
                            <option value="Nhi khoa">Nhi khoa</option>

                            {/* {categories&&categories?.map((item) => (
                                <option key={item.maKhoa} value={item.maKhoa}>{item.tenKhoa}</option>
                            ))}*/}
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
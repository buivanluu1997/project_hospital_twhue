import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export function MedicalBooking() {

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
        "noteTn": ""
    }


    const validationSchema = Yup.object({
        fullName: Yup.string()
            .matches(/^[\p{L} ]+$/u, "Tên không được chứa số hoặc ký tự đặc biệt")
            .min(2, "Tên quá ngắn")
            .max(50, "Tên quá dài")
            .required("Họ và tên không được để trống"),
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

    }

    return (
        <>
            <div className="h-20"></div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>

                <Form className="container">
                    <h2 className="text-center">Đặt lịch thăm khám tại Bệnh viện Quốc tế Trung Ương Huế</h2>

                    <h5>Thông tin cá nhân:</h5>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Họ và tên <sup className="text-danger">*</sup></label>
                            <Field type="text" name="fullName" className="form-control" placeholder="Nhập họ và tên"
                                   autoComplete="off"/>
                            <small className="text-danger">
                                <ErrorMessage name="fullName" component="div"/>
                            </small>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Số căn cước công dân <sup
                                className="text-danger">*</sup></label>
                            <Field type="text" name="identityNum" className="form-control" placeholder="Nhập số CCCD"
                                   autoComplete="off"/>
                            <small><ErrorMessage name="identityNum" className="text-danger" component="div"/></small>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Ngày sinh <sup className="text-danger">*</sup></label>
                            <Field type="date" name="dayOfBirth" className="form-control" autoComplete="off"/>
                            <small><ErrorMessage name="dayOfBirth" className="text-danger" component="div"/></small>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Giới tính <sup className="text-danger">*</sup></label>
                            <Field as="select" name="gender" className="form-control">
                                <option value="">-----Chọn-----</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </Field>
                            <small><ErrorMessage name="gender" className="text-danger" component="div"/></small>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Quốc tịch <sup className="text-danger">*</sup></label>
                            <Field as="select" name="nationalityCode" className="form-select">
                                <option value="">-----Chọn-----</option>
                                <option value="Việt Nam">Việt Nam</option>
                                <option value="Lào">Lào</option>
                            </Field>
                            <small><ErrorMessage name="nationalityCode" component="div" className="text-danger"/></small>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Dân tộc <sup className="text-danger">*</sup></label>
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
                            <label className="form-label">Ngày cấp CCCD <sup className="text-danger">*</sup></label>
                            <Field type="date" name="provDate" className="form-control"/>
                            <ErrorMessage name="provDate" component="div" className="text-danger"/>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Ngày hết hạn CCCD <sup className="text-danger">*</sup></label>
                            <Field type="date" name="outOfDate" className="form-control"/>
                            <ErrorMessage name="outOfDate" component="div" className="text-danger"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Họ và tên người thân <sup
                                className="text-danger">*</sup></label>
                            <Field type="text" name="parentName" className="form-control"
                                   placeholder="Nhập họ và tên người thân"/>
                            <small><ErrorMessage name="parentName" component="div" className="text-danger"/></small>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Địa chỉ thường trú <sup
                                className="text-danger">*</sup></label>
                            <Field as="textarea" name="regLocation" className="form-control"
                                   placeholder="Nhập địa chỉ thường trú" rows="2"/>
                            <small><ErrorMessage name="regLocation" component="div" className="text-danger"/></small>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Số điện thoại <sup className="text-danger">*</sup></label>
                            <Field type="text" name="phone" className="form-control" placeholder="Nhập số điện thoại"/>
                            <small><ErrorMessage name="phone" component="div" className="text-danger"/></small>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label className="form-label">Nghề nghiệp <sup className="text-danger">*</sup></label>
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
                            <label className="form-label">Tỉnh/Thành phố <sup className="text-danger">*</sup></label>
                            <Field as="select" name="provinceCode" className="form-select">
                                <option value="">-----Chọn-----</option>
                                <option value="Huế">Huế</option>
                                <option value="Đà Nẵng">Đà Nẵng</option>
                            </Field>
                            <small><ErrorMessage name="provinceCode" component="div" className="text-danger"/></small>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">Quận/Huyện <sup className="text-danger">*</sup></label>
                            <Field as="select" name="districtCode" className="form-select">
                                <option value="">-----Chọn-----</option>
                                <option value="Phú Xuân">Phú Xuân</option>
                                <option value="Thuận Hoá">Thuận Hoá</option>
                            </Field>
                            <small><ErrorMessage name="districtCode" component="div" className="text-danger"/></small>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="form-label">Phường/Xã <sup className="text-danger">*</sup></label>
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
                        <label className="form-label">Chuyên khoa <sup className="text-danger">*</sup></label>
                        <Field as="select" name="clinicCode" className="form-select">
                            <option value="">-----Chọn-----</option>
                            <option value="Ung bướu">Ung bướu</option>
                            <option value="Nhi khoa">Nhi khoa</option>
                        </Field>
                        <small><ErrorMessage name="clinicCode" component="div" className="text-danger"/></small>
                    </div>

                    {/* Trường ẩn */}
                    <Field type="hidden" name="clinicFeeCode" value="TK01"/>
                    <Field type="hidden" name="objectCode" value="00002"/>

                    <div className="mb-3">
                        <label className="form-label">
                            Nội dung yêu cầu <sup className="text-danger">*</sup>
                        </label>
                        <Field
                            as="textarea"
                            name="noteTn"
                            placeholder="Nhập ghi chú"
                            className="form-control"
                            style={{height: "80px", resize: "vertical"}}
                        />
                        <small><ErrorMessage name="noteTn" component="div" className="text-danger"/></small>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Phương thức thanh toán <sup className="text-danger">*</sup>
                        </label>
                        <Field as="select" name="paymentMethod" className="form-select">
                            <option value="">-----Chọn-----</option>
                            <option value="1">Thanh toán tại quầy</option>
                            <option value="2">Thanh toán ngay bằng QRCode</option>
                        </Field>
                        <small><ErrorMessage name="paymentMethod" component="div" className="text-danger"/></small>
                    </div>


                    <div className="text-center mt-3">
                        <button type="submit" className="btn btn-primary">Gửi Đăng Ký</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default MedicalBooking;
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
        "parentName":"",
        "clinicFeeCode": "TK01",
        "ObjectCode": "00002",
    }


    const validationSchema = Yup.object ( {
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
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form>
                    <h3>Đặt lịch thăm khám tại Bệnh viện Quốc tế Trung Ương Huế</h3>

                    <div>
                        <label>Họ và tên <sup style={{color: "red"}}>*</sup> </label>
                        <Field type="text" name="fullName" placeholder="Nhập họ và tên"/>
                        <ErrorMessage style={{color: "red"}} name="fullName" component="div"/>
                    </div>

                    <div>
                        <label>Số căn cước công dân <sup style={{color: "red"}}>*</sup> </label>
                        <Field type="text" name="identityNum" placeholder="Nhập số CCCD"/>
                        <ErrorMessage style={{color: "red"}} name="identityNum" component="div"/>
                    </div>

                    <div>
                        <label>Ngày sinh <sup style={{color: "red"}}>*</sup> </label>
                        <Field type="date" name="dayOfBirt"/>
                        <ErrorMessage style={{color: "red"}} name="dayOfBirt" component="div"/>
                    </div>

                    <div>
                        <label>Giới tính <sup style={{color: "red"}}>*</sup> </label>
                        <Field as="select" name="gender">
                            <option value="">-----Chọn-----</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </Field>
                        <ErrorMessage style={{color: "red"}} name="gender" component="div"/>
                    </div>

                    <div>
                        <label>Quốc tịch <sup style={{color: "red"}}>*</sup> </label>
                        <Field as="select" name="nationalityCode">
                            <option value="">-----Chọn-----</option>
                            <option value="Việt Nam">Việt Nam</option>
                            <option value="Lào">Lào</option>
                        </Field>
                        <ErrorMessage style={{color: "red"}} name="nationalityCode" component="div"/>
                    </div>

                    <div>
                        <label>Dân tộc <sup style={{color: "red"}}>*</sup> </label>
                        <Field as="select" name="ethnicCode">
                            <option value="">-----Chọn-----</option>
                            <option value="Kinh">Kinh</option>
                            <option value="Tày">Tày</option>
                        </Field>
                        <ErrorMessage style={{color: "red"}} name="ethnicCode" component="div"/>
                    </div>

                    <div>
                        <label>Ngày cấp CCCD <sup style={{color: "red"}}>*</sup> </label>
                        <Field type="date" name="provDate"/>
                        <ErrorMessage style={{color: "red"}} name="provDate" component="div"/>
                    </div>

                    <div>
                        <label>Ngày hết hạn CCCD <sup style={{color: "red"}}>*</sup> </label>
                        <Field type="date" name="outOfDate"/>
                        <ErrorMessage style={{color: "red"}} name="outOfDate" component="div"/>
                    </div>

                    <div>
                        <label>Họ và tên người thân <sup style={{color: "red"}}>*</sup></label>
                        <Field type="text" name="parentName" placeholder="Nhập họ và tên người thân"/>
                        <ErrorMessage style={{color: "red"}} name="parentName" component="div"/>
                    </div>

                    <div>
                        <label>Địa chỉ thường trú <sup style={{color: "red"}}>*</sup></label>
                        <Field
                            as="textarea"
                            name="regLocation"
                            placeholder="Nhập địa chỉ thường trú"
                            style={{width: "400px", height: "60px", resize: "vertical"}}
                        />
                        <ErrorMessage style={{color: "red"}} name="regLocation" component="div"/>

                    </div>

                    <div>
                        <label>Số điện thoại <sup style={{color: "red"}}>*</sup></label>
                        <Field type="text" name="phone" placeholder="Nhập số điện thoại"/>
                        <ErrorMessage style={{color: "red"}} name="phone" component="div"/>
                    </div>

                    <div>
                        <label>Nghề nghiệp <sup style={{color: "red"}}>*</sup> </label>
                        <Field as="select" name="professionCode">
                            <option value="">-----Chọn-----</option>
                            <option value="Công an">Công an</option>
                            <option value="Giáo viên">Giáo viên</option>
                        </Field>
                        <ErrorMessage style={{color: "red"}} name="professionCode" component="div"/>
                    </div>

                    <div>
                        <label>Chuyên khoa <sup style={{color: "red"}}>*</sup> </label>
                        <Field as="select" name="clinicCode">
                            <option value="">-----Chọn-----</option>
                            <option value="Ung bướu">Ung bướu</option>
                            <option value="Nhi khoa">Nhi khoa</option>
                        </Field>
                        <ErrorMessage style={{color: "red"}} name="clinicCode" component="div"/>
                    </div>
                    <div>
                        <Field type="hidden" name="clinicFeeCode" value="TK01"/>
                    </div>
                    <div>
                        <Field type="hidden" name="objectCode" value="00002"/>
                    </div>

                    <div>
                        <label>Tỉnh/Thành phố <sup style={{color: "red"}}>*</sup> </label>
                        <Field as="select" name="provinceCode">
                            <option value="">-----Chọn-----</option>
                            <option value="Huế">Huế</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                        </Field>
                        <ErrorMessage style={{color: "red"}} name="provinceCode" component="div"/>
                    </div>

                    <div>
                        <label>Quận/Huyện <sup style={{color: "red"}}>*</sup> </label>
                        <Field as="select" name="districtCode">
                            <option value="">-----Chọn-----</option>
                            <option value="Phú Xuân">Phú Xuân</option>
                            <option value="Thuận Hoá">Thuận Hoá</option>
                        </Field>
                        <ErrorMessage style={{color: "red"}} name="districtCode" component="div"/>
                    </div>

                    <div>
                        <label>Phường/Xã <sup style={{color: "red"}}>*</sup> </label>
                        <Field as="select" name="wardCode">
                            <option value="">-----Chọn-----</option>
                            <option value="An Đông">An Đông</option>
                            <option value="An Tây">An Tây</option>
                        </Field>
                        <ErrorMessage style={{color: "red"}} name="wardCode" component="div"/>
                    </div>

                    <div>
                        <label>Phương thức thanh toán <sup style={{color: "red"}}>*</sup> </label>
                        <Field as="select" name="paymentMethod">
                            <option value="">-----Chọn-----</option>
                            <option value="1">Thanh toán tại quầy</option>
                            <option value="2">Thanh toán ngay bằng QRCode</option>
                        </Field>
                        <ErrorMessage style={{color: "red"}} name="paymentMethod" component="div"/>
                    </div>

                    <div>
                        <label>Ghi chú <sup style={{color: "red"}}>*</sup></label>
                        <Field
                            as="textarea"
                            name="noteTn"
                            placeholder="Nhập địa chỉ thường trú"
                            style={{width: "400px", height: "60px", resize: "vertical"}}
                        />
                        <ErrorMessage style={{color: "red"}} name="regLocation" component="div"/>

                    </div>

                    <div>
                        <button type={"submit"}>Đặt lịch khám</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default MedicalBooking;
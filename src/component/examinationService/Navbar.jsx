import React from 'react';
import styles from './list.module.css';
import {BannerKhamBenh} from "../../helpers/Image";

export default function Navbar(){
    return (
        <div className={styles.nav}>
            <img className={styles.img} src={BannerKhamBenh} alt="Gói Khám Sức Khoẻ Tổng Quát"/>
            <h1 className={styles.h1}>GÓI KHÁM SỨC KHOẺ TỔNG QUÁT TẠI BỆNH VIỆN QUỐC TẾ TW HUẾ</h1>
        </div>
    )
}
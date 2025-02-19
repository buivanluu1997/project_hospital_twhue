import React from 'react';

export default function HeaderComponent() {

    return(
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Trang chủ</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Giới thiệu</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Cơ cấu tổ chức
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Giới thiệu chung</a></li>
                                    <li><a className="dropdown-item" href="#">Sơ đồ tổ chức</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Chức năng nhiệm vụ</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Hoạt động
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Hoạt động chuyên môn</a></li>
                                    <li><a className="dropdown-item" href="#">Hoạt động quản lí chất lượng</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Hoạt động công tác xã hội</a></li>
                                    <li><a className="dropdown-item" href="#">Hoạt động hợp tác quốc tế</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
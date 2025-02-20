import React from 'react';
import {Header} from "../Header";
import {Footer} from "../Footer";

export default function LayoutRoot({children}){
    return(
        <>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    );
}
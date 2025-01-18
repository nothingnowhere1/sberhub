import React from 'react';
import AuthorizationHeader from "./components/AuthorizationHeader";
import AuthorizationMain from "./components/AuthorizationMain";
import Footer from "../../common/components/Footer/Footer";
import {useMediaQuery} from "@mui/material";
import {MobileAuthorizationMain} from "./components/MobileAuthorizationMain";

export default function Authorization() {

    const isTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <>
            <AuthorizationHeader/>
            {
                isTablet ?
                    <MobileAuthorizationMain/> :
                    <AuthorizationMain/>
            }
            <Footer/>
        </>
    );
}
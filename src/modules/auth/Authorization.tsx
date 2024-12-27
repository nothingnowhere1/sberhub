import React from 'react';
import AuthorizationHeader from "./components/AuthorizationHeader";
import AuthorizationMain from "./components/AuthorizationMain";
import Footer from "../../common/components/Footer/Footer";

export default function Authorization() {


    return (
        <>
            <AuthorizationHeader/>
            <AuthorizationMain/>
            <Footer/>
        </>
    );
}
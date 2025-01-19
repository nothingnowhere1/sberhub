import React from 'react';
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";
import PersonalMain from "./components/PersonalMain";

export default function Personal() {

    return (
        <>
            <title>Персональная страница</title>
            <Header/>
            <PersonalMain/>
            <Footer/>
        </>
    );
}
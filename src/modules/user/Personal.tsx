import React from 'react';
import Header from "../../common/components/Header/Header";
import PersonalMain from "./components/PersonalMain";
import Footer from "../../common/components/Footer/Footer";

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
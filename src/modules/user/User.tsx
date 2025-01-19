import React from 'react';
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";
import UserMain from "./components/User/UserMain";

export default function User() {

    return (
        <>
            <title>Страница пользователя</title>
            <Header/>
            <UserMain/>
            <Footer/>
        </>
    );
}
import Header from "../../common/components/Header/Header";
import Footer from "../../common/components/Footer/Footer";
import React from "react";
import {SearchMain} from "./components/SearchMain";

export const Search = () => {

    return (
        <>
            <title>Поиск человека</title>
            <Header/>
            <SearchMain/>
            <Footer/>
        </>
    )
}
import React, {useEffect} from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import MainPageMain from '../components/main/MainPageMain';

export default function Personal() {

    useEffect(() => {
        document.title = 'Персональная страницы';
    }, []);

    return (
        <>
            <Header/>
            <MainPageMain/>
            <Footer/>
        </>
    );
}
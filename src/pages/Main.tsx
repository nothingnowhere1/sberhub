import React, {useEffect} from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import MainPageMain from '../components/main/MainPageMain';

export default function Main() {

    useEffect(() => {
        document.title = 'ConnectMe';
    }, []);

    return (
        <>
            <Header/>
            <MainPageMain/>
            <Footer/>
        </>
    );
}
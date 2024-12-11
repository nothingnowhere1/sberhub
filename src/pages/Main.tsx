import React, {useEffect} from 'react';
import AuthorizationFooter from '../components/Authorization/AuthorizationFooter';
import Header from '../components/common/Header';
import MainPageMain from '../components/Main/MainPageMain';

export default function Main() {

    useEffect(() => {
        document.title = 'ConnectMe';
    }, []);

    return (
        <>
            <Header/>
            <MainPageMain/>
            <AuthorizationFooter/>
        </>
    );
}
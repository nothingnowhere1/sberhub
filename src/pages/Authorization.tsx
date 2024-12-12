import React, {useEffect} from 'react';
import AuthorizationHeader from '../components/authorization/AuthorizationHeader';
import Footer from '../components/common/Footer';
import AuthorizationMain from '../components/authorization/AuthorizationMain';

export default function Authorization() {

    useEffect(() => {
        document.title = 'Авторизация';
    }, []);

    return (
        <>
            <AuthorizationHeader/>
            <AuthorizationMain/>
            <Footer/>
        </>
    );
}
import React, {useEffect} from 'react';
import AuthorizationHeader from '../components/Authorization/AuthorizationHeader';
import AuthorizationFooter from '../components/Authorization/AuthorizationFooter';
import AuthorizationMain from '../components/Authorization/AuthorizationMain';

export default function Authorization() {

    useEffect(() => {
        document.title = 'Авторизация';
    }, []);

    return (
        <>
            <AuthorizationHeader/>
            <AuthorizationMain/>
            <AuthorizationFooter/>
        </>
    );
}
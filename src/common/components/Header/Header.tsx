import {Stack} from '@mui/material';
import logo from '../../../assets/logo.png';
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Link from "../Link/Link";
import {RoutePool} from "../../../Route";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import {isAuthorized} from "../../../modules/user/store/selectors/session";
import {useSelector} from "react-redux";
import {AuthHeader} from "./AuthHeader/AuthHeader";

export default function Header() {
    const auth = useSelector(isAuthorized)

    if (auth) {
        return <AuthHeader/>
    }

    return (
        <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} paddingY={1} paddingX={6}
               bgcolor={'#FFD6EA'}>
            <Link to={RoutePool.MainURL.url} noLinkStyles>
                <img height={'75px'} src={logo} alt="logo"/>
            </Link>
            <Stack direction={'row'} alignItems={'center'} gap={4}>
                <LanguageSelector/>
                <Link to={RoutePool.AuthURl.url} style={{
                    color: '#2D2F3E'
                }}>
                    <LoginIcon fontSize={'large'}/>
                </Link>
            </Stack>
        </Stack>
    );
}
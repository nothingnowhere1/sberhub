import React from 'react';
import {Stack} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import logo from '../../../assets/logo.png';
import Link from "../../../common/components/Link/Link";
import {RoutePool} from "../../../Route";


export default function AuthorizationHeader() {

    return (
        <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} paddingY={2}
               paddingX={{md: 10, xs: 4}}
               bgcolor={'#FFD6EA'}>
            <Link to={RoutePool.MainURL.url} noLinkStyles>
                <img height={'100px'} src={logo} alt="logo"/>
            </Link>
            <HelpOutlineIcon fontSize={'large'}/>
        </Stack>
    );
}
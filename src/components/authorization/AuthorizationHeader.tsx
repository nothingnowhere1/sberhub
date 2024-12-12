import React from 'react';
import {Stack} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import logo from '../../assets/logo.png';
import Link from '../common/Link';
import {MainUrl} from '../../Route';

export default function AuthorizationHeader() {

    return (
        <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} paddingY={2} paddingX={10}
               bgcolor={'#FFD6EA'}>
            <Link to={MainUrl} noLinkStyles>
                <img height={'100px'} src={logo} alt="logo"/>
            </Link>
            <HelpOutlineIcon fontSize={'large'}/>
        </Stack>
    );
}
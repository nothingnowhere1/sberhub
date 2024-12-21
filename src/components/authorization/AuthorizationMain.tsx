import React from 'react';
import {Stack, Typography} from '@mui/material';
import RegistrationMainSection from './RegistrationMainSection';
import AuthorizationMainSection from './AuthorizationMainSection';
import {useTranslation} from "react-i18next";

export default function AuthorizationMain() {
    const {t} = useTranslation();

    return (
        <>
            <Stack paddingY={6} direction={'row'} height={'100%'}
                   alignItems={'center'}
                   justifyContent={'space-evenly'}>
                <AuthorizationMainSection/>
                <Typography fontSize={'40px'} textTransform={'uppercase'} fontWeight={700} color={'#000000'}>
                    {t("login.title")}
                </Typography>
                <RegistrationMainSection/>
            </Stack>
        </>
    );
}
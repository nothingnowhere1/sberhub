import React from 'react';
import {Box, Stack} from '@mui/material';
import main from '../../../assets/main.jpg';
import {useTranslation} from "react-i18next";

export default function MainPageMain() {
    const {t} = useTranslation();

    return (
        <Stack direction={{md: 'row', xs: 'column'}} gap={4} sx={{
            padding: 5
        }}>
            <Box width={{md: '50%', xs: '100%'}} height={{md: '40wh'}}>
                <img style={{
                    width: '100%', height: 'auto', aspectRatio: '1/1', borderRadius: '20px'
                }} src={main} alt={'Пара'}/>
            </Box>
            <Box width={{md: '50%', xs: '100%'}} padding={2} sx={{
                boxSizing: 'border-box',
                background: '#FFFFFF',
                fontSize: {md: '30px', xs: '20px'},
                height: 'max-content',
                lineHeight: {md: '39px', xs: '29px'},
                borderRadius: '16px'
            }}>
            	<span style={{
                    color: '#EF87AC', fontSize: '40px', fontWeight: '700'
                }}>ConnectMe</span> — {t('main.text.1')}

                <p>{t('main.text.2')}</p>

                <p>{t('main.text.3')}</p>
            </Box>
        </Stack>
    );
}
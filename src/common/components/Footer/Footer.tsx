import {Box, Stack, Typography} from '@mui/material';
import React from 'react';
import {Facebook, Instagram, Telegram, Twitter} from '@mui/icons-material';
import {useTranslation} from 'react-i18next';
import Link from "../Link/Link";

export default function Footer() {
    const {t} = useTranslation();

    return (
        <Stack borderTop={'1px solid #2A2C3B'} color={'#2D2F3E'} direction={{md: 'row', xs: 'column'}}
               paddingX={{md: 10, xs: 4}} paddingY={4} justifyContent={'space-between'} gap={{md: 2, xs: 4}}>
            <Stack direction={{md: 'row', xs: "column"}} gap={{md: 8, xs: 4}}>
                <Stack>
                    <Typography fontWeight={700}>
                        {t('footer.info.title')}
                    </Typography>
                    <Typography marginTop={4}>
                        {t('footer.info.ul.1')}
                    </Typography>
                    <Typography>
                        {t('footer.info.ul.2')}
                    </Typography>
                    <Typography>
                        {t('footer.info.ul.3')}
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={700}>
                        {t('footer.contacts.title')}
                    </Typography>
                    <Stack marginTop={4} direction={'row'} gap={1}>
                        <Link to={'/telegram'} noLinkStyles={true}>
                            <Box padding={1} bgcolor={'black'} borderRadius={'100%'} width={'35px'} height={'35px'}>
                                <Telegram sx={{
                                    color: 'white'
                                }} fontSize={'large'}/>
                            </Box>
                        </Link>
                        <Link to={'/facebook'} noLinkStyles={true}>
                            <Box padding={1} bgcolor={'black'} borderRadius={'100%'} width={'35px'} height={'35px'}>
                                <Facebook sx={{
                                    color: 'white'
                                }} fontSize={'large'}/>
                            </Box>
                        </Link>
                        <Link to={'/twitter'} noLinkStyles={true}>
                            <Box padding={1} bgcolor={'black'} borderRadius={'100%'} width={'35px'} height={'35px'}>
                                <Twitter sx={{
                                    color: 'white'
                                }} fontSize={'large'}/>
                            </Box>
                        </Link>
                        <Link to={'/instagram'} noLinkStyles={true}>
                            <Box padding={1} bgcolor={'black'} borderRadius={'100%'} width={'35px'} height={'35px'}>
                                <Instagram sx={{
                                    color: 'white'
                                }} fontSize={'large'}/>
                            </Box>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
            <Stack>
                <Typography fontWeight={700}>
                    {t('footer.help.title')}
                </Typography>
                <Typography marginTop={4}>
                    {t('footer.help.ul.1')}
                </Typography>
                <Typography>
                    {t('footer.info.ul.2')}
                </Typography>
                <Typography>
                    {t('footer.info.ul.3')}
                </Typography>
            </Stack>
        </Stack>
    );
}
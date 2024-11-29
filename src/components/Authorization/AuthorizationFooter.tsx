import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Link from '../Default/Link';
import { Telegram, Facebook, Instagram, Twitter } from '@mui/icons-material';


export default function AuthorizationFooter() {
    return (
        <Stack direction={'row'} paddingX={6} paddingY={2}>
            <Stack direction={'row'} gap={4}>
                <Stack>
                    <Typography fontWeight={700}>
                        Юридическая информация
                    </Typography>
                    <Typography>
                        Политика конфиденциальности
                    </Typography>
                    <Typography>
                        Условия использования
                    </Typography>
                    <Typography>
                        Политика в отношении файлов cookie
                    </Typography>
                </Stack>
                <Stack>
                    <Typography fontWeight={700}>
                        Социальные сети
                    </Typography>
                    <Stack direction={'row'} gap={1}>
                        <Link noLinkStyles={true}>
                            <Box padding={1} bgcolor={'black'} borderRadius={'100%'} width={'35px'} height={'35px'}>
                                <Telegram sx={{
                                    color: 'white'
                                }} fontSize={'large'}/>
                            </Box>
                        </Link>
                        <Link noLinkStyles={true}>
                            <Box padding={1} bgcolor={'black'} borderRadius={'100%'} width={'35px'} height={'35px'}>
                                <Facebook sx={{
                                    color: 'white'
                                }} fontSize={'large'}/>
                            </Box>
                        </Link>
                        <Link noLinkStyles={true}>
                            <Box padding={1} bgcolor={'black'} borderRadius={'100%'} width={'35px'} height={'35px'}>
                                <Twitter sx={{
                                    color: 'white'
                                }} fontSize={'large'}/>
                            </Box>
                        </Link>
                        <Link noLinkStyles={true}>
                            <Box padding={1} bgcolor={'black'} borderRadius={'100%'} width={'35px'} height={'35px'}>
                                <Instagram sx={{
                                    color: 'white'
                                }} fontSize={'large'}/>
                            </Box>
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}
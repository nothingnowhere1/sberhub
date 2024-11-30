import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Link from '../Default/Link';
import { Telegram, Facebook, Instagram, Twitter } from '@mui/icons-material';


export default function AuthorizationFooter() {
    return (
        <Stack color={'#2D2F3E'} direction={'row'} paddingX={6} paddingY={2} justifyContent={'space-between'}>
            <Stack direction={'row'} gap={8}>
                <Stack>
                    <Typography fontWeight={700}>
                        Юридическая информация
                    </Typography>
                    <Typography marginTop={4}>
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
                    <Stack marginTop={4} direction={'row'} gap={1}>
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
            <Stack>
                <Typography fontWeight={700}>
                    Помощь
                </Typography>
                <Typography marginTop={4}>
                    О нас
                </Typography>
                <Typography>
                    Частые вопросы
                </Typography>
                <Typography>
                    Контакты
                </Typography>
            </Stack>
        </Stack>
    );
}
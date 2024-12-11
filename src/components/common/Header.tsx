import {Button, Stack} from '@mui/material';
import logo from '../../assets/logo.png';
import React from 'react';
import TextField from './TextField';
import {useForm} from 'react-hook-form';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LoginIcon from '@mui/icons-material/Login';
import {AuthUrl, MainUrl} from '../../Route';
import Link from './Link';

export default function Header() {
    const {control} = useForm({
        defaultValues: {
            search: ''
        }
    });

    return (
        <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} paddingY={1} paddingX={6}
               bgcolor={'#FFD6EA'}>
            <Stack direction="row" alignItems={'center'} gap={10}>
                <Link href={MainUrl} noLinkStyles>
                    <img height={'75px'} src={logo} alt="logo"/>
                </Link>
                <TextField control={control} name={'search'} label={'Поиск'} sx={{
                    '& .MuiInputBase-input': {
                        background: 'white'
                    }
                }}/>
                <Stack direction={'row'} gap={4}>
                    <Button sx={{
                        color: '#2D2F3E'
                    }}>
                        <NotificationsNoneIcon fontSize={'large'}/>
                    </Button>
                    <Button sx={{
                        color: '#2D2F3E'
                    }}>
                        <ChatBubbleOutlineIcon fontSize={'large'}/>
                    </Button>
                    <Button sx={{
                        color: '#2D2F3E'
                    }}>
                        <FavoriteBorderIcon fontSize={'large'}/>
                    </Button>
                </Stack>
            </Stack>
            <Button href={AuthUrl} sx={{
                color: '#2D2F3E'
            }}>
                <LoginIcon fontSize={'large'}/>
            </Button>
        </Stack>
    );
}
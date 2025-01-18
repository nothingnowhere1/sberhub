import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import React, {MouseEvent, useState} from "react";
import {IconButton, Stack} from "@mui/material";
import Link from "../../Link/Link";
import {RoutePool} from "../../../../Route";
import logo from "../../../../assets/logo.png";
import TextField from "../../TextField/TextField";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";
import UserAvatar from "../../Avatar/UserAvatar";
import AccountMenu from "./AccountMenu";

export const DesktopAuthHeader = () => {
    const {t} = useTranslation();
    const {control} = useForm({
        defaultValues: {
            search: ''
        }
    });

    const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

    const openProfile = (event: MouseEvent<HTMLElement>) => setProfileAnchor(event.currentTarget);
    const closeProfile = () => setProfileAnchor(null);

    return (
        <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} paddingY={1} paddingX={6}
               bgcolor={'#FFD6EA'}>
            <Stack direction="row" alignItems={'center'} gap={6}>
                <Link to={RoutePool.MainURL.url} noLinkStyles>
                    <img height={'75px'} src={logo} alt="logo"/>
                </Link>
                <TextField sx={{
                    '& .MuiOutlinedInput-root': {
                        background: 'white',
                    }
                }} control={control} name={'search'} label={t('main.search')}/>
                <Stack direction={'row'} gap={2}>
                    <IconButton sx={{
                        color: '#2D2F3E'
                    }}>
                        <NotificationsNoneIcon fontSize={'large'}/>
                    </IconButton>
                    <IconButton sx={{
                        color: '#2D2F3E'
                    }}>
                        <ChatBubbleOutlineIcon fontSize={'large'}/>
                    </IconButton>
                    <IconButton sx={{
                        color: '#2D2F3E'
                    }}>
                        <FavoriteBorderIcon fontSize={'large'}/>
                    </IconButton>
                </Stack>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} gap={4}>
                <LanguageSelector/>
                <IconButton onClick={openProfile}><UserAvatar/></IconButton>
                <AccountMenu onClose={closeProfile} anchorEl={profileAnchor}/>
            </Stack>
        </Stack>
    )
}
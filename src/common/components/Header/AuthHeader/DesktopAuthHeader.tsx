import {useTranslation} from "react-i18next";
import React, {MouseEvent, useRef, useState} from "react";
import {IconButton, Stack, TextField} from "@mui/material";
import Link from "../../Link/Link";
import {RoutePool} from "../../../../Route";
import logo from "../../../../assets/logo.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";
import UserAvatar from "../../Avatar/UserAvatar";
import AccountMenu from "./AccountMenu";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {showHistory} from "../../Snackbar/slice";

export const DesktopAuthHeader = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const ref = useRef<HTMLInputElement | null>(null);

    const dispatch = useDispatch();

    const onSubmit = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            navigate(RoutePool.SearchURL.url + `?search=${ref.current?.value}`, {replace: true});
        }
    }

    const showHistoryOfSnackbars = () => {
        dispatch(showHistory());
    }

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
                <TextField onKeyDown={onSubmit} sx={{
                    '& .MuiOutlinedInput-root': {
                        background: 'white',
                    }
                }} inputRef={ref} label={t('main.search')}/>
                <Stack direction={'row'} gap={2}>
                    <IconButton onClick={showHistoryOfSnackbars} sx={{
                        color: '#2D2F3E'
                    }}>
                        <NotificationsNoneIcon fontSize={'large'}/>
                    </IconButton>
                    <IconButton onClick={() => navigate(RoutePool.SearchURL.url)} sx={{
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
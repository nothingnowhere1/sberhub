import {IconButton, Stack} from "@mui/material";
import logo from "../../../../assets/logo.png";
import React, {MouseEvent, useState} from "react";
import AccountMenu from "./AccountMenu";
import Link from "../../Link/Link";
import {RoutePool} from "../../../../Route";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";
import UserAvatar from "../../Avatar/UserAvatar";
import Sidebar from "../../Sidebar/Sidebar";

export const MobileAuthHeader = () => {
    const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

    const openProfile = (event: MouseEvent<HTMLElement>) => setProfileAnchor(event.currentTarget);
    const closeProfile = () => setProfileAnchor(null);

    return (
        <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} paddingY={1} paddingX={2}
               bgcolor={'#FFD6EA'}>
            <Sidebar/>
            <Stack direction="row" alignItems={'center'} gap={2}>
                <Link to={RoutePool.MainURL.url} noLinkStyles>
                    <img height={'50px'} src={logo} alt="logo"/>
                </Link>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} gap={2}>
                <LanguageSelector/>
                <IconButton onClick={openProfile}><UserAvatar/></IconButton>
                <AccountMenu onClose={closeProfile} anchorEl={profileAnchor}/>
            </Stack>
        </Stack>
    )
};
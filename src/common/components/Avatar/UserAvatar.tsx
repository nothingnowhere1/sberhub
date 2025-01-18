import {useSelector} from "react-redux";
import {userSession} from "../../../modules/user/store/selectors/session";
import {SxProps, Theme} from "@mui/material";
import React from "react";
import Avatar from "./Avatar";

interface Props {
    size?: number;
    sx?: SxProps<Theme>;
}

export default function UserAvatar({size = 40, sx}: Props) {
    const data = useSelector(userSession);

    if (!data) return <Avatar size={size} sx={sx}/>;
    return (
        <Avatar
            size={size} sx={sx}
            src={data.map_data?.avatar ?? undefined}
        />
    );
}
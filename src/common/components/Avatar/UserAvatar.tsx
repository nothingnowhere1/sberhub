import {useSelector} from "react-redux";
import {userSession} from "../../../modules/user/store/selectors/session";
import {AvatarProps} from "@mui/material";
import React from "react";
import Avatar from "./Avatar";

type Props = {
    size?: number;
} & Omit<AvatarProps, 'src'>

export default function UserAvatar({size = 40, ...props}: Props) {
    const data = useSelector(userSession);
    
    if (!data) return <Avatar {...props} size={size}/>;
    return (
        <Avatar
            {...props}
            size={size}
            src={data.map_data?.avatar ?? undefined}
        />
    );
}
import React from "react"
import {Stack, Typography} from "@mui/material";
import {userDto} from "../../user/types/user.types";
import Avatar from "../../../common/components/Avatar/Avatar";
import Link from "../../../common/components/Link/Link";
import {RoutePool} from "../../../Route";

interface Props {
    user: userDto
}

export const SearchCard = ({user}: Props) => {

    return (
        <Link noLinkStyles to={RoutePool.UserURL.generate(user._id)} style={{
            display: 'inline-grid',
        }}>
            <Stack borderRadius={'8px'} bgcolor={'white'} padding={3} gap={1}>
                <Avatar src={user.map_data?.avatar} variant={'square'} size={160} sx={{
                    alignSelf: 'center',
                    marginBottom: 2
                }}/>
                <Typography fontWeight={600} fontSize={24}>{user.name}</Typography>
                <Typography fontSize={16} color={'rgba(117, 117, 117, 1)'}>{user.map_data?.about}</Typography>
            </Stack>
        </Link>
    )
}
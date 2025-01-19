import {Box, Stack} from "@mui/material";
import React from "react";
import {useParams} from "react-router-dom";
import {UserMainInfo} from "./UserMainInfo";
import {userApi} from "../../store/services/user.services";
import {useSelector} from "react-redux";
import {userToken} from "../../store/selectors/session";
import {Spinner} from "../../../../common/components/Spinner/Spinner";
import Avatar from "../../../../common/components/Avatar/Avatar";

export default function UserMain() {
    const {userId} = useParams<{ userId: string }>();
    const token = useSelector(userToken)

    const {data, isLoading} = userApi.useGetUserQuery({
        id: userId,
        token: token
    }, {skip: !userId || !token});

    if (isLoading || !data) {
        return <Spinner/>
    }

    return (
        <>
            <Box padding={7}>
                <Stack direction={'row'} padding={4} gap={8} borderRadius={'16px'} sx={{
                    background: '#ffffff'
                }}>
                    <Avatar src={data?.map_data?.avatar} size={300} variant={'rounded'}/>
                    <UserMainInfo user={data}/>
                </Stack>
            </Box>
        </>
    )
}
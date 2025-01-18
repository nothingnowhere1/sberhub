import {MenuItem, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import React from "react";
import {userSession} from "../../../../modules/user/store/selectors/session";


export function AccountCard() {
    const data = useSelector(userSession);

    if (!data) return (
        <MenuItem>
            <Stack>
                <Typography fontWeight={500}>Загрузка...</Typography>
                <Typography fontWeight={400}>Получение информации об аккаунте</Typography>
            </Stack>
        </MenuItem>
    );

    return (
        <MenuItem>
            <Stack>
                <Typography fontWeight={500}>{data.name || ''}</Typography>
                <Typography fontWeight={400}>{data.email}</Typography>
            </Stack>
        </MenuItem>
    );
}

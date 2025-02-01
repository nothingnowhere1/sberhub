import {Grid2, Stack, SxProps, Theme, Typography} from "@mui/material";
import {formatDate} from "../../../common/utils/formatter";
import React from "react";
import {useSelector} from "react-redux";
import * as sessionSelectors from "../store/selectors/session";
import {GendersText, SearchTypeText} from "../types/user.types";
import {cities} from "../../../MockData";

export const PersonalMainInfo = () => {
    const user = useSelector(sessionSelectors.userSession);

    const titleSx: SxProps<Theme> = {
        fontSize: '20px',
        fontWeight: 600,
        color: 'rgba(239, 135, 172, 1)',
    }

    const fieldSx: SxProps<Theme> = {
        fontSize: '18',
        fontWeight: 400,
        color: 'rgba(239, 135, 172, 1)',
    }

    return (
        <Grid2 width={'100%'} display={'grid'} gridTemplateColumns={'200px 1fr'} columnGap={8} rowGap={{xs: 2, md: 0}}>
            <div></div>
            <Stack>
                <Typography sx={titleSx}>{user?.name ?? '-'}</Typography>
                <Typography sx={titleSx}>{formatDate(user?.map_data?.birthday, 'Дата рождения не указана')}</Typography>
            </Stack>
            <Typography sx={titleSx}>Пол:</Typography>
            <Typography
                sx={fieldSx}>{user?.map_data?.gender ? GendersText[user?.map_data?.gender] : 'Не указан'}</Typography>
            <Typography sx={titleSx}>Семейное положение:</Typography>
            <Typography
                sx={fieldSx}>{user?.map_data?.searchType ? SearchTypeText[user?.map_data?.searchType] : 'Не указано'}</Typography>
            <Typography sx={titleSx}>Город:</Typography>
            <Typography
                sx={fieldSx}>{user?.map_data?.city ? cities.find((el) => el.id === +(user.map_data.city as any))?.title : 'Не указан'}</Typography>
            <Typography sx={titleSx}>Ссылка на Instagram:</Typography>
            <Typography sx={fieldSx}>{user?.map_data?.instagram ?? 'Не указана'}</Typography>
            <Typography sx={titleSx}>Краткая информация:</Typography>
            <Typography sx={fieldSx}>{user?.map_data?.about ?? 'Не указана'}</Typography>
        </Grid2>
    )
}
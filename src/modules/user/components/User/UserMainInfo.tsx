import {Grid2, Stack, Typography} from "@mui/material";
import React from "react";
import {GendersText, SearchTypeText, userDto} from "../../types/user.types";
import {cities} from "../../../../MockData";
import {formatDate} from "../../../../common/utils/formatter";

interface Props {
    user: userDto
}

export const UserMainInfo = ({user}: Props) => {

    return (
        <Grid2 width={'100%'} display={'grid'} gridTemplateColumns={'200px 1fr'} columnGap={8}>
            <div></div>
            <Stack>
                <Typography>{user?.name ?? '-'}</Typography>
                <Typography>{formatDate(user?.map_data?.birthday, 'Дата рождения не указана')}</Typography>
            </Stack>
            <Typography>Пол:</Typography>
            <Typography>{user?.map_data?.gender ? GendersText[user?.map_data?.gender] : 'Не указан'}</Typography>
            <Typography>Семейное положение:</Typography>
            <Typography>{user?.map_data?.searchType ? SearchTypeText[user?.map_data?.searchType] : 'Не указано'}</Typography>
            <Typography>Город:</Typography>
            <Typography>{user?.map_data?.city ? cities.find((el) => el.id === +(user.map_data.city as any))?.title : 'Не указан'}</Typography>
            <Typography>Ссылка на Instagram:</Typography>
            <Typography>{user?.map_data?.instagram ?? 'Не указана'}</Typography>
            <Typography>Краткая информация:</Typography>
            <Typography>{user?.map_data?.about ?? 'Не указана'}</Typography>
        </Grid2>
    )
}
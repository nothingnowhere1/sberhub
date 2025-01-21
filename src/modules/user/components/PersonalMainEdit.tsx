import {useForm} from "react-hook-form";
import {GendersText, SearchTypeText, userUpdateDto} from "../types/user.types";
import {userApi} from "../store/services/user.services";
import React from "react";
import {Button, MenuItem, Stack} from "@mui/material";
import TextField from "../../../common/components/TextField/TextField";
import {LoadingButton} from "@mui/lab";
import {useDispatch, useSelector} from "react-redux";
import * as sessionSelectors from "../store/selectors/session";
import {Spinner} from "../../../common/components/Spinner/Spinner";
import {enqueueSnackbar} from "../../../common/components/Snackbar/slice";
import {SelectInput} from "../../../common/components/Inputs/SelectInput";
import {CityInput} from "../../../common/components/Inputs/CityInput";
import {DatePicker} from "../../../common/components/Inputs/DatePicker";

export const PersonalMainEdit = ({handlePageChange}: { handlePageChange: () => void }) => {
    const {user, token} = useSelector(sessionSelectors.userSessionToken);

    if (!user || !token) return <Spinner/>;

    const {control, handleSubmit} = useForm<userUpdateDto>({
        defaultValues: {
            name: user.name,
            email: user.email,
            map_data: {
                city: user.map_data.city,
                searchType: user.map_data.searchType,
                instagram: user.map_data.instagram,
                gender: user.map_data.gender,
                about: user.map_data.about,
                avatar: user.map_data.avatar,
                birthday: user.map_data.birthday
            }
        }
    });

    const dispatch = useDispatch()

    const [trigger, status] = userApi.useUpdateUserMutation();

    const onSubmit = (data: userUpdateDto) => {
        trigger({...data, id: user._id, token: token})
            .then(handlePageChange)
            .catch((err) => dispatch(enqueueSnackbar({
                message: typeof err === 'string' ? err : 'Произошла ошибка',
                severity: 'error'
            })));
    }

    return (
        <form style={{
            width: '100%'
        }} onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <TextField fullWidth control={control} name={'name'} label={'Имя'}/>
                <CityInput control={control} name={'map_data.city'} label={'Город'}/>
                <SelectInput control={control} name={'map_data.gender'} label={'Пол'}
                             items={Object.keys(GendersText).map((el) => (
                                 <MenuItem value={el} key={el}>
                                     {GendersText[el]}
                                 </MenuItem>
                             ))}/>
                <DatePicker control={control} name={'map_data.birthday'} label={'День рождения'}/>
                <SelectInput control={control} name={'map_data.searchType'} label={'Семейное положение'}
                             items={Object.keys(SearchTypeText).map((el) => (
                                 <MenuItem value={el} key={el}>
                                     {SearchTypeText[el]}
                                 </MenuItem>
                             ))}/>
                <TextField control={control} name={'map_data.instagram'} label={'Ссылка на Instagram'}/>
                <TextField multiline minRows={3} control={control} name={'map_data.about'} label={'О себе'}/>
                <Stack direction={'row'} gap={2}>
                    <LoadingButton type={'submit'} variant={'contained'} loading={status.isLoading}>
                        Сохранить
                    </LoadingButton>
                    <Button onClick={handlePageChange}>Отменить</Button>
                </Stack>
            </Stack>
        </form>
    )
}
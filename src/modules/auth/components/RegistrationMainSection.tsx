import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Box, Checkbox, FormControl, FormControlLabel, Stack, Typography, useMediaQuery} from '@mui/material';
import React, {useCallback} from 'react';
import {useTranslation} from "react-i18next";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoadingButton} from '@mui/lab';
import {useDispatch} from "react-redux";
import {RegistrationSchema, RegistrationSchemaType} from "../../user/types/user.zod";
import {userApi} from "../../user/store/services/user.services";
import {userLoginDto} from "../../user/types/user.types";
import {sessionSlice} from "../../user/store/slices/session";
import TextField from "../../../common/components/TextField/TextField";
import {RoutePool} from "../../../Route";
import {enqueueSnackbar} from "../../../common/components/Snackbar/slice";
import {useNavigate} from "react-router-dom";

export default function RegistrationMainSection() {
    const {t} = useTranslation();

    const {control, handleSubmit, clearErrors} = useForm<RegistrationSchemaType>({
        resolver: zodResolver(RegistrationSchema),
    });

    const [trigger, status] = userApi.useRegUserMutation();

    const navigate = useNavigate();

    const isTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const dispatch = useDispatch()
    const postSession = useCallback((session: userLoginDto) => {
        dispatch(sessionSlice.actions.setSession(session))
    }, [])

    const onSubmit: SubmitHandler<RegistrationSchemaType> = async (e) => {
        try {
            const {agree, password_again, ...data} = e;
            const payload = await trigger(data).unwrap();
            postSession(payload)
            navigate(RoutePool.PersonalURL.url)
        } catch (e) {
            if (e.message) {
                dispatch(enqueueSnackbar({message: e.message, severity: 'error'}))
                return;
            }
            dispatch(enqueueSnackbar({message: 'Ошибка при авторизации. Повторите позже.', severity: 'error'}))
        }
    };

    const handleChange = () => {
        clearErrors(['password_again']);
    };

    return (
        <FormControl onSubmit={handleSubmit(onSubmit)} sx={{
            width: isTablet ? '100%' : 'auto',
        }}>
            <Stack padding={3} border={'1px solid #D9D9D9'} sx={{
                background: '#FFFFFF'
            }} gap={1}>
                <Typography marginX={'auto'} fontSize={24} fontWeight={700}>{t("login.reg.title")}</Typography>
                <TextField control={control} autoComplete={'username'} name={'email'} type="email"
                           label={t("login.reg.inputs.1")}/>
                <TextField control={control} autoComplete={'name'} name={'name'}
                           label={t("login.reg.inputs.2")}/>
                <TextField onChange={handleChange} control={control} name={'password'}
                           autoComplete={'new-password'}
                           type="password"
                           label={t("login.reg.inputs.3")}/>
                <TextField control={control} name={'password_again'}
                           autoComplete={'new-password'} type="password"
                           label={t("login.reg.inputs.4")}/>
                <Box sx={{
                    maxWidth: {md: '400px'},
                }}>
                    <Controller control={control} name={'agree'} render={({field, fieldState}) =>
                        <FormControlLabel
                            sx={{
                                color: fieldState.error ? 'red' : 'primary'
                            }}
                            control={<Checkbox {...field}/>}
                            label={t("login.reg.checkbox")}
                        />
                    }/>
                </Box>
                <LoadingButton loading={status.isLoading} type={'submit'} variant={'contained'} sx={{
                    backgroundColor: '#2C2C2C', textTransform: 'none', paddingY: 1.5, color: 'white',
                }}>
                    {t("login.reg.button")}
                </LoadingButton>
            </Stack>
        </FormControl>
    );
}
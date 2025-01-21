import {SubmitHandler, useForm} from 'react-hook-form';
import {Stack, Typography, useMediaQuery} from '@mui/material';
import React, {useCallback} from 'react';
import {zodResolver} from "@hookform/resolvers/zod";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {LoadingButton} from "@mui/lab";
import {AuthorizationSchema, AuthorizationSchemaType} from "../../user/types/user.zod";
import {userLoginDto} from "../../user/types/user.types";
import {sessionSlice} from "../../user/store/slices/session";
import {userApi} from "../../user/store/services/user.services";
import TextField from "../../../common/components/TextField/TextField";
import Link from "../../../common/components/Link/Link";
import {enqueueSnackbar} from "../../../common/components/Snackbar/slice";
import {useNavigate} from "react-router-dom";
import {RoutePool} from "../../../Route";


export default function AuthorizationMainSection() {
    const {control, handleSubmit} = useForm<AuthorizationSchemaType>({
        resolver: zodResolver(AuthorizationSchema),
    });

    const {t} = useTranslation();

    const navigate = useNavigate();

    const isTablet = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const [trigger, status] = userApi.useLoginUserMutation();
    const dispatch = useDispatch()
    const postSession = useCallback((session: userLoginDto) => {
        dispatch(sessionSlice.actions.setSession(session))
    }, [])

    const onSubmit: SubmitHandler<AuthorizationSchemaType> = async (e) => {
        try {
            const payload = await trigger(e).unwrap();
            postSession(payload)
            navigate(RoutePool.PersonalURL.url)
        } catch (e) {
            if (e.data && e.data.message) {
                dispatch(enqueueSnackbar({message: e.data.message, severity: 'error'}));
                return;
            }
            dispatch(enqueueSnackbar({message: 'Ошибка при авторизации. Повторите позже.', severity: 'error'}))
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{
            width: isTablet ? '100%' : 'auto'
        }}>
            <Stack padding={3} border={'1px solid #D9D9D9'} sx={{
                background: '#FFFFFF',
                boxSizing: 'border-box',
            }} gap={1} width={'100%'}>
                <Typography marginX={'auto'} fontSize={24} fontWeight={700}>{t("login.auth.title")}</Typography>
                <TextField sx={{
                    minWidth: {md: '300px'}
                }} control={control} name={'email'} autoComplete={'login'} type="text"
                           label={t("login.auth.inputs.1")}/>
                <TextField control={control} name={'password'} autoComplete={'password'} type="password"
                           label={t("login.auth.inputs.2")}/>
                <LoadingButton loading={status.isLoading} type={'submit'} variant={'contained'} sx={{
                    textTransform: 'none', backgroundColor: '#2C2C2C', paddingY: 1.5, color: 'white'
                }}>{t("login.auth.button")}</LoadingButton>
                <Link to={'/'} color={'#1E1E1E'} style={{
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    fontSize: '18px'
                }}>
                    {t("login.auth.link")}
                </Link>
            </Stack>
        </form>
    );
}
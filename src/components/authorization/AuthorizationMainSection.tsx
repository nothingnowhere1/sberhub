import {SubmitHandler, useForm} from 'react-hook-form';
import {Stack, Typography} from '@mui/material';
import TextField from '../common/TextField';
import React, {useCallback} from 'react';
import Link from '../common/Link';
import {zodResolver} from "@hookform/resolvers/zod";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {sessionSlice} from "../../redux/slices/session";
import {AuthorizationSchema, AuthorizationSchemaType} from "../../model/user/user.zod";
import {userApi} from "../../redux/service/user.services";
import {LoadingButton} from "@mui/lab";

export default function AuthorizationMainSection() {
    const {control, handleSubmit} = useForm<AuthorizationSchemaType>({
        resolver: zodResolver(AuthorizationSchema),
    });

    const {t} = useTranslation();

    const [trigger, status] = userApi.useLoginUserMutation();
    const dispatch = useDispatch()
    const postSession = useCallback((session: userLoginDto) => {
        dispatch(sessionSlice.actions.setSession(session))
    }, [])

    const onSubmit: SubmitHandler<AuthorizationSchemaType> = async (e) => {
        try {
            const payload = await trigger(e).unwrap();
            postSession(payload)
        } catch (e) {
            // todO snackbor
            console.error(e)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack padding={3} border={'1px solid #D9D9D9'} sx={{
                background: '#FFFFFF'
            }} gap={3}>
                <Typography marginX={'auto'} fontSize={24} fontWeight={700}>{t("login.auth.title")}</Typography>
                <TextField sx={{
                    minWidth: '400px'
                }} control={control} name={'email'} autoComplete={'login'} type="text"
                           label={t("login.auth.inputs.1")}/>
                <TextField control={control} name={'password'} autoComplete={'password'} type="password"
                           label={t("login.auth.inputs.2")}/>
                <LoadingButton loading={status.isLoading} type={'submit'} variant={'contained'} sx={{
                    textTransform: 'none', backgroundColor: '#2C2C2C', paddingY: 1.5
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
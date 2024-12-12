import {SubmitHandler, useForm} from 'react-hook-form';
import {Button, Stack, Typography} from '@mui/material';
import TextField from '../common/TextField';
import React from 'react';
import Link from '../common/Link';
import {apiUserLog} from "../../api/user/user.services";
import {AuthorizationSchema, AuthorizationSchemaType} from "../../api/user/user.zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useTranslation} from "react-i18next";

export default function AuthorizationMainSection() {
    const {control, handleSubmit} = useForm<AuthorizationSchemaType>({
        resolver: zodResolver(AuthorizationSchema),
    });

    const {t} = useTranslation();

    const {trigger} = apiUserLog();

    const onSubmit: SubmitHandler<AuthorizationSchemaType> = (e) => {
        trigger(e)
            .then((data) => console.log(data))
            .catch((e) => console.log(e));
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
                <Button type={'submit'} variant={'contained'} sx={{
                    textTransform: 'none', backgroundColor: '#2C2C2C', paddingY: 1.5
                }}>{t("login.auth.button")}</Button>
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
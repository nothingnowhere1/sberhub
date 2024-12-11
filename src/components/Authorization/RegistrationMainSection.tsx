import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {Box, Checkbox, FormControlLabel, Stack, Typography} from '@mui/material';
import TextField from '../common/TextField';
import React from 'react';
import {apiUserReg} from '../../api/user/user.services';
import {useTranslation} from "react-i18next";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegistrationSchema, RegistrationSchemaType} from "../../api/user/user.zod";
import {LoadingButton} from '@mui/lab';

export default function RegistrationMainSection() {
    const {t} = useTranslation();

    const {control, handleSubmit, clearErrors} = useForm<RegistrationSchemaType>({
        resolver: zodResolver(RegistrationSchema),
        reValidateMode: 'onBlur',
    });

    const {trigger, isLoading} = apiUserReg();

    const onSubmit: SubmitHandler<RegistrationSchemaType> = (e) => {
        const {password_again, agree, ...data} = e;
        trigger(data)
            .then((data) => console.log(data))
            .catch((e) => console.log(e));
    };

    const handleChange = () => {
        clearErrors(['password_again']);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack padding={3} border={'1px solid #D9D9D9'} sx={{
                background: '#FFFFFF'
            }} gap={3}>
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
                    maxWidth: '400px',
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
                <LoadingButton loading={isLoading} type={'submit'} variant={'contained'} sx={{
                    backgroundColor: '#2C2C2C', textTransform: 'none', paddingY: 1.5
                }}>
                    {t("login.reg.button")}
                </LoadingButton>
            </Stack>
        </form>
    );
}
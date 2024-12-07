import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Stack, Typography } from '@mui/material';
import TextField from '../common/TextField';
import React from 'react';

type FormValues = {
	email: string, password: string, password_again: string, name: string
}

export default function RegistrationMainSection() {
	const {control, handleSubmit, setError, clearErrors} = useForm<FormValues>({
		defaultValues: {
			email: '', password: '', password_again: '', name: ''
		}
	});

	const onSubmit: SubmitHandler<FormValues> = (e) => {
		if (e.password_again !== e.password) {
			setError('password_again', {
				type: 'custom', message: 'Пароли не совпадают'
			});
			setError('password', {
				type: 'custom', message: 'Пароли не совпадают'
			});
		}
	};

	const handleChange = () => {
		console.log(1);
		clearErrors(['password_again', 'password']);
	};

	return (
		<form>
			<Stack padding={3} border={'1px solid #D9D9D9'} sx={{
				background: '#FFFFFF'
			}} gap={3}>
				<Typography marginX={'auto'} fontSize={24} fontWeight={700}>Создайте новый аккаунт</Typography>
				<TextField control={control} autoComplete={'username'} name={'email'} type="email" label="Email" sx={{
					minWidth: '400px'
				}}/>
				<TextField control={control} autoComplete={'name'} name={'name'} type="email" label="Имя"/>
				<TextField onChange={handleChange} control={control} name={'password'} autoComplete={'new-password'}
						   type="password"
						   label="Пароль"/>
				<TextField onChange={handleChange} control={control} name={'password_again'}
						   autoComplete={'new-password'} type="password"
						   label="Повторите пароль"/>
				<Button onClick={handleSubmit(onSubmit)} variant={'contained'} sx={{
					backgroundColor: '#2C2C2C', textTransform: 'none', paddingY: 1.5
				}}>Зарегистрироваться</Button>
			</Stack>
		</form>
	);
}
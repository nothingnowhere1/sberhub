import { useForm } from 'react-hook-form';
import { Button, Stack, Typography } from '@mui/material';
import TextField from '../common/TextField';
import React from 'react';
import Link from '../common/Link';

export default function AuthorizationMainSection() {
	const {control} = useForm({
		defaultValues: {
			email: '', password: ''
		}
	});


	return (
		<form>
			<Stack padding={3} border={'1px solid #D9D9D9'} sx={{
				background: '#FFFFFF'
			}} gap={3}>
				<Typography marginX={'auto'} fontSize={24} fontWeight={700}>Войдите</Typography>
				<TextField sx={{
					minWidth: '400px'
				}} control={control} name={'email'} autoComplete={'login'} type="text" label="Логин"/>
				<TextField control={control} name={'password'} autoComplete={'password'} type="password"
						   label="Пароль"/>
				<Button variant={'contained'} sx={{
					textTransform: 'none', backgroundColor: '#2C2C2C', paddingY: 1.5
				}}>Войти</Button>
				<Link marginX={'auto'} fontSize={'18px'} color={'#1E1E1E'}>
					Забыли пароль?
				</Link>
			</Stack>
		</form>
	);
}
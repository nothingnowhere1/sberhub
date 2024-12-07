import React, { useEffect } from 'react';
import AuthorizationHeader from '../components/Authorization/AuthorizationHeader';
import AuthorizationFooter from '../components/Authorization/AuthorizationFooter';
import AuthorizationMain from '../components/Authorization/AuthorizationMain';
import { Stack } from '@mui/material';

export default function Authorization() {

	useEffect(() => {
		document.title = 'Авторизация';
	}, []);

	return (
		<Stack height={'100vh'} justifyContent={'space-between'}>
			<AuthorizationHeader/>
			<AuthorizationMain/>
			<AuthorizationFooter/>
		</Stack>
	);
}
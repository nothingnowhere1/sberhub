import React from 'react';
import { Stack, Typography } from '@mui/material';
import RegistrationMainSection from './RegistrationMainSection';
import AuthorizationMainSection from './AuthorizationMainSection';

export default function AuthorizationMain() {

	return (
		<>
			<Stack direction={'row'} height={'100%'}
				   alignItems={'center'}
				   justifyContent={'space-evenly'}>
				<AuthorizationMainSection/>
				<Typography fontSize={'40px'} fontWeight={700} color={'#000000'}>
					ИЛИ
				</Typography>
				<RegistrationMainSection/>
			</Stack>
		</>
	);
}
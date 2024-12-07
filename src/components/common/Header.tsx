import { Stack } from '@mui/material';
import logo from '../../assets/logo.png';
import React from 'react';

export default function Header() {

	return (
		<Stack direction="row" justifyContent={'space-between'} alignItems={'center'} paddingY={1} paddingX={6}
			   bgcolor={'#FFD6EA'}>
			<img height={'75px'} src={logo} alt="logo"/>
		</Stack>
	);
}
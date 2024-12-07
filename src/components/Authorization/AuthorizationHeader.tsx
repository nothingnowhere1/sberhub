import React from 'react';
import { Stack } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import logo from '../../assets/logo.png';

export default function AuthorizationHeader() {

	return (

		<Stack direction="row" justifyContent={'space-between'} alignItems={'center'} paddingY={2} paddingX={10}
			   bgcolor={'#FFD6EA'}>
			<img height={'100px'} src={logo} alt="logo"/>
			<HelpOutlineIcon fontSize={'large'}/>
		</Stack>
	);
}
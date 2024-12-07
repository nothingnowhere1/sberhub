import React from 'react';
import { AllowEnum, AuthUrl, MaintenanceUrl, RouteInterface } from '../../Route';
import { Navigate } from 'react-router-dom';

export default function MiddlewareRoute({allow, maintenance, component}: RouteInterface) {
	const auth = true;

	if (maintenance) {
		return <Navigate to={MaintenanceUrl}/>;
	}

	if (allow === AllowEnum.AUTHORIZED && !auth) {
		return <Navigate to={AuthUrl}/>;
	}

	return (
		<>
			{component()}
		</>
	);
}
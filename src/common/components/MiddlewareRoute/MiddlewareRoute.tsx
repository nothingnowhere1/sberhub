import React from 'react';
import {Navigate} from 'react-router-dom';
import {AllowEnum, MaintenanceUrl, RouteInterface, RoutePool} from "../../../Route";
import {userApi} from "../../../modules/user/store/services/user.services";
import {Spinner} from "../Spinner/Spinner";

export default function MiddlewareRoute({allow, maintenance, component}: RouteInterface) {
    const auth = window.localStorage.getItem('token');

    if (maintenance) {
        return <Navigate to={MaintenanceUrl}/>;
    }

    const {
        data: dataCheck,
        isLoading: isLoadingCheck
    } = userApi.useCheckAuthQuery(auth?.slice(1, -1) ?? '', {skip: !auth});

    if (allow === AllowEnum.ALL) {
        return (
            <>
                {component()}
            </>
        );
    }

    if (!auth) return <Navigate to={RoutePool.AuthURl.url}/>;

    if (isLoadingCheck) {
        return <Spinner sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
    }

    if (!dataCheck) {
        window.localStorage.removeItem('token');
        return <Navigate to={RoutePool.AuthURl.url}/>
    }

    return (
        <>
            {component()}
        </>
    );
}
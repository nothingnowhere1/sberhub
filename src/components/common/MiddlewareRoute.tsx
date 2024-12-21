import React from 'react';
import {AllowEnum, MaintenanceUrl, RouteInterface, RoutePool} from '../../Route';
import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import * as sessionSelectors from "../../redux/selectors/session";

export default function MiddlewareRoute({allow, maintenance, component}: RouteInterface) {
    const auth = useSelector(sessionSelectors.isAuthorized)

    if (maintenance) {
        return <Navigate to={MaintenanceUrl}/>;
    }

    if (allow === AllowEnum.AUTHORIZED && !auth) {
        return <Navigate to={RoutePool.AuthURl.url}/>;
    }

    return (
        <>
            {component()}
        </>
    );
}
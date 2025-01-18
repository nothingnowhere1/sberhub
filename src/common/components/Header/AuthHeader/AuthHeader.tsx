import {useMediaQuery} from "@mui/material";
import React from "react";
import {DesktopAuthHeader} from "./DesktopAuthHeader";
import {MobileAuthHeader} from "./MobileAuthHeader";

export const AuthHeader = () => {

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

    if (isMobile) {
        return (
            <MobileAuthHeader/>
        )
    }

    return (
        <DesktopAuthHeader/>
    )
};
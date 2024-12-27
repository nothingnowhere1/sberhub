import React from 'react';
import {Link as Base, LinkProps} from "react-router-dom";

interface Props extends LinkProps {
    noLinkStyles?: boolean;
}

export default function Link({noLinkStyles, style, ...props}: Props) {
    return (
        <Base style={noLinkStyles ? {...style, cursor: 'pointer', textDecoration: 'none', color: 'inherit'} : {
            ...style, cursor: 'pointer'
        }} {...props}/>
    );
}
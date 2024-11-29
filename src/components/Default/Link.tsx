import { LinkProps } from '@mui/material';
import { Link as Base } from '@mui/material';
import React from 'react';

interface Props extends LinkProps {
    noLinkStyles?: boolean;
}

export default function Link({noLinkStyles, sx, ...props}: Props) {
    return (
        <Base sx={noLinkStyles ? {...sx, cursor: 'pointer', textDecoration: 'none', color: 'inherit'} : {
            ...sx,
            cursor: 'pointer'
        }} {...props}/>
    );
}
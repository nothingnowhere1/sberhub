import {Avatar as MuiAvatar, SxProps, Theme} from '@mui/material';
import React from 'react';

interface Props {
    size?: number;
    sx?: SxProps<Theme>;
    name?: string | null,
    letters?: string | null
    color?: any | null,
    src?: string | null,
    icon?: any | null
}

export default function Avatar({size = 40, sx, name, letters, color, src, icon}: Props) {
    const styles = {width: size, height: size, ...sx};

    if (src) return <MuiAvatar sx={styles} src={src}/>;

    if (letters) {
        return <MuiAvatar sx={{...styles, bgcolor: color}}>
            {letters}
        </MuiAvatar>;
    }

    if (name && name.length > 3) {
        const [firstName, lastName] = name.split(' ');
        const formattedName = `${firstName ? firstName[0] : ''}${lastName ? lastName[0] : ''}`.trim();

        return <MuiAvatar sx={{...styles, bgcolor: color}}>
            {formattedName}
        </MuiAvatar>;
    }

    if (icon) {
        return <MuiAvatar sx={{...styles}}>
            {icon}
        </MuiAvatar>;
    }

    return <MuiAvatar sx={styles}/>;
}
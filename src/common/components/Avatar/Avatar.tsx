import {Avatar as MuiAvatar, AvatarProps} from '@mui/material';
import React, {ReactNode} from 'react';

type Props = { size?: number, name?: string, letters?: string, icon?: ReactNode } & AvatarProps

export default function Avatar({size = 40, sx, name, letters, color, src, icon, ...props}: Props) {
    const styles = {width: size, height: size, ...sx};

    if (src) return <MuiAvatar sx={styles} src={src} {...props}/>;

    if (letters) {
        return <MuiAvatar sx={{...styles, bgcolor: color}} {...props}>
            {letters}
        </MuiAvatar>;
    }

    if (name && name.length > 3) {
        const [firstName, lastName] = name.split(' ');
        const formattedName = `${firstName ? firstName[0] : ''}${lastName ? lastName[0] : ''}`.trim();

        return <MuiAvatar sx={{...styles, bgcolor: color}} {...props}>
            {formattedName}
        </MuiAvatar>;
    }

    if (icon) {
        return <MuiAvatar sx={{...styles}} {...props}>
            {icon}
        </MuiAvatar>;
    }

    return <MuiAvatar sx={styles} {...props}/>;
}
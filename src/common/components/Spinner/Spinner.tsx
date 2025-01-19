import {Box, CircularProgress, SxProps, Theme} from '@mui/material';
import React from 'react';

interface Props {
    sx?: SxProps<Theme>;
}

export const Spinner = ({sx = {}}: Props) => {
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', ...sx, height: '100%',
        }}><CircularProgress/>
        </Box>
    );
};
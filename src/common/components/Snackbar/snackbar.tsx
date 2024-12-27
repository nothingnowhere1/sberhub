import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {dequeueSnackbar} from "./slice";
import {Box} from "@mui/material";
import * as snackbarSelectors from './selector';

const SnackbarComponent = () => {
    const dispatch = useDispatch();

    const ref = useRef<Record<string, number>>({});

    const snackbars = useSelector(snackbarSelectors.getSnackbars);

    useEffect(() => {
        const arraySnackbars = Object.values(snackbars);
        if (arraySnackbars.length === 0) return
        arraySnackbars.forEach((snackbar) => {
            if (snackbar.key in ref.current) return;
            ref.current[snackbar.key] = window.setTimeout(() => {
                dispatch(dequeueSnackbar(snackbar));
            }, snackbar.timeout);
        })
    }, [snackbars, dispatch]);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const key = e.currentTarget.id;
        if (key in ref.current) {
            clearTimeout(ref.current[key]);
            dispatch(dequeueSnackbar({key}));
        }
    }

    const colors = {
        success: '#4caf50',
        info: '#2196f3',
        warning: '#ff9800',
        error: '#f44336'
    }

    return (
        <Box sx={{
            position: 'fixed',
            bottom: 10,
            right: 40,
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1300,
            gap: 2,
        }}>
            {Object.values(snackbars).map((snackbar) => (
                <Box id={snackbar.key} key={snackbar.key} onClick={handleClick} sx={{
                    width: '200px',
                    background: colors[snackbar.severity],
                    color: '#fff',
                    borderRadius: 1,
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: 3,
                }}>
                    {snackbar.message}
                </Box>
            ))}
        </Box>
    );
};

export default SnackbarComponent;
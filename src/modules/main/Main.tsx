import React, {useEffect} from 'react';
import Header from "../../common/components/Header/Header";
import MainPageMain from "./components/MainPageMain";
import Footer from "../../common/components/Footer/Footer";
import {useDispatch} from "react-redux";
import {enqueueSnackbar} from "../../common/components/Snackbar/slice";


export default function Main() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(enqueueSnackbar({message: 'First Snackbar!', severity: 'success', timeout: 2000}));
        dispatch(enqueueSnackbar({message: 'Second Snackbar!', severity: 'info', timeout: 1000}));
        dispatch(enqueueSnackbar({message: 'Third Snackbar!', severity: 'warning', timeout: 10000}));
        dispatch(enqueueSnackbar({message: 'Fourth Snackbar!', severity: 'error', timeout: 15000}));
    };

    useEffect(() => {
        handleClick()
    }, []);

    return (
        <>
            <title>ConnectMe</title>
            <Header/>
            <MainPageMain/>
            <Footer/>
        </>
    );
}
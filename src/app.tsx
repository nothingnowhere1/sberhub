import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {RoutePool} from './Route';
import './basestyles.css';
import {Provider} from "react-redux";
import MiddlewareRoute from "./common/components/MiddlewareRoute/MiddlewareRoute";
import {store} from "./common/store/store";
import Snackbar from "./common/components/Snackbar/snackbar";
import {createTheme, ThemeProvider} from "@mui/material";

const Theme = (createTheme(
    {
        // palette: {
        //     primary: {
        //         main: '#FFD6EA',
        //     },
        // },
    },
))

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <Snackbar/>
                <BrowserRouter>
                    <Routes>
                        {Object.entries(RoutePool).map(([key, el]) => <Route key={key} path={el.url}
                                                                             Component={() => MiddlewareRoute(el)}/>)}
                        <Route path="*" Component={() => <Navigate to={RoutePool.MainURL.url}/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};

export default App;

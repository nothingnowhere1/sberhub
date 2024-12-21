import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {RoutePool} from './Route';
import MiddlewareRoute from './components/common/MiddlewareRoute';
import './basestyles.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {Object.values(RoutePool).map((el) => <Route key={el.url} path={el.url}
                                                                 Component={() => MiddlewareRoute(el)}/>)}
                    <Route path="*" Component={() => <Navigate to={RoutePool.MainURL.url}/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;

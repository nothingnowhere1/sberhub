import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
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
                    {RoutePool.map((el) => <Route key={el.url} path={el.url} Component={() => MiddlewareRoute(el)}/>)}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;

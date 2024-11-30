import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RoutePool } from './Route';
import MiddlewareRoute from './components/Default/MiddlewareRoute';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    RoutePool.map((el) => <Route key={el.url} path={el.url} Component={() => MiddlewareRoute(el)}/>)
                }
            </Routes>
        </BrowserRouter>
    );
};

export default App;

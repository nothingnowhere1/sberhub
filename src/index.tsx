/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from 'react';
import ReactDOM, {Container} from 'react-dom/client';

import App from './app';
import './locales/I18n';

export default () => <App/>;

let rootElement: ReactDOM.Root;

export const mount = (Component, element = document.getElementById('app')) => {
    rootElement = ReactDOM.createRoot(element as Container);
    rootElement.render(<Component/>);
    // @ts-ignore
    if (module.hot) {
        // @ts-ignore
        module.hot.accept('./app.tsx', () => {
            rootElement.render(<Component/>);
        });
    }
};

export const unmount = () => {
    rootElement.unmount();
};

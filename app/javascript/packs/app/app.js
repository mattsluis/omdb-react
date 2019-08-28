import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/containers/app/app';

import { Provider } from 'react-redux';

import store from 'store';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store = {store}>
            <App/>
        </Provider>,
        document.getElementById('app'),
    )
});
